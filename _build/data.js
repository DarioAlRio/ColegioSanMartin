/* ==========================================================================
   data.js — Contenido compartido entre páginas.
   TODO procede de colegiosanmartin.com o de los PDF que publica el dominio.
   Cada bloque lleva anotado su origen. Nada de aquí está inventado.
   ========================================================================== */

'use strict';

/* --------------------------------------------------------------------------
   ETAPAS · origen: /index.php/oferta-educativa y sus hijas
   -------------------------------------------------------------------------- */
const ETAPAS = [
  {
    id: 'infantil-primer-ciclo',
    url: 'infantil-primer-ciclo.html',
    nombre: 'Primer ciclo de Infantil',
    edades: '0 a 3 años',
    regimen: 'Etapa privada con posibilidad de beca',
    concertada: false,
    color: 'malva',
    resumen: 'La escuela infantil del centro, para las familias que empiezan antes de los tres años.',
  },
  {
    id: 'infantil',
    url: 'infantil.html',
    nombre: 'Segundo ciclo de Infantil',
    edades: '3 a 6 años',
    regimen: 'Etapa concertada',
    concertada: true,
    color: 'sol',
    resumen: 'Hábitos, autonomía y lo emocional por delante, con inglés y francés desde los tres años.',
  },
  {
    id: 'primaria',
    url: 'primaria.html',
    nombre: 'Primaria',
    edades: '6 a 12 años',
    regimen: 'Etapa concertada',
    concertada: true,
    color: 'verde',
    resumen: 'Seis cursos para ganar madurez, destrezas y autonomía antes de la Secundaria.',
  },
  {
    id: 'eso',
    url: 'eso.html',
    nombre: 'E.S.O.',
    edades: '12 a 16 años',
    regimen: 'Etapa concertada',
    concertada: true,
    color: 'acero',
    resumen: 'Aulas flexibles y método científico, con el alumno como protagonista de su aprendizaje.',
  },
  {
    id: 'formacion-profesional',
    url: 'formacion-profesional.html',
    nombre: 'Formación Profesional',
    edades: 'Grado Medio y Grado Superior',
    regimen: 'Privado con posibilidad de beca',
    concertada: false,
    color: 'marino',
    resumen: 'Técnico en Gestión Administrativa y Técnico Superior en Educación Infantil.',
  },
];

/* --------------------------------------------------------------------------
   PRECIOS DE SERVICIOS · origen: PDF /images/precios/servicios.pdf
   El propio PDF se titula «CURSO 2024/2025». Se publica con su curso a la vista.
   -------------------------------------------------------------------------- */
const PRECIOS_SERVICIOS = {
  curso: '2024/2025',
  pdf: 'assets/docs/servicios.pdf',
  filas: [
    { concepto: 'Comedor', precio: '138 €', periodo: 'al mes' },
    { concepto: 'Gabinete médico', precio: '50,30 €', periodo: 'por curso' },
    { concepto: 'Gabinete psicopedagógico', precio: '67 €', periodo: 'por curso' },
    { concepto: 'Seguro escolar', precio: '9 €', periodo: 'por curso' },
  ],
};

/* --------------------------------------------------------------------------
   EXTRAESCOLARES · origen: PDF /images/precios/extraescolares.pdf
   -------------------------------------------------------------------------- */
