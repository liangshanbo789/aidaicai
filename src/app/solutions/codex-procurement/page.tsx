import type { Metadata } from "next";
import Link from "next/link";
import {
  Code2,
  Terminal,
  ShieldCheck,
  Receipt,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Cpu,
  Zap,
  Sparkles,
  FileCheck,
  Building2,
  Clock,
  Laptop,
} from "lucide-react";

export const metadata: Metadata = {
  title: "研发团队 OpenAI Codex / 代码助手企业对公代采解决方案 | 支持 6% 专票与对公结算 - AI代采",
  description:
    "专为软件互联网、出海技术架构与研发团队打造的 OpenAI Codex / ChatGPT Pro 20x 官方代采合规通道。解决研发个人外币卡拒付、某宝代充黑卡封号与发票报销难题。支持中国工商银行对公转账、国家税务 6% 增值税专用发票开具、72h 封号包赔兜底，研发费用合规列支。",
  keywords: [
    "codex采购",
    "OpenAI Codex采购",
    "Codex企业采购",
    "Codex代采",
    "代码大模型采购",
    "研发团队AI编程代采",
    "程序员AI工具采购",
    "ChatGPT Codex购买",
    "Codex开专票",
    "信息技术服务费专票",
    "AI代采",
  ],
  alternates: {
    canonical: "https://gongsi.one/solutions/codex-procurement/",
  },
  openGraph: {
    title: "研发团队 OpenAI Codex / 代码助手企业对公代采解决方案 | AI代采",
    description:
      "告别员工私人外币卡垫资与黑卡代充封号风险。支持中国工商银行对公转账，开具 6% 增值税专用发票，签署公章 SLA 72h 封号退赔保障。",
    url: "https://gongsi.one/solutions/codex-procurement/",
    siteName: "AI代采 aidaicai.com",
    locale: "zh_CN",
    type: "article",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "研发团队 OpenAI Codex 代码助手企业对公代采解决方案",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "研发团队 OpenAI Codex / 代码助手企业对公代采解决方案 | AI代采",
    description:
      "告别员工私人外币卡垫资与黑卡代充封号风险。支持中国工商银行对公转账，开具 6% 增值税专用发票，签署公章 SLA 72h 封号退赔保障。",
    images: ["/og-image.png"],
  },
};

const CODEX_SPECS = [
  {
    name: "ChatGPT Plus (Codex 入门标配)",
    target: "全栈工程师 / 前端 / 移动端 / 自动化测试",
    icon: Sparkles,
    price: "¥ 135 ~ 165 / 月",
    features: [
      "接入最新 GPT-6 Astra 与 GPT-5.6 前沿模型",
      "OpenAI Codex 代码生成与上下文补全",
      "高级数据分析 (Python 沙箱执行与分析)",
      "多模态架构图、流程图分析与视觉 Debug",
      "支持员工现有官方账号无缝直充升级",
    ],
    highlight: false,
  },
  {
    name: "ChatGPT Pro (5x 研发攻坚版)",
    target: "资深后端 / 大数据工程师 / DevOps",
    icon: Zap,
    price: "¥ 650 ~ 790 / 月",
    features: [
      "5 倍于 Plus 的模型调用与长上下文限额",
      "100 万 (1M Token) 超大上下文代码库理解",
      "GPT-6 Astra 深度思考推理，攻坚复杂 Bug",
      "Deep Research 深度全网技术论文与方案调研",
      "支持按月按季灵活根据研发节点调整席位",
    ],
    highlight: false,
  },
  {
    name: "ChatGPT Pro 20x (架构极限旗舰版)",
    target: "CTO / 首席架构师 / 算法专家 / AI攻坚组",
    icon: Cpu,
    price: "¥ 1,280 ~ 1,580 / 月",
    features: [
      "OpenAI $200 满血旗舰 GPT-6 Astra 极限算力",
      "20 倍极速算力优先队列，超高并发不限频",
      "Computer Operator 智能体操控与多步全流程工程",
      "超大规模复杂分布式系统设计与全库代码审查",
      "附带大客户战略伙伴支持与专属技术群",
    ],
    highlight: true,
  },
];

