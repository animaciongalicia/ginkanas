// Genera las poses del personaje (WebP con fondo transparente) a partir de mascota-originales/.
// Uso: node scripts/optimizar-mascota.mjs
// Para añadir una pose: copia el original a mascota-originales/, añade una línea al manifiesto y ejecuta el script.
import sharp from 'sharp';
import { mkdirSync, readdirSync } from 'node:fs';

const OUT = 'public/images/mascota/';
mkdirSync(OUT, { recursive: true });

// [archivo original, nombre de salida]
const poses = [
  ['actividades-aventuras-despedidas-galicia-vigo-coruña-sanxenxo.png', 'karts'],
  ['actividades-para-despedidas-vigo-coruña-sanxenxo.png', 'duda'],
  ['contacto-despedidas-en-galicia-animaciongalicia.png', 'llamada'],
  ['despedidas-coruña-galicia-vigo-fiesta.png', 'celebra'],
  ['despedidas-en-vigo.jpg', 'ok'],
  ['monigote-chica-senalando-ambos-lados.png', 'chica-ambos-lados'],
  ['monigote-chica-senalando.png', 'chica-senala'],
  ['monigote-senalando.png', 'senala'],
  ['monigote-sentado-llamando-por-telefono.png', 'oficina'],
  ['monigote-sonriendo.png', 'baila'],
  ['orzanizador-despedidas-galicia-agencia.png', 'piensa'],
];

const H = 400; // alto final en px (se muestran a 120-200 px; así se ven nítidos en pantallas retina)

// Quita el fondo blanco solo si toca el borde (relleno desde los bordes), para no borrar blancos del dibujo (ojos, brillos).
// Los nombres con ñ pueden venir con otra normalización Unicode según el sistema: se busca el archivo real.
const real = (f) => readdirSync('mascota-originales').find((n) => n.normalize('NFC') === f.normalize('NFC')) ?? f;

async function sinFondo(file) {
  const { data, info } = await sharp('mascota-originales/' + real(file)).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width: w, height: h } = info;
  const esBlanco = (i) => data[i] > 238 && data[i + 1] > 238 && data[i + 2] > 238;
  const visto = new Uint8Array(w * h);
  const pila = [];
  const empuja = (x, y) => { const p = y * w + x; if (!visto[p] && (data[p * 4 + 3] < 10 || esBlanco(p * 4))) { visto[p] = 1; pila.push(p); } };
  for (let x = 0; x < w; x++) { empuja(x, 0); empuja(x, h - 1); }
  for (let y = 0; y < h; y++) { empuja(0, y); empuja(w - 1, y); }
  while (pila.length) {
    const p = pila.pop(); const x = p % w, y = (p / w) | 0;
    data[p * 4 + 3] = 0;
    if (x > 0) empuja(x - 1, y); if (x < w - 1) empuja(x + 1, y);
    if (y > 0) empuja(x, y - 1); if (y < h - 1) empuja(x, y + 1);
  }
  return sharp(data, { raw: { width: w, height: h, channels: 4 } });
}

for (const [src, nombre] of poses) {
  const img = await sinFondo(src);
  const info = await img.trim({ threshold: 5 }).resize({ height: H, fit: 'inside' }).webp({ quality: 75, alphaQuality: 85 }).toFile(OUT + nombre + '.webp');
  console.log(`${nombre}.webp  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)} KB`);
}
