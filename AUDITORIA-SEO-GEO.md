# Auditoría senior de ginkanas.es — SEO + IA (GEO)

Objetivo: posicionar en Google y ser recomendada por ChatGPT, Perplexity, Gemini y Claude en 2-3 meses, y vender.
Alcance: concepto, arquitectura, SEO técnico, contenido, GEO, conversión, legal, diseño.
Estado: lo marcado **[HECHO]** ya está en esta rama. Lo marcado **[TÚ]** necesita una decisión o un dato tuyo.

---

## 1. Diagnóstico en una línea

Buen esqueleto (31 páginas, una por ciudad/público/experiencia) y cero autoridad. El SEO técnico estaba a medias, la web parecía infantil para vender a empresas y no había nada pensado para IA. En 2-3 meses el techo real lo pone la **autoridad externa** (reseñas, enlaces, ficha de Google), no el código.

| Área | Antes | Ahora (esta rama) | Techo con lo pendiente |
|---|---|---|---|
| Concepto / posicionamiento | 5 | 6,5 | 8,5 |
| Arquitectura de información | 7 | 7,5 | 8,5 |
| SEO técnico | 5 | 8,5 | 9 |
| Contenido / on-page | 6 | 7 | 8,5 |
| GEO (visibilidad en IA) | 2 | 7 | 8,5 |
| Conversión | 5 | 7 | 8,5 |
| Confianza / legal | 4 | 4,5 | 8 |
| Diseño / imagen de marca | 4 | 7 | 8 |
| Rendimiento | 4 (22 MB de PNG) | 9 | 9 |

---

## 2. Concepto y posicionamiento

**Lo que funciona:** propuesta clara (juego por equipos + monitor + 2 h), público bien segmentado (despedidas / empresas / grupos), precio de entrada visible (25 €).

**Lo que frena:**
1. **Mezcla de dos negocios con compradores distintos.** Despedidas (compra emocional, decide una amiga, WhatsApp, 25 €/persona) y empresas (compra racional, decide RR. HH., pide presupuesto y factura). Comparten web y tono. Recomendación: mantener una sola marca, pero que `/ginkanas-empresas/` hable en tono corporativo (resultados, logística, facturación, grupos grandes) y `/ginkanas-despedidas/` en tono cercano. Hoy "el team building típico es un coñazo" en la landing de empresas puede espantar a un director de RR. HH. **[TÚ decides el tono]**.
2. **Sin prueba real.** Tres testimonios con nombre e inicial, "5000+ grupos" y "20 años" sin evidencia. Los buscadores y las IA priorizan entidades verificables. **[TÚ]**: reseñas de Google, logos de empresas cliente (con permiso) o casos con número de personas y fecha.
3. **La marca es un dominio, no una entidad.** ginkanas.es forma parte de Animación Galicia y de 4 webs hermanas, pero la web casi no lo explica. Para que una IA "entienda" quién eres hay que declararlo: hecho en el schema (`parentOrganization`) y en la home; falta la página "Quiénes somos" **[TÚ: datos]**.
4. **Precio.** "Desde 25 €/persona" es el gancho correcto. Ahora se aclara por público: despedidas y grupos desde 25 €, empresas a medida **[HECHO]**. Rectifico un punto de mi primera revisión: los importes de 20/30 € del blog son otras actividades (cena, cata) en presupuestos comparativos, no precios de ginkana. Están bien.

---

## 3. Arquitectura de información

Estructura actual (correcta para SEO local):
`/` → público (`/ginkanas-despedidas/`, `/ginkanas-empresas/`, `/ginkanas-adultos/`) → formato (`/experiencias/…`) → ciudad (`/ginkanas-{ciudad}/`) → blog.

**Recomendaciones:**
- **[HECHO]** Migas de pan (BreadcrumbList) automáticas y `trailingSlash: 'always'` para que solo exista una URL por página.
- **[HECHO]** Sitemap automático sin páginas de gracias/404.
- **Falta la matriz ciudad × público.** El tráfico de dinero está en búsquedas como "despedida de soltera Vigo", "team building A Coruña", "cumpleaños original Santiago". Hoy la ciudad y el público viven en páginas separadas. Fase 2 (semanas 3-8): páginas `/ginkanas-despedidas/vigo/`, `/ginkanas-empresas/coruna/`… empezando por Vigo, A Coruña, Santiago y Sanxenxo, con contenido propio (recorridos reales, precios, dudas locales). No las generaría en bloque con texto duplicado: Google las penaliza; mejor 6-8 bien hechas.
- **Enlazado interno.** Los posts del blog deberían enlazar a la ciudad y al público que corresponde con anchor descriptivo. Se quitaron dos enlaces rotos **[HECHO]**; los dos artículos que enlazaban ("Escape room para team building" y "10 actividades de empresa en Galicia") son buenas ideas de post nuevo.
- **Datos de experiencias inconsistentes.** Cluedo y Supervivientes dicen "grupo mín. 8", el resto y la FAQ de la home dicen 6. Una IA que lee ambas se contradice y desconfía. **[TÚ: confirma mínimos reales]** y unifico.

