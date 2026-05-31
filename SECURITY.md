# Security

Throughline is a documentation and workflow template. It does not run active automation by default.

## Private Data

Do not commit:

- secrets or credentials
- private names
- client data
- personal memory
- raw source material with unclear sensitivity
- machine-specific paths that reveal private structure

Use `USER.md`, `MEMORY.md`, `memory/*.md`, and `.throughline/private/` for local-only context. These are ignored by default.

## Hooks

Hooks in `.agents/hooks/` are specs, not enabled automation. Review and approve any hook before wiring it into a tool.

## External Models

Before sending local context to external models, classify sensitivity:

- public
- internal
- private
- sensitive
- secret

When unclear, ask the user first.
