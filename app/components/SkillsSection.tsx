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
  SiCplusplus,
  SiGoogle,
  SiGooglecloud,
  SiGooglegemini,
  SiFirebase,
  SiPrisma,
  SiPostgresql,
  SiDjango,
  SiFlutter,
  SiDart,
  SiHtml5,
  SiCss3,
  SiLinux,
  SiAndroidstudio,
} from "react-icons/si";

import { FaChartBar, FaCoffee } from "react-icons/fa";

export default function SkillsSection() {
  const skills = useMemo(
    () => [
      { name: "Python", icon: <SiPython />, color: "#3776AB" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
      { name: "React", icon: <SiReact />, color: "#61DAFB" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "#ffffff" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
      { name: "Git", icon: <SiGit />, color: "#F05032" },
      { name: "GitHub", icon: <SiGithub />, color: "#ffffff" },

      // Additional skills requested
      { name: "Power BI", icon: <FaChartBar />, color: "#F2C811" },
      { name: "Java", icon: <FaCoffee />, color: "#5382A1" },
      { name: "C++", icon: <SiCplusplus />, color: "#00599C" },
      { name: "Google APIs", icon: <SiGoogle />, color: "#4285F4" },
      { name: "Google Cloud", icon: <SiGooglecloud />, color: "#4285F4" },
      { name: "Gemini Api", icon: <SiGooglegemini />, color: "#10A37F" },
      { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
      { name: "Prisma", icon: <SiPrisma />, color: "#0EA5A4" },
      { name: "Postgres", icon: <SiPostgresql />, color: "#336791" },
      { name: "Django", icon: <SiDjango />, color: "#092E20" },
      { name: "Flutter", icon: <SiFlutter />, color: "#02569B" },
      { name: "Dart", icon: <SiDart />, color: "#0175C2" },
      { name: "Android", icon: <SiAndroidstudio />, color: "#47A248" },

      // Core web skills
      { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
      { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" },
      { name: "Linux", icon: <SiLinux />, color: "#FCC624" },
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
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes gradient-shift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          @keyframes blink-cursor {
            0%, 49% { opacity: 1; }
            50%, 100% { opacity: 0; }
          }
          .animated-gradient-text {
            background: linear-gradient(90deg,#60a5fa,#67e8f9,#a78bfa,#f0abfc,#60a5fa,#67e8f9);
            background-size: 200% 100%;
            animation: gradient-shift 3.5s ease-in-out infinite;
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
          }
          .cursor-blink { animation: blink-cursor 0.8s step-end infinite; }
        `,
        }}
      />

      <div className="mb-8 text-center relative">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold animated-gradient-text inline-block"
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          Skills
        </motion.h2>
        <span className="cursor-blink ml-2 text-3xl font-bold text-cyan-300">|</span>
      </div>

      <div className="w-full max-w-6xl backdrop-blur-2xl bg-white/8 border border-white/12 shadow-[inset_0_0_1px_rgba(255,255,255,0.4)] rounded-2xl p-6 sm:p-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, i) => {
            const seed = i + nameHash(skill.name);
            const randomDelay = pseudo(seed + 1) * 1.8;

            return (
              <motion.div
                key={skill.name}
                initial={{ scale: 1 }}
                animate={{
                  scale: [1, 1.12, 1], // intensidad media
                }}
                transition={{
                  duration: 2.2,
                  delay: randomDelay,
                  repeat: Infinity,
                  repeatDelay: pseudo(seed + 3) * 2.5,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.18, // un hover más notorio
                  y: -6,
                  transition: { duration: 0.18, ease: "easeOut" },
                }}
                className="flex flex-col items-center justify-center cursor-pointer select-none"
              >
                <div
                  className="text-5xl mb-2 transition-transform"
                  style={{
                    color: skill.color,
                    textShadow: "0 6px 18px rgba(8,14,26,0.35)",
                  }}
                >
                  {skill.icon}
                </div>

                <p className="text-white/90 text-sm text-center max-w-[10ch] truncate">
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
