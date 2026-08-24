/* ==========================================================================
   nav.js — Datos del negocio y estructura de navegación.
   Todo lo que hay aquí procede de colegiosanmartin.com o de sus PDF.
   Ningún dato de este archivo está inventado. Si falta, va a PENDIENTE.md.
   ========================================================================== */

'use strict';

/* --------------------------------------------------------------------------
   SITE — datos duros del centro.
   -------------------------------------------------------------------------- */
const SITE = {
  nombre: 'Colegio San Martín',
  nombreCorto: 'San Martín',
  titularidad: 'Martín Macías, S.A.', // origen: PDF POLITICA_DE_CALIDAD.pdf
  dominio: 'https://colegiosanmartin.com',

  // origen: /index.php/contacto/contacto
  direccion: {
    calle: 'Avenida del Doctor García Tapia 124',
    cp: '28030',
    ciudad: 'Madrid',
    pais: 'ES',
    region: 'Comunidad de Madrid',
    barrio: 'Moratalaz',
  },

  // origen: barra superior del sitio antiguo y página de admisiones
  telefono: '91 439 06 24',
  telefonoE164: '+34914390624',

  // Los correos no se escriben enteros en el HTML: se ensamblan en el
  // navegador desde data-correo="cuenta|dominio" (ver assets/js/site.js).
  // origen: plugin emailcloak de Joomla, descifrado del original.
  correo: { cuenta: 'colegiosanmartin', dominio: 'colegiosanmartin.com' },
  correoEduca: { cuenta: 'cc.sanmartin.madrid', dominio: 'educa.madrid.org' },

  // origen: enlace de Google Maps del pie de la página de localización
  coordenadas: { lat: 40.4117735, lon: -3.6526342 },

  codigoCentro: '28017893', // origen: /index.php/admisiones

  // origen: /index.php/contacto/como-llegar
  transporte: {
    metro: 'Metro Vinateros (línea 9)',
    bus: 'E.M.T. (Autobuses líneas 30, 32, 71 y 113)',
  },

  // origen: PDF documento(4).pdf del proceso de admisión
  horarios: [
    { etapa: 'Infantil y Primaria', texto: 'de 9:00 a 12:30 y de 14:30 a 16:00' },
    { etapa: 'E.S.O.', texto: 'de 8:25 a 12:45 y de 14:30 a 16:20' },
  ],

  // origen: barra superior del sitio antiguo
  redes: [
    { nombre: 'Facebook', icono: 'facebook', url: 'https://www.facebook.com/pages/category/Elementary-School/Colegio-San-Mart%C3%ADn-Moratalaz-142327329950983/' },
    { nombre: 'Twitter', icono: 'twitter', url: 'https://twitter.com/smartincolegio?lang=es' },
    { nombre: 'YouTube', icono: 'youtube', url: 'https://www.youtube.com/channel/UC58Sdf0cUCaX6nSVISlGLlA' },
  ],

  // origen: barra superior del sitio antiguo
  plataforma: { nombre: 'Acceso plataforma', url: 'http://eva.colegiosanmartin.com/Login.aspx' },

  // origen: /index.php/admisiones
  secretariaVirtual: 'https://www.comunidad.madrid/servicios/educacion/solicita-tu-admision-educacion-infantil-obligatoria-bachillerato',
  solicitudCam: 'https://www.comunidad.madrid/sites/default/files/solicitud_autocumplimentable_admision_regimen_general_25_26_1.pdf',
};

/* --------------------------------------------------------------------------
   NAV — arquitectura de información nueva.
   El menú original era plano y larguísimo (más de 40 entradas en tres
   niveles). Aquí se reagrupa en seis familias temáticas. La tabla de
   equivalencias antiguo → nuevo está en README.md.
   -------------------------------------------------------------------------- */
