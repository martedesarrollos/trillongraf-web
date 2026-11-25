"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { WhatsAppIcon } from "./whatsapp-icon"
import { X, MessageSquare, UserCheck } from "lucide-react"
import { usePathname } from "next/navigation"
import { trackWhatsAppClick } from "@/lib/fpixel"

const contacts = [
  {
    name: "Luciano",
    phoneDisplay: "+54 9 341 325-8979",
    url: "https://wa.me/5493413258979?text=Hola,%20vi%20su%20web%20y%20quería%20consultar%20por%20un%20presupuesto.",
    trackingKey: "floating_luciano",
  },
  {
    name: "Martín",
    phoneDisplay: "+54 9 341 746-5561",
    url: "https://wa.me/5493417465561?text=Hola,%20vi%20su%20web%20y%20quería%20consultar%20por%20un%20presupuesto.",
    trackingKey: "floating_martin",
  },
]

export function FloatingWhatsApp() {
  const pathname = usePathname()
  const [showTooltip, setShowTooltip] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    // Show tooltip after 3 seconds for desktop users
    const timer = setTimeout(() => {
      setShowTooltip(true)
    }, 3000)

    // Automatically hide tooltip after 13 seconds
    const hideTimer = setTimeout(() => {
      setShowTooltip(false)
    }, 13000)

    return () => {
      clearTimeout(timer)
      clearTimeout(hideTimer)
    }
  }, [])

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  if (pathname === "/presupuesto") {
    return null
  }

  const toggleOpen = () => {
    if (!isOpen) {
      setShowTooltip(false)
    }
    setIsOpen((prev) => !prev)
  }

  return (
    <div ref={menuRef} className="fixed bottom-6 right-6 z-50 flex items-center justify-end pointer-events-none print:hidden">
      {/* Tooltip (Only when menu is closed) */}
      <AnimatePresence>
        {showTooltip && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: shouldReduceMotion ? 0 : 10, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 120, damping: 17 }}
            className="absolute right-16 mr-3 pointer-events-auto hidden sm:flex items-center bg-neutral-900/95 border border-neutral-800 text-white rounded-2xl px-4 py-2.5 shadow-2xl backdrop-blur-sm max-w-xs group transition-all duration-300 hover:border-neutral-700"
          >
            {/* Arrow */}
            <div className="absolute top-1/2 -translate-y-1/2 -right-1.5 w-3 h-3 rotate-45 bg-neutral-900 border-r border-t border-neutral-800" />
            
            <button
              onClick={toggleOpen}
              className="pr-4 text-xs font-bold tracking-wide uppercase hover:text-yellow-400 transition-colors duration-200 text-left cursor-pointer"
            >
              🚀 ¿Tenés dudas? ¡Escribinos!
            </button>
            
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

      {/* Contact Selector Popup Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: shouldReduceMotion ? 0 : 15, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="absolute bottom-20 right-0 pointer-events-auto w-72 sm:w-80 bg-neutral-950 border border-neutral-800 rounded-2xl p-4 shadow-2xl backdrop-blur-md overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800 mb-3">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
                <span className="text-sm font-bold text-white tracking-wide">
                  Contactar por WhatsApp
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-neutral-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
                aria-label="Cerrar"
              >
                <X size={16} />
              </button>
            </div>

            <p className="text-xs text-neutral-400 mb-3 leading-relaxed">
              Elegí con quién querés comunicarte para coordinar tu presupuesto:
            </p>

            {/* Contact options */}
            <div className="space-y-2">
              {contacts.map((contact) => (
                <a
                  key={contact.name}
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackWhatsAppClick(contact.trackingKey, { contact: contact.name })
                    setIsOpen(false)
                  }}
                  className="flex items-center justify-between p-3 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-yellow-400/60 hover:bg-neutral-850 transition-all duration-200 group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center font-bold text-sm group-hover:scale-105 transition-transform">
                      <WhatsAppIcon size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white group-hover:text-yellow-400 transition-colors">
                        {contact.name}
                      </div>
                      <div className="text-[11px] text-neutral-400 font-mono">
                        {contact.phoneDisplay}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded-md opacity-90 group-hover:opacity-100 group-hover:bg-yellow-400 group-hover:text-black transition-all">
                    Chatear
                  </span>
                </a>
              ))}
            </div>

            {/* Footer notice */}
            <div className="mt-3 pt-2 text-[10px] text-center text-neutral-500">
              Trillongraf Carteles • Granadero Baigorria y Rosario
            </div>
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
        {!shouldReduceMotion && !isOpen && (
          <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 filter blur-[4px] animate-ping pointer-events-none scale-95" />
        )}

        <button
          onClick={toggleOpen}
          className={`flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 text-white rounded-full shadow-2xl transition-all duration-300 border-2 border-white/20 select-none group-hover:scale-105 active:scale-95 cursor-pointer ${
            isOpen ? "bg-neutral-800 hover:bg-neutral-700" : "bg-[#25D366] hover:bg-[#20ba5a]"
          }`}
          aria-label={isOpen ? "Cerrar menú de WhatsApp" : "Chatear por WhatsApp"}
        >
          {isOpen ? (
            <X size={26} className="transition-transform rotate-0" />
          ) : (
            <WhatsAppIcon size={28} className="sm:size-32 transition-transform group-hover:rotate-6" />
          )}
        </button>
      </motion.div>
    </div>
  )
}
