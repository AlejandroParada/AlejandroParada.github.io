/* Lógica de dominio de la experiencia: agrupa puestos por década de inicio. */
(function (CV) {
  "use strict";

  const { present: PRESENT, decade: decadeLabel } = CV.strings;

  const decadeOf = (year) => Math.floor(year / 10) * 10;

  const rangeOf = (entries) => {
    const from = Math.min(...entries.map(({ job }) => job.start));
    const ongoing = entries.some(({ job }) => job.end == null);
    const to = ongoing ? PRESENT : Math.max(...entries.map(({ job }) => job.end));
    return `${from} – ${to}`;
  };

  const groupEntries = (entries) => {
    const groups = new Map();
    [...entries]
      .sort((a, b) => b.job.start - a.job.start)
      .forEach((entry) => {
        const key = decadeOf(entry.job.start);
        if (!groups.has(key)) groups.set(key, []);
        groups.get(key).push(entry);
      });

    return Array.from(groups, ([year, grouped]) => ({
      label: decadeLabel(year),
      range: rangeOf(grouped),
      entries: grouped
    }));
  };

  const groupByDecade = (jobs) => groupEntries(jobs.map((job, id) => ({ id, job })));

  CV.experience = Object.freeze({ groupByDecade, groupEntries });
})(window.CV = window.CV || {});
