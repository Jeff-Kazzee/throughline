# start-user-context

Use this command to grow private user context without over-questioning.

## Prompt

```md
Start a bounded user-context interview.

First say:
- what you already know
- what you infer
- what you do not know
- what needs confirmation

Then ask questions at this depth:
- low: 3 max
- medium: 5 max
- in-depth: 8 max
- grill: 10 max, then ask before continuing

Include visible-state preferences:
- where the user wants project state to live
- whether HTML updates should be daily, session-end, milestone, manual only, or disabled

Store only confirmed personal facts. Keep public framework docs person-agnostic.
```

## Output

- Confirmed facts.
- Inferences still needing confirmation.
- Private storage target.
- Public-template exclusions.
- Visible-state preference.
- HTML update cadence.
