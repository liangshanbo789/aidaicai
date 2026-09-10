import type { Metadata } from "next";
import DocCopyAction from "@/components/DocCopyAction";
import { Receipt, ChevronRight, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { PRODUCTS_CONFIG } from "@/config/pricing";

export const metadata: Metadata = {
  title: "【官方文件】企业级 OpenAI / ChatGPT 官方代采阶梯报价单与权益手册",
  description: "2026 最新企业级 OpenAI / ChatGPT 官方代采阶梯报价单。全面覆盖 ChatGPT Plus、Pro (5x/20x)、Team 空间之月付、季付、年付对公含税阶梯价格，支持 6% 增值税专用发票开具、企业银行对公转账与大客户战略集采增值礼遇。",
  keywords: [
    "ChatGPT企业代采报价单",
    "ChatGPT Plus批量采购价格",
    "ChatGPT Pro 20x对公价格",
    "ChatGPT Team版含税价格",
    "OpenAI企业阶梯折扣",
    "ChatGPT专票采购价格表",
  ],
  alternates: {
    canonical: "https://gongsi.one/docs/pricing/",
  },
  openGraph: {
    title: "企业级 OpenAI / ChatGPT 官方代采阶梯报价单 (2026版) | AI代采 aidaicai.com",
    description: "全面覆盖 Plus、Pro 5x/20x、Team 空间阶梯报价，支持企业对公转账与 6% 专票开具。",
    url: "https://gongsi.one/docs/pricing/",
    siteName: "AI代采 aidaicai.com",
    locale: "zh_CN",
    type: "article",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "企业级 OpenAI / ChatGPT 官方代采阶梯报价单",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "企业级 OpenAI / ChatGPT 官方代采阶梯报价单 (2026版) | AI代采 aidaicai.com",
    description: "全面覆盖 Plus、Pro 5x/20x、Team 空间阶梯报价，支持企业对公转账与 6% 专票开具。",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "首页",
          "item": "https://gongsi.one/",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "文档知识库",
          "item": "https://gongsi.one/docs/pricing/",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "阶梯代采报价单",
          "item": "https://gongsi.one/docs/pricing/",
        },
      ],
    },
    {
      "@type": "Product",
      "name": "企业级 OpenAI / ChatGPT 官方合规代采服务",
      "description": "全面覆盖 ChatGPT Plus、Pro (5x/20x)、Team 空间对公含税阶梯价格，支持 6% 增值税专用发票开具与银行对公转账。",
      "brand": {
        "@type": "Brand",
        "name": "AI代采",
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "CNY",
        "lowPrice": "135",
        "highPrice": "1580",
        "offerCount": "6",
        "availability": "https://schema.org/InStock",
        "url": "https://gongsi.one/docs/pricing/",
      },
    },
  ],
};

const pricingDocText = `【AI代采 aidaicai.com】企业级 OpenAI / ChatGPT 官方采购阶梯报价单 (2026版)

一、 核心产品参数
• ChatGPT Plus ($20/月)：优先接入最新 GPT-6 Astra 旗舰基石模型、GPT-5.6 高频日常调用、高级数据分析与多模态创作；
• ChatGPT Team 空间 ($30/人/月)：全员享有 GPT-6 Astra 与 GPT-5.6 能力、企业数据默认不入训、企业管理员统一分配席位；
• ChatGPT Pro 5x ($100/月)：5倍算力上限、支持 GPT-6 深度推理思考、100 万 (1M Token) 超长上下文记忆；
• ChatGPT Pro 20x 旗舰版 ($200/月)：搭载 OpenAI 满血旗舰 GPT-6 Astra、20 倍极限算力配额、Computer Operator 电脑操控智能体。

二、 企业采购阶梯报价方案 (RMB / 含税对公 6% 专票)
1. ChatGPT Plus 采购价：
   - 1 ~ 4 席：¥ 165/月/个 (季付 ¥ 155，年付 ¥ 148)
   - 5 ~ 19 席：¥ 155/月/个 (季付 ¥ 148，年付 ¥ 140)
   - 20 席以上：¥ 145/月/个 (季付 ¥ 140，年付 ¥ 135)

2. ChatGPT Pro 20x 旗舰版采购价：
   - 1 ~ 4 席：¥ 1,580/月/个 (季付 ¥ 1,480，年付 ¥ 1,420)
   - 5 ~ 19 席：¥ 1,480/月/个 (季付 ¥ 1,390，年付 ¥ 1,350)
   - 20 席以上：¥ 1,380/月/个 (季付 ¥ 1,330，年付 ¥ 1,280)

三、 对公与发票保障
1. 开具类目：*信息技术服务* 软件技术服务费 / 技术咨询费；
2. 发票税率：6% 增值税专用发票或普通发票；
3. 履约保障：100% 正规商业信用卡代付，出具官方后台 Invoice 账单，法务盖章《SLA 72h 封号包赔协议》。`;

