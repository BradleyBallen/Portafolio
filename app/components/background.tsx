"use client";

import { useEffect, useRef } from "react";

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const characters = "01<>[]{}+=-/*%#@&$ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

    const palette = [
      "#00d4ff", "#2dff8f", "#ffd000", "#ff0055", "#e600ff",
      "#00ffb3", "#ff7700", "#00ff55", "#5599ff", "#ff55cc",
      "#aaff00", "#ff4444", "#00b8ff", "#ff8800", "#7700ff",
    ];

    const PARTICLE_COUNT = 180;

    const particles = Array.from({ length: PARTICLE_COUNT }).map(() => {
      const size = Math.random() * 18 + 10;
      const z = Math.random();

      //VELOCIDAD REDUCIDA PARA MOVIMIENTO MÁS SUAVE
      const speedFactor = 0.2 + z * 0.29;

      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * speedFactor,
        vy: (Math.random() - 0.5) * speedFactor,
        size: size * (0.5 + z * 1.5),
        z,
        char: characters[Math.floor(Math.random() * characters.length)],

        angle: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.002, // 🔥 más suave
        twist: Math.random(),
        twistSpeed: (Math.random() - 0.5) * 0.003,   // 🔥 más suave

        color: palette[Math.floor(Math.random() * palette.length)],
        
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.01 + Math.random() * 0.02,     // 🔥 más suave
      };
    });

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 1)";
      ctx.fillRect(0, 0, width, height);

     
for (let i = 0; i < particles.length; i++) {
  for (let j = i + 1; j < particles.length; j++) {
    const p1 = particles[i];
    const p2 = particles[j];

    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    const dist = Math.hypot(dx, dy);

    const minDist = (p1.size + p2.size) * 0.45; // distancia mínima real

    if (dist < minDist) {

      // Normal del choque
      const nx = dx / dist;
      const ny = dy / dist;

      // Corrección de superposición (más fuerte y estable)
      const overlap = minDist - dist;
      const push = overlap * 0.6;

      p1.x -= nx * push;
      p1.y -= ny * push;
      p2.x += nx * push;
      p2.y += ny * push;

      // Velocidades relativas
      const dvx = p2.vx - p1.vx;
      const dvy = p2.vy - p1.vy;

      // Impulso escalar (rebote realista)
      const dot = dvx * nx + dvy * ny;

      if (dot < 0) {
        const bounce = 0.9; // elasticidad
        const jImpulse = (dot * bounce);

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

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // 🔥 movimientos suaves
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

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
    ></canvas>
  );
}
