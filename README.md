# Ginkanas.es - Sitio Web

Web de ginkanas y experiencias gamificadas en Galicia.

## Requisitos

- Node.js 18+
- npm o yarn

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Abre http://localhost:4321 en tu navegador.

## Build para producción

```bash
npm run build
```

Los archivos estáticos se generan en la carpeta `dist/`.

## Subir a hosting

### Opción 1: FTP directo
1. Ejecuta `npm run build`
2. Sube el contenido de la carpeta `dist/` a tu hosting con FileZilla o similar
3. Asegúrate de que el dominio apunta a esa carpeta

### Opción 2: GitHub + Deploy automático
1. Sube este proyecto a un repositorio de GitHub
2. Conecta con Netlify, Vercel o similar
3. Configura el build command: `npm run build`
4. Configura el output directory: `dist`

## Estructura del proyecto

```
ginkanas-web/
├── public/
│   ├── images/          # Imágenes (reemplazar placeholders)
│   └── favicon.svg
├── src/
│   ├── components/      # Componentes reutilizables
│   ├── layouts/         # Layout base
│   ├── pages/           # Páginas del sitio
│   └── styles/          # CSS global
├── astro.config.mjs     # Configuración de Astro
└── package.json
```

## Páginas incluidas

- `/` - Home
- `/ginkanas-despedidas/` - Despedidas (+ soltera y soltero)
- `/ginkanas-empresas/` - Team building
- `/ginkanas-adultos/` - Grupos y cumpleaños
- `/escape-room/` - Escape Room
- `/ginkanas-coruna/` - A Coruña
- `/ginkanas-vigo/` - Vigo
- `/ginkanas-santiago/` - Santiago
- `/ginkanas-sanxenxo/` - Sanxenxo
- `/ginkanas-pontevedra/` - Pontevedra
- `/ginkanas-ourense/` - Ourense
- `/ginkanas-lugo/` - Lugo
- `/experiencias/` - Catálogo de ginkanas
- `/contacto/` - Formulario de contacto

## Personalización

### Imágenes
La web no usa fotos: los visuales son iconos SVG y paneles CSS (`src/components/Icon.astro`).
La imagen para compartir en redes es `public/images/og-default.png` (1200x630).

### Formulario de contacto
Envía cada solicitud por email a animaciongalicia@gmail.com mediante FormSubmit
(`src/pages/contacto.astro`). **La primera vez que alguien lo envíe, FormSubmit manda un email
de activación a esa cuenta: hay que pulsar el enlace una vez.** Después funciona solo.

### WhatsApp
El número de WhatsApp está configurado como 678288284.
Búscalo en los archivos si necesitas cambiarlo.

### Colores y estilos
Edita las variables CSS en `src/styles/global.css`.

## Blog y novedades

Cada artículo es un archivo Markdown en `src/content/blog/`. Para publicar:
1. Copia `src/content/blog/_plantilla.md`, renómbralo (`mi-articulo.md` → `ginkanas.es/blog/mi-articulo/`) y quita el `_`.
2. Rellena los campos del principio y escribe el texto. Sigue la lista de comprobación de la plantilla.
3. Sube el archivo a GitHub y haz el build. Aparece solo en `/blog/`, en `/rss.xml`, en el sitemap y en `llms.txt`.

`tipo: novedad` lo marca como novedad (filtro "Novedades"). `borrador: true` lo guarda sin publicar.

## Google Analytics y Search Console

Pon los códigos en `src/config/tracking.ts`. Con `GA4_ID` vacío no se carga nada; al rellenarlo aparece el aviso de cookies (Aceptar/Rechazar) y Analytics solo se carga si se acepta.

## SEO

- Cada página tiene title y description únicos
- Schema.org JSON-LD en grafo (Organization, WebSite, WebPage, BreadcrumbList, Service, BlogPosting, FAQPage)
- `robots.txt`, sitemap automático (`/sitemap-index.xml`), `llms.txt` y `llms-full.txt` (este último se genera en el build)
- URLs limpias y semánticas
- Meta tags Open Graph y Twitter Cards

## Rendimiento esperado

Con Astro y contenido estático:
- PageSpeed: 95-100
- First Contentful Paint: < 1s
- Time to Interactive: < 2s

## Soporte

WhatsApp: 678 288 284
