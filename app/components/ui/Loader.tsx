"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-background">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1, 1, 0.9, 1], opacity: 1 }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="w-20 h-20 rounded-full border-4 border-primary border-t-transparent"
      />
    </div>
  );
}
