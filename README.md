# Throughline

Tiny Agent OS for visible, human-led AI work.

Hypothesis: agent systems should be cheap to load. Fewer files and fewer words leave more context for the actual task, which lets the agent work longer before the thread gets heavy.

Core split:

- **FW**: reusable method in this repo
- **WS**: live truth in owning workspace
- **PRIV**: local user/project context in ignored files

Core loop:

```txt
Ask -> retrieve -> act -> verify -> learn -> gate
```

Start prompt:

```md
Use Throughline. Start at medium depth.
```

Agent reads [AGENTS.md](AGENTS.md), asks before guessing, creates private `USER.md` / `MEMORY.md` only after confirmation, and keeps one visible state surface current.

Read [THROUGHLINE.md](THROUGHLINE.md) for full compressed model.

MIT.
