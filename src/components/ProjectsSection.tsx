"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, MouseEvent } from "react";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    title: "Fin-Gyaan",
    description:
      "An interactive financial literacy platform designed to simplify complex financial concepts through gamification, real-world examples, and personalized recommendations. Built with React and Firebase, featuring interactive tutorials, quizzes, and dynamic visualizations to empower users to make informed financial decisions.",
    techStack: ["React", "Tailwind CSS", "Firebase", "Firestore", "Chart.js"],
    github: "https://github.com/ShravanMore/Fin-Gyaan",
    date: "2024",
    gradient: "from-green-500/20 to-blue-500/20",
  },
  {
    title: "MyBlogSpace",
    description:
      "Built a full-stack blog application using React, Node.js, and MySQL with JWT-based authentication and file upload support. Implemented dynamic routing, protected routes, and MySQL JOIN queries to display user-authored posts with category filtering.",
    techStack: ["React", "Node.js", "Express.js", "MySQL", "JWT"],
    github: "https://github.com/ShravanMore/blog_space",
    live: "https://blogspace-frontend-u97x.onrender.com/",
    date: "May 2025",
    gradient: "from-purple-500/20 to-blue-500/20",
  },
  {
    title: "Cultural AI",
    description:
      "A Hackathon project where I worked in a team to build an AI-driven platform for artifact recognition and cultural preservation. Developed the Climate Impact Analysis page to forecast environmental effects on historical sites using Gemini AI.",
    techStack: ["React JS", "Tailwind CSS", "Node.js", "Express.js", "Google AI Studio", "Gemini AI"],
    github: "https://github.com/ShravanMore/Cultural_AI",
    live: "https://culturalheritageexplorer.netlify.app/",
    date: "January 2025",
    gradient: "from-cyan-500/20 to-purple-500/20",
  },
];

function TiltCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), {
    stiffness: 300,
    damping: 30,
  });

  function handleMouse(e: MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 sm:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-mono tracking-wider mb-4" style={{ color: "var(--neon-cyan)" }}>
              ← Projects →
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text font-mono">
              Featured Projects
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.15}>
              <TiltCard>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="glass rounded-2xl p-6 sm:p-8 h-full relative overflow-hidden group cursor-default"
                >
                  {/* Gradient highlight on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Top bar */}
                  <div className="relative z-10 flex items-center gap-2 mb-4">
                    <span className="w-3 h-3 rounded-full" style={{ background: "#ef4444" }} />
                    <span className="w-3 h-3 rounded-full" style={{ background: "#eab308" }} />
                    <span className="w-3 h-3 rounded-full" style={{ background: "#22c55e" }} />
                    <span className="ml-auto text-xs font-mono" style={{ color: "var(--text-muted)" }}>
                      {project.date}
                    </span>
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-xl sm:text-2xl font-bold font-mono mb-3 gradient-text">
                      {project.title}
                    </h3>
                    <p className="text-sm mb-6 leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="px-3 py-1 rounded-lg text-xs font-mono glass"
                          style={{ color: "var(--neon-cyan)" }}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-mono transition-all duration-300 hover:shadow-[0_0_20px_var(--glow-purple)]"
                        style={{
                          background: "rgba(139, 92, 246, 0.15)",
                          color: "var(--neon-purple)",
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                        GitHub
                      </motion.a>
                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-mono transition-all duration-300 hover:shadow-[0_0_20px_var(--glow-cyan)]"
                          style={{
                            background: "rgba(34, 211, 238, 0.15)",
                            color: "var(--neon-cyan)",
                          }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                          Live Demo
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
