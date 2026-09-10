export type BillingCycle = "monthly" | "quarterly" | "yearly";

export interface TierPrice {
  monthly: number;
  quarterly: number;
  yearly: number;
}

export interface ProductPricingConfig {
  id: "plus" | "pro5x" | "pro20x" | "team";
  name: string;
  tagline: string;
  badge: string;
  badgeColor: string;
  officialUsd: number;
  officialPriceDisplay: string;
  minSeats: number;
  baseMonthlyRmb: number; // 1~4席月付基准价 (单席对公基准价)
  lowestPriceRmb: number; // 大客户集采低至价 (20+席年付)
  perkPerSeatMonth: number;
  description: string;
  features: string[];
  highlight?: boolean;
  tiers: {
    individual: TierPrice; // 1~4 席
    team: TierPrice;       // 5~19 席
    enterprise: TierPrice; // 20+ 席
  };
}

export const PRODUCTS_CONFIG: Record<string, ProductPricingConfig> = {
  plus: {
    id: "plus",
    name: "ChatGPT Plus",
    tagline: "个人账号转企业统一报销首选",
    badge: "高频普及款",
    badgeColor: "bg-surface-elevated text-secondary border-theme-subtle",
    officialUsd: 20,
    officialPriceDisplay: "$20 / 月",
    minSeats: 1,
    baseMonthlyRmb: 165,
    lowestPriceRmb: 125,
    perkPerSeatMonth: 15,
    description: "畅享最新 GPT-6 Astra 与 GPT-5.6 前沿旗舰，满足出海电商文案主笔、日常翻译、海外客服及职能部门的高频交互需求。",
    features: [
      "优先接入最新 GPT-6 Astra 旗舰基石模型",
      "GPT-5.6 (Sol / Terra) 稳定高频调用与智能路由",
      "高峰期免排队优先响应网络与高维记忆库",
      "高级数据分析 (Python) 与多模态高清图像生成",
      "支持企业员工现有个人邮箱直接官方直充",
    ],
    highlight: false,
    tiers: {
      individual: { monthly: 165, quarterly: 155, yearly: 145 },
      team: { monthly: 155, quarterly: 145, yearly: 135 },
      enterprise: { monthly: 145, quarterly: 135, yearly: 125 },
    },
  },
  pro5x: {
    id: "pro5x",
    name: "ChatGPT Pro (5x)",
    tagline: "中度算力攻坚与百万 Token 长文本",
    badge: "进阶生产力",
    badgeColor: "bg-surface-elevated text-secondary border-theme-subtle",
    officialUsd: 100,
    officialPriceDisplay: "$100 / 月",
    minSeats: 1,
    baseMonthlyRmb: 790,
    lowestPriceRmb: 610,
    perkPerSeatMonth: 60,
    description: "适合资深独立站运营、高级研发工程及需要超长大上下文并行研判的业务核心人员。",
    features: [
      "5 倍于 Plus 版本的 GPT-6 Astra 与 GPT-5.6 频次限额",
      "支持 GPT-6 Astra 深度思考推理与长程规划",
      "支持 100 万 (1M Token) 超长上下文记忆分析",
      "Deep Research 深度全网科研级调研能力",
      "支持按月/按季灵活调整账号分配",
    ],
    highlight: false,
    tiers: {
      individual: { monthly: 790, quarterly: 740, yearly: 690 },
      team: { monthly: 740, quarterly: 690, yearly: 650 },
      enterprise: { monthly: 690, quarterly: 650, yearly: 610 },
    },
  },
  pro20x: {
    id: "pro20x",
    name: "ChatGPT Pro (20x 旗舰版)",
    tagline: "OpenAI $200 顶配 GPT-6 Astra 满血极限算力",
    badge: "研发与算法团队标配",
    badgeColor: "bg-amber-500/10 text-amber-600 dark:text-amber-300 border-amber-500/30",
    officialUsd: 200,
    officialPriceDisplay: "$200 / 月",
    minSeats: 1,
    baseMonthlyRmb: 1580,
    lowestPriceRmb: 1190,
    perkPerSeatMonth: 120,
    description: "专为算法科学家、系统架构师及攻坚团队打造。搭载最新 GPT-6 Astra 满血旗舰与顶级深度推理集群。",
    features: [
      "搭载 OpenAI 满血旗舰 GPT-6 Astra (代号 Astra)",
      "20 倍海量配额 / 极限算力，最高优先级极速计算",
      "突破性 Computer Operator 智能体操控与多步工程",
      "解决超高难度数学、复杂系统架构设计与代码审计",
      "专属高端商业卡段绑定，附带大客户战略集采礼包",
    ],
    highlight: true,
    tiers: {
      individual: { monthly: 1580, quarterly: 1480, yearly: 1390 },
      team: { monthly: 1480, quarterly: 1390, yearly: 1290 },
      enterprise: { monthly: 1380, quarterly: 1290, yearly: 1190 },
    },
  },
  team: {
    id: "team",
    name: "ChatGPT Team 空间",
    tagline: "企业数据隔离与全员 GPT-6 权限中控",
    badge: "数据不入训",
    badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    officialUsd: 30,
    officialPriceDisplay: "$30 / 人 / 月",
    minSeats: 2,
    baseMonthlyRmb: 245,
    lowestPriceRmb: 185,
    perkPerSeatMonth: 25,
    description: "适合 5 人以上研发及商业敏感型团队，统一掌控工作空间，数据严密隔离不参与训练。",
    features: [
      "全员享有 GPT-6 Astra 与 GPT-5.6 前沿模型能力",
      "企业内部商业数据与代码默认完全不参与模型训练",
      "企业管理员后台（统一调配席位/一键回收离职账号）",
      "共享团队内部专属企业 GPTs 知识库与工作区工作流",
      "统一出具一张对公汇总发票与按月/按季账单",
    ],
    highlight: false,
    tiers: {
      individual: { monthly: 245, quarterly: 230, yearly: 215 },
      team: { monthly: 230, quarterly: 215, yearly: 198 },
      enterprise: { monthly: 215, quarterly: 198, yearly: 185 },
    },
  },
};

