import { getCollection, type CollectionEntry } from 'astro:content';

export type BlogEntry = CollectionEntry<'blog'>;

// Colores de cada tema. Solo son visuales: no existen páginas de categoría.
export const TEMAS = {
  general: { label: 'General', accent: '#C2410C', bg: '#FFF4E5', icon: 'sparkles' },
  despedidas: { label: 'Despedidas', accent: '#9D174D', bg: '#FDEAF2', icon: 'glass' },
  cumpleanos: { label: 'Cumpleaños', accent: '#B45309', bg: '#FEF3C7', icon: 'cake' },
  empresas: { label: 'Empresas', accent: '#0B3A6F', bg: '#E6EEF8', icon: 'building' },
  juegos: { label: 'Juegos', accent: '#157347', bg: '#E4F4EB', icon: 'trophy' },
} as const;

export async function getPosts(): Promise<BlogEntry[]> {
  const posts = await getCollection('blog', ({ data }) => !data.borrador);
  return posts.sort((a, b) => b.data.fecha.valueOf() - a.data.fecha.valueOf());
}

export const formatDate = (d: Date) =>
  d.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

export const isoDate = (d: Date) => d.toISOString().slice(0, 10);

export const readingTime = (body: string) => Math.max(2, Math.round(body.split(/\s+/).length / 200));
