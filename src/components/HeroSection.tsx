"use client";

import React from "react";
import {
  ArrowRight,
  FileCheck,
  CheckCircle2,
  Award,
  Receipt,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

interface HeroSectionProps {
  onOpenContact: (source?: string) => void;
  onOpenDocs: () => void;
}

export default function HeroSection({ onOpenContact, onOpenDocs }: HeroSectionProps) {
  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden bg-codex-grid transition-colors">
      {/* OpenAI Subtle Top Ambient Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[280px] bg-gradient-to-b from-black/[0.03] dark:from-white/[0.04] to-transparent blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Terminal Badge - 突出大中型企业采购与阶梯优惠 */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-theme-subtle bg-surface-elevated text-xs font-mono text-secondary mb-6 backdrop-blur-md shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#10A37F] animate-pulse" />
          <span className="font-semibold text-primary">专为大中型企业采购打造</span>
          <span className="text-tertiary">/</span>
          <span>阶梯定价 · 采购量越大单价越低 · 100% 官方正规直采</span>
        </div>

        {/* Enterprise Compliance Credential Bar (四大硬核合规准入微标) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-theme-subtle text-[11px] font-sans text-secondary shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <strong className="text-primary font-medium">腾讯企微实名商户认证</strong>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-theme-subtle text-[11px] font-sans text-secondary shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <strong className="text-primary font-medium">国家税务数电 6% 专票</strong>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-theme-subtle text-[11px] font-sans text-secondary shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <strong className="text-primary font-medium">中国工商银行公对公结算</strong>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-theme-subtle text-[11px] font-sans text-secondary shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <strong className="text-primary font-medium">公章法律效力 SLA 协议</strong>
          </span>
        </div>

        {/* Main Headline - 第一时间明确传达大企业集采与量大价优 */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-primary max-w-4xl mx-auto leading-[1.12] mb-6">
          大中型企业 AI 官方集采：<br className="hidden sm:inline" />
          <span className="gradient-text-silver font-bold">阶梯定价，采购量越大单价越低</span>
        </h1>

        {/* Subtitle - 精简干练，直击价值定位，去除与下方卡片重复的繁琐细节 */}
        <p className="text-base sm:text-lg text-secondary max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
          打破海外支付与报销合规壁垒。专为研发技术团队、出海机构及大中型企业提供 ChatGPT / GPT-6 全系官方直采；实行透明阶梯让利机制，采购席位越多、综合单价越低，全流程对公结算。
        </p>

        {/* Enterprise Tier Scale Ribbon (大企业阶梯降本直观路线图) */}
        <div className="max-w-3xl mx-auto mb-10 p-3 sm:p-3.5 rounded-2xl bg-surface/90 border border-theme-subtle backdrop-blur-xs shadow-xs">
          <div className="text-[11px] font-mono text-tertiary mb-2.5 flex items-center justify-center gap-1.5">
            <TrendingUp className="w-3.5 h-3.5 text-[#10A37F]" />
            <span className="font-semibold text-primary">企业批量阶梯降本机制</span>
            <span>· 席位规模越大，单席成本越低</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-left">
            {/* Tier 1 */}
            <div className="p-2.5 rounded-xl bg-surface-elevated/70 border border-theme-subtle flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold text-primary">1 ~ 4 席 · 弹性采买</div>
                <div className="text-[11px] text-tertiary">零起订门槛 · 个人转企业</div>
              </div>
              <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-md bg-surface text-secondary border border-theme-subtle">
                标准基准价
              </span>
            </div>
            {/* Tier 2 */}
            <div className="p-2.5 rounded-xl bg-surface-elevated/70 border border-theme-subtle flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold text-primary">5 ~ 19 席 · 团队集采</div>
                <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">梯级直降 ~12%</div>
              </div>
              <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                批量立减
              </span>
            </div>
            {/* Tier 3 */}
            <div className="p-2.5 rounded-xl bg-surface-elevated border border-emerald-500/30 flex items-center justify-between shadow-xs">
              <div>
                <div className="text-xs font-semibold text-primary flex items-center gap-1.5">
                  <span>20+ 席 · 战略集采</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10A37F] animate-pulse" />
                </div>
                <div className="text-[11px] text-emerald-600 dark:text-[#10A37F] font-bold">单席最高直降 20%+</div>
              </div>
              <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-md bg-[#10A37F]/15 text-[#10A37F] border border-[#10A37F]/30">
                大客户特惠
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-12">
          <a
            href="#calculator"
            className="btn-openai-white w-full sm:w-auto text-sm px-7 py-3 shadow-md"
          >
            <span>测算企业阶梯代采预算</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={onOpenDocs}
            className="btn-openai-secondary w-full sm:w-auto text-sm px-6 py-3 flex items-center justify-center gap-2 cursor-pointer"
          >
            <FileCheck className="w-4 h-4 text-secondary" />
            <span>领取《代采立项呈批报告》</span>
          </button>

          <button
            type="button"
            onClick={() => onOpenContact("hero-advisor")}
            className="w-full sm:w-auto px-5 py-3 rounded-full text-xs sm:text-sm text-secondary hover:text-primary hover:bg-surface-elevated transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>预约大客户集采顾问</span>
          </button>
        </div>

        {/* Social Proof & Quantitative Trust Bar (权威交付信赖看板) */}
        <div className="mb-14 max-w-5xl mx-auto rounded-2xl bg-surface border border-theme-subtle shadow-sm overflow-hidden">
          {/* Top Realtime Audited Status Header */}
          <div className="px-4 py-2 bg-surface-elevated border-b border-theme-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] font-mono text-secondary">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-semibold text-primary">大客户阶梯集采与合规清算通道</span>
              <span className="text-tertiary">|</span>
              <span>2026 年 09 月运营周期 · 零合规争议与违约记录</span>
            </div>
            <span className="text-emerald-600 dark:text-[#10A37F] font-medium">
              ● 金融级公对公清算通路运行正常
            </span>
          </div>

          <div className="p-4 sm:p-5 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-2 border-r border-theme-subtle/70 last:border-r-0">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-[#10A37F] font-mono tracking-tight">最高直降 20%+</div>
              <div className="text-[11px] text-secondary mt-0.5">大客户采购量越大单价越低</div>
            </div>
            <div className="p-2 border-r border-theme-subtle/70 last:border-r-0">
              <div className="text-2xl sm:text-3xl font-extrabold text-primary font-mono tracking-tight">320+</div>
              <div className="text-[11px] text-secondary mt-0.5">出海与研发科技企业信赖</div>
            </div>
            <div className="p-2 border-r border-theme-subtle/70 last:border-r-0">
              <div className="text-2xl sm:text-3xl font-extrabold text-primary font-mono tracking-tight">¥2,800万+</div>
              <div className="text-[11px] text-secondary mt-0.5">累计阳光对公结算与开票</div>
            </div>
            <div className="p-2">
              <div className="text-2xl sm:text-3xl font-extrabold text-primary font-mono tracking-tight">99.8%</div>
              <div className="text-[11px] text-secondary mt-0.5">账号持续稳定运行无风控率</div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Trust Grid (重构为四大核心支柱：阶梯量大从优位列首位) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 max-w-5xl mx-auto">
          {/* Card 1: 阶梯定价 · 量大从优 */}
          <div className="codex-panel p-5 text-left border-t-2 border-t-[#10A37F]">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="p-2 rounded-lg bg-[#10A37F]/10 border border-[#10A37F]/20 text-primary">
                <TrendingUp className="w-4 h-4 text-[#10A37F]" />
              </div>
              <div>
                <div className="text-lg font-semibold text-primary tracking-tight">量大价优</div>
                <div className="text-[11px] text-emerald-600 dark:text-[#10A37F] font-medium">阶梯定价 · 采购越多越划算</div>
              </div>
            </div>
            <p className="text-xs text-secondary leading-relaxed">
              专为大中型企业采购设计。席位规模越大、采购周期越长，单席成本越低，批量采购立享大客户梯级直降。
            </p>
          </div>

          {/* Card 2: 6% 专票 · 银行对公 */}
          <div className="codex-panel p-5 text-left border-t-2 border-t-emerald-500/40">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="p-2 rounded-lg bg-surface-elevated border border-theme-subtle text-primary">
                <Receipt className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <div className="text-lg font-semibold text-primary tracking-tight">6% 专票</div>
                <div className="text-[11px] text-secondary">银行公对公转账结算</div>
              </div>
            </div>
            <p className="text-xs text-secondary leading-relaxed">
              支持工行等网银公对公电汇，开具“信息技术服务费”增值税专用发票，全额阳光合规入账与进项抵扣。
            </p>
          </div>

          {/* Card 3: 100% 官方正规商户卡 */}
          <div className="codex-panel p-5 text-left border-t-2 border-t-blue-500/40">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="p-2 rounded-lg bg-surface-elevated border border-theme-subtle text-primary">
                <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <div className="text-lg font-semibold text-primary tracking-tight">100% 直充</div>
                <div className="text-[11px] text-secondary">官方正规商户卡段代采</div>
              </div>
            </div>
            <p className="text-xs text-secondary leading-relaxed">
              海外商业银行独立卡段正规代采直充，出具带卡号与税单号的官方 Invoice，可穿透官方查验。
            </p>
          </div>

          {/* Card 4: 72h / SLA 兜底协议 */}
          <div className="codex-panel p-5 text-left border-t-2 border-t-amber-500/40">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="p-2 rounded-lg bg-surface-elevated border border-theme-subtle text-primary">
                <ShieldCheck className="w-4 h-4 text-amber-500 dark:text-amber-400" />
              </div>
              <div>
                <div className="text-lg font-semibold text-primary tracking-tight">72h / SLA</div>
                <div className="text-[11px] text-secondary">公章法律效力保障协议</div>
              </div>
            </div>
            <p className="text-xs text-secondary leading-relaxed">
              加盖企业电子公章签署保障协议。企微 15 分钟必应，遇官方偶发风控支持 72 小时闪电补号或按天退赔。
            </p>
          </div>
        </div>

        {/* Industry Proof Strip & Reassurance Bar */}
        <div className="mt-12 pt-6 border-t border-theme-subtle max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-5 sm:gap-8 text-xs text-secondary">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#10A37F]" />
            <span className="font-medium text-primary">大中型企业阶梯采购立减</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-[#10A37F]" />
            <span className="font-medium text-primary">采购席位越多·单价降幅越大</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-secondary" />
            <span>支持网银公对公电汇打款</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-secondary" />
            <span>正规代采合同加盖电子公章</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
            <span>7×24H 企微顾问全天候轮守</span>
          </div>
        </div>
      </div>
    </section>
  );
}
