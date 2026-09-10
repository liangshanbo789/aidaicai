import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  TrendingDown,
  Receipt,
  ShieldCheck,
  CheckCircle2,
  Layers,
  ArrowRight,
  Gift,
  FileCheck,
  Scale,
  Users,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "大中型企业 GPT 官方集中采购 (集采) 方案与阶梯报价手册 | 统一对公与 6% 数电专票 - AI代采",
  description:
    "专为采购部、行政与财务定制的大中型企业 GPT 官方集中采购 (集采) 解决方案。全系覆盖 ChatGPT Plus、Pro (5x/20x)、Team 空间。实行采购越多单价越低阶梯降本机制，单席最高直降 25%。一纸框架合同、工行对公转账、一张 6% 增值税专用发票统一平账，附带公章 SLA 72h 封号包赔兜底。",
  keywords: [
    "GPT集采",
    "ChatGPT集采",
    "企业GPT集采",
    "OpenAI批量集采",
    "AI大模型集采",
    "ChatGPT批量代采",
    "大中型企业AI集采",
    "ChatGPT对公采购专票",
    "GPT年度框架采购",
    "AI代采",
  ],
  alternates: {
    canonical: "https://gongsi.one/solutions/gpt-bulk-procurement/",
  },
  openGraph: {
    title: "大中型企业 GPT 官方集中采购 (集采) 方案与阶梯报价手册 | AI代采",
    description:
      "多买立减、量大从优。专为 5~100+ 席位企业打造的 GPT 官方集采通道。支持统一对公转账、一张 6% 专票统一入账与经办人战略集采礼遇。",
    url: "https://gongsi.one/solutions/gpt-bulk-procurement/",
    siteName: "AI代采 aidaicai.com",
    locale: "zh_CN",
    type: "article",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "大中型企业 GPT 官方集中采购集采方案与阶梯报价手册",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "大中型企业 GPT 官方集中采购 (集采) 方案与阶梯报价手册 | AI代采",
    description:
      "多买立减、量大从优。专为 5~100+ 席位企业打造的 GPT 官方集采通道。支持统一对公转账、一张 6% 专票统一入账与经办人战略集采礼遇。",
    images: ["/og-image.png"],
  },
};

const BULK_TIERS = [
  {
    tier: "Tier 1: 弹性试用阶段",
    seats: "1 ~ 4 席",
    desc: "适合部门小规模技术可行性验证、单项目先锋攻坚",
    discount: "标准官方对公基准价",
    plusPrice: "¥ 165 / 月",
    pro20xPrice: "¥ 1,580 / 月",
    highlight: false,
    perk: "零起订门槛，支持个人现有账号直接官方无缝直充",
  },
  {
    tier: "Tier 2: 团队集中采购",
    seats: "5 ~ 19 席",
    desc: "核心技术研发团队、出海业务全员日常提效标配",
    discount: "自动触发批量阶梯，单席立降 ~10%",
    plusPrice: "¥ 145 ~ 155 / 月",
    pro20xPrice: "¥ 1,390 ~ 1,480 / 月",
    highlight: false,
    perk: "赠送专属经办人商务关怀礼包 (等值 ¥15~20/席/月) 及 1v1 客服群",
  },
  {
    tier: "Tier 3: 战略大宗集采底价",
    seats: "20 席及以上",
    desc: "中大型互联网公司、跨国制造业、集团级全面 AI 转型",
    discount: "解锁大客户战略集采底价，最高立减 25%",
    plusPrice: "低至 ¥ 135 / 月",
    pro20xPrice: "低至 ¥ 1,280 / 月",
    highlight: true,
    perk: "附赠战略大客户尊享礼遇、定制化招采立项材料支持、专属大客户总监",
  },
];

