import "./globals.css";
import Header from "@/components/Header"; // ⬅️ importe ton header

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
