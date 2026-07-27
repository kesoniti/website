import type { Content } from './en';

export const es: Content = {
  locale: 'es',
  langLabel: 'Español',

  nav: {
    home: 'Inicio',
    about: 'Nosotros',
    services: 'Servicios',
    methodology: 'Metodología',
    industries: 'Industrias',
    contact: 'Contacto',
    cta: 'Iniciar una conversación',
  },

  footer: {
    tagline:
      'Consultoría SAP boutique en planificación de producción, programación detallada, calidad y mantenimiento — para fabricantes que operan sobre S/4HANA.',
    colNavigate: 'Navegación',
    colModules: 'Cobertura de módulos',
    colContact: 'Contacto',
    address: '30 N Gould St # 11590, Sheridan, WY 82801, EE. UU.',
    email: 'info@kesoniti.com',
    linkedin: 'LinkedIn',
    linkedinUrl: 'https://www.linkedin.com/company/kesoniti-llc',
    rights: 'Kesoniti LLC. Todos los derechos reservados.',
  },

  home: {
    metaTitle: 'Kesoniti — Consultoría SAP PP / PP-DS para Manufactura',
    metaDescription:
      'Firma boutique de consultoría SAP especializada en Planificación de Producción (PP), Programación Detallada (PP/DS), Gestión de Calidad (QM) y Mantenimiento (PM) para fabricantes en S/4HANA.',
    hero: {
      eyebrow: 'SAP PP · PP/DS · QM · PM',
      heading: 'Hacemos que SAP planifique como realmente funciona su fábrica.',
      sub: 'Kesoniti es una consultora SAP boutique enfocada en planificación de producción y programación detallada. Ayudamos a empresas manufactureras a diseñar, implementar y estabilizar el núcleo de planificación de su entorno S/4HANA — desde la señal de demanda hasta la planta.',
      ctaPrimary: 'Hablemos de su proyecto',
      ctaSecondary: 'Explorar nuestros servicios',
      diagramAlt:
        'Diagrama esquemático de un flujo de planificación de manufactura: la demanda alimenta la planificación de producción y la programación detallada, que dirige la ejecución en planta; las señales de calidad y mantenimiento retroalimentan la planificación.',
      diagramLabels: {
        demand: 'Demanda',
        planning: 'PP / PP-DS',
        execution: 'Planta',
        quality: 'QM',
        maintenance: 'PM',
        feedback: 'Ciclo de retroalimentación',
      },
    },
    tiers: {
      eyebrow: 'Modelo de servicio',
      heading: 'Tres niveles, un núcleo de planificación',
      intro:
        'Cada proyecto se construye alrededor de un núcleo profundo de planificación de producción, se amplía donde genera valor y se entrega con un método repetible.',
      items: [
        {
          num: '01',
          name: 'Competencia central — SAP PP & PP/DS',
          desc: 'Arquitectura de datos maestros, estrategia MRP, configuración de heurísticas y del optimizador, diseño del tablero de planificación, nivelación de capacidad y lógica de programación. Este es el centro de gravedad de todo lo que hacemos.',
        },
        {
          num: '02',
          name: 'Servicios de expansión — QM, PM & IBP',
          desc: 'Inspección de calidad integrada en el flujo de producción, planificación de mantenimiento alineada con la capacidad y conectividad con IBP para el traspaso de la planificación táctica a la operativa. Extensiones que heredan la disciplina del núcleo.',
        },
        {
          num: '03',
          name: 'Metodología de entrega',
          desc: 'Un camino estructurado desde el diagnóstico hasta el hypercare, pensado para equipos ágiles y ciclos de decisión rápidos — diseñado para poner lógica de planificación funcionando frente a sus planificadores desde el principio, no al final.',
        },
      ],
    },
    credibility: {
      eyebrow: 'De un vistazo',
      items: [
        { value: '12+', label: 'Años en planificación de producción e ingeniería industrial' },
        { value: '20+', label: 'Organizaciones manufactureras atendidas' },
        { value: '6', label: 'Países con experiencia de despliegue a nivel de planta' },
        { value: '4+1', label: 'Módulos cubiertos: PP, PP/DS, QM, PM + IBP' },
      ],
    },
    modulesStrip: {
      heading: 'Dónde trabajamos en su entorno',
      items: [
        { code: 'PP', name: 'Planificación de Producción', blurb: 'MRP, datos maestros, gestión de órdenes, lógica de backflush y confirmaciones.' },
        { code: 'PP/DS', name: 'Programación Detallada', blurb: 'Heurísticas, optimizador, tablero de planificación, programación con capacidad finita.' },
        { code: 'QM', name: 'Gestión de Calidad', blurb: 'Inspección en proceso, puertas de calidad, decisiones de empleo en el flujo productivo.' },
        { code: 'PM', name: 'Mantenimiento de Planta', blurb: 'Planificación de mantenimiento que respeta — e informa — la capacidad productiva.' },
      ],
    },
    cta: {
      heading: 'Los problemas de planificación son específicos. Nosotros también.',
      sub: 'Cuéntenos dónde se rompe su proceso de planificación — datos maestros, lógica de programación, retroalimentación de planta — y le diremos con honestidad si podemos ayudar y cómo.',
      button: 'Contactar a Kesoniti',
    },
  },

  about: {
    metaTitle: 'Nosotros — Kesoniti',
    metaDescription:
      'Kesoniti es una consultora SAP boutique, liderada por consultores senior, especializada en planificación de producción y programación detallada para empresas manufactureras.',
    hero: {
      eyebrow: 'Sobre Kesoniti',
      heading: 'Una firma especialista, deliberadamente pequeña.',
      sub: 'Kesoniti existe porque la planificación de producción es la parte de un programa SAP donde la capacidad generalista falla. Elegimos profundidad sobre amplitud — y estructuramos toda la firma alrededor de ello.',
    },
    story: {
      heading: 'Por qué existimos',
      paragraphs: [
        'La mayoría de los programas S/4HANA tratan la planificación de producción como un frente de trabajo más entre muchos. El resultado es conocido: ejecuciones de MRP en las que nadie confía, tableros de planificación que nadie usa y planificadores que vuelven silenciosamente a sus hojas de cálculo. El núcleo de planificación — la razón por la que un fabricante usa SAP — termina siendo la parte más débil del sistema.',
        'Kesoniti se fundó para ser el contrapeso. No dotamos programas de personal; resolvemos problemas de planificación. Cada proyecto lo lidera un consultor senior cuya carrera entera está anclada en SAP PP y PP/DS, con una base de ingeniería industrial que mantiene el trabajo honesto: el modelo del sistema debe ajustarse a la física de la fábrica, no al revés.',
      ],
    },
    mission: {
      heading: 'Misión',
      text: 'Dar a las empresas manufactureras un núcleo de planificación en el que realmente confíen — una lógica de planificación SAP que refleje restricciones reales, produzca programas que los planificadores defiendan y mejore de forma medible después del arranque, en lugar de degradarse.',
    },
    model: {
      eyebrow: 'Modelo operativo',
      heading: 'Cómo trabajamos',
      items: [
        {
          name: 'Liderado por consultores senior',
          desc: 'La persona que define el alcance de su proyecto es la misma que configura su sistema. Sin pirámides de personal, sin traspasos a un banco de juniors.',
        },
        {
          name: 'Remoto primero, presencial donde importa',
          desc: 'El diseño y la configuración se entregan en remoto con una cadencia disciplinada. Los recorridos de planta, las pruebas de integración y el soporte al arranque ocurren donde está el trabajo.',
        },
        {
          name: 'Ágil por diseño',
          desc: 'Equipos pequeños, caminos de decisión cortos y documentación que su equipo podrá mantener después de nuestra salida. Medimos el éxito por lo poco que nos necesite más adelante.',
        },
      ],
    },
    leadership: {
      eyebrow: 'Liderazgo',
      heading: 'Fundador y Consultor Principal',
      name: 'Eyup Aydemir',
      role: 'Fundador y Consultor Principal, Kesoniti LLC',
      bio: [
        'Eyup Aydemir es ingeniero industrial y especialista en SAP Planificación de Producción, con más de doce años en planificación de manufactura. Es licenciado en Ingeniería Industrial por la Universidad de Dumlupınar, y su carrera comenzó en la planta y no en una oficina de consultoría: primero como ingeniero de métodos aplicando SMED, Kaizen y Heijunka para reducir pérdidas por cambio de formato, y después como ingeniero de planificación ejecutando MRP y planificación de capacidad en fundición de aluminio a alta presión.',
        'Durante tres años y medio fue especialista en planificación y usuario clave de SAP PP en un proveedor automotriz Tier-1, responsable de la planificación JIT en un grupo multiplanta y líder del lado del negocio en un despliegue internacional de ECC. Esa secuencia — primero planificador, después consultor — es la base de cómo trabaja Kesoniti: el modelo del sistema debe ajustarse a la física de la fábrica, porque él ha sido la persona que convive con el plan cuando no lo hace.',
        'Desde 2020 pasó a la consultoría SAP a tiempo completo, avanzando de consultor a consultor senior y luego a líder de equipo para PP, PP/DS, QM y PM. Ha dirigido programas de S/4HANA y ECC en seis países, con trabajo profundo en programación finita basada en restricciones, heurísticas y pegging de PP/DS, configuración variante y MRP con materiales configurables, diseño de Kanban e integración ERP–MES mediante CIF, IDoc y RFC. Fundó Kesoniti LLC para llevar esa especialización directamente a los fabricantes estadounidenses, sin una pirámide de entrega de por medio.',
      ],
      credentialsLabel: 'Credenciales y reconocimientos',
      credentials: [
        'SAP Certified Associate — SAP S/4HANA Cloud Private Edition, Production Planning and Manufacturing (emitida en noviembre de 2024)',
        'Discovering SAP Digital Manufacturing — Record of Achievement (SAP, 2025)',
        'Licenciatura en Ingeniería Industrial, Universidad de Dumlupınar',
        'IEEE Senior Member — grado otorgado tras evaluación a profesionales con logros demostrados en su campo',
        'Raptors Fellowship — Fellow Member',
        'Autor de tres ponencias revisadas por pares sobre optimización de programación en PP/DS, lógica Kanban en S/4HANA e integración ERP–MES',
        'Revisor para revistas académicas y congresos internacionales de ingeniería industrial',
      ],
    },
  },

  services: {
    metaTitle: 'Servicios — Consultoría SAP PP, PP/DS, QM, PM | Kesoniti',
    metaDescription:
      'Alcance de proyectos, problemas resueltos y resultados en consultoría SAP de Planificación de Producción, Programación Detallada PP/DS, Gestión de Calidad y Mantenimiento.',
    hero: {
      eyebrow: 'Servicios',
      heading: 'Experticia profunda por módulo, con la vista puesta en todo el flujo productivo.',
      sub: 'Trabajamos módulo a módulo, pero nunca de forma aislada: la calidad de la planificación se decide en las interfaces — entre la demanda y el MRP, entre el programa y la planta, entre producción, calidad y mantenimiento.',
    },
    scopeLabel: 'Alcance típico del proyecto',
    problemsLabel: 'Problemas que resolvemos',
    outcomesLabel: 'Cómo se ve un buen resultado',
    modules: [
      {
        id: 'pp',
        code: 'PP',
        name: 'SAP Planificación de Producción',
        tagline: 'La columna vertebral: datos maestros, MRP y ejecución de órdenes que reflejan cómo fabrica realmente.',
        scope: [
          'Arquitectura de datos maestros de producción: maestros de materiales, listas de materiales, hojas de ruta, puestos de trabajo, versiones de fabricación',
          'Diseño de estrategia MRP: estrategias de planificación, tamaños de lote, mecanismos de seguridad, áreas MRP',
          'Gestión de órdenes: órdenes de fabricación/proceso, diseño de confirmaciones y backflush, lógica de movimientos de mercancía',
          'Migración de procesos de planificación a S/4HANA, incluido el impacto de los simplification items en PP',
        ],
        problems: [
          'Resultados de MRP que los planificadores corrigen a diario porque los parámetros nunca reflejaron la realidad',
          'Inconsistencias de datos maestros que vuelven poco fiable cualquier resultado de planificación',
          'Diseños de confirmación y backflush que distorsionan el inventario y la visibilidad del WIP',
          'Lógica de planificación heredada de ECC trasladada a S/4HANA sin rediseño',
        ],
        outcomes: [
          'Una ejecución de MRP que los planificadores aplican en lugar de cuestionar',
          'Datos maestros con responsables claros y reglas que los mantienen limpios',
          'Una ejecución de órdenes que da a la dirección una imagen real del WIP y la producción',
        ],
      },
      {
        id: 'ppds',
        code: 'PP/DS',
        name: 'Planificación y Programación Detallada',
        tagline: 'Nuestra especialización más profunda: programación finita en la que los planificadores confían lo suficiente como para abandonar sus hojas de cálculo paralelas.',
        scope: [
          'Activación de PP/DS y modelo de integración en S/4HANA (PP/DS embebido)',
          'Selección, secuenciación y ajuste de heurísticas; configuración del optimizador donde realmente compensa',
          'Diseño del tablero de planificación: vistas, estrategias, alertas y trabajo orientado a excepciones',
          'Programación con capacidad finita, diseño de matrices de setup, planificación por bloques y por campañas',
          'Lógica de pegging, fijación y estabilidad para que los programas sobrevivan al contacto con la realidad',
        ],
        problems: [
          'Programación hecha en Excel porque el tablero de planificación nunca se hizo utilizable',
          'Heurísticas aplicadas con valores por defecto en lugar de ajustarse al sistema productivo',
          'Proyectos de optimizador que consumieron presupuesto sin producir programas aceptados',
          'Setups dependientes de secuencia y restricciones de campaña que el MRP estándar no puede ver',
        ],
        outcomes: [
          'Un programa finito generado en el sistema y ejecutado en planta',
          'Planificadores trabajando por excepción mediante alertas, en lugar de rehacer el plan a diario',
          'Tiempos de setup y lógica de cambio de formato capturados en el modelo, no en el conocimiento tribal',
        ],
      },
      {
        id: 'qm',
        code: 'QM',
        name: 'SAP Gestión de Calidad',
        tagline: 'Calidad integrada en el flujo de producción — no una burocracia paralela a su lado.',
        scope: [
          'Planificación de inspección integrada con producción: en proceso, entrada de mercancías e inspección final',
          'Registros info de calidad, planes de inspección, catálogos y diseño de decisiones de empleo',
          'Puertas de calidad en el flujo de órdenes: contabilizaciones de stock, gestión de stock bloqueado, liberación de lotes',
          'Integración de QM con los datos maestros de PP y con la gestión de lotes',
        ],
        problems: [
          'Lotes de inspección que se acumulan y bloquean el flujo de material en lugar de protegerlo',
          'Datos de calidad capturados en papel o en herramientas paralelas, invisibles para la planificación',
          'Decisiones de empleo que van por detrás de la producción y distorsionan el stock disponible',
        ],
        outcomes: [
          'Pasos de inspección que fluyen al ritmo de la producción en lugar de contra ella',
          'Resultados de calidad visibles donde se toman las decisiones de planificación',
          'Un proceso de liberación defendible y auditable, sin soluciones manuales improvisadas',
        ],
      },
      {
        id: 'pm',
        code: 'PM',
        name: 'SAP Mantenimiento de Planta',
        tagline: 'Una planificación de mantenimiento que negocia con la capacidad productiva en lugar de chocar con ella.',
        scope: [
          'Estructuras de objetos técnicos: ubicaciones técnicas, equipos, hojas de ruta de mantenimiento',
          'Estrategia de mantenimiento preventivo y planificado, planes de mantenimiento y programación',
          'Gestión de órdenes de trabajo, flujos de avisos e integración con la planificación de capacidad',
          'Coordinación de ventanas de mantenimiento con el programa de producción (interacción PM–PP/DS)',
        ],
        problems: [
          'Mantenimiento programado a ciegas respecto al plan de producción — o ignorado hasta la avería',
          'Paradas de equipos que sorprenden al equipo de planificación una y otra vez',
          'Datos de avisos y órdenes demasiado desestructurados para aprender algo de ellos',
        ],
        outcomes: [
          'Ventanas de mantenimiento que aparecen en el programa de producción como restricciones reales de capacidad',
          'Un programa preventivo basado en el historial de los equipos, no en conjeturas',
          'Paradas planificadas, acotadas y visibles con antelación',
        ],
      },
    ],
    expansion: {
      eyebrow: 'Capacidad adyacente',
      heading: 'Conectividad con SAP IBP',
      text: 'Para clientes que usan o evalúan SAP Integrated Business Planning, diseñamos el traspaso de lo táctico a lo operativo: cómo los planes de suministro de IBP se traducen en planificación PP/PP-DS ejecutable, y cómo la realidad de la ejecución fluye de vuelta. Acotamos el trabajo en IBP estrictamente a esta interfaz de planificación — amplía el núcleo, no lo sustituye.',
    },
    note: 'Las descripciones anteriores están redactadas de forma genérica a propósito. Referencias específicas, casos de estudio y resultados cuantificados se comparten en conversación, sujetos a la confidencialidad de los clientes.',
  },

  methodology: {
    metaTitle: 'Metodología — Cómo entrega Kesoniti',
    metaDescription:
      'Un enfoque de entrega en cinco fases para proyectos SAP de planificación de producción: diagnóstico, diseño, realización, despliegue e hypercare — pensado para equipos ágiles liderados por seniors.',
    hero: {
      eyebrow: 'Metodología',
      heading: 'Suficientemente estructurada para confiar. Suficientemente ágil para avanzar.',
      sub: 'Cada proyecto sigue la misma columna vertebral de cinco fases. Lo que varía es la profundidad y la duración — decididas abiertamente con usted en el diagnóstico, no descubiertas a mitad del proyecto.',
    },
    phasesHeading: 'Las cinco fases',
    phases: [
      {
        num: '01',
        name: 'Diagnóstico',
        desc: 'Mapeamos su realidad de planificación: calidad de datos maestros, comportamiento actual del MRP, práctica de programación (incluidas las hojas de cálculo no oficiales) y las restricciones que realmente gobiernan su planta. Resultado: un informe de hallazgos y una propuesta con alcance y secuencia definidos — incluido lo que le recomendamos no hacer.',
      },
      {
        num: '02',
        name: 'Diseño',
        desc: 'Decisiones de diseño del modelo de planificación explícitas y por escrito: estrategias, heurísticas, reglas de datos maestros, puntos de integración, gestión de excepciones. Los talleres de diseño se realizan con sus planificadores en la sala — son los usuarios cuya confianza decide el éxito.',
      },
      {
        num: '03',
        name: 'Realización',
        desc: 'Configuración y construcción en ciclos cortos, cada uno terminando con sus planificadores ejercitando el sistema con sus propios datos. La lógica de planificación se valida contra órdenes y restricciones reales mucho antes de cualquier conversación de arranque.',
      },
      {
        num: '04',
        name: 'Despliegue',
        desc: 'Planificación del cutover, validación de la migración de datos para los objetos relevantes de planificación, ensayos generales y soporte al arranque con autoridad de decisión definida — para que los problemas se resuelvan en horas, no en comités.',
      },
      {
        num: '05',
        name: 'Hypercare y traspaso',
        desc: 'Estabilización con criterios de salida medibles, transferencia estructurada de conocimiento a sus usuarios clave y documentación que su equipo puede mantener. Definimos el final del hypercare desde el inicio, y nos vamos cuando el sistema — y su equipo — se sostienen por sí solos.',
      },
    ],
    diffs: {
      eyebrow: 'Qué nos diferencia',
      heading: 'Tres convicciones sobre las que construimos cada proyecto',
      items: [
        {
          name: 'Las heurísticas son ingeniería, no ajustes',
          desc: 'Las heurísticas de PP/DS y los perfiles del optimizador se tratan como artefactos de ingeniería: seleccionados, secuenciados y ajustados contra el comportamiento real de su sistema productivo, con evidencia de pruebas — no activados por defecto esperando que funcionen.',
        },
        {
          name: 'Software funcionando desde el principio',
          desc: 'Una postura de despliegue rápido: una porción de planificación funcionando con sus datos en los primeros ciclos de la realización. El contacto temprano con la realidad es la forma más barata de gestión de riesgos que un programa SAP puede comprar.',
        },
        {
          name: 'Integridad de la planta al ERP',
          desc: 'Un plan solo es tan bueno como la retroalimentación que lo corrige. Diseñamos el ciclo completo — confirmaciones, resultados de calidad, eventos de mantenimiento — para que el programa refleje la planta y la planta pueda confiar en el programa.',
        },
      ],
    },
  },

  industries: {
    metaTitle: 'Industrias — Sectores de manufactura que atiende Kesoniti',
    metaDescription:
      'Consultoría SAP de planificación de producción para fabricantes de automoción, gran consumo, energía y renovables, textil y embalaje.',
    hero: {
      eyebrow: 'Industrias',
      heading: 'Física distinta, misma disciplina.',
      sub: 'Cada sistema productivo tiene sus propias restricciones — setups dependientes de secuencia, vida útil, lógica de campañas, demanda estacional. Aplicamos a cada uno la misma disciplina de planificación, adaptada a la física de la industria.',
    },
    sectors: [
      {
        name: 'Automoción y proveedores Tier-1',
        desc: 'Producción por takt y secuencia, con una exigente lógica de entregas just-in-time y just-in-sequence hacia OEM globales. Aquí la planificación vive o muere por programas estables, modelos de capacidad precisos y una gestión de cambios disciplinada entre congelaciones del plan.',
        tags: ['Secuenciación', 'Call-off JIT / JIS', 'Nivelación de capacidad'],
      },
      {
        name: 'Alimentación, bebidas y gran consumo',
        desc: 'Producción de alto volumen y ciclo corto donde dominan la vida útil, la lógica de lotes y las matrices de cambio de formato. Los despliegues de plantilla multipaís son habituales, y el trabajo real es conciliar una plantilla global de procesos con lo que la planta local puede hacer físicamente.',
        tags: ['Vida útil y lotes', 'Planificación por campañas', 'Despliegue de plantilla global'],
      },
      {
        name: 'Textil y confección',
        desc: 'Desde textiles técnicos y no tejidos hasta moda y calcetería: listas de materiales profundas y multinivel, datos maestros ricos en variantes y fuerte estacionalidad. El reto es mantener manejable la lógica de variantes mientras se programa entre etapas con comportamientos de lote muy distintos.',
        tags: ['Gestión de variantes', 'Planificación multinivel', 'Estacionalidad'],
      },
      {
        name: 'Energía y renovables',
        desc: 'Fabricación de paneles fotovoltaicos y sistemas de energía, además de producción influida por proyectos con plazos de aprovisionamiento largos y cambios de ingeniería que fluyen hacia órdenes abiertas. La planificación debe conciliar los hitos del proyecto con la capacidad entre plantas.',
        tags: ['Unificación multiplanta', 'Cambios de ingeniería', 'Reaprovisionamiento Kanban'],
      },
      {
        name: 'Metales e industria pesada',
        desc: 'Acero integrado, aceros especiales y extrusión de aluminio, donde el throughput, la secuenciación y las restricciones de proceso continuo lo gobiernan todo. La fabricación de perfiles bajo pedido añade estructuras de producto configurables sobre el problema de programación.',
        tags: ['Programación de throughput', 'Ingeniería bajo pedido', 'Configuración variante'],
      },
      {
        name: 'Maquinaria y vehículos comerciales',
        desc: 'Remolques, ejes de transmisión, sistemas de potencia y maquinaria agrícola: productos configurables, plantas en varios países y cadenas de montaje largas. El valor suele estar en la programación finita basada en restricciones con hojas de ruta dependientes de características.',
        tags: ['Productos configurables', 'Despliegue multipaís', 'Programación finita'],
      },
      {
        name: 'Electrodomésticos y electrónica',
        desc: 'Montaje de alto volumen y múltiples variantes con fuertes compromisos de entrega a la exportación. La precisión de la planificación a corto y medio plazo determina la flexibilidad de línea, y la alineación entre demanda y suministro con la planificación táctica pasa a primer plano.',
        tags: ['Montaje multivariante', 'Planificación a medio plazo', 'Alineación demanda-suministro'],
      },
      {
        name: 'Farmacéutica y ciencias de la vida',
        desc: 'Fabricación regulada donde la gestión de lotes, la trazabilidad y las puertas de calidad no son funciones opcionales sino la restricción operativa. Planificación y calidad deben diseñarse juntas, con una ruta de liberación auditable.',
        tags: ['Trazabilidad de lotes', 'Procesos alineados a GMP', 'Puertas de calidad'],
      },
      {
        name: 'Materiales de construcción y tableros',
        desc: 'Fabricación continua de alta capacidad donde la secuenciación de la producción determina directamente el rendimiento y el desperdicio. Aquí las mejoras de planificación se reflejan rápidamente en la utilización de material y en las pérdidas por cambio de formato.',
        tags: ['Producción continua', 'Optimización de secuencia', 'Reducción de desperdicio'],
      },
    ],
    beyond: {
      heading: '¿No aparece su sector?',
      text: 'Estos son los sectores donde tenemos experiencia directa de proyecto, pero la disciplina es transferible. Si su sistema productivo tiene restricciones de capacidad, dependencias de secuencia y un proceso de planificación en el que nadie confía, el problema nos resulta conocido — independientemente de lo que salga de la línea. Cuéntenoslo y le diremos con honestidad si somos el socio adecuado.',
    },
    note: 'Las descripciones sectoriales son genéricas a propósito. No publicamos nombres de clientes. Las referencias se comparten en conversación, con aprobación del cliente y bajo confidencialidad.',
  },

  contact: {
    metaTitle: 'Contacto — Kesoniti',
    metaDescription:
      'Contacte con Kesoniti para hablar de consultoría SAP PP, PP/DS, QM o PM para su empresa manufacturera.',
    hero: {
      eyebrow: 'Contacto',
      heading: 'Cuéntenos dónde duele la planificación.',
      sub: 'Describa su situación en unas frases — entorno de sistemas, área de módulo, qué no está funcionando. Recibirá una respuesta sustantiva de un consultor, no una secuencia comercial.',
    },
    form: {
      name: 'Nombre completo',
      email: 'Correo corporativo',
      company: 'Empresa',
      module: 'Módulo de interés',
      modulePlaceholder: 'Seleccione un módulo…',
      moduleOptions: ['SAP PP — Planificación de Producción', 'SAP PP/DS — Programación Detallada', 'SAP QM — Gestión de Calidad', 'SAP PM — Mantenimiento de Planta', 'Integración con SAP IBP', 'Aún no lo sé — consulta general'],
      message: 'Su mensaje',
      messagePlaceholder: 'Entorno de sistemas actual, el problema de planificación que enfrenta y un plazo aproximado…',
      submit: 'Enviar consulta',
      privacyNote: 'Usamos sus datos únicamente para responder a su consulta. Sin boletines, sin listas.',
      configNote: '[ENDPOINT DE FORMULARIO SIN CONFIGURAR — conecte Formspree, Netlify Forms o un backend de correo antes del lanzamiento.]',
    },
    info: {
      heading: 'Directo',
      addressLabel: 'Dirección',
      address: '30 N Gould St # 11590\nSheridan, WY 82801\nEstados Unidos',
      emailLabel: 'Correo',
      email: 'info@kesoniti.com',
      linkedinLabel: 'LinkedIn',
      linkedin: 'linkedin.com/company/kesoniti-llc',
      linkedinUrl: 'https://www.linkedin.com/company/kesoniti-llc',
    },
  },
};
