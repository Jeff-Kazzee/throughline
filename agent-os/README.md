# Agent OS

This folder holds the reusable method layer for a Throughline workspace.

The Agent OS is the part of the framework that teaches agents how to work without loading the entire world into context. It gives them a small set of durable operating rules, then points them toward deeper documents only when the task requires them.

Throughline separates method from memory. The method belongs here. The user's private context belongs in ignored local files. The project's live truth belongs in the workspace that owns the work.

## Layers

Personas describe who is doing the work. The orchestrator owns intent, communication, synthesis, and final judgment. Worker roles exist only when a task is clear enough to delegate.

Retrieval describes how agents find context. Search produces candidates. Query produces grounded answers. Durable updates move through gates before they become adopted knowledge.

Quality describes how work earns trust. A useful check matches the risk: tests for code, source trails for research, privacy review for public artifacts, and human approval for sensitive memory.

Trust describes what the human can see. Plans, loaded context, decisions, checks, handoffs, and update artifacts make agent work inspectable instead of mysterious.

Workspaces describe boundaries. A coding repo, research vault, writing project, or personal brain should keep its own live state. Throughline connects to that truth instead of copying everything into one giant prompt.

Knowledge describes source-led learning. Sources should be credited, distilled, and promoted carefully. The framework should learn without becoming a warehouse of pasted material.

## Operating Rule

Keep always-on context small. Load rich context only when it is useful. Keep private memory private. Leave visible evidence when work changes.

## Read Order

Start with [../docs/framework.md](../docs/framework.md) when you need the full model.

Use `personas/README.md` when assigning agent roles.

Use `retrieval/README.md` when deciding what context to load.

Use `quality/README.md` before risky or public work.

Use `trust/README.md` when the user needs evidence, gates, or a handoff.

Use `workspaces/README.md` before connecting a project, vault, or content workspace.

Use `knowledge/source-ledger.md` when adding source-led learning.
