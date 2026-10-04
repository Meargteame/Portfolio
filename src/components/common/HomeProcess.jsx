import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Initial Discussion",
    desc: "We discuss what you want to build, existing designs or ideas, and technical requirements. No formal spec needed.",
  },
  {
    num: "02",
    title: "Scope & Timeline",
    desc: "I provide a clear breakdown of milestones, fixed deliverables, and a 2–4 week delivery schedule before code begins.",
  },
  {
    num: "03",
    title: "Build & Weekly Demos",
    desc: "Frontend, APIs, databases, and integrations. You get regular live staging links and progress demos as features are built.",
  },
  {
    num: "04",
    title: "Launch & Handoff",
    desc: "Deployment to production, 100% repository and code ownership transfer, a walkthrough session, and 30-day post-launch support.",
  },
];

export const HomeProcess = () => {
  return (
    <section className="py-16 sm:py-20 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground font-bricolage">
            How I work.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">
            A simple, direct process with no middle management or communication delays.
          </p>
        </div>

        {/* 4-Step Sequential Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item) => (
            <div key={item.num} className="space-y-2.5">
              <span className="text-xs font-mono text-muted-foreground block font-semibold">
                {item.num}
              </span>
              <h3 className="text-base font-semibold text-foreground font-bricolage">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Reassurance */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs sm:text-sm text-muted-foreground">
          <span>Fixed milestone estimates · Weekly live staging previews</span>
          <Link to="/contact" className="inline-flex items-center gap-1 font-semibold text-foreground hover:underline">
            <span>Start with a quick chat</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
};
