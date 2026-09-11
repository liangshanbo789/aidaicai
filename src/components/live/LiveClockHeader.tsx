"use client";

import React, { useState, useEffect, useRef } from "react";
import BrandLogo from "@/components/BrandLogo";
import { Server, Building2, Receipt, Radio } from "lucide-react";

export default function LiveClockHeader() {
  const [timeStr, setTimeStr] = useState<string>("");
  const [millisStr, setMillisStr] = useState<string>("000");
  const [dateStr, setDateStr] = useState<string>("");
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    let lastUpdate = 0;
    const updateTime = (timestamp: number) => {
      // 节流为约每 35ms 刷新一次，兼顾流畅度与极低 CPU 消耗
      if (timestamp - lastUpdate >= 35) {
        lastUpdate = timestamp;
        const now = new Date();

        // 格式化时间与毫秒
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const seconds = String(now.getSeconds()).padStart(2, "0");
        const millis = String(now.getMilliseconds()).padStart(3, "0");

        setTimeStr(`${hours}:${minutes}:${seconds}`);
        setMillisStr(millis);

        // 每秒内日期一般不变，轻量计算
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, "0");
        const day = String(now.getDate()).padStart(2, "0");
        const weekDays = [
          "周日",
          "周一",
          "周二",
          "周三",
          "周四",
          "周五",
          "周六",
        ];
        setDateStr(`${year}年${month}月${day}日 ${weekDays[now.getDay()]}`);
      }
      animFrameRef.current = requestAnimationFrame(updateTime);
    };

    animFrameRef.current = requestAnimationFrame(updateTime);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  return (
    <header className="w-full bg-[#0d0f12]/90 backdrop-blur-md border-b border-zinc-800/80 px-4 py-3 select-none flex flex-wrap items-center justify-between gap-4">
      {/* 品牌与服务定位 */}
      <div className="flex items-center gap-3">
        <div className="relative">
          <BrandLogo size={32} variant="glow" />
          <span className="absolute -bottom-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#10A37F]"></span>
          </span>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-bold text-white tracking-wide flex items-center gap-2">
              <span>AI 代采</span>
              <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono font-normal">
                gongsi.one
              </span>
            </h1>
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 animate-pulse">
              <Radio className="w-3 h-3 text-red-500" />
              LIVE 直播中
            </span>
          </div>
          <p className="text-xs text-zinc-400">
            企业级海外 AI 官方代采 · 工行对公结算 · 6% 数电专票 · SLA 保障
          </p>
        </div>
      </div>

      {/* 节点实时监控状态徽标 */}
      <div className="hidden xl:flex items-center gap-4 text-xs font-mono">
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-900/80 border border-zinc-800 text-zinc-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <Server className="w-3.5 h-3.5 text-emerald-400" />
          <span>海外商业专卡通道: 100% 正常</span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-900/80 border border-zinc-800 text-zinc-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          <Building2 className="w-3.5 h-3.5 text-blue-400" />
          <span>工行对公专线: 实时接单</span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-900/80 border border-zinc-800 text-zinc-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          <Receipt className="w-3.5 h-3.5 text-amber-400" />
          <span>数电专票系统: 联机就绪</span>
        </div>
      </div>

      {/* 毫秒防封跳动时钟核心 */}
      <div className="flex items-center gap-3 bg-zinc-950/80 px-3.5 py-1.5 rounded-lg border border-zinc-800/90 shadow-inner">
        <div className="text-right">
          <div className="text-[11px] text-zinc-400 font-mono tracking-wider">
            {dateStr || "北京时间 (UTC+8)"}
          </div>
          <div className="text-xl font-bold font-mono tracking-widest text-emerald-400 flex items-baseline justify-end">
            <span>{timeStr || "00:00:00"}</span>
            <span className="text-xs text-emerald-500/70 ml-1 font-semibold w-8 text-left">
              .{millisStr}
            </span>
          </div>
        </div>
        <div className="w-2 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
          <div className="w-1.5 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
        </div>
      </div>
    </header>
  );
}
