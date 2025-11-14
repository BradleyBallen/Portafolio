"use client";

import { useState } from "react";

import AppBar from "./components/AppBar";
import ProfileSection from "./components/ProfileSection";
import ProjectsSection from "./components/ProjectsSection";
import ScrollFadeBackground from "./components/ScrollFadeBackground";
import AnimatedBackground from "./components/background"; 

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

      {/* Proyectos */}
      <ProjectsSection />

    </div>
  );
}