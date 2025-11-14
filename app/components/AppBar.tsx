"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

interface AppBarProps {
  onToggleTheme: () => void;
  theme: "dark" | "light";
}

export default function AppBar({ onToggleTheme, theme }: AppBarProps) {

  const words = ["Bradley Ballen"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[index];
    const speed = isDeleting ? 60 : 120;

    const timeout = setTimeout(() => {
      setText(prev =>
        isDeleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 900);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex(prev => (prev + 1) % words.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting]);

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-40
        backdrop-blur-xl bg-black/20 
        border-b border-white/10 
        flex items-center justify-between px-6 py-4
      "
    >
      <motion.h1
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-white text-lg md:text-xl font-semibold"
      >
        {text}
        <span className="text-cyan-400 animate-pulse">|</span>
      </motion.h1>

      <button
        onClick={onToggleTheme}
        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
      >
        {theme === "dark" ? (
          <Sun size={22} className="text-yellow-300" />
        ) : (
          <Moon size={22} className="text-cyan-300" />
        )}
      </button>
    </header>
  );
}
