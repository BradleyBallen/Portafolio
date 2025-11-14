"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiNodedotjs,
  SiGit,
  SiGithub,
} from "react-icons/si";

export default function SkillsSection() {
  const skills = useMemo(
    () => [
      { name: "Python", icon: <SiPython /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "React", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
    ],
    []
  );

  // Generador pseudoaleatorio determinista (basado en índice/seed)
  const pseudo = (seed: number) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  };

  const nameHash = (s: string) =>
    s.split("").reduce((acc, c) => acc * 31 + c.charCodeAt(0), 7);

  return (
    <section className="w-full flex flex-col items-center mt-24 px-6 mb-32">
      <h2 className="text-3xl font-bold text-white mb-10 text-center">
        Mis Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full max-w-5xl">
        {skills.map((skill, i) => {
          const seed = i + nameHash(skill.name);
          const randomScale = 1 + pseudo(seed) * 0.15; // determinista 1.0 a 1.15
          const randomDelay = pseudo(seed + 1) * 0.4; // determinista 0 a 0.4

          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: randomScale }}
              transition={{ duration: 0.6, delay: randomDelay }}
              whileHover={{
                scale: randomScale + 0.12,
                rotate: pseudo(seed + 2) > 0.5 ? 3 : -3,
                boxShadow: "0 0 35px rgba(0,200,255,0.45)",
              }}
              className="
                backdrop-blur-2xl bg-white/10
                border border-white/20
                shadow-[inset_0_0_1px_rgba(255,255,255,0.5)]
                rounded-2xl 
                flex flex-col items-center justify-center
                py-6 px-4 cursor-pointer
                transition-all duration-300
                hover:bg-white/15
              "
            >
              <div className="text-white text-4xl mb-3 drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]">
                {skill.icon}
              </div>

              <p className="text-white/90 text-sm">{skill.name}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
