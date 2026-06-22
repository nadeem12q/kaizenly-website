import type { APIRoute } from "astro";
import { absUrl } from "../config.mjs";
import { pages } from "../data/app.mjs";

export const GET: APIRoute = () => {
  const today = new Date().toISOString().split("T")[0];
  const urls = pages
    .map((p) => {
      const priority = p.path === "/" ? "1.0" : "0.7";
      return `  <url>
    <loc>${absUrl(p.path)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
