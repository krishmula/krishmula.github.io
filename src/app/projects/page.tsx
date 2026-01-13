import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';
import { format } from 'date-fns';
import { ArrowUpRight } from 'lucide-react';

export const metadata = {
    title: 'Projects | Portfolio',
    description: 'A showcase of my work and experiments.',
};

export default async function ProjectsPage() {
    const projects = await getAllPosts('projects');

    return (
        <div className="space-y-8">
            <header>
                <h1 className="text-3xl font-serif font-bold mb-4">Projects</h1>
                <p className="text-muted-foreground">
                    A showcase of my work and experiments.
                </p>
            </header>

            {(() => {
                // Group projects by year
                const projectsByYear = projects.reduce((acc, project) => {
                    const year = new Date(project.meta.date).getFullYear();
                    if (!acc.has(year)) acc.set(year, []);
                    acc.get(year)!.push(project);
                    return acc;
                }, new Map<number, typeof projects>());

                // Sort years descending (newest first)
                const sortedYears = [...projectsByYear.keys()].sort((a, b) => b - a);

                return sortedYears.map((year) => (
                    <section key={year} className="space-y-4">
                        <h2 className="font-serif font-bold text-lg text-muted-foreground">{year}</h2>
                        <div className="grid gap-6 md:grid-cols-2">
                            {projectsByYear.get(year)!.map((project) => (
                                <Link
                                    key={project.slug}
                                    href={`/projects/${project.slug}`}
                                    className="group relative flex flex-col p-6 rounded-xl border border-muted bg-card hover:bg-highlight transition-all duration-300"
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-bold group-hover:text-tertiary transition-colors">
                                            {project.meta.title}
                                        </h3>
                                        <ArrowUpRight className="h-5 w-5 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 text-muted-foreground" />
                                    </div>

                                    {project.meta.description && (
                                        <p className="text-muted-foreground mb-4 flex-grow">
                                            {project.meta.description}
                                        </p>
                                    )}

                                    {project.meta.tech && project.meta.tech.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.meta.tech.map((tech: string) => (
                                                <span
                                                    key={tech}
                                                    className="px-2 py-0.5 text-xs rounded-full bg-highlight text-muted-foreground border border-muted/50"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    <div className="mt-auto pt-4 border-t border-muted/50 w-full flex justify-between items-center text-sm font-mono text-muted-foreground/70">
                                        <time>
                                            {format(new Date(project.meta.date), 'MMM yyyy')}
                                        </time>
                                        <span>View Project →</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                ));
            })()}

            {projects.length === 0 && (
                <div className="p-8 text-center border border-dashed border-muted rounded-lg text-muted-foreground">
                    <p>No projects yet. Check back soon!</p>
                </div>
            )}
        </div>
    );
}
