import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';
import { format } from 'date-fns';

export default async function BlogsPage() {
    const posts = await getAllPosts('blogs');

    return (
        <div className="space-y-8">
            <header>
                <h1 className="text-3xl font-serif font-bold mb-4">Blogs</h1>
                <p className="text-muted-foreground">
                    Writing on ideas, engineering, and experiments.
                </p>
            </header>

            {posts.length === 0 ? (
                <p className="text-muted-foreground">No blog posts yet.</p>
            ) : (
                <div className="grid gap-4">
                    {posts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blogs/${post.slug}`}
                            className="block group p-4 -mx-4 rounded-lg hover:bg-highlight transition-colors"
                        >
                            <article>
                                <h2 className="text-xl font-bold group-hover:text-tertiary transition-colors mb-2">
                                    {post.meta.title}
                                </h2>
                                {post.meta.description && (
                                    <p className="text-muted-foreground mb-2">
                                        {post.meta.description}
                                    </p>
                                )}
                                <time className="text-sm text-muted-foreground/60 font-mono">
                                    {format(new Date(post.meta.date), 'MMM d, yyyy')}
                                </time>
                            </article>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
