"use client"

import { useEffect, useState, useRef } from "react"
import { MapPin, Users, Award, Clock } from "lucide-react"
import { motion, useInView, useReducedMotion } from "framer-motion"

const stats = [
  {
    icon: Clock,
    value: "15+",
    label: "Años de experiencia",
  },
  {
    icon: Users,
    value: "500+",
    label: "Clientes satisfechos",
  },
  {
    icon: Award,
    value: "100%",
    label: "Trabajos garantizados",
  },
  {
    icon: MapPin,
    value: "10+",
    label: "Ciudades del Gran Rosario",
  },
]

function Counter({ value }: { value: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-20px" })
  const shouldReduceMotion = useReducedMotion()

  const num = parseInt(value.replace(/\D/g, ""), 10)
  const suffix = value.replace(/\d/g, "")

  useEffect(() => {
    if (!isInView) return
    if (shouldReduceMotion) {
      setCount(num)
      return
    }

    let frame = 0
    const totalFrames = 40
    const increment = num / totalFrames
    
    const timer = setInterval(() => {
      frame++
      if (frame >= totalFrames) {
        setCount(num)
        clearInterval(timer)
      } else {
        setCount(Math.floor(increment * frame))
      }
    }, 20)

    return () => clearInterval(timer)
  }, [isInView, num, shouldReduceMotion])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export function TrustSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="contacto" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-neutral-950 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ type: "spring", stiffness: 60, damping: 14 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 text-balance tracking-tight">
              Experiencia y Confianza en todo el <span className="text-yellow-400">Gran Rosario</span>
            </h2>
            <p className="text-lg text-neutral-300 mb-6 leading-relaxed">
              Con sede en <strong className="text-white">Granadero Baigorria, Santa Fe</strong>, somos especialistas en
              cartelería y publicidad para empresas, negocios y particulares.
            </p>
            <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
              Nuestro equipo combina diseño creativo, fabricación de calidad y montaje profesional para entregar
              soluciones que destacan tu marca y cumplen con todas las normativas de seguridad.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  whileHover={shouldReduceMotion ? {} : { y: -4 }}
                  className="bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-xl p-4 transition-all duration-300 shadow-md"
                >
                  <stat.icon className="w-6 h-6 text-yellow-400 mb-2" />
                  <div className="text-3xl font-extrabold text-white mb-1">
                    <Counter value={stat.value} />
                  </div>
                  <div className="text-sm text-neutral-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Embedded Map */}
          <motion.div 
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ type: "spring", stiffness: 60, damping: 14 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border-4 border-yellow-400/90 shadow-2xl group w-full aspect-[4/3] bg-neutral-900">
              <iframe
                title="Ubicación de TrillonGraf Publicidad"
                src="https://maps.google.com/maps?q=M.%20Cornelio%20Saavedra%203393,%20Granadero%20Baigorria,%20Santa%20Fe,%20Argentina&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-none filter grayscale invert contrast-110 opacity-75 hover:grayscale-0 hover:invert-0 hover:opacity-100 transition-all duration-500 rounded-xl"
                allowFullScreen
                loading="lazy"
              />
            </div>
            {/* Accent Element */}
            <motion.div 
              initial={{ rotate: 0 }}
              whileInView={{ rotate: 6 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 40, damping: 12, delay: 0.2 }}
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400 rounded-2xl -z-10 shadow-[0_4px_20px_rgba(250,204,21,0.2)]" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

