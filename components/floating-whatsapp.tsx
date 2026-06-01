"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { WhatsAppIcon } from "./whatsapp-icon"
import { X } from "lucide-react"

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    // Show tooltip after 3 seconds for deskop users
    const timer = setTimeout(() => {
      setShowTooltip(true)
    }, 3000)

    // Automatically hide tooltip after 10 seconds to avoid clutter
    const hideTimer = setTimeout(() => {
      setShowTooltip(false)
    }, 13000)

    return () => {
      clearTimeout(timer)
      clearTimeout(hideTimer)
    }
  }, [])

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center justify-end pointer-events-none">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: shouldReduceMotion ? 0 : 10, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 120, damping: 17 }}
            className="absolute right-16 mr-3 pointer-events-auto hidden sm:flex items-center bg-neutral-900/95 border border-neutral-800 text-white rounded-2xl px-4 py-2.5 shadow-2xl backdrop-blur-sm max-w-xs group transition-all duration-300 hover:border-neutral-700"
          >
            {/* Arrow */}
            <div className="absolute top-1/2 -translate-y-1/2 -right-1.5 w-3 h-3 rotate-45 bg-neutral-900 border-r border-t border-neutral-800" />
            
            <a
              href="https://wa.me/5493413258979?text=Hola,%20vi%20su%20web%20y%20quería%20consultar%20por%20un%20presupuesto."
              target="_blank"
              rel="noopener noreferrer"
              className="pr-4 text-xs font-bold tracking-wide uppercase hover:text-yellow-400 transition-colors duration-200"
            >
              🚀 ¿Tenés dudas? ¡Escribinos!
            </a>
            
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute right-2 text-neutral-400 hover:text-white p-0.5 rounded transition-colors cursor-pointer"
              aria-label="Cerrar mensaje"
            >
              <X size={12} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 150, damping: 15, delay: 0.5 }}
        className="pointer-events-auto relative group"
      >
        {/* Pulse effect */}
        {!shouldReduceMotion && (
          <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 filter blur-[4px] animate-ping pointer-events-none scale-95" />
        )}

        <a
          href="https://wa.me/5493413258979?text=Hola,%20vi%20su%20web%20y%20quería%20consultar%20por%20un%20presupuesto."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20ba5a] transition-all duration-300 border-2 border-white/20 select-none group-hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Chatear por WhatsApp"
        >
          <WhatsAppIcon size={28} className="sm:size-32 transition-transform group-hover:rotate-6" />
        </a>
      </motion.div>
    </div>
  )
}