const NAV = [
  {
    titulo: 'El colegio',
    url: 'colegio.html',
    resumen: 'Quiénes somos, cómo enseñamos y con qué normas convivimos.',
    columnas: [
      {
        titulo: 'Quiénes somos',
        enlaces: [
          { texto: 'Identidad', url: 'colegio.html', desc: 'Misión, visión y valores del centro.' },
          { texto: 'Propuesta educativa', url: 'colegio.html#propuesta', desc: 'Educación integral y compromiso de los educadores.' },
          { texto: 'Metodología', url: 'colegio.html#metodologia', desc: 'Didáctica abierta, flexible y personalizada.' },
          { texto: 'Comunidad educativa', url: 'colegio.html#comunidad', desc: 'Alumnado, familias, profesorado y titularidad.' },
        ],
      },
      {
        titulo: 'Normas y calidad',
        enlaces: [
          { texto: 'Plan Incluyo', url: 'convivencia.html', desc: 'Normas de convivencia, asistencia y correcciones.' },
          { texto: 'Política de calidad', url: 'calidad.html', desc: 'Compromisos de Martín Macías, S.A.' },
        ],
      },
    ],
    imagen: { src: 'assets/img/aula-halloween.jpg', alt: 'Alumnado de Primaria disfrazado en su aula durante una actividad del centro.' },
  },
  {
    titulo: 'Etapas',
    url: 'etapas.html',
    resumen: 'De 0 a 16 años sin cambiar de centro, más Formación Profesional.',
    columnas: [
      {
        titulo: 'Infantil',
        enlaces: [
          { texto: 'Primer ciclo · 0-3 años', url: 'infantil-primer-ciclo.html', desc: 'Etapa privada con posibilidad de beca.' },
          { texto: 'Segundo ciclo · 3-6 años', url: 'infantil.html', desc: 'Etapa concertada.' },
        ],
      },
      {
        titulo: 'Obligatoria',
        enlaces: [
          { texto: 'Primaria', url: 'primaria.html', desc: 'Etapa concertada, de 6 a 12 años.' },
          { texto: 'E.S.O.', url: 'eso.html', desc: 'Etapa concertada, de 12 a 16 años.' },
        ],
      },
      {
        titulo: 'Después de la ESO',
        enlaces: [
          { texto: 'Formación Profesional', url: 'formacion-profesional.html', desc: 'Grado Medio y Grado Superior, privado con posibilidad de beca.' },
        ],
      },
    ],
    imagen: { src: 'assets/img/infantil-pintando.jpg', alt: 'Niña de Educación Infantil con bata de cuadros pintando una huevera en el aula.' },
  },
  {
    titulo: 'Programas',
    url: 'programas.html',
    resumen: 'Inglés certificado, matemáticas ABN, tablets en el aula y PROA+.',
    columnas: [
      {
        titulo: 'Idiomas',
        enlaces: [
          { texto: 'Inglés', url: 'ingles.html', desc: 'Centro examinador Cambridge, programa BEDA y método Vaughan.' },
        ],
      },
      {
        titulo: 'Proyectos',
        enlaces: [
          { texto: 'Matemáticas ABN', url: 'matematicas-abn.html', desc: 'Cálculo comprensivo desde Educación Infantil.' },
          { texto: 'Nuevas tecnologías', url: 'tecnologia.html', desc: 'Educa Tab: enseñanza digital con tablets.' },
          { texto: 'Plan Digital', url: 'plan-digital.html', desc: 'Digitalización del centro dentro de la PGA.' },
          { texto: 'PROA+', url: 'proa.html', desc: 'Refuerzo educativo y espacios inclusivos.' },
        ],
      },
    ],
    imagen: { src: 'assets/img/primaria-tablet.jpg', alt: 'Dos alumnos de Primaria trabajando con una tablet sobre el pupitre.' },
  },
  {
    titulo: 'Servicios',
    url: 'servicios.html',
    resumen: 'Comedor, salud, orientación y extraescolares, con sus precios.',
    columnas: [
      {
        titulo: 'Durante la jornada',
        enlaces: [
          { texto: 'Comedor', url: 'comedor.html', desc: 'Ausolan, con diez menús adaptados descargables.' },
          { texto: 'Telepediatría', url: 'telepediatria.html', desc: 'Servicio Kidscare en horario escolar y extraescolar.' },
          { texto: 'Orientación', url: 'orientacion.html', desc: 'Psicólogo del centro para Infantil, Primaria y Secundaria.' },
        ],
      },
      {
        titulo: 'Fuera del horario lectivo',
        enlaces: [
          { texto: 'Extraescolares', url: 'extraescolares.html', desc: 'Actividades y precios del curso 2025/2026.' },
        ],
      },
    ],
    imagen: { src: 'assets/img/judo-grupo.jpg', alt: 'Grupo de alumnos de la extraescolar de judo con sus cinturones en el gimnasio del colegio.' },
  },
  {
    titulo: 'Admisiones',
    url: 'admisiones.html',
    resumen: 'Cómo pedir plaza, con qué documentos y en qué fechas.',
    columnas: [
      {
        titulo: 'Proceso ordinario',
        enlaces: [
          { texto: 'Cómo pedir plaza', url: 'admisiones.html', desc: 'Trámites, plazos y aclaraciones del proceso 2026-2027.' },
          { texto: 'Documentos y descargas', url: 'admisiones.html#documentos', desc: 'Instrucciones, calendario, baremo, vacantes y anexos.' },
        ],
      },
    ],
    imagen: { src: 'assets/img/manos-balon.jpg', alt: 'Manos de varios alumnos levantando un balón contra el cielo en el patio.' },
  },
  {
    titulo: 'Familias',
    url: 'familias.html',
    resumen: 'Calendario, menús, material, reuniones y resultados.',
    columnas: [
      {
        titulo: 'Del día a día',
        enlaces: [
          { texto: 'Calendario escolar', url: 'calendario.html', desc: 'Curso 2026-2027: inicio, vacaciones y días no lectivos.' },
          { texto: 'Material escolar', url: 'material.html', desc: 'Listas de 1º a 6º de Primaria.' },
          { texto: 'Reuniones', url: 'reuniones.html', desc: 'Fechas de reunión por curso.' },
          { texto: 'Menús del comedor', url: 'comedor.html#menus', desc: 'Diez menús adaptados en PDF.' },
        ],
      },
      {
        titulo: 'Información del centro',
        enlaces: [
          { texto: 'Información a las familias', url: 'familias.html', desc: 'Índice de lo que el centro publica cada curso.' },
          { texto: 'Avisos', url: 'noticias.html', desc: 'Nota del Consejo Escolar y protección de datos.' },
        ],
      },
    ],
    imagen: { src: 'assets/img/comedor.jpg', alt: 'Servicio de comedor del colegio.' },
  },
];

