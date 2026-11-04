# Design notes

Direction: an engineering drawing. The site should read like a sheet from a robotics design package, because that is the work Ryan wants to lead.

## Tokens

| Token | Light (drafting film) | Dark (cyanotype blueprint) | Use |
|---|---|---|---|
| `--paper` | `#f3f5f6` | `#0f2a4d` | Page |
| `--grid` / `--grid-major` | `#e5e9ec` / `#d8dfe3` | `#153359` / `#1c3f6b` | Graph-paper background, 24 px and 120 px |
| `--ink` | `#1d2329` | `#eaf1fa` | Text, frames |
| `--ink-2` | `#56616c` | `#a9bdd6` | Secondary text, annotations |
| `--rule` | `#b9c3ca` | `#3d6290` | Hairlines |
| `--accent` | `#1f4fd1` | `#ffcb57` | Links, raceline, LiDAR |

## Type

- Archivo, variable width. Headings are condensed (`font-stretch` 74 to 88%), body text at 100%.
- Martian Mono at 12.5 px for drawing annotations only: figure captions, dates, labels in the title block. Always sentence case.
- Scale: 13 / 15 / 17 / 20 / 24 / 32 / 44 / 64.

## Rules

1. Every figure is real data from Ryan's projects. No stock imagery or decorative illustrations.
2. Drawing conventions carry information: numbered figures with captions, a 1 m scale bar, and a footer title block that holds contact details, revision date and sheet number.
3. One bold element per page, the hero figure. Everything else is quiet text and tables.
4. A recruiter should get name, target role, proof and both resumes within the first screen.
5. Left-aligned, line length under about 70 characters for prose.
