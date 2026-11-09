/* Punto de entrada: conecta datos, plantillas y comportamiento con el DOM. */
(function (CV) {
  "use strict";

  const { config, data, templates: t, experience, github, theme, DetailSheet, Drawer, Tabs } = CV;

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

  const renderContent = () => {
    const entries = data.jobs.map((job, id) => ({ id, job }));
    const featuredJobs = entries.filter((entry) => entry.job.featured);
    const olderJobs = entries.filter((entry) => !entry.job.featured);

    renderInto("skills", t.chipGroups(data.skills));
    renderInto("jobs", t.jobList(featuredJobs) + t.more(t.decades(experience.groupEntries(olderJobs))));
    renderInto("projects", withMore(data.projects, t.cards));
    renderInto("certs", t.chipGroupsMore(data.certs, "cert"));
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
    "collapse-all": () => setDecadesOpen(false)
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
  new Tabs({
    nav: $("#site-nav"),
    panels: $$("#main > section[id]"),
    onChange: () => detailSheet.close()
  }).init();
  loadGithub();
})(window.CV);
