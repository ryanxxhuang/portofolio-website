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
| Contact details, experience, education, highlights | `lib/site.ts` |
| Resume PDF | `public/resume/Ryan_Huang_Resume.pdf` (also copied to `/resume.pdf` for old links) |

The design is deliberately minimal: one column, one typeface, no decoration. The small details: the Chinese name on hover, an availability dot, copy-to-clipboard email, organization monograms with tenure, highlights that link to their case studies, a "Watch it drive" chip on the photo, Los Angeles local time with a sun or moon in the footer, section counts, external-link arrows, a reading-progress line and "#" heading links on long pages, reading time, a back-to-top link, and a print stylesheet that turns the home page into a clean one-column resume.

MDX files can use `<Figure caption="...">`, `<TrackMap />` (the real F1TENTH map and raceline from `data/track.json`), `<TrackLegend />`, and `<Videos><Video id="YOUTUBE_ID" title="..." /></Videos>`. Pass props as strings; JavaScript expressions are blocked.

## Deploying

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds `./out` and publishes it to GitHub Pages.

