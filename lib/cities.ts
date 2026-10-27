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
      "Carteles luminosos, letras corpóreas y marquesinas para negocios en Ibarlucea. Brindamos atención exprés, asesoramiento técnico y presupuestos rápidos para comercios del Gran Rosario.",
    zoneDescription:
      "Atendemos sobre Ruta 34, centros comerciales y nuevos corredores residenciales y comerciales de Ibarlucea.",
    highlights: [
      "Cobertura logística y entrega rápida en la localidad.",
      "Cartelería para locales comerciales y profesionales.",
      "Marquesinas y frentes comerciales completos.",
      "Asesoramiento y visita técnica en tu local.",
    ],
  },
  "villa-gobernador-galvez": {
    slug: "villa-gobernador-galvez",
    name: "Villa Gobernador Gálvez",
    department: "Gran Rosario",
    badge: "Fabricación e Instalación en VGG",
    title: "Carteles y Cartelería en Villa Gobernador Gálvez",
    description:
      "Fabricación de carteles publicitarios, marquesinas y letras corpóreas para comercios, talleres e industrias en Villa Gobernador Gálvez (VGG). Estructuras de alta durabilidad y visibilidad comercial.",
    zoneDescription:
      "Cobertura en toda la zona comercial, corredores industriales y avenidas principales de Villa Gobernador Gálvez.",
    highlights: [
      "Marquesinas frontlight y backlight para frentes de locales.",
      "Carteles luminosos LED de bajo consumo.",
      "Letras corpóreas 3D en polyfan, chapa y acrílico.",
      "Ploteo de camionetas y furgones comerciales.",
    ],
  },
  "timbues": {
    slug: "timbues",
    name: "Timbúes",
    department: "Cordón Industrial",
    badge: "Cartelería Comercial e Industrial en Timbúes",
    title: "Carteles y Cartelería en Timbúes",
    description:
      "Cartelería industrial, señalética de seguridad y marquesinas comerciales en Timbúes. Soluciones metálicas reforzadas preparadas para el polo portuario, cerealero y comercial del norte del cordón industrial.",
    zoneDescription:
      "Atendemos empresas portuarias, contratistas, transportes y locales comerciales sobre Ruta 11 y accesos a Timbúes.",
    highlights: [
      "Cartelería y señalética industrial de alta resistencia climática.",
      "Marquesinas estructurales para empresas y depósitos.",
      "Ploteo de camiones, camionetas y vehículos de flota.",
      "Estructuras calculadas para intemperie y fuertes vientos.",
    ],
  },
  "alvear": {
    slug: "alvear",
    name: "Alvear",
    department: "Gran Rosario",
    badge: "Cartelería Comercial e Industrial en Alvear",
    title: "Carteles y Cartelería en Alvear",
    description:
      "Especialistas en cartelería para empresas, plantas logísticas y locales comerciales en Alvear. Fabricación de tótems, letreros luminosos, letras corpóreas y señalética corporativa.",
    zoneDescription:
      "Cobertura integral en el Parque Industrial de Alvear, Autopista Rosario-Bs.As., Ruta 21 y zona urbana.",
    highlights: [
      "Cartelería de gran porte para parques industriales y galpones.",
      "Tótems y letreros de altura de alto impacto visual.",
      "Letras corpóreas 3D para recepciones y fachadas de empresas.",
      "Montaje profesional con normas de seguridad en altura.",
    ],
  },
  "arroyo-seco": {
    slug: "arroyo-seco",
    name: "Arroyo Seco",
    department: "Gran Rosario",
    badge: "Fabricación e Instalación en Arroyo Seco",
    title: "Carteles y Cartelería en Arroyo Seco",
    description:
      "Diseño y fabricación de carteles comerciales, marquesinas y letras corpóreas en Arroyo Seco. Calidad industrial, durabilidad y montaje garantizado para tu negocio o local.",
    zoneDescription:
      "Servicio en el centro comercial de Arroyo Seco, Ruta 21, accesos y zona fabril ribereña.",
    highlights: [
      "Marquesinas comerciales modernas con lona tensada premium.",
      "Carteles luminosos LED y neón para vidrieras y locales.",
      "Letras corpóreas de polyfan y metal con luz indirecta.",
      "Asesoramiento y presupuesto directo de fábrica.",
    ],
  },
  "ricardone": {
    slug: "ricardone",
    name: "Ricardone",
    department: "Cordón Industrial",
    badge: "Fabricación e Instalación en Ricardone",
    title: "Carteles y Cartelería en Ricardone",
    description:
      "Fabricación y colocación de carteles luminosos, marquesinas y letras corpóreas en Ricardone. Atención rápida y personalizada para locales y empresas del corredor de la Ruta A012.",
    zoneDescription:
      "Cobertura sobre Ruta A012, accesos viales, centro de Ricardone y loteos comerciales.",
    highlights: [
      "Cartelería de alta visibilidad para rutas y avenidas.",
      "Marquesinas frontlight y backlight para negocios.",
      "Letras corpóreas en relieve con terminaciones premium.",
      "Entrega y montaje llave en mano.",
    ],
  },
  "perez": {
    slug: "perez",
    name: "Pérez",
    department: "Gran Rosario",
    badge: "Fabricación e Instalación en Pérez",
    title: "Carteles y Cartelería en Pérez",
    description:
      "Soluciones integrales de cartelería, letreros luminosos y letras corpóreas para comercios y fábricas en Pérez. Estructuras metálicas durables con instalación profesional.",
    zoneDescription:
      "Atendemos la avenida Belgrano (Ruta 33), área industrial y locales comerciales en Pérez.",
    highlights: [
      "Marquesinas luminosas y frentes comerciales completos.",
      "Corpóreos 3D y letreros LED de bajo consumo.",
      "Ploteo de vehículos comerciales y utilitarios.",
      "Presupuesto rápido y colocación en obra.",
    ],
  },
  "pueblo-esther": {
    slug: "pueblo-esther",
    name: "Pueblo Esther",
    department: "Gran Rosario",
    badge: "Fabricación e Instalación en Pueblo Esther",
    title: "Carteles y Cartelería en Pueblo Esther",
    description:
      "Cartelería publicitaria de diseño, letras corpóreas y marquesinas para locales comerciales y desarrollos en Pueblo Esther. Visibilidad estética tanto de día como de noche.",
    zoneDescription:
      "Servicio sobre corredor de la Ruta 21, centros comerciales y áreas de servicios de Pueblo Esther.",
    highlights: [
      "Carteles luminosos con diseño estético y moderno.",
      "Neón LED para bares, locales gastronómicos y comercios.",
      "Letras corpóreas en polyfan y acrílico.",
      "Instalación limpia y garantizada.",
    ],
  },
}

export const CITIES_LIST = Object.values(CITIES)
