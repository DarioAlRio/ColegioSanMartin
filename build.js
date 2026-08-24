/* ==========================================================================
   build.js — Genera el sitio completo y lo VERIFICA.

   IMPORTANTE: los archivos .html de la raíz se generan automáticamente.
   NO SE EDITAN A MANO. Para cambiar algo, se edita el archivo de _build/
   que corresponda y se vuelve a ejecutar:  node build.js

   Sale con código 1 si algún enlace interno o alguna imagen referenciada
   no existe en el disco.
   ========================================================================== */

'use strict';

const fs = require('fs');
const path = require('path');

const RAIZ = __dirname;
const { SITE } = require('./_build/nav');
const layout = require('./_build/layout');

const CURSO_ADMISION = '2026-2027';

/* --------------------------------------------------------------------------
   Datos estructurados del centro (JSON-LD)
   -------------------------------------------------------------------------- */
const jsonLdCentro = {
  '@context': 'https://schema.org',
  '@type': 'School',
  name: SITE.nombre,
  alternateName: 'Colegio San Martín Moratalaz',
  url: SITE.dominio + '/',
  logo: SITE.dominio + '/assets/img/logotipo.png',
  image: SITE.dominio + '/assets/img/primaria-tablet.jpg',
  description: 'Centro privado concertado de Educación Infantil, Primaria y E.S.O. en Moratalaz (Madrid), con escuela infantil de 0 a 3 años y Formación Profesional.',
  telephone: SITE.telefonoE164,
  email: SITE.correo.cuenta + '@' + SITE.correo.dominio,
  identifier: SITE.codigoCentro,
  parentOrganization: { '@type': 'Organization', name: SITE.titularidad },
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.direccion.calle,
    postalCode: SITE.direccion.cp,
    addressLocality: SITE.direccion.ciudad,
    addressRegion: SITE.direccion.region,
    addressCountry: SITE.direccion.pais,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: SITE.coordenadas.lat,
    longitude: SITE.coordenadas.lon,
  },
  publicAccess: true,
  sameAs: SITE.redes.map(function (r) { return r.url; }),
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:25',
      closes: '17:20',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Oferta educativa',
    itemListElement: require('./_build/data').ETAPAS.map(function (e) {
      return {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'EducationalOccupationalProgram',
          name: e.nombre,
          educationalProgramMode: 'full-time',
          url: SITE.dominio + '/' + e.url,
        },
      };
    }),
  },
};

/* --------------------------------------------------------------------------
   1. Recoger las páginas
   -------------------------------------------------------------------------- */
const ctx = { raiz: RAIZ, cursoAdmision: CURSO_ADMISION, jsonLdCentro: jsonLdCentro };

const modulos = ['index', 'colegio', 'etapas', 'programas', 'servicios', 'admisiones', 'familias', 'contacto'];

let paginas = [];
modulos.forEach(function (m) {
  const salida = require('./_build/pages/' + m)(ctx);
  paginas = paginas.concat(Array.isArray(salida) ? salida : [salida]);
});

/* --------------------------------------------------------------------------
   2. Escribir el HTML
   -------------------------------------------------------------------------- */
console.log('Generando ' + paginas.length + ' páginas…\n');

const escritas = [];
paginas.forEach(function (p) {
  const html = layout.pagina(p);
  fs.writeFileSync(path.join(RAIZ, p.url), html, 'utf8');
  escritas.push({ url: p.url, bytes: Buffer.byteLength(html), pagina: p });
  console.log('  ' + p.url.padEnd(30) + (Buffer.byteLength(html) / 1024).toFixed(0) + ' KB');
});

/* --------------------------------------------------------------------------
   3. Redirecciones de las URL antiguas de Joomla
   Los .html de redirección conservan el tráfico si el hosting no permite 301.
   La tabla completa está en README.md.
   -------------------------------------------------------------------------- */
const REDIRECCIONES = require('./_build/redirecciones');

const dirRed = path.join(RAIZ, 'index.php');
fs.rmSync(dirRed, { recursive: true, force: true });

