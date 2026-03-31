"use client";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const skillCategories = [
  {
    title: "Languages",
    icon: "⚡",
    skills: ["Java", "Python", "MySQL", "TypeScript"],
    color: "var(--neon-purple)",
    gradient: "from-purple-500/20 to-blue-500/20",
  },
  {
    title: "Frontend",
    icon: "🎨",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"],
    color: "var(--neon-cyan)",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: ["Node.js", "Express.js", "REST APIs", "NextAuth.js"],
    color: "var(--neon-blue)",
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "Databases",
    icon: "🗄️",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "Firebase"],
    color: "var(--neon-pink)",
    gradient: "from-pink-500/20 to-purple-500/20",
  },
  {
    title: "Tools & Platforms",
    icon: "🛠️",
    skills: ["VS Code", "GitHub", "IntelliJ IDEA", "Git"],
    color: "var(--neon-cyan)",
    gradient: "from-cyan-500/20 to-green-500/20",
  },
  {
    title: "Concepts",
    icon: "🧠",
    skills: ["Data Structures & Algorithms", "Operating Systems", "DBMS", "Machine Learning"],
    color: "var(--neon-purple)",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-mono tracking-wider mb-4" style={{ color: "var(--neon-cyan)" }}>
              ← Skills →
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text font-mono">
              Tech Stack
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <ScrollReveal key={category.title} delay={catIndex * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-2xl p-6 h-full relative overflow-hidden group"
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <motion.span 
                      className="text-3xl"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {category.icon}
                    </motion.span>
                    <h3 className="text-xl font-bold font-mono" style={{ color: category.color }}>
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: catIndex * 0.1 + i * 0.05,
                        }}
                        whileHover={{ 
                          scale: 1.1,
                          boxShadow: `0 0 20px ${category.color}`,
                        }}
                        className="px-3 py-1.5 rounded-lg text-xs font-mono glass cursor-default"
                        style={{ color: category.color }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Decorative corner accent */}
                <div 
                  className="absolute top-0 right-0 w-20 h-20 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                  style={{ background: category.color }}
                />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
