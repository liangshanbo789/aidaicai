import type { Metadata } from "next";
import DocCopyAction from "@/components/DocCopyAction";
import { ShieldCheck, ChevronRight, CheckCircle2, AlertTriangle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "【法务合同附件】SLA 官方服务等级保障与 72h 封号退赔兜底条款",
  description: "AI 代采（aidaicai.com）官方签署加盖企业公章之 SLA 服务等级保障。承诺 100% 正规商业信用卡代付、72小时内遇批量风控闪电补换、全周期按天折算极速原路退款，全面保障出海与研发业务连续性。",
  keywords: [
    "ChatGPT封号退款",
    "ChatGPT封号包赔协议",
    "ChatGPT代充SLA保障",
    "正规商业卡段代采",
    "OpenAI账号封禁退赔",
    "ChatGPT企业代采合同条款",
  ],
  alternates: {
    canonical: "https://gongsi.one/docs/sla",
  },
  openGraph: {
    title: "SLA 服务等级保障与 72h 封号退赔兜底条款 | AI代采 aidaicai.com",
    description: "加盖公章合规 SLA 条款：72h 闪电保换，全周期按天折算退款，100% 正规海外商业卡代充。",
    url: "https://www.aidaicai.com/docs/sla",
  },
};

const slaDocText = `【AI 代采 aidaicai.com】企业级海外 AI 账号服务 SLA 与风控兜底保障条款

一、 核心服务指标 (SLA Commitments)
1. 首单开通时效：对公款项确认后 ≤ 30 分钟内完成全员充值激活；
2. 故障响应时效：专属大客户企微群 ≤ 15 分钟极速响应，1 小时内给出处置方案；
3. 发票开具时效：款项到账后 ≤ 2 个工作日内推送 6% 增值税专用发票；
4. 到期主动提醒：到期前 5 个自然日主动向采购推送续期账单，保障业务不中断。

二、 100% 官方正规充值承诺与验真机制
1. 卡段来源合规：严格使用海外正规商业银行核准的企业商业信用卡（Corporate Commercial Cards）代付，杜绝黑卡盗刷；
2. 账单穿透验真：提供带有真实扣费卡号尾数与官方 Invoice ID 的 OpenAI 官方电子收据，企业财务可随时穿透核验。

三、 账号异常与风控封号退赔保障机制
1. 72 小时闪电保换：充值激活 72 小时内若遇厂商批量风控，服务商 2 小时内免费更换补齐；
2. 全周期按天折算退款（封号包赔）：
   退款金额 = (本月实际支付单价 ÷ 30) × 当月剩余未生效天数
   确认异常后 1 个工作日内公对公原路退还至企业指定账户，或等额顺延抵扣。

四、 数据隐私与企业资产安全
1. 零知识隐私原则：采用官方代充邀请链路激活，服务商不接触客户主密码，不窥探 Prompt 与业务数据；
2. 企业知识产权归属：使用产生的全部代码、文档资产 100% 归客户所有。`;

