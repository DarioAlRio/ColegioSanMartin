/* Sección «Familias»: índice, calendario escolar, material, reuniones y avisos. */
'use strict';

const { SITE } = require('../nav');
const D = require('../data');
const L = require('../lib');
const { icono, imagen, esc, boton } = L;

module.exports = function (ctx) {
  const raiz = ctx.raiz;
  const migaBase = [{ texto: 'Inicio', url: 'index.html' }, { texto: 'Familias', url: 'familias.html' }];

  /* ---------------------------------------------------------------- índice */
  const indice = {
    url: 'familias.html',
    familia: 'familias.html',
    titulo: 'Información a las familias · Colegio San Martín',
    descripcion: 'Todo lo que el Colegio San Martín publica para sus familias: calendario escolar, material por curso, reuniones, menús, resultados académicos y correos de contacto.',
    tono: 'marino',
    prioridad: '0.8',
    migas: [{ texto: 'Inicio', url: 'index.html' }, { texto: 'Familias' }],
    h1: 'Información a las familias',
    entradilla: 'El índice de lo que el centro publica cada curso, con enlace directo a cada documento.',
    cuerpo: `
<section class="seccion seccion--cal">
  <div class="envoltura">
    ${L.bento([
      { tam: 'dos', html: `<h3>1. Oferta educativa</h3><p>Etapas del centro, de 0 a 16 años, más Formación Profesional.</p><p><a href="etapas.html">Ver las etapas</a></p>` },
      { tam: 'dos', html: `<h3>2. Misión, visión y valores</h3><p>La identidad del centro y su propuesta educativa.</p><p><a href="colegio.html">Ver la identidad</a></p>` },
      { tam: 'dos', html: `<h3>3. Extraescolares y actividades complementarias</h3><p>Talleres gratuitos y actividades de pago, con precios.</p><p><a href="extraescolares.html">Ver extraescolares</a></p>` },
      { tam: 'dos', html: `<h3>4. Programas y proyectos</h3><p>Inglés, ABN, Educa Tab, Plan Digital y PROA+.</p><p><a href="programas.html">Ver programas</a></p>` },
      { tam: 'dos', html: `<h3>5. Convivencia</h3><p>Normas del centro recogidas en el Plan Incluyo.</p><p><a href="convivencia.html">Ver el Plan Incluyo</a></p>` },
      { tam: 'dos', html: `<h3>6. Correos de interés</h3><p>Para comunicarse con la Dirección y la Jefatura de Estudios:</p>
        <p><a class="correo" href="#" data-correo="${SITE.correo.cuenta}|${SITE.correo.dominio}" data-correo-texto>correo del colegio</a><br>
        <a class="correo" href="#" data-correo="${SITE.correoEduca.cuenta}|${SITE.correoEduca.dominio}" data-correo-texto>correo en educa.madrid.org</a></p>` },
    ])}
  </div>
</section>

<!-- Resultados ---------------------------------------------------------- -->
<section class="seccion seccion--papel" id="resultados">
  <div class="envoltura">
    <div class="seccion__cabeza revelar">
      <p class="seccion__kicker">7. Resultados académicos · curso ${esc(D.RESULTADOS.curso)}</p>
      <h2 class="seccion__titulo">Resultados de pruebas externas</h2>
      <p class="seccion__entrada">Promedio del centro en la evaluación censal de la Comunidad de Madrid.</p>
    </div>

    ${D.RESULTADOS.grupos.map(function (g) {
      return `<div class="revelar" style="margin-bottom: var(--e-6)">
        <h3>${esc(g.titulo)}</h3>
        <div class="marcador">
          ${g.filas.map(function (f) {
            return `<div class="marcador__celda">
              <span class="marcador__valor">${esc(f.nota)}</span>
              <span class="marcador__etiqueta">${esc(f.materia)}</span>
            </div>`;
          }).join('')}
        </div>
      </div>`;
    }).join('')}

    <div class="revelar">
      <h3>${esc(D.RESULTADOS.cambridge.etiqueta)}</h3>
      <div class="marcador">
        <div class="marcador__celda">
          <span class="marcador__valor">${esc(D.RESULTADOS.cambridge.valor)}</span>
          <span class="marcador__etiqueta">${esc(D.RESULTADOS.cambridge.detalle)}</span>
        </div>
      </div>
    </div>

    <p style="margin-top: var(--e-6)">${L.descarga('Resultados académicos · curso ' + D.RESULTADOS.curso, D.RESULTADOS.pdf, raiz)}</p>
  </div>
</section>

<!-- Accesos rápidos ------------------------------------------------------ -->
<section class="seccion seccion--hueso">
  <div class="envoltura">
    <div class="seccion__cabeza revelar">
      <h2 class="seccion__titulo">Accesos rápidos</h2>
    </div>
    <ul class="descargas revelar">
      <li>${L.descarga('Calendario escolar ' + D.CALENDARIO.curso, D.CALENDARIO.pdf, raiz)}</li>
      <li>${L.descarga('Menú del comedor', D.MENUS[0].archivo, raiz)}</li>
      <li>${L.descarga('Precios de extraescolares ' + D.EXTRAESCOLARES.curso, D.EXTRAESCOLARES.pdf, raiz)}</li>
      <li>${L.descarga('Precios de servicios ' + D.PRECIOS_SERVICIOS.curso, D.PRECIOS_SERVICIOS.pdf, raiz)}</li>
      <li>${L.descarga('Política de protección de datos', 'assets/docs/POLITICA_PROTECCION_DE_DATOS.pdf', raiz)}</li>
      <li><a class="descarga" href="${SITE.plataforma.url}" target="_blank" rel="noopener">
        ${icono('llave', 'descarga__tipo')}
        <span class="descarga__nombre">Plataforma EVA</span>
        <span class="descarga__meta">Acceso externo</span>
        ${icono('externo', 'descarga__flecha')}
      </a></li>
    </ul>

    <div style="margin-top: var(--e-6); display: flex; gap: var(--e-3); flex-wrap: wrap" class="revelar">
      ${boton('Calendario escolar', 'calendario.html', { variante: 'fantasma' })}
      ${boton('Material por curso', 'material.html', { variante: 'fantasma' })}
      ${boton('Reuniones', 'reuniones.html', { variante: 'fantasma' })}
      ${boton('Todos los menús', 'comedor.html#menus', { variante: 'fantasma' })}
    </div>
  </div>
</section>
`,
  };

  /* ------------------------------------------------------------ calendario */
  const calendario = {
    url: 'calendario.html',
    familia: 'familias.html',
    titulo: 'Calendario escolar ' + D.CALENDARIO.curso + ' · Colegio San Martín',
    descripcion: 'Calendario escolar ' + D.CALENDARIO.curso + ' del Colegio San Martín: inicio y fin de clases por etapa, vacaciones de Navidad y Semana Santa, días no lectivos y jornada intensiva.',
    tono: 'verde',
    prioridad: '0.7',
    migas: migaBase.concat([{ texto: 'Calendario escolar' }]),
    h1: 'Calendario escolar ' + D.CALENDARIO.curso,
    entradilla: 'Resumen del calendario que publica el centro, transcrito íntegramente. El documento original está disponible al final de la página.',
    cuerpo: `
<section class="seccion seccion--papel">
  <div class="envoltura">
    <div class="revelar">
      ${L.acordeon('cal', [
        {
          titulo: 'Inicio y finalización de las actividades lectivas',
          html: '<dl class="datos">' + D.CALENDARIO.inicio.map(function (i) {
            return '<div class="datos__fila"><dt>' + esc(i.etapa) + '</dt><dd>' + esc(i.texto) + '</dd></div>';
          }).join('') + '</dl>',
        },
        {
          titulo: 'Vacaciones',
          html: '<dl class="datos">' + D.CALENDARIO.vacaciones.map(function (v) {
            return '<div class="datos__fila"><dt>' + esc(v.nombre) + '</dt><dd>' + esc(v.texto) + '</dd></div>';
          }).join('') + '</dl>',
        },
        {
          titulo: 'Festividades y días no lectivos',
          html: '<ul>' + D.CALENDARIO.noLectivos.map(function (d) { return '<li>' + esc(d) + '</li>'; }).join('') + '</ul>',
        },
        {
          titulo: 'Jornada intensiva',
          html: '<ul>' + D.CALENDARIO.jornadaIntensiva.map(function (d) { return '<li>' + esc(d) + '</li>'; }).join('') + '</ul>',
        },
      ])}
    </div>

    <div style="margin-top: var(--e-7); max-width: var(--ancho-texto)" class="revelar">
      ${L.aviso('¡Atención!', '<p>' + esc(D.CALENDARIO.aviso) + '</p>', 'ojo')}
    </div>

    <div style="margin-top: var(--e-6); max-width: var(--ancho-texto)" class="revelar">
      ${L.descarga('Calendario escolar ' + D.CALENDARIO.curso + ' (documento del centro)', D.CALENDARIO.pdf, raiz)}
    </div>
  </div>
</section>

<section class="seccion seccion--cal">
  <div class="envoltura">
    <div class="seccion__cabeza revelar">
      <h2 class="seccion__titulo">Horarios lectivos</h2>
    </div>
    <div class="revelar" style="max-width: var(--ancho-texto)">
      ${L.datos(SITE.horarios.map(function (h) { return { k: h.etapa, v: esc(h.texto) }; }))}
    </div>
  </div>
</section>
`,
  };

  /* -------------------------------------------------------------- material */
  const material = {
    url: 'material.html',
    familia: 'familias.html',
    titulo: 'Material escolar por curso · Colegio San Martín',
    descripcion: 'Listas de material escolar de 1º a 6º de Educación Primaria del Colegio San Martín, en PDF descargable.',
    tono: 'acero',
    prioridad: '0.7',
    migas: migaBase.concat([{ texto: 'Material escolar' }]),
    h1: 'Lista de material escolar',
    entradilla: 'Listas por curso de Educación Primaria, tal como las publica el centro.',
    cuerpo: `
<section class="seccion seccion--papel">
  <div class="envoltura">
    <ul class="descargas revelar">
      ${D.MATERIAL.map(function (m) { return '<li>' + L.descarga(m.curso, m.archivo, raiz) + '</li>'; }).join('')}
    </ul>

    <div style="margin-top: var(--e-7); max-width: var(--ancho-texto)" class="revelar">
      ${L.aviso('Otras etapas',
        '<p>El centro publica en su web las listas de material de Educación Primaria. Para el material de Infantil y de E.S.O., consulte con el colegio en el <a href="tel:' + SITE.telefonoE164 + '">' + esc(SITE.telefono) + '</a>.</p>')}
    </div>
  </div>
</section>
`,
  };

  /* -------------------------------------------------------------- reuniones */
  const reuniones = {
    url: 'reuniones.html',
    familia: 'familias.html',
    titulo: 'Reuniones de inicio de curso ' + D.REUNIONES.curso + ' · Colegio San Martín',
    descripcion: 'Fechas de las reuniones de inicio de curso ' + D.REUNIONES.curso + ' por grupo en el Colegio San Martín.',
    tono: 'malva',
    prioridad: '0.6',
    migas: migaBase.concat([{ texto: 'Reuniones' }]),
    h1: 'Reuniones · curso ' + D.REUNIONES.curso,
    entradilla: 'Fechas por grupo, tal como las publica el centro. Los grupos marcados como pendientes todavía no tienen fecha publicada.',
    cuerpo: `
<section class="seccion seccion--papel">
  <div class="envoltura">
    <div class="revelar">
      ${L.tabla(
        ['Grupo', 'Fecha'],
        D.REUNIONES.filas.map(function (f) {
          return [esc(f.grupo), f.fecha ? '<strong>' + esc(f.fecha) + '</strong>' : '<span class="pendiente">Pendiente de publicar</span>'];
        }),
        { titulo: 'Reuniones curso ' + D.REUNIONES.curso, etiqueta: 'Tabla de reuniones por grupo' }
      )}
    </div>

    <div style="margin-top: var(--e-6); max-width: var(--ancho-texto)" class="revelar">
      ${L.aviso(null, '<p>Las fechas que aparecen como pendientes son las que el centro todavía no ha publicado. Aquí no se inventa ninguna: cuando el colegio las anuncie, se actualizan en <code>_build/data.js</code>.</p>')}
    </div>
  </div>
</section>
`,
  };

  /* --------------------------------------------------------------- avisos */
  const noticias = {
    url: 'noticias.html',
    familia: 'familias.html',
    titulo: 'Avisos del centro · Colegio San Martín',
    descripcion: 'Avisos publicados por el Colegio San Martín: nota informativa del Consejo Escolar sobre la Aportación Voluntaria y tratamiento de datos personales.',
    tono: 'tinta',
    prioridad: '0.5',
    migas: migaBase.concat([{ texto: 'Avisos' }]),
    h1: 'Avisos del centro',
    entradilla: 'Comunicaciones que el colegio mantiene publicadas. Se reproducen íntegras.',
    cuerpo: `
<section class="seccion seccion--papel">
  <div class="envoltura">
    <article class="prosa revelar" style="margin-bottom: var(--e-9)">
      <p class="seccion__kicker">Consejo Escolar</p>
      <h2>Nota informativa sobre la Aportación Voluntaria</h2>
      <p>El Consejo Escolar, compuesto por la Dirección del Centro, profesores, padres de alumnos que cursan en el Centro y alumnos del mismo, ante la reiterada desinformación de algunos padres de alumnos, tanto de Infantil como de Primaria y de Secundaria, sobre el tema de la Aportación Voluntaria, queremos informar que:</p>
      <p>Dicha Aportación Voluntaria no hace referencia a la asistencia o no a las clases extraescolares impartidas por este centro en horario de 16.00 a 17.00 horas, las cuales son impartidas GRATUITAMENTE por nuestro profesorado, sino que dicha Aportación Voluntaria está dirigida a todo padre de alumno que curse enseñanza en este centro, independientemente del horario lectivo que tenga el alumno, pues al ser un centro concertado, la Administración Educativa no aporta suficiente para el mantenimiento del Centro ni de los gastos originados por el uso de las instalaciones y materiales empleados para impartir la enseñanza, así como la adaptación a las nuevas tecnologías como son pizarras digitales, por ello, les rogamos esa Aportación Voluntaria, que NO Obligatoria, para poder realizar trabajos de mantenimiento y reposición tanto de locales como de materiales usados en el transcurso de nuestro trabajo, con el consiguiente posible deterioro de los mismos, además de otro personal no docente.</p>
      <p>Esta desinformación viene produciéndose de manera constante desde hace ya muchos años y reiteramos, que, aunque no se puede pedir Obligatoriamente por Ley, tenemos conocimiento que, en otros Centros Concertados, los padres del alumnado no presentan reticencias al abono de esa Aportación Voluntaria a la que nos referimos, aunque desconocemos la denominación de la misma en esos centros, pues comprenden el fin con la que se solicita y para los posibles gastos a los que se destinará dicha Aportación Voluntaria.</p>
    </article>

    <article class="prosa revelar" style="margin-bottom: var(--e-9)">
      <p class="seccion__kicker">Protección de datos</p>
      <h2>Tratamiento de datos personales</h2>
      <p>En el Colegio San Martín tratamos única y exclusivamente los datos que nos facilitan las personas interesadas con el fin de mantener la relación contractual establecida y poder prestar los servicios educativos y formativos que nos son propios, tales como gestionar las solicitudes de plaza escolar, matriculación, gestión académica y administrativa, gestión de actividades lectivas, complementarias y extraescolares y otros servicios asociados a las mismas, gestionar el envío de información solicitada, facilitar a los interesados información sobre la ampliación y mejora de nuestros servicios, adecuar dichos servicios a las preferencias y gustos de los padres, tutores o representantes legales de nuestros alumnos y usuarios, el diseño de nuevos servicios relacionados con los anteriores, el envío de actualizaciones de los servicios y el envío, por medios tradicionales y/o electrónicos, de información técnica, operativa y comercial acerca de los servicios actualmente ofrecidos por el Centro, o con el Centro como intermediario, o que tenga previsto prestar en el futuro, o el envío de formularios de encuestas de satisfacción, que los destinatarios no están obligados a contestar y que tendrán carácter anónimo.</p>
      <p>Los datos personales no serán tratados en ningún caso con fines incompatibles con los anteriormente reseñados y que son los propios de Colegio San Martín.</p>
      <p style="margin-top: var(--e-5)">${L.descarga('Política de protección de datos', 'assets/docs/POLITICA_PROTECCION_DE_DATOS.pdf', raiz)}</p>
    </article>

    <article class="prosa revelar">
      <p class="seccion__kicker">Fondo Social Europeo</p>
      <h2>Matemáticas aplicadas en 3º y 4º de la ESO</h2>
      <p>El Fondo Social Europeo cofinancia la implantación de las matemáticas aplicadas en tercero y cuarto de la ESO.</p>
      <figure class="figura" style="max-width: 260px; margin-top: var(--e-5)">
        ${imagen('assets/img/fondo-social-europeo.jpg', 'Logotipo del Fondo Social Europeo.')}
      </figure>
    </article>
  </div>
</section>
`,
  };

  return [indice, calendario, material, reuniones, noticias];
};
