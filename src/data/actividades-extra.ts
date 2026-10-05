// Contenido ampliado de cada página de actividad (/team-building-<slug>/).
// "resumen" es la respuesta directa al inicio (útil para Google y para las IA);
// "tabla" se muestra tras los ejemplos; "secciones" y "faqs" se añaden a las de actividades.ts.

type Seccion = { h: string; p?: string[]; ul?: string[]; ol?: string[]; after?: string[] };
export interface ActividadExtra {
  resumen: string;
  tabla: { titulo: string; cabecera: string[]; filas: string[][] };
  secciones: Seccion[];
  faqs: { q: string; a: string }[];
}

export const EXTRA: Record<string, ActividadExtra> = {
  'ginkanas-y-retos': {
    resumen: 'Una ginkana de empresa es un juego por equipos en el que los participantes superan pruebas de ingenio, coordinación y creatividad para sumar puntos o resolver un misterio. Dura unas 2 horas, la guía un monitor y se adapta a grupos de 6 a 200 personas, por la ciudad, en un parque, en una finca o en un espacio cubierto.',
    tabla: {
      titulo: 'Qué formato elegir según el grupo',
      cabecera: ['Formato', 'Tamaño recomendado', 'Duración', 'Ideal para'],
      filas: [
        ['Ginkana por la ciudad', 'De 8 a 200 personas', 'Unas 2 horas', 'Integración y conocer la ciudad'],
        ['Misión de investigación', 'De 8 a 120 personas', 'Unas 2 horas', 'Comunicación y trabajo en equipo'],
        ['Competición con ranking', 'De 10 a 200 personas', '1,5 a 2,5 horas', 'Equipos comerciales y celebraciones'],
        ['Ruta de leyendas', 'De 6 a 60 personas', 'Unas 2 horas', 'Visitantes y convenciones'],
        ['Juego a medida', 'De 6 a 200 personas', 'A medida', 'Cultura de empresa y aniversarios'],
      ],
    },
    secciones: [
      { h: 'Para quién es una ginkana de empresa', ul: [
        '<strong>Equipos nuevos o con incorporaciones recientes</strong>, que necesitan conocerse fuera de la reunión.',
        '<strong>Departamentos que apenas se hablan</strong>: mezclar equipos crea conversaciones que no surgirían en la oficina.',
        '<strong>Empresas que celebran un cierre de año o un buen resultado</strong> y quieren algo más que una comida.',
        '<strong>Convenciones y jornadas con gente de fuera de Galicia</strong>, que quieren conocer la ciudad jugando.'] },
      { h: 'Cómo se organiza, paso a paso', ol: [
        '<strong>Nos contáis el objetivo</strong>, el número de personas, la ciudad y la fecha.',
        '<strong>Proponemos el formato</strong>: ginkana urbana, investigación, competición o juego a medida, con duración y presupuesto.',
        '<strong>Preparamos las pruebas</strong> y, si queréis, incluimos retos sobre vuestra empresa.',
        '<strong>El día de la actividad</strong>, el monitor recibe al grupo, explica el juego en 10-15 minutos y forma los equipos.',
        '<strong>Cierre</strong>: recuento de puntos, ranking y fotos; si hay comida después, el juego da conversación para toda la tarde.'] },
      { h: 'Qué incluye', ul: [
        'Diseño del juego y de las pruebas según vuestro objetivo.',
        'Monitores que explican, arbitran y llevan el ritmo.',
        'Material de juego: mapas, pistas, sobres y elementos de las pruebas.',
        'Sistema de puntuación y ranking final.'] },
      { h: 'Ciudades donde se juega', p: ['Organizamos ginkanas de empresa en toda Galicia, con especial presencia en <a href="/ginkanas-coruna/">A Coruña</a>, <a href="/ginkanas-vigo/">Vigo</a>, <a href="/ginkanas-santiago/">Santiago</a>, <a href="/ginkanas-pontevedra/">Pontevedra</a>, <a href="/ginkanas-ourense/">Ourense</a>, <a href="/ginkanas-lugo/">Lugo</a>, <a href="/ginkanas-ferrol/">Ferrol</a> y <a href="/ginkanas-sanxenxo/">Sanxenxo</a>. Los cascos históricos son el escenario ideal, pero también jugamos en parques, playas, fincas y hoteles.'] },
    ],
    faqs: [
      { q: '¿Se puede hacer una ginkana de empresa en un hotel o una finca?', a: 'Sí. Además de la versión urbana, adaptamos las pruebas al recinto: jardines, salones o espacios exteriores de un hotel o una finca.' },
      { q: '¿Se pueden incluir pruebas sobre nuestra empresa?', a: 'Sí. Podemos incluir preguntas y retos sobre vuestra historia, vuestros valores o vuestro producto.' },
      { q: '¿Qué pasa si llueve?', a: 'Con lluvia fuerte se pospone sin coste o se pasa a un formato de interior. Con lluvia fina, el grupo decide si se juega.' },
    ],
  },
  'construccion': {
    resumen: 'El team building de construcción consiste en que los equipos diseñen y construyan algo juntos (una estructura, una torre, un vehículo o una pieza de un objetivo común) con materiales limitados y tiempo acotado. Funciona en sala o en exterior, dura entre 1,5 y 3 horas y se adapta a grupos de 6 a 200 personas.',
    tabla: {
      titulo: 'Retos de construcción según el objetivo',
      cabecera: ['Reto', 'Qué se trabaja', 'Duración orientativa'],
      filas: [
        ['Puentes y estructuras', 'Planificación y prueba-error', '1,5 a 2 horas'],
        ['Torres colaborativas', 'Coordinación y reparto de tareas', '45 a 90 minutos'],
        ['Construir un vehículo', 'Creatividad y competición', '2 a 3 horas'],
        ['Objetivo común', 'Colaboración entre equipos', '2 a 3 horas'],
        ['Reto con presupuesto', 'Toma de decisiones y negociación', '1,5 a 2 horas'],
      ],
    },
    secciones: [
      { h: 'Para quién es', ul: [
        '<strong>Equipos técnicos, de producción, ingeniería o proyectos</strong>, porque conecta con su forma de trabajar.',
        '<strong>Equipos que necesitan coordinarse mejor</strong>: se ve enseguida quién planifica y quién ejecuta.',
        '<strong>Jornadas en sala o en hotel</strong>, cuando se busca una actividad práctica sin salir del recinto.'] },
      { h: 'El reto de "objetivo común"', p: [
        'Es uno de los formatos más potentes para empresas grandes: cada equipo construye una pieza distinta y, al final, todas deben encajar en un resultado común. Si un equipo no se coordina con los demás, la pieza no encaja. Es una forma muy visual de trabajar la colaboración entre departamentos.'] },
      { h: 'Qué incluye', ul: [
        'Diseño del reto según vuestro objetivo y el espacio.',
        'Materiales de construcción para todos los equipos.',
        'Monitores que explican, cronometran y prueban los resultados.',
        'Prueba final y puesta en común.'] },
      { h: 'Consejos para que funcione', ul: [
        '<strong>Equipos de 5 a 8 personas</strong>: con más, alguien se queda mirando.',
        '<strong>Mezclar perfiles</strong>: técnicos con comerciales, veteranos con recién llegados.',
        '<strong>Dejar tiempo para la puesta en común</strong>: diez minutos para comentar qué funcionó es donde está el aprendizaje.'] },
    ],
    faqs: [
      { q: '¿Para cuántas personas se puede hacer?', a: 'De 6 a 200 personas, repartidas en equipos de 5 a 8.' },
      { q: '¿Se puede combinar con otras actividades?', a: 'Sí. Combina bien con una ginkana, con juegos de equipo al aire libre o con una jornada indoor.' },
    ],
  },
  'indoor': {
    resumen: 'Una jornada indoor de team building reúne actividades en espacio cubierto, sin depender del tiempo: escape room, juegos de investigación en sala, concursos por equipos y retos de construcción. Se puede hacer en vuestra oficina, en un hotel o en un salón de eventos, para grupos de 6 a 200 personas, y suele durar entre 1,5 y 4 horas.',
    tabla: {
      titulo: 'Actividades indoor según el tamaño del grupo',
      cabecera: ['Tamaño del grupo', 'Formato recomendado', 'Duración'],
      filas: [
        ['6-12 personas', 'Escape room en sala temática de la ciudad', '60-90 minutos'],
        ['12-40 personas', 'Investigación en sala o concurso por equipos', '1,5-2 horas'],
        ['40-100 personas', 'Escape room móvil por equipos', '1,5-2 horas'],
        ['100-200 personas', 'Varias actividades en paralelo con rotación', '2-4 horas'],
      ],
    },
    secciones: [
      { h: 'Combinar con otras actividades', p: ['Una jornada indoor se puede completar con una <a href="/team-building-ginkanas-y-retos/">ginkana</a> por la ciudad si el tiempo acompaña, o con un reto de <a href="/team-building-construccion/">construcción en equipo</a> en la misma sala. Para convenciones de varios días, es habitual combinar una actividad indoor el primer día y una actividad <a href="/team-building-outdoor/">outdoor</a> o de <a href="/team-building-aventura/">aventura</a> el segundo. El <a href="/escape-room/">escape room</a> es el formato estrella para equipos pequeños y medianos.'] },
      { h: 'Ejemplo de jornada indoor de medio día', ol: [
        '<strong>Bienvenida y rompehielos (15 minutos)</strong>: un reto rápido por equipos para activar al grupo.',
        '<strong>Actividad principal (1,5 horas)</strong>: escape room móvil o juego de investigación.',
        '<strong>Pausa café</strong>.',
        '<strong>Reto de construcción o concurso (1 hora)</strong> con ranking común.',
        '<strong>Cierre (15 minutos)</strong>: resultados, premios y foto de grupo.'] },
      { h: 'Para quién es', ul: [
        'Empresas que celebran una convención o reunión anual en un hotel.',
        'Equipos que prefieren una actividad tranquila y de pensar.',
        'Jornadas en invierno o con previsión de lluvia.',
        'Eventos que necesitan un plan B garantizado.'] },
      { h: 'Qué incluye', ul: [
        'Diseño de la jornada según vuestro objetivo y el espacio.',
        'Montaje y desmontaje del material en vuestra sala.',
        'Monitores o game masters que dinamizan cada actividad.',
        'Puntuación, ranking y cierre.'] },
    ],
    faqs: [
      { q: '¿Cuánto espacio necesita una jornada indoor?', a: 'Depende del número de personas y de las actividades. Con una sala donde se puedan mover mesas y sillas es suficiente para la mayoría de formatos; lo revisamos al preparar la propuesta.' },
      { q: '¿Qué diferencia hay entre el escape room de sala y el móvil?', a: 'El de sala se juega en los escape rooms temáticos de cada ciudad, normalmente desde 6 personas (algunas salas piden 8). El móvil se monta en vuestro espacio y admite hasta 100 personas por equipos.' },
      { q: '¿Se puede combinar con una comida o una cena?', a: 'Sí. Muchas jornadas indoor se organizan antes de una comida o una cena de empresa en el mismo hotel o espacio.' },
    ],
  },
  'outdoor': {
    resumen: 'Las actividades outdoor de team building son juegos de equipo al aire libre, en playa, parque o finca: tiro de cuerda, esquís de equipo, retos de equilibrio, relevos, batalla de agua u olimpiadas de empresa con ranking. Duran entre 2 y 4 horas, las dinamizan monitores y funcionan para grupos de 6 a 200 personas.',
    tabla: {
      titulo: 'Juegos outdoor según el espacio',
      cabecera: ['Espacio', 'Juegos que mejor funcionan', 'Ideal para'],
      filas: [
        ['Playa', 'Relevos, tiro de cuerda, batalla de agua, equilibrio', 'Eventos de verano'],
        ['Parque o pradera', 'Esquís de equipo, cubos, competición por rondas', 'Grupos medianos y grandes'],
        ['Finca o recinto privado', 'Olimpiada de empresa con varias estaciones', 'Jornadas completas con comida'],
        ['Casco histórico', 'Ginkana y retos por la ciudad', 'Integración y visitantes'],
      ],
    },
    secciones: [
      { h: 'Combinar con otras actividades', p: ['Lo más habitual en una jornada de empresa es empezar con una <a href="/team-building-ginkanas-y-retos/">ginkana o un juego de retos</a> para mezclar equipos, seguir con una ronda de juegos outdoor con ranking común y cerrar con comida al aire libre. Si buscas algo con más risa, añade pruebas tipo <a href="/team-building-humor-amarillo/">Humor Amarillo</a>; si quieres un punto de adrenalina, combina con una actividad de <a href="/team-building-aventura/">aventura</a>. Para grupos que prefieren no depender del tiempo, la alternativa es una <a href="/team-building-indoor/">jornada indoor</a>.'] },
      { h: 'Cómo se organiza una olimpiada de empresa', ol: [
        '<strong>Equipos</strong> de 6 a 10 personas, mezclando departamentos.',
        '<strong>Estaciones de juego</strong> separadas, cada una con su monitor.',
        '<strong>Rotación</strong> cada 15-20 minutos, para que todos los equipos jueguen todas las pruebas.',
        '<strong>Marcador común</strong> visible durante toda la jornada.',
        '<strong>Prueba final</strong> y entrega de premios.'] },
      { h: 'Para quién es', ul: [
        'Empresas que celebran un cierre de temporada o un evento de verano.',
        'Grupos grandes que necesitan una actividad en la que todos participen a la vez.',
        'Equipos que pasan mucho tiempo sentados y necesitan moverse.'] },
      { h: 'Qué incluye', ul: [
        'Propuesta de espacio según la fecha y el tamaño del grupo.',
        'Material de todos los juegos.',
        'Monitores en cada estación.',
        'Marcador, ranking y entrega de premios.'] },
    ],
    faqs: [
      { q: '¿Qué necesitáis saber para preparar la propuesta?', a: 'El número de personas, la ciudad o zona, la fecha y si queréis comida después. Con eso proponemos espacio, juegos y presupuesto.' },
      { q: '¿En qué época del año se puede hacer?', a: 'Todo el año, aunque de primavera a otoño es más agradable. En invierno conviene tener un espacio cubierto cerca como plan B.' },
      { q: '¿Se puede terminar con una comida o una barbacoa?', a: 'Sí. Es una combinación muy habitual: juegos por la mañana y comida al aire libre después.' },
    ],
  },
  'humor-amarillo': {
    resumen: 'Los juegos tipo Humor Amarillo son pruebas absurdas y divertidas por equipos: carreras de obstáculos, hinchables, retos de equilibrio y pruebas con agua. Se juegan en una explanada, parque o finca, con monitores en cada prueba, y son ideales para soltar tensión y reírse en eventos de empresa de 10 a 200 personas.',
    tabla: {
      titulo: 'Tipos de pruebas y qué aportan',
      cabecera: ['Prueba', 'Qué aporta', 'Nivel físico'],
      filas: [
        ['Carreras de obstáculos', 'Adrenalina y ánimo de equipo', 'Medio'],
        ['Pruebas absurdas', 'Risas y desinhibición', 'Bajo'],
        ['Esquís y tablas de equipo', 'Coordinación', 'Bajo-medio'],
        ['Juegos de equilibrio', 'Concentración y humor', 'Bajo'],
        ['Retos con agua', 'Diversión en días de calor', 'Bajo-medio'],
      ],
    },
    secciones: [
      { h: 'Ideas para combinar', p: ['Los juegos tipo Humor Amarillo son el plato fuerte perfecto de una jornada de verano. Funcionan muy bien después de una <a href="/team-building-ginkanas-y-retos/">ginkana</a> por la mañana, o como cierre de una jornada de <a href="/team-building-outdoor/">actividades outdoor</a>. Con grupos muy grandes, se montan varias estaciones en paralelo para que todos los equipos jueguen a la vez y nadie espere. Al terminar, una comida o barbacoa al aire libre da tiempo para comentar las mejores caídas y las fotos del día.'] },
      { h: 'Por qué funciona en una empresa', p: [
        'Porque iguala a todo el mundo: nadie es experto en cruzar un obstáculo hinchable con un compañero de otro departamento. Las pruebas son tan ridículas que nadie se las toma en serio, y eso rompe barreras jerárquicas en pocos minutos. Además, deja muchas fotos y anécdotas para después.'] },
      { h: 'Cómo es una jornada', ol: [
        '<strong>Presentación</strong> de los equipos y explicación de las reglas.',
        '<strong>Rotación por estaciones</strong> de juego, cada una con su monitor y su puntuación.',
        '<strong>Prueba final</strong> en la que se decide el ranking.',
        '<strong>Entrega de premios</strong> y foto de grupo.'] },
      { h: 'Qué conviene saber', ul: [
        '<strong>Ropa y calzado</strong> que puedan mojarse o mancharse.',
        '<strong>Espacio</strong>: una explanada, un parque o una finca con acceso para montar el material.',
        '<strong>Alternativas</strong>: siempre hay papeles de árbitro, animador o fotógrafo para quien prefiera no jugar alguna prueba.'] },
    ],
    faqs: [
      { q: '¿Qué espacio hace falta?', a: 'Una explanada, un parque o una finca con acceso para montar el material. Lo proponemos según el tamaño del grupo y la zona.' },
      { q: '¿Cuánto dura una jornada de Humor Amarillo?', a: 'Entre 1,5 y 3 horas, según el número de equipos y de pruebas.' },
      { q: '¿Se puede hacer con pocas personas?', a: 'Funciona mejor a partir de 10 personas, para tener varios equipos que compitan entre sí.' },
    ],
  },
  'aventura': {
    resumen: 'El team building de aventura reúne actividades como paintball, rafting, karts o salidas en barco para equipos de empresa. Nos ocupamos de organizar la jornada completa, coordinando la actividad con proveedores especializados de cada zona de Galicia, y la podemos combinar con juegos de equipo, ginkanas o comida.',
    tabla: {
      titulo: 'Actividades de aventura y qué aportan',
      cabecera: ['Actividad', 'Qué se trabaja', 'Ideal para'],
      filas: [
        ['Paintball', 'Estrategia y comunicación por equipos', 'Equipos competitivos'],
        ['Rafting', 'Coordinación y ritmo común', 'Grupos con ganas de aventura'],
        ['Karts', 'Competición y adrenalina', 'Celebraciones y equipos comerciales'],
        ['Barcos', 'Convivencia y experiencia compartida', 'Jornadas relajadas y premium'],
        ['Jornada combinada', 'Varios objetivos en un día', 'Eventos de empresa completos'],
      ],
    },
    secciones: [
      { h: 'Cómo elegir la actividad de aventura', p: ['Para equipos competitivos, el paintball y los karts suelen ser los más pedidos. Para trabajar la coordinación, el rafting obliga a remar al mismo ritmo. Para una jornada más tranquila o un premio a un equipo, una salida en barco por la ría es una experiencia diferente. Si el grupo tiene perfiles muy distintos, lo mejor es una jornada combinada: aventura opcional para quien quiera y <a href="/team-building-outdoor/">juegos de equipo</a> o una <a href="/team-building-ginkanas-y-retos/">ginkana</a> para todos.'] },
      { h: 'Para quién es', ul: [
        'Equipos que buscan una experiencia distinta y con adrenalina.',
        'Premios e incentivos para equipos que han cumplido objetivos.',
        'Jornadas de empresa de día completo.'] },
      { h: 'Ejemplo de jornada de aventura', ol: [
        '<strong>Mañana</strong>: actividad de aventura (por ejemplo, rafting o karts) con el proveedor especializado.',
        '<strong>Comida</strong> en grupo.',
        '<strong>Tarde</strong>: juegos de equipo o una ginkana corta con ranking común.',
        '<strong>Cierre</strong> con entrega de premios.'] },
      { h: 'Qué hacemos nosotros', ul: [
        'Proponer las opciones disponibles según la zona, la época y el perfil del equipo.',
        'Coordinar horarios, desplazamientos y logística de la jornada.',
        'Combinar la aventura con juegos de equipo y monitores propios.'] },
    ],
    faqs: [
      { q: '¿Qué necesitáis saber para preparar la propuesta?', a: 'El número de personas, la zona de Galicia, la fecha aproximada, el perfil del grupo y si queréis combinarlo con comida u otras actividades.' },
      { q: '¿Hace falta experiencia previa?', a: 'No. Elegimos actividades adaptadas al nivel del grupo, y los proveedores especializados explican todo antes de empezar.' },
      { q: '¿Qué época del año es mejor?', a: 'Depende de la actividad: algunas, como el rafting o las salidas en barco, dependen de la temporada y de las condiciones. Os lo indicamos al preparar la propuesta.' },
    ],
  },
};
