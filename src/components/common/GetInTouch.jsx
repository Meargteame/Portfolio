<<<<<<< HEAD
import { motion, AnimatePresence } from "motion/react";
import { useState, useRef } from "react";
import { Mail, Linkedin, Send, Check } from "lucide-react";
import emailjs from "@emailjs/browser";
import { CornerBrackets } from "../ui/CornerBrackets";
import { Scanline, LeftAccentBar } from "../ui/Scanline";
import Avatar from "../../assets/image.png";

// EmailJS config — replace with your own keys from https://www.emailjs.com
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

/* ── Animated envelope illustration (simplified) ── */
const EnvelopeIllustration = () => (
  <div
    className="relative w-full flex items-center justify-center"
    style={{ height: "60px", color: "var(--foreground)" }}
  >
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
      <motion.path
        d="M10 30 Q50 5 90 30"
        stroke="currentColor"
        strokeWidth="0.6"
        strokeDasharray="3 3"
        fill="none"
        animate={{ opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </svg>
    <motion.div
      className="absolute"
      animate={{
        left: ["15%", "85%", "85%"],
        top: ["60%", "25%", "25%"],
        opacity: [0, 0.8, 0],
        rotate: [0, -6, -6],
      }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", times: [0, 0.6, 1] }}
      style={{ transform: "translate(-50%, -50%)" }}
    >
      <svg viewBox="0 0 24 16" width="24" height="16">
        <rect x="0" y="0" width="24" height="16" rx="2" fill="currentColor" opacity={0.12} stroke="currentColor" strokeWidth="0.8" />
        <path d="M0 0 L12 9 L24 0" stroke="currentColor" strokeWidth="0.8" fill="none" opacity={0.4} />
      </svg>
    </motion.div>
  </div>
);
=======
import { motion } from "motion/react";
import { useState } from "react";
import { Mail, Linkedin, ArrowRight } from "lucide-react";
import { GlassCard } from "../effects/GlassCard";
import { TextReveal } from "../effects/TextReveal";

const FORMSPREE_ID = "your_form_id";
const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_ID}`;
>>>>>>> 8369e6ebd4276dcb34e204f9c5abc8a794c1fddd

/* ── Form field component ── */
const FormField = ({ label, type = "text", name, value, onChange, required, textarea }) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative">
      <motion.label
        className="block text-[10px] tracking-[0.2em] mb-2 opacity-40 text-foreground"
        animate={{ opacity: focused ? 0.7 : 0.4 }}
        transition={{ duration: 0.2 }}
      >
        {label.toUpperCase()}
      </motion.label>
      <div className="relative">
        <motion.div
          className="absolute inset-0 border border-border pointer-events-none"
          animate={{ borderColor: focused ? "var(--foreground)" : "var(--border)" }}
          transition={{ duration: 0.2 }}
        />
        <CornerBrackets active={focused} size="w-3" />
        {textarea ? (
          <textarea
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            rows={4}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className="w-full bg-transparent px-4 py-3 text-sm text-foreground outline-none resize-none"
          />
        ) : (
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className="w-full bg-transparent px-4 py-3 text-sm text-foreground outline-none"
          />
        )}
      </div>
    </div>
  );
};

/* ── Contact Form ── */
const ContactForm = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY);
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
      <FormField label="Name" name="name" value={formData.name} onChange={handleChange} required />
      <FormField label="Email" type="email" name="email" value={formData.email} onChange={handleChange} required />
      <FormField label="Message" name="message" value={formData.message} onChange={handleChange} required textarea />

      <motion.button
        type="submit"
        disabled={status === "sending" || status === "success"}
        whileTap={{ scale: 0.98 }}
        className="relative flex items-center justify-center gap-2 border border-border px-6 py-3 text-sm font-bold tracking-wider text-foreground hover:bg-muted transition-colors disabled:opacity-50"
      >
        <CornerBrackets active size="w-3" />
        {status === "idle" && (
          <>
            <Send className="w-4 h-4" />
            <span>SEND MESSAGE</span>
          </>
        )}
        {status === "sending" && <span className="tracking-widest">SENDING...</span>}
        {status === "success" && (
          <>
            <Check className="w-4 h-4" />
            <span>SENT</span>
          </>
        )}
        {status === "error" && <span className="tracking-widest">TRY AGAIN</span>}
      </motion.button>
    </form>
  );
};

/* ── Contact Link Row ── */
const ContactLink = ({ href, icon: Icon, label, value, hoveredLink, setHoveredLink, id }) => (
  <motion.a
    href={href}
    target={href.startsWith("mailto") ? undefined : "_blank"}
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: 0.5 }}
    onHoverStart={() => setHoveredLink(id)}
    onHoverEnd={() => setHoveredLink(null)}
    className="relative block"
  >
    <motion.div
      className="relative overflow-hidden p-5 flex items-center gap-4"
      animate={{ backgroundColor: hoveredLink === id ? "var(--muted)" : "transparent" }}
      transition={{ duration: 0.2 }}
    >
      <Scanline active={hoveredLink === id} duration={0.4} />
      <LeftAccentBar active={hoveredLink === id} />
      <motion.div animate={{ opacity: hoveredLink === id ? 1 : 0.3 }} transition={{ duration: 0.2 }}>
        <Icon className="w-5 h-5 text-foreground" />
      </motion.div>
      <div className="flex-1 min-w-0">
        <div className="text-[10px] tracking-[0.2em] mb-0.5 opacity-30 text-foreground">{label}</div>
        <motion.div
          className="text-sm font-bold tracking-tight truncate"
          animate={{ color: hoveredLink === id ? "var(--foreground)" : "var(--muted-foreground)" }}
          transition={{ duration: 0.2 }}
        >
          {value}
        </motion.div>
      </div>
      <motion.div
        className="text-sm flex-shrink-0"
        animate={{ opacity: hoveredLink === id ? 0.8 : 0.2, x: hoveredLink === id ? 4 : 0 }}
        style={{ color: "var(--foreground)" }}
        transition={{ duration: 0.2 }}
      >
        ↗
      </motion.div>
    </motion.div>
  </motion.a>
);

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
<<<<<<< HEAD
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="py-8 sm:py-12 md:py-16 lg:py-20 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
=======
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
>>>>>>> 8369e6ebd4276dcb34e204f9c5abc8a794c1fddd
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

<<<<<<< HEAD
        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left column */}
=======
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mt-16">
>>>>>>> 8369e6ebd4276dcb34e204f9c5abc8a794c1fddd
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
<<<<<<< HEAD
            <EnvelopeIllustration />

            <p className="text-sm leading-relaxed opacity-40 text-foreground max-w-sm">
              Want to collaborate on a project, discuss an opportunity, or just say hi?
              Drop me a message and I'll get back to you as soon as possible.
            </p>

            {/* Avatar badge */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src={Avatar}
                  alt="Meareg Teame"
                  className="rounded-full block"
                  style={{
                    width: "36px",
                    height: "36px",
                    objectFit: "cover",
                    filter: "grayscale(100%) contrast(1.05) brightness(0.95)",
                    opacity: 0.82,
                  }}
                />
              </div>
              <div>
                <div className="text-sm font-bold tracking-tight text-foreground">Meareg Teame</div>
                <div className="text-[10px] tracking-widest opacity-30 text-foreground">FULL STACK & AI ENGINEER</div>
              </div>
            </div>
          </motion.div>

          {/* Right column - Form + Links */}
          <div className="flex flex-col gap-4">
            <ContactForm />

            {/* Divider */}
            <div className="flex items-center gap-3 my-2">
              <div className="flex-1 h-px bg-foreground opacity-10" />
              <span className="text-[10px] tracking-[0.2em] opacity-20 text-foreground">OR</span>
              <div className="flex-1 h-px bg-foreground opacity-10" />
            </div>

            <ContactLink
              href="mailto:hello.meareg@gmail.com"
              icon={Mail}
              label="EMAIL"
              value="hello.meareg@gmail.com"
              hoveredLink={hoveredLink}
              setHoveredLink={setHoveredLink}
              id="email"
            />
            <ContactLink
              href="https://www.linkedin.com/in/meareg-teame/"
              icon={Linkedin}
              label="LINKEDIN"
              value="meareg-teame"
              hoveredLink={hoveredLink}
              setHoveredLink={setHoveredLink}
              id="linkedin"
            />
          </div>
=======
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
>>>>>>> 8369e6ebd4276dcb34e204f9c5abc8a794c1fddd
        </div>
      </div>
    </section>
  );
};
