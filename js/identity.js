/* Drawer superior con el contacto. Solo fuera de desktop y fuera de Resumen. */
(function (CV) {
  "use strict";

  class IdentityDrawer {
    constructor({ toggle, panel, backdrop, actions, home, desktopQuery }) {
      this.toggle = toggle;
      this.panel = panel;
      this.backdrop = backdrop;
      this.actions = actions;
      this.home = home;
      this.desktop = window.matchMedia(desktopQuery);
      this.isOpen = false;
      this.onKeydown = this.onKeydown.bind(this);
    }

    init() {
      if (!this.toggle || !this.panel || !this.actions || !this.home) return this;

      this.toggle.addEventListener("click", () => (this.isOpen ? this.close({ restoreFocus: true }) : this.open()));

      document.addEventListener("click", (e) => {
        if (this.isOpen && e.target.closest("[data-identity-close]")) this.close({ restoreFocus: true });
      });

      this.desktop.addEventListener("change", (e) => {
        if (e.matches) this.close();
      });

      const mast = document.querySelector(".mast");
      if (mast && window.ResizeObserver) new ResizeObserver(() => this.syncOffset()).observe(mast);
      this.syncOffset();
      return this;
    }

    syncOffset() {
      const mast = document.querySelector(".mast");
      if (!mast) return;
      document.documentElement.style.setProperty("--mast-h", `${mast.getBoundingClientRect().height}px`);
    }

    open() {
      if (this.desktop.matches || !document.documentElement.classList.contains("show-identity")) return;
      this.syncOffset();
      this.panel.append(this.actions);
      this.isOpen = true;
      this.render();
      document.addEventListener("keydown", this.onKeydown, true);
      const first = this.panel.querySelector("a[href], button:not([disabled])");
      if (first) first.focus();
    }

    close({ restoreFocus = false } = {}) {
      const wasOpen = this.isOpen;
      if (this.actions && this.home && this.actions.parentElement !== this.home) this.home.append(this.actions);
      if (!wasOpen) return;
      this.isOpen = false;
      this.render();
      document.removeEventListener("keydown", this.onKeydown, true);
      if (restoreFocus) this.toggle.focus();
    }

    render() {
      this.panel.classList.toggle("is-open", this.isOpen);
      this.backdrop.classList.toggle("is-open", this.isOpen);
      this.panel.setAttribute("aria-hidden", this.isOpen ? "false" : "true");
      this.toggle.setAttribute("aria-expanded", this.isOpen ? "true" : "false");
      const other = document.querySelector(".drawer.is-open, .map-drawer.is-open");
      document.body.classList.toggle("is-scroll-locked", this.isOpen || !!other);
    }

    onKeydown(event) {
      if (event.key !== "Escape") return;
      event.preventDefault();
      event.stopPropagation();
      this.close({ restoreFocus: true });
    }
  }

  CV.IdentityDrawer = IdentityDrawer;
})(window.CV = window.CV || {});
