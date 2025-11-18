"use client";

import { useEffect, useRef } from "react";

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;
    
    // Función para ajustar el canvas correctamente
    const resizeCanvas = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // En móviles, usar devicePixelRatio para mejor resolución
      const dpr = window.devicePixelRatio || 1;
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      
      // Escalar el contexto según el dpr
      ctx.scale(dpr, dpr);
      
      return { width, height };
    };

    let { width, height } = resizeCanvas();

    const characters = "01<>[]{}+=-/*%#@&$1234567890";

    const palette = [
      "#00d4ff", "#2dff8f", "#ffd000", "#ff0055", "#e600ff",
      "#00ffb3", "#ff7700", "#00ff55", "#5599ff", "#ff55cc",
      "#aaff00", "#ff4444", "#00b8ff", "#ff8800", "#7700ff",
    ];

    const PARTICLE_COUNT = 180;

    const particles = Array.from({ length: PARTICLE_COUNT }).map(() => {
      const size = Math.random() * 18 + 10;
      const z = Math.random();

      const speedFactor = 0.6 + z * 0.8;

      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * speedFactor,
        vy: (Math.random() - 0.5) * speedFactor,
        size: size * (0.5 + z * 1.5),
        z,
        char: characters[Math.floor(Math.random() * characters.length)],

        angle: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        twist: Math.random(),
        twistSpeed: (Math.random() - 0.5) * 0.03,

        color: palette[Math.floor(Math.random() * palette.length)],
        
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.01 + Math.random() * 0.02,
      };
    });

    const handleResize = () => {
      const newDimensions = resizeCanvas();
      width = newDimensions.width;
      height = newDimensions.height;

      // Ajustar posiciones de partículas si es necesario
      particles.forEach((p) => {
        if (p.x > width) p.x = width;
        if (p.y > height) p.y = height;
      });
    };

    // Escuchar resize y orientationchange (importante para móviles)
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", () => {
      setTimeout(handleResize, 100);
    });

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 1)";
      ctx.fillRect(0, 0, width, height);

      // Colisiones entre partículas
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];

          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          const dist = Math.hypot(dx, dy);

          const minDist = (p1.size + p2.size) * 0.45;

          if (dist < minDist) {
            const nx = dx / dist;
            const ny = dy / dist;

            const overlap = minDist - dist;
            const push = overlap * 0.6;

            p1.x -= nx * push;
            p1.y -= ny * push;
            p2.x += nx * push;
            p2.y += ny * push;

            const dvx = p2.vx - p1.vx;
            const dvy = p2.vy - p1.vy;

            const dot = dvx * nx + dvy * ny;

            if (dot < 0) {
              const bounce = 0.9;
              const jImpulse = dot * bounce;

              p1.vx += nx * jImpulse;
              p1.vy += ny * jImpulse;
              p2.vx -= nx * jImpulse;
              p2.vy -= ny * jImpulse;
            }
          }
        }
      }

      const sortedParticles = [...particles].sort((a, b) => a.z - b.z);

      sortedParticles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Rebotar en los bordes
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Clamp para evitar que salgan fuera
        p.x = Math.max(0, Math.min(width, p.x));
        p.y = Math.max(0, Math.min(height, p.y));

        p.angle += p.rotationSpeed;
        p.twist += p.twistSpeed;
        p.pulse += p.pulseSpeed;

        ctx.save();
        ctx.translate(p.x, p.y);

        ctx.rotate(p.angle);
        ctx.transform(
          1,
          Math.sin(p.twist) * 0.2,
          Math.cos(p.twist) * 0.2,
          1,
          0,
          0
        );

        const baseScale = 0.5 + p.z * 1.8;
        const pulseEffect = Math.sin(p.pulse) * 0.05 + 1;
        const scale = baseScale * pulseEffect;
        ctx.scale(scale, scale);

        const shadowOffset = (1 - p.z) * 2;
        ctx.shadowOffsetX = shadowOffset;
        ctx.shadowOffsetY = shadowOffset;

        ctx.shadowBlur = 2;
        ctx.shadowColor = "rgba(0, 0, 0, 0.35)";

        ctx.font = `${p.size}px monospace`;
        ctx.fillStyle = p.color;

        ctx.shadowColor = "transparent";
        ctx.shadowBlur = 0;

        ctx.globalAlpha = 0.85 - p.z * 0.2;

        ctx.fillText(p.char, -p.size / 2, p.size / 2);

        ctx.globalAlpha = 1;
        ctx.restore();
      });

      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none bg-black"
      style={{
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        touchAction: "none",
        WebkitTouchCallout: "none",
      }}
    ></canvas>
  );
}
