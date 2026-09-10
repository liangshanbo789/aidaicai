"use client";

import React, { useState, useId, useMemo } from "react";
import {
  Calculator,
  Gift,
  FileSpreadsheet,
  Copy,
  Check,
  Info,
  Building2,
  Printer,
  X,
  ShieldCheck,
  Lock,
  ExternalLink,
} from "lucide-react";
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
  const [showOfficialModal, setShowOfficialModal] = useState(false);
  const [copiedModalText, setCopiedModalText] = useState(false);
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

  // 生成固定可溯源的报价单唯一流水编号 (Quote ID)
  const quoteId = useMemo(() => {
    return `QT-202609-${Math.abs(productType.length * 1000 + currentSeats * 23 + (billingCycle === "yearly" ? 900 : billingCycle === "quarterly" ? 500 : 100))}`;
  }, [productType, currentSeats, billingCycle]);

  // 阶梯价格差额激励计算
  const currentIndivPrice = product.tiers.individual[billingCycle];
  const currentTeamPrice = product.tiers.team[billingCycle];
  const currentEnterprisePrice = product.tiers.enterprise[billingCycle];

  const summaryText = `【AI代采 (aidaicai.com) - 企业采购预算草案】
报价单流水号：${quoteId}
报价有效期：自生成之日起 30 天内有效
采购版本：${product.name} (${product.officialPriceDisplay})
采购席位数：${currentSeats} 个
结算周期：${cycleName} (${cycleMonths} 个月)
最终结算单价：¥ ${unitPrice} 元/月/席位 (含 6% 增值税专票)
合同含税总额：¥ ${totalAmount.toLocaleString()} 元
阶梯优惠节省：¥ ${totalSavings.toLocaleString()} 元 (采购越多单价越低)
增值服务权益：附赠专属技术响应保障及大客户定制增值方案（价值约 ¥ ${totalPerksAmount.toLocaleString()} 元）
发票类目：*信息技术服务* 软件技术服务费 (进项税抵扣 6%)
开户行：中国工商银行股份有限公司上海张江科技支行
付款方式：企业银行公对公转账
资质保障：签署 72 小时封号退赔、保密协议 (NDA) 及正式采购合同`;

  const handleCopySummary = () => {
    navigator.clipboard.writeText(summaryText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleCopyModalText = () => {
    navigator.clipboard.writeText(summaryText).then(() => {
      setCopiedModalText(true);
      setTimeout(() => setCopiedModalText(false), 2500);
    });
  };

  const handlePrint = () => {
    window.print();
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
          <div className="lg:col-span-7 codex-panel p-6 sm:p-8 space-y-6 border-theme-subtle bg-surface">
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

              {/* 3 档阶梯对比矩阵看板 */}
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

          {/* Right Column: Dynamic Quotation Receipt (5 cols) - Official Commercial Format */}
          <div className="lg:col-span-5 codex-panel p-6 sm:p-7 border-theme-subtle bg-surface shadow-2xl relative overflow-hidden">
            {/* Background Watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.03] dark:opacity-[0.04] text-5xl font-bold tracking-widest text-primary rotate-[-25deg]">
              OFFICIAL QUOTATION
            </div>

            {/* Header with Quote ID */}
            <div className="flex items-center justify-between pb-4 border-b border-theme-subtle">
              <div>
                <div className="flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-secondary" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">企业采购正式试算单</span>
                </div>
                <div className="text-[10px] font-mono text-tertiary mt-0.5">
                  流水单号: {quoteId}
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-medium">
                网银公对公 · 6%专票
              </span>
            </div>

            {/* Pricing Summary Breakdown */}
            <div className="py-4 space-y-2.5 text-xs sm:text-sm border-b border-theme-subtle font-mono">
              <div className="flex justify-between items-center text-secondary font-sans">
                <span>选定版本</span>
                <span className="font-semibold text-primary">{product.name}</span>
              </div>
              <div className="flex justify-between items-center text-secondary font-sans">
                <span>采购席位数</span>
                <span className="text-primary font-semibold">{currentSeats} 个账号</span>
              </div>
              <div className="flex justify-between items-center text-secondary font-sans">
                <span>结算周期</span>
                <span className="text-primary font-semibold">{cycleMonths} 个月 ({cycleName})</span>
              </div>
              <div className="flex justify-between items-center text-secondary font-sans">
                <span>折后对公单价</span>
                <span className="font-bold text-primary font-mono">
                  ¥ {unitPrice} <span className="text-[10px] text-secondary font-normal font-sans">/月/席位</span>
                </span>
              </div>
              {totalSavings > 0 && (
                <div className="flex justify-between items-center text-emerald-600 dark:text-emerald-400 text-xs font-medium font-sans">
                  <span>阶梯与周期已优惠</span>
                  <span className="font-mono font-bold">- ¥ {totalSavings.toLocaleString()}</span>
                </div>
              )}
            </div>

            {/* Total Contract Amount with Red Seal Stamp Overlay */}
            <div className="relative py-4 border-b border-theme-subtle">
              <div className="text-xs text-secondary mb-1">本次合同对公应付款 (含税)</div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-bold text-primary tracking-tight font-mono">
                  ¥ {totalAmount.toLocaleString()}
                </span>
                <span className="text-xs text-secondary font-mono">RMB</span>
              </div>
              <p className="text-[11px] text-secondary mt-1">
                发票类目：*信息技术服务* 软件技术服务费 (进项抵扣 6%)
              </p>

              {/* Red Quotation Stamp (拟真商务报价专用章印模) */}
              <div className="absolute right-0 bottom-1 pointer-events-none select-none opacity-85 dark:opacity-90 transform rotate-[-6deg]">
                <div className="w-24 h-24 rounded-full border-2 border-rose-600 text-rose-600 flex flex-col items-center justify-center p-1 shadow-xs bg-rose-500/[0.02]">
                  <div className="text-[7px] font-bold text-center scale-90 leading-tight">
                    AI代采（信息技术）服务有限公司
                  </div>
                  <div className="my-0.5 text-xs text-rose-600 font-sans">★</div>
                  <div className="text-[8px] font-extrabold tracking-wider border-t border-rose-600/70 pt-0.5">
                    商务报价专用章
                  </div>
                  <div className="text-[6.5px] font-mono scale-75 text-rose-600/90">
                    30天保价有效
                  </div>
                </div>
              </div>
            </div>

            {/* Procurement Perk Box */}
            <div className="p-3.5 rounded-xl border border-amber-500/30 bg-amber-500/[0.05] dark:border-amber-400/25 dark:bg-amber-400/[0.04] my-4">
              <div className="flex items-center gap-1.5 mb-1">
                <Gift className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
                <span className="text-xs font-semibold text-amber-700 dark:text-amber-300">企业战略集采增值礼遇</span>
              </div>
              <div className="text-sm sm:text-base font-bold text-primary mb-1">
                附赠价值约 ¥ {totalPerksAmount.toLocaleString()} 元增值服务权益
              </div>
              <p className="text-[11px] text-secondary leading-relaxed">
                随单附赠企业专属顾问通道、一对一运维响应，并尊享大客户定制增值礼遇包。
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2">
              <button
                onClick={() => setShowOfficialModal(true)}
                className="btn-openai-white w-full text-xs sm:text-sm !py-2.5 flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <FileSpreadsheet className="w-4 h-4" />
                <span>生成正式《采购报价确认函》预览</span>
              </button>

              <button
                onClick={handleCopySummary}
                className="btn-openai-secondary w-full text-xs !py-2 flex items-center justify-center gap-2 cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "方案摘要已复制！" : "复制采购预算方案摘要"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== OFFICIAL QUOTE PREVIEW MODAL ==================== */}
      {showOfficialModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-md animate-fade-in"
          onClick={() => setShowOfficialModal(false)}
        >
          <div
            className="bg-surface border border-theme-subtle rounded-2xl w-full max-w-3xl max-h-[92vh] overflow-y-auto shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="p-4 sm:p-5 border-b border-theme-subtle bg-surface-elevated flex items-center justify-between sticky top-0 z-10">
              <div className="flex items-center gap-2">
                <FileSpreadsheet className="w-4 h-4 text-[#10A37F]" />
                <span className="font-semibold text-sm sm:text-base text-primary">正式采购报价确认函（企业呈批格式）</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="btn-openai-secondary text-xs !py-1.5 !px-3 hidden sm:flex items-center gap-1 cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>打印 / 另存为PDF</span>
                </button>
                <button
                  onClick={() => setShowOfficialModal(false)}
                  className="text-secondary hover:text-primary p-1.5 rounded-lg hover:bg-surface-hover cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Formal Quotation Paper Body (A4 Style) */}
            <div className="p-6 sm:p-8 space-y-6 text-xs text-secondary font-mono bg-white text-zinc-800 selection:bg-[#10A37F]/20 relative">
              {/* Paper Watermark */}
              <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center opacity-[0.04] text-6xl font-bold tracking-widest text-zinc-950 rotate-[-20deg]">
                AIDAICAI QUOTATION
              </div>

              {/* Title & Metadata */}
              <div className="border-b-2 border-zinc-900 pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3">
                <div>
                  <div className="text-xl sm:text-2xl font-bold font-sans tracking-tight text-zinc-950">
                    AI 代采 (aidaicai.com) 官方采购报价确认单
                  </div>
                  <div className="text-xs text-zinc-500 font-sans mt-0.5">
                    企业级海外 AI 生产力工具代采与对公技术服务解决方案
                  </div>
                </div>
                <div className="text-left sm:text-right text-[11px] text-zinc-600">
                  <div><strong>报价单编号：</strong>{quoteId}</div>
                  <div><strong>生成日期：</strong>2026年09月10日</div>
                  <div><strong>报价有效期：</strong>30 个自然日</div>
                </div>
              </div>

              {/* Buyer & Seller Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4 border-b border-zinc-200">
                <div className="space-y-1">
                  <div className="font-bold text-zinc-950 font-sans text-xs">【采购方企业 (客户)】</div>
                  <div>名称：【客户企业全称】</div>
                  <div>付款方式：企业网上银行公对公转账</div>
                  <div>发票需求：增值税专用发票 (6% 税率)</div>
                </div>
                <div className="space-y-1">
                  <div className="font-bold text-zinc-950 font-sans text-xs">【供应商企业】</div>
                  <div>名称：AI代采（信息技术）服务有限公司</div>
                  <div>开户银行：中国工商银行股份有限公司上海张江科技支行</div>
                  <div>银行账号：1001 2488 **** **** 8820</div>
                </div>
              </div>

              {/* Table of Items */}
              <div>
                <div className="font-bold text-zinc-950 font-sans mb-2">采购清单与阶梯报价明细：</div>
                <table className="w-full text-left text-xs border border-zinc-300">
                  <thead className="bg-zinc-100 text-zinc-800">
                    <tr className="border-b border-zinc-300">
                      <th className="p-2.5">标的产品名称</th>
                      <th className="p-2.5 text-center">采购席位</th>
                      <th className="p-2.5 text-center">服务周期</th>
                      <th className="p-2.5 text-right">折后结算单价</th>
                      <th className="p-2.5 text-right">含税小计金额</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200">
                    <tr>
                      <td className="p-2.5 font-sans">
                        <strong className="text-zinc-950">{product.name}</strong>
                        <div className="text-[10px] text-zinc-500 font-mono">官方标价: {product.officialPriceDisplay} · 含 6% 专票</div>
                      </td>
                      <td className="p-2.5 text-center">{currentSeats} 席</td>
                      <td className="p-2.5 text-center">{cycleName} ({cycleMonths}个月)</td>
                      <td className="p-2.5 text-right">¥ {unitPrice} /月/席</td>
                      <td className="p-2.5 text-right font-bold text-zinc-950">¥ {totalAmount.toLocaleString()} 元</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Cost Summary & Perks */}
              <div className="bg-zinc-50 border border-zinc-200 p-4 rounded-lg space-y-2">
                <div className="flex justify-between items-center text-sm font-sans">
                  <span>合同总金额（大写）：</span>
                  <span className="font-bold text-zinc-950">
                    人民币 ¥ {totalAmount.toLocaleString()} 元整（含 6% 增值税专票）
                  </span>
                </div>
                {totalSavings > 0 && (
                  <div className="flex justify-between items-center text-xs text-emerald-700 font-sans">
                    <span>阶梯集采及周期优惠立减：</span>
                    <span className="font-bold">- ¥ {totalSavings.toLocaleString()} 元</span>
                  </div>
                )}
                <div className="flex justify-between items-center text-xs text-amber-800 font-sans">
                  <span>附赠企业战略集采增值礼遇：</span>
                  <span>价值约 ¥ {totalPerksAmount.toLocaleString()} 元（专属顾问通道与技术支持包）</span>
                </div>
              </div>

              {/* Service & Legal Guarantees */}
              <div className="space-y-1.5 text-[11px] text-zinc-600 leading-relaxed font-sans pt-2 border-t border-zinc-200">
                <div className="font-bold text-zinc-950">服务履约承诺与保障条款：</div>
                <div>1. <strong>开票规范：</strong>款到后 2 个工作日内向客户开具“*信息技术服务* 软件技术服务费” 6% 增值税专用发票；</div>
                <div>2. <strong>支付通道：</strong>100% 采用正规海外商业银行企业信用卡结算，出具 OpenAI 官方扣费原版 Invoice；</div>
                <div>3. <strong>售后退赔：</strong>充值后 72 小时内风控包换；全周期内非违禁使用导致的异常，严格按当月剩余未生效天数 1 个工作日内公对公退款；</div>
                <div>4. <strong>数据安全：</strong>遵循零知识原则，不记录客户主密码，所有代码与 Prompt 知识产权归客户所有。</div>
              </div>

              {/* Red Corporate Stamp Seal */}
              <div className="relative pt-6 flex justify-between items-end">
                <div className="text-[11px] text-zinc-500 font-sans space-y-1">
                  <div>制单人：AI代采企业大客户商务部</div>
                  <div>核准人：大客户服务总监</div>
                  <div>服务热线：7×24H 企微顾问专班</div>
                </div>

                <div className="text-right">
                  <div className="text-xs font-bold font-sans text-zinc-950 mb-1">
                    AI代采（信息技术）服务有限公司
                  </div>
                  <div className="text-[10px] text-zinc-500">
                    （已加盖商务报价与比选确认专用电子印章）
                  </div>
                </div>

                {/* Red Official Stamp */}
                <div className="absolute right-0 bottom-0 pointer-events-none select-none opacity-90 transform rotate-[-4deg]">
                  <div className="w-28 h-28 rounded-full border-[2.5px] border-rose-600 text-rose-600 flex flex-col items-center justify-center p-1 bg-rose-500/[0.02]">
                    <div className="text-[7.5px] font-bold text-center scale-90 leading-tight">
                      AI代采（信息技术）服务有限公司
                    </div>
                    <div className="my-0.5 text-base text-rose-600 font-sans">★</div>
                    <div className="text-[9px] font-extrabold tracking-wider border-t border-rose-600/70 pt-0.5">
                      商务报价专用章
                    </div>
                    <div className="text-[7px] font-mono scale-75 text-rose-600/90">
                      (2026年业务核准)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="p-4 sm:p-5 border-t border-theme-subtle bg-surface-elevated flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-secondary">支持将本报价函提交至企业采购、法务与财务部门作为比选材料</span>
              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  onClick={handleCopyModalText}
                  className="btn-openai-secondary w-full sm:w-auto text-xs !py-2 cursor-pointer flex items-center justify-center gap-1.5"
                >
                  {copiedModalText ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedModalText ? "报价内容已复制" : "复制报价函文本"}</span>
                </button>
                <button
                  onClick={() => {
                    setShowOfficialModal(false);
                    onOpenContact("official-quote-modal");
                  }}
                  className="btn-openai-white w-full sm:w-auto text-xs !py-2 cursor-pointer whitespace-nowrap"
                >
                  索取 Word / PDF 盖公章原件
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
