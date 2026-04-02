import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';

const contentDir = path.join(process.cwd(), 'src/content');

export type Post = {
    slug: string;
    meta: {
        title: string;
        date: string;
        description?: string;
        [key: string]: any;
    };
    content: any; // ReactElement
};

// Define valid content types
type ContentType = 'notes' | 'projects';

export async function getPostBySlug(slug: string, type: ContentType = 'notes'): Promise<Post | undefined> {
    // Content is now in subdirectories: src/content/notes or src/content/projects
    const filePath = path.join(contentDir, type, `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
        return undefined;
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { frontmatter, content } = await compileMDX({
        source: fileContent,
        options: { parseFrontmatter: true }
    });

    return {
        slug,
        meta: frontmatter as Post['meta'],
        content,
    };
}

export async function getAllPosts(type: ContentType = 'notes'): Promise<Omit<Post, 'content'>[]> {
    const typeDir = path.join(contentDir, type);

    if (!fs.existsSync(typeDir)) {
        return [];
    }

    const files = fs.readdirSync(typeDir);
    const posts = await Promise.all(
        files
            .filter((file) => file.endsWith('.mdx'))
            .map(async (file) => {
                const slug = file.replace(/\.mdx$/, '');
                const filePath = path.join(typeDir, file);
                const fileContent = fs.readFileSync(filePath, 'utf8');
                // We just need frontmatter here, simple read is faster but compileMDX ensures consistency
                // using gray-matter for speed in lists
                const { data } = matter(fileContent);

                return {
                    slug,
                    meta: {
                        title: data.title || slug,
                        date: data.date || new Date().toISOString(),
                        description: data.description,
                        ...data
                    },
                };
            })
    );

    return posts.sort((a, b) => (new Date(b.meta.date) > new Date(a.meta.date) ? 1 : -1));
}
