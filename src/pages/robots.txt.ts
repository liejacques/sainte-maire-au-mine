import type { APIRoute } from "astro";

// robots.txt généré : l’URL du sitemap suit le domaine configuré (`site` dans
// astro.config). Aucun domaine en dur → un seul endroit à changer.
export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL("sitemap-index.xml", site).href;
  const body = [
    "User-agent: *",
    "Allow: /",
    "Disallow: /admin/",
    "",
    `Sitemap: ${sitemap}`,
    "",
  ].join("\n");
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