export default function PricingDocPage() {
  return (
    <article className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 面包屑 */}
      <nav className="flex items-center gap-2 text-xs text-secondary">
        <Link href="/" className="hover:text-primary transition-colors">官网首页</Link>
        <ChevronRight className="w-3.5 h-3.5 text-tertiary" />
        <span className="text-primary font-medium">企业采购阶梯报价单</span>
      </nav>

      {/* 文章头部 */}
      <header className="space-y-4 pb-6 border-b border-theme-subtle">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-mono">
          <Receipt className="w-3.5 h-3.5" />
          <span>官方标准报价 · 2026 最新版</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-primary">
          【官方文件】企业级 OpenAI / ChatGPT 官方代采阶梯报价单与权益手册
        </h1>
        <p className="text-sm text-secondary leading-relaxed max-w-3xl">
          涵盖 ChatGPT Plus、Team 空间、Pro 5x、Pro 20x 满血旗舰版的单月、季度、年度采购对公含税阶梯价，明晰 6% 增值税专用发票开具细则及大客户专属增值权益。
        </p>
        <div className="pt-2 flex flex-wrap items-center gap-4">
          <DocCopyAction content={pricingDocText} source="pricing" />
          <Link
            href="/#calculator"
            className="text-xs text-[#10A37F] hover:underline inline-flex items-center gap-1 font-medium"
          >
            <span>使用在线阶梯预算计算器实时测算</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </header>

      {/* 正文表格与详细内容 */}
      <div className="codex-panel p-6 sm:p-8 bg-surface space-y-8 text-sm leading-relaxed border-theme-subtle">
        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-primary border-l-2 border-[#10A37F] pl-3">
            一、 产品版本矩阵与核心算力
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.values(PRODUCTS_CONFIG).map((p) => (
              <div key={p.id} className="p-4 rounded-xl bg-surface-elevated border border-theme-subtle space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-primary text-base">{p.name}</span>
                  <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400">{p.officialPriceDisplay}</span>
                </div>
                <p className="text-xs text-secondary">{p.tagline}</p>
                <div className="text-xs text-tertiary pt-2 border-t border-theme-subtle">
                  对公基准：<span className="text-primary font-bold">¥ {p.baseMonthlyRmb}</span> {p.id === "team" ? "/人/月" : "/月/账号"}
                  <span className="ml-2 text-emerald-600 dark:text-emerald-400">集采低至 ¥{p.lowestPriceRmb} 起</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-primary border-l-2 border-[#10A37F] pl-3">
            二、 采购阶梯优惠模型 (含 6% 增值税专票)
          </h2>
          <p className="text-xs text-secondary">
            我们为批量采购的企业客户提供阶梯特惠与季付/年付双重优惠，采购席位数越多，单席位摊薄成本越低：
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse border border-theme-subtle">
              <thead>
                <tr className="bg-surface-elevated border-b border-theme-subtle text-primary font-medium">
                  <th className="p-3">产品版本</th>
                  <th className="p-3">采购席位梯度</th>
                  <th className="p-3">月付含税单价</th>
                  <th className="p-3">季付优惠单价 (推荐)</th>
                  <th className="p-3">年付极限单价</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-theme-subtle text-secondary">
                <tr>
                  <td className="p-3 font-semibold text-primary" rowSpan={3}>ChatGPT Plus</td>
                  <td className="p-3">1 ~ 4 席</td>
                  <td className="p-3">¥ 165 / 月</td>
                  <td className="p-3 text-emerald-600 dark:text-emerald-400">¥ 155 / 月</td>
                  <td className="p-3">¥ 148 / 月</td>
                </tr>
                <tr>
                  <td className="p-3">5 ~ 19 席 (团队优选)</td>
                  <td className="p-3">¥ 155 / 月</td>
                  <td className="p-3 text-emerald-600 dark:text-emerald-400 font-semibold">¥ 148 / 月</td>
                  <td className="p-3">¥ 140 / 月</td>
                </tr>
                <tr>
                  <td className="p-3">20 席及以上 (大客户)</td>
                  <td className="p-3">¥ 145 / 月</td>
                  <td className="p-3 text-emerald-600 dark:text-emerald-400">¥ 140 / 月</td>
                  <td className="p-3 font-bold text-primary">¥ 135 / 月</td>
                </tr>
                <tr className="bg-surface-elevated/40">
                  <td className="p-3 font-semibold text-primary" rowSpan={3}>ChatGPT Pro (20x 旗舰版)</td>
                  <td className="p-3">1 ~ 4 席</td>
                  <td className="p-3">¥ 1,580 / 月</td>
                  <td className="p-3 text-emerald-600 dark:text-emerald-400">¥ 1,480 / 月</td>
                  <td className="p-3">¥ 1,420 / 月</td>
                </tr>
                <tr className="bg-surface-elevated/40">
                  <td className="p-3">5 ~ 19 席 (研发标配)</td>
                  <td className="p-3">¥ 1,480 / 月</td>
                  <td className="p-3 text-emerald-600 dark:text-emerald-400 font-semibold">¥ 1,390 / 月</td>
                  <td className="p-3">¥ 1,350 / 月</td>
                </tr>
                <tr className="bg-surface-elevated/40">
                  <td className="p-3">20 席及以上 (科研大客户)</td>
                  <td className="p-3">¥ 1,380 / 月</td>
                  <td className="p-3 text-emerald-600 dark:text-emerald-400">¥ 1,330 / 月</td>
                  <td className="p-3 font-bold text-primary">¥ 1,280 / 月</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-primary border-l-2 border-[#10A37F] pl-3">
            三、 发票开具与对公结算流程
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3.5 rounded-lg bg-surface-elevated border border-theme-subtle space-y-1">
              <span className="font-semibold text-primary">1. 选定产品与席位</span>
              <p className="text-secondary">在线计算器测算或联系业务经理确认订单配置与含税金额。</p>
            </div>
            <div className="p-3.5 rounded-lg bg-surface-elevated border border-theme-subtle space-y-1">
              <span className="font-semibold text-primary">2. 银行对公转账</span>
              <p className="text-secondary">签署电子合同，支持招商银行/工商银行网银公对公电汇打款。</p>
            </div>
            <div className="p-3.5 rounded-lg bg-surface-elevated border border-theme-subtle space-y-1">
              <span className="font-semibold text-primary">3. 专票寄送与交付</span>
              <p className="text-secondary">30 分钟内完成全员官方直充激活，2 个工作日内推送 6% 数电专票。</p>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
