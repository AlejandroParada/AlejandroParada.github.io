/* Panel lateral derecho de detalle. Cualquier elemento con data-detail="tipo" y data-id lo abre;
   el contenido lo genera el renderer registrado para ese tipo. */
(function (CV) {
  "use strict";

  class DetailSheet {
    constructor({ sheet, renderers }) {
      this.sheet = sheet;
      this.content = sheet.querySelector("[data-sheet-content]");
      this.renderers = renderers;
      this.current = null;
    }

    init() {
      document.addEventListener("click", (e) => {
        const trigger = e.target.closest("[data-detail]");
        if (trigger) {
          this.toggle(trigger);
        } else if (e.target.closest('[data-action="close-sheet"]')) {
          this.close({ restoreFocus: true });
        }
      });

      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && this.current) this.close({ restoreFocus: true });
      });
      return this;
    }

    toggle(trigger) {
      if (this.current === trigger) {
        this.close();
        return;
      }
      this.close();
      this.open(trigger);
    }

    open(trigger) {
      const render = this.renderers[trigger.dataset.detail];
      const html = render && render(trigger.dataset.id);
      if (!html) return;

      this.content.innerHTML = html;
      this.sheet.scrollTop = 0;
      this.sheet.classList.add("is-open");
      this.setSelected(trigger, true);
      this.current = trigger;
    }

    close({ restoreFocus = false } = {}) {
      const previous = this.current;
      if (!previous) return;

      this.sheet.classList.remove("is-open");
      this.setSelected(previous, false);
      this.current = null;
      if (restoreFocus) previous.focus();
    }

    setSelected(trigger, selected) {
      trigger.classList.toggle("is-selected", selected);
      trigger.setAttribute("aria-expanded", String(selected));
    }
  }

  CV.DetailSheet = DetailSheet;
})(window.CV = window.CV || {});
