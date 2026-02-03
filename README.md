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
Reemplaza los placeholders en `public/images/` con imágenes reales.
Ver `public/images/README.md` para la lista completa.

### Formulario de contacto
El formulario usa Formspree. Cambia `TUFORMID` en `/src/pages/contacto.astro` por tu ID de Formspree.

### WhatsApp
El número de WhatsApp está configurado como 678288284.
Búscalo en los archivos si necesitas cambiarlo.

### Colores y estilos
Edita las variables CSS en `src/styles/global.css`.

## SEO

- Cada página tiene title y description únicos
- Schema.org JSON-LD incluido (LocalBusiness, Service, FAQPage)
- URLs limpias y semánticas
- Meta tags Open Graph y Twitter Cards

## Rendimiento esperado

Con Astro y contenido estático:
- PageSpeed: 95-100
- First Contentful Paint: < 1s
- Time to Interactive: < 2s

## Soporte

WhatsApp: 678 288 284
