"use client";

import React, { useState } from "react";
import { MessageCircle, Copy, Check, QrCode, ShieldCheck } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
}

export default function ContactModal({ isOpen, onClose, source }: ContactModalProps) {
  const [copiedWeChat, setCopiedWeChat] = useState(false);

  if (!isOpen) return null;

  const weChatAccount = "yqtp01";

  const handleCopy = () => {
    navigator.clipboard.writeText(weChatAccount).then(() => {
      setCopiedWeChat(true);
      setTimeout(() => setCopiedWeChat(false), 2500);
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-surface border border-theme-subtle rounded-2xl w-full max-w-xl max-h-[95vh] overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 border-b border-theme-subtle bg-surface-elevated flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-surface border border-theme-subtle text-primary flex items-center justify-center shadow-xs">
              <MessageCircle className="w-4 h-4 text-[#10A37F]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-semibold text-primary">联系业务经理 / 客服支持</h3>
                <span className="text-[10px] font-mono px-2 py-0.2 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-medium">
                  7×24H 全天在线
                </span>
              </div>
              <p className="text-[11px] text-secondary">365天全天候轮值 · 节假日无休 · 支持公对公转账与 6% 专票</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-secondary hover:text-primary text-xs p-1.5 rounded-lg hover:bg-surface-hover transition-colors cursor-pointer"
          >
            ✕ 关闭
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          {/* Quick Connect Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* 业务经理微信 */}
            <div className="codex-panel p-4 border-theme-subtle bg-surface-elevated flex flex-col items-center text-center">
              <div className="w-full flex items-center justify-between mb-3 pb-2 border-b border-theme-subtle">
                <span className="text-xs font-semibold text-primary flex items-center gap-1.5">
                  <MessageCircle className="w-3.5 h-3.5 text-[#10A37F]" />
                  <span>业务经理</span>
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium">
                  7×24H 直联
                </span>
              </div>

              {/* 微信二维码 (白底高对比度卡片，适配明暗主题) */}
              <div className="p-2 bg-white rounded-xl border border-theme-subtle shadow-xs mb-3 flex items-center justify-center">
                <img
                  src="/images/微信二维码.webp"
                  alt="业务经理微信二维码"
                  className="w-36 h-36 object-contain rounded-lg block"
                  loading="eager"
                />
              </div>

              <div className="text-xs text-secondary mb-3 flex items-center gap-1.5">
                <span>微信号：</span>
                <span className="font-mono font-bold text-primary text-sm select-all">{weChatAccount}</span>
              </div>

              <button
                type="button"
                onClick={handleCopy}
                className="w-full btn-openai-white text-xs !py-1.5 flex items-center justify-center gap-1.5 cursor-pointer mt-auto"
              >
                {copiedWeChat ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-medium">微信号已复制！</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>复制微信号</span>
                  </>
                )}
              </button>
            </div>

            {/* 业务经理企业微信 */}
            <div className="codex-panel p-4 border-theme-subtle bg-surface-elevated flex flex-col items-center text-center">
              <div className="w-full flex items-center justify-between mb-3 pb-2 border-b border-theme-subtle">
                <span className="text-xs font-semibold text-primary flex items-center gap-1.5">
                  <QrCode className="w-3.5 h-3.5 text-[#10A37F]" />
                  <span>业务经理企业微信</span>
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 font-medium">
                  官方认证
                </span>
              </div>

              {/* 企业微信二维码 */}
              <div className="p-2 bg-white rounded-xl border border-theme-subtle shadow-xs mb-3 flex items-center justify-center">
                <img
                  src="/images/企业微信二维码.jpg"
                  alt="业务经理企业微信二维码"
                  className="w-36 h-36 object-contain rounded-lg block"
                  loading="eager"
                />
              </div>

              <div className="text-xs text-secondary mb-3">
                微信或企微扫码一键添加
              </div>

              <div className="w-full py-1.5 px-3 rounded-lg bg-surface border border-theme-subtle text-[11px] text-secondary flex items-center justify-center gap-1.5 mt-auto">
                <ShieldCheck className="w-3.5 h-3.5 text-[#10A37F]" />
                <span>对公转账 · 专票开具</span>
              </div>
            </div>
          </div>

          {/* Privacy & Compliance Note */}
          <div className="p-3 rounded-xl bg-surface-elevated border border-theme-subtle flex items-center gap-2.5 text-[11px] text-secondary">
            <ShieldCheck className="w-4 h-4 text-[#10A37F] shrink-0" />
            <span>顾问团队 7×24 小时排班在岗（含深夜与周末节假日）。添加好友后可随时发送采购需求，专人 10 分钟内响应并出具加盖公章的正式报价单与采购合同。</span>
          </div>
        </div>
      </div>
    </div>
  );
}
