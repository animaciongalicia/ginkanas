import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts } from '../lib/blog';

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: 'Blog de Ginkanas.es',
    description: 'Guías y novedades sobre ginkanas para despedidas, cumpleaños, grupos y empresas en Galicia.',
    site: context.site!,
    items: posts.map((p) => ({
      title: p.data.titulo,
      description: p.data.descripcion,
      pubDate: p.data.fecha,
      link: `/blog/${p.slug}/`,
    })),
    customData: '<language>es-es</language>',
  });
}