---

## 4. SEO técnico

**[HECHO] en esta rama**
- `robots.txt` que permite todo, con los bots de buscadores e IA nombrados (Googlebot, Bingbot, OAI-SearchBot, ChatGPT-User, GPTBot, ClaudeBot, Claude-SearchBot, PerplexityBot, Google-Extended, Applebot-Extended…) y enlace al sitemap.
- `sitemap-index.xml` automático (`@astrojs/sitemap`).
- Canonical absoluto por página, `og:image` absoluta (antes apuntaba a un archivo que no existía), imagen 1200×630 real, `apple-touch-icon`, favicon nuevo, `theme-color`, `max-image-preview:large`.
- Grafo JSON-LD único por página: `Organization` (una vez, referenciada por `@id`), `WebSite`, `WebPage`, `BreadcrumbList`, `Service` con `Offer` (antes `Product` sin imagen ni reseñas, que Google marca como error), `BlogPosting` con `dateModified`, `FAQPage`. Se eliminó el `LocalBusiness` con horario 9-21 h y sin dirección, que no aportaba y podía dar avisos.
- Fuentes propias (self-host, `@fontsource`): fuera Google Fonts (bloqueaba el render y envía la IP del visitante a Google sin consentimiento, riesgo RGPD).
- Peso: de ~22 MB de PNG a 0 imágenes pesadas. El HTML de la home pesa unos 45 KB (sin comprimir).
- Accesibilidad básica: enlace "saltar al contenido", foco visible, contraste AA (el naranja `#FF6B35` y el verde WhatsApp `#25D366` con texto blanco no pasaban), `prefers-reduced-motion`.
- Página 404 útil y `/gracias/` con `noindex`.
- Corregido: enlaces rotos, texto partido en la home, "deduccción".

**Pendiente**
- **[TÚ] Alta en Google Search Console y Bing Webmaster Tools** y enviar `https://ginkanas.es/sitemap-index.xml`. Sin esto, el sitemap es decoración. Bing importa: ChatGPT Search se apoya en su índice.
- **[TÚ] Cabeceras del servidor:** redirección `http→https`, `www→sin www` (o al revés) con 301, compresión gzip/brotli, caché larga en `/_astro/`, HSTS. Depende del hosting; dime cuál es y lo dejo escrito (`.htaccess` o `_headers`).
- **Analítica.** La política de cookies menciona Google Analytics pero no hay analítica ni banner. Sin medir no hay optimización. Recomiendo Plausible o Umami (sin cookies, sin banner) o GA4 con banner de consentimiento. **[TÚ eliges]**.
- Metadatos: comprobar longitud de títulos (≤ 60) y descriptions (≤ 155) página a página; varios contienen "Desde 25€/persona" repetido. Se hace en la fase 2 junto con el contenido.
- Textos legales y de las páginas de despedidas están escritos **sin tildes ni ñ** ("20 anos", "carino", "Coruna"). "Anos" no es "años" y queda descuidado. **[TÚ]** cuando me pases los datos legales los reescribo bien; en las páginas soltera/soltero lo puedo arreglar ya.

---

## 5. Contenido y on-page

- **Bien:** una idea por página, tono propio, FAQs en las experiencias.
- **[HECHO]** Bloque "¿Qué es Ginkanas.es?" en la home: definición de dos frases, citable tal cual por una IA.
- **[HECHO]** FAQ visible + `FAQPage` en las 7 ciudades (precio, duración, mínimo, zonas, lluvia, cómo reservar) y en las 5 experiencias y la home.
- **[HECHO]** H1 de la home con la keyword ("Ginkanas en Galicia: …").
- **Falta:** contenido que responda búsquedas reales con fecha y autor, y páginas de dinero por ciudad × público (ver §3).
- **Calendario editorial (1 post/semana, 12 posts)**, priorizando intención de compra:
  1. Despedida de soltera en Vigo/Coruña/Santiago: plan de un día con ginkana.
  2. Precio de una ginkana para despedida en Galicia (tabla real, no orientativa).
  3. Team building en Galicia: 10 actividades de empresa (cubre el enlace roto).
  4. Escape room para team building: ¿funciona? (cubre el otro).
  5. Cómo organizar una despedida de soltero sin que sea un desastre.
  6. Ginkana vs escape room: cuál elegir según el grupo.
  7-12. Uno por ciudad: "qué hacer en {ciudad} con un grupo".
  Cada post: respuesta directa en las 2 primeras líneas, tabla o lista, FAQ al final, autor con nombre, fecha de actualización y enlace a la página de dinero.

