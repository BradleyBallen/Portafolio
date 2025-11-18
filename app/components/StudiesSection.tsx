"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo, useEffect, useRef, JSX } from "react";
import {
  FaUniversity,
  FaSchool,
  FaLanguage,
  FaCertificate,
  FaGraduationCap,
  FaBook,
  FaDownload,
  FaFilePdf,
} from "react-icons/fa";
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
  pdfFile?: string;
  hasPreview?: boolean;
}

export default function StudiesSection() {
  const [selected, setSelected] = useState<StudyItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  // removed isDragging state (cards are no longer draggable)
  const constraintsRef = useRef<HTMLDivElement | null>(null);

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
          "Algoritmos, Estructuras de Datos y Optimización",
        ],
        category: "Educación Superior",
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
          "Fundamentos de emprendimiento rural",
        ],
        category: "Educación Media",
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
          "Vocabulario especializado en tecnología",
        ],
        category: "Certificación Internacional",
      },
      {
        title: "Taller: Diseño Visual y Gráfico",
        place: "Universidad de Cundinamarca",
        years: "18 de Octubre de 2023",
        icon: <FaFilePdf />,
        iconComponent: FaFilePdf,
        iconColor: "from-red-400 to-orange-500",
        description:
          "Taller especializado en diseño visual y gráfico con énfasis en análisis de datos mediante Power BI. Se cubrieron técnicas de visualización de datos, diseño de dashboards interactivos y mejores prácticas para comunicar información compleja de forma clara y atractiva.",
        highlights: [
          "Visualización de datos con Power BI",
          "Diseño de dashboards interactivos",
          "Principios de diseño visual aplicado",
          "Comunicación efectiva mediante gráficos",
          "Análisis visual de grandes volúmenes de datos",
        ],
        category: "Taller Especializado",
        pdfFile: "design-workshop-powerbi.pdf",
        hasPreview: true,
      },
      {
        title: "Taller: Estadística y Qué Hago con los Datos",
        place: "Universidad de Cundinamarca",
        years: "19 de Octubre de 2023",
        icon: <FaBook />,
        iconComponent: FaBook,
        iconColor: "from-indigo-400 to-blue-500",
        description:
          "Taller práctico sobre estadística aplicada y análisis de datos. Se exploraron metodologías para recopilar, analizar e interpretar datos, transformándolos en insights útiles para la toma de decisiones informadas en contextos empresariales y tecnológicos.",
        highlights: [
          "Fundamentos de estadística descriptiva",
          "Análisis exploratorio de datos",
          "Interpretación de resultados estadísticos",
          "Casos de uso real en análisis de datos",
          "Herramientas y técnicas para transformar datos en decisiones",
        ],
        category: "Taller Especializado",
        pdfFile: "statistics-workshop-data.pdf",
        hasPreview: true,
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

  const handleDownloadPDF = (filename: string | undefined) => {
    if (!filename) return;
    const pdfPath = `/pdfs/${filename}`;
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Prevent accidental native drag on elements (extra safeguard)
  useEffect(() => {
    const onDragStart = (e: Event) => e.preventDefault();
    document.addEventListener("dragstart", onDragStart, { capture: true });
    return () => document.removeEventListener("dragstart", onDragStart, { capture: true });
  }, []);

  return (
    <section className="w-full flex flex-col items-center justify-start 
min-h-screen px-4 sm:px-6 pt-24 pb-12 sm:py-12">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold animated-gradient-text mb-8 sm:mb-16 text-center px-2"
      >
        Estudios y Experiencias de Aprendizaje
      </motion.h2>

      {/* CONTENEDOR 3D DEL CARRUSEL */}
      <div
  ref={constraintsRef}
  className="relative w-full max-w-6xl 
  min-h-[380px] sm:h-[350px] md:h-[450px] lg:h-[500px]
  flex items-center justify-center mt-10 sm:mt-16"
  style={{ perspective: "1500px" }}

        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)} // removed setIsDragging(false)
      >
        {studies.map((study, index) => {
          const style = getCardStyle(index);

          return (
            <motion.div
              key={`${study.title}-${index}`}
              /* removed drag-related props to disable dragging completely */
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
              className="absolute w-[260px] sm:w-[280px] md:w-[300px] cursor-pointer
              backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5
              border border-white/20 shadow-2xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center
              text-white transition-all hover:border-white/40"
              style={{
                transformStyle: "preserve-3d",
                willChange: "transform, opacity",
                pointerEvents: "auto",
                // small zIndex tweak to reduce repaint overlaps
                zIndex: 10 + (style.opacity ? Math.round(style.opacity * 10) : 0),
              }}
              // prevent any accidental native dragging behavior on the element
              onMouseDown={(e) => e.preventDefault()}
              onTouchStart={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            >
              <div
                className={`inline-block p-3 sm:p-4 rounded-2xl bg-gradient-to-br ${study.iconColor} mb-3 sm:mb-4
                shadow-lg transform transition-transform hover:rotate-12`}
              >
                <div className="text-4xl sm:text-5xl text-white drop-shadow-lg">{study.icon}</div>
              </div>

              <div className="space-y-1 sm:space-y-2">
                <h3
                  className="text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-white to-gray-300
                  bg-clip-text text-transparent line-clamp-2"
                >
                  {study.title}
                </h3>
                <p className="text-xs sm:text-sm text-cyan-300 font-medium line-clamp-1">{study.place}</p>
                <p className="text-xs text-gray-300 bg-white/10 inline-block px-2 sm:px-3 py-1 rounded-full">
                  {study.years}
                </p>
              </div>

              <div className="mt-3 sm:mt-4 flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 animate-pulse" />
                <span className="text-xs text-gray-300">Click para más</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* INDICADORES DE POSICIÓN */}
      <div className="flex gap-2 sm:gap-3 mt-8 sm:mt-12 flex-wrap justify-center">
        {studies.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 rounded-full ${
              currentIndex === index ? "w-8 h-3 bg-gradient-to-r from-cyan-400 to-blue-400" : "w-3 h-3 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* MODAL CON INFORMACIÓN DETALLADA */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-lg flex items-center justify-center p-3 sm:p-4 z-50 overflow-y-auto"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateX: -15 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateX: 15 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-gradient-to-br from-white/10 via-white/5 to-white/10
              border-2 border-white/20 backdrop-blur-3xl p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl
              text-white w-full max-w-xs sm:max-w-sm md:max-w-2xl shadow-2xl relative overflow-hidden my-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* EFECTO DE BRILLO DE FONDO */}
              <div
                className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-br from-cyan-500/20 to-purple-500/20
                rounded-full blur-3xl -z-10"
              />

              {/* HEADER DEL MODAL */}
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6">
                <div
                  className={`p-4 sm:p-5 rounded-2xl bg-gradient-to-br ${selected.iconColor}
                  shadow-xl flex-shrink-0`}
                >
                  <div className="text-4xl sm:text-5xl text-white">{selected.icon}</div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="inline-block px-2 sm:px-3 py-1 rounded-full bg-white/10 text-xs text-cyan-300 mb-2 border border-cyan-400/30">
                    {selected.category}
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent break-words">
                    {selected.title}
                  </h3>
                  <p className="text-cyan-300 font-medium flex items-center gap-2 text-xs sm:text-sm mb-1">
                    <FaGraduationCap className="text-base sm:text-lg flex-shrink-0" />
                    <span className="truncate">{selected.place}</span>
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400 flex items-center gap-2">
                    <FaCertificate className="text-purple-400 flex-shrink-0" />
                    {selected.years}
                  </p>
                </div>
              </div>

              {/* CONTENIDO DEL MODAL CON SCROLL */}
              <div className="space-y-4 sm:space-y-6 max-h-96 sm:max-h-[500px] overflow-y-auto pr-2 sm:pr-4">
                {/* SECCIÓN DESCRIPCIÓN */}
                <div>
                  <h4 className="text-base sm:text-lg font-semibold mb-2 flex items-center gap-2">
                    <FaBook className="text-cyan-400 flex-shrink-0" />
                    Descripción
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed bg-white/5 p-3 sm:p-4 rounded-xl border border-white/10">
                    {selected.description}
                  </p>
                </div>

                {/* SECCIÓN ASPECTOS DESTACADOS */}
                <div>
                  <h4 className="text-base sm:text-lg font-semibold mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse flex-shrink-0" />
                    Aspectos Destacados
                  </h4>
                  <ul className="space-y-2">
                    {selected.highlights.map((highlight, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-gray-300 bg-gradient-to-r
                        from-white/5 to-transparent p-2 sm:p-3 rounded-lg border-l-2 border-cyan-400/50"
                      >
                        <span className="text-cyan-400 mt-0.5 flex-shrink-0">•</span>
                        <span className="flex-1">{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* SECCIÓN VISUALIZACIÓN PREVIA (SOLO PARA TALLERES CON PDF) */}
                {selected.hasPreview && (
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold mb-3 flex items-center gap-2">
                      <FaFilePdf className="text-red-400 flex-shrink-0" />
                      Visualización Previa
                    </h4>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-3 sm:p-4">
                      <div className="bg-white/10 rounded-lg border border-white/20 overflow-hidden">
                        {/* VISTA PREVIA REAL DEL PDF */}
                        <iframe
                          src={`/pdfs/${selected.pdfFile}`}
                          className="w-full h-48 sm:h-64 md:h-80 rounded-lg"
                        ></iframe>
                      </div>

                      <p className="text-xs text-gray-400 mt-2 text-center">
                        Haz clic en descargar para acceder al documento completo
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* BOTONES DE ACCIÓN */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6 sm:mt-8">
                {selected.hasPreview && (
                  <button
                    onClick={() => handleDownloadPDF(selected.pdfFile)}
                    className="flex-1 py-2 sm:py-3 px-4 sm:px-6 bg-gradient-to-r from-red-500 to-orange-500
                    hover:from-red-600 hover:to-orange-600 rounded-xl font-semibold text-sm sm:text-base
                    transition-all transform hover:scale-105 shadow-lg hover:shadow-red-500/50
                    flex items-center justify-center gap-2"
                  >
                    <FaDownload className="text-lg" />
                    Descargar PDF
                  </button>
                )}
                <button
                  onClick={() => setSelected(null)}
                  className="flex-1 py-2 sm:py-3 px-4 sm:px-6 bg-gradient-to-r from-cyan-500 to-blue-500
                  hover:from-cyan-600 hover:to-blue-600 rounded-xl font-semibold text-sm sm:text-base
                  transition-all transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50"
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ESTILOS PERSONALIZADOS */}
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

        @media (max-width: 640px) {
          .animated-gradient-text {
            animation: gradient-shift 3s ease-in-out infinite;
          }
        }
      `,
        }}
      />
    </section>
  );
}
