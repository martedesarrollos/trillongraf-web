"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { trackWhatsAppClick } from "@/lib/fpixel"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#servicios", label: "Servicios" },
    { href: "#galeria", label: "Galería" },
    { href: "#contacto", label: "¿Quiénes somos?" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-neutral-950/95 backdrop-blur-sm border-b border-neutral-800" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2.5 group">
            <Image
              src="/Trillon isologo amarillo.png"
              alt="Trillongraf Carteles"
              width={40}
              height={40}
              className="w-8 h-8 md:w-10 md:h-10 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-white font-extrabold text-base sm:text-xl tracking-tight transition-colors duration-300 group-hover:text-yellow-400">
              Trillongraf <span className="text-yellow-400">Carteles</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-neutral-300 hover:text-yellow-400 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold cursor-pointer flex items-center gap-2">
                  <WhatsAppIcon size={18} />
                  Pedir Presupuesto
                  <ChevronDown size={14} className="opacity-70" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-neutral-950 border border-neutral-800 text-white shadow-2xl rounded-xl p-1.5">
                <DropdownMenuLabel className="text-[11px] text-neutral-400 px-2 py-1 font-semibold uppercase tracking-wider">
                  Contactar por WhatsApp
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-neutral-800 my-1" />
                <DropdownMenuItem asChild className="hover:bg-neutral-900 focus:bg-neutral-900 rounded-lg cursor-pointer transition-colors">
                  <a
                    href="https://wa.me/5493413258979?text=Hola,%20vi%20su%20web%20y%20quería%20consultar%20por%20un%20presupuesto."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick("navbar_desktop_luciano", { contact: "Luciano" })}
                    className="flex items-center justify-between px-2.5 py-2 w-full group"
                  >
                    <div>
                      <div className="font-bold text-sm text-white group-hover:text-yellow-400 transition-colors">Luciano</div>
                      <div className="text-[11px] text-neutral-400 font-mono">+54 9 341 325-8979</div>
                    </div>
                    <WhatsAppIcon size={16} className="text-[#25D366]" />
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-neutral-900 focus:bg-neutral-900 rounded-lg cursor-pointer transition-colors">
                  <a
                    href="https://wa.me/5493417465561?text=Hola,%20vi%20su%20web%20y%20quería%20consultar%20por%20un%20presupuesto."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick("navbar_desktop_martin", { contact: "Martín" })}
                    className="flex items-center justify-between px-2.5 py-2 w-full group"
                  >
                    <div>
                      <div className="font-bold text-sm text-white group-hover:text-yellow-400 transition-colors">Martín</div>
                      <div className="text-[11px] text-neutral-400 font-mono">+54 9 341 746-5561</div>
                    </div>
                    <WhatsAppIcon size={16} className="text-[#25D366]" />
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-neutral-900 border-t border-neutral-800">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-neutral-300 hover:text-yellow-400 transition-colors font-medium py-2"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-neutral-800 flex flex-col gap-2">
              <span className="text-xs text-neutral-400 font-semibold uppercase tracking-wider">
                Pedir Presupuesto por WhatsApp:
              </span>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://wa.me/5493413258979?text=Hola,%20vi%20su%20web%20y%20quería%20consultar%20por%20un%20presupuesto."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackWhatsAppClick("navbar_mobile_luciano", { contact: "Luciano" })
                    setIsMobileMenuOpen(false)
                  }}
                  className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold text-xs py-2.5 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                >
                  <WhatsAppIcon size={15} />
                  <span>Luciano</span>
                </a>
                <a
                  href="https://wa.me/5493417465561?text=Hola,%20vi%20su%20web%20y%20quería%20consultar%20por%20un%20presupuesto."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackWhatsAppClick("navbar_mobile_martin", { contact: "Martín" })
                    setIsMobileMenuOpen(false)
                  }}
                  className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold text-xs py-2.5 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                >
                  <WhatsAppIcon size={15} />
                  <span>Martín</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
