---
name: agent-system-bootstrap
description: Bootstrap a Throughline WS with interview gates, PRIV files, VS, source trail, checks, and update cadence.
---

# Agent System Bootstrap

Use when creating/adapting TL workspace.

## Flow

1. Read nearest `AGENTS.md`.
2. Read `THROUGHLINE.md` if present.
3. Classify WS: personal, code, content, research, product, mixed, public template.
4. State:

```md
I think I know:
I am inferring:
I do not know:
Please confirm or correct:
```

5. Pick depth: low 3q, medium 5q default, in-depth 8q, grill 10q then Gate.
6. Ask WS purpose, PRIV boundary, VS target, update cadence, teach/do, approval gates.
7. Scaffold only needed files.
8. Keep public FW generic.
9. Create PRIV only after confirmation.
10. If work spans decisions/checks, create or update run log.
11. Verify paths, privacy, public-safety boundary.

Never guess secrets, client data, private relationships, credentials, or sensitive prefs.

## Boundary

Public may include generic method, roles, commands, hook specs, retrieval/query/update model, gates, VS/update templates.

Public must not include private names, memories, secrets, client data, machine paths, or project facts as universal rules.

## Report

- files changed
- what stayed private
- public-safe items
- open questions
- VS/update prefs
- checks run
- run log/update artifact, if used

Do not install deps, init git, push public, or enable active hooks without user approval.
