import { motion } from "motion/react";
import { useState } from "react";
import { Mail, Linkedin, ArrowRight } from "lucide-react";
import { GlassCard } from "../effects/GlassCard";
import { TextReveal } from "../effects/TextReveal";

const FORMSPREE_ID = "your_form_id";
const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_ID}`;

export const GetInTouch = () => {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST", body: data, headers: { Accept: "application/json" },
      });
      if (res.ok) { setStatus("success"); form.reset(); }
      else { setStatus("error"); }
    } catch { setStatus("error"); }
  };

  return (
    <section className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs tracking-[0.2em] text-muted-foreground font-medium">CONTACT</span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground font-bricolage leading-[1.1]">
            Get in touch.
          </h2>
          <div className="mt-2 w-12 h-px bg-foreground/20" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-sm">
              <TextReveal delay={0.2} stagger={0.02}>
                Want to collaborate on a project, discuss an opportunity, or just say hi? Drop me a message and I'll get back to you.
              </TextReveal>
            </p>

            <div className="flex flex-col gap-4 mt-8">
              {[
                { href: "mailto:hello.meareg@gmail.com", icon: Mail, label: "hello.meareg@gmail.com" },
                { href: "https://www.linkedin.com/in/meareg-teame/", icon: Linkedin, label: "linkedin.com/in/meareg-teame" },
              ].map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <link.icon className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm tracking-tight">{link.label}</span>
                  <ArrowRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {status === "success" ? (
              <GlassCard className="p-8 text-center" intensity={4}>
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground mx-auto">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <p className="mt-4 text-base font-semibold text-foreground">Message sent</p>
                <p className="mt-1 text-sm text-muted-foreground">Thanks for reaching out — I'll get back to you soon.</p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-4 text-xs font-mono tracking-wider text-muted-foreground hover:text-foreground transition-colors"
                >
                  Send another →
                </button>
              </GlassCard>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {["name", "email"].map((field) => (
                  <div key={field} className="flex flex-col gap-2">
                    <label htmlFor={field} className="text-[10px] font-mono tracking-[0.2em] text-muted-foreground">
                      {field.toUpperCase()}
                    </label>
                    <input
                      id={field}
                      name={field}
                      type={field}
                      required
                      autoComplete={field}
                      className="bg-transparent border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-foreground/30 transition-colors"
                      placeholder={field === "name" ? "Your name" : "you@example.com"}
                    />
                  </div>
                ))}

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-[10px] font-mono tracking-[0.2em] text-muted-foreground">
                    MESSAGE
                  </label>
                  <textarea
                    id="message" name="message" required rows={4}
                    className="bg-transparent border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-foreground/30 transition-colors resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium tracking-wide disabled:opacity-60 hover:opacity-90 transition-opacity"
                >
                  {status === "sending" ? "Sending..." : "Send message"}
                </motion.button>

                {status === "error" && (
                  <p className="text-xs text-muted-foreground">
                    Something went wrong. Email me directly at hello.meareg@gmail.com.
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
