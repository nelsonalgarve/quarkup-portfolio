"use client";

import { motion } from "framer-motion";
import { FaCode, FaGraduationCap, FaLaptopCode, FaCertificate, FaRocket } from "react-icons/fa";

const timeline = [
  {
    year: "2006",
    title: "Débuts en autodidacte",
    description: "Premiers sites web en HTML, CSS, PHP. Passionné, je construis mes premiers projets perso.",
    icon: FaCode
  },
  {
    year: "2010-2015",
    title: "Certifications OpenClassrooms",
    description: "Apprentissage structuré avec des cours complets en développement web. HTML5, CSS3, PHP, bases de données.",
    icon: FaGraduationCap
  },
  {
    year: "2015-2024",
    title: "Formations Dyma / Codecademy",
    description: "Montée en compétence en JavaScript, React, Node.js. Création d'apps plus complexes.",
    icon: FaLaptopCode
  },
  {
    year: "2021-2023",
    title: "Certif RNCP niveau 6",
    description: "Formation reconnue en conception d’applications web et mobiles. Apprentissage fullstack, projets concrets.",
    icon: FaCertificate
  },
  {
    year: "2023-2025",
    title: "Projets réels & Freelance",
    description: "Lancement de mon activité Quarkup Studio. Réalisation de sites WordPress, apps React/Next.js, WooCommerce.",
    icon: FaRocket
  }
];

export default function TimelinePage() {
  return (
    <section className="min-h-screen bg-[#1c1c1c] text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Mon Parcours</h2>
        <div className="relative border-l border-gray-700 pl-6">
          {timeline.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="mb-10 relative"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.1, type: "spring", stiffness: 200 }}
                  className="absolute -left-[30px] top-1.5 w-6 h-6 bg-accent text-black rounded-full flex items-center justify-center shadow"
                >
                  <Icon className="text-sm" />
                </motion.div>
                <div className="bg-[#2a2a2a] p-6 rounded-xl shadow hover:shadow-lg transition">
                  <h3 className="text-xl font-semibold mb-1">{step.year} – {step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
