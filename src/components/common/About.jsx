import { useMobile } from "@/hooks/useMobile";
import {motion} from "motion/react"

export const About = () => {
  const isMobile = useMobile(768);

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-10 px-1"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="font-mono text-[10px] tracking-[0.3em] opacity-40 text-foreground">
              SYS://ABOUT
            </div>
            <div className="flex-1 h-px bg-foreground opacity-10" />
            <div className="font-mono text-[10px] tracking-widest opacity-20 text-foreground">
              PROFILE
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-foreground">
            ABOUT ME
          </h2>
          <motion.div
            className="mt-2 h-[2px] bg-foreground"
            initial={{ width: 0 }}
            whileInView={{ width: "3rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          />
        </motion.div>

        {/* Story */}
        <div className="max-w-3xl space-y-4 mb-8">
          {[
            <>
              I'm a backend-focused Full Stack & AI Engineer passionate about building scalable
              systems and intelligent applications that solve real-world problems.
            </>,
            <>
              I mainly work with{" "}
              <span className="text-foreground">Python (Django, Flask, FastAPI)</span>,{" "}
              <span className="text-foreground">Golang</span>, and{" "}
              <span className="text-foreground">Node.js/Express</span>, designing clean
              backend architectures and reliable services.
            </>,
            <>
              On the frontend, I build modern interfaces with{" "}
              <span className="text-foreground">React</span>,{" "}
              <span className="text-foreground">Next.js</span>, and{" "}
              <span className="text-foreground">Vue.js</span>, creating seamless user experiences.
            </>,
            <>
              I specialize in integrating{" "}
              <span className="text-foreground">AI components</span> into full-stack applications,
              optimizing databases for high-performance queries, and building robust APIs that scale.
            </>,
            <>
              I'm currently open to{" "}
              <span className="text-foreground">Full Stack & AI Engineering roles</span>{" "}
              where I can architect scalable systems and contribute to cutting-edge AI-driven products.
            </>,
          ].map((text, index) => (
            <motion.p
              key={index}
              className="text-sm leading-relaxed text-muted-foreground"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
};
