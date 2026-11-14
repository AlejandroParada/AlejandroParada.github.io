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

  /* Identidad de un puesto: empresa, cargo y período. Un solo lugar para la lista, el panel y el caso. */
  const jobIdentity = (job, { place = false } = {}) => {
    const when = [job.period, place ? job.place : ""].filter(Boolean).map(esc).join(" · ");
    return `<span class="job-id">` +
      `<span class="job-company">${orgName(job.company, job.icon)}</span>` +
      `<span class="job-role">${esc(job.title)}</span>` +
      (when ? `<span class="job-when">${when}</span>` : "") +
    `</span>`;
  };

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

  const certLabel = (item) => (typeof item === "string" ? item : (item && item.name) || "");

  /* Año ISO si existe; si no, el primer año que aparezca en el nombre. */
  const certYear = (item) => {
    if (item && item.issued) return item.issued.slice(0, 4);
    const match = certLabel(item).match(/\b((?:19|20)\d{2})\b/);
    return match ? match[1] : "";
  };

  const certIssuedKey = (item) =>
    (item && item.issued) || (certYear(item) ? `${certYear(item)}-12-31` : "0000-00-00");

  const byIssued = (items) =>
    [...items].sort((a, b) =>
      certIssuedKey(b).localeCompare(certIssuedKey(a)) ||
      certLabel(b).localeCompare(certLabel(a), s.locale)
    );

  /* Lista plana por fecha, agrupada por año (más reciente primero). */
  const chipGroupsChrono = (groups, detailType) => {
    const byYear = new Map();
    byIssued(Object.values(groups).flat()).forEach((item) => {
      const year = certYear(item);
      if (!byYear.has(year)) byYear.set(year, []);
      byYear.get(year).push(item);
    });
    return join([...byYear], ([year, items]) =>
      (year ? `<h3>${esc(year)}</h3>` : "") + chips(items, detailType)
    );
  };

  const timelineItem = ({ title, meta }) =>
    `<div class="timeline-item"><h3>${esc(title)}</h3><p class="meta">${esc(meta)}</p></div>`;

  const githubIcon = `<svg class="gh-icon" width="17" height="17" viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>`;

  const isGithubUrl = (url) => /^https?:\/\/(www\.)?github\.com\//i.test(url || "");

  const cardName = (name, url) => {
    const label = esc(name);
    return isGithubUrl(url)
      ? `<span class="card-name">${githubIcon}<span>${label}</span></span>`
      : label;
  };

  const card = ({ id, name, description, url, company, period, icon, detail }) => {
    const context = orgMeta(company, icon, period);
    const body =
      (context ? `<p class="meta">${context}</p>` : "") +
      (description ? `<p class="card-text">${esc(description)}</p>` : "");
    const heading = cardName(name, url);
    if (detail && id) {
      return `<button type="button" class="card" ${detailAttrs("project", id)}>` +
        `<h3>${heading}</h3>${body}</button>`;
    }
    const href = safeUrl(url);
    const title = href ? `<a href="${esc(href)}">${heading}</a>` : heading;
    return `<div class="card"><h3>${title}</h3>${body}</div>`;
  };

  const projectLinks = (project) => {
    const demo = safeUrl(project.demo);
    const repo = safeUrl(project.url);
    const links = [
      demo
        ? `<a class="btn btn-primary" href="${esc(demo)}" target="_blank" rel="noopener noreferrer">${esc(project.demoLabel || s.viewSite)}</a>`
        : "",
      repo
        ? `<a class="btn${demo ? "" : " btn-primary"}" href="${esc(repo)}" target="_blank" rel="noopener noreferrer">${esc(s.viewRepo)}</a>`
        : ""
    ].filter(Boolean).join("");
    return links ? `<div class="actions">${links}</div>` : "";
  };

  const projectDetail = (project) => {
    const detail = project.detail || {};
    return sheetLayout({
      title: project.name,
      mark: isGithubUrl(project.url) ? githubIcon : "",
      meta: [detail.kicker, project.period].filter(Boolean).map(esc).join(" · "),
      body:
        (detail.lead ? `<p>${esc(detail.lead)}</p>` : "") +
        (detail.items && detail.items.length ? list(detail.items) : "") +
        sheetSection(s.solutionStack, detail.stack && detail.stack.length ? chips(detail.stack) : "") +
        projectLinks(project)
    });
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

  const caseTeamMetric = (job) => {
    const ctx = job.context || {};
    const more = Boolean(ctx.teamMore);
    const count = more ? ctx.teamMore : ctx.team;
    if (!count) return "";
    return `<div class="case-metric"><b>${more ? "+" : ""}${count}</b><span>${esc(s.teamCaseLabel)}</span></div>`;
  };

  const caseStudyBody = (job) => {
    const study = job.caseStudy;
    const metrics = `<div class="case-metrics">${caseTeamMetric(job)}${join(study.metrics, (metric) =>
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

  const SHIELD = `<svg class="mark-icon" viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M8 1.1 13.4 3.1v4.6c0 3.3-2.3 5.6-5.4 6.9-3.1-1.3-5.4-3.6-5.4-6.9V3.1L8 1.1z"/></svg>`;
  const BUILDING = `<svg class="mode-icon" viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M3 14V2.5h10V14H3zm1.6-9.2h2.1v2H4.6v-2zm4.7 0h2.1v2H9.3v-2zM4.6 8.2h2.1v2H4.6v-2zm4.7 0h2.1v2H9.3v-2z"/></svg>`;
  const HOUSE = `<svg class="mode-icon" viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M8 2.2 1.5 7.2h1.7V14h3.6V9.4h2.4V14h3.6V7.2h1.7L8 2.2z"/></svg>`;
  const PERSON = `<svg class="team-icon" viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="4.6" r="2.25" fill="currentColor"/><path fill="currentColor" d="M3.2 14.1c.4-2.7 2.15-4.15 4.8-4.15s4.4 1.45 4.8 4.15H3.2z"/></svg>`;

  const shields = (level) => {
    let html = "";
    for (let i = 0; i < level; i += 1) html += `<span class="shield">${SHIELD}</span>`;
    return `<span class="shields" aria-hidden="true">${html}</span>`;
  };

  const modeIcons = (mode) => (mode === "hybrid" ? BUILDING + HOUSE : BUILDING);

  const teamBits = (count, more) =>
    `<span aria-hidden="true">${more ? "+" : ""}${count}</span>${PERSON}`;

  const teamMark = (count, more) =>
    `<span class="job-team"><span class="visually-hidden">${esc(s.teamLabel(count, more))}</span>${teamBits(count, more)}</span>`;

  const teamFigure = (count, more) =>
    `<span class="job-team" aria-hidden="true">${teamBits(count, more)}</span>`;

  const jobTeam = (ctx) => {
    if (ctx.teamMore) return teamMark(ctx.teamMore, true);
    if (ctx.team) return teamMark(ctx.team, false);
    return "";
  };

  const jobContext = (job, { sheet = false } = {}) => {
    const ctx = job.context;
    if (!ctx || !ctx.maturity) return "";
    const to = ctx.maturityTo > ctx.maturity ? ctx.maturityTo : 0;
    const rating = to
      ? `${shields(ctx.maturity)}<span class="context-arrow" aria-hidden="true">→</span>${shields(to)}`
      : shields(ctx.maturity);
    const mode = ctx.mode === "hybrid" ? s.modeHybrid : s.modeOnsite;
    const note = ctx.modeNote ? ` · ${esc(ctx.modeNote)}` : "";
    const team = jobTeam(ctx);
    const maturity = `<span class="job-maturity"><span class="visually-hidden">${esc(s.maturityLabel(ctx.maturity, to || null))}</span>${rating}</span>`;
    const place = ctx.mode
      ? `<span class="job-mode">${modeIcons(ctx.mode)}<span>${esc(mode)}${note}</span></span>`
      : "";
    const bar = `<span class="context-bar" aria-hidden="true">|</span>`;
    if (sheet) {
      return `<span class="job-context job-context-sheet">` +
        [maturity, team, place].filter(Boolean).join(bar) +
      `</span>`;
    }
    return `<span class="job-context">` +
      maturity +
      place +
      team +
    `</span>`;
  };

  const jobLegend = () =>
    `<details class="job-legend">` +
      `<summary>${esc(s.legendSummary)}</summary>` +
      `<div class="job-legend-body">` +
        `<p class="job-legend-lead">${esc(s.processLegend)}</p>` +
        `<ol>${join(s.processLevels, (label, i) => `<li>${shields(i + 1)}<span>${esc(label)}</span></li>`)}</ol>` +
        `<p class="job-legend-modes">` +
          `<span>${BUILDING}<span>${esc(s.modeOnsite)}</span></span>` +
          `<span>${BUILDING}${HOUSE}<span>${esc(s.modeHybrid)}</span></span>` +
          `<span>${teamFigure(2, false)}<span>${esc(s.teamLegendExact)}</span></span>` +
          `<span>${teamFigure(4, true)}<span>${esc(s.teamLegendMore)}</span></span>` +
        `</p>` +
      `</div>` +
    `</details>`;

  const caseEntry = (job, id) => job.caseStudy
    ? `<div class="sheet-more">` +
        (job.caseStudy.hint ? `<p class="meta">${esc(job.caseStudy.hint)}</p>` : "") +
        `<button type="button" class="btn btn-primary" data-action="open-case" data-case-id="${esc(id)}" aria-haspopup="dialog" aria-controls="case-sheet" aria-expanded="false">` +
          `${esc(s.moreDetails)}<span class="case-open-icon" aria-hidden="true"></span>` +
        `</button>` +
      `</div>`
    : "";

  const jobButton = ({ id, job }) => {
    if (job.gap) {
      return `<div class="job-row job-gap"><p class="meta">${esc(job.period)}</p><p>${esc(job.note)}</p></div>`;
    }
    return `<div class="job-row">` +
      `<button type="button" class="jb" ${detailAttrs("job", id)}>` +
        `<span class="job-main">` +
          jobIdentity(job) +
          (job.parallel ? `<span class="parallel">${esc(job.parallel)}</span>` : "") +
        `</span>` +
        jobContext(job) +
      `</button>` +
      list(job.highlights, "job-details") +
      (job.caseStudy ? `<div class="case-print">${caseStudyBody(job)}</div>` : "") +
    `</div>`;
  };

  const decade = ({ label, range, entries }, open) =>
    `<details class="dec"${open ? " open" : ""}>` +
      `<summary><h3 class="dec-title">${esc(label)}</h3>` +
      `<span class="meta">${esc(s.jobCount(entries.length))} · ${esc(range)}</span></summary>` +
      `<div class="dec-body">${join(entries, jobButton)}</div>` +
    `</details>`;

  const decades = (groups) => join(groups, (group, i) => decade(group, i === 0));

  /* Estructura común del panel de detalle: título, botón Cerrar, meta y cuerpo. */
  const sheetLayout = ({ title, titleHtml, meta, body, mark = "" }) => {
    const heading = titleHtml
      || (mark ? `<span class="card-name">${mark}<span>${esc(title)}</span></span>` : esc(title));
    return `<div class="sheet-head">` +
      `<h3 class="sheet-title" id="detail-sheet-title">${heading}</h3>` +
      `<button type="button" class="btn btn-sm" data-action="close-sheet">${esc(s.close)}</button>` +
    `</div>` +
    (meta ? `<p class="meta">${meta}</p>` : "") +
    body;
  };

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
    titleHtml: jobIdentity(job, { place: true }),
    body:
      jobContext(job, { sheet: true }) +
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
            `<h3 class="sheet-title" id="case-sheet-title">${jobIdentity(job)}</h3>` +
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
    chips, chipGroups, chipGroupsMore, chipGroupsChrono, more, byFeatured, timelineItem, card, decades, jobDetail, certDetail, projectDetail, caseStudy,
    cards: (items) => join(items, card),
    timeline: (items) => join(items, timelineItem),
    jobList: (entries) => join(entries, jobButton),
    jobLegend
  });
})(window.CV = window.CV || {});
