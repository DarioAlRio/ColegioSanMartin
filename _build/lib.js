/* ==========================================================================
   lib.js — Iconos SVG en línea y componentes reutilizables.
   Cero librerías: ningún icono viene de una fuente externa.
   ========================================================================== */

'use strict';

const fs = require('fs');
const path = require('path');

/* Medidas reales de las imágenes, para escribir width/height y evitar saltos. */
let MEDIDAS = {};
try {
  MEDIDAS = JSON.parse(fs.readFileSync(path.join(__dirname, 'imagenes.json'), 'utf8'));
} catch (e) {
  MEDIDAS = {};
}

/* Escapa texto para insertarlo en HTML. */
function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

/* --------------------------------------------------------------------------
   ICONOS — trazo de 1,75; todos heredan currentColor. aria-hidden por defecto:
   nunca portan significado que no esté ya en el texto contiguo.
   -------------------------------------------------------------------------- */
const TRAZOS = {
  telefono: '<path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3a1.5 1.5 0 0 1-1.6 1.5C11.6 18.6 5.4 12.4 5 5.1A1.5 1.5 0 0 1 6.5 3.5Z"/>',
  correo: '<rect x="3" y="5.5" width="18" height="13" rx="1.5"/><path d="m3.6 6.5 8.4 6.2 8.4-6.2"/>',
  mapa: '<path d="M12 21s6.5-6.2 6.5-11a6.5 6.5 0 1 0-13 0C5.5 14.8 12 21 12 21Z"/><circle cx="12" cy="10" r="2.4"/>',
  reloj: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.2V12l3.2 2"/>',
  metro: '<circle cx="12" cy="12" r="8.5"/><path d="M7.5 15.5V9l4.5 4 4.5-4v6.5"/>',
  bus: '<rect x="4" y="4.5" width="16" height="12" rx="2"/><path d="M4 11h16M7.5 20v-3M16.5 20v-3"/><circle cx="8" cy="14" r=".9" fill="currentColor" stroke="none"/><circle cx="16" cy="14" r=".9" fill="currentColor" stroke="none"/>',
  pdf: '<path d="M14 3.5H7.5A1.5 1.5 0 0 0 6 5v14a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19V7.5Z"/><path d="M14 3.5V7a.5.5 0 0 0 .5.5H18"/><path d="M9 15.5h6M9 12.5h6"/>',
  descarga: '<path d="M12 4v10.5"/><path d="m7.8 10.8 4.2 4.2 4.2-4.2"/><path d="M5 19.5h14"/>',
  flecha: '<path d="M5 12h13"/><path d="m12.5 6.2 5.8 5.8-5.8 5.8"/>',
  externo: '<path d="M14 5h5v5"/><path d="M19 5 11 13"/><path d="M17.5 14v4.5A1.5 1.5 0 0 1 16 20H6a1.5 1.5 0 0 1-1.5-1.5v-10A1.5 1.5 0 0 1 6 7h4.5"/>',
  mas: '<path d="M12 6v12M6 12h12"/>',
  cerrar: '<path d="m6.5 6.5 11 11M17.5 6.5l-11 11"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  cubiertos: '<path d="M7 3.5v7a2 2 0 0 0 4 0v-7M9 10.5V20.5"/><path d="M16.5 3.5c-1.4 1.6-1.8 3.6-1.5 6 .2 1.4.8 2 1.5 2s1.3-.6 1.5-2c.3-2.4-.1-4.4-1.5-6Z"/><path d="M16.5 11.5v9"/>',
  salud: '<path d="M4.5 12h3l1.8-4 2.7 8 2-4h5"/><path d="M20 8.8a4.3 4.3 0 0 0-8-2.2 4.3 4.3 0 0 0-8 2.2c0 4.6 8 10.7 8 10.7s8-6.1 8-10.7Z"/>',
  orientacion: '<circle cx="12" cy="8" r="3.4"/><path d="M5.5 20a6.5 6.5 0 0 1 13 0"/>',
  balon: '<circle cx="12" cy="12" r="8.5"/><path d="m12 6.5 3.6 2.6-1.4 4.2h-4.4L8.4 9.1Z"/><path d="M12 3.5v3M4.2 9.4l3 1.8M19.8 9.4l-3 1.8M7.6 19.6l1.6-3.6M16.4 19.6l-1.6-3.6"/>',
  idioma: '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17"/><path d="M12 3.5c2.2 2.4 3.3 5.3 3.3 8.5S14.2 18.1 12 20.5c-2.2-2.4-3.3-5.3-3.3-8.5S9.8 5.9 12 3.5Z"/>',
  abaco: '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 9.5h16M4 14.5h16"/><circle cx="8.5" cy="6.7" r="1.1" fill="currentColor" stroke="none"/><circle cx="14" cy="12" r="1.1" fill="currentColor" stroke="none"/><circle cx="10" cy="17.2" r="1.1" fill="currentColor" stroke="none"/>',
  tablet: '<rect x="5.5" y="3" width="13" height="18" rx="2"/><path d="M10.5 17.8h3"/>',
  red: '<circle cx="12" cy="5.5" r="2.3"/><circle cx="5.5" cy="17" r="2.3"/><circle cx="18.5" cy="17" r="2.3"/><path d="m10.4 7.4-3.2 7.5M13.6 7.4l3.2 7.5M7.8 17h8.4"/>',
  apoyo: '<path d="M12 20.5s-7-4.3-7-9.2a3.9 3.9 0 0 1 7-2.4 3.9 3.9 0 0 1 7 2.4c0 4.9-7 9.2-7 9.2Z"/>',
  escudo: '<path d="M12 3.5 5 6v5.5c0 4.3 3 7.6 7 9 4-1.4 7-4.7 7-9V6Z"/><path d="m9 12 2.2 2.2L15.5 10"/>',
  calendario: '<rect x="4" y="5.5" width="16" height="15" rx="1.8"/><path d="M4 10h16M8.5 3.5V7M15.5 3.5V7"/>',
  libro: '<path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H10a2.5 2.5 0 0 1 2 1 2.5 2.5 0 0 1 2-1h4.5A1.5 1.5 0 0 1 20 5.5v12a1.5 1.5 0 0 1-1.5 1.5H14a2.5 2.5 0 0 0-2 1 2.5 2.5 0 0 0-2-1H5.5A1.5 1.5 0 0 1 4 17.5Z"/><path d="M12 5v14"/>',
  usuarios: '<circle cx="9" cy="8.5" r="3"/><path d="M3.5 19.5a5.5 5.5 0 0 1 11 0"/><path d="M16 6.2a3 3 0 0 1 0 4.6M17.6 14.4a5.5 5.5 0 0 1 2.9 5.1"/>',
  facebook: '<path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6a22 22 0 0 0-2.4-.12c-2.4 0-4.05 1.47-4.05 4.16V9.9H7.5V13h2.75v8Z" fill="currentColor" stroke="none"/>',
  twitter: '<path d="M17.2 3.5h3.05l-6.66 7.61L21.4 21.5h-6.13l-4.8-6.28-5.5 6.28H1.9l7.12-8.14L1.6 3.5h6.29l4.34 5.74Zm-1.07 16.16h1.69L7.24 5.25H5.43Z" fill="currentColor" stroke="none"/>',
  youtube: '<path d="M21.55 7.2a2.5 2.5 0 0 0-1.76-1.77C18.23 5 12 5 12 5s-6.23 0-7.79.43A2.5 2.5 0 0 0 2.45 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .45 4.8 2.5 2.5 0 0 0 1.76 1.77C5.77 19 12 19 12 19s6.23 0 7.79-.43a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.45-4.8ZM10 15.05v-6.1L15.2 12Z" fill="currentColor" stroke="none"/>',
  llave: '<circle cx="8" cy="12" r="3.5"/><path d="M11.5 12H20M17 12v3M14.5 12v2.2"/>',
};

