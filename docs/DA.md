# Direction artistique — Site de Sainte-Marie-aux-Mines

> Document de référence. La charte ci-dessous est appliquée dans
> `src/styles/tokens.css` (jetons) et `src/styles/global.css` (système).

## 1. L'âme de la ville → traduction visuelle

Sainte-Marie-aux-Mines n'est pas une commune alsacienne parmi d'autres : c'est
**mille ans d'argent**, **1 100 mines**, **300 km de galeries**, et une ville née
de **deux rives** — lorraine catholique et alsacienne luthérienne — séparées par
la **Lièpvrette** puis réunies en 1790. Trois idées portent tout le design :

| Idée de la ville | Traduction graphique |
|---|---|
| L'argent natif, la roche, l'obscurité des galeries | Fonds **sable sombre** (galeries), titres en **dégradé métallique** (argent natif), texture de **strate rocheuse** en filets diagonaux |
| La dualité fondatrice (deux rives) | **Ligne de partage** verticale argentée (rappel de la Lièpvrette) dans le hero et la section Découvrir ; composition « deux versants » dans la page Découvrir |
| Le mineur (blason : marteau + pointerolle en sautoir) | **Motif signature** marteau + pointerolle croisés, en surtitre de section et dans le blason |

Le critère de réussite : chaque écran doit être **immédiatement** reconnaissable
comme Sainte-Marie-aux-Mines — pas Wintzenheim, pas une commune générique.

## 2. Palette appliquée (conforme RGAA)

Ancrée dans les couleurs réelles du blason (sable, gueules de Ribeaupierre, or,
argent), adaptée pour le contraste.

- **Galeries (fonds sombres)** : `--nuit #16140d`, `--sable #1b1810`,
  `--sable-2 #22201a`. Portent le hero, les bandeaux, le pied de page et les
  sections immersives.
- **Parchemin (fonds clairs, chauds)** : `--parchemin #f4f1ea`,
  `--parchemin-2 #fffdf8` — jamais de blanc clinique.
- **Gueules `--gueules #8a2b20`** : couleur d'action. **Tous** les liens, boutons
  et accents porteurs. ~8.7:1 sur parchemin → AA confortable.
- **Or `--or #b0863c`** : **décoratif** + texte **sur fond sombre uniquement**
  (5.9:1 sur nuit). Surtitres sur galerie, filets, baseline, puces. **Jamais**
  de texte or sur fond clair.
- **Argent `--argent #c7ccd1`** : métal. Nombres-clés sur fond sombre, outils du
  mineur, contour de focus sur fond sombre, dégradé métallique des titres.
- **Vert vosgien `--vert #2e6b3e`** : nature, tourisme, pastilles « en ligne ».
  Second accent porteur.

**Règles non négociables** : info jamais portée par la couleur seule (toujours
doublée d'une icône, d'un libellé ou d'un soulignement) ; l'or ne « brille » que
sur fond sombre.

## 3. Typographie

- **Titres — Spectral** (serif à empattements fins, gravé) : H1–H3, nombres-clés,
  citations en italique. Évoque l'inscription lapidaire sans sacrifier la
  lisibilité.
- **Corps — Source Sans 3** (sans-serif neutre, très lisible) : texte courant, UI,
  surtitres en capitales espacées.
- **Auto-hébergées** via `@fontsource` (Spectral + Source Sans 3) : **aucune**
  requête Google Fonts (conformité RGPD/CNIL pour une collectivité).
- Contraste serif/sans fort = sérieux institutionnel + caractère.

## 4. Motifs & matière (subtilité avant tout)

- **Marteau + pointerolle croisés** (`MinerTools.astro`) : ornement de surtitre,
  présent au blason. Toujours décoratif (`aria-hidden`).
- **Veine minérale** (`.vein`) : séparateur horizontal gueules → or → gueules.
- **Strate rocheuse** (`.strata`) : `repeating-linear-gradient` diagonal très
  discret (opacité ~0.035) sur les fonds sombres.
- **Ligne de partage** (`.partition`) : filet vertical argenté en dégradé — la
  Lièpvrette. Masquée sur mobile (sans rôle compositionnel en colonne).
- **Photographies réelles** (`.photo-block--photo`) : clichés du patrimoine
  (Wikimedia Commons) intégrés dans les cadres — maisons Renaissance de la rue
  Reber, église Saint-Louis, Lièpvrette, uniforme de mineur de Tellure, forêt
  vosgienne, vue de la ville — chacun crédité (auteur · licence). Ce sont elles
  qui ancrent le plus fortement l'identité de la ville.

### Équilibre clair / sombre (révisé)
Le sombre est un **accent d'identité**, pas le fond dominant : il porte
l'en-tête, le pied de page, la bande hero et **un seul** moment immersif
« galerie » (l'intro de Découvrir + la dualité des deux rives). Tout le reste —
bandeaux de page, démocratie locale, cartes de Découvrir — est sur **parchemin
clair et chaud**. Résultat : un site lumineux et accueillant, ponctué de
respirations sombres qui évoquent les galeries, jamais écrasé par le noir.

## 5. Composants clés du système

Bandeau de page sombre (fil d'Ariane + surtitre + H1) ; cartes parchemin à
survol gueules ; tuiles de service à icône « ardoise » ; lignes d'agenda à filet
latéral coloré ; statistiques argent/or ; barre de recherche emblématique (loupe
gueules) ; en-tête à menus déroulants **CSS pur** (hover + `:focus-within`, zéro
JS superflu) ; tiroir mobile natif `<details>`.

## 6. Accessibilité = argument de vente

Conçue dès la maquette (RGAA / WCAG 2.1 AA, obligation pour les communes de
+5 000 hab.) : contrastes pré-validés, focus visibles nets (argent sur sombre,
gueules sur clair), navigation clavier complète, cibles ≥ 44 px, lien
d'évitement, hiérarchie de titres stricte (un seul `<h1>`), `lang="fr"`,
`prefers-reduced-motion` respecté, et un **sélecteur d'accessibilité**
fonctionnel (taille du texte ×1 / ×1.15 / ×1.3 + contraste renforcé, mémorisé).
Statut affiché en pied de page avec lien vers la déclaration.

## 7. Anti-patterns proscrits (et évités)

Pas de dégradés violet/indigo, pas de glassmorphism, pas d'emojis dans l'UI, pas
de grille morte 3×3 répétée, pas de hero générique « titre + 2 boutons », pas de
stock-photo ni d'image IA, pas d'ombres et de coins arrondis partout. Chaque
section est ré-ancrée dans l'argent, la dualité, le mineur ou la Lièpvrette.
