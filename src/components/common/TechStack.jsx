import { techCategories } from "../../data/techStack";

export const TechStack = () => {
  return (
    <section id="stack" className="scroll-mt-8 space-y-6">
      {/* Section Header */}
      <div className="space-y-1">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground font-bricolage">
          Tech Stack
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
          Core technologies, frameworks, and infrastructure I work with in production.
        </p>
      </div>

      {/* Editorial Categories Index */}
      <div className="divide-y divide-border/60">
        {techCategories.map((cat) => (
          <div
            key={cat.id}
            className="py-6 first:pt-0 last:pb-0 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-start"
          >
            {/* Category Column */}
            <div className="md:col-span-4 space-y-1">
              <h3 className="text-base font-bold font-bricolage text-foreground tracking-tight">
                {cat.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {cat.subtitle}
              </p>
            </div>

            {/* Items Grid */}
            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {cat.items.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-3 p-2.5 rounded-lg border border-border/70 bg-card/40 hover:bg-card/70 hover:border-foreground/30 transition-all"
                >
                  <span className="w-5 h-5 shrink-0 flex items-center justify-center">
                    {item.icon}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold text-foreground tracking-tight leading-tight">
                      {item.name}
                    </p>
                    <p className="text-[11px] text-muted-foreground truncate font-normal leading-tight mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

