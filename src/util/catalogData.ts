import { ProductTypes, type ProductData } from "./types";

export const insecticidasDataMock: ProductData[] = [
  {
    img: 'bifentrim',
    name: 'Bifentrim',
    filters: ['insecticidas'],
    specs: {
      description: 'Acaricida-insecticida que actúa por contacto e ingestión, con muy buen efecto de choque y persistencia. Controla una amplia gama de ácaros e insectos en frutales, vides, hortalizas, cereales, praderas y otros cultivos. Destaca su acción sobre arañitas, polillas, enrolladores, trips, minadores, pulgones, cuncunilla negra y burrito del frambueso, entre otras plagas.',
    }
  },
]

export const fungicidasDataMock: ProductData[] = [
  {
    img: 'azoxypro',
    name: 'Azoxypro',
    filters: ['fungicidas'],
    specs: {
      description: 'Es un fungicida de acción sistémica y de contacto. Presenta una alta persistencia y rápida acción, gracias a la acción combinada de la azoxistrobina (acción preventiva y antiesporulante) y el ciproconazole (efecto CURATIVO y erradicante).',
    }
  },
  {
    img: 'dithanent80wp',
    name: 'Dithane NT 80 WP',
    filters: ['fungicidas'],
    specs: {
      description: 'Fungicida-Ditiocarbamato. Mancozeb. Preventivo de contacto que inhibe el desarrollo del tubo germinativo de la espora del hongo. Bloquea los procesos enzimáticos.',
    }
  }
]

export const hermicidasDataMock:ProductData[] = [
  {
    img: 'fipronilfender',
    name: 'Fipronil Fender',
    filters: ['hermicidas'],
    specs: {
      description: 'Insecticida que actúa por contacto e ingestión. Es persistente en el suelo por su baja solubilidad, prolongando así el control sobre insectos perforadores, chupadores y masticadores. Trabaja sobre el sistema nervioso de los insectos, causando bloqueo sobre el ácido gamma amino butírico (GABA) responsable de la transferencia de los impulsos nerviosos.',      
    }
  },
  {
    img: 'myrmec',
    name: 'Myrmec',
    filters: ['hermicidas'],
    specs: {
      description: 'MYRMEC es un insecticida hormiguicida de contacto e ingestión formulado en cebo pellets. Posee poder atractivo lo que determina que las hormigas tomen los pellets, llevándolos al interior del hormiguero.',      
    }
  },
]

