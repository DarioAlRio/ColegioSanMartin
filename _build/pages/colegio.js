/* Sección «El colegio»: identidad, normas de convivencia y política de calidad.
   Los textos normativos se reproducen literalmente desde el sitio original. */
'use strict';

const { SITE } = require('../nav');
const L = require('../lib');
const { icono, imagen, esc, boton } = L;

module.exports = function (ctx) {
  const raiz = ctx.raiz;

  /* ---------------------------------------------------------------- colegio */
  const colegio = {
    url: 'colegio.html',
    familia: 'colegio.html',
    titulo: 'El colegio · Identidad, propuesta y metodología · Colegio San Martín',
    descripcion: 'Misión, visión y valores del Colegio San Martín, su propuesta de educación integral, su metodología didáctica y la comunidad educativa que lo sostiene.',
    tono: 'marino',
    prioridad: '0.8',
    ogImagen: 'aula-halloween.jpg',
    migas: [{ texto: 'Inicio', url: 'index.html' }, { texto: 'El colegio' }],
    h1: 'Un proyecto coherente, sostenido durante más de sesenta años',
    entradilla: 'El Colegio San Martín es un centro privado de educación Infantil, Primaria y Secundaria, concertado en los niveles de segundo ciclo de Ed. Infantil, Ed. Primaria y E.S.O.',
    cuerpo: `
<section class="seccion seccion--papel">
  <div class="envoltura">
    <div class="dos-columnas dos-columnas--texto-ancho">
      <div class="prosa revelar" id="identidad">
        <p class="seccion__kicker">Identidad</p>
        <h2>Misión</h2>
        <p>Ofrecer un modelo educativo de calidad, en el que toda la comunidad está volcada en acompañar al alumnado en su proceso de aprendizaje. Para que éste desarrolle libre e íntegramente sus capacidades, en un ambiente abierto a la innovación, que le permita alcanzar el éxito educativo y facilite su integración en el mercado laboral, como parte de un compromiso social. Atendiendo a la diversidad de los alumnos y ofreciendo una educación inclusiva.</p>

        <h2>Visión</h2>
        <p>Buscamos ser un centro referente en la zona por su calidad académica, que está en constante proceso de mejora y en el que se incentiva la participación de todos. Queremos generar un ambiente de trabajo positivo, en el que se incentive la creatividad, el esfuerzo y la cooperación, promoviendo una escuela inclusiva y ofreciendo unos objetivos y contenidos al alcance de todos, adaptados a la diversidad de nuestros alumnos.</p>
        <p>Deseamos dirigir nuestro proyecto a todos los alumnos, dándole a cada uno lo que necesita. Aspiramos no solo a mejorar los resultados académicos del alumnado, sino a formar a personas con capacidad crítica, que se sientan libres y únicas, fomentando su autonomía y buscando integrarlos en la sociedad como seres comprometidos, constantes y trabajadores. Para ello el alumnado debe ser el centro de nuestra acción educativa y el protagonista de su propio proceso de aprendizaje. Pretendemos involucrar a las familias, de manera que participen en la labor educativa del centro de una manera activa.</p>
      </div>

      <div class="revelar">
        <figure class="figura figura--recorte">
          ${imagen('assets/img/desayuno-saludable.jpg', 'Alumnado de Primaria durante una actividad de desayuno saludable en el aula.')}
          <figcaption>Actividad de desayuno saludable con el alumnado del centro.</figcaption>
        </figure>
      </div>
    </div>
  </div>
</section>

<section class="seccion seccion--hueso">
  <div class="envoltura">
    <div class="seccion__cabeza revelar">
      <p class="seccion__kicker">Valores</p>
      <h2 class="seccion__titulo">Lo que el centro potencia</h2>
      <p class="seccion__entrada">Potenciamos todos los valores morales y culturales, principalmente aquellos que promueven la participación, el respeto, la socialización y el esfuerzo.</p>
    </div>

    <ul class="descargas revelar" style="list-style: none">
      ${[
        'Mejora continua',
        'Cercanía e implicación de todos',
        'Respeto a la dignidad humana y a la diversidad, sin discriminación por causa alguna',
        'Educación inclusiva',
        'Participación',
        'Adquisición de hábitos saludables',
        'Compromiso social y familiar',
        'Autonomía',
        'Cooperación y trabajo en equipo, de todos: profesores, alumnos, familias y personal no docente',
        'Lealtad',
        'Constancia',
        'Sinceridad',
        'Generosidad',
        'Justicia',
      ].map(function (v) {
        return `<li><span class="descarga" style="cursor: default">${icono('escudo', 'descarga__tipo')}<span class="descarga__nombre">${esc(v)}</span></span></li>`;
      }).join('')}
    </ul>
  </div>
</section>

<section class="seccion seccion--papel" id="propuesta">
  <div class="envoltura">
    <div class="dos-columnas">
      <div class="prosa revelar">
        <p class="seccion__kicker">Propuesta</p>
        <h2>Una propuesta de educación integral</h2>
        <p>Pretendemos que el alumno llegue a ser dueño de sí mismo, libre y responsable, con actitudes que desarrollen su personalidad.</p>
        <p>Los educadores asumen el compromiso personal y colectivo en pro de la promoción de los derechos fundamentales del hombre. Procurando crear entre todos un clima educativo basado en una jerarquía abierta de valores que dé sentido a su vida.</p>
        <p style="margin-top: var(--e-5)">
          ${L.descarga('Proyecto Educativo del Centro', 'assets/docs/PROYECTO_EDUCATIVO_DEL_CENTRO.pdf', raiz)}
        </p>
      </div>

      <div class="prosa revelar" id="metodologia">
        <p class="seccion__kicker">Metodología</p>
        <h2>Nuestra metodología</h2>
        <p>Adaptamos una metodología didáctica abierta y flexible y promovemos una educación personalizada que respeta a la persona de cada educando sin olvidar la importancia del trabajo en equipo.</p>
        <p>Estimulamos una metodología activa y ponemos la tecnología al servicio de la educación.</p>
        <p>Educamos para la creatividad, la capacidad de expresión y el sentido crítico al tiempo que potenciamos el uso formativo del tiempo libre.</p>
        <p>Tendemos hacia una autorrealización del educando para que sea capaz de tomar decisiones y asumir responsabilidades y riesgos ante la sociedad, ya que educamos para el diálogo.</p>
      </div>
    </div>
  </div>
</section>

<section class="seccion seccion--marino" id="comunidad">
  <div class="envoltura">
    <div class="dos-columnas dos-columnas--texto-ancho">
      <div class="prosa revelar">
        <p class="seccion__kicker">Comunidad educativa</p>
        <h2>La responsabilidad es compartida</h2>
        <p>La Comunidad educativa es la integración armónica de todos los estamentos que intervienen en la vida del Colegio. La fuerza integradora es la responsabilidad compartida en la propuesta y la realización de un proyecto educativo coherente. En el que el educando es el protagonista activo de su educación; los padres primeros educadores y corresponsables del centro; los profesores animadores y orientadores de la educación y la titularidad, garante del proyecto educativo.</p>
      </div>
      <div class="revelar">
        ${L.datos([
          { k: 'El educando', v: 'Protagonista activo de su educación' },
          { k: 'Los padres', v: 'Primeros educadores y corresponsables del centro' },
          { k: 'Los profesores', v: 'Animadores y orientadores de la educación' },
          { k: 'La titularidad', v: 'Garante del proyecto educativo' },
        ])}
      </div>
    </div>
  </div>
</section>

<section class="seccion seccion--cal">
  <div class="envoltura">
    <div class="seccion__cabeza revelar">
      <p class="seccion__kicker">Documentos del centro</p>
      <h2 class="seccion__titulo">Lo que el colegio publica</h2>
    </div>
    <ul class="descargas revelar">
      <li>${L.descarga('Proyecto Educativo del Centro', 'assets/docs/PROYECTO_EDUCATIVO_DEL_CENTRO.pdf', raiz)}</li>
      <li>${L.descarga('Plan de Convivencia', 'assets/docs/PLAN_CONVIVENCIA.pdf', raiz)}</li>
      <li>${L.descarga('Política de calidad', 'assets/docs/POLITICA_DE_CALIDAD.pdf', raiz)}</li>
      <li>${L.descarga('Política de protección de datos', 'assets/docs/POLITICA_PROTECCION_DE_DATOS.pdf', raiz)}</li>
    </ul>
  </div>
</section>
`,
  };

  /* ----------------------------------------------------------- convivencia */
  const convivencia = {
    url: 'convivencia.html',
    familia: 'colegio.html',
    titulo: 'Plan Incluyo · Normas de convivencia · Colegio San Martín',
    descripcion: 'Normas de convivencia del Colegio San Martín recogidas en el Plan Incluyo: deberes del alumnado, correcciones, comisión de convivencia, asistencia y puntualidad.',
    tono: 'verde',
    prioridad: '0.6',
    migas: [{ texto: 'Inicio', url: 'index.html' }, { texto: 'El colegio', url: 'colegio.html' }, { texto: 'Plan Incluyo' }],
    h1: 'Plan Incluyo',
    entradilla: 'Las normas de convivencia del Centro, recogidas en el PLAN INCLUYO, concretan los deberes de los alumnos y establecen las correcciones que corresponden.',
    cuerpo: `
<section class="seccion seccion--papel">
  <div class="envoltura">
    <div class="prosa revelar">
      <h2>Normas de convivencia</h2>
      <p>Las normas de convivencia del Centro, recogidas en el PLAN INCLUYO, concretan los deberes de los alumnos y establecen las correcciones que corresponden.</p>
      <p>Las correcciones que hayan de aplicarse por el incumplimiento de las normas de convivencia habrán de tener un carácter educativo y recuperador. Asimismo, deberán garantizar el respeto a los derechos del resto de los alumnos.</p>
      <p>Los alumnos que causen daño a las instalaciones del Centro o a su material quedan obligados a reparar el daño causado. Igualmente, los alumnos que sustrajeran bienes deberán sustituirlos.</p>
      <p>La falta a clase de modo reiterado puede provocar la imposibilidad de la aplicación correcta en los criterios generales de evaluación.</p>
      <p>Las conductas contrarias a las normas de convivencia del Centro pueden ser corregidas con distintos medios: amonestaciones, realización de trabajaos en horario no lectivo, suspensión de derecho de asistencia a actividades, etc.</p>
      <p>Serán competentes para decidir las correcciones: los profesores del alumno, el tutor, el Director, el Consejo Escolar.</p>

      <h2>Comisión de convivencia</h2>
      <p>En el Colegio será la Comisión de Disciplina la responsable de velar por el cumplimiento de las normas establecidas. Asimismo será competente para la resolución de conflictos y la imposición de sanciones en material de disciplina. El equipo directivo del Colegio se reserva la competencia para imponer sanciones muy graves, si hubiera necesidad.</p>

      <h2>Asistencia y puntualidad</h2>
      <p>Todo grupo de personas, para convivir en paz y armonía, necesita unas normas para que esa convivencia sea auténtica y fructífera. Por lo que, para que nuestro curso sea tranquilo y provechoso para todos, respetaremos las normas de convivencia. Estas normas no pretenden prohibir ni perjudicar a nadie, sino todo lo contrario: ayudar a todos y en especial a los más débiles, a sacar el mayor provecho de su trabajo.</p>
      <ul>
        <li>Los alumnos de todas las enseñanzas deberán asistir debidamente uniformados y a clase de Educación Física con la vestimenta reglamentaria.</li>
        <li>La puntualidad a las clases y actividades extraescolares es obligatoria. El incumplimiento de este precepto será sancionado de acuerdo con la legislación vigente.</li>
        <li>Se deben justificar las faltas de asistencia y puntualidad (si es posible, por adelantado), mediante nota escrita de los padres en la agenda.</li>
        <li>Quienes falten (con o sin justificación) de 4 a 6 horas a una asignatura durante la misma evaluación, pueden perder el derecho a ser calificados positivamente. Los casos especiales serán estudiados por el profesor o por la Junta de evaluación.</li>
        <li>La asistencia a las pruebas de evaluación es obligatoria. Quienes (con justificación o sin ella) no las realicen, pierden la oportunidad y deben presentarse a la prueba de recuperación correspondiente. Los casos especiales serán resueltos por el Director, oídos el tutor y el profesor correspondiente.</li>
        <li>Una vez finalizada la clase, los alumnos no deben permanecer en el aula sin estar acompañados o autorizados por el profesor.</li>
        <li>Todos los alumnos del Colegio San Martín participarán en todas las actividades programadas por el Centro incluidas dentro del horario escolar.</li>
        <li>Si algún alumno por circunstancias extraordinarias no pudiera asistir a clase, necesitará autorización escrita de sus padres o tutores, firmada por el Director, o en su defecto por el tutor.</li>
      </ul>
    </div>

    <div style="margin-top: var(--e-7); max-width: var(--ancho-texto)" class="revelar">
      ${L.descarga('Plan de Convivencia completo', 'assets/docs/PLAN_CONVIVENCIA.pdf', raiz)}
    </div>
  </div>
</section>
`,
  };

  /* --------------------------------------------------------------- calidad */
  const calidad = {
    url: 'calidad.html',
    familia: 'colegio.html',
    titulo: 'Política de calidad · Colegio San Martín',
    descripcion: 'Política de calidad de Martín Macías, S.A., titularidad del Colegio San Martín, y principios en los que se basa.',
    tono: 'tinta',
    prioridad: '0.4',
    migas: [{ texto: 'Inicio', url: 'index.html' }, { texto: 'El colegio', url: 'colegio.html' }, { texto: 'Política de calidad' }],
    h1: 'Política de calidad',
    entradilla: 'Política de calidad de MARTIN MACIAS SA, titularidad del centro. Se reproduce literalmente.',
    cuerpo: `
<section class="seccion seccion--papel">
  <div class="envoltura">
    <div class="prosa revelar">
      <h2>Política de calidad de MARTIN MACIAS SA</h2>
      <p>MARTIN MACIAS SA define la presente Política de Calidad, para el desarrollo de las siguientes actividades:</p>
      <ul>
        <li>Formación Profesional para el Empleo.</li>
        <li>Formación subvencionada.</li>
        <li>Programas de Formación y Empleo.</li>
        <li>Talleres de empleo y Escuelas taller.</li>
      </ul>
      <p>Queriendo demostrar la importancia de la calidad en nuestra delegación, la presente Política de Calidad establece la Política de Calidad que se basa en los siguientes principios:</p>
      <ul>
        <li>Asegurar la satisfacción total de nuestros clientes y usuarios.</li>
        <li>Reducir nuestros errores, en especial aquellos que incidan de forma especial en nuestros clientes y usuarios.</li>
        <li>Ser un referente de mejora en el sector.</li>
      </ul>
      <p>Para lograr estos objetivos es necesario:</p>
      <ul>
        <li>Existencia de un mayor compromiso con los trabajadores que impulse la Política de Calidad establecida.</li>
        <li>Definir y cumplir un correcto control operacional.</li>
        <li>Cumplir con los requisitos y una mejora diaria de la eficacia del sistema de Gestión de la Calidad.</li>
      </ul>
    </div>

    <div style="margin-top: var(--e-7); max-width: var(--ancho-texto)" class="revelar">
      ${L.descarga('Política de calidad (documento firmado)', 'assets/docs/POLITICA_DE_CALIDAD.pdf', raiz)}
    </div>
  </div>
</section>
`,
  };

  return [colegio, convivencia, calidad];
};
