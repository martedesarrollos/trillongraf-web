"use client"

import { useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { Box, Lightbulb, Car, Image, ChevronRight, Zap } from "lucide-react"

const showcaseTabs = [
  {
    id: "corporeos",
    title: "Letras Corpóreas",
    icon: Box,
    tagline: "Relieve y Elegancia 3D",
    description: "Fabricación de letras tridimensionales en polyfan, acrílico y metales con iluminación de fondo (backlight) o frontal. Aportan una estética premium e institucional inigualable.",
    accentColor: "from-yellow-400 to-amber-500",
    image: "/corporeo-xeroff.jpg",
    details: ["Efecto de sombra flotante (Backlight)", "Terminaciones en acrílico brillante y metal", "Corte computarizado de alta precisión", "Instalación en altura garantizada"]
  },
  {
    id: "neon",
    title: "Neon LED & Luminosos",
    icon: Lightbulb,
    tagline: "Brillo de Alto Impacto",
    description: "Carteles de neon LED de última generación y estructuras backlight/frontlight de alta eficiencia energética. Diseños personalizados que destacan tu marca las 24 horas del día.",
    accentColor: "from-fuchsia-500 to-purple-600",
    image: "/neon-led.jpg",
    details: ["Consumo eléctrico ultra bajo", "Colores vibrantes y regulables", "Estructuras de larga duración", "Visibilidad nocturna máxima"]
  },
  {
    id: "ploteo",
    title: "Ploteo & Rotulación",
    icon: Car,
    tagline: "Publicidad Móvil Profesional",
    description: "Transformamos vehículos comerciales en potentes herramientas de marketing. Vinilos vehiculares de primera marca con resistencia a la intemperie y acabados perfectos.",
    accentColor: "from-blue-400 to-indigo-600",
    image: "/estacion-shell-canopy.jpg", // Using gas station canopy work as another stunning reference
    details: ["Protección de pintura original", "Vinilos calandrados de alta duración", "Diseños adaptados a cada chasis", "Ploteo total o parcial de flotas"]
  },
  {
    id: "lonas",
    title: "Lonas & Estructuras",
    icon: Image,
    tagline: "Presencia a Gran Escala",
    description: "Banners y lonas tensadas sobre bastidores reforzados y estructuras front. Ideal para fachadas comerciales de gran formato, eventos masivos y comunicación vial.",
    accentColor: "from-emerald-400 to-teal-500",
    image: "/lona-messi.jpg",
    details: ["Lona frontlight de alto gramaje", "Costuras y ojalillos reforzados", "Estructuras metálicas tratadas con antióxido", "Resistencia extrema al viento"]
  }
]

export function ScrollShowcase() {
  const [activeTab, setActiveTab] = useState("corporeos")
  const shouldReduceMotion = useReducedMotion()

  const currentData = showcaseTabs.find(t => t.id === activeTab) || showcaseTabs[0]
  const ActiveIcon = currentData.icon

  // Animation variants
  const panelVariants = {
    hidden: { 
      opacity: 0, 
      x: shouldReduceMotion ? 0 : 40,
      scale: shouldReduceMotion ? 1 : 0.95 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 } 
    },
    exit: { 
      opacity: 0, 
      x: shouldReduceMotion ? 0 : -40,
      scale: shouldReduceMotion ? 1 : 0.95,
      transition: { duration: 0.2 } 
    }
  }

  const signFrameVariants = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : -80,
      rotate: shouldReduceMotion ? 0 : -3 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotate: 0,
      transition: { 
        type: "spring", 
        stiffness: 70, 
        damping: 12,
        delay: 0.1
      } 
    }
  }

  return (
    <section id="showroom" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-t border-neutral-900 relative overflow-hidden">
      {/* Decorative background grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 z-0 pointer-events-none" />

      <div className="container mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-yellow-400 font-bold tracking-widest uppercase text-xs sm:text-sm px-3 py-1 bg-yellow-400/10 rounded-full border border-yellow-400/20">
              Showroom Interactivo
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4 mb-4 tracking-tight">
              Nuestra Cartelería en <span className="text-yellow-400">Acción</span>
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto text-balance">
              Explora cómo diseñamos, fabricamos e instalamos cada formato para dar vida e identidad a tu negocio.
            </p>
          </motion.div>
        </div>

        {/* Desktop Tabs / Mobile Selector */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12 max-w-4xl mx-auto">
          {showcaseTabs.map((tab) => {
            const TabIcon = tab.icon
            const isActive = tab.id === activeTab
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-3.5 rounded-xl border font-bold text-sm sm:text-base transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-yellow-400 text-black border-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.25)]"
                    : "bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white hover:border-neutral-700"
                }`}
              >
                <TabIcon size={18} className={isActive ? "text-black animate-pulse" : "text-yellow-400"} />
                {tab.title}
              </button>
            )
          })}
        </div>

        {/* Main Showcase Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto bg-neutral-900/40 border border-neutral-800 rounded-3xl p-6 md:p-10 backdrop-blur-md">
          
          {/* Left Column: Description */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-2 text-yellow-400 font-semibold tracking-wider text-sm uppercase">
                  <Zap size={16} />
                  {currentData.tagline}
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  {currentData.title}
                </h3>
                
                <p className="text-neutral-400 leading-relaxed text-base sm:text-lg">
                  {currentData.description}
                </p>

                <div className="pt-4 border-t border-neutral-800/80">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Detalles Técnicos y Calidad:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentData.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-300">
                        <ChevronRight className="text-yellow-400 flex-shrink-0" size={16} />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Interactive Animated Visualization */}
          <div className="lg:col-span-7 min-h-[300px] md:min-h-[450px] relative rounded-2xl overflow-hidden bg-neutral-950 flex items-center justify-center border border-neutral-800/60 p-4">
            
            {/* Ambient Lighting Backglow */}
            <div className={`absolute w-72 h-72 rounded-full filter blur-[100px] opacity-20 pointer-events-none transition-all duration-700 bg-gradient-to-tr ${currentData.accentColor}`} />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                variants={panelVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="w-full h-full flex items-center justify-center relative"
              >
                {/* Specific Animated Showcase Mockups based on active tab */}
                {activeTab === "corporeos" && (
                  <motion.div 
                    variants={signFrameVariants}
                    className="relative w-full max-w-md aspect-video md:aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border-2 border-neutral-800 bg-neutral-900 flex flex-col justify-between"
                  >
                    {/* Simulated wall texture & installer outline */}
                    <div className="absolute inset-0 bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:16px_16px] opacity-40 z-0" />
                    
                    {/* XEROFF backlighting simulation */}
                    <div className="absolute inset-0 flex items-center justify-center p-6 z-10">
                      <div className="w-full h-full relative flex items-center justify-center rounded-lg overflow-hidden group">
                        <img 
                          src={currentData.image} 
                          alt="Letras Corpóreas TrillonGraf" 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent flex flex-col justify-end p-4">
                          <span className="text-yellow-400 text-xs font-black uppercase tracking-widest bg-black/60 px-2.5 py-1 rounded w-max mb-1">
                            Montaje Realizado
                          </span>
                          <span className="text-white text-sm font-bold">XEROFF - Letras de Acrílico Retroiluminadas</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "neon" && (
                  <motion.div 
                    variants={signFrameVariants}
                    className="relative w-full max-w-md aspect-video md:aspect-[4/3] rounded-xl overflow-hidden shadow-[0_0_30px_rgba(217,70,239,0.15)] border-2 border-neutral-800 bg-neutral-900 flex items-center justify-center p-4"
                  >
                    <div className="absolute inset-0 bg-black/60 z-0" />
                    {/* Glowing LED Grid background */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0.3)_1px,transparent_1px)] bg-[size:100%_4px] opacity-40 pointer-events-none" />
                    
                    <div className="w-full h-full relative rounded-lg overflow-hidden z-10 group">
                      <img 
                        src={currentData.image} 
                        alt="Cartel Neon LED TrillonGraf" 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Interactive neon flickers simulation */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-4">
                        <span className="text-fuchsia-400 text-xs font-black uppercase tracking-widest bg-black/60 px-2.5 py-1 rounded w-max mb-1 border border-fuchsia-500/30 animate-pulse">
                          Trabajo de Taller
                        </span>
                        <span className="text-white text-sm font-bold">"Estoy que Goteo" & Sernova - Neon LED</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "ploteo" && (
                  <motion.div 
                    variants={signFrameVariants}
                    className="relative w-full max-w-md aspect-video md:aspect-[4/3] rounded-xl overflow-hidden shadow-[0_0_30px_rgba(56,189,248,0.15)] border-2 border-neutral-800 bg-neutral-900 flex flex-col justify-between"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:20px_20px] opacity-20 z-0" />
                    
                    <div className="w-full h-full relative rounded-lg overflow-hidden z-10 group p-4">
                      <div className="w-full h-full relative rounded-lg overflow-hidden">
                        <img 
                          src={currentData.image} 
                          alt="Rotulación y Ploteo TrillonGraf" 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-4">
                          <span className="text-blue-400 text-xs font-black uppercase tracking-widest bg-black/60 px-2.5 py-1 rounded w-max mb-1 border border-blue-500/30">
                            Estructura & Ploteo Comercial
                          </span>
                          <span className="text-white text-sm font-bold">Estación de Servicio - Columnas y Marquesinas</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "lonas" && (
                  <motion.div 
                    variants={signFrameVariants}
                    className="relative w-full max-w-md aspect-video md:aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border-2 border-neutral-800 bg-neutral-900 flex flex-col justify-between"
                  >
                    {/* Metal Truss style borders */}
                    <div className="absolute inset-0 border-[6px] border-neutral-700 bg-[radial-gradient(#222_1px,transparent_1px)] [background-size:12px_12px] opacity-50 z-0" />
                    
                    <div className="absolute inset-[6px] flex items-center justify-center p-3 z-10 bg-neutral-950">
                      <div className="w-full h-full relative rounded overflow-hidden group">
                        <img 
                          src={currentData.image} 
                          alt="Lonas y Gigantografías TrillonGraf" 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-4">
                          <span className="text-emerald-400 text-xs font-black uppercase tracking-widest bg-black/60 px-2.5 py-1 rounded w-max mb-1 border border-emerald-500/30">
                            Lona Frontlight Tensada
                          </span>
                          <span className="text-white text-sm font-bold">La Esquina del Fútbol - Gigantografía Campeones 2022</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Instruction Cue */}
            <div className="absolute bottom-2 right-3 text-[10px] text-neutral-500 uppercase tracking-widest select-none flex items-center gap-1.5 z-20">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-ping" />
              Haz click en los botones para alternar
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