const EXTRAESCOLARES = {
  curso: '2025/2026',
  pdf: 'assets/docs/extraescolares.pdf',
  dePago: [
    { actividad: 'Judo', precio: '34 €', dias: 'Lunes y miércoles a mediodía (12:30-13:30)', etapa: 'Infantil y Primaria' },
    { actividad: 'Natación', precio: '53 €', dias: 'Martes a mediodía', etapa: 'Infantil y Primaria' },
    { actividad: 'Robótica y programación de videojuegos', precio: '30 €', dias: 'Jueves a mediodía (12:30-13:30)', etapa: 'Infantil y Primaria' },
    { actividad: 'Baile moderno', precio: '20 €', dias: 'Viernes', etapa: 'Infantil y Primaria' },
    { actividad: 'Child English', precio: '20 €', dias: 'Lunes o miércoles', etapa: 'Infantil y Primaria' },
    { actividad: 'Minichef', precio: '34 €', dias: 'Jueves', etapa: 'Infantil y Primaria' },
    { actividad: 'Voleibol', precio: '20 €', dias: 'Martes', etapa: 'ESO' },
  ],
  gratuitas: [
    {
      franja: 'De 16:00 a 17:00',
      etapa: 'Infantil y Primaria',
      dias: 'Diario',
      actividades: ['Taller de francés', 'Ajedrez', 'Taller de lengua', 'Taller de teatro', 'Taller de matemáticas', 'Multideporte', 'Taller de música'],
    },
    {
      franja: 'De 16:20 a 17:20',
      etapa: 'ESO',
      dias: 'De lunes a jueves',
      actividades: ['Nuevas tecnologías', 'Docucine', 'Multideporte', 'Ajedrez', 'Taller de teatro', 'Divertimates'],
    },
  ],
  // Nota literal del PDF, se reproduce sin cambios.
  nota: 'LES RECORDAMOS QUE ESTAS ACTIVIDADES SON VOLUNTARIAS, NO LUCRATIVAS Y NO DISCRIMINATORIAS.',
  advertencias: [
    'Todas las actividades están pendientes de confirmación, en función del número de alumnos.',
    'Los días en los que se imparten las actividades pueden variar, en función del número de alumnos que las seleccionen.',
  ],
};

/* --------------------------------------------------------------------------
   RESULTADOS DE PRUEBAS EXTERNAS · origen: PDF /images/precios/resultados.pdf
   -------------------------------------------------------------------------- */
const RESULTADOS = {
  curso: '2023-2024',
  pdf: 'assets/docs/resultados.pdf',
  grupos: [
    {
      titulo: 'Evaluación censal · 4º de E.S.O.',
      filas: [
        { materia: 'Lengua Castellana y Literatura', nota: '8,00' },
        { materia: 'Matemáticas', nota: '7,45' },
        { materia: 'Inglés', nota: '7,54' },
        { materia: 'Geografía e Historia', nota: '7,59' },
      ],
    },
    {
      titulo: 'Evaluación censal · 6º de Primaria',
      filas: [
        { materia: 'Lengua', nota: '8,40' },
        { materia: 'Matemáticas', nota: '8,87' },
        { materia: 'Inglés', nota: '9,27' },
        { materia: 'Ciencias Sociales', nota: '9,20' },
      ],
    },
  ],
  cambridge: { etiqueta: 'Cambridge', valor: '95 %', detalle: 'porcentaje de aprobados' },
};

/* --------------------------------------------------------------------------
   MENÚS DEL COMEDOR · origen: /index.php/nuestro-cole/servicios/comedor
   -------------------------------------------------------------------------- */
const MENUS = [
  { nombre: 'Menú basal', archivo: 'assets/docs/basal.pdf' },
  { nombre: 'Menú Escuela Infantil', archivo: 'assets/docs/basal_escuela.pdf' },
  { nombre: 'Menú sin gluten', archivo: 'assets/docs/sin_gluten.pdf' },
  { nombre: 'Menú purés bebés', archivo: 'assets/docs/pures.pdf' },
  { nombre: 'Menú purés bebés sin puerro', archivo: 'assets/docs/sin_puerro.pdf' },
  { nombre: 'Menú sin huevo', archivo: 'assets/docs/sin_huevo.pdf' },
  { nombre: 'Menú sin lactosa y sin zanahoria', archivo: 'assets/docs/sin_lactosazanahoria.pdf' },
  { nombre: 'Menú sin lentejas', archivo: 'assets/docs/sin_lentejas.pdf' },
  { nombre: 'Menú sin legumbres secas', archivo: 'assets/docs/sin_legumbres.pdf' },
  { nombre: 'Menú sin fritos', archivo: 'assets/docs/sin_fritos.pdf' },
];

/* --------------------------------------------------------------------------
   MATERIAL ESCOLAR · origen: /index.php/nuestro-cole/noticias/material
   -------------------------------------------------------------------------- */
