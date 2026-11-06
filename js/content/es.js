/* Contenido del CV en español (idioma base). Cada cambio debe replicarse en js/content/en.js. */
(function (CV) {
  "use strict";

  const { cert } = CV;

  CV.data = Object.freeze({
    skills: {
      "Backend": ["C#", ".NET", "ASP.NET MVC", "APIs REST", "Servicios web", "Kubernetes", "Flujos agénticos", "Laravel", "PHP", "Python", "Django"],
      "Datos": ["SQL Server", "Optimización de consultas", "Sincronización de bases de datos", "MS Access"],
      "Frontend": ["JavaScript", "jQuery", "Angular", "Vue.js", "Bootstrap", "HTML y CSS responsivo"],
      "DevOps e IA": ["Docker", "DevOps", "Integración de IA", "Ingeniería de prompts"],
      "Métodos": ["Scrum", "Modernización de sistemas legados", "ISO 9000", "Auditoría de calidad", "Nopcommerce"]
    },

    /* start/end: años usados para agrupar por década. end: null = actualidad. */
    jobs: [
      {
        title: "Desarrollador senior de software", company: "Farmacias Pigalle",
        period: "Abr. 2023 – abr. 2026", place: "Montevideo", start: 2023, end: 2026, featured: true,
        parallel: "En paralelo con Netvias Solutions en 2023",
        highlights: [
          "Desarrollé el sistema que usan las sucursales (frontend), conectado con la central (backend).",
          "En el desarrollo y el mantenimiento del backend trabajé con Kubernetes y flujos agénticos.",
          "Stack: C#, .NET, SQL Server, APIs REST, Kubernetes."
        ]
      },
      {
        title: "Ingeniero de software", company: "Netvias Solutions",
        period: "Feb. 2022 – dic. 2023", place: "Montevideo", start: 2022, end: 2023, featured: true,
        parallel: "En paralelo con Farmacias Pigalle en 2023",
        highlights: [
          "En una software factory para empresas de turismo y viajes, corregí defectos en los sistemas existentes y di seguimiento hasta dejarlos resueltos.",
          "Refactoricé módulos para ordenar el código, separar responsabilidades y dejar cada parte más clara y fácil de mantener.",
          "Optimicé consultas que intervenían en la operación diaria, revisando la causa de la demora y ajustando el acceso a los datos.",
          "Stack: Laravel y JavaScript."
        ]
      },
      {
        title: "Desarrollador", company: "Mutualista Hospital Evangélico",
        period: "Jun. 2019 – mar. 2020", place: "Montevideo", start: 2019, end: 2020, featured: true,
        highlights: [
          "Resolví problemas de sincronización de base de datos para suministros médicos.",
          "Identifiqué la causa de fallas de acceso a la red de clientes desactualizados.",
          "Desarrollé un script de monitoreo de fallas de servicios web."
        ]
      },
      {
        title: "Desarrollador de software", company: "1650Labs",
        period: "2018 – 2019", place: "Montevideo", start: 2018, end: 2019, featured: true,
        highlights: [
          "Resolví los problemas de front-end reportados por el cliente, verificados por QA.",
          "Encontré una causa principal de cuellos de botella en el acceso a bases de datos."
        ]
      },
      {
        title: "Docente de Programación, Soporte y Soluciones TI", company: "INFA",
        period: "2017 – 2018", place: "jornada parcial", start: 2017, end: 2018,
        parallel: "En paralelo con la consultoría de calidad",
        highlights: ["Implementé un sistema de evaluación en línea para varias disciplinas técnicas y organicé un programa de capacitación para empleados."]
      },
      {
        title: "Programador de software", company: "Electrosistemas SA",
        period: "May. 2015 – mar. 2017", place: "Montevideo", start: 2015, end: 2017,
        highlights: [
          "Introduje el sistema de caja chica, reduciendo a menos de la mitad el tiempo de los cálculos.",
          "Optimicé el control de combustible de la flota al registrar las recargas en estaciones de servicio."
        ]
      },
      {
        title: "Desarrollador Fullstack .NET", company: "Nómina S.A.",
        period: "Mar. 2013 – abr. 2015", place: "Montevideo", start: 2013, end: 2015,
        highlights: [
          "Implementé un sistema de migración universal para la plataforma web Nopcommerce de todos los proyectos ERP.",
          "Capacité a los clientes en la nueva plataforma."
        ]
      },
      {
        title: "Consultor independiente de gestión de calidad", company: "Pequeñas empresas",
        period: "Abr. 2012 – dic. 2018", place: "", start: 2012, end: 2018,
        parallel: "En paralelo con empleos de desarrollo",
        highlights: ["Análisis de procesos y costos, estandarización de métodos, auditorías, informes y documentación (ISO 9000:2008)."]
      },
      {
        title: "Desarrollador", company: "Assist",
        period: "2012 – 2013", place: "Montevideo", start: 2012, end: 2013,
        highlights: [
          "Diseñé consultas personalizadas para clientes de la cadena de abastecimiento, eliminando reclamos por falta de datos.",
          "Identifiqué el error que causaba lentitud en el acceso a la base de datos."
        ]
      },
      {
        title: "Desarrollador Sr. .NET", company: "Tata Consultancy Services",
        period: "Mar. 2010 – jul. 2012", place: "Zonamérica, Montevideo", start: 2010, end: 2012,
        parallel: "En paralelo con Estudio Palma en 2010",
        highlights: ["Localicé el error que generaba inconsistencias de datos y eliminé los reclamos por cálculo de la agenda web de un sistema de terceros."]
      },
      {
        title: "Desarrollador", company: "Estudio Palma (estudio contable)",
        period: "Mar. 2007 – nov. 2010", place: "Montevideo", start: 2007, end: 2010,
        parallel: "En paralelo con TCS en 2010",
        highlights: [
          "Automatización del módulo de recibos y sistema de notificaciones agendadas por correo.",
          "Mejoras de interfaz, análisis e implementación de cambios, diseño e integración de reportes. Scrum, .NET, Access."
        ]
      },
      {
        title: "Profesor", company: "Círculo Informático",
        period: "Feb. 2006 – feb. 2008", place: "Minas, Canelones", start: 2006, end: 2008,
        highlights: ["Carreras de Analista de Sistemas, Programador, Desarrollador Web, y Reparación de PC y Redes."]
      },
      {
        title: "Desarrollador y administrador de bases de datos", company: "Lidertur S.A.",
        period: "Jul. 2003 – ene. 2006", place: "Montevideo", start: 2003, end: 2006,
        highlights: ["Análisis y refactorización, administración de base de datos, mantenimiento del generador de reportes de recibos y del control de stock."]
      },
      {
        title: "Profesor", company: "ITM Instituto Técnico del Mercosur",
        period: "2002 – 2005", place: "varias sedes del país", start: 2002, end: 2005,
        parallel: "En paralelo con Lidertur",
        highlights: ["Usuario básico, MS Office, reparación de PC y diseño gráfico."]
      },
      {
        title: "Asesor en ventas", company: "Productos y servicios TI",
        period: "1996 – 2001", place: "Montevideo", start: 1996, end: 2001,
        highlights: ["Ventas, capacitación y relaciones públicas."]
      }
    ],

    projects: [
      { name: "ChecklistEmergencia", description: "PWA de preparación para emergencias para una congregación.", url: "" },
      { name: "KDSuy", description: "Sistema de pantalla de cocina (Django, Channels, Redis) para gastronomía uruguaya.", url: "" },
      {
        name: "Sistemas HE", company: "Mutualista Hospital Evangélico", period: "Jun. 2019 – actualidad",
        description: "Sistemas para la Mutualista Hospital Evangélico.", url: "", featured: true
      },
      {
        name: "Electrosistemas SSGO", company: "Electrosistemas SA", period: "Ago. 2015 – mar. 2017",
        description: "Módulos de caja chica, combustible, agenda logística, legajo, reclamo de cercos (móvil) y costos.", url: "", featured: true
      },
      {
        name: "Numina JTech", company: "Nómina S.A.", period: "Dic. 2014 – mar. 2015",
        description: "Sitio con compras en línea.", url: ""
      },
      {
        name: "Grupo Record", company: "Nómina S.A.", period: "Abr. 2014 – ene. 2015",
        description: "Sitio de venta mayorista para ferreterías.", url: ""
      },
      {
        name: "McKesson – HzERM", company: "Tata Consultancy Services", period: "Ago. 2010 – ene. 2011",
        description: "Cliente de Estados Unidos. Sistema legado híbrido. Corregí defectos y optimicé consultas. Zonamérica, Montevideo.", url: "", featured: true
      },
      {
        name: "PricewaterhouseCoopers – AOS Hosteling", company: "Tata Consultancy Services", period: "2010",
        description: "Cliente de Estados Unidos. Migración de un sistema legado en dBase y WinForms a WPF, hacia un sistema más web y distribuido. Montevideo.", url: "", featured: true
      },
      {
        name: "PricewaterhouseCoopers – Tracker", company: "Tata Consultancy Services", period: "2010",
        description: "Cliente de Estados Unidos. Migración de un sistema legado en dBase y WinForms a WPF, hacia un sistema más web y distribuido. Montevideo.", url: "", featured: true
      },
      {
        name: "Estudio Palma – IRPF Manager System", company: "Estudio Palma", period: "2007 – 2009",
        description: "Sistema de gestión del IRPF (impuesto a la renta de las personas físicas).", url: ""
      },
      {
        name: "Lidertur S.A. – CATV Installation Inventory Manager", company: "Lidertur S.A.", period: "2005 – 2007",
        description: "Gestión del inventario de instalaciones de TV cable.", url: ""
      }
    ],

    /* Cada curso puede ser texto o cert(id, textos): estos abren su detalle en el panel. */
    certs: {
      "DevOps (IBM, 2026)": [
        cert("ibm-contenedores", {
          featured: true,
          name: "Introducción a Contenedores con Docker, Kubernetes y OpenShift",
          learned: [
            "Usar contenedores para mover aplicaciones rápidamente entre cualquier entorno.",
            "Construir aplicaciones cloud native con Docker, Kubernetes, OpenShift e Istio.",
            "Describir y aprovechar la arquitectura de Kubernetes para gestionar el ciclo de vida completo de contenedores.",
            "Crear archivos de despliegue YAML para configurar de forma declarativa pods, services, replicasets y otros recursos."
          ],
          skills: [
            "Docker", "Kubernetes", "OpenShift", "Contenedores", "Microservicios", "Cloud native",
            "Despliegue en la nube", "Despliegue de aplicaciones", "DevOps", "YAML", "Escalabilidad", "Línea de comandos"
          ]
        }),
        cert("ibm-agile-scrum", {
          featured: true,
          name: "Introducción al Desarrollo Ágil y Scrum",
          learned: [
            "Adoptar las 5 prácticas de Agile, un subconjunto de DevOps: lotes pequeños, producto mínimo viable, programación en pareja y desarrollo guiado por comportamiento y por pruebas.",
            "Escribir buenas historias de usuario, estimar y asignar story points y seguir las historias en un tablero kanban. Incorporar artefactos, eventos y beneficios de Scrum.",
            "Crear y refinar un product backlog mediante la planificación del sprint y producir incrementos potencialmente entregables en cada iteración.",
            "Crear gráficos burndown para prever el cumplimiento del objetivo del sprint y usar métricas para mejorar el rendimiento, la productividad y la satisfacción del cliente."
          ],
          skills: [
            "Metodología Agile", "Scrum", "Planificación de sprints", "Desarrollo ágil de software", "Metodologías Lean",
            "Historias de usuario", "Backlogs", "Retrospectivas de sprint", "Gestión de flujos de trabajo",
            "Métricas de rendimiento", "Medición del desempeño", "Trabajo en equipo"
          ]
        }),
        cert("ibm-devops", {
          featured: true,
          name: "Introducción al DevOps",
          learned: [
            "Las características esenciales de DevOps: cultura de responsabilidad compartida, transparencia y aceptación del error.",
            "La importancia de la integración y entrega continuas, la infraestructura como código y el desarrollo guiado por pruebas y por comportamiento.",
            "Conceptos clave de DevOps: prácticas de ingeniería de software, microservicios cloud native, despliegues continuos automatizados y código resiliente.",
            "El impacto organizacional de DevOps: romper silos, trabajar en equipos multifuncionales y compartir responsabilidades."
          ],
          skills: [
            "DevOps", "Integración continua", "Infraestructura como código (IaC)", "Desarrollo guiado por comportamiento (BDD)",
            "Microservicios", "Cloud native", "Arquitectura cloud", "Metodología Agile", "Scrum",
            "Colaboración multifuncional", "Estructura organizacional", "Métricas de rendimiento"
          ]
        })
      ],
      "IA aplicada (Sololearn, 2026)": [
        cert("sl-ia-pensamiento-critico", { name: "Pensamiento crítico en la era de la IA" }),
        cert("sl-ia-mentalidad", { name: "Mentalidad de crecimiento en la era de la IA" }),
        cert("sl-ia-producto-ux", { name: "Producto y UX impulsados por IA" }),
        cert("sl-ia-sesgos", { name: "Detección y mitigación de sesgos en sistemas de IA" }),
        cert("sl-ia-agenticos", { name: "Flujos de trabajo agénticos" }),
        cert("sl-ia-seo", { name: "SEO con IA" }),
        cert("sl-ia-planificacion", { name: "Planificación de proyectos con IA" }),
        cert("sl-ia-marketing", { name: "Marketing en redes sociales con IA" }),
        cert("sl-ia-escribir", { name: "Escribir con IA" }),
        cert("sl-ia-pruebas-ab", { name: "Pruebas A/B impulsadas por IA" }),
        cert("sl-ia-prompts", { name: "Ingeniería de prompts" }),
        cert("sl-ia-aprendizaje-automatico", { name: "Fundamentos del aprendizaje automático" }),
        cert("sl-ia-llms", { name: "Introducción a los LLMs" }),
        cert("sl-ia-etica", { name: "Fundamentos de IA ética" }),
        cert("sl-ia-investigacion", { name: "Investigación con IA" }),
        cert("sl-ia-visualizacion", { name: "Visualiza tus datos" }),
        cert("sl-ia-alfabetizacion", { name: "Alfabetización de datos con IA" }),
        cert("sl-ia-analisis-datos", { name: "Análisis de datos con IA" }),
        cert("sl-ia-creatividad", { name: "Piensa creativamente con IA" }),
        cert("sl-ia-lluvia-ideas", { name: "Lluvia de ideas con IA" }),
        cert("sl-ia-generativa", { name: "IA generativa en la práctica" })
      ],
      "Negocios (HP LIFE, 2026)": [
        cert("hp-tecnologia-negocios", {
          name: "Tecnología de la información para el éxito en los negocios",
          summary: "Elegir la mejor tecnología para la empresa e integrar con éxito soluciones tecnológicas al emprendimiento."
        }),
        cert("hp-planificacion-ia", {
          name: "La planificación estratégica en la era de la IA",
          summary: "Usar la planificación estratégica para tomar mejores decisiones de negocio en un mundo impulsado por la IA; conocer los componentes clave de un plan estratégico; evaluar marcos de planificación práctica y usar herramientas de IA para el pensamiento estratégico."
        }),
        cert("hp-sitios-web", {
          name: "Efectivos sitios web de negocios",
          summary: "Aplicar las mejores técnicas de desarrollo para diseñar un sitio web empresarial, entender el comportamiento de los clientes y usar las métricas del sitio de manera efectiva."
        }),
        cert("hp-motores-crecimiento", {
          name: "Motores de crecimiento",
          summary: "Identificar las cuatro partes de un motor de crecimiento, construir un motor de crecimiento para una situación nueva y generar ideas de crecimiento para el propio negocio."
        }),
        cert("hp-pequeno-negocio", {
          name: "Empezar un pequeño negocio",
          summary: "Usar el pensamiento empresarial para emprender un negocio, crear un plan de negocios y desarrollar métricas para medir el éxito de la empresa."
        }),
        cert("hp-economia-circular", {
          name: "Economía circular",
          summary: "Los principios básicos de la economía circular, por qué es importante en el mundo actual y las formas en que las empresas pueden incorporarla a sus modelos de negocio."
        }),
        cert("hp-mentalidad-exitosa", {
          name: "Mentalidad exitosa",
          summary: "Desarrollar una mentalidad exitosa, crear una visión, metas y un plan de éxito, y adquirir buenos hábitos empresariales para un futuro exitoso."
        }),
        cert("hp-planificacion-estrategica", {
          name: "Planificación estratégica",
          summary: "Desarrollar un análisis FODA (fortalezas, oportunidades, debilidades y amenazas) y usar sus resultados para seleccionar las estrategias más eficaces para el éxito del negocio."
        }),
        cert("hp-propuesta-valor", {
          name: "Propuesta única de valor",
          summary: "Definir y crear una propuesta única de valor, explicar su importancia para cualquier negocio, comprender sus componentes clave y evaluar las propuestas de valor de la competencia."
        }),
        cert("hp-experiencia-cliente", {
          name: "Experiencia del cliente (CX) para el éxito comercial",
          summary: "Definir la atención centrada en el cliente y su rol en la estrategia empresarial, reconocer promotores y detractores, explorar la relación entre el NPS y los resultados del negocio y escuchar a los clientes con empatía."
        }),
        cert("hp-ciberseguridad", {
          name: "Introducción al conocimiento de la ciberseguridad",
          summary: "Las amenazas frecuentes a la ciberseguridad y formas básicas de proteger la seguridad de la información y los datos en línea."
        }),
        cert("hp-ciencia-datos", {
          name: "Ciencia y análisis de datos",
          summary: "Las principales prácticas, metodologías y herramientas de ciencia y análisis de datos; los beneficios y dificultades de un enfoque de negocios basado en datos y destrezas fundamentales para una carrera en el sector."
        }),
        cert("hp-destrezas-digitales", {
          name: "Introducción a destrezas empresariales digitales",
          summary: "Los conceptos básicos y motores clave de la economía digital, cinco formas digitales de trabajar para la transformación empresarial y las prácticas, herramientas y destrezas necesarias para ser exitoso en la era digital."
        }),
        cert("hp-liderazgo", {
          name: "Liderazgo efectivo",
          summary: "El liderazgo eficaz y su importancia, cómo aprovechar diferentes estrategias de liderazgo y por qué la ética desempeña un papel en el liderazgo eficaz."
        }),
        cert("hp-agile", {
          name: "Gestión de proyectos con Agile",
          summary: "Definir el producto mínimo viable, diferenciar el desarrollo iterativo del incremental, analizar beneficios y limitaciones de herramientas Agile como Scrum y Kanban y aplicar prácticas ágiles en la gestión de proyectos."
        }),
        cert("hp-ia-negocios", {
          name: "IA para profesionales de negocios",
          summary: "La función de la IA en las empresas, la diferencia entre herramientas de IA independientes y funciones integradas, cómo crear instrucciones eficaces, el uso ético de la IA y cómo usarla para el crecimiento profesional."
        }),
        cert("hp-redes-profesionales", {
          name: "Redes profesionales para el crecimiento profesional",
          summary: "La importancia de establecer contactos para la carrera, estrategias prácticas para lograrlo, el papel de la marca personal y herramientas digitales para ampliar la red profesional con confianza."
        }),
        cert("hp-pensamiento-critico", {
          name: "Pensamiento crítico en la era de la IA",
          summary: "Emplear el pensamiento crítico para tomar mejores decisiones, comprender cómo los contenidos generados por IA pueden distorsionar la realidad, contrarrestar el impacto de los sesgos y verificar la veracidad de la información."
        })
      ],
      "Programación (Sololearn, 2017)": [
        cert("sl-php", { name: "PHP" }),
        cert("sl-csharp", { name: "C#" }),
        cert("sl-javascript", { name: "JavaScript" }),
        cert("sl-jquery", { name: "jQuery" }),
        cert("sl-html", { name: "HTML" }),
        cert("sl-python", { name: "Python Core" })
      ],
      "Programación y calidad": [
        cert("sl-responsive", { name: "Responsive Web Design (2022)" }),
        "TDP .NET, Tata Consultancy Services (2011)",
        "Microsoft DCE2005 3 Stars (2012)",
        { name: "Análisis y gestión del riesgo (UNIT-ISO/IEC 27005)", featured: true },
        { name: "Auditorías de la calidad (UNIT-ISO)", featured: true }
      ]
    },

    education: [
      {
        title: "Brigham Young University – Idaho",
        meta: "Grado en Administración y Dirección de Empresas, Emprendimiento · en línea · ene. 2026 – actualidad",
        featured: true
      },
      { title: "Instituto BIOS Uruguay", meta: "Técnico en Seguridad Informática · 2019", featured: true },
      { title: "Instituto Uruguayo de Normas Técnicas (UNIT)", meta: "Introducción al Lean Management · 2017" },
      { title: "Asociación de Coaching Ontológico Profesional de Uruguay (ACOP)", meta: "PNL aplicado al coaching, Coaching Ontológico · 2017" },
      { title: "Instituto Uruguayo de Normas Técnicas (UNIT)", meta: "Herramientas para coaching, Coaching Ontológico · 2017" },
      { title: "Instituto Uruguayo de Normas Técnicas (UNIT)", meta: "Coaching para equipos, Coaching Ontológico · 2017" },
      { title: "Instituto Uruguayo de Normas Técnicas (UNIT)", meta: "Gestión del cambio · 2017" },
      { title: "UNIT-ISO", meta: "ISMS Specialist ISO/IEC 27000, seguridad de la información · 2012" },
      { title: "UNIT-ISO", meta: "QMS Specialist, ISO 9001:2008 · 2012" },
      { title: "Alianza Uruguay-EEUU", meta: "First Certificate, inglés (curso preparatorio) · 2012" },
      { title: "Anglo-Uruguay", meta: "Upper Intermediate, inglés · 2011" },
      { title: "Tata Consultancy Services", meta: "Business Intelligence · 2011" },
      { title: "Netgate", meta: "Telework E-business · 2008" },
      { title: "Universidad ORT Uruguay", meta: "Analista Programador, Desarrollo TI · 2000 – 2004", featured: true },
      {
        title: "Voluntariado: misionero de tiempo completo",
        meta: "La Iglesia de Jesucristo de los Santos de los Últimos Días · 1994–1996 · Concepción, Chile"
      }
    ],

    languages: [
      "Español: nativo/bilingüe",
      "Inglés: profesional básico (First Certificate in English, Anglo Uruguay)"
    ]
  });
})(window.CV = window.CV || {});
