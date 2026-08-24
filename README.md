# Web del Colegio San Martín

Sitio web completo del Colegio San Martín (Moratalaz, Madrid), rehecho desde cero:
mismo colegio, misma información, misma marca; arquitectura, diseño y código
nuevos.

Son **29 páginas** de archivos HTML sueltos. No hay base de datos, ni gestor de
contenidos, ni programas que instalar en el servidor. Se copia la carpeta al
hosting y funciona.

---

## Cómo verlo en su ordenador

Hace falta tener [Node.js](https://nodejs.org) instalado (cualquier versión
reciente sirve). Se abre una terminal en esta carpeta y se escribe:

```bash
node _build/serve.js
```

Y ya se puede abrir **http://localhost:4321** en el navegador. Para parar, `Ctrl+C`.

También se puede abrir `index.html` haciendo doble clic, pero entonces algunos
enlaces entre páginas no funcionan bien porque el navegador no está sirviendo la
carpeta. Es mejor el comando de arriba.

---

## Cómo se cambia algo

**Los archivos `.html` no se tocan a mano.** Se generan solos, y cualquier cambio
que se haga en ellos se pierde la próxima vez que se genere el sitio. La razón es
que la cabecera, el menú y el pie son idénticos en las 29 páginas: si hubiera que
editarlos uno a uno, cambiar un teléfono serían 29 ediciones y 29 oportunidades de
equivocarse.

El contenido está en la carpeta `_build/`. Se edita ahí, se escribe:

```bash
node build.js
```

y las 29 páginas se vuelven a generar en dos segundos, todas coherentes entre sí.

Ese comando además **comprueba el sitio entero** y avisa si algo se ha roto:
enlaces internos que no llevan a ninguna parte, imágenes que faltan, páginas con
más de un título principal, títulos repetidos... Si encuentra un problema, se
detiene con un error en lugar de generar una web rota.

---

## Qué archivo tocar para cambiar cada cosa

| Si quiere cambiar… | Toque este archivo |
|---|---|
| Teléfono, correo, dirección, horarios, redes sociales | `_build/nav.js` (objeto `SITE`) |
| El menú: familias, enlaces, descripciones | `_build/nav.js` (objeto `NAV`) |
| El pie de página | `_build/nav.js` (objeto `FOOT`) |
| Precios de comedor, gabinetes o extraescolares | `_build/data.js` |
| Fechas de admisión, calendario, reuniones, menús | `_build/data.js` |
| Resultados académicos | `_build/data.js` |
| El texto de una página concreta | `_build/pages/` — un archivo por sección |
| Colores, tipografías, espaciados | `assets/css/site.css` (bloque `:root`, arriba del todo) |
| Comportamiento del menú, acordeones, galería | `assets/js/site.js` |
| Fotos | `assets/img/` |
| PDF y documentos | `assets/docs/` |

Después de cualquier cambio: `node build.js`.

---

## Cómo está organizada la carpeta

```
ColegioSanMartin/
├── index.html, colegio.html, …    Las 29 páginas. NO se editan a mano
├── 404.html                        Página de error
├── sitemap.xml, robots.txt         Para los buscadores
├── index.php/…                     Redirecciones de las direcciones antiguas
│
├── assets/
│   ├── css/site.css                TODO el diseño, en un solo archivo
│   ├── js/site.js                  TODO el comportamiento, en un solo archivo
│   ├── img/                        38 fotos, cada una en JPEG y en WebP
│   │   └── _original/              Copia intacta de las originales (ver abajo)
│   └── docs/                       32 PDF del colegio
│
├── _build/                         El generador. No se sube al hosting
│   ├── nav.js                      Datos del centro y estructura del menú
│   ├── data.js                     Precios, fechas, calendario, resultados
│   ├── layout.js                   Cabecera, menús, pie, cabeceras de página
│   ├── lib.js                      Piezas reutilizables e iconos
│   ├── pages/                      Una definición por sección del sitio
│   ├── redirecciones.js            Las 41 direcciones antiguas
│   └── serve.js                    Servidor para ver el sitio en local
│
├── build.js                        Genera el sitio y lo verifica
├── README.md                       Este documento
├── PENDIENTE.md                    Lo que falta antes de publicar ← IMPORTANTE
├── DESIGN.md                       El sistema de diseño
└── PRODUCT.md                      A quién sirve la web y con qué límites
```

