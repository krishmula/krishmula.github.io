import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SiReact, SiTypescript, SiPython, SiPostgresql, SiPytorch, SiAmazonwebservices } from 'react-icons/si';
import { getAllPosts } from '@/lib/mdx';

export default async function Home() {
  const posts = await getAllPosts("notes");
  return (
    <div className="space-y-12 max-w-xl">
      <section className="space-y-4">
        <h1 className="font-serif font-bold text-xl">Krishna</h1>
        <p className="text-muted-foreground leading-relaxed">
          I'm a software engineer and digital gardener. I enjoy building scalable and distributed systems. I mostly work with Python, TypeScript, and C++. I occasionally dabble in functional programming with Lua. I'm learning cool things in Machine Learning and AI. I watch and play football, and go down the rabbit hole of history when I'm not coding.
          Currently building <Link href="#" className="text-foreground hover:text-tertiary underline decoration-tertiary/50 underline-offset-4 transition-colors">cool things</Link>.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="font-serif font-bold text-lg">Projects</h2>
        <div className="flex flex-col gap-4">
          <ProjectItem
            title="sero"
            description="Bill splitting with OCR and distributed claiming."
            href="https://github.com/krishmula/sero"
          />
          <ProjectItem
            title="pub-sub"
            description="Distributed pub-sub with gossip and snapshots."
            href="https://github.com/krishmula/pub-sub"
          />
          <ProjectItem
            title="denoising-autoencoders"
            description="CNN autoencoder for image noise removal."
            href="https://github.com/krishmula/denoising-autoencoders"
          />
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors group mt-2"
          >
            See more
            <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-serif font-bold text-lg">Stack</h2>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5"><SiReact className="w-3.5 h-3.5" /> React</span>
          <span className="flex items-center gap-1.5"><SiTypescript className="w-3.5 h-3.5" /> TypeScript</span>
          <span className="flex items-center gap-1.5"><SiPython className="w-3.5 h-3.5" /> Python</span>
          <span className="flex items-center gap-1.5"><SiPostgresql className="w-3.5 h-3.5" /> PostgreSQL</span>
          <span className="flex items-center gap-1.5"><SiPytorch className="w-3.5 h-3.5" /> PyTorch</span>
          <span className="flex items-center gap-1.5"><SiAmazonwebservices className="w-3.5 h-3.5" /> AWS</span>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="font-serif font-bold text-lg">Connect</h2>
        <div className="flex gap-4 text-sm text-muted-foreground">
          <a href="https://github.com/krishmula" target="_blank" className="hover:text-foreground transition-colors flex items-center gap-1">
            <ArrowUpRight className="w-3 h-3" /> GitHub
          </a>
          <a href="https://x.com/krxnaaa" target="_blank" className="hover:text-foreground transition-colors flex items-center gap-1">
            <ArrowUpRight className="w-3 h-3" /> X (Twitter)
          </a>
          <a href="https://linkedin.com/in/krishna-mula" target="_blank" className="hover:text-foreground transition-colors flex items-center gap-1">
            <ArrowUpRight className="w-3 h-3" /> LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}

function ProjectItem({ title, description, href }: { title: string, description: string, href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 group"
    >
      <span className="font-medium text-foreground underline decoration-muted/50 underline-offset-4 group-hover:decoration-tertiary transition-all">
        {title}
      </span>
      <span className="text-muted-foreground text-sm">
        {description}
      </span>
    </a>
  );
}
