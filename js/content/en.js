/* CV content in English. Translation of js/content/es.js (base language): keep both in sync. */
(function (CV) {
  "use strict";

  const { cert } = CV;

  CV.data = Object.freeze({
    skills: {
      "Backend": ["C#", ".NET 10", "ASP.NET Core", "EF Core", "xUnit", ".NET Framework", "ASP.NET MVC", "REST APIs", "Web services", "Python", "Django"],
      "Data": ["PostgreSQL", "SQL Server", "SQLite", "Database synchronization", "Query optimization", "MS Access"],
      "Frontend": ["JavaScript", "Responsive HTML & CSS", "AngularJS"],
      "DevOps": ["Docker", "GitHub Actions", "Linux", "Git", "Bitbucket", "SVN"],
      "Methods": ["Legacy system modernization", "Scrum", "Nopcommerce", "ISO 9000", "Quality auditing"]
    },

    /* start/end: years used to group by decade. end: null = present. */
    jobs: [
      {
        title: "Senior Software Developer", company: "Farmacias Pigalle",
        icon: "/img/companies/pigalle.png",
        period: "Apr 2023 – Apr 2026", place: "Montevideo", start: 2023, end: 2026, featured: true,
        context: { maturity: 1, maturityTo: 3, mode: "hybrid", team: 2 },
        highlights: [
          "Replaced the unsupported VB6 desktop counter and its obsolete libraries with a web application used in more than 20 branches.",
          "Each branch records 300 to 500 transactions a day. If the network drops, the sale continues locally and syncs with headquarters when the connection returns.",
          "I proposed keeping the business logic in C# on .NET Framework 4.7.2 so it stayed compatible with third-party DLLs, with a Django frontend and Linux terminals.",
          "I implemented and tested, on my machine, an assistant with Ollama, Ollama-WebUI-Lite and Llama 3.2 1B, to check whether a medication had an update or a new one had come in. It did not reach the branches.",
          "I moved the code to Git on an Azure server, where the changes were pushed. I pinned DLL versions with a local catalog, left editor templates and rules for a shared code style, and moved builds and publishing to containers on the company server."
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
                "The repository lived on an Azure server, and the changes were pushed there.",
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
              title: "Local LLM trial",
              paragraphs: [
                "The aim was an assistant on the branch site: to answer whether a medication had an update available or a new one had come in. I implemented it and tested it on my machine. It did not reach branch operations."
              ],
              items: [
                "Ollama ran in a Docker container, without an external service. I implemented and tested it through Ollama-WebUI-Lite.",
                "The model was Llama 3.2 1B, lightweight enough for the machine it ran on."
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
          stack: ["C#", ".NET Framework 4.7.2", "REST API", "Django", "Python", "Metro UI", "Linux", "Containers", "SQL Server", "Git", "Azure server", "Ollama", "Ollama-WebUI-Lite", "Llama 3.2 1B"]
        }
      },
      {
        title: "Software Engineer", company: "Netviax Solutions",
        icon: "/img/companies/netviax.png",
        period: "Feb 2022 – Feb 2023", place: "Montevideo", start: 2022, end: 2023, featured: true,
        context: { maturity: 3, mode: "hybrid", teamMore: 3 },
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
          "Improved the response time of the flights stored procedure. The AngularJS frontend ran on a microservice, with Redis, and the container went to production after local testing. The code was versioned on Bitbucket."
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
                "The service ran in a Docker container. It was tested locally and, when it met the requirements, the container went to production.",
                "The code was versioned in Git, with the repositories on Bitbucket."
              ]
            }
          ],
          stack: ["AngularJS", "JavaScript", "Redis", "Docker", "Microservice", "Payment gateway", "Git", "Bitbucket"]
        }
      },
      {
        gap: true,
        featured: true,
        period: "Mar 2020 – Feb 2022",
        start: 2020,
        end: 2022,
        note: "Between Hospital Evangélico and Netviax the return to work was slow: the pandemic was global. In that interval I did occasional remote work."
      },
      {
        title: "Developer", company: "Mutualista Hospital Evangélico",
        icon: "/img/companies/evangelico.png",
        period: "Jun 2019 – Mar 2020", place: "Montevideo", start: 2019, end: 2020, featured: true,
        context: { maturity: 2, mode: "onsite", team: 4 },
        highlights: [
          "The system covered the whole hospital. Every consulting room looked up the clinical record. The stored procedure read and modified tables and, when it modified them, locked the whole table. With several rooms at once, the system stayed blocked until the table was released.",
          "I moved the lock from the table to the record (row-level locking). If a record was in use, others could still read it, and only that record stayed blocked until it was released. That resolved the system lock.",
          "Developed a monitoring script for web service failures. The outage that remained each day came from operating-system updates. I identified it with that monitoring and coordinated it with IT support: they notify about the update or leave the system off until it finishes, when the whole hospital has two or three occasional queries.",
          "Solved database synchronization issues for medical supplies.",
          "Identified the cause of network access failures on outdated clients."
        ],
        caseStudy: {
          kicker: "Monitoring and bug replay",
          hint: "C# screen captures, a Zabbix dashboard, and Bash audits.",
          lead: "I added a C# module to replay failures from screen captures, plus Zabbix and Bash monitoring for outages, the database, and slow processes.",
          metrics: [
            { value: "Per record", label: "lock instead of the whole table" },
            { value: "Hospital", label: "clinical record in every consulting room" },
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
                "I built a dashboard integration with Zabbix to watch for system outages, database overload, and bottlenecks.",
                "When a clinical record was queried, the stored procedure read and modified some tables. Modifying them locked the whole table. If several consulting rooms accessed it at once, the system stayed blocked until the table was released. In a large hospital, that multiplied across the queries from every room.",
                "I fixed it by locking the record instead of the table. If a record was in use, no one else could modify it until it was released, and reading that record was still allowed. That resolved the system lock.",
                "The outage that remained each day came from operating-system updates. I identified it with the monitoring and coordinated it with IT support: they notify about the update or leave the system off until it finishes, when the whole hospital has two or three occasional queries, so operations are not affected."
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
        context: { maturity: 3, mode: "hybrid", teamMore: 4 },
        clients: [
          { name: "EY", url: "https://www.ey.com/", icon: "/img/clients/ey.png" }
        ],
        highlights: [
          "Provided support and development for the EY website. I fixed JavaScript and HTML in custom modules shared by the regional pages.",
          "Repaired the CMS document section that failed to render, a complaint raised by several countries.",
          "Found a root cause of database access bottlenecks."
        ],
        caseStudy: {
          kicker: "Support and development for EY",
          hint: "Custom JavaScript and HTML modules, and the CMS document section.",
          lead: "At 1950Labs I worked on EY's public website. The support was on custom modules shared by each country's pages.",
          metrics: [
            { value: "EY.com", label: "regional pages on the same site" },
            { value: "JS and HTML", label: "fixes in custom modules" },
            { value: "CMS", label: "document management inside the site" },
            { value: "Several countries", label: "reported the section that did not render" }
          ],
          sections: [
            {
              title: "Client",
              showClients: true,
              paragraphs: [
                "The work was support and development for EY, on the site each country publishes."
              ]
            },
            {
              title: "Custom modules",
              paragraphs: [
                "The pages run on Adobe Experience Manager. On top of that sits EY Unified Platform, a custom layer of interface modules written for this site.",
                "Each module has its own HTML and JavaScript. A defect in that code showed up on the regional pages, because they all load the same library."
              ]
            },
            {
              title: "Documents that failed to render",
              paragraphs: [
                "The CMS stores the site's documents, and one section displays them on the page with the PDF viewer.",
                "That section did not render correctly. The complaint came from several countries. The fix was in the HTML and JavaScript of that module."
              ]
            },
            {
              title: "Data access",
              paragraphs: [
                "Alongside the front-end work, I found a root cause of database access bottlenecks."
              ]
            },
            {
              title: "Delivery",
              paragraphs: [
                "The client reported the front-end defects and QA verified them."
              ]
            }
          ],
          stack: ["JavaScript", "HTML", "Adobe Experience Manager", "EY Unified Platform"]
        }
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
        context: { maturity: 1, maturityTo: 2, mode: "onsite", team: 2 },
        highlights: [
          "Electrosistemas had its own ERP, written in Visual Basic and connected to SQL Server.",
          "I implemented SMS reporting of fuel loads for a fleet of 5 work trucks and 3 pickups. It tracked loads on trips inland and made the estimated expenses more accurate for crews on jobs across Uruguay's departments.",
          "I optimized an ERP query that took minutes to gather and process the data. It then resolved in a few seconds.",
          "I introduced the petty cash system, cutting calculation time by more than half.",
          "I put the ERP code in SVN, the version-control tool in use at the time, and documented it. Every change was tested before it reached production."
        ]
      },
      {
        title: "Fullstack .NET Developer", company: "Númina S.A.",
        icon: "/img/companies/numina.png",
        period: "Mar 2013 – Apr 2015", place: "Montevideo", start: 2013, end: 2015, featured: true,
        context: { maturity: 4, mode: "onsite", team: 2 },
        clients: [
          { name: "JTech", url: "https://jtech.com.uy/", icon: "/img/clients/jtech.png" },
          { name: "Grupo Record", url: "https://gruporecord.com.uy/", icon: "/img/clients/gruporecord.png" }
        ],
        highlights: [
          "Implemented a universal migration system to the Nopcommerce web platform for the ERP projects. Four clients ended up on that platform, each with the interface adapted to what they wanted to show.",
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
            { value: "4", label: "clients, each with its own interface" }
          ],
          sections: [
            {
              title: "Clients",
              showClients: true,
              paragraphs: [
                "Four clients ran on that platform. JTech and Grupo Record are two of them. In each case I adapted the interface, because each one wanted to show different information."
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
        context: { maturity: 2, mode: "onsite", team: 2 },
        highlights: [
          "I worked on Assist's configurable CMS, on SQL Server: part of it was VB6 desktop forms and part was Visual FoxPro. Database queries returned Crystal Reports, including for the Palm devices of that time.",
          "I designed custom queries for supply chain clients, eliminating complaints about missing data.",
          "I fixed HTML issues, stored procedure errors and the output format of those reports.",
          "I identified the bug that slowed down database access."
        ]
      },
      {
        title: "Senior .NET Developer", company: "Tata Consultancy Services",
        icon: "/img/companies/tcs.png",
        period: "Mar 2010 – Jul 2012", place: "Zonamérica, Montevideo", start: 2010, end: 2012,
        context: { maturity: 5, mode: "onsite", teamMore: 4 },
        parallel: "Concurrent with Estudio Palma in 2010",
        highlights: [
          "I debugged HzERM, the VB6 system McKesson used to run a hospital network across several US states. I fixed errors in the SQL Server queries, many of them stored procedures, inside UI event handlers that ran to hundreds of lines.",
          "On PwC's AOS Hosteling I fixed defects and designed the WinForms screens. The system booked corporate offices in New York, in a setup close to coworking. Tracker, in WPF, managed the annual taxes required in the United States.",
          "Located the bug causing data inconsistencies and eliminated calculation complaints in a third-party web scheduling system.",
          "On Tracker, a UI defect had passed through several developers and no one could find the cause. It was a syntax error in the XAML: a comma passed a parameter in the wrong place. Correcting it made the interface work again."
        ]
      },
      {
        title: "Developer", company: "Estudio Palma (accounting firm)",
        period: "Mar 2007 – Nov 2010", place: "Montevideo", start: 2007, end: 2010,
        context: { maturity: 1, maturityTo: 2, mode: "onsite", team: 2 },
        parallel: "Concurrent with TCS in 2010",
        highlights: [
          "Automated the receipts module and the scheduled email notifications, with a WinForms desktop interface, in a Scrum process.",
          "Debugged the code in Visual Studio .NET and reorganized the ERP databases: I upgraded Access with ADO and ODBC and integrated reports in Crystal Reports and Excel. I used C#, Visual Basic 6.0 and Visual Basic .NET, on Windows XP and Windows Server 2008.",
          "I made backups of the code and the databases of the firm's ERP. The code stayed in SVN and the system was documented."
        ]
      },
      {
        title: "Instructor", company: "Círculo Informático",
        period: "Feb 2006 – Feb 2008", place: "Minas, Canelones", start: 2006, end: 2008,
        highlights: ["I taught the Systems Analyst, Programmer and Web Developer programs, and the PC and Network Repair course."],
        caseStudy: {
          kicker: "Topics I taught",
          hint: "Subjects in the programs and in the repair course.",
          lead: "At Círculo Informático I taught those programs and the repair course. The syllabus covered design, web and desktop development, databases and PC operation.",
          metrics: [
            { value: "Analyst", label: "Systems Analyst" },
            { value: "Programmer", label: "technical program" },
            { value: "Web", label: "Web Developer" },
            { value: "Repair", label: "PC and networks" }
          ],
          sections: [
            {
              title: "Design and multimedia",
              paragraphs: [
                "I taught 3D multimedia animation and graphic design, and I used FrontPage and Dreamweaver to build pages."
              ]
            },
            {
              title: "Programming",
              paragraphs: [
                "In programming I covered requirements definition, technical specifications, graphical interface development, code debugging and systems integration. The environments were Visual Studio .NET, Eclipse and NetBeans, with C# and Java."
              ]
            },
            {
              title: "Web development",
              paragraphs: [
                "On the web I taught HTML, XHTML, CSS, DHTML, JavaScript and jQuery, and also PHP, Drupal and Ruby on Rails."
              ]
            },
            {
              title: "Systems and operation",
              paragraphs: [
                "I also taught SQL, Linux, Windows XP, Microsoft Office and PC operation, together with PC and network repair."
              ]
            }
          ]
        }
      },
      {
        title: "Developer and Database Administrator", company: "Lidertur S.A.",
        period: "Jul 2003 – Jan 2006", place: "Montevideo", start: 2003, end: 2006,
        context: { maturity: 1, maturityTo: 2, mode: "onsite", team: 2 },
        highlights: [
          "Analysis and refactoring, database administration, maintenance of the receipts report generator and inventory control.",
          "The report generator and inventory control were documented, with the code in SVN —the version-control tool in use at the time— and a backup of the code and the database."
        ]
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
        id: "offlinesync-pos",
        name: "OfflineSync POS",
        description: "Offline-first sales sync API in .NET 10, with idempotent endpoints and CI.",
        url: "https://github.com/AlejandroParada/offlinesync-pos",
        period: "Nov 2026",
        featured: true,
        detail: {
          kicker: "Repository offlinesync-pos",
          lead: "Public prototype of a branch that keeps selling without a network and syncs to head office without duplicating the sale.",
          items: [
            "Each sale carries an idempotency key created at the branch and stored in a SQLite outbox.",
            "The ASP.NET Core API accepts the batch. Sending it again does not move stock a second time.",
            "If on-hand stock is not enough, the sale is still accepted and a negative-stock discrepancy is recorded.",
            "PostgreSQL with EF Core, xUnit and Testcontainers tests, and GitHub Actions CI with a Docker image."
          ],
          stack: [".NET 10", "ASP.NET Core", "EF Core", "PostgreSQL", "SQLite", "xUnit", "Testcontainers", "Docker", "GitHub Actions"]
        }
      },
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
        name: "Sistemas HE", company: "Mutualista Hospital Evangélico", icon: "/img/companies/evangelico.png", period: "Jun 2019 – Mar 2020",
        description: "Systems for Mutualista Hospital Evangélico.", url: "", featured: true
      },
      {
        name: "Electrosistemas SSGO", company: "Electrosistemas SA", icon: "/img/companies/electrosistemas.png", period: "Aug 2015 – Mar 2017",
        description: "Petty cash, SMS fuel reporting, logistics scheduling, personnel records, mobile fence claims and cost modules.", url: "", featured: true
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
        description: "United States client. VB6 system for a hospital network across several states. I fixed SQL Server queries, many of them stored procedures, and UI events hundreds of lines long. Zonamérica, Montevideo.", url: "", featured: true
      },
      {
        name: "PricewaterhouseCoopers – AOS Hosteling", company: "Tata Consultancy Services", icon: "/img/companies/tcs.png", period: "2010",
        description: "United States client. PwC schedule for booking corporate offices in New York, close to coworking. I fixed defects and designed the WinForms screens. Montevideo.", url: "", featured: true
      },
      {
        name: "PricewaterhouseCoopers – Tracker", company: "Tata Consultancy Services", icon: "/img/companies/tcs.png", period: "2010",
        description: "United States client. PwC tool for managing the annual taxes required in the United States. I fixed a XAML syntax error in WPF: a comma passed a parameter in the wrong place. Montevideo.", url: "", featured: true
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
        cert("sl-ia-prompts", { name: "Prompt Engineering", featured: true }),
        cert("sl-ia-aprendizaje-automatico", { name: "Machine Learning Fundamentals", featured: true }),
        cert("sl-ia-llms", { name: "Introduction to LLMs", featured: true }),
        cert("sl-ia-etica", { name: "Ethical AI Fundamentals" }),
        cert("sl-ia-investigacion", { name: "Research with AI" }),
        cert("sl-ia-visualizacion", { name: "Visualize Your Data" }),
        cert("sl-ia-alfabetizacion", { name: "Data Literacy with AI" }),
        cert("sl-ia-analisis-datos", { name: "Data Analysis with AI" }),
        cert("sl-ia-creatividad", { name: "Think Creatively with AI" }),
        cert("sl-ia-lluvia-ideas", { name: "Brainstorming with AI" }),
        cert("sl-ia-generativa", { name: "Generative AI in Practice", featured: true })
      ],
      "Business (HP LIFE, 2026)": [
        cert("hp-tecnologia-negocios", {
          featured: true,
          name: "IT for Business Success",
          summary: "Choose the best technology for the company and successfully integrate technology solutions into the business."
        }),
        cert("hp-planificacion-ia", {
          name: "Strategic Planning in the Age of AI",
          summary: "Use strategic planning to make better business decisions in an AI-driven world; learn the key components of a strategic plan; evaluate practical planning frameworks and use AI tools for strategic thinking."
        }),
        cert("hp-sitios-web", {
          featured: true,
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
          featured: true,
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
