"use client";

import { useEffect, useState } from "react";

export default function ScrollFadeBackground() {
  const [intensity, setIntensity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const val = Math.min(window.scrollY / 300, 1);
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
        transition-all duration-150
        backdrop-blur-2xl
      "
      style={{
       
        background: `rgba(255, 255, 255, ${0.03 * intensity})`,

       
        boxShadow: `inset 0 0 60px rgba(255,255,255,${0.10 * intensity})`,

     
        WebkitBackdropFilter: `blur(${28 * intensity}px) saturate(${120 + intensity * 40}%)`,
        backdropFilter: `blur(${28 * intensity}px) saturate(${120 + intensity * 40}%)`,
      }}
    />
  );
}
