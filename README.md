# ryanxhuang.com

Ryan Huang's portfolio: robotics product and program management, with case studies and a build log.

## Stack

- [Next.js 15](https://nextjs.org/) (App Router), exported as a static site (`output: 'export'`)
- [Tailwind CSS 4](https://tailwindcss.com/) plus a small set of hand-written classes in `app/globals.css`
- MDX content compiled with `next-mdx-remote/rsc` and `remark-gfm`
- [React Three Fiber](https://r3f.docs.pmnd.rs/) for the hero figure, loaded only in the browser
- Self-hosted fonts from Fontsource: Archivo (variable width) and Martian Mono
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

MDX files can use `<Figure n="2" caption="...">`, `<TrackMap />`, `<TrackLegend />`, `<Pipeline />`, and `<Videos><Video id="YOUTUBE_ID" title="..." /></Videos>`. Pass props as strings; JavaScript expressions are blocked.

## The hero figure

`data/track.json` is generated from the F1TENTH repo's real `slam_toolbox` map and the TUM minimum-curvature raceline (`maps/track_20260411_223212`). The 3D scene (`components/TrackScene.tsx`) drives the car along that raceline and simulates a 360° LiDAR scan against the occupancy grid. Visitors without WebGL see the server-rendered top view (`components/TrackMap.tsx`). Reduced-motion settings park the car; touch devices keep page scrolling instead of rotating.

## Deploying

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds `./out` and publishes it to GitHub Pages.

See `docs/DESIGN.md` for the visual system.
