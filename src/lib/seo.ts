// Utilidades SEO / datos estructurados compartidas por el Layout.
// Toda la entidad (Organization) se declara UNA vez y el resto de páginas la referencian por @id.

export const SITE = 'https://www.ginkanas.es';
export const ORG_ID = `${SITE}/#organization`;
export const WEBSITE_ID = `${SITE}/#website`;

const CIUDADES = ['A Coruña', 'Vigo', 'Santiago de Compostela', 'Sanxenxo', 'Pontevedra', 'Ourense', 'Lugo', 'Ferrol'];

export const organizationSchema = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: 'Ginkanas.es',
  legalName: 'INVERSIONES SHISO SL',
  vatID: 'ESB70319223',
  url: `${SITE}/`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ronda de Monte Alto 4, 5A',
    postalCode: '15002',
    addressLocality: 'A Coruña',
    addressRegion: 'Galicia',
    addressCountry: 'ES',
  },
  email: 'info@ginkanas.es',
  logo: { '@type': 'ImageObject', url: `${SITE}/logo-512.png`, width: 512, height: 512 },
  image: `${SITE}/images/og-default.png`,
  description:
    'Team building, juegos y actividades para empresas en Galicia (ginkanas, retos, construcción, indoor, outdoor y aventura), y ginkanas para despedidas y grupos. Del grupo Animación Galicia.',
  telephone: '+34678288284',
  parentOrganization: { '@type': 'Organization', name: 'Animación Galicia', url: 'https://www.animaciongalicia.com' },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'reservas',
      telephone: '+34678288284',
      availableLanguage: ['es'],
      areaServed: 'ES-GA',
    },
  ],
  areaServed: CIUDADES.map((name) => ({
    '@type': 'City',
    name,
    containedInPlace: { '@type': 'AdministrativeArea', name: 'Galicia' },
  })),
  knowsAbout: ['ginkanas urbanas', 'despedidas de soltera y soltero', 'team building', 'escape room urbano'],
};

const SEGMENT_NAMES: Record<string, string> = {
  experiencias: 'Experiencias',
  blog: 'Blog',
  'ginkanas-despedidas': 'Ginkanas para despedidas',
  soltera: 'Despedida de soltera',
  soltero: 'Despedida de soltero',
  'ginkanas-empresas': 'Ginkanas para empresas',
  'ginkanas-adultos': 'Grupos',
  'escape-room': 'Escape room urbano',
  'ginkanas-coruna': 'Ginkanas en A Coruña',
  'ginkanas-vigo': 'Ginkanas en Vigo',
  'ginkanas-santiago': 'Ginkanas en Santiago de Compostela',
  'ginkanas-sanxenxo': 'Ginkanas en Sanxenxo',
  'ginkanas-pontevedra': 'Ginkanas en Pontevedra',
  'ginkanas-ourense': 'Ginkanas en Ourense',
  'ginkanas-lugo': 'Ginkanas en Lugo',
  'ginkanas-ferrol': 'Ginkanas en Ferrol',
  contacto: 'Contacto',
  'sobre-nosotros': 'Quiénes somos',
};

export function breadcrumbSchema(pathname: string, canonical: string, lastName: string) {
  const segs = pathname.split('/').filter(Boolean);
  if (!segs.length) return null;
  const items = [{ name: 'Inicio', url: `${SITE}/` }];
  let acc = '';
  segs.forEach((seg, i) => {
    acc += `/${seg}`;
    const isLast = i === segs.length - 1;
    const name = isLast ? lastName.replace(/\s*\|\s*Ginkanas\.es$/, '') : SEGMENT_NAMES[seg] ?? seg;
    items.push({ name, url: `${SITE}${acc}/` });
  });
  return {
    '@type': 'BreadcrumbList',
    '@id': `${canonical}#breadcrumb`,
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: it.url })),
  };
}

export function faqSchema(faqs: { q?: string; a?: string; question?: string; answer?: string }[], canonical: string) {
  const mainEntity = faqs
    .map((f) => ({ q: f.q ?? f.question, a: f.a ?? f.answer }))
    .filter((f) => f.q && f.a)
    .map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    }));
  if (!mainEntity.length) return null;
  return { '@type': 'FAQPage', '@id': `${canonical}#faq`, mainEntity };
}

const ORG_REF = { '@id': ORG_ID };

// Normaliza los esquemas que declara cada página para que apunten a la Organization única
// y cumplan lo que Google/LLMs esperan de un Service o un Article.
export function normalizeSchema(input: any, canonical: string, image: string) {
  const s: any = { ...input };
  delete s['@context'];

  for (const key of ['provider', 'author', 'publisher']) if (s[key]) s[key] = ORG_REF;

  // Una ginkana es un servicio, no un producto físico.
  if (s['@type'] === 'Product') s['@type'] = 'Service';

  if (s['@type'] === 'Service') {
    s['@id'] ??= `${canonical}#service`;
    s.url ??= canonical;
    s.provider ??= ORG_REF;
    s.areaServed ??= { '@type': 'AdministrativeArea', name: 'Galicia' };
    if (s.offers?.price) {
      const price = String(s.offers.price);
      s.offers = {
        '@type': 'Offer',
        url: canonical,
        priceCurrency: s.offers.priceCurrency ?? 'EUR',
        price,
        description: `Desde ${price} € por persona. Precio orientativo: el presupuesto final depende del tamaño del grupo y la ciudad.`,
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price,
          priceCurrency: s.offers.priceCurrency ?? 'EUR',
          unitText: 'persona',
        },
        availability: 'https://schema.org/InStock',
        seller: ORG_REF,
      };
    }
  }

  if (s['@type'] === 'Article' || s['@type'] === 'BlogPosting') {
    s['@type'] = 'BlogPosting';
    s.mainEntityOfPage = { '@type': 'WebPage', '@id': `${canonical}#webpage` };
    s.publisher = ORG_REF;
    s.author ??= ORG_REF;
    s.image ??= image;
    s.inLanguage = 'es-ES';
    s.dateModified ??= s.datePublished;
  }

  return s;
}
