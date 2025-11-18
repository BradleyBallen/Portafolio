"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";

export default function ContactSection() {
  const ref = useRef(null);
  const controls = useAnimation();
  const lineControls = useAnimation();

  // Detecta cuando entra en pantalla
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
          lineControls.start("expanded");
        } else {
          lineControls.start("collapsed");
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [controls, lineControls]);

  return (
    <section
      ref={ref}
      className="w-full flex flex-col items-center mt-24 px-6 mb-32"
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes gradient-shift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          @keyframes blink-cursor {
            0%, 49% { opacity: 1; }
            50%, 100% { opacity: 0; }
          }
          .animated-gradient-text {
            background: linear-gradient(90deg,#60a5fa,#67e8f9,#a78bfa,#f0abfc,#60a5fa,#67e8f9);
            background-size: 200% 100%;
            animation: gradient-shift 3.5s ease-in-out infinite;
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
          }
          .cursor-blink { animation: blink-cursor 0.8s step-end infinite; }
        `,
        }}
      />

      {/* WRAPPER CON ANIMACIÓN DE ENTRADA */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.9, ease: "easeOut" }
          }
        }}
        className="w-full flex flex-col items-center"
      >
        {/* TITLE */}
        <div className="mb-8 text-center relative w-full">

          {/* 🔥 LÍNEA FULL WIDTH ENCIMA DEL TÍTULO */}
          <motion.div
            initial="collapsed"
            animate={lineControls}
            variants={{
              collapsed: { width: 0, opacity: 0 },
              expanded: {
                width: "100%",
                opacity: 1,
                transition: { duration: 0.8, ease: "easeInOut" }
              }
            }}
            className="absolute top-0 left-1/2 -translate-x-1/2 h-[3px] rounded-full"
            style={{
              background:
                "linear-gradient(90deg,#60a5fa,#67e8f9,#a78bfa,#f0abfc,#60a5fa)"
            }}
          />

          {/* TÍTULO */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold animated-gradient-text inline-block mt-6"
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            Contacto
          </motion.h2>

          <span className="cursor-blink ml-2 text-3xl font-bold text-cyan-300">|</span>
        </div>

        {/* CONTENT CARD */}
        <div className="w-full max-w-3xl backdrop-blur-2xl bg-white/8 border border-white/12 shadow-[inset_0_0_1px_rgba(255,255,255,0.4)] rounded-2xl p-8 flex flex-col items-center">

          {/* Email */}
          <p className="text-white/90 text-lg mb-6 text-center">
            📩 <span className="font-semibold">bradleyballen162004@gmail.com</span>
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-10 mt-4">
            {/* GitHub */}
            <motion.a
              href="https://github.com/BradleyBallen"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              animate={{ scale: [1, 1.12, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-5xl"
            >
              <SiGithub style={{ color: "#fff" }} />
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/bradley-ballen-jola-b94910239"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              animate={{ scale: [1, 1.12, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              className="text-5xl"
            >
              <SiLinkedin style={{ color: "#0A66C2" }} />
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:bradleyballen162004@gmail.com"
              whileHover={{ scale: 1.2, y: -5 }}
              animate={{ scale: [1, 1.12, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="text-5xl"
            >
              <SiGmail style={{ color: "#EA4335" }} />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
