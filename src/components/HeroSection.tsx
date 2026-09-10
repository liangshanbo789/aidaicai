"use client";

import React from "react";
import {
  ArrowRight,
  FileCheck,
  CheckCircle2,
  Award,
  Zap,
  Receipt,
  ShieldCheck,
  Building,
  Sparkles,
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
        {/* Top Terminal Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-theme-subtle bg-surface-elevated text-xs font-mono text-secondary mb-8 backdrop-blur-md shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#10A37F] animate-pulse" />
          <span className="font-medium text-primary">aidaicai.com</span>
          <span className="text-tertiary">/</span>
          <span>全面支持 GPT-6 Astra · 7×24H 全天响应 · 阶梯采购立减 · 6% 专票</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-primary max-w-4xl mx-auto leading-[1.12] mb-6">
          让中国企业 <span className="gradient-text-silver font-bold">合规、阳光</span> 代采全球顶尖 AI 生产力
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-secondary max-w-3xl mx-auto mb-10 font-normal leading-relaxed">
          <strong className="text-primary font-medium">AI 代采 (aidaicai.com)</strong> 专为出海团队、技术研发与企业用户打造。全量支持 OpenAI 最新发布之 <strong className="text-primary font-medium">GPT-6 Astra</strong> 旗舰及 <strong className="text-primary font-medium">ChatGPT Plus / Pro (5x/20x) / Team</strong> 官方代采与对公结算。100% 正规商业信用卡代付、支持企业对公转账、6% 增值税专用发票、席位阶梯量大从优与 72 小时风控兜底。
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-14">
          <a
            href="#calculator"
            className="btn-openai-white w-full sm:w-auto text-sm px-7 py-3 shadow-md"
          >
            <span>测算企业阶梯代采预算</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenDocs}
            className="btn-openai-secondary w-full sm:w-auto text-sm px-6 py-3 flex items-center justify-center gap-2 cursor-pointer"
          >
            <FileCheck className="w-4 h-4 text-secondary" />
            <span>领取《代采立项呈批报告》</span>
          </button>

          <button
            onClick={() => onOpenContact("hero-advisor")}
            className="w-full sm:w-auto px-5 py-3 rounded-full text-xs sm:text-sm text-secondary hover:text-primary hover:bg-surface-elevated transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>预约大客户代采顾问</span>
          </button>
        </div>

        {/* Social Proof & Quantitative Trust Bar (权威交付信赖看板) */}
        <div className="mb-14 max-w-5xl mx-auto p-4 sm:p-5 rounded-2xl bg-surface border border-theme-subtle shadow-xs grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-2 border-r border-theme-subtle/70 last:border-r-0">
            <div className="text-2xl sm:text-3xl font-extrabold text-primary font-mono tracking-tight">320+</div>
            <div className="text-[11px] text-secondary mt-0.5">出海与研发科技企业信赖</div>
          </div>
          <div className="p-2 border-r border-theme-subtle/70 last:border-r-0">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-[#10A37F] font-mono tracking-tight">¥2,800万+</div>
            <div className="text-[11px] text-secondary mt-0.5">累计阳光对公结算与开票</div>
          </div>
          <div className="p-2 border-r border-theme-subtle/70 last:border-r-0">
            <div className="text-2xl sm:text-3xl font-extrabold text-primary font-mono tracking-tight">99.8%</div>
            <div className="text-[11px] text-secondary mt-0.5">账号持续稳定运行无风控率</div>
          </div>
          <div className="p-2">
            <div className="text-2xl sm:text-3xl font-extrabold text-primary font-mono tracking-tight">≤ 15 min</div>
            <div className="text-[11px] text-secondary mt-0.5">7×24H 专人全天候履约响应</div>
          </div>
        </div>

        {/* 4 Pillars Trust Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div className="codex-panel p-5 text-left border-t-2 border-t-emerald-500/40">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="p-2 rounded-lg bg-surface-elevated border border-theme-subtle text-primary">
                <Award className="w-4 h-4 text-[#10A37F]" />
              </div>
              <div>
                <div className="text-lg font-semibold text-primary tracking-tight">100%</div>
                <div className="text-[11px] text-secondary">官方正规卡段代采</div>
              </div>
            </div>
            <p className="text-xs text-secondary leading-relaxed">
              海外商业银行企业信用卡真实直充，出具带卡号与税单号的官方 Invoice，可穿透核验。
            </p>
          </div>

          {/* Card 2 */}
          <div className="codex-panel p-5 text-left border-t-2 border-t-emerald-500/40">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="p-2 rounded-lg bg-surface-elevated border border-theme-subtle text-primary">
                <Receipt className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <div className="text-lg font-semibold text-primary tracking-tight">6% 专票</div>
                <div className="text-[11px] text-secondary">银行对公转账结算</div>
              </div>
            </div>
            <p className="text-xs text-secondary leading-relaxed">
              开具“信息技术服务费”增值税专票/普票，全额合规入账与进项税额抵扣。
            </p>
          </div>

          {/* Card 3 */}
          <div className="codex-panel p-5 text-left border-t-2 border-t-blue-500/40">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="p-2 rounded-lg bg-surface-elevated border border-theme-subtle text-primary">
                <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <div className="text-lg font-semibold text-primary tracking-tight">7×24h / ≤15m</div>
                <div className="text-[11px] text-secondary">全天候企微极速响应</div>
              </div>
            </div>
            <p className="text-xs text-secondary leading-relaxed">
              365天全天候专班轮守，深夜攻坚与突发断订 15 分钟内必应补齐，节假日不打烊。
            </p>
          </div>

          {/* Card 4 */}
          <div className="codex-panel p-5 text-left border-t-2 border-t-amber-500/40">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="p-2 rounded-lg bg-surface-elevated border border-theme-subtle text-primary">
                <ShieldCheck className="w-4 h-4 text-amber-500 dark:text-amber-400" />
              </div>
              <div>
                <div className="text-lg font-semibold text-primary tracking-tight">72h / 按天</div>
                <div className="text-[11px] text-secondary">封号退赔兜底协议</div>
              </div>
            </div>
            <p className="text-xs text-secondary leading-relaxed">
              签署具备法律效力之 SLA 代采协议，若遇官方风控，闪电补号或按天退款。
            </p>
          </div>
        </div>

        {/* Industry Proof Strip & Reassurance Bar */}
        <div className="mt-12 pt-6 border-t border-theme-subtle max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-5 sm:gap-8 text-xs text-secondary">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#10A37F]" />
            <span className="font-medium text-primary">7×24H 全天候顾问轮守</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-[#10A37F]" />
            <span className="font-medium text-primary">采购数量越多·单价越低</span>
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
            <span>大客户集采专属增值权益</span>
          </div>
        </div>
      </div>
    </section>
  );
}
