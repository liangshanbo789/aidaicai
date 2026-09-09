"use client";

import React, { useState } from "react";
import { Receipt, Building2, CreditCard, FileCheck2, ShieldCheck, CheckCircle } from "lucide-react";

export default function ComplianceShowcase() {
  const [activeTab, setActiveTab] = useState<"invoice" | "bank" | "openai" | "contract">("invoice");

  return (
    <section id="compliance" className="py-20 border-t border-theme-subtle bg-canvas transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="codex-pill mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-[#10A37F]" />
            <span>财务闭环与合规验真</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-primary tracking-tight mb-4">
            全链路阳光合规 · 经得起财务与审计穿透
          </h2>
          <p className="text-sm sm:text-base text-secondary">
            拒绝任何灰色操作。我们为每一笔企业代采提供正规增值税专用发票、银行对公回单与 OpenAI 官方账单核验。
          </p>
        </div>

        {/* Tab Selector (Codex Capsule Pills) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: "invoice", label: "数电增值税专用发票 (6%)", icon: Receipt },
            { id: "bank", label: "银行对公转账电子回执", icon: Building2 },
            { id: "openai", label: "OpenAI 官方扣费账单核验", icon: CreditCard },
            { id: "contract", label: "企业盖章 SLA 兜底协议", icon: FileCheck2 },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#09090B] dark:bg-white text-white dark:text-zinc-950 font-semibold shadow-xs"
                    : "bg-surface-elevated text-secondary border border-theme-subtle hover:bg-surface-hover hover:text-primary"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Display Panel - Terminal / Verification Inspector */}
        <div className="codex-panel max-w-4xl mx-auto border-theme-subtle bg-surface overflow-hidden shadow-xl">
          {/* Top Window Chrome */}
          <div className="px-5 py-3 border-b border-theme-subtle bg-surface-elevated flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-400 dark:bg-zinc-600" />
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-400 dark:bg-zinc-600" />
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-400 dark:bg-zinc-600" />
              <span className="ml-2 text-[11px] font-mono text-secondary">
                verification-sandbox / {activeTab}-sample.pdf
              </span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-medium">
              AUDIT VERIFIED
            </span>
          </div>

          <div className="p-6 sm:p-8">
            {/* TAB 1: VAT INVOICE */}
            {activeTab === "invoice" && (
              <div className="space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-dashed border-theme-subtle gap-2">
                  <div>
                    <div className="text-[11px] font-mono text-emerald-600 dark:text-[#10A37F] uppercase tracking-wider font-medium">
                      国家税务总局全国增值税发票查验平台认证
                    </div>
                    <h3 className="text-base font-semibold text-primary mt-0.5">
                      电子发票（增值税专用发票）样张
                    </h3>
                  </div>
                  <div className="text-right text-[11px] font-mono text-secondary">
                    发票代码: 011002400711<br />
                    开票日期: 2026年09月08日
                  </div>
                </div>

                {/* Invoice Layout Mock */}
                <div className="bg-surface-elevated border border-theme-subtle rounded-xl p-5 text-xs text-secondary font-mono space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4 border-b border-theme-subtle">
                    <div className="space-y-1">
                      <span className="text-tertiary">购买方名称：</span>【贵司企业全称】<br />
                      <span className="text-tertiary">统一信用代码：</span>91110108MA01XXXXX<br />
                      <span className="text-tertiary">开户行及账号：</span>招商银行股份有限公司北京分行...
                    </div>
                    <div className="space-y-1">
                      <span className="text-tertiary">销售方名称：</span>AI代采（信息技术）服务有限公司<br />
                      <span className="text-tertiary">纳税人识别号：</span>91110105MAXXXXXXXX<br />
                      <span className="text-tertiary">开户行及账号：</span>中国工商银行股份有限公司上海张江支行
                    </div>
                  </div>

                  {/* Line Items */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="border-b border-theme-subtle text-secondary">
                          <th className="py-2">货物或应税劳务名称</th>
                          <th className="py-2">规格型号</th>
                          <th className="py-2 text-right">金额 (RMB)</th>
                          <th className="py-2 text-center">税率</th>
                          <th className="py-2 text-right">税额 (RMB)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-theme-subtle">
                        <tr>
                          <td className="py-2.5 text-primary font-sans font-medium">
                            *信息技术服务* 软件技术服务费 (ChatGPT Pro企业采购)
                          </td>
                          <td className="py-2.5 text-secondary">NX-2026-PRO</td>
                          <td className="py-2.5 text-right font-mono text-primary font-medium">¥ 14,150.94</td>
                          <td className="py-2.5 text-center text-emerald-600 dark:text-emerald-400 font-medium">6%</td>
                          <td className="py-2.5 text-right font-mono text-emerald-600 dark:text-emerald-400 font-medium">¥ 849.06</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="flex justify-between items-center pt-3 border-t border-theme-subtle text-xs sm:text-sm">
                    <span className="text-secondary">价税合计（大写）：人民币壹万伍仟元整</span>
                    <span className="font-semibold text-primary text-base">（小写）¥ 15,000.00</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-secondary bg-surface-elevated border border-theme-subtle p-3 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-[#10A37F] shrink-0" />
                  <span>付款到账后 2 个工作日内开具数电专票，直达财务邮箱，完全满足国内一般纳税人进项税额抵扣需求。</span>
                </div>
              </div>
            )}

            {/* TAB 2: BANK RECEIPT */}
            {activeTab === "bank" && (
              <div className="space-y-5">
                <div className="pb-3 border-b border-dashed border-theme-subtle">
                  <div className="text-[11px] font-mono text-secondary uppercase tracking-wider font-medium">
                    企业银行网银对公电子回单
                  </div>
                  <h3 className="text-base font-semibold text-primary mt-0.5">
                    银行公对公转账电子凭证样张
                  </h3>
                </div>

                <div className="bg-surface-elevated border border-theme-subtle rounded-xl p-5 text-xs text-secondary font-mono space-y-3">
                  <div className="text-center font-bold text-sm text-primary pb-2 border-b border-theme-subtle">
                    招商银行电子转账回单 (对公汇款结算)
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-tertiary">付款人户名：</span>【客户企业全称】<br />
                      <span className="text-tertiary">付款人账号：</span>6225 **** **** 1088<br />
                      <span className="text-tertiary">付款行名称：</span>招商银行科技园支行
                    </div>
                    <div>
                      <span className="text-tertiary">收款人户名：</span>AI代采信息技术服务有限公司<br />
                      <span className="text-tertiary">收款人账号：</span>1001 **** **** 8820<br />
                      <span className="text-tertiary">收款行名称：</span>中国工商银行张江科技支行
                    </div>
                  </div>
                  <div className="pt-2 border-t border-theme-subtle flex justify-between items-center text-xs sm:text-sm">
                    <div>
                      <span className="text-tertiary">款项用途 / 摘要：</span>
                      <span className="text-primary font-sans">海外软件采购服务费及运维保障款</span>
                    </div>
                    <div className="text-emerald-600 dark:text-emerald-400 font-semibold font-mono">
                      转账金额：¥ 15,000.00
                    </div>
                  </div>
                  <div className="text-[11px] text-tertiary pt-1">
                    业务流水号: 20260909001882947192 · 印章状态: 【已加盖招商银行回单电子专用章】
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-secondary bg-surface-elevated border border-theme-subtle p-3 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-[#10A37F] shrink-0" />
                  <span>全程走阳光合规的企业银行账户体系，杜绝私人二维码收款及财务审计隐患。</span>
                </div>
              </div>
            )}

            {/* TAB 3: OPENAI INVOICE */}
            {activeTab === "openai" && (
              <div className="space-y-5">
                <div className="pb-3 border-b border-dashed border-theme-subtle">
                  <div className="text-[11px] font-mono text-secondary uppercase tracking-wider font-medium">
                    OpenAI LLC 官方控制台扣费核验
                  </div>
                  <h3 className="text-base font-semibold text-primary mt-0.5">
                    官方 Invoice 扣款凭据与正规商业卡绑定样张
                  </h3>
                </div>

                <div className="bg-surface-elevated border border-theme-subtle rounded-xl p-5 text-xs text-secondary font-mono space-y-3.5">
                  <div className="flex justify-between items-center pb-3 border-b border-theme-subtle">
                    <span className="font-semibold text-primary text-sm">OpenAI, LLC · Receipt</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[11px] font-medium">
                      PAID · $200.00
                    </span>
                  </div>
                  <div className="space-y-1 text-secondary">
                    <div><strong className="text-primary font-medium">Invoice Number:</strong> in_1Q9m92LLk9x829108</div>
                    <div><strong className="text-primary font-medium">Customer Email:</strong> dev-lead@yourcompany.com (客户企业指定邮箱)</div>
                    <div><strong className="text-primary font-medium">Payment Method:</strong> Visa Commercial Business Card (ending in 8892)</div>
                    <div><strong className="text-primary font-medium">Description:</strong> ChatGPT Pro Subscription (1 month)</div>
                    <div><strong className="text-primary font-medium">Amount Charged:</strong> $200.00 USD</div>
                  </div>
                  <div className="pt-2 border-t border-theme-subtle text-[11px] text-tertiary flex justify-between">
                    <span>Merchant: Stripe Payments for OpenAI</span>
                    <span>扣费链路合规 · 绝非黑卡盗刷</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-secondary bg-surface-elevated border border-theme-subtle p-3 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-[#10A37F] shrink-0" />
                  <span>每一笔订阅均可向企业提供 OpenAI 官方后台原版 Invoice PDF，卡号与账单完全匹配，确保账号长期稳定不被溯源封禁。</span>
                </div>
              </div>
            )}

            {/* TAB 4: CONTRACT & SLA */}
            {activeTab === "contract" && (
              <div className="space-y-5">
                <div className="pb-3 border-b border-dashed border-theme-subtle">
                  <div className="text-[11px] font-mono text-secondary uppercase tracking-wider font-medium">
                    具备法律效力之框架合作协议
                  </div>
                  <h3 className="text-base font-semibold text-primary mt-0.5">
                    企业盖章版《SLA 服务等级与封号兜底协议》
                  </h3>
                </div>

                <div className="bg-surface-elevated border border-theme-subtle rounded-xl p-5 text-xs text-secondary space-y-3">
                  <div className="font-semibold text-primary text-sm border-b border-theme-subtle pb-2">
                    关键保障条款摘录（加盖合同专用电子印章）：
                  </div>
                  <div className="space-y-2 text-secondary leading-relaxed">
                    <p>
                      <strong className="text-primary">第四条 4.2 封号包赔兜底：</strong>
                      若非甲方违规虐待模型导致的官方风控封禁，乙方严格承诺在 24 小时内免费更换补齐全新账号；或按照当月剩余未使用天数，1 个工作日内将折算款项原路全额退还至甲方银行对公账户。
                    </p>
                    <p>
                      <strong className="text-primary">第五条 5.1 数据保密协议 (NDA)：</strong>
                      乙方严格遵循零知识保密原则，不保留甲方主登录密码，绝不窥探、收集、转让甲方账号内产生之任何代码、技术资产与业务数据。
                    </p>
                  </div>
                  <div className="pt-3 border-t border-theme-subtle flex justify-between items-center text-xs text-secondary">
                    <span>签署方式：腾讯电子签 / 契约锁 CA 权威数字证书认证</span>
                    <span className="text-primary font-medium">法律效力对等纸质公章</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-secondary bg-surface-elevated border border-theme-subtle p-3 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-[#10A37F] shrink-0" />
                  <span>支持双方通过正规电子印章或纸质快递盖章，打消采购与法务合规顾虑。</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
