"use client";

import { FaEnvelope, FaPhone, FaGlobe, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-white py-8 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4 text-center text-sm">
        <p className="text-base font-semibold">Quarkup Studio – Nelson Guerreiro</p>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-gray-300">
          <a href="mailto:nelson.guerreiro@quarkup-studio.com" className="flex items-center gap-1 hover:text-accent transition">
            <FaEnvelope className="text-accent" /> nelson.guerreiro@quarkup-studio.com
          </a>
          <a href="tel:+33631543526" className="flex items-center gap-1 hover:text-accent transition">
            <FaPhone className="text-accent" /> +33 6 31 54 35 26
          </a>
          <a href="https://www.quarkup-studio.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-accent transition">
            <FaGlobe className="text-accent" /> quarkup-studio.com
          </a>
        </div>

        <div className="flex gap-4 mt-2">
          <a href="https://github.com/nelsonalgarve" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/nelson-viegas-guerreiro" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
            <FaLinkedin size={20} />
          </a>
        </div>

        <p className="text-gray-500 mt-2">&copy; {new Date().getFullYear()} Tous droits réservés.</p>
      </div>
    </footer>
  );
}
