/* CV content in English. Translation of js/content/es.js (base language): keep both in sync. */
(function (CV) {
  "use strict";

  const { cert } = CV;

  CV.data = Object.freeze({
    skills: {
      "Backend": ["C#", ".NET", "ASP.NET MVC", "REST APIs", "Web services", "Laravel", "PHP", "Python", "Django"],
      "Data": ["SQL Server", "Query optimization", "Database synchronization", "MS Access"],
      "Frontend": ["JavaScript", "jQuery", "Angular", "Vue.js", "Bootstrap", "Responsive HTML & CSS"],
      "DevOps & AI": ["Docker", "Kubernetes (introductory)", "DevOps", "AI integration", "Prompt engineering", "Agentic workflows"],
      "Methods": ["Scrum", "Legacy system modernization", "ISO 9000", "Quality auditing", "Nopcommerce"]
    },

    /* start/end: years used to group by decade. end: null = present. */
    jobs: [
      {
        title: "Software Developer", company: "Farmacias Pigalle",
        period: "Apr 2026 – present", place: "Montevideo", start: 2026, end: null, featured: true,
        highlights: [
          "Leading the migration of a legacy system to a modern .NET architecture.",
          "Brought synchronization incidents with the medical supplies database down to zero (root cause analysis and query optimization).",
          "Building high-availability fullstack modules for daily operations.",
          "Stack: C#, .NET, SQL Server, REST APIs."
        ]
      },
      {
        title: "Software Engineer", company: "Netvias Solutions",
        period: "Feb 2022 – Dec 2023", place: "Montevideo", start: 2022, end: 2023, featured: true,
        highlights: ["Software factory for tourism and travel companies. Stack: Laravel and JavaScript."]
      },
      {
        title: "Developer", company: "Mutualista Hospital Evangélico",
        period: "Jun 2019 – Mar 2020", place: "Montevideo", start: 2019, end: 2020, featured: true,
        highlights: [
          "Solved database synchronization issues for medical supplies.",
          "Identified the cause of network access failures on outdated clients.",
          "Developed a monitoring script for web service failures."
        ]
      },
      {
        title: "Software Developer", company: "1650Labs",
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
        period: "May 2015 – Mar 2017", place: "Montevideo", start: 2015, end: 2017,
        highlights: [
          "Introduced the petty cash system, cutting calculation time by more than half.",
          "Optimized fleet fuel control by recording refills at service stations."
        ]
      },
      {
        title: "Fullstack .NET Developer", company: "Nómina S.A.",
        period: "Mar 2013 – Apr 2015", place: "Montevideo", start: 2013, end: 2015,
        highlights: [
          "Implemented a universal migration system to the Nopcommerce web platform for all ERP projects.",
          "Trained clients on the new platform."
        ]
      },
      {
        title: "Independent Quality Management Consultant", company: "Small businesses",
        period: "Apr 2012 – Dec 2018", place: "", start: 2012, end: 2018,
        parallel: "Concurrent with development roles",
        highlights: ["Process and cost analysis, method standardization, audits, reports and documentation (ISO 9000:2008)."]
      },
      {
        title: "Developer", company: "Assist",
        period: "2012 – 2013", place: "Montevideo", start: 2012, end: 2013,
        highlights: [
          "Designed custom queries for supply chain clients, eliminating complaints about missing data.",
          "Identified the bug that slowed down database access."
        ]
      },
      {
        title: "Senior .NET Developer", company: "Tata Consultancy Services",
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
      { name: "ChecklistEmergencia", description: "Emergency preparedness PWA for a congregation.", url: "" },
      { name: "KDSuy", description: "Kitchen display system (Django, Channels, Redis) for Uruguayan restaurants.", url: "" },
      {
        name: "Sistemas HE", company: "Mutualista Hospital Evangélico", period: "Jun 2019 – present",
        description: "Systems for Mutualista Hospital Evangélico.", url: "", featured: true
      },
      {
        name: "Electrosistemas SSGO", company: "Electrosistemas SA", period: "Aug 2015 – Mar 2017",
        description: "Petty cash, fuel, logistics scheduling, personnel records, mobile fence claims and cost modules.", url: "", featured: true
      },
      {
        name: "Numina JTech", company: "Nómina S.A.", period: "Dec 2014 – Mar 2015",
        description: "E-commerce website.", url: ""
      },
      {
        name: "Grupo Record", company: "Nómina S.A.", period: "Apr 2014 – Jan 2015",
        description: "Wholesale sales website for hardware stores.", url: ""
      },
      {
        name: "McKesson – HzERM", company: "Tata Consultancy Services", period: "Aug 2010 – Jan 2011",
        description: "Project for McKesson. Zonamérica, Montevideo.", url: "", featured: true
      },
      {
        name: "PricewaterhouseCoopers – AOS Hosteling", company: "Tata Consultancy Services", period: "2010",
        description: "Project for PricewaterhouseCoopers. Montevideo.", url: "", featured: true
      },
      {
        name: "PricewaterhouseCoopers – Tracker", company: "Tata Consultancy Services", period: "2010",
        description: "Project for PricewaterhouseCoopers. Montevideo.", url: "", featured: true
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
