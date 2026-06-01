import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.trillongraf.com.ar"),
  title: "TrillonGraf | Cartelería, Ploteos, Señalización y Estructuras Comerciales",
  description:
    "Especialistas en cartelería integral, diseño de identidad visual, ploteo vehicular, señalización industrial y armado de estructuras metálicas para negocios y locales en Granadero Baigorria, Rosario y San Lorenzo.",
  generator: "v0.app",
  keywords:
    "cartelería, publicidad, letras corpóreas, ploteo vehicular, ploteo de vidrieras, estructuras comerciales, señalización industrial, identidad visual, marquesinas, tótems publicitarios, Granadero Baigorria, Rosario, San Lorenzo, herrería comercial, diseño de carteles, ploteos, carteles con luces led",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "TrillonGraf | Cartelería, Ploteos y Estructuras Comerciales",
    description: "Especialistas en cartelería integral, diseño de identidad visual, ploteo vehicular, señalización industrial y armado de estructuras metálicas para negocios y locales en Granadero Baigorria y todo el Gran Rosario.",
    url: "https://www.trillongraf.com.ar",
    siteName: "TrillonGraf",
    images: [
      {
        url: "/logo-transparent.png",
        width: 800,
        height: 600,
        alt: "TrillonGraf Publicidad y Cartelería",
      }
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TrillonGraf | Cartelería, Ploteos y Estructuras Comerciales",
    description: "Especialistas en cartelería integral, diseño de identidad visual, ploteo vehicular y comercial, señalización industrial y armado de estructuras metálicas en Granadero Baigorria y Rosario.",
    images: ["/logo-transparent.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "TrillonGraf",
    "image": "https://www.trillongraf.com.ar/logo-transparent.png",
    "@id": "https://www.trillongraf.com.ar/#organization",
    "url": "https://www.trillongraf.com.ar",
    "telephone": "+5493413258979",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "M. Cornelio Saavedra 3393",
      "addressLocality": "Granadero Baigorria",
      "addressRegion": "Santa Fe",
      "postalCode": "S2152",
      "addressCountry": "AR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -32.855017,
      "longitude": -60.712613
    },
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
    },
    "sameAs": [
      "https://instagram.com/trillongrafpublicidad"
    ],
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Granadero Baigorria"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Rosario"
      },
      {
        "@type": "AdministrativeArea",
        "name": "San Lorenzo"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Capitán Bermúdez"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Funes"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Roldán"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Gran Rosario"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Cartelería y Publicidad",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Letreros Corpóreos 3D",
            "description": "Diseño y fabricación de letras corpóreas en 3D utilizando acrílico, polyfan, PVC y chapa galvanizada con iluminación backlight o frontal LED."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cartelería y Marquesinas",
            "description": "Carteles frontlight y backlight impresos en alta calidad con estructura tensada y marquesinas comerciales personalizadas con iluminación neón LED."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Armado de Estructuras y Herrería",
            "description": "Fabricación y montaje de estructuras de hierro reforzado, pórticos de ingreso, tótems de gran altura y herrería publicitaria a medida."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ploteo Vehicular & Comercial",
            "description": "Rotulación completa o parcial de autos, camionetas, camiones, furgones y flotas comerciales en vinilo premium apto para intemperie."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Señalización Industrial & de Seguridad",
            "description": "Carteles bajo normas de seguridad industrial, salidas de emergencia, demarcación de peligro y señalética vial corporativa."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Identidad Visual y Vidrieras",
            "description": "Diseño gráfico de identidad corporativa, branding comercial, ploteo de vidrieras, colocación de vinilos esmerilados y decoración interior."
          }
        }
      ]
    }
  }

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <FloatingWhatsApp />
        <Analytics />
      </body>
    </html>
  )
}
