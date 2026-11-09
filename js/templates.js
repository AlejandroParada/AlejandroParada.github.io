/* Funciones puras: reciben datos y devuelven HTML escapado. No tocan el DOM. */
(function (CV) {
  "use strict";

  const s = CV.strings;

  const ENTITIES = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  const esc = (value) => String(value ?? "").replace(/[&<>"']/g, (c) => ENTITIES[c]);

  const safeUrl = (url) => (/^https?:\/\//i.test(url || "") ? url : "");

  const join = (items, render) => (items || []).map(render).join("");

  const metaText = (...parts) => parts.filter(Boolean).join(" · ");

  const orgName = (name, icon) => icon
    ? `<span class="org"><img class="org-icon" src="${esc(icon)}" alt="" width="18" height="18"><span>${esc(name)}</span></span>`
    : esc(name);

  const orgMeta = (name, icon, ...parts) =>
    [name ? orgName(name, icon) : "", ...parts.filter(Boolean).map((part) => esc(part))]
      .filter(Boolean)
      .join(" · ");

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

  const card = ({ name, description, url, company, period, icon }) => {
    const href = safeUrl(url);
    const title = href ? `<a href="${esc(href)}">${esc(name)}</a>` : esc(name);
    const context = orgMeta(company, icon, period);
    return `<div class="card"><h3>${title}</h3>` +
      (context ? `<p class="meta">${context}</p>` : "") +
      (description ? `<p class="card-text">${esc(description)}</p>` : "") +
    `</div>`;
  };

  const clientLink = (client) => {
    const href = safeUrl(client && client.url);
    if (!href) return "";
    const icon = client.icon
      ? `<img class="client-icon" src="${esc(client.icon)}" alt="" width="20" height="20">`
      : "";
    return `<a class="client-link" href="${esc(href)}" target="_blank" rel="noopener noreferrer">${icon}<span>${esc(client.name)}</span></a>`;
  };

  const clientLinks = (clients) => {
    const html = join(clients, clientLink);
    return html ? `<div class="client-links">${html}</div>` : "";
  };

  const caseBlocks = (section, job) =>
    (section.showClients ? clientLinks(job.clients) : "") +
    join(section.paragraphs, (paragraph) => `<p>${esc(paragraph)}</p>`) +
    (section.items && section.items.length ? list(section.items) : "");

  const caseStudyBody = (job) => {
    const study = job.caseStudy;
    const metrics = `<div class="case-metrics">${join(study.metrics, (metric) =>
      `<div class="case-metric"><b>${esc(metric.value)}</b><span>${esc(metric.label)}</span></div>`
    )}</div>`;
    const sections = join(study.sections, (section) =>
      `<section class="case-section"><h4 class="sheet-subtitle">${esc(section.title)}</h4>${caseBlocks(section, job)}</section>`
    );
    const stack = study.stack && study.stack.length
      ? `<h4 class="sheet-subtitle">${esc(s.solutionStack)}</h4>${chips(study.stack)}`
      : "";
    return (study.lead ? `<p class="case-lead">${esc(study.lead)}</p>` : "") + metrics + sections + stack;
  };

  const caseEntry = (job, id) => job.caseStudy
    ? `<div class="sheet-more">` +
        (job.caseStudy.hint ? `<p class="meta">${esc(job.caseStudy.hint)}</p>` : "") +
        `<button type="button" class="btn btn-primary" data-action="open-case" data-case-id="${esc(id)}" aria-haspopup="dialog" aria-controls="case-sheet" aria-expanded="false">` +
          `${esc(s.moreDetails)}<span class="case-open-icon" aria-hidden="true"></span>` +
        `</button>` +
      `</div>`
    : "";

  const jobButton = ({ id, job }) =>
    `<div class="job-row">` +
      `<button type="button" class="jb" ${detailAttrs("job", id)}>` +
        `<b>${esc(job.title)}</b><span class="meta">${orgMeta(job.company, job.icon, job.period)}</span>` +
        (job.parallel ? `<span class="parallel">${esc(job.parallel)}</span>` : "") +
      `</button>` +
      list(job.highlights, "job-details") +
      (job.caseStudy ? `<div class="case-print">${caseStudyBody(job)}</div>` : "") +
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
    (meta ? `<p class="meta">${meta}</p>` : "") +
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

  const jobDetail = (job, id) => sheetLayout({
    title: job.title,
    meta: orgMeta(job.company, job.icon, job.period, job.place),
    body:
      (job.parallel ? `<p class="parallel">${esc(job.parallel)}</p>` : "") +
      caseEntry(job, id) +
      clientLinks(job.clients) +
      list(job.highlights)
  });

  const caseStudy = (job) => {
    const study = job.caseStudy;
    return `<div class="case-inner">` +
      `<div class="case-head">` +
        `<div class="case-handle" aria-hidden="true"></div>` +
        `<div class="case-head-inner">` +
          `<div class="case-head-text">` +
            `<p class="case-kicker">${esc(study.kicker)}</p>` +
            `<h3 class="sheet-title" id="case-sheet-title">${esc(job.title)}</h3>` +
            `<p class="meta">${orgMeta(job.company, job.icon, job.period)}</p>` +
          `</div>` +
          `<button type="button" class="btn btn-sm" data-case-close>${esc(s.close)}</button>` +
        `</div>` +
      `</div>` +
      `<div class="case-body" tabindex="0"><div class="case-body-inner">${caseStudyBody(job)}</div></div>` +
    `</div>`;
  };

  const certDetail = (cert) => sheetLayout({
    title: cert.name,
    meta: esc(metaText(cert.issuer, cert.date, cert.duration)),
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
    chips, chipGroups, chipGroupsMore, more, byFeatured, timelineItem, card, decades, jobDetail, certDetail, caseStudy,
    cards: (items) => join(items, card),
    timeline: (items) => join(items, timelineItem),
    jobList: (entries) => join(entries, jobButton)
  });
})(window.CV = window.CV || {});
