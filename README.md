# Throughline

**The Agent OS for keeping AI work visible, grounded, and alive.**

Throughline gives AI-assisted projects a shared operating layer. It helps agents interview before guessing, keep private memory private, preserve source trails, maintain visible state, and leave every session with a clear next step.

It is not a model, editor, database, or notes app. It is the connective tissue around those tools: a small framework that keeps human intent, agent work, source material, and project memory from drifting apart.

## Start

Open this repo with your coding agent and say:

```md
Use Throughline. Start by asking me the setup questions at medium depth.
```

The agent should read `AGENTS.md`, ask a bounded user-context interview, create private `USER.md` and `MEMORY.md` only after confirmation, and keep project state somewhere the human can actually see.

For a fuller setup walkthrough, read [docs/getting-started.md](docs/getting-started.md).

## What Is Included

- `AGENTS.md` for the always-on agent contract.
- `.agents/skills/` for project-scoped agent skills.
- `.agents/commands/` for reusable command prompts.
- `.agents/hooks/` for hook specs, not active automation.
- `agent-os/` for personas, retrieval, quality, trust, workspaces, and source-led learning.
- `docs/templates/` for interviews, run logs, source ledgers, and day-end updates.
- `USER.template.md` and `MEMORY.template.md` for private local context.

Read [docs/framework.md](docs/framework.md) for the full operating model.

## Public And Private

Public files stay generic. Personal context, future planning, website strategy, private memories, and unpublished work stay ignored locally.

Throughline is meant to be forked. Put your own identity, memory, projects, and sensitive notes in ignored local files.

## Core Loop

```txt
Ask -> retrieve -> act -> verify -> learn -> update with a gate
```

## License

MIT
