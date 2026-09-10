"use client";

import React from "react";
import {
  FileSignature,
  CreditCard,
  Zap,
  ReceiptText,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Lock,
} from "lucide-react";

interface ProcurementWorkflowProps {
  onOpenContact: (source?: string) => void;
  onOpenDocs: () => void;
}

export default function ProcurementWorkflow({ onOpenContact, onOpenDocs }: ProcurementWorkflowProps) {
  const steps = [
    {
      step: "01",
      title: "需求沟通与签约打款",
      subtitle: "腾讯电子签 · 网银对公电汇",
      icon: FileSignature,
      iconColor: "text-blue-500",
      bgLight: "bg-blue-500/10 border-blue-500/20",
      desc: "大客户经理 10 分钟内出具加盖公章的正式采购合同与 SLA 兜底协议，支持在线秒签或纸质快递；客户财务通过企业网银对公转账。",
      guarantees: ["加盖正式合同专用章", "银行对公打款留存电子回执", "支持法务定制条款"],
    },
    {
      step: "02",
      title: "官方企业商业卡代付",
      subtitle: "100% 真实卡段 · Stripe直连",
      icon: CreditCard,
      iconColor: "text-emerald-500",
      bgLight: "bg-emerald-500/10 border-emerald-500/20",
      desc: "采用海外商业银行实体企业信用卡直接结算扣付，拒绝黑卡与共享虚拟卡；每一笔均出具带卡号后四位与流水号的 OpenAI 原版 Invoice。",
      guarantees: ["Stripe 官方扣款流水", "出具原版 Invoice PDF", "从源头杜绝溯源封号"],
    },
    {
      step: "03",
      title: "极速交付与账号确权",
      subtitle: "零知识原则 · 数据 100% 归属客户",
      icon: Zap,
      iconColor: "text-amber-500",
      bgLight: "bg-amber-500/10 border-amber-500/20",
      desc: "款到后最快 15 分钟内完成直充激活；支持官方代付邀请或一次性授权，严格奉行零知识保密（NDA），研发代码资产完全归属企业。",
      guarantees: ["≤15 分钟极速交付", "不记录客户主密码", "签署商业保密协议 (NDA)"],
    },
    {
      step: "04",
      title: "数电专票与售后兜底",
      subtitle: "6% 专票抵扣 · 72h/按天退赔",
      icon: ReceiptText,
      iconColor: "text-purple-500",
      bgLight: "bg-purple-500/10 border-purple-500/20",
      desc: "付款后 2 个工作日内直开 6% 增值税专用发票，税务局官网可查；7×24H 专人专群轮守，若遇不可抗力风控，72h 补换或按天折算对公退款。",
      guarantees: ["国税局平台一键查验抵扣", "7×24H 全天候专人轮守", "按天折算原路对公退款"],
    },
  ];

  return (
    <section id="workflow" className="py-20 bg-canvas border-t border-theme-subtle transition-colors relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="codex-pill mb-3">
            <Lock className="w-3.5 h-3.5 text-[#10A37F]" />
            <span>全透明阳光履约体系</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-primary tracking-tight mb-4">
            全阳光代采 4 步交付闭环 · 让采购与财务全程放心
          </h2>
          <p className="text-sm sm:text-base text-secondary">
            从初次对接到款项支付、官方扣费出单、数电专票交付到 72 小时封号兜底，全流程标准化、凭证化、可溯源。
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="codex-panel p-6 border-theme-subtle bg-surface flex flex-col justify-between relative group hover:border-[#10A37F]/50 transition-all shadow-xs hover:shadow-md"
              >
                {/* Step Top Bar */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-extrabold px-2.5 py-1 rounded-md bg-surface-elevated text-secondary border border-theme-subtle">
                      STEP {item.step}
                    </span>
                    <div className={`p-2 rounded-xl border ${item.bgLight} ${item.iconColor}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-semibold text-primary mb-1">{item.title}</h3>
                  <div className="text-xs text-emerald-600 dark:text-[#10A37F] font-mono font-medium mb-3">
                    {item.subtitle}
                  </div>
                  <p className="text-xs text-secondary leading-relaxed mb-5">
                    {item.desc}
                  </p>
                </div>

                {/* Micro Guarantees */}
                <div className="pt-4 border-t border-theme-subtle space-y-2">
                  {item.guarantees.map((g, gidx) => (
                    <div key={gidx} className="flex items-center gap-2 text-[11px] text-secondary">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10A37F] shrink-0" />
                      <span>{g}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Timeline Bottom Assurance Banner */}
        <div className="mt-12 p-5 rounded-2xl bg-surface-elevated border border-theme-subtle flex flex-col sm:flex-row items-center justify-between gap-4 max-w-5xl mx-auto shadow-sm">
          <div className="flex items-center gap-3 text-xs sm:text-sm text-secondary">
            <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <span className="font-semibold text-primary block">需要提前了解合同范本或开票资质？</span>
              <span className="text-xs text-secondary">
                支持在签约付款前，由企业法务与财务查验完整的营业执照正本扫描件、开票信息及加盖公章的合作协议。
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto shrink-0">
            <button
              onClick={onOpenDocs}
              className="btn-openai-secondary text-xs !py-2 !px-4 w-full sm:w-auto cursor-pointer"
            >
              查阅合同范本
            </button>
            <button
              onClick={() => onOpenContact("workflow-advisor")}
              className="btn-openai-white text-xs !py-2 !px-4 w-full sm:w-auto cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>预约对接顾问</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