---

## 6. GEO: aparecer y ser recomendado en ChatGPT, Gemini, Perplexity y Claude

Cómo deciden estas IA: (a) leen el índice de un buscador (Bing para ChatGPT, Google para Gemini, el suyo para Perplexity), (b) prefieren páginas que responden en el primer párrafo, con datos concretos y consistentes, (c) se fían de entidades mencionadas en varios sitios independientes.

**[HECHO]**
- `llms.txt` (resumen + enlaces + datos clave) y `llms-full.txt` (todo el contenido en texto plano, generado en cada build).
- `robots.txt` con los bots de IA permitidos explícitamente. Decisión a validar: permito también los de entrenamiento (GPTBot, Google-Extended, CCBot). Sin datos sensibles que proteger, es lo que más ayuda a que el modelo "te conozca". **[TÚ: dime si prefieres bloquear entrenamiento]**.
- Definición citable en la home, FAQs con respuesta directa, datos de contacto y precio consistentes en el schema y en el texto.
- Entidad declarada: `Organization` con teléfono, zona, `parentOrganization` Animación Galicia.

**Reglas que hay que mantener** (una IA que detecta contradicciones te descarta): duración, mínimo de personas, precio y ciudades tienen que decir lo mismo en la web, en llms.txt, en Google Business y en redes.

**Lo que más pesa y no se puede hacer desde el código [TÚ]:**
1. **Ficha de Google Business Profile** con categoría "Organizador de eventos", área de servicio Galicia, fotos reales, servicios con precio y reseñas. Es la fuente #1 de Gemini, Google Maps y buena parte de las respuestas locales.
2. **Reseñas reales** (meta: 25-30 en 90 días). Pídelas por WhatsApp al terminar cada ginkana con el enlace directo a la reseña.
3. **Menciones y enlaces externos:** las 4 webs hermanas (despedidasgalicia.es, despedidascoruna.es, despedidasvigo.com, despedidas-sanxenxo.com) y animaciongalicia.com deben enlazar a las páginas de ginkana correspondientes con anchor descriptivo. Después: directorios locales, blogs de bodas de Galicia, cámaras de comercio y asociaciones de empresarios, prensa local con una nota ("ginkana en el casco histórico de Vigo").
4. **Perfiles coherentes** (Instagram, TikTok, YouTube, LinkedIn) con el mismo nombre, web y descripción. Añadiré `sameAs` al schema cuando existan.
5. **Vídeo corto real** de una ginkana (30 s). YouTube es fuente muy citada por Gemini y por las respuestas de Google.

**Cómo medirlo:** cada 2 semanas, preguntar a ChatGPT, Gemini, Perplexity y Claude las 10 consultas objetivo ("ginkana despedida de soltera Vigo", "team building Galicia", "qué hacer en Santiago con un grupo"…) y anotar si aparece la marca, qué fuente cita y qué precio dice.

---

## 7. Conversión (para vender, no solo posicionar)

- **[HECHO] Formulario a email.** Envía a animaciongalicia@gmail.com vía FormSubmit, con antispam (honeypot), casilla RGPD obligatoria, asunto claro, redirección a `/gracias/` y campos con nombres legibles en el email. **Acción tuya: enviar una prueba y pulsar el enlace de activación que llegará a ese Gmail (solo la primera vez).** Ojo: el Gmail queda visible en el HTML. Si molesta el spam, alternativa: Formspree/Make con un ID que oculta el correo.
- WhatsApp es el canal correcto para despedidas. Falta un canal claro para empresas: formulario específico con nº de personas, fecha, ciudad y objetivo, y respuesta con presupuesto en 24 h.
- Añadir en cada página de experiencia: qué incluye exactamente, qué NO incluye, política de cancelación y señal (importe y cuándo se paga). Reduce fricción y es texto que las IA citan.
- Sustituir "Precio a consultar" por "desde X € para grupos de N" cuando lo tengas definido **[TÚ]**: las páginas con precio convierten más y se citan más.
- Sin fotos reales, la prueba visual se sustituye por: números concretos, casos, reseñas y vídeo. Una sola foto real de grupo jugando pesa más que todo el diseño; cuando quieras, es la mejor inversión de tiempo.

