/* Panel lateral de navegación con botón hamburguesa (solo fuera de desktop). */
(function (CV) {
  "use strict";

  const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

  class Drawer {
    constructor({ toggle, panel, backdrop, desktopQuery }) {
      this.toggle = toggle;
      this.panel = panel;
      this.backdrop = backdrop;
      this.desktop = window.matchMedia(desktopQuery);
      this.isOpen = false;
      this.onKeydown = this.onKeydown.bind(this);
    }

    init() {
      this.toggle.addEventListener("click", () => (this.isOpen ? this.close() : this.open()));

      document.addEventListener("click", (e) => {
        if (this.isOpen && e.target.closest("[data-drawer-close]")) this.close({ restoreFocus: true });
      });

      this.panel.addEventListener("click", (e) => {
        if (this.isOpen && e.target.closest("a[href]")) this.close();
      });

      this.desktop.addEventListener("change", (e) => {
        if (e.matches) this.close();
      });
      return this;
    }

    open() {
      if (this.desktop.matches) return;
      this.isOpen = true;
      this.render();
      document.addEventListener("keydown", this.onKeydown, true);
      const first = this.focusables()[0];
      if (first) first.focus();
    }

    close({ restoreFocus = false } = {}) {
      if (!this.isOpen) return;
      this.isOpen = false;
      this.render();
      document.removeEventListener("keydown", this.onKeydown, true);
      if (restoreFocus) this.toggle.focus();
    }

    render() {
      this.panel.classList.toggle("is-open", this.isOpen);
      this.backdrop.classList.toggle("is-open", this.isOpen);
      document.body.classList.toggle("is-scroll-locked", this.isOpen);
      this.toggle.setAttribute("aria-expanded", String(this.isOpen));
    }

    focusables() {
      return Array.from(this.panel.querySelectorAll(FOCUSABLE));
    }

    onKeydown(e) {
      if (e.key === "Escape") {
        e.stopPropagation();
        this.close({ restoreFocus: true });
        return;
      }
      if (e.key !== "Tab") return;

      const items = this.focusables();
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      } else if (!this.panel.contains(document.activeElement)) {
        e.preventDefault();
        first.focus();
      }
    }
  }

  CV.Drawer = Drawer;
})(window.CV = window.CV || {});
