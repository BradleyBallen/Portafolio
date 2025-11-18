"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20">
      <motion.div
        className="relative max-w-2xl w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Tarjeta con efecto liquid glass */}
        <div className="relative rounded-3xl p-8 md:p-12 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 shadow-2xl overflow-hidden">
          {/* Efectos de brillo y resplandor */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10 opacity-50" />
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-400/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-400/20 rounded-full blur-3xl" />
          
          {/* Contenido */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Foto con liquid glass en el fondo del círculo */}
            <motion.div
              className="relative mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {/* Círculo con efecto liquid glass detrás de la foto */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl border border-white/30 shadow-lg" />
              
              {/* Anillo decorativo exterior */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 blur-md animate-pulse" />
              
              {/* Imagen */}
              <img
                src="/profile.png"
                alt="Mi foto"
                className="relative w-40 h-40 rounded-full object-cover border-4 border-white/40 shadow-2xl"
              />
            </motion.div>

            {/* Título */}
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Hola, soy <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Bradley</span>
            </motion.h1>

            {/* Descripción */}
            <motion.p
              className="text-base md:text-lg text-white/80 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Apasionado por la tecnología y el desarrollo de soluciones que
            transforman ideas en resultados reales. Disfruto explorar nuevas
            herramientas, comprender cómo funcionan los sistemas y optimizar
            cada proceso. Me definen la lógica, la curiosidad y la dedicación
            por lograr resultados eficientes y de calidad. Siempre busco
            aprender, innovar y aportar valor en cada proyecto que emprendo.
            </motion.p>

            {/* Decoración inferior opcional */}
            <motion.div
              className="mt-8 flex gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              <div className="w-2 h-2 rounded-full bg-cyan-400/60" />
              <div className="w-2 h-2 rounded-full bg-blue-400/60" />
              <div className="w-2 h-2 rounded-full bg-purple-400/60" />
            </motion.div>
          </div>
        </div>

        {/* Sombra adicional debajo de la tarjeta */}
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl -z-10 opacity-50" />
      </motion.div>
    </section>
  );
}