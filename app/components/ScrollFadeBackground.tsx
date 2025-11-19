"use client";

import { useEffect, useState } from "react";

export default function ScrollFadeBackground() {
  const [intensity, setIntensity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Aumenté de 300 a 600 para una transición más lenta y progresiva
      const val = Math.min(window.scrollY / 600, 1);
      setIntensity(val);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="
        pointer-events-none 
        fixed inset-0 
        z-[-5]
        transition-all duration-500 ease-out
      "
      style={{
       
        background: `rgba(255, 255, 255, ${0.05 * intensity})`,

      
        boxShadow: `inset 0 0 60px rgba(255,255,255,${0.05 * intensity})`,

      
        WebkitBackdropFilter: `blur(${8 * intensity}px) saturate(${120 + intensity * 30}%)`,
        backdropFilter: `blur(${8 * intensity}px) saturate(${120 + intensity * 30}%)`,
      }}
    />
  );
}