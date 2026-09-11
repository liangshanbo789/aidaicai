"use client";

import React, { useState, useEffect, useMemo } from "react";
import { PRODUCTS_CONFIG, calculateQuotation, BillingCycle } from "@/config/pricing";
import {
  Calculator,
  Play,
  Pause,
  Sparkles,
  TrendingDown,
  Gift,
  Receipt,
  Building2,
  CheckCircle2,
} from "lucide-react";

// 预设自动轮播演示序列
const DEMO_STEPS: Array<{ productId: string; seats: number; cycle: BillingCycle }> = [
  { productId: "plus", seats: 1, cycle: "quarterly" },
  { productId: "plus", seats: 5, cycle: "quarterly" },
  { productId: "plus", seats: 20, cycle: "yearly" },
  { productId: "pro5x", seats: 3, cycle: "quarterly" },
  { productId: "pro5x", seats: 10, cycle: "yearly" },
  { productId: "pro20x", seats: 1, cycle: "quarterly" },
  { productId: "pro20x", seats: 5, cycle: "yearly" },
  { productId: "team", seats: 5, cycle: "yearly" },
  { productId: "team", seats: 20, cycle: "yearly" },
];

export default function LiveAutoCalculator() {
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true);
  const [stepIndex, setStepIndex] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);

  // 手动/自动状态
  const [selectedProduct, setSelectedProduct] = useState<string>("plus");
  const [seats, setSeats] = useState<number>(5);
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("quarterly");

  const toggleAutoPlay = (active: boolean) => {
    setIsAutoPlay(active);
    if (!active) {
      setProgress(0);
    }
  };

  // 自动轮播步进定时器
  useEffect(() => {
    if (!isAutoPlay) {
      return;
    }

    const INTERVAL = 6000; // 每 6 秒切换一次
    const TICK = 100;
    let elapsed = 0;

    const timer = setInterval(() => {
      elapsed += TICK;
      setProgress(Math.min(100, Math.round((elapsed / INTERVAL) * 100)));

      if (elapsed >= INTERVAL) {
        elapsed = 0;
        setStepIndex((prev) => {
          const nextIndex = (prev + 1) % DEMO_STEPS.length;
          const nextStep = DEMO_STEPS[nextIndex];
          setSelectedProduct(nextStep.productId);
          setSeats(nextStep.seats);
          setBillingCycle(nextStep.cycle);
          return nextIndex;
        });
      }
    }, TICK);

    return () => clearInterval(timer);
  }, [isAutoPlay]);

  // 计算当前方案报价
  const quotation = useMemo(() => {
    return calculateQuotation(selectedProduct, seats, billingCycle);
  }, [selectedProduct, seats, billingCycle]);

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

  // 财务税费分解 (6% 专票)
  const taxExclusive = Math.round((totalAmount / 1.06) * 100) / 100;
  const taxAmount = Math.round((totalAmount - taxExclusive) * 100) / 100;

  return (
    <div className="bg-[#12141a]/95 border border-zinc-800 rounded-xl p-5 shadow-2xl relative overflow-hidden backdrop-blur-md">
      {/* 顶部指示条与控制开关 */}
      <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <span>企业阶梯采购预算实时核算器</span>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-normal">
                {tierLabel}
              </span>
            </h2>
            <p className="text-xs text-zinc-400">
              采购规模越大、签约周期越长，综合单价越低 · 支持随时公对公转账
            </p>
          </div>
        </div>

        {/* 自动演示暂停/开启控制 */}
        <button
          onClick={() => toggleAutoPlay(!isAutoPlay)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
            isAutoPlay
              ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/20"
              : "bg-zinc-800 text-zinc-300 border-zinc-700 hover:bg-zinc-700"
          }`}
          title={isAutoPlay ? "点击暂停自动演示，进入手动测算" : "点击启动自动演示"}
        >
          {isAutoPlay ? (
            <>
              <Pause className="w-3.5 h-3.5" />
              <span>
                自动演示 {stepIndex + 1}/{DEMO_STEPS.length} ({Math.round(progress)}%)
              </span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5" />
              <span>启动自动轮播</span>
            </>
          )}
        </button>
      </div>

      {/* 自动演示步进倒计时进度条 */}
      {isAutoPlay && (
        <div className="w-full h-1 bg-zinc-850 absolute top-0 left-0">
          <div
            className="h-full bg-emerald-500 transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {/* 主体交互区域 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-4">
        {/* 左侧选择面板 (7 列) */}
        <div className="lg:col-span-7 space-y-4">
          {/* 版本选择器 */}
          <div>
            <label className="text-xs text-zinc-400 block mb-2 font-medium">
              1. 选择采购规格版本 (官方原装直充)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {Object.values(PRODUCTS_CONFIG).map((p) => {
                const isSelected = selectedProduct === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => {
                      setIsAutoPlay(false);
                      setSelectedProduct(p.id);
                      setSeats(Math.max(seats, p.minSeats));
                    }}
                    className={`p-2.5 rounded-lg text-left transition-all border cursor-pointer ${
                      isSelected
                        ? "bg-emerald-950/40 border-emerald-500 text-white shadow-lg ring-1 ring-emerald-500/50"
                        : "bg-zinc-900/60 border-zinc-800 text-zinc-300 hover:border-zinc-700"
                    }`}
                  >
                    <div className="text-[11px] font-semibold truncate">{p.name}</div>
                    <div className="text-[10px] text-zinc-400 mt-0.5">{p.officialPriceDisplay}</div>
                    <div className="text-[11px] font-mono text-emerald-400 font-bold mt-1">
                      低至 ¥{p.lowestPriceRmb}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 席位数滑块与快速席位按钮 */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs text-zinc-400 font-medium">
                2. 采购席位数量：
                <span className="text-sm font-bold text-white font-mono ml-1">{seats} 席</span>
              </label>
              <div className="flex gap-1.5">
                {[1, 5, 10, 20, 50].map((num) => {
                  if (num < product.minSeats) return null;
                  return (
                    <button
                      key={num}
                      onClick={() => {
                        setIsAutoPlay(false);
                        setSeats(num);
                      }}
                      className={`px-2 py-0.5 rounded text-[11px] font-mono font-medium border cursor-pointer ${
                        seats === num
                          ? "bg-emerald-500 text-zinc-950 border-emerald-400 font-bold"
                          : "bg-zinc-850 text-zinc-300 border-zinc-750 hover:bg-zinc-800"
                      }`}
                    >
                      {num}人
                    </button>
                  );
                })}
              </div>
            </div>

            <input
              type="range"
              min={product.minSeats}
              max={100}
              value={seats}
              onChange={(e) => {
                setIsAutoPlay(false);
                setSeats(Number(e.target.value));
              }}
              className="w-full accent-emerald-500 cursor-pointer h-2 bg-zinc-800 rounded-lg appearance-none"
            />
            <div className="flex justify-between text-[10px] text-zinc-400 font-mono mt-1">
              <span>{product.minSeats} 席起订</span>
              <span>10 席</span>
              <span>30 席</span>
              <span>50 席</span>
              <span>100+ 席大客户定制</span>
            </div>
          </div>

          {/* 结算周期切换 */}
          <div>
            <label className="text-xs text-zinc-400 block mb-2 font-medium">
              3. 结算付款周期 (签约周期越长，优惠力度越大)
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: "monthly", name: "月度采购 (1个月)", tag: "标准阶梯" },
                { id: "quarterly", name: "季度采购 (3个月)", tag: "加赠立省 ¥" },
                { id: "yearly", name: "年度战略 (12个月)", tag: "最低单价极客价" },
              ].map((cycle) => {
                const isSelected = billingCycle === cycle.id;
                return (
                  <button
                    key={cycle.id}
                    onClick={() => {
                      setIsAutoPlay(false);
                      setBillingCycle(cycle.id as BillingCycle);
                    }}
                    className={`p-2 rounded-lg border text-center transition-all cursor-pointer ${
                      isSelected
                        ? "bg-zinc-800 border-emerald-500 text-white font-medium shadow"
                        : "bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    <div className="text-xs font-medium">{cycle.name}</div>
                    <div
                      className={`text-[10px] mt-0.5 ${
                        isSelected ? "text-emerald-400" : "text-zinc-400"
                      }`}
                    >
                      {cycle.tag}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 右侧实时核算结果卡片 (5 列) */}
        <div className="lg:col-span-5 bg-zinc-900/90 border border-emerald-500/30 rounded-xl p-4 flex flex-col justify-between shadow-xl relative">
          <div className="absolute top-3 right-3">
            <span className="flex items-center gap-1 text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              官方 Invoice + 6% 专票
            </span>
          </div>

          <div>
            <div className="text-xs text-zinc-400 font-mono">
              含税结算核算单价 (席位/月)
            </div>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-3xl font-extrabold font-mono text-emerald-400 tracking-tight">
                ¥ {unitPrice}
              </span>
              <span className="text-xs text-zinc-400 font-mono">
                / 月 / 席位
              </span>
              {totalSavings > 0 && (
                <span className="text-[11px] font-mono text-emerald-300 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20 flex items-center gap-0.5">
                  <TrendingDown className="w-3 h-3" />
                  已享阶梯减免
                </span>
              )}
            </div>

            {/* 核心金额统计面板 */}
            <div className="mt-4 space-y-2 py-3 border-y border-zinc-800 text-xs font-mono">
              <div className="flex justify-between text-zinc-300">
                <span className="text-zinc-400">采购总席位及周期：</span>
                <span className="font-semibold text-white">
                  {currentSeats} 席 × {cycleName} ({cycleMonths} 个月)
                </span>
              </div>
              <div className="flex justify-between text-zinc-300">
                <span className="text-zinc-400">不含税金额：</span>
                <span>¥ {taxExclusive.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
              </div>
              <div className="flex justify-between text-zinc-300">
                <span className="text-zinc-400">6% 增值税额 (进项抵扣)：</span>
                <span className="text-amber-400">¥ {taxAmount.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
              </div>
              <div className="flex justify-between items-baseline pt-1">
                <span className="text-sm font-bold text-white">合同含税对公总额：</span>
                <span className="text-xl font-bold font-mono text-white">
                  ¥ {totalAmount.toLocaleString()}
                </span>
              </div>
            </div>

            {/* 阶梯省钱与权益激励 */}
            <div className="mt-3 space-y-1.5">
              {totalSavings > 0 && (
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/30 p-2 rounded border border-emerald-900/50">
                  <Sparkles className="w-4 h-4 flex-shrink-0" />
                  <span>
                    相比零散月付，该方案累计为企业节省 <b>¥ {totalSavings.toLocaleString()}</b> 元预算
                  </span>
                </div>
              )}
              <div className="flex items-center gap-1.5 text-xs text-blue-300 bg-blue-950/20 p-2 rounded border border-blue-900/40">
                <Gift className="w-4 h-4 flex-shrink-0 text-blue-400" />
                <span>
                  赠送企业级 1v1 大客户经理响应及技术保障（价值约 ¥ {totalPerksAmount.toLocaleString()}）
                </span>
              </div>
            </div>
          </div>

          {/* 底部保障小字 */}
          <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400">
            <span className="flex items-center gap-1">
              <Building2 className="w-3.5 h-3.5 text-zinc-400" />
              支持工行网银对公转账
            </span>
            <span className="flex items-center gap-1">
              <Receipt className="w-3.5 h-3.5 text-zinc-400" />
              开具 6% 软件技术服务费专票
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
