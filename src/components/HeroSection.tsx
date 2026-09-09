"use client";

import React from "react";
import { ArrowRight, FileCheck, CheckCircle2, Award, Zap, Receipt, ShieldCheck } from "lucide-react";

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
          <span>企业级海外 AI 官方代采直通车 · 支持 6% 专票</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-primary max-w-4xl mx-auto leading-[1.12] mb-6">
          让中国企业 <span className="gradient-text-silver font-bold">合规、阳光</span> 代采全球顶尖 AI 生产力
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-secondary max-w-3xl mx-auto mb-10 font-normal leading-relaxed">
          <strong className="text-primary font-medium">AI 代采 (aidaicai.com)</strong> 专为出海团队、技术研发与企业用户打造。提供 <strong className="text-primary font-medium">ChatGPT Plus / Pro (5x/20x) / Team</strong> 官方企业代采与对公结算服务。100% 正规商业信用卡代付、企业银行对公转账、6% 增值税专用发票、72 小时封号包赔与采购经理专属关怀礼遇。
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-16">
          <a
            href="#calculator"
            className="btn-openai-white w-full sm:w-auto text-sm px-7 py-3"
          >
            <span>测算企业代采预算</span>
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

        {/* 4 Pillars Trust Grid (Codex Developer Terminal Style) */}
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
                <div className="text-lg font-semibold text-primary tracking-tight">≤ 15 min</div>
                <div className="text-[11px] text-secondary">企微极速代采交付</div>
              </div>
            </div>
            <p className="text-xs text-secondary leading-relaxed">
              专人专群对接大客户专属服务群，断订极速补齐，到期前 5 日主动提醒续订。
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

        {/* Live Reassurance Bar */}
        <div className="mt-12 pt-6 border-t border-theme-subtle max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-secondary">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#10A37F]" />
            <span>支持网银公对公电汇打款</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#10A37F]" />
            <span>账号数据与历史零接触保密</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#10A37F]" />
            <span>正规代采合同加盖电子公章</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
            <span>采购经理专属商务津贴通道</span>
          </div>
        </div>
      </div>
    </section>
  );
}
