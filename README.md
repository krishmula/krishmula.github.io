# krishmula.github.io

My personal site: projects, writing, and resume. Statically exported Next.js, deployed to GitHub Pages.

Live at [krishmula.github.io](https://krishmula.github.io).

## Stack

- **Next.js 16** (App Router, `output: 'export'`)
- **Tailwind CSS v4**
- **MDX** via `next-mdx-remote/rsc` for project and blog content
- **next-themes** for the light and dark theme

## Running locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export to ./out
```

`out/` is generated and ignored by git. GitHub Actions builds it from source on every push to `main`.

## Adding content

Content lives in `src/content/` as MDX, one file per entry. The filename becomes the URL slug.

- `src/content/projects/<slug>.mdx` → `/projects/<slug>`
- `src/content/blogs/<slug>.mdx` → `/blogs/<slug>`

Frontmatter:

```yaml
---
title: "Project Name"
date: "2026-09-19"        # drives ordering and the year grouping on /projects
description: "One or two sentences. Shown on the index card and used as the meta description."
tech: ["Python", "FastAPI"]   # projects only; renders as pills on the index card
---
```

The body is MDX, so inline JSX and Tailwind classes both work. Existing project pages open with a row of GitHub and live-demo buttons and close with a tech stack pill list; copy that pattern from any file in `src/content/projects/`.

The Blogs nav link appears on its own once `src/content/blogs/` holds at least one post.

## Deploying

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and publishes to GitHub Pages. No manual deploy step.

## Layout

```
src/
├── app/           # routes: home, projects, blogs, resume, sitemap, robots
├── components/    # sidebar, theme toggle and provider, overlay, typography
├── content/       # MDX source for projects and blogs
└── lib/mdx.ts     # frontmatter parsing and MDX compilation
public/
├── resume.pdf     # served at /resume and offered as a download
└── leaves.mp4     # light-mode overlay
```