/* Enlace suelto, sin desplegable. */
const NAV_SIMPLE = [{ titulo: 'Contacto', url: 'contacto.html' }];

/* --------------------------------------------------------------------------
   FOOT — pie de página.
   -------------------------------------------------------------------------- */
const FOOT = [
  {
    titulo: 'El colegio',
    enlaces: [
      { texto: 'Identidad', url: 'colegio.html' },
      { texto: 'Plan Incluyo', url: 'convivencia.html' },
      { texto: 'Política de calidad', url: 'calidad.html' },
      { texto: 'Comunidad educativa', url: 'colegio.html#comunidad' },
    ],
  },
  {
    titulo: 'Etapas',
    enlaces: [
      { texto: 'Infantil 0-3', url: 'infantil-primer-ciclo.html' },
      { texto: 'Infantil 3-6', url: 'infantil.html' },
      { texto: 'Primaria', url: 'primaria.html' },
      { texto: 'E.S.O.', url: 'eso.html' },
      { texto: 'Formación Profesional', url: 'formacion-profesional.html' },
    ],
  },
  {
    titulo: 'Servicios',
    enlaces: [
      { texto: 'Comedor', url: 'comedor.html' },
      { texto: 'Telepediatría', url: 'telepediatria.html' },
      { texto: 'Orientación', url: 'orientacion.html' },
      { texto: 'Extraescolares', url: 'extraescolares.html' },
    ],
  },
  {
    titulo: 'Familias',
    enlaces: [
      { texto: 'Calendario escolar', url: 'calendario.html' },
      { texto: 'Material escolar', url: 'material.html' },
      { texto: 'Reuniones', url: 'reuniones.html' },
      { texto: 'Avisos', url: 'noticias.html' },
    ],
  },
];

module.exports = { SITE, NAV, NAV_SIMPLE, FOOT };
