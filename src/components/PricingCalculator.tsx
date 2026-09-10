"use client";

import React, { useState, useId } from "react";
import { Calculator, Gift, FileSpreadsheet, Copy, Check, Info, Building2 } from "lucide-react";

interface PricingCalculatorProps {
  selectedProductId: string;
  onOpenContact: (source?: string) => void;
}

export default function PricingCalculator({ selectedProductId, onOpenContact }: PricingCalculatorProps) {
  const [productType, setProductType] = useState<string>(selectedProductId || "pro20x");
  const [seats, setSeats] = useState<number>(5);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "quarterly" | "yearly">("quarterly");
  const [copied, setCopied] = useState(false);
  const seatsSliderId = useId();

  React.useEffect(() => {
    if (selectedProductId) {
      setProductType(selectedProductId);
    }
  }, [selectedProductId]);

  const getBaseConfig = () => {
    switch (productType) {
      case "plus":
        return {
          name: "ChatGPT Plus",
          officialUsd: 20,
          baseMonthlyRmb: 165,
          perkPerSeatMonth: 15,
          minSeats: 1,
        };
      case "pro5x":
        return {
          name: "ChatGPT Pro (5x)",
          officialUsd: 50,
          baseMonthlyRmb: 390,
          perkPerSeatMonth: 40,
          minSeats: 1,
        };
      case "pro20x":
        return {
          name: "ChatGPT Pro (20x 旗舰版)",
          officialUsd: 200,
          baseMonthlyRmb: 1580,
          perkPerSeatMonth: 120,
          minSeats: 1,
        };
      case "team":
        return {
          name: "ChatGPT Team 企业空间",
          officialUsd: 30,
          baseMonthlyRmb: 245,
          perkPerSeatMonth: 25,
          minSeats: 2,
        };
      default:
        return {
          name: "ChatGPT Pro (20x 旗舰版)",
          officialUsd: 200,
          baseMonthlyRmb: 1580,
          perkPerSeatMonth: 120,
          minSeats: 1,
        };
    }
  };

  const config = getBaseConfig();
  const currentSeats = Math.max(seats, config.minSeats);

  let volumeDiscountRate = 1.0;
  if (currentSeats >= 20) {
    volumeDiscountRate = 0.88;
  } else if (currentSeats >= 10) {
    volumeDiscountRate = 0.92;
  } else if (currentSeats >= 5) {
    volumeDiscountRate = 0.95;
  }

  let cycleMonths = 1;
  let cycleDiscountRate = 1.0;
  let cycleName = "按月结算";

  if (billingCycle === "quarterly") {
    cycleMonths = 3;
    cycleDiscountRate = 0.94;
    cycleName = "按季度结算 (推荐)";
  } else if (billingCycle === "yearly") {
    cycleMonths = 12;
    cycleDiscountRate = 0.88;
    cycleName = "按年度结算 (特惠)";
  }

  const rawTotalWithoutDiscount = config.baseMonthlyRmb * currentSeats * cycleMonths;
  const finalUnitPrice = Math.round(config.baseMonthlyRmb * volumeDiscountRate * cycleDiscountRate);
  const totalAmount = finalUnitPrice * currentSeats * cycleMonths;
  const totalSavings = rawTotalWithoutDiscount - totalAmount;
  const totalPerksAmount = config.perkPerSeatMonth * currentSeats * cycleMonths;

  const handleCopySummary = () => {
    const summaryText = `【AI代采 (aidaicai.com) - 企业采购预算草案】
采购版本：${config.name}
采购席位数：${currentSeats} 个
结算周期：${cycleName} (${cycleMonths} 个月)
最终结算单价：¥ ${finalUnitPrice} 元/月/席位 (含 6% 增值税专票)
合同含税总额：¥ ${totalAmount.toLocaleString()} 元
阶梯优惠节省：¥ ${totalSavings.toLocaleString()} 元
增值服务权益：附赠专属技术响应保障及大客户定制增值方案（价值约 ¥ ${totalPerksAmount.toLocaleString()} 元）
付款方式：企业银行公对公转账
资质保障：签署 72 小时封号退赔、保密协议 (NDA) 及正式采购合同`;

    navigator.clipboard.writeText(summaryText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <section id="calculator" className="py-20 bg-canvas border-t border-theme-subtle transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="codex-pill mb-3">
            <Calculator className="w-3.5 h-3.5 text-[#10A37F]" />
            <span>实时阶梯价格测算引擎</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-primary tracking-tight mb-4">
            透明测算企业采购成本与集采增值权益
          </h2>
          <p className="text-sm sm:text-base text-secondary">
            选择采购产品、账号席位数与结算周期，实时获取含 6% 增值税专用发票对公结算价及战略集采专属增值方案。
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Interactive Controls (7 cols) */}
          <div className="lg:col-span-7 codex-panel p-6 sm:p-8 space-y-6 border-theme-subtle">
            {/* Step 1: Product Selection */}
            <div>
              <label className="block text-xs font-semibold text-secondary uppercase tracking-wider mb-3">
                1. 选择采购产品版本
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: "plus", label: "Plus", desc: "$20/月" },
                  { id: "pro5x", label: "Pro (5x)", desc: "$50/月" },
                  { id: "pro20x", label: "Pro (20x)", desc: "$200/月 旗舰" },
                  { id: "team", label: "Team 空间", desc: "$30/人/月" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setProductType(item.id)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      productType === item.id
                        ? "border-emerald-500/50 bg-surface-hover text-primary shadow-xs font-semibold ring-1 ring-emerald-500/30"
                        : "border-theme-subtle bg-surface-elevated text-secondary hover:border-theme-hover hover:text-primary"
                    }`}
                  >
                    <div className="font-semibold text-xs sm:text-sm text-primary">{item.label}</div>
                    <div className="text-[10px] text-secondary mt-0.5 font-mono">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Seats Count Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor={seatsSliderId} className="text-xs font-semibold text-secondary uppercase tracking-wider">
                  2. 采购账号席位数 (当前: {currentSeats} 个)
                </label>
                <span className="text-xs text-emerald-600 dark:text-[#10A37F] font-mono font-medium">
                  {currentSeats >= 20 ? "🔥 已触发大客户阶梯 88 折" : currentSeats >= 10 ? "✨ 已触发 92 折优惠" : currentSeats >= 5 ? "👍 已触发 95 折优惠" : "基础阶梯"}
                </span>
              </div>
              <div className="space-y-3">
                <input
                  id={seatsSliderId}
                  type="range"
                  min={config.minSeats}
                  max={50}
                  value={currentSeats}
                  onChange={(e) => setSeats(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-surface-hover rounded-lg appearance-none cursor-pointer accent-[#10A37F]"
                />
                <div className="flex justify-between text-[11px] text-secondary font-mono">
                  <span>{config.minSeats} 起购</span>
                  <span>5 席</span>
                  <span>10 席 (研发标配)</span>
                  <span>20 席</span>
                  <span>50+ 席</span>
                </div>
              </div>
            </div>

            {/* Step 3: Billing Cycle */}
            <div>
              <label className="block text-xs font-semibold text-secondary uppercase tracking-wider mb-3">
                3. 结算周期模式
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: "monthly", title: "按月结算", note: "灵活月结" },
                  { id: "quarterly", title: "按季度结算", note: "额外再省 6%", rec: true },
                  { id: "yearly", title: "按年度结算", note: "额外再省 12%", rec: false },
                ].map((cycle) => (
                  <button
                    key={cycle.id}
                    onClick={() => setBillingCycle(cycle.id as any)}
                    className={`p-3 rounded-xl border text-center transition-all relative cursor-pointer ${
                      billingCycle === cycle.id
                        ? "border-emerald-500/50 bg-surface-hover text-primary shadow-xs font-semibold ring-1 ring-emerald-500/30"
                        : "border-theme-subtle bg-surface-elevated text-secondary hover:border-theme-hover hover:text-primary"
                    }`}
                  >
                    {cycle.rec && (
                      <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-[#09090B] dark:bg-white text-white dark:text-zinc-900 text-[9px] font-semibold px-2 py-0.2 rounded-full shadow-xs">
                        热荐
                      </span>
                    )}
                    <div className="font-semibold text-xs sm:text-sm text-primary">{cycle.title}</div>
                    <div className="text-[10px] text-emerald-600 dark:text-[#10A37F] mt-0.5 font-medium">{cycle.note}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Tips Bar */}
            <div className="p-3.5 rounded-xl bg-surface-elevated border border-theme-subtle flex items-start gap-2.5 text-xs text-secondary">
              <Info className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
              <span>
                报价均含：<strong className="text-primary font-medium">6% 增值税专用发票</strong>、海外商业银行真实信用卡结算成本、<strong className="text-primary font-medium">72 小时封号兜底退赔</strong>及大客户企业微信专属支持通道。
              </span>
            </div>
          </div>

          {/* Right Column: Dynamic Quotation Receipt (5 cols) - OpenAI Console Style */}
          <div className="lg:col-span-5 codex-panel p-6 sm:p-8 border-theme-subtle bg-surface shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-theme-subtle">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-secondary" />
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">企业采购试算单</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-medium">
                可对公转账 · 专票
              </span>
            </div>

            {/* Pricing Summary Breakdown */}
            <div className="py-5 space-y-3 text-xs sm:text-sm border-b border-theme-subtle">
              <div className="flex justify-between items-center text-secondary">
                <span>选定版本</span>
                <span className="font-medium text-primary">{config.name}</span>
              </div>
              <div className="flex justify-between items-center text-secondary">
                <span>采购席位数</span>
                <span className="text-primary">{currentSeats} 个账号</span>
              </div>
              <div className="flex justify-between items-center text-secondary">
                <span>结算周期</span>
                <span className="text-primary">{cycleMonths} 个月 ({cycleName})</span>
              </div>
              <div className="flex justify-between items-center text-secondary">
                <span>折后对公单价</span>
                <span className="font-semibold text-primary">
                  ¥ {finalUnitPrice} <span className="text-[10px] text-secondary font-normal">/月/席位</span>
                </span>
              </div>
              {totalSavings > 0 && (
                <div className="flex justify-between items-center text-emerald-600 dark:text-emerald-400 text-xs font-medium">
                  <span>阶梯与周期已优惠</span>
                  <span className="font-mono">- ¥ {totalSavings.toLocaleString()}</span>
                </div>
              )}
            </div>

            {/* Total Contract Amount */}
            <div className="py-5">
              <div className="text-xs text-secondary mb-1">本次合同对公应付款 (含税)</div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-semibold text-primary tracking-tight">
                  ¥ {totalAmount.toLocaleString()}
                </span>
                <span className="text-xs text-secondary font-mono">RMB</span>
              </div>
              <p className="text-[11px] text-secondary mt-1">
                发票类目：*信息技术服务* 软件技术服务费 (进项抵扣 6%)
              </p>
            </div>

            {/* Procurement Perk Box (Subtle Amber Glow) */}
            <div className="p-4 rounded-xl border border-amber-500/30 bg-amber-500/[0.05] dark:border-amber-400/25 dark:bg-amber-400/[0.04] mb-6">
              <div className="flex items-center gap-2 mb-1.5">
                <Gift className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
                <span className="text-xs font-semibold text-amber-700 dark:text-amber-300">企业战略集采增值礼遇</span>
              </div>
              <div className="text-lg font-bold text-primary mb-1">
                包含价值约 ¥ {totalPerksAmount.toLocaleString()} 元增值服务权益
              </div>
              <p className="text-[11px] text-secondary leading-relaxed">
                随单附赠企业专属顾问通道、一对一运维响应，并尊享大客户定制增值礼遇包（支持按企业需求灵活选配）。
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5">
              <button
                onClick={handleCopySummary}
                className="btn-openai-white w-full text-xs sm:text-sm !py-2.5 flex items-center justify-center gap-2 cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? "方案已复制到剪贴板！" : "复制采购预算方案摘要"}</span>
              </button>

              <button
                onClick={() => onOpenContact("calculator-quote")}
                className="btn-openai-secondary w-full text-xs !py-2 flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileSpreadsheet className="w-3.5 h-3.5 text-secondary" />
                <span>获取盖公章的正式《采购报价确认单》</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
