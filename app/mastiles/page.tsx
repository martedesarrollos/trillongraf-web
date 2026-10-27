import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { TrackedWhatsAppLink } from "@/components/tracked-whatsapp-link"
import { 
  ArrowLeft, 
  Flag, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Wind, 
  Calendar, 
  Building2,
  Clock,
  MapPin,
  ChevronRight
} from "lucide-react"

export const metadata: Metadata = {
  title: "Fabricación y Alquiler de Mástiles, Banderas y Fly Banners | TrillonGraf",
  description:
    "Fabricación y alquiler de mástiles fijos y portátiles, fly banners (gota y pluma) y banderas publicitarias para eventos, ferias, negocios y empresas en Rosario, Granadero Baigorria, San Lorenzo y Santa Fe.",
  keywords:
    "fabricación de mástiles, alquiler de mástiles, banderas publicitarias, fly banners, mástiles para eventos, banderas para negocios, banderas para empresas, fly banners Rosario, mástiles Santa Fe, banderas institucionales",
  alternates: {
    canonical: "/mastiles",
  },
  openGraph: {
    title: "Fabricación y Alquiler de Mástiles, Banderas y Fly Banners | TrillonGraf",
    description:
      "Fabricación y alquiler de mástiles y banderas publicitarias para eventos y negocios en Gran Rosario y Santa Fe. Calidad industrial y entrega rápida.",
    url: "https://trillongraf.com.ar/mastiles",
    siteName: "TrillonGraf",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/banderas.jpg",
        width: 1200,
        height: 630,
        alt: "TrillonGraf - Mástiles, Banderas y Fly Banners",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fabricación y Alquiler de Mástiles, Banderas y Fly Banners | TrillonGraf",
    description:
      "Fabricación y alquiler de mástiles y banderas publicitarias para eventos y negocios en Gran Rosario y Santa Fe.",
    images: ["/banderas.jpg"],
  },
}

