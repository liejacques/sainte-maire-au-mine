// Rend cliquables, dans une chaîne de CONFIANCE (rédigée par la commune dans
// src/data), les numéros de téléphone français et les adresses e-mail :
//   « Service Technique — 03 89 27 94 92 »
//     → « Service Technique — <a href="tel:+33389279492">03 89 27 94 92</a> »
//
// La sortie est destinée à `set:html` : on échappe d'abord le HTML pour écarter
// toute injection, puis on insère les liens. À n'utiliser que sur du contenu
// interne (jamais sur une saisie utilisateur).

const EMAIL = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g;
// Numéro français : 0X suivi de 4 paires de chiffres, séparées par espace/point/rien.
const PHONE = /\b0[1-9](?:[ .]?\d{2}){4}\b/g;

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export function linkify(text: string): string {
  let out = escapeHtml(text);
  out = out.replace(EMAIL, (m) => `<a href="mailto:${m}">${m}</a>`);
  out = out.replace(PHONE, (m) => {
    const e164 = "+33" + m.replace(/\D/g, "").slice(1);
    return `<a href="tel:${e164}">${m}</a>`;
  });
  return out;
}
