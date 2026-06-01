/* =========================================================================
   Throughline — the trace
   One continuous path routed through the section nodes. The drawn frontier
   tracks the scroll position directly (no easing lag, no per-frame filter),
   from the top of the page to the bottom. The draw is monotonic: scrolling
   back up holds what you have already seen. The thread, once kept, stays kept.
   ========================================================================= */
(function () {
  'use strict';

  var svg   = document.getElementById('trace');
  var layer = document.querySelector('.trace-layer');
  var line  = document.getElementById('trace-line');
  var fork  = document.getElementById('trace-fork');
  var head  = document.getElementById('trace-head');
  var nodes = Array.prototype.slice.call(document.querySelectorAll('[data-node]'));

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var totalLen = 0;
  var docH = 0;
  var highWater = 0;   // furthest fraction [0,1] the thread has been drawn to
  var ticking = false;

  // Arc-length <-> document-Y lookup, so the drawn frontier tracks the
  // reader's scroll position rather than raw path length (the line weaves
  // sideways, so equal length is not equal vertical distance).
  var mapY = [];       // strictly increasing document Y
  var mapL = [];       // first arc-length that reaches that Y
  var maxPathY = 1;
  var nodePos = [];    // {el, y} per node, so each lights as the line reaches it

  /* ---- geometry helpers ---------------------------------------------- */

  function measureDocH() {
    return Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
  }

  function pageRectCenter(el) {
    var r = el.getBoundingClientRect();
    return {
      x: r.left + r.width / 2 + window.scrollX,
      y: r.top + r.height / 2 + window.scrollY
    };
  }

  // Catmull-Rom through the points, emitted as smooth cubic beziers.
  function smoothPath(pts) {
    if (pts.length < 2) return '';
    var d = 'M ' + pts[0].x.toFixed(1) + ' ' + pts[0].y.toFixed(1);
    for (var i = 0; i < pts.length - 1; i++) {
      var p0 = pts[i - 1] || pts[i];
      var p1 = pts[i];
      var p2 = pts[i + 1];
      var p3 = pts[i + 2] || p2;
      var c1x = p1.x + (p2.x - p0.x) / 6;
      var c1y = p1.y + (p2.y - p0.y) / 6;
      var c2x = p2.x - (p3.x - p1.x) / 6;
      var c2y = p2.y - (p3.y - p1.y) / 6;
      d += ' C ' + c1x.toFixed(1) + ' ' + c1y.toFixed(1) +
           ' '  + c2x.toFixed(1) + ' ' + c2y.toFixed(1) +
           ' '  + p2.x.toFixed(1) + ' ' + p2.y.toFixed(1);
    }
    return d;
  }

  /* ---- scroll -> drawn fraction --------------------------------------- */

  function scrollTarget() {
    var vh = window.innerHeight;
    var maxScroll = Math.max(1, docH - vh);
    // A small lead so the frontier sits just below your reading line, and the
    // thread reaches its end exactly when you reach the bottom of the page.
    var lead = vh * 0.22;
    var t = (window.scrollY + lead) / (maxScroll + lead);
    return t < 0 ? 0 : (t > 1 ? 1 : t);
  }

  function apply(frac) {
    line.style.strokeDashoffset = totalLen * (1 - frac);
  }

  // Sample the path once and record, for each new lowest point reached, the
  // arc-length at which it first gets there. Side-to-side weaves are ignored.
  function buildYMap() {
    mapY = [];
    mapL = [];
    var N = 260;
    var maxY = -Infinity;
    for (var i = 0; i <= N; i++) {
      var l = totalLen * i / N;
      var p = line.getPointAtLength(l);
      if (p.y > maxY) { maxY = p.y; mapY.push(p.y); mapL.push(l); }
    }
    maxPathY = mapY.length ? mapY[mapY.length - 1] : 1;
  }

  function lengthAtY(ty) {
    if (!mapY.length) return 0;
    if (ty <= mapY[0]) return mapL[0];
    if (ty >= mapY[mapY.length - 1]) return mapL[mapL.length - 1];
    for (var i = 1; i < mapY.length; i++) {
      if (mapY[i] >= ty) {
        var t = (ty - mapY[i - 1]) / (mapY[i] - mapY[i - 1]);
        return mapL[i - 1] + t * (mapL[i] - mapL[i - 1]);
      }
    }
    return mapL[mapL.length - 1];
  }

  // The frontier's document-Y moves linearly with scroll: tracks the reader.
  function fracForScroll() {
    var targetY = scrollTarget() * maxPathY;
    return lengthAtY(targetY) / totalLen;
  }

  // Draw to the frontier, light each node the moment it is passed, and ride
  // the glow head along the thread at the leading point.
  function paint() {
    apply(highWater);
    if (!totalLen) return;
    var p = line.getPointAtLength(highWater * totalLen);
    for (var i = 0; i < nodePos.length; i++) {
      if (nodePos[i].y <= p.y + 2) nodePos[i].el.classList.add('is-on');
    }
    if (head) {
      // Only glows when it is actually leading the draw; fades if you scroll
      // back up above the frontier so it never parks mid-screen as a stray dot.
      var atFrontier = (highWater - fracForScroll()) < 0.02;
      var show = highWater > 0.012 && highWater < 0.985 && atFrontier;
      head.style.transform = 'translate(' + p.x.toFixed(1) + 'px,' + p.y.toFixed(1) + 'px)';
      head.style.opacity = show ? '1' : '0';
    }
  }

  function render() {
    ticking = false;
    if (reduceMotion) { apply(1); return; }
    var f = fracForScroll();
    if (f > highWater) highWater = f;   // monotonic: never un-draw
    paint();
  }

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(render);
  }

  /* ---- build / rebuild the whole trace -------------------------------- */

  function build() {
    var docW = document.documentElement.clientWidth;
    docH = measureDocH();

    layer.style.height = docH + 'px';
    svg.setAttribute('width', docW);
    svg.setAttribute('height', docH);
    svg.setAttribute('viewBox', '0 0 ' + docW + ' ' + docH);

    // The path runs through nodes AND swerve waypoints, in document order.
    var pathEls = Array.prototype.slice.call(
      document.querySelectorAll('[data-node], [data-waypoint]')
    );
    var pts = pathEls.map(pageRectCenter);
    nodePos = nodes.map(function (n) { return { el: n, y: pageRectCenter(n).y }; });

    // Let the line leave the frame just past the final node.
    var exitNode = document.querySelector('[data-exit]');
    if (exitNode && pts.length) {
      var e = pageRectCenter(exitNode);
      pts.push({ x: docW + 40, y: e.y + 36 });
    }

    var d = smoothPath(pts);
    line.setAttribute('d', d);

    totalLen = line.getTotalLength();
    line.style.strokeDasharray = totalLen;
    buildYMap();

    // The single fork: a faint dashed branch for "later".
    var forkNode = document.querySelector('[data-fork]');
    if (forkNode) {
      var f = pageRectCenter(forkNode);
      fork.setAttribute('d',
        'M ' + f.x.toFixed(1) + ' ' + f.y.toFixed(1) +
        ' C ' + (f.x + 60) + ' ' + (f.y + 36) +
        ' '   + (f.x + 130) + ' ' + (f.y + 18) +
        ' '   + (f.x + 210) + ' ' + (f.y + 64));
    }

    // Snap straight to the current scroll position (no draw-in on load).
    if (reduceMotion) { highWater = 1; apply(1); activateAll(); return; }
    var f = fracForScroll();
    if (f > highWater) highWater = f;
    paint();
  }

  /* ---- node activation handled by lightNodes(), driven by the frontier */

  function activateAll() {
    nodes.forEach(function (n) { n.classList.add('is-on'); });
  }

  /* ---- theme toggle: dark line <-> drawn ink -------------------------- */

  function initTheme() {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;

    function sync() {
      var light = document.documentElement.getAttribute('data-theme') === 'light';
      btn.setAttribute('aria-pressed', String(light));
      btn.setAttribute('aria-label', light ? 'Switch to dark mode' : 'Switch to light mode');
    }
    sync();

    btn.addEventListener('click', function () {
      var light = document.documentElement.getAttribute('data-theme') === 'light';
      var next = light ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('tl-theme', next); } catch (e) {}
      sync();
    });
  }

  /* ---- wiring --------------------------------------------------------- */

  var resizeTimer;
  function onResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(build, 120);
  }

  function init() {
    // Always begin a session at the top so the thread draws from the start,
    // rather than inheriting a restored mid-page scroll on reload.
    try { history.scrollRestoration = 'manual'; } catch (e) {}
    window.scrollTo(0, 0);

    initTheme();
    build();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    // Fonts change metrics; rebuild once they settle.
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () { setTimeout(build, 40); });
    }
    window.addEventListener('load', function () { setTimeout(build, 120); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
