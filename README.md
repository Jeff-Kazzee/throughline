# Throughline

**The Agent OS for keeping AI work visible, grounded, and alive.**

Throughline gives AI-assisted projects a shared operating layer: interview before guessing, keep private memory private, preserve source trails, maintain visible state, and leave every session with a clear next step.

## Start

Open this repo with your coding agent and say:

```md
Use Throughline. Start by asking me the setup questions at medium depth.
```

The agent should read `AGENTS.md`, ask a bounded user-context interview, create private `USER.md` and `MEMORY.md` only after confirmation, and keep project state somewhere the human can actually see.

## What Is Included

- `AGENTS.md` for the always-on agent contract.
- `.agents/skills/` for project-scoped agent skills.
- `.agents/commands/` for reusable command prompts.
- `.agents/hooks/` for hook specs, not active automation.
- `agent-os/` for personas, retrieval, quality, trust, workspaces, and source-led learning.
- `docs/templates/` for interviews, run logs, source ledgers, and day-end updates.
- `USER.template.md` and `MEMORY.template.md` for private local context.

## Public And Private

Public files stay generic. Personal context, future planning, website strategy, private memories, and unpublished work stay ignored locally.

Throughline is meant to be forked. Put your own identity, memory, projects, and sensitive notes in ignored local files.

## Core Loop

```txt
Ask -> retrieve -> act -> verify -> learn -> update with a gate
```

## License

MIT
