// Compose l'image Open Graph par défaut (1200×630) pour les partages réseaux
// sociaux : panorama de la ville + voile « sable » (galeries) + blason + nom de
// la commune en argent/or, dans la direction artistique. Sortie : public/og-default.jpg
//
//   node scripts/make-og.mjs
import { fileURLToPath } from "node:url";
import path from "node:path";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const W = 1200;
const H = 630;

// Contenu interne du blason (public/blason.svg), repositionné/agrandi.
const blasonInner = `
  <path d="M26 2 L50 2 L50 38 Q50 52 26 58 Q2 52 2 38 L2 2 Z" fill="#1f1c13" stroke="#b0863c" stroke-width="1.5"/>
  <path d="M26 2 L26 58" stroke="#3a352a" stroke-width="0.8"/>
  <circle cx="11" cy="11" r="3" fill="#8a2b20"/>
  <circle cx="19" cy="11" r="3" fill="#8a2b20"/>
  <circle cx="15" cy="18" r="3" fill="#8a2b20"/>
  <path d="M30 8 L46 20" stroke="#8a2b20" stroke-width="3" stroke-linecap="round"/>
  <g transform="translate(26 40) scale(0.46)">
    <g transform="rotate(45)">
      <rect x="-2.5" y="-20" width="5" height="30" rx="1.2" fill="#c7ccd1"/>
      <polygon points="-2.5,9 2.5,9 0,19" fill="#c7ccd1"/>
      <rect x="-4.5" y="-21" width="9" height="5" rx="1.5" fill="#c7ccd1"/>
    </g>
    <g transform="rotate(-45)">
      <rect x="-2.2" y="-14" width="4.4" height="34" rx="1.2" fill="#c7ccd1"/>
      <rect x="-11" y="-22" width="22" height="9" rx="2.5" fill="#c7ccd1"/>
    </g>
  </g>`;

const overlay = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="scrim" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#16140d" stop-opacity="0.20"/>
      <stop offset="0.55" stop-color="#16140d" stop-opacity="0.55"/>
      <stop offset="1" stop-color="#16140d" stop-opacity="0.92"/>
    </linearGradient>
    <linearGradient id="veine" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#8a2b20"/>
      <stop offset="0.5" stop-color="#b0863c"/>
      <stop offset="1" stop-color="#8a2b20"/>
    </linearGradient>
    <font-face font-family="serif"/>
  </defs>

  <rect x="0" y="0" width="${W}" height="${H}" fill="url(#scrim)"/>

  <!-- Blason -->
  <g transform="translate(84 352) scale(2.05)">${blasonInner}</g>

  <!-- Surtitre -->
  <text x="232" y="392" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="700"
        letter-spacing="5" fill="#c7ccd1">SITE OFFICIEL DE LA COMMUNE</text>

  <!-- Nom de la ville -->
  <text x="230" y="452" font-family="Georgia, 'Times New Roman', serif" font-size="62" font-weight="700"
        fill="#f4f1ea">Sainte-Marie-aux-Mines</text>

  <!-- Baseline -->
  <text x="232" y="500" font-family="Georgia, 'Times New Roman', serif" font-size="29" font-style="italic"
        fill="#b0863c">Mille ans d'argent · au cœur du Val d'Argent</text>

  <!-- Veine minérale -->
  <rect x="0" y="${H - 8}" width="${W}" height="8" fill="url(#veine)"/>
</svg>`;

async function run() {
  const base = await sharp(path.join(ROOT, "src", "assets", "images", "vue-ville.webp"))
    .resize(W, H, { fit: "cover", position: "centre" })
    .toBuffer();

  const out = path.join(ROOT, "public", "og-default.jpg");
  const info = await sharp(base)
    .composite([{ input: Buffer.from(overlay), top: 0, left: 0 }])
    .jpeg({ quality: 86, mozjpeg: true })
    .toFile(out);

  console.log(
    `og-default.jpg : ${info.width}×${info.height} · ${Math.round(info.size / 1024)} Ko`,
  );
}

run().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