export const db: ProductData[] = [
  {
    name: 'Urea Granulada',
    filters: [ProductTypes.FERTILIZANTES, ProductTypes.FERTILIZANTES_GRANULADOS]
  },
  {
    name: 'Fosfato Monoamónico',
    filters: [ProductTypes.FERTILIZANTES, ProductTypes.FERTILIZANTES_GRANULADOS]
  },
  {
    name: 'Fosfato Diamónico',
    filters: [ProductTypes.FERTILIZANTES, ProductTypes.FERTILIZANTES_GRANULADOS]
  },
  {
    name: '15-6-16-6 Citrus',
    filters: [ProductTypes.FERTILIZANTES, ProductTypes.FERTILIZANTES_GRANULADOS]
  },
  {
    name: '15-15-15 Citrus',
    filters: [ProductTypes.FERTILIZANTES, ProductTypes.FERTILIZANTES_GRANULADOS]
  },
  {
    name: 'Nitrato Doble',
    filters: [ProductTypes.FERTILIZANTES, ProductTypes.FERTILIZANTES_GRANULADOS]
  },
  {
    name: '15-6-16-6 Nitro Doble',
    filters: [ProductTypes.FERTILIZANTES, ProductTypes.FERTILIZANTES_GRANULADOS]
  },
  {
    name: '7-30-20 Arrocera',
    filters: [ProductTypes.FERTILIZANTES, ProductTypes.FERTILIZANTES_GRANULADOS]
  },
  {
    name: 'Cloruro de Potasio',
    filters: [ProductTypes.FERTILIZANTES, ProductTypes.FERTILIZANTES_GRANULADOS]
  },
  {
    name: 'Harvest More Micro Granulados',
    filters: [ProductTypes.FERTILIZANTES, ProductTypes.FERTILIZANTES_GRANULADOS]
  },
  {
    name: 'Nitrato de Calcio',
    filters: [ProductTypes.FERTILIZANTES, ProductTypes.FERTILIZANTES_SOLUBLES]
  },
  {
    name: 'Nitrito de Potasio',
    filters: [ProductTypes.FERTILIZANTES, ProductTypes.FERTILIZANTES_SOLUBLES]
  },
  {
    name: 'Cloruro de Potasio',
    filters: [ProductTypes.FERTILIZANTES, ProductTypes.FERTILIZANTES_SOLUBLES]
  },
  {
    name: 'Sulfato de Magnesio',
    filters: [ProductTypes.FERTILIZANTES, ProductTypes.FERTILIZANTES_SOLUBLES]
  },
  {
    name: 'Sulfato de Amonio',
    filters: [ProductTypes.FERTILIZANTES, ProductTypes.FERTILIZANTES_SOLUBLES]
  },
  {
    name: 'Sulfato de Potasio',
    filters: [ProductTypes.FERTILIZANTES, ProductTypes.FERTILIZANTES_SOLUBLES]
  },
  {
    name: 'Harvest More 5-5-45',
    filters: [ProductTypes.FERTILIZANTES, ProductTypes.FERTILIZANTES_SOLUBLES]
  },
  {
    img: 'masterminsplus',
    name: 'Mastermins Plus',
    filters: [ProductTypes.FERTILIZANTES_LIQUIDOS],
    specs: {
      description: 'Es un fertilizante líquido, de aplicación foliar que contiene macro y micronutrientes y es apto en todos los cultivos. Nutren la planta en forma equilibrada. Es rápidamente absorbido por las hojas, ramas y raíces. Es líquido, facilitando la preparación del caldo y su aplicación. Mejora la acción de los plaguicidas aplicados en conjunto. Mayor número de frutos por plantas.',
    }
  },
  {
    img: 'nitroplus18',
    name: 'Nitro Plus 18',
    filters: [ProductTypes.FERTILIZANTES_LIQUIDOS],
    specs: {
      description: 'Es un fertilizante que contiene una exclusiva combinación de nitrógeno amínico y calcio, totalmente solubles en agua. Esta asociación maximiza el aprovechamiento de estos nutrientes por la planta. Nitroplus 18 es un complejo que promueve la reducción de estrés en la planta, mejorando la uniformidad del producto cosechado, reduciendo las enfermedades e incrementando la calidad y rentabilidad.',
    }
  },
  {
    name: 'Estimulante marca Stoller',
    filters: [ProductTypes.FERTILIZANTES_LIQUIDOS],
  },
  {
    img: 'nutriminssemilla',
    name: 'Nutrimins Semilla',
    filters: [ProductTypes.FERTILIZANTES_LIQUIDOS],
    specs: {
      description: 'Es un Bioestigulador de crecimiento para tratamiento de semilla en gramíneas, formulado con un balance hormonal más Zinc quelatado y Azufre. Los cofactores de crecimiento estimulan una rápida germinación, uniformidad de plántulas, un rápido y vigoroso desarrollo radicular asegurando un stand de plantas adecuado.',
    }
  },
  {
    img: 'bioforgeadvance',
    name: 'Bio Forge',
    filters: [ProductTypes.FERTILIZANTES_LIQUIDOS],
    specs: {
      description: 'Fertilizante líquido con una combinación exclusiva de nitrógeno, potasio, cobalto y molibdeno, para el manejo de estrés abiótico durante todo el ciclo de cultivo. Su formulación renovada posee mayor concentración de cofactores de crecimiento que estimulan una rápida recuperación del cultivo en momentos críticos. A su vez, aporta nitrógeno a través de una fuente de alta eficiencia, lo cual favorece el proceso de recuperación.',
    }
  },
  {
    name: 'Fosfito Potasico',
    filters: [ProductTypes.FERTILIZANTES_LIQUIDOS],
  },
  {
    name: 'Stower Magnesio',
    filters: [ProductTypes.FERTILIZANTES_LIQUIDOS],
  },
  {
    name: 'Calcio Boro',
    filters: [ProductTypes.FERTILIZANTES_LIQUIDOS],
  },
  {
    name: 'Stoller Hierro',
    filters: [ProductTypes.FERTILIZANTES_LIQUIDOS],
  },
  {
    name: 'Starte Plus',
    filters: [ProductTypes.FERTILIZANTES_LIQUIDOS],
  },
  {
    name: 'Fosfito de Calcio',
    filters: [ProductTypes.FERTILIZANTES_LIQUIDOS],
  },
  {
    name: 'Stoller Zinc',
    filters: [ProductTypes.FERTILIZANTES_LIQUIDOS],
  },
  {
    name: 'Toprice PN Nuro Arno.',
    filters: [ProductTypes.FERTILIZANTES_LIQUIDOS, ProductTypes.FERTILIZANTES_LIQUIDOS_HERBICIDAS],
  },
  {
    img: 'claron',
    name: 'Claron',
    filters: [ProductTypes.FERTILIZANTES_LIQUIDOS, ProductTypes.FERTILIZANTES_LIQUIDOS_HERBICIDAS],
    specs: {
      description: 'Es un herbicida post-emergente, para el control de gramíneas, con acción sistémica y selectiva para cultivos de arroz de inundación y secano. Se absorbe rápidamente a través del follaje y se transloca a los tejidos meristemáticos de la planta donde ejerce su acción herbicida. La detención del crecimiento de las malezas comienza a las pocas horas de la aplicación. A los pocos días se observan: clorosis en las hojas y tallos, coloración que va del rojo al morado y necrosis en los puntos de crecimiento.',
      features: {
        activeSkill: 'Cyhalofop-butil 18%',
        action: 'Sistémico',
        applicationMethod: 'Inhibidor de la enzaima ACCasa. Grupo A.',
        dosage: '1,5 a 2 L/ha.',
        usageRecommendations: "Aplicar cuando las gramíneas están en activo crecimiento, las mismas deben tener entre 3 hojas verdaderas y 1 a 2 macollos. Para un control más efectivo, se debe proceder a inundar definitivamente el cultivo a las 24 horas posteriores a la aplicación del producto.", 
        malezas: 'Capín',
        cultivos: "Arroz",
        pdfFiles: {
          flyer: true,
          marbete: true,
          securityDataPaper: true,
        }
      }
    }
  },
  {
    name: 'Clomazone Upstage',
    filters: [ProductTypes.FERTILIZANTES_LIQUIDOS, ProductTypes.FERTILIZANTES_LIQUIDOS_HERBICIDAS],
  },
  {
    name: 'Ectran-Ectran Plus',
    filters: [ProductTypes.FERTILIZANTES_LIQUIDOS, ProductTypes.FERTILIZANTES_LIQUIDOS_HERBICIDAS],
  },
  {
    name: 'Facet',
    filters: [ProductTypes.FERTILIZANTES_LIQUIDOS, ProductTypes.FERTILIZANTES_LIQUIDOS_HERBICIDAS],
  },
  {
    name: 'Aura',
    filters: [ProductTypes.FERTILIZANTES_LIQUIDOS, ProductTypes.FERTILIZANTES_LIQUIDOS_HERBICIDAS],
  },
  {
    name: 'Loyant',
    filters: [ProductTypes.FERTILIZANTES_LIQUIDOS, ProductTypes.FERTILIZANTES_LIQUIDOS_HERBICIDAS],
  },
  {
    name: 'Xeyelo',
    filters: [ProductTypes.FERTILIZANTES_LIQUIDOS, ProductTypes.FERTILIZANTES_LIQUIDOS_HERBICIDAS],
  },
  {
    img: 'preside',
    name: 'Preside',
    filters: [ProductTypes.HERBICIDAS],
    specs: {
      description: 'Preside es un herbicida selectivo para el control de malezas de hoja ancha en semilleros y pasturas de alfalfa, trébol blanco, trébol rojo, lotus (corniculatus, tenuis y subbiflorus), melilotus y achicoria tanto puras como consociadas con cereales y gramíneas forrajeras (avena, trigo, cebadilla criolla, falaris, pasto ovillo, raigrás anual y perenne, agropiro, festuca, entre otras).',
    }
  },
  {
    name: 'Mulan',
    filters: [ProductTypes.HERBICIDAS],
  },
  {
    img: 'mulan48',
    name: 'Mulan 48',
    filters: [ProductTypes.HERBICIDAS],
    specs: {
      description: 'Herbicida residual y selectivo para el control de malezas de hoja ancha. A base de Flumetsulam más concentrado del mercado. Exclusiva formulación compatible con glifosato líquido y granulado. Absorción foliar y radical, con rápida translocación vía xilema y floema, acumulándose en las regiones meristemáticas. Las malezas detienen rápidamente el crecimiento, dado que trabaja en las zonas meristemáticas. Herbicida banda verde. Más amigable con el medio ambiente.',
    }
  },
  {
    name: 'Spider',
    filters: [ProductTypes.HERBICIDAS],
  },
  {
    name: 'Picloran 24 (3/4 marcas) sigma/nova',
    filters: [ProductTypes.HERBICIDAS],
  },
  {
    name: 'Tordon D30',
    filters: [ProductTypes.HERBICIDAS],
  },
  {
    name: 'Starane Extra',
    filters: [ProductTypes.HERBICIDAS],
  },
  {
    name: 'Atrazina 90, Adama Sisma',
    filters: [ProductTypes.HERBICIDAS],
  },
  {
    name: 'Galan HL',
    filters: [ProductTypes.HERBICIDAS],
  },
  {
    name: '2,4 D Colina Ellist',
    filters: [ProductTypes.HERBICIDAS],
  },
  {
    name: 'Cletodin sigma/nova',
    filters: [ProductTypes.HERBICIDAS],
  },
  {
    img:'pastar',
    name: 'Pastar',
    filters: [ProductTypes.HERBICIDAS],
    specs: {
      description: 'Pastar® es un nuevo herbicida sistémico para aplicaciones foliares de cobertura total para el control de malezas arbustivas y semiarbustivas en pasturas, con excelente selectividad en gramíneas forrajeras.',
    }
  },
  {
    name: 'Koltar',
    filters: [ProductTypes.HERBICIDAS],
  },
  {
    name: 'Paraquat, sisma',
    filters: [ProductTypes.HERBICIDAS],
  },
  {
    name: 'Flumioxazim marca summit agro',
    filters: [ProductTypes.HERBICIDAS],
  },
  {
    name: 'Heat',
    filters: [ProductTypes.HERBICIDAS],
  },
  {
    name: '2,4D B Adama/Atanor',
    filters: [ProductTypes.HERBICIDAS],
  },
  {
    name: 'Ricer',
    filters: [ProductTypes.HERBICIDAS],
  },
  {
    name: 'Quintal',
    filters: [ProductTypes.INSECTICIDAS_GENERAL],
  },
  {
    name: 'Expedition',
    filters: [ProductTypes.INSECTICIDAS_GENERAL],
  },
  {
    img: 'imida35',
    name: 'I Mida 35 Imidacloprid35',
    filters: [ProductTypes.INSECTICIDAS_GENERAL],
    specs: {
      description: 'Insecticida sistémico que actúa por ingestión y contacto, específico para el control de insectos como pulgones, mosquita blanca, trips y otros, que afectan a cultivos de cereales, frutales de carozo, cítricos, tabaco, hortalizas y ornamentales. Se aplica vía tratamiento foliar, mediante aspersiones y radicular mediante riego por goteo.',
    }
  },
  {
    name: 'Lambda 25',
    filters: [ProductTypes.INSECTICIDAS_GENERAL],
  },
  {
    name: 'Tracer',
    filters: [ProductTypes.INSECTICIDAS_GENERAL],
  },
  {
    name: 'Flipper',
    filters: [ProductTypes.INSECTICIDAS_GENERAL],
  },
  {
    name: 'Bifentrin',
    filters: [ProductTypes.INSECTICIDAS_GENERAL],
  },
  {
    img: 'abamectina',
    name: 'Abamectina',
    filters: [ProductTypes.INSECTICIDAS_GENERAL],
    specs: {
      description: 'ABAMECTINA DEL MONTE 1.8 EC es una abamectina que resulta de una mezcla de Avermectina B1A y Avermectina B1B que actúa estimulando la liberación presináptica del inhibidor neurotransmisor ácido g-aminobutírico (GABA) desde las terminales nerviosas y potenciando la fijación del GABA a los receptores postsinápticos. En los artrópodos impide la transmisión de señales en las conexiones neuromusculares por el mismo mecanismo de amplificación de la acción del GABA, a través de un aumento de la permeabilidad de la membrana al calcio. Los insectos sensibles quedan paralizados irreversiblemente y mueren. A diferencia de la mayoría de los insecticidas no afecta al sistema colinérgico.',
    }
  },
  {
    name: 'Olimpo',
    filters: [ProductTypes.INSECTICIDAS_GENERAL],
  },
  {
    img: 'carbendazim',
    name: 'Carbendazim - Philagel',
    filters: [ProductTypes.FUNGICIDAS],
    specs: {
      description: 'INGREDIENTE ACTIVO: Meltibenzimidazol-2-licarbamato (equivalente a 492.35 g de i.a/L a 20ºC) INGREDIENTES INERTES: Humectante, dispersante,   espesante, antiespumante y dilyente.',
    }
  },
  {
    img: 'dithanent80wp',
    name: 'Dithane',
    filters: [ProductTypes.FUNGICIDAS],
    specs: {
      description: 'Fungicida-Ditiocarbamato. Mancozeb. Preventivo de contacto que inhibe el desarrollo del tubo germinativo de la espora del hongo. Bloquea los procesos enzimáticos.',
    }
  },
  {
    name: 'Tritac',
    filters: [ProductTypes.FUNGICIDAS],
  },
  {
    name: 'Xedrel',
    filters: [ProductTypes.FUNGICIDAS],
  },
  {
    name: 'Ziram',
    filters: [ProductTypes.FUNGICIDAS],
  },
  {
    img: 'racerm',
    name: 'Race RM',
    filters: [ProductTypes.FUNGICIDAS],
    specs: {
      description: 'Es un fungicida que presenta actividad sistémica y de contacto, actúa como protectante y curativo. Puede ser absorbido por el follaje y por la raíz, translocándose en forma acropétala. Protege las plantas tratadas por dentro y fuera de manera eficaz por un largo periodo.',
    }
  },
  {
    name: 'Hidroxido de Cobre',
    filters: [ProductTypes.FUNGICIDAS],
  },
  {
    name: 'Oxicloruro de Cobre',
    filters: [ProductTypes.FUNGICIDAS],
  },
  {
    name: 'Azoxitrobin - Azostart',
    filters: [ProductTypes.FUNGICIDAS],
  },
  {
    name: 'Azoxy Pro',
    filters: [ProductTypes.FUNGICIDAS],
  },
  {
    name: 'Tebucanazole Falcrop',
    filters: [ProductTypes.FUNGICIDAS],
  },
  {
    name: 'Difenoconazole Multiplicar',
    filters: [ProductTypes.FUNGICIDAS],
  },
  {
    name: 'Bumper',
    filters: [ProductTypes.FUNGICIDAS],
  },
  {
    name: 'Comet',
    filters: [ProductTypes.FUNGICIDAS],
  },
  {
    name: 'Cura Semilla Nova',
    filters: [ProductTypes.FUNGICIDAS],
  },
  {
    name: 'Matiz Kws Linta Proncross',
    filters: [ProductTypes.SEMILLA],
  },
  {
    name: 'Sorgo-Tobin',
    filters: [ProductTypes.SEMILLA],
  },
  {
    name: 'Solibolsas - Agrinplex',
    filters: [ProductTypes.SEMILLA],
  },
  {
    name: 'Myrmex',
    filters: [ProductTypes.HERMICIDAS],
  },
  {
    img: 'fipromirex',
    name: 'Fipromirex',
    filters: [ProductTypes.HERMICIDAS],
    specs: {
      description: 'Fipromirex es un insecticida de la familia de los Fenilpirazoles que actúa por contacto e ingestión, tiene efecto sobre el sistema nervioso central interfiriendo en la transmisión GABA (ácido gama amino butírico) sobre los canales del ión cloro. Es efectivo en el control de varias especies (Hormiga minera, Isaú, negra del sud, negra común, colorada e invasora).',      
    }
  },
  {
    name: 'Sulfamirex',
    filters: [ProductTypes.HERMICIDAS],
  },
]