const CODEX_FAQS = [
  {
    q: "研发人员目前使用的是个人账号，采购后代码历史和提示词能保留吗？",
    a: "完全保留！我们的代采服务支持企业直接提供员工现有使用的 OpenAI 官方个人账号邮箱。充值通过正规海外商业银行卡直接注入该账号，不更换账号实体，原有的所有历史会话、自定义 Prompt、API Key 及代码记录 100% 完整保留，开箱即用。",
  },
  {
    q: "采购 OpenAI Codex 能否开具研发费用专票？财务如何做账与加计扣除？",
    a: "完全支持。我们出具全国统一国家税务数电【增值税专用发票】（税率 6%），发票类目开列为《*信息技术服务* 软件技术服务费》或《*信息技术服务* 技术咨询费》。一般纳税人企业可直接用于进项税额抵扣，同时可合规列入企业“研发支出 - 软件工具与技术服务”科目，完全符合企业研发费用加计扣除审计核查规范。",
  },
  {
    q: "为什么不能让研发工程师在淘宝或找熟人代充？有什么实质风险？",
    a: "第三方店铺普遍使用来历不明的海外虚拟卡池或被盗信用卡（CC）刷单。一旦真实卡主发起拒付（Chargeback），OpenAI 会立即执行永久封号（Banned），且同一关联卡段上的所有账号集体被株连。更重要的是，代充店铺无法提供合法税务发票，开具假发票将使企业面临税务稽查风险；更有甚至要求虚拟币交易，触碰反洗钱合规红线。",
  },
  {
    q: "如果研发使用过程中遇到官方误封或者网络风控，如何处理？",
    a: "我们在合同中附带公章法律效力的《SLA 服务等级保障协议》：① 72 小时闪电保换：激活 72 小时内若遇厂商系统性封控，2 小时内免费更换补齐；② 剩余天数按天折算极速对公退款：使用中途若非违规被封，按【月单价 ÷ 30 × 剩余天数】公对公原路退回，研发零预算损失风险。",
  },
];

