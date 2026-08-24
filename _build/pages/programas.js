/* Sección «Programas»: inglés, ABN, nuevas tecnologías, Plan Digital y PROA+. */
'use strict';

const { SITE } = require('../nav');
const D = require('../data');
const L = require('../lib');
const { icono, imagen, esc, boton } = L;

module.exports = function (ctx) {
  const raiz = ctx.raiz;
  const migaBase = [{ texto: 'Inicio', url: 'index.html' }, { texto: 'Programas', url: 'programas.html' }];

  /* ---------------------------------------------------------------- índice */
  const indice = {
    url: 'programas.html',
    familia: 'programas.html',
    titulo: 'Programas y proyectos · Colegio San Martín',
    descripcion: 'Programas del Colegio San Martín: inglés con Cambridge, BEDA y método Vaughan, matemáticas ABN, proyecto Educa Tab, Plan Digital de centro y red PROA+.',
    tono: 'marino',
    prioridad: '0.8',
    ogImagen: 'primaria-tablet.jpg',
    migas: [{ texto: 'Inicio', url: 'index.html' }, { texto: 'Programas' }],
    h1: 'Programas y proyectos del centro',
    entradilla: 'Cinco líneas de trabajo que atraviesan las etapas: idiomas certificados, un método propio de matemáticas, tecnología en el aula, digitalización del centro y apoyo al alumnado que lo necesita.',
    cuerpo: `
<section class="seccion seccion--cal">
  <div class="envoltura">
    <div class="etapas">
      ${D.PROGRAMAS.map(function (p) {
        return `<a class="etapa etapa--marino revelar" href="${p.url}">
          <span class="etapa__edades">Programa</span>
          <h2 class="etapa__nombre">${esc(p.nombre)}</h2>
          <p class="etapa__resumen">${esc(p.resumen)}</p>
          <span class="etapa__ir">${icono('flecha')}</span>
        </a>`;
      }).join('')}
    </div>
  </div>
</section>
`,
  };

  /* --------------------------------------------------------------- inglés */
  const ingles = {
    url: 'ingles.html',
    familia: 'programas.html',
    titulo: 'Inglés · Cambridge, BEDA y método Vaughan · Colegio San Martín',
    descripcion: 'Centro examinador de la University of Cambridge y centro certificado BEDA desde 2012-2013. En Primaria, método Mission Accomplished with Vaughan.',
    tono: 'marino',
    prioridad: '0.7',
    migas: migaBase.concat([{ texto: 'Inglés' }]),
    h1: 'Inglés',
    entradilla: 'Centro examinador de la University of Cambridge, centro certificado BEDA y método Vaughan en Primaria.',
    cuerpo: `
<section class="seccion seccion--papel" id="cambridge">
  <div class="envoltura">
    <div class="dos-columnas dos-columnas--texto-ancho">
      <div class="prosa revelar">
        <p class="seccion__kicker">Cambridge</p>
        <h2>Centro examinador University of Cambridge</h2>
        <p>Los exámenes de Cambridge se incorporan al Proyecto de actividades y se van desarrollando junto a los programas de enseñanza, desde Primaria hasta E.S.O.</p>
        <div class="marcador" style="margin-top: var(--e-5)">
          <div class="marcador__celda">
            <span class="marcador__valor">${esc(D.RESULTADOS.cambridge.valor)}</span>
            <span class="marcador__etiqueta">Porcentaje de aprobados en Cambridge · curso ${esc(D.RESULTADOS.curso)}</span>
          </div>
        </div>
      </div>
      <div class="revelar">
        <figure class="figura">
          ${imagen('assets/img/cambridge.jpg', 'Logotipo de Cambridge English utilizado por el centro examinador.')}
        </figure>
      </div>
    </div>
  </div>
</section>

<section class="seccion seccion--hueso" id="beda">
  <div class="envoltura">
    <div class="dos-columnas dos-columnas--texto-ancho">
      <div class="prosa revelar">
        <p class="seccion__kicker">BEDA</p>
        <h2>Colegio certificado del programa BEDA</h2>
        <p>Desde el curso 2012-1013, el Colegio San Martín es un Centro Certificado del Programa BEDA (Bilingual English Developement &amp; Assessment).</p>
        <p>BEDA es un programa flexible, que ayuda eficazmente a la mejora de la enseñanza del inglés, siempre en coherencia con la calidad del resto de las enseñanzas y del Proyecto Educativo y valores del Colegio.</p>
        <p>Consiste en una implantación gradual de la enseñanza bilingüe Español-Inglés en el Colegio reforzando y ampliando determinados aspectos de la vida educativa lingüística del Currículo y del entorno escolar.</p>
        <ul>
          <li>Incremento cualitativo y cuantitativo de la enseñanza del inglés.</li>
          <li>Formación específica del profesorado.</li>
          <li>Evaluación externa con Cambridge para alumnos, profesores y personal del centro.</li>
        </ul>
        <p>La implantación del Programa se hace principalmente en cuatro etapas, que se van alcanzando según se amplía el nivel de enseñanza del inglés en el Centro.</p>
      </div>
      <div class="revelar">
        <figure class="figura">
          ${imagen('assets/img/beda.jpg', 'Logotipo del programa BEDA, Bilingual English Development and Assessment.')}
        </figure>
      </div>
    </div>
  </div>
</section>

<section class="seccion seccion--papel" id="vaughan">
  <div class="envoltura">
    <div class="dos-columnas dos-columnas--texto-ancho">
      <div class="prosa revelar">
        <p class="seccion__kicker">Vaughan</p>
        <h2>Mission Accomplished with Vaughan</h2>
        <p lang="en">Is a six-year Primary course for advanced level English classes. In this textbook, we incorporate key elements of the Vaughan method, placing special emphasis on student's speaking and listening skills. Taking advantage of a variety of materials, we provide pupils with a learning experience that is both fun and focused, presenting them with interesting topics to talk about, stimulating activities to participate in, catchy tunes to sing along to and entertaining stories and videos.</p>
        <p lang="en">One of the main goals of Mission Accomplished with Vaughan is to develop students' self-confidence with English. This aim is achieved through practice with listening and speaking, two of the most important elements of language learning with the Vaughan method.</p>
      </div>
      <div class="revelar">
        <figure class="figura">
          ${imagen('assets/img/vaughan.jpg', 'Portada del método Mission Accomplished with Vaughan utilizado en Primaria.')}
        </figure>
      </div>
    </div>
  </div>
</section>

<section class="seccion seccion--cal">
  <div class="envoltura">
    <div class="revelar" style="max-width: var(--ancho-texto)">
      ${L.aviso('Francés desde Infantil',
        '<p>Además del inglés, el centro imparte francés a partir de los tres años. El taller de francés forma parte de las extraescolares gratuitas de la franja de 16:00 a 17:00.</p><p><a href="extraescolares.html">Ver las extraescolares</a></p>')}
    </div>
  </div>
</section>
`,
  };

  /* ------------------------------------------------------------------- abn */
  const abn = {
    url: 'matematicas-abn.html',
    familia: 'programas.html',
    titulo: 'Matemáticas ABN · Colegio San Martín',
    descripcion: 'El método ABN en el Colegio San Martín: cálculo comprensivo desde Educación Infantil, apoyado en el sistema conceptual y no en el estudio memorístico.',
    tono: 'verde',
    prioridad: '0.7',
    migas: migaBase.concat([{ texto: 'Matemáticas ABN' }]),
    h1: 'Matemáticas ABN',
    entradilla: 'Un método sistemático y muy experimentado para el aprendizaje de las matemáticas tempranas, aplicado desde Educación Infantil.',
    cuerpo: `
<section class="seccion seccion--papel">
  <div class="envoltura">
    <div class="dos-columnas dos-columnas--texto-ancho">
      <div class="prosa revelar">
        <h2>¿Qué es?</h2>
        <p>Es una revolución en el campo del aprendizaje de las matemáticas tempranas.</p>
        <p>Se trata de un método sistemático y muy experimentado, con el que, de forma natural, se aumenta, intensifica y mejora la comprensión de los contenidos matemáticos desde Educación Infantil.</p>
      </div>
      <div class="revelar">
        <figure class="figura">
          ${imagen('assets/img/matematicas-abn.jpg', 'Logotipo del método de matemáticas ABN.')}
        </figure>
      </div>
    </div>
  </div>
</section>

<section class="seccion seccion--hueso">
  <div class="envoltura">
    <div class="seccion__cabeza revelar">
      <h2 class="seccion__titulo">¿Qué ventajas ofrece?</h2>
    </div>
    ${L.bento([
      { tam: 'dos', html: '<h3>Capacidad de cálculo real</h3><p>Desarrolla una gran capacidad de cálculo, que no es mecánica ni puramente instrumental, sino apoyada en el sistema conceptual que soporta todas las destrezas y las habilidades del cálculo.</p>' },
      { tam: 'dos', html: '<h3>Resolución de problemas</h3><p>Mejora notablemente la capacidad de resolución de problemas.</p>' },
      { tam: 'dos', html: '<h3>Aprendizaje conceptual</h3><p>Proporciona un aprendizaje conceptual basado en la comprensión de los procesos, no en su estudio memorístico.</p>' },
      { tam: 'dos', tono: 'arena', html: '<h3>Pasión por las matemáticas</h3><p>Provoca pasión por las matemáticas; los niños y las niñas las declaran su «actividad favorita».</p>' },
    ])}
  </div>
</section>
`,
  };

  /* ------------------------------------------------------------ tecnología */
  const tecnologia = {
    url: 'tecnologia.html',
    familia: 'programas.html',
    titulo: 'Nuevas tecnologías · Proyecto Educa Tab · Colegio San Martín',
    descripcion: 'Educa Tab: enseñanza digital con tablets en el aula, con formación y soporte al profesorado y a las familias del Colegio San Martín.',
    tono: 'acero',
    prioridad: '0.7',
    ogImagen: 'primaria-tablet.jpg',
    migas: migaBase.concat([{ texto: 'Nuevas tecnologías' }]),
    h1: 'Nuevas tecnologías',
    entradilla: 'Educa Tab es un proyecto de enseñanza digital integral basado en el uso de las tablets en el aula y que responde a las nuevas necesidades de la educación actual.',
    cuerpo: `
<section class="seccion seccion--papel">
  <div class="envoltura">
    <div class="dos-columnas dos-columnas--texto-ancho">
      <div class="prosa revelar">
        <h2>Proyecto Educa Tab</h2>
        <p>A través de un entorno de aprendizaje multieditorial, universal e integral permite a los profesores y alumnos acceder a la enseñanza del siglo XXI: actividades y trabajos cooperativos, clase invertida, proyectos, atención a la diversidad, enseñanza personalizada…</p>
        <h3>Educa Tab aporta</h3>
        <ul>
          <li>Introducción de las nuevas tecnologías en el aula.</li>
          <li>Seguridad en internet y redes sociales.</li>
          <li>Formación y capacitación de profesores y familias.</li>
          <li>Soporte y asistencia técnica al profesorado.</li>
          <li>Conectividad rápida y de calidad.</li>
        </ul>
      </div>
      <div class="revelar">
        <figure class="figura figura--recorte">
          ${imagen('assets/img/primaria-tablet.jpg', 'Dos alumnos de Primaria trabajando con una tablet en el aula.')}
          <figcaption>Trabajo con tablets en un aula de Primaria.</figcaption>
        </figure>
        <figure class="figura" style="margin-top: var(--e-5)">
          ${imagen('assets/img/educatab.jpg', 'Logotipo del proyecto Educa Tab.')}
        </figure>
      </div>
    </div>
  </div>
</section>
`,
  };

  /* ---------------------------------------------------------- plan digital */
  const planDigital = {
    url: 'plan-digital.html',
    familia: 'programas.html',
    titulo: 'Plan Digital de centro · Colegio San Martín',
    descripcion: 'Plan Digital de Centro del Colegio San Martín: digitalización de la gestión y proyectos interdisciplinares con metodologías activas.',
    tono: 'marino',
    prioridad: '0.6',
    migas: migaBase.concat([{ texto: 'Plan Digital' }]),
    h1: 'Plan Digital de centro',
    entradilla: 'En el Colegio San Martín hemos desarrollado un PDC que se incluye en la Programación General Anual (PGA) del curso 23-24.',
    cuerpo: `
<section class="seccion seccion--papel">
  <div class="envoltura">
    <div class="prosa revelar">
      <p>Una vez realizado el análisis de las necesidades del centro relacionadas con la digitalización del mismo, las líneas de actuación del Plan se centrarán entre otros aspectos en sistematizar y digitalizar los procesos de gestión con toda la Comunidad Educativa. También queremos impulsar un cambio metodológico a través de la inclusión en todas las etapas educativas de proyectos interdisciplinares, utilizando metodologías activas y herramientas digitales de trabajo colaborativo.</p>
    </div>

    <ul class="descargas revelar" style="margin-top: var(--e-7)">
      <li>${L.descarga('Plan Digital del Colegio San Martín · E.S.O.', 'assets/docs/PDC_ESO.pdf', raiz)}</li>
      <li>${L.descarga('Plan Digital del Colegio San Martín · Primaria e Infantil', 'assets/docs/PDC_Primaria.pdf', raiz)}</li>
    </ul>
  </div>
</section>
`,
  };

  /* ------------------------------------------------------------------ proa */
  const proa = {
    url: 'proa.html',
    familia: 'programas.html',
    titulo: 'PROA+ · Refuerzo educativo y espacios inclusivos · Colegio San Martín',
    descripcion: 'El Colegio San Martín pertenece a la red de Centros PROA+: refuerzo educativo gratuito, espacios inclusivos, evaluación de barreras y miradas emocionales.',
    tono: 'verde',
    prioridad: '0.7',
    ogImagen: 'proa-espacios.jpg',
    migas: migaBase.concat([{ texto: 'PROA+' }]),
    h1: 'PROA+',
    entradilla: 'El Colegio San Martín pertenece a la red de Centros PROA+. Se trata de un programa que tiene como finalidad apoyar el éxito educativo del alumnado, especialmente del vulnerable, mediante la aportación de recursos y formación.',
    cuerpo: `
<section class="seccion seccion--papel">
  <div class="envoltura">
    <div class="seccion__cabeza revelar">
      <h2 class="seccion__titulo">Gracias a este programa, estamos realizando las siguientes actividades</h2>
    </div>

    ${L.bento([
      { tam: 'dos', html: '<h3>1. Refuerzo educativo</h3><p>Los alumnos que lo necesitan reciben de manera gratuita unas clases de refuerzo, que les permita seguir las clases sin tantas dificultades.</p>' },
      { tam: 'dos', html: '<h3>2. Espacios inclusivos</h3><p>Señalética accesible con pictogramas, mejora de la luminosidad, patios inclusivos y rincón de la calma.</p>' },
      { tam: 'dos', html: '<h3>3. Evaluación de barreras</h3><p>Detección de las barreras que dificultan el aprendizaje y la participación del alumnado.</p>' },
      { tam: 'dos', html: '<h3>4. Miradas emocionales</h3><p>Trabajo específico sobre el acompañamiento emocional del alumnado.</p>' },
    ])}
  </div>
</section>

<section class="seccion seccion--cal">
  <div class="envoltura">
    <div class="seccion__cabeza revelar">
      <h2 class="seccion__titulo">Objetivos publicados de cada línea</h2>
      <p class="seccion__entrada">Fichas que el propio centro publica con los objetivos principales de cada actuación.</p>
    </div>
    ${L.galeria([
      { src: 'assets/img/proa-refuerzo.jpg', alt: 'Ficha del centro con los objetivos principales de la línea de refuerzo educativo del programa PROA+.' },
      { src: 'assets/img/proa-espacios.jpg', alt: 'Ficha del centro con los objetivos principales de la línea de espacios inclusivos del programa PROA+.' },
      { src: 'assets/img/proa-barreras.jpg', alt: 'Ficha del centro con los objetivos principales de la línea de evaluación de barreras del programa PROA+.' },
      { src: 'assets/img/proa-miradas.jpg', alt: 'Ficha del centro con los objetivos principales de la línea de miradas emocionales del programa PROA+.' },
    ])}
  </div>
</section>

<section class="seccion seccion--papel">
  <div class="envoltura">
    <div class="revelar" style="text-align: center">
      <figure class="figura">
        ${imagen('assets/img/logos-institucionales.jpg', 'Logotipos de PROA+, Cofinanciado por la Unión Europea, Fondos Europeos, Comunidad de Madrid y Ministerio de Educación, Formación Profesional y Deportes.')}
        <figcaption>Entidades que financian y respaldan el programa PROA+ en el centro.</figcaption>
      </figure>
    </div>
  </div>
</section>
`,
  };

  return [indice, ingles, abn, tecnologia, planDigital, proa];
};