### Qué subir al hosting y qué no

Se sube todo **menos** estas tres carpetas, que solo sirven para trabajar:

- **`_build/`** — el generador. La web ya está generada; el hosting no lo necesita.
- **`assets/img/_original/`** — las 61 fotos originales sin tocar, 8,8 MB. Es la
  copia de seguridad. Si se sube, no rompe nada, pero ocupa espacio inútil.
- **`_capturas/`** — capturas de pantalla de la verificación.

`build.js`, `README.md`, `PENDIENTE.md`, `DESIGN.md` y `PRODUCT.md` tampoco hacen
falta en el servidor, aunque son inofensivos.

---

## El menú: de una lista larga a seis familias

El menú del sitio antiguo era una lista plana y larguísima, con secciones
duplicadas («Cambridge» y «Centro Cambridge» eran dos entradas distintas para lo
mismo) y páginas que no aparecían en ningún sitio.

La información se ha reagrupado en **seis familias temáticas** más Contacto:

| Familia | Qué reúne |
|---|---|
| **El colegio** | Identidad, propuesta educativa, comunidad, convivencia, calidad |
| **Etapas** | De 0 a 16 años, más Formación Profesional |
| **Programas** | Inglés y Cambridge, matemáticas ABN, tecnología, plan digital, PROA+ |
| **Servicios** | Comedor, telepediatría, orientación, extraescolares |
| **Admisiones** | El proceso completo, con fechas y documentos |
| **Familias** | Calendario, material, reuniones, avisos |

En escritorio cada familia abre un panel con sus enlaces y una descripción de qué
hay en cada uno. En móvil es un cajón lateral con acordeones.

---

## Las direcciones antiguas no se pierden

Quien tenga guardado un enlace del sitio anterior, o llegue desde Google, acaba en
la página nueva que le corresponde. **Las 41 direcciones antiguas** están cubiertas.

Ahora mismo funcionan con una redirección por archivo, que funciona en cualquier
hosting sin configurar nada. Si se quiere hacerlo del modo óptimo para el
posicionamiento, esta tabla sirve para configurar redirecciones **301** en el
servidor:

