# Quality

Quality is the control layer between agent work and durable change.

## Primitives

- **Feedback sensors**: tests, typecheck, lint, build checks, link checks.
- **Semantic evals**: reviewed examples for meaning-sensitive behavior.
- **Refactor boundaries**: green, yellow, and red zones.
- **Provenance trails**: task, model, agent, tool, source, and human gate.
- **Agent surface inventory**: skills, commands, hooks, tools, and permissions.

## Before Risky Work

Ask:

- What can break?
- What source defines correct behavior?
- What tests or checks prove it?
- What needs human approval?
- What should be logged for future agents?

## Public Template Rule

Do not import every quality tool. Preserve sources and choose controls only when they match a real failure mode.
