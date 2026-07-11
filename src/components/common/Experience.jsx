import { motion } from "motion/react";
import { useState } from "react";
import { useMobile } from "../../hooks/useMobile";
import { experiences } from "../../data/experiences";
import { CornerBrackets } from "../ui/CornerBrackets";
import { Scanline, LeftAccentBar } from "../ui/Scanline";

const ExperienceRow = ({ exp, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.35,
        delay: index * 0.06,
        ease: [0.25, 0, 0, 1],
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative"
    >
      <motion.div
        className="relative overflow-hidden border border-border"
        animate={{ backgroundColor: hovered ? "var(--muted)" : "transparent" }}
        transition={{ duration: 0.2 }}
      >
        <CornerBrackets active={hovered} size="w-3" />
        <Scanline active={hovered} />
        <LeftAccentBar active={hovered} />

        <div className="flex items-center gap-3 px-4 py-4">
          <motion.img
            src={exp.logo}
            alt={exp.company}
            className="w-8 h-8 rounded-full object-cover flex-shrink-0"
            animate={{ opacity: hovered ? 1 : 0.6 }}
            transition={{ duration: 0.2 }}
          />

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <motion.div
                className="text-sm font-bold tracking-tight leading-none truncate"
                animate={{
                  color: hovered
                    ? "var(--foreground)"
                    : "var(--muted-foreground)",
                }}
                transition={{ duration: 0.2 }}
              >
                {exp.company}
              </motion.div>
              <motion.div
                className="text-[10px] flex-shrink-0"
                animate={{ opacity: hovered ? 0.5 : 0.2 }}
                style={{ color: "var(--foreground)" }}
                transition={{ duration: 0.2 }}
              >
                {exp.date}
              </motion.div>
            </div>

            <motion.p
              className="mt-1 text-[11px] truncate"
              animate={{ opacity: hovered ? 0.7 : 0.35 }}
              style={{ color: "var(--foreground)" }}
              transition={{ duration: 0.2 }}
            >
              {exp.role}
            </motion.p>

            <motion.p
              className="mt-0.5 text-[10px] truncate"
              animate={{ opacity: hovered ? 0.4 : 0.15 }}
              style={{ color: "var(--foreground)" }}
              transition={{ duration: 0.2 }}
            >
              {exp.description}
            </motion.p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Experience = () => {
  const isMobile = useMobile(768);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: isMobile ? 0.1 : 0.2 }}
      transition={{ duration: 0.5 }}
      className={`${isMobile ? "py-8" : "py-16 md:py-20"}`}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-6 px-1"
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="font-mono text-[10px] tracking-[0.3em] opacity-40 text-foreground">
              SYS://XP
            </div>
            <div className="flex-1 h-px bg-foreground opacity-10" />
            <div className="font-mono text-[10px] tracking-widest opacity-20 text-foreground">
              {experiences.length} ENTRIES
            </div>
          </div>
          <div className="relative">
            <h2 className="text-2xl font-black tracking-tight text-foreground leading-none">
              EXPERIENCE
            </h2>
            <motion.div
              className="mt-2 h-[2px] bg-foreground"
              initial={{ width: 0 }}
              whileInView={{ width: "2.5rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            />
          </div>
        </motion.div>

        <div className="flex flex-col gap-[1px]">
          {experiences.map((exp, index) => (
            <ExperienceRow key={exp.id} exp={exp} index={index} />
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-4 flex items-center gap-3 px-1"
        >
          <div className="flex-1 h-px bg-foreground opacity-10" />
          <div className="font-mono text-[10px] tracking-[0.2em] opacity-20 text-foreground">
            END OF INDEX
          </div>
        </motion.div> */}
      </div>
    </motion.div>
  );
};
