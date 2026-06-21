# Site de la commune de Sainte-Marie-aux-Mines

Site web statique de la ville de **Sainte-Marie-aux-Mines** (Haut-Rhin, Alsace),
commune centre du **Val d'Argent**, construit avec [Astro](https://astro.build/).
Objectif : un site **rapide, accessible et sans maintenance** (HTML statique,
aucune base de données, aucun serveur applicatif).

> Démo issue d'une maquette Claude Design. Le contenu institutionnel est de
> **démonstration** ; les éléments à confirmer avant mise en ligne (élus,
> hébergeur, réseaux sociaux, horaires détaillés) sont marqués `[À VÉRIFIER]` /
> `[À FOURNIR]` ou en commentaire HTML.

## Caractéristiques

- **Design singulier** ancré dans l'identité minière : galeries sombres,
  argent natif, gueules de Ribeaupierre, or héraldique, outils du mineur croisés,
  ligne de partage de la Lièpvrette. Voir [`docs/DA.md`](docs/DA.md).
- **Accessibilité RGAA / WCAG 2.1 AA** : structure sémantique, contrastes validés,
  navigation clavier, focus visibles, cibles ≥ 44 px, lien d'évitement, et un
  **sélecteur d'accessibilité** (taille du texte + contraste renforcé, mémorisé).
- **Respect du RGPD** : polices auto-hébergées (Spectral & Source Sans 3, pas de
  Google Fonts), aucun cookie de mesure d'audience, aucun traceur tiers.
- **Responsive** mobile-first, de 320 px à grand écran.
- **Espace de gestion** (`/admin`) : CMS schéma-driven, mock localStorage prêt
  pour Supabase (mot de passe de démo : `mairie`).
- **Recherche** statique indexée au build ([Pagefind](https://pagefind.app/)).
- **Zéro JS de framework** : un seul script client léger (sélecteur
  d'accessibilité + confort du tiroir mobile) ; les menus déroulants sont en CSS pur.

## Stack technique

- [Astro 5](https://astro.build/) (`output: 'static'`)
- [@fontsource](https://fontsource.org/) — Spectral & Source Sans 3
- [Sharp](https://sharp.pixelplumbing.com/) — optimisation des images
- [Pagefind](https://pagefind.app/) — index de recherche au build
- [@astrojs/sitemap](https://docs.astro.build/integrations/sitemap/)

## Développement

```bash
npm install        # installer les dépendances
npm run dev        # serveur de développement (http://localhost:4321)
npm run build      # build de production dans dist/ (+ index Pagefind)
npm run preview    # prévisualiser le build
```

## Structure

```
src/
  pages/        routes du site (.astro)
  layouts/      Base (coquille) + InnerPage (bandeau + main)
  components/   en-tête, pied de page, blason, motif mineur, fil d'Ariane…
  data/         contenu (commune, navigation, actualités, agenda, démarches…)
  lib/cms/      espace de gestion schéma-driven (mock localStorage → Supabase)
  styles/       reset, jetons (tokens), styles globaux, admin
public/         fichiers servis tels quels (blason, favicon)
docs/           DA.md (direction artistique), agent-brief.md
```

## Licence & crédits

Code fourni à titre d'exemple. Les **textes institutionnels** appartiendront à la
commune ; les **photographies** du patrimoine proviennent de **Wikimedia Commons**
(licences Creative Commons / domaine public, créditées sur chaque cliché et sur la
page « Crédits photos ») et pourront être remplacées par des clichés originaux.
