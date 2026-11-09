# Guía de mejora del CV — Full Stack Senior

Referencia de trabajo para completar y elevar el contenido de Ale_cv según el estándar que espera un hiring manager / recruiter IT para posiciones **Full Stack Senior**.

- **Sitio:** [alejandroparada.github.io](https://alejandroparada.github.io/)
- **Nota de partida (nov. 2026):** 6,5 / 10
- **Idioma base del contenido:** español (`js/content/es.js`); luego sincronizar `js/content/en.js`

---

## Diagnóstico breve

El sitio se ve profesional y usable. El gap no es la web: es que el **contenido aún no cierra el estándar senior**.

| Bien | A mejorar |
|---|---|
| Título claro, +20 años, disponibilidad | Logros sin impacto cuantificado |
| Marcas (TCS, PwC, McKesson) | Stack percibido como legado + “intros” |
| i18n, SEO, PDF, accesibilidad | Proyectos sin URL / demos |
| Nicho: modernización + SQL | Certificaciones con mucho ruido |
| Craft del sitio | Huecos en la línea de tiempo; poco liderazgo |

**Formato objetivo de cada logro:**

> **Contexto** (qué problema había) → **Acción** (qué hiciste vos, con qué tecnología) → **Resultado** (qué cambió, idealmente medido) → **Alcance** (usuarios, sistemas o equipos)

---

## Cómo responder esta guía

No hace falta redactar bien. Sirven más los **números y hechos** que las frases armadas.

- Si no hay dato exacto, usar un rango (“entre 30 y 50 sucursales”) y aclarar si es estimación.
- Si algo es confidencial, describirlo sin nombre (“cliente del sector salud en EE. UU.”).
- Responder **una etapa por vez**; con eso se reescriben bullets y recién después se avanza.
- Al aplicar textos al sitio: editar primero `js/content/es.js` y replicar en `js/content/en.js`.

---

## Plan gradual

| Etapa | Foco | Por qué primero |
|---|---|---|
| 1 | Pigalle, Netviax y línea de tiempo 2020–2026 | Es lo primero que lee un recruiter |
| 2 | Mutualista HE, 1950Labs y Electrosistemas | Evidencia de causa raíz y rendimiento |
| 3 | Proyectos con link y GitHub | Pasar de “dice que sabe” a “lo demuestra” |
| 4 | Skills, certificaciones, resumen e inglés | Ordenar la señal y sacar ruido |
| 5 | TCS, Númina y anteriores | Marcas fuertes; alcanza con 1–2 líneas por rol |

### Checklist de avance

- [ ] Etapa 1 — Pigalle + Netviax + timeline
- [ ] Etapa 2 — Mutualista + 1950Labs + Electrosistemas
- [ ] Etapa 3 — Proyectos + GitHub
- [ ] Etapa 4 — Skills + certs + resumen + inglés
- [ ] Etapa 5 — TCS / Númina / anteriores
- [ ] Textos aplicados en `es.js` y `en.js`

---

## Etapa 1: Farmacias Pigalle (abr. 2023 – abr. 2026)

Rol más importante: el más reciente, título senior, Kubernetes e IA.

### Escala y contexto

1. ¿Cuántas sucursales usan el sistema? ¿Cuántos usuarios o terminales hay por sucursal?
2. ¿Qué hace el sistema de sucursal? ¿Ventas, stock, recetas, caja, precios, todo junto?
3. ¿Qué volumen maneja? (transacciones por día, productos en catálogo, registros sincronizados)
4. ¿Qué había antes? ¿Reemplazo, sistema nuevo o extensión?

### Arquitectura y decisiones técnicas

5. ¿Cómo se comunican las sucursales con la central? (API REST, colas, offline + sync)
6. ¿Qué pasa si una sucursal pierde la conexión? ¿Lo resolviste vos?
7. ¿Qué tecnología usaste en el frontend? (web, escritorio, Angular, Vue, Blazor, WinForms)
8. ¿Qué versión de .NET? (.NET Framework o .NET Core / 6 / 8)
9. ¿Qué decisiones de arquitectura tomaste o propusiste? ¿Qué alternativas descartaste y por qué?

### Kubernetes

10. ¿Qué corría en Kubernetes? ¿Cuántos servicios o pods?
11. ¿Qué hacías vos: manifiestos YAML, despliegues, monitoreo, incidentes?
12. ¿Era on-premise o nube (AKS, EKS, GKE)?
13. ¿Había CI/CD? ¿Con qué herramienta?

### Flujos agénticos e IA

14. ¿Qué problema resolvía la IA?
15. ¿Qué modelos o herramientas usaste? (OpenAI, Azure OpenAI, Semantic Kernel, LangChain, agentes propios)
16. ¿Estaba en producción o era PoC?
17. ¿Qué resultado dio? (tiempo ahorrado, tareas automatizadas, errores reducidos)

### Equipo y liderazgo

18. ¿De cuántas personas era el equipo? ¿Qué rol tenías?
19. ¿Hacías code review, mentoring, estándares o estimaciones?
20. ¿Tratabas directo con negocio u operaciones de farmacia?

### Resultados

21. ¿Qué mejoró de forma medible? (tiempo de venta, errores de stock, incidentes, tiempo de despliegue)
22. ¿Cuál es el logro del que estás más orgulloso ahí?
23. ¿Por qué terminó en abril de 2026? (solo para encuadrar; no va textual al CV)

---

## Etapa 1: Netviax Solutions (feb. 2022 – feb. 2023)

1. ¿Para qué clientes de turismo trabajabas? ¿Cuántos sistemas o productos mantenías?
2. ¿Qué tipo de sistemas eran? (reservas, motores de búsqueda, backoffice, GDS, proveedores)
3. ¿Cuántos defectos resolvías por mes, más o menos? ¿Hubo alguno crítico tuyo?
4. Sobre la refactorización: ¿qué módulo, qué problema y qué patrón aplicaste?
5. Sobre la optimización de consultas: ¿cuánto tardaba antes y después? ¿Qué cambiaste?
6. ¿Qué versión de Laravel y PHP? ¿Frontend: Vue, Blade, jQuery?
7. ¿Había tests, CI/CD o Docker?
8. ¿Lo hacías en simultáneo con Pigalle en 2023? ¿Freelance o parcial?

---

## Etapa 1: Línea de tiempo (crítica)

1. **Mar. 2020 – feb. 2022:** ¿qué hiciste? (freelance, proyectos propios, estudio, pandemia, etc.)
2. **"Sistemas HE" dice jun. 2019 – actualidad**, pero el empleo termina en mar. 2020. ¿Seguiste como freelance? ¿Eso cubre el hueco?
3. **May. – nov. 2026:** ¿qué estás haciendo ahora? (BYU-I, IBM, KDSuy, freelance)
4. ¿Preferís remoto, híbrido o presencial? ¿Aceptás contratos en el exterior?

---

## Etapa 2: Mutualista Hospital Evangélico (jun. 2019 – mar. 2020)

1. Sincronización de suministros: ¿entre qué sistemas/sedes? ¿Qué fallaba y con qué consecuencia?
2. ¿Cómo lo resolviste y con qué tecnología?
3. Fallas de red en clientes desactualizados: ¿causa? ¿A cuántas terminales afectaba?
4. Script de monitoreo: ¿lenguaje? ¿Qué detectaba? ¿Redujo el tiempo de detección?
5. ¿Qué incluye “Sistemas HE”? Nombres de módulos y para qué sirve cada uno.

---

## Etapa 2: 1950Labs (2018 – 2019)

1. ¿Qué producto o cliente era y de qué sector?
2. ¿Qué stack de frontend se usaba?
3. ¿Cuál fue el cuello de botella en la base de datos y cuánto mejoró?
4. ¿Trabajabas con QA en proceso ágil? ¿Cuántos sprints o entregas?

---

## Etapa 2: Electrosistemas SA (may. 2015 – mar. 2017)

1. Caja chica: ¿de cuánto a cuánto bajó el tiempo? ¿Cuántas personas/áreas lo usaban?
2. Combustible: ¿cuántos vehículos? ¿Hubo desvíos detectados o ahorros?
3. “Reclamo de cercos (móvil)”: ¿era app? ¿Con qué tecnología?
4. ¿Fuiste el único desarrollador de SSGO o había equipo?

---

## Etapa 3: Proyectos y evidencia

### KDSuy (Django, Channels, Redis)

1. ¿Estado: producción, piloto o prototipo? ¿Lo usa algún restaurante?
2. ¿Qué problema resuelve y qué parte de tiempo real implementaste con Channels?
3. ¿Se puede publicar repo o demo? Si no, ¿capturas + README?

### ChecklistEmergencia (PWA)

4. ¿Cuántos usuarios? ¿Offline? ¿Stack?
5. ¿Tiene URL pública?

### GitHub

6. ¿Qué repos hay en `github.com/AlejandroParada`? ¿Cuáles pueden quedar públicos con README?
7. ¿Proyecto vitrina .NET 8 + TypeScript + Docker?

---

## Etapa 4: Skills, certificaciones e inglés

1. Calificar del **1 al 5**: C#, .NET Core, SQL Server, Angular, Vue, TypeScript, Docker, Kubernetes, Laravel, Python, Django.
2. ¿Usaste en producción Azure, AWS, EF, Dapper, xUnit/NUnit, Git flow, RabbitMQ u otras no listadas?
3. ¿Cuáles son las **8–12 certificaciones** más valiosas? (el resto a “ver más” o LinkedIn)
4. **Inglés:** ¿entrevista técnica? ¿documentación? ¿estudio actual? (BYU-I en inglés suma)
5. ¿Qué puesto buscás exactamente? (.NET Senior Uruguay, remoto EE. UU., tech lead, modernización de legados)

---

## Etapa 5: TCS, Númina y anteriores (versión corta)

Para cada rol, 2 o 3 respuestas:

1. ¿Cuál fue el logro más concreto y qué número lo respalda?
2. ¿Qué tecnología usaste?
3. Solo TCS: en las migraciones PwC a WPF, ¿diseñaste, desarrollaste o lideraste? ¿Tamaño del equipo?

---

## Entregables esperados por etapa

Al cerrar cada etapa con respuestas:

1. Bullets reescritos (contexto → acción → resultado) en español
2. Lista de datos faltantes o a verificar
3. Versión en inglés equivalente para `en.js`
4. Al final del plan: resumen nuevo + skills reordenadas según el perfil objetivo

---

## Mejoras priorizadas (recordatorio)

1. Reescribir 6–8 bullets top (Pigalle, Netviax, Mutualista, TCS/PwC) con métricas.
2. Tres case studies con link (Pigalle, un legado modernizado, KDSuy).
3. Skills: “core” arriba; jQuery / Access / ISO más abajo.
4. Recortar certs a ~8–12 relevantes.
5. Activar GitHub (`githubUser`) y destacar 2–3 repos con README.
6. Cerrar huecos temporales en una línea.
7. Ajustar inglés / target geográfico según el mercado objetivo.
8. Señales senior explícitas: mentoring, code review, diseño de APIs, ownership de deploys, arquitectura.

---

## Subnotas de partida

| Dimensión | Nota |
|---|---|
| Primera impresión / claridad | 8 |
| Encaje Full Stack Senior (mercado actual) | 5,5 |
| Evidencia (proyectos, GitHub, métricas) | 4,5 |
| Experiencia / marcas | 7,5 |
| Señal de seniority (liderazgo + impacto) | 5 |
| Presentación web / UX | 8 |
| Certificaciones (calidad de señal) | 5 |

---

## Próximo paso sugerido

Responder la **Etapa 1** (Pigalle + Netviax + línea de tiempo) y usar esas respuestas para reescribir el resumen y los bullets recientes antes de seguir.
