import Timeline from "@/components/Timeline";

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-5xl font-bold mb-8 text-accent">À propos</h1>

      <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10">
        Je suis un développeur passionné par la création d&apos;expériences web performantes et sur mesure.
        Après plusieurs années d&apos;autodidaxie, j&apos;ai consolidé mes compétences à travers une formation certifiante
        en conception d&apos;applications web et mobiles. Aujourd&apos;hui, je mets mon savoir-faire au service de mes clients
        pour construire des sites modernes, rapides et bien pensés.
      </p>

      <Timeline />
    </main>
  );
}
