// Agenda — source unique pour la page d'accueil, la liste /agenda/ et les
// fiches /agenda/[slug]/. Contenu de démonstration.

export type EventType = "habitant" | "touristique";

export interface EventItem {
  slug: string;
  titre: string;
  type: EventType;
  typeLabel: string; // libellé de la pastille
  day: string;
  month: string;
  iso: string; // datetime de début
  lieu: string;
  horaire?: string;
  resume: string;
  contenu: string[];
  /** Lien externe à la fiche agenda générique (ex. page vitrine dédiée). Quand
   *  il est présent, les listings pointent ici et aucune fiche /agenda/[slug]/
   *  n'est générée. */
  lien?: string;
}

// Couleur d'accent par type (doublée d'un libellé : jamais l'info par la couleur seule).
export const accentByType: Record<EventType, string> = {
  habitant: "var(--gueules)",
  touristique: "var(--vert)",
};

export const evenements: EventItem[] = [
  {
    slug: "mineral-gem-2026",
    titre: "Mineral & Gem 2026 — 61ᵉ édition « Nuances de Fer »",
    type: "touristique",
    typeLabel: "Mineral & Gem",
    day: "27",
    month: "Juin",
    iso: "2026-06-27",
    lieu: "Val d'Argent Expo — centre-ville",
    horaire: "Du 24 au 28 juin · grand public sam. 27 & dim. 28 (9h–18h)",
    resume:
      "Le 2ᵉ salon minéralogique mondial transforme la ville. Thème 2026 : « Nuances de Fer ». Ouvert au grand public les samedi 27 et dimanche 28 juin.",
    contenu: [
      "Cinq jours durant, Sainte-Marie-aux-Mines devient la capitale mondiale du minéral. Deuxième manifestation du genre après Tucson et leader européen, Mineral & Gem rassemble plus de 1 000 exposants internationaux sur près de 52 000 m².",
      "Minéraux, fossiles, météorites d'un côté ; pierres taillées, joaillerie et gemmologie de l'autre. L'édition 2026 met le fer à l'honneur avec l'exposition prestige « Nuances de Fer ».",
      "Le salon ouvre au grand public les samedi 27 et dimanche 28 juin. Découvrez la présentation complète sur la page dédiée ; les informations pratiques figurent sur le site officiel de l'événement.",
    ],
    lien: "/decouvrir/mineral-gem/",
  },
  {
    slug: "conseil-municipal-juin",
    titre: "Séance publique du conseil municipal",
    type: "habitant",
    typeLabel: "Habitant",
    day: "30",
    month: "Juin",
    iso: "2026-06-30",
    lieu: "Salle du conseil, mairie",
    horaire: "19h00",
    resume:
      "Séance ouverte au public. L'ordre du jour est affiché en mairie et mis en ligne avant la séance.",
    contenu: [
      "Le conseil municipal se réunit en séance publique. Les habitants sont les bienvenus pour assister aux débats.",
      "L'ordre du jour est consultable en mairie et dans la rubrique Démocratie locale quelques jours avant la séance. Le procès-verbal est publié après approbation.",
    ],
  },
  {
    slug: "fete-musique-marche-nocturne",
    titre: "Fête de la musique & marché nocturne",
    type: "habitant",
    typeLabel: "Habitant",
    day: "05",
    month: "Juil",
    iso: "2026-07-05",
    lieu: "Place du Prensureux",
    horaire: "À partir de 18h",
    resume:
      "Scènes ouvertes, food-trucks et marché nocturne des artisans au cœur de la ville.",
    contenu: [
      "La musique investit la ville le temps d'une soirée. Scènes ouvertes, groupes locaux et animations gratuites se succèdent place du Prensureux et dans les rues du centre.",
      "Un marché nocturne réunit producteurs et artisans, accompagné de food-trucks. Entrée libre, tout public.",
    ],
  },
  {
    slug: "bal-feu-artifice-14-juillet",
    titre: "Bal & feu d'artifice du 14 juillet",
    type: "habitant",
    typeLabel: "Habitant",
    day: "14",
    month: "Juil",
    iso: "2026-07-14",
    lieu: "Stade municipal",
    horaire: "Bal dès 20h · feu à 22h30",
    resume:
      "Soirée festive et feu d'artifice tiré au-dessus de la vallée pour la fête nationale.",
    contenu: [
      "La commune célèbre la fête nationale au stade municipal : bal populaire, restauration sur place et grand feu d'artifice tiré au-dessus de la vallée.",
      "Accès gratuit. Des cheminements et un stationnement adaptés sont prévus ; pensez au covoiturage.",
    ],
  },
  {
    slug: "forum-des-associations",
    titre: "Forum des associations",
    type: "habitant",
    typeLabel: "Habitant",
    day: "06",
    month: "Sept",
    iso: "2026-09-06",
    lieu: "Espace associatif",
    horaire: "10h–17h",
    resume:
      "Sport, culture, solidarité : à la rencontre des associations du Val d'Argent pour préparer la saison.",
    contenu: [
      "Le forum des associations réunit en un seul lieu les clubs et associations de la commune et de la vallée. L'occasion idéale de s'inscrire pour la nouvelle saison, de découvrir des activités et de rencontrer les bénévoles.",
      "Démonstrations et animations tout au long de la journée. Entrée libre.",
    ],
  },
  {
    slug: "journees-patrimoine-mine",
    titre: "Journées du patrimoine — descente en mine",
    type: "touristique",
    typeLabel: "Touristique",
    day: "20",
    month: "Sept",
    iso: "2026-09-20",
    lieu: "Mine-musée Tellure",
    horaire: "Visites guidées sur réservation",
    resume:
      "Une descente exceptionnelle dans les galeries d'argent, casque et lampe fournis, pour les Journées européennes du patrimoine.",
    contenu: [
      "À l'occasion des Journées européennes du patrimoine, la mine-musée Tellure propose des descentes guidées dans les galeries d'argent. Casque et lampe fournis ; prévoyez des vêtements chauds.",
      "Places limitées, réservation conseillée auprès du parc minier. Un parcours en surface est également proposé pour les visiteurs ne pouvant descendre.",
    ],
  },
];

export const legendeAgenda = [
  { type: "habitant" as EventType, label: "Événement habitant" },
  { type: "touristique" as EventType, label: "Événement touristique" },
];
