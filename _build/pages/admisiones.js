/* Sección «Admisiones». El texto del proceso se reproduce literalmente. */
'use strict';

const { SITE } = require('../nav');
const D = require('../data');
const L = require('../lib');
const { icono, imagen, esc, boton } = L;

module.exports = function (ctx) {
  const raiz = ctx.raiz;

  const admisiones = {
    url: 'admisiones.html',
    familia: 'admisiones.html',
    titulo: 'Admisiones ' + ctx.cursoAdmision + ' · Cómo pedir plaza · Colegio San Martín',
    descripcion: 'Proceso de admisión ' + ctx.cursoAdmision + ' en el Colegio San Martín: plazo del 11 al 25 de marzo, trámites presenciales y telemáticos, documentación, baremo y vacantes.',
    tono: 'marino',
    prioridad: '0.9',
    ogImagen: 'manos-balon.jpg',
    migas: [{ texto: 'Inicio', url: 'index.html' }, { texto: 'Admisiones' }],
    h1: 'Instrucciones del proceso de admisión ' + ctx.cursoAdmision,
    entradilla: 'Según lo establecido en la última Resolución publicada por la Consejería de Educación de la Comunidad de Madrid, les informamos de los trámites que deben realizar para formalizar la solicitud de plaza en el proceso ordinario en nuestro centro educativo.',
    placa: [
      { etiqueta: 'Plazo de solicitudes', valor: 'Del 11 al 25 de marzo' },
      { etiqueta: 'Código de centro', valor: SITE.codigoCentro },
      { etiqueta: 'Cita previa', valor: SITE.telefono, url: 'tel:' + SITE.telefonoE164 },
    ],
    cuerpo: `
<section class="seccion seccion--papel">
  <div class="envoltura">
    <div class="dos-columnas dos-columnas--texto-ancho">
      <div class="prosa revelar">
        <h2>Cómo se presenta la solicitud</h2>
        <p>La presentación de las solicitudes puede realizarse de manera presencial en el propio Centro, o por medios telemáticos, para lo cual la Consejería ha habilitado las siguientes posibilidades:</p>
        <ul>
          <li>Mediante la utilización del certificado digital.</li>
          <li>A través del sistema de identificación electrónica cl@ve.</li>
          <li>Acceso sin certificado digital a través de un registro en el sistema en el que se recogerán los siguientes campos: DNI, nombre y apellidos, teléfono móvil, correo electrónico, clave y pregunta de seguridad. El registro se activará mediante un mensaje al teléfono móvil, lo que permitirá acceder con su DNI y clave.</li>
        </ul>
        <p>Esta opción facilita el acceso para todas las nuevas familias que se incorporan al sistema educativo este año.</p>
      </div>

      <div class="revelar">
        <div class="aviso aviso--ojo">
          <p class="aviso__titulo">Trámite en la Comunidad de Madrid</p>
          <p>La solicitud se envía desde la Secretaría Virtual de la Comunidad de Madrid, no desde esta web.</p>
          <p style="margin-top: var(--e-4)">
            ${boton('Ir a la Secretaría Virtual', SITE.secretariaVirtual, { variante: 'sol' })}
          </p>
          <p style="margin-top: var(--e-3)">
            ${boton('Descargar la solicitud (PDF editable)', SITE.solicitudCam, { variante: 'fantasma' })}
          </p>
        </div>

        <div style="margin-top: var(--e-5)">
          ${L.aviso('Si no puede hacerlo por internet',
            '<p>En el caso de que no puedan realizar la solicitud de manera telemática, tendrán que acudir al colegio.</p>' +
            '<p>Pueden solicitar cita previa en <a class="correo" href="#" data-correo="' + SITE.correo.cuenta + '|' + SITE.correo.dominio + '" data-correo-texto>correo del colegio</a> o por teléfono <a href="tel:' + SITE.telefonoE164 + '">' + esc(SITE.telefono) + '</a>.</p>')}
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Calendario del proceso ---------------------------------------------- -->
<section class="seccion seccion--hueso" id="calendario">
  <div class="envoltura">
    <div class="seccion__cabeza revelar">
      <p class="seccion__kicker">Etapas concertadas</p>
      <h2 class="seccion__titulo">Fechas básicas del proceso</h2>
      <p class="seccion__entrada">Fechas a tener en cuenta por las familias y los alumnos, según el calendario del proceso de admisión que publica el centro.</p>
    </div>

    <div class="revelar">
      ${L.tabla(
        ['Fechas', 'Actuaciones'],
        D.FECHAS_ADMISION.map(function (f) { return [esc(f.fecha), esc(f.actuacion)]; }),
        { etiqueta: 'Tabla de fechas del proceso de admisión' }
      )}
    </div>
  </div>
</section>

<!-- Aclaraciones -------------------------------------------------------- -->
<section class="seccion seccion--papel">
  <div class="envoltura">
    <div class="seccion__cabeza revelar">
      <h2 class="seccion__titulo">Aclaraciones para el envío de la solicitud de plaza</h2>
    </div>

    <div class="prosa revelar">
      <ul>
        <li>Toda la documentación que se adjunte debe ser perfectamente legible.</li>
        <li>Nuestro código de centro es: <strong>${esc(SITE.codigoCentro)}–San Martín</strong>.</li>
        <li>Escribir correctamente, según conste en sus documentos oficiales (DNI, NIE o Libro de familia), los nombres y apellidos de alumnos, padres o tutores.</li>
        <li>Solo se puede entregar una solicitud de plaza en un único centro sostenido con fondos públicos. Las solicitudes duplicadas, o las que contengan datos falsos, serán anuladas y serán resueltas por el Servicio de Apoyo a la Escolarización -SAE.</li>
        <li>Reseñar el número de identificación de alumno -NIA de aquellos para quienes se solicita plaza. Este número se solicita en el colegio de procedencia y lo deben tener todos los alumnos que estén escolarizados en cualquier escuela o colegio, tanto de titularidad pública como privada.</li>
        <li>La solicitud deber ser firmada POR AMBOS PADRES. En caso de imposibilidad de uno de ellos, se cumplimentará y firmará una declaración responsable (anexo adjunto al final de este documento).</li>
        <li>Es fundamental aportar la fotocopia del libro de familia (tanto las páginas de los padres como la del alumno para el que se solicita la plaza) para comprobar el vínculo de filiación.</li>
        <li>Se deben aportar los códigos de centro de todos los colegios que se soliciten como segundas y sucesivas opciones. Pueden buscar los códigos desde la web de la CAM.</li>
        <li>Los criterios para otorgar el punto complementario de «Otra circunstancia o de Libre disposición» los aprueba el Consejo Escolar del colegio cada año.</li>
      </ul>
    </div>
  </div>
</section>

<!-- Documentos ---------------------------------------------------------- -->
<section class="seccion seccion--cal" id="documentos">
  <div class="envoltura">
    <div class="seccion__cabeza revelar">
      <p class="seccion__kicker">Descargas</p>
      <h2 class="seccion__titulo">Documentos del proceso</h2>
    </div>

    <ul class="descargas revelar">
      ${D.DOCS_ADMISION.map(function (d) { return '<li>' + L.descarga(d.nombre, d.archivo, raiz) + '</li>'; }).join('')}
      <li><a class="descarga" href="${SITE.solicitudCam}" target="_blank" rel="noopener">
        ${icono('pdf', 'descarga__tipo')}
        <span class="descarga__nombre">Solicitud autocumplimentable (Comunidad de Madrid)</span>
        <span class="descarga__meta">PDF · externo</span>
        ${icono('externo', 'descarga__flecha')}
      </a></li>
    </ul>
  </div>
</section>

<!-- Qué ofrece el centro ------------------------------------------------ -->
<section class="seccion seccion--marino">
  <div class="envoltura">
    <div class="seccion__cabeza revelar">
      <p class="seccion__kicker">Antes de decidir</p>
      <h2 class="seccion__titulo">Lo que encontrará en el centro</h2>
    </div>

    ${L.bento([
      { tam: 'dos', html: '<h3 style="color: var(--marino)">Escolarización completa</h3><p style="color: var(--gris)">De 0 a 16 años sin cambiar de colegio, y Formación Profesional después de la ESO.</p><p><a href="etapas.html">Ver las etapas</a></p>' },
      { tam: 'dos', html: '<h3 style="color: var(--marino)">Extraescolares gratuitas</h3><p style="color: var(--gris)">Impartidas por el propio profesorado del centro, de 16:00 a 17:00.</p><p><a href="extraescolares.html">Ver actividades</a></p>' },
      { tam: 'dos', html: '<h3 style="color: var(--marino)">Comedor con menús adaptados</h3><p style="color: var(--gris)">Ausolan, con nutricionista y diez variantes por alergia o dieta.</p><p><a href="comedor.html">Ver el comedor</a></p>' },
    ])}
  </div>
</section>
`,
    cta: {
      titulo: '¿Quiere visitar el colegio antes de solicitar plaza?',
      texto: 'Puede pedir cita previa por teléfono o por correo. El plazo ordinario de presentación de solicitudes es del 11 al 25 de marzo.',
    },
  };

  return [admisiones];
};
