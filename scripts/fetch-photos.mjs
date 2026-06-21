// Script jetable : télécharge des clichés libres de droit depuis Wikimedia
// Commons (via Special:FilePath), les convertit en WebP (largeur max 1500 px,
// qualité ~80) dans public/images/, et imprime les dimensions finales réelles.
//
//   node scripts/fetch-photos.mjs
//
// Les crédits (auteur · licence) sont gérés dans src/data/photos.ts et sur la
// page « Crédits photos » — ce script ne fait que récupérer et optimiser.
import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";
import path from "node:path";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, "..", "src", "assets", "images");
const MAX_W = 1500;
const QUALITY = 80;
const UA =
  "smam-site-photo-fetch/1.0 (https://www.sainte-marie-aux-mines.fr; contact@sainte-marie-aux-mines.fr)";

// encodeURIComponent garantit un chemin propre (espaces -> %20, é -> %C3%A9…)
// quel que soit le comportement d'encodage de fetch.
const FILE = (name) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(name)}`;

// out (sans extension) -> nom de fichier Commons. w/q : surcharges optionnelles
// pour tenir la cible de poids (~250 Ko) sur les clichés denses.
const PHOTOS = [
  { out: "galerie-saint-jean",   src: FILE("Mine Saint-Jean Engelsbourg (12).jpg") },
  { out: "galerie-saint-jean-2", src: FILE("Mine Saint-Jean Engelsbourg (10).jpg") },
  { out: "argent-tetraedrite",   src: FILE("Tétraédrite argentifère-Musée d'histoire naturelle et d'ethnographie de Colmar.jpg") },
  { out: "pointerolle",          src: FILE("Pointerolle-Mine Saint-Jean Engelsbourg.jpg") },
  // NB : le nom de fichier Commons écrit « théatre » (sans accent circonflexe).
  { out: "vue-ville",            src: FILE("Au premier plan-Le lycée-la piscine- le théatre - panoramio.jpg"), q: 70 },
  { out: "echery-vallee",        src: FILE("Echery - panoramio.jpg"), q: 72 },
  { out: "maison-reber-40",      src: FILE("SteMarieMines rReber 15-17.JPG") },
  { out: "maison-colombage",     src: FILE("Rue Reber No 16, Sainte-Marie-aux-Mines, Alsace.JPG"), w: 1200, q: 78 },
];

async function run() {
  await mkdir(OUT_DIR, { recursive: true });
  const dims = {};
  for (const { out, src, w, q } of PHOTOS) {
    process.stdout.write(`→ ${out} … `);
    // curl -L suit proprement la chaîne de redirections de Wikimedia (FilePath
    // -> Special:Redirect -> upload.wikimedia.org), là où fetch ré-encode mal
    // les Location déjà percent-encodés.
    let buf;
    try {
      buf = execFileSync(
        "curl",
        ["-sSL", "--fail", "-A", UA, src],
        { maxBuffer: 64 * 1024 * 1024 },
      );
    } catch (e) {
      console.log(`ÉCHEC téléchargement`);
      process.exitCode = 1;
      continue;
    }
    const outPath = path.join(OUT_DIR, `${out}.webp`);
    const info = await sharp(buf)
      .rotate() // applique l'orientation EXIF avant de la perdre
      .resize({ width: w ?? MAX_W, withoutEnlargement: true })
      .webp({ quality: q ?? QUALITY })
      .toFile(outPath);
    const kb = Math.round(info.size / 1024);
    dims[out] = { w: info.width, h: info.height, kb };
    console.log(`${info.width}×${info.height} · ${kb} Ko`);
  }
  const jsonPath = path.resolve(__dirname, "photo-dims.json");
  await writeFile(jsonPath, JSON.stringify(dims, null, 2));
  console.log(`\nDimensions écrites dans ${path.relative(process.cwd(), jsonPath)}`);
}

run().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
