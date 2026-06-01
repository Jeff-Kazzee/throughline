# Getting Started

Throughline begins with a conversation, not a configuration file.

The first job of the agent is to learn enough about the user and the workspace to act usefully without pretending it knows more than it does. The framework starts by asking bounded questions, creating private local context only after confirmation, and choosing a visible state surface the human can inspect later.

## 1. Open The Repo With Your Agent

Clone or fork the repo, then open it with the agent you want to use.

Start with this prompt:

```md
Use Throughline. Start by asking me the setup questions at medium depth.
```

The agent should read `AGENTS.md` first. It should not assume your identity, tools, projects, or preferences. A good first response names what the agent already knows, what it is inferring, what it does not know, and what needs confirmation.

## 2. Choose Interview Depth

Throughline uses bounded interviews because setup should create useful context without turning into a therapy intake form.

The default depth is medium. Low depth is for quick setup. In-depth is for serious personal or team workspaces. Grill mode is for users who want the agent to pressure-test assumptions, but even grill mode has a stop point.

The levels are:

- low: 3 questions max
- medium: 5 questions max
- in-depth: 8 questions max
- grill: 10 questions max, then ask before continuing

The agent may draft low-risk facts for confirmation, but it must not invent sensitive details. It should never guess secrets, client data, private relationships, credentials, or personal memory.

## 3. Create Private Context

Public framework files stay generic. Private context goes into ignored local files.

Use `USER.template.md` for confirmed user preferences, learning needs, working style, and boundaries. Use `MEMORY.template.md` for durable workspace memory. Use `memory/` for episodic notes only when the workspace needs them.

The important rule is simple: private knowledge should help the local agent work better without leaking into the public framework.

## 4. Pick A Visible State Surface

AI work gets confusing when the only source of truth is a chat transcript. Throughline asks the user where project state should live.

Good options include Obsidian, a local docs folder, a GitHub issue tracker, a project board, or a future dashboard. The tool matters less than the rule: the human must be able to see the current state without replaying the whole session.

At minimum, the visible state should answer:

- What are we doing?
- What changed recently?
- What decisions are open?
- What checks have run?
- What is blocked?
- What happens next?

## 5. Use The Operating Loop

Throughline work follows one loop:

```txt
Ask -> retrieve -> act -> verify -> learn -> update with a gate
```

The agent asks before it assumes. It retrieves only the context it needs. It acts in small slices. It verifies the result. It captures lessons. It proposes durable updates instead of silently rewriting the system.

That loop is what keeps agent work visible and resumable.

## 6. Keep Public And Private Apart

Before publishing, exporting, or promoting any file, check the privacy boundary.

Public files may include reusable methods, source credits, command specs, hook specs, quality gates, and generic templates. Public files must not include personal memory, secrets, client data, private planning, machine-specific paths, or project-specific facts presented as universal rules.

When in doubt, keep the file local and ignored until a human reviews it.
