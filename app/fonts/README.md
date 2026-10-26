# Self-hosted fonts

These WOFF2 files are served from the app bundle so builds never depend on
`fonts.googleapis.com` or `fonts.gstatic.com`. They were extracted from the
Google Fonts files fetched by Next.js on 2026-10-26 and keep their original
names and licenses.

| File | Family | Axes / subset |
|---|---|---|
| `bodoni-moda-latin.woff2` | Bodoni Moda | `wght` 400–900, latin |
| `jost-latin.woff2` | Jost | `wght` 100–900, latin |
| `noto-kufi-arabic-arabic.woff2` | Noto Kufi Arabic | `wght` 100–900, arabic |

Only the subsets used by the site are bundled. French accents are covered by
the latin subset (`U+00??`). The Arabic subset keeps its generated Arial-based
metric fallback so Arabic text does not shift while the font loads; the
`--font-arabic` stack in `app/globals.css` points at the generated family.

Sources:

- https://fonts.google.com/specimen/Bodoni+Moda
- https://fonts.google.com/specimen/Jost
- https://fonts.google.com/specimen/Noto+Kufi+Arabic

All three families are licensed under the SIL Open Font License 1.1. The full
license and copyright notices are in `OFL.txt` in this directory.
