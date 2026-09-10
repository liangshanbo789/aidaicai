"use client";

import React, { useState } from "react";
import { MessageCircle, Copy, Check, QrCode, ShieldCheck, BadgeCheck, Building, Video } from "lucide-react";

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
            <div className="w-9 h-9 rounded-lg bg-surface border border-theme-subtle text-primary flex items-center justify-center shadow-xs">
              <MessageCircle className="w-4 h-4 text-[#10A37F]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-bold text-primary">官方大客户总监专线</h3>
                <span className="inline-flex items-center gap-0.5 text-[10px] font-mono px-2 py-0.2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 font-medium">
                  <BadgeCheck className="w-3 h-3" />
                  <span>企微官方实名认证</span>
                </span>
              </div>
              <p className="text-[11px] text-secondary">
                工号: ADC-DIR-8820 · 成都高新区AI创新中心 · 7×24H 全天在线
              </p>
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
                  <span>大客户总监个人微信</span>
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium">
                  直通专线
                </span>
              </div>

              {/* 微信二维码 */}
              <div className="p-2 bg-white rounded-xl border border-theme-subtle shadow-xs mb-3 flex items-center justify-center">
                <img
                  src="/images/微信二维码.webp"
                  alt="大客户总监微信二维码"
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
                  <span>企业微信官方认证</span>
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 font-medium">
                  企业实名
                </span>
              </div>

              {/* 企业微信二维码 */}
              <div className="p-2 bg-white rounded-xl border border-theme-subtle shadow-xs mb-3 flex items-center justify-center">
                <img
                  src="/images/企业微信二维码.jpg"
                  alt="官方认证企业微信二维码"
                  className="w-36 h-36 object-contain rounded-lg block"
                  loading="eager"
                />
              </div>

              <div className="text-xs text-secondary mb-3">
                微信或企业微信扫码一键添加
              </div>

              <div className="w-full py-1.5 px-3 rounded-lg bg-surface border border-theme-subtle text-[11px] text-secondary flex items-center justify-center gap-1.5 mt-auto">
                <ShieldCheck className="w-3.5 h-3.5 text-[#10A37F]" />
                <span>网银公对公 · 6%专票抵扣</span>
              </div>
            </div>
          </div>

          {/* Verification & Compliance Note */}
          <div className="p-3.5 rounded-xl bg-surface-elevated border border-theme-subtle space-y-2 text-xs text-secondary">
            <div className="flex items-center gap-2 text-primary font-medium">
              <Video className="w-4 h-4 text-[#10A37F] shrink-0" />
              <span>支持腾讯会议远程视频对公核验：</span>
            </div>
            <p className="text-[11px] leading-relaxed text-secondary">
              为彻底打消企业大额对公付款顾虑，我们随时支持通过腾讯会议或微信视频连线，为您出具<strong className="text-primary font-medium">企业营业执照正本、增值电信许可证、近期的国税数电专票查验记录及银行网银对公账户</strong>原件核对。
            </p>
            <div className="pt-1 text-[11px] text-tertiary">
              顾问团队 7×24 小时在线轮守，添加后发送采购席位数与公司名称，专人 10 分钟内出具加盖公章的正式《采购报价确认单》与《框架合作协议》。
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