---

## 8. Confianza y legal

- **[TÚ]** Datos legales definitivos (me dijiste que los pasarás después). En el código hay un titular, CIF y domicilio en el aviso legal y en privacidad; no los he tocado ni los he metido en el schema. Cuando los tengas: aviso legal, privacidad y cookies con tildes, `legalName`/dirección en el schema y pie de página.
- Política de cookies desalineada con la realidad (cita Analytics sin usarlo). Se corrige cuando decidas la analítica.
- Testimonios: si no son verificables, quítalos o sustitúyelos por reseñas de Google enlazadas. No he añadido `Review`/`AggregateRating` al schema a propósito: marcar como reseñas contenidos no verificables incumple las directrices de Google y puede acabar en acción manual.

---

## 9. Imagen y diseño ("menos infantil, más profesional")

**[HECHO]**
- Fuera las 17 mascotas (22 MB), los 200 emojis decorativos y los degradados de texto.
- Paleta sobria: azul marino + naranja quemado (acento) + verde azulado, contraste AA. Tipografías Inter y Poppins propias.
- Iconos de línea SVG (componente `Icon`) y paneles de color en lugar de fotos; logo nuevo, favicon, imagen de compartir.
- Cero imágenes de contenido; todo el sitio construido pesa 2,2 MB, incluidas las fuentes propias.

**Límite honesto:** sin fotografías, la web comunica bien pero no emociona. Para empresas es aceptable; para despedidas, una galería real de 6-8 fotos (aunque sean de móvil, con permiso) subiría la conversión más que cualquier ajuste. Si en el futuro quieres imágenes generadas, deben ir claramente como ilustración de concepto y nunca como si fueran clientes reales.

### Sobre "Sunia"
No tengo ninguna herramienta ni skill llamada "Sunia" en esta sesión, así que no puedo evaluarla tal cual. Si te refieres a otra cosa (¿un generador de diseño/imágenes, otro nombre?), pásame el nombre exacto o dónde lo usas. Mientras tanto, lo que sí hay en mi entorno y sirve para este objetivo:
- **theme-factory / brand-guidelines:** fijar un sistema de diseño (colores, tipografías) reutilizable. Útil si quieres más de una variante de marca; para esta web ya está resuelto en `global.css`.
- **canvas-design:** piezas gráficas estáticas (portada de Instagram, carteles, imagen de compartir por experiencia).
- **artifact-design / web-artifacts-builder:** prototipos rápidos de una landing alternativa antes de tocar el código.
- **Skills propias tuyas** (`tono-rentabilista`, `ferrados-blog`): para los textos del blog en tu tono; con `focorentabilismo-blog` ya tienes la mecánica; falta uno análogo para `ginkanas.es` (tono más cercano y de servicio, no de consultoría) si vas a escribir 12 posts. Lo recomiendo.

Sobre cambiar **toda la arquitectura**: no. La arquitectura (páginas por público, formato y ciudad) es correcta para SEO local y no hay que reconstruirla; sí ampliarla con la matriz ciudad × público (§3). Reconstruir ahora costaría el trimestre que necesitas para posicionar.

---

## 10. Plan a 90 días

**Semana 0-1 (hoy):** revisar y publicar esta rama; probar el formulario; alta en Search Console y Bing; ficha de Google Business; decidir analítica; confirmar mínimos de personas y tono de empresas.
**Semanas 2-4:** reseñas (primer objetivo: 10); enlaces desde las 5 webs hermanas; datos legales y reescritura con tildes; 4 posts; páginas Vigo × despedidas y Coruña × empresas.
**Semanas 5-8:** 4 posts más; 4 páginas ciudad × público; primera nota de prensa local; vídeo corto; 25 reseñas.
**Semanas 9-12:** medir (Search Console: impresiones/clics por página; consultas a las IA cada 2 semanas); reforzar lo que ya entra; podar lo que no; ampliar ciudades.

**KPIs realistas a 90 días:** indexadas 100 % de las páginas; top 10 en "ginkanas {ciudad}" en 3-4 ciudades de tráfico medio; aparición de la marca en respuestas de IA en al menos 2 de las 10 consultas objetivo; 20-30 leads/mes por WhatsApp y formulario. Dependen de reseñas y enlaces, no solo del código.