| Dirección antigua | Página nueva |
|---|---|
| `/index.php/admisiones`<br>`/index.php/admisiones/informacion` | `admisiones.html` |
| `/index.php/nuestro-cole/noticias/calendario-escolar` | `calendario.html` |
| `/index.php/nuestro-cole/politica-de-calidad` | `calidad.html` |
| `/index.php/nuestro-cole/identidad`<br>`/index.php/nuestro-cole/propuesta`<br>`/index.php/nuestro-cole/metodologia`<br>`/index.php/nuestro-cole/comunidad-educativa` | `colegio.html` |
| `/index.php/nuestro-cole/servicios/comedor` | `comedor.html` |
| `/index.php/contacto`<br>`/index.php/contacto/contacto`<br>`/index.php/contacto/como-llegar`<br>`/index.php/contacto/escribenos` | `contacto.html` |
| `/index.php/nuestro-cole/convivencia` | `convivencia.html` |
| `/index.php/oferta-educativa/secundaria` | `eso.html` |
| `/index.php/oferta-educativa` | `etapas.html` |
| `/index.php/nuestro-cole/extraescolares` | `extraescolares.html` |
| `/index.php/informacion-a-las-familias` | `familias.html` |
| `/index.php/oferta-educativa/formacion-profesional` | `formacion-profesional.html` |
| `/index.php`<br>`/index.php/15-nuestro-colegio` | `index.html` |
| `/index.php/oferta-educativa/infantil/primer-ciclo-infantil` | `infantil-primer-ciclo.html` |
| `/index.php/oferta-educativa/infantil`<br>`/index.php/oferta-educativa/infantil/infantil-segunda-reunion` | `infantil.html` |
| `/index.php/nuestro-cole/english`<br>`/index.php/nuestro-cole/english/cambridge`<br>`/index.php/nuestro-cole/english/programa-beda`<br>`/index.php/nuestro-cole/english/centro-cambridge`<br>`/index.php/nuestro-cole/english/19-metodo-vaughan` | `ingles.html` |
| `/index.php/nuestro-cole/proyectos/matematicas-abn` | `matematicas-abn.html` |
| `/index.php/nuestro-cole/noticias/material` | `material.html` |
| `/index.php/nuestro-cole/noticias` | `noticias.html` |
| `/index.php/nuestro-cole/servicios/orientacion` | `orientacion.html` |
| `/index.php/nuestro-cole/proyectos/plan-digital` | `plan-digital.html` |
| `/index.php/oferta-educativa/primaria` | `primaria.html` |
| `/index.php/nuestro-cole/proyectos/proa` | `proa.html` |
| `/index.php/nuestro-cole/proyectos` | `programas.html` |
| `/index.php/nuestro-cole/noticias/reuniones` | `reuniones.html` |
| `/index.php/nuestro-cole/servicios` | `servicios.html` |
| `/index.php/nuestro-cole/proyectos/nuevas-tecnologias` | `tecnologia.html` |
| `/index.php/nuestro-cole/servicios/telepediatria` | `telepediatria.html` |
Los destinos salen de `_build/redirecciones.js`. Si se añade o quita una página,
se actualiza ahí y `node build.js` regenera las redirecciones solo.

---

## La página de error 404

El archivo `404.html` está hecho, pero **el hosting hay que decirle que lo use**.
Según dónde esté alojada la web:

**Apache** (el más común en hostings españoles) — crear o editar un archivo
`.htaccess` en la raíz y añadir:

```apache
ErrorDocument 404 /404.html
```

**Nginx** — en la configuración del sitio:

```nginx
error_page 404 /404.html;
```

**Netlify, Vercel o Cloudflare Pages** — no hay que hacer nada. Detectan el
archivo `404.html` en la raíz y lo usan automáticamente.

---

## Rendimiento: cuánto pesan las imágenes

Las 38 fotos que usa la web, comparadas con lo que servía el sitio antiguo:

| | Peso | Diferencia |
|---|---|---|
| **Antes**, tal como las servía el dominio | 5,38 MB | — |
| **Ahora**, en JPEG/PNG recomprimidos | 2,15 MB | **60,1 % menos** |
| **Ahora**, en WebP | 1,61 MB | **70,1 % menos** |

Cada foto está en los dos formatos. El navegador elige: los modernos descargan el
WebP, los antiguos el JPEG. Ninguno descarga los dos.

**Un visitante con un navegador actual descarga 1,61 MB en lugar de 5,38 MB.**

En disco la carpeta `assets/img/` ocupa 3,75 MB porque guarda ambos formatos —eso
es espacio en el servidor, no datos que nadie descargue.

Además:

- Ninguna imagen supera los 1600 px de ancho. Antes había fotos de más de 3000 px
  reducidas por CSS a un tercio de su tamaño: el visitante descargaba nueve veces
  los píxeles que iba a ver.
- Todas llevan `width` y `height`, así que la página no da saltos mientras cargan.
- Todas cargan en diferido (`loading="lazy"`) menos la primera de la portada, que
  va marcada como prioritaria.
- Las tipografías llevan `preconnect` y `display=swap`: el texto se lee desde el
  primer momento aunque la letra tarde.

---

## Decisiones técnicas y por qué

