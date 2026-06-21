// Données institutionnelles de la commune.
// Les coordonnées de la mairie reprennent la maquette de référence.
// Les données de cadrage (département, INSEE, population, intercommunalité,
// rivière) sont les données publiques vérifiées de Sainte-Marie-aux-Mines.

export const mapsUrl = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

export const commune = {
  nom: "Sainte-Marie-aux-Mines",
  gentile: "Saint-Mariens",
  gentileF: "Saint-Mariennes",
  departement: "Haut-Rhin",
  codeDepartement: "68",
  region: "Grand Est",
  cp: "68160",
  codeInsee: "68298",
  population: "5 000",
  populationDetail: "environ 5 000 habitants",
  intercommunalite: "Communauté de communes du Val d’Argent",
  riviere: "Lièpvrette",
  baseline: "Au cœur du Val d’Argent",
};

export const mairie = {
  nom: "Mairie de Sainte-Marie-aux-Mines",
  // Adresse corrigée : « 5 place du Prensureux » (maquette) était fictive.
  // Sources concordantes (Mappy, lannuaire.service-public.gouv.fr, Nominatim) :
  // mairie au 114 rue du Maréchal de Lattre de Tassigny. À FAIRE VALIDER par la
  // commune avant publication (de même que le téléphone). Voir docs/A-VERIFIER.md.
  adresse: "114 rue du Maréchal de Lattre de Tassigny",
  cp: "68160",
  ville: "Sainte-Marie-aux-Mines",
  // Coordonnées = géocodage Nominatim de l’adresse ci-dessus (pin de la carte).
  lat: 48.2458,
  lng: 7.1824,
  // Téléphone À VÉRIFIER : les annuaires indiquent 03 89 58 33 60. Conservé tel
  // quel ici tant que la commune n’a pas confirmé. Voir docs/A-VERIFIER.md.
  tel: "03 89 58 15 15",
  telE164: "+33389581515",
  email: "contact@sainte-marie-aux-mines.fr",
  // Horaires d’ouverture au public (repris de la maquette de référence).
  horaires: [
    { jour: "Lundi – Vendredi", h: "8h30–12h · 14h–17h" },
    { jour: "Samedi", h: "9h–12h" },
    { jour: "Dimanche", h: "Fermé", ferme: true },
  ],
};

// Réseaux sociaux officiels de la Ville. Source unique (importée par le pied de
// page). Jamais de href="#" : on liste UNIQUEMENT les comptes confirmés, sinon
// on retire l’entrée. La page Facebook « Ville de Sainte Marie aux Mines » est
// corroborée par recherche ; aucun compte Instagram/YouTube officiel n’a pu être
// confirmé → entrées retirées. À faire valider (voir docs/A-VERIFIER.md).
export const reseaux = [
  { nom: "Facebook", href: "https://www.facebook.com/SainteMarieauxMines/", icone: "facebook" },
];

export const partenaires = [
  "Communauté de communes du Val d’Argent",
  "Collectivité européenne d’Alsace",
  "Région Grand Est",
];
