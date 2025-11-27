import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CANAL-BTP - Trouvez le professionnel BTP de confiance",
  description: "La plateforme qui met en relation particuliers et professionnels du bâtiment de manière simple, fiable et sécurisée. Trouvez des artisans vérifiés pour vos travaux de construction et rénovation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
