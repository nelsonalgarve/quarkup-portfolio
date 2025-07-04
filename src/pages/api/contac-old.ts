// src/pages/api/contact.ts
import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Champs requis manquants" });
  }

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev", // Adresse vérifiée sur Resend
      to: "nelson.guerreiro@quarkup-studio.com",            // Mets ton email ici
      subject: `Message de ${name}`,
      text: `Email : ${email}\nTéléphone : ${phone || "non fourni"}\n\nMessage :\n${message}`,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Erreur d'envoi :", error);
    return res.status(500).json({ success: false });
  }
}
