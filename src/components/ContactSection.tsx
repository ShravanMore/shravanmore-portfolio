import { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setStatusMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setStatusMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setStatusMessage(data.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setStatusMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-mono tracking-wider mb-4" style={{ color: "var(--neon-cyan)" }}>
              ← Contact →
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text font-mono">
              Get In Touch
            </h2>
            <p className="mt-4 font-mono text-sm" style={{ color: "var(--text-muted)" }}>
              Have a project in mind? Let&apos;s build something amazing together.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Form */}
          <ScrollReveal direction="left">
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 sm:p-8 space-y-5">
              <div>
                <label className="block text-sm font-mono mb-2" style={{ color: "var(--text-muted)" }}>
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl glass text-sm font-mono outline-none transition-all duration-300 focus:shadow-[0_0_15px_var(--glow-purple)]"
                  style={{ color: "var(--foreground)", background: "rgba(255,255,255,0.03)" }}
                />
              </div>
              <div>
                <label className="block text-sm font-mono mb-2" style={{ color: "var(--text-muted)" }}>
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl glass text-sm font-mono outline-none transition-all duration-300 focus:shadow-[0_0_15px_var(--glow-purple)]"
                  style={{ color: "var(--foreground)", background: "rgba(255,255,255,0.03)" }}
                />
              </div>
              <div>
                <label className="block text-sm font-mono mb-2" style={{ color: "var(--text-muted)" }}>
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl glass text-sm font-mono outline-none transition-all duration-300 focus:shadow-[0_0_15px_var(--glow-purple)] resize-none"
                  style={{ color: "var(--foreground)", background: "rgba(255,255,255,0.03)" }}
                />
              </div>
              <motion.button
                whileHover={status !== 'loading' ? { scale: 1.02, boxShadow: "0 0 30px var(--glow-purple)" } : {}}
                whileTap={status !== 'loading' ? { scale: 0.98 } : {}}
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-3 rounded-xl font-mono text-sm text-white transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                style={{
                  background: "linear-gradient(135deg, var(--neon-purple), var(--neon-blue))",
                }}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message ✨'}
              </motion.button>

              {statusMessage && (
                <div 
                  className={`mt-4 p-3 rounded-xl text-sm font-mono text-center ${status === 'error' ? 'text-red-400 bg-red-400/10' : 'text-green-400 bg-green-400/10'}`}
                >
                  {statusMessage}
                </div>
              )}
            </form>
          </ScrollReveal>

          {/* Info */}
          <ScrollReveal direction="right">
            <div className="flex flex-col gap-6 justify-center h-full">
              {/* Social Links */}
              <div className="glass rounded-2xl p-6">
                <h3 className="text-lg font-bold font-mono gradient-text mb-4">Connect With Me</h3>
                <div className="space-y-4">
                  <a
                    href="https://github.com/ShravanMore"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 px-4 py-3 rounded-xl glass hover:shadow-[0_0_20px_var(--glow-purple)] transition-all duration-300 group"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ color: "var(--neon-purple)" }}><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                    <span className="font-mono text-sm group-hover:text-[var(--neon-purple)] transition-colors" style={{ color: "var(--text-muted)" }}>GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shravanmore/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 px-4 py-3 rounded-xl glass hover:shadow-[0_0_20px_var(--glow-blue)] transition-all duration-300 group"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ color: "var(--neon-blue)" }}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    <span className="font-mono text-sm group-hover:text-[var(--neon-blue)] transition-colors" style={{ color: "var(--text-muted)" }}>LinkedIn</span>
                  </a>
                  <a
                    href="https://leetcode.com/u/ShravanMore/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 px-4 py-3 rounded-xl glass hover:shadow-[0_0_20px_#FFA116] transition-all duration-300 group"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#FFA116" }}><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.956-.207a1.378 1.378 0 0 0-.207-1.953l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>
                    <span className="font-mono text-sm group-hover:text-[#FFA116] transition-colors" style={{ color: "var(--text-muted)" }}>LeetCode</span>
                  </a>
                  <a
                    href="mailto:shravanmore125@gmail.com"
                    className="flex items-center gap-4 px-4 py-3 rounded-xl glass hover:shadow-[0_0_20px_var(--glow-cyan)] transition-all duration-300 group"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--neon-cyan)" }}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    <span className="font-mono text-sm group-hover:text-[var(--neon-cyan)] transition-colors" style={{ color: "var(--text-muted)" }}>Email Me</span>
                  </a>
                </div>
              </div>

              {/* Quick info */}
              <div className="glass rounded-2xl p-6">
                <p className="text-sm font-mono" style={{ color: "var(--text-muted)" }}>
                  📍 Based in <span style={{ color: "var(--neon-purple)" }}>Mumbai, India</span>
                </p>
                <p className="text-sm font-mono mt-2" style={{ color: "var(--text-muted)" }}>
                  ✅ Available for freelance & full-time opportunities
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
