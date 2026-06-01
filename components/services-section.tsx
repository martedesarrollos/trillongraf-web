"use client"

import { useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { useIsMobile } from "@/hooks/use-mobile"
import { Box, Lightbulb, Car, Shield, ChevronRight, ChevronLeft, Hammer, Palette, Zap } from "lucide-react"

const services = [
  {
    title: "Letreros Corpóreos 3D",
    subtitle: "Relieve y Elegancia Corporativa",
    description: "Letras y logotipos 3D personalizados. Ideales para recepciones, oficinas y fachadas comerciales. Retroiluminación LED para asegurar máxima visibilidad, distinción y elegancia institucional las 24 horas.",
    icon: Box,
    images: [
      "/corporeo-xeroff.jpg",
            "costa_nueva.JPEG"
    ],
    accent: "text-yellow-400 border-yellow-500/20 bg-yellow-500/5",
    details: [
      "Diseño a medida y relieve 3D flotante",
      "Materiales premium: acrílico, aluminio, acero inoxidable, chapa y polyfan",
      "Iluminación LED interna de larga vida útil",
      "Instalación profesional con plantillas de precisión"
    ]
  },
  {
    title: "Cartelería y Marquesinas",
    subtitle: "Publicidad Exterior de Alto Impacto",
    description: "Diseño y fabricación de carteles luminosos, marquesinas de gran formato y vidrieras comerciales. Especialistas en cartelería Frontlight y Backlight con lona tensada premium impresa en alta resolución. Incorporamos sistemas de iluminación LED de alta eficiencia energética para destacar tu local tanto de día como de noche.",
    icon: Lightbulb,
    images: [
      "/dulcereino.JPEG",
      "vibra.JPEG",
      "/nanzer_backlight.JPEG"
    ],
    accent: "text-fuchsia-400 border-fuchsia-500/20 bg-fuchsia-500/5",
    details: [
      "Marquesinas frontlight y backlight premium",
      "Lonas tensadas resistentes a la intemperie",
      "Luminarias LED integradas de bajo consumo",
      "Neón LED personalizado y carteles vintage"
    ]
  },
  
  {
    title: "Ploteo Vehicular & Flotas",
    subtitle: "Publicidad Móvil las 24 Horas",
    description: "Rotulación total o parcial de vehículos de trabajo, utilitarios, camionetas, camiones y flotas de distribución comercial completa. Diseñamos piezas publicitarias adaptadas al chasis de cada marca de auto, utilizando vinilos vehiculares premium resistentes a la intemperie, rayos UV, lavados de alta presión y desgaste vial.",
    icon: Car,
    images: [
      "ambulancia.JPEG",
      "/soria2.JPEG",
      "/soria.JPEG"
      
      
    ],
    accent: "text-blue-400 border-blue-500/20 bg-blue-500/5",
    details: [
      "Protección de la pintura de fábrica del chasis",
      "Vinilos premium de alta durabilidad (Oracal/3M)",
      "Rotulación de flotas en tiempos récord",
      "Remoción limpia sin dejar residuos de pegamento"
    ]
  },

  {
    title: "Carteles de Neón LED",
    subtitle: "Iluminación Moderna de Alto Impacto",
    description: "Diseño y fabricación de carteles de neón LED personalizados. Diseños vibrantes de bajo consumo, alta luminosidad y larga durabilidad. Ideales para ambientar interiores comerciales, fachadas, eventos y logotipos corporativos que captan la atención al instante.",
    icon: Zap,
    images: [
      "/neon-led.jpg",
      "ruby.jpeg",
      "inthehouse.JPEG"
    ],
    accent: "text-cyan-400 border-cyan-500/20 bg-cyan-500/5",
    details: [
      "Diseños 100% personalizados y tipografías a elección",
      "Tecnología LED de alta eficiencia y bajo consumo",
      "Base de acrílico cristal de alta resistencia",
      "Fácil instalación con transformador de 12v incluido"
    ]
  }
]

interface ServiceCarouselProps {
  images: string[]
  title: string
}

function ServiceCarousel({ images, title }: ServiceCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const shouldReduceMotion = useReducedMotion()

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <div className="relative w-full aspect-video md:aspect-[16/10] rounded-2xl overflow-hidden border border-neutral-800/60 bg-neutral-950 group">
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
            className="w-full h-full object-cover"
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
      className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-neutral-950 overflow-hidden"
    >
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
                <div className={`lg:col-span-6 relative w-full ${isEven ? "lg:order-last" : ""}`}>
                  <ServiceCarousel images={service.images} title={service.title} />
                </div>

                {/* Copywriting Details Side */}
                <div className="lg:col-span-6 flex flex-col justify-center space-y-4 px-2">
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border font-bold text-xs uppercase tracking-wider w-max ${service.accent}`}>
                    <Icon size={16} />
                    <span>{service.subtitle}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-none">
                    {service.title}
                  </h3>

                  <p className="text-neutral-400 leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>

                  <div className="pt-2 border-t border-neutral-800/60">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-300">
                          <ChevronRight className="text-yellow-400 flex-shrink-0" size={14} />
                          <span>{detail}</span>
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
    </section>
  )
}
