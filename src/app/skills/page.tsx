"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  SiPhp,
  SiSymfony,
  SiReact,
  SiMysql,
  SiDocker,
  SiGit,
  SiMongodb,
  SiWordpress,
  SiJoomla,
  SiPrestashop
} from "react-icons/si";
import { FaLinux } from "react-icons/fa";
import { TbBrandReactNative} from "react-icons/tb";
import { SiNodedotjs } from "react-icons/si";




const skills = [
  { name: "PHP", icon: SiPhp, level: 4, description: "Langage serveur souple et largement utilisé pour le développement web dynamique." },
  { name: "Symfony", icon: SiSymfony, level: 4, description: "Framework PHP robuste et structuré pour des applications complexes et maintenables." },
  { name: "React", icon: SiReact, level: 5, description: "Bibliothèque JavaScript moderne et performante pour des interfaces utilisateur dynamiques." },
  { name: "Node.js", icon: SiNodedotjs, level: 4, description: "Environnement d'exécution JavaScript côté serveur, idéal pour des APIs rapides et modernes." },
  { name: "React Native", icon: TbBrandReactNative, level: 4, description: "Développement d'applications mobiles natives avec la puissance de React." },
  { name: "MySQL", icon: SiMysql, level: 4, description: "Système de gestion de base de données relationnelle fiable et populaire." },
  { name: "MongoDB", icon: SiMongodb, level: 3, description: "Base de données NoSQL orientée document, idéale pour les architectures modernes." },
  { name: "Bash", icon: FaLinux, level: 3, description: "Scripts shell pour automatiser des tâches sur des systèmes Unix/Linux." },
  { name: "Linux", icon: FaLinux, level: 4, description: "Environnement de développement quotidien, stabilité et performance serveur." },
  { name: "Git", icon: SiGit, level: 4, description: "Outil de versioning essentiel pour la collaboration et la gestion de projets." },
  { name: "Docker", icon: SiDocker, level: 3, description: "Conteneurisation d'applications pour faciliter le déploiement et la portabilité." },
  { name: "Java", icon: SiReact, level: 3, description: "Langage orienté objet utilisé dans de nombreux environnements entreprise et Android." },
  { name: "WordPress", icon: SiWordpress, level: 5, description: "CMS puissant pour créer des sites sur-mesure avec ou sans thème prêt-à-l'emploi." },
  { name: "Joomla", icon: SiJoomla, level: 3, description: "CMS modulaire et flexible pour des projets structurés et multilingues." },
  { name: "PrestaShop", icon: SiPrestashop, level: 4, description: "CMS e-commerce français, idéal pour des boutiques personnalisables et performantes." }
];

export default function SkillsPage() {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const toggleFlip = (name: string) => {
    setFlippedCards((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <main className="min-h-screen bg-background px-6 py-12 text-white">
      <style>{`
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>

      <section className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Mes Compétences</h1>
        <p className="text-lg text-gray-300">
          Développement web & mobile avec une stack moderne. Voici les technologies que je maîtrise, avec un aperçu de mon niveau pour chaque outil.
        </p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {skills.map(({ name, icon: Icon, level, description }, index) => (
          <motion.div
            key={name}
            className={`relative h-60 cursor-pointer [perspective:1000px]`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            onClick={() => toggleFlip(name)}
          >
            <div
              className={`transition-transform duration-700 w-full h-full relative rounded-xl preserve-3d ${
                flippedCards[name] ? "rotate-y-180" : ""
              }`}
            >
              {/* Front */}
              <div className="absolute inset-0 bg-[#2c2c2c] rounded-xl shadow p-6 backface-hidden flex flex-col justify-between">
                <div className="flex items-center space-x-4">
                  <Icon className="text-4xl text-accent" />
                  <h2 className="text-xl font-semibold">{name}</h2>
                </div>
                <div className="mt-4 flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-2 flex-1 rounded-full ${
                        i < level ? "bg-accent" : "bg-gray-700"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Back */}
              <div className="absolute inset-0 bg-[#1f1f1f] rounded-xl shadow p-6 text-sm text-gray-300 rotate-y-180 backface-hidden flex items-center justify-center text-center">
                <p>{description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
