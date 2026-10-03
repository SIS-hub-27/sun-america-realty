import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://sunamerica.lovable.app";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

const ENTRIES: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/listings", changefreq: "weekly", priority: "0.9" },
  { path: "/market", changefreq: "monthly", priority: "0.8" },
  { path: "/markets/pasco", changefreq: "monthly", priority: "0.8" },
  { path: "/markets/hernando", changefreq: "monthly", priority: "0.8" },
  { path: "/markets/polk", changefreq: "monthly", priority: "0.8" },
  { path: "/markets/hillsborough", changefreq: "monthly", priority: "0.8" },
  { path: "/markets/pinellas", changefreq: "monthly", priority: "0.8" },
  { path: "/services", changefreq: "monthly", priority: "0.7" },
  { path: "/faq", changefreq: "monthly", priority: "0.6" },
  { path: "/contact", changefreq: "monthly", priority: "0.7" },
  { path: "/for-sellers", changefreq: "monthly", priority: "0.8" },
  { path: "/for-investors", changefreq: "monthly", priority: "0.8" },
  { path: "/for-buyers", changefreq: "monthly", priority: "0.8" },
  { path: "/for-owner-users", changefreq: "monthly", priority: "0.8" },
  { path: "/for-repositioning-investors", changefreq: "monthly", priority: "0.8" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = ENTRIES.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});