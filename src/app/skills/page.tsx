"use client";

import SkillCardFlip from "@/components/SkillCardFlip";
import { SiPhp, SiSymfony, SiReact, SiMysql, SiDocker, SiNodedotjs, SiMongodb, SiGit, SiWordpress, SiPrestashop, SiJoomla, SiLinux } from "react-icons/si";
import { FaTerminal, FaMobileAlt, FaPaintBrush, FaServer, FaDatabase, FaTools, FaThLarge } from "react-icons/fa";

const categories = {
  Frontend: {
    color: "from-pink-500 to-yellow-500",
    icon: FaPaintBrush,
    items: [
      { name: "React", icon: SiReact, level: 5, description: "Bibliothèque JavaScript puissante pour créer des interfaces dynamiques." },
      { name: "React Native", icon: FaMobileAlt, level: 4, description: "Développement mobile natif cross-platform avec React." },
    ]
  },
  Backend: {
    color: "from-indigo-500 to-blue-500",
    icon: FaServer,
    items: [
      { name: "PHP", icon: SiPhp, level: 4, description: "Langage backend robuste, utilisé dans des millions de sites Web dynamiques." },
      { name: "Symfony", icon: SiSymfony, level: 4, description: "Framework PHP moderne pour des applications maintenables et performantes." },
      { name: "Node.js", icon: SiNodedotjs, level: 4, description: "Serveur JavaScript rapide, parfait pour les APIs modernes." },
    ]
  },
  BDD: {
    color: "from-green-600 to-emerald-400",
    icon: FaDatabase,
    items: [
      { name: "MongoDB", icon: SiMongodb, level: 3, description: "Base de données NoSQL flexible, idéale pour les projets rapides et évolutifs." },
      { name: "MySQL", icon: SiMysql, level: 4, description: "SGBD classique et performant, très utilisé dans le monde PHP." },
    ]
  },
  DevOps: {
    color: "from-yellow-500 to-orange-500",
    icon: FaTools,
    items: [
      { name: "Docker", icon: SiDocker, level: 3, description: "Conteneurisation des environnements pour un déploiement simplifié." },
      { name: "Git", icon: SiGit, level: 4, description: "Outil de versioning indispensable pour travailler en équipe." },
      { name: "Linux", icon: SiLinux, level: 3, description: "Maîtrise de l’environnement serveur et des commandes Bash." },
      { name: "Bash", icon: FaTerminal, level: 3, description: "Scripts d’automatisation et outils CLI pour le DevOps." },
    ]
  },
  CMS: {
    color: "from-purple-500 to-pink-600",
    icon: FaThLarge,
    items: [
      { name: "WordPress", icon: SiWordpress, level: 5, description: "CMS phare pour des sites sur-mesure administrables et optimisés." },
      { name: "PrestaShop", icon: SiPrestashop, level: 4, description: "CMS e-commerce populaire, adapté aux boutiques personnalisées." },
      { name: "Joomla", icon: SiJoomla, level: 3, description: "CMS historique pour des sites dynamiques et modulables." },
    ]
  },
};

export default function SkillsPage() {
  return (
    <section className="min-h-screen bg-[#1c1c1c] text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Compétences</h2>
        <div className="space-y-12">
          {Object.entries(categories).map(([category, { color, icon: Icon, items }]) => (
            <div key={category}>
              <div className={`flex items-center gap-3 text-xl font-semibold mb-6 border-b border-white/20 pb-2 bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
                <Icon className="text-2xl" />
                {category}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((skill, i) => (
                  <SkillCardFlip key={i} {...skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
