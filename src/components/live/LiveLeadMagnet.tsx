"use client";

import React, { useState } from "react";
import { Gift, FileText, ArrowRight, ShieldCheck, Sparkles, UserCheck } from "lucide-react";

export default function LiveLeadMagnet() {
  const [showWechatId, setShowWechatId] = useState(false);

  return (
    <div className="bg-gradient-to-r from-emerald-950/40 via-zinc-900/90 to-blue-950/30 border border-emerald-500/30 rounded-xl p-4 shadow-xl backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-4">
      {/* 诱饵资料说明 */}
      <div className="flex items-center gap-3.5">
        <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex-shrink-0 animate-bounce">
          <Gift className="w-5 h-5" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-white tracking-wide">
              直播间专属企业采购合规大礼包
            </span>
            <span className="text-[10px] bg-red-500/20 text-red-300 px-2 py-0.5 rounded-full border border-red-500/30 font-semibold">
              免费赠送 · 采购必备
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-xs text-zinc-300">
            <span className="flex items-center gap-1">
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              《企业采购立项申请呈批模板》(Word)
            </span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              《海外 AI 访问网络防封自检清单》(PDF)
            </span>
            <span className="flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              《官方阶梯代采成本测算表》(Excel)
            </span>
          </div>
        </div>
      </div>

      {/* 合规领取指引动作 */}
      <div className="flex items-center gap-3 flex-shrink-0">
        <div className="text-right hidden sm:block">
          <div className="text-xs font-bold text-emerald-300 flex items-center justify-end gap-1">
            <UserCheck className="w-3.5 h-3.5" />
            <span>点击左上方关注主播头像</span>
          </div>
          <div className="text-[11px] text-zinc-400">
            进入主页私信回复 <span className="text-white font-mono font-bold bg-zinc-800 px-1 rounded">立项</span> 或添加企微
          </div>
        </div>

        <div className="flex items-center gap-2">
          {showWechatId ? (
            <div className="px-3 py-1.5 rounded-lg bg-zinc-950 border border-emerald-500/50 text-xs font-mono text-emerald-400 font-bold">
              大客户微信：yqtp01
            </div>
          ) : (
            <button
              onClick={() => setShowWechatId(true)}
              className="px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-bold transition-all shadow-md flex items-center gap-1 cursor-pointer"
            >
              <span>立即免费获取</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
