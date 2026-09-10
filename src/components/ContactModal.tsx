"use client";

import React, { useState } from "react";
import {
  MessageCircle,
  Copy,
  Check,
  QrCode,
  ShieldCheck,
  BadgeCheck,
  Building,
  Video,
  Mail,
  FileText,
  Landmark,
} from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
}

export default function ContactModal({ isOpen, onClose, source }: ContactModalProps) {
  const [copiedWeChat, setCopiedWeChat] = useState(false);
  const [copiedBankInfo, setCopiedBankInfo] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  if (!isOpen) return null;

  const weChatAccount = "yqtp01";
  const officialEmail = "biz@aidaicai.com";

  const bankInfoText = `【AI代采 - 企业银行公对公转账结算账户】
收款人户名：成都游手科技有限公司
开户银行：中国工商银行股份有限公司成都武侯大道支行
银行账号：1001 2488 0910 0088 820
汇款用途/附言：技术服务费 / 软件代采款`;

  const handleCopyWeChat = () => {
    navigator.clipboard.writeText(weChatAccount).then(() => {
      setCopiedWeChat(true);
      setTimeout(() => setCopiedWeChat(false), 2500);
    });
  };

  const handleCopyBankInfo = () => {
    navigator.clipboard.writeText(bankInfoText).then(() => {
      setCopiedBankInfo(true);
      setTimeout(() => setCopiedBankInfo(false), 2500);
    });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(officialEmail).then(() => {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
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
                  <span>企微官方实名认证商户</span>
                </span>
              </div>
              <p className="text-[11px] text-secondary">
                签约主体：成都游手科技有限公司 · 工号: ADC-DIR-8820 · 7×24H 在线
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
        <div className="p-6 overflow-y-auto space-y-4">
          {/* Quick Connect Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* 业务经理企业微信 (主推) */}
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
              <div className="p-2 bg-white rounded-xl border border-theme-subtle shadow-xs mb-2 flex items-center justify-center">
                <img
                  src="/images/企业微信二维码.jpg"
                  alt="官方认证企业微信二维码"
                  className="w-32 h-32 object-contain rounded-lg block"
                  loading="eager"
                />
              </div>

              <div className="text-[11px] text-secondary mb-1">
                认证主体：<strong className="text-primary font-sans">成都游手科技有限公司</strong>
              </div>
              <div className="text-[10px] text-tertiary mb-3">
                微信扫一扫 · 10分钟内出具公章合同
              </div>

              <div className="w-full py-1.5 px-3 rounded-lg bg-surface border border-theme-subtle text-[11px] text-secondary flex items-center justify-center gap-1.5 mt-auto">
                <ShieldCheck className="w-3.5 h-3.5 text-[#10A37F]" />
                <span>网银公对公 · 6%专票抵扣</span>
              </div>
            </div>

            {/* 个人微信直通 */}
            <div className="codex-panel p-4 border-theme-subtle bg-surface-elevated flex flex-col items-center text-center">
              <div className="w-full flex items-center justify-between mb-3 pb-2 border-b border-theme-subtle">
                <span className="text-xs font-semibold text-primary flex items-center gap-1.5">
                  <MessageCircle className="w-3.5 h-3.5 text-[#10A37F]" />
                  <span>大客户经理个人微信</span>
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium">
                  直通专线
                </span>
              </div>

              {/* 微信二维码 */}
              <div className="p-2 bg-white rounded-xl border border-theme-subtle shadow-xs mb-2 flex items-center justify-center">
                <img
                  src="/images/微信二维码.webp"
                  alt="大客户总监微信二维码"
                  className="w-32 h-32 object-contain rounded-lg block"
                  loading="eager"
                />
              </div>

              <div className="text-xs text-secondary mb-3 flex items-center gap-1.5">
                <span>微信号：</span>
                <span className="font-mono font-bold text-primary text-sm select-all">{weChatAccount}</span>
              </div>

              <button
                type="button"
                onClick={handleCopyWeChat}
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
          </div>

          {/* Corporate Bank Account Info Box (企业对公结算账户公示) */}
          <div className="p-3.5 rounded-xl bg-surface-elevated border border-theme-subtle text-xs text-secondary space-y-2">
            <div className="flex items-center justify-between border-b border-theme-subtle pb-2">
              <div className="flex items-center gap-1.5 font-bold text-primary">
                <Landmark className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>企业官方公对公银行账户信息（经得起反洗钱核验）</span>
              </div>
              <button
                type="button"
                onClick={handleCopyBankInfo}
                className="text-[11px] text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 cursor-pointer font-medium"
              >
                {copiedBankInfo ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                <span>{copiedBankInfo ? "账号信息已复制" : "复制对公账号"}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-mono">
              <div>
                <span className="text-tertiary">收款户名：</span>
                <strong className="text-primary font-sans">成都游手科技有限公司</strong>
              </div>
              <div>
                <span className="text-tertiary">开户银行：</span>
                <span className="text-primary font-sans">中国工商银行成都武侯大道支行</span>
              </div>
              <div className="sm:col-span-2">
                <span className="text-tertiary">银行账号：</span>
                <span className="text-primary font-bold">1001 2488 0910 0088 820</span>
              </div>
            </div>
          </div>

          {/* Email & Video Verification */}
          <div className="p-3.5 rounded-xl bg-surface-elevated border border-theme-subtle space-y-2 text-xs text-secondary">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-theme-subtle pb-2">
              <div className="flex items-center gap-1.5 font-medium text-primary">
                <Mail className="w-3.5 h-3.5 text-[#10A37F]" />
                <span>商务对公邮箱：<strong className="font-mono text-primary">{officialEmail}</strong></span>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="text-[11px] text-emerald-600 dark:text-[#10A37F] hover:underline flex items-center gap-1 cursor-pointer"
              >
                {copiedEmail ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                <span>{copiedEmail ? "邮箱已复制" : "复制邮箱"}</span>
              </button>
            </div>

            <div className="flex items-start gap-2 pt-1 text-[11px] text-secondary leading-relaxed">
              <Video className="w-3.5 h-3.5 text-[#10A37F] shrink-0 mt-0.5" />
              <span>
                <strong>支持腾讯会议视频远程核验：</strong>随时出具企业营业执照、金税四期专票开具记录及网银对公电汇凭证原件，支持北上广深及成渝地区线下拜访交流。
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
