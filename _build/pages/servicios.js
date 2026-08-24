/* Sección «Servicios»: comedor, telepediatría, orientación y extraescolares. */
'use strict';

const { SITE } = require('../nav');
const D = require('../data');
const L = require('../lib');
const { icono, imagen, esc, boton } = L;

module.exports = function (ctx) {
  const raiz = ctx.raiz;
  const migaBase = [{ texto: 'Inicio', url: 'index.html' }, { texto: 'Servicios', url: 'servicios.html' }];

  /* ---------------------------------------------------------------- índice */
  const indice = {
    url: 'servicios.html',
    familia: 'servicios.html',
    titulo: 'Servicios e instalaciones · Colegio San Martín',
    descripcion: 'Comedor con Ausolan y menús adaptados, telepediatría Kidscare, departamento de orientación y actividades extraescolares en el Colegio San Martín de Moratalaz.',
    tono: 'marino',
    prioridad: '0.8',
    ogImagen: 'judo-grupo.jpg',
    migas: [{ texto: 'Inicio', url: 'index.html' }, { texto: 'Servicios' }],
    h1: 'Servicios e instalaciones',
    entradilla: 'Comedor, servicio médico, orientación psicopedagógica y actividades fuera del horario lectivo.',
    cuerpo: `
<section class="seccion seccion--cal">
  <div class="envoltura">
    <div class="etapas">
      ${D.SERVICIOS.map(function (s) {
        return `<a class="etapa etapa--acero revelar" href="${s.url}">
          <span class="etapa__edades">Servicio</span>
          <h2 class="etapa__nombre">${esc(s.nombre)}</h2>
          <p class="etapa__resumen">${esc(s.resumen)}</p>
          <span class="etapa__ir">${icono('flecha')}</span>
        </a>`;
      }).join('')}
    </div>
  </div>
</section>

<section class="seccion seccion--papel" id="precios">
  <div class="envoltura">
    <div class="seccion__cabeza revelar">
      <p class="seccion__kicker">Precios · curso ${esc(D.PRECIOS_SERVICIOS.curso)}</p>
      <h2 class="seccion__titulo">Lo que cuesta cada servicio</h2>
      <p class="seccion__entrada">Tarifas tal como figuran en el documento de precios publicado por el centro, correspondiente al curso ${esc(D.PRECIOS_SERVICIOS.curso)}.</p>
    </div>

    <div class="revelar">
      ${L.tabla(
        ['Servicio', 'Precio', 'Periodo'],
        D.PRECIOS_SERVICIOS.filas.map(function (f) {
          return [esc(f.concepto), '<span class="precio">' + esc(f.precio) + '</span>', esc(f.periodo)];
        }),
        { titulo: 'Precios de servicios · curso ' + D.PRECIOS_SERVICIOS.curso, etiqueta: 'Tabla de precios de servicios' }
      )}
      <p style="margin-top: var(--e-5)">${L.descarga('Precios de servicios (documento del centro)', D.PRECIOS_SERVICIOS.pdf, raiz)}</p>
    </div>
  </div>
</section>
`,
  };

  /* -------------------------------------------------------------- comedor */
  const menusPorTipo = D.MENUS.map(function (m) {
    return '<li>' + L.descarga(m.nombre, m.archivo, raiz) + '</li>';
  }).join('');

  const comedor = {
    url: 'comedor.html',
    familia: 'servicios.html',
    titulo: 'Comedor escolar · Ausolan y menús adaptados · Colegio San Martín',
    descripcion: 'El comedor del Colegio San Martín lo gestiona Ausolan, con asesoría de nutricionista y diez menús descargables adaptados a alergias e intolerancias.',
    tono: 'verde',
    prioridad: '0.8',
    migas: migaBase.concat([{ texto: 'Comedor' }]),
    h1: 'Comedor',
    entradilla: 'La empresa encargada de ofrecer el servicio de comedor es AUSOLAN.',
    cuerpo: `
<section class="seccion seccion--papel">
  <div class="envoltura">
    <div class="dos-columnas dos-columnas--texto-ancho">
      <div class="prosa revelar">
        <p>El comedor está atendido por el personal auxiliar en contacto continuo con los profesores.</p>
        <p>El patio del mismo también está cuidado por personal auxiliar. Se ofrece un menú normal y otro para alérgicos. Así como la posibilidad de adaptarlo en función de alguna otra alergia o enfermedad.</p>
        <p>El colegio cuenta con la asesoría de un nutricionista que supervisa los menús con la empresa, que a su vez vienen preparados por el departamento de nutrición de Ausolan con el objetivo de que dichos menús sean equilibrados.</p>
      </div>
      <div class="revelar">
        ${L.datos([
          { k: 'Empresa', v: 'Ausolan' },
          { k: 'Supervisión', v: 'Nutricionista con el que cuenta el colegio' },
          { k: 'Menús adaptados', v: String(D.MENUS.length) + ' variantes descargables' },
          { k: 'Precio', v: '<strong>' + esc(D.PRECIOS_SERVICIOS.filas[0].precio) + '</strong> al mes <span class="ayuda">(curso ' + esc(D.PRECIOS_SERVICIOS.curso) + ')</span>' },
        ])}
      </div>
    </div>
  </div>
</section>

<section class="seccion seccion--cal" id="menus">
  <div class="envoltura">
    <div class="seccion__cabeza revelar">
      <p class="seccion__kicker">Descargas</p>
      <h2 class="seccion__titulo">Menús del comedor</h2>
      <p class="seccion__entrada">Todos los menús que publica el centro, incluidas las adaptaciones por alergia, intolerancia o dieta.</p>
    </div>
    <ul class="descargas revelar">${menusPorTipo}</ul>
  </div>
</section>
`,
  };

  /* -------------------------------------------------------- telepediatría */
  const telepediatria = {
    url: 'telepediatria.html',
    familia: 'servicios.html',
    titulo: 'Telepediatría · Servicio Kidscare · Colegio San Martín',
    descripcion: 'Telepediatría de Kidscare durante todo el horario escolar y extraescolar: consultas médicas, recomendaciones y escuela de padres.',
    tono: 'acero',
    prioridad: '0.7',
    migas: migaBase.concat([{ texto: 'Telepediatría' }]),
    h1: 'Telepediatría',
    entradilla: 'El Colegio San Martín cuenta con el servicio de telepediatría de Kidscare, durante todo el horario escolar y extraescolar.',
    cuerpo: `
<section class="seccion seccion--papel">
  <div class="envoltura">
    <div class="dos-columnas dos-columnas--texto-ancho">
      <div class="revelar">
        ${L.bento([
          { tam: 'ancho', html: '<h3>Consultas médicas</h3><p>Cuando surge la necesidad, el personal del Colegio, a través del Kit de telemedicina que les proporcionamos, solicitará una teleconsulta con el especialista.</p>' },
          { tam: 'ancho', html: '<h3>Recomendaciones</h3><p>Mediante el programa de recomendaciones el servicio médico aporta al Colegio y a las familias toda la información necesaria y los consejos adecuados para que cualquier caso o duda del día a día sea resuelta por un profesional.</p><p>Las recomendaciones permiten tener de primera mano información médica sobre vacunas, enfermedades, sucesos cotidianos y problemas nutricionales, entre otros.</p>' },
          { tam: 'ancho', tono: 'arena', html: '<h3>Escuela de padres</h3><p>Contamos con una amplia cartera de charlas y seminarios online dedicados a la formación e información sobre diferentes problemas relacionados con la salud. El objetivo de las escuelas de padres es formar y educar en los retos diarios a los que os enfrentáis en el día a día.</p>' },
        ])}
      </div>
      <div class="revelar">
        <figure class="figura">
          ${imagen('assets/img/telepediatria.png', 'Material informativo del servicio de telepediatría del colegio.')}
        </figure>
        <div style="margin-top: var(--e-5)">
          ${L.datos([
            { k: 'Proveedor', v: 'Kidscare' },
            { k: 'Cobertura', v: 'Todo el horario escolar y extraescolar' },
            { k: 'Gabinete médico', v: '<strong>' + esc(D.PRECIOS_SERVICIOS.filas[1].precio) + '</strong> por curso <span class="ayuda">(curso ' + esc(D.PRECIOS_SERVICIOS.curso) + ')</span>' },
          ])}
        </div>
      </div>
    </div>
  </div>
</section>
`,
  };

  /* ----------------------------------------------------------- orientación */
  const orientacion = {
    url: 'orientacion.html',
    familia: 'servicios.html',
    titulo: 'Departamento de Orientación · Colegio San Martín',
    descripcion: 'El psicólogo del centro atiende Infantil, Primaria y Secundaria junto a los tutores, para prevenir y resolver problemas de aprendizaje y conducta.',
    tono: 'malva',
    prioridad: '0.6',
    migas: migaBase.concat([{ texto: 'Orientación' }]),
    h1: 'Departamento de Orientación',
    entradilla: 'Atención psicopedagógica para las tres etapas, en colaboración estrecha con los tutores.',
    cuerpo: `
<section class="seccion seccion--papel">
  <div class="envoltura">
    <div class="dos-columnas dos-columnas--texto-ancho">
      <div class="prosa revelar">
        <p>El psicólogo del Colegio atiende las etapas de Infantil, Primaria y Secundaria en estrecha colaboración con los tutores para prevenir y resolver problemas de aprendizaje y conductuales; tiene también la labor de asesorar al profesorado sobre pautas de actuación concretas y a los padres sobre orientaciones que afectan al desarrollo de sus hijos.</p>
      </div>
      <div class="revelar">
        ${L.datos([
          { k: 'Etapas atendidas', v: 'Infantil, Primaria y Secundaria' },
          { k: 'Trabajo con tutores', v: 'Colaboración estrecha y continuada' },
          { k: 'Gabinete psicopedagógico', v: '<strong>' + esc(D.PRECIOS_SERVICIOS.filas[2].precio) + '</strong> por curso <span class="ayuda">(curso ' + esc(D.PRECIOS_SERVICIOS.curso) + ')</span>' },
        ])}
        <p style="margin-top: var(--e-5)">${boton('El programa PROA+', 'proa.html', { variante: 'fantasma', icono: 'flecha' })}</p>
      </div>
    </div>
  </div>
</section>
`,
  };

  /* -------------------------------------------------------- extraescolares */
  const extraescolares = {
    url: 'extraescolares.html',
    familia: 'servicios.html',
    titulo: 'Actividades extraescolares y precios · Colegio San Martín',
    descripcion: 'Curso 2025/2026: talleres gratuitos del profesorado de 16:00 a 17:00 y actividades de pago a mediodía, con sus precios.',
    tono: 'marino',
    prioridad: '0.8',
    ogImagen: 'judo-grupo.jpg',
    migas: migaBase.concat([{ texto: 'Extraescolares' }]),
    h1: 'Actividades extraescolares',
    entradilla: 'Curso ' + D.EXTRAESCOLARES.curso + '. Las actividades de la franja de tarde las imparte el profesorado del centro y son gratuitas.',
    cuerpo: `
<section class="seccion seccion--papel">
  <div class="envoltura">
    <div class="seccion__cabeza revelar">
      <p class="seccion__kicker">Sin coste</p>
      <h2 class="seccion__titulo">Talleres gratuitos del profesorado</h2>
    </div>

    <div class="etapas revelar">
      ${D.EXTRAESCOLARES.gratuitas.map(function (g) {
        return `<div class="etapa etapa--verde" style="cursor: default">
          <span class="etapa__edades">${esc(g.franja)}</span>
          <h3 class="etapa__nombre">${esc(g.etapa)}</h3>
          <p class="etapa__resumen">${esc(g.actividades.join(' · '))}</p>
          <span class="etapa__regimen">${esc(g.dias)} · Gratuito</span>
        </div>`;
      }).join('')}
    </div>
  </div>
</section>

<section class="seccion seccion--cal">
  <div class="envoltura">
    <div class="seccion__cabeza revelar">
      <p class="seccion__kicker">Precios · curso ${esc(D.EXTRAESCOLARES.curso)}</p>
      <h2 class="seccion__titulo">Actividades de pago</h2>
    </div>

    <div class="revelar">
      ${L.tabla(
        ['Actividad', 'Precio al mes', 'Días', 'Etapa'],
        D.EXTRAESCOLARES.dePago.map(function (a) {
          return [esc(a.actividad), '<span class="precio">' + esc(a.precio) + '</span>', esc(a.dias), esc(a.etapa)];
        }),
        { titulo: 'Precios de extraescolares · curso ' + D.EXTRAESCOLARES.curso, etiqueta: 'Tabla de precios de actividades extraescolares' }
      )}
    </div>

    <div style="margin-top: var(--e-6); max-width: var(--ancho-texto)" class="revelar">
      ${L.aviso(null,
        '<p><strong>' + esc(D.EXTRAESCOLARES.nota) + '</strong></p>' +
        '<ul>' + D.EXTRAESCOLARES.advertencias.map(function (a) { return '<li>' + esc(a) + '</li>'; }).join('') + '</ul>', 'ojo')}
    </div>

    <div style="margin-top: var(--e-6)" class="revelar">
      <ul class="descargas">
        <li>${L.descarga('Precios de extraescolares · curso ' + D.EXTRAESCOLARES.curso, D.EXTRAESCOLARES.pdf, raiz)}</li>
        <li>${L.descarga('Precios de servicios · curso ' + D.PRECIOS_SERVICIOS.curso, D.PRECIOS_SERVICIOS.pdf, raiz)}</li>
      </ul>
    </div>
  </div>
</section>

<section class="seccion seccion--papel">
  <div class="envoltura">
    <div class="dos-columnas">
      <div class="revelar">
        <figure class="figura figura--recorte">
          ${imagen('assets/img/judo-grupo.jpg', 'Grupo de alumnos de la extraescolar de judo con sus cinturones, junto al profesor, en el gimnasio del colegio.')}
          <figcaption>Grupo de la actividad extraescolar de judo.</figcaption>
        </figure>
      </div>
      <div class="revelar">
        <figure class="figura figura--recorte">
          ${imagen('assets/img/infantil-minichef.jpg', 'Alumna con gorro de cocinero decorando un plato en el taller de minichef.')}
          <figcaption>Taller de cocina con alumnado de Infantil.</figcaption>
        </figure>
      </div>
    </div>
  </div>
</section>
`,
  };

  return [indice, comedor, telepediatria, orientacion, extraescolares];
};