const MATERIAL = [
  { curso: '1º de Primaria', archivo: 'assets/docs/material_primero.pdf' },
  { curso: '2º de Primaria', archivo: 'assets/docs/material_segundo.pdf' },
  { curso: '3º de Primaria', archivo: 'assets/docs/material_tercero.pdf' },
  { curso: '4º de Primaria', archivo: 'assets/docs/material_cuarto.pdf' },
  { curso: '5º de Primaria', archivo: 'assets/docs/material_quinto.pdf' },
  { curso: '6º de Primaria', archivo: 'assets/docs/material_sexto.pdf' },
];

/* --------------------------------------------------------------------------
   REUNIONES · origen: /index.php/nuestro-cole/noticias/reuniones
   El original sólo tiene fecha para el primer ciclo; el resto pone «pendiente».
   Se reproduce tal cual: no se inventa ninguna fecha.
   -------------------------------------------------------------------------- */
const REUNIONES = {
  curso: '2026-2027',
  filas: [
    { grupo: 'Primer ciclo de Infantil (0-3 años)', fecha: '1 de septiembre, 11:00 h' },
    { grupo: '3 años', fecha: null },
    { grupo: '4 años', fecha: null },
    { grupo: '5 años', fecha: null },
    { grupo: '1º de Primaria', fecha: null },
    { grupo: '2º de Primaria', fecha: null },
    { grupo: '3º de Primaria', fecha: null },
    { grupo: '4º de Primaria', fecha: null },
    { grupo: '5º de Primaria', fecha: null },
    { grupo: '6º de Primaria', fecha: null },
    { grupo: '1º y 2º de E.S.O.', fecha: null },
    { grupo: '3º y 4º de E.S.O.', fecha: null },
  ],
};

/* --------------------------------------------------------------------------
   CALENDARIO ESCOLAR · origen: PDF /images/calendario/CALENDARIO.pdf
   -------------------------------------------------------------------------- */
const CALENDARIO = {
  curso: '2026-2027',
  pdf: 'assets/docs/CALENDARIO.pdf',
  inicio: [
    { etapa: 'Primer ciclo de Ed. Infantil (2026/2025/2024)', texto: 'Comienzo de las clases el 2 de septiembre a las 9:00 horas.' },
    { etapa: 'Segundo ciclo de Ed. Infantil (2023/2022/2021), 3, 4 y 5 años', texto: 'Comienzo de las clases el 7 de septiembre a las 9:00 horas. Finalización de actividades lectivas el 18 de junio de 2027.' },
    { etapa: 'Primaria · 1º a 6º', texto: 'Comienzo de las clases el 7 de septiembre a las 9:00 horas. Finalización de actividades lectivas el 18 de junio de 2027.' },
    { etapa: 'Secundaria', texto: 'La presentación del curso tendrá lugar el día 7 de septiembre a las 10:00 horas. 1º, 2º, 3º y 4º de ESO: comienzo de las clases el 8 de septiembre a las 8:25 horas. Finalización de actividades lectivas el 18 de junio de 2027.' },
  ],
  vacaciones: [
    { nombre: 'Navidad', texto: 'Del 23 de diciembre de 2026 al 10 de enero de 2027, ambos inclusive.' },
    { nombre: 'Semana Santa', texto: 'Del 19 de marzo de 2027 al 29 de marzo de 2027, ambos inclusive.' },
  ],
  noLectivos: [
    '12 de octubre de 2026', '2 de noviembre de 2026', '9 de noviembre de 2026',
    '7 de diciembre de 2026', '8 de diciembre de 2026', '12 de febrero de 2027',
    '15 de febrero de 2027', '15 de mayo de 2027',
  ],
  jornadaIntensiva: [
    'Del 7 de septiembre al 30 de septiembre, ambos inclusive.',
    '23 de diciembre.',
    'Del 15 de junio al 18 de junio, ambos inclusive.',
  ],
  aviso: 'A este calendario, para el 2026, hay que añadir los días de fiesta de ámbito local que haya determinado cada municipio y así aparezcan publicados en el BOCM. Así mismo, y para el 2027, los que determine la Comunidad de Madrid y los días de fiesta de ámbito nacional no trasladable que se establezcan.',
};

/* --------------------------------------------------------------------------
   DOCUMENTOS DE ADMISIÓN · origen: /index.php/admisiones
   -------------------------------------------------------------------------- */
