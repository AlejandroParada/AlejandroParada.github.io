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
      learned: "Lo que aprendí",
      skills: "Habilidades",
      certificateAlt: (name) => `Certificado: ${name}`,
      jobCount: (n) => `${n} ${n === 1 ? "puesto" : "puestos"}`,
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
      learned: "What I learned",
      skills: "Skills",
      certificateAlt: (name) => `Certificate: ${name}`,
      jobCount: (n) => `${n} ${n === 1 ? "role" : "roles"}`,
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
