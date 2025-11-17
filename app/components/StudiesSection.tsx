"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo, useEffect, useRef, JSX } from "react";
import { FaUniversity, FaSchool, FaLanguage, FaCertificate, FaGraduationCap, FaBook } from "react-icons/fa";
import { IconType } from "react-icons";

interface StudyItem {
  title: string;
  place: string;
  years: string;
  icon: JSX.Element;
  iconComponent: IconType;
  iconColor: string;
  description: string;
  highlights: string[];
  category: string;
}

export default function StudiesSection() {
  const [selected, setSelected] = useState<StudyItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const constraintsRef = useRef(null);

  const studies: StudyItem[] = useMemo(
    () => [
      {
        title: "Ingeniería en Sistemas",
        place: "Universidad de Cundinamarca",
        years: "2021 - 2025 (Cursando)",
        icon: <FaUniversity />,
        iconComponent: FaUniversity,
        iconColor: "from-blue-400 to-cyan-400",
        description:
          "Programa de ingeniería enfocado en el desarrollo de soluciones tecnológicas innovadoras, con énfasis en metodologías ágiles y arquitecturas modernas.",
        highlights: [
          "Desarrollo Full Stack con tecnologías modernas",
          "Arquitectura de Software y Patrones de Diseño",
          "Bases de Datos Relacionales y NoSQL",
          "Redes, Seguridad y Cloud Computing",
          "Algoritmos, Estructuras de Datos y Optimización"
        ],
        category: "Educación Superior"
      },
      {
        title: "Bachiller Técnico Agropecuario",
        place: "I.E.D Tisquesusa — Susa, Cundinamarca",
        years: "2020",
        icon: <FaSchool />,
        iconComponent: FaSchool,
        iconColor: "from-green-400 to-emerald-500",
        description:
          "Formación técnica integral que combina conocimientos académicos con habilidades prácticas en el sector agropecuario, fomentando el emprendimiento rural.",
        highlights: [
          "Gestión de procesos agropecuarios sostenibles",
          "Técnicas de producción agrícola y pecuaria",
          "Manejo de recursos naturales",
          "Trabajo en equipo y liderazgo comunitario",
          "Fundamentos de emprendimiento rural"
        ],
        category: "Educación Media"
      },
      {
        title: "Certificación Inglés B2",
        place: "English Group — Ubaté",
        years: "2024 (Cursando)",
        icon: <FaLanguage />,
        iconComponent: FaLanguage,
        iconColor: "from-purple-400 to-pink-400",
        description:
          "Programa intensivo de inglés orientado al uso profesional del idioma, con enfoque en comunicación efectiva en entornos empresariales y técnicos.",
        highlights: [
          "Comunicación fluida en contextos profesionales",
          "Comprensión auditiva avanzada",
          "Escritura técnica y formal",
          "Presentaciones y negociaciones en inglés",
          "Vocabulario especializado en tecnología"
        ],
        category: "Certificación Internacional"
      },
    ],
    []
  );

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % studies.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [studies.length, isPaused]);

  const getCardStyle = (index: number) => {
    const position = (index - currentIndex + studies.length) % studies.length;

    const configs = [
      { x: 0, z: 0, rotateY: 0, scale: 1.1, opacity: 1 },
      { x: 320, z: -200, rotateY: -35, scale: 0.85, opacity: 0.7 },
      { x: -320, z: -200, rotateY: 35, scale: 0.85, opacity: 0.7 },
    ];

    return configs[position] || { x: 0, z: -400, rotateY: 0, scale: 0.6, opacity: 0 };
  };

  return (
    <section className="w-full flex flex-col items-center justify-center min-h-screen px-6 py-12">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold animated-gradient-text mb-16 text-center"
      >
        Estudios y Experiencias de Aprendizaje
      </motion.h2>

      <div
        ref={constraintsRef}
        className="relative w-full max-w-6xl h-[500px] flex items-center justify-center"
        style={{ perspective: "1500px" }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {studies.map((study, index) => {
          const style = getCardStyle(index);

          return (
            <motion.div
              key={`${study.title}-${index}`}
              drag
              dragConstraints={constraintsRef}
              dragElastic={0.1}
              onClick={() => setSelected(study)}
              animate={{
                x: style.x,
                z: style.z,
                rotateY: style.rotateY,
                scale: style.scale,
                opacity: style.opacity,
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 1,
              }}
              whileHover={{ scale: style.scale * 1.05, y: -10 }}
              className="absolute w-[300px] cursor-grab active:cursor-grabbing
              backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5
              border border-white/20 shadow-2xl rounded-3xl p-8 text-center
              text-white transition-all hover:border-white/40"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <div className={`inline-block p-4 rounded-2xl bg-gradient-to-br ${study.iconColor} mb-4
                shadow-lg transform transition-transform hover:rotate-12`}>
                <div className="text-5xl text-white drop-shadow-lg">
                  {study.icon}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300
                  bg-clip-text text-transparent">
                  {study.title}
                </h3>
                <p className="text-sm text-cyan-300 font-medium">{study.place}</p>
                <p className="text-xs text-gray-300 bg-white/10 inline-block px-3 py-1 rounded-full">
                  {study.years}
                </p>
              </div>

              <div className="mt-4 flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 animate-pulse" />
                <span className="text-xs text-gray-300">Click para más detalles</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="flex gap-3 mt-12">
        {studies.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 rounded-full ${
              currentIndex === index
                ? "w-8 h-3 bg-gradient-to-r from-cyan-400 to-blue-400"
                : "w-3 h-3 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-lg flex items-center justify-center p-4 z-50"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateX: -15 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateX: 15 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-gradient-to-br from-slate-900/95 to-purple-900/95
              border-2 border-white/20 backdrop-blur-2xl p-8 md:p-10 rounded-3xl
              text-white max-w-2xl w-full shadow-2xl relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-purple-500/20
                rounded-full blur-3xl -z-10" />

              <div className="flex items-start gap-6 mb-6">
                <div className={`p-5 rounded-2xl bg-gradient-to-br ${selected.iconColor}
                  shadow-xl flex-shrink-0`}>
                  <div className="text-5xl text-white">
                    {selected.icon}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs
                    text-cyan-300 mb-2 border border-cyan-400/30">
                    {selected.category}
                  </div>
                  <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-cyan-200
                    bg-clip-text text-transparent">
                    {selected.title}
                  </h3>
                  <p className="text-cyan-300 font-medium flex items-center gap-2">
                    <FaGraduationCap className="text-lg" />
                    {selected.place}
                  </p>
                  <p className="text-sm text-gray-400 mt-1 flex items-center gap-2">
                    <FaCertificate className="text-purple-400" />
                    {selected.years}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <FaBook className="text-cyan-400" />
                    Descripción
                  </h4>
                  <p className="text-gray-300 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/10">
                    {selected.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse" />
                    Aspectos Destacados
                  </h4>
                  <ul className="space-y-2">
                    {selected.highlights.map((highlight, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-3 text-gray-300 bg-gradient-to-r
                        from-white/5 to-transparent p-3 rounded-lg border-l-2 border-cyan-400/50"
                      >
                        <span className="text-cyan-400 mt-1 text-lg">•</span>
                        <span className="flex-1">{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                onClick={() => setSelected(null)}
                className="mt-8 w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-500
                hover:from-cyan-600 hover:to-blue-600 rounded-xl font-semibold
                transition-all transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50"
              >
                Cerrar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animated-gradient-text {
          background: linear-gradient(90deg,#60a5fa,#67e8f9,#a78bfa,#f0abfc,#60a5fa,#67e8f9);
          background-size: 200% 100%;
          animation: gradient-shift 4s ease-in-out infinite;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
      `,
        }}
      />
    </section>
  );
}
