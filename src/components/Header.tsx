"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-[#363636] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* LOGO + NOM */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Logo Quarkup"
            width={250}
            height={250}
            className="object-contain"
          />
          
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="hover:text-accent transition">Accueil</Link>
          <Link href="/about" className="hover:text-accent transition">À propos</Link>
          <Link href="/skills" className="hover:text-accent transition">Compétences</Link>
          <Link href="/certifications" className="hover:text-accent transition">Certifications</Link>
          <Link href="/contact" className="hover:text-accent transition">Contact</Link>
        </nav>

        {/* BURGER MENU MOBILE */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* MENU MOBILE */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-[#2e2e2e] px-4 py-2 flex flex-col gap-3"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link href="/" className="hover:text-accent transition">Accueil</Link>
          <Link href="/about" className="hover:text-accent transition">À propos</Link>
          <Link href="/skills" className="hover:text-accent transition">Compétences</Link>
          <Link href="/certifications" className="hover:text-accent transition">Certifications</Link>
          <Link href="/contact" className="hover:text-accent transition">Contact</Link>
        </motion.div>
      )}
    </header>
  );
}
