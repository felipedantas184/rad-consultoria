import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Inter é mais profissional que Geist para negócios B2B
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "RAD Consultoria Aeronáutica | Registro de Aeródromos e Helipontos ANAC",
  description: "Especialistas em registro de aeródromos, helipontos e sistemas PAPI. 80+ projetos homologados com 100% aprovação ANAC. Consultoria gratuita.",
  keywords: [
    "registro aeródromo",
    "homologação heliponto",
    "PAPI ANAC",
    "regularização aeroportuária",
    "consultoria aeronáutica",
    "DECEA",
    "engenharia aeronáutica",
    "aeródromo rural",
    "heliponto corporativo"
  ],
  authors: [{ name: "RAD Consultoria Aeronáutica" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://rad-aero.com.br/",
    title: "RAD Consultoria Aeronáutica | Especialistas em Regularização",
    description: "80+ projetos homologados com 100% aprovação ANAC",
    siteName: "RAD Consultoria Aeronáutica",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RAD Consultoria Aeronáutica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RAD - Consultoria Aeronáutica",
    description: "Especialistas em registro de aeródromos e helipontos",
    images: ["/twitter-image.png"],
  },
  verification: {
    // Adicione depois: google: "seu-codigo-verificacao",
    // Adicione depois: yandex: "seu-codigo-verificacao",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth overflow-x-hidden">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-white text-gray-900 overflow-x-hidden`}>
        {children}

        {/* Schema Markup para SEO (opcional) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "RAD Consultoria Aeronáutica",
              "description": "Especialistas em registro de aeródromos, helipontos e sistemas PAPI",
              "url": "https://rad-aero.com.br/",
              "telephone": "+55-86-99981-1672",
              "email": "ricardo@tecdata.com.br",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "BR"
              },
              "areaServed": "BR",
              "serviceType": "Consultoria Aeronáutica",
            }),
          }}
        />
      </body>
    </html>
  );
}