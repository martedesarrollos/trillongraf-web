export interface CityConfig {
  slug: string
  name: string
  department?: string
  badge: string
  title: string
  description: string
  zoneDescription: string
  highlights: string[]
}

export const CITIES: Record<string, CityConfig> = {
  "san-lorenzo": {
    slug: "san-lorenzo",
    name: "San Lorenzo",
    department: "Cordón Industrial",
    badge: "Fabricación e Instalación en San Lorenzo",
    title: "Carteles y Cartelería en San Lorenzo",
    description:
      "Diseño, fabricación y montaje de carteles luminosos LED, letras corpóreas 3D y marquesinas comerciales para negocios, industrias y locales en San Lorenzo. Asesoramiento técnico y colocación profesional en el cordón industrial.",
    zoneDescription:
      "Atendemos toda la ciudad de San Lorenzo, avenida San Martín, accesos y su polo comercial e industrial con entregas e instalación en obra.",
    highlights: [
      "Carteles luminosos LED de bajo consumo y marquesinas frontlight/backlight.",
      "Letras corpóreas en polyfan, acrílico y metal con relieve.",
      "Rotulación vehicular y ploteo de flotas comerciales completas.",
      "Instalación profesional y estructuras resistentes al viento.",
    ],
  },
  "rosario": {
    slug: "rosario",
    name: "Rosario",
    department: "Gran Rosario",
    badge: "Fabricación e Instalación en Rosario",
    title: "Carteles y Cartelería en Rosario",
    description:
      "Fábrica de carteles publicitarios, letras corpóreas y marquesinas para locales comerciales, empresas y oficinas en todo Rosario. Soluciones de alto impacto visual con iluminación LED y terminaciones premium.",
    zoneDescription:
      "Cobertura completa en Rosario: Centro, Pichincha, Echesortu, zona Norte (La Florida, Alberdi), zona Sur y parques industriales.",
    highlights: [
      "Cartelería para fachadas de alto tránsito y vidrieras comerciales.",
      "Neón LED personalizado y cartelería retroiluminada de diseño.",
      "Letras corpóreas 3D con luz indirecta para recepciones y frentes.",
      "Ploteos comerciales y vinilos esmerilados para oficinas.",
    ],
  },
  "granadero-baigorria": {
    slug: "granadero-baigorria",
    name: "Granadero Baigorria",
    department: "Gran Rosario",
    badge: "Taller Propio en Granadero Baigorria",
    title: "Carteles y Cartelería en Granadero Baigorria",
    description:
      "Fábrica directa de cartelería publicitaria con base en Granadero Baigorria. Marquesinas, tótems, letras corpóreas y letreros luminosos con atención personalizada, visita al local y presupuestos rápidos.",
    zoneDescription:
      "Nuestra planta y taller se encuentran en Granadero Baigorria, lo que te garantiza atención inmediata, medición presencial y entrega sin intermediarios.",
    highlights: [
      "Atención directa de fábrica sin intermediarios en Baigorria.",
      "Mediciones y asesoramiento en tu local comercial.",
      "Tótems para estaciones de servicio y cartelería estructural pesada.",
      "Ploteo de vehículos comerciales y rotulación en vinilo.",
    ],
  },
  "capitan-bermudez": {
    slug: "capitan-bermudez",
    name: "Capitán Bermúdez",
    department: "Cordón Industrial",
    badge: "Fabricación e Instalación en Capitán Bermúdez",
    title: "Carteles y Cartelería en Capitán Bermúdez",
    description:
      "Soluciones integrales de cartelería y publicidad en Capitán Bermúdez. Fabricación de marquesinas luminosas, letras en polyfan, neón LED y señalética comercial con colocación en tu local.",
    zoneDescription:
      "Servicio continuo sobre avenida San Gervasio Artigas (Ruta 11), barrios comerciales y empresas de Capitán Bermúdez.",
    highlights: [
      "Marquesinas con lona tensada y estructuras metálicas anticorrosivas.",
      "Carteles bifaz tipo pastilla para máxima visibilidad peatonal y vehicular.",
      "Letras tridimensionales iluminadas para fachadas modernas.",
      "Instalación rápida y segura con personal calificado.",
    ],
  },
  "fray-luis-beltran": {
    slug: "fray-luis-beltran",
    name: "Fray Luis Beltrán",
    department: "Cordón Industrial",
    badge: "Fabricación e Instalación en Fray Luis Beltrán",
    title: "Carteles y Cartelería en Fray Luis Beltrán",
    description:
      "Cartelería publicitaria comercial e industrial en Fray Luis Beltrán. Especialistas en marquesinas, letras corpóreas 3D, carteles LED y ploteo vehicular con montaje garantizado.",
    zoneDescription:
      "Atención ágil en Fray Luis Beltrán, zona céntrica, corredor de la Ruta 11 y área industrial.",
    highlights: [
      "Estructuras resistentes para exteriores y zonas abiertas.",
      "Carteles luminosos LED de alta durabilidad.",
      "Carteles corpóreos elegantes para comercios e instituciones.",
      "Presupuesto a medida en el día.",
    ],
  },
  "puerto-general-san-martin": {
    slug: "puerto-general-san-martin",
    name: "Puerto General San Martín",
    department: "Cordón Industrial",
    badge: "Cartelería Comercial e Industrial en PGSM",
    title: "Carteles y Cartelería en Puerto Gral. San Martín",
    description:
      "Diseño y fabricación de cartelería comercial, señalética industrial y marquesinas en Puerto General San Martín. Estructuras de alta resistencia preparadas para exigencias industriales y comerciales.",
    zoneDescription:
      "Cobertura en el polo portuario, agroindustrial, autopistas y centros comerciales de Puerto San Martín.",
    highlights: [
      "Señalética industrial de seguridad bajo normas y cartelería de gran porte.",
      "Marquesinas reforzadas para galpones, empresas y locales.",
      "Ploteo de utilitarios, camionetas y camiones de transporte.",
      "Fabricación con caño estructural pesado y pinturas industriales.",
    ],
  },
  "funes": {
    slug: "funes",
    name: "Funes",
    department: "Gran Rosario",
    badge: "Fabricación e Instalación en Funes",
    title: "Carteles y Cartelería en Funes",
    description:
      "Cartelería de diseño y estética premium para locales comerciales, paseos a cielo abierto y oficinas en Funes. Neón LED, letras corpóreas de acrílico y marquesinas modernas.",
    zoneDescription:
      "Instalaciones en Ruta 9, Av. Fuerza Aérea, centros comerciales y nuevos desarrollos de Funes.",
    highlights: [
      "Diseños modernos adaptados a la estética comercial de Funes.",
      "Neón LED decorativo y carteles corpóreos con backlight cálido.",
      "Rotulación de vidrieras con vinilos premium esmerilados y de corte.",
      "Montaje limpio y cuidado estético de cada detalle.",
    ],
  },
  "roldan": {
    slug: "roldan",
    name: "Roldán",
    department: "Gran Rosario",
    badge: "Fabricación e Instalación en Roldán",
    title: "Carteles y Cartelería en Roldán",
    description:
      "Fabricación de carteles luminosos, marquesinas y letras corpóreas para comercios y empresas en Roldán. Calidad industrial, durabilidad y colocación profesional en toda la localidad.",
    zoneDescription:
      "Cobertura sobre Ruta 9, Ruta A012, barrios comerciales y parques industriales de Roldán.",
    highlights: [
      "Cartelería visible desde rutas y avenidas principales.",
      "Lonas backlight con iluminación LED homogénea.",
      "Corpóreos en polyfan y chapa galvanizada.",
      "Servicio de entrega y montaje llave en mano.",
    ],
  },
  "ibarlucea": {
    slug: "ibarlucea",
    name: "Ibarlucea",
    department: "Gran Rosario",
    badge: "Fabricación e Instalación en Ibarlucea",
    title: "Carteles y Cartelería en Ibarlucea",
    description:
      "Carteles luminosos, letras corpóreas y marquesinas para negocios en Ibarlucea. Por nuestra cercanía inmediata en Baigorria, brindamos atención exprés y presupuestos rápidos.",
    zoneDescription:
      "Atendemos sobre Ruta 34, centros comerciales y nuevos corredores residenciales y comerciales de Ibarlucea.",
    highlights: [
      "Respuesta inmediata por cercanía logística directa.",
      "Cartelería para locales comerciales y profesionales.",
      "Marquesinas y frentes comerciales completos.",
      "Asesoramiento y visita técnica en tu local.",
    ],
  },
}

export const CITIES_LIST = Object.values(CITIES)