const DOCS_ADMISION = [
  { nombre: 'Instrucciones del proceso de admisión', archivo: 'assets/docs/INSTRUCCIONES_PROCESO_DE_ADMISIN_2026.pdf' },
  { nombre: 'Calendario del proceso de admisión', archivo: 'assets/docs/CALENDARIO_SOLICITUDES.pdf' },
  { nombre: 'Anexo: imposibilidad de firma de un progenitor', archivo: 'assets/docs/Anexo_Imposibilidad_de_firma_de_uno_de_los_dos_progenitores.pdf' },
  { nombre: 'Información básica', archivo: 'assets/docs/documento4.pdf' },
  { nombre: 'Criterios de baremación', archivo: 'assets/docs/BAREMO.pdf' },
  { nombre: 'Vacantes', archivo: 'assets/docs/vacantes.pdf' },
];

/* --------------------------------------------------------------------------
   FECHAS DEL PROCESO · origen: PDF CALENDARIO SOLICITUDES.pdf (etapas concertadas)
   -------------------------------------------------------------------------- */
const FECHAS_ADMISION = [
  { fecha: 'Del 11 al 25 de marzo', actuacion: 'Plazo de presentación de solicitudes para el proceso ordinario de admisión.' },
  { fecha: '14 de abril', actuacion: 'Publicación de los listados de alumnos solicitantes.' },
  { fecha: '15, 16 y 17 de abril', actuacion: 'Plazo de reclamación a los listados de alumnos solicitantes.' },
  { fecha: '23 de abril', actuacion: 'Publicación de los listados con la puntuación provisional obtenida por los alumnos. Estos listados incluirán la resolución de las reclamaciones presentadas a los listados de los alumnos solicitantes.' },
];

/* --------------------------------------------------------------------------
   PROGRAMAS · origen: /index.php/nuestro-cole/proyectos y /english
   -------------------------------------------------------------------------- */
const PROGRAMAS = [
  { nombre: 'Inglés', url: 'ingles.html', resumen: 'Centro examinador de la University of Cambridge, certificado BEDA desde 2012-2013 y método Vaughan en Primaria.', icono: 'idioma' },
  { nombre: 'Matemáticas ABN', url: 'matematicas-abn.html', resumen: 'Cálculo comprensivo desde Educación Infantil, apoyado en el sistema conceptual y no en la memoria.', icono: 'abaco' },
  { nombre: 'Nuevas tecnologías', url: 'tecnologia.html', resumen: 'Educa Tab: enseñanza digital integral con tablets en el aula y formación para profesorado y familias.', icono: 'tablet' },
  { nombre: 'Plan Digital', url: 'plan-digital.html', resumen: 'Digitalización de la gestión y proyectos interdisciplinares, dentro de la Programación General Anual.', icono: 'red' },
  { nombre: 'PROA+', url: 'proa.html', resumen: 'Refuerzo educativo gratuito, espacios inclusivos, evaluación de barreras y miradas emocionales.', icono: 'apoyo' },
];

/* --------------------------------------------------------------------------
   SERVICIOS · origen: /index.php/nuestro-cole/servicios
   -------------------------------------------------------------------------- */
const SERVICIOS = [
  { nombre: 'Comedor', url: 'comedor.html', resumen: 'Ausolan, con nutricionista propio y diez menús adaptados a alergias y dietas.', icono: 'cubiertos' },
  { nombre: 'Telepediatría', url: 'telepediatria.html', resumen: 'Kidscare durante todo el horario escolar y extraescolar, con escuela de padres.', icono: 'salud' },
  { nombre: 'Orientación', url: 'orientacion.html', resumen: 'Psicólogo del centro para Infantil, Primaria y Secundaria, junto a los tutores.', icono: 'orientacion' },
  { nombre: 'Extraescolares', url: 'extraescolares.html', resumen: 'Talleres gratuitos impartidos por el profesorado y actividades de pago a mediodía.', icono: 'balon' },
];

module.exports = {
  ETAPAS, PRECIOS_SERVICIOS, EXTRAESCOLARES, RESULTADOS, MENUS, MATERIAL,
  REUNIONES, CALENDARIO, DOCS_ADMISION, FECHAS_ADMISION, PROGRAMAS, SERVICIOS,
};
