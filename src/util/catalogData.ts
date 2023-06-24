import type { CatalogData } from "./types";

export const herbicidasDataMock: CatalogData[] = [
  {
    img: 'bioforgeadvance',
    title: 'Bio-Forge Advance',
    description: 'Fertilizante líquido con una combinación exclusiva de nitrógeno, potasio, cobalto y molibdeno, para el manejo de estrés abiótico durante todo el ciclo de cultivo. Su formulación renovada posee mayor concentración de cofactores de crecimiento que estimulan una rápida recuperación del cultivo en momentos críticos. A su vez, aporta nitrógeno a través de una fuente de alta eficiencia, lo cual favorece el proceso de recuperación.',
    productType: 'herbicidas',
  }, 
  {
    img: 'mulan48',
    title: 'Mulan 48',
    description: 'Herbicida residual y selectivo para el control de malezas de hoja ancha. A base de Flumetsulam más concentrado del mercado. Exclusiva formulación compatible con glifosato líquido y granulado. Absorción foliar y radical, con rápida translocación vía xilema y floema, acumulándose en las regiones meristemáticas. Las malezas detienen rápidamente el crecimiento, dado que trabaja en las zonas meristemáticas. Herbicida banda verde. Más amigable con el medio ambiente.',
    productType: 'herbicidas',
  },
  // {
  //   img: 'bioforge',
  //   title: 'Bio-Forge',
  //   description: 'Un potente herbicida',
  //   productType: 'herbicidas',
  // }, 
  {
    img: 'claron',
    title: 'Claron',
    description: 'Es un herbicida post-emergente, para el control de gramíneas, con acción sistémica y selectiva para cultivos de arroz de inundación y secano. Se absorbe rápidamente a través del follaje y se transloca a los tejidos meristemáticos de la planta donde ejerce su acción herbicida. La detención del crecimiento de las malezas comienza a las pocas horas de la aplicación. A los pocos días se observan: clorosis en las hojas y tallos, coloración que va del rojo al morado y necrosis en los puntos de crecimiento.',
    productType: 'herbicidas',
  }, 
  // {
  //   img: 'facet',
  //   title: 'Facet',
  //   description: 'Un potente herbicida',
  //   productType: 'herbicidas',
  // }, 
  {
    img: 'pastar',
    title: 'Pastar',
    description: 'Pastar® es un nuevo herbicida sistémico para aplicaciones foliares de cobertura total para el control de malezas arbustivas y semiarbustivas en pasturas, con excelente selectividad en gramíneas forrajeras.',
    productType: 'herbicidas',
  }, 
  {
    img: 'preside',
    title: 'Preside',
    description: 'Preside es un herbicida selectivo para el control de malezas de hoja ancha en semilleros y pasturas de alfalfa, trébol blanco, trébol rojo, lotus (corniculatus, tenuis y subbiflorus), melilotus y achicoria tanto puras como consociadas con cereales y gramíneas forrajeras (avena, trigo, cebadilla criolla, falaris, pasto ovillo, raigrás anual y perenne, agropiro, festuca, entre otras).',
    productType: 'herbicidas',
  }, 
];

export const insecticidasDataMock: CatalogData[] = [
  {
    img: 'abamectina',
    title: 'Abamectina',
    description: 'ABAMECTINA DEL MONTE 1.8 EC es una abamectina que resulta de una mezcla de Avermectina B1A y Avermectina B1B que actúa estimulando la liberación presináptica del inhibidor neurotransmisor ácido g-aminobutírico (GABA) desde las terminales nerviosas y potenciando la fijación del GABA a los receptores postsinápticos. En los artrópodos impide la transmisión de señales en las conexiones neuromusculares por el mismo mecanismo de amplificación de la acción del GABA, a través de un aumento de la permeabilidad de la membrana al calcio. Los insectos sensibles quedan paralizados irreversiblemente y mueren. A diferencia de la mayoría de los insecticidas no afecta al sistema colinérgico.',
    productType: 'insecticidas',
  },
  {
    img: 'bifentrim',
    title: 'Bifentrim',
    description: 'Acaricida-insecticida que actúa por contacto e ingestión, con muy buen efecto de choque y persistencia. Controla una amplia gama de ácaros e insectos en frutales, vides, hortalizas, cereales, praderas y otros cultivos. Destaca su acción sobre arañitas, polillas, enrolladores, trips, minadores, pulgones, cuncunilla negra y burrito del frambueso, entre otras plagas.',
    productType: 'insecticidas',
  },
  {
    img: 'imida35',
    title: 'I Mida 35',
    description: 'Insecticida sistémico que actúa por ingestión y contacto, específico para el control de insectos como pulgones, mosquita blanca, trips y otros, que afectan a cultivos de cereales, frutales de carozo, cítricos, tabaco, hortalizas y ornamentales. Se aplica vía tratamiento foliar, mediante aspersiones y radicular mediante riego por goteo.',
    productType: 'insecticidas',
  },
]

