# Sistema de diseño · Colegio San Martín

Este documento describe **lo que está construido**, no lo que se pretendía
construir. Cada dato de contraste que aparece aquí se ha medido en el navegador
sobre las páginas ya generadas, no calculado a mano.

La regla que gobierna todo el sistema: **los colores son los del colegio.** No se
ha elegido ninguno por gusto. Cada uno viene del logotipo, del escudo o del CSS
del sitio anterior, y así queda anotado en el propio archivo
[`assets/css/site.css`](assets/css/site.css).

---

## 1. Paleta y de dónde sale cada color

### Del logotipo actual

Muestreados píxel a píxel sobre `assets/img/_original/logotipo-colegio-san-martin.png`.

| Token | Valor | De dónde sale | Contraste sobre blanco |
|---|---|---|---|
| `--tinta` | `#2f3340` | Rótulo «COLEGIO» del logotipo | **12,60:1** |
| `--marino` | `#354d7d` | Rótulo «SAN MARTÍN» y las montañas | **8,37:1** |
| `--acero` | `#5a7eb2` | El cielo del logotipo | 4,15:1 — *solo texto grande* |
| `--sol` | `#f9a153` | El sol naciente | 2,05:1 — *nunca para texto* |
| `--arena` | `#ffbf7f` | La playa | 1,68:1 — *nunca para texto* |

### Del CSS del sitio anterior

Recuperados de `preset2.css` (plantilla Helix3 del Joomla antiguo), donde el
índigo aparecía 24 veces como color de enlaces y botones.

| Token | Valor | De dónde sale | Contraste sobre blanco |
|---|---|---|---|
| `--indigo` | `#3d449a` | Color de enlace y botón del sitio antiguo | **8,43:1** |
| `--indigo-hover` | `#2f3475` | Su color de hover | **11,10:1** |

### Del escudo histórico

De `logopeque4.png`, el escudo de 90×90 que el servidor todavía sirve. Se usan
solo para distinguir etapas entre sí.

| Token | Valor | De dónde sale | Contraste sobre blanco |
|---|---|---|---|
| `--verde` | `#046d58` | El anillo del escudo | **6,30:1** |
| `--malva` | `#854f8b` | El campo del escudo | **6,02:1** |

### Variantes «tinta»: la regla que evita retocar la marca

Dos colores de marca no llegan a 4,5:1 sobre fondo claro. **No se han cambiado.**
Siguen siendo exactamente los del logotipo cuando pintan un fondo, un botón o un
filete. Lo que se ha creado es una variante oscurecida que se usa **solo cuando
ese color tiene que ser texto**:

| Token | Valor | Sustituye a | Contraste sobre blanco |
|---|---|---|---|
| `--sol-tinta` | `#9a5000` | `--sol` cuando es texto | **5,96:1** |
| `--acero-tinta` | `#3f5f8e` | `--acero` cuando es texto | **6,49:1** |

Así, el botón principal sigue siendo naranja `--sol` de verdad, y su rótulo va en
`--tinta`: **6,15:1**. El naranja se ve; el texto se lee.

### Neutros

| Token | Valor | Papel |
|---|---|---|
| `--cal` | `#f2f4f7` | Fondo general |
| `--papel` | `#ffffff` | Tarjetas y superficies elevadas |
| `--hueso` | `#e6eaf0` | Fondo alterno de sección |
| `--linea` | `#d3dae4` | Bordes |
| `--gris` | `#5b6273` | Texto secundario — **6,10:1** sobre papel |
| `--gris-claro` | `#8b93a5` | Solo elementos no textuales |
| `--sobre-oscuro` | `#ffffff` | Texto sobre campo oscuro |
| `--sobre-oscuro-suave` | `#cfd9e9` | Texto secundario sobre marino — **5,97:1** |

### Texto sobre fondo de color

`--sobre-oscuro-suave` funciona sobre marino (5,97:1) pero **no** sobre verde
(4,43:1), malva (4,23:1) ni acero (4,51:1, en el filo). Sobre esos tres el texto
secundario pasa a blanco puro: verde **6,38:1**, malva **6,00:1**, acero
**6,29:1**. Está en la sección 26 del CSS, con el ratio anotado en cada regla.

Igual pasa con los enlaces sobre `--arena`: `--sol-tinta` da 3,69:1, así que ahí
los enlaces van en `--marino`, que da **5,22:1**.

---

## 2. Tipografía

Dos familias, ambas de Google Fonts con `display=swap` y `preconnect`.

| Uso | Familia | Por qué |
|---|---|---|
| Titulares y rótulos | **Poppins** | Geométrica y redonda, con la misma alegría que el sol naciente del logotipo. Da carácter propio sin salirse del registro de un colegio |
| Texto corrido | **Open Sans** | **Es la tipografía del sitio original.** Se mantiene por continuidad de marca |

