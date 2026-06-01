import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from "lucide-react"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-black text-neutral-300 py-12 px-4 sm:px-6 lg:px-8 border-t border-neutral-800">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2.5 mb-4 group">
              <Image
                src="/logo-icon.png"
                alt="TrillonGraf Logo"
                width={36}
                height={36}
                className="w-7 h-7 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-white font-bold text-lg tracking-wide transition-colors duration-300 group-hover:text-yellow-400">
                TrillonGraf
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Especialistas en cartelería y publicidad industrial. Diseño, fabricación y montaje profesional.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/5493413258979?text=Hola,%20vi%20su%20web%20y%20quería%20consultar%20por%20un%20presupuesto."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-800 hover:bg-yellow-400 hover:text-black p-2 rounded transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon size={20} />
              </a>
              <a
                href="https://instagram.com/trillongrafpublicidad"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-800 hover:bg-yellow-400 hover:text-black p-2 rounded transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-neutral-800 hover:bg-yellow-400 hover:text-black p-2 rounded transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-neutral-800 hover:bg-yellow-400 hover:text-black p-2 rounded transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#inicio" className="hover:text-yellow-400 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-yellow-400 transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-yellow-400 transition-colors">
                  Galería
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-yellow-400 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-yellow-400 flex-shrink-0 mt-0.5" />
                <span>M. Cornelio Saavedra 3393, Granadero Baigorria</span>
              </li>
              <li className="flex items-start gap-2">
                <a
                  href="https://wa.me/5493413258979?text=Hola,%20vi%20su%20web%20y%20quería%20consultar%20por%20un%20presupuesto."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 hover:text-yellow-400 transition-colors group cursor-pointer"
                >
                  <WhatsAppIcon size={18} className="text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span>+54 9 341 325-8979</span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                <a
                  href="mailto:info@trillongraf.com.ar"
                  className="flex items-start gap-2 hover:text-yellow-400 transition-colors group cursor-pointer"
                >
                  <Mail size={18} className="text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span>info@trillongraf.com.ar</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Zonas de Servicio</h3>
            <p className="text-sm leading-relaxed">
              Atendemos en{" "}
              <strong className="text-yellow-400">
                Todo el Gran Rosario  
              </strong>{" "}
              y enviamos a <strong className="text-yellow-400">Todo el País</strong>.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-neutral-800 text-center text-sm">
          <p>© {new Date().getFullYear()} TrillonGraf. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
