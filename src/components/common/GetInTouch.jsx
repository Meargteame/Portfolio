import { motion } from "motion/react";
import { useState } from "react";
import { Mail, Linkedin, Github, Send, CheckCircle2, ArrowUpRight, MessageSquare } from "lucide-react";
import { GlassCard } from "../effects/GlassCard";

export const GetInTouch = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    // Direct mailto link generation with encoded parameters so it ALWAYS works
    const subject = encodeURIComponent(`Opportunity / Project inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Meareg,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`
    );
    
    // Open default mail client
    window.location.href = `mailto:hello.meareg@gmail.com?subject=${subject}&body=${body}`;
    
    setTimeout(() => {
      setStatus("success");
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center flex flex-col items-center"
        >
          <span className="text-xs tracking-[0.2em] text-muted-foreground font-mono font-medium">
            LET'S CONNECT
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground font-bricolage leading-[1.1]">
            Get in touch.
          </h2>
          <p className="mt-3 text-sm text-muted-foreground max-w-xl">
            Open to Full-Stack &amp; Mobile Development roles, remote US/EU opportunities, and 0-to-1 product collaborations.
          </p>
          <div className="mt-4 w-12 h-px bg-foreground/20" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-16 max-w-5xl mx-auto">
          {/* Direct channels */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            <GlassCard className="p-6 h-full flex flex-col justify-between" intensity={4}>
              <div>
                <h3 className="text-base font-semibold text-foreground tracking-tight mb-1">
                  Direct Inquiries
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                  Based in Addis Ababa, Ethiopia (UTC+3) with fast overlap for European and US time zones.
                </p>

                <div className="space-y-3">
                  <a
                    href="mailto:hello.meareg@gmail.com"
                    className="flex items-center justify-between p-3 rounded-xl border border-border/80 bg-white/[0.02] hover:bg-white/[0.05] hover:border-foreground/30 transition-all text-xs font-mono text-foreground group"
                  >
                    <div className="flex items-center gap-2.5">
                      <Mail className="w-4 h-4 text-muted-foreground group-hover:text-foreground" />
                      <span>hello.meareg@gmail.com</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground opacity-60 group-hover:opacity-100" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/meareg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl border border-border/80 bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#0a66c2]/40 transition-all text-xs font-mono text-foreground group"
                  >
                    <div className="flex items-center gap-2.5">
                      <Linkedin className="w-4 h-4 text-[#0a66c2]" />
                      <span>linkedin.com/in/meareg</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground opacity-60 group-hover:opacity-100" />
                  </a>

                  <a
                    href="https://github.com/Meargteame"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl border border-border/80 bg-white/[0.02] hover:bg-white/[0.05] hover:border-foreground/30 transition-all text-xs font-mono text-foreground group"
                  >
                    <div className="flex items-center gap-2.5">
                      <Github className="w-4 h-4 text-muted-foreground group-hover:text-foreground" />
                      <span>github.com/Meargteame</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground opacity-60 group-hover:opacity-100" />
                  </a>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border/50">
                <div className="flex items-center gap-2 text-[11px] font-mono text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Typically responds within 24 hours</span>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Quick Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <GlassCard className="p-6 sm:p-8" intensity={4}>
              {status === "success" ? (
                <div className="py-8 text-center flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border border-emerald-500/40 bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">Email client opened!</h3>
                  <p className="mt-1.5 text-xs text-muted-foreground max-w-sm">
                    If your email client didn't open automatically, write directly to <a href="mailto:hello.meareg@gmail.com" className="text-foreground underline">hello.meareg@gmail.com</a>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus("idle");
                      setFormData({ name: "", email: "", message: "" });
                    }}
                    className="mt-6 text-xs font-mono tracking-wider text-muted-foreground hover:text-foreground transition-colors border border-border rounded-full px-4 py-2"
                  >
                    Send another message →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-[10px] font-mono tracking-[0.2em] text-muted-foreground">
                        YOUR NAME
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-white/[0.02] border border-border rounded-xl px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/40 outline-none focus:border-foreground/40 transition-colors"
                        placeholder="Alex Murray"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-[10px] font-mono tracking-[0.2em] text-muted-foreground">
                        YOUR EMAIL
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-white/[0.02] border border-border rounded-xl px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/40 outline-none focus:border-foreground/40 transition-colors"
                        placeholder="alex@company.com"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-[10px] font-mono tracking-[0.2em] text-muted-foreground">
                      MESSAGE
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-white/[0.02] border border-border rounded-xl px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/40 outline-none focus:border-foreground/40 transition-colors resize-none"
                      placeholder="Hi Meareg, we'd like to talk about a full-stack / mobile developer role..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium tracking-wide hover:opacity-90 transition-opacity mt-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send inquiry</span>
                  </motion.button>
                </form>
              )}
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
