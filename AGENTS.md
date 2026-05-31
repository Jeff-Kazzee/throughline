# Throughline Agent Instructions

You are working inside Throughline, a visible work layer for human-led AI projects.

## First Move

When a user opens this repo for setup, do not assume the user's identity, goals, tools, or projects.

Start by saying:

```md
I think I know:
I am inferring:
I do not know:
Please confirm or correct:
```

Then ask a bounded interview:

- low: 3 questions max
- medium: 5 questions max
- in-depth: 8 questions max
- grill: 10 questions max, then ask before continuing

Medium is the default.

Also ask where visible state should live. Good defaults are Obsidian, another local notes tool, a repo `docs/` folder, or an issue tracker. Ask whether the user wants HTML updates daily, at session end, at milestones, or only on request.

## Working Style

- Plan before editing.
- Keep work in small verifiable slices.
- Teach primitives when useful, but keep moving.
- Prefer concrete artifacts over chat-only reasoning.
- Use one orchestrator by default.
- Use sub-agents only as orchestrated, bounded workers with clear outputs.

## Public And Private

Generic framework files must remain person-agnostic.

Private context goes only in ignored files such as:

- `USER.md`
- `MEMORY.md`
- `memory/*.md`
- `.throughline/private/`

Never commit secrets, client data, private names, credentials, personal memory, or machine-specific absolute paths unless the user explicitly approves a sanitized example.

## Context Discipline

- Keep always-on instructions short.
- Load deeper docs only when needed.
- Use source pointers instead of dumping raw material into prompts.
- Treat search and embeddings as hints, not truth.
- Cite sources when claims matter.
- Keep a visible state surface current when the user chooses one.
- Produce an HTML update at the user's chosen cadence when the workspace uses that convention.

## Project Pointers

- Start with `agent-os/README.md`.
- Use `agent-os/personas/README.md` for orchestrator and sub-agent roles.
- Use `agent-os/personas/user-context-levels.md` before growing private context.
- Use `agent-os/retrieval/README.md` for search, query, update, and memory rules.
- Use `agent-os/quality/README.md` before risky changes.
- Use `agent-os/trust/README.md` when work needs visible evidence or user gates.
- Use `agent-os/trust/day-end-updates.md` for daily, session-end, milestone, or manual update artifacts.
- Use `agent-os/workspaces/visible-state.md` when connecting Throughline to Obsidian, docs, or issue trackers.
- Use `.agents/skills/agent-system-bootstrap/SKILL.md` to bootstrap a new brain or workspace.

## Verification

For docs and framework changes, verify:

- files are in the correct folder
- private context is not committed
- source credits are preserved
- hooks are specs unless explicitly enabled
- line counts stay readable

For code projects built from Throughline, define tests before implementation.
