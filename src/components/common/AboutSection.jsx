import { Download, ArrowUpRight } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="scroll-mt-8 space-y-8">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
        <div className="space-y-1.5">
          <span className="text-xs font-mono tracking-widest text-muted-foreground uppercase font-semibold">
            05 // Background
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground font-bricolage">
            About Meareg.
          </h2>
        </div>

        <a
          href="/CV.pdf"
          download
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-border bg-card text-xs font-mono text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors shrink-0 shadow-xs"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Download Résumé</span>
          <ArrowUpRight className="w-3 h-3 text-muted-foreground/60" />
        </a>
      </div>

      {/* Human Bio Paragraphs */}
      <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
        <p>
          I am an independent full-stack developer currently based in Dansha, Ethiopia. Over the past three years, I've designed, architected, and shipped production web applications for startups, founders, and international organizations.
        </p>
        <p>
          My focus is on engineering software that is robust, fast, and easy to maintain. I work across the full stack—from responsive React and Next.js user interfaces with Tailwind CSS, to high-performance backend APIs with Python (FastAPI) and Node.js, and structured relational databases in PostgreSQL.
        </p>
        <p>
          Beyond writing code, I value clear communication, realistic technical roadmaps, and continuous delivery. Whether turning an MVP idea into a functioning product or optimizing an existing system for production scale, I take direct ownership from first commit to server deployment.
        </p>
      </div>
    </section>
  );
};
