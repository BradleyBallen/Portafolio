"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export default function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const minTime = setTimeout(() => setShow(false), 1800);
    return () => clearTimeout(minTime);
  }, []);

  if (!show) return null;

  return (
    <div
      className="
        fixed inset-0 z-50 flex flex-col items-center justify-center
        backdrop-blur-lg 
        bg-black/20              /* 🔥 Más transparente */
        backdrop-brightness-125  /* 🔥 Aclara lo que hay detrás */
        backdrop-saturate-150    /* 🔥 Hace más visibles los colores del fondo */
      "
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="
          w-64 h-64 rounded-full bg-white/10 backdrop-blur-2xl 
          border border-white/20 shadow-[0_0_45px_rgba(0,200,255,0.4)]
          flex items-center justify-center relative overflow-hidden
        "
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          className="
            absolute inset-0 rounded-full
            border-4 border-t-transparent border-cyan-400 opacity-60
          "
        />

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="text-cyan-400 text-xl font-bold tracking-wide drop-shadow-lg"

        >
          Cargando…
        </motion.span>
      </motion.div>

      <div className="mt-10 w-64">
        <div className="flex items-center gap-3 mb-2">
          <Zap className="text-cyan-400 animate-pulse" size={28} />

          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-white text-sm"
          >
            Iniciando…
          </motion.div>
        </div>

        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: ["0%", "80%", "100%"] }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="h-full bg-cyan-400"
          />
        </div>
      </div>
    </div>
  );
}
