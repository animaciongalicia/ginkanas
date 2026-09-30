import { getCollection, type CollectionEntry } from 'astro:content';

export type BlogEntry = CollectionEntry<'blog'>;

// Colores de cada tema. Solo son visuales: no existen páginas de categoría.
export const TEMAS = {
  general: { label: 'General', accent: '#E65100', bg: '#FFF8E1' },
  despedidas: { label: 'Despedidas', accent: 'var(--color-primary)', bg: '#FFF0F5' },
  cumpleanos: { label: 'Cumpleaños', accent: '#C2185B', bg: '#FCE4EC' },
  empresas: { label: 'Empresas', accent: 'var(--color-secondary)', bg: '#E8F5E9' },
} as const;

export async function getPosts(): Promise<BlogEntry[]> {
  const posts = await getCollection('blog', ({ data }) => !data.borrador);
  return posts.sort((a, b) => b.data.fecha.valueOf() - a.data.fecha.valueOf());
}

export const formatDate = (d: Date) =>
  d.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

export const isoDate = (d: Date) => d.toISOString().slice(0, 10);
