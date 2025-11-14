"use client";

import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {

  const projects = [
    { title: "Neural UI", desc: "UI animada inspirada en redes neuronales." },
    { title: "Matrix Stream", desc: "Render dinámico y reactivo." },
    { title: "WebCore Engine", desc: "Motor modular con TS + Nx." },
  ];

  return (
    <section className="w-full flex justify-center px-6 pb-20">
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
