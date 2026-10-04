// Actividades de team building para empresas. Cada entrada genera una página: /team-building-<slug>/
// Para añadir una actividad nueva: añade un objeto aquí y compila; no hace falta crear ningún archivo.

export interface Actividad {
  slug: string;
  nombre: string;          // nombre corto para menús y tarjetas
  title: string;           // <title> (máx. 62 caracteres)
  description: string;     // meta description (70-160)
  h1: string;
  intro: string;
  resumen: string;         // texto de la tarjeta
  img?: { src: string; w: number; h: number; alt: string };
  mascota?: string;        // pose de /images/mascota/<pose>.webp si no hay foto
  icono: string;
  ejemplos: { titulo: string; texto: string }[];
  secciones: { h: string; p?: string[]; ul?: string[]; after?: string[] }[];
  faqs: { q: string; a: string }[];
}

export const ACTIVIDADES: Actividad[] = [
  {
    slug: 'ginkanas-y-retos',
    nombre: 'Ginkanas y juegos de retos',
    title: 'Ginkanas y juegos de retos para empresas en Galicia',
    description: 'Ginkanas, juegos de retos y misión de investigación para empresas en Galicia: equipos, pruebas y puntos con monitor. De 6 a 200 personas.',
    h1: 'Ginkanas y juegos de retos para empresas',
    intro: 'Equipos, pruebas, pistas y puntos. Es el formato más completo y el más fácil de adaptar al objetivo, al tamaño del grupo y a la ciudad.',
    resumen: 'Pruebas por equipos con puntos y ranking, por la ciudad o en un recinto.',
    img: { src: '/images/fotos/galeria-mapa.webp', w: 720, h: 480, alt: 'Equipo consultando un mapa durante una ginkana de empresa' },
    icono: 'flag',
    ejemplos: [
      { titulo: 'Ginkana por la ciudad', texto: 'Mapa, pistas y pruebas por el casco histórico. Los equipos compiten por puntos.' },
      { titulo: 'Misión de investigación', texto: 'Un caso con sospechosos y pistas repartidas. Gana quien comparte la información.' },
      { titulo: 'Retos con objetos y fotos', texto: 'Listas de retos para resolver en un tiempo: fotos, enigmas y pequeñas misiones.' },
      { titulo: 'Competición con ranking', texto: 'Rondas de pruebas con marcador en vivo y prueba final.' },
      { titulo: 'Ruta de leyendas', texto: 'Cada parada cuenta una historia local y se acompaña de una prueba.' },
      { titulo: 'Juego a medida', texto: 'Pruebas sobre vuestra empresa, vuestros valores o vuestro producto.' },
    ],
    secciones: [
      { h: 'Por qué una ginkana funciona en un equipo de trabajo', p: [
        'Una ginkana obliga a repartir tareas, compartir información y decidir con poco tiempo. Todo eso ocurre jugando, sin sentarse a escuchar. Por eso funciona con equipos mixtos, con gente nueva y con departamentos que casi no hablan entre sí.',
        'El monitor explica el juego en un briefing de 10-15 minutos, reparte puntos y se asegura de que nadie se quede fuera.'] },
      { h: 'Cómo se organiza', ul: [
        '<strong>Objetivo.</strong> Integrar, celebrar o mejorar la comunicación: cambia el tipo de pruebas.',
        '<strong>Equipos.</strong> Se mezclan departamentos y niveles; 6-8 personas por equipo es lo ideal.',
        '<strong>Duración.</strong> Unas 2 horas de juego; con comida o cierre posterior, de 3 a 4 horas.',
        '<strong>Tamaño.</strong> De 6 a 200 personas, con varios equipos en paralelo en grupos grandes.'] },
      { h: 'Formatos concretos', p: ['Mira nuestras ginkanas: <a href="/experiencias/ginkana-cluedo/">Cluedo</a> (investigación), <a href="/experiencias/ginkana-supervivientes/">Supervivientes</a> (competición) y <a href="/experiencias/ginkana-lendas/">Lendas</a> (leyendas y cultura local).'] },
    ],
    faqs: [
      { q: '¿Cuánto dura una ginkana de empresa?', a: 'Unas 2 horas de juego. Con comida o cierre posterior, la actividad completa suele ser de 3 a 4 horas.' },
      { q: '¿Para cuántas personas se puede hacer?', a: 'De 6 a 200 personas. En grupos grandes se organizan varios equipos en paralelo.' },
      { q: '¿Hace falta ser deportista?', a: 'No. Hay pruebas de ingenio, de equipo y de creatividad. Las físicas son opcionales y adaptables.' },
    ],
  },
  {
    slug: 'construccion',
    nombre: 'Construcción en equipo',
    title: 'Team building de construcción en equipo para empresas',
    description: 'Team building de construcción para empresas en Galicia: el equipo construye algo juntos con materiales y un objetivo común. Grupos de 6 a 200.',
    h1: 'Team building de construcción en equipo',
    intro: 'El equipo construye algo tangible con materiales, tiempo limitado y un objetivo común. Se ve enseguida quién planifica, quién ejecuta y quién ordena.',
    resumen: 'Construir algo juntos con materiales y un objetivo común. Muy visual.',
    mascota: 'piensa',
    icono: 'building',
    ejemplos: [
      { titulo: 'Puentes y estructuras', texto: 'Cada equipo diseña y construye una estructura que debe aguantar una prueba.' },
      { titulo: 'Torres colaborativas', texto: 'Construir la torre más alta con materiales limitados y poco tiempo.' },
      { titulo: 'Construir un vehículo', texto: 'Diseñar un vehículo sencillo y competir en una pequeña carrera.' },
      { titulo: 'Objetivo común', texto: 'Cada equipo construye una pieza y entre todos se ensambla el resultado final.' },
      { titulo: 'Reto con presupuesto', texto: 'Los equipos "compran" materiales con un presupuesto y deciden qué construir.' },
      { titulo: 'Solución a medida', texto: 'Un reto de construcción relacionado con vuestro producto o sector.' },
    ],
    secciones: [
      { h: 'Qué aporta a un equipo', p: [
        'Construir obliga a planificar, repartir tareas y probar. Los errores se ven y se corrigen sobre la marcha, y el resultado es algo que se puede tocar y comparar con el del resto.',
        'Es una actividad muy valorada por equipos técnicos, de producción y de proyecto, porque conecta con su forma de trabajar.'] },
      { h: 'Cómo funciona', ul: [
        '<strong>Briefing.</strong> El monitor explica el reto, los materiales y el tiempo.',
        '<strong>Diseño y construcción.</strong> Cada equipo planifica y construye.',
        '<strong>Prueba.</strong> Se comprueba qué aguanta, qué llega más lejos o qué cumple el objetivo.',
        '<strong>Puesta en común.</strong> Se comenta qué funcionó y qué se haría distinto.'] },
      { h: 'Combinar con otras actividades', p: ['Funciona muy bien combinada con una <a href="/team-building-ginkanas-y-retos/">ginkana</a> o con una jornada <a href="/team-building-indoor/">indoor</a>. Se puede hacer en una sala, en una finca o en un salón de eventos.'] },
    ],
    faqs: [
      { q: '¿Qué espacio necesita?', a: 'Una sala amplia o un espacio exterior con mesas. Se adapta a oficinas, hoteles, fincas y salones de eventos.' },
      { q: '¿Cuánto dura?', a: 'Entre 1,5 y 3 horas según el reto y el tamaño del grupo.' },
      { q: '¿Hace falta ser manitas?', a: 'No. El reto está pensado para que todos aporten, sin necesidad de experiencia previa.' },
    ],
  },
  {
    slug: 'indoor',
    nombre: 'Jornadas indoor',
    title: 'Jornadas indoor de team building para empresas en Galicia',
    description: 'Actividades de team building indoor para empresas en Galicia: escape room, juegos de investigación y retos en sala. Para oficina, hotel o salón.',
    h1: 'Jornadas indoor de team building',
    intro: 'Actividades en espacio cubierto, sin depender del tiempo: escape room, juegos de investigación, retos en sala y concursos por equipos.',
    resumen: 'Escape room, investigación y retos en sala. Sin depender del tiempo.',
    img: { src: '/images/fotos/galeria-investigacion.webp', w: 720, h: 480, alt: 'Grupo disfrazado resolviendo una investigación en equipo' },
    icono: 'key',
    ejemplos: [
      { titulo: 'Escape room', texto: 'En las salas temáticas de cada ciudad, o móvil en vuestra oficina, un hotel o un salón.' },
      { titulo: 'Investigación en sala', texto: 'Un caso con pistas repartidas por la sala. Los equipos comparten información para resolverlo.' },
      { titulo: 'Concurso por equipos', texto: 'Preguntas, pruebas y rondas de habilidad con marcador en vivo.' },
      { titulo: 'Retos de construcción', texto: 'Construir algo entre todos con materiales y un objetivo común.' },
      { titulo: 'Juegos de mesa a gran escala', texto: 'Pruebas por turnos y por equipos con material grande, para jugar de pie.' },
      { titulo: 'Juego a medida', texto: 'Un juego pensado para vuestro evento, en el espacio que tengáis.' },
    ],
    secciones: [
      { h: 'Cuándo elegir una jornada indoor', ul: [
        'Cuando la jornada es en invierno o la previsión de lluvia es alta.',
        'Cuando el evento es en un hotel, un salón o la propia oficina.',
        'Cuando el equipo prefiere una actividad más tranquila y de pensar.'] },
      { h: 'Escape room: salas de ciudad o móvil', p: ['En cada ciudad trabajamos con los escape rooms temáticos que ya existen: grupos desde 6 personas (algunas salas piden 8). Para grupos grandes, el <a href="/escape-room/">escape room móvil</a> admite hasta 100 personas repartidas en equipos.'] },
      { h: 'Qué necesitamos del espacio', ul: [
        'Una sala con espacio para mover mesas y sillas.',
        'Un punto de corriente y, si hay pantalla, mejor.',
        'Accesos para montar el material con antelación.'] },
    ],
    faqs: [
      { q: '¿Se puede hacer en nuestra oficina?', a: 'Sí, siempre que haya una sala con espacio suficiente. Lo revisamos al preparar la propuesta.' },
      { q: '¿Cuánto dura una jornada indoor?', a: 'Entre 1,5 y 4 horas según las actividades que se combinen.' },
      { q: '¿Para cuántas personas?', a: 'De 6 a 200 personas, repartidas en equipos.' },
    ],
  },
  {
    slug: 'outdoor',
    nombre: 'Actividades outdoor',
    title: 'Actividades outdoor de team building para empresas',
    description: 'Team building outdoor para empresas en Galicia: juegos de equipo en playa, parque o finca. Tiro de cuerda, esquís de equipo y retos. De 6 a 200.',
    h1: 'Actividades outdoor de team building',
    intro: 'Juegos de equipo al aire libre, en playa, parque o finca. Movimiento, coordinación y mucha risa, con monitores que organizan las rondas.',
    resumen: 'Playa, parque o finca: juegos de equipo con movimiento y risas.',
    img: { src: '/images/fotos/juego-cuerda-empresa.webp', w: 640, h: 480, alt: 'Compañeros de empresa tirando juntos de una cuerda' },
    icono: 'sun',
    ejemplos: [
      { titulo: 'Tiro de cuerda', texto: 'El clásico por equipos: fuerza, coordinación y ánimo desde el lateral.' },
      { titulo: 'Esquís de equipo', texto: 'Todos sobre las mismas tablas avanzando al mismo ritmo.' },
      { titulo: 'Reto de los cubos', texto: 'Equilibrio y comunicación con un cubo en la cabeza.' },
      { titulo: 'Batalla de agua', texto: 'Puntería y estrategia con pistolas de agua.' },
      { titulo: 'Carrera de sacos y relevos', texto: 'Velocidad, equilibrio y mucho vacile sano.' },
      { titulo: 'Olimpiada de empresa', texto: 'Varias pruebas rotativas con ranking final y entrega de premios.' },
    ],
    secciones: [
      { h: 'Dónde se hace', p: ['En playas, parques, praderas y fincas de toda Galicia. Elegimos el espacio según el tamaño del grupo, la fecha y los accesos. También se combina con una comida o una barbacoa al terminar.'] },
      { h: 'Cómo se organiza para grupos grandes', ul: [
        'Varios juegos en paralelo, con rotación de equipos.',
        'Marcador común y entrega de premios al final.',
        'Monitores que explican, arbitran y cuidan los tiempos.'] },
      { h: 'Consejos prácticos', ul: [
        'Calzado cómodo y ropa que pueda mojarse.',
        'Un plan B para lluvia fuerte: se pospone sin coste.',
        'Agua, protección solar y algo de picar para después.'] },
    ],
    faqs: [
      { q: '¿Qué pasa si llueve?', a: 'Si la lluvia es fuerte se pospone sin coste. Con lluvia fina, el grupo decide si se juega.' },
      { q: '¿Hace falta estar en forma?', a: 'No. Los juegos se adaptan y hay pruebas de ingenio y de equipo, no solo de fuerza.' },
      { q: '¿Para cuántas personas?', a: 'De 6 a 200 personas, con varios juegos en paralelo en grupos grandes.' },
    ],
  },
  {
    slug: 'humor-amarillo',
    nombre: 'Juegos tipo Humor Amarillo',
    title: 'Juegos tipo Humor Amarillo para empresas: pruebas absurdas',
    description: 'Juegos tipo Humor Amarillo para empresas en Galicia: pruebas absurdas, hinchables y carreras de obstáculos por equipos. Risas garantizadas.',
    h1: 'Juegos tipo Humor Amarillo para empresas',
    intro: 'Pruebas absurdas, hinchables, carreras de obstáculos y retos por equipos. Es el formato para soltar tensión y reírse sin parar.',
    resumen: 'Pruebas absurdas, hinchables y obstáculos por equipos. Risas aseguradas.',
    img: { src: '/images/fotos/juego-esquis.webp', w: 640, h: 480, alt: 'Equipos jugando en un recinto con hinchables' },
    icono: 'bolt',
    ejemplos: [
      { titulo: 'Carreras de obstáculos', texto: 'Recorridos con hinchables y obstáculos, por equipos y contra el reloj.' },
      { titulo: 'Pruebas absurdas', texto: 'Retos tan ridículos que nadie puede tomarse en serio. Por eso funcionan.' },
      { titulo: 'Esquís y tablas de equipo', texto: 'Coordinación colectiva en la que todos acaban riendo.' },
      { titulo: 'Juegos de equilibrio', texto: 'Equilibrio, caídas controladas y muchos ánimos.' },
      { titulo: 'Retos con agua', texto: 'Pruebas con agua para los días de calor.' },
      { titulo: 'Final por equipos', texto: 'Una prueba final en la que se decide el ranking de la jornada.' },
    ],
    secciones: [
      { h: 'Para qué equipos funciona', p: ['Para equipos que necesitan desconectar: cierres de temporada, eventos de verano, jornadas de integración y celebraciones. Funciona muy bien con equipos grandes, porque se puede jugar en paralelo y hay sitio para todos.'] },
      { h: 'Cómo se organiza', ul: [
        'Estaciones de juego con rotación por equipos.',
        'Monitores en cada prueba, con puntuación en vivo.',
        'Premios y foto de grupo al final.'] },
      { h: 'Combinarlo', p: ['Se combina con una <a href="/team-building-ginkanas-y-retos/">ginkana</a> por la mañana y una comida al aire libre, o con actividades <a href="/team-building-outdoor/">outdoor</a> de equipo.'] },
    ],
    faqs: [
      { q: '¿Qué espacio hace falta?', a: 'Una explanada, un parque o una finca. Los hinchables y estaciones se montan según el espacio.' },
      { q: '¿Es seguro?', a: 'Sí. Las pruebas se supervisan con monitores y se adaptan a las condiciones del grupo.' },
      { q: '¿Es apto para todo el mundo?', a: 'Sí. Se adapta el tipo de pruebas y siempre hay alternativas para quien no quiera participar en alguna.' },
    ],
  },
  {
    slug: 'aventura',
    nombre: 'Aventura: paintball, rafting, karts y barcos',
    title: 'Team building de aventura: paintball, rafting, karts, barcos',
    description: 'Team building de aventura para empresas en Galicia: paintball, rafting, karts, barcos y más. Organizamos la jornada completa para tu equipo.',
    h1: 'Team building de aventura para empresas',
    intro: 'Paintball, rafting, karts, barcos y otras actividades de aventura. Las organizamos de principio a fin, para que tú solo reúnas al equipo.',
    resumen: 'Paintball, rafting, karts, barcos y más. Jornadas completas de aventura.',
    mascota: 'karts',
    icono: 'compass',
    ejemplos: [
      { titulo: 'Paintball', texto: 'Estrategia y comunicación por equipos en un escenario controlado.' },
      { titulo: 'Rafting', texto: 'Remar juntos por el río: si no hay ritmo, no hay avance.' },
      { titulo: 'Karts', texto: 'Competición por equipos y carreras con tiempos y podio.' },
      { titulo: 'Barcos', texto: 'Jornadas en barco por la ría, con actividad en grupo.' },
      { titulo: 'Otras actividades de aventura', texto: 'Multiaventura y otras actividades según la zona y la época.' },
      { titulo: 'Jornada combinada', texto: 'Aventura por la mañana, juegos de equipo y comida después.' },
    ],
    secciones: [
      { h: 'Cómo trabajamos la aventura', p: [
        'Coordinamos la actividad con proveedores especializados de cada zona, y nos ocupamos de planificar la jornada, los horarios y la logística. Tú nos cuentas cuántos sois, el objetivo y la fecha; nosotros proponemos opciones.',
        'Si quieres una jornada completa, podemos combinar la aventura con una <a href="/team-building-ginkanas-y-retos/">ginkana</a> o con juegos de equipo y comida.'] },
      { h: 'Qué conviene tener claro', ul: [
        '<strong>Número de personas.</strong> Algunas actividades tienen límites por grupo.',
        '<strong>Fecha.</strong> Hay actividades que dependen de la época y de las condiciones.',
        '<strong>Perfil del equipo.</strong> Elegimos opciones adaptadas a la condición física del grupo.'] },
      { h: 'Eventos de día completo', p: ['Para jornadas completas, regatas y eventos muy grandes, trabajamos también con <a href="https://www.mileventosgalicia.com" rel="noopener">Mil Eventos Galicia</a>, nuestra otra web especializada en eventos de empresa.'] },
    ],
    faqs: [
      { q: '¿Qué actividades de aventura ofrecéis?', a: 'Paintball, rafting, karts, barcos y otras actividades de aventura. Se elige según la zona, la época y el perfil del equipo.' },
      { q: '¿Se hace en toda Galicia?', a: 'Sí, según la actividad y la zona. Os proponemos las opciones disponibles al preparar la propuesta.' },
      { q: '¿Está incluido el seguro?', a: 'Depende de la actividad y del proveedor. Te lo detallamos en la propuesta, antes de cerrar nada.' },
    ],
  },
];

export const getActividad = (slug: string) => ACTIVIDADES.find((a) => a.slug === slug);
