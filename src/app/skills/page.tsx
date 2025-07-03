"use client";

import SkillCardFlip from "@/components/SkillCardFlip";
import { SiPhp, SiSymfony, SiReact, SiMysql, SiDocker, SiNodedotjs, SiMongodb, SiGit, SiWordpress, SiPrestashop, SiJoomla, SiLinux, SiAngular, SiTypescript } from "react-icons/si";
import { FaTerminal, FaPaintBrush, FaServer, FaDatabase, FaTools, FaThLarge, FaVuejs } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";

const categories = {
  Frontend: {
    color: "from-pink-500 to-yellow-500",
    icon: FaPaintBrush,
    items: [
      { name: "Javascript", icon: SiPhp, level: 4, description: "Le langage Web par excellence", certificateUrl: "https://dyma.fr/certification/5fd7a6e0d6d54c08b731baea/5de1a78332cf6b3128beee34",
  certificateImage: "/certifs/javascript.png"  },
      {
  name: "React",
  icon: SiReact,
  level: 5,
  description: "Bibliothèque JavaScript puissante pour créer des interfaces dynamiques.",
  certificateUrl: "https://verified.sertifier.com/fr/verify/70749271769884/?ref=email",
  certificateImage: "https://api-lb.appfurther.io/v2/ims/image/70749271769884"
}, 
  { name: "Angular", icon: SiAngular, level: 4, description: "Framework frontend de Google", certificateUrl: "https://dyma.fr/certification/5fd7a6e0d6d54c08b731baea/58a1863e2e158e82bb85bb6a",
  certificateImage: "/certifs/angular.png" },
  { name: "Vue2", icon: FaVuejs, level: 4, description: "Développement mobile natif cross-platform avec React.", certificateUrl: "https://dyma.fr/certification/5fd7a6e0d6d54c08b731baea/5bcf16661ea83e25d0ed7d8b",
  certificateImage: "/certifs/vue.png" },
,
    { name: "React Native", icon: TbBrandReactNative, level: 4, description: "Développement mobile natif cross-platform avec React.", certificateUrl: "https://verified.sertifier.com/fr/verify/70749271769884/?ref=email",
  certificateImage: "https://api-lb.appfurther.io/v2/ims/image/70749271769884" },
  { name: "Typescript", icon: SiTypescript, level: 4, description: "Ajoute des types statiques à JS pour rendre le code plus sûr et maintenable.", certificateUrl: "https://dyma.fr/certification/5fd7a6e0d6d54c08b731baea/5ec44a260e320871af33ecaa",
  certificateImage: "/certifs/vue.png" },
    { name: "Tailwind", icon: SiPhp, level: 4, description: " Framework utilitaire pour créer des interfaces rapidement avec des classes préconstruites", certificateUrl: "https://dyma.fr/certification/5fd7a6e0d6d54c08b731baea/5de1a78332cf6b3128beee34",
  certificateImage: "/certifs/tailwind.png"  },
    ]
  },
  Backend: {
    color: "from-indigo-500 to-blue-500",
    icon: FaServer,
    items: [
      { name: "PHP", icon: SiPhp, level: 4, description: "Langage backend robuste, utilisé dans des millions de sites Web dynamiques.", certificateUrl: "https://dyma.fr/certification/5fd7a6e0d6d54c08b731baea/6077538892e5cf4e20fee6d8",
  certificateImage: "/certifs/php.png"  },
      { name: "Symfony", icon: SiSymfony, level: 4, description: "Framework PHP moderne pour des applications maintenables et performantes.", certificateUrl: "https://dyma.fr/certification/5fd7a6e0d6d54c08b731baea/60ea04ae7fc35f0f15b5537d",
  certificateImage: "/certifs/symfony.png",   },
      { name: "Node.js", icon: SiNodedotjs, level: 4, description: "Serveur JavaScript rapide, parfait pour les APIs modernes.", certificateUrl: "https://dyma.fr/certification/5fd7a6e0d6d54c08b731baea/5c69b1d1606df31e473253d8",
  certificateImage: "/certifs/node.png" },
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
      { name: "Docker", icon: SiDocker, level: 3, description: "Conteneurisation des environnements pour un déploiement simplifié.", certificateUrl: "https://dyma.fr/certification/5fd7a6e0d6d54c08b731baea/5f99eb48545c3568e680098f",
  certificateImage: "/certifs/docker.png" },
      { name: "Git", icon: SiGit, level: 4, description: "Outil de versioning indispensable pour travailler en équipe.", certificateUrl: "https://dyma.fr/certification/5fd7a6e0d6d54c08b731baea/5f99eb48545c3568e680098f",
  certificateImage: "/certifs/docker.png" },
      { name: "Linux", icon: SiLinux, level: 3, description: "Maîtrise de l’environnement serveur et des commandes Bash.", certificateUrl: "https://dyma.fr/certification/5fd7a6e0d6d54c08b731baea/5f39a9aa3298c65e1adc38a6",
  certificateImage: "/certifs/linux-bash.png" },
      { name: "Bash", icon: FaTerminal, level: 3, description: "Scripts d’automatisation et outils CLI pour le DevOps.", certificateUrl: "https://dyma.fr/certification/5fd7a6e0d6d54c08b731baea/5f39a9aa3298c65e1adc38a6",
  certificateImage: "/certifs/linux-bash.png" },
    ]
  },
  CMS: {
    color: "from-purple-500 to-pink-600",
    icon: FaThLarge,
    items: [
      { name: "WordPress", icon: SiWordpress, level: 5, description: "CMS phare pour des sites sur-mesure administrables et optimisés.", certificateUrl: "https://dyma.fr/certification/5fd7a6e0d6d54c08b731baea/65e209469cef4bb1b8aa7d09",
  certificateImage: "/certifs/wordpress.png" },
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