export default function MastilesPage() {
  const whatsappMessage = encodeURIComponent(
    "Hola TrillonGraf! Quería consultar por un presupuesto de fabricación o alquiler de mástiles / banderas / fly banners para mi negocio o evento."
  )
  const whatsappUrl = `https://wa.me/5493413258979?text=${whatsappMessage}`

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Fabricación y Alquiler de Mástiles, Banderas y Fly Banners",
    "serviceType": "Mástiles y Banderas Publicitarias para Eventos y Negocios",
    "provider": {
      "@type": "LocalBusiness",
      "name": "TrillonGraf - Fábrica de Cartelería y Publicidad",
      "telephone": "+5493413258979",
      "url": "https://trillongraf.com.ar",
      "image": "https://trillongraf.com.ar/banderas.jpg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "M. Cornelio Saavedra 3393",
        "addressLocality": "Granadero Baigorria",
        "addressRegion": "Santa Fe",
        "addressCountry": "AR"
      }
    },
    "areaServed": [
      { "@type": "City", "name": "Rosario" },
      { "@type": "City", "name": "Granadero Baigorria" },
      { "@type": "City", "name": "San Lorenzo" },
      { "@type": "AdministrativeArea", "name": "Gran Rosario" },
      { "@type": "AdministrativeArea", "name": "Santa Fe" }
    ],
    "description": "Fabricación a medida y alquiler de mástiles para eventos y negocios. Confección de banderas publicitarias institucionales y fly banners gota o pluma para empresas y comercios.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Catálogo de Mástiles y Banderas",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fabricación de mástiles portátiles y fijos"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Alquiler de mástiles para eventos corporativos y ferias"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Banderas publicitarias y fly banners para negocios y empresas"
          }
        }
      ]
    }
  }

  const features = [
    {
      icon: Calendar,
      title: "Alquiler por Jornada o Evento",
      desc: "Servicio ágil de alquiler para congresos, exposiciones, actos protocolares, eventos deportivos y lanzamientos comerciales con entrega puntual."
    },
    {
      icon: Building2,
      title: "Fabricación a Medida",
      desc: "Mástiles fijos o telescópicos en caño estructural y aluminio con tratamiento anticorrosivo, ideales para fachadas, predios y naves industriales."
    },
    {
      icon: Wind,
      title: "Fly Banners Gota y Pluma",
      desc: "Estructuras de fibra de vidrio y aluminio ultra livianas con rotación 360° para acompañar el viento y mantener siempre visible tu marca."
    },
    {
      icon: ShieldCheck,
      title: "Telas Náuticas Sublimadas",
      desc: "Impresión digital textil de alta definición con tintas resistentes a rayos UV, lavables y diseñadas para soportar la intemperie prolongada."
    }
  ]

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col selection:bg-yellow-400 selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Top Header / Navigation */}
      <header className="border-b border-neutral-900 bg-neutral-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/Trillon isologo amarillo.png"
              alt="TrillonGraf Logo"
              width={32}
              height={32}
              className="w-7 h-7 object-contain transition-transform group-hover:scale-105"
            />
            <span className="text-white font-extrabold text-lg tracking-tight group-hover:text-yellow-400 transition-colors">
              TrillonGraf
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-xs sm:text-sm font-semibold text-neutral-300 hover:text-yellow-400 transition-colors flex items-center gap-1.5"
            >
              <ArrowLeft size={16} />
              <span className="hidden sm:inline">Volver a la</span> Web Principal
            </Link>
            <TrackedWhatsAppLink 
              href={whatsappUrl} 
              source="landing_mastiles_header"
            >
              <Button
                size="sm"
                className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold text-xs sm:text-sm shadow-md"
              >
                <WhatsAppIcon className="mr-1.5" size={16} />
                <span>Consultar</span>
              </Button>
            </TrackedWhatsAppLink>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-neutral-900 overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl pointer-events-none" />

          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Text & CTA */}
              <div className="lg:col-span-7 text-center lg:text-left">
                {/* Pill Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 text-xs sm:text-sm font-bold tracking-wide uppercase mb-6">
                  <Flag size={14} className="text-emerald-400" />
                  <span>Fabricación y Alquiler Especializado</span>
                </div>

                {/* H1 Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight text-balance">
                  Mástiles, Banderas y Fly Banners para <span className="text-emerald-400">Eventos y Empresas</span>
                </h1>

                {/* Main Description */}
                <p className="text-base sm:text-lg text-neutral-300 mb-6 leading-relaxed">
                  Diseño, fabricación y alquiler de mástiles fijos y portátiles para comercios, eventos corporativos, ferias y predios industriales. Confeccionamos banderas institucionales y fly banners de máxima durabilidad en Rosario, Granadero Baigorria, San Lorenzo y toda la región.
                </p>

                {/* Zone coverage indicator */}
                <p className="text-xs sm:text-sm text-neutral-400 mb-8 flex items-center justify-center lg:justify-start gap-2 font-medium">
                  <Sparkles size={15} className="text-yellow-400 flex-shrink-0" />
                  <span>Alquiler por jornada con bases y asesoramiento de montaje incluido.</span>
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <TrackedWhatsAppLink 
                    href={whatsappUrl} 
                    className="w-full sm:w-auto"
                    source="landing_mastiles_hero"
                  >
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-emerald-400 text-black hover:bg-emerald-500 font-extrabold text-base px-7 py-6 cursor-pointer shadow-[0_4px_20px_rgba(52,211,153,0.25)] flex items-center justify-center gap-2"
                    >
                      <WhatsAppIcon size={18} />
                      <span>Pedir Presupuesto por WhatsApp</span>
                    </Button>
                  </TrackedWhatsAppLink>
                  <Link href="/#servicios" className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto border-2 border-neutral-700 text-white hover:bg-neutral-800 font-bold text-base px-7 py-6 bg-transparent cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>Ver Otros Servicios</span>
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right Column: Visual Showcase Images */}
              <div className="lg:col-span-5 flex justify-center gap-4">
                <div className="relative w-44 sm:w-48 aspect-[9/16] rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl group">
                  <img
                    src="/mastil-rafasa.JPEG"
                    alt="Mástil institucional instalado para empresa - Rafasa"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                    <span className="text-xs font-bold text-white leading-tight">Mástil de fachada • Rafasa</span>
                  </div>
                </div>

                <div className="relative w-44 sm:w-48 aspect-[9/16] rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl group mt-6">
                  <img
                    src="/banderas.jpg"
                    alt="Banderas publicitarias y fly banners para eventos"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                    <span className="text-xs font-bold text-white leading-tight">Banderas y fly banners para eventos</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Features / Solutions Grid */}
        <section className="py-14 px-4 sm:px-6 lg:px-8 bg-neutral-900/40">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">
                Soluciones para empresas y eventos
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mt-2">
                ¿Qué fabricamos y alquilamos?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, idx) => {
                const Icon = feature.icon
                return (
                  <div key={idx} className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 transition-colors flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 flex items-center justify-center mb-4">
                        <Icon size={20} />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-neutral-300 leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Specifications Section */}
        <section className="py-14 px-4 sm:px-6 lg:px-8 border-t border-neutral-900">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-neutral-900/60 border border-neutral-800 rounded-3xl p-8 sm:p-10">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <CheckCircle2 className="text-emerald-400" size={24} />
                <span>Detalles técnicos de nuestras estructuras:</span>
              </h3>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-neutral-300">
                <li className="flex items-start gap-2">
                  <ChevronRight size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Alturas estándar:</strong> Mástiles de 3m, 4.5m, 6m y medidas especiales bajo plano.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Tipos de base:</strong> Base en cruz con contrapeso de agua, estaca para césped o plato de fundición.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Formatos de fly banner:</strong> Gota (Tear Drop), Pluma (Feather) y Rectangular.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Impresión textil:</strong> Sublimación digital full color de doble cara visible.</span>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <p className="text-white font-bold">¿Necesitás asesoramiento para tu evento o negocio?</p>
                  <p className="text-xs text-neutral-400">Te enviamos presupuesto formal en el día por WhatsApp.</p>
                </div>
                <TrackedWhatsAppLink 
                  href={whatsappUrl} 
                  source="landing_mastiles_bottom"
                >
                  <Button className="bg-emerald-400 text-black hover:bg-emerald-500 font-bold">
                    <WhatsAppIcon className="mr-2" size={16} />
                    Cotizar Ahora
                  </Button>
                </TrackedWhatsAppLink>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-900 bg-neutral-950 py-8 px-4 text-center text-xs text-neutral-500">
        <p className="mb-2">© {new Date().getFullYear()} TrillonGraf. Fábrica de Cartelería y Publicidad.</p>
        <p className="mb-3">Fabricación y alquiler de mástiles y banderas en todo el Gran Rosario, Cordón Industrial y Santa Fe.</p>
        <div className="flex items-center justify-center gap-4 text-neutral-400 font-medium">
          <Link href="/" className="hover:text-yellow-400 transition-colors">
            Página Principal
          </Link>
          <span>•</span>
          <Link href="/#servicios" className="hover:text-yellow-400 transition-colors">
            Todos los Servicios
          </Link>
          <span>•</span>
          <Link href="/#galeria" className="hover:text-yellow-400 transition-colors">
            Galería de Trabajos
          </Link>
        </div>
      </footer>
    </div>
  )
}
