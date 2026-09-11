"use client";

import React from "react";
import { Sparkles } from "lucide-react";

interface OrderRecord {
  id: string;
  timeAgo: string;
  company: string;
  product: string;
  seats: string;
  action: string;
  highlight: string;
}

const ORDERS: OrderRecord[] = [
  {
    id: "1",
    timeAgo: "2分钟前",
    company: "深圳某出海智能硬件公司",
    product: "ChatGPT Team 空间",
    seats: "8 席",
    action: "已开具 6% 增值税专用发票",
    highlight: "工行公对公已核销",
  },
  {
    id: "2",
    timeAgo: "5分钟前",
    company: "北京某大模型产研实验室",
    product: "ChatGPT Pro (20x 满血旗舰)",
    seats: "2 席",
    action: "签署加盖公章 SLA 兜底保障协议",
    highlight: "官方原版 Invoice 交付",
  },
  {
    id: "3",
    timeAgo: "9分钟前",
    company: "杭州某跨境电商独立站集团",
    product: "ChatGPT Plus (GPT-6 Astra)",
    seats: "15 席",
    action: "年度战略采购签约",
    highlight: "阶梯让利立省 ¥3,600",
  },
  {
    id: "4",
    timeAgo: "14分钟前",
    company: "上海某海外游戏工作室",
    product: "ChatGPT Pro (5x 算力)",
    seats: "6 席",
    action: "员工原有邮箱官方秒充直通",
    highlight: "10分钟交付完毕",
  },
  {
    id: "5",
    timeAgo: "21分钟前",
    company: "广州某跨境供应链物流平台",
    product: "ChatGPT Plus",
    seats: "10 席",
    action: "数电发票税号核对通过",
    highlight: "信息技术服务费专票",
  },
  {
    id: "6",
    timeAgo: "28分钟前",
    company: "成都某高新技术外包软件机构",
    product: "ChatGPT Pro (20x)",
    seats: "3 席",
    action: "已出具加盖公章合规合同",
    highlight: "顺丰寄送纸质合同及专票",
  },
];

export default function LiveOrderTicker() {
  return (
    <div className="w-full bg-[#0e1015]/90 border-t border-zinc-800/80 px-4 py-2.5 flex items-center overflow-hidden select-none">
      {/* 跑马灯标识 */}
      <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 whitespace-nowrap pr-4 border-r border-zinc-800 flex-shrink-0">
        <Sparkles className="w-3.5 h-3.5 animate-pulse" />
        <span>实时企业采购交付动态</span>
      </div>

      {/* 滚动容器 */}
      <div className="flex-1 overflow-hidden relative ml-3">
        <div className="flex items-center gap-8 animate-marquee whitespace-nowrap">
          {/* 重复两遍实现无缝滚动 */}
          {[...ORDERS, ...ORDERS].map((order, index) => (
            <div
              key={`${order.id}-${index}`}
              className="inline-flex items-center gap-2 text-xs text-zinc-300"
            >
              <span className="text-[11px] font-mono text-zinc-400 bg-zinc-850 px-1.5 py-0.5 rounded">
                {order.timeAgo}
              </span>
              <span className="text-zinc-200 font-medium">{order.company}</span>
              <span className="text-emerald-400 font-semibold font-mono">
                {order.product} [{order.seats}]
              </span>
              <span className="text-zinc-400">{order.action}</span>
              <span className="text-[10px] text-amber-300 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">
                {order.highlight}
              </span>
              <span className="text-zinc-700 mx-2">|</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
