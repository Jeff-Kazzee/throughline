# Retrieval

Retrieval is the context layer. It helps agents find the right knowledge without loading everything.

## Core Rule

Search finds candidates. Query produces grounded answers. Update changes durable state.

Embeddings, full-text search, and file search are hints. Source files, ledgers, decisions, tests, and human gates remain authority.

## First Implementation

Start simple:

- Markdown as source of truth.
- Source ledger for provenance.
- Private memory ignored by git.
- JSONL or Markdown run logs.
- SQLite/full-text/embeddings only after privacy gates exist.

## Context Scout Output

```md
Top matches:
Path/link:
Reason:
Confidence:
Sensitivity:
Freshness:
Suggested read order:
Gaps/conflicts:
```

## Update States

- observed
- proposed
- verified
- adopted
- indexed
- superseded

Agents may propose updates. Humans approve high-impact changes.