Sobre Open Sans: el detector de antipatrones la señala por ser una tipografía muy
extendida. **Se ha mantenido a propósito.** Es la letra con la que las familias del
colegio llevan años leyendo su web, y el encargo era rehacer el sitio sin
reinventar la identidad. El carácter propio se busca en Poppins para los
titulares, no cambiando la letra de lectura.

Las dos llevan pila de respaldo del sistema (`Segoe UI`, `Helvetica Neue`, Arial),
así que la página se lee bien aunque Google Fonts no cargue.

### Escala

Nueve tamaños, todos con `clamp()` entre 360 px y 1440 px, sin saltos bruscos:

```
--t-xs    0,750 → 0,813 rem     rótulos, metadatos
--t-s     0,875 → 0,938 rem     texto de apoyo, tablas
--t-base  1,000 → 1,063 rem     cuerpo
--t-m     1,125 → 1,250 rem     entradillas
--t-l     1,313 → 1,563 rem     h3
--t-xl    1,563 → 2,063 rem     h2 de prosa
--t-2xl   1,938 → 2,813 rem     h2 de sección
--t-3xl   2,375 → 3,688 rem     título de testera
--t-4xl   2,750 → 4,813 rem     título de portada
```

Los rótulos (`.seccion__kicker`, `.etapa__edades`) van en versalitas con
`letter-spacing` amplio: es el recurso que separa el «índice» del contenido.

---

## 3. Retícula y espaciado

- **Ancho máximo** `--ancho: 1200px`. La envoltura lleva padding lateral propio.
- **Ancho de lectura** `--ancho-texto: 68ch` para bloques de prosa larga, como los
  textos legales y los objetivos de Primaria, que van literales.
- **Cabecera** `--borde-cabecera: 76px`.
- **Escala de espaciado** de `--e-1` (0,25 rem) a `--e-10`. Los dos últimos son
  fluidos, para que el aire entre secciones crezca con la pantalla.

**Todas** las rejillas automáticas se escriben así:

```css
grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr));
```

El `min(…, 100%)` interior es lo que impide que la columna sea más ancha que la
pantalla en móvil. Y todas las pistas `1fr` que contienen componentes anchos van
como `minmax(0, 1fr)`: sin eso, la pista crece hasta el `min-content` de su
contenido y desborda. **Los tres desbordamientos que aparecieron en la
verificación eran exactamente eso** y se corrigieron así.

---

## 4. Formas y sombras

Radios contenidos, de 3 a 16 px: un colegio no es una aplicación de móvil.

```
--r-s   3px    campos, chips pequeños
--r-m   6px    botones, enlaces de navegación
--r-l  10px    tarjetas
--r-xl 16px    piezas grandes
```

Tres sombras, todas con **desplazamiento vertical y desenfoque en dos capas**,
nunca un halo plano centrado:

```
--sombra-1   reposo de tarjeta
--sombra-2   botón al pasar el ratón
--sombra-3   elevación real: mega-menú, tarjeta activa
```

### Un motivo propio: la celosía

El fondo de las testeras y del héroe lleva un patrón SVG en línea, de octógonos
enlazados, a muy baja opacidad. Es un motivo geométrico abstracto que da textura a
los campos de color grandes sin cargarlos y sin recurrir a un degradado.

**No representa el edificio del colegio.** No hay ninguna fotografía del exterior
del centro en el material disponible, así que el motivo es un recurso gráfico, no
una afirmación sobre la arquitectura.

---

## 5. Componentes

### Botones

| Variante | Fondo | Texto | Contraste |
|---|---|---|---|
| `.boton` (principal) | `--marino` | blanco | **8,58:1** |
| `.boton--sol` (llamada) | `--sol` | `--tinta` | **6,15:1** |
| `.boton--fantasma` | transparente, con borde | `--marino` | 8,37:1 |
| `.boton--linea` | transparente sobre oscuro | blanco | 8,58:1 |

Altura mínima de 44 px en todos.

### Navegación

- **Escritorio:** seis familias temáticas con mega-menú de columnas. Cada enlace
  lleva su descripción, y el panel una imagen de apoyo. Se abre con el puntero y
  con `ArrowDown`; se cierra con `Escape` o pulsando fuera. Lleva
  `aria-expanded`, `aria-controls` y `aria-haspopup`.
- **Entre 1081 y 1199 px** el menú cabe justo: se aprieta el espaciado en vez de
  partir los rótulos en dos líneas o pasar antes a la hamburguesa.
- **Móvil (≤1080 px):** cajón lateral con acordeones. **Atrapa el foco**, se
  cierra con `Escape` y devuelve el foco a la hamburguesa —incluso en Safari, que
  no enfoca los botones al pulsarlos con el ratón.
