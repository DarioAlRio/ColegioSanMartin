# Pendiente antes de publicar

Todo lo que aparece en la web sale del dominio `colegiosanmartin.com` o de los PDF
que ese dominio publica. Lo que no estaba, no se ha inventado: está aquí.

Este documento tiene cuatro partes:

1. **Datos que faltan** — huecos que solo el colegio puede rellenar.
2. **El formulario** — por qué no envía y cómo activarlo.
3. **Problemas heredados del sitio antiguo** — incluido uno de seguridad.
4. **Decisiones tomadas que conviene confirmar.**

---

## 1. Datos que faltan

Ninguno de estos datos aparecía en el dominio ni en sus PDF. Hasta que el colegio
los facilite, la web no los menciona.

| Dato | Dónde haría falta | Por qué falta |
|---|---|---|
| **CIF** | Aviso legal, pie de página | No aparece en ninguna página ni PDF del dominio. Sí consta la titularidad: **Martín Macías, S.A.** (de `POLITICA_DE_CALIDAD.pdf`) |
| **Horario de secretaría** | `contacto.html` | El sitio antiguo nunca lo publicó. Ahora la página dice cómo contactar (teléfono y correo) sin inventar un horario |
| **Aviso legal y política de cookies propios** | Páginas legales | El sitio antiguo no tenía ninguna de las dos. Ver el punto 4 |
| **Precios del primer ciclo de Infantil (0-3 años)** | `infantil-primer-ciclo.html` | El enlace del sitio antiguo (`/images/precios/EI.pdf`) devuelve **404**. La página dice que es etapa privada con posibilidad de beca, sin cifras |
| **Fechas de las reuniones de Primaria, ESO y FP** | `reuniones.html` | Solo estaba publicada la del primer ciclo de Infantil. Las demás aparecen como «Pendiente de publicar» en lugar de con una fecha inventada |
| **Número de teléfono móvil o WhatsApp** | Barra fija del móvil | El centro solo publica el fijo **91 439 06 24**. Por eso la barra inferior del móvil ofrece *Llamar · Escribir · Pedir plaza*, sin botón de WhatsApp |
| **Baremo de admisión legible** | `admisiones.html` | `BAREMO.pdf` y `vacantes.pdf` son escaneados: son imágenes, no llevan texto extraíble. Se enlazan tal cual, pero su contenido no se ha podido volcar a la web |

> **Qué hacer:** enviar estos datos y se incorporan. Los archivos a tocar están
> indicados en el `README.md`, apartado «Qué archivo tocar para cambiar cada cosa».

---

## 2. El formulario de contacto no envía

**Estado actual:** el formulario de `contacto.html` está maquetado, valida en el
navegador y tiene trampa antispam, pero **no envía nada por sí solo**. Al pulsar
«Enviar» compone un mensaje de correo y abre el programa de correo del visitante,
y la propia página lo explica con un aviso visible. **En ningún momento finge
haberse enviado.**

**Por qué:** el sitio antiguo funcionaba con Joomla, un gestor de contenidos que
corre sobre PHP y una base de datos en el servidor. Su formulario enviaba los
correos con código de servidor. Esta web es estática —archivos que el hosting
sirve tal cual— y no tiene servidor propio que pueda enviar correo.

**Tres formas de activarlo**, de menos a más cambio:

| Opción | Qué hay que hacer | Coste |
|---|---|---|
| **A. PHP del propio hosting** | Si el hosting sigue admitiendo PHP, se añade un `enviar.php` de veinte líneas y se apunta el formulario ahí con `action="enviar.php"` y `method="post"` | Ninguno, si el hosting ya lo incluye |
| **B. Formspree** | Crear una cuenta, y cambiar el `action` del formulario por la URL que dan. Sin tocar nada más | Gratis hasta 50 mensajes/mes |
| **C. Netlify Forms** | Solo si la web se aloja en Netlify: se añade `netlify` como atributo del `<form>` y funciona | Gratis hasta 100 mensajes/mes |

Se toca en [`_build/pages/contacto.js`](_build/pages/contacto.js) y se reconstruye
con `node build.js`.

**Mientras tanto** la página ofrece el teléfono y el correo de forma bien visible,
que es como funciona hoy el colegio.

---

## 3. Problemas heredados del sitio antiguo

### 3.1 El sitio actual está comprometido — atender cuanto antes

Al recorrer `colegiosanmartin.com` apareció, **al final de todas y cada una de sus
páginas**, un bloque oculto con este aspecto:

```html
<div class="mangsud" style="position:absolute; left:-9999px">
  ... 238 enlaces a webs de casinos, apuestas y loterías ...
</div>
```

Está colocado fuera de la pantalla para que no lo vea ningún visitante, pero **sí
lo ven los buscadores**.

Las cifras exactas, contadas sobre el rastreo del dominio:

