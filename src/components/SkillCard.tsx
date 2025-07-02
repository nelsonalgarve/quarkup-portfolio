"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface SkillCardProps {
  name: string;
  icon: IconType;
  level: number; // de 1 à 5
  description: string;
}

export default function SkillCard({ name, icon: Icon, level, description }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6 flex flex-col justify-between h-60"
    >
      <div className="flex items-center gap-4 mb-4">
        <Icon className="text-4xl text-accent" />
        <h3 className="text-xl font-semibold text-white">{name}</h3>
      </div>
      <p className="text-sm text-gray-300 flex-1">{description}</p>
      <div className="flex gap-1 mt-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${i < level ? "bg-accent" : "bg-gray-600"}`}
          />
        ))}
      </div>
    </motion.div>
  );
}