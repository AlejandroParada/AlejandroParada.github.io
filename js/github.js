/* Acceso a la API pública de GitHub. Devuelve repos en el mismo formato que los proyectos. */
(function (CV) {
  "use strict";

  const API = "https://api.github.com";

  const toProject = (repo) => ({ name: repo.name, description: repo.description, url: repo.html_url });

  /* Escritura personal, fuera del CV técnico. */
  const HIDDEN = new Set(["tesorosdemialma"]);

  const fetchRepos = async (user, limit) => {
    const response = await fetch(`${API}/users/${encodeURIComponent(user)}/repos?sort=updated&per_page=${limit}`);
    if (!response.ok) throw new Error(`GitHub API ${response.status}`);
    const repos = await response.json();
    return repos
      .filter((repo) => !repo.fork && repo.name !== `${user}.github.io` && !HIDDEN.has(repo.name.toLowerCase()))
      .map(toProject);
  };

  CV.github = Object.freeze({
    profileUrl: (user) => `https://github.com/${encodeURIComponent(user)}`,
    fetchRepos
  });
})(window.CV = window.CV || {});
