"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden">
      {/* IMAGE DE FOND */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/background.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* OVERLAY + GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      </div>

      {/* TEXTE CENTRAL */}
      <motion.div
        className="z-10 px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
         Nelson Guerreiro - Développeur web & mobile freelance
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Création de sites performants, sur-mesure et modernes.
        </p>
      </motion.div>
    </section>
  );
}
