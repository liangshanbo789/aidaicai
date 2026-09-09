"use client";

import React from "react";
import { Gift, ShieldCheck, HeartHandshake, Check, Lock, ArrowRight } from "lucide-react";

interface ProcurementPerksProps {
  onOpenContact: (source?: string) => void;
}

export default function ProcurementPerks({ onOpenContact }: ProcurementPerksProps) {
  return (
    <section id="perks" className="py-20 bg-canvas border-t border-theme-subtle relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="codex-pill mb-3 border-amber-500/30 bg-amber-500/[0.08] dark:border-amber-400/25 dark:bg-amber-400/[0.05] text-amber-700 dark:text-amber-300">
            <Gift className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
            <span>采购经理专享 · 尊享关怀计划</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-primary tracking-tight mb-4">
            让采购人员：<span className="gradient-text-gold font-bold">既办好公事，更安心享专属礼遇</span>
          </h2>
          <p className="text-sm sm:text-base text-secondary">
            我们深刻理解企业采购在供应商管理、财务合规与对内汇报中的严谨要求。为此，我们建立了合规采购关怀机制，保障您的个人利益与职业声誉。
          </p>
        </div>

        {/* 3 Core Assurance Pillars for Procurement (Codex Dark Panels) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {/* Pillar 1 */}
          <div className="codex-panel p-6 border-theme-subtle relative">
            <div className="w-10 h-10 rounded-lg bg-surface-elevated border border-theme-subtle flex items-center justify-center text-amber-500 dark:text-amber-400 mb-5">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-primary mb-2">1. 绝对私密 · 0 审计风险</h3>
            <p className="text-xs sm:text-[13px] text-secondary leading-relaxed mb-4">
              严禁任何敏感的公对私直接转账。津贴全部采用<strong className="text-primary font-medium">全国通用主流商超卡密（京东 E 卡 / 中石化加油卡 / 盒马卡）</strong>或通过合规灵活用工平台发放，完全独立于主合同与对公账单，免除任何公司内控审计顾虑。
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-600 dark:text-amber-300 font-medium">
              <Check className="w-3.5 h-3.5" />
              <span>卡密秒发至个人私域 · 无公户流水痕迹</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="codex-panel p-6 border-theme-subtle relative">
            <div className="w-10 h-10 rounded-lg bg-surface-elevated border border-theme-subtle flex items-center justify-center text-secondary mb-5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-primary mb-2">2. 帮您交差 · 老板财务无可挑剔</h3>
            <p className="text-xs sm:text-[13px] text-secondary leading-relaxed mb-4">
              我们为采购专员准备了现成的<strong className="text-primary font-medium">《企业 AI 工具采购立项申请报告》Word 模板</strong>、规范比选表、6% 增值税专用发票及盖章合同。您无需费心解释，直接提交领导和财务即可顺利过审。
            </p>
            <div className="flex items-center gap-2 text-xs text-secondary">
              <Check className="w-3.5 h-3.5 text-[#10A37F]" />
              <span>提供现成呈批材料，替采购省心省力</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="codex-panel p-6 border-theme-subtle relative">
            <div className="w-10 h-10 rounded-lg bg-surface-elevated border border-theme-subtle flex items-center justify-center text-[#10A37F] mb-5">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-primary mb-2">3. 长期管道 · 持续续约与转介绍</h3>
            <p className="text-xs sm:text-[13px] text-secondary leading-relaxed mb-4">
              只要贵公司按季度持续续订，关怀津贴按期自动发放。同时开放<strong className="text-primary font-medium">“同行采购引荐人计划”</strong>：向出海/电商同行采购好友推荐并签约，您可长期享有 <strong className="text-primary font-medium">5% ~ 8%</strong> 的项目引荐收益。
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
              <Check className="w-3.5 h-3.5" />
              <span>建立长久互信合作，稳定持续享有</span>
            </div>
          </div>
        </div>

        {/* Incentive Projection Card */}
        <div className="codex-panel p-6 sm:p-8 border-amber-500/30 bg-gradient-to-r from-amber-500/[0.05] via-surface to-amber-500/[0.05] dark:from-[#141418] dark:via-[#101014] dark:to-[#141418] flex flex-col lg:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-700 dark:text-amber-300 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              <span>阶梯式采购津贴参考</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-semibold text-primary tracking-tight">
              年采购 10~20 个 Pro 账号，采购个人累计可获 ¥ 12,000 ~ 36,000 元专属津贴
            </h4>
            <p className="text-xs sm:text-sm text-secondary">
              款到 24 小时内即时兑付，支持指定面额分拆发放，全程专人一对一加密对接。
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
            <button
              onClick={() => onOpenContact("perks-apply")}
              className="btn-openai-white text-xs sm:text-sm !py-2.5 !px-6 cursor-pointer"
            >
              <span>开通采购专属通道</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
