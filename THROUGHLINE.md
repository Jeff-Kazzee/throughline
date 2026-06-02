# THROUGHLINE

Compressed model.

## Why

Agents drift: guess, over-read, lose sources, leak memory, skip handoff.

Throughline fixes drift with small visible rules.

## Minimalism Hypothesis

Agent frameworks should spend fewer tokens on the framework so the agent can spend more tokens on the work.

Every always-on file competes with the user's task, repo state, source material, tests, and reasoning budget. A small framework loads faster, leaves more context window free, and reduces the odds that the agent reads ten pages of process instead of doing the next verified slice.

Throughline keeps separate files only when separation changes behavior:

- `README.md`: human front door.
- `AGENTS.md`: runtime contract.
- `THROUGHLINE.md`: compressed model.
- `USER.template.md` / `MEMORY.template.md`: private context starters.
- `.agents/skills/agent-system-bootstrap/SKILL.md`: executable bootstrap path.
- `docs/sources/credits.md`: provenance.

Everything else is folded into the compressed model unless it earns its own load cost.

## Grammar

- **FW**: reusable method. Public. Generic.
- **WS**: live truth. Owned by project/vault/repo.
- **PRIV**: ignored local context: user prefs, memory, secrets, plans.
- **VS**: one user-visible state surface.
- **Gate**: human approval before durable/high-risk change.
- **Loop**: Ask -> retrieve -> act -> verify -> learn -> gate.

## Loop

- **Ask**: state known/inferred/unknown; interview when unclear.
- **Retrieve**: load smallest useful context; search only finds candidates.
- **Act**: one useful slice.
- **Verify**: tests/build for code; sources for research; privacy/link/readability for docs.
- **Learn**: distill repeated lessons; keep sources.
- **Gate**: ask before memory, global rules, indexing, publishing, installs, git init/push, active hooks.

## Setup

Start:

```md
I think I know:
I am inferring:
I do not know:
Please confirm or correct:
```

Depth: low 3q, medium 5q, in-depth 8q, grill 10q then Gate.

Ask:

- WS purpose
- PRIV boundary
- teach vs do
- approval gates
- tools/folders
- VS target
- update cadence

## VS Minimum

```md
Focus:
Status:
Next:
Open decisions:
Blockers:
Checks:
Sources:
Updated:
```

Cadence: daily, session-end, milestone, manual, disabled.

Update artifact sections: outcome, decisions, checks, blockers, next, privacy note.

## Run Log

Use when task spans decisions, checks, or handoff.

```md
Date:
Agent:
Task:
Goal:
Acceptance:
Context loaded:
Human gates:
VS:
Update cadence:
Actions:
Checks run:
Result:
Skipped:
Residual risk:
Learning: reusable / WS-local / PRIV
Next:
Update artifact:
Privacy review:
```

## Workspace Adapter

Adapter points to truth; it does not duplicate WS.

```md
Workspace:
Purpose:
Location:
Source of truth:
VS:
Update cadence:
HTML target:
Sensitivity:
Current projects:
Agent rules:
Quality gates:
Dependency boundary:
Human gates:
May load:
Must not load:
```

## Roles

- **Orchestrator**: intent, scope, context budget, gates, synthesis, final answer.
- **Scout**: paths, reasons, confidence, freshness, sensitivity, gaps.
- **Researcher**: fact / inference / recommendation with credits.
- **Builder**: one slice + changed paths + checks.
- **Verifier**: pass/fail/skipped/risk; no silent edits.
- **Reviewer**: findings first.
- **Archivist**: notes, ledgers, handoffs; PRIV separate.
- **Product Partner**: interview before PRD, architecture, issues, code.

## Source Learning

For source drops record:

- path/URL
- goal
- sensitivity
- affected WS
- action: summarize, critique, compare, index, extract tasks

Distill: pointer kept, short quotes, fact/inference/recommendation split, no raw transcript dumps, reusable lessons only to FW.

Ledger row:

```md
| Source | Status | Sensitivity | Distilled To | Notes |
```

Status: raw, triaged, distilled, indexed, archived, blocked.

Sensitivity: public, internal, private, sensitive, secret, unknown.

## External Models

Before external models/tools, classify sensitivity. Unknown -> Gate.

## Hooks

Specs only unless user enables:

- pre-install
- pre-subagent-batch
- pre-public-export
- pre-global-promotion
- source-drop-detected
- post-run-learning
- post-session-update

Warn before block. Do not log PRIV.

## Prompt Contracts

Bootstrap:

```md
Use agent-system-bootstrap.
Target:
Goal:
WS type:
Depth:
Public template or private brain:
VS:
Cadence:
```

Source drop:

```md
Source:
Goal:
Sensitivity:
Affected WS:
Action:
```

Orchestrated batch:

```md
Task:
Why workers:
Allowed context:
Forbidden actions:
Expected outputs:
Human gates:
```

Workers never become product owners. Orchestrator merges, resolves conflicts, preserves source trail.

## Update Artifact

Default HTML shape:

```html
<main>
  <header>
    <p>Workspace | Date | Audience</p>
    <h1>Update title</h1>
    <p>One-sentence outcome.</p>
  </header>
  <section><h2>Outcome</h2></section>
  <section><h2>Decisions</h2></section>
  <section><h2>Checks</h2></section>
  <section><h2>Blockers</h2></section>
  <section><h2>Next Actions</h2></section>
  <section><h2>Privacy Note</h2></section>
</main>
```

## Bootstrap Output

- files changed
- what stayed private
- public-safe items
- open questions
- VS/update prefs
- checks run

No dependency installs, git init, push, active hooks, sensitive indexing, or public export without Gate.

## Contribution Rules

Good: clearer interviews, privacy gates, source ledger, persona contracts, command specs, quality checks, sanitized examples.

Avoid: giant prompts, raw transcripts in always-on docs, tool lock-in, hardcoded names, secret examples, hidden/brittle automation, project-specific rules promoted without evidence.
