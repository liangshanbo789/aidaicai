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
      description: "畅享最新 GPT-6 Astra 与 GPT-5.6 前沿旗舰，满足出海电商文案主笔、日常翻译、海外客服及职能部门的高频交互需求。",
      features: [
        "优先接入最新 GPT-6 Astra 旗舰基石模型",
        "GPT-5.6 (Sol / Terra) 稳定高频调用与智能路由",
        "高峰期免排队优先响应网络与高维记忆库",
        "高级数据分析 (Python) 与多模态高清图像生成",
        "支持企业员工现有个人邮箱直接官方直充",
      ],
      highlight: false,
    },
    {
      id: "pro5x",
      name: "ChatGPT Pro (5x)",
      tagline: "中度算力攻坚与百万 Token 长文本",
      icon: Zap,
      iconColor: "text-secondary",
      badge: "进阶生产力",
      badgeColor: "bg-surface-elevated text-secondary border-theme-subtle",
      officialPrice: "$100 / 月",
      startingPrice: "¥ 690",
      priceUnit: "/月/账号 (含税阶梯价)",
      description: "适合资深独立站运营、高级研发工程及需要超长大上下文并行研判的业务核心人员。",
      features: [
        "5 倍于 Plus 版本的 GPT-6 Astra 与 GPT-5.6 频次限额",
        "支持 GPT-6 Astra 深度思考推理与长程规划",
        "支持 100 万 (1M Token) 超长上下文记忆分析",
        "Deep Research 深度全网科研级调研能力",
        "支持按月/按季灵活调整账号分配",
      ],
      highlight: false,
    },
    {
      id: "pro20x",
      name: "ChatGPT Pro (20x 旗舰版)",
      tagline: "OpenAI $200 顶配 GPT-6 Astra 满血极限算力",
      icon: Cpu,
      iconColor: "text-amber-500 dark:text-amber-400",
      badge: "研发与算法团队标配",
      badgeColor: "bg-amber-500/10 text-amber-600 dark:text-amber-300 border-amber-500/30",
      officialPrice: "$200 / 月",
      startingPrice: "¥ 1,380",
      priceUnit: "/月/账号 (含税阶梯价)",
      description: "专为算法科学家、系统架构师及攻坚团队打造。搭载最新 GPT-6 Astra 满血旗舰与顶级深度推理集群。",
      features: [
        "搭载 OpenAI 满血旗舰 GPT-6 Astra (代号 Astra)",
        "20 倍海量配额 / 极限算力，最高优先级极速计算",
        "突破性 Computer Operator 智能体操控与多步工程",
        "解决超高难度数学、复杂系统架构设计与代码审计",
        "专属高端商业卡段绑定，附带大客户战略集采礼包",
      ],
      highlight: true,
    },
    {
      id: "team",
      name: "ChatGPT Team 空间",
      tagline: "企业数据隔离与全员 GPT-6 权限中控",
      icon: Users,
      iconColor: "text-emerald-600 dark:text-emerald-400",
      badge: "数据不入训",
      badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
      officialPrice: "$30 / 人 / 月",
      startingPrice: "¥ 235",
      priceUnit: "/人/月 (2人起订)",
      description: "适合 5 人以上研发及商业敏感型团队，统一掌控工作空间，数据严密隔离不参与训练。",
      features: [
        "全员享有 GPT-6 Astra 与 GPT-5.6 前沿模型能力",
        "企业内部商业数据与代码默认完全不参与模型训练",
        "企业管理员后台（统一调配席位/一键回收离职账号）",
        "共享团队内部专属企业 GPTs 知识库与工作区工作流",
        "统一出具一张对公汇总发票与按月/按季账单",
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
