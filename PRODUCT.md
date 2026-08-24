# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Familias que buscan colegio** (usuario principal). Padres y madres de Moratalaz y del sureste de Madrid con hijos de 0 a 16 años, decidiendo escolarización entre el 11 y el 25 de marzo, el plazo oficial de solicitudes de la Comunidad de Madrid. Llegan casi siempre desde el móvil, comparando tres o cuatro centros a la vez, y necesitan resolver en pocos minutos cuatro cosas: qué etapas cubre el centro, si está concertado, cuánto cuestan los servicios y cómo se pide plaza. La ventana de decisión es corta y estacional.

**Familias del centro** (usuario recurrente, mayor volumen anual). Vuelven durante todo el curso a buscar cosas concretas y siempre las mismas: el menú del comedor del mes, las listas de material, las fechas de reuniones, el calendario escolar, los días no lectivos y el acceso a la plataforma EVA. Su trabajo es de consulta rápida y repetida, no de descubrimiento.

**Alumnado de Formación Profesional** (audiencia secundaria y distinta). Jóvenes que eligen ciclo formativo por su cuenta, con criterios propios (salida laboral, precio, becas), no a través de sus familias.

## Product Purpose

La web del Colegio San Martín es el único canal público del centro. Existe para dos trabajos que hoy conviven mal en el sitio actual: convencer a una familia nueva de que pida plaza aquí, y servir de tablón de consulta a las familias que ya están dentro.

Éxito significa que una familia que no conoce el centro entienda en un viewport qué es (concertado, 0–16 años, más FP), y que una familia del centro encuentre el menú del comedor o la lista de material de su curso sin usar el buscador.

## Positioning

Un colegio de barrio de escala pequeña y trato directo, con más de 60 años en Moratalaz, que cubre la escolarización completa sin cambiar de centro: primer ciclo de Infantil (0–3, privado con beca), segundo ciclo de Infantil, Primaria y ESO (concertados) y Formación Profesional privada. La titularidad es **Martín Macías, S.A.**

Lo que un centro vecino no podría copiar tal cual: la combinación de tramo 0–16 bajo un mismo techo, extraescolares gratuitas impartidas por el propio profesorado en horario de 16:00 a 17:00 (y de 16:20 a 17:20 en ESO), francés desde Infantil sin coste, método ABN de matemáticas, centro examinador oficial de Cambridge, certificación BEDA desde el curso 2012-2013, telepediatría Kidscare durante todo el horario escolar y pertenencia a la red PROA+.

## Operating Context

- **Estacionalidad dura.** Todo el tráfico de captación se concentra entre marzo y abril. El resto del año domina la consulta de familias del centro.
- **Trámite ajeno.** La solicitud de plaza no se hace en esta web: se hace en la Secretaría Virtual de la Comunidad de Madrid o presencialmente en el centro. La web informa, prepara y da los documentos; no tramita.
- **Código de centro 28017893**, dato que la familia necesita copiar literalmente al rellenar la solicitud oficial.
- **Documentos como material de trabajo.** Buena parte del contenido útil vive en PDF: menús de comedor (diez variantes por alergia o dieta), listas de material por curso, calendario escolar, baremo, vacantes, planes digitales, plan de convivencia.
- **Plataforma externa.** La comunicación diaria con familias ocurre en EVA (`eva.colegiosanmartin.com`), fuera de esta web.
- **Sin backend.** El resultado es HTML estático subido a un hosting. No hay base de datos, ni panel, ni envío de correo desde el servidor.

## Capabilities and Constraints

**Etapas:** Primer ciclo de Infantil 0–3 (privado con posibilidad de beca) · Segundo ciclo de Infantil 3–6 (concertado) · Primaria (concertado) · ESO (concertado) · FP de Grado Medio en Gestión Administrativa y FP de Grado Superior en Educación Infantil (privado con posibilidad de beca).

**Horarios lectivos:** Infantil y Primaria de 9:00 a 12:30 y de 14:30 a 16:00 · E.S.O. de 8:25 a 12:45 y de 14:30 a 16:20.

**Terminología del centro que no se traduce ni se suaviza:** «Plan Incluyo» (sus normas de convivencia), «Aportación Voluntaria», «Comisión de Convivencia», «Educa Tab», «Comunidad Educativa», «etapa concertada» / «etapa privada».

**Restricciones técnicas:** sitio estático multipágina, sin framework ni dependencias de terceros salvo tipografías; formularios sin destino de servidor; los PDF se sirven tal cual desde el propio dominio.

**Explícitamente sin decidir / sin dato:** no hay número de WhatsApp publicado, no hay CIF publicado, no hay horario de secretaría publicado, no hay aviso legal ni política de cookies propios en la web (solo un PDF de política de protección de datos), no hay precios del primer ciclo de Infantil accesibles (su PDF devuelve 404 en el original).

## Brand Commitments

- **Nombre:** Colegio San Martín. Titularidad Martín Macías, S.A.
- **Escudo circular** con anillo verde, libro abierto, montañas nevadas, sol naciente y campo malva, rotulado COLEGIO / SAN-MARTIN. Solo existe en una versión de 90×90 px; es el único activo de identidad disponible.
- **Colores heredados verificados:** azul índigo `#3d449a` con hover `#2f3475` (color operativo del CSS del sitio anterior); del escudo, azul marino `#282e45`, verde `#046d58`, azul cielo `#9cb1d8`, malva `#854f8b`, naranja `#f5ad57`.
- **Tipografía heredada:** Open Sans.
- **Voz:** institucional, concreta y sin marketing. El centro se describe con hechos («centro privado concertado», «más de 60 años»), no con adjetivos. Cuando habla a las familias lo hace en segunda persona del plural y con vocabulario administrativo real.
- **Redes existentes:** Facebook (Colegio San Martín Moratalaz), Twitter/X (@smartincolegio), YouTube.