export default function SlaDocPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "首页",
        "item": "https://www.aidaicai.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "商务与合规知识库",
        "item": "https://www.aidaicai.com/docs/sla",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "SLA 服务等级保障与 72h 封号退赔兜底条款",
        "item": "https://www.aidaicai.com/docs/sla",
      },
    ],
  };

  return (
    <article className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* 面包屑 */}
      <nav className="flex items-center gap-2 text-xs text-secondary">
        <Link href="/" className="hover:text-primary transition-colors">官网首页</Link>
        <ChevronRight className="w-3.5 h-3.5 text-tertiary" />
        <span className="text-primary font-medium">SLA 封号退赔保障条款</span>
      </nav>

      {/* 头部 */}
      <header className="space-y-4 pb-6 border-b border-theme-subtle">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-mono">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>法务公章盖印附件 · 承诺 100% 兑现</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-primary">
          【法务合同附件】SLA 官方服务等级保障与 72h 封号退赔兜底条款
        </h1>
        <p className="text-sm text-secondary leading-relaxed max-w-3xl">
          直面海外大模型厂商风控痛点。全行业首创 72 小时闪电保换与全周期【按天折算极速退款】机制，随正规合同加盖公章，彻底消除企业采购风险。
        </p>
        <div className="pt-2">
          <DocCopyAction content={slaDocText} source="sla" />
        </div>
      </header>

      {/* 正文内容 */}
      <div className="codex-panel p-6 sm:p-8 bg-surface space-y-8 text-sm leading-relaxed border-theme-subtle">
        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-primary border-l-2 border-[#10A37F] pl-3">
            一、 核心服务承诺 (SLA Commitments)
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse border border-theme-subtle">
              <thead>
                <tr className="bg-surface-elevated border-b border-theme-subtle text-primary font-medium">
                  <th className="p-3">SLA 维度</th>
                  <th className="p-3">服务指标承诺</th>
                  <th className="p-3">超时或违背补偿</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-theme-subtle text-secondary">
                <tr>
                  <td className="p-3 font-semibold text-primary">首单开通时效</td>
                  <td className="p-3">对公款项确认后 ≤ 30 分钟内完成全员充值激活</td>
                  <td className="p-3 text-emerald-600 dark:text-emerald-400">超时未交付，免费补偿每席位 3 天使用期</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-primary">故障断订响应</td>
                  <td className="p-3">专属企微群 ≤ 15 分钟响应，1 小时内给出处置方案</td>
                  <td className="p-3 text-emerald-600 dark:text-emerald-400">大客户专员 1 对 1 跟进，优先调拨备用通道</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-primary">专票开具时效</td>
                  <td className="p-3">确认到账后 ≤ 2 个工作日内推送 6% 数电专票</td>
                  <td className="p-3 text-emerald-600 dark:text-emerald-400">延迟寄送免费提供财务对账与加急开具</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-primary">到期主动提醒</td>
                  <td className="p-3">到期前 5 个自然日主动向采购对接人推送续期账单</td>
                  <td className="p-3 text-emerald-600 dark:text-emerald-400">无感无缝延续卡段扣费，研发业务不中断</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-primary border-l-2 border-[#10A37F] pl-3">
            二、 账号异常与风控封号退赔保障机制（核心兜底）
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-surface-elevated border border-theme-subtle space-y-2">
              <span className="font-semibold text-primary text-sm">1. 72 小时闪电保换期</span>
              <p className="text-xs text-secondary leading-relaxed">
                自充值激活之日起 72 小时内，如因服务商充值卡段异常遭遇厂商批量风控导致账号失效，服务商无条件免费重新充值补齐或更换全新官方账号，并在 2 小时内恢复企业生产。
              </p>
            </div>
            <div className="p-4 rounded-xl bg-surface-elevated border border-theme-subtle space-y-2">
              <span className="font-semibold text-primary text-sm">2. 全周期按天折算退款</span>
              <p className="text-xs text-secondary leading-relaxed">
                在正常使用期内若发生不可抗力风控：<br />
                <code className="font-mono text-[11px] text-emerald-600 dark:text-emerald-400 bg-surface px-2 py-0.5 rounded mt-1 inline-block">
                  退款金额 = (实际支付单价 ÷ 30) × 剩余未生效天数
                </code><br />
                确认异常后 1 个工作日内银行对公原路退还企业账户。
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-primary border-l-2 border-[#10A37F] pl-3">
            三、 零知识隐私原则与资产归属
          </h2>
          <div className="p-4 rounded-xl bg-surface-elevated border border-theme-subtle text-xs text-secondary space-y-2">
            <p>• <strong>零密码接触</strong>：充值通过企业专属代充链接或邀请链路直连，服务商无需获取亦不留存企业账号的日常登录主密码，绝不窥探 Prompt 提问与商业秘密。</p>
            <p>• <strong>资产 100% 归属客户</strong>：企业使用 AI 工具生成的全部工程代码、文案及设计资产所有权归采购企业所有，服务商在合同中明确放弃任何衍生权利主张。</p>
          </div>
        </section>
      </div>
    </article>
  );
}
