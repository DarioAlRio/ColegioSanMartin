/* ==========================================================================
   serve.js — Servidor estático de previsualización.
   Uso:  node _build/serve.js [puerto]
   No forma parte del sitio publicado: el hosting sirve los archivos tal cual.
   ========================================================================== */

'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');

const RAIZ = path.join(__dirname, '..');
const PUERTO = parseInt(process.argv[2], 10) || 4321;

const TIPOS = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
  '.woff2': 'font/woff2',
};

http.createServer(function (req, res) {
  let ruta = decodeURIComponent(req.url.split('?')[0]);
  if (ruta.endsWith('/')) ruta += 'index.html';
  if (ruta === '/index.html' || ruta === '/') ruta = '/index.html';

  let archivo = path.join(RAIZ, ruta);

  // No salir de la raíz del proyecto.
  if (!archivo.startsWith(RAIZ)) {
    res.writeHead(403).end('Prohibido');
    return;
  }

  // Carpeta sin barra final: intentar su index.html.
  if (fs.existsSync(archivo) && fs.statSync(archivo).isDirectory()) {
    archivo = path.join(archivo, 'index.html');
  }

  fs.readFile(archivo, function (err, datos) {
    if (err) {
      const p404 = path.join(RAIZ, '404.html');
      if (fs.existsSync(p404)) {
        res.writeHead(404, { 'Content-Type': TIPOS['.html'] });
        res.end(fs.readFileSync(p404));
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('404 · No encontrado: ' + ruta);
      }
      return;
    }
    const ext = path.extname(archivo).toLowerCase();
    res.writeHead(200, {
      'Content-Type': TIPOS[ext] || 'application/octet-stream',
      'Cache-Control': 'no-cache',
    });
    res.end(datos);
  });
}).listen(PUERTO, function () {
  console.log('Previsualización en http://localhost:' + PUERTO + '/');
  console.log('Sirviendo ' + RAIZ);
});
