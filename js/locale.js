/* Idioma según el país de la visita. Los países de habla hispana ven español;
   el resto, inglés. Una elección manual (el enlace de idioma) tiene prioridad. */
(function () {
  "use strict";

  const KEY = "cv-lang";
  const root = document.documentElement;
  const current = (root.lang || "es").slice(0, 2).toLowerCase();
  const SPANISH = new Set([
    "AR", "BO", "CL", "CO", "CR", "CU", "DO", "EC", "ES", "GQ",
    "GT", "HN", "MX", "NI", "PA", "PE", "PR", "PY", "SV", "UY", "VE"
  ]);

  const storage = {
    get() {
      try { return localStorage.getItem(KEY); } catch { return null; }
    },
    set(value) {
      try { localStorage.setItem(KEY, value); } catch { /* almacenamiento no disponible */ }
    }
  };

  /* Rutas relativas: los hreflang del documento son absolutos para los buscadores. */
  const pageHref = (lang) => (lang === "en" ? "en/" : "../");

  const show = () => root.classList.remove("lang-pending");

  const go = (lang) => {
    if (lang === current) {
      show();
      return;
    }
    const href = pageHref(lang);
    if (!href) {
      show();
      return;
    }
    location.replace(href);
  };

  /* El clic en Español o English guarda la elección antes de navegar. */
  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[hreflang]");
    if (!link) return;
    const lang = (link.getAttribute("hreflang") || "").slice(0, 2).toLowerCase();
    if (lang === "es" || lang === "en") storage.set(lang);
  });

  const saved = storage.get();
  if (saved === "es" || saved === "en") {
    go(saved);
    return;
  }

  if (/bot|crawl|spider|slurp|preview|inspectiontool|google|bing|baidu|yandex|duckduck/i.test(navigator.userAgent || "")) {
    show();
    return;
  }

  const browserPrefersSpanish = () => {
    const list = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || ""];
    return list.some((lang) => /^es\b/i.test(lang));
  };

  const countryCode = async () => {
    const sources = [
      ["https://api.country.is/", (data) => data.country],
      ["https://get.geojs.io/v1/ip/country.json", (data) => data.country]
    ];
    for (const [url, pick] of sources) {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 2000);
      try {
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) continue;
        const code = String(pick(await response.json()) || "").toUpperCase();
        if (/^[A-Z]{2}$/.test(code)) return code;
      } catch { /* prueba la fuente siguiente */ }
      finally { clearTimeout(timer); }
    }
    return "";
  };

  /* Si la consulta tarda, se muestra la página; el cambio se aplica al llegar. */
  setTimeout(show, 2500);

  countryCode().then((country) => {
    const spanish = country ? SPANISH.has(country) : browserPrefersSpanish();
    go(spanish ? "es" : "en");
  });
})();
