import type { Metadata } from "next";
import DocCopyAction from "@/components/DocCopyAction";
import { FileText, ChevronRight, CheckCircle2, ShieldAlert } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "【内部呈批模板】企业采购 OpenAI 高级生产力工具立项申请报告",
  description: "专为企业行政、采购与研发总监打造的 ChatGPT / OpenAI 官方企业代采立项呈批报告模板。梳理业务必要性、供应商合规比选、6% 增值税专票入账与风控退赔保障，改写公司名即可向老板与财务呈报。",
  keywords: [
    "ChatGPT采购立项报告",
    "企业采购OpenAI审批申请",
    "ChatGPT代采汇报模板",
    "OpenAI对公转账报销立项",
    "企业AI采购立项申请书",
  ],
  alternates: {
    canonical: "https://gongsi.one/docs/proposal/",
  },
  openGraph: {
    title: "企业采购 OpenAI 高级生产力工具立项申请报告模板 | AI代采 aidaicai.com",
    description: "专为采购与行政编写，解决业务必要性论证、供应商合规比选及财务专票报销流程。",
    url: "https://gongsi.one/docs/proposal/",
    siteName: "AI代采 aidaicai.com",
    locale: "zh_CN",
    type: "article",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "企业采购 OpenAI 高级生产力工具立项申请报告模板",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "企业采购 OpenAI 高级生产力工具立项申请报告模板 | AI代采 aidaicai.com",
    description: "专为采购与行政编写，解决业务必要性论证、供应商合规比选及财务专票报销流程。",
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
          "item": "https://gongsi.one/docs/proposal/",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "立项呈批申报模板",
          "item": "https://gongsi.one/docs/proposal/",
        },
      ],
    },
    {
      "@type": "TechArticle",
      "headline": "企业采购 OpenAI 高级生产力工具立项申请报告模板",
      "description": "专为企业行政、采购与研发总监打造的 ChatGPT / OpenAI 官方企业代采立项呈批报告模板，解决业务论证与财务专票报销。",
      "url": "https://gongsi.one/docs/proposal/",
      "author": {
        "@type": "Organization",
        "name": "AI代采",
      },
    },
  ],
};

const fullTextContent = `关于采购 OpenAI 高级企业生产力账号以提升团队业务效能的立项申请报告

一、 申请基本信息
呈报部门：技术研发中心 / 跨境出海事业部 / 综合管理部
采购标的：OpenAI ChatGPT 企业级高级生产力账号代采与技术支持服务
预计预算：按季度采购享阶梯优惠，支持企业银行对公转账与 6% 增值税专用发票开具

二、 采购背景与业务必要性
1. 研发攻坚需求：复杂系统架构演进、核心代码重构与高维算法推理，对 ChatGPT Pro (搭载 GPT-6 Astra 满血旗舰与顶级深度推理集群) 存在刚性依赖，标准免费版截断严重；
2. 跨境出海运营：海外独立站全语种文案、高阶商客沟通及社媒营销急需 Plus/Pro 稳定支持，可节省 40% 以上外包创作成本；
3. 合规与财务堵点：为避免员工自行在淘宝购买非正规个人代充遭遇“黑卡封号”及个人私转无法报销做账，需引入具备对公资质的正规企业服务商。

三、 拟选供应商与服务方案比选（AI代采 aidaicai.com 优势）
• 票据合规：开具 6% 增值税专用发票（信息技术服务费），可全额进项抵扣；
• 资金阳光：企业银行网银对公电汇，资金链路安全可审计；
• 渠道真实：100% 正规海外商业银行企业信用卡直充，附带官方账单核验；
• 售后兜底：法务盖章《SLA 售后协议》，72 小时封号包换，全周期按天折算退款。

四、 预算与测算建议（参考案例）
拟采购 10 个席位（包含 2 个 Pro 20x 旗舰版与 8 个 Plus 版），按季度采购享受团队阶梯优惠：
• 2 个 ChatGPT Pro (20x 旗舰版)：季付折后单价 ¥ 1,390/月/席 × 2 席 × 3 个月 = ¥ 8,340 元
• 8 个 ChatGPT Plus 版：季付折后单价 ¥ 148/月/席 × 8 席 × 3 个月 = ¥ 3,552 元
含税总计约 ¥ 11,892 元（含 6% 增值税专票，相较单买月付立省 ¥ 1,548 元，降本达 12%）。

五、 资金安全与数据隐私保障
1. 账号所有权保障：绑定公司指定企业邮箱，服务商不接触公司核心业务 Prompt，账号资产留存公司名下；
2. 风控兜底条款：合同约定若遇官方风控封禁，72 小时内包换，全周期按日折算极速退款。

六、 审批建议
该采购能直接赋能研发与核心业务，链路合规、风险闭环，特此提请领导审批预算。`;

