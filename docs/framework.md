# Framework

Throughline is an operating layer for agent work.

It does not try to be the model, the editor, the database, the notes app, or the project manager. It gives those tools a shared structure so the human and the agents can keep working from the same thread of intent.

The framework exists because powerful agents can still lose the plot. They can work from stale assumptions, load too much context, bury source material in chat, make private memory hard to audit, or finish a session without leaving a clear handoff. Throughline treats those as system design problems, not personality flaws in the model.

## The Core Idea

Every serious AI-assisted project needs three kinds of knowledge.

Reusable method belongs in the framework. This includes agent roles, command specs, hook specs, quality gates, source-led learning rules, and retrieval patterns.

Live project truth belongs in the workspace. This includes the current goal, open decisions, active tasks, checks, blockers, and local conventions.

Private context belongs in ignored local files. This includes user preferences, personal memory, sensitive notes, unpublished plans, and workspace-specific facts that should not be copied into the public framework.

Throughline works when those three kinds of knowledge stay separate and connected.

## The Operating Loop

The framework uses one loop:

```txt
Ask -> retrieve -> act -> verify -> learn -> update with a gate
```

Ask means the agent states uncertainty before it fills gaps with assumptions. It should interview the user when the shape of the task is unclear, especially during setup, product planning, risky changes, or public work.

Retrieve means the agent loads the smallest useful set of context. It should search for relevant files, read source ledgers, inspect workspace state, and avoid dumping entire folders into the context window.

Act means the agent does real work in a small slice. Throughline is not a philosophy document that stops at advice. The framework exists so agents can build, review, research, write, and maintain with better control.

Verify means the agent checks the work through the right surface. Code needs tests or build checks. Research needs sources. Writing needs review against the intended audience. Framework changes need privacy and line-budget checks.

Learn means the agent captures useful lessons without turning every observation into permanent doctrine. A failed command, a better prompt, or a repeated mistake can become a proposed update.

Update with a gate means durable changes are deliberate. Agents may propose changes to memory, source ledgers, workspace rules, or framework docs, but high-impact updates require human approval.

## The Layers

Throughline is organized into layers so agents can load what they need and ignore the rest.

`AGENTS.md` is the always-on contract. It tells the agent how to start, how to respect privacy, how to keep context small, and where to find deeper instructions.

`.agents/skills/` contains project-scoped skills. A skill should describe a repeatable capability and load only when the task calls for it.

`.agents/commands/` contains reusable command prompts. Commands are not magic; they are concise contracts that make recurring workflows easier to start consistently.

`.agents/hooks/` contains hook specs. In v0 these are documentation, not active automation. They describe where future guardrails can warn before installs, public exports, sub-agent batches, global promotions, or learning updates.

`agent-os/personas/` defines roles. The orchestrator owns the conversation and synthesis. Worker roles can scout context, research, build, verify, review, or archive, but they should be bounded by clear task contracts.

`agent-os/retrieval/` defines how the agent finds context. Search results are candidates, not truth. Query results should point back to source files. Updates move through states such as observed, proposed, verified, adopted, indexed, and superseded.

`agent-os/quality/` defines the control layer. Quality is not one tool. It is the habit of asking what can break, what source defines correctness, what check proves the result, and what needs human review.

`agent-os/trust/` defines visible work. Trust comes from plans, source trails, loaded context, checks run, human gates, handoffs, and update artifacts the user can inspect.

`agent-os/workspaces/` defines boundaries. The framework owns reusable method. Each workspace owns its live truth. A coding project, writing workspace, research vault, or personal brain should be connected through an adapter, not absorbed into one giant prompt.

`agent-os/knowledge/` defines source-led learning. Imported material should be credited, summarized, and promoted only when it becomes reusable guidance.

## Visible State

Throughline treats visible state as a trust primitive.

The user should not need to scrape a chat transcript to know what happened. A workspace should have one place where current state is visible. That place may be Obsidian, GitHub issues, a docs folder, a project board, or a future dashboard.

The surface should be boringly useful. It should show the current focus, next action, open decisions, blockers, recent checks, recent sources, and last update. It should link to deeper documents rather than duplicating them.

Visible state is how the agent proves it has not drifted.

## Private Memory

Throughline supports memory, but it does not worship memory.

Private memory is valuable when it helps the agent respect the user's preferences, project boundaries, and repeated lessons. It becomes dangerous when it is copied into public files, treated as universal truth, or loaded into every session whether or not it matters.

That is why private memory belongs in ignored files such as `USER.md`, `MEMORY.md`, `memory/*.md`, and `.throughline/private/`. The public repo provides templates and rules. The user's actual context stays local unless they choose otherwise.

## Source-Led Learning

The framework should learn from sources without swallowing them whole.

A source may be a paper, article, repository, benchmark task, transcript, postmortem, or project note. Throughline asks the agent to record where the source came from, why it matters, what was learned, what is uncertain, and where the lesson should live.

Raw source material should not become always-on prompt text. Good framework knowledge is distilled, credited, and short enough to be used.

## Orchestration

Throughline can support sub-agents, but it does not make sub-agents the center of the system.

The orchestrator is responsible for intent, scope, user communication, final synthesis, and quality. Worker agents are useful when the work can be split into bounded outputs: one agent can research prior art, another can inspect the codebase, another can review a patch, and another can prepare a handoff.

The rule is simple: parallelism is allowed when it improves the work and the human can still understand what happened.

## Quality And Gates

Every durable change should pass through an appropriate gate.

A code change may need tests, type checks, linting, security review, or browser verification. A public document may need source credits and privacy review. A memory update may need human confirmation. A new framework rule may need evidence that it solves a recurring problem.

Throughline does not require heavy process for every task. It requires the agent to name the risk and choose a check that matches it.

## Day-End Updates

A good session should leave a trace.

When the user wants it, Throughline can produce a concise update at the end of a day, session, milestone, or manual checkpoint. The update should summarize what changed, what decisions were made, what checks ran, what is blocked, what comes next, and what was excluded for privacy.

The update is not a diary. It is a handoff artifact.

## What v0 Is

Version 0 is a public framework skeleton. It is intentionally made of files that humans can read.

The goal is not to ship a grand platform on day one. The goal is to establish the operating model: visible state, private memory boundaries, source-led learning, context discipline, quality gates, and human-led orchestration.

Future versions can add a dashboard, search indexes, vector retrieval, install commands, examples, and active hooks. Those pieces should grow from the framework instead of replacing it.
