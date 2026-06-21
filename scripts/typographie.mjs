// Script jetable : remplace l'apostrophe droite (') par l'apostrophe
// typographique française (’) dans le contenu, UNIQUEMENT entre deux lettres
// (élisions : l'argent, d'art, qu'on…). Ce motif lettre-'-lettre ne touche
// jamais les apostrophes délimiteuses de chaînes JS. Les lignes contenant une
// URL sont ignorées (apostrophes des liens Wikimedia laissées intactes).
//   node scripts/typographie.mjs
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.resolve(__dirname, "..", "src");

const ELISION = /([A-Za-zÀ-ÿ])'([A-Za-zÀ-ÿ])/g;
const HAS_URL = /https?:\/\/|\/wiki\/|COMMONS\s*\+|source:/;

const walk = (dir, out = []) => {
  for (const n of readdirSync(dir)) {
    const p = path.join(dir, n);
    statSync(p).isDirectory() ? walk(p, out) : /\.(astro|ts)$/.test(n) && out.push(p);
  }
  return out;
};

let changed = 0;
let total = 0;
for (const file of walk(SRC)) {
  const original = readFileSync(file, "utf8");
  const next = original
    .split("\n")
    .map((line) => {
      if (HAS_URL.test(line)) return line; // protège les URLs
      return line.replace(ELISION, "$1’$2");
    })
    .join("\n");
  if (next !== original) {
    const n = (original.match(ELISION) || []).length;
    writeFileSync(file, next);
    changed++;
    total += n;
    console.log(`✓ ${path.relative(path.resolve(__dirname, ".."), file)}`);
  }
}
console.log(`\n${changed} fichier(s), ~${total} apostrophe(s) typographiée(s).`);
