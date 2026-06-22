"use client";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const highlightedBio = [
  { text: "I'm a passionate ", highlight: false },
  { text: "Full Stack Developer", highlight: true },
  { text: " and ", highlight: false },
  { text: "AI & Data Science", highlight: true },
  { text: " student from ", highlight: false },
  { text: "Mumbai, India", highlight: true },
  { text: ". Currently pursuing my B.E. in Artificial Intelligence with a ", highlight: false },
  { text: "CGPA of 9.36", highlight: true },
  { text: ". I love building modern web applications, solving complex problems, and exploring the intersection of ", highlight: false },
  { text: "AI and software development", highlight: true },
  { text: ".", highlight: false },
];

const skillTags = [
  "React", "Next.js", "Node.js", "TypeScript", "Python",
  "Java", "MongoDB", "MySQL", "Tailwind CSS", "Express.js",
  "Firebase", "Git", "Machine Learning", "DSA",
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-mono tracking-wider mb-4" style={{ color: "var(--neon-cyan)" }}>
              ← About Me →
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text font-mono">
              Know Who I Am
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <ScrollReveal direction="left">
            <div className="glass rounded-2xl p-6 sm:p-8 hover:shadow-[0_0_30px_var(--glow-purple)] transition-all duration-500">
              <p className="text-base sm:text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {highlightedBio.map((part, i) =>
                  part.highlight ? (
                    <span key={i} style={{ color: "var(--neon-purple)" }} className="font-semibold">
                      {part.text}
                    </span>
                  ) : (
                    <span key={i}>{part.text}</span>
                  )
                )}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 text-sm font-mono" style={{ color: "var(--neon-cyan)" }}>
                  <span className="w-2 h-2 rounded-full" style={{ background: "var(--neon-cyan)" }} />
                  📍 Mumbai, India
                </div>
                <div className="flex items-center gap-2 text-sm font-mono" style={{ color: "var(--neon-purple)" }}>
                  <span className="w-2 h-2 rounded-full" style={{ background: "var(--neon-purple)" }} />
                  🎓 AI & Data Science
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Skill Tags */}
          <ScrollReveal direction="right">
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {skillTags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 20px var(--glow-purple)",
                  }}
                  className="px-4 py-2 rounded-xl glass font-mono text-sm cursor-default transition-colors duration-200 hover:text-[var(--neon-purple)]"
                  style={{ color: "var(--text-muted)" }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