let nRed = 0;
Object.keys(REDIRECCIONES).forEach(function (antigua) {
  const destino = REDIRECCIONES[antigua];
  // /index.php/nuestro-cole/identidad  ->  index.php/nuestro-cole/identidad/index.html
  const rel = antigua.replace(/^\//, '');
  const carpeta = path.join(RAIZ, rel);
  fs.mkdirSync(carpeta, { recursive: true });
  const html = '<!DOCTYPE html>\n<html lang="es">\n<head>\n<meta charset="utf-8">\n' +
    '<title>Página trasladada · Colegio San Martín</title>\n' +
    '<link rel="canonical" href="' + SITE.dominio + '/' + destino + '">\n' +
    '<meta name="robots" content="noindex, follow">\n' +
    '<meta http-equiv="refresh" content="0; url=/' + destino + '">\n' +
    '<style>body{font-family:system-ui,sans-serif;margin:0;display:flex;min-height:100vh;' +
    'align-items:center;justify-content:center;background:#f2f4f7;color:#2f3340;text-align:center;padding:2rem}' +
    'a{color:#3d449a}</style>\n</head>\n<body>\n<main>\n' +
    '<p>Esta página se ha trasladado.</p>\n' +
    '<p><a href="/' + destino + '">Continuar a la página nueva</a></p>\n' +
    '</main>\n</body>\n</html>\n';
  fs.writeFileSync(path.join(carpeta, 'index.html'), html, 'utf8');
  nRed++;
});
console.log('\n  ' + nRed + ' redirecciones de URL antiguas escritas.');

/* --------------------------------------------------------------------------
   4. sitemap.xml y robots.txt
   -------------------------------------------------------------------------- */
const hoy = new Date().toISOString().slice(0, 10);
const urlsSitemap = paginas.filter(function (p) { return !p.sinSitemap; });

const sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  urlsSitemap.map(function (p) {
    const loc = SITE.dominio + '/' + (p.url === 'index.html' ? '' : p.url);
    return '  <url>\n' +
      '    <loc>' + loc + '</loc>\n' +
      '    <lastmod>' + hoy + '</lastmod>\n' +
      '    <changefreq>' + (p.prioridad >= '0.8' ? 'monthly' : 'yearly') + '</changefreq>\n' +
      '    <priority>' + (p.prioridad || '0.5') + '</priority>\n' +
      '  </url>';
  }).join('\n') + '\n</urlset>\n';
fs.writeFileSync(path.join(RAIZ, 'sitemap.xml'), sitemap, 'utf8');

const robots = '# robots.txt — Colegio San Martín\n' +
  'User-agent: *\n' +
  'Allow: /\n' +
  'Disallow: /_build/\n' +
  'Disallow: /assets/img/_original/\n\n' +
  'Sitemap: ' + SITE.dominio + '/sitemap.xml\n';
fs.writeFileSync(path.join(RAIZ, 'robots.txt'), robots, 'utf8');
console.log('  sitemap.xml (' + urlsSitemap.length + ' URL) y robots.txt escritos.');

/* --------------------------------------------------------------------------
   5. VERIFICACIÓN — falla con código 1 si algo está roto
   -------------------------------------------------------------------------- */
console.log('\nVerificando…');

const errores = [];
const avisos = [];
const paginasValidas = {};
escritas.forEach(function (e) { paginasValidas[e.url] = true; });

escritas.forEach(function (e) {
  const html = fs.readFileSync(path.join(RAIZ, e.url), 'utf8');
  const anclas = {};

  // Recoger los id= de esta página para validar los enlaces con almohadilla.
  let m;
  const reId = /\sid="([^"]+)"/g;
  while ((m = reId.exec(html))) anclas[m[1]] = true;

  // --- enlaces internos ---
  const reHref = /href="([^"]+)"/g;
  while ((m = reHref.exec(html))) {
    const h = m[1];
    if (/^(https?:|mailto:|tel:|#|data:)/.test(h)) {
      if (h.charAt(0) === '#' && h.length > 1 && !anclas[h.slice(1)]) {
        errores.push(e.url + ' → ancla inexistente ' + h);
      }
      continue;
    }
    const partes = h.split('#');
    const archivo = partes[0];
    if (!archivo) continue;
    if (!fs.existsSync(path.join(RAIZ, decodeURIComponent(archivo)))) {
      errores.push(e.url + ' → enlace roto: ' + archivo);
    }
    // Ancla en otra página del sitio.
    if (partes[1] && paginasValidas[archivo]) {
      const otro = fs.readFileSync(path.join(RAIZ, archivo), 'utf8');
      if (otro.indexOf('id="' + partes[1] + '"') < 0) {
        errores.push(e.url + ' → ancla inexistente en otra página: ' + h);
      }
    }
  }

  // --- imágenes (src y srcset) ---
  const reSrc = /(?:src|srcset)="([^"]+)"/g;
  while ((m = reSrc.exec(html))) {
    const s = m[1];
    if (/^(https?:|data:)/.test(s)) continue;
    s.split(',').forEach(function (trozo) {
      const f = trozo.trim().split(/\s+/)[0];
      if (!f) return;
      if (!fs.existsSync(path.join(RAIZ, decodeURIComponent(f)))) {
        errores.push(e.url + ' → recurso inexistente: ' + f);
      }
    });
  }

  // --- comprobaciones de accesibilidad y SEO ---
  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) errores.push(e.url + ' → tiene ' + h1 + ' etiquetas <h1> (debe haber exactamente 1)');

  if (html.indexOf('href="#contenido"') < 0) errores.push(e.url + ' → falta el enlace de salto al contenido');
  if (html.indexOf('id="contenido"') < 0) errores.push(e.url + ' → falta el destino #contenido');

  const imgs = html.match(/<img\b[^>]*>/g) || [];
  imgs.forEach(function (t) {
    if (!/\salt="/.test(t)) errores.push(e.url + ' → <img> sin alt: ' + t.slice(0, 90));
    if (!/\swidth="/.test(t) || !/\sheight="/.test(t)) {
      avisos.push(e.url + ' → <img> sin width/height: ' + t.slice(0, 90));
    }
  });

  const titulo = (html.match(/<title>([\s\S]*?)<\/title>/) || [])[1] || '';
  if (titulo.length > 70) avisos.push(e.url + ' → <title> de ' + titulo.length + ' caracteres (más de 70)');
  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '';
  if (!desc) errores.push(e.url + ' → falta la meta description');
  else if (desc.length > 165) avisos.push(e.url + ' → description de ' + desc.length + ' caracteres (más de 165)');
});