function icono(nombre, clase) {
  const d = TRAZOS[nombre];
  if (!d) throw new Error('Icono desconocido: ' + nombre);
  return '<svg class="icono' + (clase ? ' ' + clase : '') + '" viewBox="0 0 24 24" fill="none" ' +
    'stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" ' +
    'aria-hidden="true" focusable="false">' + d + '</svg>';
}

/* --------------------------------------------------------------------------
   CELOSÍA — motivo gráfico del mundo visual, dibujado como SVG en línea.
   Es un patrón abstracto de bloque perforado; no representa el edificio real
   del colegio, del que no hay fotografía de fachada disponible.
   -------------------------------------------------------------------------- */
function celosia(id) {
  return '<svg class="celosia" aria-hidden="true" focusable="false" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">' +
    '<defs><pattern id="' + id + '" width="56" height="56" patternUnits="userSpaceOnUse">' +
    '<rect width="56" height="56" fill="none"/>' +
    '<path d="M28 6 46 28 28 50 10 28Z" fill="none" stroke="currentColor" stroke-width="1.5"/>' +
    '<path d="M28 18 38 28 28 38 18 28Z" fill="currentColor" fill-opacity=".5"/>' +
    '<path d="M0 28h10M46 28h10M28 0v6M28 50v6" stroke="currentColor" stroke-width="1.5"/>' +
    '</pattern></defs>' +
    '<rect width="100%" height="100%" fill="url(#' + id + ')"/></svg>';
}

