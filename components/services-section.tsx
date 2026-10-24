"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { useIsMobile } from "@/hooks/use-mobile"
import { Box, Lightbulb, Car, Shield, ChevronRight, ChevronLeft, Hammer, Palette, Zap, Flag } from "lucide-react"

const services = [
  {
    title: "Letreros Corpóreos 3D",
    subtitle: "Relieve y Elegancia Corporativa",
    icon: Box,
    images: [
      "/house-27-san-lorenzo.JPEG",
      "/corporeo-xeroff.jpg",
      "/costa_nueva.JPEG"
    ],
    accent: "text-yellow-400 border-yellow-500/20 bg-yellow-500/5",
    details: [
      "Diseño a medida y relieve 3D flotante",
      "Materiales premium: acrílico, aluminio, chapa y polyfan",
      "Iluminación LED IP65 de alta potencia",
      "Instalación profesional con plantillas de precisión"
    ]
  },
  {
    title: "Cartelería y Marquesinas",
    subtitle: "Publicidad Exterior de Alto Impacto",
    icon: Lightbulb,
    images: [
      "/dulcereino.JPEG",
      "/vibra.JPEG",
      "/nanzer_backlight.JPEG"
    ],
    accent: "text-fuchsia-400 border-fuchsia-500/20 bg-fuchsia-500/5",
    details: [
      "Marquesinas frontlight y backlight premium",
      "Lonas y vinilos resistentes a la intemperie",
      "Luminarias LED integradas de bajo consumo",
      "Estructuras livianas y adaptadas a tu espacio"
    ]
  },
  
  {
    title: "Ploteo Vehicular & Flotas",
    subtitle: "Tu imagen en movimiento",
    icon: Car,
    images: [
      "/ambulancia.JPEG",
      "/soria2.JPEG",
      "/soria.JPEG"
    ],
    accent: "text-blue-400 border-blue-500/20 bg-blue-500/5",
    details: [
      "Protección de la pintura de fábrica",
      "Vinilos premium de alta durabilidad",
      "Rotulación de flotas",
      "Remoción limpia sin dejar residuos de pegamento"
    ]
  },

  {
    title: "Carteles de Neón LED",
    subtitle: "Iluminación Moderna de Alto Impacto",
    icon: Zap,
    images: [
      "/neon-led.jpg",
      "/ruby.jpeg",
      "/inthehouse.JPEG"
    ],
    accent: "text-cyan-400 border-cyan-500/20 bg-cyan-500/5",
    details: [
      "Diseños 100% personalizados y tipografías a elección",
      "Tecnología LED de alta eficiencia y bajo consumo",
      "Base de acrílico cristal de alta resistencia",
      "Fácil instalación"
    ]
  },

  {
    title: "Fabricación y Alquiler de Mástiles y Banderas",
    subtitle: "Para Eventos, Empresas y Negocios",
    icon: Flag,
    images: [
      "/mastil-rafasa.JPEG",
      "/banderas.jpg"
    ],
    accent: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5",
    aspectRatio: "portrait",
    details: [
      "Mástiles portátiles y fijos de alta resistencia",
      "Banderas y fly banners personalizados (gota y pluma)",
      "Alquiler por jornada para eventos, ferias y lanzamientos",
      "Telas de poliester y sublimación aptas intemperie y viento"
    ]
  }
]

interface ServiceCarouselProps {
  images: string[]
  title: string
  aspectRatio?: "portrait" | "landscape"
}

