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
  title: "TrillonGraf - Cartelería y Publicidad | Granadero Baigorria, Rosario",
  description:
    "Diseño, fabricación y montaje de carteles, letras corpóreas, rotulación vehicular y señalética industrial en Granadero Baigorria, Rosario y San Lorenzo.",
  generator: "v0.app",
  keywords:
    "cartelería, publicidad, letras corpóreas, rotulación vehicular, Granadero Baigorria, Rosario, San Lorenzo, carteles industriales",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TrillonGraf - Cartelería y Publicidad | Granadero Baigorria, Rosario",
    description:
      "Diseño, fabricación y montaje de carteles, letras corpóreas, rotulación vehicular y señalética industrial en Granadero Baigorria, Rosario y San Lorenzo.",
    url: "https://trillongraf.com.ar",
    siteName: "TrillonGraf",
    locale: "es_AR",
    type: "website",
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
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
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
