/* CV content in English. Translation of js/content/es.js (base language): keep both in sync. */
(function (CV) {
  "use strict";

  const { cert } = CV;

  CV.data = Object.freeze({
    skills: {
      "Backend": ["C#", ".NET", "ASP.NET MVC", "REST APIs", "Web services", "Kubernetes", "Agentic workflows", "Laravel", "PHP", "Python", "Django"],
      "Data": ["SQL Server", "Query optimization", "Database synchronization", "MS Access"],
      "Frontend": ["JavaScript", "jQuery", "AngularJS", "Vue.js", "Bootstrap", "Responsive HTML & CSS"],
      "DevOps & AI": ["Docker", "DevOps", "AI integration", "Prompt engineering"],
      "Methods": ["Scrum", "Legacy system modernization", "ISO 9000", "Quality auditing", "Nopcommerce"]
    },

    /* start/end: years used to group by decade. end: null = present. */
    jobs: [
      {
        title: "Senior Software Developer", company: "Farmacias Pigalle",
        icon: "/img/companies/pigalle.png",
        period: "Apr 2023 – Apr 2026", place: "Montevideo", start: 2023, end: 2026, featured: true,
        highlights: [
          "Replaced the unsupported VB6 desktop counter and its obsolete libraries with a web application used in more than 20 branches.",
          "Each branch records 300 to 500 transactions a day. If the network drops, the sale continues locally and syncs with headquarters when the connection returns.",
          "I proposed keeping the business logic in C# on .NET Framework 4.7.2 so it stayed compatible with third-party DLLs, with a Django frontend and Linux terminals."
        ],
        caseStudy: {
          kicker: "Branch system modernization",
          hint: "Architecture, branch operations and continuity.",
          lead: "I moved the VB6 counter to a web application that keeps the business logic and the way pharmacy staff already work.",
          metrics: [
            { value: "+20", label: "branches in operation" },
            { value: "300–500", label: "daily transactions per branch" },
            { value: "3–4", label: "people per shift, two shifts" },
            { value: "Offline", label: "the sale continues, then syncs" }
          ],
          sections: [
            {
              title: "Scope",
              paragraphs: [
                "The branch system handles inventory and sales of medication, cosmetics, cleaning products and orthopedic items, coordinated with headquarters. Three or four people work the counter each shift, across two shifts.",
                "Each branch previously ran a VB6 desktop application, with unsupported libraries and a local database that synced with headquarters."
              ]
            },
            {
              title: "Architecture decisions",
              items: [
                "I proposed splitting frontend and backend while keeping the business logic, migrated to C# on .NET Framework 4.7.2: that was the version still compatible with the third-party DLLs.",
                "I tried later .NET versions and set them aside. The DLL authors no longer updated them, and those builds stopped working.",
                "I built a local DLL catalog, in the spirit of a package manager, to pin versions. Always taking the newest DLL broke the older dependencies.",
                "The Django frontend calls a REST API that proxies to that logic. The UI uses Metro UI so it looks like the Windows screens staff already knew, and branch adoption met little resistance.",
                "I chose Linux on every terminal: the browser opens the system and avoids a Windows license per seat, across all branches."
              ]
            },
            {
              title: "What changed in daily operations",
              items: [
                "If the connection drops, the transaction stays at the branch and syncs when the link returns. A nightly stock sync with headquarters was already in place.",
                "An in-system incident report shortened how long it took to detect and fix errors.",
                "Load times came down. Branch setup moved to a remote, automated process."
              ]
            },
            {
              title: "Platform and delivery",
              items: [
                "The services run in containers on the company server. I wrote the manifests and owned the builds, the releases, the monitoring and the incidents.",
                "I built an availability dashboard: whether the database responds and whether the endpoints are reachable."
              ]
            },
            {
              title: "AI in the migration",
              paragraphs: [
                "I used AI in development, not as a feature of the production system. With Cursor, mostly Claude and other models, I checked that code migrated from VB6 still behaved the same way."
              ],
              items: [
                "I rewrote methods shaped for VB6, cut duplication and left the code in a shape that can take unit tests.",
                "Execution time improved.",
                "I left editor templates and rules so the coding style stayed consistent."
              ]
            },
            {
              title: "Working with the business",
              paragraphs: [
                "I was part of the development team. In reviews I showed progress, the technical approach, the strategy and the blockers.",
                "I worked directly with the business and with pharmacy operations, alongside the person who had built the VB6 system over about 15 years and knew the rules and the database. Other areas that use the same system pointed me to adjustments based on their daily work."
              ]
            },
            {
              title: "Keeping the code available",
              paragraphs: [
                "The company was hit by ransomware that encrypted documentation and code on the machines and demanded payment. My machine was not encrypted: I work on Linux, with several layers of control over the files, and I had a working copy of the repository. Access to the code was recovered from that machine, locally and remotely."
              ]
            }
          ],
          stack: ["C#", ".NET Framework 4.7.2", "REST API", "Django", "Python", "Metro UI", "Linux", "Containers", "SQL Server"]
        }
      },
      {
        title: "Software Engineer", company: "Netviax Solutions",
        icon: "/img/companies/netviax.png",
        period: "Feb 2022 – Feb 2023", place: "Montevideo", start: 2022, end: 2023, featured: true,
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
          "Maintained the flight-booking system of these agencies on one frontend, customized for each of them.",
          "Resolved 3 to 4 defects a week and added a baggage module, adapting a view to the baggage types on the booking.",
          "Improved the response time of the flights stored procedure. The AngularJS frontend ran on a microservice, with Redis, and the container went to production after local testing."
        ],
        caseStudy: {
          kicker: "Flight booking for travel agencies",
          hint: "Seven agencies, a payment gateway and Docker delivery.",
          lead: "I worked on the flight-booking system shared by seven agencies, each with its own brand on the same frontend.",
          metrics: [
            { value: "7", label: "agencies on the same frontend" },
            { value: "3–4", label: "defects resolved per week" },
            { value: "Baggage", label: "new module on the booking" },
            { value: "Docker", label: "local test, then production" }
          ],
          sections: [
            {
              title: "Clients",
              showClients: true,
              paragraphs: [
                "They shared the frontend and each one customized it.",
                "The clients themselves maintained the travel packages."
              ]
            },
            {
              title: "What the system did",
              paragraphs: [
                "It was a flight-booking system, with a payment gateway integrated. Development was on that shared product, not on a separate system per agency."
              ]
            },
            {
              title: "Defects and the baggage module",
              items: [
                "I resolved 3 or 4 defects a week and followed each one until it was closed.",
                "The refactor came with a new module: I adapted a view for the baggage types on the booking."
              ]
            },
            {
              title: "Queries and cache",
              items: [
                "I optimized the flights stored procedure and its response time improved.",
                "Redis cached queries so the system did not repeat the lookup when the data was already available."
              ]
            },
            {
              title: "Frontend and release",
              items: [
                "The frontend was AngularJS and ran on a microservice.",
                "The service ran in a Docker container. It was tested locally and, when it met the requirements, the container went to production."
              ]
            }
          ],
          stack: ["AngularJS", "JavaScript", "Redis", "Docker", "Microservice", "Payment gateway"]
        }
      },
      {
        title: "Developer", company: "Mutualista Hospital Evangélico",
        icon: "/img/companies/evangelico.png",
        period: "Jun 2019 – Mar 2020", place: "Montevideo", start: 2019, end: 2020, featured: true,
        highlights: [
          "Solved database synchronization issues for medical supplies.",
          "Identified the cause of network access failures on outdated clients.",
          "Developed a monitoring script for web service failures."
        ],
        caseStudy: {
          kicker: "Monitoring and bug replay",
          hint: "C# screen captures, a Zabbix dashboard, and Bash audits.",
          lead: "I added a C# module to replay failures from screen captures, plus Zabbix and Bash monitoring for outages, the database, and slow processes.",
          metrics: [
            { value: "C#", label: "capture module to replay failures" },
            { value: "Zabbix", label: "outages, overload, and bottlenecks" },
            { value: "Bash", label: "memory, CPU, and disk audit" }
          ],
          sections: [
            {
              title: "Replaying failures",
              paragraphs: [
                "I added a new module, written in C#, that recorded screen captures. It made it possible to replay defects and see the exact steps of the failure."
              ]
            },
            {
              title: "Monitoring dashboard",
              paragraphs: [
                "I built a dashboard integration with Zabbix to watch for system outages, database overload, and bottlenecks."
              ]
            },
            {
              title: "Process audits",
              paragraphs: [
                "Bash scripts identified processes that took too long to run and wrote audit logs of memory, processor, and disk use."
              ]
            }
          ],
          stack: ["C#", "Zabbix", "Bash"]
        }
      },
      {
        title: "Software Developer", company: "1950Labs",
        icon: "/img/companies/labs.png",
        period: "2018 – 2019", place: "Montevideo", start: 2018, end: 2019, featured: true,
        highlights: [
          "Fixed the front-end issues reported by the client, verified by QA.",
          "Found a root cause of database access bottlenecks."
        ]
      },
      {
        title: "Programming, Support and IT Solutions Instructor", company: "INFA",
        period: "2017 – 2018", place: "part-time", start: 2017, end: 2018,
        parallel: "Concurrent with the quality consulting practice",
        highlights: ["Implemented an online assessment system for several technical disciplines and organized an employee training program."]
      },
      {
        title: "Software Programmer", company: "Electrosistemas SA",
        icon: "/img/companies/electrosistemas.png",
        period: "May 2015 – Mar 2017", place: "Montevideo", start: 2015, end: 2017,
        highlights: [
          "Introduced the petty cash system, cutting calculation time by more than half.",
          "Optimized fleet fuel control by recording refills at service stations."
        ]
      },
      {
        title: "Fullstack .NET Developer", company: "Númina S.A.",
        icon: "/img/companies/numina.png",
        period: "Mar 2013 – Apr 2015", place: "Montevideo", start: 2013, end: 2015, featured: true,
        clients: [
          { name: "JTech", url: "https://jtech.com.uy/", icon: "/img/clients/jtech.png" },
          { name: "Grupo Record", url: "https://gruporecord.com.uy/", icon: "/img/clients/gruporecord.png" }
        ],
        highlights: [
          "Implemented a universal migration system to the Nopcommerce web platform for all ERP projects.",
          "Trained clients on the new platform."
        ],
        caseStudy: {
          kicker: "Migration from Clarion to Nopcommerce",
          hint: "SQL Server data and features added on top of the open-source package.",
          lead: "I moved the Clarion system to SQL Server so Nopcommerce, on ASP.NET, could read it, and I customized that platform with features the open-source package did not include.",
          metrics: [
            { value: "Clarion", label: "source of the data" },
            { value: "SQL Server", label: "target type and format" },
            { value: "ASP.NET", label: "open-source Nopcommerce" },
            { value: "New", label: "features beyond the package" }
          ],
          sections: [
            {
              title: "Clients",
              showClients: true,
              paragraphs: [
                "JTech and Grupo Record ran on that platform."
              ]
            },
            {
              title: "Data migration",
              paragraphs: [
                "I built a migration system from Clarion to SQL Server. It copied their system, adapted it, and converted it to the other data type and format, so Nopcommerce could read it afterwards."
              ]
            },
            {
              title: "Nopcommerce customization",
              paragraphs: [
                "Nopcommerce is an open-source package on ASP.NET. I had to adapt and customize its details, and I implemented new features that did not come with that package."
              ]
            }
          ],
          stack: ["Clarion", "SQL Server", "Nopcommerce", "ASP.NET"]
        }
      },
      {
        title: "Independent Quality Management Consultant", company: "Small businesses",
        period: "Apr 2012 – Dec 2018", place: "", start: 2012, end: 2018,
        parallel: "Concurrent with development roles",
        highlights: ["Process and cost analysis, method standardization, audits, reports and documentation (ISO 9000:2008)."]
      },
      {
        title: "Developer", company: "Assist",
        icon: "/img/companies/assist.png",
        period: "2012 – 2013", place: "Montevideo", start: 2012, end: 2013,
        highlights: [
          "Designed custom queries for supply chain clients, eliminating complaints about missing data.",
          "Identified the bug that slowed down database access."
        ]
      },
      {
        title: "Senior .NET Developer", company: "Tata Consultancy Services",
        icon: "/img/companies/tcs.png",
        period: "Mar 2010 – Jul 2012", place: "Zonamérica, Montevideo", start: 2010, end: 2012,
        parallel: "Concurrent with Estudio Palma in 2010",
        highlights: ["Located the bug causing data inconsistencies and eliminated calculation complaints in a third-party web scheduling system."]
      },
      {
        title: "Developer", company: "Estudio Palma (accounting firm)",
        period: "Mar 2007 – Nov 2010", place: "Montevideo", start: 2007, end: 2010,
        parallel: "Concurrent with TCS in 2010",
        highlights: [
          "Automated the receipts module and a scheduled email notification system.",
          "UI improvements, change analysis and implementation, report design and integration. Scrum, .NET, Access."
        ]
      },
      {
        title: "Instructor", company: "Círculo Informático",
        period: "Feb 2006 – Feb 2008", place: "Minas, Canelones", start: 2006, end: 2008,
        highlights: ["Systems Analyst, Programmer, Web Developer, and PC & Network Repair programs."]
      },
      {
        title: "Developer and Database Administrator", company: "Lidertur S.A.",
        period: "Jul 2003 – Jan 2006", place: "Montevideo", start: 2003, end: 2006,
        highlights: ["Analysis and refactoring, database administration, maintenance of the receipts report generator and inventory control."]
      },
      {
        title: "Instructor", company: "ITM Instituto Técnico del Mercosur",
        period: "2002 – 2005", place: "several locations nationwide", start: 2002, end: 2005,
        parallel: "Concurrent with Lidertur",
        highlights: ["Basic computer use, MS Office, PC repair and graphic design."]
      },
      {
        title: "Sales Advisor", company: "IT products and services",
        period: "1996 – 2001", place: "Montevideo", start: 1996, end: 2001,
        highlights: ["Sales, training and public relations."]
      }
    ],

    projects: [
      {
        id: "kds",
        name: "KDSuy",
        description: "Site for a kitchen and process system for pizzerias, published on GitHub Pages.",
        url: "https://github.com/AlejandroParada/kds-web",
        demo: "https://alejandroparada.github.io/kds-web/",
        period: "Aug 2026",
        featured: true,
        detail: {
          kicker: "Repository kds-web",
          lead: "The public repository is the product website: a kitchen and process system aimed at pizzerias.",
          items: [
            "It is built with TypeScript, Tailwind CSS and esbuild, and it is published on GitHub Pages.",
            "It includes a service worker, Jest tests and a build that runs on GitHub Actions.",
            "The site presents the product plans and can be opened on a phone."
          ],
          stack: ["TypeScript", "Tailwind CSS", "esbuild", "Jest", "Service worker", "GitHub Pages"]
        }
      },
      {
        id: "animoreader",
        name: "AnimoReader",
        description: "PWA for putting a state of mind into one sentence and imagining someone else's.",
        url: "https://github.com/AlejandroParada/AnimoReader",
        demo: "https://alejandroparada.github.io/AnimoReader/",
        period: "Oct 2026",
        featured: true,
        detail: {
          kicker: "Repository AnimoReader",
          lead: "An installable app for writing your own state of mind in one sentence and trying to imagine another person's.",
          items: [
            "It is a PWA in HTML, CSS and JavaScript, with a manifest and a service worker.",
            "It stores the light or dark theme and the text size on the device.",
            "It can be installed from the phone browser."
          ],
          stack: ["HTML", "CSS", "JavaScript", "PWA", "Service worker"]
        }
      },
      {
        id: "survey-pilot",
        name: "Survey Pilot",
        description: "Django app for managing surveys, with roles and payments to field agents.",
        url: "https://github.com/AlejandroParada/survey_pilot",
        period: "Jan 2026",
        featured: true,
        detail: {
          kicker: "Repository survey_pilot",
          lead: "A web app for creating surveys and following results, with separate permissions for administration, a company and a field agent.",
          items: [
            "The backend is Django and the database is PostgreSQL.",
            "The interface uses Tailwind CSS and Flowbite.",
            "It starts with Docker Compose.",
            "Each survey is configured in JSON, without rewriting the form."
          ],
          stack: ["Django", "PostgreSQL", "Tailwind CSS", "Flowbite", "Docker"]
        }
      },
      {
        id: "tesoros",
        name: "Tesoros de Mi Alma",
        description: "Digital book in Spanish, English and Portuguese, with dark mode and text size.",
        url: "https://github.com/AlejandroParada/TesorosDeMiAlma",
        demo: "https://alejandroparada.github.io/TesorosDeMiAlma/",
        demoLabel: "Read the book",
        period: "Sep 2026",
        featured: true,
        detail: {
          kicker: "Repository TesorosDeMiAlma",
          lead: "A digital book for reading on a phone or a desktop, without frameworks.",
          items: [
            "The same content is available in Spanish, English and Portuguese.",
            "It includes dark mode, text-size control and keyboard navigation.",
            "Chapters load from Markdown and the book can be read on the published site."
          ],
          stack: ["HTML", "CSS", "JavaScript", "Markdown"]
        }
      },
      {
        id: "checklist",
        name: "ChecklistEmergencia",
        description: "Emergency-preparedness PWA for Barrio Los Ceibos.",
        url: "https://github.com/AlejandroParada/Checklistemergencia",
        demo: "https://alejandroparada.github.io/Checklistemergencia/",
        demoLabel: "Open the guide",
        period: "Jul 2026",
        featured: true,
        detail: {
          kicker: "Repository Checklistemergencia",
          lead: "An interactive guide for preparing a household: stages, a first-aid kit, contacts, supplies and what to do in each case.",
          items: [
            "It is a PWA in HTML, CSS and JavaScript, with a manifest and a service worker.",
            "The content is written for Barrio Los Ceibos."
          ],
          stack: ["HTML", "CSS", "JavaScript", "PWA"]
        }
      },
      {
        name: "Sistemas HE", company: "Mutualista Hospital Evangélico", icon: "/img/companies/evangelico.png", period: "Jun 2019 – present",
        description: "Systems for Mutualista Hospital Evangélico.", url: "", featured: true
      },
      {
        name: "Electrosistemas SSGO", company: "Electrosistemas SA", icon: "/img/companies/electrosistemas.png", period: "Aug 2015 – Mar 2017",
        description: "Petty cash, fuel, logistics scheduling, personnel records, mobile fence claims and cost modules.", url: "", featured: true
      },
      {
        name: "Numina JTech", company: "Númina S.A.", icon: "/img/companies/numina.png", period: "Dec 2014 – Mar 2015",
        description: "E-commerce website.", url: ""
      },
      {
        name: "Grupo Record", company: "Númina S.A.", icon: "/img/companies/numina.png", period: "Apr 2014 – Jan 2015",
        description: "Wholesale sales website for hardware stores.", url: ""
      },
      {
        name: "McKesson – HzERM", company: "Tata Consultancy Services", icon: "/img/companies/tcs.png", period: "Aug 2010 – Jan 2011",
        description: "United States client. Hybrid legacy system. Fixed defects and optimized queries. Zonamérica, Montevideo.", url: "", featured: true
      },
      {
        name: "PricewaterhouseCoopers – AOS Hosteling", company: "Tata Consultancy Services", icon: "/img/companies/tcs.png", period: "2010",
        description: "United States client. Migration of a legacy dBase and WinForms system to WPF, toward a more web-based distributed system. Montevideo.", url: "", featured: true
      },
      {
        name: "PricewaterhouseCoopers – Tracker", company: "Tata Consultancy Services", icon: "/img/companies/tcs.png", period: "2010",
        description: "United States client. Migration of a legacy dBase and WinForms system to WPF, toward a more web-based distributed system. Montevideo.", url: "", featured: true
      },
      {
        name: "Estudio Palma – IRPF Manager System", company: "Estudio Palma", period: "2007 – 2009",
        description: "Personal income tax (IRPF) management system.", url: ""
      },
      {
        name: "Lidertur S.A. – CATV Installation Inventory Manager", company: "Lidertur S.A.", period: "2005 – 2007",
        description: "Cable TV installation inventory management.", url: ""
      }
    ],

    /* Each course is plain text or cert(id, texts): the latter open their detail in the panel. */
    certs: {
      "DevOps (IBM, 2026)": [
        cert("ibm-contenedores", {
          featured: true,
          name: "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
          learned: [
            "Use containers to quickly move applications across any environment.",
            "Build cloud native applications using Docker, Kubernetes, OpenShift and Istio.",
            "Describe and leverage the Kubernetes architecture to manage the full container lifecycle.",
            "Create YAML deployment files to declaratively configure pods, services, replicasets and other resources."
          ],
          skills: [
            "Docker", "Kubernetes", "OpenShift", "Containers", "Microservices", "Cloud native",
            "Cloud deployment", "Application deployment", "DevOps", "YAML", "Scalability", "Command line"
          ]
        }),
        cert("ibm-agile-scrum", {
          featured: true,
          name: "Introduction to Agile Development and Scrum",
          learned: [
            "Adopt the 5 Agile practices, a subset of DevOps: small batches, minimum viable product, pair programming, and behavior- and test-driven development.",
            "Write good user stories, estimate and assign story points, and track stories on a kanban board. Incorporate Scrum artifacts, events and benefits.",
            "Create and refine a product backlog through sprint planning and produce potentially shippable increments in every iteration.",
            "Create burndown charts to forecast meeting the sprint goal and use metrics to improve performance, productivity and customer satisfaction."
          ],
          skills: [
            "Agile methodology", "Scrum", "Sprint planning", "Agile software development", "Lean methodologies",
            "User stories", "Backlogs", "Sprint retrospectives", "Workflow management",
            "Performance metrics", "Performance measurement", "Teamwork"
          ]
        }),
        cert("ibm-devops", {
          featured: true,
          name: "Introduction to DevOps",
          learned: [
            "The essential characteristics of DevOps: a culture of shared responsibility, transparency and embracing failure.",
            "The importance of continuous integration and delivery, infrastructure as code, and test- and behavior-driven development.",
            "Key DevOps concepts: software engineering practices, cloud native microservices, automated continuous deployments and resilient code.",
            "The organizational impact of DevOps: breaking down silos, working in cross-functional teams and sharing responsibilities."
          ],
          skills: [
            "DevOps", "Continuous integration", "Infrastructure as code (IaC)", "Behavior-driven development (BDD)",
            "Microservices", "Cloud native", "Cloud architecture", "Agile methodology", "Scrum",
            "Cross-functional collaboration", "Organizational structure", "Performance metrics"
          ]
        })
      ],
      "Applied AI (Sololearn, 2026)": [
        cert("sl-ia-pensamiento-critico", { name: "Critical Thinking in the Age of AI" }),
        cert("sl-ia-mentalidad", { name: "Growth Mindset in the Age of AI" }),
        cert("sl-ia-producto-ux", { name: "AI-Powered Product & UX" }),
        cert("sl-ia-sesgos", { name: "Detecting and Mitigating Bias in AI Systems" }),
        cert("sl-ia-agenticos", { name: "Agentic Workflows" }),
        cert("sl-ia-seo", { name: "SEO with AI" }),
        cert("sl-ia-planificacion", { name: "Project Planning with AI" }),
        cert("sl-ia-marketing", { name: "Social Media Marketing with AI" }),
        cert("sl-ia-escribir", { name: "Writing with AI" }),
        cert("sl-ia-pruebas-ab", { name: "AI-Powered A/B Testing" }),
        cert("sl-ia-prompts", { name: "Prompt Engineering" }),
        cert("sl-ia-aprendizaje-automatico", { name: "Machine Learning Fundamentals" }),
        cert("sl-ia-llms", { name: "Introduction to LLMs" }),
        cert("sl-ia-etica", { name: "Ethical AI Fundamentals" }),
        cert("sl-ia-investigacion", { name: "Research with AI" }),
        cert("sl-ia-visualizacion", { name: "Visualize Your Data" }),
        cert("sl-ia-alfabetizacion", { name: "Data Literacy with AI" }),
        cert("sl-ia-analisis-datos", { name: "Data Analysis with AI" }),
        cert("sl-ia-creatividad", { name: "Think Creatively with AI" }),
        cert("sl-ia-lluvia-ideas", { name: "Brainstorming with AI" }),
        cert("sl-ia-generativa", { name: "Generative AI in Practice" })
      ],
      "Business (HP LIFE, 2026)": [
        cert("hp-tecnologia-negocios", {
          name: "IT for Business Success",
          summary: "Choose the best technology for the company and successfully integrate technology solutions into the business."
        }),
        cert("hp-planificacion-ia", {
          name: "Strategic Planning in the Age of AI",
          summary: "Use strategic planning to make better business decisions in an AI-driven world; learn the key components of a strategic plan; evaluate practical planning frameworks and use AI tools for strategic thinking."
        }),
        cert("hp-sitios-web", {
          name: "Effective Business Websites",
          summary: "Apply the best development techniques to design a business website, understand customer behavior and use website metrics effectively."
        }),
        cert("hp-motores-crecimiento", {
          name: "Growth Engines",
          summary: "Identify the four parts of a growth engine, build a growth engine for a new situation and generate growth ideas for your own business."
        }),
        cert("hp-pequeno-negocio", {
          name: "Starting a Small Business",
          summary: "Use entrepreneurial thinking to start a business, create a business plan and develop metrics to measure the company's success."
        }),
        cert("hp-economia-circular", {
          name: "Circular Economy",
          summary: "The basic principles of the circular economy, why it matters in today's world and the ways businesses can incorporate it into their business models."
        }),
        cert("hp-mentalidad-exitosa", {
          name: "Success Mindset",
          summary: "Develop a success mindset, create a vision, goals and a plan for success, and build good business habits for a successful future."
        }),
        cert("hp-planificacion-estrategica", {
          name: "Strategic Planning",
          summary: "Develop a SWOT analysis (strengths, weaknesses, opportunities and threats) and use its results to select the most effective strategies for business success."
        }),
        cert("hp-propuesta-valor", {
          name: "Unique Value Proposition",
          summary: "Define and create a unique value proposition, explain why it matters for any business, understand its key components and evaluate competitors' value propositions."
        }),
        cert("hp-experiencia-cliente", {
          name: "Customer Experience (CX) for Business Success",
          summary: "Define customer centricity and its role in business strategy, recognize promoters and detractors, explore the relationship between NPS and business results, and listen to customers with empathy."
        }),
        cert("hp-ciberseguridad", {
          name: "Introduction to Cybersecurity Awareness",
          summary: "Common cybersecurity threats and basic ways to protect information security and data online."
        }),
        cert("hp-ciencia-datos", {
          name: "Data Science & Analytics",
          summary: "The main data science and analytics practices, methodologies and tools; the benefits and challenges of a data-driven business approach, and core skills for a career in the field."
        }),
        cert("hp-destrezas-digitales", {
          name: "Introduction to Digital Business Skills",
          summary: "The basic concepts and key drivers of the digital economy, five digital ways of working for business transformation, and the practices, tools and skills needed to succeed in the digital age."
        }),
        cert("hp-liderazgo", {
          name: "Effective Leadership",
          summary: "Effective leadership and why it matters, how to leverage different leadership strategies and why ethics plays a role in effective leadership."
        }),
        cert("hp-agile", {
          name: "Agile Project Management",
          summary: "Define the minimum viable product, distinguish iterative from incremental development, analyze the benefits and limitations of Agile tools such as Scrum and Kanban, and apply agile practices in project management."
        }),
        cert("hp-ia-negocios", {
          name: "AI for Business Professionals",
          summary: "The role of AI in business, the difference between standalone AI tools and built-in features, how to write effective prompts, the ethical use of AI and how to use it for career growth."
        }),
        cert("hp-redes-profesionales", {
          name: "Professional Networking for Career Growth",
          summary: "Why networking matters for your career, practical strategies to do it, the role of personal branding, and digital tools to grow your professional network with confidence."
        }),
        cert("hp-pensamiento-critico", {
          name: "Critical Thinking in the Age of AI",
          summary: "Use critical thinking to make better decisions, understand how AI-generated content can distort reality, counter the impact of bias and verify the accuracy of information."
        })
      ],
      "Programming (Sololearn, 2017)": [
        cert("sl-php", { name: "PHP" }),
        cert("sl-csharp", { name: "C#" }),
        cert("sl-javascript", { name: "JavaScript" }),
        cert("sl-jquery", { name: "jQuery" }),
        cert("sl-html", { name: "HTML" }),
        cert("sl-python", { name: "Python Core" })
      ],
      "Programming & Quality": [
        cert("sl-responsive", { name: "Responsive Web Design (2022)" }),
        "TDP .NET, Tata Consultancy Services (2011)",
        "Microsoft DCE2005 3 Stars (2012)",
        { name: "Risk Analysis and Management (UNIT-ISO/IEC 27005)", featured: true },
        { name: "Quality Audits (UNIT-ISO)", featured: true }
      ]
    },

    education: [
      {
        title: "Brigham Young University – Idaho",
        meta: "Bachelor's in Business Administration and Management, Entrepreneurship · online · Jan 2026 – present",
        featured: true
      },
      { title: "Instituto BIOS Uruguay", meta: "Information Security Technician · 2019", featured: true },
      { title: "Uruguayan Institute of Technical Standards (UNIT)", meta: "Introduction to Lean Management · 2017" },
      { title: "Professional Ontological Coaching Association of Uruguay (ACOP)", meta: "NLP applied to coaching, Ontological Coaching · 2017" },
      { title: "Uruguayan Institute of Technical Standards (UNIT)", meta: "Coaching tools, Ontological Coaching · 2017" },
      { title: "Uruguayan Institute of Technical Standards (UNIT)", meta: "Team coaching, Ontological Coaching · 2017" },
      { title: "Uruguayan Institute of Technical Standards (UNIT)", meta: "Change management · 2017" },
      { title: "UNIT-ISO", meta: "ISMS Specialist ISO/IEC 27000, information security · 2012" },
      { title: "UNIT-ISO", meta: "QMS Specialist, ISO 9001:2008 · 2012" },
      { title: "Alianza Uruguay-EEUU", meta: "First Certificate, English (preparation course) · 2012" },
      { title: "Anglo-Uruguay", meta: "Upper Intermediate, English · 2011" },
      { title: "Tata Consultancy Services", meta: "Business Intelligence · 2011" },
      { title: "Netgate", meta: "Telework E-business · 2008" },
      { title: "Universidad ORT Uruguay", meta: "Programmer Analyst, IT Development · 2000 – 2004", featured: true },
      {
        title: "Volunteer: full-time missionary",
        meta: "The Church of Jesus Christ of Latter-day Saints · 1994–1996 · Concepción, Chile"
      }
    ],

    languages: [
      "Spanish: native/bilingual",
      "English: limited working proficiency (First Certificate in English, Anglo Uruguay)"
    ]
  });
})(window.CV = window.CV || {});