// --- títulos y descripciones únicos ---
const vistos = {};
escritas.forEach(function (e) {
  const t = e.pagina.titulo;
  if (vistos[t]) errores.push('título repetido en ' + e.url + ' y ' + vistos[t] + ': ' + t);
  vistos[t] = e.url;
});

// --- los destinos de las redirecciones existen ---
Object.keys(REDIRECCIONES).forEach(function (a) {
  if (!paginasValidas[REDIRECCIONES[a]]) {
    errores.push('redirección ' + a + ' apunta a una página inexistente: ' + REDIRECCIONES[a]);
  }
});

/* --------------------------------------------------------------------------
   6. Resultado
   -------------------------------------------------------------------------- */
if (avisos.length) {
  console.log('\n  Avisos (' + avisos.length + '):');
  avisos.forEach(function (a) { console.log('    · ' + a); });
}

if (errores.length) {
  console.error('\n  ERRORES (' + errores.length + '):');
  errores.forEach(function (e) { console.error('    ✗ ' + e); });
  console.error('\nCompilación fallida.');
  process.exit(1);
}

const pesoHtml = escritas.reduce(function (a, e) { return a + e.bytes; }, 0);
console.log('  Sin enlaces rotos, sin imágenes que falten, un <h1> por página.');
console.log('\nListo. ' + escritas.length + ' páginas, ' + (pesoHtml / 1024).toFixed(0) + ' KB de HTML.');
