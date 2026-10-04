import { Footer }   from "../common/Footer";
import { Projects } from "../common/Project";
import { Link }     from "react-router";
import { ArrowUpRight } from "lucide-react";

export const WorkPage = () => {
  return (
    <div>
      <main>
        {/* Work Page Header */}
        <section className="pt-12 sm:pt-16 pb-6 max-w-5xl mx-auto px-6">
          <span className="text-xs font-mono font-medium tracking-[0.2em] text-muted-foreground uppercase">
            Proof of Execution
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground font-bricolage leading-tight">
            Case Studies &amp; Shipped Work.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Real platforms, SaaS applications, and business systems built 0-to-1 and deployed to production. Every build below demonstrates full-stack execution, database design, and working business logic.
          </p>
        </section>

        {/* Projects List */}
        <Projects />

        {/* Bottom CTA on Work Page */}
        <section className="py-20 max-w-5xl mx-auto px-6 text-center border-t border-border">
          <h2 className="text-2xl sm:text-3xl font-bold font-bricolage text-foreground mb-3">
            Have a project similar to these?
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto mb-6">
            Tell me about your idea, timeline, and requirements. I'll get back to you within 24 hours with an honest assessment.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-foreground text-background text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Start a Project
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </section>

        <Footer />
      </main>
    </div>
  );
};
