# ryanxhuang.com

Ryan Huang's portfolio: robotics product and program management, with case studies and a build log.

## Stack

- [Next.js 15](https://nextjs.org/) (App Router), exported as a static site (`output: 'export'`)
- [Tailwind CSS 4](https://tailwindcss.com/) plus a small set of hand-written classes in `app/globals.css`
- MDX content compiled with `next-mdx-remote/rsc` and `remark-gfm`
- One self-hosted typeface: Geist, from Fontsource
- Hosted on GitHub Pages; `public/CNAME` points it at ryanxhuang.com

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck
npm run build      # static site in ./out
npm run preview    # serve ./out
```

Node is pinned in `.nvmrc` (22).

## Editing content

| What | Where |
|---|---|
| Case studies | `content/work/*.mdx` (frontmatter: title, summary, role, org, period, year, order, stack, links) |
| Build log entries | `content/log/*.mdx` (frontmatter: title, summary, date `YYYY-MM`, displayDate, project) |
| Contact details, resume paths, revision date | `lib/site.ts` |
| Resume PDFs | `public/resume/` (`/resume.pdf` is kept as the PM version for old links) |

The design is deliberately minimal: one column, one typeface, no decoration. The small details are the copy-to-clipboard email link, Ryan's local time in the footer, and the row hover states.

MDX files can use `<Figure caption="...">`, `<TrackMap />` (the real F1TENTH map and raceline from `data/track.json`), `<TrackLegend />`, and `<Videos><Video id="YOUTUBE_ID" title="..." /></Videos>`. Pass props as strings; JavaScript expressions are blocked.

## Deploying

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds `./out` and publishes it to GitHub Pages.

