"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <motion.img
        src="/profile.jpg"
        alt="Mi foto"
        className="w-40 h-40 rounded-full object-cover mb-6 border-4 border-primary shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.h1
        className="text-4xl font-bold mb-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Hola, soy <span className="text-primary">Bradley</span>
      </motion.h1>

      <motion.p
        className="max-w-xl text-lg opacity-80"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Desarrollador web enfocado en crear interfaces modernas, rápidas y bien estructuradas.
      </motion.p>
    </section>
  );
}
