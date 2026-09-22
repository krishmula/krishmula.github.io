import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  SiReact,
  SiTypescript,
  SiPython,
  SiFastapi,
  SiPostgresql,
  SiPytorch,
  SiDocker,
  SiTerraform,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="space-y-12 max-w-xl">
      <section className="space-y-4">
        <h1 className="font-serif font-bold text-xl">Krishna</h1>
        <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
          <p>
            I&apos;m a software engineer and a CS grad student at San Jose State. I
            like systems that have to keep working when something fails, which
            lately means GPU inference services, event-driven AWS, and the
            occasional distributed protocol. I mostly write Python and
            TypeScript.
          </p>
          <p>
            Right now I&apos;m a software engineering intern at{" "}
            <a
              href="https://useintake.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-tertiary underline decoration-tertiary/50 underline-offset-4 transition-colors"
            >
              Intake AI
            </a>{" "}
            in San Francisco, working on retrieval and reranking. Before grad
            school I spent three years at PwC building compliance automation and
            RAG pipelines.
          </p>
          <p>
            I&apos;m working toward inference engineering: what it costs to
            serve a model, where the latency actually goes, and how to get more
            out of a GPU than the default configuration gives you. Alongside
            that I&apos;m{" "}
            <a
              href="https://github.com/krishmula/nn-z2h"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-tertiary underline decoration-tertiary/50 underline-offset-4 transition-colors"
            >
              writing neural nets by hand
            </a>
            , no AI assistance, to understand the layer underneath. I watch and
            play football, and go down the rabbit hole of history when
            I&apos;m not coding.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="font-serif font-bold text-lg">Projects</h2>
        <div className="flex flex-col gap-4">
          <ProjectItem
            slug="aether"
            title="Aether"
            description="Distributed pub-sub over raw TCP. Gossip mesh, Chandy-Lamport snapshots, hybrid failover."
          />
          <ProjectItem
            slug="fightflow"
            title="FightFlow"
            description="Boxing punch classification from video. Pose features beat pixels on a small dataset."
          />
          <ProjectItem
            slug="phantom"
            title="Phantom"
            description="CloudFormation drift analysis that decides whether to legitimize, revert, or refactor."
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
          <span className="flex items-center gap-1.5">
            <SiPython className="w-3.5 h-3.5" /> Python
          </span>
          <span className="flex items-center gap-1.5">
            <SiTypescript className="w-3.5 h-3.5" /> TypeScript
          </span>
          <span className="flex items-center gap-1.5">
            <SiFastapi className="w-3.5 h-3.5" /> FastAPI
          </span>
          <span className="flex items-center gap-1.5">
            <SiPostgresql className="w-3.5 h-3.5" /> PostgreSQL
          </span>
          <span className="flex items-center gap-1.5">
            <SiPytorch className="w-3.5 h-3.5" /> PyTorch
          </span>
          <span className="flex items-center gap-1.5">
            <FaAws className="w-3.5 h-3.5" /> AWS
          </span>
          <span className="flex items-center gap-1.5">
            <SiDocker className="w-3.5 h-3.5" /> Docker
          </span>
          <span className="flex items-center gap-1.5">
            <SiTerraform className="w-3.5 h-3.5" /> Terraform
          </span>
          <span className="flex items-center gap-1.5">
            <SiReact className="w-3.5 h-3.5" /> React
          </span>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="font-serif font-bold text-lg">Connect</h2>
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <a
            href="https://github.com/krishmula"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors flex items-center gap-1"
          >
            <ArrowUpRight className="w-3 h-3" /> GitHub
          </a>
          <a
            href="https://x.com/krxnaaa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors flex items-center gap-1"
          >
            <ArrowUpRight className="w-3 h-3" /> X (Twitter)
          </a>
          <a
            href="https://linkedin.com/in/krishna-mula"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors flex items-center gap-1"
          >
            <ArrowUpRight className="w-3 h-3" /> LinkedIn
          </a>
          <Link
            href="/resume"
            className="hover:text-foreground transition-colors flex items-center gap-1"
          >
            <ArrowUpRight className="w-3 h-3" /> Resume
          </Link>
        </div>
      </section>
    </div>
  );
}

function ProjectItem({
  slug,
  title,
  description,
}: {
  slug: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 group"
    >
      <span className="font-medium text-foreground underline decoration-muted/50 underline-offset-4 group-hover:decoration-tertiary transition-all whitespace-nowrap">
        {title}
      </span>
      <span className="text-muted-foreground text-sm">{description}</span>
    </Link>
  );
}
