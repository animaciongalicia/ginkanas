// Genera dist/llms-full.txt: el contenido de todas las páginas públicas en texto plano/Markdown,
// para que asistentes de IA lo lean de una sola vez. Se ejecuta después de `astro build`.
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname;
const SITE = 'https://ginkanas.es';
const SKIP = ['404', 'gracias', 'aviso-legal', 'privacidad', 'cookies'];

function walk(dir) {
  return readdirSync(dir).flatMap((n) => {
    const p = join(dir, n);
    return statSync(p).isDirectory() ? walk(p) : n === 'index.html' ? [p] : [];
  });
}

const decode = (s) =>
  s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ');

function toMarkdown(html) {
  const main = (html.match(/<main[^>]*>([\s\S]*?)<\/main>/) || [])[1] || '';
  return decode(
    main
      .replace(/<(script|style|svg)[\s\S]*?<\/\1>/g, '')
      .replace(/<h1[^>]*>([\s\S]*?)<\/h1>/g, '\n\n# $1\n\n')
      .replace(/<h2[^>]*>([\s\S]*?)<\/h2>/g, '\n\n## $1\n\n')
      .replace(/<h3[^>]*>([\s\S]*?)<\/h3>/g, '\n\n### $1\n\n')
      .replace(/<h4[^>]*>([\s\S]*?)<\/h4>/g, '\n\n#### $1\n\n')
      .replace(/<li[^>]*>/g, '\n- ')
      .replace(/<\/(p|div|section|tr|dt|dd|details|summary|ul|ol|article)>/g, '\n')
      .replace(/<br\s*\/?>/g, '\n')
      .replace(/<[^>]+>/g, '')
  )
    .replace(/[ \t]+/g, ' ')
    .replace(/ *\n */g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

const pages = walk(DIST)
  .map((p) => ({ p, url: '/' + relative(DIST, p).split(sep).slice(0, -1).join('/') }))
  .filter(({ url }) => !SKIP.some((s) => url.split('/').includes(s)))
  .sort((a, b) => a.url.length - b.url.length || a.url.localeCompare(b.url));

const out = [
  '# Ginkanas.es (versión ampliada)',
  '',
  '> Contenido completo de ginkanas.es en texto plano para asistentes de IA. Ginkanas urbanas y experiencias gamificadas en Galicia para despedidas, empresas y grupos. Índice resumido: ' + SITE + '/llms.txt',
  '',
];
for (const { p, url } of pages) {
  const html = readFileSync(p, 'utf8');
  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || url;
  out.push('---', '', `Fuente: ${SITE}${url === '/' ? '/' : url + '/'}`, `Título: ${decode(title)}`, '', toMarkdown(html), '');
}
writeFileSync(join(DIST, 'llms-full.txt'), out.join('\n'));
console.log(`llms-full.txt generado (${pages.length} páginas)`);

// Actualiza la sección del blog de llms.txt a partir del RSS generado (título, enlace y descripción).
const rssPath = join(DIST, 'rss.xml');
const llmsPath = join(DIST, 'llms.txt');
try {
  const rssXml = readFileSync(rssPath, 'utf8');
  const items = [...rssXml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((m) => {
    const tag = (t) => decode(((m[1].match(new RegExp(`<${t}>([\\s\\S]*?)</${t}>`)) || [])[1] || '').replace(/<!\[CDATA\[|\]\]>/g, '').trim());
    return `- [${tag('title')}](${tag('link')}): ${tag('description')}`;
  });
  const llms = readFileSync(llmsPath, 'utf8').replace(
    /(<!-- blog:start[^>]*-->\n)[\s\S]*?(<!-- blog:end -->)/,
    `$1- [Blog](${SITE}/blog/)\n${items.join('\n')}\n$2`
  );
  writeFileSync(llmsPath, llms);
  console.log(`llms.txt: ${items.length} artículos del blog`);
} catch (e) {
  console.warn('No se pudo actualizar la sección del blog de llms.txt:', e.message);
}
