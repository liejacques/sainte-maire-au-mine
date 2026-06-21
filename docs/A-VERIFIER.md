# À vérifier avant publication

> Liste des données **provisoires, recherchées ou à confirmer** par la commune
> avant la mise en ligne du site. Tant qu'une ligne n'est pas validée par la
> mairie, elle ne doit pas être considérée comme officielle. Rien dans cette
> liste n'a été inventé : les valeurs proposées s'appuient sur des sources
> publiques citées, mais une source tierce (annuaire, géocodeur) peut être
> datée ou imprécise.

## 1. Adresse & contact de la mairie

| Donnée | Valeur sur le site | Constat / source | Action |
|---|---|---|---|
| Adresse | `114 rue du Maréchal de Lattre de Tassigny, 68160` (BP 8) | Corroborée par le **site officiel** (saintemarieauxmines.fr/contact), **lannuaire.service-public.gouv.fr**, **Mappy** et le géocodage **Nominatim** — confiance haute. « 5 place du Prensureux » (maquette) n'est PAS la mairie : cette place est associée à l'**office de tourisme du Val d'Argent**. | **Confirmer** l'adresse exacte (n° de voirie / BP) auprès de la mairie. |
| Coordonnées GPS | `48.2458, 7.1824` | Géocodage Nominatim de l'adresse ci-dessus. Sert uniquement à positionner le marqueur de la carte. | Vérifier que le marqueur tombe bien sur l'hôtel de ville. |
| Téléphone | `03 89 58 15 15` (affiché) | Le **site officiel** et les annuaires indiquent plutôt **03 89 58 33 60**. Numéro de la maquette conservé tel quel ici (non confirmé fictif), mais probablement à corriger. | **Trancher** le bon numéro d'accueil et le corriger dans `src/data/commune.ts`. |
| E-mail | `contact@sainte-marie-aux-mines.fr` | Non vérifié. | Confirmer l'adresse de contact réelle. |
| Horaires | Lun–Ven 8h30–12h / 14h–17h ; Sam 9h–12h | Repris de la maquette. Les annuaires mentionnent des horaires différents (ex. fermeture 17h30 en semaine, pas d'ouverture le samedi). | Confirmer les horaires d'ouverture au public. |

> Fichier concerné : `src/data/commune.ts` (objet `mairie`).

## 2. Nom de domaine officiel

- Le site est configuré sur **`https://www.sainte-marie-aux-mines.fr`**
  (`astro.config.mjs`, sert aux URL canoniques, sitemap, Open Graph).
- Or les annuaires renvoient vers **`saintemarieauxmines.fr`** (sans tirets)
  comme site officiel actuel.
- **Action :** confirmer le domaine de publication définitif et, si besoin,
  mettre à jour `SITE` dans `astro.config.mjs` (impacte canoniques + OG).

## 3. Élus (placeholders — aucun nom publié)

Les fiches élus affichent des **placeholders visibles** (`[Nom du maire — à
confirmer]`, etc.) : aucun nom n'est inventé. À renseigner après les
**municipales de mars 2026** (les annuaires peuvent encore lister l'équipe
précédente).

- Maire : les annuaires (la-mairie.com, pappers) listent **Noëllie Hestin** —
  **à confirmer** comme maire en exercice post-mars 2026.
- Adjoint·e·s et délégations : à fournir par la commune.
- Liste des conseiller·ère·s municipaux : à fournir.
- Directeur·rice de la publication (mentions légales) : le maire en exercice.

> Fichiers : `src/pages/ma-mairie/index.astro`, `src/pages/mentions-legales/index.astro`.

## 4. Réseaux sociaux

- **Facebook** : page « Ville de Sainte Marie aux Mines »
  (`https://www.facebook.com/SainteMarieauxMines/`) — trouvée et corroborée par
  recherche, **publiée mais à confirmer** comme page officielle de la mairie
  (et non une page communautaire ou de l'office de tourisme).
- **Instagram / YouTube** : **aucun compte officiel confirmé** → entrées
  **retirées** (pas de lien mort `#`). À ajouter dans `reseaux`
  (`src/data/commune.ts`) si la commune en possède.

## 5. Affirmations historiques de la page d'accueil

À étayer par une source fiable (ou à reformuler/retirer si non vérifiables). Ces
formulations figurent sur l'accueil et la page Découvrir :

- [ ] « **Goethe** collectionnait nos minéraux » — Goethe et la minéralogie de
  Sainte-Marie-aux-Mines : sourcer précisément (séjour, collection, mention).
- [ ] « **Charles Quint** reçut notre argent » — lien entre l'argent du Val
  d'Argent et l'empereur : sourcer.
- [ ] « **592 kg** d'argent extrait en **1581** » — origine du chiffre et de la
  date (bloc d'argent natif) : sourcer.

> Fichiers : `src/pages/index.astro` (hero badge + section « Découvrir »),
> `src/pages/decouvrir/index.astro` (bande de statistiques).

## 6. Photographies (Wikimedia Commons)

Les clichés ajoutés sont libres de droit et crédités (auteur · licence) en
légende et sur `/credits-photos/`, avec lien vers la page Commons du fichier.
Auteurs/licences déclarés (à recouper avec la page Commons en cas de doute) :

- `galerie-saint-jean*`, `pointerolle` — Ji-Elle, CC BY-SA 4.0
- `argent-tetraedrite` — Ji-Elle, CC BY-SA 3.0
- `vue-ville`, `echery-vallee` — Michel G, CC BY 3.0
- `maison-reber-40` — Ralph Hammann - Wikimedia Commons, CC BY-SA 4.0
- `maison-colombage` — Alf van Beem, CC0

> Régénérer les images : `node scripts/fetch-photos.mjs`. Données :
> `src/data/photos.ts`.

## 7. Contenu de démonstration

Actualités, agenda, annuaire des associations, réservations de salles, etc.
sont du **contenu d'exemple** (visible dans `src/data/` et l'espace `/admin`).
À remplacer par les contenus réels de la commune avant publication.
