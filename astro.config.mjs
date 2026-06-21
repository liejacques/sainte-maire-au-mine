// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Domaine officiel de la commune (sert aux URLs canoniques, sitemap, Open Graph).
// Configurable par variable d'environnement `SITE` au build : un changement de
// domaine = une seule valeur à fournir, jamais de domaine en dur ailleurs.
const SITE = process.env.SITE || 'https://www.sainte-marie-aux-mines.fr';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  // Sortie 100 % statique : aucun serveur à maintenir, le HTML généré ne rouille pas.
  output: 'static',
  trailingSlash: 'always',
  build: {
    // URLs propres : /mes-demarches/ -> /mes-demarches/index.html
    format: 'directory',
  },
  integrations: [
    sitemap({
      i18n: undefined,
      changefreq: 'monthly',
      // L'espace de gestion n'est pas indexé.
      filter: (page) => !page.includes('/admin'),
    }),
  ],
  image: {
    // Optimisation des images au build (AVIF/WebP) via sharp.
    responsiveStyles: true,
  },
  // Aucune dépendance JS de framework : zéro JS client par défaut.
});
