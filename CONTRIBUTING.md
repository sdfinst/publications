# Contributing publications

Create each publication at `content/articles/{slug}/index.md`. Slugs use lowercase letters, digits, and hyphens. Keep figures, downloads, and supporting material in the article's adjacent `assets/` and `data/` folders.

Every article starts with YAML front matter. Required fields are `id`, `slug`, `title`, `summary`, `authors`, `published`, `updated`, `tags`, `status`, `publicationType`, `edition`, and `license`.

```yaml
---
id: example-discussion
slug: example-discussion
title: An Example Discussion
summary: A concise description used by catalogs and feeds.
authors:
  - Example Author
published: 2026-08-24
updated: 2026-08-24
tags:
  - kusama
status: published
publicationType: discussion-draft
edition: 0.1.0
license: CC-BY-4.0
---
```

`id` is a permanent machine identifier and must not change after release. `slug` is the permanent public path and must match the directory name. `publicationType` identifies the public editorial status; use `discussion-draft` for a published request for discussion. `edition` is the semantic version published in release tags. `canonicalUrl` is optional and should be supplied only when another public page is the canonical reader URL.

Use `status: draft` while work is unpublished; drafts validate but are excluded from the public catalog and RSS feed. Before opening a pull request, run:

```text
npm run validate
npm run build
```
