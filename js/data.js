/* Datos compartidos por todos los idiomas: configuración y registros de certificados.
   Los textos traducibles del CV están en js/content/<idioma>.js. */
(function (CV) {
  "use strict";

  const s = CV.strings;

  CV.config = Object.freeze({
    /* Usuario de GitHub: si se completa, se muestra el enlace y se listan los repos. */
    githubUser: "",
    githubRepoLimit: 30
  });

  /* Constructores por plataforma: a partir del código derivan emisor, enlace, imagen y fecha.
     Devuelven una función que completa el certificado con los textos del idioma. */
  const coursera = ({ code, share, hours, issued }) => (text) => ({
    ...text,
    issuer: "IBM · Coursera",
    date: CV.formatDate(issued),
    duration: s.hours(hours),
    credential: s.courseraCredential,
    url: share ? `https://coursera.org/share/${share}` : `https://www.coursera.org/account/accomplishments/records/${code}`,
    image: `https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~${code}/CERTIFICATE_LANDING_PAGE~${code}.jpeg`
  });

  const hpLife = ({ serial, issued }) => (text) => ({
    ...text,
    issuer: "HP LIFE · HP Foundation",
    date: CV.formatDate(issued),
    credential: s.hpLifeCredential,
    url: `https://www.life-global.org/certificate/${serial}`,
    image: `https://api.life-global.org/learning/api/certificates/${serial}/preview`
  });

  const SOLOLEARN_USER = "5873296";
  const SOLOLEARN_CERT = "https://www.sololearn.com/Certificate";

  const sololearnCert = ({ url, image, credentialId, issued, practical = false }) => (text) => ({
    summary: s.sololearnSummary(text.name, practical),
    ...text,
    issuer: "Sololearn",
    date: CV.formatDate(issued),
    credential: s.sololearnCredential(credentialId),
    url,
    image
  });

  /* Certificados antiguos: enlace por número de curso y usuario. */
  const sololearn = ({ course, ...cert }) => sololearnCert({
    ...cert,
    url: `${SOLOLEARN_CERT}/${course}-${SOLOLEARN_USER}/pdf/`,
    image: `${SOLOLEARN_CERT}/${course}-${SOLOLEARN_USER}/jpg/`
  });

  /* Enlace por código de credencial. */
  const sololearnById = (cert) => sololearnCert({
    ...cert,
    url: `${SOLOLEARN_CERT}/${cert.credentialId}/pdf/`,
    image: `${SOLOLEARN_CERT}/${cert.credentialId}/jpg/`
  });

  /* Cursos de IA: solo publican la imagen; acreditan comprensión teórica y práctica. */
  const sololearnBlob = ({ blob, ...cert }) => {
    const src = `https://blob.sololearn.com/certificates/${blob}.png`;
    return sololearnCert({ ...cert, url: src, image: src, practical: true });
  };

  const RECORDS = Object.freeze({
    "ibm-contenedores": coursera({ code: "4BIJIFCSFQMI", share: "f54e09b909e9a5ec5b0b18ce54ac30d4", hours: 17, issued: "2026-10-23" }),
    "ibm-agile-scrum": coursera({ code: "98T810E2D9OU", hours: 12, issued: "2026-08-29" }),
    "ibm-devops": coursera({ code: "50GMK2PVHXH1", share: "6b14f6a8f619d1c7e5eb218ad3e0378a", hours: 9, issued: "2026-07-28" }),

    "hp-tecnologia-negocios": hpLife({ serial: "52d36a3d-8551-45a2-9617-ffffb8b30de9", issued: "2026-10-27" }),
    "hp-planificacion-ia": hpLife({ serial: "e879386e-866b-4d5f-90da-0d3ef7ea7ef1", issued: "2026-10-01" }),
    "hp-sitios-web": hpLife({ serial: "e6ccc693-ca7b-403e-9bb4-099081b14e3a", issued: "2026-09-23" }),
    "hp-motores-crecimiento": hpLife({ serial: "f3bee975-33ee-4500-a769-fe0ae50bdc75", issued: "2026-08-22" }),
    "hp-pequeno-negocio": hpLife({ serial: "f8594d34-a12b-4343-aae6-656849d87acd", issued: "2026-08-05" }),
    "hp-economia-circular": hpLife({ serial: "5c7c52fc-1359-46bf-a2c9-e6089b7a25fb", issued: "2026-07-19" }),
    "hp-mentalidad-exitosa": hpLife({ serial: "624475ab-79e7-4841-ab44-24ff8a488f73", issued: "2026-07-02" }),
    "hp-planificacion-estrategica": hpLife({ serial: "e81f84ae-241a-4126-bf34-c4f42000cc71", issued: "2026-06-30" }),
    "hp-propuesta-valor": hpLife({ serial: "c4f2bc24-5fdb-4c75-83c7-648fd8d7481b", issued: "2026-06-30" }),
    "hp-experiencia-cliente": hpLife({ serial: "26d0c386-6ff2-4e43-981c-c602e9337731", issued: "2026-06-27" }),
    "hp-ciberseguridad": hpLife({ serial: "0f938f78-daf0-4a12-885b-3c28ee55b25f", issued: "2026-06-23" }),
    "hp-ciencia-datos": hpLife({ serial: "b967d711-81a9-4b8f-b005-3e2b3a27ee5d", issued: "2026-06-23" }),
    "hp-destrezas-digitales": hpLife({ serial: "7680ca27-b873-46fc-bf1a-57c344c2cb9b", issued: "2026-06-20" }),
    "hp-liderazgo": hpLife({ serial: "920147c2-8400-4c85-9fcb-9432001aeb31", issued: "2026-06-16" }),
    "hp-agile": hpLife({ serial: "515d3cb6-e71a-450b-8f91-33e09a61dc5c", issued: "2026-06-16" }),
    "hp-ia-negocios": hpLife({ serial: "e889c32f-5688-478d-88cc-3c5c509e05a4", issued: "2026-06-15" }),
    "hp-redes-profesionales": hpLife({ serial: "6ba14fde-457c-417e-b905-eabfedb2e79b", issued: "2026-06-12" }),
    "hp-pensamiento-critico": hpLife({ serial: "b1119a3b-e42a-4612-8025-feeb8b383b46", issued: "2026-06-10" }),

    "sl-ia-pensamiento-critico": sololearnBlob({ blob: "0e019e8f-15ef-4550-b8b6-0336ffb569db", credentialId: "CC-XRXKO4ZE", issued: "2026-05-29" }),
    "sl-ia-mentalidad": sololearnBlob({ blob: "4e90631c-c9bd-4bda-a7c6-ebc57c66fb50", credentialId: "CC-DWXTLBZP", issued: "2026-05-29" }),
    "sl-ia-producto-ux": sololearnBlob({ blob: "553194fe-0d0e-4ed5-84c5-932d5971de13", credentialId: "CC-O7HPNXO8", issued: "2026-05-29" }),
    "sl-ia-sesgos": sololearnBlob({ blob: "f773f9a3-a10b-4c29-ab38-5a6e384a0258", credentialId: "CC-RA2CQHLT", issued: "2026-05-29" }),
    "sl-ia-agenticos": sololearnBlob({ blob: "3b3b8f50-447b-41f8-9f18-f7b7c92cd0bb", credentialId: "CC-TCEIHFWB", issued: "2026-05-29" }),
    "sl-ia-seo": sololearnBlob({ blob: "e7f9c367-9526-467c-acce-b348e57047e2", credentialId: "CC-RD3UXFJR", issued: "2026-05-29" }),
    "sl-ia-planificacion": sololearnBlob({ blob: "009e79cb-d81f-4d99-b1cc-fdb88ba90b99", credentialId: "CC-ZKUG0PTQ", issued: "2026-05-27" }),
    "sl-ia-marketing": sololearnBlob({ blob: "22ea76f7-c56b-41e7-bb30-4de02acc08b9", credentialId: "CC-OO43B27Y", issued: "2026-05-27" }),
    "sl-ia-escribir": sololearnBlob({ blob: "0c0fa132-c84c-4934-9c42-a44c4be9dade", credentialId: "CC-R7QYI815", issued: "2026-05-26" }),
    "sl-ia-pruebas-ab": sololearnBlob({ blob: "59ba04c1-07bd-4284-8f96-fade271ef3a7", credentialId: "CC-CF5QUFYE", issued: "2026-05-26" }),
    "sl-ia-prompts": sololearnBlob({ blob: "ee272d15-da30-4a50-8cd9-a54919e35ce9", credentialId: "CC-11E2SAGV", issued: "2026-05-26" }),
    "sl-ia-aprendizaje-automatico": sololearnBlob({ blob: "5d4c6ca9-7f3e-44ec-a964-9d97b5caccb4", credentialId: "CC-IAYN54KT", issued: "2026-05-25" }),
    "sl-ia-llms": sololearnBlob({ blob: "84281ba7-729b-439a-8cca-abae626073ae", credentialId: "CC-MIARBFXH", issued: "2026-05-25" }),
    "sl-ia-etica": sololearnBlob({ blob: "1163e130-1dc1-40f4-8186-b12886749bbb", credentialId: "CC-TDWXVLOP", issued: "2026-05-25" }),
    "sl-ia-investigacion": sololearnBlob({ blob: "ef10555d-180d-4da3-aaa6-bc34670093fe", credentialId: "CC-P4RN1AGD", issued: "2026-05-25" }),
    "sl-ia-visualizacion": sololearnBlob({ blob: "019315bd-5e81-4ed7-babd-17af82b811af", credentialId: "CC-YXWJAUXH", issued: "2026-05-25" }),
    "sl-ia-alfabetizacion": sololearnBlob({ blob: "d20eb817-49da-42f8-a358-88de86913005", credentialId: "CC-DQHN9WDA", issued: "2026-05-25" }),
    "sl-ia-analisis-datos": sololearnBlob({ blob: "6ef7a331-7bdf-4824-b54b-f06b4b81314e", credentialId: "CC-STIHO9TE", issued: "2026-05-24" }),
    "sl-ia-creatividad": sololearnBlob({ blob: "90a410fa-90a3-4050-8cd4-5e74185ad3c8", credentialId: "CC-Y5HSDHX7", issued: "2026-05-22" }),
    "sl-ia-lluvia-ideas": sololearnBlob({ blob: "35727f7d-6395-4273-859e-bf424e74e261", credentialId: "CC-TTW0WMV8", issued: "2026-05-22" }),
    "sl-ia-generativa": sololearnBlob({ blob: "3985190a-c4a7-400e-8519-25443059cd45", credentialId: "CC-IZZ2EPBK", issued: "2026-05-21" }),

    "sl-responsive": sololearnById({ credentialId: "CT-FXIQ7CLM", issued: "2022-01-26" }),

    "sl-php": sololearn({ course: 1059, credentialId: "CT-FE1AFLMO", issued: "2017-12-12" }),
    "sl-csharp": sololearn({ course: 1080, credentialId: "CT-PXTNYQ8K", issued: "2017-12-11" }),
    "sl-javascript": sololearnById({ credentialId: "CT-UH3NJJCH", issued: "2017-12-03" }),
    "sl-jquery": sololearn({ course: 1082, credentialId: "CT-RKLAVPV5", issued: "2017-12-02" }),
    "sl-html": sololearn({ course: 1014, credentialId: "CT-XCTLSIQB", issued: "2017-11-10" }),
    "sl-python": sololearn({ course: 1073, credentialId: "CT-OQFVPXMU", issued: "2017-11-08" })
  });

  /* Usado por los archivos de contenido: une el registro con los textos traducidos. */
  CV.cert = (id, text) => {
    const build = RECORDS[id];
    if (!build) throw new Error(`Certificado desconocido: ${id}`);
    return Object.freeze({ id, ...build(text) });
  };
})(window.CV = window.CV || {});