**Sitio estático, sin gestor de contenidos.** El sitio antiguo iba con Joomla, que
necesita PHP, base de datos y actualizaciones constantes. Un colegio no tiene por
qué mantener eso. Y hay una razón más concreta: **el Joomla del colegio está
comprometido** —lleva inyectados unos 150 enlaces ocultos de spam en todas sus
páginas—. Está explicado en `PENDIENTE.md`. Una web estática no tiene por dónde
ser atacada así.

**Un generador propio en lugar de escribir 29 archivos a mano.** Sin él, cambiar el
teléfono serían 29 ediciones. Con él, una.

**Cero librerías externas.** No hay jQuery, ni Bootstrap, ni Swiper, ni Font
Awesome. Los iconos son SVG escritos dentro del HTML. Cada librería es peso que el
visitante descarga, una dependencia que envejece y una vía de entrada más. La
única conexión externa es Google Fonts.

**Un solo CSS y un solo JS.** Dos archivos, dos descargas. Todo el diseño en
`site.css` y todo el comportamiento en `site.js`.

**La web funciona sin JavaScript.** Comprobado: todo el contenido se lee, los menús
son enlaces reales, los acordeones están desplegados y la galería lleva a las
imágenes. El JavaScript mejora la experiencia, no la sostiene.

**Los precios llevan su curso escrito.** Comedor y gabinetes son del curso
2024/2025 y extraescolares del 2025/2026, porque es lo que dicen los PDF del
colegio. Se ve el curso al lado de cada importe, para que nadie los confunda con
los de este año.

**Los textos legales van literales.** La política de protección de datos del
Consejo Escolar, la Política de Calidad, el Plan Incluyo, las condiciones de las
extraescolares y los objetivos de Primaria están reproducidos palabra por palabra.

---

## Antes de publicar

**Lea `PENDIENTE.md`.** Ahí está todo lo que hace falta, en concreto:

1. **Urgente y no es de esta web:** el sitio actual está comprometido con spam de
   enlaces ocultos. Hay que avisar al hosting y cambiar las contraseñas.
2. El formulario de contacto no envía todavía. Hay tres formas de activarlo.
3. Faltan datos que solo el colegio tiene: CIF, horario de secretaría, precios del
   primer ciclo de Infantil y algunas fechas de reuniones.
4. No hay aviso legal ni política de cookies, porque el sitio antiguo tampoco los
   tenía. Conviene que los prepare un asesor.
5. El logotipo se ha recuperado de dentro de una foto porque no hay ningún archivo
   original en resolución utilizable. Conviene pedirlo al colegio.

---

## Verificaciones hechas

Todo lo que sigue está medido sobre las 29 páginas ya generadas, en el navegador:

| Comprobación | Alcance | Resultado |
|---|---|---|
| Enlaces internos e imágenes | Las 29 páginas | Sin enlaces rotos ni imágenes que falten |
| Contraste de color (nivel AA) | 4 668 textos, a 375 y 1440 px | **0 fallos** |
| Objetivos táctiles de 44 px | 1 115 botones y enlaces, a 320 y 375 px | **0 fallos** |
| Desbordamiento horizontal | 2 929 medidas, de 320 a 1920 px | **0 desbordes** |
| Errores en la consola del navegador | Recorrido completo | Ninguno |
| Peticiones fallidas (404) | Recorrido completo | Ninguna |
| Teclado: menús, cajón, acordeones, visor | Uno a uno | Todo correcto |
| Funcionamiento sin JavaScript | Portada, calendario, galería, contacto | Todo legible y navegable |
| Detector de antipatrones de diseño | 29 páginas + CSS + JS | Limpio |

Sobre esto último: el detector señala en las 29 páginas el uso de **Open Sans**
como tipografía demasiado extendida. **Se ha mantenido a propósito**, porque es la
letra del sitio original y el encargo era rehacer la web sin reinventar la
identidad del colegio. Está explicado en `DESIGN.md`.

Las capturas de la verificación están en `_capturas/`.