export default function CodexProcurementPage() {
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
        "item": "https://gongsi.one/solutions/codex-procurement/",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "研发团队 Codex 代码助手企业对公代采方案",
        "item": "https://gongsi.one/solutions/codex-procurement/",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: CODEX_FAQS.map((faq) => ({
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
    name: "研发团队 OpenAI Codex / 代码助手企业对公代采解决方案",
    serviceType: "企业级海外 AI / OpenAI Codex 官方合规代采与对公技术服务",
    provider: {
      "@type": "Organization",
      name: "AI代采",
      url: "https://gongsi.one/",
    },
    areaServed: "CN",
    description: "专为软件互联网与研发技术团队提供 OpenAI Codex、ChatGPT Plus/Pro 20x 算力代采通道。支持中国工商银行对公转账、6% 增值税专票与 72h 封号退赔保障。",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "CNY",
      lowPrice: "135",
      highPrice: "1580",
      url: "https://gongsi.one/solutions/codex-procurement/",
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
        <span className="text-primary font-medium">Codex 研发代码助手采购</span>
      </nav>

      {/* 头部 Hero 区域 */}
      <header className="space-y-4 border-b border-theme-subtle pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-theme-subtle bg-surface-elevated text-xs font-mono text-secondary">
          <Terminal className="w-3.5 h-3.5 text-[#10A37F]" />
          <span>专为软件互联网、研发技术中心打造 · 100% 官方正规通道</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-primary leading-tight">
          研发团队 OpenAI Codex / 代码助手企业对公代采解决方案
        </h1>

        <p className="text-base sm:text-lg text-secondary leading-relaxed max-w-3xl">
          彻底终结程序员个人外币卡垫资难、某宝黑卡代充连环封号、财务无票做账的三大死结。提供 100% 海外商业实体卡官方代充、中国工商银行对公转账、国家税务 6% 增值税专用发票与公章法律效力 SLA 72h 封号包赔兜底，全面支持研发费用合规税前扣除。
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-4">
          <a
            href="/#calculator"
            className="btn-openai-white text-xs sm:text-sm px-6 py-2.5 flex items-center gap-2"
          >
            <span>测算研发团队代采预算</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <Link
            href="/docs/proposal/"
            className="btn-openai-secondary text-xs sm:text-sm px-5 py-2.5 flex items-center gap-2"
          >
            <FileCheck className="w-4 h-4 text-secondary" />
            <span>下载《研发采购立项呈批模板》</span>
          </Link>
          <Link
            href="/solutions/gpt-bulk-procurement/"
            className="text-xs text-secondary hover:text-primary transition-colors flex items-center gap-1"
          >
            <span>查看企业 GPT 集中采购 (集采) 方案</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </header>

      {/* 核心痛点对比区块 */}
      <section className="space-y-6">
        <div className="text-center sm:text-left">
          <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 mb-1">PAIN POINTS & SOLUTIONS</div>
          <h2 className="text-2xl font-semibold text-primary tracking-tight">
            传统个人垫资/代充 vs AI 代采企业合规通道
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* 传统野路子痛点 */}
          <div className="p-6 rounded-2xl bg-surface border border-red-500/20 shadow-xs space-y-4">
            <div className="flex items-center gap-2.5 text-red-600 dark:text-red-400 font-semibold text-base">
              <AlertTriangle className="w-5 h-5" />
              <h3>传统研发零散代充的连环暴雷</h3>
            </div>
            <ul className="space-y-3 text-xs text-secondary leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-1.5" />
                <span><strong>支付被拒与账号标记</strong>：国内普通双币卡频频被 OpenAI 防欺诈拒付，反复尝试导致 IP 与账号直接被列入高危黑名单。</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-1.5" />
                <span><strong>黑卡盗刷连带永久封禁</strong>：电商平台代充普遍使用盗刷黑卡，一旦拒付账号被封，数月调优的代码上下文与 Prompt 全部清零。</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-1.5" />
                <span><strong>无票难报销与财税风险</strong>：海外 Receipt 无法入账，员工私人转账报销极易触发金税四期审计，假发票更是严重的违法行为。</span>
              </li>
            </ul>
          </div>

          {/* AI代采解决方案 */}
          <div className="p-6 rounded-2xl bg-surface border border-emerald-500/30 shadow-xs space-y-4 bg-gradient-to-b from-emerald-500/[0.02] to-transparent">
            <div className="flex items-center gap-2.5 text-[#10A37F] font-semibold text-base">
              <ShieldCheck className="w-5 h-5" />
              <h3>AI 代采正规对公通道保障</h3>
            </div>
            <ul className="space-y-3 text-xs text-secondary leading-relaxed">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10A37F] shrink-0 mt-0.5" />
                <span><strong>100% 正规海外商业银行卡</strong>：直连 OpenAI 官方扣费系统，出具官方原版带真实付款卡号的 Invoice 电子凭证。</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10A37F] shrink-0 mt-0.5" />
                <span><strong>中国工商银行公对公结算</strong>：直接对公打款，开具国家税务 6% 增值税专用发票（信息技术服务费），研发费用合法列支加计扣除。</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10A37F] shrink-0 mt-0.5" />
                <span><strong>公章效力 SLA 72h 封号包赔</strong>：若遇厂商网络封锁，72 小时闪电保换，中途异常按天折算极速退款，研发资产零风险。</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 研发算力与 Codex 推荐配置矩阵 */}
      <section className="space-y-6">
        <div>
          <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 mb-1">PRODUCT TIERS FOR ENGINEERS</div>
          <h2 className="text-2xl font-semibold text-primary tracking-tight">
            研发团队各职能岗位推荐采购配置
          </h2>
          <p className="text-xs sm:text-sm text-secondary mt-1">
            根据前端、后端、测试、架构及算法岗位的不同算力与上下文需求，灵活组合订阅方案。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CODEX_SPECS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-6 rounded-2xl bg-surface border flex flex-col justify-between ${
                  item.highlight
                    ? "border-amber-500/40 bg-gradient-to-b from-amber-500/[0.04] to-transparent shadow-sm"
                    : "border-theme-subtle"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-lg bg-surface-elevated border border-theme-subtle text-primary">
                      <Icon className="w-5 h-5 text-[#10A37F]" />
                    </div>
                    {item.highlight && (
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-300 border border-amber-500/30">
                        架构高阶首选
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-semibold text-primary">{item.name}</h3>
                  <div className="text-xs text-secondary mt-1 mb-3">适用：{item.target}</div>

                  <div className="p-3 rounded-xl bg-surface-elevated border border-theme-subtle mb-4">
                    <div className="text-[10px] text-tertiary">团队阶梯代采价 (含 6% 专票)</div>
                    <div className="text-lg font-bold text-primary mt-0.5">{item.price}</div>
                  </div>

                  <ul className="space-y-2 text-xs text-secondary mb-6">
                    {item.features.map((feat, fidx) => (
                      <li key={fidx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10A37F] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="/#calculator"
                  className={`w-full py-2.5 rounded-full text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                    item.highlight ? "btn-openai-white" : "btn-openai-secondary"
                  }`}
                >
                  <span>测算本配置预算</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* 研发采购全流程 SOP */}
      <section className="p-6 sm:p-8 rounded-2xl bg-surface border border-theme-subtle space-y-6">
        <div>
          <div className="text-xs font-mono text-[#10A37F] mb-1">PROCUREMENT WORKFLOW</div>
          <h2 className="text-xl font-semibold text-primary">研发团队对公代采标准化 4 步流程</h2>
          <p className="text-xs text-secondary mt-1">从需求统计到开通研发账号，最快 20 分钟内完成，全程企业微信与法务合同保驾护航。</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-surface-elevated border border-theme-subtle space-y-2">
            <div className="text-xs font-mono text-tertiary">STEP 01</div>
            <div className="text-sm font-semibold text-primary">提供邮箱与规格清单</div>
            <div className="text-xs text-secondary leading-relaxed">
              统计研发人员现有 OpenAI 邮箱或由我方提供全新纯净企业专属账号。
            </div>
          </div>
          <div className="p-4 rounded-xl bg-surface-elevated border border-theme-subtle space-y-2">
            <div className="text-xs font-mono text-tertiary">STEP 02</div>
            <div className="text-sm font-semibold text-primary">签署公章框架合同</div>
            <div className="text-xs text-secondary leading-relaxed">
              支持 e 签宝电子签或纸质盖章，合同附带《SLA 72h 封号包赔退款协议》。
            </div>
          </div>
          <div className="p-4 rounded-xl bg-surface-elevated border border-theme-subtle space-y-2">
            <div className="text-xs font-mono text-tertiary">STEP 03</div>
            <div className="text-sm font-semibold text-primary">工行网银对公打款</div>
            <div className="text-xs text-secondary leading-relaxed">
              财务通过企业网银向中国工商银行账户付款，备注“软件技术服务费”。
            </div>
          </div>
          <div className="p-4 rounded-xl bg-surface-elevated border border-theme-subtle space-y-2">
            <div className="text-xs font-mono text-tertiary">STEP 04</div>
            <div className="text-sm font-semibold text-primary">交付 Invoice 与专票</div>
            <div className="text-xs text-secondary leading-relaxed">
              款到 10 分钟激活订阅，交付 OpenAI 官方原版 Invoice，专票发至财务邮箱。
            </div>
          </div>
        </div>
      </section>

      {/* 常见问题解答 FAQ */}
      <section className="space-y-4">
        <div>
          <div className="text-xs font-mono text-[#10A37F] mb-1">FREQUENTLY ASKED QUESTIONS</div>
          <h2 className="text-2xl font-semibold text-primary">研发团队采购 Codex 常见问答</h2>
        </div>

        <div className="space-y-3">
          {CODEX_FAQS.map((faq, idx) => (
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
          立即为研发团队配齐满血版 OpenAI Codex 与代码生产力
        </h2>
        <p className="text-xs sm:text-sm text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          全流程对公合规、6% 增值税专用发票、官方带卡号 Invoice 与 72h SLA 兜底。支持 1 席体验试用至百人团队批量扩容。
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href="/#calculator"
            className="btn-openai-white w-full sm:w-auto text-xs sm:text-sm px-6 py-3"
          >
            测算企业采购预算与优惠
          </a>
          <Link
            href="/docs/pricing/"
            className="btn-openai-secondary w-full sm:w-auto text-xs sm:text-sm px-6 py-3"
          >
            查阅 2026 最新官方阶梯报价单
          </Link>
        </div>
      </section>
    </article>
  );
}
