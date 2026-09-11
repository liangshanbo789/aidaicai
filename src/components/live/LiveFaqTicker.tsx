"use client";

import React, { useState, useEffect } from "react";
import { HelpCircle, AlertTriangle, CheckCircle2 } from "lucide-react";

interface FaqItem {
  question: string;
  tag: string;
  problem: string;
  solution: string;
}

const FAQ_LIST: FaqItem[] = [
  {
    question: "国内双币信用卡频繁被拒 (Card Declined) 怎么解决？",
    tag: "支付风控",
    problem: "OpenAI 升级了反欺诈系统，大量国内卡及虚拟卡段被批量拉黑，强行绑卡极易被封。",
    solution: "我们 100% 采用海外正规商业银行实体企业专卡直充，提供官方原单 Invoice，彻底告别支付风控。",
  },
  {
    question: "公司财务硬性要求 6% 增值税专用发票抵扣，能否提供？",
    tag: "税务报销",
    problem: "个人代充无法开发票，或开具品类不符的杂项普票，面临严峻的财务审计与稽查风险。",
    solution: "依法开具国家税务局 6% 数电增值税专用发票（类目：软件技术服务费），一般纳税人可直接进项抵扣。",
  },
  {
    question: "万一遭遇官方突击封号，企业资金如何退赔与兜底？",
    tag: "售后保障",
    problem: "淘宝店铺频繁换皮跑路，封号后卖家失联，企业数十人研发团队面临算力中断与资金损失。",
    solution: "加盖公章签署正式 SLA 协议：72 小时内被封免费换号，超过 72 小时按剩余天数折算极速退款。",
  },
  {
    question: "企业想集中批量采购，但内部向财务法务立项审批繁琐？",
    tag: "立项呈批",
    problem: "采购经理写立项报告、合同审核及询价论证耗时耗力，往往卡在管理层合规审核环节。",
    solution: "免费提供全套《企业采购立项申请呈批报告模板》与现成公章合同文本，填入公司名称直接过审。",
  },
];

export default function LiveFaqTicker() {
  const [activeFaqIndex, setActiveFaqIndex] = useState(0);

  // 每 7 秒自动轮播
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFaqIndex((prev) => (prev + 1) % FAQ_LIST.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const currentFaq = FAQ_LIST[activeFaqIndex];

  return (
    <div className="bg-[#12141a]/95 border border-zinc-800 rounded-xl p-5 shadow-2xl backdrop-blur-md">
      <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <HelpCircle className="w-4 h-4" />
          </div>
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <span>常见企业采购合规与风控答疑</span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 font-normal">
              实时热点问题
            </span>
          </h3>
        </div>
        <div className="flex gap-1">
          {FAQ_LIST.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveFaqIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                activeFaqIndex === idx ? "bg-amber-400 w-5" : "bg-zinc-700"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="mt-3.5 space-y-3">
        {/* 问题标题 */}
        <div className="flex items-start gap-2">
          <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20 flex-shrink-0 mt-0.5">
            {currentFaq.tag}
          </span>
          <h4 className="text-sm font-bold text-zinc-100 leading-snug">
            {currentFaq.question}
          </h4>
        </div>

        {/* 传统痛点 vs 解决方案对比 */}
        <div className="space-y-2 text-xs">
          <div className="p-2.5 rounded-lg bg-red-950/20 border border-red-900/30 flex items-start gap-2 text-red-200">
            <AlertTriangle className="w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-red-400">痛点困境：</span>
              <span>{currentFaq.problem}</span>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-emerald-950/30 border border-emerald-900/40 flex items-start gap-2 text-emerald-200">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-emerald-400">官方代采方案：</span>
              <span>{currentFaq.solution}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
