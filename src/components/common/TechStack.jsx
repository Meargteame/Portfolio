import { Code2, Layout, Server, Database, Cpu, Sparkles } from "lucide-react";
import { techCategories } from "../../data/techStack";

const categoryIcons = {
  Code2,
  Layout,
  Server,
  Database,
  Cpu,
  Sparkles,
};

export const TechStack = () => {
  return (
    <section id="stack" className="scroll-mt-8 space-y-8">
      {/* Section Header */}
      <div className="space-y-1">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground font-bricolage">
          Tech Stack
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
          Languages, frameworks, databases, and tools I use to build and deploy web applications.
        </p>
      </div>

      {/* 6 Modular Cards Grid (2 cols on md+, 1 col on mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {techCategories.map((cat) => {
          const CategoryIcon = categoryIcons[cat.iconName] || Code2;
          return (
            <div
              key={cat.id}
              className="rounded-2xl border border-border bg-card/60 p-5 sm:p-6 space-y-4 shadow-xs hover:border-foreground/30 transition-all group/card flex flex-col justify-between"
            >
              {/* Card Header */}
              <div className="flex items-start justify-between border-b border-border/60 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-background border border-border flex items-center justify-center text-foreground group-hover/card:border-foreground/30 transition-colors shadow-2xs shrink-0">
                    <CategoryIcon className="w-4 h-4 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold font-bricolage text-sm sm:text-base text-foreground tracking-tight">
                      {cat.title}
                    </h3>
                    <p className="text-[11px] text-muted-foreground">
                      {cat.subtitle}
                    </p>
                  </div>
                </div>
                <span className="text-[11px] text-muted-foreground shrink-0 px-2 py-0.5 rounded-md border border-border bg-background/50 font-medium">
                  {cat.items.length} tools
                </span>
              </div>

              {/* 2x2 Sub-Grid of Items */}
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl border border-border/80 bg-background/70 hover:bg-background hover:border-foreground/40 transition-all shadow-2xs group cursor-default"
                  >
                    <span className="w-5 h-5 shrink-0 flex items-center justify-center transition-transform group-hover:scale-110">
                      {item.icon}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold text-foreground truncate tracking-tight">
                        {item.name}
                      </p>
                      <p className="text-[11px] text-muted-foreground truncate font-normal">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
