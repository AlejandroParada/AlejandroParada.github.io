/* Funciones puras: reciben datos y devuelven HTML escapado. No tocan el DOM. */
(function (CV) {
  "use strict";

  const s = CV.strings;

  const ENTITIES = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  const esc = (value) => String(value ?? "").replace(/[&<>"']/g, (c) => ENTITIES[c]);

  const safeUrl = (url) => (/^https?:\/\//i.test(url || "") ? url : "");

  const join = (items, render) => (items || []).map(render).join("");

  const metaText = (...parts) => parts.filter(Boolean).join(" · ");

  const detailAttrs = (type, id) =>
    `data-detail="${esc(type)}" data-id="${esc(id)}" aria-expanded="false" aria-controls="detail-sheet"`;

  const list = (items, className = "") =>
    `<ul${className ? ` class="${className}"` : ""}>${join(items, (item) => `<li>${esc(item)}</li>`)}</ul>`;

  const chip = (item, detailType) =>
    detailType && item && item.id
      ? `<button type="button" class="chip chip-action" ${detailAttrs(detailType, item.id)}>${esc(item.name)}</button>`
      : `<span class="chip">${esc(typeof item === "string" ? item : item.name)}</span>`;

  const chips = (items, detailType) =>
    `<div class="chips">${join(items, (item) => chip(item, detailType))}</div>`;

  const chipGroups = (groups, detailType) =>
    join(Object.entries(groups), ([title, items]) => `<h3>${esc(title)}</h3>${chips(items, detailType)}`);

  const more = (html) => html
    ? `<details class="more"><summary class="btn btn-sm">` +
        `<span class="more-closed">${esc(s.showMore)}</span>` +
        `<span class="more-open">${esc(s.showLess)}</span>` +
      `</summary><div class="more-body">${html}</div></details>`
    : "";

  const byFeatured = (items) => ({
    shown: (items || []).filter((item) => item && item.featured),
    extra: (items || []).filter((item) => !(item && item.featured))
  });

  const chipGroupsMore = (groups, detailType) => {
    const shown = {};
    const extra = {};
    Object.entries(groups).forEach(([title, items]) => {
      const parts = byFeatured(items);
      if (parts.shown.length) shown[title] = parts.shown;
      if (parts.extra.length) extra[title] = parts.extra;
    });
    return chipGroups(shown, detailType) + more(chipGroups(extra, detailType));
  };

  const timelineItem = ({ title, meta }) =>
    `<div class="timeline-item"><h3>${esc(title)}</h3><p class="meta">${esc(meta)}</p></div>`;

  const card = ({ name, description, url, company, period }) => {
    const href = safeUrl(url);
    const title = href ? `<a href="${esc(href)}">${esc(name)}</a>` : esc(name);
    const context = metaText(company, period);
    return `<div class="card"><h3>${title}</h3>` +
      (context ? `<p class="meta">${esc(context)}</p>` : "") +
      (description ? `<p class="card-text">${esc(description)}</p>` : "") +
    `</div>`;
  };

  const jobButton = ({ id, job }) =>
    `<div class="job-row">` +
      `<button type="button" class="jb" ${detailAttrs("job", id)}>` +
        `<b>${esc(job.title)}</b><span class="meta">${esc(metaText(job.company, job.period))}</span>` +
        (job.parallel ? `<span class="parallel">${esc(job.parallel)}</span>` : "") +
      `</button>` +
      list(job.highlights, "job-details") +
    `</div>`;

  const decade = ({ label, range, entries }, open) =>
    `<details class="dec"${open ? " open" : ""}>` +
      `<summary><h3 class="dec-title">${esc(label)}</h3>` +
      `<span class="meta">${esc(s.jobCount(entries.length))} · ${esc(range)}</span></summary>` +
      `<div class="dec-body">${join(entries, jobButton)}</div>` +
    `</details>`;

  const decades = (groups) => join(groups, (group, i) => decade(group, i === 0));

  /* Estructura común del panel de detalle: título, botón Cerrar, meta y cuerpo. */
  const sheetLayout = ({ title, meta, body }) =>
    `<div class="sheet-head">` +
      `<h3 class="sheet-title" id="detail-sheet-title">${esc(title)}</h3>` +
      `<button type="button" class="btn btn-sm" data-action="close-sheet">${esc(s.close)}</button>` +
    `</div>` +
    (meta ? `<p class="meta">${esc(meta)}</p>` : "") +
    body;

  const sheetSection = (title, html) =>
    html ? `<h4 class="sheet-subtitle">${esc(title)}</h4>${html}` : "";

  const externalButton = (url, label) => {
    const href = safeUrl(url);
    return href
      ? `<div class="actions"><a class="btn btn-primary" href="${esc(href)}" target="_blank" rel="noopener noreferrer">${esc(label)}</a></div>`
      : "";
  };

  const sheetImage = (src, alt) => {
    const href = safeUrl(src);
    return href ? `<img class="sheet-media" src="${esc(href)}" alt="${esc(alt)}" loading="lazy" decoding="async">` : "";
  };

  const jobDetail = (job) => sheetLayout({
    title: job.title,
    meta: metaText(job.company, job.period, job.place, job.parallel),
    body: list(job.highlights)
  });

  const certDetail = (cert) => sheetLayout({
    title: cert.name,
    meta: metaText(cert.issuer, cert.date, cert.duration),
    body:
      (cert.credential ? `<p class="badge">${esc(cert.credential)}</p>` : "") +
      externalButton(cert.url, s.openInNewTab) +
      sheetImage(cert.image, s.certificateAlt(cert.name)) +
      sheetSection(s.learned,
        (cert.summary ? `<p>${esc(cert.summary)}</p>` : "") +
        (cert.learned && cert.learned.length ? list(cert.learned) : "")) +
      sheetSection(s.skills, cert.skills && cert.skills.length ? chips(cert.skills) : "")
  });

  CV.templates = Object.freeze({
    chips, chipGroups, chipGroupsMore, more, byFeatured, timelineItem, card, decades, jobDetail, certDetail,
    cards: (items) => join(items, card),
    timeline: (items) => join(items, timelineItem),
    jobList: (entries) => join(entries, jobButton)
  });
})(window.CV = window.CV || {});
