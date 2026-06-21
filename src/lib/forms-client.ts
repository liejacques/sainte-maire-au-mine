// Aide partagée pour les formulaires publics (contact, newsletter, signalement).
// Envoi via Web3Forms si une clé est configurée (PUBLIC_WEB3FORMS_KEY), sinon
// repli mailto pour que le site reste utilisable. En local : mode démo.

type Etat = "chargement" | "ok" | "mailto" | "erreur";

// Clé Web3Forms injectée au build via variable d'environnement (jamais en dur).
const ACCESS_KEY = (import.meta.env.PUBLIC_WEB3FORMS_KEY ?? "").trim();

// Champs techniques exclus du corps du mailto de repli.
const IGNORE = new Set(["access_key", "subject", "from_name", "botcheck"]);

function sujetDe(form: HTMLFormElement): string {
  return form.dataset.sujet || "Message — site de Sainte-Marie-aux-Mines";
}

function construireMailto(form: HTMLFormElement, email: string): string {
  const lignes: string[] = [];
  new FormData(form).forEach((v, k) => {
    if (typeof v === "string" && v.trim() && !IGNORE.has(k)) lignes.push(`${k} : ${v}`);
  });
  return (
    "mailto:" + email +
    "?subject=" + encodeURIComponent(sujetDe(form)) +
    "&body=" + encodeURIComponent(lignes.join("\n"))
  );
}

export function initPublicForm(formId: string, onDone: (etat: Etat) => void): void {
  const form = document.getElementById(formId);
  if (!(form instanceof HTMLFormElement)) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    // Validation HTML native d'abord (consentement requis, champs obligatoires…).
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const email = form.dataset.mairieEmail || "";

    // Démo locale : aucun envoi réel.
    if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
      onDone("ok");
      form.reset();
      return;
    }

    // Aucune clé configurée → repli mailto (le formulaire reste fonctionnel).
    if (!ACCESS_KEY) {
      window.location.href = construireMailto(form, email);
      onDone("mailto");
      return;
    }

    const submit = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    onDone("chargement");
    form.setAttribute("aria-busy", "true");
    if (submit) submit.disabled = true;

    try {
      const payload: Record<string, string> = {
        access_key: ACCESS_KEY,
        subject: sujetDe(form),
      };
      new FormData(form).forEach((v, k) => {
        if (typeof v === "string") payload[k] = v;
      });
      const r = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await r.json().catch(() => ({ success: false }));
      if (data && data.success) {
        onDone("ok");
        form.reset();
      } else {
        onDone("erreur");
      }
    } catch {
      onDone("erreur");
    } finally {
      form.removeAttribute("aria-busy");
      if (submit) submit.disabled = false;
    }
  });
}
