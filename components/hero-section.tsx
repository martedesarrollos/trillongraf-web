"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, MapPin, ChevronDown } from "lucide-react"
import Link from "next/link"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { motion, useReducedMotion } from "framer-motion"
import { trackWhatsAppClick } from "@/lib/fpixel"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion()

  // Animation configurations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  }

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-workshop.jpg"
          alt="Trillongraf Carteles - Taller de fabricación en Granadero Baigorria"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-neutral-950/60 to-neutral-950" />
      </div>

      {/* Floating vector signage elements (raw materials) */}
      {!shouldReduceMotion && (
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          {/* Neon Ring Outline */}
          <motion.div 
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-[20%] left-[8%] w-48 h-48 border border-yellow-400/10 rounded-full opacity-40 filter blur-[1px]"
          />
          {/* Acrylic Acrylic Sheet Outline */}
          <motion.div 
            animate={{ 
              y: [0, 20, 0],
              rotate: [0, -4, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-[25%] right-[10%] w-60 h-40 border-2 border-neutral-800/60 rounded-xl rotate-12 opacity-50"
          />
        </div>
      )}

      {/* Content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto relative z-20 text-center"
      >
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-xs sm:text-sm font-bold tracking-wide uppercase mb-6">
          <MapPin size={14} className="text-yellow-400" />
          <span>Trillongraf Carteles • Granadero Baigorria y Gran Rosario</span>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight text-balance tracking-tight"
        >
          Hacemos que tu negocio <span className="text-yellow-400 relative inline-block">destaque.</span>
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl text-neutral-300 mb-10 max-w-3xl mx-auto text-balance font-medium"
        >
          Llevamos tu imagen al mundo real. <br className="hidden sm:inline" />
          Fábrica y taller de carteles luminosos, marquesinas y letras corpóreas con taller propio en Granadero Baigorria para todo el Gran Rosario.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                size="lg"
                className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold text-lg px-8 py-6 w-full sm:w-auto cursor-pointer transition-transform active:scale-95 shadow-[0_4px_20px_rgba(250,204,21,0.2)] hover:shadow-[0_4px_25px_rgba(250,204,21,0.35)] flex items-center justify-center gap-2"
              >
                <WhatsAppIcon size={20} />
                WhatsApp
                <ChevronDown size={18} className="opacity-70" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-64 bg-neutral-950 border border-neutral-800 text-white shadow-2xl rounded-xl p-2 z-50">
              <DropdownMenuLabel className="text-[11px] text-neutral-400 px-2 py-1 font-semibold uppercase tracking-wider">
                Contactar por WhatsApp
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-neutral-800 my-1" />
              <DropdownMenuItem asChild className="hover:bg-neutral-900 focus:bg-neutral-900 rounded-lg cursor-pointer transition-colors">
                <a
                  href="https://wa.me/5493413258979?text=Hola,%20vi%20su%20web%20y%20quería%20consultar%20por%20un%20presupuesto."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick("hero_button_luciano", { contact: "Luciano" })}
                  className="flex items-center justify-between px-2.5 py-2.5 w-full group"
                >
                  <div>
                    <div className="font-bold text-sm text-white group-hover:text-yellow-400 transition-colors">Luciano</div>
                    <div className="text-xs text-neutral-400 font-mono">+54 9 341 325-8979</div>
                  </div>
                  <WhatsAppIcon size={18} className="text-[#25D366]" />
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="hover:bg-neutral-900 focus:bg-neutral-900 rounded-lg cursor-pointer transition-colors">
                <a
                  href="https://wa.me/5493417465561?text=Hola,%20vi%20su%20web%20y%20quería%20consultar%20por%20un%20presupuesto."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick("hero_button_martin", { contact: "Martín" })}
                  className="flex items-center justify-between px-2.5 py-2.5 w-full group"
                >
                  <div>
                    <div className="font-bold text-sm text-white group-hover:text-yellow-400 transition-colors">Martín</div>
                    <div className="text-xs text-neutral-400 font-mono">+54 9 341 746-5561</div>
                  </div>
                  <WhatsAppIcon size={18} className="text-[#25D366]" />
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="#galeria" prefetch={false}>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-neutral-600 text-white hover:bg-neutral-800/80 font-bold text-lg px-8 py-6 w-full sm:w-auto bg-transparent cursor-pointer transition-colors"
            >
              Ver Showroom
            </Button>
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center"
        >
          <a
            href="#showroom"
            className="inline-flex flex-col items-center text-neutral-400 hover:text-yellow-400 transition-colors group cursor-pointer"
          >
            <span className="text-sm mb-2 group-hover:translate-y-[-2px] transition-transform duration-300">Conocé nuestros trabajos/servicios</span>
            <ArrowDown size={24} className="animate-bounce" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

