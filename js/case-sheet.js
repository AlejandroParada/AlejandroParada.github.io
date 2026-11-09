/* Segundo panel: caso de un puesto, anclado abajo y a 5/6 del alto visible.
   Se abre desde el detalle del puesto y se cierra sin cerrar ese detalle. */
(function (CV) {
  "use strict";

  const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

  class CaseSheet {
    constructor({ sheet, backdrop, render }) {
      this.sheet = sheet;
      this.backdrop = backdrop;
      this.content = sheet.querySelector("[data-case-content]");
      this.render = render;
      this.isOpen = false;
      this.opener = null;
      this.onKeydown = this.onKeydown.bind(this);
      this.onClick = this.onClick.bind(this);
    }

    init() {
      document.addEventListener("click", this.onClick);
      return this;
    }

    onClick(event) {
      const opener = event.target.closest("[data-action='open-case']");
      if (opener) {
        this.open(opener.dataset.caseId, opener);
        return;
      }
      if (this.isOpen && event.target.closest("[data-case-close]")) {
        this.close({ restoreFocus: true });
      }
    }

    open(id, trigger) {
      const html = this.render(id);
      if (!html) return;

      const wasOpen = this.isOpen;
      this.opener = trigger;
      this.content.innerHTML = html;
      this.isOpen = true;
      this.apply();
      if (!wasOpen) document.addEventListener("keydown", this.onKeydown, true);

      this.sheet.scrollTop = 0;
      const title = this.sheet.querySelector("#case-sheet-title");
      if (title) {
        title.tabIndex = -1;
        title.focus();
      }
    }

    close({ restoreFocus = false } = {}) {
      if (!this.isOpen) return;

      const opener = this.opener;
      this.isOpen = false;
      this.apply();
      document.removeEventListener("keydown", this.onKeydown, true);
      if (restoreFocus && opener) opener.focus();
    }

    apply() {
      this.sheet.classList.toggle("is-open", this.isOpen);
      this.backdrop.classList.toggle("is-open", this.isOpen);
      this.sheet.setAttribute("aria-hidden", String(!this.isOpen));
      this.sheet.inert = !this.isOpen;
      document.body.classList.toggle("is-case-open", this.isOpen);
      if (this.opener) this.opener.setAttribute("aria-expanded", String(this.isOpen));
    }

    focusables() {
      return Array.from(this.sheet.querySelectorAll(FOCUSABLE));
    }

    onKeydown(event) {
      const step = { ArrowDown: 64, ArrowUp: -64, PageDown: 320, PageUp: -320 };
      if (event.key in step) {
        event.preventDefault();
        this.sheet.scrollBy({ top: step[event.key] });
        return;
      }
      if (event.key === "Home") {
        event.preventDefault();
        this.sheet.scrollTop = 0;
        return;
      }
      if (event.key === "End") {
        event.preventDefault();
        this.sheet.scrollTop = this.sheet.scrollHeight;
        return;
      }

      if (event.key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
        this.close({ restoreFocus: true });
        return;
      }
      if (event.key !== "Tab") return;

      const items = this.focusables();
      const first = items[0];
      const last = items[items.length - 1];
      if (!first) return;

      const active = document.activeElement;
      const atStart = active === first || !items.includes(active);
      if (event.shiftKey && atStart) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      } else if (!this.sheet.contains(active)) {
        event.preventDefault();
        first.focus();
      }
    }
  }

  CV.CaseSheet = CaseSheet;
})(window.CV = window.CV || {});
