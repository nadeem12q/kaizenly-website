import type { APIRoute } from "astro";
import { absUrl } from "../config.mjs";

export const GET: APIRoute = () => {
  const body = `# robots.txt for KaiZenly+
# All crawlers and AI/search agents are welcome.

User-agent: *
Allow: /

# Explicitly welcome major search and AI crawlers
User-agent: Googlebot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Bingbot
Allow: /

User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: Anthropic-AI
Allow: /

User-agent: PerplexityBot
Allow: /

Sitemap: ${absUrl("/sitemap.xml")}
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
