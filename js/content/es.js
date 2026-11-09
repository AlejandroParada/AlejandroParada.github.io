/* Contenido del CV en español (idioma base). Cada cambio debe replicarse en js/content/en.js. */
(function (CV) {
  "use strict";

  const { cert } = CV;

  CV.data = Object.freeze({
    skills: {
      "Backend": ["C#", ".NET", "ASP.NET MVC", "APIs REST", "Servicios web", "Kubernetes", "Flujos agénticos", "Laravel", "PHP", "Python", "Django"],
      "Datos": ["SQL Server", "Optimización de consultas", "Sincronización de bases de datos", "MS Access"],
      "Frontend": ["JavaScript", "jQuery", "AngularJS", "Vue.js", "Bootstrap", "HTML y CSS responsivo"],
      "DevOps e IA": ["Docker", "DevOps", "Integración de IA", "Ingeniería de prompts"],
      "Métodos": ["Scrum", "Modernización de sistemas legados", "ISO 9000", "Auditoría de calidad", "Nopcommerce"]
    },

    /* start/end: años usados para agrupar por década. end: null = actualidad. */
    jobs: [
      {
        title: "Desarrollador senior de software", company: "Farmacias Pigalle",
        icon: "/img/companies/pigalle.png",
        period: "Abr. 2023 – abr. 2026", place: "Montevideo", start: 2023, end: 2026, featured: true,
        highlights: [
          "Reemplacé el mostrador de escritorio en VB6, sin soporte y con librerías obsoletas, por una aplicación web usada en más de 20 sucursales.",
          "Cada sucursal registra entre 300 y 500 transacciones por día. Si se corta la red, la venta sigue en local y se sincroniza con la central al volver la conexión.",
          "Propuse conservar la lógica de negocio en C# y .NET Framework 4.7.2, por compatibilidad con DLL de terceros, con frontend en Django y terminales Linux."
        ],
        caseStudy: {
          kicker: "Modernización del sistema de sucursales",
          hint: "Arquitectura, operación en sucursal y continuidad.",
          lead: "Pasé el mostrador de VB6 a una aplicación web que conserva la lógica de negocio y la forma de trabajar del personal de farmacia.",
          metrics: [
            { value: "+20", label: "sucursales en operación" },
            { value: "300–500", label: "transacciones diarias por sucursal" },
            { value: "3–4", label: "personas por turno, en dos turnos" },
            { value: "Sin red", label: "la venta sigue y luego sincroniza" }
          ],
          sections: [
            {
              title: "Alcance",
              paragraphs: [
                "El sistema de sucursal cubre la gestión y la venta de medicamentos, cosmética, limpieza y artículos ortopédicos, coordinada con la central. En el mostrador trabajan 3 o 4 personas por turno, en dos turnos.",
                "Antes, cada sucursal usaba un escritorio en VB6, con librerías sin soporte y una base local que se sincronizaba con la central."
              ]
            },
            {
              title: "Decisiones de arquitectura",
              items: [
                "Propuse separar frontend y backend y conservar la lógica de negocio, migrada a C# sobre .NET Framework 4.7.2: era la versión compatible con las DLL de terceros.",
                "Probé versiones posteriores de .NET y las descarté. Esas DLL ya no las actualizaban sus autores y dejaban de funcionar.",
                "Armé un catálogo local de DLL, al estilo de un gestor de paquetes, para fijar versiones. Tomar siempre la DLL más reciente rompía las dependencias viejas.",
                "El frontend en Django consume una API REST que hace de proxy hacia esa lógica. La interfaz usa Metro UI para verse como las ventanas de Windows que el personal ya conocía, así que la adopción en sucursal tuvo poca resistencia.",
                "Elegí Linux en cada terminal: el navegador abre el sistema y se evita una licencia de Windows por puesto, en todas las sucursales."
              ]
            },
            {
              title: "Resultado en la operación",
              items: [
                "Si se corta la conexión, la transacción queda en la sucursal y se sincroniza al volver el enlace. De noche ya corría una sincronización de stock con la central.",
                "Un reporte de incidentes dentro del sistema acortó la detección y la corrección de errores.",
                "Bajaron los tiempos de carga. La puesta a punto de las sucursales pasó a hacerse en remoto y de forma automatizada."
              ]
            },
            {
              title: "Plataforma y entrega",
              items: [
                "Los servicios corren en contenedores, en el servidor de la empresa. Escribí los manifiestos y me encargué de los builds, la publicación, el monitoreo y los incidentes.",
                "Construí un tablero de disponibilidad: si la base responde y si los endpoints están visibles."
              ]
            },
            {
              title: "IA en la migración",
              paragraphs: [
                "Usé la IA en el desarrollo, no como una función del sistema en producción. Con Cursor, sobre todo Claude y otros modelos, comprobaba que el código migrado desde VB6 conservara el funcionamiento."
              ],
              items: [
                "Reescribí métodos pensados para VB6, bajé la duplicación y dejé el código en condiciones de aceptar tests unitarios.",
                "Mejoró el tiempo de ejecución.",
                "Dejé plantillas y reglas del editor para sostener un estilo de código homogéneo."
              ]
            },
            {
              title: "Trabajo con el negocio",
              paragraphs: [
                "Formé parte del equipo de desarrollo. En las revisiones mostraba avances, el enfoque, la estrategia y los bloqueos.",
                "Trabajé directo con el negocio y con la operación de farmacia, junto a quien había construido el sistema en VB6 durante unos 15 años y conocía las reglas y la base. Otras áreas que usan el mismo sistema me indicaron ajustes según su trabajo diario."
              ]
            },
            {
              title: "Continuidad del código",
              paragraphs: [
                "La empresa sufrió un ransomware que cifró documentación y código en las máquinas y pidió rescate. Mi equipo no resultó cifrado: trabajo en Linux, con varios niveles de control sobre los archivos, y tenía una copia de trabajo del repositorio. Desde esa máquina se recuperó el acceso al código, en local y en remoto."
              ]
            }
          ],
          stack: ["C#", ".NET Framework 4.7.2", "API REST", "Django", "Python", "Metro UI", "Linux", "Contenedores", "SQL Server"]
        }
      },
      {
        title: "Ingeniero de software", company: "Netviax Solutions",
        icon: "/img/companies/netviax.png",
        period: "Feb. 2022 – feb. 2023", place: "Montevideo", start: 2022, end: 2023, featured: true,
        clients: [
          { name: "TocToc Viajes", url: "https://toctocviajes.com", icon: "/img/clients/toctoc.png" },
          { name: "Buemes", url: "https://buemes.com.uy", icon: "/img/clients/buemes.png" },
          { name: "Hiperviajes", url: "https://hiperviajes.com.uy", icon: "/img/clients/hiperviajes.png" },
          { name: "Jetmar", url: "https://jetmar.com.uy", icon: "/img/clients/jetmar.png" },
          { name: "Despegar", url: "https://www.despegar.com.uy", icon: "/img/clients/despegar.png" },
          { name: "Tienda Viajes", url: "https://tiendaviajes.com.uy", icon: "/img/clients/tiendaviajes.png" },
          { name: "Metraje OCA", url: "https://viajes.metraje.oca.com.uy/paquetes", icon: "/img/clients/metraje.png" }
        ],
        highlights: [
          "Mantuve el sistema de reservas de vuelos de estas agencias sobre un mismo frontend, personalizado para cada una.",
          "Resolvía de 3 a 4 defectos por semana e incorporé un módulo de equipaje, adaptando una vista a los tipos de equipaje de la reserva.",
          "Mejoré el tiempo de respuesta del procedimiento almacenado de vuelos. El frontend en AngularJS corría en un microservicio, con Redis, y el contenedor pasaba a producción después de probarlo en local."
        ],
        caseStudy: {
          kicker: "Reservas de vuelos para agencias",
          hint: "Siete agencias, pasarela de pagos y entrega en Docker.",
          lead: "Trabajé el sistema de reservas de vuelos que compartían siete agencias, cada una con su marca sobre el mismo frontend.",
          metrics: [
            { value: "7", label: "agencias sobre el mismo frontend" },
            { value: "3–4", label: "defectos resueltos por semana" },
            { value: "Equipaje", label: "módulo nuevo en la reserva" },
            { value: "Docker", label: "prueba local y luego producción" }
          ],
          sections: [
            {
              title: "Clientes",
              showClients: true,
              paragraphs: [
                "Compartían el frontend y cada una lo personalizaba.",
                "Los paquetes de viaje los mantenían los propios clientes."
              ]
            },
            {
              title: "Qué resolvía el sistema",
              paragraphs: [
                "Era un sistema de reservas de vuelos, con integración de una pasarela de pagos. El desarrollo era sobre ese producto compartido, no sobre un sistema distinto por agencia."
              ]
            },
            {
              title: "Defectos y el módulo de equipaje",
              items: [
                "Resolvía 3 o 4 defectos por semana y les daba seguimiento hasta dejarlos cerrados.",
                "La refactorización llegó con un módulo nuevo: adapté una vista para la información de los tipos de equipaje de la reserva."
              ]
            },
            {
              title: "Consultas y caché",
              items: [
                "Optimicé el procedimiento almacenado de vuelos y mejoró su tiempo de respuesta.",
                "Redis guardaba en caché las consultas para no repetir el acceso cuando el dato ya estaba disponible."
              ]
            },
            {
              title: "Frontend y publicación",
              items: [
                "El frontend era AngularJS y corría sobre un microservicio.",
                "El servicio iba en un contenedor Docker. Se probaba en local y, si cumplía los requisitos, el contenedor pasaba a producción."
              ]
            }
          ],
          stack: ["AngularJS", "JavaScript", "Redis", "Docker", "Microservicio", "Pasarela de pagos"]
        }
      },
      {
        title: "Desarrollador", company: "Mutualista Hospital Evangélico",
        icon: "/img/companies/evangelico.png",
        period: "Jun. 2019 – mar. 2020", place: "Montevideo", start: 2019, end: 2020, featured: true,
        highlights: [
          "Resolví problemas de sincronización de base de datos para suministros médicos.",
          "Identifiqué la causa de fallas de acceso a la red de clientes desactualizados.",
          "Desarrollé un script de monitoreo de fallas de servicios web."
        ],
        caseStudy: {
          kicker: "Monitoreo y reproducción de fallas",
          hint: "Capturas en C#, tablero en Zabbix y auditoría en Bash.",
          lead: "Añadí un módulo en C# para reproducir fallas con capturas de pantalla, y monitoreo con Zabbix y Bash sobre caídas, la base de datos y los procesos lentos.",
          metrics: [
            { value: "C#", label: "módulo de capturas para reproducir fallas" },
            { value: "Zabbix", label: "caídas, sobrecarga y cuellos de botella" },
            { value: "Bash", label: "auditoría de memoria, CPU y disco" }
          ],
          sections: [
            {
              title: "Reproducción de fallas",
              paragraphs: [
                "Implementé un módulo nuevo, hecho en C#, que grababa capturas de pantalla. Servía para reproducir los defectos y conocer los pasos exactos de la falla."
              ]
            },
            {
              title: "Tablero de monitoreo",
              paragraphs: [
                "Creé una integración de tablero con Zabbix para monitorear caídas del sistema, sobrecarga de la base de datos y cuellos de botella."
              ]
            },
            {
              title: "Auditoría de procesos",
              paragraphs: [
                "Los scripts en Bash identificaban procesos que tardaban demasiado en ejecutarse y dejaban logs de auditoría del consumo de memoria, procesador y disco."
              ]
            }
          ],
          stack: ["C#", "Zabbix", "Bash"]
        }
      },
      {
        title: "Desarrollador de software", company: "1950Labs",
        icon: "/img/companies/labs.png",
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
        icon: "/img/companies/electrosistemas.png",
        period: "May. 2015 – mar. 2017", place: "Montevideo", start: 2015, end: 2017,
        highlights: [
          "Introduje el sistema de caja chica, reduciendo a menos de la mitad el tiempo de los cálculos.",
          "Optimicé el control de combustible de la flota al registrar las recargas en estaciones de servicio."
        ]
      },
      {
        title: "Desarrollador Fullstack .NET", company: "Númina S.A.",
        icon: "/img/companies/numina.png",
        period: "Mar. 2013 – abr. 2015", place: "Montevideo", start: 2013, end: 2015, featured: true,
        clients: [
          { name: "JTech", url: "https://jtech.com.uy/", icon: "/img/clients/jtech.png" },
          { name: "Grupo Record", url: "https://gruporecord.com.uy/", icon: "/img/clients/gruporecord.png" }
        ],
        highlights: [
          "Implementé un sistema de migración universal para la plataforma web Nopcommerce de todos los proyectos ERP.",
          "Capacité a los clientes en la nueva plataforma."
        ],
        caseStudy: {
          kicker: "Migración de Clarion a Nopcommerce",
          hint: "Datos en SQL Server y funciones nuevas sobre el paquete abierto.",
          lead: "Pasé el sistema de Clarion a SQL Server para que Nopcommerce, en ASP.NET, pudiera leerlo, y personalicé esa plataforma con funciones que el paquete abierto no traía.",
          metrics: [
            { value: "Clarion", label: "origen de los datos" },
            { value: "SQL Server", label: "tipo y formato de destino" },
            { value: "ASP.NET", label: "Nopcommerce de código abierto" },
            { value: "Nuevas", label: "funciones fuera del paquete" }
          ],
          sections: [
            {
              title: "Clientes",
              showClients: true,
              paragraphs: [
                "JTech y Grupo Record quedaron sobre esa plataforma."
              ]
            },
            {
              title: "Migración de datos",
              paragraphs: [
                "Hice un sistema de migración de Clarion a SQL Server. Copiaba su sistema, lo adaptaba y lo pasaba al otro tipo y formato de datos, para que después lo leyera Nopcommerce."
              ]
            },
            {
              title: "Personalización de Nopcommerce",
              paragraphs: [
                "Nopcommerce es un paquete de código abierto en ASP.NET. Tuve que adaptar y personalizar sus detalles, e implementé funciones nuevas que no venían en ese paquete."
              ]
            }
          ],
          stack: ["Clarion", "SQL Server", "Nopcommerce", "ASP.NET"]
        }
      },
      {
        title: "Consultor independiente de gestión de calidad", company: "Pequeñas empresas",
        period: "Abr. 2012 – dic. 2018", place: "", start: 2012, end: 2018,
        parallel: "En paralelo con empleos de desarrollo",
        highlights: ["Análisis de procesos y costos, estandarización de métodos, auditorías, informes y documentación (ISO 9000:2008)."]
      },
      {
        title: "Desarrollador", company: "Assist",
        icon: "/img/companies/assist.png",
        period: "2012 – 2013", place: "Montevideo", start: 2012, end: 2013,
        highlights: [
          "Diseñé consultas personalizadas para clientes de la cadena de abastecimiento, eliminando reclamos por falta de datos.",
          "Identifiqué el error que causaba lentitud en el acceso a la base de datos."
        ]
      },
      {
        title: "Desarrollador Sr. .NET", company: "Tata Consultancy Services",
        icon: "/img/companies/tcs.png",
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
      {
        id: "kds",
        name: "KDSuy",
        description: "Sitio del sistema de cocina y procesos para pizzerías, publicado en GitHub Pages.",
        url: "https://github.com/AlejandroParada/kds-web",
        demo: "https://alejandroparada.github.io/kds-web/",
        featured: true,
        detail: {
          kicker: "Repositorio kds-web",
          lead: "El repositorio público es la web del producto: un sistema de cocina y de procesos pensado para pizzerías.",
          items: [
            "Está armado con TypeScript, Tailwind CSS y esbuild, y se publica en GitHub Pages.",
            "Incluye un service worker, pruebas con Jest y un build que corre en GitHub Actions.",
            "El sitio presenta planes del producto y se puede abrir en el celular."
          ],
          stack: ["TypeScript", "Tailwind CSS", "esbuild", "Jest", "Service worker", "GitHub Pages"]
        }
      },
      {
        id: "animoreader",
        name: "AnimoReader",
        description: "PWA para armar el estado mental en una oración e imaginar el del otro.",
        url: "https://github.com/AlejandroParada/AnimoReader",
        demo: "https://alejandroparada.github.io/AnimoReader/",
        featured: true,
        detail: {
          kicker: "Repositorio AnimoReader",
          lead: "Aplicación instalable para escribir el propio estado mental en una oración y tratar de imaginar el de otra persona.",
          items: [
            "Es una PWA en HTML, CSS y JavaScript, con manifiesto y service worker.",
            "Guarda en el dispositivo el tema claro u oscuro y el tamaño de letra.",
            "Se puede instalar desde el navegador del celular."
          ],
          stack: ["HTML", "CSS", "JavaScript", "PWA", "Service worker"]
        }
      },
      {
        id: "survey-pilot",
        name: "Survey Pilot",
        description: "Aplicación Django para gestionar encuestas, con roles y pagos a vendedores.",
        url: "https://github.com/AlejandroParada/survey_pilot",
        featured: true,
        detail: {
          kicker: "Repositorio survey_pilot",
          lead: "Aplicación web para crear encuestas y seguir resultados, con permisos distintos para administración, empresa y vendedor.",
          items: [
            "El backend es Django y la base es PostgreSQL.",
            "La interfaz usa Tailwind CSS y Flowbite.",
            "Se levanta con Docker Compose.",
            "Cada encuesta se configura en JSON, sin reescribir el formulario."
          ],
          stack: ["Django", "PostgreSQL", "Tailwind CSS", "Flowbite", "Docker"]
        }
      },
      {
        id: "tesoros",
        name: "Tesoros de Mi Alma",
        description: "Libro digital en español, inglés y portugués, con modo oscuro y tamaño de letra.",
        url: "https://github.com/AlejandroParada/TesorosDeMiAlma",
        demo: "https://alejandroparada.github.io/TesorosDeMiAlma/",
        demoLabel: "Ver libro",
        featured: true,
        detail: {
          kicker: "Repositorio TesorosDeMiAlma",
          lead: "Un libro digital para leer en el celular o en el escritorio, sin frameworks.",
          items: [
            "El mismo contenido está en español, inglés y portugués.",
            "Incluye modo oscuro, ajuste del tamaño de letra y navegación por teclado.",
            "Los capítulos se cargan desde Markdown y el libro se puede leer en el sitio publicado."
          ],
          stack: ["HTML", "CSS", "JavaScript", "Markdown"]
        }
      },
      {
        id: "checklist",
        name: "ChecklistEmergencia",
        description: "PWA de preparación para emergencias del Barrio Los Ceibos.",
        url: "https://github.com/AlejandroParada/Checklistemergencia",
        demo: "https://alejandroparada.github.io/Checklistemergencia/",
        demoLabel: "Ver la guía",
        featured: true,
        detail: {
          kicker: "Repositorio Checklistemergencia",
          lead: "Guía interactiva para preparar a una familia: etapas, botiquín, contactos, abastecimiento y qué hacer en cada caso.",
          items: [
            "Es una PWA en HTML, CSS y JavaScript, con manifiesto y service worker.",
            "El contenido está armado para el Barrio Los Ceibos."
          ],
          stack: ["HTML", "CSS", "JavaScript", "PWA"]
        }
      },
      {
        name: "Sistemas HE", company: "Mutualista Hospital Evangélico", icon: "/img/companies/evangelico.png", period: "Jun. 2019 – actualidad",
        description: "Sistemas para la Mutualista Hospital Evangélico.", url: "", featured: true
      },
      {
        name: "Electrosistemas SSGO", company: "Electrosistemas SA", icon: "/img/companies/electrosistemas.png", period: "Ago. 2015 – mar. 2017",
        description: "Módulos de caja chica, combustible, agenda logística, legajo, reclamo de cercos (móvil) y costos.", url: "", featured: true
      },
      {
        name: "Numina JTech", company: "Númina S.A.", icon: "/img/companies/numina.png", period: "Dic. 2014 – mar. 2015",
        description: "Sitio con compras en línea.", url: ""
      },
      {
        name: "Grupo Record", company: "Númina S.A.", icon: "/img/companies/numina.png", period: "Abr. 2014 – ene. 2015",
        description: "Sitio de venta mayorista para ferreterías.", url: ""
      },
      {
        name: "McKesson – HzERM", company: "Tata Consultancy Services", icon: "/img/companies/tcs.png", period: "Ago. 2010 – ene. 2011",
        description: "Cliente de Estados Unidos. Sistema legado híbrido. Corregí defectos y optimicé consultas. Zonamérica, Montevideo.", url: "", featured: true
      },
      {
        name: "PricewaterhouseCoopers – AOS Hosteling", company: "Tata Consultancy Services", icon: "/img/companies/tcs.png", period: "2010",
        description: "Cliente de Estados Unidos. Migración de un sistema legado en dBase y WinForms a WPF, hacia un sistema más web y distribuido. Montevideo.", url: "", featured: true
      },
      {
        name: "PricewaterhouseCoopers – Tracker", company: "Tata Consultancy Services", icon: "/img/companies/tcs.png", period: "2010",
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
