// Source unique de la navigation : en-tête, tiroir mobile, pied de page, plan
// du site. Toute route du site est déclarée ici → aucun lien mort.

export interface NavLink {
  label: string;
  href: string;
}
export interface NavItem {
  /** Clé de rubrique (sert au surlignage de l'onglet actif). */
  id: string;
  label: string;
  href: string;
  children: NavLink[];
}

export const mainNav: NavItem[] = [
  {
    id: "mairie",
    label: "Ma mairie",
    href: "/ma-mairie/",
    children: [
      { label: "Le conseil municipal", href: "/ma-mairie/#conseil" },
      { label: "Le maire & les élus", href: "/ma-mairie/#elus" },
      { label: "Services municipaux", href: "/ma-mairie/#services" },
      { label: "Recrutement", href: "/ma-mairie/#recrutement" },
      { label: "Budget & finances", href: "/ma-mairie/#budget" },
      { label: "Contact & horaires", href: "/contact/" },
    ],
  },
  {
    id: "demarches",
    label: "Mes démarches",
    href: "/mes-demarches/",
    children: [
      { label: "État civil", href: "/mes-demarches/#etat-civil" },
      { label: "Urbanisme & autorisations", href: "/mes-demarches/#urbanisme" },
      { label: "Cartes & papiers d'identité", href: "/mes-demarches/#identite" },
      { label: "Élections", href: "/mes-demarches/#elections" },
      { label: "Toutes les démarches", href: "/mes-demarches/" },
    ],
  },
  {
    id: "quotidien",
    label: "Mon quotidien",
    href: "/mon-quotidien/",
    children: [
      { label: "Écoles & périscolaire", href: "/mon-quotidien/#ecoles" },
      { label: "Petite enfance", href: "/mon-quotidien/#petite-enfance" },
      { label: "Santé", href: "/mon-quotidien/#sante" },
      { label: "Action sociale & CCAS", href: "/mon-quotidien/#social" },
      { label: "Seniors", href: "/mon-quotidien/#seniors" },
    ],
  },
  {
    id: "cadre",
    label: "Cadre de vie",
    href: "/cadre-de-vie/",
    children: [
      { label: "PLU & urbanisme", href: "/cadre-de-vie/#urbanisme" },
      { label: "Travaux & voirie", href: "/cadre-de-vie/#travaux" },
      { label: "Déchets & propreté", href: "/cadre-de-vie/#dechets" },
      { label: "Environnement", href: "/cadre-de-vie/#environnement" },
      { label: "Logement", href: "/cadre-de-vie/#logement" },
    ],
  },
  {
    id: "decouvrir",
    label: "Découvrir & sortir",
    href: "/decouvrir/",
    children: [
      { label: "Patrimoine & mines", href: "/decouvrir/#patrimoine" },
      { label: "Mineral & Gem", href: "/decouvrir/mineral-gem/" },
      { label: "Pays d'art et d'histoire", href: "/decouvrir/#dualite" },
      { label: "Agenda culturel", href: "/agenda/" },
      { label: "Tourisme", href: "/decouvrir/#tourisme" },
      { label: "Actualités", href: "/actualites/" },
    ],
  },
  {
    id: "economie",
    label: "Économie",
    href: "/economie/",
    children: [
      { label: "Commerces", href: "/economie/#commerces" },
      { label: "Entreprises & zones d'activité", href: "/economie/#entreprises" },
      { label: "Marchés publics", href: "/marches-publics/" },
      { label: "Emploi", href: "/economie/#emploi" },
      { label: "Marché hebdomadaire", href: "/economie/#marche" },
    ],
  },
];

// Pied de page — colonnes thématiques.
export const footerNav: { titre: string; liens: NavLink[] }[] = [
  {
    titre: "Démarches",
    liens: [
      { label: "État civil", href: "/mes-demarches/#etat-civil" },
      { label: "Urbanisme", href: "/mes-demarches/#urbanisme" },
      { label: "Déchets & propreté", href: "/cadre-de-vie/#dechets" },
      { label: "Inscriptions scolaires", href: "/mon-quotidien/#ecoles" },
      { label: "Élections", href: "/mes-demarches/#elections" },
    ],
  },
  {
    titre: "La ville",
    liens: [
      { label: "Le conseil municipal", href: "/ma-mairie/#conseil" },
      { label: "Budget & finances", href: "/ma-mairie/#budget" },
      { label: "Actualités", href: "/actualites/" },
      { label: "Patrimoine & mines", href: "/decouvrir/" },
      { label: "Mineral & Gem", href: "/decouvrir/mineral-gem/" },
      { label: "Associations", href: "/decouvrir/#associations" },
    ],
  },
];

// Liens légaux obligatoires (pied de page).
export const legalNav: NavLink[] = [
  { label: "Mentions légales", href: "/mentions-legales/" },
  { label: "Politique de confidentialité", href: "/confidentialite/" },
  { label: "Gestion des cookies", href: "/gestion-des-cookies/" },
  { label: "Plan du site", href: "/plan-du-site/" },
  { label: "Marchés publics", href: "/marches-publics/" },
];
