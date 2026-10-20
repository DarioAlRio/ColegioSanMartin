/* ==========================================================================
   layout.js — <head>, cabecera, mega-menú, cajón móvil, pie, héroes y CTA.
   El HTML generado NO se edita a mano: se edita aquí y se ejecuta build.js.
   ========================================================================== */

'use strict';

const { SITE, NAV, NAV_SIMPLE, FOOT } = require('./nav');
const L = require('./lib');
const { esc, icono, imagen, celosia } = L;

const ANIO = new Date().getFullYear();

/* Contrato de dirección visual, emitido en el HTML de cada página. */
const CONTRATO = `<!--
  DIRECCIÓN VISUAL — Colegio San Martín · clave de tirada 2d61dcfc

  THESIS: un colegio de barrio contado con el lenguaje del barrio que lo vio
  nacer. Rechaza el patrón del sector: portada genérica y tres tarjetas de
  etapa con icono, todas del mismo tamaño.

  OWN-WORLD: retícula modular de fachada madrileña de los sesenta. Campos
  planos de azul marino #354d7d y azul acero #5a7eb2 tomados del logotipo del
  centro; naranja #f9a153 del sol del emblema como color de acción; celosía
  cerámica dibujada en SVG como textura; datos duros tratados como placa de
  portal. La fotografía es siempre del propio colegio.

  STORY: la familia entiende en un viewport que aquí se escolariza de 0 a 16
  años, que las etapas obligatorias están concertadas y que el plazo de
  solicitud es del 11 al 25 de marzo; y sabe adónde ir para pedir plaza.

  FIRST VIEWPORT: rótulo a sangre sobre campo marino a la izquierda, foto real
  de aula a la derecha ocupando media pantalla; debajo, placa de datos con
  código de centro, teléfono y transporte. Acción primaria «Cómo pedir plaza».

  FORM: candidato 7 de la lista ordenada (arquitectura de barrio de Moratalaz),
  asignado por concept-seed. Tirada degradada: sin retadores ni tableros.
-->`;

/* --------------------------------------------------------------------------
   CABEZA
   -------------------------------------------------------------------------- */
