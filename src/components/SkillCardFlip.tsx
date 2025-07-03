"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { IconType } from "react-icons";

interface SkillCardFlipProps {
  key: number;
  name: string;
  icon: IconType;
  level: number;
  description: string;
  certificateUrl?: string;
  certificateImage?: string;
}

export default function SkillCardFlip({ name, icon: Icon, level, description, certificateUrl, certificateImage }: SkillCardFlipProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="[perspective:1000px] cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        className={`relative w-full h-64 transition-transform duration-500 [transform-style:preserve-3d] ${flipped ? '[transform:rotateY(180deg)_scale(1.05)]' : '[transform:rotateY(0deg)_scale(1)]'}`}
        transition={{ duration: 0.1, type: "spring", stiffness: 300 }}
      >
        {/* Front */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6 flex flex-col justify-between text-white [backface-visibility:hidden] [transform:rotateY(0deg)]">
          <div className="flex items-center gap-4 mb-4">
            <Icon className="text-4xl text-accent" />
            <h3 className="text-xl font-semibold">{name}</h3>
          </div>
          <p className="text-sm text-gray-300 line-clamp-4">{description}</p>
          <div className="flex gap-1 mt-auto">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`h-2 flex-1 rounded-full ${i < level ? "bg-green-400" : "bg-gray-600"}`}
              />
            ))}
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 bg-black text-white border border-white/20 rounded-2xl shadow-lg p-6 flex flex-col justify-center items-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
          {certificateImage && (
            <Image
              src={certificateImage}
              alt="Certification"
              width={200}
              height={200}
              className="w-20 h-20 object-contain mb-3 border border-white/30 rounded-md shadow"
            />
          )}
          <Icon className="text-5xl mb-2 text-accent opacity-80" />
          <p className="text-center text-sm mb-3 px-1">{description}</p>
          {certificateUrl && (
            <a
              href={certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline text-sm hover:text-white"
            >
              Voir la certification
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
}
