"use client";

import React from "react";
import { Check, Sparkles, Zap, Cpu, Users, ArrowRight } from "lucide-react";

interface ProductCatalogProps {
  onSelectProduct: (productId: string) => void;
  onOpenContact: (source?: string) => void;
}

export default function ProductCatalog({ onSelectProduct, onOpenContact }: ProductCatalogProps) {
  const products = [
    {
      id: "plus",
      name: "ChatGPT Plus",
      tagline: "个人账号转企业统一报销首选",
      icon: Sparkles,
      iconColor: "text-secondary",
      badge: "高频普及款",
      badgeColor: "bg-surface-elevated text-secondary border-theme-subtle",
      officialPrice: "$20 / 月",
      startingPrice: "¥ 155",
      priceUnit: "/月/账号 (含税)",
      description: "满足出海电商文案主笔、日常翻译、海外客服及职能部门的高频交互需求。",
      features: [
        "GPT-4o / GPT-4o mini 稳定高频调用",
        "高峰期免排队优先响应网络",
        "高级数据分析 (Python Code Interpreter)",
        "DALL·E 3 高清商业图像生成",
        "支持企业员工现有个人邮箱直接直充",
      ],
      highlight: false,
    },
    {
      id: "pro5x",
      name: "ChatGPT Pro (5x)",
      tagline: "中度计算与研发长文本攻坚",
      icon: Zap,
      iconColor: "text-secondary",
      badge: "进阶生产力",
      badgeColor: "bg-surface-elevated text-secondary border-theme-subtle",
      officialPrice: "$50 / 月",
      startingPrice: "¥ 380",
      priceUnit: "/月/账号 (含税)",
      description: "适合资深独立站运营、研发代码调试及需要大上下文并行研判的业务核心人员。",
      features: [
        "5 倍于 Plus 版本的模型调用频次限额",
        "支持 o1-mini 深度思考推理模型",
        "超长大文本上下文记忆分析能力",
        "多任务并发处理，显著减少截断等待",
        "支持按月/按季灵活调整账号分配",
      ],
      highlight: false,
    },
    {
      id: "pro20x",
      name: "ChatGPT Pro (20x 旗舰版)",
      tagline: "OpenAI $200 顶配极限算力与深度推理",
      icon: Cpu,
      iconColor: "text-amber-500 dark:text-amber-400",
      badge: "研发与算法团队标配",
      badgeColor: "bg-amber-500/10 text-amber-600 dark:text-amber-300 border-amber-500/30",
      officialPrice: "$200 / 月",
      startingPrice: "¥ 1,380",
      priceUnit: "/月/账号 (含税阶梯价)",
      description: "专为算法科学家、系统架构师及攻坚团队打造。搭载最前沿 o1 / o3 满血深度推理能力。",
      features: [
        "OpenAI 官方满血 o1 / o3 深度逻辑推理模型",
        "无算力配额限制，最高优先级的极速计算",
        "解决超高难度数学、复杂系统架构与代码审计",
        "专属高端商业卡段绑定，稳定性保障最高级",
        "附带最高梯度的采购专属商务津贴礼包",
      ],
      highlight: true,
    },
    {
      id: "team",
      name: "ChatGPT Team 空间",
      tagline: "企业数据隔离与统一权限中控",
      icon: Users,
      iconColor: "text-emerald-600 dark:text-emerald-400",
      badge: "数据不入训",
      badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
      officialPrice: "$30 / 人 / 月",
      startingPrice: "¥ 235",
      priceUnit: "/人/月 (2人起订)",
      description: "适合 5 人以上研发及商业敏感型团队，由企业统一掌控工作空间与员工席位。",
      features: [
        "企业内部商业数据默认完全不参与模型训练",
        "企业管理员后台（统一调配席位/一键回收离职账号）",
        "共享团队内部专属 GPTs 知识库与工作区",
        "相比 Enterprise 版，开通门槛低、结算更灵活",
        "统一出具一张对公汇总发票与按月账单",
      ],
      highlight: false,
    },
  ];

  return (
    <section id="products" className="py-20 relative bg-canvas transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="codex-pill mb-3">
            <Cpu className="w-3.5 h-3.5 text-[#10A37F]" />
            <span>全版本官方代采与对公覆盖</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-primary tracking-tight mb-4">
            满足企业从日常应用到顶配研发的全部需求
          </h2>
          <p className="text-sm sm:text-base text-secondary">
            所有产品均使用正规商业卡段按需直充至企业指定账号，出具 6% 增值税专用发票并享受专属 SLA 兜底。
          </p>
        </div>

        {/* Product Cards Grid (OpenAI Model Spec Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product) => {
            const Icon = product.icon;
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
                  <div className={`p-2 rounded-lg bg-surface-elevated border border-theme-subtle ${product.iconColor}`}>
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

                  {/* Pricing Box */}
                  <div className="p-3.5 rounded-xl bg-surface-elevated border border-theme-subtle mb-5 shadow-xs">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-2xl font-bold text-primary tracking-tight">{product.startingPrice}</span>
                      <span className="text-xs text-secondary">{product.priceUnit}</span>
                    </div>
                    <div className="text-[11px] text-secondary mt-1 flex items-center justify-between font-mono">
                      <span>原价: {product.officialPrice}</span>
                      <span className="text-emerald-600 dark:text-[#10A37F] font-medium">含6%专票</span>
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
