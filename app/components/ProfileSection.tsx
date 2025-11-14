"use client";

import { motion } from "framer-motion";

export default function ProfileSection() {
  return (
    <section className="w-full flex justify-center mt-32 px-6 mb-24">
      <div
        className="
          flex flex-col items-center text-center
          md:flex-row md:items-center md:text-left
          gap-10 max-w-4xl
        "
      >

        {/* 🔵 Imagen completamente redonda con hover minimalista */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="
            w-44 h-44 shrink-0
            rounded-full overflow-hidden
            bg-white/10 backdrop-blur-xl
            border border-white/20
            shadow-[0_0_25px_rgba(0,200,255,0.25)]
            hover:shadow-[0_0_55px_rgba(0,200,255,0.55)]
            transition-all duration-300
            flex items-center justify-center
          "
        >
          <img
            src="/profile.jpg"
            alt="profile image"
            className="w-full h-full object-cover rounded-full"
          />
        </motion.div>

        <div className="max-w-xl">
          <h2 className="text-3xl font-bold text-white mb-3">
            Hola, soy Bradley
          </h2>

          <p className="text-white/80 text-lg leading-relaxed">
            Apasionado por la tecnología y el desarrollo de soluciones que
            transforman ideas en resultados reales. Disfruto explorar nuevas
            herramientas, comprender cómo funcionan los sistemas y optimizar
            cada proceso. Me definen la lógica, la curiosidad y la dedicación
            por lograr resultados eficientes y de calidad. Siempre busco
            aprender, innovar y aportar valor en cada proyecto que emprendo.
          </p>
        </div>

      </div>
    </section>
  );
}
