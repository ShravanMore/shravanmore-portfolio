"use client";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "Cimate Infomedia",
    period: "December 2025 - March 2026",
    location: "On-site",
    description: [
      "Built a full-stack job portal using Next.js (React, Tailwind CSS), PostgreSQL, and NextAuth.js v5 with role-based auth",
      "Implemented Google OAuth and responsive dashboards for seekers and employers",
      "Developed server actions for job posting, application tracking, multi-step onboarding, and password recovery across a 14+ table relational database",
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "PostgreSQL", "NextAuth.js v5", "OAuth"],
  },
  {
    title: "Frontend Developer Intern",
    company: "Testriq QA Lab LLP",
    period: "July 2025 - September 2025",
    location: "On-site",
    description: [
      "Built a responsive and performant web UIs using Next.js, TypeScript, and Tailwind CSS",
      "Enhanced website performance to 92% by leveraging Next.js features such as static site generation, dynamic routing, and image optimization",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Design Lead",
    company: "Google Developers Group (GDG) TSEC",
    period: "August 2024 - May 2025",
    location: "Thadomal Shahani Engineering College, Mumbai",
    description: [
      "Led design and branding for campus Google events while organizing workshops and hackathons",
    ],
    techStack: ["Design", "Branding", "Event Management"],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-mono tracking-wider mb-4" style={{ color: "var(--neon-cyan)" }}>
              ← Experience →
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text font-mono">
              Work Experience
            </h2>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px"
            style={{ background: "linear-gradient(to bottom, var(--neon-purple), var(--neon-cyan))" }}
          />

          {experiences.map((exp, index) => (
            <ScrollReveal
              key={index}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 0.15}
            >
              <div className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}>
                {/* Timeline dot */}
                <motion.div
                  whileInView={{ scale: [0, 1.3, 1] }}
                  viewport={{ once: true }}
                  className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full -translate-x-1/2 z-10 animate-pulse-glow"
                  style={{ background: "var(--neon-purple)" }}
                />

                {/* Card */}
                <div className={`ml-12 md:ml-0 md:w-[45%] ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <motion.div
                    whileHover={{
                      boxShadow: "0 0 30px var(--glow-purple)",
                      y: -5,
                    }}
                    transition={{ duration: 0.3 }}
                    className="glass rounded-2xl p-6 cursor-default"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-mono"
                        style={{ background: "rgba(139, 92, 246, 0.15)", color: "var(--neon-purple)" }}>
                        {exp.period}
                      </span>
                      <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
                        {exp.location}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold font-mono mb-1 gradient-text">
                      {exp.title}
                    </h3>
                    <p className="text-sm font-mono mb-4" style={{ color: "var(--neon-cyan)" }}>
                      @ {exp.company}
                    </p>
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-muted)" }}>
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--neon-cyan)" }} />
                          {desc}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech) => (
                        <span key={tech} className="px-2 py-1 rounded-md text-xs font-mono"
                          style={{ background: "rgba(6, 182, 212, 0.1)", color: "var(--neon-cyan)" }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
