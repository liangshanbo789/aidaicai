"use client";

import React, { useState, useEffect } from "react";
import {
  Receipt,
  Building2,
  CreditCard,
  FileCheck2,
  ShieldCheck,
  Stamp,
  BadgeCheck,
} from "lucide-react";

interface CredentialItem {
  id: "invoice" | "bank" | "openai" | "contract";
  title: string;
  badge: string;
  badgeColor: string;
  icon: React.ComponentType<{ className?: string }>;
  summary: string;
  details: Array<{ label: string; value: string; isHighlight?: boolean }>;
}

const CREDENTIALS: CredentialItem[] = [
  {
    id: "invoice",
    title: "国家税务总局 6% 数电增值税专用发票",
    badge: "全国发票查验平台 100% 验真",
    badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/20",
    icon: Receipt,
    summary: "正规开具 *信息技术服务* 软件技术服务费，一般纳税人可直接进项抵扣，彻底解决财务合规平账痛点。",
    details: [
      { label: "发票类型", value: "数电增值税专用发票 (电子)" },
      { label: "发票代码", value: "261120000000", isHighlight: true },
      { label: "发票号码", value: "88921820", isHighlight: true },
      { label: "税率/税额", value: "6% 增值税专票 (抵扣进项)" },
      { label: "查验官网", value: "全国增值税发票查验平台 (chinatax.gov.cn)" },
    ],
  },
  {
    id: "bank",
    title: "中国工商银行企业银行对公电子回单",
    badge: "正规公对公 · 杜绝个人垫资",
    badgeColor: "bg-blue-500/10 text-blue-300 border-blue-500/20",
    icon: Building2,
    summary: "100% 走中国工商银行对公结算账户转账，清晰银行流水，支持企业财务网银打款与内部审计审查。",
    details: [
      { label: "收款全称", value: "成都游手好闲科技有限公司", isHighlight: true },
      { label: "开户银行", value: "中国工商银行股份有限公司成都武侯大道支行" },
      { label: "银行账号", value: "1001 2488 0910 0088 820", isHighlight: true },
      { label: "款项用途", value: "技术服务费 / 软件代采款" },
      { label: "回单效力", value: "带工行防伪电子业务专用印章" },
    ],
  },
  {
    id: "openai",
    title: "OpenAI 官方原版商业实体卡 Invoice 账单",
    badge: "正规商业卡段直充 · 绝非黑卡",
    badgeColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    icon: CreditCard,
    summary: "每笔代充均由我司海外正规商业银行企业实体卡直付，交付带扣款流水号与卡号后四位的原版 Invoice 凭据。",
    details: [
      { label: "账单来源", value: "OpenAI, LLC (3180 18th St, San Francisco)" },
      { label: "支付渠道", value: "海外商业银行 Visa / Mastercard 实体企业专卡" },
      { label: "凭单内容", value: "带官方 Invoice 号、结算日期与卡号后四位", isHighlight: true },
      { label: "风控等级", value: "官方认证白名单直通卡段，绝无盗刷封禁风险" },
    ],
  },
  {
    id: "contract",
    title: "双方盖章正式采购合同与 SLA 退赔兜底协议",
    badge: "72H 闪电包换 · 按天折算退款",
    badgeColor: "bg-purple-500/10 text-purple-300 border-purple-500/20",
    icon: FileCheck2,
    summary: "支持飞书电子签、e 签宝或纸质加盖双方公章签约，明确约定 72 小时封号兜底责任，法务完全过审。",
    details: [
      { label: "协议主体", value: "成都游手好闲科技有限公司 (法人公章)" },
      { label: "签署方式", value: "支持 飞书电子签 / e签宝 / 纸质合同邮寄" },
      { label: "SLA 赔付", value: "72 小时内被封免费换新号，超期按天折算退款", isHighlight: true },
      { label: "保密协议", value: "签署独立商业保密条款 (NDA)，保障企业数据" },
    ],
  },
];

export default function LiveCredentialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 每 8 秒自动轮播
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CREDENTIALS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const current = CREDENTIALS[currentIndex];
  const Icon = current.icon;

  return (
    <div className="bg-[#12141a]/95 border border-zinc-800 rounded-xl p-5 shadow-2xl backdrop-blur-md flex flex-col justify-between">
      {/* 头部标题与 Tab 切换 */}
      <div>
        <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <span>权威合规与财务交付凭证</span>
                <span className="text-[10px] text-zinc-400 font-normal">
                  (经得起反洗钱穿透与财务内审)
                </span>
              </h3>
            </div>
          </div>
          <span className="text-[11px] font-mono text-zinc-400">
            {currentIndex + 1} / {CREDENTIALS.length}
          </span>
        </div>

        {/* Tab 按钮组 */}
        <div className="grid grid-cols-4 gap-1.5 mt-3">
          {CREDENTIALS.map((item, idx) => {
            const ItemIcon = item.icon;
            const isActive = currentIndex === idx;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentIndex(idx)}
                className={`py-1.5 px-2 rounded-lg text-left transition-all border flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? "bg-zinc-800 border-emerald-500 text-white shadow"
                    : "bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:text-zinc-200"
                }`}
              >
                <ItemIcon className={`w-3.5 h-3.5 ${isActive ? "text-emerald-400" : "text-zinc-400"}`} />
                <span className="text-[11px] font-medium truncate">{item.id === "invoice" ? "数电专票" : item.id === "bank" ? "工行回单" : item.id === "openai" ? "官方Invoice" : "盖章SLA"}</span>
              </button>
            );
          })}
        </div>

        {/* 凭证内容详情卡片 */}
        <div className="mt-4 p-4 rounded-xl bg-zinc-950/80 border border-zinc-800/90 relative overflow-hidden">
          {/* 装饰水印图样 */}
          <div className="absolute -right-6 -bottom-6 opacity-5 pointer-events-none text-white">
            <Stamp className="w-36 h-36" />
          </div>

          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-zinc-900 text-emerald-400 border border-zinc-750">
                <Icon className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">{current.title}</h4>
                <p className="text-[11px] text-zinc-400 mt-0.5">{current.summary}</p>
              </div>
            </div>
            <span
              className={`text-[10px] font-medium px-2 py-0.5 rounded-full border whitespace-nowrap ${current.badgeColor}`}
            >
              {current.badge}
            </span>
          </div>

          {/* 明细表格 */}
          <div className="mt-3.5 space-y-1.5 text-xs font-mono">
            {current.details.map((d, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-1 px-2 rounded bg-zinc-900/50 border border-zinc-850/60"
              >
                <span className="text-zinc-400 text-[11px]">{d.label}</span>
                <span
                  className={`font-medium text-[11px] ${
                    d.isHighlight
                      ? "text-emerald-400 font-semibold"
                      : "text-zinc-200"
                  }`}
                >
                  {d.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 底部真实盖章与资质信息提示 */}
      <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400">
        <span className="flex items-center gap-1.5 text-emerald-400">
          <BadgeCheck className="w-3.5 h-3.5" />
          签约法人实体：成都游手好闲科技有限公司
        </span>
        <span>统一社会信用代码可查</span>
      </div>
    </div>
  );
}