const BULK_FAQS = [
  {
    q: "为什么大中型企业必须从“员工零散自购”转向“企业集中集采”？",
    a: "员工分散购买存在三大难以承受的代价：① 财务无法获得合规 6% 增值税专用发票，难以税前扣除，员工个人垫资极易触发税务风险；② 淘宝代充店铺黑卡频发，一旦封号造成研发历史数据清空与工期延误；③ 企业无法享受大宗采购阶梯让利。通过官方集中集采，企业可统一签署框架协议，享受最高 25% 预算直降，由一张大额专票与银行对公回单统一入账平账。",
  },
  {
    q: "一次性采购 20+ 个账号，企业内部如何统一开票与报销？",
    a: "我们提供高度贴合财务规范的一揽子财税服务：① 统一结算：企业财务只需向中国工商银行对公账户发起一笔银行转账；② 统一发票：全额开具 6% 增值税专用发票（或普通发票），品目为《信息技术服务 软件技术服务费》；③ 账单附件：附带明细清册与 OpenAI 官方原版 Invoice 凭据，财务可直接归档用于企业所得税税前列支与进项税抵扣。",
  },
  {
    q: "集采合同如何签署？合同期内人员离职或账号变动怎么办？",
    a: "我们提供加盖公章的《企业海外软件代采购框架合作协议》与《SLA 服务保障协议》，支持电子签名或纸质公章寄送。在服务期内，我们支持灵活的人员席位调配：若员工离职或部门轮换，可由企业对接人在专属服务群中申请，技术团队在 2 小时内完成席位重置或转移，保障公司资产绝对可控。",
  },
  {
    q: "大客户战略集采的“经办人伙伴礼遇与商务支持”如何合规落地？",
    a: "为了帮助企业采购和经办人员顺利推动内部立项，我们大客户部提供全面的增值配套支持：包括加盖公章的正规报价单、多方案 ROI 投资回报测算模型、以及针对战略伙伴的经办人服务支持包。相关安排在严格遵守商业与合规准则的前提下开展，详情可预约大客户总监进行 1 对 1 商务沟通。",
  },
];

