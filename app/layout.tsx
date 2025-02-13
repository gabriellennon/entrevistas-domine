import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import type React from "react";
import MouseMoveEffect from "@/components/mouse-move-effect";
import Script from "next/script"; // Importando Script do Next.js

const inter = Inter({ subsets: ["latin"] });

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
      <head>
        {/* Meta Pixel Code */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '945446757776833');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=945446757776833&ev=PageView&noscript=1"
            alt="facebook pixel"
          />
        </noscript>
      </head>
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <MouseMoveEffect />
        {children}
      </body>
    </html>
  );
}
