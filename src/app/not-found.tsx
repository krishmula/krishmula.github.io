import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col items-start justify-center min-h-[50vh] space-y-4">
            <h1 className="text-4xl font-serif font-bold text-tertiary">404</h1>
            <h2 className="text-xl font-bold">Page Not Found</h2>
            <p className="text-muted-foreground">
                The page you are looking for does not exist. It might have been moved or deleted.
            </p>
            <Link href="/" className="text-primary hover:underline">
                Return Home
            </Link>
        </div>
    );
}
