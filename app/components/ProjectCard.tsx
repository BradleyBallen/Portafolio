"use client";

import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  desc: string;
}

export default function ProjectCard({ title, desc }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.25 }}
      className="
        p-6 rounded-2xl
        bg-white/10 backdrop-blur-2xl
        border border-white/10
        shadow-[0_0_25px_rgba(0,0,0,0.3)]
        hover:shadow-[0_0_40px_rgba(0,200,255,0.4)]
        transition
      "
    >
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-white/70 mt-2">{desc}</p>
    </motion.div>
  );
}
