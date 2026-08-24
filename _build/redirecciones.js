/* ==========================================================================
   redirecciones.js — Cada URL del sitio Joomla anterior y su destino nuevo.

   Se generan archivos de redirección en disco para que ninguna dirección
   antigua devuelva 404 aunque el hosting no permita configurar 301.
   Lo ideal es configurar redirecciones 301 de verdad: ver README.md.
   ========================================================================== */

'use strict';

module.exports = {
  /* Portada */
  '/index.php': 'index.html',

  /* NUESTRO COLEGIO */
  '/index.php/nuestro-cole/identidad': 'colegio.html',
  '/index.php/nuestro-cole/propuesta': 'colegio.html',
  '/index.php/nuestro-cole/metodologia': 'colegio.html',
  '/index.php/nuestro-cole/comunidad-educativa': 'colegio.html',
  '/index.php/nuestro-cole/convivencia': 'convivencia.html',
  '/index.php/nuestro-cole/politica-de-calidad': 'calidad.html',

  /* NOTICIAS */
  '/index.php/nuestro-cole/noticias': 'noticias.html',
  '/index.php/nuestro-cole/noticias/calendario-escolar': 'calendario.html',
  '/index.php/nuestro-cole/noticias/reuniones': 'reuniones.html',
  '/index.php/nuestro-cole/noticias/material': 'material.html',

  /* SERVICIOS E INSTALACIONES */
  '/index.php/nuestro-cole/servicios': 'servicios.html',
  '/index.php/nuestro-cole/servicios/telepediatria': 'telepediatria.html',
  '/index.php/nuestro-cole/servicios/orientacion': 'orientacion.html',
  '/index.php/nuestro-cole/servicios/comedor': 'comedor.html',
  '/index.php/nuestro-cole/extraescolares': 'extraescolares.html',

  /* PROYECTOS */
  '/index.php/nuestro-cole/proyectos': 'programas.html',
  '/index.php/nuestro-cole/proyectos/matematicas-abn': 'matematicas-abn.html',
  '/index.php/nuestro-cole/proyectos/nuevas-tecnologias': 'tecnologia.html',
  '/index.php/nuestro-cole/proyectos/plan-digital': 'plan-digital.html',
  '/index.php/nuestro-cole/proyectos/proa': 'proa.html',

  /* ENGLISH */
  '/index.php/nuestro-cole/english': 'ingles.html',
  '/index.php/nuestro-cole/english/cambridge': 'ingles.html',
  '/index.php/nuestro-cole/english/programa-beda': 'ingles.html',
  '/index.php/nuestro-cole/english/centro-cambridge': 'ingles.html',
  '/index.php/nuestro-cole/english/19-metodo-vaughan': 'ingles.html',

  /* ADMISIONES */
  '/index.php/admisiones': 'admisiones.html',
  '/index.php/admisiones/informacion': 'admisiones.html',

  /* OFERTA EDUCATIVA */
  '/index.php/oferta-educativa': 'etapas.html',
  '/index.php/oferta-educativa/infantil': 'infantil.html',
  '/index.php/oferta-educativa/infantil/infantil-segunda-reunion': 'infantil.html',
  '/index.php/oferta-educativa/infantil/primer-ciclo-infantil': 'infantil-primer-ciclo.html',
  '/index.php/oferta-educativa/primaria': 'primaria.html',
  '/index.php/oferta-educativa/secundaria': 'eso.html',
  '/index.php/oferta-educativa/formacion-profesional': 'formacion-profesional.html',

  /* CONTACTO */
  '/index.php/contacto': 'contacto.html',
  '/index.php/contacto/contacto': 'contacto.html',
  '/index.php/contacto/como-llegar': 'contacto.html',
  '/index.php/contacto/escribenos': 'contacto.html',

  /* INFORMACIÓN A LAS FAMILIAS */
  '/index.php/informacion-a-las-familias': 'familias.html',

  /* Vista de blog que enlazaba el carrusel de la portada */
  '/index.php/15-nuestro-colegio': 'index.html',
};
