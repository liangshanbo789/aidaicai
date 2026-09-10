import type { Metadata } from "next";
import DocCopyAction from "@/components/DocCopyAction";
import { FileCheck, ChevronRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "【标准合同范本】企业级海外软件采购与技术支持服务框架协议",
  description: "企业级海外 AI 软件官方代采框架合作协议标准范本。明确对公人民币银行结算、6% 增值税专用发票开具、账号交付与所有权归属、保密义务（NDA）及法务公章盖印标准，支持法务快速合规过审签约。",
  keywords: [
    "海外软件代采合同范本",
    "ChatGPT代付合作协议",
    "企业AI采购服务合同",
    "ChatGPT对公打款合同",
    "软件技术服务费专票合同",
  ],
  alternates: {
    canonical: "https://gongsi.one/docs/agreement/",
  },
  openGraph: {
    title: "企业级海外软件代采购框架合作协议范本 | AI代采 aidaicai.com",
    description: "法务合规标准框架协议：对公银行电汇、6% 增值税专票、数据保密与 SLA 售后条款健全。",
    url: "https://gongsi.one/docs/agreement/",
    siteName: "AI代采 aidaicai.com",
    locale: "zh_CN",
    type: "article",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "企业级海外软件代采购框架合作协议范本",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "企业级海外软件代采购框架合作协议范本 | AI代采 aidaicai.com",
    description: "法务合规标准框架协议：对公银行电汇、6% 增值税专票、数据保密与 SLA 售后条款健全。",
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
          "item": "https://gongsi.one/docs/agreement/",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "代采购合作协议",
          "item": "https://gongsi.one/docs/agreement/",
        },
      ],
    },
    {
      "@type": "TechArticle",
      "headline": "企业级海外软件代采购框架合作协议范本",
      "description": "法务合规标准框架协议：对公银行电汇、6% 增值税专票、数据保密与 SLA 售后条款健全。",
      "url": "https://gongsi.one/docs/agreement/",
      "author": {
        "@type": "Organization",
        "name": "AI代采",
      },
    },
  ],
};

const agreementText = `【标准合同范本】企业级海外软件采购与技术支持服务框架协议

合同编号：ADC-2026-【年月】-【流水号】
签约地点：北京市 / 深圳市 / 上海市 / 成都市

甲方（采购方）：【甲方企业全称】
统一社会信用代码：【 】
注册地址：【 】

乙方（服务方）：AI代采信息技术服务有限公司（aidaicai.com）
统一社会信用代码：【 】
注册地址：四川省成都市高新区AI创新中心

鉴于甲方因日常研发与出海业务需要，拟委托乙方为其采购并代付开通海外软件 SaaS 生产力工具（包括但不限于 OpenAI ChatGPT Plus / Pro / Team 等）之官方订阅服务，并由乙方提供配套技术咨询与对公财务结算保障；双方依据《中华人民共和国民法典》及相关法律法规，达成如下框架协议：

第一条 合作内容与采购范围
1.1 甲方委托乙方提供海外 AI 生产力工具的官方代订、卡段清算、账号激活与售后支持服务；
1.2 具体产品型号、账号数量、生效周期及含税结算金额，均以双方盖章/签字确认的《采购订单确认书》为准。

第二条 费用结算与发票开具
2.1 结算方式：双方一律采用人民币（RMB）通过企业银行对公账户转账结算；
2.2 税费发票：乙方在收到款项后 2 个工作日内，向甲方开具等额的 6% 增值税专用发票或普通发票，类目为“*信息技术服务* 软件技术服务费”；
2.3 付款时效：甲方应于订单确认之日起 3 个工作日内向乙方指定对公账户支付当期全部款项。

第三条 交付流程与账号归属
3.1 乙方在确认款项到账后 30 分钟内完成官方订阅开通并向甲方交付使用；
3.2 甲方享有交付账号的全部使用权、数据所有权及由其生成之所有知识产权，乙方不留存、不泄露、不窥探甲方的任何业务内容。

第四条 售后保障与违约责任
4.1 乙方承诺所使用充值渠道均为正规海外商业银行渠道，100% 官方正规扣费；
4.2 若在订阅服务期内发生非甲方违规操作导致的官方账号异常或封禁，乙方严格按照双方确认的《SLA 售后保障协议》承担在 72 小时内免费补齐或按天原路退款之兜底保障责任。

第五条 协议期限与争议解决
5.1 本协议自双方盖章（含合规电子印章）之日起生效，有效期为 1 年。期满后如双方无书面异议，自动顺延 1 年；
5.2 凡因执行本协议所发生的任何争议，双方应友好协商解决；协商不成的，可向原告所在地人民法院提起诉讼。`;

export default function AgreementDocPage() {
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
        <span className="text-primary font-medium">代采购框架合作协议范本</span>
      </nav>

      {/* 头部 */}
      <header className="space-y-4 pb-6 border-b border-theme-subtle">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-mono">
          <FileCheck className="w-3.5 h-3.5" />
          <span>法务标准协议 · 支持电子印章签约</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-primary">
          【标准合同范本】企业级海外软件采购与技术支持服务框架协议
        </h1>
        <p className="text-sm text-secondary leading-relaxed max-w-3xl">
          专为出海企业法务内审量身定制。严格遵循《中华人民共和国民法典》，厘清双方在对公打款、6% 数电专票交付、数据保密不接触及 SLA 违约赔付责任界限。
        </p>
        <div className="pt-2">
          <DocCopyAction content={agreementText} source="agreement" />
        </div>
      </header>

      {/* 正文条目 */}
      <div className="codex-panel p-6 sm:p-8 bg-surface space-y-6 text-sm leading-relaxed border-theme-subtle">
        <section className="space-y-2">
          <h2 className="text-base font-semibold text-primary">第一条 合作内容与采购范围</h2>
          <p className="text-xs sm:text-sm text-secondary">
            甲方委托乙方提供海外 AI 生产力工具（OpenAI ChatGPT Plus / Pro / Team 等）的官方代订、卡段清算、账号激活与售后支持服务。每次采购以双方盖章的《订单确认书》为准。
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-primary">第二条 费用结算与发票开具</h2>
          <p className="text-xs sm:text-sm text-secondary">
            全款采用人民币通过企业银行网银对公转账结算。乙方在款项确认后 2 个工作日内向甲方开具等额的 6% 增值税专用发票（信息技术服务费），可全额进项抵扣。
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-primary">第三条 交付流程与账号归属</h2>
          <p className="text-xs sm:text-sm text-secondary">
            乙方在款到 30 分钟内完成激活交付。甲方享有交付账号的全部使用权与由其生成之所有知识产权资产，乙方绝不留存或窥探业务内容。
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-primary">第四条 售后保障与违约责任</h2>
          <p className="text-xs sm:text-sm text-secondary">
            乙方严格按照双方确认的《SLA 售后协议》执行：72 小时内风控免费换新补齐；后续在订阅期内若遇厂商风控按日折算极速退款。
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-primary">第五条 协议期限与争议解决</h2>
          <p className="text-xs sm:text-sm text-secondary">
            协议自双方盖章之日起生效，有效期 1 年，期满无异议自动顺延。支持腾讯电子签、契约锁等企业电子印章签署。
          </p>
        </section>
      </div>
    </article>
  );
}
