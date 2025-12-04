import { MapPin, Users, Award, Clock } from "lucide-react"

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
    value: "5+",
    label: "Ciudades del Gran Rosario",
  },
]

export function TrustSection() {
  return (
    <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
              Experiencia y Confianza en el <span className="text-yellow-400">Cordón Industrial</span>
            </h2>
            <p className="text-lg text-neutral-300 mb-6 leading-relaxed">
              Con sede en <strong className="text-white">Granadero Baigorria, Santa Fe</strong>, somos especialistas en
              cartelería industrial y publicidad para empresas del Gran Rosario.
            </p>
            <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
              Nuestro equipo combina diseño creativo, fabricación de calidad y montaje profesional para entregar
              soluciones que destacan tu marca y cumplen con todas las normativas de seguridad.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
                  <stat.icon className="w-6 h-6 text-yellow-400 mb-2" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-neutral-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden border-4 border-yellow-400">
              <img src="/industrial-signage-manufacturing-workshop.jpg" alt="TrillonGraf workshop" className="w-full h-full object-cover" />
            </div>
            {/* Accent Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400 rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
