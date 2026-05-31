# bootstrap-agent-system

Use this command to create or update a Throughline workspace.

## Prompt

```md
Use the `agent-system-bootstrap` skill.

Target folder:
Goal:
Workspace type:
Interview depth: low | medium | in-depth | grill
Public template or private brain:
Visible state surface: Obsidian | local docs | issue tracker | other
HTML update cadence: daily | session-end | milestone | manual only | none

Before editing, state what you know, infer, do not know, and need confirmed.
Keep generic framework files person-agnostic.
Put confirmed personal context only in ignored private files.
Do not install dependencies, initialize git, push public, or enable active hooks without explicit approval.
```

## Output

- Created/changed paths.
- Privacy boundary summary.
- Open questions.
- Verification result.
