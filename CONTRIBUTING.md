# Contributing publications

Create each publication at `content/articles/{slug}/index.md`. Slugs use lowercase letters, digits, and hyphens. Keep figures, downloads, and supporting material in the article's adjacent `assets/` and `data/` folders.

Every article starts with YAML front matter. Required fields are `id`, `slug`, `title`, `summary`, `authors`, `published`, `updated`, `tags`, `status`, and `license`.

```yaml
---
id: kusama-futures-jam-era
slug: kusama-futures-jam-era
title: Kusama Futures in the JAM Era
summary: A concise description used by catalogs and feeds.
authors:
  - Emiel Sebastiaan
  - Arief Ernst
published: 2026-08-24
updated: 2026-08-24
tags:
  - kusama
status: published
license: CC-BY-4.0
canonicalUrl: https://example.org/publications/the-publication-protocol
---
```

`id` is a permanent machine identifier and must not change after release. `slug` is the permanent public path and must match the directory name. `canonicalUrl` is optional and should be supplied only when another public page is the canonical reader URL.

Use `status: draft` while work is unpublished; drafts validate but are excluded from the public catalog and RSS feed. Before opening a pull request, run:

```text
npm run validate
npm run build
```
