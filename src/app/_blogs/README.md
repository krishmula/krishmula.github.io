# Blogs (parked)

These routes are complete and working, but they are parked in a Next.js private
folder (the `_` prefix keeps them out of the router).

Reason: `output: 'export'` refuses to build a dynamic route whose
`generateStaticParams()` returns an empty array, and there are no posts yet.
The previous workaround generated a fake `/blogs/empty` page that rendered a 404
to real visitors.

## To turn blogs back on

1. Write the first post at `src/content/blogs/<slug>.mdx` with `title`, `date`,
   and `description` frontmatter.
2. Rename this folder back: `git mv src/app/_blogs src/app/blogs`
3. Delete this file.

The sidebar link and the sitemap entries appear on their own once posts exist,
so nothing else needs changing.
