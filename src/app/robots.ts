import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Baiduspider",
        allow: "/",
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
      },
      // 显式允许主流 AI 搜索与大模型索引爬虫 (GEO 优化)
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      {
        userAgent: "Bytespider", // 豆包 / 字节跳动 AI 爬虫
        allow: "/",
      },
      {
        userAgent: "Google-Extended", // Google Gemini / 搜索扩展
        allow: "/",
      },
      {
        userAgent: "cohere-ai",
        allow: "/",
      },
      {
        userAgent: "Applebot",
        allow: "/",
      },
    ],
    sitemap: "https://gongsi.one/sitemap.xml",
  };
}