| | |
|---|---|
| Páginas afectadas | **41 de 41** |
| Enlaces ocultos por página | **238** |
| Total en el sitio | **9.758** |
| Dominios distintos | **231** |

Es un ataque de *spam SEO*: alguien ha entrado en el gestor del sitio y usa el
prestigio del dominio de un colegio para posicionar webs de apuestas. Los textos
de los enlaces son jerga indonesia de apuestas («slot gacor», «situs slot»,
«slot deposit pulsa»), aunque la red incluye dominios .es y .fr.

Además hay enlaces inyectados a `worldofeducationmag.com/about-gems/` en varias
páginas de contenido.

**Esto no se arregla publicando la web nueva.** La web nueva no lleva ese código,
pero el agujero por el que entraron sigue abierto mientras el Joomla antiguo esté
en el servidor. Recomendación:

1. Avisar a quien administre el hosting.
2. Cambiar todas las contraseñas: panel de hosting, FTP y administración de Joomla.
3. Revisar los archivos del servidor por si quedan puertas traseras.
4. **Retirar por completo la instalación de Joomla** al publicar la web nueva, que
   ya no la necesita. Es la forma más segura de cerrar el problema.
5. Una vez limpio, pedir revisión en Google Search Console.

### 3.2 Enlaces rotos del sitio antiguo

Estos enlaces estaban rotos **en el sitio original**. En la web nueva no existen;
se listan por si el colegio quiere recuperar los documentos.

| Enlace del sitio antiguo | Problema |
|---|---|
| `/images/precios/EI.pdf` | 404 — eran los precios del primer ciclo de Infantil |
| `/images\BAREMACION\BAREMO.pdf` | Barras invertidas de Windows en una URL: no funciona en un servidor Linux |
| `/images\comedor\*.pdf` | Mismo problema en varios menús del comedor |
| `/%20http://themactrack.com/` | Enlace mal formado, con un espacio delante de la dirección |
| `file:///images/PROYECTO/...` | Usa `file://`, que apunta al disco del visitante y nunca puede funcionar |

En la web nueva todos los documentos se sirven desde `assets/docs/` con nombres
correctos, y **`node build.js` falla si algún enlace o imagen no existe**, así que
esto no puede repetirse sin que salte el aviso.

### 3.3 Imágenes del sitio antiguo que no se han usado

- `bebe.jpg` y `comedor_icono.jpg` son **imágenes de archivo comerciales y dibujos
  genéricos**, no fotos del colegio. Se han descartado a propósito: en la web nueva
  solo hay fotografías reales del centro.
- **No existe ningún archivo del logotipo actual en resolución utilizable.** El
  servidor solo entrega `logopeque4.png`, de 90×90 píxeles, que es el escudo
  histórico. El logotipo moderno se ha recuperado de dentro de una fotografía
  (las fichas del programa PROA+) y ampliado. **Conviene pedir al colegio el
  archivo original** (a ser posible en SVG, PDF o AI) y sustituir
  `assets/img/logotipo.png`. Es el único elemento gráfico del sitio que no procede
  de un original limpio.

---

## 4. Decisiones tomadas que conviene confirmar

- **Textos legales.** El sitio antiguo **no tenía** aviso legal, política de
  privacidad ni de cookies. No se ha redactado ninguno: escribir textos legales por
  cuenta propia sería inventar compromisos jurídicos en nombre del colegio. Lo que
  sí existía y se reproduce **palabra por palabra** es la política de protección de
  datos del Consejo Escolar y la Política de Calidad. **Antes de publicar conviene
  que un asesor prepare el aviso legal y la política de cookies**, sobre todo si
  más adelante se añade analítica.

- **Cookies y terceros.** La web nueva **no instala ninguna cookie, ni analítica,
  ni píxel de seguimiento, ni chat**. Por eso no lleva aviso de cookies: no hay nada
  que consentir. El sitio antiguo tampoco tenía Google Analytics ni Cookiebot. Si
  se quiere añadir analítica, habrá que poner también el aviso correspondiente.

- **La única conexión externa** es a Google Fonts, para las dos tipografías. Si se
  prefiere no depender de Google, las fuentes pueden descargarse y servirse desde
  `assets/`; son unos diez minutos de cambio.

- **Precios y tarifas con su curso a la vista.** Todos los importes llevan escrito
  el curso al que corresponden (comedor y gabinetes: 2024/2025; extraescolares:
  2025/2026), porque es el curso que figura en los PDF del colegio. **Habrá que
  actualizarlos** cuando el centro publique los del curso siguiente: se cambian en
  [`_build/data.js`](_build/data.js).

- **Idiomas.** El sitio original estaba solo en español. La web nueva también. No
  hay ninguna versión en otro idioma que replicar.

- **El curso del calendario.** El calendario publicado es el de **2026-2027**, que
  es el que tenía colgado el colegio.
