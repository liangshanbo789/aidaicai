"use client";

import React from "react";
import { ShieldCheck, Clock, RefreshCw, KeyRound, FileText } from "lucide-react";

interface SlaGuaranteeProps {
  onOpenDocs: () => void;
  onOpenContact: (source?: string) => void;
}

export default function SlaGuarantee({ onOpenDocs, onOpenContact }: SlaGuaranteeProps) {
  const commitments = [
    {
      icon: RefreshCw,
      color: "text-primary",
      title: "72h 闪电保换 · 按天折算退赔",
      subtitle: "协议写进主合同，加盖企业公章",
      desc: "充值 72 小时内若遇厂商风控异常，2 小时内免费更换补全；全周期内非违禁使用导致的封号，严格按照当月剩余未生效天数，1 个工作日内公对公原路足额退款。",
    },
    {
      icon: ShieldCheck,
      color: "text-[#10A37F]",
      title: "100% 官方商业信用卡通道",
      subtitle: "支持官方 Invoice 账单核验",
      desc: "严禁任何形式的盗刷黑卡、垃圾共享虚拟卡。每一笔充值均由正规海外银行商业卡直接扣付，支持调取官方账单扣款凭证（带卡号尾数与税单号），彻底杜绝溯源连带封号风险。",
    },
    {
      icon: Clock,
      color: "text-primary",
      title: "≤ 15 分钟专属企微大客户服务",
      subtitle: "专人专群响应，业务零断档",
      desc: "建立由大客户商务主管、资深技术顾问组成的微信 VIP 服务群。承诺工作时段 15 分钟内响应；到期前 5 个工作日主动推送账单提醒，协助采购极速完成提单与续订审批。",
    },
    {
      icon: KeyRound,
      color: "text-primary",
      title: "零知识商业秘密与数据隐私保护",
      subtitle: "签署具备法律效力之 NDA",
      desc: "支持通过官方充值邀请链接或一次性授权开通，我方严禁亦无需记录客户主密码。客户在 GPT 中产生的所有研发代码、商业文档及 Prompt 资产所有权 100% 归客户所有。",
    },
  ];

  return (
    <section id="sla" className="py-20 bg-canvas border-t border-theme-subtle transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="codex-pill mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-[#10A37F]" />
            <span>4 大企业级安全与售后兜底</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-primary tracking-tight mb-4">
            把不确定性留给我们，把确定性留给企业
          </h2>
          <p className="text-sm sm:text-base text-secondary">
            每一项保障承诺均受法律保护。签署标准《企业软件代采购框架协议》与《SLA 服务保障条款》，让采购彻底免除后顾之忧。
          </p>
        </div>

        {/* 4 Cards Grid (Codex Minimal Surface) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto mb-12">
          {commitments.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="codex-panel p-6 sm:p-7 border-theme-subtle hover:border-theme-hover transition-all bg-surface shadow-xs">
                <div className="flex items-start gap-4">
                  <div className={`p-2.5 rounded-lg bg-surface-elevated border border-theme-subtle ${item.color} shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-primary mb-1">{item.title}</h3>
                    <div className="text-xs text-emerald-600 dark:text-[#10A37F] font-mono mb-2.5 font-medium">{item.subtitle}</div>
                    <p className="text-xs sm:text-[13px] text-secondary leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* SLA Callout Banner */}
        <div className="codex-panel p-5 sm:p-6 max-w-4xl mx-auto border-theme-subtle bg-surface-elevated flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs sm:text-sm text-secondary">
            <FileText className="w-4 h-4 text-secondary shrink-0" />
            <span>
              支持在正式合作前，向企业法务与采购总监调阅完整的<strong className="text-primary font-medium">《SLA 售后退赔细则与合同范本》</strong>。
            </span>
          </div>
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={onOpenDocs}
              className="btn-openai-secondary text-xs !py-2 !px-4 w-full sm:w-auto cursor-pointer"
            >
              在线阅读 SLA 协议
            </button>
            <button
              onClick={() => onOpenContact("sla-inquire")}
              className="btn-openai-white text-xs !py-2 !px-4 w-full sm:w-auto cursor-pointer"
            >
              获取盖章协议样张
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