export default function ProposalDocPage() {
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
        <span className="text-primary font-medium">企业立项申请报告模板</span>
      </nav>

      {/* 文章头部 */}
      <header className="space-y-4 pb-6 border-b border-theme-subtle">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-mono">
          <FileText className="w-3.5 h-3.5" />
          <span>行政与采购汇报必备 · 2026 最新呈批版</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-primary">
          【企业内部呈批模板】关于采购 OpenAI 高级企业生产力账号以提升团队业务效能的立项申请报告
        </h1>
        <p className="text-sm text-secondary leading-relaxed max-w-3xl">
          专为企业行政采购主管与技术负责人设计。从研发刚需、出海降本、对公 6% 专票合规及 SLA 72h 封号包赔兜底全方位论证，助您轻松打通财务与领导审批流程。
        </p>
        <div className="pt-2">
          <DocCopyAction content={fullTextContent} source="proposal" />
        </div>
      </header>

      {/* 核心文案预览与格式化渲染 */}
      <div className="codex-panel p-6 sm:p-8 bg-surface space-y-6 text-sm leading-relaxed border-theme-subtle">
        <div className="p-4 rounded-xl bg-surface-elevated border border-theme-subtle flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <div className="text-xs text-secondary">
            <span className="font-semibold text-primary">使用指引：</span>
            本模板由 AI 代采（aidaicai.com）法务与商务团队整理，已通过数十家出海与研发型上市公司内审。您可直接点击上方按钮复制全文，按需填入贵司采购席位数与部门名称后提交呈报。
          </div>
        </div>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-primary border-l-2 border-[#10A37F] pl-3">
            一、 申请基本信息
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse border border-theme-subtle">
              <tbody>
                <tr className="border-b border-theme-subtle bg-surface-elevated">
                  <td className="p-2.5 font-medium text-primary w-28">呈报部门</td>
                  <td className="p-2.5 text-secondary">技术研发中心 / 跨境电商事业部 / 综合管理部</td>
                </tr>
                <tr className="border-b border-theme-subtle">
                  <td className="p-2.5 font-medium text-primary">采购标的</td>
                  <td className="p-2.5 text-secondary">OpenAI ChatGPT 企业级高级生产力账号代采与技术支持服务</td>
                </tr>
                <tr className="border-b border-theme-subtle bg-surface-elevated">
                  <td className="p-2.5 font-medium text-primary">对公结算</td>
                  <td className="p-2.5 text-secondary">企业银行对公转账，开具“信息技术服务费” 6% 增值税专用发票</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-medium text-primary">风控保障</td>
                  <td className="p-2.5 text-secondary">签署加盖公章《SLA 保障协议》，72 小时封号包换，全周期按日折算退款</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-primary border-l-2 border-[#10A37F] pl-3">
            二、 采购背景与业务必要性
          </h2>
          <div className="space-y-2 text-secondary text-xs sm:text-sm">
            <p>1. <strong>研发攻坚核心需求</strong>：复杂系统架构演进、核心代码重构与高维算法推理，对 ChatGPT Pro (搭载 GPT-6 Astra 满血旗舰与顶级深度推理集群) 存在刚性依赖，标准免费版截断严重；</p>
            <p>2. <strong>出海运营降本增效</strong>：海外独立站全语种文案、高阶商客沟通及社媒营销急需 Plus/Pro 稳定支持，可节省 40% 以上外包创作成本；</p>
            <p>3. <strong>解决财务与法务堵点</strong>：杜绝员工个人在淘宝购买非正规个人代充遭遇“黑卡封号”及个人私转无法报销做账，需引入具备对公资质的正规企业服务商。</p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-primary border-l-2 border-[#10A37F] pl-3">
            三、 拟选供应商与服务方案比选（AI代采 aidaicai.com）
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-lg bg-surface-elevated border border-theme-subtle">
              <div className="font-semibold text-primary mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#10A37F]" />
                <span>正规票据合规</span>
              </div>
              <p className="text-secondary leading-relaxed">
                开具 6% 增值税专用发票（信息技术服务费），可全额进项税额抵扣，彻底解决海外 SaaS 无法国内入账问题。
              </p>
            </div>
            <div className="p-3.5 rounded-lg bg-surface-elevated border border-theme-subtle">
              <div className="font-semibold text-primary mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#10A37F]" />
                <span>银行对公资金阳光</span>
              </div>
              <p className="text-secondary leading-relaxed">
                企业银行网银对公电汇，流水单据可审计，免除员工私人信用卡垫资与外汇额度限制。
              </p>
            </div>
            <div className="p-3.5 rounded-lg bg-surface-elevated border border-theme-subtle">
              <div className="font-semibold text-primary mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#10A37F]" />
                <span>100% 真实商业卡段</span>
              </div>
              <p className="text-secondary leading-relaxed">
                海外商业银行企业信用卡直充，附带 OpenAI 官方后台原版 Invoice 账单核验，可穿透核查。
              </p>
            </div>
            <div className="p-3.5 rounded-lg bg-surface-elevated border border-theme-subtle">
              <div className="font-semibold text-primary mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#10A37F]" />
                <span>法务 SLA 兜底退赔</span>
              </div>
              <p className="text-secondary leading-relaxed">
                签署加盖企业公章之《SLA 售后协议》，承诺 72 小时封号包换，全周期按天折算极速退款。
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-primary border-l-2 border-[#10A37F] pl-3">
            四、 预算与测算建议（参考案例）
          </h2>
          <div className="p-4 rounded-xl bg-surface-elevated border border-theme-subtle text-xs space-y-2">
            <p className="text-secondary">
              以常规 10 席位研发团队为例（包含 2 个 Pro 20x 旗舰版与 8 个 Plus 版），按季度采购享受阶梯特惠：
            </p>
            <ul className="list-disc list-inside space-y-1 text-secondary font-mono">
              <li>2 席 ChatGPT Pro 20x：¥ 1,390/月/席 × 2 席 × 3 个月 = ¥ 8,340 元</li>
              <li>8 席 ChatGPT Plus 版：¥ 148/月/席 × 8 席 × 3 个月 = ¥ 3,552 元</li>
              <li className="text-primary font-bold">含税总计：¥ 11,892 元整（含 6% 增值税专用发票）</li>
            </ul>
          </div>
        </section>
      </div>
    </article>
  );
}
