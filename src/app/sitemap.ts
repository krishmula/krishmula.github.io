import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/mdx';

const SITE_URL = 'https://krishmula.github.io';

export const dynamic = 'force-static';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const [projects, blogs] = await Promise.all([
        getAllPosts('projects'),
        getAllPosts('blogs'),
    ]);

    const staticRoutes = ['', '/projects', '/resume'].map((route) => ({
        url: `${SITE_URL}${route}`,
        lastModified: new Date(),
    }));

    const projectRoutes = projects.map((project) => ({
        url: `${SITE_URL}/projects/${project.slug}`,
        lastModified: new Date(project.meta.date),
    }));

    const blogRoutes = blogs.map((post) => ({
        url: `${SITE_URL}/blogs/${post.slug}`,
        lastModified: new Date(post.meta.date),
    }));

    return [...staticRoutes, ...projectRoutes, ...blogRoutes];
}
