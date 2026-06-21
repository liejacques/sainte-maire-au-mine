// Script jetable : convertit les tailles de texte de px en rem (base 16px) afin
// que le sélecteur d'accessibilité « taille du texte » (échelle sur la
// font-size de :root) fasse réellement grandir le texte. À l'échelle ×1, le
// rendu est STRICTEMENT identique (Npx === (N/16)rem quand :root vaut 16px).
//
// Périmètre volontairement étroit : SEULES les valeurs des propriétés
// `font-size`, `line-height` et du raccourci `font:` sont touchées (y compris
// les px à l'intérieur d'un clamp()). Les espacements, bordures, largeurs, etc.
// restent en px. Dans les .astro, seuls les blocs <style> sont traités.
//
//   node scripts/px-font-to-rem.mjs
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.resolve(__dirname, "..", "src");

const pxToRem = (value) =>
  value.replace(/(\d*\.?\d+)px/g, (_, n) => {
    const rem = parseFloat((parseFloat(n) / 16).toFixed(5));
    return `${rem}rem`;
  });

// Convertit les px dans les valeurs de font-size / line-height / font: …
const PROP_RE = /(font-size|line-height|font)(\s*:\s*)([^;{}]+)/g;
const convertCss = (css) =>
  css.replace(PROP_RE, (m, prop, sep, val) => `${prop}${sep}${pxToRem(val)}`);

const walk = (dir, out = []) => {
  for (const name of readdirSync(dir)) {
    const p = path.join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) walk(p, out);
    else if (/\.(astro|css)$/.test(name)) out.push(p);
  }
  return out;
};

let changed = 0;
for (const file of walk(SRC)) {
  const original = readFileSync(file, "utf8");
  let next;
  if (file.endsWith(".css")) {
    next = convertCss(original);
  } else {
    // .astro : ne traiter que le contenu des blocs <style>.
    next = original.replace(
      /(<style[^>]*>)([\s\S]*?)(<\/style>)/g,
      (_, open, body, close) => `${open}${convertCss(body)}${close}`,
    );
  }
  if (next !== original) {
    writeFileSync(file, next);
    changed++;
    console.log(`✓ ${path.relative(path.resolve(__dirname, ".."), file)}`);
  }
}
console.log(`\n${changed} fichier(s) modifié(s).`);
