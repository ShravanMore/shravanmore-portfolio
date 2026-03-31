"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";

function AnimatedCounter({ target, suffix = "", duration = 2 }: { target: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = target / (duration * 60);
    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(interval);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

const achievements = [
  {
    number: 3,
    suffix: "x",
    label: "Hackathon Winner",
    icon: "🏆",
    color: "var(--neon-purple)",
  },
  {
    number: 200,
    suffix: "+",
    label: "LeetCode Problems",
    icon: "💻",
    color: "var(--neon-cyan)",
  },
  {
    number: 10,
    suffix: "",
    label: "Sem VII SGPA",
    icon: "🎯",
    color: "var(--neon-blue)",
  },
  {
    number: 9,
    suffix: ".27",
    label: "Overall CGPA",
    icon: "📊",
    color: "var(--neon-pink)",
  },
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="relative py-24 sm:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-mono tracking-wider mb-4" style={{ color: "var(--neon-cyan)" }}>
              ← Achievements →
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text font-mono">
              Milestones
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <ScrollReveal key={item.label} delay={index * 0.1}>
              <motion.div
                whileHover={{
                  y: -8,
                  boxShadow: `0 0 40px ${item.color}30`,
                }}
                transition={{ duration: 0.3 }}
                className="glass rounded-2xl p-6 text-center group cursor-default"
              >
                <motion.span
                  className="text-4xl block mb-4"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  {item.icon}
                </motion.span>
                <div className="text-3xl sm:text-4xl font-bold font-mono mb-2" style={{ color: item.color }}>
                  <AnimatedCounter target={item.number} suffix={item.suffix} />
                </div>
                <p className="text-sm font-mono" style={{ color: "var(--text-muted)" }}>
                  {item.label}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
