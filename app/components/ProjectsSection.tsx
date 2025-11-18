"use client";

import { useState, useMemo, JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiPython,
  SiDjango,
  SiPostgresql,
  SiFlutter,
  SiFirebase,
  SiPrisma,
  SiGithub,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";

type Project = {
  id: string;
  title: string;
  short: string;
  long: string;
  tech: { name: string; icon: JSX.Element }[];
  github?: string;
  years?: string; // <-- añadido: evita el error al usar open.years
};

export default function ProjectsSection() {
  const projects: Project[] = useMemo(
    () => [
      {
        id: "gamer-social",
        title: "GamerSocial — Plataforma social para gamers",
        short:
          "Red social con animaciones 3D, perfil social, backend y MongoDB.",
        long:
          "Plataforma social orientada a la comunidad gamer que integra escenas 3D y animaciones con Three.js para experiencias inmersivas. Backend con MongoDB para gestión de usuarios, publicaciones y chats en tiempo real. Integración con la API de Gemini para funciones de IA como recomendaciones personalizadas y moderación automática de contenido.",
        tech: [
          { name: "Three.js", icon: <SiReact className="text-[#61DAFB]" /> },
          { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
          { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
          { name: "HTML/CSS/JS", icon: <SiHtml5 className="text-[#E34F26]" /> },
          { name: "IA (Gemini)", icon: <SiJavascript className="text-[#F7DF1E]" /> },
        ],
        github: "https://github.com/BradleyBallen/page_gamer.git",
      },
      {
        id: "english-learning",
        title: "EnglishLearn — Plataforma de aprendizaje con IA",
        short:
          "Sitio para aprender inglés con ejercicios asistidos por IA.",
        long:
          "Portal educativo para el aprendizaje del idioma inglés que utiliza funciones serverless con Netlify para el backend y la orquestación de contenido. Implementa la API de Gemini para tutoría interactiva y generación de ejercicios personalizados adaptados al nivel del estudiante. Frontend desarrollado con TypeScript para una experiencia dinámica y con tipado robusto.",
        tech: [
          { name: "Netlify", icon: <SiNodedotjs className="text-[#339933]" /> },
          { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
          { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
        ],
        github: "https://github.com/BradleyBallen/Desarrollo.git",
      },
      {
        id: "recycling-app",
        title: "Recyplus — App multiplataforma de gestión de reciclaje",
        short:
          "App Flutter con Firebase para coordinar usuarios y recicladores.",
        long:
          "Aplicación móvil multiplataforma desarrollada con Flutter que facilita la recolección y gestión de materiales reciclables. Implementa arquitectura MVVM para separación de responsabilidades, Firebase como backend completo (autenticación, Firestore, Storage) y Google Maps API para localización en tiempo real y optimización de rutas de recolección.",
        tech: [
          { name: "Flutter", icon: <SiFlutter className="text-[#02569B]" /> },
          { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
          { name: "Dart", icon: <SiFlutter className="text-[#0175C2]" /> },
        ],
        github: "https://github.com/proyectpro/Recyplus_v1.git",
      },
      {
        id: "portfolio",
        title: "Mi Portafolio — Este sitio",
        short:
          "Portafolio personal desarrollado con Next.js y desplegado en Vercel.",
        long:
          "Portafolio personal que muestra proyectos, habilidades y animaciones con un fondo dinámico interactivo. Construido con Next.js 14 (App Router), TypeScript para type-safety, TailwindCSS para estilos modernos, Framer Motion para animaciones fluidas y desplegado en Vercel. Arquitectura optimizada para rendimiento, SEO y experiencia de usuario.",
        tech: [
          { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
          { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
          { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
          { name: "Vercel", icon: <SiNextdotjs className="text-white" /> },
        ],
        github: "https://github.com/BradleyBallen/Portafolio.git",
      },
      {
        id: "library-api",
        title: "LibraryAPI — API REST para gestión de biblioteca",
        short:
          "API completa (CRUD) con Django + PostgreSQL para modelos de biblioteca.",
        long:
          "API RESTful completa diseñada para administrar recursos de una biblioteca digital (libros, usuarios, préstamos, devoluciones). Implementa endpoints robustos con operaciones CRUD completas, sistema de permisos y autenticación JWT, y documentación automática con Swagger. Desarrollada con Django REST Framework y PostgreSQL para garantizar integridad referencial y escalabilidad.",
        tech: [
          { name: "Django", icon: <SiDjango className="text-[#092E20]" /> },
          { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
          { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
        ],
        github: "https://github.com/BradleyBallen/Api_biblioteca.git",
      },
      {
        id: "lang-platform",
        title: "LangStudio — Plataforma de idiomas (React + Node)",
        short:
          "Web de aprendizaje con React, Node, Prisma y PostgreSQL.",
        long:
          "Plataforma completa de aprendizaje de idiomas con interfaz en React y backend en Node.js/Express. Gestión de datos eficiente mediante Prisma ORM con PostgreSQL, implementando endpoints RESTful para administración de usuarios, progreso de aprendizaje, sesiones y contenidos educativos. Totalmente tipada con TypeScript y diseñada con enfoque en accesibilidad y rendimiento óptimo.",
        tech: [
          { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
          { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
          { name: "Prisma", icon: <SiPrisma className="text-[#2D3748]" /> },
          { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
        ],
        github: "https://github.com/BradleyBallen/Page_React.git",
      },
    ],
    []
  );

  const [open, setOpen] = useState<Project | null>(null);

  return (
    <section className="w-full flex flex-col items-center px-6 pb-20 pt-6">
      {/* Titulo animado (consistente con otras secciones) */}
      <div className="mb-8 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold animated-gradient-text inline-block"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Proyectos
        </motion.h2>
      </div>

      {/* Grid de tarjetas */}
      <div className="w-full max-w-6xl grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <motion.article
            key={p.id}
            layout
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ translateY: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            className="group relative rounded-2xl p-6 bg-gradient-to-br from-white/6 to-white/3 backdrop-blur-xl border border-white/10 shadow-lg cursor-pointer overflow-hidden"
            onClick={() => setOpen(p)}
          >
            {/* Efecto de brillo al hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-xl" />
              <div className="absolute inset-0 border-2 border-cyan-400/40 rounded-2xl" />
            </div>

            <div className="relative z-10 flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold text-white flex-1">{p.title}</h3>
              <div className="flex items-center gap-2 flex-shrink-0">
                <a
                  href={p.github ?? "#"}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!p.github) e.preventDefault();
                    else {
                      window.open(p.github, "_blank", "noopener,noreferrer");
                    }
                  }}
                  className="p-2 rounded-full bg-black/20 hover:bg-black/30 transition"
                  title="Ver en GitHub"
                >
                  <SiGithub className="text-white text-lg" />
                </a>
              </div>
            </div>

            <p className="relative z-10 mt-3 text-sm text-white/80 leading-relaxed">{p.short}</p>

            <div className="relative z-10 mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <div
                  key={t.name}
                  className="flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-md bg-white/5 border border-white/6 backdrop-blur-sm"
                  title={t.name}
                >
                  <span className="text-base">{t.icon}</span>
                  <span className="text-white/90 font-medium">{t.name}</span>
                </div>
              ))}
            </div>

            <div className="relative z-10 mt-4 flex items-center justify-between">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen(p);
                }}
                className="text-sm font-medium px-4 py-2 rounded-md bg-cyan-500/90 hover:bg-cyan-500 transition text-white shadow-lg shadow-cyan-500/20"
              >
                Ver más
              </button>

              <div className="text-xs text-white/60 hidden sm:block">Click para detalles</div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Modal de detalles */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="project-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setOpen(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 12 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 12 }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
              className="w-full max-w-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-3xl border border-white/20 rounded-2xl shadow-2xl p-6 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex-1 min-w-[200px]">
                  <h3 className="text-2xl font-bold text-white">{open.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{open.years ?? ""}</p>
                </div>

                <div className="flex gap-2 flex-shrink-0">
                  {open.github && (
                    <button
                      onClick={() =>
                        window.open(open.github, "_blank", "noopener,noreferrer")
                      }
                      className="flex items-center gap-2 bg-black/30 px-3 py-2 rounded-md hover:bg-black/40 transition text-white text-sm"
                    >
                      <SiGithub className="text-lg" /> <span className="hidden sm:inline">Repositorio</span>
                    </button>
                  )}

                  <button
                    onClick={() => setOpen(null)}
                    className="px-3 py-2 rounded-md bg-white/10 hover:bg-white/15 transition text-white text-sm"
                  >
                    Cerrar
                  </button>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <p className="text-sm text-white/90 leading-relaxed">{open.long}</p>

                  <div className="mt-6">
                    <h4 className="text-base font-semibold text-white/95 mb-3">Tecnologías utilizadas</h4>
                    <div className="flex flex-wrap gap-2">
                      {open.tech.map((t) => (
                        <div
                          key={t.name}
                          className="flex items-center gap-2 text-sm px-3 py-2 rounded-lg bg-white/8 border border-white/10 backdrop-blur-sm"
                        >
                          <span className="text-xl">{t.icon}</span>
                          <span className="text-white/95 font-medium">{t.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <aside className="lg:col-span-1 space-y-4">
                  <div className="p-4 rounded-xl bg-white/8 border border-white/10 backdrop-blur-sm">
                    <h5 className="text-sm font-semibold text-white/95 mb-2">Resumen profesional</h5>
                    <p className="text-xs text-white/75 leading-relaxed">
                      Proyecto desarrollado con enfoque en buenas prácticas, arquitectura escalable, mantenibilidad del código y experiencia de usuario optimizada.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/8 border border-white/10 backdrop-blur-sm">
                    <h5 className="text-sm font-semibold text-white/95 mb-3">Acciones</h5>
                    <div className="flex flex-col gap-2">
                      {open.github && (
                        <a
                          href={open.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-cyan-500 hover:bg-cyan-600 text-white font-medium text-sm transition shadow-lg shadow-cyan-500/30"
                        >
                          Ver en GitHub <FaExternalLinkAlt className="text-xs" />
                        </a>
                      )}
                    </div>
                  </div>
                </aside>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}