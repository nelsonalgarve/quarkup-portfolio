"use client";

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-white py-6 px-4 text-center text-sm">
      <p>&copy; {new Date().getFullYear()} Quarkup Studio – Nelson Guerreiro</p>
      <p className="mt-2">
        <a href="mailto:nelson.guerreiro@nc-services.fr" className="underline text-accent">
          nelson.guerreiro@nc-services.fr
        </a>{" "}
        |{" "}
        <a href="tel:+33600000000" className="underline text-accent">
          +33 6 00 00 00 00
        </a>
      </p>
    </footer>
  );
}
