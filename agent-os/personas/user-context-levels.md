# User Context Levels

Use this before creating or updating private user context.

## Progressive Personalization

Start with what the agent already knows from current context or local private files. Present it as a draft, not certainty.

```md
I think I know:
I am inferring:
I do not know:
Please confirm or correct:
```

## Interview Depths

- **Low**: 3 questions max.
- **Medium**: 5 questions max. Default.
- **In-depth**: 8 questions max.
- **Grill**: 10 questions max, then ask before continuing.

## Starter Questions

Pick only what is missing:

- What should the agent call you?
- What work should this workspace support?
- What should stay private?
- How much should the agent teach versus simply do?
- When should the agent pause for approval?
- What tools, projects, or folders already matter?
- What should never be copied into the public template?
- How deep should this interview be?

## Storage Rule

Store reusable method in public framework files. Store personal context in ignored private files.
