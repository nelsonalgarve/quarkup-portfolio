"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const certifications = [
  {
    title: "Certification Développeur Web & Mobile – RNCP Niveau 6",
    issuedOn: "2023-09-04",
    image: "https://api-lb.appfurther.io/v2/ims/image/70749271769884",
    verifyUrl: "https://verified.sertifier.com/fr/verify/70749271769884/?ref=email",
    description:
      "Cette certification atteste de mes compétences professionnelles sur 5 blocs RNCP :",
    details: [
      "RNCP37625BC01 – Conception et maquettage d’une application web & mobile",
      "RNCP37625BC02 – Pilotage d’un projet d’application web & mobile",
      "RNCP37625BC03 – Concevoir, manipuler, administrer et sécuriser une base de données",
      "RNCP37625BC04 – Développement d’une application web & mobile",
      "RNCP37625BC05 – Mise en production d’une application web & mobile"
    ]
  },
  {
    title: "Certification Javascript",
    issuedOn: "2021-02-10",
    image: "/certifs/javascript.png",
    verifyUrl: "https://dyma.fr/certification/5fd7a6e0d6d54c08b731baea/5de1a78332cf6b3128beee34",
    description:
      "Formation approfondie sur les bases et fonctionnalités modernes de JavaScript.",
    details: [
      "Variables, types, opérateurs et structures de contrôle",
    "Fonctions, closures, objets et tableaux",
    "Manipulation du DOM et gestion des événements",
    "Asynchrone avec callbacks, Promises et async/await",
    "Bonnes pratiques et structuration du code"
    ]
  },
    {
    title: "Certification Angular 16",
    issuedOn: "2021-02-28",
    image: "/certifs/angular.png",
    verifyUrl: "https://dyma.fr/certification/5fd7a6e0d6d54c08b731baea/58a1863e2e158e82bb85bb6a",
    description: "Développement d’applications SPA modernes avec Angular 16.",
    details: [
      "Standalone components et routing",
      "RxJS et gestion asynchrone",
      "Formulaires réactifs",
      "Services, DI et modules",
      "NgClass, pipes et directives personnalisées"
    ]
  },
   {
    title: "Certification Vue.js 2",
    issuedOn: "2021-09-18",
    image: "/certifs/vue.png",
    verifyUrl: "https://dyma.fr/certification/5fd7a6e0d6d54c08b731baea/5bcf16661ea83e25d0ed7d8b",
    description: "Création d’interfaces web avec Vue.js 2 et Vuex.",
    details: [
      "Props, directives et cycle de vie",
      "Gestion du state avec Vuex",
      "Navigation avec vue-router",
      "Événements et binding",
      "Composants dynamiques"
    ]
  },
   {
    title: "Certification TypeScript",
    issuedOn: "2021-02-10",
    image: "/certifs/typescript.png",
    verifyUrl: "https://dyma.fr/certification/5fd7a6e0d6d54c08b731baea/5ec44a260e320871af33ecaa",
    description: "JavaScript typé avec TypeScript pour des applications robustes.",
    details: [
      "Types primitifs et complexes",
      "Interfaces, classes et génériques",
      "Modules et namespaces",
      "Interopérabilité avec JavaScript",
      "Utilisation dans React ou Angular"
    ]
  },
  {
    title: "Certification Tailwind CSS",
    issuedOn: "2024-03-04",
    image: "/certifs/tailwind.png",
    verifyUrl: "https://dyma.fr/certification/5fd7a6e0d6d54c08b731baea/659d20867fb203e830e13655",
    description: "Styling moderne avec Tailwind CSS et classes utilitaires.",
    details: [
      "Design responsive",
      "Customisation de thèmes",
      "Dark mode et animations",
      "Intégration avec React",
      "Performance et maintenabilité"
    ]
  },
  {
    title: "Certification Node.js",
    issuedOn: "2021-03-24",
    image: "/certifs/node.png",
    verifyUrl: "https://dyma.fr/certification/5fd7a6e0d6d54c08b731baea/5c69b1d1606df31e473253d8",
    description:
      "Formation Environnement JavaScript côté serveur pour applications rapides",
    details: [
      "Introduction au développement backend avec Node.js", "Création de serveurs HTTP, manipulation de fichiers", "architecture MVC, Express.js, middlewares et création d’API REST.", "Concepts de sécurité et déploiement inclus."
    ]
  },
  {
    title: "Certification PHP & Symfony",
    issuedOn: "2022-08-06",
    image: "/certifs/symfony.png",
    verifyUrl: "https://dyma.fr/certification/5fd7a6e0d6d54c08b731baea/60ea04ae7fc35f0f15b5537d",
    description: "Développement backend en PHP avec le framework Symfony.",
    details: [
      "PHP orienté objet, MVC",
      "Routing, contrôleurs, vues Twig",
      "Formulaires et validation",
      "Doctrine ORM et base de données",
      "Sécurité, roles et événements"
    ]
  },
  {
    title: "Certification Docker",
    issuedOn: "2023-08-31",
    image: "/certifs/docker.png",
    verifyUrl: "https://dyma.fr/certification/5fd7a6e0d6d54c08b731baea/5f99eb48545c3568e680098f",
    description: "Conteneurisation avec Docker pour des environnements reproductibles.",
    details: [
      "Création de Dockerfile et d’images",
      "Utilisation de docker-compose",
      "Gestion des volumes et réseaux",
      "Déploiement de services isolés",
      "Optimisation des builds"
    ]
  },
   {
    title: "Certification WordPress",
    issuedOn: "2024-07-18",
    image: "/certifs/wordpress.png",
    verifyUrl: "https://dyma.fr/certification/5fd7a6e0d6d54c08b731baea/65e209469cef4bb1b8aa7d09",
    description: "Création de sites personnalisés avec WordPress.",
    details: [
      "Thèmes et child themes",
      "Création de plugins",
      "Utilisation de ACF et Gutenberg",
      "Hooks, shortcodes et filtres",
      "Optimisation SEO et sécurité"
    ]
  },
];

export default function CertificationsPage() {
  const [modalImage, setModalImage] = useState<string | null>(null);

  return (
    <section className="min-h-screen bg-[#1c1c1c] text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Mes Certifications</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="bg-white/10 border border-white/20 rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <button onClick={() => setModalImage(cert.image)}>
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    width={200}
                    height={200}
                    className="rounded hover:scale-105 transition-transform"
                  />
                </button>
                {/* <Image
                  src="/certifs/france-competences.png"
                  alt="France Compétences"
                  width={100}
                  height={100}
                  className="rounded"
                /> */}
              </div>
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-sm text-gray-300 mb-2">Délivrée le {new Date(cert.issuedOn).toLocaleDateString("fr-FR")}</p>
              <p className="text-sm text-gray-200 mb-3">{cert.description}</p>
              <ul className="text-sm text-gray-300 text-left mb-4 list-disc pl-5">
                {cert.details?.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <Link
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline text-sm hover:text-white"
              >
                Vérifier la certification
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 transition-opacity duration-300 animate-fade-in"
        >
          <div
            className="relative animate-zoom-in"
            onClick={() => setModalImage(null)}
          >
            <button
              className="absolute top-0 right-0 m-2 text-white text-2xl font-bold z-50 hover:text-red-500"
              onClick={() => setModalImage(null)}
            >
              &times;
            </button>
            <Image
              src={modalImage}
              alt="Zoom sur la certification"
              width={600}
              height={600}
              className="rounded-lg max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      )}
    </section>
  );
}
