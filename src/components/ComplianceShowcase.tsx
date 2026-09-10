"use client";

import React, { useState } from "react";
import {
  Receipt,
  Building2,
  CreditCard,
  FileCheck2,
  ShieldCheck,
  CheckCircle,
  ExternalLink,
  HelpCircle,
  Lock,
  Stamp,
  QrCode,
} from "lucide-react";

export default function ComplianceShowcase() {
  const [activeTab, setActiveTab] = useState<"invoice" | "bank" | "openai" | "contract">("invoice");
  const [showVerifyGuide, setShowVerifyGuide] = useState(false);

  return (
    <section id="compliance" className="py-20 border-t border-theme-subtle bg-canvas transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="codex-pill mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-[#10A37F]" />
            <span>财务闭环与官方验真</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-primary tracking-tight mb-4">
            全链路阳光合规 · 经得起企业财务与税务穿透
          </h2>
          <p className="text-sm sm:text-base text-secondary">
            拒绝任何灰色违规操作。我们为每一笔企业代采提供正规数电增值税专用发票（6%税率）、银行对公转账回单、OpenAI 官方原版扣款 Invoice 及加盖公章的法务协议。
          </p>
        </div>

        {/* Tab Selector (Capsule Pills) */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
          {[
            { id: "invoice", label: "数电增值税专用发票 (6%)", icon: Receipt },
            { id: "bank", label: "银行对公转账电子回执", icon: Building2 },
            { id: "openai", label: "OpenAI 官方原版扣费账单", icon: CreditCard },
            { id: "contract", label: "企业盖章 SLA 兜底协议", icon: FileCheck2 },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#09090B] dark:bg-white text-white dark:text-zinc-950 font-semibold shadow-md ring-2 ring-emerald-500/30"
                    : "bg-surface-elevated text-secondary border border-theme-subtle hover:bg-surface-hover hover:text-primary"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Display Panel - Verification Inspector Box */}
        <div className="codex-panel max-w-4xl mx-auto border-theme-subtle bg-surface overflow-hidden shadow-2xl">
          {/* Top Window Inspector Bar */}
          <div className="px-5 py-3 border-b border-theme-subtle bg-surface-elevated flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-[11px] font-mono text-secondary ml-1">
                audit-inspector / {activeTab === "invoice" ? "vat-special-invoice.pdf" : activeTab === "bank" ? "bank-transfer-receipt.pdf" : activeTab === "openai" ? "openai-stripe-receipt.pdf" : "sla-contract-signed.pdf"}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-medium">
                <Lock className="w-2.5 h-2.5" />
                <span>官方全要素核验通过</span>
              </span>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            {/* ==================== TAB 1: VAT SPECIAL INVOICE ==================== */}
            {activeTab === "invoice" && (
              <div className="space-y-6">
                {/* Official Certification Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-dashed border-theme-subtle gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-500/20">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-emerald-600 dark:text-[#10A37F] font-semibold flex items-center gap-1.5">
                        <span>国家税务总局全国增值税发票查验平台认证</span>
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/15">真伪可查</span>
                      </div>
                      <h3 className="text-base font-semibold text-primary mt-0.5">
                        电子发票（数电增值税专用发票）官方标准样张
                      </h3>
                    </div>
                  </div>

                  <div className="text-left sm:text-right text-[11px] font-mono text-secondary">
                    <div>发票号码: 26112000000088921820</div>
                    <div>开票日期: 2026年09月08日</div>
                  </div>
                </div>

                {/* High-Fidelity Invoice Canvas */}
                <div className="relative bg-surface-elevated border border-theme-subtle rounded-xl p-5 sm:p-6 text-xs text-secondary font-mono space-y-4 overflow-hidden shadow-inner">
                  {/* Decorative Security Background Watermark */}
                  <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center opacity-[0.03] dark:opacity-[0.05] text-5xl font-bold tracking-widest text-primary rotate-[-15deg]">
                    增值税专用发票
                  </div>

                  {/* Header Title with Official Layout */}
                  <div className="text-center pb-2 border-b-2 border-emerald-500/30">
                    <div className="text-base sm:text-lg font-bold text-primary tracking-wider font-sans">
                      电子发票（增值税专用发票）
                    </div>
                    <div className="text-[10px] text-tertiary">统一发票监制码：NO. 008192837192</div>
                  </div>

                  {/* Buyer & Seller Info Box */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-3 border-b border-theme-subtle">
                    <div className="space-y-1.5 bg-surface/60 p-3 rounded-lg border border-theme-subtle">
                      <div className="text-[11px] font-semibold text-primary font-sans">购买方信息（客户企业）</div>
                      <div><span className="text-tertiary">名称：</span>【贵司企业法定名称】</div>
                      <div><span className="text-tertiary">统一社会信用代码：</span>91110108MA01XXXXXX</div>
                      <div><span className="text-tertiary">地址/电话：</span>北京市海淀区科技园路XX号</div>
                      <div><span className="text-tertiary">开户行及账号：</span>招商银行北京分行 6225 **** **** 1088</div>
                    </div>
                    <div className="space-y-1.5 bg-surface/60 p-3 rounded-lg border border-theme-subtle">
                      <div className="text-[11px] font-semibold text-primary font-sans">销售方信息（AI代采）</div>
                      <div><span className="text-tertiary">名称：</span>成都游手科技有限公司</div>
                      <div><span className="text-tertiary">统一社会信用代码：</span>91110105MA88XXXXXX</div>
                      <div><span className="text-tertiary">地址/电话：</span>成都市高新区AI创新中心 028-8588XXXX</div>
                      <div><span className="text-tertiary">开户行及账号：</span>中国工商银行股份有限公司成都武侯大道支行 1001 **** 8820</div>
                    </div>
                  </div>

                  {/* Line Items Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="border-b border-theme-subtle text-secondary font-medium">
                          <th className="py-2">项目名称及规格</th>
                          <th className="py-2 text-center">单位/数量</th>
                          <th className="py-2 text-right">单价 (不含税)</th>
                          <th className="py-2 text-right">金额 (RMB)</th>
                          <th className="py-2 text-center">税率</th>
                          <th className="py-2 text-right">税额 (RMB)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-theme-subtle">
                        <tr>
                          <td className="py-3 text-primary font-sans">
                            <div className="font-semibold">*信息技术服务* 软件技术服务费</div>
                            <div className="text-[10px] text-tertiary font-mono">规格: ChatGPT Pro (20x) 官方代采对公年订</div>
                          </td>
                          <td className="py-3 text-center text-secondary">席位 / 10</td>
                          <td className="py-3 text-right font-mono text-primary">¥ 1,311.32</td>
                          <td className="py-3 text-right font-mono text-primary font-semibold">¥ 13,113.21</td>
                          <td className="py-3 text-center text-emerald-600 dark:text-emerald-400 font-bold">6%</td>
                          <td className="py-3 text-right font-mono text-emerald-600 dark:text-emerald-400 font-semibold">¥ 786.79</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Summary & Red Stamp Layer */}
                  <div className="relative pt-3 border-t border-theme-subtle flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <div className="space-y-1">
                      <div className="text-xs sm:text-sm">
                        <span className="text-secondary">价税合计（大写）：</span>
                        <span className="font-bold text-primary font-sans">人民币壹万叁仟玖佰元整</span>
                      </div>
                      <div className="text-[11px] text-tertiary font-sans">
                        收款人：张财务 · 复核：李核算 · 开票人：系统自动校验开具
                      </div>
                    </div>
                    <div className="font-semibold text-primary text-base sm:text-lg font-mono">
                      （小写）¥ 13,900.00
                    </div>

                    {/* Realistic Red Official Invoice Stamp (拟真红色数电发票专用章) */}
                    <div className="absolute right-4 sm:right-24 bottom-1 pointer-events-none select-none opacity-85 dark:opacity-90 transform rotate-[-6deg]">
                      <div className="w-32 h-20 sm:w-36 sm:h-22 rounded-[50%] border-[2.5px] border-rose-600/90 text-rose-600 flex flex-col items-center justify-center p-1 relative shadow-xs bg-rose-500/[0.02]">
                        <div className="text-[9px] font-bold text-center tracking-tighter scale-90 leading-tight">
                          成都游手科技有限公司
                        </div>
                        <div className="my-0.5 text-xs text-rose-600 font-sans">★</div>
                        <div className="text-[10px] font-extrabold tracking-widest border-t border-rose-600/70 pt-0.5">
                          发票专用章
                        </div>
                        <div className="text-[8px] font-mono scale-75 tracking-tight text-rose-600/90">
                          91110105MA88XXXX
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footnote & Verification Guide Link */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-secondary bg-surface-elevated border border-theme-subtle p-3.5 rounded-xl">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#10A37F] shrink-0" />
                    <span>对公到账后 2 个工作日内直开数电专票，直达财务邮箱，完全满足国内一般纳税人 6% 进项税额抵扣需求。</span>
                  </div>

                  <button
                    onClick={() => setShowVerifyGuide(!showVerifyGuide)}
                    className="text-xs text-emerald-600 dark:text-[#10A37F] font-semibold hover:underline flex items-center gap-1 cursor-pointer shrink-0"
                  >
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>{showVerifyGuide ? "收起查验指引" : "如何前往税务局验真？"}</span>
                  </button>
                </div>

                {/* Expandable Tax Verification Guide */}
                {showVerifyGuide && (
                  <div className="p-4 rounded-xl bg-emerald-500/[0.06] border border-emerald-500/30 text-xs text-secondary space-y-2 animate-fade-in">
                    <div className="font-semibold text-primary flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#10A37F]" />
                      <span>国家税务总局官方查验真伪三步指引：</span>
                    </div>
                    <ol className="list-decimal list-inside space-y-1 text-secondary leading-relaxed pl-1">
                      <li>访问国家税务总局全国增值税发票查验平台官方网站（<span className="font-mono text-primary">inv-veri.chinatax.gov.cn</span>）；</li>
                      <li>在平台输入发票代码、发票号码、开票日期与开具金额（不含税）；</li>
                      <li>点击“查验”即可实时调出全国统一电子底账，查验结果与收到的 PDF 原样 100% 吻合，确保 100% 阳光真实入账。</li>
                    </ol>
                  </div>
                )}
              </div>
            )}

            {/* ==================== TAB 2: BANK TRANSFER RECEIPT ==================== */}
            {activeTab === "bank" && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-dashed border-theme-subtle gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-blue-500/20">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-1.5">
                        <span>企业网上银行公对公转账电子回执</span>
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-blue-500/15">银行印签可验</span>
                      </div>
                      <h3 className="text-base font-semibold text-primary mt-0.5">
                        银行公对公转账电子凭单样张（支持工行/招行等全网银）
                      </h3>
                    </div>
                  </div>

                  <div className="text-left sm:text-right text-[11px] font-mono text-secondary">
                    <div>业务流水号: 20260909001882947192</div>
                    <div>转账渠道: 企业网银实时跨行支付</div>
                  </div>
                </div>

                {/* Bank Receipt Canvas */}
                <div className="relative bg-surface-elevated border border-theme-subtle rounded-xl p-5 sm:p-6 text-xs text-secondary font-mono space-y-4 overflow-hidden shadow-inner">
                  {/* Decorative Bank Watermark */}
                  <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center opacity-[0.03] dark:opacity-[0.04] text-5xl font-bold tracking-widest text-primary">
                    ELECTRONIC RECEIPT
                  </div>

                  <div className="text-center pb-2 border-b-2 border-blue-500/30">
                    <div className="text-base sm:text-lg font-bold text-primary tracking-wider font-sans">
                      中国工商银行股份有限公司 · 电子回单 (对公结算)
                    </div>
                    <div className="text-[10px] text-tertiary">回单防伪验证码：ICBC-PAY-202609-994812</div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-3 border-b border-theme-subtle">
                    <div className="space-y-1.5 bg-surface/60 p-3 rounded-lg border border-theme-subtle">
                      <div className="text-[11px] font-semibold text-primary font-sans">【付款人信息】</div>
                      <div><span className="text-tertiary">付款人户名：</span>【客户企业全称】</div>
                      <div><span className="text-tertiary">付款人账号：</span>6225 8820 **** 1088</div>
                      <div><span className="text-tertiary">付款开户行：</span>招商银行北京科技园支行</div>
                    </div>
                    <div className="space-y-1.5 bg-surface/60 p-3 rounded-lg border border-theme-subtle">
                      <div className="text-[11px] font-semibold text-primary font-sans">【收款人信息】</div>
                      <div><span className="text-tertiary">收款人户名：</span>成都游手科技有限公司</div>
                      <div><span className="text-tertiary">收款人账号：</span>1001 2488 **** 8820</div>
                      <div><span className="text-tertiary">收款开户行：</span>中国工商银行股份有限公司成都武侯大道支行</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-3 border-b border-theme-subtle items-center">
                    <div>
                      <span className="text-tertiary">转账金额：</span>
                      <span className="text-primary font-sans text-sm font-bold">人民币 拾叁万玖仟元整</span>
                      <div className="text-emerald-600 dark:text-emerald-400 font-mono text-base sm:text-lg font-bold">
                        ¥ 139,000.00
                      </div>
                    </div>
                    <div>
                      <span className="text-tertiary">款项用途 / 附言摘要：</span>
                      <div className="text-primary font-sans font-medium mt-0.5">
                        海外企业软件研发代采及技术支持保障款项 (NX-2026-PRO)
                      </div>
                    </div>
                  </div>

                  {/* Bottom Verification Details & Red Bank Stamp */}
                  <div className="relative pt-2 flex flex-col sm:flex-row justify-between items-start sm:items-center text-[11px] text-tertiary gap-2">
                    <div>
                      <div>交易时间：2026-09-08 14:22:18 · 报文类型：大额实时支付系统</div>
                      <div>印章状态：【已加盖中国工商银行电子转账回单业务专用章】</div>
                    </div>

                    {/* Realistic Red Bank Round Stamp (拟真银行电子回单专用章) */}
                    <div className="absolute right-4 sm:right-16 bottom-0 pointer-events-none select-none opacity-85 dark:opacity-90 transform rotate-[-4deg]">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-[2.5px] border-rose-600 text-rose-600 flex flex-col items-center justify-center p-1 shadow-xs bg-rose-500/[0.02]">
                        <div className="text-[7.5px] font-bold text-center scale-90 leading-tight">
                          中国工商银行股份有限公司
                        </div>
                        <div className="my-0.5 text-xs text-rose-600 font-sans">★</div>
                        <div className="text-[8.5px] font-extrabold tracking-wider border-t border-rose-600/70 pt-0.5">
                          业务回单专用章
                        </div>
                        <div className="text-[7px] font-mono scale-75 text-rose-600/90">
                          (电子验印流水 8820)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-secondary bg-surface-elevated border border-theme-subtle p-3 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-[#10A37F] shrink-0" />
                  <span>全程资金走国家金融正规企业银行清算通道，资金链路公开透明，支持财务与审计穿透调取电子凭证，杜绝私人违规收款。</span>
                </div>
              </div>
            )}

            {/* ==================== TAB 3: OPENAI OFFICIAL INVOICE ==================== */}
            {activeTab === "openai" && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-dashed border-theme-subtle gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-500/20">
                      <CreditCard className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-emerald-600 dark:text-[#10A37F] font-semibold flex items-center gap-1.5">
                        <span>OpenAI, LLC 官方控制台原版扣款对账单</span>
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/15">正规商业卡段</span>
                      </div>
                      <h3 className="text-base font-semibold text-primary mt-0.5">
                        Stripe 支付流水与正规海外企业商业信用卡核验凭单
                      </h3>
                    </div>
                  </div>

                  <div className="text-left sm:text-right text-[11px] font-mono text-secondary">
                    <div>Receipt Number: 2819-0918-OPENAI</div>
                    <div>Status: PAID (Cleared)</div>
                  </div>
                </div>

                {/* Stripe / OpenAI Receipt Canvas */}
                <div className="bg-surface-elevated border border-theme-subtle rounded-xl p-5 sm:p-6 text-xs text-secondary font-mono space-y-4 shadow-inner">
                  <div className="flex justify-between items-center pb-3 border-b border-theme-subtle">
                    <div>
                      <div className="font-bold text-primary text-base font-sans">OpenAI, LLC · Official Receipt</div>
                      <div className="text-[10px] text-tertiary">3180 18th Street, San Francisco, CA 94110</div>
                    </div>
                    <div className="text-right">
                      <span className="px-2.5 py-1 rounded bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 text-xs font-bold">
                        PAID · $200.00 USD
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-3 border-b border-theme-subtle">
                    <div className="space-y-1.5">
                      <div><strong className="text-primary font-medium">Invoice Number:</strong> in_1Q8x92LLk9x829108</div>
                      <div><strong className="text-primary font-medium">Payment Date:</strong> Sep 08, 2026 09:15:32 UTC</div>
                      <div><strong className="text-primary font-medium">Payment Method:</strong> Visa Commercial Card (ending in 8892)</div>
                    </div>
                    <div className="space-y-1.5">
                      <div><strong className="text-primary font-medium">Billed To:</strong> tech-lead@yourcompany.com (客户企业专属邮箱)</div>
                      <div><strong className="text-primary font-medium">Tax Identifier:</strong> US-EIN 81-3948291</div>
                      <div><strong className="text-primary font-medium">Merchant:</strong> Stripe Payments (for OpenAI Inc)</div>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="border-b border-theme-subtle text-secondary font-medium">
                          <th className="py-2">Subscription Description</th>
                          <th className="py-2 text-center">Qty</th>
                          <th className="py-2 text-right">Unit Price</th>
                          <th className="py-2 text-right">Amount (USD)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-2.5 text-primary font-sans font-medium">
                            ChatGPT Pro Subscription (Includes GPT-6 Astra & Full Compute Tier)
                          </td>
                          <td className="py-2.5 text-center text-secondary">1</td>
                          <td className="py-2.5 text-right font-mono text-primary">$200.00</td>
                          <td className="py-2.5 text-right font-mono text-primary font-bold">$200.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="pt-2 border-t border-theme-subtle flex justify-between items-center text-[11px] text-tertiary">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-[#10A37F]" />
                      <span className="text-primary font-medium font-sans">海外实体商业银行企业信用真实卡段，绝非盗刷黑卡</span>
                    </div>
                    <span>可登入 OpenAI 官网 Billing 随时核对原版 PDF</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-secondary bg-surface-elevated border border-theme-subtle p-3 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-[#10A37F] shrink-0" />
                  <span>每一笔代采充值均与客户指定企业邮箱完全对齐，并可下载出具 OpenAI 官方扣费凭据原件，卡号可溯源核验，从源头确保账号终身稳定不被封禁。</span>
                </div>
              </div>
            )}

            {/* ==================== TAB 4: CONTRACT & CA SIGNATURE ==================== */}
            {activeTab === "contract" && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-dashed border-theme-subtle gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center border border-amber-500/20">
                      <FileCheck2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-amber-600 dark:text-amber-400 font-semibold flex items-center gap-1.5">
                        <span>具备完全法律效力之企业采购框架合同</span>
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-500/15">CA 电子签章</span>
                      </div>
                      <h3 className="text-base font-semibold text-primary mt-0.5">
                        企业盖章版《SLA 服务等级兜底协议与保密条款 (NDA)》
                      </h3>
                    </div>
                  </div>

                  <div className="text-left sm:text-right text-[11px] font-mono text-secondary">
                    <div>签署编号: CT-2026-ADC-991820</div>
                    <div>签约时间戳: 权威第三方时间戳认证</div>
                  </div>
                </div>

                {/* Contract Canvas */}
                <div className="relative bg-surface-elevated border border-theme-subtle rounded-xl p-5 sm:p-6 text-xs text-secondary space-y-4 overflow-hidden shadow-inner">
                  {/* Decorative Contract Background */}
                  <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center opacity-[0.03] dark:opacity-[0.04] text-5xl font-bold tracking-widest text-primary rotate-[-10deg]">
                    LEGAL CONTRACT
                  </div>

                  <div className="font-semibold text-primary text-sm border-b border-theme-subtle pb-2 flex items-center justify-between">
                    <span>《企业软件海外代采与技术支持框架协议》核心条款节选：</span>
                    <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-medium">
                      ● 腾讯电子签 / 契约锁 权威认证
                    </span>
                  </div>

                  <div className="space-y-3 text-secondary leading-relaxed font-sans">
                    <div className="p-3 rounded-lg bg-surface/70 border border-theme-subtle">
                      <strong className="text-primary block mb-1">第四条 4.2 封号 72h 闪电补换与按天退赔兜底机制：</strong>
                      若因跨境链路或厂商非甲方滥用导致的官方风控封禁，乙方严格承诺在收到通报后 2 小时内免费更换补全；全生命周期内若不可恢复，严格按照当月剩余未使用天数：
                      <span className="font-mono text-primary font-semibold block my-1">
                        退款额 = (本月代采实际支付含税款 ÷ 30) × 剩余有效天数
                      </span>
                      在 1 个工作日内通过银行网银原路退还至甲方对公账户。
                    </div>

                    <div className="p-3 rounded-lg bg-surface/70 border border-theme-subtle">
                      <strong className="text-primary block mb-1">第五条 5.1 零知识商业机密与数据隐私协议 (NDA)：</strong>
                      乙方严格遵循零知识保密原则，通过官方代付邀请或一次性授权开通，严禁亦不记录客户主账号密码；客户在 GPT-6 Astra 中产生的所有研发代码、业务文档与知识资产所有权 100% 归属于甲方。
                    </div>
                  </div>

                  {/* Signature Area with Red Corporate Electronic Seal */}
                  <div className="relative pt-4 border-t border-theme-subtle grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <div className="text-tertiary">甲方（采购方）：【客户企业全称】</div>
                      <div className="text-tertiary">法定代表人 / 授权代表：【客户代表】</div>
                      <div className="text-tertiary font-mono">电子印章状态：待签署 / 已通过 CA 数字证书</div>
                    </div>

                    <div className="space-y-1">
                      <div className="text-tertiary">乙方（服务方）：成都游手科技有限公司</div>
                      <div className="text-tertiary">法定代表人 / 授权代表：梁某某</div>
                      <div className="text-primary font-mono text-[11px] font-medium">
                        电子印章状态：已加盖合同专用电子印章（国密算法防篡改）
                      </div>
                    </div>

                    {/* Realistic Red Contract Seal (拟真红色合同专用章) */}
                    <div className="absolute right-4 sm:right-12 bottom-1 pointer-events-none select-none opacity-85 dark:opacity-90 transform rotate-[4deg]">
                      <div className="w-28 h-28 rounded-full border-[2.5px] border-rose-600 text-rose-600 flex flex-col items-center justify-center p-1 shadow-xs bg-rose-500/[0.02]">
                        <div className="text-[8px] font-bold text-center scale-90 leading-tight">
                          成都游手科技有限公司
                        </div>
                        <div className="my-0.5 text-base text-rose-600 font-sans">★</div>
                        <div className="text-[9.5px] font-extrabold tracking-widest border-t border-rose-600/70 pt-0.5">
                          合同专用章
                        </div>
                        <div className="text-[7.5px] font-mono scale-75 text-rose-600/90">
                          (CA 权威数字证书)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-secondary bg-surface-elevated border border-theme-subtle p-3 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-[#10A37F] shrink-0" />
                  <span>支持双方通过正规第三方权威电子签章（具有纸质公章同等法律效力）在线秒签，亦可顺丰快递寄送加盖实体公章的纸质合同。</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
