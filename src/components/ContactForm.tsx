"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white/10 p-6 rounded-xl shadow-lg space-y-4">
      <h2 className="text-2xl font-bold text-white text-center">Me contacter</h2>

      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Nom"
        required
        className="w-full px-4 py-2 rounded bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
      />

      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        required
        className="w-full px-4 py-2 rounded bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
      />

      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Votre message..."
        rows={5}
        required
        className="w-full px-4 py-2 rounded bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-accent text-white font-semibold px-6 py-2 rounded hover:bg-opacity-90 transition disabled:opacity-50 w-full"
      >
        {status === "sending" ? "Envoi en cours..." : "Envoyer"}
      </button>

      {status === "success" && <p className="text-green-400 text-center">Message envoyé avec succès !</p>}
      {status === "error" && <p className="text-red-400 text-center">Erreur lors de l’envoi. Réessayez.</p>}
    </form>
  );
}
