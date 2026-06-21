// Image Open Graph dédiée à la page « Mineral & Gem » (1200×630) : macro de
// minerai d'argent (tétraédrite) + voile sable + titre metal + thème de l'année.
//   node scripts/make-og-mineralgem.mjs
import { fileURLToPath } from "node:url";
import path from "node:path";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const W = 1200;
const H = 630;

const overlay = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="scrim" x1="0" y1="0" x2="0.4" y2="1">
      <stop offset="0" stop-color="#16140d" stop-opacity="0.30"/>
      <stop offset="0.5" stop-color="#16140d" stop-opacity="0.55"/>
      <stop offset="1" stop-color="#16140d" stop-opacity="0.93"/>
    </linearGradient>
    <linearGradient id="metal" x1="0" y1="0" x2="1" y2="0.2">
      <stop offset="0" stop-color="#eef0f2"/>
      <stop offset="0.4" stop-color="#9fa6ab"/>
      <stop offset="0.56" stop-color="#e4e7e9"/>
      <stop offset="1" stop-color="#838a8f"/>
    </linearGradient>
    <linearGradient id="veine" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#8a2b20"/>
      <stop offset="0.5" stop-color="#b0863c"/>
      <stop offset="1" stop-color="#8a2b20"/>
    </linearGradient>
  </defs>

  <rect x="0" y="0" width="${W}" height="${H}" fill="url(#scrim)"/>

  <text x="80" y="372" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="700"
        letter-spacing="5" fill="#c7ccd1">LE RENDEZ-VOUS MONDIAL DU MINÉRAL</text>

  <text x="78" y="466" font-family="Georgia, 'Times New Roman', serif" font-size="84" font-weight="700"
        fill="url(#metal)">Mineral &amp; Gem</text>

  <text x="80" y="516" font-family="Georgia, 'Times New Roman', serif" font-size="30" font-style="italic"
        fill="#b0863c">61ᵉ édition · « Nuances de Fer »</text>

  <text x="80" y="556" font-family="Arial, Helvetica, sans-serif" font-size="23" font-weight="600"
        letter-spacing="1" fill="#cfcabb">Sainte-Marie-aux-Mines · 24 – 28 juin 2026</text>

  <rect x="0" y="${H - 8}" width="${W}" height="8" fill="url(#veine)"/>
</svg>`;

async function run() {
  const base = await sharp(path.join(ROOT, "src", "assets", "images", "argent-tetraedrite.webp"))
    .resize(W, H, { fit: "cover", position: "centre" })
    .toBuffer();

  const out = path.join(ROOT, "public", "og-mineral-gem.jpg");
  const info = await sharp(base)
    .composite([{ input: Buffer.from(overlay), top: 0, left: 0 }])
    .jpeg({ quality: 86, mozjpeg: true })
    .toFile(out);
  console.log(`og-mineral-gem.jpg : ${info.width}×${info.height} · ${Math.round(info.size / 1024)} Ko`);
}

run().catch((e) => { console.error(e); process.exitCode = 1; });