- La página actual se marca con `aria-current="page"` y un subrayado interior
  (`box-shadow: inset`), no con un borde: un `border-bottom` grueso se pelea con
  las esquinas redondeadas de la caja.

### Ficha de etapa

Cada etapa tiene su color: primer ciclo de Infantil malva, segundo ciclo sol,
Primaria verde, E.S.O. acero, FP marino.

Ese color **no** se aplica como franja de 5 px sobre la tarjeta —el tópico visual
más reconocible de las interfaces generadas automáticamente—. Vive en dos sitios:
el filete vertical del rótulo de edades, y el borde de la tarjeta al pasar el
ratón. Los tonos que no llegan a 4,5:1 usan su variante tinta.

En pantallas de 1200 px o más las cinco etapas se reparten en una sola fila, para
que la quinta no quede sola con media rejilla vacía al lado.

### Tarjetas bento

Rejilla de seis columnas con piezas de distinto ancho, para que la portada tenga
ritmo en vez de la retahíla de «tres tarjetas con icono» repetida en cada sección.
En pantallas medias pasa a dos columnas y en móvil a una.

### Tablas

Todas van dentro de un contenedor con su propio `overflow-x: auto`, `role="region"`
y `tabindex="0"`, para que se puedan recorrer con el teclado **sin que la tabla
rompa el ancho de la página**. Encabezados con `<th scope>`.

### Acordeones

Se sirven **abiertos en el HTML**. Es el JavaScript el que los pliega al cargar,
dejando el primero abierto. Así, sin JavaScript, todo el contenido se lee.

### Visor de imágenes

`role="dialog"` y `aria-modal="true"`, foco atrapado, cierre con `Escape`,
navegación con flechas, y el pie indica «n de N». Al cerrarlo el foco vuelve a la
**foto que se estaba viendo**, no a la de partida: si se ha navegado con las
flechas, el recorrido continúa donde toca. Sin JavaScript, cada miniatura es un
enlace a la imagen a tamaño completo.

### Formulario

Validación en el navegador, trampa antispam (un campo señuelo oculto a lectores de
pantalla) y aviso honesto de cómo funciona el envío. **Nunca finge haber enviado
nada.** Las direcciones de correo no están escritas en el HTML: se montan en el
navegador desde `data-correo="cuenta|dominio"`, lo que frena a los robots
rastreadores sin romper el `mailto:` real ni la accesibilidad.

### Barra fija del móvil

Llamar · Escribir · Pedir plaza, con `env(safe-area-inset-bottom)` para el notch.
**No hay botón de WhatsApp** porque el centro no publica ningún móvil.

---

## 6. Movimiento

- Entradas suaves con `IntersectionObserver`, activadas por una clase `js` que
  añade un script en línea en el `<head>`. **Sin JavaScript no se oculta nada.**
- Transiciones cortas, de 160 a 200 ms, solo en color, sombra y desplazamientos
  pequeños. Nada que se mueva mientras se lee.
- `prefers-reduced-motion: reduce` desactiva todas las transiciones y animaciones.

---

## 7. Accesibilidad: lo medido

No es una declaración de intenciones. Estas son las cifras de la verificación
final sobre las 29 páginas:

| Comprobación | Alcance | Resultado |
|---|---|---|
| Contraste AA | 4 668 nodos de texto, a 375 y 1440 px | **0 por debajo del mínimo** |
| Objetivos táctiles de 44 px | 1 115 objetivos a 320 y 375 px | **0 fallos** (69 exentos) |
| Desbordamiento horizontal | 2 929 medidas, de 320 a 1920 px cada 16 px | **0 desbordes** |

Los 69 objetivos exentos son enlaces incrustados en un párrafo —WCAG los exceptúa
expresamente, porque separarlos rompería la línea de texto— y el campo señuelo
antispam, que no es un objetivo para nadie.

Además, y verificado uno a uno en el navegador: un solo `<h1>` por página, enlace
de salto al contenido, `:focus-visible` visible en todo, foco atrapado en cajón y
visor, cierre con `Escape` con devolución del foco, textos alternativos reales en
todas las imágenes, y tablas con encabezados marcados.

---

## 8. Compatibilidad

Safari 15+, Chrome, Edge y Firefox.

- `-webkit-` delante de `backdrop-filter` y `mask-image`.
- `100svh` siempre con un `vh` previo de respaldo.
- `@supports` para `aspect-ratio`.
- `color-mix()` siempre precedido de un color sólido.
- **Sin `:has()`, sin `@container`, sin `background-attachment: fixed`.**
- Rejillas `auto-fit` siempre como `minmax(min(Npx, 100%), 1fr)`.
- `env(safe-area-inset-bottom)` para el notch.

El JavaScript va en una IIFE con `"use strict"`, sin módulos ES, y degrada con
elegancia si `IntersectionObserver` no existe.
