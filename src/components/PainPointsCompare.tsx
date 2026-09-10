"use client";

import React from "react";
import { Check, ShieldAlert, ArrowRight } from "lucide-react";

export default function PainPointsCompare() {
  const comparisonItems = [
    {
      dimension: "财务发票与合规凭据",
      individual: "无法开具任何发票，或提供伪造普票，企业财务严禁报销",
      enterprise: "提供正规数电增值税专用发票（6%税率）及普票，全额合规入账抵扣",
    },
    {
      dimension: "资金支付结算渠道",
      individual: "要求私人微信、支付宝扫码或个人卡转账，存在财务舞弊与洗钱审查风险",
      enterprise: "全程企业银行账户公对公转账，资金链路公开透明，留存正规对公回单",
    },
    {
      dimension: "代采卡段与封号风控",
      individual: "充斥黑产盗刷卡、垃圾共享虚拟卡，容易被 OpenAI 官方溯源封禁连带死号",
      enterprise: "100% 官方商业银行企业信用真实卡段绑定，出具带卡号与流水号的官方 Invoice",
    },
    {
      dimension: "封号售后保障机制",
      individual: "“售出不退”、“封号自负”，发卡商随时拉黑关店跑路，损失全由采购承担",
      enterprise: "签署法务盖章的《SLA 售后协议》：72h 极速补号，后续按当月剩余天数全额折算退款",
    },
    {
      dimension: "企业商业机密与隐私",
      individual: "向多方索要账号明文密码，存在核心业务 Prompt 与技术代码外泄重大隐患",
      enterprise: "严格奉行“零知识原则”：采用官方代付邀请或一次性授权，签署保密协议 (NDA)",
    },
    {
      dimension: "运维时效与服务响应",
      individual: "兼职散户下班失联、深夜与周末无法处理，月底卡单断订导致出海与研发业务停摆",
      enterprise: "7×24 小时专人专群全天候轮守，≤15 分钟极速必应，节假日照常极速履约，业务 0 断档",
    },
    {
      dimension: "采购规模与批量价格",
      individual: "零散购买无阶梯折扣，单价随口喊价甚至漫天要价，采购数量再多也无任何优惠",
      enterprise: "严格实行公开透明的阶梯定价，采购席位数越多单价越低（最高立减 25%），尊享集采增值礼遇",
    },
    {
      dimension: "采购与部门立项审批支持",
      individual: "缺乏正规资质与比选报告，采购人员内部反复拉扯，费时费力甚至承担追责风险",
      enterprise: "提供现成立项 Word 模板、多方比选分析及 6% 增值税专票，采购交差省心并尊享专属服务权益",
    },
  ];

  return (
    <section id="compare" className="py-20 border-t border-theme-subtle bg-canvas transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="codex-pill mb-3">
            <ShieldAlert className="w-3.5 h-3.5 text-secondary" />
            <span>为什么中大型企业严禁使用个人散户代充？</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-primary tracking-tight mb-4">
            个人代充散户 <span className="text-tertiary font-normal">vs</span> 官方企业代采服务
          </h2>
          <p className="text-sm sm:text-base text-secondary">
            企业级采购讲求的是<strong className="text-primary font-medium">合规报销、资金阳光、业务零断档与采购安全免责</strong>。选择 AI 代采官方平台（aidaicai.com），是保障业务效能的第一步。
          </p>
        </div>

        {/* Comparison Table (OpenAI / Codex Minimal Table) */}
        <div className="codex-panel overflow-hidden border border-theme-subtle">
          <div className="grid grid-cols-12 bg-surface-elevated border-b border-theme-subtle py-3.5 px-4 sm:px-6 text-xs font-semibold">
            <div className="col-span-3 sm:col-span-3 text-secondary uppercase tracking-wider">
              评估考量维度
            </div>
            <div className="col-span-4 sm:col-span-4 text-secondary flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              <span>个人代充 / 淘宝散户</span>
            </div>
            <div className="col-span-5 sm:col-span-5 text-primary flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10A37F]" />
              <span className="text-primary font-semibold">AI 代采 (aidaicai.com) 官方服务</span>
            </div>
          </div>

          <div className="divide-y divide-theme-subtle">
            {comparisonItems.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 py-4 px-4 sm:px-6 text-xs sm:text-sm hover:bg-surface-hover transition-colors items-center"
              >
                <div className="col-span-3 sm:col-span-3 font-medium text-primary pr-2">
                  {item.dimension}
                </div>
                <div className="col-span-4 sm:col-span-4 text-secondary pr-3 flex items-start gap-2">
                  <span className="text-rose-500/80 font-mono text-sm leading-none mt-0.5">✕</span>
                  <span className="leading-relaxed text-xs sm:text-[13px]">{item.individual}</span>
                </div>
                <div className="col-span-5 sm:col-span-5 text-primary font-normal pl-2 flex items-start gap-2 bg-emerald-500/[0.04] dark:bg-white/[0.02] -my-4 py-4 rounded-r-lg">
                  <Check className="w-4 h-4 text-[#10A37F] shrink-0 mt-0.5" />
                  <span className="leading-relaxed text-xs sm:text-[13px] text-primary">{item.enterprise}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Callout */}
        <div className="mt-8 p-4 sm:p-5 rounded-xl border border-theme-subtle bg-surface-elevated flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs sm:text-sm text-secondary">
            <span className="px-2 py-0.5 rounded-md bg-surface text-secondary border border-theme-subtle font-mono text-xs shadow-xs">建议</span>
            <span>
              已使用个人代充的企业，可通过我方专员提供免费的<strong className="text-primary font-medium">“账号安全性与卡段合规性体检”</strong>，无缝迁移至【AI 代采】对公统一管理。
            </span>
          </div>
          <a
            href="#calculator"
            className="btn-openai-white text-xs whitespace-nowrap !py-2 !px-4"
          >
            <span>测算企业代采切换方案</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
