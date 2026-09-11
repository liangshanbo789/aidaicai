"use client";

import React from "react";
import {
  Check,
  ShieldAlert,
  ArrowRight,
  Building2,
  CreditCard,
  Receipt,
  ShieldCheck,
  AlertTriangle,
} from "lucide-react";

export default function PainPointsCompare() {
  const securityPillars = [
    {
      icon: Building2,
      badge: "资金合规准入",
      badgeColor:
        "text-blue-600 dark:text-blue-400 bg-blue-500/10 border-blue-500/20",
      title: "企业网银公对公电汇打款",
      desc: "全程走国家银行结算系统，杜绝个人微信/支付宝扫码私转，留存正规对公回单，经得起反洗钱审查与财务审计。",
    },
    {
      icon: CreditCard,
      badge: "卡段真实防封",
      badgeColor:
        "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      title: "100% 官方商业银行企业信用卡",
      desc: "真实正规企业卡段直扣，出具 OpenAI 官方原版 Invoice（附卡号与扣款流水），从源头阻断黑卡盗刷溯源封号。",
    },
    {
      icon: Receipt,
      badge: "财务入账抵扣",
      badgeColor:
        "text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/20",
      title: "6% 数电增值税专用发票",
      desc: "合规开具“信息技术服务费”专票，直达财务邮箱，可在国家税务总局全国查验平台一键验真，全额进项税抵扣。",
    },
  ];

  const comparisonItems = [
    {
      dimension: "财务发票与入账抵扣",
      tag: "财务审查",
      individual:
        "无法提供合规发票，或提供伪造普票，企业财务严禁报销，存在税务稽查追责风险",
      enterprise:
        "开具真实数电增值税专用发票（6%税率）及普票，全国税务平台实时验真，全额进项抵扣",
    },
    {
      dimension: "资金支付结算渠道",
      tag: "合规审计",
      individual:
        "要求私人微信、支付宝个人码或个人银行卡私转，极易触发反洗钱审查与财务舞弊嫌疑",
      enterprise:
        "全程企业银行公对公转账电汇（工行/招行等），资金链路阳光透明，出具银行电子回执",
    },
    {
      dimension: "代采卡段与封号风险",
      tag: "业务稳定",
      individual:
        "充斥黑产料卡、盗刷黑卡与垃圾共享虚拟卡，OpenAI 批量风控时全量连带死号、资产全毁",
      enterprise:
        "100% 官方商业银行企业信用真实卡段绑定，出具带卡号与流水号的官方原版 Invoice 账单",
    },
    {
      dimension: "封号售后退赔保障",
      tag: "法务风控",
      individual:
        "“售出概不退换”、“封号自负”，发卡散户动辄失联跑路，采购团队承担全部经济与业务损失",
      enterprise:
        "签署法务盖章《SLA 售后协议》：72h 闪电保换，全周期按当月剩余未生效天数 1 个工作日原路退款",
    },
    {
      dimension: "商业机密与代码隐私",
      tag: "技术安全",
      individual:
        "索要客户登录账号与明文密码，核心商业 Prompt、技术架构与机密业务数据面临严重外泄风险",
      enterprise:
        "严格奉行“零知识原则”：官方代付邀请或一次性授权开通，无需记录客户密码，支持签署商业 NDA",
    },
    {
      dimension: "运维时效与断订响应",
      tag: "交付保障",
      individual:
        "兼职散户下班失联、深夜与周末无法履约，突发断订导致出海运营、算法调优与研发停摆",
      enterprise:
        "7×24 小时专人专群全天候轮守，≤15 分钟极速必应，节假日照常极速履约，确保业务 0 断档",
    },
    {
      dimension: "采购规模与批量价格",
      tag: "采购成本",
      individual:
        "无标准化阶梯，随口要价，采购数量再多也无折扣，甚至随意涨价克扣额度",
      enterprise:
        "公开透明阶梯定价，多买多省（最高立减 25%），赠大客户专属增值服务权益，出具正式报价单",
    },
    {
      dimension: "对内立项与审批支持",
      tag: "采购交差",
      individual:
        "缺乏正规资质与供应商比选报告，采购人员在内部反复解释拉扯，费时费力甚至承担合规问责",
      enterprise:
        "提供现成《采购立项申请报告》Word 模板、多方比选分析及盖章框架协议，轻松向财务和领导交差",
    },
  ];

  return (
    <section
      id="compare"
      className="py-20 border-t border-theme-subtle bg-canvas transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="codex-pill mb-3">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-500" />
            <span>为什么中大型企业严禁使用个人散户代充？</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-primary tracking-tight mb-4">
            个人代充散户{" "}
            <span className="text-tertiary font-normal text-2xl sm:text-3xl">
              vs
            </span>{" "}
            官方企业代采服务
          </h2>
          <p className="text-sm sm:text-base text-secondary">
            企业级采购讲求的是
            <strong className="text-primary font-medium">
              财务合规可报销、资金阳光可审计、业务零断档与采购安全免责
            </strong>
            。选择 AI 代采（gongsi.one），从源头筑牢企业合规防线。
          </p>
        </div>

        {/* 3 Core Financial/Security Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-5xl mx-auto">
          {securityPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="codex-panel p-5 border-theme-subtle bg-surface shadow-xs"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-lg bg-surface-elevated border border-theme-subtle text-primary">
                    <Icon className="w-4 h-4 text-[#10A37F]" />
                  </div>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${pillar.badgeColor}`}
                  >
                    {pillar.badge}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-primary mb-1.5">
                  {pillar.title}
                </h3>
                <p className="text-xs text-secondary leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="codex-panel overflow-hidden border border-theme-subtle shadow-lg max-w-5xl mx-auto">
          {/* Header Row */}
          <div className="grid grid-cols-12 bg-surface-elevated border-b border-theme-subtle py-4 px-4 sm:px-6 text-xs font-semibold">
            <div className="col-span-3 sm:col-span-3 text-secondary uppercase tracking-wider">
              评估考量维度 / 审查重点
            </div>
            <div className="col-span-4 sm:col-span-4 text-secondary flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              <span className="text-rose-600 dark:text-rose-400 font-semibold">
                个人代充 / 淘宝散户 (高风险)
              </span>
            </div>
            <div className="col-span-5 sm:col-span-5 text-primary flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#10A37F] animate-pulse" />
              <span className="text-primary font-bold">
                AI 代采 (gongsi.one) 官方企业服务
              </span>
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-theme-subtle">
            {comparisonItems.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 py-4 px-4 sm:px-6 text-xs sm:text-sm hover:bg-surface-hover/60 transition-colors items-center"
              >
                {/* Dimension Column */}
                <div className="col-span-3 sm:col-span-3 pr-2">
                  <div className="font-semibold text-primary text-xs sm:text-sm">
                    {item.dimension}
                  </div>
                  <span className="inline-block mt-1 text-[10px] font-mono px-1.5 py-0.2 rounded bg-surface-elevated text-tertiary border border-theme-subtle">
                    {item.tag}
                  </span>
                </div>

                {/* Individual Column (High Risk) */}
                <div className="col-span-4 sm:col-span-4 pr-3 flex items-start gap-2 bg-rose-500/[0.03] -my-4 py-4 px-2 rounded-l">
                  <span className="text-rose-500 font-bold font-mono text-sm leading-none mt-0.5 shrink-0">
                    ✕
                  </span>
                  <span className="leading-relaxed text-xs sm:text-[13px] text-secondary">
                    {item.individual}
                  </span>
                </div>

                {/* Enterprise Column (Safe & Compliant) */}
                <div className="col-span-5 sm:col-span-5 text-primary pl-3 flex items-start gap-2 bg-emerald-500/[0.04] dark:bg-emerald-500/[0.06] -my-4 py-4 pr-2 rounded-r">
                  <Check className="w-4 h-4 text-[#10A37F] shrink-0 mt-0.5" />
                  <span className="leading-relaxed text-xs sm:text-[13px] text-primary font-normal">
                    {item.enterprise}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-8 p-4 sm:p-5 rounded-xl border border-theme-subtle bg-surface-elevated flex flex-col sm:flex-row items-center justify-between gap-4 max-w-5xl mx-auto shadow-xs">
          <div className="flex items-center gap-3 text-xs sm:text-sm text-secondary">
            <span className="px-2 py-0.5 rounded-md bg-surface text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-mono text-xs font-semibold shadow-xs">
              无缝平移保障
            </span>
            <span>
              已使用个人散户代充的企业，可通过我方大客户经理提供免费的
              <strong className="text-primary font-medium">
                “现有账号安全性与卡段合规性体检”
              </strong>
              ，无缝迁移至企业对公统一结算。
            </span>
          </div>
          <a
            href="#calculator"
            className="btn-openai-white text-xs whitespace-nowrap !py-2 !px-4 shrink-0"
          >
            <span>测算企业代采方案</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
