import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aidaicai.com"),
  title: {
    default: "AI代采 aidaicai.com | 企业级海外 AI 官方代采与对公合规解决方案",
    template: "%s | AI代采 aidaicai.com",
  },
  description: "国内领先的企业级 OpenAI / ChatGPT Plus、Pro (5x/20x)、Team 官方代采服务平台。全量支持最新 GPT-6 Astra 与 GPT-5.6 前沿模型，支持企业银行对公转账、开具 6% 增值税专用发票、100% 正规商业信用卡直充、72小时封号包赔兜底及大客户战略集采增值权益。官网：aidaicai.com",
  keywords: [
    "AI代采",
    "aidaicai.com",
    "ChatGPT企业代采",
    "ChatGPT对公转账",
    "ChatGPT开专票",
    "ChatGPT发票报销",
    "ChatGPT Pro 20x代采",
    "GPT-6 Astra采购",
    "ChatGPT Plus企业采购",
    "ChatGPT团队版购买",
    "OpenAI官方代采",
    "出海企业SaaS采购",
    "AI工具合规采购",
    "信息技术服务费专票",
  ],
  authors: [{ name: "AI代采 aidaicai.com", url: "https://www.aidaicai.com" }],
  creator: "AI代采 aidaicai.com",
  publisher: "AI代采 aidaicai.com",
  formatDetection: {
    telephone: false,
  },
  alternates: {
    canonical: "https://www.aidaicai.com",
  },
  openGraph: {
    title: "AI代采 aidaicai.com | 企业级海外 AI 官方代采与对公合规解决方案",
    description: "国内领先的企业级 OpenAI / ChatGPT 官方代采与对公结算平台。支持 6% 增值税专用发票、银行对公转账、100% 正规海外商业卡代充与 72 小时封号退赔保障。",
    url: "https://www.aidaicai.com",
    siteName: "AI代采 aidaicai.com",
    locale: "zh_CN",
    type: "website",
    images: [
      {
        url: "/logo.svg",
        width: 800,
        height: 600,
        alt: "AI代采 aidaicai.com 官方标志",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI代采 aidaicai.com | 企业级海外 AI 官方代采与对公合规解决方案",
    description: "让中国企业合规、阳光代采全球顶尖 AI 生产力。支持 6% 增值税专票、银行对公转账与 72h 封号包赔。",
    images: ["/logo.svg"],
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
    "url": "https://www.aidaicai.com",
    "logo": "https://www.aidaicai.com/logo.svg",
    "description": "国内领先的企业级海外 AI 官方代采、对公财务结算与合规风控兜底服务平台",
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
    "url": "https://www.aidaicai.com",
    "description": "企业级海外 AI 官方代采与对公合规解决方案平台",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
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
