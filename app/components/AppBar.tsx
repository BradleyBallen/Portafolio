"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AppBar() {
  const words = ["Bradley Ballen"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [elevated, setElevated] = useState(false);

  /* Typing effect */
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

  /* Elevation on scroll */
  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      animate={{
        boxShadow: elevated
          ? "0 2px 18px rgba(0,0,0,0.22)"
          : "0 0 0 rgba(0,0,0,0)",
        scale: elevated ? 1.004 : 1,
      }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="
        fixed top-0 left-0 
        w-full 
        z-40

        /* Liquid Glass */
        backdrop-blur-2xl 
        bg-white/12 

        /* Solo bordes inferiores */
        rounded-b-2xl

        /* Borde interior estilo iOS */
        ring-0 border-b border-white/20
        shadow-[inset_0_-1px_1px_rgba(255,255,255,0.35)]

        /* Glow suave */
        before:absolute before:inset-0 
        before:rounded-b-2xl 
        before:pointer-events-none
        before:shadow-[0_0_25px_rgba(255,255,255,0.15)]

        flex items-center justify-center
        px-6 py-4
      "
    >
      <motion.h1
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-white text-lg md:text-xl font-semibold"
      >
        {text}
        <span className="text-cyan-300/70 animate-pulse">|</span>
      </motion.h1>
    </motion.header>
  );
}