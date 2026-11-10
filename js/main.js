/* Punto de entrada: conecta datos, plantillas y comportamiento con el DOM. */
(function (CV) {
  "use strict";

  const { config, data, templates: t, experience, github, theme, DetailSheet, Drawer, LocationMap, IdentityDrawer, Tabs } = CV;

  /* Debe coincidir con el breakpoint desktop de css/styles.css. */
  const DESKTOP_QUERY = "(min-width: 52em)";

  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  /* Los contenedores se marcan con data-render para no depender de ids traducibles. */
  const slot = (name) => `[data-render="${name}"]`;

  const renderInto = (name, html) => {
    const el = $(slot(name));
    if (el) el.innerHTML = html;
  };

  const withMore = (items, render) => {
    const { shown, extra } = t.byFeatured(items);
    return render(shown) + t.more(render(extra));
  };

  const jobEntries = data.jobs.map((job, id) => ({ id, job }));

  /* "tech" agrupa lo destacado arriba y el resto por década; "chrono" lista todo por fecha. */
  const JOB_ORDERS = Object.freeze({
    tech: () => {
      const featured = jobEntries.filter((entry) => entry.job.featured);
      const older = jobEntries.filter((entry) => !entry.job.featured);
      return t.jobList(featured) + t.more(t.decades(experience.groupEntries(older)));
    },
    chrono: () => t.jobList(experience.byDate(jobEntries))
  });

  let jobOrder = "tech";

  const renderJobs = () => {
    renderInto("jobs", JOB_ORDERS[jobOrder]());
    const chrono = jobOrder === "chrono";
    $$("[data-action='toggle-job-order']").forEach((button) => button.setAttribute("aria-pressed", String(chrono)));
    $$("[data-decade-actions]").forEach((el) => { el.hidden = chrono; });
  };

  const toggleJobOrder = () => {
    jobOrder = jobOrder === "tech" ? "chrono" : "tech";
    renderJobs();
  };

  /* "relevance" agrupa por tema con lo destacado arriba; "chrono" lista por fecha de emisión. */
  const CERT_ORDERS = Object.freeze({
    relevance: () => t.chipGroupsMore(data.certs, "cert"),
    chrono: () => t.chipGroupsChrono(data.certs, "cert")
  });

  let certOrder = "relevance";

  const renderCerts = () => {
    renderInto("certs", CERT_ORDERS[certOrder]());
    const chrono = certOrder === "chrono";
    $$("[data-action='toggle-cert-order']").forEach((button) => button.setAttribute("aria-pressed", String(chrono)));
  };

  const toggleCertOrder = () => {
    certOrder = certOrder === "relevance" ? "chrono" : "relevance";
    renderCerts();
  };

  const isGithubProject = (project) => /^https?:\/\/(www\.)?github\.com\//i.test(project.url || "");

  /* "all" muestra la lista completa; "github" solo los repositorios públicos. */
  const PROJECT_FILTERS = Object.freeze({
    all: () => withMore(data.projects, t.cards),
    github: () => withMore(data.projects.filter(isGithubProject), t.cards)
  });

  let projectFilter = "all";

  const renderProjects = () => {
    renderInto("projects", PROJECT_FILTERS[projectFilter]());
    const github = projectFilter === "github";
    $$("[data-action='toggle-project-filter']").forEach((button) => button.setAttribute("aria-pressed", String(github)));
  };

  const toggleProjectFilter = () => {
    projectFilter = projectFilter === "all" ? "github" : "all";
    renderProjects();
  };

  const renderContent = () => {
    renderInto("skills", t.chipGroups(data.skills));
    renderJobs();
    renderProjects();
    renderCerts();
    renderInto("education", withMore(data.education, t.timeline));
    renderInto("languages", t.chips(data.languages));
  };

  const certsById = new Map(
    Object.values(data.certs).flat().filter((item) => item && item.id).map((item) => [item.id, item])
  );

  const DETAIL_RENDERERS = Object.freeze({
    job: (id) => data.jobs[id] && t.jobDetail(data.jobs[id], id),
    cert: (id) => certsById.has(id) && t.certDetail(certsById.get(id)),
    project: (id) => {
      const project = data.projects.find((item) => item.id === id);
      return project && project.detail ? t.projectDetail(project) : "";
    }
  });

  const decadeDetails = () => $$(`${slot("jobs")} details.dec`);
  const foldDetails = () => $$("details.dec, details.more");

  const setDecadesOpen = (open) => decadeDetails().forEach((d) => { d.open = open; });

  const ACTIONS = Object.freeze({
    print: () => window.print(),
    "toggle-theme": () => theme.toggle(),
    "expand-all": () => setDecadesOpen(true),
    "collapse-all": () => setDecadesOpen(false),
    "toggle-job-order": () => toggleJobOrder(),
    "toggle-cert-order": () => toggleCertOrder(),
    "toggle-project-filter": () => toggleProjectFilter()
  });

  const bindActions = () => {
    document.addEventListener("click", (e) => {
      const target = e.target.closest("[data-action]");
      const run = target && ACTIONS[target.dataset.action];
      if (run) run();
    });
  };

  const bindPrint = () => {
    let saved = [];
    window.addEventListener("beforeprint", () => {
      const details = foldDetails();
      saved = details.map((d) => d.open);
      details.forEach((d) => { d.open = true; });
    });
    window.addEventListener("afterprint", () => {
      foldDetails().forEach((d, i) => { d.open = saved[i] ?? d.open; });
    });
  };

  const loadGithub = () => {
    const user = config.githubUser;
    if (!user) return;

    const link = $("#gh");
    link.href = github.profileUrl(user);
    link.hidden = false;

    github.fetchRepos(user, config.githubRepoLimit)
      .then((repos) => renderInto("repos", t.cards(repos)))
      .catch(() => {});
  };

  renderContent();
  theme.sync();
  bindActions();
  bindPrint();
  new Drawer({
    toggle: $(".menu-toggle"),
    panel: $("#site-nav"),
    backdrop: $(".drawer-backdrop"),
    desktopQuery: DESKTOP_QUERY
  }).init();
  new LocationMap({
    toggle: $(".location"),
    panel: $("#map-drawer"),
    backdrop: $(".map-backdrop"),
    slot: $("[data-render='location-map']"),
    desktopQuery: DESKTOP_QUERY
  }).init();
  const caseSheet = new CV.CaseSheet({
    sheet: $("#case-sheet"),
    backdrop: $(".case-backdrop"),
    render: (id) => {
      const job = data.jobs[id];
      return job && job.caseStudy ? t.caseStudy(job) : "";
    }
  }).init();
  const detailSheet = new DetailSheet({
    sheet: $("#detail-sheet"),
    renderers: DETAIL_RENDERERS,
    onClose: () => caseSheet.close()
  }).init();
  const home = $("#main > section[data-home]");
  const identity = new IdentityDrawer({
    toggle: $(".identity-toggle"),
    panel: $("#identity-drawer"),
    backdrop: $(".identity-backdrop"),
    actions: $(".profile .actions"),
    home: $(".profile"),
    desktopQuery: DESKTOP_QUERY
  }).init();
  new Tabs({
    nav: $("#site-nav"),
    panels: $$("#main > section[id]"),
    onChange: (id) => {
      detailSheet.close();
      identity.close();
      document.documentElement.classList.toggle("show-identity", !home || id !== home.id);
      identity.syncOffset();
    }
  }).init();
  loadGithub();
})(window.CV);
