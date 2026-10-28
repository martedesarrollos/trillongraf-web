import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { CITIES, CITIES_LIST, type CityConfig } from "@/lib/cities"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { TrackedWhatsAppLink } from "@/components/tracked-whatsapp-link"
import { 
  ArrowRight, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  Box, 
  Lightbulb, 
  Car, 
  ShieldCheck, 
  ArrowLeft 
} from "lucide-react"

interface CityPageProps {
  params: Promise<{ ciudad: string }>
}

export async function generateStaticParams() {
  return CITIES_LIST.map((city) => ({
    ciudad: city.slug,
  }))
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { ciudad } = await params
  const city = CITIES[ciudad]

  if (!city) {
    return {
      title: "Ciudad no encontrada | TrillonGraf",
    }
  }

  const pageTitle = `${city.title} | TrillonGraf Fábrica`
  const metaDescription = `Fábrica de cartelería y letreros en ${city.name}. Carteles luminosos LED, letras corpóreas 3D y marquesinas para comercios. Cotización rápida.`

  return {
    title: pageTitle,
    description: metaDescription,
    alternates: {
      canonical: `/carteleria/${city.slug}`,
    },
    openGraph: {
      title: pageTitle,
      description: metaDescription,
      url: `https://trillongraf.com.ar/carteleria/${city.slug}`,
      siteName: "TrillonGraf",
      locale: "es_AR",
      type: "website",
      images: [
        {
          url: "https://trillongraf.com.ar/trillongraf-logo-horizontal.jpg",
          width: 1200,
          height: 630,
          alt: `TrillonGraf - Cartelería en ${city.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: metaDescription,
      images: ["https://trillongraf.com.ar/trillongraf-logo-horizontal.jpg"],
    },
  }
}

export default async function CityPage({ params }: CityPageProps) {
  const { ciudad } = await params
  const city: CityConfig | undefined = CITIES[ciudad]

  if (!city) {
    notFound()
  }

  const whatsappMessage = encodeURIComponent(
    `Hola TrillonGraf! Soy de ${city.name} y quería consultar por un presupuesto de cartelería para mi negocio.`
  )
  const whatsappUrl = `https://wa.me/5493413258979?text=${whatsappMessage}`

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `TrillonGraf - Cartelería en ${city.name}`,
    "image": "https://trillongraf.com.ar/trillongraf-logo-horizontal.jpg",
    "url": `https://trillongraf.com.ar/carteleria/${city.slug}`,
    "telephone": "+5493413258979",
    "priceRange": "$$",
    "areaServed": {
      "@type": "City",
      "name": city.name,
    },
    "description": city.description,
    "sameAs": [
      "https://www.facebook.com/trillongraf",
      "https://instagram.com/trillongrafpublicidad",
    ],
  }

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
              source="landing_city_header" 
              details={{ city: city.name, slug: city.slug }}
            >
              <Button
                size="sm"
                className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold text-xs sm:text-sm shadow-md"
              >
                <WhatsAppIcon className="mr-1.5" size={16} />
                <span>WhatsApp</span>
              </Button>
            </TrackedWhatsAppLink>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-neutral-900 overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />

          <div className="container mx-auto max-w-4xl text-center relative z-10">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-xs sm:text-sm font-bold tracking-wide uppercase mb-6">
              <MapPin size={14} className="text-yellow-400" />
              <span>{city.badge}</span>
            </div>

            {/* H1 Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight text-balance">
              {city.title}
            </h1>

            {/* Main Description */}
            <p className="text-base sm:text-lg md:text-xl text-neutral-300 mb-6 max-w-3xl mx-auto leading-relaxed text-balance">
              {city.description}
            </p>

            {/* Zone coverage indicator */}
            <p className="text-xs sm:text-sm text-neutral-400 mb-10 max-w-2xl mx-auto flex items-center justify-center gap-1.5 font-medium">
              <Sparkles size={14} className="text-yellow-400 flex-shrink-0" />
              <span>{city.zoneDescription}</span>
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/#galeria" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-yellow-400 text-black hover:bg-yellow-500 font-extrabold text-base px-7 py-6 cursor-pointer shadow-[0_4px_20px_rgba(250,204,21,0.25)] flex items-center justify-center gap-2"
                >
                  <span>Ver Trabajos y Catálogo</span>
                  <ArrowRight size={18} />
                </Button>
              </Link>
              <TrackedWhatsAppLink 
                href={whatsappUrl} 
                className="w-full sm:w-auto"
                source="landing_city_hero" 
                details={{ city: city.name, slug: city.slug }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-neutral-700 text-white hover:bg-neutral-800 font-bold text-base px-7 py-6 bg-transparent cursor-pointer flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon size={18} />
                  <span>Presupuesto en {city.name}</span>
                </Button>
              </TrackedWhatsAppLink>
            </div>
          </div>
        </section>

        {/* Highlights & Services */}
        <section className="py-14 px-4 sm:px-6 lg:px-8 bg-neutral-900/40">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-10">
              <span className="text-yellow-400 text-xs font-bold uppercase tracking-wider">
                Soluciones a medida
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-2">
                ¿Qué fabricamos para negocios en {city.name}?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 flex items-center justify-center mb-4">
                  <Lightbulb size={20} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Carteles Luminosos LED y Neón
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  Marquesinas frontlight y backlight con iluminación LED de alta eficiencia y bajo consumo. Letreros de neón LED personalizados para interiores y vidrieras comerciales.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 flex items-center justify-center mb-4">
                  <Box size={20} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Letras Corpóreas 3D
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  Logotipos y letras tridimensionales en polyfan, acrílico, acero y chapa. Opciones con retroiluminación flotante o luz frontal para fachadas y recepciones corporativas.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 flex items-center justify-center mb-4">
                  <Car size={20} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Ploteo Vehicular & Flotas
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  Rotulación total o parcial de vehículos de trabajo, camionetas y camiones con vinilos premium resistentes al lavado a presión y a la intemperie vial.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 flex items-center justify-center mb-4">
                  <ShieldCheck size={20} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Montaje e Instalación Profesional
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  Estructuras reforzadas en caño estructural calculadas para resistir fuertes vientos. Montaje seguro en altura y garantía directa de fábrica en {city.name}.
                </p>
              </div>
            </div>

            {/* Checklist */}
            <div className="mt-8 p-6 rounded-2xl bg-neutral-950 border border-neutral-800/80">
              <h4 className="text-sm font-bold text-neutral-200 uppercase tracking-wider mb-4">
                Beneficios de elegir TrillonGraf para tu local en {city.name}:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-neutral-300">
                {city.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Red de Cobertura Regional / Otras Localidades */}
            <div className="mt-8 p-6 rounded-2xl bg-neutral-950/70 border border-neutral-800/80">
              <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-3">
                También fabricamos e instalamos en todo el Gran Rosario y Cordón Industrial:
              </h4>
              <div className="flex flex-wrap gap-2">
                {CITIES_LIST.filter((c) => c.slug !== city.slug).map((c) => (
                  <Link
                    key={c.slug}
                    href={`/carteleria/${c.slug}`}
                    className="text-xs bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-yellow-400 px-3 py-1.5 rounded-lg border border-neutral-800/80 transition-colors"
                  >
                    Carteles en {c.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Big Bridge to Main Website */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-neutral-900 bg-neutral-950">
          <div className="container mx-auto max-w-4xl">
            <div className="rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-900/90 to-yellow-950/20 border border-yellow-400/20 p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
              <div className="relative z-10">
                <span className="text-yellow-400 font-extrabold text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/20 inline-block mb-4">
                  Sitio Web Principal
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
                  Conocé todos nuestros trabajos y proyectos reales
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto mb-8 leading-relaxed">
                  En nuestra web principal vas a encontrar la galería completa de cartelería instalada en estaciones de servicio, locales comerciales, gimnasios y empresas de todo el cordón industrial.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/">
                    <Button
                      size="lg"
                      className="bg-yellow-400 text-black hover:bg-yellow-500 font-extrabold px-8 py-6 text-base shadow-lg cursor-pointer flex items-center gap-2"
                    >
                      <span>Entrar a la Web Principal</span>
                      <ArrowRight size={18} />
                    </Button>
                  </Link>
                  <TrackedWhatsAppLink 
                    href={whatsappUrl} 
                    source="landing_city_bridge" 
                    details={{ city: city.name, slug: city.slug }}
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="border border-neutral-700 text-neutral-200 hover:bg-neutral-800 font-bold px-7 py-6 text-base bg-transparent cursor-pointer"
                    >
                      <WhatsAppIcon className="mr-2" size={18} />
                      Consultar Ahora
                    </Button>
                  </TrackedWhatsAppLink>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-neutral-900 py-8 px-4 text-center text-xs text-neutral-500">
        <p className="mb-2">
          © {new Date().getFullYear()} TrillonGraf. Cartelería y Publicidad en {city.name}, Gran Rosario y Cordón Industrial.
        </p>
        <div className="flex items-center justify-center gap-4 text-neutral-400 font-medium">
          <Link href="/" className="hover:text-yellow-400 transition-colors">
            Página Principal
          </Link>
          <span>•</span>
          <Link href="/mastiles" className="hover:text-yellow-400 transition-colors">
            Mástiles y Banderas
          </Link>
          <span>•</span>
          <TrackedWhatsAppLink 
            href={whatsappUrl} 
            className="hover:text-yellow-400 transition-colors"
            source="landing_city_footer" 
            details={{ city: city.name, slug: city.slug }}
          >
            WhatsApp
          </TrackedWhatsAppLink>
        </div>
      </footer>
    </div>
  )
}
