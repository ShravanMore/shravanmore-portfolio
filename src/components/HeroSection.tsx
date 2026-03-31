"use client";
import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const fullText = "Hi, I'm Shravan More";
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
        setIsTypingComplete(true);
        // Hide cursor after typing is complete
        setTimeout(() => setShowCursor(false), 500);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isTypingComplete) {
      const cursorInterval = setInterval(() => setShowCursor((prev) => !prev), 530);
      return () => clearInterval(cursorInterval);
    }
  }, [isTypingComplete]);

  // Floating orbs data - memoized to prevent re-renders
  const orbs = useMemo(() => [
    { size: 300, x: "10%", y: "20%", color: "var(--neon-purple)", delay: 0 },
    { size: 200, x: "70%", y: "60%", color: "var(--neon-blue)", delay: 2 },
    { size: 250, x: "80%", y: "10%", color: "var(--neon-cyan)", delay: 4 },
  ], []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Gradient orbs */}
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-20 blur-[100px]"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: orb.color,
          }}
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -40, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: orb.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative z-10 px-4 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-120px)]">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-4 inline-block px-4 py-1.5 rounded-full glass text-xs sm:text-sm font-mono tracking-wider"
              style={{ color: "var(--neon-cyan)" }}
            >
              ✦ Welcome to my portfolio
            </motion.div>

            <div className="mb-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="gradient-text font-mono">
                  {displayText}
                  {!isTypingComplete && (
                    <span
                      className={`inline-block w-[3px] h-[0.9em] ml-1 align-middle transition-opacity duration-100 ${
                        showCursor ? "opacity-100" : "opacity-0"
                      }`}
                      style={{ background: "var(--neon-purple)" }}
                    />
                  )}
                </span>
              </h1>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
              className="text-lg sm:text-xl md:text-2xl font-mono mb-10"
              style={{ color: "var(--text-muted)" }}
            >
              Full Stack Developer{" "}
              <span style={{ color: "var(--neon-purple)" }}>|</span> AI Enthusiast
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5 }}
              className="flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-4"
            >
              <a
                href="#projects"
                className="group relative px-8 py-3 rounded-xl font-mono text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_var(--glow-purple)]"
                style={{
                  background: "linear-gradient(135deg, var(--neon-purple), var(--neon-blue))",
                  color: "white",
                }}
              >
                <span className="relative z-10">View Projects</span>
              </a>
              <a
                href="#contact"
                className="px-8 py-3 rounded-xl font-mono text-sm glass hover:shadow-[0_0_20px_var(--glow-purple)] transition-all duration-300"
                style={{ color: "var(--neon-purple)" }}
              >
                Contact Me
              </a>
              
            </motion.div>
            <a
                href="/resume.pdf"
                download="Shravan_More_Resume.pdf"
                className="inline-flex items-center gap-2 px-8 py-3 my-5 rounded-xl font-mono text-sm glass hover:shadow-[0_0_20px_var(--glow-cyan)] transition-all duration-300"
                style={{ color: "var(--neon-cyan)" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download Resume
              </a>
          </div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-full blur-3xl opacity-30"
                style={{ background: "linear-gradient(135deg, var(--neon-purple), var(--neon-cyan))" }}
              />
              
              {/* Image container */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative glass rounded-3xl p-2 overflow-hidden"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="/profile.png"
                    alt="Shravan More"
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent opacity-40" />
                </div>
              </motion.div>

              {/* Floating decorative elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-20 h-20 rounded-full blur-xl opacity-50"
                style={{ background: "var(--neon-purple)" }}
              />
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full blur-xl opacity-50"
                style={{ background: "var(--neon-cyan)" }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 flex items-start justify-center p-1.5"
            style={{ borderColor: "var(--neon-purple)" }}
          >
            <motion.div
              animate={{ opacity: [0, 1, 0], y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 rounded-full"
              style={{ background: "var(--neon-purple)" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
