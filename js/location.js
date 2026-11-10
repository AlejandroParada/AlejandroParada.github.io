/* Mapa de la localidad. Solo se abre en la vista responsive; en desktop el botón no participa. */
(function (CV) {
  "use strict";

  const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

  const MAP = `<svg class="uy-map" viewBox="0 0 220 260" role="img">` +
    `<path class="uy-land" d="M54.5,27.7 L76.7,29.4 L98.9,40.4 L117.9,60.3 L140.1,79.3 L159.2,102.5 L175,127.9 L187.7,153.2 L192.5,176.5 L183,191.3 L171.9,206.1 L162.3,217.1 L151.2,226.4 L138.6,230.2 L129,228.5 L114.8,226.4 L100.2,227.6 L83,223 L67.2,215.4 L46.6,208.6 L35.4,189.2 L28.2,157.5 L29.1,121.5 L40.2,79.3 L49.7,43.4 L54.5,27.7 Z"/>` +
    `<g class="uy-pin" transform="translate(105.1 221)">` +
      `<path d="M0 2 C-2-6 -11-10 -11-18 a11 11 0 1 1 22 0 c0 8-9 12-11 20 z"/>` +
      `<circle cy="-18" r="4" class="uy-pin-core"/>` +
    `</g>` +
  `</svg>`;

  class LocationMap {
    constructor({ toggle, panel, backdrop, slot, desktopQuery }) {
      this.toggle = toggle;
      this.panel = panel;
      this.backdrop = backdrop;
      this.desktop = window.matchMedia(desktopQuery);
      this.isOpen = false;
      this.onKeydown = this.onKeydown.bind(this);
      if (slot) slot.innerHTML = MAP;
    }

    init() {
      this.toggle.addEventListener("click", () => {
        if (this.desktop.matches) return;
        this.isOpen ? this.close({ restoreFocus: true }) : this.open();
      });

      document.addEventListener("click", (e) => {
        if (this.isOpen && e.target.closest("[data-map-close]")) this.close({ restoreFocus: true });
      });

      this.desktop.addEventListener("change", () => {
        this.sync();
        if (this.desktop.matches) this.close();
      });
      this.sync();
      return this;
    }

    sync() {
      const desktop = this.desktop.matches;
      this.toggle.tabIndex = desktop ? -1 : 0;
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
      this.panel.setAttribute("aria-hidden", String(!this.isOpen));
      this.toggle.setAttribute("aria-expanded", String(this.isOpen));
      document.body.classList.toggle("is-scroll-locked", this.isOpen);
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
      if (!first) return;
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

  CV.LocationMap = LocationMap;
})(window.CV = window.CV || {});
