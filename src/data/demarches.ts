// Démarches administratives — source de la page /mes-demarches/.
// Comme dans la maquette de référence, chaque carte renvoie vers la fiche
// détaillée type (« Acte de naissance »). En production, le lien pointera vers
// le téléservice officiel correspondant (service-public.fr, ANTS…).

const FICHE = "/mes-demarches/acte-de-naissance/";

export interface Demarche {
  theme: string;
  label: string;
  desc: string;
  online: boolean;
  cta: string;
  href: string;
  icon: string; // contenu interne d'un <svg> 24×24 à trait
}

export const themesDemarches = [
  { id: "all", label: "Toutes les démarches" },
  { id: "etatcivil", label: "État civil", anchor: "etat-civil" },
  { id: "identite", label: "Identité & papiers", anchor: "identite" },
  { id: "urbanisme", label: "Urbanisme", anchor: "urbanisme" },
  { id: "dechets", label: "Déchets & cadre de vie", anchor: "dechets" },
  { id: "scolaire", label: "Enfance & école", anchor: "scolaire" },
  { id: "elections", label: "Élections", anchor: "elections" },
];

export const demarches: Demarche[] = [
  { theme: "etatcivil", label: "Acte de naissance", desc: "Demander une copie ou un extrait d'acte de naissance.", online: true, cta: "Faire la demande", href: FICHE, icon: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h3"/>' },
  { theme: "etatcivil", label: "Mariage & PACS", desc: "Constituer un dossier de mariage ou de PACS civil.", online: false, cta: "Voir la procédure", href: FICHE, icon: '<path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 5.5-7 10-7 10z"/>' },
  { theme: "identite", label: "Carte nationale d'identité", desc: "Première demande ou renouvellement, sur rendez-vous.", online: true, cta: "Prendre rendez-vous", href: FICHE, icon: '<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8" cy="11" r="2"/><path d="M13 9h5M13 13h5M6 16h6"/>' },
  { theme: "identite", label: "Passeport", desc: "Demande de passeport biométrique en mairie équipée.", online: true, cta: "Prendre rendez-vous", href: FICHE, icon: '<rect x="5" y="3" width="14" height="18" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M9 17h6"/>' },
  { theme: "urbanisme", label: "Permis de construire", desc: "Déposer une demande de permis ou consulter le PLU.", online: true, cta: "Déposer en ligne", href: FICHE, icon: '<path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6"/>' },
  { theme: "urbanisme", label: "Déclaration préalable de travaux", desc: "Clôture, abri de jardin, ravalement, fenêtres…", online: true, cta: "Déposer en ligne", href: FICHE, icon: '<path d="M14 2v6h6M4 2h10l6 6v12a2 2 0 0 1-2 2H4z"/>' },
  { theme: "dechets", label: "Calendrier de collecte", desc: "Jours de ramassage et règles de tri par quartier.", online: true, cta: "Consulter", href: FICHE, icon: '<path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14M10 10v6M14 10v6"/>' },
  { theme: "dechets", label: "Accès à la déchèterie", desc: "Badge d'accès et horaires de la déchèterie du Val.", online: false, cta: "Demander un badge", href: FICHE, icon: '<path d="M12 2l9 5v10l-9 5-9-5V7z"/>' },
  { theme: "scolaire", label: "Inscription scolaire", desc: "Inscrire votre enfant à l'école maternelle ou élémentaire.", online: true, cta: "Inscrire mon enfant", href: FICHE, icon: '<path d="M3 9l9-5 9 5-9 5-9-5zM7 11v5c0 1 2 2 5 2s5-1 5-2v-5"/>' },
  { theme: "scolaire", label: "Restauration & périscolaire", desc: "Inscription cantine, garderie et accueil de loisirs.", online: true, cta: "S'inscrire", href: FICHE, icon: '<path d="M4 3v18M8 3v6a2 2 0 0 1-4 0M16 3c-1.5 0-2 4-2 6s.5 3 2 3 2-1 2-3-.5-6-2-6zM16 12v9"/>' },
  { theme: "elections", label: "Inscription sur les listes électorales", desc: "Vérifiez votre situation et inscrivez-vous en ligne.", online: true, cta: "M'inscrire", href: FICHE, icon: '<path d="M4 7h16v13H4zM4 7l8-4 8 4M9 13l2 2 4-4"/>' },
  { theme: "elections", label: "Procuration de vote", desc: "Donnez procuration en cas d'absence le jour du scrutin.", online: true, cta: "Faire une procuration", href: FICHE, icon: '<path d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>' },
];
