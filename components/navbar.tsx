"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

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
          <a href="#inicio" className="flex items-center gap-2">
            <div className="bg-yellow-400 text-black font-bold text-xl md:text-2xl px-3 py-1 rounded">TG</div>
            <span className="text-white font-bold text-lg md:text-xl hidden sm:inline">TrillonGraf</span>
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
            <Link href="https://wa.me/5493413258979?text=Hola,%20vi%20su%20web%20y%20quería%20consultar%20por%20un%20presupuesto." target="_blank">
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold cursor-pointer">Pedir Presupuesto</Button>
            </Link>

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
            <Link href="https://wa.me/5493413258979?text=Hola,%20vi%20su%20web%20y%20quería%20consultar%20por%20un%20presupuesto." target="_blank">
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold cursor-pointer">Pedir Presupuesto</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