export const semillasDataMock: CatalogData[] = [
  // {
  //   img: 'agrinplex',
  //   title: 'Agrinplex',
  //   description: 'Un potente herbicida',
  //   productType: 'semillas',
  // },
]

export const fungicidasDataMock: CatalogData[] = [
  {
    img: 'azoxypro',
    title: 'Azoxypro',
    description: 'Es un fungicida de acción sistémica y de contacto. Presenta una alta persistencia y rápida acción, gracias a la acción combinada de la azoxistrobina (acción preventiva y antiesporulante) y el ciproconazole (efecto CURATIVO y erradicante).',
    productType: 'fungicidas'
  },
  {
    img: 'carbendazin',
    title: 'Carbendazin',
    description: 'INGREDIENTE ACTIVO: Meltibenzimidazol-2-licarbamato (equivalente a 492.35 g de i.a/L a 20ºC) INGREDIENTES INERTES: Humectante, dispersante, espesante, antiespumante y dilyente.',
    productType: 'fungicidas'
  },
  {
    img: 'dithanent80wp',
    title: 'Dithane NT 80 WP',
    description: 'Fungicida-Ditiocarbamato. Mancozeb. Preventivo de contacto que inhibe el desarrollo del tubo germinativo de la espora del hongo. Bloquea los procesos enzimáticos.',
    productType: 'fungicidas'
  },
  {
    img: 'racerm',
    title: 'Race RM',
    description: 'Es un fungicida que presenta actividad sistémica y de contacto, actúa como protectante y curativo. Puede ser absorbido por el follaje y por la raíz, translocándose en forma acropétala. Protege las plantas tratadas por dentro y fuera de manera eficaz por un largo periodo.',
    productType: 'fungicidas'
  },
]

export const hermicidasDataMock:CatalogData[] = [
  {
    img: 'fipromirex',
    title: 'Fipromirex',
    description: 'Fipromirex es un insecticida de la familia de los Fenilpirazoles que actúa por contacto e ingestión, tiene efecto sobre el sistema nervioso central interfiriendo en la transmisión GABA (ácido gama amino butírico) sobre los canales del ión cloro. Es efectivo en el control de varias especies (Hormiga minera, Isaú, negra del sud, negra común, colorada e invasora).',
    productType: 'hermicidas'
  },
  {
    img: 'fipronilfender',
    title: 'Fipronil Fender',
    description: 'Insecticida que actúa por contacto e ingestión. Es persistente en el suelo por su baja solubilidad, prolongando así el control sobre insectos perforadores, chupadores y masticadores. Trabaja sobre el sistema nervioso de los insectos, causando bloqueo sobre el ácido gamma amino butírico (GABA) responsable de la transferencia de los impulsos nerviosos.',
    productType: 'hermicidas'
  },
  {
    img: 'myrmec',
    title: 'Myrmec',
    description: 'MYRMEC es un insecticida hormiguicida de contacto e ingestión formulado en cebo pellets. Posee poder atractivo lo que determina que las hormigas tomen los pellets, llevándolos al interior del hormiguero.',
    productType: 'hermicidas'
  },
]

export const fertilizantesDataMock: CatalogData[] = [
  {
    img: 'masterminsplus',
    title: 'Mastermins Plus',
    description: 'Es un fertilizante líquido, de aplicación foliar que contiene macro y micronutrientes y es apto en todos los cultivos. Nutren la planta en forma equilibrada. Es rápidamente absorbido por las hojas, ramas y raíces. Es líquido, facilitando la preparación del caldo y su aplicación. Mejora la acción de los plaguicidas aplicados en conjunto. Mayor número de frutos por plantas.',
    productType: 'fertilizantes'
  },
  {
    img: 'notriplus18',
    title: 'Nitro Plus 18',
    description: 'Es un fertilizante que contiene una exclusiva combinación de nitrógeno amínico y calcio, totalmente solubles en agua. Esta asociación maximiza el aprovechamiento de estos nutrientes por la planta. Nitroplus 18 es un complejo que promueve la reducción de estrés en la planta, mejorando la uniformidad del producto cosechado, reduciendo las enfermedades e incrementando la calidad y rentabilidad.',
    productType: 'fertilizantes'
  },
  {
    img: 'nutriminssemilla',
    title: 'Nutrimins Semilla',
    description: 'Es un Bioestimulador de crecimiento para tratamiento de semilla en gramíneas, formulado con un balance hormonal más Zinc quelatado y Azufre. Los cofactores de crecimiento estimulan una rápida germinación, uniformidad de plántulas, un rápido y vigoroso desarrollo radicular asegurando un stand de plantas adecuado.',
    productType: 'fertilizantes'
  },
]