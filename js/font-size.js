/* Tamaño de letra. Se carga sin defer para aplicar la escala guardada antes del primer pintado. */
(function () {
  "use strict";

  const KEY = "cv-font";
  const STEPS = [87.5, 100, 112.5, 125, 137.5];
  const root = document.documentElement;

  const storage = {
    get() {
      try { return localStorage.getItem(KEY); } catch { return null; }
    },
    set(value) {
      try { localStorage.setItem(KEY, value); } catch { /* almacenamiento no disponible */ }
    }
  };

  const saved = Number(storage.get());
  let index = STEPS.indexOf(saved);
  if (index < 0) index = STEPS.indexOf(100);

  const apply = () => {
    root.style.setProperty("--font-scale", String(STEPS[index] / 100));
  };

  const sync = () => {
    document.querySelectorAll("[data-font-step]").forEach((button) => {
      const step = Number(button.getAttribute("data-font-step"));
      const atLimit = (step < 0 && index === 0) || (step > 0 && index === STEPS.length - 1);
      button.disabled = atLimit;
    });
  };

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-font-step]");
    if (!button || button.disabled) return;
    const next = index + Number(button.getAttribute("data-font-step"));
    index = Math.min(STEPS.length - 1, Math.max(0, next));
    storage.set(String(STEPS[index]));
    apply();
    sync();
  });

  apply();
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", sync);
  else sync();
})();