export interface QuotationResult {
  product: ProductPricingConfig;
  seats: number;
  billingCycle: BillingCycle;
  cycleMonths: number;
  cycleName: string;
  tierType: "individual" | "team" | "enterprise";
  tierLabel: string;
  unitPrice: number;
  rawTotalWithoutDiscount: number;
  totalAmount: number;
  totalSavings: number;
  totalPerksAmount: number;
}

export function calculateQuotation(
  productId: string,
  rawSeats: number,
  billingCycle: BillingCycle
): QuotationResult {
  const product = PRODUCTS_CONFIG[productId] || PRODUCTS_CONFIG.pro20x;
  const seats = Math.max(rawSeats, product.minSeats);

  let tierType: "individual" | "team" | "enterprise" = "individual";
  let tierLabel = "基础单席阶梯";

  if (seats >= 20) {
    tierType = "enterprise";
    tierLabel = "🔥 已触发大客户集采阶梯 (最高立减 25%)";
  } else if (seats >= 5) {
    tierType = "team";
    tierLabel = "👍 已触发团队优惠阶梯";
  }

  let cycleMonths = 1;
  let cycleName = "按月结算";
  if (billingCycle === "quarterly") {
    cycleMonths = 3;
    cycleName = "按季度结算 (推荐)";
  } else if (billingCycle === "yearly") {
    cycleMonths = 12;
    cycleName = "按年度结算 (特惠)";
  }

  const unitPrice = product.tiers[tierType][billingCycle];
  const rawTotalWithoutDiscount = product.baseMonthlyRmb * seats * cycleMonths;
  const totalAmount = unitPrice * seats * cycleMonths;
  const totalSavings = rawTotalWithoutDiscount - totalAmount;
  const totalPerksAmount = product.perkPerSeatMonth * seats * cycleMonths;

  return {
    product,
    seats,
    billingCycle,
    cycleMonths,
    cycleName,
    tierType,
    tierLabel,
    unitPrice,
    rawTotalWithoutDiscount,
    totalAmount,
    totalSavings,
    totalPerksAmount,
  };
}
