"use client";

import { useState } from "react";

import AppBar from "./components/AppBar";
import ProfileSection from "./components/ProfileSection";
import ProjectsSection from "./components/ProjectsSection";
import ScrollFadeBackground from "./components/ScrollFadeBackground";
import AnimatedBackground from "./components/background"; 
import SkillsSection from "./components/SkillsSection";
import StudiesSection from "./components/StudiesSection";
import Contact from "./components/Contact";

export default function Home() {

  const [theme, setTheme] = useState<"dark" | "light">("dark");

  return (
    <div className={`${theme}`}>
      
      {/* Fondo Animado Neural */}
      <AnimatedBackground />

      {/* Oscurecer en scroll */}
      <ScrollFadeBackground />

      {/* App Bar */}
      <AppBar 
        
      />

      {/* Perfil */}
      <ProfileSection />

      {/* seccion de estudios */  }
      <StudiesSection />

      {/* skill bars */}
      <SkillsSection />

      {/* Proyectos */}
      <ProjectsSection />

      {/* contacto */}
      <Contact />

    </div>
  );
}