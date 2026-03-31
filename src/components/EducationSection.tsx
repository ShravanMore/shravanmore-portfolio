"use client";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const education = [
  {
    degree: "B.E. - Artificial Intelligence and Data Science",
    institution: "Thadomal Shahani Engineering College",
    location: "Bandra, Mumbai",
    period: "2022 - 2026",
    cgpa: "9.27",
    gradient: "from-purple-500/20 to-blue-500/20",
  },
  {
    degree: "HSC - Computer Science",
    institution: "Pace Jr. Science College",
    location: "Borivali, Mumbai",
    period: "2020 - 2022",
    score: "MHT-CET - 94.95 percentile",
    gradient: "from-cyan-500/20 to-purple-500/20",
  },
  {
    degree: "SSC - Class 10th",
    institution: "St. Xaviers High School",
    location: "Mira Road, Thane",
    period: "2020",
    score: "Percentage - 92.60%",
    gradient: "from-blue-500/20 to-green-500/20",
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="relative py-24 sm:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-mono tracking-wider mb-4" style={{ color: "var(--neon-cyan)" }}>
              ← Education →
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text font-mono">
              Academic Background
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <ScrollReveal key={index} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -8 }}
                className="glass rounded-2xl p-6 sm:p-8 h-full relative overflow-hidden group cursor-default"
              >
                {/* Gradient highlight on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${edu.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Top bar */}
                <div className="relative z-10 flex items-center gap-2 mb-4">
                  <span className="w-3 h-3 rounded-full" style={{ background: "#ef4444" }} />
                  <span className="w-3 h-3 rounded-full" style={{ background: "#eab308" }} />
                  <span className="w-3 h-3 rounded-full" style={{ background: "#22c55e" }} />
                  <span className="ml-auto text-xs font-mono" style={{ color: "var(--text-muted)" }}>
                    {edu.period}
                  </span>
                </div>

                <div className="relative z-10">
                  <h3 className="text-lg sm:text-xl font-bold font-mono mb-2 gradient-text">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-mono mb-1" style={{ color: "var(--neon-cyan)" }}>
                    {edu.institution}
                  </p>
                  <p className="text-xs font-mono mb-4" style={{ color: "var(--text-muted)" }}>
                    📍 {edu.location}
                  </p>

                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1.5 rounded-lg text-sm font-mono glass"
                      style={{ color: "var(--neon-purple)" }}>
                      {edu.cgpa ? `CGPA: ${edu.cgpa}` : edu.score}
                    </span>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
