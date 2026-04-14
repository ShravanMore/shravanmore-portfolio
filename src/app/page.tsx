"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const ParticleBackground = dynamic(
  () => import("@/components/ParticleBackground"),
  { ssr: false }
);

const LoadingScreen = dynamic(() => import("@/components/LoadingScreen"), {
  ssr: false,
});

export default function Home() {
  const [loadingDone, setLoadingDone] = useState(false);

  return (
    <>
      <LoadingScreen onDone={() => setLoadingDone(true)} />
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10 overflow-x-hidden">
        <HeroSection loadingDone={loadingDone} />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <SkillsSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
