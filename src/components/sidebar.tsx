"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BookOpen, Folder, FileText } from 'lucide-react';
import { FaGithub, FaXTwitter, FaLinkedin } from 'react-icons/fa6';
import { ThemeToggle } from "./theme-toggle";

export function Sidebar({ showBlogs = false }: { showBlogs?: boolean }) {
    const pathname = usePathname();
    const isHome = pathname === "/";

    return (
        <div className="flex flex-col gap-6 sticky top-8">
            <div className={`mb-2 transition-opacity duration-300 ${isHome ? 'opacity-0 pointer-events-none h-0 overflow-hidden mb-0' : 'opacity-100'}`}>
                <Link href="/" className="font-serif font-bold text-2xl hover:text-tertiary transition-colors">
                    krishmula
                </Link>
            </div>

            <div className="flex items-center justify-end">
                <ThemeToggle />
            </div>

            <nav className="flex flex-col gap-1">
                <NavLink href="/" icon={Home} label="Home" active={pathname === "/"} />
                <NavLink href="/projects" icon={Folder} label="Projects" active={pathname.startsWith("/projects")} />
                {showBlogs && (
                    <NavLink href="/blogs" icon={BookOpen} label="Blogs" active={pathname.startsWith("/blogs")} />
                )}
            </nav>

            <div className="mt-4 pt-4 border-t border-muted/40">
                <h3 className="font-bold text-sm text-muted-foreground mb-3 uppercase tracking-wider">Socials</h3>
                <nav className="flex flex-col gap-2">
                    <SocialLink href="https://github.com/krishmula" icon={FaGithub} label="GitHub" />
                    <SocialLink href="https://x.com/krxnaaa" icon={FaXTwitter} label="X (Twitter)" />
                    <SocialLink href="https://linkedin.com/in/krishna-mula" icon={FaLinkedin} label="LinkedIn" />
                    <Link
                        href="/resume"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-tertiary transition-colors"
                    >
                        <FileText className="w-4 h-4" />
                        <span>Resume</span>
                    </Link>
                </nav>
            </div>
        </div>
    );
}

type IconType = React.ComponentType<{ className?: string }>;

function NavLink({ href, icon: Icon, label, active }: { href: string; icon: IconType; label: string; active?: boolean }) {
    return (
        <Link
            href={href}
            aria-current={active ? "page" : undefined}
            className={`flex items-center gap-2 px-3 py-2 -mx-3 rounded-md transition-all hover:bg-highlight hover:text-foreground ${active ? 'bg-highlight/60 text-foreground' : 'text-muted-foreground'}`}
        >
            <Icon className="w-4 h-4" />
            <span>{label}</span>
        </Link>
    );
}

function SocialLink({ href, icon: Icon, label }: { href: string; icon: IconType; label: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-tertiary transition-colors"
        >
            <Icon className="w-4 h-4" />
            <span>{label}</span>
        </a>
    );
}
