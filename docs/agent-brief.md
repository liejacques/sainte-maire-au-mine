# Brief — construction des pages (Sainte-Marie-aux-Mines)

Projet **Astro statique** déjà échafaudé dans
`C:\Users\Jocel\Desktop\sainte-marie-aux-mines`. La page d'accueil, le design
system, les composants et les données sont **figés**. Tu construis UNE page (ou
un petit groupe), en réutilisant l'existant. **Ne modifie aucun fichier
partagé** (tokens.css, global.css, layouts, composants, data) — crée seulement
ton/tes fichier(s) de page. Si tu as besoin de données, inline-les dans la page.

## À LIRE avant d'écrire (obligatoire)
- `src/pages/index.astro` — patrons canoniques + conventions de `<style>` scopé.
- `src/layouts/InnerPage.astro` et `src/layouts/Base.astro`.
- `src/components/PageBanner.astro`, `Breadcrumb.astro`, `MinerTools.astro`.
- `src/styles/tokens.css` et `src/styles/global.css` (classes utilitaires).
- Ton prototype `.dc.html` assigné (s'il existe) — reproduis-le fidèlement.

## Gabarits
- **InnerPage** (`src/layouts/InnerPage.astro`) — gabarit standard : en-tête +
  bandeau sombre (fil d'Ariane + surtitre + H1) + `<main id="contenu">` + pied.
  Props : `title`, `description`, `active?`, `bannerTitle?`, `breadcrumb`
  (`[{label, href?}]`, le dernier sans href = page courante), `eyebrow?`,
  `mark?` (booléen, affiche le motif marteau+pointerolle), `lede?`,
  `mainClass?` (défaut `"page-main"`). Slot nommé `banner` pour insérer une
  barre de recherche dans le bandeau. Le H1 est fourni par le bandeau — **n'ajoute pas de second `<h1>`**.
- **Base** (`src/layouts/Base.astro`) — pages 100 % sur mesure (ex. Découvrir
  immersif). Props `title, description, active?`. Tu fournis toi-même
  `<main id="contenu">` dans le slot.

Exemple :
```astro
---
import InnerPage from "../../layouts/InnerPage.astro";
const fil = [{ label: "Accueil", href: "/" }, { label: "Contact" }];
---
<InnerPage title="Contacter la mairie" description="…" active="mairie"
  eyebrow="Ma mairie" breadcrumb={fil}>
  <section class="…">…</section>
  <style>/* styles scopés à la page, via var(--…) */</style>
</InnerPage>
```

## Rubriques actives (`active`)
`mairie` · `demarches` · `quotidien` · `cadre` · `decouvrir` · `economie`.

## Couleurs (jetons CSS — toujours `var(--…)`, jamais de hex en dur sauf dans les SVG)
Fonds sombres : `--nuit #16140d`, `--sable #1b1810`, `--sable-2 #22201a`,
`--carte-nuit #1a1813`. Fonds clairs : `--parchemin #f4f1ea`,
`--parchemin-2 #fffdf8`. Texte clair : `--encre`, `--texte`, `--texte-2`,
`--texte-muet`. Texte sur sombre : `--clair`, `--brume`, `--brume-2`,
`--brume-muet`. Accents : `--gueules #8a2b20` (liens/boutons/CTA),
`--or #b0863c` (DÉCOR + texte sur fond sombre uniquement, jamais texte sur clair),
`--argent #c7ccd1`, `--vert #2e6b3e` (nature/tourisme). Serif titres = `--serif`
(Spectral) ; corps = `--sans` (Source Sans 3).

## Classes globales utiles
`.wrap` (conteneur 1240px), `.section` / `.section--tight`,
`.bg-parchemin(-2)` / `.bg-nuit` / `.bg-sable(-2)`, `.eyebrow` (+ `--gold`,
`--mark`), `.section-title` (+ `--light`), `.section-head`, `.metal-text`
(titre « argent natif » en dégradé clippé), `.link-more` (+ `--gold/--light/--silver`),
`.btn` (+ `--primary/--ghost/--ghost-dark/--block`), `.card`, `.card-link`,
`.tile-icon`, `.badge-online`, `.vein` (`<hr class="vein">`), `.page-main`,
`.prose`, `.lead`, `.note-card` (+ `--gueules`), `.tag` (+ `--vert/--or`),
`.meta-date`, `.action-card`, `.info-card`, `.map-placeholder` (+ `__grid/__river/__label/__sub`),
`.photo-block` (+ `__strata/__kicker/__title/__alt`), `.search-bar`,
`.visually-hidden`, `.field`, `.input`, `.textarea`, `.select`, `.consent`, `.form-status`.
Ajoute la classe **`is-dark`** à toute section à fond sombre (les focus passent en argent).
Texture rocheuse : classe `strata` sur un élément `position:relative` (ajoute un `::before`).

## Règles fermes
- **Photos** : aucune image réelle. Utilise le bloc `.photo-block` (dégradé +
  intitulé + ligne `alt :`), exactement comme la maquette.
- **Icônes** : SVG inline, trait, `viewBox="0 0 24 24"`, `stroke="currentColor"`,
  `aria-hidden="true"`. Pour une icône stockée en chaîne, `<svg …set:html={icon} />`.
- **Accessibilité (RGAA)** : un seul `<h1>` (le bandeau), puis `<h2>`/`<h3>`
  logiques ; cibles ≥ 44 px ; jamais d'info par la couleur seule ; liens internes
  avec slash final (`/contact/`).
- **Exactitude (site potentiellement officiel)** : n'invente **jamais** de nom
  d'élu. Pour « Ma mairie », le maire et les adjoints sont des **placeholders
  visibles** : `[Nom du maire — à confirmer]`, etc., avec
  `<!-- Élus à vérifier avant publication -->`. Les coordonnées viennent de
  `src/data/commune.ts` (importe `mairie`/`commune`), ne les retape pas.
- Reste dans le langage visuel de la page d'accueil. Mets le CSS propre à la
  page dans un `<style>` scopé utilisant les jetons.

## Données disponibles (`src/data/`)
`commune.ts` → `commune, mairie, partenaires, reseaux, mapsUrl` ·
`nav.ts` → `mainNav, footerNav, legalNav` ·
`actualites.ts` → `articles, filtresActualites, aLaUne, autresActus` ·
`agenda.ts` → `evenements, accentByType, legendeAgenda` ·
`demarches.ts` → `demarches, themesDemarches` ·
`vie-locale.ts` → `associations` · `home.ts`.
