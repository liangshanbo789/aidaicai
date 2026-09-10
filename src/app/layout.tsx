import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "AI代采 aidaicai.com | 企业级海外 AI 官方代采与对公合规解决方案",
  description: "国内领先的企业级 OpenAI / ChatGPT Plus、Pro (5x/20x)、Team 官方代采服务平台。支持企业银行对公转账、6% 增值税专用发票、100% 正规商业卡段直充、72小时封号包赔兜底及大客户战略集采增值权益。官网：aidaicai.com",
  keywords: [
    "AI代采",
    "aidaicai.com",
    "ChatGPT企业代采",
    "ChatGPT Pro代采",
    "OpenAI企业对公转账",
    "ChatGPT发票报销",
    "ChatGPT Plus企业采购",
    "出海企业SaaS采购",
    "ChatGPT团队版购买",
    "AI工具合规采购"
  ],
  authors: [{ name: "AI代采 aidaicai.com" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚡</text></svg>" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('aidaicai-theme');
                  var root = document.documentElement;
                  if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    root.classList.add('dark');
                    root.setAttribute('data-theme', 'dark');
                  } else {
                    root.classList.remove('dark');
                    root.setAttribute('data-theme', 'light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
