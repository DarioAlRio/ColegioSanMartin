/* Portada. */
'use strict';

const { SITE } = require('../nav');
const D = require('../data');
const L = require('../lib');
const { heroePortada } = require('../layout');
const { icono, imagen, boton, esc } = L;

module.exports = function (ctx) {
  const raiz = ctx.raiz;

  const cuerpo = `
${heroePortada({
    antetitulo: 'Moratalaz · desde hace más de 60 años',
    titulo: 'De <em>0 a 16 años</em><br>en el mismo colegio',
    entrada: 'Centro privado <strong>concertado</strong> en segundo ciclo de Educación Infantil, Educación Primaria y E.S.O. Con escuela infantil desde los cero años y Formación Profesional después de la ESO.',
    foto: 'primaria-tablet.jpg',
    fotoAlt: 'Dos alumnos de Primaria trabajando con una tablet sobre el pupitre en clase.',
  })}

<div class="franja-placa">
  <div class="envoltura">
    ${L.placa([
      { etiqueta: 'Código de centro', valor: SITE.codigoCentro },
      { etiqueta: 'Teléfono', valor: SITE.telefono, url: 'tel:' + SITE.telefonoE164 },
      { etiqueta: 'Metro', valor: 'Vinateros · L9' },
      { etiqueta: 'Autobuses', valor: '30 · 32 · 71 · 113' },
    ])}
  </div>
</div>

<!-- Etapas ------------------------------------------------------------- -->
<section class="seccion seccion--cal">
  <div class="envoltura">
    <div class="seccion__cabeza revelar">
      <p class="seccion__kicker">Oferta educativa</p>
      <h2 class="seccion__titulo">Una sola escolarización, de la guardería a la ESO</h2>
      <p class="seccion__entrada">Las etapas obligatorias están concertadas. El primer ciclo de Infantil y la Formación Profesional son privados, con posibilidad de beca.</p>
    </div>

    <div class="etapas etapas--escalonada">
      ${D.ETAPAS.map(function (e) { return '<div class="revelar">' + L.fichaEtapa(e) + '</div>'; }).join('')}
    </div>
  </div>
</section>

<!-- Lo que distingue al centro ------------------------------------------ -->
<section class="seccion seccion--papel">
  <div class="envoltura">
    <div class="seccion__cabeza revelar">
      <p class="seccion__kicker">Por qué aquí</p>
      <h2 class="seccion__titulo">Lo que el colegio hace y se puede comprobar</h2>
    </div>

    ${L.bento([
      {
        tam: 'ancho', tono: 'marino',
        html: `<h3>Extraescolares gratuitas, impartidas por el propio profesorado</h3>
          <p>De 16:00 a 17:00 en Infantil y Primaria, todos los días: taller de francés, ajedrez, lengua, teatro, matemáticas, multideporte y música. En la ESO, de 16:20 a 17:20 de lunes a jueves.</p>
          <p><a class="boton boton--sol boton--compacto" href="extraescolares.html"><span>Ver todas las actividades</span>${icono('flecha')}</a></p>`,
      },
      {
        tam: 'estrecho',
        html: `<h3>Centro examinador Cambridge</h3>
          <p>Los exámenes de la University of Cambridge se incorporan al proyecto de actividades desde Primaria hasta E.S.O.</p>
          <p><a href="ingles.html">Programa de inglés</a></p>`,
      },
      {
        tam: 'estrecho',
        html: `<h3>Certificado BEDA desde 2012-2013</h3>
          <p>Bilingual English Development &amp; Assessment: más horas de inglés, formación del profesorado y evaluación externa.</p>
          <p><a href="ingles.html#beda">Cómo funciona BEDA</a></p>`,
      },
      {
        tam: 'ancho',
        html: `<h3>Matemáticas ABN desde Educación Infantil</h3>
          <p>Un método de cálculo apoyado en la comprensión de los procesos y no en el estudio memorístico. Mejora la resolución de problemas y desarrolla capacidad de cálculo real.</p>
          <p><a href="matematicas-abn.html">Qué es el método ABN</a></p>`,
      },
      {
        tam: 'estrecho', tono: 'arena',
        html: `<h3>Telepediatría en horario escolar</h3>
          <p>Servicio Kidscare durante toda la jornada, también en extraescolares, con escuela de padres.</p>
          <p><a href="telepediatria.html">El servicio médico</a></p>`,
      },
      {
        tam: 'estrecho',
        html: `<h3>Red de centros PROA+</h3>
          <p>Refuerzo educativo gratuito, espacios inclusivos, evaluación de barreras y miradas emocionales.</p>
          <p><a href="proa.html">El programa PROA+</a></p>`,
      },
      {
        tam: 'estrecho',
        html: `<h3>Educa Tab en el aula</h3>
          <p>Enseñanza digital con tablets, con soporte técnico al profesorado y formación para las familias.</p>
          <p><a href="tecnologia.html">Nuevas tecnologías</a></p>`,
      },
    ])}
  </div>
</section>

<!-- Resultados ---------------------------------------------------------- -->
<section class="seccion seccion--hueso">
  <div class="envoltura">
    <div class="dos-columnas dos-columnas--texto-ancho">
      <div class="revelar">
        <p class="seccion__kicker">Evaluaciones externas · curso ${esc(D.RESULTADOS.curso)}</p>
        <h2 class="seccion__titulo">Los resultados que publica el centro</h2>
        <p class="seccion__entrada">Promedios obtenidos por el colegio en la evaluación censal de la Comunidad de Madrid, tal como figuran en el documento que publica el centro.</p>

        <div class="marcador-caja">
          <div class="marcador">
            ${D.RESULTADOS.grupos[1].filas.map(function (f) {
      return `<div class="marcador__celda">
                <span class="marcador__valor">${esc(f.nota)}</span>
                <span class="marcador__etiqueta">6º Primaria · ${esc(f.materia)}</span>
              </div>`;
    }).join('')}
          </div>
        </div>

        <p style="margin-top: var(--e-5)">
          ${boton('Ver todos los resultados', 'familias.html#resultados', { variante: 'fantasma', icono: 'flecha' })}
        </p>
      </div>

      <div class="revelar">
        <figure class="figura figura--recorte">
          ${imagen('assets/img/audicion-musica.jpg', 'Alumnado del colegio durante una audición de música en el salón de actos, con flautas y guitarra.')}
          <figcaption>Audición de música del alumnado en el salón de actos del colegio.</figcaption>
        </figure>
      </div>
    </div>
  </div>
</section>

<!-- Admisiones ---------------------------------------------------------- -->
<section class="seccion seccion--marino">
  <div class="envoltura">
    <div class="dos-columnas">
      <div class="revelar">
        <p class="seccion__kicker">Admisiones ${esc(ctx.cursoAdmision)}</p>
        <h2 class="seccion__titulo">El plazo ordinario es del 11 al 25 de marzo</h2>
        <p class="seccion__entrada">La solicitud se presenta en el propio centro o de forma telemática en la Secretaría Virtual de la Comunidad de Madrid. Solo se puede entregar una solicitud en un único centro sostenido con fondos públicos.</p>
        <p style="margin-top: var(--e-6)">
          ${boton('Cómo pedir plaza paso a paso', 'admisiones.html', { variante: 'sol', icono: 'flecha' })}
        </p>
      </div>

      <div class="revelar">
        ${L.datos([
      { k: 'Código de centro', v: '<strong>' + esc(SITE.codigoCentro) + '</strong> – San Martín' },
      { k: 'Dónde se presenta', v: 'En el colegio o en la Secretaría Virtual de la Comunidad de Madrid' },
      { k: 'Quién firma', v: 'Ambos padres. Si uno no puede, se cumplimenta el anexo de declaración responsable' },
      { k: 'Cita previa', v: 'Por teléfono al <a href="tel:' + SITE.telefonoE164 + '">' + esc(SITE.telefono) + '</a> o por correo' },
    ])}
      </div>
    </div>
  </div>
</section>

<!-- Servicios ----------------------------------------------------------- -->
<section class="seccion seccion--papel">
  <div class="envoltura">
    <div class="seccion__cabeza revelar">
      <p class="seccion__kicker">Servicios</p>
      <h2 class="seccion__titulo">La jornada completa, resuelta</h2>
      <p class="seccion__entrada">Comedor con menús adaptados, servicio médico, orientación psicopedagógica y actividades hasta las cinco de la tarde.</p>
    </div>

    <div class="etapas">
      ${D.SERVICIOS.map(function (s) {
      return `<a class="etapa etapa--acero revelar" href="${s.url}">
          <span class="etapa__edades">Servicio</span>
          <h3 class="etapa__nombre">${esc(s.nombre)}</h3>
          <p class="etapa__resumen">${esc(s.resumen)}</p>
          <span class="etapa__ir">${icono('flecha')}</span>
        </a>`;
    }).join('')}
    </div>
  </div>
</section>

<!-- Familias ------------------------------------------------------------ -->
<section class="seccion seccion--cal">
  <div class="envoltura">
    <div class="seccion__cabeza revelar">
      <p class="seccion__kicker">Para las familias del centro</p>
      <h2 class="seccion__titulo">Lo que se busca cada mes</h2>
    </div>

    <ul class="descargas revelar">
      <li>${L.descarga('Calendario escolar ' + D.CALENDARIO.curso, D.CALENDARIO.pdf, raiz)}</li>
      <li>${L.descarga('Menú del comedor', D.MENUS[0].archivo, raiz)}</li>
      <li>${L.descarga('Precios de extraescolares ' + D.EXTRAESCOLARES.curso, D.EXTRAESCOLARES.pdf, raiz)}</li>
      <li>${L.descarga('Resultados académicos ' + D.RESULTADOS.curso, D.RESULTADOS.pdf, raiz)}</li>
    </ul>

    <div style="margin-top: var(--e-6); display: flex; gap: var(--e-3); flex-wrap: wrap">
      ${boton('Material escolar por curso', 'material.html', { variante: 'fantasma' })}
      ${boton('Todos los menús del comedor', 'comedor.html#menus', { variante: 'fantasma' })}
      ${boton('Información a las familias', 'familias.html', { variante: 'fantasma' })}
    </div>
  </div>
</section>
`;

  return {
    url: 'index.html',
    titulo: 'Colegio San Martín · Centro concertado en Moratalaz, Madrid',
    descripcion: 'Centro concertado en Moratalaz con más de 60 años: de 0 a 16 años y Formación Profesional. Extraescolares gratuitas y centro examinador Cambridge.',
    esPortada: true,
    prioridad: '1.0',
    ogImagen: 'primaria-tablet.jpg',
    cuerpo: cuerpo,
    jsonLd: ctx.jsonLdCentro,
  };
};
