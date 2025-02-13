import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google"
import type React from "react"
import MouseMoveEffect from "@/components/mouse-move-effect";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Passe em Qualquer Entrevista de Tecnologia | Guia Completo",
  description: "Descubra os segredos usados por profissionais de grandes empresas para ser aprovado em entrevistas de tecnologia. Técnicas testadas e comprovadas para conquistar sua vaga!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <MouseMoveEffect />
        {children}
      </body>
    </html>
  );
}
