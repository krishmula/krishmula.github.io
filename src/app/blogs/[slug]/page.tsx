import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import { getPostBySlug, getAllPosts } from '@/lib/mdx';
import { Typography } from '@/components/ui/typography';
import Link from 'next/link';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPostBySlug(slug, 'blogs');

    if (!post) {
        notFound();
    }

    return (
        <article className="max-w-2xl mx-auto md:mx-0">
            <Link href="/blogs" className="inline-block text-sm text-muted-foreground hover:text-tertiary transition-colors mb-6">
                ← Back to Blogs
            </Link>
            <header className="mb-8 border-b border-muted pb-8">
                <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                    {post.meta.title}
                </h1>
                <div className="flex items-center text-sm text-muted-foreground font-mono">
                    <time>{format(new Date(post.meta.date), 'MMM d, yyyy')}</time>
                    <span className="mx-2">•</span>
                    <span>{post.slug}</span>
                </div>
            </header>

            <Typography>
                {post.content}
            </Typography>
        </article>
    );
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPostBySlug(slug, 'blogs');

    if (!post) {
        return {
            title: 'Not Found',
        };
    }

    return {
        title: `${post.meta.title} | Portfolio`,
        description: post.meta.description,
    };
}

export async function generateStaticParams() {
    const posts = await getAllPosts('blogs');
    if (posts.length === 0) {
        return [{ slug: 'empty' }];
    }
    return posts.map((post) => ({
        slug: post.slug,
    }));
}
