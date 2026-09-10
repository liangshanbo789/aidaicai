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
            <span>大客户采购专享 · 增值保障与伙伴计划</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-primary tracking-tight mb-4">
            助力企业采购：<span className="gradient-text-gold font-bold">轻松立项过审，尊享战略集采增值礼遇</span>
          </h2>
          <p className="text-sm sm:text-base text-secondary">
            我们深刻理解企业采购在供应商准入、财务合规与对内汇报中的严谨要求。为此我们打造了一站式合规立项套件与大客户增值权益体系，助您省心呈批、赋能业务。
          </p>
        </div>

        {/* 3 Core Assurance Pillars for Procurement (Codex Dark Panels) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {/* Pillar 1 */}
          <div className="codex-panel p-6 border-theme-subtle relative">
            <div className="w-10 h-10 rounded-lg bg-surface-elevated border border-theme-subtle flex items-center justify-center text-[#10A37F] mb-5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-primary mb-2">1. 阳光合规立项 · 轻松交差过审</h3>
            <p className="text-xs sm:text-[13px] text-secondary leading-relaxed mb-4">
              我们为采购专员准备了现成的<strong className="text-primary font-medium">《企业 AI 工具采购立项申请报告》Word 模板</strong>、规范比选表、6% 增值税专用发票及盖章合同。材料齐备规范，财务与法务无可挑剔，直接提交即可顺利过审。
            </p>
            <div className="flex items-center gap-2 text-xs text-secondary">
              <Check className="w-3.5 h-3.5 text-[#10A37F]" />
              <span>提供全套现成呈批材料 · 采购省心免责</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="codex-panel p-6 border-theme-subtle relative">
            <div className="w-10 h-10 rounded-lg bg-surface-elevated border border-theme-subtle flex items-center justify-center text-amber-500 dark:text-amber-400 mb-5">
              <Gift className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-primary mb-2">2. 战略集采权益 · 灵活增值支持</h3>
            <p className="text-xs sm:text-[13px] text-secondary leading-relaxed mb-4">
              根据企业采购账号规模与合作周期，梯度附赠战略级增值权益包。涵盖企业专属 VIP 响应通道、AI 工具落地赋能技术支持与大客户定制权益，让每一笔采购预算都物超所值。
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-600 dark:text-amber-300 font-medium">
              <Check className="w-3.5 h-3.5" />
              <span>尊享大客户专属方案 · 增值赋能保障</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="codex-panel p-6 border-theme-subtle relative">
            <div className="w-10 h-10 rounded-lg bg-surface-elevated border border-theme-subtle flex items-center justify-center text-[#10A37F] mb-5">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-primary mb-2">3. 战略伙伴计划 · 长期互利共赢</h3>
            <p className="text-xs sm:text-[13px] text-secondary leading-relaxed mb-4">
              只要贵公司按期持续续订，即享长期战略客户优先保障。同时开放<strong className="text-primary font-medium">“数字化先锋引荐人计划”</strong>：向出海/跨境/电商同行采购好友推荐并促成签约，共享平台战略引荐激励，建立长久互信合作。
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
              <Check className="w-3.5 h-3.5" />
              <span>行业伙伴引荐计划 · 共享生态红利</span>
            </div>
          </div>
        </div>

        {/* Incentive Projection Card */}
        <div className="codex-panel p-6 sm:p-8 border-amber-500/30 bg-gradient-to-r from-amber-500/[0.05] via-surface to-amber-500/[0.05] dark:from-[#141418] dark:via-[#101014] dark:to-[#141418] flex flex-col lg:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-700 dark:text-amber-300 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              <span>阶梯式集采增值方案参考</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-semibold text-primary tracking-tight">
              年采购 10~20 个 Pro 账号，享高达 ¥ 12,000 ~ 36,000 元综合增值权益包
            </h4>
            <p className="text-xs sm:text-sm text-secondary">
              合同生效即享权益锁定，支持按企业需求选配增值服务包，大客户总监一对一专属对接。
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
            <button
              onClick={() => onOpenContact("perks-apply")}
              className="btn-openai-white text-xs sm:text-sm !py-2.5 !px-6 cursor-pointer"
            >
              <span>咨询大客户专属方案</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
