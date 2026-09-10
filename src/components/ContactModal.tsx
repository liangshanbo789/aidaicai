"use client";

import React, { useState } from "react";
import {
  MessageCircle,
  Copy,
  Check,
  QrCode,
  ShieldCheck,
  BadgeCheck,
  Video,
  Mail,
  Gift,
  FileText,
  FileSpreadsheet,
  Coffee,
  Sparkles,
  Lock,
  ChevronRight,
} from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
}

export default function ContactModal({ isOpen, onClose, source }: ContactModalProps) {
  const [copiedWeChat, setCopiedWeChat] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedNote, setCopiedNote] = useState<string | null>(null);

  if (!isOpen) return null;

  const weChatAccount = "yqtp01";
  const officialEmail = "liang@yqtp.cn";

  // 复制微信号（直接复制账号，并在 UI 提示附带验证备注，确保微信搜一搜精准命中）
  const handleCopyWeChat = (noteText?: string) => {
    navigator.clipboard.writeText(weChatAccount).then(() => {
      if (noteText) {
        setCopiedNote(noteText);
        setCopiedWeChat(true);
        setTimeout(() => {
          setCopiedNote(null);
          setCopiedWeChat(false);
        }, 3200);
      } else {
        setCopiedWeChat(true);
        setTimeout(() => setCopiedWeChat(false), 2500);
      }
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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/65 dark:bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-surface border border-theme-subtle rounded-2xl w-full max-w-2xl max-h-[94vh] overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 1. Modal Header */}
        <div className="p-4 sm:p-5 border-b border-theme-subtle bg-surface-elevated flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-surface border border-theme-subtle text-primary flex items-center justify-center shadow-xs">
              <MessageCircle className="w-4 h-4 text-[#10A37F]" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-sm sm:text-base font-bold text-primary">官方大客户总监专线</h3>
                <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 font-medium">
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
            aria-label="关闭弹窗"
          >
            ✕ 关闭
          </button>
        </div>

        {/* 2. Modal Body (Scrollable) */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 text-left">
          {/* 引子区域：加微即领 · 企业采买 3 重通关大礼包 (Lead Magnet Hook Bar) */}
          <div className="rounded-xl p-3.5 sm:p-4 bg-gradient-to-r from-emerald-500/[0.08] via-surface-elevated to-blue-500/[0.08] border border-emerald-500/25 shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-primary">
                <Gift className="w-4 h-4 text-[#10A37F] animate-bounce" />
                <span>加微信备注，免费获取【企业采买全套通关包】</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#10A37F]/15 text-[#10A37F] font-medium hidden sm:inline-block">
                立项呈批免责神器
              </span>
            </div>

            <p className="text-[11px] text-secondary mb-3 leading-relaxed">
              专为企业采购与行政专员打造，加任意微信备注对应关键词，总监 10 分钟内一对一发送原件：
            </p>

            {/* 3 个福利挂件标签 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
              <button
                type="button"
                onClick={() => handleCopyWeChat("领立项报告模板")}
                className="group p-2 rounded-lg bg-surface border border-theme-subtle hover:border-[#10A37F]/50 transition-all text-left flex items-start gap-2 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-[#10A37F] shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <div className="font-medium text-[11px] text-primary group-hover:text-[#10A37F] truncate">
                    1. 立项报告 Word 原件
                  </div>
                  <div className="text-[10px] text-tertiary">含3家规范比选表，改名即报</div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => handleCopyWeChat("领官方阶梯底价表")}
                className="group p-2 rounded-lg bg-surface border border-theme-subtle hover:border-[#10A37F]/50 transition-all text-left flex items-start gap-2 cursor-pointer"
              >
                <FileSpreadsheet className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <div className="font-medium text-[11px] text-primary group-hover:text-blue-500 truncate">
                    2. 阶梯底价精算模型
                  </div>
                  <div className="text-[10px] text-tertiary">Excel动态版，向老板证明降本</div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => handleCopyWeChat("咨询大客户统筹方案")}
                className="group p-2 rounded-lg bg-surface border border-amber-500/30 hover:border-amber-500 transition-all text-left flex items-start gap-2 cursor-pointer bg-amber-500/[0.03]"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <div className="font-medium text-[11px] text-primary group-hover:text-amber-600 truncate">
                    3. 专属商务协同方案
                  </div>
                  <div className="text-[10px] text-amber-700 dark:text-amber-400">大客户专享，一对一定制支持</div>
                </div>
              </button>
            </div>
          </div>

          {/* 复制成功全局浮层反馈 */}
          {copiedWeChat && (
            <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs flex items-center justify-between animate-fade-in">
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>
                  微信号 <strong className="font-mono font-bold">{weChatAccount}</strong> 已复制至剪贴板！
                  {copiedNote && (
                    <>
                      {" "}微信添加申请时请备注：<strong className="underline font-bold">【{copiedNote}】</strong>
                    </>
                  )}
                </span>
              </div>
              <span className="text-[10px] font-mono opacity-75 hidden sm:inline">请切换微信搜一搜添加</span>
            </div>
          )}

          {/* Quick Connect Cards (双微信分流：个人微信 vs 企业微信) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* 1. 个人微信（主推：大客户总监直通 + 商务弹性与个性化方案） */}
            <div className="codex-panel p-4 border-[#10A37F]/30 bg-surface-elevated flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#10A37F]/5 rounded-bl-full pointer-events-none" />

              <div className="w-full flex items-center justify-between mb-3 pb-2 border-b border-theme-subtle">
                <span className="text-xs font-semibold text-primary flex items-center gap-1.5">
                  <MessageCircle className="w-3.5 h-3.5 text-[#10A37F]" />
                  <span>大客户总监个人微信</span>
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium">
                  总监直通专线
                </span>
              </div>

              {/* 微信二维码 */}
              <div className="p-2 bg-white rounded-xl border border-theme-subtle shadow-xs mb-2 flex items-center justify-center">
                <img
                  src="/images/微信二维码.webp"
                  alt="大客户总监个人微信二维码"
                  className="w-32 h-32 object-contain rounded-lg block"
                  loading="eager"
                />
              </div>

              <div className="text-[11px] text-secondary mb-1">
                专线直联：<strong className="text-primary">业务决策人 1v1 专属沟通</strong>
              </div>
              <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium mb-3">
                ★ 政策灵活 · 专人专议 · 支持个性化商务统筹
              </div>

              {/* 微信号及复制按钮 */}
              <div className="w-full mt-auto space-y-1.5">
                <div className="w-full py-1 px-2.5 rounded-md bg-surface border border-theme-subtle text-[11px] text-secondary flex items-center justify-between">
                  <span>微信号：</span>
                  <span className="font-mono font-bold text-primary select-all text-xs">{weChatAccount}</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopyWeChat("领立项报告+大客户方案")}
                  className="w-full btn-openai-white text-xs !py-1.5 flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>复制微信号并备注【领立项资料】</span>
                </button>
              </div>
            </div>

            {/* 2. 企业微信（主推：官方实名认证 + 财务发票对公验真） */}
            <div className="codex-panel p-4 border-theme-subtle bg-surface-elevated flex flex-col items-center text-center">
              <div className="w-full flex items-center justify-between mb-3 pb-2 border-b border-theme-subtle">
                <span className="text-xs font-semibold text-primary flex items-center gap-1.5">
                  <QrCode className="w-3.5 h-3.5 text-blue-500" />
                  <span>官方认证企业微信</span>
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 font-medium">
                  企业实名商户
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
                微信或企微扫一扫 · 官方全流程备查留痕
              </div>

              <div className="w-full mt-auto space-y-1.5">
                <div className="w-full py-1.5 px-2.5 rounded-lg bg-surface border border-theme-subtle text-[11px] text-secondary flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#10A37F]" />
                  <span>网银公对公结算 · 6% 专票抵扣</span>
                </div>
                <div className="text-[10px] text-secondary text-center">
                  支持 10 分钟内开具公章正式报价单
                </div>
              </div>
            </div>
          </div>

          {/* 3. 经办人专属商务通道卡片（高阶商务统筹暗语） */}
          <div className="p-3.5 sm:p-4 rounded-xl border border-amber-500/35 bg-gradient-to-r from-amber-500/[0.08] via-surface-elevated to-amber-500/[0.04] text-xs space-y-2 shadow-xs">
            <div className="flex items-center justify-between flex-wrap gap-2 border-b border-amber-500/20 pb-2">
              <div className="flex items-center gap-2 text-primary font-semibold">
                <div className="w-6 h-6 rounded-md bg-amber-500/20 text-amber-700 dark:text-amber-400 flex items-center justify-center">
                  <Coffee className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs sm:text-[13px]">采购主管 / 经办负责人 · 专属商务协同方案</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-300 font-medium">
                专人专议 · 专属定制
              </span>
            </div>

            <p className="text-[11px] text-secondary leading-relaxed">
              充分理解企业采购的实际流程与立项协同。除全套合规专票与公章合同外，我们为大客户采购团队提供灵活的<strong className="text-primary font-semibold">【预算统筹支持与专属商务协同方案】</strong>。
            </p>

            <div className="p-2.5 rounded-lg bg-surface/80 border border-amber-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-start sm:items-center gap-1.5 text-[11px] text-amber-800 dark:text-amber-300">
                <Lock className="w-3.5 h-3.5 shrink-0 mt-0.5 sm:mt-0" />
                <span>
                  <strong>专属服务</strong>：涉及个性化商务统筹、结算条件或大客户专属政策，支持一对一深度沟通与方案定制。
                </span>
              </div>
              <button
                type="button"
                onClick={() => handleCopyWeChat("商务统筹")}
                className="btn-openai-gold text-[11px] !py-1 !px-3 shrink-0 flex items-center justify-center gap-1 cursor-pointer"
              >
                <span>复制并备注【商务统筹】</span>
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* 4. 对公商务邮箱 & 视频会议验真 */}
          <div className="p-3 sm:p-3.5 rounded-xl bg-surface-elevated border border-theme-subtle space-y-2 text-xs text-secondary">
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

            <div className="flex items-start gap-2 pt-0.5 text-[11px] text-secondary leading-relaxed">
              <Video className="w-3.5 h-3.5 text-[#10A37F] shrink-0 mt-0.5" />
              <span>
                <strong>支持腾讯会议视频远程核验：</strong>随时出具企业营业执照原件、金税四期专票开具记录及网银对公电汇凭证原件，成渝地区支持技术总监线下拜访交流。
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

