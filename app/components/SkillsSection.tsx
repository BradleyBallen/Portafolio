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
      { name: "Python", icon: <SiPython />, color: "#3776AB" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
      { name: "React", icon: <SiReact />, color: "#61DAFB" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "#FFFFFF" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
      { name: "Git", icon: <SiGit />, color: "#F05032" },
      { name: "GitHub", icon: <SiGithub />, color: "#FFFFFF" },
    ],
    []
  );

  const pseudo = (seed: number) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  };

  const nameHash = (s: string) =>
    s.split("").reduce((acc, c) => acc * 31 + c.charCodeAt(0), 7);

  return (
    <section className="w-full flex flex-col items-center mt-24 px-6 mb-32">
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes gradient-shift {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          
          @keyframes blink-cursor {
            0%, 49% {
              opacity: 1;
            }
            50%, 100% {
              opacity: 0;
            }
          }
          
          .animated-gradient-text {
            background: linear-gradient(
              90deg,
              #60a5fa,
              #67e8f9,
              #a78bfa,
              #60a5fa,
              #67e8f9
            );
            background-size: 200% 100%;
            animation: gradient-shift 3s ease-in-out infinite;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            color: transparent;
          }
          
          .cursor-blink {
            animation: blink-cursor 0.7s step-end infinite;
          }
        `
      }} />
      
      <div className="mb-10 text-center relative">
        <motion.h2
          className="text-3xl font-bold animated-gradient-text inline-block"
          animate={{
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Skills
        </motion.h2>
        <span className="cursor-blink ml-1 text-3xl font-bold text-cyan-300">|</span>
      </div>

      <div className="w-full max-w-5xl backdrop-blur-2xl bg-white/10 border border-white/20 shadow-[inset_0_0_1px_rgba(255,255,255,0.5)] rounded-2xl p-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, i) => {
            const seed = i + nameHash(skill.name);
            const randomDelay = pseudo(seed + 1) * 2;

            return (
              <motion.div
                key={skill.name}
                initial={{ scale: 1 }}
                animate={{
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 2,
                  delay: randomDelay,
                  repeat: Infinity,
                  repeatDelay: pseudo(seed + 3) * 3,
                }}
                whileHover={{
                  scale: 1.15,
                  transition: { duration: 0.2 },
                }}
                className="flex flex-col items-center justify-center cursor-pointer"
              >
                <div
                  className="text-5xl mb-2 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>
                <p className="text-white/90 text-sm text-center">
                  {skill.name}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}