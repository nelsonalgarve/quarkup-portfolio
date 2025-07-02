"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";



interface SkillCardFlipProps {
  name: string;
  icon: IconType;
  level: number;
  description: string;
}

export default function SkillCardFlip({ name, icon: Icon, level, description }: SkillCardFlipProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="[perspective:1000px] cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        className="relative h-60 w-full [transform-style:preserve-3d] duration-700"
        animate={{ rotateY: flipped ? 180 : 0 }}
      >
        {/* Face avant */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6 flex flex-col justify-between text-white [backface-visibility:hidden]">
          <div className="flex items-center gap-4 mb-4">
            <Icon className="text-4xl text-accent" />
            <h3 className="text-xl font-semibold">{name}</h3>
          </div>
          <div className="flex gap-1 mt-auto">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${i < level ? "bg-accent" : "bg-gray-600"}`}
              />
            ))}
          </div>
        </div>

        {/* Face arrière */}
        <div className="absolute inset-0 bg-[#2a2a2a] text-white rounded-2xl p-6 [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center">
          <p className="text-sm text-gray-300 text-center">{description}</p>
        </div>
      </motion.div>
    </div>
  );
}
