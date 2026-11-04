# ryanxhuang.com

Ryan Huang's portfolio: robotics product and program management, with case studies and a build log.

## Stack

- [Next.js 15](https://nextjs.org/) (App Router), exported as a static site (`output: 'export'`)
- [Tailwind CSS 4](https://tailwindcss.com/) plus a small set of hand-written classes in `app/globals.css`
- MDX content compiled with `next-mdx-remote/rsc` and `remark-gfm`
- One self-hosted typeface: Geist, from Fontsource
- [React Three Fiber](https://r3f.docs.pmnd.rs/) for the home-page point cloud, loaded only in the browser
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
| Case studies | `content/work/*.mdx` (frontmatter: title, summary, role, org, period, year, order, stack, links, stats) |
| Build log entries | `content/log/*.mdx` (frontmatter: title, summary, date `YYYY-MM`, displayDate, project) |
| Contact details, experience, education, highlights | `lib/site.ts` |
| Resume PDF | `public/resume/Ryan_Huang_Resume.pdf` (also copied to `/resume.pdf` for old links) |

The design is deliberately minimal: one column, one typeface, no decoration. The small details: an availability dot, key results that slide open when you hover an experience row (always shown on touch screens), key numbers at the top of each case study, copy-to-clipboard email, organization monograms with tenure, highlights that link to their case studies, a "Watch it drive" chip on the photo, Los Angeles local time with a sun or moon in the footer, section counts, external-link arrows, a reading-progress line and "#" heading links on long pages, reading time, a back-to-top link, and a print stylesheet that turns the home page into a clean one-column resume.

MDX files can use `<Figure caption="...">`, `<TrackMap />` (the real F1TENTH map and raceline from `data/track.json`), `<TrackLegend />`, and `<Videos><Video id="YOUTUBE_ID" title="..." /></Videos>`. Pass props as strings; JavaScript expressions are blocked.

## The point cloud

`data/track.json` comes from the F1TENTH repo's real `slam_toolbox` map and TUM minimum-curvature raceline. `components/TrackScene.tsx` draws the map as a point cloud, drives the car along the raceline and simulates a 360° LiDAR scan against the map. Without WebGL, visitors see the top-view SVG (`components/TrackMap.tsx`). Reduced-motion settings park the car, and touch screens keep scrolling instead of rotating.

## Deploying

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds `./out` and publishes it to GitHub Pages.

