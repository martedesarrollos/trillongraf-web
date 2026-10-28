import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://trillongraf.com.ar"),
  title: "Fábrica de Carteles y Letreros | Gran Rosario y Cordón Industrial",
  description:
    "Fábrica de carteles y letreros en Gran Rosario y San Lorenzo. Carteles luminosos LED, letras corpóreas 3D, marquesinas y mástiles. Presupuesto sin cargo.",
  keywords:
    "fábrica de carteles, carteles luminosos, letras corpóreas, marquesinas, rotulación vehicular, mástiles, banderas publicitarias, fly banners, alquiler de mástiles, mástiles para eventos, banderas para negocios, banderas para empresas, Granadero Baigorria, Rosario, San Lorenzo, Cordón Industrial, Gran Rosario",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Fábrica de Carteles y Letreros | Gran Rosario y Cordón Industrial",
    description:
      "Fábrica de carteles y letreros en Gran Rosario y San Lorenzo. Carteles luminosos LED, letras corpóreas 3D, marquesinas y mástiles. Presupuesto sin cargo.",
    url: "https://trillongraf.com.ar",
    siteName: "TrillonGraf",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/trillongraf-logo-horizontal.jpg",
        width: 1200,
        height: 630,
        alt: "TrillonGraf - Fábrica de Carteles y Publicidad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fábrica de Carteles y Letreros | Gran Rosario y Cordón Industrial",
    description:
      "Fábrica de carteles y letreros en Gran Rosario y San Lorenzo. Carteles luminosos LED, letras corpóreas 3D, marquesinas y mástiles. Presupuesto sin cargo.",
    images: ["/trillongraf-logo-horizontal.jpg"],
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/apple-icon.png",
  },
  verification: {
    other: {
      "msvalidate.01": "C9DFE2410D8C521BFB90FF2B5BF43D1F",
    },
  },
}

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "TrillonGraf - Cartelería y Publicidad",
  "image": "https://trillongraf.com.ar/trillongraf-logo-horizontal.jpg",
  "url": "https://trillongraf.com.ar",
  "telephone": "+5493413258979",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "M. Cornelio Saavedra 3393",
    "addressLocality": "Granadero Baigorria",
    "addressRegion": "Santa Fe",
    "postalCode": "2152",
    "addressCountry": "AR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -32.8554,
    "longitude": -60.7108
  },
  "areaServed": [
    { "@type": "City", "name": "Granadero Baigorria" },
    { "@type": "City", "name": "Rosario" },
    { "@type": "City", "name": "San Lorenzo" },
    { "@type": "City", "name": "Capitán Bermúdez" },
    { "@type": "City", "name": "Funes" },
    { "@type": "AdministrativeArea", "name": "Gran Rosario" },
    { "@type": "AdministrativeArea", "name": "Cordón Industrial" }
  ],
  "sameAs": [
    "https://www.facebook.com/trillongraf",
    "https://instagram.com/trillongrafpublicidad"
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "08:00",
    "closes": "18:00"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1721724529959121');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1721724529959121&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
        <FloatingWhatsApp />
        <Analytics />
      </body>
    </html>
  )
}
