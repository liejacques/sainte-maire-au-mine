// Données propres à la page d'accueil : tuiles de démarches, blocs démocratie
// locale, chiffres-clés « Découvrir ». Les icônes sont le contenu interne d'un
// <svg> 24×24 à trait (stroke), rendu via set:html.

export interface Tile {
  label: string;
  desc: string;
  href: string;
  icon: string;
}

export const demarchesRapides: Tile[] = [
  { label: "État civil", desc: "Actes, mariage, PACS", href: "/mes-demarches/#etat-civil", icon: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h3"/>' },
  { label: "Urbanisme", desc: "Permis & déclarations", href: "/mes-demarches/#urbanisme", icon: '<path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6"/>' },
  { label: "Déchets & tri", desc: "Calendrier & déchèterie", href: "/cadre-de-vie/#dechets", icon: '<path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14M10 10v6M14 10v6"/>' },
  { label: "Inscriptions scolaires", desc: "Écoles & périscolaire", href: "/mon-quotidien/#ecoles", icon: '<path d="M3 9l9-5 9 5-9 5-9-5zM7 11v5c0 1 2 2 5 2s5-1 5-2v-5"/>' },
  { label: "Signalement", desc: "Voirie, éclairage…", href: "/signalement/", icon: '<path d="M12 9v4M12 17h.01M10.3 3.9 2 18a2 2 0 0 0 1.7 3h16.6a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/>' },
  { label: "Élections", desc: "Listes & procurations", href: "/mes-demarches/#elections", icon: '<path d="M4 7h16v13H4zM4 7l8-4 8 4M9 13l2 2 4-4"/>' },
  { label: "Location de salles", desc: "Réserver un espace", href: "/ma-mairie/#services", icon: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M8 4V2M16 4V2"/>' },
  { label: "Rendez-vous mairie", desc: "Prendre un créneau", href: "/contact/", icon: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>' },
];

export const heroChips = [
  { label: "État civil", href: "/mes-demarches/#etat-civil" },
  { label: "Urbanisme", href: "/mes-demarches/#urbanisme" },
  { label: "Déchets", href: "/cadre-de-vie/#dechets" },
  { label: "Inscriptions scolaires", href: "/mon-quotidien/#ecoles" },
];

export const democratie: Tile[] = [
  { label: "Comptes rendus", desc: "Délibérations & PV des séances", href: "/ma-mairie/#conseil", icon: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h4"/>' },
  { label: "Projets en cours", desc: "Travaux & aménagements", href: "/cadre-de-vie/#travaux", icon: '<path d="M3 21h18M5 21V8l7-5 7 5v13"/>' },
  { label: "Budget & finances", desc: "Recettes & dépenses 2026", href: "/ma-mairie/#budget", icon: '<path d="M4 20V10M10 20V4M16 20v-8M22 20H2"/>' },
  { label: "Concertation citoyenne", desc: "Donnez votre avis", href: "/ma-mairie/#conseil", icon: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>' },
];

export interface Stat {
  value: string;
  label: string;
  tone: "argent" | "or";
}

export const chiffresDecouvrir: Stat[] = [
  { value: "1 100", label: "mines recensées dans le Val", tone: "argent" },
  { value: "300 km", label: "de galeries souterraines", tone: "argent" },
  { value: "42 000", label: "visiteurs à Mineral & Gem", tone: "or" },
  { value: "2ᵉ", label: "bourse minéralogique mondiale", tone: "or" },
];
