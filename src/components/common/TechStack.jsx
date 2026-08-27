import { motion } from "motion/react";
import { techs } from "../../data/techStack.jsx";

const categories = [
  { label: "Backend & APIs", ids: [1, 2, 3, 4, 5, 6, 7] },
  { label: "Frontend & Web", ids: [8, 9, 10, 11, 12, 20] },
  { label: "Databases & Storage", ids: [13, 14, 15, 16, 17] },
  { label: "DevOps & Cloud", ids: [18, 19, 21, 22, 23, 24] },
  { label: "AI & ML", ids: [25, 26, 27, 28] },
];

const TechCategory = ({ category, index }) => {
  const categoryTechs = techs.filter((t) => category.ids.includes(t.id));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0, 0, 1] }}
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-[10px] font-mono tracking-[0.2em] text-muted-foreground font-medium">
          {category.label}
        </span>
        <div className="flex-1 h-px bg-border" />
        <span className="text-[10px] font-mono text-muted-foreground/40">{categoryTechs.length}</span>
      </div>
      <div className="flex flex-wrap gap-2 mb-8">
        {categoryTechs.map((tech) => (
          <motion.div
            key={tech.id}
            whileHover={{ y: -2, scale: 1.02 }}
            className="group flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-card hover:border-foreground/20 hover:bg-white/[0.04] transition-all duration-200 cursor-default"
          >
            <span className="text-base leading-none opacity-60 group-hover:opacity-100 transition-opacity">
              {tech.icon}
            </span>
            <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors font-medium">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export const TechStack = () => {
  return (
    <section className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
      <motion.div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.015) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs tracking-[0.2em] text-muted-foreground font-medium">TECHNOLOGY</span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground font-bricolage leading-[1.1]">
            Tech stack.
          </h2>
          <div className="mt-2 w-12 h-px bg-foreground/20" />
        </motion.div>

        {/* Detailed Categories grid */}
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            {categories.map((category, index) => (
              <TechCategory key={category.label} category={category} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
