"use client";

import React from "react";
import { Check, Sparkles, Zap, Cpu, Users, ArrowRight } from "lucide-react";
import { PRODUCTS_CONFIG, ProductPricingConfig } from "@/config/pricing";

interface ProductCatalogProps {
  onSelectProduct: (productId: string) => void;
  onOpenContact: (source?: string) => void;
}

const PRODUCT_ICONS: Record<string, { icon: React.ElementType; iconColor: string }> = {
  plus: {
    icon: Sparkles,
    iconColor: "text-secondary",
  },
  pro5x: {
    icon: Zap,
    iconColor: "text-secondary",
  },
  pro20x: {
    icon: Cpu,
    iconColor: "text-amber-500 dark:text-amber-400",
  },
  team: {
    icon: Users,
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
};

export default function ProductCatalog({ onSelectProduct, onOpenContact }: ProductCatalogProps) {
  const products: ProductPricingConfig[] = [
    PRODUCTS_CONFIG.plus,
    PRODUCTS_CONFIG.pro5x,
    PRODUCTS_CONFIG.pro20x,
    PRODUCTS_CONFIG.team,
  ];

  return (
    <section id="products" className="py-20 relative bg-canvas transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="codex-pill mb-3">
            <Cpu className="w-3.5 h-3.5 text-[#10A37F]" />
            <span>全版本官方代采 · 采购越多单价越低 · 7×24H 极速开通</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-primary tracking-tight mb-4">
            满足企业从日常应用到顶配研发的全部需求
          </h2>
          <p className="text-sm sm:text-base text-secondary">
            全系产品均支持阶梯批量集采：采购席位越多、结算周期越长，单席成本越低，最高可立减 25% 预算并赠大客户增值礼包。7×24 小时随时受理，出具 6% 增值税专用发票。
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product) => {
            const iconMeta = PRODUCT_ICONS[product.id] || { icon: Cpu, iconColor: "text-secondary" };
            const Icon = iconMeta.icon;

            return (
              <div
                key={product.id}
                className={`codex-panel-interactive flex flex-col justify-between p-6 relative ${
                  product.highlight
                    ? "border-amber-400/50 dark:border-amber-400/30 bg-gradient-to-b from-amber-500/[0.04] to-transparent dark:from-zinc-900 dark:to-[#121215]"
                    : "border-theme-subtle"
                }`}
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 rounded-lg bg-surface-elevated border border-theme-subtle ${iconMeta.iconColor}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full border ${product.badgeColor}`}>
                    {product.badge}
                  </span>
                </div>

                {/* Product Name & Tagline */}
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-1">{product.name}</h3>
                  <p className="text-xs text-secondary mb-4">{product.tagline}</p>

                  {/* Pricing Box - Direct Bulk Tier Matrix Display */}
                  <div className="p-3.5 rounded-xl bg-surface-elevated border border-theme-subtle mb-5 shadow-xs">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-medium text-secondary">单席对公基准价</span>
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-mono">
                        多买立减 · 量大从优
                      </span>
                    </div>

                    <div className="flex items-baseline gap-1.5 mb-2.5">
                      <span className="text-2xl font-bold text-primary tracking-tight">
                        ¥ {product.baseMonthlyRmb.toLocaleString()}
                      </span>
                      <span className="text-xs text-secondary">
                        {product.id === "team" ? "/人/月 (含税)" : "/月/席位 (含税)"}
                      </span>
                    </div>

                    {/* 阶梯价格梯度展示 */}
                    <div className="space-y-1.5 pt-2 border-t border-theme-subtle/60 text-[11px]">
                      <div className="flex justify-between items-center text-secondary">
                        <span className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                          <span>1~4 席 (月付基准)</span>
                        </span>
                        <span className="font-mono text-primary">¥{product.tiers.individual.monthly}/月</span>
                      </div>
                      <div className="flex justify-between items-center text-secondary">
                        <span className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          <span>5~19 席 (团队月付)</span>
                        </span>
                        <span className="font-mono text-emerald-600 dark:text-emerald-400 font-medium">¥{product.tiers.team.monthly}/月 (立减)</span>
                      </div>
                      <div className="flex justify-between items-center text-secondary">
                        <span className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                          <span>20+ 席 (年采购)</span>
                        </span>
                        <span className="font-mono text-amber-600 dark:text-amber-400 font-bold">¥{product.lowestPriceRmb}/月 (年采购特惠)</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-secondary mb-5 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2 mb-8">
                    {product.features.map((feat, fidx) => (
                      <div key={fidx} className="flex items-start gap-2 text-xs text-secondary">
                        <Check className="w-3.5 h-3.5 text-[#10A37F] shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-theme-subtle flex flex-col gap-2">
                  <button
                    onClick={() => onSelectProduct(product.id)}
                    className={`w-full py-2.5 rounded-full text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      product.highlight
                        ? "btn-openai-white !w-full"
                        : "btn-openai-secondary !w-full"
                    }`}
                  >
                    <span>测算采购成本</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onOpenContact(`product-${product.id}`)}
                    className="w-full py-1.5 text-[11px] text-secondary hover:text-primary transition-colors cursor-pointer"
                  >
                    咨询大客户专属对公方案
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
