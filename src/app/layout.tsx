import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Valorant Takımınız",
  description: "Profesyonel Valorant e-spor takım websitesi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="min-h-screen bg-gradient-to-br from-[#0F0F1E] via-[#1A1A2E] to-[#2D1B69]">
        {children}
      </body>
    </html>
  );
}