/* --------------------------------------------------------------------------
   IMAGEN — <picture> con WebP y respaldo, medidas reales y carga diferida.
   -------------------------------------------------------------------------- */
function imagen(src, alt, opts) {
  opts = opts || {};
  const base = src.replace(/\.(jpe?g|png)$/i, '');
  const nombre = src.split('/').pop();
  const m = MEDIDAS[nombre] || {};
  const w = opts.w || m.w;
  const h = opts.h || m.h;
  const prioritaria = !!opts.prioritaria;

  let attrs = ' alt="' + esc(alt) + '"';
  if (w && h) attrs += ' width="' + w + '" height="' + h + '"';
  if (opts.clase) attrs += ' class="' + opts.clase + '"';
  if (opts.sizes) attrs += ' sizes="' + opts.sizes + '"';
  attrs += prioritaria
    ? ' fetchpriority="high" decoding="async"'
    : ' loading="lazy" decoding="async"';

  return '<picture>' +
    '<source type="image/webp" srcset="' + base + '.webp">' +
    '<img src="' + src + '"' + attrs + '>' +
    '</picture>';
}

/* --------------------------------------------------------------------------
   BOTONES Y ENLACES
   -------------------------------------------------------------------------- */
function boton(texto, url, opts) {
  opts = opts || {};
  const clase = 'boton' + (opts.variante ? ' boton--' + opts.variante : '');
  const externo = /^https?:/.test(url);
  const rel = externo ? ' target="_blank" rel="noopener"' : '';
  const ico = opts.icono ? icono(opts.icono) : (externo ? icono('externo') : '');
  return '<a class="' + clase + '" href="' + url + '"' + rel + '>' +
    '<span>' + esc(texto) + '</span>' + ico + '</a>';
}

/* Enlace de descarga de un PDF, con su peso real en disco. */
function descarga(nombre, archivo, raiz) {
  let peso = '';
  try {
    const b = fs.statSync(path.join(raiz, archivo)).size;
    peso = b > 1048576 ? (b / 1048576).toFixed(1) + ' MB' : Math.round(b / 1024) + ' KB';
  } catch (e) { peso = ''; }
  return '<a class="descarga" href="' + archivo + '" download>' +
    icono('pdf', 'descarga__tipo') +
    '<span class="descarga__nombre">' + esc(nombre) + '</span>' +
    '<span class="descarga__meta">PDF' + (peso ? ' · ' + peso : '') + '</span>' +
    icono('descarga', 'descarga__flecha') +
    '</a>';
}

/* --------------------------------------------------------------------------
   BLOQUES DE CONTENIDO
   -------------------------------------------------------------------------- */

/* Ficha de etapa educativa. */
function fichaEtapa(e) {
  return '<a class="etapa etapa--' + e.color + '" href="' + e.url + '">' +
    '<span class="etapa__edades">' + esc(e.edades) + '</span>' +
    '<h3 class="etapa__nombre">' + esc(e.nombre) + '</h3>' +
    '<p class="etapa__resumen">' + esc(e.resumen) + '</p>' +
    '<span class="etapa__regimen">' + esc(e.regimen) + '</span>' +
    '<span class="etapa__ir">' + icono('flecha') + '</span>' +
    '</a>';
}

