/* Pestañas genéricas: cada enlace "#id" del menú muestra la sección con ese id. */
(function (CV) {
  "use strict";

  class Tabs {
    constructor({ nav, panels, onChange = () => {} }) {
      this.nav = nav;
      this.panels = new Map(Array.from(panels, (panel) => [panel.id, panel]));
      this.links = Array.from(nav.querySelectorAll('a[href^="#"]')).filter((a) => this.panels.has(this.idOf(a.hash)));
      this.defaultId = this.panels.keys().next().value;
      this.onChange = onChange;
      this.baseTitle = document.title;
      this.current = null;
    }

    init() {
      this.panels.forEach((panel) => { panel.tabIndex = -1; });

      this.nav.addEventListener("click", (e) => {
        const link = e.target.closest('a[href^="#"]');
        const id = link && this.resolve(link.hash);
        if (!id) return;
        e.preventDefault();
        if (id !== this.current) history.pushState(null, "", `#${id}`);
        this.show(id, { focus: true });
      });

      window.addEventListener("popstate", () => {
        const id = this.resolve(location.hash);
        if (id) this.show(id, { focus: true });
      });

      this.show(this.resolve(location.hash) || this.defaultId);
      return this;
    }

    idOf(hash) {
      return decodeURIComponent((hash || "").replace(/^#/, ""));
    }

    /* Hash vacío = pestaña por defecto; hash ajeno (p. ej. #main) = null. */
    resolve(hash) {
      const id = this.idOf(hash);
      if (!id) return this.defaultId;
      return this.panels.has(id) ? id : null;
    }

    show(id, { focus = false } = {}) {
      const previous = this.current;
      this.current = id;

      this.panels.forEach((panel, key) => { panel.hidden = key !== id; });
      this.links.forEach((link) => {
        if (this.idOf(link.hash) === id) link.setAttribute("aria-current", "page");
        else link.removeAttribute("aria-current");
      });

      const active = this.links.find((link) => link.hasAttribute("aria-current"));
      document.title = active ? `${active.textContent.trim()} · ${this.baseTitle}` : this.baseTitle;

      if (focus) this.reveal(this.panels.get(id));
      if (previous !== id) this.onChange(id, previous);
    }

    reveal(panel) {
      panel.focus({ preventScroll: true });
      requestAnimationFrame(() => panel.scrollIntoView({ block: "start" }));
    }
  }

  CV.Tabs = Tabs;
})(window.CV = window.CV || {});
