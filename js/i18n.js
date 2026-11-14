/* Textos de interfaz por idioma. El idioma activo sale de <html lang>; el base es español. */
(function (CV) {
  "use strict";

  const STRINGS = {
    es: {
      locale: "es-UY",
      close: "Cerrar",
      moreDetails: "Ver más detalles",
      caseHint: "Arquitectura, operación en sucursal y continuidad.",
      solutionStack: "Stack de esta solución",
      showMore: "Ver más…",
      showLess: "Ver menos",
      openInNewTab: "Ver en una pestaña nueva",
      viewRepo: "Ver el repositorio",
      viewSite: "Ver el sitio",
      learned: "Lo que aprendí",
      skills: "Habilidades",
      certificateAlt: (name) => `Certificado: ${name}`,
      jobCount: (n) => `${n} ${n === 1 ? "puesto" : "puestos"}`,
      processLegend: "Prácticas de desarrollo presentes en el equipo: cuenta cuántas había, no si se hacían bien o mal. La flecha marca el nivel que dejé.",
      legendSummary: "Referencia de íconos",
      processLevels: [
        "Sin práctica formal",
        "Práctica básica",
        "Entornos y entregas ordenadas",
        "Revisión, integración y pruebas",
        "Proceso corporativo"
      ],
      modeOnsite: "Presencial",
      modeHybrid: "Híbrido",
      maturityLabel: (from, to) => to
        ? `Prácticas presentes: ${from} de 5 al llegar, ${to} de 5 al salir`
        : `Prácticas presentes: ${from} de 5`,
      teamLabel: (n, more) => more
        ? `Equipo de más de ${n} personas`
        : `Equipo de ${n} ${n === 1 ? "persona" : "personas"}`,
      teamLegendExact: "personas en el equipo",
      teamLegendMore: "más de 4 personas",
      teamCaseLabel: "personas realizaban el desarrollo",
      decade: (year) => `Años ${year}`,
      present: "hoy",
      hours: (n) => `≈ ${n} horas`,
      courseraCredential: "Certificado de curso verificado",
      hpLifeCredential: "Certificación de finalización",
      sololearnCredential: (id) => `Certificado de curso · ${id}`,
      sololearnSummary: (name, practical) =>
        `Curso completado demostrando comprensión ${practical ? "teórica y práctica" : "teórica"} de ${name}.`
    },
    en: {
      locale: "en-US",
      close: "Close",
      moreDetails: "See more details",
      caseHint: "Architecture, branch operations and continuity.",
      solutionStack: "Stack on this system",
      showMore: "See more…",
      showLess: "See less",
      openInNewTab: "Open in a new tab",
      viewRepo: "View repository",
      viewSite: "View the site",
      learned: "What I learned",
      skills: "Skills",
      certificateAlt: (name) => `Certificate: ${name}`,
      jobCount: (n) => `${n} ${n === 1 ? "role" : "roles"}`,
      processLegend: "Development practices present on the team: it counts how many were in place, not how well they were followed. The arrow marks the level I left.",
      legendSummary: "Icon key",
      processLevels: [
        "No formal practice",
        "Basic practice",
        "Separate environments and steady releases",
        "Review, integration and tests",
        "Corporate process"
      ],
      modeOnsite: "On-site",
      modeHybrid: "Hybrid",
      maturityLabel: (from, to) => to
        ? `Practices in place: ${from} of 5 on arrival, ${to} of 5 on leaving`
        : `Practices in place: ${from} of 5`,
      teamLabel: (n, more) => more
        ? `Team of more than ${n} people`
        : `Team of ${n} ${n === 1 ? "person" : "people"}`,
      teamLegendExact: "people on the team",
      teamLegendMore: "more than 4 people",
      teamCaseLabel: "people carried out the development",
      decade: (year) => `${year}s`,
      present: "present",
      hours: (n) => `≈ ${n} hours`,
      courseraCredential: "Verified course certificate",
      hpLifeCredential: "Certificate of completion",
      sololearnCredential: (id) => `Course certificate · ${id}`,
      sololearnSummary: (name, practical) =>
        `Course completed demonstrating ${practical ? "theoretical and practical" : "theoretical"} understanding of ${name}.`
    }
  };

  const lang = (document.documentElement.lang || "es").slice(0, 2).toLowerCase();
  const strings = STRINGS[lang] || STRINGS.es;
  const dateFormat = new Intl.DateTimeFormat(strings.locale, { dateStyle: "long", timeZone: "UTC" });

  CV.lang = STRINGS[lang] ? lang : "es";
  CV.strings = Object.freeze(strings);
  /* Fechas ISO (AAAA-MM-DD) a texto largo en el idioma activo. */
  CV.formatDate = (iso) => (iso ? dateFormat.format(new Date(`${iso}T00:00:00Z`)) : "");
})(window.CV = window.CV || {});
