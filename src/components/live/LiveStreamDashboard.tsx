"use client";

import React, { useState, useEffect } from "react";
import LiveClockHeader from "@/components/live/LiveClockHeader";
import LiveAutoCalculator from "@/components/live/LiveAutoCalculator";
import LiveCredentialsCarousel from "@/components/live/LiveCredentialsCarousel";
import LiveFaqTicker from "@/components/live/LiveFaqTicker";
import LiveOrderTicker from "@/components/live/LiveOrderTicker";
import LiveLeadMagnet from "@/components/live/LiveLeadMagnet";
import { Maximize, Minimize, Smartphone, Monitor, Eye, EyeOff } from "lucide-react";

export default function LiveStreamDashboard() {
  const [aspectMode, setAspectMode] = useState<"landscape" | "portrait">("landscape");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showToolbar, setShowToolbar] = useState(true);

  // 全屏切换处理
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
      }
    }
  };

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFsChange);
    return () => document.removeEventListener("fullscreenchange", handleFsChange);
  }, []);

  return (
    <div className="min-h-screen bg-[#08090b] text-zinc-100 flex flex-col justify-between selection:bg-emerald-500/30 selection:text-emerald-200 relative overflow-x-hidden font-sans">
      {/* 极客科技背景微光晕 */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f242d0a_1px,transparent_1px),linear-gradient(to_bottom,#1f242d0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* 浮动开播快捷控制栏 (主播调试用，录屏可一键隐藏) */}
      <div className="fixed top-2 right-4 z-50 flex items-center gap-2">
        {showToolbar ? (
          <div className="flex items-center gap-1.5 p-1 rounded-lg bg-zinc-900/90 border border-zinc-700/80 shadow-2xl backdrop-blur-md text-xs">
            {/* 横竖屏模式切换 */}
            <button
              onClick={() => setAspectMode("landscape")}
              className={`p-1.5 rounded flex items-center gap-1 cursor-pointer transition-colors ${
                aspectMode === "landscape"
                  ? "bg-emerald-500 text-zinc-950 font-bold"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
              title="切换为 16:9 横屏模式 (适配电脑录屏推流/B站/视频号电脑端)"
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>横屏</span>
            </button>

            <button
              onClick={() => setAspectMode("portrait")}
              className={`p-1.5 rounded flex items-center gap-1 cursor-pointer transition-colors ${
                aspectMode === "portrait"
                  ? "bg-emerald-500 text-zinc-950 font-bold"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
              title="切换为 9:16 竖屏模式 (适配手机端抖音/视频号竖屏录屏)"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>竖屏</span>
            </button>

            {/* 全屏切换 */}
            <button
              onClick={toggleFullscreen}
              className="p-1.5 rounded text-zinc-400 hover:text-zinc-200 cursor-pointer flex items-center gap-1"
              title="一键全屏 (F11 效果)"
            >
              {isFullscreen ? <Minimize className="w-3.5 h-3.5" /> : <Maximize className="w-3.5 h-3.5" />}
              <span>{isFullscreen ? "退出全屏" : "全屏"}</span>
            </button>

            {/* 隐藏控制栏 */}
            <button
              onClick={() => setShowToolbar(false)}
              className="p-1.5 rounded text-zinc-400 hover:text-zinc-200 cursor-pointer"
              title="隐藏控制工具条 (方便纯净录屏)"
            >
              <EyeOff className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          <button
            onClick={() => setShowToolbar(true)}
            className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-zinc-200 shadow cursor-pointer opacity-40 hover:opacity-100 transition-opacity"
            title="显示开播控制栏"
          >
            <Eye className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* 顶栏：毫秒级时钟与监控指示 */}
      <div className="relative z-10">
        <LiveClockHeader />
      </div>

      {/* 大屏核心内容区 */}
      <main
        className={`relative z-10 flex-1 px-4 py-3 mx-auto transition-all duration-300 w-full ${
          aspectMode === "portrait"
            ? "max-w-[540px] space-y-3"
            : "max-w-[1920px] flex flex-col justify-center gap-3"
        }`}
      >
        {aspectMode === "landscape" ? (
          /* 横屏 16:9 极客大屏布局 */
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-3 items-stretch">
            {/* 左侧：自动演示阶梯计算器 (占 7 列) */}
            <div className="xl:col-span-7 flex flex-col justify-between">
              <LiveAutoCalculator />
            </div>

            {/* 右侧：合规凭据轮播 + 常见痛点解答 (占 5 列) */}
            <div className="xl:col-span-5 flex flex-col justify-between gap-3">
              <LiveCredentialsCarousel />
              <LiveFaqTicker />
            </div>
          </div>
        ) : (
          /* 竖屏 9:16 手机端布局 */
          <div className="space-y-3">
            <LiveAutoCalculator />
            <LiveCredentialsCarousel />
            <LiveFaqTicker />
          </div>
        )}

        {/* 资料大礼包引流挂件 */}
        <div className="mt-1">
          <LiveLeadMagnet />
        </div>
      </main>

      {/* 底部跑马灯：实时履约与动态播报 */}
      <div className="relative z-10">
        <LiveOrderTicker />
      </div>
    </div>
  );
}
