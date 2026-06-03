"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { useIsMobile } from "@/hooks/use-mobile"

const categories = ["Todos", "Corpóreos", "Cartelería", "Vehículos"]

const portfolioItems = [
  {
    id: 1,
    category: "Corpóreos",
    title: "Corpóreos con iluminación backlight (Gimnasio Heroff)",
    src: "/corporeo-xeroff.jpg",
    height: "tall"
  },
  {
    id: 2,
    category: "Cartelería",
    title: "Lona front con estructura en caño estructural (Campeones 2022)",
    src: "/lona-messi.jpg",
    height: "medium"
  },
  {
    id: 3,
    category: "Corpóreos",
    title: "Letras corpóreas de fachada - Estación de Servicio Shell",
    src: "/estacion-shell-canopy.jpg",
    height: "medium"
  },
  {
    id: 4,
    category: "Vidriera",
    title: "Ploteo premium de vidriera",
    src: "/imstore.jpeg",
    height: "tall"
  },
  {
    id: 5,
    category: "Cartelería",
    title: "Tótem estructural e Indicador GNC - Estación Shell",
    src: "/estacion-shell-totem.jpg",
    height: "medium"
  },
  {
    id: 6,
    category: "Vehículos",
    title: "Trailer comercial con estructura metálica y lona backlight",
    src: "/soria3.JPEG",
    height: "tall"
  },
  {
    id: 7,
    category: "Cartelería",
    title: "Estructura personalizada con lona impresa en alta calidad y retroiluminada",
    src: "/vibra.JPEG",
    height: "medium"
  },
  {
    id: 8,
    category: "Corpóreos",
    title: "Cartel corpóreo personalizado con iluminación mixta frontal y trasera (Las Vegas)",
    src: "/las_vegas.JPEG",
    height: "medium"
  },
  {
    id: 9,
    category: "Corpóreos",
    title: "Letras corpóreas en Polyfan con acabado premium (Alyna)",
    src: "/alyna.JPEG",
    height: "medium"
  }
]

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("Todos")
  const shouldReduceMotion = useReducedMotion()
  const isMobile = useIsMobile()

  const filteredItems = portfolioItems.filter(
    (item) => activeCategory === "Todos" || item.category === activeCategory
  )

  const getHeightClass = (height: string) => {
    switch (height) {
      case "tall":
        return "row-span-2"
      case "short":
        return "row-span-1"
      default:
        return "row-span-1"
    }
  }

  // Animaciones responsivas para las tarjetas
  // Desktop: Los elementos impares entran desde la izquierda (x: -50), los pares desde la derecha (x: 50)
  // Mobile: Entran desde abajo (y: 30) para evitar desbordamiento horizontal
  const itemVariants = {
    hidden: (index: number) => ({
      opacity: 0,
      x: shouldReduceMotion ? 0 : (isMobile ? 0 : (index % 2 === 0 ? -50 : 50)),
      y: shouldReduceMotion ? 0 : (isMobile ? 30 : 0),
      scale: shouldReduceMotion ? 1 : 0.95
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 85, damping: 16 }
    },
    exit: {
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 0.95,
      transition: { duration: 0.2 }
    }
  }

  return (
    <section 
      id="galeria" 
      className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-neutral-900 overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 text-balance tracking-tight">
              Nuestros Trabajos
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-8 text-balance font-medium">
              Proyectos reales fabricados y montados en el Gran Rosario y el cordón industrial
            </p>
          </motion.div>

          {/* Category Filters */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveCategory(category)}
                variant={activeCategory === category ? "default" : "outline"}
                className={`${
                  activeCategory === category
                    ? "bg-yellow-400 text-black hover:bg-yellow-500 font-bold shadow-[0_4px_12px_rgba(250,204,21,0.2)]"
                    : "border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:text-white"
                } transition-all duration-300 cursor-pointer`}
              >
                {category}
              </Button>
            ))}
          </motion.div>
        </div>

        {/* Masonry Grid with Layout Animations */}
        <motion.div 
          layout={!shouldReduceMotion}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[250px] gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                custom={index}
                layout={!shouldReduceMotion}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: true, amount: 0.05 }}
                className={`group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 ${getHeightClass(
                  item.height
                )}`}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Dynamic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-5">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 w-full">
                    <span className="inline-block bg-yellow-400 text-black text-xs font-black px-2.5 py-1 rounded-md mb-2 shadow-sm uppercase tracking-wider">
                      {item.category}
                    </span>
                    <p className="text-white text-sm font-bold leading-snug line-clamp-2">
                      {item.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}


