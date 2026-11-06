/* Tema claro/oscuro. Se carga sin defer en <head> para aplicar el tema guardado antes del
   primer pintado. Sin elección guardada se sigue la preferencia del sistema. */
(function (CV) {
  "use strict";

  const KEY = "cv-theme";
  const THEMES = ["light", "dark"];
  const root = document.documentElement;
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)");

  const storage = {
    get() {
      try { return localStorage.getItem(KEY); } catch { return null; }
    },
    set(value) {
      try { localStorage.setItem(KEY, value); } catch { /* almacenamiento no disponible */ }
    }
  };

  const current = () => root.dataset.theme || (systemDark.matches ? "dark" : "light");

  /* Botones de tema y color de la barra del navegador según el tema activo. */
  const sync = () => {
    const dark = current() === "dark";
    document.querySelectorAll('[data-action="toggle-theme"]').forEach((button) => {
      button.setAttribute("aria-pressed", String(dark));
    });
    if (root.dataset.theme && document.body) {
      const color = getComputedStyle(document.body).backgroundColor;
      document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => { meta.content = color; });
    }
  };

  const toggle = () => {
    const next = current() === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    storage.set(next);
    sync();
  };

  const saved = storage.get();
  if (THEMES.includes(saved)) root.dataset.theme = saved;
  systemDark.addEventListener("change", sync);

  CV.theme = Object.freeze({ toggle, sync });
})(window.CV = window.CV || {});
