import { defineCollection, z } from 'astro:content';

// Cada artículo del blog es un archivo .md en src/content/blog/. El nombre del archivo es la URL:
// src/content/blog/mi-articulo.md  ->  https://ginkanas.es/blog/mi-articulo/
// Los archivos que empiezan por _ (como _plantilla.md) no se publican.
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string().max(70, 'Título demasiado largo para Google (máx. ~60-70 caracteres)'),
    descripcion: z.string().min(80).max(170),
    resumen: z.string().max(160).optional(), // texto corto para la tarjeta del blog; si falta, se usa la descripción
    intro: z.string(), // entradilla bajo el título
    fecha: z.coerce.date(),
    actualizado: z.coerce.date().optional(),
    tipo: z.enum(['guia', 'novedad']).default('guia'),
    tema: z.enum(['general', 'despedidas', 'cumpleanos', 'empresas']).default('general'), // solo cambia el color; no crea páginas
    etiqueta: z.string().optional(),
    autor: z.string().optional(), // si se omite, firma Ginkanas.es
    cta: z.object({ titulo: z.string(), texto: z.string() }).optional(),
    relacionados: z.array(z.object({ titulo: z.string(), enlace: z.string().startsWith('/') })).default([]),
    faqs: z.array(z.object({ pregunta: z.string(), respuesta: z.string() })).default([]),
    borrador: z.boolean().default(false),
  }),
});

export const collections = { blog };
