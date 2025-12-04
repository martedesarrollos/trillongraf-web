"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowDown } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/industrial-signage-factory-manufacturing-dark.jpg"
          alt="Industrial signage background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-neutral-950/60 to-neutral-950" />
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-balance">
          Cartelería y Publicidad en el <span className="text-yellow-400">Cordón Industrial</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-neutral-300 mb-10 max-w-3xl mx-auto text-balance">
          Diseño, fabricación y montaje en Granadero Baigorria, Rosario y San Lorenzo.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link href="https://wa.me/5493413258979?text=Hola,%20vi%20su%20web%20y%20quería%20consultar%20por%20un%20presupuesto." target="_blank">
          <Button
            size="lg"
            className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold text-lg px-8 py-6 w-full sm:w-auto"
          >
            <MessageCircle className="mr-2" size={20} />
            WhatsApp
          </Button>
          </Link>
          <Link href="#galeria" prefetch={false}>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-neutral-600 text-white hover:bg-neutral-800 font-bold text-lg px-8 py-6 w-full sm:w-auto bg-transparent"
          >
            Ver Trabajos
          </Button>
          </Link>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#servicios"
          className="inline-flex flex-col items-center text-neutral-400 hover:text-yellow-400 transition-colors"
        >
          <span className="text-sm mb-2">Conocé nuestros servicios</span>
          <ArrowDown size={24} className="animate-bounce" />
        </a>
      </div>
    </section>
  )
}