/* Placa de datos: la señalética del portal aplicada a un dato duro. */
function placa(items) {
  return '<dl class="placa">' + items.map(function (i) {
    const valor = i.url
      ? '<a href="' + i.url + '"' + (/^https?:/.test(i.url) ? ' target="_blank" rel="noopener"' : '') + '>' + esc(i.valor) + '</a>'
      : esc(i.valor);
    return '<div class="placa__celda">' +
      '<dt>' + esc(i.etiqueta) + '</dt>' +
      '<dd>' + valor + '</dd>' +
      '</div>';
  }).join('') + '</dl>';
}

/* Tabla con desplazamiento horizontal propio y cabeceras asociadas. */
function tabla(cabeceras, filas, opts) {
  opts = opts || {};
  return '<div class="tabla-marco"' + (opts.etiqueta ? ' role="region" aria-label="' + esc(opts.etiqueta) + '" tabindex="0"' : '') + '>' +
    '<table class="tabla' + (opts.clase ? ' ' + opts.clase : '') + '">' +
    (opts.titulo ? '<caption>' + esc(opts.titulo) + '</caption>' : '') +
    '<thead><tr>' + cabeceras.map(function (c) {
      return '<th scope="col">' + esc(c) + '</th>';
    }).join('') + '</tr></thead>' +
    '<tbody>' + filas.map(function (f) {
      return '<tr>' + f.map(function (celda, i) {
        return i === 0
          ? '<th scope="row">' + celda + '</th>'
          : '<td>' + celda + '</td>';
      }).join('') + '</tr>';
    }).join('') + '</tbody></table></div>';
}

/* Acordeón accesible. El contenido es visible sin JavaScript. */
function acordeon(id, items) {
  return '<div class="acordeon" data-acordeon>' + items.map(function (it, i) {
    const pid = id + '-' + i;
    return '<div class="acordeon__item">' +
      '<h3 class="acordeon__titulo">' +
      '<button type="button" class="acordeon__boton" id="b-' + pid + '" ' +
      'aria-expanded="true" aria-controls="p-' + pid + '">' +
      '<span>' + esc(it.titulo) + '</span>' + icono('mas', 'acordeon__signo') +
      '</button></h3>' +
      '<div class="acordeon__panel" id="p-' + pid + '" role="region" aria-labelledby="b-' + pid + '">' +
      '<div class="acordeon__cuerpo">' + it.html + '</div>' +
      '</div></div>';
  }).join('') + '</div>';
}

/* Aviso destacado. tono: 'nota' | 'ojo' */
function aviso(titulo, html, tono) {
  return '<aside class="aviso aviso--' + (tono || 'nota') + '">' +
    (titulo ? '<p class="aviso__titulo">' + esc(titulo) + '</p>' : '') +
    html + '</aside>';
}

/* Rejilla tipo bento: piezas de tamaño desigual dentro de una retícula firme. */
function bento(piezas) {
  return '<div class="bento">' + piezas.map(function (p) {
    return '<div class="bento__pieza bento__pieza--' + (p.tam || 'uno') + (p.tono ? ' bento__pieza--' + p.tono : '') + '">' + p.html + '</div>';
  }).join('') + '</div>';
}

/* Galería con visor. Sin JS muestra las imágenes como enlaces al archivo. */
function galeria(items) {
  return '<ul class="galeria" data-galeria>' + items.map(function (it, i) {
    return '<li class="galeria__item">' +
      '<a class="galeria__enlace" href="' + it.src + '" data-indice="' + i + '" ' +
      'data-pie="' + esc(it.alt) + '">' +
      imagen(it.src, it.alt, { clase: 'galeria__img' }) +
      '</a></li>';
  }).join('') + '</ul>';
}

/* Lista de definiciones sencilla para datos sueltos. */
function datos(items) {
  return '<dl class="datos">' + items.map(function (i) {
    return '<div class="datos__fila"><dt>' + esc(i.k) + '</dt><dd>' + i.v + '</dd></div>';
  }).join('') + '</dl>';
}

module.exports = { esc, icono, celosia, imagen, boton, descarga, fichaEtapa, placa, tabla, acordeon, aviso, bento, galeria, datos, MEDIDAS };
