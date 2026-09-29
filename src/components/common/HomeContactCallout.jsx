import { motion } from "motion/react";

export const HomeContactCallout = () => {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 text-center">
        {/* Title text matching screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-1"
        >
          <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-muted-foreground/80 font-bricolage">
            Have a project in mind?
          </h2>
          <p className="text-3xl sm:text-5xl font-normal tracking-tight text-muted-foreground/80 font-bricolage">
            Let's build it together.
          </p>
        </motion.div>

        {/* 3D Glowing Connect Pill Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 sm:mt-16 inline-block"
        >
          <a
            href="https://cal.com/meareg/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group inline-block"
          >
            {/* Soft background yellow glow */}
            <div className="absolute -inset-4 sm:-inset-6 rounded-full bg-yellow-400/30 blur-2xl group-hover:bg-yellow-400/45 transition-all duration-500 opacity-80" />

            {/* Main 3D Glossy Button Container */}
            <motion.div
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="relative px-14 sm:px-28 py-5 sm:py-7 rounded-[48px] sm:rounded-[60px] bg-gradient-to-b from-[#18181b] via-[#09090b] to-[#000000] border-[3.5px] border-[#eab308] shadow-[0_12px_40px_rgba(234,179,8,0.35),inset_0_2px_4px_rgba(255,255,255,0.15)] group-hover:shadow-[0_20px_50px_rgba(234,179,8,0.5)] transition-all duration-300 flex items-center justify-center cursor-pointer"
            >
              <span className="text-4xl sm:text-7xl font-bold tracking-tight text-[#facc15] font-bricolage drop-shadow-[0_2px_10px_rgba(250,204,21,0.3)]">
                Connect
              </span>
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
