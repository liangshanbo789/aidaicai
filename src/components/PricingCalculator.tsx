"use client";

import React, { useState, useId } from "react";
import { Calculator, Gift, FileSpreadsheet, Copy, Check, Info, Building2 } from "lucide-react";
import { PRODUCTS_CONFIG, calculateQuotation, BillingCycle } from "@/config/pricing";

interface PricingCalculatorProps {
  selectedProductId: string;
  onOpenContact: (source?: string) => void;
}

export default function PricingCalculator({ selectedProductId, onOpenContact }: PricingCalculatorProps) {
  const [productType, setProductType] = useState<string>(selectedProductId || "pro20x");
  const [seats, setSeats] = useState<number>(5);
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("quarterly");
  const [copied, setCopied] = useState(false);
  const seatsSliderId = useId();

  React.useEffect(() => {
    if (selectedProductId && PRODUCTS_CONFIG[selectedProductId]) {
      setProductType(selectedProductId);
      // Ensure seats not below new product's minSeats
      const targetMin = PRODUCTS_CONFIG[selectedProductId].minSeats;
      setSeats((prev) => Math.max(prev, targetMin));
    }
  }, [selectedProductId]);

  const quotation = calculateQuotation(productType, seats, billingCycle);
  const {
    product,
    seats: currentSeats,
    unitPrice,
    totalAmount,
    totalSavings,
    totalPerksAmount,
    cycleMonths,
    cycleName,
    tierLabel,
  } = quotation;

  // 阶梯价格差额激励计算
  const currentIndivPrice = product.tiers.individual[billingCycle];
  const currentTeamPrice = product.tiers.team[billingCycle];
  const currentEnterprisePrice = product.tiers.enterprise[billingCycle];

  const handleCopySummary = () => {
    const summaryText = `【AI代采 (aidaicai.com) - 企业采购预算草案】
采购版本：${product.name} (${product.officialPriceDisplay})
采购席位数：${currentSeats} 个
结算周期：${cycleName} (${cycleMonths} 个月)
最终结算单价：¥ ${unitPrice} 元/月/席位 (含 6% 增值税专票)
合同含税总额：¥ ${totalAmount.toLocaleString()} 元
阶梯优惠节省：¥ ${totalSavings.toLocaleString()} 元 (采购越多单价越低)
增值服务权益：附赠专属技术响应保障及大客户定制增值方案（价值约 ¥ ${totalPerksAmount.toLocaleString()} 元）
服务时效承诺：7×24 小时全天候顾问与技术团队轮守，≤15分钟极速交付
付款方式：企业银行公对公转账
资质保障：签署 72 小时封号退赔、保密协议 (NDA) 及正式采购合同`;

    navigator.clipboard.writeText(summaryText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const productList = [
    { id: "plus", label: "Plus", desc: "$20/月" },
    { id: "pro5x", label: "Pro (5x)", desc: "$100/月" },
    { id: "pro20x", label: "Pro (20x)", desc: "$200/月 旗舰" },
    { id: "team", label: "Team 空间", desc: "$30/人/月" },
  ];

  return (
    <section id="calculator" className="py-20 bg-canvas border-t border-theme-subtle transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="codex-pill mb-3">
            <Calculator className="w-3.5 h-3.5 text-[#10A37F]" />
            <span>实时阶梯价格测算引擎 · 席位越多单价越低</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-primary tracking-tight mb-4">
            透明测算企业采购成本与大宗集采优惠
          </h2>
          <p className="text-sm sm:text-base text-secondary">
            采购账号席位越多、结算周期越长，单席成本越低，自动触发阶梯立减。报价全含 6% 增值税专票及 7×24 小时全天候交付保障。
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
                {productList.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setProductType(item.id);
                      const targetMin = PRODUCTS_CONFIG[item.id]?.minSeats || 1;
                      setSeats((prev) => Math.max(prev, targetMin));
                    }}
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

            {/* Step 2: Seats Count Slider & Tier Matrix */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor={seatsSliderId} className="text-xs font-semibold text-secondary uppercase tracking-wider">
                  2. 采购账号席位数 (当前: {currentSeats} 席)
                </label>
                <span className="text-xs text-emerald-600 dark:text-[#10A37F] font-mono font-medium">
                  {tierLabel}
                </span>
              </div>

              {/* 3 档阶梯对比矩阵看板（可视化单价递减，支持一键点击跳档） */}
              <div className="grid grid-cols-3 gap-2.5 mb-3">
                {[
                  {
                    name: "1~4 席",
                    label: "标准起购",
                    price: currentIndivPrice,
                    active: currentSeats < 5,
                    targetSeats: Math.max(product.minSeats, 1),
                    tag: "基准价",
                  },
                  {
                    name: "5~19 席",
                    label: "团队阶梯",
                    price: currentTeamPrice,
                    active: currentSeats >= 5 && currentSeats < 20,
                    targetSeats: 5,
                    tag: `省 ${Math.round((1 - currentTeamPrice / currentIndivPrice) * 100)}%`,
                  },
                  {
                    name: "20+ 席",
                    label: "大客户底价",
                    price: currentEnterprisePrice,
                    active: currentSeats >= 20,
                    targetSeats: 20,
                    tag: `省 ${Math.round((1 - currentEnterprisePrice / currentIndivPrice) * 100)}%`,
                  },
                ].map((tier, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSeats(tier.targetSeats)}
                    className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer relative ${
                      tier.active
                        ? "border-emerald-500/60 bg-surface-hover text-primary shadow-xs ring-1 ring-emerald-500/30"
                        : "border-theme-subtle bg-surface-elevated text-secondary hover:border-theme-hover hover:text-primary"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-semibold text-primary">{tier.name}</span>
                      <span
                        className={`text-[9px] font-mono px-1.5 py-0.2 rounded-full font-medium ${
                          tier.active
                            ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
                            : "bg-surface text-secondary border border-theme-subtle"
                        }`}
                      >
                        {tier.tag}
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm font-mono font-bold text-primary">
                      ¥{tier.price}
                      <span className="text-[10px] font-normal text-secondary">/席/月</span>
                    </div>
                    <div className="text-[10px] text-secondary mt-0.5">{tier.label}</div>
                  </button>
                ))}
              </div>

              {/* 差额满减进阶提示条 */}
              <div className="p-2.5 rounded-lg bg-surface border border-theme-subtle flex items-center justify-between text-xs mb-3">
                {currentSeats < 5 ? (
                  <div className="flex items-center justify-between w-full">
                    <span className="text-secondary text-[11px] flex items-center gap-1.5">
                      <span className="text-amber-500">💡</span>
                      <span>
                        再增配 <strong className="text-primary font-semibold">{5 - currentSeats} 席</strong>，即可升级团队阶梯，每席再降{" "}
                        <strong className="text-emerald-600 dark:text-emerald-400 font-mono font-semibold">
                          ¥{currentIndivPrice - currentTeamPrice}/月
                        </strong>
                      </span>
                    </span>
                    <button
                      type="button"
                      onClick={() => setSeats(5)}
                      className="text-[10px] text-emerald-600 dark:text-[#10A37F] font-semibold hover:underline cursor-pointer ml-2 whitespace-nowrap"
                    >
                      升至 5 席 →
                    </button>
                  </div>
                ) : currentSeats < 20 ? (
                  <div className="flex items-center justify-between w-full">
                    <span className="text-secondary text-[11px] flex items-center gap-1.5">
                      <span className="text-amber-500">🔥</span>
                      <span>
                        仅差 <strong className="text-primary font-semibold">{20 - currentSeats} 席</strong>，即解锁大客户底价，每席再省{" "}
                        <strong className="text-emerald-600 dark:text-emerald-400 font-mono font-semibold">
                          ¥{currentTeamPrice - currentEnterprisePrice}/月
                        </strong>{" "}
                        + 送增值礼包
                      </span>
                    </span>
                    <button
                      type="button"
                      onClick={() => setSeats(20)}
                      className="text-[10px] text-emerald-600 dark:text-[#10A37F] font-semibold hover:underline cursor-pointer ml-2 whitespace-nowrap"
                    >
                      升至 20 席 →
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                    <span>🎉</span>
                    <span>已享最高「战略大宗集采底价」，累计已优惠 ¥{totalSavings.toLocaleString()} 元！</span>
                  </div>
                )}
              </div>

              {/* 滑块 */}
              <div className="space-y-3">
                <input
                  id={seatsSliderId}
                  type="range"
                  min={product.minSeats}
                  max={50}
                  value={currentSeats}
                  onChange={(e) => setSeats(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-surface-hover rounded-lg appearance-none cursor-pointer accent-[#10A37F]"
                />
                <div className="relative w-full h-5 text-[11px] font-mono select-none">
                  {[
                    { value: product.minSeats, label: `${product.minSeats} 起购` },
                    { value: 5, label: "5 席 (团队)" },
                    { value: 10, label: "10 席" },
                    { value: 20, label: "20 席 (集采底价)" },
                    { value: 50, label: "50+ 席" },
                  ].map((mark) => {
                    const min = product.minSeats;
                    const max = 50;
                    const percent = Math.max(0, Math.min(100, ((mark.value - min) / (max - min)) * 100));
                    const isSelected = currentSeats === mark.value;
                    const isMin = mark.value === min;
                    const isMax = mark.value === max;

                    return (
                      <button
                        key={mark.value}
                        type="button"
                        onClick={() => setSeats(mark.value)}
                        className={`absolute transition-colors cursor-pointer hover:text-primary ${
                          isSelected
                            ? "text-emerald-600 dark:text-[#10A37F] font-semibold"
                            : "text-secondary"
                        }`}
                        style={{
                          left: isMin ? "0%" : isMax ? "auto" : `${percent}%`,
                          right: isMax ? "0%" : "auto",
                          transform: isMin || isMax ? "none" : "translateX(-50%)",
                        }}
                      >
                        {mark.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Step 3: Billing Cycle */}
            <div>
              <label className="block text-xs font-semibold text-secondary uppercase tracking-wider mb-3">
                3. 结算周期模式 (长订折上折)
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: "monthly", title: "按月结算", note: "灵活月结" },
                  { id: "quarterly", title: "按季度结算", note: "团队优选 (立减)", rec: true },
                  { id: "yearly", title: "按年度结算", note: "低至底价 (折上折)", rec: false },
                ].map((cycle) => (
                  <button
                    key={cycle.id}
                    onClick={() => setBillingCycle(cycle.id as BillingCycle)}
                    className={`p-3 rounded-xl border text-center transition-all relative cursor-pointer ${
                      billingCycle === cycle.id
                        ? "border-emerald-500/50 bg-surface-hover text-primary shadow-xs font-semibold ring-1 ring-emerald-500/30"
                        : "border-theme-subtle bg-surface-elevated text-secondary hover:border-theme-hover hover:text-primary"
                    }`}
                  >
                    {cycle.rec && (
                      <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-[#09090B] dark:bg-white text-white dark:text-zinc-900 text-[9px] font-semibold px-2 py-0.2 rounded-full shadow-xs">
                        推荐
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
                报价均含：<strong className="text-primary font-medium">6% 增值税专用发票</strong>、<strong className="text-primary font-medium">7×24 小时全天候交付与响应</strong>、海外商业银行真实信用卡结算成本、<strong className="text-primary font-medium">72 小时封号兜底退赔</strong>及大客户专属服务通道。
              </span>
            </div>
          </div>

          {/* Right Column: Dynamic Quotation Receipt (5 cols) */}
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
                <span className="font-medium text-primary">{product.name}</span>
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
                  ¥ {unitPrice} <span className="text-[10px] text-secondary font-normal">/月/席位</span>
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

            {/* Procurement Perk Box */}
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