## Evidence on Hand

**Fotografía propia real** (`assets/img/_original/`, 60 archivos, 7,9 MB): aulas con alumnado, Infantil pintando con bata de cuadros, Primaria con tablets del proyecto Educa Tab, grupo de judo, Halloween en el aula, manos con balón al aire, comedor, instalaciones. Fotografía de móvil, auténtica, sin retoque. Es el activo más fuerte del proyecto y debe llevar el peso visual.

**Documentos propios** (`assets/docs/`, 32 archivos, 11 MB): menús de comedor (basal, escuela infantil, sin gluten, purés, sin puerro, sin huevo, sin lactosa y zanahoria, sin lentejas, sin legumbres, sin fritos), material escolar de 1º a 6º de Primaria, calendario escolar 2026-2027, instrucciones y calendario del proceso de admisión, baremo, vacantes, anexo de firma, planes digitales de ESO y de Primaria e Infantil, plan de convivencia, política de calidad, política de protección de datos, proyecto educativo.

**Datos verificados extraídos de esos PDF:**
- Precios de servicios, curso 2024/2025: comedor 138 €/mes; gabinete médico 50,30 €/curso; gabinete psicopedagógico 67 €/curso; seguro escolar 9 €/curso.
- Precios de extraescolares, curso 2025/2026: judo 34 €, natación 53 €, robótica y programación de videojuegos 30 €, baile moderno 20 €, child english 20 €, minichef 34 €, voleibol 20 €; franjas de 16:00-17:00 y 16:20-17:20 gratuitas.
- Resultados de pruebas externas, curso 2023-2024: 4º ESO Lengua 8,00 · Matemáticas 7,45 · Inglés 7,54 · Geografía e Historia 7,59; 6º Primaria Lengua 8,40 · Matemáticas 8,87 · Inglés 9,27 · Ciencias Sociales 9,20; Cambridge 95 % de aprobados.
- Calendario escolar 2026-2027 completo: fechas de inicio y fin por etapa, vacaciones, ocho días no lectivos y periodos de jornada intensiva.

**Datos de contacto verificados:** Avenida del Doctor García Tapia 124, 28030 Madrid · teléfono 91 439 06 24 · `colegiosanmartin@colegiosanmartin.com` · `cc.sanmartin.madrid@educa.madrid.org` · Metro Vinateros (línea 9) · autobuses EMT 30, 32, 71 y 113 · código de centro 28017893.

**Ausencias que no se pueden rellenar inventando:** no hay testimonios de familias, ni número de alumnos, ni ratios, ni claustro con nombres, ni año exacto de fundación (solo «más de 60 años»), ni fotografías del edificio por fuera, ni logo en resolución utilizable.

## Product Principles

1. **La evidencia por delante del adjetivo.** El centro tiene notas de evaluaciones externas, precios publicados y programas certificados. Se muestran como dato, no como promesa.
2. **Dos velocidades en el mismo sitio.** Captación y consulta son trabajos distintos: la familia que decide necesita argumento y secuencia; la familia del centro necesita llegar al PDF en dos clics. La arquitectura debe servir a las dos sin que una estorbe a la otra.
3. **El documento es contenido de primera.** Menús, listas de material y calendarios son la razón real de la mayoría de las visitas. Merecen tratamiento de contenido, no un enlace suelto al final de una página.
4. **Nada que el centro no haya publicado.** Ni un dato, ni una cifra, ni un testimonio que no venga del dominio o de sus PDF. Los huecos se declaran, no se rellenan.
5. **Fotografía propia, siempre.** El colegio es pequeño y real, y sus fotos lo demuestran mejor que cualquier imagen de catálogo. Nunca se mezclan con banco de imágenes.

## Accessibility & Inclusion

El centro se define como escuela inclusiva y atiende diversidad con departamento de orientación propio y programa PROA+; la web debe estar a esa altura y no contradecir su discurso.

Requisito operativo: **WCAG 2.1 AA verificado**, no declarado. El público incluye a abuelos y tutores de edad avanzada que recogen a diario, y a familias que consultan con una sola mano en el móvil a la salida del colegio, de pie y con prisa. Objetivos táctiles de 44 px, contraste medido en todas las páginas, navegación completa por teclado y tablas de datos que no rompan la lectura en pantallas de 320 px.

**Resultado sobre lo construido** (29 páginas, medido en el navegador, no estimado):

| Comprobación | Alcance | Resultado |
|---|---|---|
| Contraste AA | 4 668 nodos de texto, a 375 y 1440 px | 0 por debajo del mínimo |
| Objetivos táctiles de 44 px | 1 115 objetivos, a 320 y 375 px | 0 fallos (69 exentos por la excepción de enlace en línea) |
| Desbordamiento horizontal | 2 929 medidas, de 320 a 1920 px cada 16 px | 0 desbordes |
| Teclado y foco | Mega-menú, cajón, acordeones, visor, formulario | Correcto, con devolución de foco al cerrar |
| Sin JavaScript | Portada, calendario, galería, contacto | Todo el contenido legible y navegable |

Los detalles de cada regla y los ratios concretos están en [DESIGN.md](DESIGN.md);
los huecos que quedan abiertos, en [PENDIENTE.md](PENDIENTE.md).
