import clsx from 'clsx';

export function Typography({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={clsx(
            "prose prose-neutral dark:prose-invert max-w-none",
            "prose-headings:font-serif prose-headings:font-bold",
            "prose-h1:text-3xl prose-h1:mb-4",
            "prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4",
            "prose-p:leading-relaxed prose-p:mb-4",
            "prose-a:text-primary prose-a:no-underline hover:prose-a:text-accent hover:prose-a:underline",
            "prose-blockquote:border-l-primary prose-blockquote:bg-highlight prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r",
            className
        )}>
            {children}
        </div>
    );
}
