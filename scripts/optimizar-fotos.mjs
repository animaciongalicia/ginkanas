// Genera las imágenes optimizadas de la web (WebP) a partir de las originales en fotos-originales/.
// Uso: node scripts/optimizar-fotos.mjs
// Para añadir una foto: copia el original a fotos-originales/, añade una línea al manifiesto y ejecuta el script.
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const OUT = 'public/images/fotos/';
mkdirSync(OUT, { recursive: true });

// [archivo original, nombre de salida, ancho, alto, recorte]  (recorte: 'attention' = zona más interesante, 'centre' = centro)
const manifiesto = [
  // Portadas de página
  ['tablas-equilibrio-playa.jpg', 'hero-empresas', 1000, 833, 'centre'],
  ['investigacion-mapa.jpg', 'ginkana-cluedo', 800, 600, 'attention'],
  ['carrera-sacos-playa.jpg', 'ginkana-supervivientes', 880, 660, 'attention'],
  ['grupo-santiago-obradoiro.jpg', 'ginkana-lendas', 1000, 750, 'attention'],
  ['ojos-vendados-parque.jpg', 'ginkana-loca', 569, 427, 'attention'],
  ['grupo-piratas-despedida.jpg', 'despedidas', 1000, 750, 'attention'],
  // Galería de empresas (3:2)
  ['investigacion-mapa.jpg', 'galeria-mapa', 720, 480, 'attention'],
  ['disfraces-cine-investigacion.jpg', 'galeria-investigacion', 720, 480, 'attention'],
  ['pistolas-agua-playa.jpg', 'galeria-playa', 696, 464, 'attention'],
  ['tirar-cuerda-playa.jpg', 'galeria-cuerda', 535, 357, 'attention'],
  // Juegos de equipo (experiencias)
  ['cubos-cabeza-equipos.jpg', 'juego-cubos', 640, 480, 'attention'],
  ['juegos-hinchables-equipos.jpg', 'juego-esquis', 640, 480, 'attention'],
  ['pistolas-agua-playa.jpg', 'juego-agua', 640, 480, 'attention'],
  ['tirar-cuerda-playa.jpg', 'juego-cuerda', 640, 480, 'attention'],
  ['cuerda-equipo-pradera.jpg', 'juego-cuerda-empresa', 640, 480, 'attention'],
  ['tablas-equilibrio-playa.jpg', 'juego-equilibrio', 640, 480, 'attention'],
  // Portadas de despedidas y escape room
  ['despedida-pelucas-dunas.jpg', 'despedidas-hub', 800, 600, 'attention'],
  ['disfraces-cine-investigacion.jpg', 'escape-room', 800, 600, 'attention'],
  // Imagen para compartir en redes (1200 x 630)
  ['tablas-equilibrio-playa.jpg', 'og-empresas', 1200, 630, 'centre'],
];

for (const [src, nombre, w, h, pos] of manifiesto) {
  const og = nombre.startsWith('og-'); // las imágenes para redes van en JPG (compatibilidad)
  const base = sharp('fotos-originales/' + src)
    .rotate()
    .resize(w, h, { fit: 'cover', position: pos === 'attention' ? sharp.strategy.attention : 'centre' });
  const ext = og ? 'jpg' : 'webp';
  const info = await (og ? base.jpeg({ quality: 80, mozjpeg: true }) : base.webp({ quality: 72 })).toFile(OUT + nombre + '.' + ext);
  console.log(`${nombre}.${ext}  ${w}x${h}  ${(info.size / 1024).toFixed(0)} KB`);
}
