// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, phone, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Champs requis manquants" }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "ton@email.fr",
      subject: `Message de ${name}`,
      text: `Email : ${email}\nTéléphone : ${phone || "non fourni"}\n\nMessage :\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur d'envoi :", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