export default function GptBulkProcurementPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "首页",
        "item": "https://gongsi.one",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "行业解决方案",
        "item": "https://gongsi.one/solutions/gpt-bulk-procurement/",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "大中型企业 GPT 官方集中采购 (集采) 方案",
        "item": "https://gongsi.one/solutions/gpt-bulk-procurement/",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: BULK_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "大中型企业 GPT 官方集中采购 (集采) 方案与阶梯报价",
    serviceType: "大中型企业级海外 AI / OpenAI GPT 批量代采与框架采购服务",
    provider: {
      "@type": "Organization",
      name: "AI代采",
      url: "https://gongsi.one/",
    },
    areaServed: "CN",
    description: "专为 5~100+ 席位企业打造的 GPT 官方集采通道。支持统一对公转账、一张 6% 增值税专用发票统一平账、最高立减 25% 预算与公章 SLA 72h 封号包赔兜底。",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "CNY",
      lowPrice: "135",
      highPrice: "1580",
      url: "https://gongsi.one/solutions/gpt-bulk-procurement/",
    },
  };

  return (
    <article className="space-y-12">
      {/* 结构化数据注入 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* 面包屑导航 */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-tertiary">
        <Link href="/" className="hover:text-primary transition-colors">
          首页
        </Link>
        <span>/</span>
        <span className="text-secondary">行业解决方案</span>
        <span>/</span>
        <span className="text-primary font-medium">大中型企业 GPT 官方集中采购</span>
      </nav>

      {/* 头部 Hero 区域 */}
      <header className="space-y-4 border-b border-theme-subtle pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-theme-subtle bg-surface-elevated text-xs font-mono text-secondary">
          <Building2 className="w-3.5 h-3.5 text-[#10A37F]" />
          <span>大宗集中采购 · 阶梯式降本 · 统一开票合规</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-primary leading-tight">
          大中型企业 GPT 官方集中采购 (集采) 方案与阶梯让利指南
        </h1>

        <p className="text-base sm:text-lg text-secondary leading-relaxed max-w-3xl">
          专为企业采购部、行政负责人与财务主管定制的一站式海外 AI 集采通道。覆盖 ChatGPT Plus、Pro (5x/20x)、Team 空间及 GPT-6 Astra。实行“采购越多单价越低”阶梯机制，单席最高直降 25%，支持一纸框架合同、统一工行对公转账、一张 6% 增值税专用发票合并报销及经办人专属战略集采礼遇。
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-4">
          <a
            href="/#calculator"
            className="btn-openai-white text-xs sm:text-sm px-6 py-2.5 flex items-center gap-2"
          >
            <span>测算企业批量集采预算</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <Link
            href="/docs/pricing/"
            className="btn-openai-secondary text-xs sm:text-sm px-5 py-2.5 flex items-center gap-2"
          >
            <Receipt className="w-4 h-4 text-secondary" />
            <span>查阅 2026 官方阶梯报价单</span>
          </Link>
          <Link
            href="/solutions/codex-procurement/"
            className="text-xs text-secondary hover:text-primary transition-colors flex items-center gap-1"
          >
            <span>查阅研发团队 OpenAI Codex 代采方案</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </header>

      {/* 为什么企业需要集采？三大核心价值 */}
      <section className="space-y-6">
        <div>
          <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 mb-1">ENTERPRISE PROCUREMENT VALUE</div>
          <h2 className="text-2xl font-semibold text-primary tracking-tight">
            大中型企业实施 GPT 官方集采的三大核心收益
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-6 rounded-2xl bg-surface border border-theme-subtle space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-surface-elevated border border-theme-subtle flex items-center justify-center text-[#10A37F]">
              <TrendingDown className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-primary">1. 阶梯规模让利，采购直降 25%</h3>
            <p className="text-xs text-secondary leading-relaxed">
              摆脱分散购买带来的溢价与汇率损耗。采购席位越多、结算周期越长，单席成本越低，大客户阶梯底价单席最高降幅超 25%，为企业节约巨额预算。
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-surface border border-theme-subtle space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-surface-elevated border border-theme-subtle flex items-center justify-center text-[#10A37F]">
              <Receipt className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-primary">2. 一张数电专票，彻底解决财务做账</h3>
            <p className="text-xs text-secondary leading-relaxed">
              全量提供国家税务局认证 6% 增值税专用发票（信息技术服务费），直接抵扣企业增值税销项税，满足研发费用加计扣除核查，审计合规 100% 阳光无忧。
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-surface border border-theme-subtle space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-surface-elevated border border-theme-subtle flex items-center justify-center text-[#10A37F]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-primary">3. 公章效力合同与 72h SLA 兜底</h3>
            <p className="text-xs text-secondary leading-relaxed">
              统一签订《企业代采购框架协议》，法务盖章承诺 72 小时封号保换及按天折算极速退款。杜绝黑卡盗刷风险，保障企业研发与业务系统持续可用。
            </p>
          </div>
        </div>
      </section>

      {/* 阶梯让利机制对比表格 (Volume Tier Matrix) */}
      <section className="space-y-6">
        <div>
          <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 mb-1">VOLUME TIER MATRIX</div>
          <h2 className="text-2xl font-semibold text-primary tracking-tight">
            企业集中采购阶梯让利梯次与增值权益
          </h2>
          <p className="text-xs sm:text-sm text-secondary mt-1">
            透明的批量降本梯度，采购规模跨过门槛自动触发更高档位的优惠与大客户伙伴礼遇。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {BULK_TIERS.map((tier, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl bg-surface border flex flex-col justify-between ${
                tier.highlight
                  ? "border-emerald-500/40 bg-gradient-to-b from-emerald-500/[0.04] to-transparent shadow-sm"
                  : "border-theme-subtle"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-tertiary">{tier.tier}</span>
                  {tier.highlight && (
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold">
                      大宗首选
                    </span>
                  )}
                </div>

                <div>
                  <div className="text-xl font-bold text-primary">{tier.seats}</div>
                  <div className="text-xs text-secondary mt-1">{tier.desc}</div>
                </div>

                <div className="p-3 rounded-xl bg-surface-elevated border border-theme-subtle space-y-2">
                  <div className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                    {tier.discount}
                  </div>
                  <div className="flex justify-between text-xs pt-1 border-t border-theme-subtle">
                    <span className="text-secondary">ChatGPT Plus:</span>
                    <span className="font-mono text-primary font-medium">{tier.plusPrice}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-secondary">ChatGPT Pro 20x:</span>
                    <span className="font-mono text-primary font-medium">{tier.pro20xPrice}</span>
                  </div>
                </div>

                <div className="text-xs text-secondary leading-relaxed bg-surface-elevated/60 p-3 rounded-xl border border-theme-subtle">
                  <strong className="text-primary block mb-1">专属增值权益：</strong>
                  {tier.perk}
                </div>
              </div>

              <a
                href="/#calculator"
                className={`mt-6 w-full py-2.5 rounded-full text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                  tier.highlight ? "btn-openai-white" : "btn-openai-secondary"
                }`}
              >
                <span>按此梯次精细测算</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 战略集采伙伴增值礼遇与采购支持专区 */}
      <section className="p-6 sm:p-8 rounded-2xl bg-surface border border-theme-subtle space-y-6">
        <div className="flex items-center gap-2.5 text-amber-600 dark:text-amber-400">
          <Gift className="w-5 h-5" />
          <span className="text-xs font-mono font-semibold tracking-wide">ENTERPRISE PROCUREMENT PARTNER PROGRAM</span>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-primary tracking-tight">
            助力经办人轻松立项：全套采购支持与战略伙伴礼遇
          </h2>
          <p className="text-xs sm:text-sm text-secondary mt-1">
            我们深知企业采购与 IT 经办人员在立项过程中面临的合规审查、比选报告与审批压力。我们提供完整的赋能工具包。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-surface-elevated border border-theme-subtle space-y-2">
            <div className="font-semibold text-primary flex items-center gap-1.5">
              <FileCheck className="w-4 h-4 text-[#10A37F]" />
              <span>《立项申请呈批完整报告》</span>
            </div>
            <p className="text-secondary leading-relaxed">
              涵盖业务必要性、供应商比选打分表、数据安全说明及合规论证，直接套用公司名称即可上报审批。
            </p>
            <Link href="/docs/proposal/" className="text-emerald-600 dark:text-emerald-400 hover:underline inline-block pt-1">
              查阅立项模板 →
            </Link>
          </div>

          <div className="p-4 rounded-xl bg-surface-elevated border border-theme-subtle space-y-2">
            <div className="font-semibold text-primary flex items-center gap-1.5">
              <Scale className="w-4 h-4 text-[#10A37F]" />
              <span>《框架采购合作协议(公章范本)》</span>
            </div>
            <p className="text-secondary leading-relaxed">
              标准双方盖章合同，明确约定技术服务品目、付款周期、发票送达与 72h SLA 违约赔偿责任，法务秒过审。
            </p>
            <Link href="/docs/agreement/" className="text-emerald-600 dark:text-emerald-400 hover:underline inline-block pt-1">
              查阅协议范本 →
            </Link>
          </div>

          <div className="p-4 rounded-xl bg-surface-elevated border border-theme-subtle space-y-2">
            <div className="font-semibold text-primary flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#10A37F]" />
              <span>战略集采伙伴激励与商务关怀</span>
            </div>
            <p className="text-secondary leading-relaxed">
              为批量采购经办人提供合规商务关怀方案（等值京东E卡或数码办公礼包），感谢采购人在企业智能化转型中的关键贡献。
            </p>
            <span className="text-amber-600 dark:text-amber-400 inline-block pt-1 font-mono">
              ★ 详询大客户经理专属定制
            </span>
          </div>
        </div>
      </section>

      {/* 企业集采常见问答 FAQ */}
      <section className="space-y-4">
        <div>
          <div className="text-xs font-mono text-[#10A37F] mb-1">FREQUENTLY ASKED QUESTIONS</div>
          <h2 className="text-2xl font-semibold text-primary">企业 GPT 官方集中采购常见问答</h2>
        </div>

        <div className="space-y-3">
          {BULK_FAQS.map((faq, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-surface border border-theme-subtle space-y-2">
              <h3 className="text-sm font-semibold text-primary flex items-start gap-2">
                <span className="text-[#10A37F] font-mono">Q{idx + 1}.</span>
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs text-secondary leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 底部转化 CTA 模块 */}
      <section className="p-8 rounded-2xl bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 text-white dark:border dark:border-theme-subtle text-center space-y-5">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          启动企业 GPT 官方集采：省时、省钱、合规、安心
        </h2>
        <p className="text-xs sm:text-sm text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          10 分钟出具正规盖章报价单，支持 5 至 100+ 席位规模化交付与一张数电专票统一清算。专属大客户总监全程 1 对 1 保驾护航。
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href="/#calculator"
            className="btn-openai-white w-full sm:w-auto text-xs sm:text-sm px-6 py-3"
          >
            立即测算企业大宗集采预算
          </a>
          <Link
            href="/docs/pricing/"
            className="btn-openai-secondary w-full sm:w-auto text-xs sm:text-sm px-6 py-3"
          >
            查阅阶梯报价单与权益手册
          </Link>
        </div>
      </section>
    </article>
  );
}
