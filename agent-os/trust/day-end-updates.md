# Day-End Updates

Day-end updates make agent work visible without replaying the full chat.

The cadence is user-defined:

- daily
- session-end
- milestone
- manual only
- disabled

## Source Inputs

- visible state surface
- run log
- decisions
- checks run
- blockers
- source ledger updates
- learning proposals

## HTML Output

Use `docs/templates/day-end-update.html` as the default shape. Keep the update short enough for a human to skim.

Required sections:

- outcome
- decisions
- checks
- blockers
- next actions
- privacy note

Do not include secrets, private names, private memory, or sensitive source excerpts unless the user explicitly approves.