function cabeza(p) {
  const canonical = SITE.dominio + '/' + (p.url === 'index.html' ? '' : p.url);
  const ogImg = SITE.dominio + '/assets/img/' + (p.ogImagen || 'primaria-tablet.jpg');

  return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
${CONTRATO}
<title>${esc(p.titulo)}</title>
<meta name="description" content="${esc(p.descripcion)}">
<link rel="canonical" href="${canonical}">
<meta name="theme-color" content="#354d7d">

<meta property="og:type" content="website">
<meta property="og:locale" content="es_ES">
<meta property="og:site_name" content="${esc(SITE.nombre)}">
<meta property="og:title" content="${esc(p.titulo)}">
<meta property="og:description" content="${esc(p.descripcion)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${ogImg}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(p.titulo)}">
<meta name="twitter:description" content="${esc(p.descripcion)}">
<meta name="twitter:image" content="${ogImg}">

<link rel="icon" href="assets/img/escudo-historico.png" sizes="90x90">
<link rel="apple-touch-icon" href="assets/img/logotipo.png">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&family=Poppins:wght@500;600;700&display=swap">
<link rel="stylesheet" href="assets/css/site.css">

<script>document.documentElement.classList.add('js');</script>
${p.jsonLd ? '<script type="application/ld+json">' + JSON.stringify(p.jsonLd) + '</script>' : ''}
</head>
<body${p.clase ? ' class="' + p.clase + '"' : ''}>
<a class="salto" href="#contenido">Saltar al contenido</a>`;
}

/* --------------------------------------------------------------------------
   CABECERA + MEGA-MENÚ
   -------------------------------------------------------------------------- */
function cabecera(p) {
  const activa = function (url) {
    const base = url.split('#')[0];
    return base === p.url || (p.familia && base === p.familia);
  };

  const megaMenu = NAV.map(function (fam, i) {
    const abierta = activa(fam.url) || (p.familia === fam.url);
    return `<li class="nav__item nav__item--tiene-menu">
  <a class="nav__enlace" href="${fam.url}"${abierta ? ' aria-current="page"' : ''}
     id="nav-b-${i}" aria-expanded="false" aria-controls="nav-p-${i}" aria-haspopup="true">
    <span>${esc(fam.titulo)}</span>${icono('mas', 'nav__signo')}
  </a>
  <div class="mega" id="nav-p-${i}" aria-labelledby="nav-b-${i}" hidden>
    <div class="mega__interior">
      <div class="mega__columnas">
        ${fam.columnas.map(function (col) {
    return `<div class="mega__col">
          <p class="mega__titulo">${esc(col.titulo)}</p>
          <ul class="mega__lista">
            ${col.enlaces.map(function (e) {
      return `<li><a href="${e.url}"><span class="mega__texto">${esc(e.texto)}</span>
                <span class="mega__desc">${esc(e.desc)}</span></a></li>`;
    }).join('')}
          </ul>
        </div>`;
  }).join('')}
      </div>
      <div class="mega__apoyo">
        ${imagen('assets/img/' + fam.imagen.src.replace('assets/img/', ''), fam.imagen.alt, { clase: 'mega__img' })}
        <p class="mega__resumen">${esc(fam.resumen)}</p>
        <a class="mega__todo" href="${fam.url}">Ver ${esc(fam.titulo.toLowerCase())} ${icono('flecha')}</a>
      </div>
    </div>
  </div>
</li>`;
  }).join('');

  const simples = NAV_SIMPLE.map(function (s) {
    return `<li class="nav__item"><a class="nav__enlace" href="${s.url}"${activa(s.url) ? ' aria-current="page"' : ''}><span>${esc(s.titulo)}</span></a></li>`;
  }).join('');

  return `
<div class="tira">
  <div class="envoltura tira__interior">
    <p class="tira__lema">Centro concertado en Moratalaz · Educación Infantil, Primaria y E.S.O.</p>
    <div class="tira__acciones">
      <a class="tira__enlace" href="tel:${SITE.telefonoE164}">${icono('telefono')}<span>${esc(SITE.telefono)}</span></a>
      <a class="tira__enlace" href="${SITE.plataforma.url}" target="_blank" rel="noopener">${icono('llave')}<span>${esc(SITE.plataforma.nombre)}</span></a>
    </div>
  </div>
</div>

<header class="cabecera" data-cabecera>
  <div class="envoltura cabecera__interior">
    <a class="marca" href="index.html">
      ${imagen('assets/img/logotipo.png', 'Colegio San Martín', { clase: 'marca__logo', w: 800, h: 800, prioritaria: true })}
      <span class="marca__texto"><b>Colegio</b><i>San Martín</i></span>
    </a>

    <nav class="nav" aria-label="Navegación principal">
      <ul class="nav__lista">${megaMenu}${simples}</ul>
    </nav>

    <div class="cabecera__acciones">
      <a class="boton boton--sol boton--compacto" href="admisiones.html">
        <span>Pedir plaza</span>${icono('flecha')}
      </a>
      <button type="button" class="hamburguesa" data-abrir-cajon
              aria-expanded="false" aria-controls="cajon">
        ${icono('menu')}<span class="hamburguesa__texto">Menú</span>
      </button>
    </div>
  </div>
</header>

<div class="cajon" id="cajon" hidden>
  <div class="cajon__velo" data-cerrar-cajon></div>
  <div class="cajon__panel" role="dialog" aria-modal="true" aria-label="Menú de navegación">
    <div class="cajon__cabeza">
      <span class="cajon__marca">Colegio San Martín</span>
      <button type="button" class="cajon__cerrar" data-cerrar-cajon>
        ${icono('cerrar')}<span class="oculto-visual">Cerrar el menú</span>
      </button>
    </div>
    <nav class="cajon__nav" aria-label="Navegación del menú lateral">
      <ul class="cajon__lista">
        ${NAV.map(function (fam, i) {
    return `<li class="cajon__grupo">
          <button type="button" class="cajon__boton" aria-expanded="false" aria-controls="cajon-p-${i}">
            <span>${esc(fam.titulo)}</span>${icono('mas', 'cajon__signo')}
          </button>
          <div class="cajon__panel-sub" id="cajon-p-${i}" hidden>
            <a class="cajon__portada" href="${fam.url}">Ver todo: ${esc(fam.titulo)}</a>
            ${fam.columnas.map(function (col) {
      return `<p class="cajon__sub">${esc(col.titulo)}</p>
              <ul class="cajon__enlaces">
                ${col.enlaces.map(function (e) { return `<li><a href="${e.url}">${esc(e.texto)}</a></li>`; }).join('')}
              </ul>`;
    }).join('')}
          </div>
        </li>`;
  }).join('')}
        ${NAV_SIMPLE.map(function (s) {
    return `<li class="cajon__grupo"><a class="cajon__suelto" href="${s.url}">${esc(s.titulo)}</a></li>`;
  }).join('')}
      </ul>
    </nav>
    <div class="cajon__pie">
      <a class="boton boton--sol" href="admisiones.html"><span>Pedir plaza</span>${icono('flecha')}</a>
      <a class="cajon__dato" href="tel:${SITE.telefonoE164}">${icono('telefono')}<span>${esc(SITE.telefono)}</span></a>
      <a class="cajon__dato" href="${SITE.plataforma.url}" target="_blank" rel="noopener">${icono('llave')}<span>${esc(SITE.plataforma.nombre)}</span></a>
    </div>
  </div>
</div>`;
}

/* --------------------------------------------------------------------------
   HÉROES
   -------------------------------------------------------------------------- */

/* Héroe de portada: rótulo sobre campo marino + foto a sangre. */
function heroePortada(o) {
  return `
<section class="portada">
  <div class="portada__campo">
    ${celosia('cel-portada')}
    <div class="portada__texto">
      <p class="portada__antetitulo">${esc(o.antetitulo)}</p>
      <h1 class="portada__titulo">${o.titulo}</h1>
      <p class="portada__entrada">${o.entrada}</p>
      <div class="portada__acciones">
        ${L.boton('Cómo pedir plaza', 'admisiones.html', { variante: 'sol', icono: 'flecha' })}
        ${L.boton('Ver las etapas', 'etapas.html', { variante: 'linea' })}
      </div>
    </div>
  </div>
  <div class="portada__foto">
    ${imagen('assets/img/' + o.foto, o.fotoAlt, { prioritaria: true, clase: 'portada__img' })}
  </div>
</section>`;
}

/* Héroe de página interior: banda de color con migas y título. */
function heroePagina(p) {
  return `
<section class="testera testera--${p.tono || 'marino'}">
  ${celosia('cel-testera')}
  <div class="envoltura testera__interior">
    ${p.migas ? nav_migas(p.migas) : ''}
    <h1 class="testera__titulo">${p.h1 || esc(p.titulo)}</h1>
    ${p.entradilla ? '<p class="testera__entradilla">' + p.entradilla + '</p>' : ''}
    ${p.placa ? L.placa(p.placa) : ''}
  </div>
</section>`;
}

function nav_migas(migas) {
  return '<nav class="migas" aria-label="Ruta de navegación"><ol>' +
    migas.map(function (m, i) {
      const ultimo = i === migas.length - 1;
      return '<li>' + (ultimo || !m.url
        ? '<span aria-current="page">' + esc(m.texto) + '</span>'
        : '<a href="' + m.url + '">' + esc(m.texto) + '</a>') + '</li>';
    }).join('') + '</ol></nav>';
}

/* --------------------------------------------------------------------------
   BANDA DE LLAMADA A LA ACCIÓN
   -------------------------------------------------------------------------- */
function bandaCta(o) {
  o = o || {};
  return `
<section class="banda">
  ${celosia('cel-banda')}
  <div class="envoltura banda__interior">
    <div class="banda__texto">
      <h2 class="banda__titulo">${o.titulo || '¿Quiere conocer el colegio?'}</h2>
      <p class="banda__entrada">${o.texto || 'Puede llamarnos, escribirnos o pedir cita previa para visitar el centro. El plazo ordinario de solicitud de plaza es del 11 al 25 de marzo.'}</p>
    </div>
    <div class="banda__acciones">
      <a class="boton boton--sol" href="tel:${SITE.telefonoE164}">${icono('telefono')}<span>${esc(SITE.telefono)}</span></a>
      <a class="boton boton--linea-clara" href="contacto.html"><span>Escribir al colegio</span>${icono('flecha')}</a>
    </div>
  </div>
</section>`;
}

/* --------------------------------------------------------------------------
   PIE
   -------------------------------------------------------------------------- */
function pie() {
  // La columna del pie es estrecha y el número de portal se quedaba solo en
  // una tercera línea. Un espacio duro lo mantiene pegado a la calle. El dato
  // no cambia: es el mismo texto, solo se le prohíbe partir por ahí.
  const calle = SITE.direccion.calle.replace(/ ([^ ]+)$/, ' $1');

  return `
<footer class="pie">
  <div class="envoltura pie__interior">
    <div class="pie__marca">
      ${imagen('assets/img/logotipo.png', 'Colegio San Martín', { clase: 'pie__logo', w: 800, h: 800 })}
      <p class="pie__titularidad">Titularidad: ${esc(SITE.titularidad)}</p>
      <ul class="pie__redes">
        ${SITE.redes.map(function (r) {
    return '<li><a href="' + r.url + '" target="_blank" rel="noopener" aria-label="' + esc(r.nombre) + '">' + icono(r.icono) + '</a></li>';
  }).join('')}
      </ul>
    </div>

    <nav class="pie__mapa" aria-label="Mapa del sitio">
      ${FOOT.map(function (c) {
    return `<div class="pie__col">
        <p class="pie__titulo">${esc(c.titulo)}</p>
        <ul>${c.enlaces.map(function (e) { return '<li><a href="' + e.url + '">' + esc(e.texto) + '</a></li>'; }).join('')}</ul>
      </div>`;
  }).join('')}
    </nav>

    <address class="pie__contacto">
      <p class="pie__titulo">Dónde estamos</p>
      <p><a class="pie__direccion" href="${esc(SITE.mapaUrl)}" target="_blank" rel="noopener"
            aria-label="Ver la dirección del colegio en Google Maps (se abre en otra pestaña)"
         >${icono('mapa')}<span>${esc(calle)}<br>${esc(SITE.direccion.cp)} ${esc(SITE.direccion.ciudad)}</span></a></p>
      <p><a href="tel:${SITE.telefonoE164}">${esc(SITE.telefono)}</a></p>
      <p><a class="correo" href="#" data-correo="${SITE.correo.cuenta}|${SITE.correo.dominio}">correo del colegio</a></p>
      <p class="pie__transporte">${esc(SITE.transporte.metro)}<br>${esc(SITE.transporte.bus)}</p>
    </address>
  </div>

  <div class="pie__base">
    <div class="envoltura pie__base-interior">
      <p>© ${ANIO} Colegio San Martín. Código de centro ${esc(SITE.codigoCentro)}.</p>
      <p class="pie__legal">
        <a href="assets/docs/POLITICA_PROTECCION_DE_DATOS.pdf" download>Política de protección de datos</a>
        <span aria-hidden="true">·</span>
        <a href="calidad.html">Política de calidad</a>
      </p>
    </div>
  </div>
</footer>`;
}

/* --------------------------------------------------------------------------
   BARRA FIJA INFERIOR (solo móvil)
   No incluye WhatsApp: el centro no publica ningún número móvil.
   -------------------------------------------------------------------------- */
function barraMovil(p) {
  return `
<nav class="barra" aria-label="Acciones rápidas">
  <a class="barra__accion" href="tel:${SITE.telefonoE164}">${icono('telefono')}<span>Llamar</span></a>
  <a class="barra__accion" href="contacto.html">${icono('correo')}<span>Escribir</span></a>
  <a class="barra__accion barra__accion--principal" href="admisiones.html">${icono('escudo')}<span>Pedir plaza</span></a>
</nav>`;
}

function cierre() {
  return `<script src="assets/js/site.js"></script>
</body>
</html>`;
}

/* --------------------------------------------------------------------------
   ENSAMBLADO
   -------------------------------------------------------------------------- */
function pagina(p) {
  return [
    cabeza(p),
    cabecera(p),
    '<main id="contenido">',
    p.esPortada ? '' : heroePagina(p),
    p.cuerpo,
    p.sinCta ? '' : bandaCta(p.cta),
    '</main>',
    pie(),
    barraMovil(p),
    cierre(),
  ].join('\n');
}

module.exports = { pagina, heroePortada, heroePagina, bandaCta, nav_migas, CONTRATO };
