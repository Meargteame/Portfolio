import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";

const steps = [
  {
    num: "1",
    title: "Tell me what you need",
    desc: "Share your product concept, Figma file, existing website, or manual process. You don't need a technical spec — just explain what you want your software to accomplish.",
  },
  {
    num: "2",
    title: "Define scope & timeline",
    desc: "We agree on exactly what gets built, delivery milestones (typically 2 to 4 weeks for core builds), and clear expectations before writing any code.",
  },
  {
    num: "3",
    title: "Build & weekly demos",
    desc: "Frontend, backend APIs, database, and integrations. You receive regular live preview links and progress demos as features are completed.",
  },
  {
    num: "4",
    title: "Launch & handoff",
    desc: "Deployment to production, 100% repository and intellectual property transfer, a walkthrough session, and 30-day post-launch warranty.",
  },
];

export const HomeProcess = () => {
  return (
    <section className="py-20 sm:py-28 border-t border-border/60">
      <div className="max-w-[1100px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold font-bricolage text-foreground tracking-tight leading-tight">
            How we take your project from idea to launch.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground">
            A simple, predictable process designed to remove the friction and uncertainty of hiring an independent developer.
          </p>
        </div>

        {/* Clean Sequential Flow (No Boxes, No Icons in Squares) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {steps.map((item) => (
            <div key={item.num} className="space-y-3">
              <span className="text-xs font-mono font-bold text-muted-foreground/60 block">
                0{item.num}
              </span>
              <h3 className="text-lg font-bold font-bricolage text-foreground tracking-tight">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Quiet Reassurance Strip */}
        <div className="mt-14 sm:mt-16 pt-8 border-t border-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs sm:text-sm text-muted-foreground">
          <span>You own 100% of the code, IP, and database from day one.</span>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1 font-semibold text-foreground hover:underline"
          >
            Start with a quick message
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
};
