"use client";

// import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import toast from "react-hot-toast";
import { sendContactEmail } from "@/lib/sendEmail";

const schema = z.object({
  name: z.string().min(2, "Nom requis"),
  email: z.string().email("Email invalide"),
  phone: z.string().optional(),
  message: z.string().min(5, "Message requis"),
});

type FormData = z.infer<typeof schema>;

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    const res = await sendContactEmail(data);
    if (res.success) {
      toast.success("Message envoyé avec succès !");
      reset();
    } else {
      toast.error("Erreur lors de l'envoi du message.");
    }
  };

  return (
    <section className="min-h-screen bg-[#1c1c1c] text-white px-6 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Contact</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white/5 p-6 rounded-xl shadow-xl">
          <div>
            <label className="block text-sm font-medium mb-1">Nom</label>
            <input
              type="text"
              {...register("name")}
              className="w-full rounded p-2 bg-white/10 border border-white/20"
            />
            {errors.name && <p className="text-red-400 text-sm">{errors.name.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              {...register("email")}
              className="w-full rounded p-2 bg-white/10 border border-white/20"
            />
            {errors.email && <p className="text-red-400 text-sm">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Téléphone (facultatif)</label>
            <input
              type="tel"
              {...register("phone")}
              className="w-full rounded p-2 bg-white/10 border border-white/20"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              rows={4}
              {...register("message")}
              className="w-full rounded p-2 bg-white/10 border border-white/20"
            />
            {errors.message && <p className="text-red-400 text-sm">{errors.message.message}</p>}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-accent hover:bg-accent/80 text-white font-semibold px-6 py-2 rounded shadow"
          >
            {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
          </button>
        </form>
      </div>
    </section>
  );
}
