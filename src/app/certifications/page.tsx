"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const certifications = [
  {
    title: "Certification Développeur Web & Mobile – RNCP Niveau 6",
    issuedOn: "2023-09-04",
    image: "https://api-lb.appfurther.io/v2/ims/image/70749271769884",
    verifyUrl: "https://api-lb.appfurther.io/v2/ims/70749271769884",
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
                <Image
                  src="/certifs/france-competences.png"
                  alt="France Compétences"
                  width={100}
                  height={100}
                  className="rounded"
                />
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
