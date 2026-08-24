# Publications

This repository is the canonical, version-controlled source for long-form publications.

## Reading and citing

Each article lives at `content/articles/{slug}/index.md`. A normal branch URL points to the current edition. For an immutable citation, replace the branch in a GitHub `blob` or `raw` URL with the full commit SHA that published the edition.

Published editions are also labeled with protected tags in this form:

```text
publication/{slug}/v{major}.{minor}.{patch}
```

For example, `publication/kusama-futures-jam-era/v1.0.0` identifies a human-readable release while its GitHub Release records the exact commit SHA.

## Publishing a revision

1. Update the article at its existing canonical path.
2. Run `npm run validate` and `npm run build`.
3. Commit the change, then create an annotated tag using the convention above.
4. Push the tag. The release workflow validates content and attaches `dist/catalog.json` and `dist/rss.xml` to the GitHub Release.

Published history is never rewritten. Later revisions retain the same article path but receive a new release tag; existing commit-SHA URLs continue to identify the prior edition.

Before the first release, add a GitHub ruleset that protects `publication/**` tags and restricts their creation to maintainers. GitHub Actions can create release records, but tag protection itself is an organization/repository setting.

## Integrating elsewhere

Consumers can download the tag-pinned `catalog.json` release asset, then use each entry's `sourcePath` with its `commit` value to construct immutable GitHub Markdown and asset URLs. The generated RSS feed offers standard syndication.

`dist/` is generated and intentionally not committed. The release workflow is the authoritative distributor for these integration files.

## Authoring

Read [CONTRIBUTING.md](CONTRIBUTING.md) for the required front matter and folder rules. The metadata contract is described by [schemas/article.schema.json](schemas/article.schema.json).
