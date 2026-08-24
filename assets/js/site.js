/* ==========================================================================
   Colegio San Martín — JavaScript único.
   Sin módulos ES, sin librerías. IIFE en modo estricto.
   El sitio es legible y navegable con JavaScript desactivado.
   ========================================================================== */

(function () {
  'use strict';

  var doc = document;
  var raiz = doc.documentElement;

  function $(sel, ctx) { return (ctx || doc).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || doc).querySelectorAll(sel)); }
  function on(el, ev, fn, op) { if (el) el.addEventListener(ev, fn, op); }

  var reduce = false;
  try {
    reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch (e) { reduce = false; }

  /* Elementos que pueden recibir el foco, para atraparlo en diálogos. */
  var FOCO = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

  function focoDentro(caja) {
    return $$(FOCO, caja).filter(function (el) {
      return el.offsetWidth > 0 || el.offsetHeight > 0 || el === doc.activeElement;
    });
  }

  function atraparFoco(caja, ev) {
    var lista = focoDentro(caja);
    if (!lista.length) return;
    var primero = lista[0];
    var ultimo = lista[lista.length - 1];
    if (ev.shiftKey && doc.activeElement === primero) {
      ev.preventDefault(); ultimo.focus();
    } else if (!ev.shiftKey && doc.activeElement === ultimo) {
      ev.preventDefault(); primero.focus();
    }
  }

  /* ------------------------------------------------------------------------
     1. CORREOS — se ensamblan aquí para frenar a los robots recolectores.
        El marcado lleva data-correo="cuenta|dominio"; sin JS el enlace no
        promete un envío que no puede cumplir: se sustituye por el texto.
     ------------------------------------------------------------------------ */
  function montarCorreos() {
    $$('[data-correo]').forEach(function (el) {
      var partes = (el.getAttribute('data-correo') || '').split('|');
      if (partes.length !== 2) return;
      var dir = partes[0] + String.fromCharCode(64) + partes[1];
      el.setAttribute('href', 'mailto:' + dir);
      if (el.hasAttribute('data-correo-texto') || !el.textContent.trim()) {
        el.textContent = dir;
      }
      el.removeAttribute('data-correo');
    });
  }

  /* ------------------------------------------------------------------------
     2. CABECERA FIJA — sombra al separarse del borde superior.
     ------------------------------------------------------------------------ */
  function cabeceraFija() {
    var cab = $('[data-cabecera]');
    if (!cab) return;
    var ultimo = false;
    function mirar() {
      var fijada = window.pageYOffset > 8;
      if (fijada !== ultimo) {
        cab.classList.toggle('esta-fijada', fijada);
        ultimo = fijada;
      }
    }
    on(window, 'scroll', mirar, { passive: true });
    mirar();
  }

  /* ------------------------------------------------------------------------
     3. MEGA-MENÚ de escritorio.
        Se abre con ratón y con teclado; se cierra con Escape y al salir.
     ------------------------------------------------------------------------ */
  function megaMenu() {
    var items = $$('.nav__item--tiene-menu');
    if (!items.length) return;
    var abierto = null;
    var temporizador = null;

    function cerrar(item) {
      if (!item) return;
      var b = $('.nav__enlace', item);
      var p = $('.mega', item);
      if (b) b.setAttribute('aria-expanded', 'false');
      if (p) p.hidden = true;
      if (abierto === item) abierto = null;
    }

    function abrir(item) {
      if (abierto && abierto !== item) cerrar(abierto);
      var b = $('.nav__enlace', item);
      var p = $('.mega', item);
      if (b) b.setAttribute('aria-expanded', 'true');
      if (p) p.hidden = false;
      abierto = item;
    }

    function cerrarTodo() { items.forEach(cerrar); }

    items.forEach(function (item) {
      var boton = $('.nav__enlace', item);

      on(item, 'mouseenter', function () {
        window.clearTimeout(temporizador);
        abrir(item);
      });
      on(item, 'mouseleave', function () {
        window.clearTimeout(temporizador);
        temporizador = window.setTimeout(function () { cerrar(item); }, 140);
      });

      // El enlace sigue navegando al hacer clic; el teclado abre el panel.
      on(boton, 'keydown', function (ev) {
        if (ev.key === 'ArrowDown' || ev.key === 'Down') {
          ev.preventDefault();
          abrir(item);
          var primero = $('.mega__lista a', item);
          if (primero) primero.focus();
        }
      });

      on(item, 'focusin', function () { abrir(item); });
      on(item, 'focusout', function () {
        window.setTimeout(function () {
          if (!item.contains(doc.activeElement)) cerrar(item);
        }, 0);
      });
    });

    on(doc, 'keydown', function (ev) {
      if (ev.key === 'Escape' && abierto) {
        var b = $('.nav__enlace', abierto);
        cerrarTodo();
        if (b) b.focus();
      }
    });

    on(doc, 'click', function (ev) {
      if (abierto && !abierto.contains(ev.target)) cerrarTodo();
    });
  }

  /* ------------------------------------------------------------------------
     4. CAJÓN MÓVIL — foco atrapado, cierre con Escape.
     ------------------------------------------------------------------------ */
  function cajon() {
    var caja = $('#cajon');
    var abridor = $('[data-abrir-cajon]');
    if (!caja || !abridor) return;
    var panel = $('.cajon__panel', caja);
    var previo = null;

    function abrir() {
      previo = doc.activeElement;
      caja.hidden = false;
      doc.body.classList.add('cajon-abierto');
      abridor.setAttribute('aria-expanded', 'true');
      var primero = $('.cajon__cerrar', caja);
      if (primero) primero.focus();
    }

    function cerrar() {
      caja.hidden = true;
      doc.body.classList.remove('cajon-abierto');
      abridor.setAttribute('aria-expanded', 'false');
      // Safari no enfoca los <button> al pulsarlos con el ratón, así que 'previo'
      // puede ser el <body>. Sin esta salvaguarda el foco se quedaría dentro de
      // un panel ya oculto y quien navega con teclado se perdería.
      var destino = (previo && previo.focus && previo !== doc.body) ? previo : abridor;
      destino.focus();
    }

    on(abridor, 'click', abrir);
    $$('[data-cerrar-cajon]').forEach(function (el) { on(el, 'click', cerrar); });

    on(doc, 'keydown', function (ev) {
      if (caja.hidden) return;
      if (ev.key === 'Escape') { ev.preventDefault(); cerrar(); }
      else if (ev.key === 'Tab') { atraparFoco(panel, ev); }
    });

    // Acordeones del cajón.
    $$('.cajon__boton', caja).forEach(function (boton) {
      on(boton, 'click', function () {
        var panelId = boton.getAttribute('aria-controls');
        var sub = doc.getElementById(panelId);
        var abiertoYa = boton.getAttribute('aria-expanded') === 'true';
        boton.setAttribute('aria-expanded', abiertoYa ? 'false' : 'true');
        if (sub) sub.hidden = abiertoYa;
      });
    });

    // Si se vuelve a escritorio con el cajón abierto, se cierra.
    if (window.matchMedia) {
      var mq = window.matchMedia('(min-width: 1081px)');
      var alCambiar = function (e) { if (e.matches && !caja.hidden) cerrar(); };
      if (mq.addEventListener) mq.addEventListener('change', alCambiar);
      else if (mq.addListener) mq.addListener(alCambiar);
    }
  }

  /* ------------------------------------------------------------------------
     5. ACORDEONES de contenido.
        Empiezan abiertos en el HTML; al cargar JS se pliegan, salvo el primero.
     ------------------------------------------------------------------------ */
  function acordeones() {
    $$('[data-acordeon]').forEach(function (caja) {
      var botones = $$('.acordeon__boton', caja);
      botones.forEach(function (boton, i) {
        var panel = doc.getElementById(boton.getAttribute('aria-controls'));
        var abierto = i === 0;
        boton.setAttribute('aria-expanded', abierto ? 'true' : 'false');
        if (panel) panel.hidden = !abierto;

        on(boton, 'click', function () {
          var estaAbierto = boton.getAttribute('aria-expanded') === 'true';
          boton.setAttribute('aria-expanded', estaAbierto ? 'false' : 'true');
          if (panel) panel.hidden = estaAbierto;
        });
      });
    });
  }

  /* ------------------------------------------------------------------------
     6. GALERÍA CON VISOR — foco atrapado, Escape y flechas.
        Sin JS cada miniatura es un enlace directo a la imagen.
     ------------------------------------------------------------------------ */
  function galeria() {
    var listas = $$('[data-galeria]');
    if (!listas.length) return;

    var enlaces = [];
    listas.forEach(function (l) { enlaces = enlaces.concat($$('.galeria__enlace', l)); });
    if (!enlaces.length) return;

    var visor = doc.createElement('div');
    visor.className = 'visor';
    visor.hidden = true;
    visor.innerHTML =
      '<div class="visor__velo" data-visor-cerrar></div>' +
      '<div class="visor__marco" role="dialog" aria-modal="true" aria-label="Visor de imágenes">' +
      '<button type="button" class="visor__cerrar" data-visor-cerrar>' +
      '<svg class="icono" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" aria-hidden="true"><path d="m6.5 6.5 11 11M17.5 6.5l-11 11"/></svg>' +
      '<span class="oculto-visual">Cerrar el visor</span></button>' +
      '<button type="button" class="visor__nav visor__nav--ant" data-visor-ant>' +
      '<svg class="icono" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h13"/><path d="m12.5 6.2 5.8 5.8-5.8 5.8"/></svg>' +
      '<span class="oculto-visual">Imagen anterior</span></button>' +
      '<button type="button" class="visor__nav visor__nav--sig" data-visor-sig>' +
      '<svg class="icono" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h13"/><path d="m12.5 6.2 5.8 5.8-5.8 5.8"/></svg>' +
      '<span class="oculto-visual">Imagen siguiente</span></button>' +
      '<p class="visor__pie"></p>' +
      '</div>';

    // La imagen se crea por DOM y no como plantilla con el src vacío: así no
    // llega a existir en el documento una imagen rota, ni siquiera un instante.
    var img = doc.createElement('img');
    img.className = 'visor__img';
    $('.visor__marco', visor).insertBefore(img, $('.visor__pie', visor));
    doc.body.appendChild(visor);
    var pie = $('.visor__pie', visor);
    var marco = $('.visor__marco', visor);
    var actual = 0;
    var previo = null;

    function pintar(i) {
      actual = (i + enlaces.length) % enlaces.length;
      var a = enlaces[actual];
      var texto = a.getAttribute('data-pie') || '';
      img.setAttribute('src', a.getAttribute('href'));
      img.setAttribute('alt', texto);
      pie.textContent = texto + ' (' + (actual + 1) + ' de ' + enlaces.length + ')';
    }

    function abrir(i) {
      previo = doc.activeElement;
      pintar(i);
      visor.hidden = false;
      doc.body.classList.add('cajon-abierto');
      var cerrarBtn = $('.visor__cerrar', visor);
      if (cerrarBtn) cerrarBtn.focus();
    }

    function cerrar() {
      visor.hidden = true;
      doc.body.classList.remove('cajon-abierto');
      // Se devuelve el foco a la foto que se estaba viendo, no a la de partida:
      // si se ha navegado con las flechas, el recorrido continúa donde toca.
      var destino = enlaces[actual] || previo;
      if (!destino || !destino.focus || destino === doc.body) destino = previo;
      if (destino && destino.focus) destino.focus();
    }

    enlaces.forEach(function (a, i) {
      on(a, 'click', function (ev) { ev.preventDefault(); abrir(i); });
    });

    $$('[data-visor-cerrar]', visor).forEach(function (el) { on(el, 'click', cerrar); });
    on($('[data-visor-ant]', visor), 'click', function () { pintar(actual - 1); });
    on($('[data-visor-sig]', visor), 'click', function () { pintar(actual + 1); });

    on(doc, 'keydown', function (ev) {
      if (visor.hidden) return;
      if (ev.key === 'Escape') { ev.preventDefault(); cerrar(); }
      else if (ev.key === 'ArrowLeft') { pintar(actual - 1); }
      else if (ev.key === 'ArrowRight') { pintar(actual + 1); }
      else if (ev.key === 'Tab') { atraparFoco(marco, ev); }
    });
  }

  /* ------------------------------------------------------------------------
     7. FORMULARIO — validación en cliente y salida por correo.
        No hay servidor: el formulario nunca finge que ha enviado nada.
        Compone un mailto: con lo escrito y avisa de lo que ocurre.
     ------------------------------------------------------------------------ */
  function formulario() {
    var form = $('[data-formulario]');
    if (!form) return;

    var salida = $('[data-form-salida]', form);
    var partes = (form.getAttribute('data-destino') || '').split('|');

    function marcar(campo, mensaje) {
      var err = doc.getElementById(campo.getAttribute('aria-describedby'));
      campo.setAttribute('aria-invalid', 'true');
      if (err) { err.textContent = mensaje; err.hidden = false; }
    }

    function limpiar(campo) {
      var err = doc.getElementById(campo.getAttribute('aria-describedby'));
      campo.removeAttribute('aria-invalid');
      if (err) { err.hidden = true; err.textContent = ''; }
    }

    $$('.campo', form).forEach(function (c) {
      on(c, 'input', function () { if (c.getAttribute('aria-invalid')) limpiar(c); });
    });

    on(form, 'submit', function (ev) {
      ev.preventDefault();

      // Trampa antispam: si viene rellena, no se hace nada.
      var trampa = $('[name="apellido-medio"]', form);
      if (trampa && trampa.value) return;

      var campos = $$('.campo[required]', form);
      var fallo = null;

      campos.forEach(function (c) {
        limpiar(c);
        var v = (c.value || '').trim();
        if (!v) {
          marcar(c, 'Falta rellenar este campo.');
          if (!fallo) fallo = c;
        } else if (c.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) {
          marcar(c, 'Ese correo no parece válido. Revise que tenga arroba y dominio.');
          if (!fallo) fallo = c;
        }
      });

      if (fallo) { fallo.focus(); return; }

      var nombre = (($('#nombre', form) || {}).value || '').trim();
      var correo = (($('#correo', form) || {}).value || '').trim();
      var telef = (($('#telefono', form) || {}).value || '').trim();
      var asunto = (($('#asunto', form) || {}).value || '').trim();
      var mensaje = (($('#mensaje', form) || {}).value || '').trim();

      var cuerpo =
        'Nombre: ' + nombre + '\n' +
        'Correo: ' + correo + '\n' +
        (telef ? 'Teléfono: ' + telef + '\n' : '') +
        '\n' + mensaje + '\n';

      var destino = partes.length === 2 ? partes[0] + String.fromCharCode(64) + partes[1] : '';
      var url = 'mailto:' + destino +
        '?subject=' + encodeURIComponent(asunto || 'Consulta desde la web') +
        '&body=' + encodeURIComponent(cuerpo);

      if (salida) {
        salida.hidden = false;
        salida.setAttribute('tabindex', '-1');
        salida.focus();
      }
      window.location.href = url;
    });
  }

  /* ------------------------------------------------------------------------
     8. ENTRADA DE SECCIONES — un solo momento, con degradación elegante.
     ------------------------------------------------------------------------ */
  function revelar() {
    var piezas = $$('.revelar');
    if (!piezas.length) return;

    if (reduce || !('IntersectionObserver' in window)) {
      piezas.forEach(function (p) { p.classList.add('es-visible'); });
      return;
    }

    var obs = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) {
        if (!e.isIntersecting) return;
        var grupo = e.target.parentNode ? $$('.revelar', e.target.parentNode) : [];
        var i = grupo.indexOf(e.target);
        e.target.style.setProperty('--retardo', (i > 0 ? Math.min(i, 5) * 70 : 0) + 'ms');
        e.target.classList.add('es-visible');
        obs.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });

    piezas.forEach(function (p) { obs.observe(p); });
  }

  /* ------------------------------------------------------------------------
     Arranque
     ------------------------------------------------------------------------ */
  function iniciar() {
    montarCorreos();
    cabeceraFija();
    megaMenu();
    cajon();
    acordeones();
    galeria();
    formulario();
    revelar();
  }

  if (doc.readyState === 'loading') {
    on(doc, 'DOMContentLoaded', iniciar);
  } else {
    iniciar();
  }
})();
