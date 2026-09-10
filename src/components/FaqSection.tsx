"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "能不能开具 6% 增值税专用发票？企业财务如何报销？",
      a: "完全支持！我们具备正规科技与信息技术服务资质，支持开具增值税专用发票（税率 6%）或增值税普通发票，发票服务类目通常开列为“*信息技术服务* 软件技术服务费”或“技术咨询费”。款项确认到账后 2 个工作日内推送至贵司财务指定邮箱，完全满足一般纳税人进项税额抵扣与公司正规入账报销要求。",
    },
    {
      q: "是充值到我们公司员工现有的邮箱，还是由你们提供全新账号？",
      a: "两种模式均可灵活支持：① 员工现有账号直充：支持客户提供已注册的 OpenAI 官方账号（如各类企业邮箱、Gmail等），由我方技术人员通过官方代充邀请链路直接激活；② 提供全新纯净账号：若员工尚未注册，我方可免费协助按贵司要求批量开通纯净未绑卡官方账号并直接交付管理员掌控。",
    },
    {
      q: "如果使用期间账号被官方风控封禁，具体怎么退赔？",
      a: "我们签署法务盖章的《SLA 服务等级保障协议》作为合同附件：① 72 小时闪电保换：激活 72 小时内若遇厂商批量风控，2 小时内免费更换补全；② 全周期按天折算退款：后续在正常使用期内若遇网络波动封禁，严格按照【当月支付单价 ÷ 30 × 剩余未生效天数】计算，1 个工作日内公对公原路退回至贵司企业账户，或者等额顺延至新账号抵扣，真正做到零风险兜底。",
    },
    {
      q: "你们采用的卡段来源是什么？会不会是黑卡？",
      a: "绝对不是黑卡！我们严格使用海外正规商业银行核准的企业商业信用卡（Corporate Commercial Cards）为企业代付。充值完成后，可向企业出具 OpenAI 官方后台原版的 Invoice 电子收据（带真实扣费卡号尾数与官方 Invoice ID），企业 IT 和法务均可核验真伪，从源头杜绝因黑卡盗刷导致的连带封号或法律追责。",
    },
    {
      q: "企业大客户集采的“专属增值权益与伙伴激励”具体包含什么？如何交付？",
      a: "我们为批量集采的企业客户提供完善的增值权益体系，包括企业专属 1 对 1 技术顾问群、优先补号保障、定制化立项呈批材料支持，以及可按需灵活选配的战略伙伴增值礼包（包含企业落地培训点数、商务办公礼包或战略伙伴引荐激励）。合同生效后，大客户总监会为您提供 1 对 1 合规高效的履约支持。",
    },
    {
      q: "官方最新发布的 GPT-6 Astra，企业代采账号是否能第一时间使用？",
      a: "完全支持！我们提供 100% 官方正规代充与企业席位订阅，款到激活后账号直接接入 OpenAI 官方最新服务。最新发布的 GPT-6 Astra 旗舰模型及 GPT-5.6 家族已向 Plus、Pro (5x/20x) 和 Team 空间全量推送。其中 Pro 旗舰版不仅独享最高优先级的极速计算队列，更解锁 100 万 (1M Token) 超长大上下文与突破性的 Computer Operator 智能体操控能力。",
    },
    {
      q: "后续每月/每季度如何续费？业务会不会断档？",
      a: "不会断档！我们为每家企业配备专属客服与自动化台账管理。在订阅到期前 5 个工作日，大客户经理会在企微群中主动推送本期续订明细与对公付款账单。采购人员有充裕时间提交公司内部财务审批打款，款到后无感延续卡段扣费，保障研发与出海业务连续稳定运行。",
    },
  ];

  return (
    <section className="py-20 bg-canvas border-t border-theme-subtle transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="codex-pill mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-secondary" />
            <span>常见疑问与解答</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-primary tracking-tight mb-4">
            解答财务、技术与采购关心的核心问题
          </h2>
          <p className="text-sm sm:text-base text-secondary">
            如果您的企业还有其他特殊采购制度或开票需求，欢迎随时联系大客户商务顾问。
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="codex-panel border-theme-subtle overflow-hidden bg-surface transition-all shadow-xs"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-surface-hover transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-[15px] font-medium text-primary">
                    {faq.q}
                  </span>
                  <span className="p-1 rounded-md bg-surface-elevated text-secondary shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-primary" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-secondary leading-relaxed border-t border-theme-subtle pt-3.5">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
