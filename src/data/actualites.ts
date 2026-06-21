// Actualités — source unique pour la page d'accueil, la liste /actualites/ et
// les fiches détaillées /actualites/[slug]/. Contenu de démonstration ;
// chaque article est illustré par un cliché réel du patrimoine (photos.ts).
import { photos, type Photo } from "./photos";

export type TagVariant = "gueules" | "vert" | "or";

export interface Article {
  slug: string;
  titre: string;
  categorie: string;
  /** Clé de filtre sur la page liste. */
  filtre: string;
  tag: TagVariant;
  date: string; // affichage
  iso: string; // datetime
  resume: string;
  image: Photo; // cliché illustrant l'article
  contenu: string[]; // paragraphes
  miseEnAvant?: boolean;
}

export const articles: Article[] = [
  {
    slug: "place-du-prensureux-renovation",
    titre: "La place du Prensureux fait peau neuve",
    categorie: "Cadre de vie",
    filtre: "cadre",
    tag: "vert",
    date: "12 juin 2026",
    iso: "2026-06-12",
    resume:
      "Espaces végétalisés, fontaine restaurée et nouveaux bancs : le réaménagement du cœur de ville débute cet été pour une livraison prévue au printemps 2027.",
    image: photos.vueVille,
    contenu: [
      "Le cœur de ville entame sa transformation. Dès cet été, la place du Prensureux fait l'objet d'un réaménagement complet pensé autour de trois priorités : la place du piéton, la végétalisation et la mise en valeur du patrimoine.",
      "Le projet prévoit la création d'espaces végétalisés, la restauration de la fontaine historique et l'installation de nouveaux bancs et d'un éclairage sobre. La circulation et le stationnement seront repensés pour apaiser le centre tout en préservant l'accès aux commerces.",
      "Les travaux se dérouleront par phases afin de limiter la gêne, pour une livraison prévue au printemps 2027. Une réunion publique de présentation se tiendra à la mairie ; la date sera communiquée dans l'agenda.",
    ],
    miseEnAvant: true,
  },
  {
    slug: "budget-2026-vote",
    titre: "Budget 2026 voté à l'unanimité",
    categorie: "Vie locale",
    filtre: "vie",
    tag: "gueules",
    date: "5 juin 2026",
    iso: "2026-06-05",
    resume:
      "Priorité aux écoles, à la rénovation énergétique et au patrimoine minier.",
    image: photos.egliseSaintLouis,
    contenu: [
      "Le conseil municipal a adopté à l'unanimité le budget primitif 2026. Construit dans un contexte maîtrisé, il maintient les taux d'imposition communaux et dégage une capacité d'investissement consacrée en priorité aux services du quotidien.",
      "Trois axes structurent les dépenses d'équipement : la rénovation et la sécurité des écoles, la performance énergétique des bâtiments communaux, et la valorisation du patrimoine minier qui fait la singularité du Val d'Argent.",
      "Le détail des recettes et des dépenses sera mis en ligne dans la rubrique Budget & finances et présenté lors d'une prochaine réunion publique.",
    ],
  },
  {
    slug: "marche-du-samedi-sagrandit",
    titre: "Le marché du samedi s'agrandit",
    categorie: "Vie locale",
    filtre: "vie",
    tag: "vert",
    date: "28 mai 2026",
    iso: "2026-05-28",
    resume:
      "Six nouveaux producteurs locaux rejoignent le marché dès le mois de juin.",
    image: photos.maisonReber40,
    contenu: [
      "Le marché hebdomadaire du samedi matin s'étoffe : six nouveaux producteurs locaux y prennent place dès le mois de juin, renforçant l'offre en circuits courts.",
      "Maraîchers, fromagers, apiculteurs et artisans du Val d'Argent rejoignent les étals installés au cœur de la ville. Le marché reste ouvert chaque samedi matin.",
    ],
  },
  {
    slug: "mineral-gem-2026-programme",
    titre: "Mineral & Gem 2026 : le programme dévoilé",
    categorie: "Culture",
    filtre: "culture",
    tag: "or",
    date: "20 mai 2026",
    iso: "2026-05-20",
    resume:
      "La 62ᵉ édition s'annonce record avec un pavillon dédié à l'argent natif.",
    image: photos.galerieSaintJean,
    contenu: [
      "Rendez-vous incontournable de l'été, la bourse minéralogique internationale Mineral & Gem dévoile le programme de sa 62ᵉ édition. Deuxième manifestation du genre au monde après Tucson, elle réunit près de 1 000 exposants et plus de 42 000 visiteurs.",
      "Cette année, un pavillon est spécialement dédié à l'argent natif, en écho à l'histoire minière de la ville. Conférences, démonstrations de taille et espace jeune public complètent le parcours.",
      "L'événement se tient dans le centre-ville et au Théâtre municipal. Informations pratiques et accès à retrouver dans l'agenda.",
    ],
  },
  {
    slug: "rue-wilson-circulation",
    titre: "Rue Wilson : circulation modifiée jusqu'en juillet",
    categorie: "Travaux",
    filtre: "travaux",
    tag: "gueules",
    date: "14 mai 2026",
    iso: "2026-05-14",
    resume:
      "Les travaux de réseaux d'eau imposent une déviation temporaire.",
    image: photos.echery,
    contenu: [
      "Des travaux de renouvellement des réseaux d'eau potable sont engagés rue Wilson. Ils imposent une circulation alternée et une déviation temporaire jusqu'au mois de juillet.",
      "L'accès des riverains et des secours est maintenu en permanence. La municipalité remercie les usagers de leur compréhension et invite à respecter la signalisation mise en place.",
    ],
  },
  {
    slug: "inscriptions-scolaires-ouverture",
    titre: "Inscriptions scolaires : ouverture le 12 mai",
    categorie: "Enfance & école",
    filtre: "enfance",
    tag: "vert",
    date: "6 mai 2026",
    iso: "2026-05-06",
    resume:
      "Les familles peuvent inscrire leurs enfants en ligne dès le 12 mai.",
    image: photos.patrimoine110,
    contenu: [
      "Les inscriptions scolaires pour la rentrée de septembre ouvrent le 12 mai. La démarche s'effectue en ligne depuis la rubrique Mon quotidien, ou en mairie auprès du service scolaire.",
      "Sont concernés les enfants entrant en maternelle ainsi que les nouveaux arrivants sur la commune. Pensez à préparer le livret de famille, un justificatif de domicile et le carnet de santé.",
    ],
  },
  {
    slug: "saison-culturelle-billetterie",
    titre: "Saison culturelle : la billetterie est ouverte",
    categorie: "Culture",
    filtre: "culture",
    tag: "or",
    date: "29 avril 2026",
    iso: "2026-04-29",
    resume:
      "Concerts, théâtre et expositions au programme du Théâtre municipal.",
    image: photos.egliseSainteMadeleine,
    contenu: [
      "La nouvelle saison culturelle se dévoile : concerts, théâtre, humour et expositions rythmeront l'année au Théâtre municipal, écrin signé de l'architecte Gustave Oberthür.",
      "La billetterie est ouverte en ligne et à l'accueil de la mairie. Des tarifs réduits sont prévus pour les jeunes, les étudiants et les demandeurs d'emploi.",
    ],
  },
];

export const filtresActualites = [
  { id: "all", label: "Tout" },
  { id: "vie", label: "Vie locale" },
  { id: "culture", label: "Culture" },
  { id: "travaux", label: "Travaux" },
  { id: "enfance", label: "Enfance & école" },
];

export const aLaUne = articles.find((a) => a.miseEnAvant) ?? articles[0];
export const autresActus = articles.filter((a) => a !== aLaUne);
