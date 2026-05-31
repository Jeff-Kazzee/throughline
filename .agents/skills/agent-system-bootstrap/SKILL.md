---
name: agent-system-bootstrap
description: Bootstrap a generic or private Throughline workspace with interview gates, private memory templates, personas, commands, hooks, retrieval, quality, trust, visible state, and source-ledger surfaces.
---

# Agent System Bootstrap

Use this when creating or adapting a Throughline workspace.

## Workflow

1. Read the target folder's nearest `AGENTS.md` if it exists.
2. Identify workspace type: personal, code, content, research, product, mixed, or public template.
3. State what is known, inferred, unknown, and needs confirmation.
4. Ask for interview depth if unclear:
   - low: 3 questions max
   - medium: 5 questions max
   - in-depth: 8 questions max
   - grill: 10 questions max, then ask before continuing
5. Create only the scaffold needed now.
6. Keep public/generic files person-agnostic.
7. Put private context in ignored files only after confirmation.
8. Ask where visible state should live: Obsidian, another notes app, repo docs, issue tracker, dashboard, or other.
9. Ask whether HTML updates should be daily, session-end, milestone, manual only, or disabled.
10. Add source, retrieval, quality, trust, persona, command, and hook surfaces.
11. Verify paths, privacy, and public-safety boundaries.

## Personalization Rule

If the agent already knows a low-risk fact, it may draft it for confirmation.

```md
I think I know:
I am inferring:
I do not know:
Please confirm or correct:
```

Never guess secrets, private relationships, client data, or sensitive preferences.

## Public Template Rule

Public files may include:

- generic folder structure
- source crediting pattern
- persona contracts
- command specs
- hook specs
- retrieval/query/update model
- quality gates
- visible-state and HTML-update patterns

Public files must not include:

- private names
- personal memories
- secrets
- client data
- machine-specific absolute paths
- project-specific facts presented as universal rules

## Verification

Report:

- files created or changed
- what stayed private
- what is safe for public template use
- questions still open
- visible-state and HTML-update preferences
- hooks/commands created as specs versus active automation

Do not install dependencies, initialize git, push public, or enable active hooks unless the user explicitly approves.
