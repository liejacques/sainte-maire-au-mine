// Audit des liens internes sur le site BUILDÉ (dist/). Vérifie, pour chaque
// href="/…" : (1) la page/fichier cible existe, (2) si une ancre #id est
// présente, que la page cible contient bien cet id. Sortie : liste des liens
// cassés (cible → pages qui les référencent). Lance après `npm run build`.
//   node scripts/check-links.mjs
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

const allFiles = walk(DIST).map((f) => "/" + path.relative(DIST, f).replace(/\\/g, "/"));
const htmlFiles = allFiles.filter((f) => f.endsWith(".html"));
const fileSet = new Set(allFiles);

const routeToFile = (route) => {
  // "/foo/" -> "/foo/index.html" ; "/" -> "/index.html"
  if (route.endsWith("/")) return route + "index.html";
  return route; // fichier (robots.txt, image, etc.)
};

const idsOf = (html) =>
  new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));

// Index des ids par route de page.
const pageIds = new Map();
for (const f of htmlFiles) {
  const route = f.replace(/index\.html$/, "");
  pageIds.set(route, idsOf(readFileSync(path.join(DIST, "." + f), "utf8")));
}

const broken = new Map(); // cible -> Set(pages source)
for (const f of htmlFiles) {
  const fromRoute = f.replace(/index\.html$/, "");
  const html = readFileSync(path.join(DIST, "." + f), "utf8");
  for (const m of html.matchAll(/href="(\/[^"]*)"/g)) {
    const href = m[1];
    if (href.startsWith("//")) continue; // protocole-relatif (externe)
    const [rawPath, anchor] = href.split("#");
    const target = routeToFile(rawPath || "/");
    let ok = fileSet.has(target);
    if (ok && anchor) {
      const ids = pageIds.get(rawPath) || new Set();
      ok = ids.has(anchor);
    }
    if (!ok) {
      if (!broken.has(href)) broken.set(href, new Set());
      broken.get(href).add(fromRoute || "/");
    }
  }
}

if (broken.size === 0) {
  console.log(`✅ Aucun lien interne cassé (${htmlFiles.length} pages auditées).`);
} else {
  console.log(`❌ ${broken.size} cible(s) cassée(s) :\n`);
  for (const [href, sources] of [...broken].sort()) {
    console.log(`  ${href}`);
    console.log(`     ← ${[...sources].sort().join(", ")}`);
  }
  process.exitCode = 1;
}
