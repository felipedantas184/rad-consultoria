// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

// Inter é mais profissional que Geist para negócios B2B
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
});

// ⚠️ SUBSTITUA ESTE VALOR PELO SEU ID REAL DO GA4 ⚠️
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const metadata: Metadata = {
  title: "RAD Consultoria Aeronáutica | Registro de Aeródromos e Helipontos ANAC",
  description: "Especialistas em registro de aeródromos, helipontos e sistemas PAPI. 90+ projetos homologados com 100% aprovação ANAC. Consultoria gratuita.",
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
    description: "90+ projetos homologados com 100% aprovação ANAC",
    siteName: "RAD Consultoria Aeronáutica",
    images: [
      {
        url: "/rad.png",
        width: 500,
        height: 500,
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
        {/* Google Analytics Script */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // Configuração principal
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              debug_mode: ${process.env.NODE_ENV === 'development' ? 'true' : 'false'}
            });
            
            // Função global para tracking de eventos
            window.trackGAEvent = function(eventName, eventParams = {}) {
              gtag('event', eventName, eventParams);
            }
          `}
        </Script>

        {/* Meta Tags Básicas */}
        <link rel="icon" type="image/png" href="/icons/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/icons/favicon.svg" />
        <link rel="shortcut icon" href="/icons/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="RAD" />
        <link rel="manifest" href="/icons/site.webmanifest" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rad-aero.com.br/" />
        <meta property="og:title" content="RAD - Consultoria Aeronáutica" />
        <meta property="og:description" content="Regularize seu aeródromo ou heliponto com segurança jurídica. Para Produtores Rurais, Pessoas Físicas, Empresas e Prefeituras que precisam de conformidade total com ANAC e DECEA." />
        <meta property="og:image" content="https://rad-aero.com.br/rad.jpg" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400" />
        <meta property="og:site_name" content="RAD - Consultoria Aeronáutica" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="RAD - Consultoria Aeronáutica" />
        <meta name="twitter:description" content="Regularize seu aeródromo ou heliponto com segurança jurídica. Para Produtores Rurais, Pessoas Físicas, Empresas e Prefeituras que precisam de conformidade total com ANAC e DECEA." />
        <meta name="twitter:image" content="https://rad-aero.com.br/rad.jpg" />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-white text-gray-900 overflow-x-hidden`}>
        {children}

        {/* Schema Markup para SEO */}
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
              "email": "rad.aeronautica@gmail.com",
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