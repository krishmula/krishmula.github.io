import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import { getPostBySlug, getAllPosts } from '@/lib/mdx';
import { Typography } from '@/components/ui/typography';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = await getPostBySlug(slug, 'projects');

    if (!project) {
        notFound();
    }

    return (
        <article className="max-w-2xl mx-auto md:mx-0">
            <div className="mb-8">
                <Link
                    href="/projects"
                    className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-6 group"
                >
                    <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Projects
                </Link>

                <header className="border-b border-muted pb-8">
                    <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                        {project.meta.title}
                    </h1>
                    <div className="flex items-center text-sm text-muted-foreground font-mono">
                        <time>{format(new Date(project.meta.date), 'MMMM yyyy')}</time>
                        <span className="mx-2">•</span>
                        <span>Project</span>
                    </div>
                </header>
            </div>

            <Typography>
                {project.content}
            </Typography>
        </article>
    );
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = await getPostBySlug(slug, 'projects');

    if (!project) {
        return {
            title: 'Not Found',
        };
    }

    return {
        title: `${project.meta.title} | Projects`,
        description: project.meta.description,
    };
}

export async function generateStaticParams() {
    const projects = await getAllPosts('projects');
    return projects.map((project) => ({
        slug: project.slug,
    }));
}
