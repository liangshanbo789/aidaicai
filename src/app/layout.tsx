import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://gongsi.one"),
  title: {
    default: "AI代采 aidaicai.com | 企业级 GPT 官方集采与 OpenAI Codex 研发代采合规平台",
    template: "%s | AI代采 aidaicai.com",
  },
  description: "国内领先的企业级 GPT 官方集中采购 (集采) 与 OpenAI Codex 研发代码助手代采服务平台。全系覆盖 ChatGPT Plus、Pro (5x/20x)、Team 空间及 GPT-6 Astra，支持银行对公转账、开具 6% 增值税专用发票、大客户阶梯让利降本与 72h 封号包赔兜底。官网：gongsi.one",
  keywords: [
    "codex采购",
    "OpenAI Codex采购",
    "Codex企业采购",
    "Codex代采",
    "GPT集采",
    "ChatGPT集采",
    "企业GPT集采",
    "代码大模型采购",
    "研发团队AI代采",
    "ChatGPT批量采购",
    "AI代采",
    "gongsi.one",
    "aidaicai.com",
    "ChatGPT企业代采",
    "ChatGPT对公转账",
    "ChatGPT开专票",
    "ChatGPT发票报销",
    "ChatGPT Pro 20x代采",
    "GPT-6 Astra采购",
    "出海企业SaaS采购",
    "信息技术服务费专票",
  ],
  authors: [{ name: "AI代采", url: "https://gongsi.one" }],
  creator: "AI代采",
  publisher: "AI代采",
  formatDetection: {
    telephone: false,
  },
  alternates: {
    canonical: "https://gongsi.one/",
  },
  openGraph: {
    title: "AI代采 | 企业级 GPT 官方集采与 OpenAI Codex 研发代采合规平台",
    description: "国内领先的企业级 GPT 官方集中采购与 OpenAI Codex 研发代采平台。支持 6% 增值税专用发票、银行对公转账、100% 正规海外商业卡直充与 72 小时封号退赔保障。",
    url: "https://gongsi.one/",
    siteName: "AI代采 aidaicai.com",
    locale: "zh_CN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI代采 aidaicai.com 企业级海外 AI 官方代采合规平台",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI代采 aidaicai.com | 企业级 GPT 官方集采与 OpenAI Codex 研发代采合规平台",
    description: "让中国企业合规、阳光采购全球顶尖 AI 生产力与 Codex 研发工具。支持 6% 增值税专票、银行对公转账与 72h 封号包赔。",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/logo.svg",
  },
};

const jsonLdData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AI代采 aidaicai.com",
    "alternateName": "AI Enterprise Hub",
    "url": "https://gongsi.one",
    "logo": "https://gongsi.one/logo.svg",
    "description": "国内领先的企业级海外 AI / OpenAI Codex 官方代采、GPT 批量集采、对公财务结算与合规风控兜底服务平台",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "liang@yqtp.cn",
      "contactType": "customer service",
      "areaServed": "CN",
      "availableLanguage": ["Chinese", "English"],
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "成都市",
      "addressRegion": "四川省",
      "streetAddress": "高新区AI创新中心",
      "addressCountry": "CN",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "AI代采 aidaicai.com",
    "url": "https://gongsi.one",
    "description": "企业级海外 AI 官方代采与 GPT 集中采购合规解决方案平台",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "软件公司与研发团队如何采购 OpenAI Codex 及代码大模型？支持对公和专票吗？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "完全支持！我们专为软件互联网与研发技术团队提供 OpenAI Codex、ChatGPT Plus/Pro 20x 深度编程算力代采通道。彻底解决研发人员个人外币卡拒付、某宝代充被封、无票难报销的痛点。支持中国工商银行对公转账、开具国家税务 6% 增值税专用发票（信息技术服务费），提供官方原版 Invoice 与 72 小时封号退赔保障，支持研发费用合规列支。",
        },
      },
      {
        "@type": "Question",
        "name": "大中型企业进行 GPT 批量集采有哪些阶梯优惠？如何统一切入？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "我们实行透明的“采购越多单价越低”大宗集采机制：5~19 席自动触发团队集采阶梯，立减约 6%~10%；20 席及以上解锁大客户战略集采底价，最高可立减 25% 预算。针对集采客户，提供加盖公章的一揽子框架合作协议、一张大额 6% 专票统一报销、批量席位开通及大客户经理 1 对 1 专属技术顾问与履约保障。",
        },
      },
      {
        "@type": "Question",
        "name": "能不能开具 6% 增值税专用发票？企业财务如何报销？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "完全支持！我们具备正规科技与信息技术服务资质，支持开具增值税专用发票（税率 6%）或增值税普通发票，发票服务类目通常开列为“信息技术服务 软件技术服务费”或“技术咨询费”。款项确认到账后 2 个工作日内推送至贵司财务指定邮箱，完全满足一般纳税人进项税额抵扣与公司正规入账报销要求。",
        },
      },
      {
        "@type": "Question",
        "name": "如果使用期间账号被官方风控封禁，具体怎么退赔？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "我们签署法务盖章的《SLA 服务等级保障协议》作为合同附件：① 72 小时闪电保换：激活 72 小时内若遇厂商批量风控，2 小时内免费更换补全；② 全周期按天折算退款：后续在正常使用期内若遇网络波动封禁，严格按照【当月支付单价 ÷ 30 × 剩余未生效天数】计算，1 个工作日内公对公原路退回至贵司企业账户，或者等额顺延至新账号抵扣，真正做到零风险兜底。",
        },
      },
      {
        "@type": "Question",
        "name": "你们采用的卡段来源是什么？会不会是黑卡？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "绝对不是黑卡！我们严格使用海外正规商业银行核准的企业商业信用卡（Corporate Commercial Cards）为企业代付。充值完成后，可向企业出具 OpenAI 官方后台原版的 Invoice 电子收据（带真实扣费卡号尾数与官方 Invoice ID），企业 IT 和法务均可核验真伪，从源头杜绝因黑卡盗刷导致的连带封号或法律追责。",
        },
      },
      {
        "@type": "Question",
        "name": "官方最新发布的 GPT-6 Astra，企业代采账号是否能第一时间使用？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "完全支持！我们提供 100% 官方正规代充与企业席位订阅，款到激活后账号直接接入 OpenAI 官方最新服务。最新发布的 GPT-6 Astra 旗舰模型及 GPT-5.6 家族已向 Plus、Pro (5x/20x) 和 Team 空间全量推送。",
        },
      },
      {
        "@type": "Question",
        "name": "后续每月/每季度如何续费？业务会不会断档？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "不会断档！我们为每家企业配备专属客服与自动化台账管理。在订阅到期前 5 个工作日，大客户经理会在企微群中主动推送本期续订明细与对公付款账单。采购人员有充裕时间提交公司内部财务审批打款，保障研发与出海业务连续稳定运行。",
        },
      },
    ],
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdData),
          }}
        />
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
