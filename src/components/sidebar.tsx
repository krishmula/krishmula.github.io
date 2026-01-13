"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Home, BookOpen, Folder, Github, Twitter, Linkedin } from 'lucide-react';
import { ThemeToggle } from "./theme-toggle";

export function Sidebar() {
    const pathname = usePathname();
    const isHome = pathname === "/";

    return (
        <div className="flex flex-col gap-6 sticky top-8">
            <div className={`mb-2 transition-opacity duration-300 ${isHome ? 'opacity-0 pointer-events-none h-0 overflow-hidden mb-0' : 'opacity-100'}`}>
                <Link href="/" className="font-serif font-bold text-2xl hover:text-tertiary transition-colors">
                    krishmula
                </Link>
            </div>

            <div className="flex items-center gap-2">
                <div className="relative group flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-tertiary transition-colors" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full bg-highlight/50 border border-transparent rounded-lg py-2 pl-9 pr-4 text-sm focus:outline-none focus:border-tertiary/50 transition-all placeholder:text-muted-foreground/60"
                    />
                </div>
                <ThemeToggle />
            </div>

            <nav className="flex flex-col gap-1">
                <NavLink href="/" icon={Home} label="Home" />
                <NavLink href="/notes" icon={BookOpen} label="Garden Notes" />
                <NavLink href="/projects" icon={Folder} label="Projects" />
            </nav>

            <div className="mt-4 pt-4 border-t border-muted/40">
                <h3 className="font-bold text-sm text-muted-foreground mb-3 uppercase tracking-wider">Socials</h3>
                <nav className="flex flex-col gap-2">
                    <SocialLink href="https://github.com/krishmula" icon={Github} label="GitHub" />
                    <SocialLink href="https://x.com/krxnaaa" icon={Twitter} label="X (Twitter)" />
                    <SocialLink href="https://linkedin.com/in/krishna-mula" icon={Linkedin} label="LinkedIn" />
                </nav>
            </div>
        </div>
    );
}

function NavLink({ href, icon: Icon, label }: { href: string; icon: any; label: string }) {
    return (
        <Link
            href={href}
            className="flex items-center gap-2 px-3 py-2 -mx-3 rounded-md text-muted-foreground hover:bg-highlight hover:text-foreground transition-all"
        >
            <Icon className="w-4 h-4" />
            <span>{label}</span>
        </Link>
    );
}

function SocialLink({ href, icon: Icon, label }: { href: string; icon: any; label: string }) {
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
