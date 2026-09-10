"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  MessageCircle,
  X,
  Copy,
  Check,
  QrCode,
  ShieldCheck,
  FileText,
  Sparkles,
  BadgeCheck,
  Building,
  Video,
} from "lucide-react";

interface FloatingContactProps {
  onOpenFullContact: (source?: string) => void;
}

export default function FloatingContact({ onOpenFullContact }: FloatingContactProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"wechat" | "wework">("wechat");
  const [copied, setCopied] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [bubbleDismissed, setBubbleDismissed] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const weChatAccount = "yqtp01";

  // 页面初次加载后，延迟 2.5 秒优雅弹出关怀气泡（若未被手动关闭过且微名片未展开）
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!bubbleDismissed && !isOpen) {
        setShowBubble(true);
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, [bubbleDismissed, isOpen]);

  // 点击组件外部自动收起快捷微名片
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // 复制微信号
  const handleCopyWeChat = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(weChatAccount).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  };

  // 切换展开状态
  const toggleOpen = () => {
    setIsOpen((prev) => {
      const nextState = !prev;
      if (nextState) {
        setShowBubble(false);
      }
      return nextState;
    });
  };

  // 手动关闭引导气泡
  const handleDismissBubble = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowBubble(false);
    setBubbleDismissed(true);
  };

  // 点击进入完整需求表单
  const handleOpenFullForm = () => {
    setIsOpen(false);
    onOpenFullContact("floating-widget-form");
  };

  return (
    <div
      ref={containerRef}
      className="fixed bottom-6 right-5 sm:right-6 z-40 flex flex-col items-end pointer-events-auto"
      aria-label="客服与采购顾问支持"
    >
      {/* 1. 主动关怀引导气泡 */}
      {showBubble && !isOpen && (
        <div className="mb-3 max-w-[280px] sm:max-w-xs animate-fade-in transition-all duration-300 transform origin-bottom-right">
          <div className="relative p-3.5 rounded-xl bg-surface border border-theme-subtle shadow-xl backdrop-blur-md text-xs text-secondary flex items-start gap-2.5">
            <div className="w-5 h-5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <div
              className="flex-1 cursor-pointer"
              onClick={() => {
                setShowBubble(false);
                setIsOpen(true);
              }}
            >
              <div className="font-semibold text-primary text-[12px] mb-0.5 flex items-center gap-1.5">
                <span>7×24H 官方大客户顾问在线</span>
              </div>
              <p className="text-[11px] text-secondary leading-snug">
                支持出具加盖公章正式报价单、银行对公回单及 6% 增值税专票样张，随时极速对接。
              </p>
            </div>
            <button
              onClick={handleDismissBubble}
              className="text-tertiary hover:text-primary p-0.5 rounded transition-colors -mr-1 -mt-1 cursor-pointer"
              aria-label="关闭提示"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            {/* 向下的小箭头 */}
            <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-surface border-r border-b border-theme-subtle transform rotate-45" />
          </div>
        </div>
      )}

      {/* 2. 快捷客服微名片展开卡片 */}
      {isOpen && (
        <div className="mb-3 w-[320px] sm:w-[350px] rounded-2xl bg-surface border border-theme-subtle shadow-2xl overflow-hidden animate-fade-in transition-all origin-bottom-right flex flex-col">
          {/* Header with Enterprise Verification Blue Badge */}
          <div className="p-4 border-b border-theme-subtle bg-surface-elevated flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative w-9 h-9 rounded-lg bg-surface border border-theme-subtle flex items-center justify-center shadow-xs">
                <MessageCircle className="w-4 h-4 text-[#10A37F]" />
                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-[var(--bg-surface)] animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="text-xs sm:text-sm font-bold text-primary">专属大客户总监</h4>
                  <span className="inline-flex items-center gap-0.5 text-[10px] font-medium px-1.5 py-0.2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                    <BadgeCheck className="w-3 h-3" />
                    <span>企微实名认证</span>
                  </span>
                </div>
                <p className="text-[10px] text-tertiary font-mono">
                  工号: ADC-DIR-8820 · 成都高新区AI创新中心
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-secondary hover:text-primary p-1 rounded-lg hover:bg-surface-hover transition-colors cursor-pointer"
              aria-label="关闭微名片"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-4 space-y-3.5">
            {/* Tab 切换: 个人微信 (前) vs 企业微信 (后) */}
            <div className="flex p-1 rounded-lg bg-surface-elevated border border-theme-subtle text-xs">
              <button
                type="button"
                onClick={() => setActiveTab("wechat")}
                className={`flex-1 py-1.5 px-2 rounded-md font-medium text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  activeTab === "wechat"
                    ? "bg-surface text-primary shadow-xs font-semibold"
                    : "text-secondary hover:text-primary"
                }`}
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#10A37F]" />
                <span>个人微信</span>
                <span className="text-[9px] px-1 py-0.2 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono">
                  总监直通
                </span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("wework")}
                className={`flex-1 py-1.5 px-2 rounded-md font-medium text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  activeTab === "wework"
                    ? "bg-surface text-primary shadow-xs font-semibold"
                    : "text-secondary hover:text-primary"
                }`}
              >
                <QrCode className="w-3.5 h-3.5 text-[#10A37F]" />
                <span>企业微信</span>
                <span className="text-[9px] px-1 py-0.2 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 font-mono">
                  官方认证
                </span>
              </button>
            </div>

            {/* 二维码展示区（白底高对比度，确保扫码清晰） */}
            <div className="flex flex-col items-center justify-center pt-1">
              <div className="p-2.5 bg-white rounded-xl border border-theme-subtle shadow-xs flex items-center justify-center">
                {activeTab === "wechat" ? (
                  <img
                    src="/images/微信二维码.webp"
                    alt="业务经理微信二维码"
                    className="w-40 h-40 object-contain rounded-lg block"
                    loading="eager"
                  />
                ) : (
                  <img
                    src="/images/企业微信二维码.jpg"
                    alt="业务经理企业微信二维码"
                    className="w-40 h-40 object-contain rounded-lg block"
                    loading="eager"
                  />
                )}
              </div>
              <p className="mt-2 text-[11px] text-secondary text-center">
                {activeTab === "wechat"
                  ? "微信扫码直联大客户总监私人业务直通号"
                  : "支持微信或企业微信扫码添加官方认证专员"}
              </p>
            </div>

            {/* 微信号复制条 */}
            <div className="p-2.5 rounded-xl bg-surface-elevated border border-theme-subtle flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="text-secondary text-[11px]">微信号：</span>
                <span className="font-mono font-bold text-primary select-all">
                  {weChatAccount}
                </span>
              </div>
              <button
                type="button"
                onClick={handleCopyWeChat}
                className="btn-openai-white text-[11px] !py-1 !px-2.5 flex items-center gap-1 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span>已复制</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>复制</span>
                  </>
                )}
              </button>
            </div>

            {/* 企业资质与验真背书 */}
            <div className="p-2.5 rounded-xl bg-surface-elevated border border-theme-subtle space-y-1 text-[11px] text-secondary">
              <div className="flex items-center gap-1.5 text-primary font-medium">
                <Video className="w-3.5 h-3.5 text-[#10A37F]" />
                <span>支持在线视频对公核验：</span>
              </div>
              <p className="text-[10px] text-tertiary leading-snug">
                为消除异地采购顾虑，支持通过腾讯会议实时查验营业执照原件、增值电信许可、国税查验平台及对公账户信息。
              </p>
            </div>

            {/* 底部行动项：获取加盖公章正式报价单 */}
            <button
              type="button"
              onClick={handleOpenFullForm}
              className="w-full btn-openai-gold text-xs !py-2.5 flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>提交采购需求，获取加盖公章报价单</span>
            </button>
          </div>
        </div>
      )}

      {/* 3. 常态悬浮挂件按钮 */}
      <button
        type="button"
        onClick={toggleOpen}
        className={`group relative flex items-center gap-2.5 py-2.5 px-3.5 sm:px-4 rounded-full border transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl active:scale-95 ${
          isOpen
            ? "bg-surface-elevated text-primary border-[#10A37F]/50 ring-2 ring-[#10A37F]/20"
            : "bg-surface text-primary border-theme-subtle hover:border-[#10A37F]/60 hover:-translate-y-0.5"
        }`}
        aria-expanded={isOpen}
      >
        {/* 客服图标与呼吸光圈 */}
        <div className="relative flex items-center justify-center">
          <div className="w-7 h-7 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center group-hover:bg-[#10A37F] group-hover:text-white transition-colors">
            {isOpen ? <X className="w-4 h-4" /> : <MessageCircle className="w-4 h-4" />}
          </div>
          {/* 在线绿点 */}
          {!isOpen && (
            <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 border border-[var(--bg-surface)]" />
            </span>
          )}
        </div>

        {/* 文本胶囊标签 */}
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1 text-xs font-semibold tracking-tight text-primary">
            <span>{isOpen ? "收起客服" : "大客户对公客服"}</span>
            {!isOpen && (
              <span className="hidden sm:inline-block text-[10px] font-normal text-secondary">
                · 7×24H
              </span>
            )}
          </div>
          <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono hidden sm:block leading-none mt-0.5">
            10分钟内极速出报价单
          </span>
        </div>
      </button>
    </div>
  );
}
