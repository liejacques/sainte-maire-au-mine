// Audit d'accessibilité léger sur le site BUILDÉ (dist/) : un seul <h1> par
// page, pas de saut de niveau de titre, et toute <img> possède un alt.
// Complète (ne remplace pas) un audit RGAA manuel. Lance après `npm run build`.
//   node scripts/check-a11y.mjs
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import path from "node:path";

const DIST = path.resolve("dist");
if (!existsSync(DIST)) {
  console.error("dist/ introuvable — lance `npm run build` d'abord.");
  process.exit(1);
}

const walk = (dir, out = []) => {
  for (const n of readdirSync(dir)) {
    const p = path.join(dir, n);
    statSync(p).isDirectory() ? walk(p, out) : out.push(p);
  }
  return out;
};

// Pages exclues : /admin est une application cliente (SPA) rendue par JS et
// non indexée ; ses titres sont générés à l'exécution, hors du HTML statique.
const SKIP = ["/admin/"];

const htmls = walk(DIST).filter((f) => f.endsWith(".html"));
const problems = [];

for (const f of htmls) {
  const html = readFileSync(f, "utf8");
  const route = "/" + path.relative(DIST, f).split(path.sep).join("/").replace(/index\.html$/, "");
  if (SKIP.includes(route)) continue;

  const levels = [...html.matchAll(/<h([1-6])[\s>]/g)].map((m) => Number(m[1]));
  const nbH1 = levels.filter((l) => l === 1).length;

  let skip = null;
  let prev = 0;
  for (const lvl of levels) {
    if (prev && lvl > prev + 1) { skip = `${prev} → ${lvl}`; break; }
    prev = lvl;
  }

  const imgNoAlt = [...html.matchAll(/<img\b[^>]*>/g)].filter((m) => !/\salt\s*=/.test(m[0])).length;

  const flags = [];
  if (nbH1 !== 1) flags.push(`h1=${nbH1}`);
  if (skip) flags.push(`saut de titre ${skip}`);
  if (imgNoAlt) flags.push(`${imgNoAlt} img sans alt`);
  if (flags.length) problems.push(`${route}  —  ${flags.join(" · ")}`);
}

if (problems.length === 0) {
  console.log(`✅ ${htmls.length} pages : 1 h1 chacune, aucun saut de titre, alt présents.`);
} else {
  console.log(`⚠️  ${problems.length} page(s) à revoir :\n`);
  problems.forEach((p) => console.log("  " + p));
  process.exitCode = 1;
}
