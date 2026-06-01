"use client"

import { motion, useReducedMotion } from "framer-motion"
import { HelpCircle } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqItems = [
  {
    question: "¿Qué tipos de carteles fabrican en TrillonGraf y cómo elijo el adecuado para mi local?",
    answer: "Fabricamos una amplia gama de cartelería publicitaria a medida: marquesinas comerciales de gran formato, carteles frontlight (lona impresa iluminada externamente), carteles backlight (retroiluminados por LED internos para brillar de noche), tótems de altura, carteles corpóreos 3D y letreros de neón LED personalizados. Para elegir el adecuado, nuestro equipo analiza las dimensiones de tu fachada, la iluminación del entorno y tus objetivos comerciales, recomendando el tipo de estructura y luz óptimos para destacar tu negocio."
  },
  {
    question: "¿Hacen ploteo vehicular comercial y qué durabilidad tienen los materiales?",
    answer: "Sí, somos especialistas en ploteo vehicular integral y parcial para autos, utilitarios, camionetas, camiones y flotas comerciales completas. Utilizamos exclusivamente vinilos calandrados e impresos premium de alta durabilidad (como Oracal y 3M) con laminado protector UV contra la intemperie, rayos solares, lavados a presión y el desgaste vial cotidiano. Además, nuestros materiales garantizan una remoción limpia que no daña la pintura original de fábrica del chasis del vehículo."
  },
  {
    question: "¿Qué servicios ofrecen en diseño de identidad visual y branding para negocios?",
    answer: "Llevamos tu marca del plano digital al real de forma integral. Diseñamos logotipos desde cero o adaptamos tu identidad visual corporativa preexistente para aplicarla armoniosamente en tu local comercial. Esto abarca el ploteo decorativo y publicitario de vidrieras, colocación de vinilos esmerilados premium para privacidad en oficinas o consultorios, rotulación de paredes interiores comerciales y diseño gráfico de cartelería y marquesinas exteriores unificadas."
  },
  {
    question: "¿Qué incluye el armado de estructuras metálicas y marquesinas pesadas?",
    answer: "Brindamos un servicio profesional completo de soldadura, armado y montaje de estructuras en caño estructural de gran espesor para marquesinas comerciales de gran porte, tótems de estaciones de servicio y pórticos metálicos. Diseñamos y fabricamos estructuras de hierro reforzado con tratamiento antioxidante y anticorrosivo, calculadas y montadas bajo estrictas normas de seguridad edilicia para resistir ráfagas de viento y cargas climáticas extremas."
  },
  {
    question: "¿Qué opciones tienen para señalización industrial corporativa y seguridad laboral?",
    answer: "Desarrollamos sistemas completos de señalización industrial y señalética de seguridad laboral bajo normas IRAM para fábricas, depósitos logísticos, talleres y oficinas en todo el cordón industrial. Esto incluye carteles de salida de emergencia (fotoluminiscentes), señalética vial interna, señalización de uso obligatorio de EPP (Equipos de Protección Personal), demarcaciones de peligro y tótems indicadores de GNC/Combustible fabricados en chapa galvanizada y vinilo reflectivo de alta visibilidad."
  },
  {
    question: "¿Cuál es la zona de cobertura para la fabricación e instalación de cartelería y ploteos?",
    answer: "Nuestra base y taller de fabricación se encuentran en Granadero Baigorria, Santa Fe. Realizamos mediciones, colocaciones y montajes profesionales en toda la zona del Gran Rosario (Rosario, San Lorenzo, Capitán Bermúdez, Funes, Roldán, Ibarlucea, etc.) y en el cordón industrial santafesino. Asimismo, fabricamos y despachamos carteles corpóreos 3D y marquesinas preensambladas listas para instalar, con envíos seguros y embalaje reforzado a todo el país."
  }
]

export function FAQSection() {
  const shouldReduceMotion = useReducedMotion()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  }

  return (
    <section id="preguntas-frecuentes" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-neutral-900 border-t border-neutral-800 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <span className="text-yellow-400 font-bold tracking-widest uppercase text-xs sm:text-sm px-3 py-1 bg-yellow-400/10 rounded-full border border-yellow-400/20 flex items-center gap-1.5 mb-4">
              <HelpCircle size={14} />
              Resolvé tus Dudas
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight text-balance">
              Preguntas <span className="text-yellow-400">Frecuentes</span>
            </h2>
            <p className="text-lg text-neutral-400 mt-4 max-w-2xl text-balance font-medium">
              Todo lo que necesitás saber sobre la fabricación, materiales, diseño y montaje de nuestras estructuras y cartelería.
            </p>
          </motion.div>
        </div>

        {/* FAQ Accordion container with premium dark glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-neutral-950/60 p-6 md:p-8 rounded-3xl border border-neutral-800/60 backdrop-blur-md shadow-2xl"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-neutral-800/80 px-1 py-1 last:border-b-0 last:pb-0"
              >
                <AccordionTrigger className="text-base sm:text-lg font-bold text-white hover:text-yellow-400 hover:no-underline transition-colors py-4 text-left leading-snug [&[data-state=open]]:text-yellow-400">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-neutral-300 leading-relaxed pt-1 pb-4 text-balance">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
