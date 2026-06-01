import { Box, Lightbulb, Car, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Box,
    title: "Letras Corpóreas",
    description:
      "Letras 3D en polyfan, chapa y acrílico. Diseños personalizados con iluminación LED para máxima visibilidad.",
  },
  {
    icon: Lightbulb,
    title: "Carteles Frontlight/Backlight",
    description:
      "Carteles luminosos de alto impacto. Iluminación frontal y trasera para destacar tu marca día y noche.",
  },
  {
    icon: Car,
    title: "Rotulación Vehicular",
    description:
      "Ploteo de autos, camionetas y flotas completas. Convierte tu vehículo en publicidad móvil profesional.",
  },
  {
    icon: Shield,
    title: "Cartelería Industrial",
    description: "Señalética de seguridad y señalización industrial. Cumplimos con todas las normativas vigentes.",
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto text-balance">
            Soluciones integrales en cartelería y publicidad para empresas del cordón industrial
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-neutral-900 border-neutral-800 hover:border-yellow-400 transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="mb-4 inline-flex p-3 bg-neutral-800 rounded-lg group-hover:bg-yellow-400/10 transition-colors">
                  <service.icon className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
