// Photothèque — clichés libres de droit de Sainte-Marie-aux-Mines (Wikimedia
// Commons), optimisés en WebP dans /public/images/. Le crédit auteur + licence
// est OBLIGATOIRE (affiché en légende et sur la page « Crédits photos »).
// Régénérer / ajouter des clichés : `node scripts/fetch-photos.mjs`.

export interface Photo {
  src: string;
  alt: string;
  titre: string;
  auteur: string;
  licence: string;
  /** ratio largeur/hauteur, pour réserver la place (évite les sauts de mise en page) */
  w: number;
  h: number;
  /** Page du fichier sur Wikimedia Commons (lien depuis la page Crédits). */
  source?: string;
}

const COMMONS = "https://commons.wikimedia.org/wiki/File:";

export const photos = {
  // ---- Mines & minéraux : le cœur d'identité « mille ans d'argent » -------
  galerieSaintJean: {
    src: "/images/galerie-saint-jean.webp",
    alt: "Galerie souterraine de la mine Saint-Jean Engelsbourg, parois de roche taillées et éclairées",
    titre: "Galerie de la mine Saint-Jean",
    auteur: "Ji-Elle", licence: "CC BY-SA 4.0", w: 1500, h: 2000,
    source: COMMONS + "Mine_Saint-Jean_Engelsbourg_(12).jpg",
  },
  galerieSaintJean2: {
    src: "/images/galerie-saint-jean-2.webp",
    alt: "Galerie étroite creusée dans la roche à la mine Saint-Jean Engelsbourg",
    titre: "Mine Saint-Jean — galerie",
    auteur: "Ji-Elle", licence: "CC BY-SA 4.0", w: 1500, h: 2000,
    source: COMMONS + "Mine_Saint-Jean_Engelsbourg_(10).jpg",
  },
  argentTetraedrite: {
    src: "/images/argent-tetraedrite.webp",
    alt: "Échantillon de tétraédrite argentifère, minerai d'argent gris métallique sur sa gangue",
    titre: "Tétraédrite argentifère",
    auteur: "Ji-Elle", licence: "CC BY-SA 3.0", w: 1500, h: 1302,
    source: COMMONS + "Tétraédrite_argentifère-Musée_d'histoire_naturelle_et_d'ethnographie_de_Colmar.jpg",
  },
  pointerolle: {
    src: "/images/pointerolle.webp",
    alt: "Pointerolle de mineur, pointe d'acier fichée dans la roche d'une galerie",
    titre: "Pointerolle de mineur",
    auteur: "Ji-Elle", licence: "CC BY-SA 4.0", w: 1500, h: 1125,
    source: COMMONS + "Pointerolle-Mine_Saint-Jean_Engelsbourg.jpg",
  },

  // ---- Ville, vallée & patrimoine bâti ------------------------------------
  vueVille: {
    src: "/images/vue-ville.webp",
    alt: "Sainte-Marie-aux-Mines vue des hauteurs : toits de la ville, lycée, piscine et théâtre au fond de la vallée boisée",
    titre: "Vue de la ville depuis les hauteurs",
    auteur: "Michel G", licence: "CC BY 3.0", w: 1500, h: 1125,
    source: COMMONS + "Au_premier_plan-Le_lycée-la_piscine-_le_théatre_-_panoramio.jpg",
  },
  echery: {
    src: "/images/echery-vallee.webp",
    alt: "Le hameau d'Échery et ses maisons anciennes au fond de la vallée de la Lièpvrette",
    titre: "Le hameau d'Échery",
    auteur: "Michel G", licence: "CC BY 3.0", w: 1500, h: 1125,
    source: COMMONS + "Echery_-_panoramio.jpg",
  },
  maisonReber40: {
    src: "/images/maison-reber-40.webp",
    alt: "Maisons Renaissance à colombages, rue Reber (nos 15-17) à Sainte-Marie-aux-Mines",
    titre: "Maisons Renaissance, rue Reber",
    auteur: "Ralph Hammann - Wikimedia Commons", licence: "CC BY-SA 4.0", w: 1500, h: 1125,
    source: COMMONS + "SteMarieMines_rReber_15-17.JPG",
  },
  maisonColombage: {
    src: "/images/maison-colombage.webp",
    alt: "Maison à colombages et oriel sculpté, no 16 rue Reber à Sainte-Marie-aux-Mines",
    titre: "Maison à colombages, rue Reber",
    auteur: "Alf van Beem", licence: "CC0", w: 1200, h: 1600,
    source: COMMONS + "Rue_Reber_No_16,_Sainte-Marie-aux-Mines,_Alsace.JPG",
  },
  maisonReber32: {
    src: "/images/maison-reber-32.webp",
    alt: "Façade Renaissance, rue Reber à Sainte-Marie-aux-Mines",
    titre: "Façade Renaissance, rue Reber",
    auteur: "Alf van Beem", licence: "CC0", w: 1500, h: 1125,
  },
  egliseSaintLouis: {
    src: "/images/eglise-saint-louis.webp",
    alt: "Façade de l'église Saint-Louis de Sainte-Marie-aux-Mines",
    titre: "Église Saint-Louis",
    auteur: "olive.titus", licence: "CC BY 2.0", w: 1500, h: 1125,
  },
  egliseSainteMadeleine: {
    src: "/images/eglise-sainte-madeleine.webp",
    alt: "L'église Sainte-Madeleine à Sainte-Marie-aux-Mines",
    titre: "Église Sainte-Madeleine",
    auteur: "Rauenstein", licence: "CC BY-SA 3.0", w: 1500, h: 2090,
  },
  liepvrette: {
    src: "/images/liepvrette.webp",
    alt: "La Lièpvrette traversant Sainte-Marie-aux-Mines",
    titre: "La Lièpvrette",
    auteur: "Bernard Chenal", licence: "CC BY-SA 3.0", w: 1500, h: 1125,
  },
  mineurTellure: {
    src: "/images/mineur-tellure.webp",
    alt: "Uniforme de mineur, parc minier Tellure",
    titre: "Uniforme de mineur — Tellure",
    auteur: "Ji-Elle", licence: "CC BY-SA 4.0", w: 1500, h: 2425,
  },
  foretVosgienne: {
    src: "/images/foret-vosgienne.webp",
    alt: "Forêt du Val d'Argent près de Sainte-Marie-aux-Mines",
    titre: "Forêt du Val d'Argent",
    auteur: "Rémih", licence: "CC BY-SA 4.0", w: 1500, h: 1125,
  },
  patrimoine110: {
    src: "/images/patrimoine-110.webp",
    alt: "Rue et patrimoine bâti de Sainte-Marie-aux-Mines",
    titre: "Patrimoine bâti",
    auteur: "Bernard Chenal", licence: "CC BY-SA 3.0", w: 1500, h: 1125,
  },
} satisfies Record<string, Photo>;

export const photosList: Photo[] = Object.values(photos);
