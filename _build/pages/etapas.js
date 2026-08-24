/* Sección «Etapas»: índice y una página por etapa educativa. */
'use strict';

const { SITE } = require('../nav');
const D = require('../data');
const L = require('../lib');
const { icono, imagen, esc, boton } = L;

module.exports = function (ctx) {
  const raiz = ctx.raiz;
  const migaBase = [{ texto: 'Inicio', url: 'index.html' }, { texto: 'Etapas', url: 'etapas.html' }];

  /* ---------------------------------------------------------------- índice */
  const indice = {
    url: 'etapas.html',
    familia: 'etapas.html',
    titulo: 'Etapas educativas · Colegio San Martín',
    descripcion: 'Escuela infantil de 0 a 3 años, Infantil, Primaria y E.S.O. concertados, y Formación Profesional en el Colegio San Martín de Moratalaz.',
    tono: 'marino',
    prioridad: '0.9',
    ogImagen: 'infantil-pintando.jpg',
    migas: [{ texto: 'Inicio', url: 'index.html' }, { texto: 'Etapas' }],
    h1: 'De 0 a 16 años sin cambiar de centro',
    entradilla: 'El colegio cubre la escolarización completa. Las etapas obligatorias están concertadas; el primer ciclo de Infantil y la Formación Profesional son privados, con posibilidad de beca.',
    placa: [
      { etiqueta: 'Infantil y Primaria', valor: '9:00 a 16:00' },
      { etiqueta: 'E.S.O.', valor: '8:25 a 16:20' },
      { etiqueta: 'Código de centro', valor: SITE.codigoCentro },
    ],
    cuerpo: `
<section class="seccion seccion--cal">
  <div class="envoltura">
    <div class="etapas etapas--escalonada">
      ${D.ETAPAS.map(function (e) { return '<div class="revelar">' + L.fichaEtapa(e) + '</div>'; }).join('')}
    </div>

    <div style="margin-top: var(--e-8)" class="revelar">
      ${L.tabla(
        ['Etapa', 'Edades', 'Régimen'],
        D.ETAPAS.map(function (e) {
          return [esc(e.nombre), esc(e.edades), e.concertada
            ? '<span class="gratis">Concertada</span>'
            : esc(e.regimen)];
        }),
        { titulo: 'Resumen de la oferta educativa', etiqueta: 'Tabla de etapas educativas' }
      )}
    </div>
  </div>
</section>

<section class="seccion seccion--papel">
  <div class="envoltura">
    <div class="seccion__cabeza revelar">
      <p class="seccion__kicker">Horarios lectivos</p>
      <h2 class="seccion__titulo">La jornada del centro</h2>
    </div>
    <div class="revelar" style="max-width: var(--ancho-texto)">
      ${L.datos(SITE.horarios.map(function (h) { return { k: h.etapa, v: esc(h.texto) }; }))}
      <p class="ayuda" style="margin-top: var(--e-4)">Fuente: documento de información básica del proceso de admisión publicado por el centro.</p>
    </div>
  </div>
</section>
`,
  };

  /* ------------------------------------------------- primer ciclo infantil */
  const primerCiclo = {
    url: 'infantil-primer-ciclo.html',
    familia: 'etapas.html',
    titulo: 'Primer ciclo de Educación Infantil · 0 a 3 años · Colegio San Martín',
    descripcion: 'Escuela infantil de 0 a 3 años del Colegio San Martín en Moratalaz. Etapa privada con posibilidad de beca, dentro del mismo centro que Infantil, Primaria y E.S.O.',
    tono: 'malva',
    prioridad: '0.8',
    migas: migaBase.concat([{ texto: 'Primer ciclo de Infantil' }]),
    h1: 'Primer ciclo de Educación Infantil',
    entradilla: 'De 0 a 3 años. Etapa privada con posibilidad de beca.',
    cuerpo: `
<section class="seccion seccion--papel">
  <div class="envoltura">
    <div class="dos-columnas dos-columnas--texto-ancho">
      <div class="prosa revelar">
        <p>La Educación Infantil es la etapa educativa que atiende a niñas y niños desde el nacimiento hasta los seis años con la finalidad de contribuir a su desarrollo físico, afectivo, social e intelectual. Se ordena en dos ciclos: el primero comprende hasta los 3 años.</p>
        <p>Es una etapa muy importante para el desarrollo integral de los alumnos, en la que se trabajan los hábitos y destrezas que van a permitir a los niños crecer con autonomía. Potenciamos todas sus capacidades poniendo especial atención en lo emocional, en lo afectivo, en lo social, en la creatividad…</p>
        <p>Utilizamos un método en el que los niños y las niñas afrontarán el reto de resolver situaciones problema investigando de forma cooperativa, globalizada e interdisciplinar, integrando de forma natural en su aprendizaje las TIC, las estrategias de pensamiento y la educación emocional, para obtener un producto final que podrán compartir con el grupo y con la familia. Y todo ello acompañado de una nueva propuesta para la evaluación, rigurosa, completa y práctica.</p>
      </div>
      <div class="revelar">
        <figure class="figura figura--recorte">
          ${imagen('assets/img/infantil-pintando.jpg', 'Niña de Educación Infantil con bata de cuadros pintando una huevera en el aula.')}
          <figcaption>Actividad plástica en el aula de Educación Infantil.</figcaption>
        </figure>
      </div>
    </div>

    <div style="margin-top: var(--e-8)" class="revelar">
      ${L.aviso('Precios del primer ciclo',
        '<p>El sitio anterior enlazaba una tarifa de esta etapa que ya no está disponible en el servidor. Para conocer el precio actual, llame al <a href="tel:' + SITE.telefonoE164 + '">' + esc(SITE.telefono) + '</a> o escriba al colegio.</p>', 'ojo')}
    </div>
  </div>
</section>

<section class="seccion seccion--cal">
  <div class="envoltura">
    <div class="seccion__cabeza revelar">
      <h2 class="seccion__titulo">Servicios disponibles en esta etapa</h2>
    </div>
    <ul class="descargas revelar">
      <li>${L.descarga('Menú del comedor · Escuela Infantil', 'assets/docs/basal_escuela.pdf', raiz)}</li>
      <li>${L.descarga('Menú de purés para bebés', 'assets/docs/pures.pdf', raiz)}</li>
      <li>${L.descarga('Menú de purés sin puerro', 'assets/docs/sin_puerro.pdf', raiz)}</li>
    </ul>
    <p style="margin-top: var(--e-5)">${boton('Todos los servicios del centro', 'servicios.html', { variante: 'fantasma', icono: 'flecha' })}</p>
  </div>
</section>
`,
  };

  /* ----------------------------------------------- segundo ciclo infantil */
  const infantil = {
    url: 'infantil.html',
    familia: 'etapas.html',
    titulo: 'Segundo ciclo de Educación Infantil · 3 a 6 años · Colegio San Martín',
    descripcion: 'Segundo ciclo de Educación Infantil concertado en el Colegio San Martín: hábitos, autonomía y educación emocional, con inglés y francés desde los tres años.',
    tono: 'marino',
    prioridad: '0.8',
    ogImagen: 'infantil-minichef.jpg',
    migas: migaBase.concat([{ texto: 'Segundo ciclo de Infantil' }]),
    h1: 'Segundo ciclo de Educación Infantil',
    entradilla: 'De 3 a 6 años. Etapa concertada.',
    cuerpo: `
<section class="seccion seccion--papel">
  <div class="envoltura">
    <div class="dos-columnas dos-columnas--texto-ancho">
      <div class="prosa revelar">
        <p>La Educación Infantil es la etapa educativa que atiende a niñas y niños desde el nacimiento hasta los seis años con la finalidad de contribuir a su desarrollo físico, afectivo, social e intelectual. Se ordena en dos ciclos: el primero comprende hasta los 3 años; el segundo va desde los 3 a los 6 años.</p>
        <p>Es una etapa muy importante para el desarrollo integral de los alumnos, en la que se trabajan los hábitos y destrezas que van a permitir a los niños crecer con autonomía. Potenciamos todas sus capacidades poniendo especial atención en lo emocional, en lo afectivo, en lo social, en la creatividad…</p>
        <p>Utilizamos un método en el que los niños y las niñas afrontarán el reto de resolver situaciones problema investigando de forma cooperativa, globalizada e interdisciplinar, integrando de forma natural en su aprendizaje las TIC, las estrategias de pensamiento y la educación emocional, para obtener un producto final que podrán compartir con el grupo y con la familia. Y todo ello acompañado de una nueva propuesta para la evaluación, rigurosa, completa y práctica.</p>
      </div>
      <div class="revelar">
        <figure class="figura figura--recorte">
          ${imagen('assets/img/infantil-minichef.jpg', 'Alumna de Infantil con gorro de cocinero decorando un plato durante un taller.')}
          <figcaption>Taller de cocina con alumnado de Educación Infantil.</figcaption>
        </figure>
      </div>
    </div>
  </div>
</section>

<section class="seccion seccion--hueso">
  <div class="envoltura">
    <div class="seccion__cabeza revelar">
      <p class="seccion__kicker">En esta etapa</p>
      <h2 class="seccion__titulo">Idiomas y método desde los tres años</h2>
    </div>
    ${L.bento([
      { tam: 'dos', html: `<h3>Enseñanza precoz de idiomas</h3><p>Estudio de inglés y francés a partir de los tres años. El taller de francés forma parte de las extraescolares gratuitas de la franja de 16:00 a 17:00.</p><p><a href="ingles.html">Programa de inglés</a></p>` },
      { tam: 'dos', html: `<h3>Matemáticas ABN</h3><p>El método ABN se aplica desde Educación Infantil: cálculo apoyado en la comprensión de los procesos, no en la memoria.</p><p><a href="matematicas-abn.html">Qué es el método ABN</a></p>` },
    ])}
  </div>
</section>
`,
  };

  /* -------------------------------------------------------------- primaria */
  const primaria = {
    url: 'primaria.html',
    familia: 'etapas.html',
    titulo: 'Educación Primaria · 6 a 12 años · Colegio San Martín',
    descripcion: 'Educación Primaria concertada en el Colegio San Martín: objetivos de la etapa, metodología activa, atención a la diversidad y evaluación del proceso educativo.',
    tono: 'verde',
    prioridad: '0.8',
    ogImagen: 'primaria-tablet.jpg',
    migas: migaBase.concat([{ texto: 'Primaria' }]),
    h1: 'Educación Primaria',
    entradilla: 'De 6 a 12 años. Etapa concertada.',
    cuerpo: `
<section class="seccion seccion--papel">
  <div class="envoltura">
    <div class="dos-columnas dos-columnas--texto-ancho">
      <div class="prosa revelar">
        <p>Dentro del proceso evolutivo del alumno, la etapa de 6 a 12 años que abarca la primaria es un periodo crucial en su proceso educativo, ya que los niños van a alcanzar un grado de madurez, destrezas, conocimientos y autonomía que les van a preparar para estudios posteriores.</p>
      </div>
      <div class="revelar">
        <figure class="figura figura--recorte">
          ${imagen('assets/img/aula-halloween.jpg', 'Aula de Primaria del colegio durante una actividad de disfraces.')}
          <figcaption>Actividad de aula con alumnado de Primaria.</figcaption>
        </figure>
      </div>
    </div>
  </div>
</section>

<section class="seccion seccion--cal">
  <div class="envoltura">
    <div class="seccion__cabeza revelar">
      <p class="seccion__kicker">Objetivos</p>
      <h2 class="seccion__titulo">Qué capacidades desarrolla la etapa</h2>
      <p class="seccion__entrada">La Educación Primaria contribuirá a desarrollar en los alumnos las capacidades que les permitan:</p>
    </div>

    <div class="prosa revelar">
      <ul>
        <li>Conocer y apreciar los valores y las normas de convivencia, aprender a obrar de acuerdo con ellas, prepararse para el ejercicio activo de la ciudadanía respetando y defendiendo los derechos humanos, así como el pluralismo propio de una sociedad democrática.</li>
        <li>Desarrollar hábitos de trabajo individual y de equipo, de esfuerzo y responsabilidad en el estudio, así como actitudes de confianza en sí mismo, sentido crítico, iniciativa personal, curiosidad, interés y creatividad en el aprendizaje y espíritu emprendedor.</li>
        <li>Adquirir habilidades para la prevención y para la resolución pacífica de conflictos, que les permitan desenvolverse con autonomía en el ámbito familiar y doméstico, así como en los grupos sociales en los que se relacionan.</li>
        <li>Conocer, comprender y respetar las diferencias culturales y personales, la igualdad de derechos y oportunidades para todas las personas y la no discriminación de personas con discapacidad.</li>
        <li>Conocer y utilizar de manera apropiada la lengua castellana, valorando sus posibilidades comunicativas y desarrollar hábitos de lectura como instrumento esencial para el aprendizaje del resto de las áreas.</li>
        <li>Adquirir en, al menos una lengua extranjera, la competencia comunicativa básica que les permita expresar y comprender mensajes sencillos y desenvolverse en situaciones cotidianas.</li>
        <li>Desarrollar las competencias matemáticas básicas e iniciarse en la resolución de problemas que requieran la realización de operaciones elementales de cálculo, conocimientos geométricos y estimaciones, así como ser capaces de aplicarlos a las situaciones de su vida cotidiana.</li>
        <li>Conocer los aspectos fundamentales de las Ciencias de la Naturaleza, las Ciencias Sociales, la Geografía, la Historia y la Cultura.</li>
        <li>Iniciarse en la utilización de las tecnologías de la información y la comunicación, desarrollando un espíritu crítico ante los mensajes que reciben y elaboran.</li>
        <li>Utilizar diferentes representaciones y expresiones artísticas e iniciarse en la construcción de propuestas visuales y audiovisuales.</li>
        <li>Valorar la higiene y la salud, conocer y respetar el cuerpo humano, y utilizar la educación física y el deporte como medios para favorecer el desarrollo personal y social.</li>
        <li>Conocer y valorar los animales y plantas y adoptar modos de comportamiento que favorezcan su cuidado.</li>
        <li>Desarrollar sus capacidades afectivas en todos los ámbitos de la personalidad y en sus relaciones con los demás, así como una actitud contraria a la violencia, a los prejuicios de cualquier tipo y a los estereotipos sexistas.</li>
        <li>Fomentar la educación vial y el respeto a las normas para evitar accidentes de tráfico.</li>
      </ul>
    </div>
  </div>
</section>

<section class="seccion seccion--papel">
  <div class="envoltura">
    <div class="seccion__cabeza revelar">
      <p class="seccion__kicker">Metodología</p>
      <h2 class="seccion__titulo">Cómo se enseña en Primaria</h2>
      <p class="seccion__entrada">El proceso de enseñanza y aprendizaje debe partir del nivel de desarrollo del alumnado y de sus aprendizajes previos, asegurar el aprendizaje significativo, posibilitar que los alumnos aprendan por sí solos y realizar actividades motivadoras.</p>
    </div>

    ${L.bento([
      { tam: 'tres', html: '<h3>Metodología activa</h3><p>Participación activa de los alumnos en la dinámica general del aula y en la adquisición de los aprendizajes.</p>' },
      { tam: 'tres', html: '<h3>Motivación</h3><p>Consideramos fundamental partir de los intereses, demandas, necesidades y expectativas de los alumnos.</p>' },
      { tam: 'tres', html: '<h3>Autonomía</h3><p>Autonomía en el aprendizaje para una mayor implicación del alumnado.</p>' },
      { tam: 'tres', html: '<h3>Lenguaje claro</h3><p>La utilización de un lenguaje sencillo, claro y estructurado en la presentación de los nuevos contenidos.</p>' },
      { tam: 'tres', html: '<h3>Graduación de actividades</h3><p>Atendiendo a su dificultad, apareciendo en último lugar las que requieren un mayor grado de habilidad y autonomía.</p>' },
      { tam: 'tres', html: '<h3>Atención a la diversidad</h3><p>Tener en cuenta sus diferentes ritmos de aprendizaje, así como sus distintos intereses y motivaciones.</p>' },
      { tam: 'tres', html: '<h3>Educación en valores</h3><p>Actividades que conducen a la adopción de actitudes positivas sobre el cuidado del propio cuerpo, la conservación de la naturaleza y la convivencia.</p>' },
      { tam: 'tres', html: '<h3>Evaluación del proceso</h3><p>Como medio de mejora para los siguientes aprendizajes, ya sea para el alumnado, el docente o el proceso.</p>' },
      { tam: 'tres', html: '<h3>Agrupamiento</h3><p>Utilizar diferentes tipos de agrupamiento para enriquecer la socialización, el trabajo en equipo y el reparto de tareas.</p>' },
    ])}
  </div>
</section>

<section class="seccion seccion--cal">
  <div class="envoltura">
    <div class="seccion__cabeza revelar">
      <h2 class="seccion__titulo">Material escolar por curso</h2>
    </div>
    <ul class="descargas revelar">
      ${D.MATERIAL.map(function (m) { return '<li>' + L.descarga('Material de ' + m.curso, m.archivo, raiz) + '</li>'; }).join('')}
    </ul>
  </div>
</section>
`,
  };

  /* ------------------------------------------------------------------- eso */
  const eso = {
    url: 'eso.html',
    familia: 'etapas.html',
    titulo: 'Educación Secundaria Obligatoria · Colegio San Martín',
    descripcion: 'E.S.O. concertada en el Colegio San Martín: metodología adaptada a cada alumno, aulas flexibles y cooperativas, y extraescolares gratuitas de 16:20 a 17:20.',
    tono: 'acero',
    prioridad: '0.8',
    ogImagen: 'gimnasio-acrosport.jpg',
    migas: migaBase.concat([{ texto: 'E.S.O.' }]),
    h1: 'Educación Secundaria Obligatoria',
    entradilla: 'De 12 a 16 años. Etapa concertada.',
    cuerpo: `
<section class="seccion seccion--papel">
  <div class="envoltura">
    <div class="dos-columnas dos-columnas--texto-ancho">
      <div class="prosa revelar">
        <p>La metodología didáctica en la E.S.O. se adapta a las características de cada alumno, favorecerá su capacidad para aprender por sí mismo y para trabajar en equipo y se le inicia en el conocimiento de la realidad de acuerdo con los principios básicos del método científico.</p>
        <p>Organizamos nuestras aulas y espacios educativos de una manera flexible, abierta, dinámica y cooperativa, para favorecer que el alumno sea el protagonista de su propio aprendizaje.</p>
      </div>
      <div class="revelar">
        <figure class="figura figura--recorte">
          ${imagen('assets/img/gimnasio-acrosport.jpg', 'Alumnado de Secundaria formando una figura de acrosport sobre colchonetas en el gimnasio del colegio.')}
          <figcaption>Sesión de acrosport con alumnado de Secundaria.</figcaption>
        </figure>
      </div>
    </div>
  </div>
</section>

<section class="seccion seccion--hueso">
  <div class="envoltura">
    <div class="seccion__cabeza revelar">
      <h2 class="seccion__titulo">Lo propio de la etapa</h2>
    </div>
    ${L.bento([
      { tam: 'dos', html: `<h3>Extraescolares gratuitas de 16:20 a 17:20</h3><p>De lunes a jueves: nuevas tecnologías, docucine, multideporte, ajedrez, taller de teatro y divertimates. Impartidas por el profesorado del centro.</p><p><a href="extraescolares.html">Ver actividades y horarios</a></p>` },
      { tam: 'dos', html: `<h3>Matemáticas aplicadas cofinanciadas</h3><p>El Fondo Social Europeo cofinancia la implantación de las matemáticas aplicadas en tercero y cuarto de la ESO.</p>` },
      { tam: 'dos', html: `<h3>Exámenes de Cambridge</h3><p>Los exámenes de la University of Cambridge se desarrollan junto a los programas de enseñanza desde Primaria hasta E.S.O.</p><p><a href="ingles.html">Programa de inglés</a></p>` },
      { tam: 'dos', html: `<h3>Plan Digital de centro</h3><p>El colegio cuenta con un Plan Digital específico para la E.S.O., incluido en la Programación General Anual.</p><p><a href="plan-digital.html">Ver el Plan Digital</a></p>` },
    ])}
  </div>
</section>

<section class="seccion seccion--papel">
  <div class="envoltura">
    <div class="seccion__cabeza revelar">
      <p class="seccion__kicker">Evaluaciones externas · curso ${esc(D.RESULTADOS.curso)}</p>
      <h2 class="seccion__titulo">Resultados de 4º de E.S.O.</h2>
    </div>
    <div class="marcador revelar">
      ${D.RESULTADOS.grupos[0].filas.map(function (f) {
        return `<div class="marcador__celda">
          <span class="marcador__valor">${esc(f.nota)}</span>
          <span class="marcador__etiqueta">${esc(f.materia)}</span>
        </div>`;
      }).join('')}
    </div>
    <p class="ayuda" style="margin-top: var(--e-4)">Promedio del centro en la evaluación censal. Fuente: documento de resultados publicado por el colegio.</p>
  </div>
</section>
`,
  };

  /* -------------------------------------------------------------------- fp */
  const fp = {
    url: 'formacion-profesional.html',
    familia: 'etapas.html',
    titulo: 'Formación Profesional · Colegio San Martín',
    descripcion: 'Grado Medio de Técnico en Gestión Administrativa y Grado Superior de Técnico en Educación Infantil. Privado con posibilidad de beca.',
    tono: 'tinta',
    prioridad: '0.8',
    migas: migaBase.concat([{ texto: 'Formación Profesional' }]),
    h1: 'Formación Profesional',
    entradilla: 'Privado con posibilidad de beca.',
    cuerpo: `
<section class="seccion seccion--papel">
  <div class="envoltura">
    <div class="etapas revelar">
      <div class="etapa etapa--marino" style="cursor: default">
        <span class="etapa__edades">Grado Medio</span>
        <h2 class="etapa__nombre">Técnico en Gestión Administrativa</h2>
        <p class="etapa__resumen">Formación Profesional de Grado Medio.</p>
        <span class="etapa__regimen">Privado con posibilidad de beca</span>
      </div>
      <div class="etapa etapa--acero" style="cursor: default">
        <span class="etapa__edades">Grado Superior</span>
        <h2 class="etapa__nombre">Técnico en Educación Infantil</h2>
        <p class="etapa__resumen">Formación Profesional de Grado Superior.</p>
        <span class="etapa__regimen">Privado con posibilidad de beca</span>
      </div>
    </div>

    <div style="margin-top: var(--e-8); max-width: var(--ancho-texto)" class="revelar">
      ${L.aviso('Más información',
        '<p>Para conocer plazos, precios y condiciones de beca de los ciclos formativos, llame al <a href="tel:' + SITE.telefonoE164 + '">' + esc(SITE.telefono) + '</a>.</p>' +
        '<p>El centro no publica en su web el detalle de los ciclos más allá de su denominación, así que aquí no figura ningún dato que el colegio no haya hecho público.</p>', 'ojo')}
    </div>
  </div>
</section>
`,
  };

  return [indice, primerCiclo, infantil, primaria, eso, fp];
};
