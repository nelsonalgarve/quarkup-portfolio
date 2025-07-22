"use client";

import { FaGlobe, FaGithub } from "react-icons/fa";
import Image from "next/image";

const projects = [
  {
    name: "Rock'n Pizza - Site E-commerce",
    description:
      "Site e-commerce pour une pizzeria, développé avec WordPress et WooCommerce, avec personnalisation poussée en PHP.",
    technologies: ["WordPress", "WooCommerce", "PHP"],
    link: "https://rocknpizza.com",
    image: "/projects/rocknpizza.jpg",
  },
  {
    name: "Rock'n Pizza - Gestion de commandes",
    description:
      "Application de gestion des commandes en temps réel pour Rock'n Pizza, avec alertes sonores, tri, impression, et suivi des statuts.",
    technologies: ["Next.js", "Node.js", "WooCommerce API"],
    github: "https://github.com/nelsonalgarve/rocknpizza-realtime",
    image: "/projects/rocknpizza-gestion.jpg",
  },
  {
    name: "Cashetizer",
    description:
      "Application de location entre particuliers développée en React Native, avec une API backend en Node.js et base de données MongoDB.",
    technologies: ["React Native", "Node.js", "MongoDB"],
    github: "https://github.com/nelsonalgarve/cashetizer-frontend",
    image: "/projects/cashetizer.jpg",
  },
];

export default function ProjectsPage() {
  return (
    <section className="min-h-screen bg-[#1c1c1c] text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Projets Réalisés</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-white/5 rounded-xl overflow-hidden shadow-lg border border-white/10"
            >
              <div className="h-52 relative">
                <Image
                  src={project.image}
                  alt={project.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6 space-y-3">
                <h2 className="text-2xl font-semibold">{project.name}</h2>
                <p className="text-white/80 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 text-sm">
                  {project.technologies.map((tech, j) => (
                    <span
                      key={j}
                      className="bg-accent/20 px-2 py-1 rounded-full text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent flex items-center gap-2 hover:underline"
                    >
                      <FaGlobe /> Site
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent flex items-center gap-2 hover:underline"
                    >
                      <FaGithub /> Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
