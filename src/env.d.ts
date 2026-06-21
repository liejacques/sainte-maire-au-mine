/// <reference types="astro/client" />

interface ImportMetaEnv {
  /** Clé d’accès Web3Forms (formulaires contact / newsletter / signalement). */
  readonly PUBLIC_WEB3FORMS_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