function ServiceCarousel({ images, title, aspectRatio = "landscape" }: ServiceCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const shouldReduceMotion = useReducedMotion()
  const isPortrait = aspectRatio === "portrait"

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  // Preload all images in the carousel on mount
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [images])

  // Mobile Swipe Gesture Recognition
  const [touchStartX, setTouchStartX] = useState<number | null>(null)
  const [touchStartY, setTouchStartY] = useState<number | null>(null)
  const [touchEndX, setTouchEndX] = useState<number | null>(null)
  const [touchEndY, setTouchEndY] = useState<number | null>(null)

  const minSwipeDistance = 50

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(null)
    setTouchEndY(null)
    setTouchStartX(e.targetTouches[0].clientX)
    setTouchStartY(e.targetTouches[0].clientY)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX)
    setTouchEndY(e.targetTouches[0].clientY)
  }

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX || !touchStartY || !touchEndY) return
    const distanceX = touchStartX - touchEndX
    const distanceY = touchStartY - touchEndY
    const isHorizontalSwipe = Math.abs(distanceX) > Math.abs(distanceY)

    if (isHorizontalSwipe) {
      const isLeftSwipe = distanceX > minSwipeDistance
      const isRightSwipe = distanceX < -minSwipeDistance

      if (isLeftSwipe) {
        nextSlide()
      } else if (isRightSwipe) {
        prevSlide()
      }
    }
  }

  return (
    <div
      className={`relative w-full rounded-2xl overflow-hidden border border-neutral-800/60 bg-neutral-950 group shadow-xl ${
        isPortrait
          ? "max-w-[280px] sm:max-w-[320px] aspect-[9/16] mx-auto"
          : "aspect-video md:aspect-[16/10]"
      }`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Images Slider */}
      <div className="w-full h-full relative">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`${title} - Ejemplo ${currentIndex + 1}`}
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: shouldReduceMotion ? 0 : -30 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full object-cover object-center"
            draggable={false}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Navigation Buttons (Left/Right Arrows) */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-yellow-400 hover:text-black text-white p-2 rounded-full transition-colors z-20 cursor-pointer opacity-0 group-hover:opacity-100 focus:opacity-100"
            aria-label="Imagen anterior"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-yellow-400 hover:text-black text-white p-2 rounded-full transition-colors z-20 cursor-pointer opacity-0 group-hover:opacity-100 focus:opacity-100"
            aria-label="Siguiente imagen"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      {/* Pagination Dots Indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                idx === currentIndex ? "bg-yellow-400 w-4" : "bg-neutral-500 hover:bg-neutral-300"
              }`}
              aria-label={`Ir a imagen ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export function ServicesSection() {
  const shouldReduceMotion = useReducedMotion()
  const isMobile = useIsMobile()

  // Responsive Entry Animations
  // Odd elements slide from left (x: -50) on desktop
  // Even elements slide from right (x: 50) on desktop
  // Mobile uses clean slide-up (y: 30)
  const itemVariants = {
    hidden: (index: number) => ({
      opacity: 0,
      x: shouldReduceMotion ? 0 : (isMobile ? 0 : (index % 2 === 0 ? -50 : 50)),
      y: shouldReduceMotion ? 0 : (isMobile ? 30 : 0)
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { type: "spring", stiffness: 70, damping: 15 }
    }
  }

  return (
    <section
      id="servicios"
      className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-neutral-950 overflow-hidden relative"
    >
      {/* Anchor for hero button navigation */}
      <div id="showroom" className="absolute -top-16 left-0" />
      <div className="container mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-yellow-400 font-bold tracking-widest uppercase text-xs sm:text-sm px-3 py-1 bg-yellow-400/10 rounded-full border border-yellow-400/20">
              Nuestros Servicios
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4 mb-4 tracking-tight">
              Especialistas en <span className="text-yellow-400">Cartelería Integral</span>
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto text-balance font-medium">
              Soluciones visuales y de montaje con calidad industrial para potenciar y proteger tu marca.
            </p>
          </motion.div>
        </div>

        {/* Content Layout (Staggered Side-by-Side) */}
        <div className="space-y-12 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            const isEven = index % 2 !== 0
            const isPortrait = service.aspectRatio === "portrait"

            return (
              <motion.div
                key={index}
                custom={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-neutral-900/30 p-6 md:p-8 rounded-3xl border border-neutral-800/40 backdrop-blur-sm ${
                  isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Visual Image Side: Service Carousel */}
                <div className={`relative w-full ${isPortrait ? "lg:col-span-4 flex justify-center" : "lg:col-span-6"} ${isEven ? "lg:order-last" : ""}`}>
                  <ServiceCarousel images={service.images} title={service.title} aspectRatio={service.aspectRatio} />
                </div>

                {/* Copywriting Details Side */}
                <div className={`${isPortrait ? "lg:col-span-8 lg:px-4" : "lg:col-span-6 px-2"} flex flex-col justify-center space-y-5`}>
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border font-bold text-xs uppercase tracking-wider w-max ${service.accent}`}>
                    <Icon size={16} />
                    <span>{service.subtitle}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
                    {service.title}
                  </h3>

                  <div className="pt-2 border-t border-neutral-800/60">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                          <ChevronRight className="text-yellow-400 flex-shrink-0 mt-0.5" size={14} />
                          <span className="leading-snug">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>

      {/* Sección semántica oculta para indexación en la búsqueda de Google */}
      <section className="sr-only" aria-label="Fabricación y alquiler de mástiles, banderas y fly banners">
        <h2>Fabricación y Alquiler de Mástiles, Banderas Publicitarias y Fly Banners para Negocios y Empresas</h2>
        <p>
          En TrillonGraf nos especializamos en la fabricación y alquiler de mástiles para eventos, negocios y empresas en Rosario, Granadero Baigorria, San Lorenzo y todo el cordón industrial de Santa Fe.
        </p>
        <p>
          Diseñamos y confeccionamos banderas institucionales, banderas publicitarias de exterior e interior, y fly banners en formatos pluma, gota y vela con impresión textil sublimada de alta definición resistente a los rayos UV, lavado y vientos fuertes.
        </p>
        <h3>Servicios de Mástiles y Banderas para Empresas y Comercios:</h3>
        <ul>
          <li>Fabricación de mástiles telescópicos, mástiles fijos de caño estructural y mástiles portátiles con bases pesadas o estacas.</li>
          <li>Alquiler de mástiles y banderas publicitarias por jornada para ferias, congresos, exposiciones y eventos corporativos.</li>
          <li>Fly banners personalizados para locales comerciales, estaciones de servicio, concesionarias y eventos al aire libre.</li>
          <li>Banderas institucionales con logo corporativo para mástiles de fachada en parques industriales y fábricas.</li>
        </ul>
      </section>

      {/* Structured Data Schema.org para Google Search */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Fabricación y Alquiler de Mástiles, Banderas y Fly Banners",
            "serviceType": "Mástiles y Banderas Publicitarias para Eventos y Negocios",
            "provider": {
              "@type": "LocalBusiness",
              "name": "TrillonGraf - Fábrica de Cartelería y Publicidad",
              "telephone": "+5493413258979",
              "url": "https://trillongraf.com.ar"
            },
            "areaServed": [
              { "@type": "City", "name": "Rosario" },
              { "@type": "City", "name": "Granadero Baigorria" },
              { "@type": "City", "name": "San Lorenzo" },
              { "@type": "AdministrativeArea", "name": "Gran Rosario" },
              { "@type": "AdministrativeArea", "name": "Santa Fe" }
            ],
            "description": "Fabricación y alquiler de mástiles y banderas publicitarias para eventos y negocios. Confección de fly banners tipo gota y pluma para empresas en Rosario y Santa Fe.",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Mástiles y Banderas",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Fabricación de mástiles fijos y portátiles para empresas"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Alquiler de mástiles para eventos y exposiciones"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Fly banners y banderas publicitarias para negocios y empresas"
                  }
                }
              ]
            }
          })
        }}
      />
    </section>
  )
}
