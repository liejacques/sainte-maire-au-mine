// Photothèque — clichés libres de droit de Sainte-Marie-aux-Mines (Wikimedia
// Commons). Les images vivent dans src/assets/images/ et sont importées comme
// ImageMetadata : Astro (astro:assets) génère au build des variantes
// responsive (AVIF/WebP, plusieurs tailles) via les composants <Image>/<Picture>.
// Le crédit auteur + licence est OBLIGATOIRE (légende + page « Crédits photos »).
// Régénérer / ajouter des clichés : `node scripts/fetch-photos.mjs`.
import type { ImageMetadata } from "astro";

import galerieSaintJean from "../assets/images/galerie-saint-jean.webp";
import galerieSaintJean2 from "../assets/images/galerie-saint-jean-2.webp";
import argentTetraedrite from "../assets/images/argent-tetraedrite.webp";
import pointerolle from "../assets/images/pointerolle.webp";
import vueVille from "../assets/images/vue-ville.webp";
import echery from "../assets/images/echery-vallee.webp";
import maisonReber40 from "../assets/images/maison-reber-40.webp";
import maisonColombage from "../assets/images/maison-colombage.webp";
import maisonReber32 from "../assets/images/maison-reber-32.webp";
import egliseSaintLouis from "../assets/images/eglise-saint-louis.webp";
import egliseSainteMadeleine from "../assets/images/eglise-sainte-madeleine.webp";
import liepvrette from "../assets/images/liepvrette.webp";
import mineurTellure from "../assets/images/mineur-tellure.webp";
import foretVosgienne from "../assets/images/foret-vosgienne.webp";
import patrimoine110 from "../assets/images/patrimoine-110.webp";

export interface Photo {
  /** Image importée (astro:assets) : largeur/hauteur connues → zéro CLS. */
  img: ImageMetadata;
  alt: string;
  titre: string;
  auteur: string;
  licence: string;
  /** Page du fichier sur Wikimedia Commons (lien depuis la page Crédits). */
  source?: string;
}

const COMMONS = "https://commons.wikimedia.org/wiki/File:";

export const photos = {
  // ---- Mines & minéraux : le cœur d'identité « mille ans d'argent » -------
  galerieSaintJean: {
    img: galerieSaintJean,
    alt: "Galerie souterraine de la mine Saint-Jean Engelsbourg, parois de roche taillées et éclairées",
    titre: "Galerie de la mine Saint-Jean",
    auteur: "Ji-Elle", licence: "CC BY-SA 4.0",
    source: COMMONS + "Mine_Saint-Jean_Engelsbourg_(12).jpg",
  },
  galerieSaintJean2: {
    img: galerieSaintJean2,
    alt: "Galerie étroite creusée dans la roche à la mine Saint-Jean Engelsbourg",
    titre: "Mine Saint-Jean — galerie",
    auteur: "Ji-Elle", licence: "CC BY-SA 4.0",
    source: COMMONS + "Mine_Saint-Jean_Engelsbourg_(10).jpg",
  },
  argentTetraedrite: {
    img: argentTetraedrite,
    alt: "Échantillon de tétraédrite argentifère, minerai d'argent gris métallique sur sa gangue",
    titre: "Tétraédrite argentifère",
    auteur: "Ji-Elle", licence: "CC BY-SA 3.0",
    source: COMMONS + "Tétraédrite_argentifère-Musée_d'histoire_naturelle_et_d'ethnographie_de_Colmar.jpg",
  },
  pointerolle: {
    img: pointerolle,
    alt: "Pointerolle de mineur, pointe d'acier fichée dans la roche d'une galerie",
    titre: "Pointerolle de mineur",
    auteur: "Ji-Elle", licence: "CC BY-SA 4.0",
    source: COMMONS + "Pointerolle-Mine_Saint-Jean_Engelsbourg.jpg",
  },

  // ---- Ville, vallée & patrimoine bâti ------------------------------------
  vueVille: {
    img: vueVille,
    alt: "Sainte-Marie-aux-Mines vue des hauteurs : toits de la ville, lycée, piscine et théâtre au fond de la vallée boisée",
    titre: "Vue de la ville depuis les hauteurs",
    auteur: "Michel G", licence: "CC BY 3.0",
    source: COMMONS + "Au_premier_plan-Le_lycée-la_piscine-_le_théatre_-_panoramio.jpg",
  },
  echery: {
    img: echery,
    alt: "Le hameau d'Échery et ses maisons anciennes au fond de la vallée de la Lièpvrette",
    titre: "Le hameau d'Échery",
    auteur: "Michel G", licence: "CC BY 3.0",
    source: COMMONS + "Echery_-_panoramio.jpg",
  },
  maisonReber40: {
    img: maisonReber40,
    alt: "Maisons Renaissance à colombages, rue Reber (nos 15-17) à Sainte-Marie-aux-Mines",
    titre: "Maisons Renaissance, rue Reber",
    auteur: "Ralph Hammann - Wikimedia Commons", licence: "CC BY-SA 4.0",
    source: COMMONS + "SteMarieMines_rReber_15-17.JPG",
  },
  maisonColombage: {
    img: maisonColombage,
    alt: "Maison à colombages et oriel sculpté, no 16 rue Reber à Sainte-Marie-aux-Mines",
    titre: "Maison à colombages, rue Reber",
    auteur: "Alf van Beem", licence: "CC0",
    source: COMMONS + "Rue_Reber_No_16,_Sainte-Marie-aux-Mines,_Alsace.JPG",
  },
  maisonReber32: {
    img: maisonReber32,
    alt: "Façade Renaissance, rue Reber à Sainte-Marie-aux-Mines",
    titre: "Façade Renaissance, rue Reber",
    auteur: "Alf van Beem", licence: "CC0",
  },
  egliseSaintLouis: {
    img: egliseSaintLouis,
    alt: "Façade de l'église Saint-Louis de Sainte-Marie-aux-Mines",
    titre: "Église Saint-Louis",
    auteur: "olive.titus", licence: "CC BY 2.0",
  },
  egliseSainteMadeleine: {
    img: egliseSainteMadeleine,
    alt: "L'église Sainte-Madeleine à Sainte-Marie-aux-Mines",
    titre: "Église Sainte-Madeleine",
    auteur: "Rauenstein", licence: "CC BY-SA 3.0",
  },
  liepvrette: {
    img: liepvrette,
    alt: "La Lièpvrette traversant Sainte-Marie-aux-Mines",
    titre: "La Lièpvrette",
    auteur: "Bernard Chenal", licence: "CC BY-SA 3.0",
  },
  mineurTellure: {
    img: mineurTellure,
    alt: "Uniforme de mineur, parc minier Tellure",
    titre: "Uniforme de mineur — Tellure",
    auteur: "Ji-Elle", licence: "CC BY-SA 4.0",
  },
  foretVosgienne: {
    img: foretVosgienne,
    alt: "Forêt du Val d'Argent près de Sainte-Marie-aux-Mines",
    titre: "Forêt du Val d'Argent",
    auteur: "Rémih", licence: "CC BY-SA 4.0",
  },
  patrimoine110: {
    img: patrimoine110,
    alt: "Rue et patrimoine bâti de Sainte-Marie-aux-Mines",
    titre: "Patrimoine bâti",
    auteur: "Bernard Chenal", licence: "CC BY-SA 3.0",
  },
} satisfies Record<string, Photo>;

export const photosList: Photo[] = Object.values(photos);
