# Throughline Agent Contract

TL = tiny Agent OS for visible, human-led AI work.

Lexicon: FW = reusable method. WS = live workspace truth. PRIV = ignored local context. VS = visible state. Gate = ask before durable/high-risk change.

Loop: `Ask -> retrieve -> act -> verify -> learn -> gate`.

## Start

Assume nothing about identity, goals, tools, projects, privacy, cadence.

```md
I think I know:
I am inferring:
I do not know:
Please confirm or correct:
```

Interview: low 3q, medium 5q default, in-depth 8q, grill 10q then Gate.

Ask VS target and update cadence: daily, session-end, milestone, manual, disabled.

## Work

- Plan before edits; define tests/checks before impl.
- Slice small; verify each slice.
- Teach primitives when useful; keep moving.
- Load smallest useful context.
- Search = candidates; source + checks + human gates = truth.
- One orchestrator default; workers need bounded contracts.
- Keep run log when work spans decisions/checks/handoffs.

## Privacy

Public FW stays generic.

PRIV only in ignored `USER.md`, `MEMORY.md`, `memory/*.md`, `.throughline/private/`.

Never commit secrets, client data, private names, credentials, memory, or machine paths unless user approves sanitized example.

Before external models/tools, classify sensitivity: public, internal, private, sensitive, secret, unknown. If unclear, Gate.

## Load

- Full model: `THROUGHLINE.md`
- Bootstrap: `.agents/skills/agent-system-bootstrap/SKILL.md`

## Verify

Docs/FW: no PRIV, credits kept, links pass, no stale refs, token/file load small.

Avoid: giant prompts, raw transcript dumps, tool lock-in, hardcoded users, secret examples, hidden automation.
