/* Sección «Contacto»: localización, cómo llegar y formulario.
   El formulario no tiene servidor y no finge lo contrario: compone un correo. */
'use strict';

const { SITE } = require('../nav');
const L = require('../lib');
const { icono, imagen, esc, boton } = L;

module.exports = function (ctx) {
  const mapaUrl = SITE.mapaUrl; // la misma URL que la direccion del pie (ver nav.js)

  const contacto = {
    url: 'contacto.html',
    familia: 'contacto.html',
    titulo: 'Contacto y localización · Colegio San Martín, Moratalaz',
    descripcion: 'Colegio San Martín: Avenida del Doctor García Tapia 124, 28030 Madrid. Teléfono 91 439 06 24. Metro Vinateros (línea 9) y autobuses EMT 30, 32, 71 y 113.',
    tono: 'marino',
    prioridad: '0.8',
    sinCta: true,
    migas: [{ texto: 'Inicio', url: 'index.html' }, { texto: 'Contacto' }],
    h1: 'Contacto y localización',
    entradilla: 'El colegio está en Moratalaz, junto a Metro Vinateros.',
    placa: [
      { etiqueta: 'Teléfono', valor: SITE.telefono, url: 'tel:' + SITE.telefonoE164 },
      { etiqueta: 'Metro', valor: 'Vinateros · L9' },
      { etiqueta: 'Autobuses EMT', valor: '30 · 32 · 71 · 113' },
    ],
    cuerpo: `
<section class="seccion seccion--papel" id="localizacion">
  <div class="envoltura">
    <div class="dos-columnas">
      <div class="revelar">
        <p class="seccion__kicker">Localización</p>
        <h2 class="seccion__titulo">Dónde estamos</h2>
        <address style="font-style: normal">
          ${L.datos([
            { k: 'Dirección', v: esc(SITE.direccion.calle) + '<br>' + esc(SITE.direccion.cp) + ' ' + esc(SITE.direccion.ciudad) },
            { k: 'Teléfono', v: '<a href="tel:' + SITE.telefonoE164 + '">' + esc(SITE.telefono) + '</a>' },
            { k: 'Correo', v: '<a class="correo" href="#" data-correo="' + SITE.correo.cuenta + '|' + SITE.correo.dominio + '" data-correo-texto>correo del colegio</a>' },
            { k: 'Correo educa.madrid', v: '<a class="correo" href="#" data-correo="' + SITE.correoEduca.cuenta + '|' + SITE.correoEduca.dominio + '" data-correo-texto>correo en educa.madrid.org</a>' },
            { k: 'Código de centro', v: '<strong>' + esc(SITE.codigoCentro) + '</strong>' },
            { k: 'Titularidad', v: esc(SITE.titularidad) },
          ])}
        </address>

        <p style="margin-top: var(--e-5)">
          ${boton('Ver en Google Maps', mapaUrl, { variante: 'fantasma' })}
        </p>
      </div>

      <div class="revelar" id="como-llegar">
        <p class="seccion__kicker">¿Cómo llegar?</p>
        <h2 class="seccion__titulo">Transporte cercano</h2>

        ${L.bento([
          {
            tam: 'ancho',
            html: '<h3>' + icono('metro') + ' Metro</h3><p>' + esc(SITE.transporte.metro) + '</p>',
          },
          {
            tam: 'ancho',
            html: '<h3>' + icono('bus') + ' Autobús</h3><p>' + esc(SITE.transporte.bus) + '</p>',
          },
        ])}

        <div style="margin-top: var(--e-5)">
          ${L.datos(SITE.horarios.map(function (h) { return { k: 'Horario ' + h.etapa, v: esc(h.texto) }; }))}
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Formulario ----------------------------------------------------------- -->
<section class="seccion seccion--cal" id="escribenos">
  <div class="envoltura">
    <div class="dos-columnas dos-columnas--texto-ancho">
      <div class="revelar">
        <p class="seccion__kicker">Escríbanos</p>
        <h2 class="seccion__titulo">Formulario de contacto</h2>

        <form class="formulario" data-formulario
              data-destino="${SITE.correo.cuenta}|${SITE.correo.dominio}"
              novalidate>
          <p class="ayuda" style="margin-top: 0; margin-bottom: var(--e-5)">
            Los campos con <span style="color: var(--sol-tinta)">*</span> son obligatorios.
          </p>

          <div class="campo-grupo">
            <label class="etiqueta" for="nombre">Nombre y apellidos <span class="req">*</span></label>
            <input class="campo" type="text" id="nombre" name="nombre" required
                   autocomplete="name" aria-describedby="err-nombre">
            <span class="error" id="err-nombre" hidden></span>
          </div>

          <div class="campo-grupo">
            <label class="etiqueta" for="correo">Correo electrónico <span class="req">*</span></label>
            <input class="campo" type="email" id="correo" name="correo" required
                   autocomplete="email" aria-describedby="err-correo">
            <span class="error" id="err-correo" hidden></span>
          </div>

          <div class="campo-grupo">
            <label class="etiqueta" for="telefono">Teléfono</label>
            <input class="campo" type="tel" id="telefono" name="telefono"
                   autocomplete="tel" aria-describedby="ayuda-telefono">
            <span class="ayuda" id="ayuda-telefono">Opcional, por si prefiere que le llamemos.</span>
          </div>

          <div class="campo-grupo">
            <label class="etiqueta" for="asunto">Asunto <span class="req">*</span></label>
            <input class="campo" type="text" id="asunto" name="asunto" required
                   aria-describedby="err-asunto">
            <span class="error" id="err-asunto" hidden></span>
          </div>

          <div class="campo-grupo">
            <label class="etiqueta" for="mensaje">Mensaje <span class="req">*</span></label>
            <textarea class="campo" id="mensaje" name="mensaje" required
                      aria-describedby="err-mensaje"></textarea>
            <span class="error" id="err-mensaje" hidden></span>
          </div>

          <div class="trampa" aria-hidden="true">
            <label for="apellido-medio">No rellene este campo</label>
            <input type="text" id="apellido-medio" name="apellido-medio" tabindex="-1" autocomplete="off">
          </div>

          <button class="boton boton--sol" type="submit">
            <span>Preparar el correo</span>${icono('correo')}
          </button>

          <div class="aviso aviso--calma" data-form-salida hidden style="margin-top: var(--e-5)">
            <p class="aviso__titulo">Se abrirá su programa de correo</p>
            <p>Hemos preparado un mensaje con lo que ha escrito. Reviselo y púlselo para enviar desde su propia cuenta. Si no se abre nada, puede escribirnos directamente o llamar al <a href="tel:${SITE.telefonoE164}">${esc(SITE.telefono)}</a>.</p>
          </div>
        </form>
      </div>

      <div class="revelar">
        ${L.aviso('Cómo funciona este formulario',
          '<p>Esta web es un sitio estático y no envía correos por sí misma. Al pulsar el botón se abre su programa de correo con el mensaje ya redactado, para que lo envíe desde su cuenta.</p>' +
          '<p>Si prefiere no usarlo, puede llamar al <a href="tel:' + SITE.telefonoE164 + '">' + esc(SITE.telefono) + '</a> o escribir a <a class="correo" href="#" data-correo="' + SITE.correo.cuenta + '|' + SITE.correo.dominio + '" data-correo-texto>correo del colegio</a>.</p>')}

        <div style="margin-top: var(--e-5)">
          ${L.aviso('Para pedir cita previa de admisión',
            '<p>El plazo ordinario de presentación de solicitudes es del 11 al 25 de marzo. Puede pedir cita por teléfono o por correo.</p>' +
            '<p style="margin-top: var(--e-4)">' + boton('Ver el proceso de admisión', 'admisiones.html', { variante: 'fantasma', icono: 'flecha' }) + '</p>')}
        </div>

        <div style="margin-top: var(--e-5)">
          <figure class="figura figura--recorte">
            ${imagen('assets/img/manos-balon.jpg', 'Manos de varios alumnos levantando un balón contra el cielo en el patio del colegio.')}
          </figure>
        </div>
      </div>
    </div>
  </div>
</section>
`,
  };

  /* ------------------------------------------------------------------- 404 */
  const error404 = {
    url: '404.html',
    titulo: 'Página no encontrada · Colegio San Martín',
    descripcion: 'La página solicitada no existe en la web del Colegio San Martín.',
    tono: 'marino',
    sinSitemap: true,
    sinCta: true,
    migas: null,
    h1: 'Esta página no existe',
    entradilla: 'Puede que el enlace esté anticuado o que la dirección se haya escrito mal.',
    cuerpo: `
<section class="seccion seccion--papel">
  <div class="envoltura">
    <div class="error404">
      <p class="error404__codigo">404</p>
      <p style="max-width: 46ch; margin-inline: auto; color: var(--gris)">
        Si venía de un enlace antiguo del colegio, es posible que ese contenido esté ahora en otra página.
        Estos son los sitios a los que va casi todo el mundo:
      </p>
      <div class="error404__enlaces">
        ${boton('Inicio', 'index.html', { variante: 'fantasma' })}
        ${boton('Etapas', 'etapas.html', { variante: 'fantasma' })}
        ${boton('Admisiones', 'admisiones.html', { variante: 'sol' })}
        ${boton('Calendario escolar', 'calendario.html', { variante: 'fantasma' })}
        ${boton('Menús del comedor', 'comedor.html#menus', { variante: 'fantasma' })}
        ${boton('Contacto', 'contacto.html', { variante: 'fantasma' })}
      </div>
    </div>
  </div>
</section>
`,
  };

  return [contacto, error404];
};
