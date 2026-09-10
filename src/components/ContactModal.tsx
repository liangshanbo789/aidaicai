"use client";

import React, { useState } from "react";
import { MessageCircle, Copy, Check, QrCode, Building, Send, ShieldCheck } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
}

export default function ContactModal({ isOpen, onClose, source }: ContactModalProps) {
  const [copiedWeChat, setCopiedWeChat] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    company: "",
    contact: "",
    phone: "",
    quantity: "5~10个账号",
    note: "",
  });

  if (!isOpen) return null;

  const weChatAccount = "yqtp01";

  const handleCopy = () => {
    navigator.clipboard.writeText(weChatAccount).then(() => {
      setCopiedWeChat(true);
      setTimeout(() => setCopiedWeChat(false), 2500);
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="bg-surface border border-theme-subtle rounded-2xl w-full max-w-2xl max-h-[95vh] overflow-hidden shadow-2xl flex flex-col">
        {/* Modal Header */}
        <div className="p-5 border-b border-theme-subtle bg-surface-elevated flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-surface border border-theme-subtle text-primary flex items-center justify-center shadow-xs">
              <MessageCircle className="w-4 h-4 text-[#10A37F]" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-semibold text-primary">联系业务经理 / 客服支持</h3>
              <p className="text-[11px] text-secondary">微信扫码直联 · 支持企业公对公转账与 6% 增值税专票</p>
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
        <div className="p-6 overflow-y-auto space-y-6">
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
                  微信直联
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
                <span>对公转账 · 专票开具 · 方案对接</span>
              </div>
            </div>
          </div>

          {/* Quick Inquiry Form */}
          {!formSubmitted ? (
            <form onSubmit={handleSubmit} className="codex-panel p-5 border-theme-subtle bg-surface-elevated space-y-3.5">
              <div className="text-xs font-semibold text-primary flex items-center gap-2">
                <Building className="w-3.5 h-3.5 text-secondary" />
                <span>快速提交需求，10 分钟内由专属顾问致电并发送报价单：</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block text-secondary mb-1">企业全称 *</label>
                  <input
                    type="text"
                    required
                    placeholder="如：北京某某科技有限公司"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-surface border border-theme-subtle text-primary placeholder:text-placeholder focus:outline-none focus:border-primary/50 text-xs shadow-xs"
                  />
                </div>
                <div>
                  <label className="block text-secondary mb-1">联系人姓名/职务 *</label>
                  <input
                    type="text"
                    required
                    placeholder="如：张经理 / IT采购主管"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-surface border border-theme-subtle text-primary placeholder:text-placeholder focus:outline-none focus:border-primary/50 text-xs shadow-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block text-secondary mb-1">手机号 / 微信 *</label>
                  <input
                    type="text"
                    required
                    placeholder="方便接收报价单与合同"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-surface border border-theme-subtle text-primary placeholder:text-placeholder focus:outline-none focus:border-primary/50 text-xs shadow-xs"
                  />
                </div>
                <div>
                  <label className="block text-secondary mb-1">预计采购规模</label>
                  <select
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-surface border border-theme-subtle text-primary focus:outline-none focus:border-primary/50 text-xs shadow-xs"
                  >
                    <option value="1~4个账号">1~4 个账号 (基础试用)</option>
                    <option value="5~10个账号">5~10 个账号 (研发组常用)</option>
                    <option value="10~20个账号">10~20 个账号 (大客户享9折)</option>
                    <option value="20个以上定制">20 个以上 (深度定制方案)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="btn-openai-white w-full text-xs !py-2.5 flex items-center justify-center gap-1.5 mt-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>立即提交需求，获取加盖公章正式报价单</span>
              </button>
            </form>
          ) : (
            <div className="p-6 rounded-xl bg-emerald-500/[0.08] border border-emerald-500/20 text-center space-y-2 animate-fade-in">
              <div className="w-9 h-9 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto">
                <Check className="w-4 h-4" />
              </div>
              <h4 className="text-sm sm:text-base font-semibold text-primary">需求已成功接收！</h4>
              <p className="text-xs text-secondary max-w-sm mx-auto">
                专属大客户总监已收到您的采购意向，将在 10 分钟内添加您的联系方式并发送《企业采购阶梯报价单》与《立项申请模板》。
              </p>
            </div>
          )}

          {/* Privacy & Compliance Note */}
          <div className="flex items-center gap-2 text-[11px] text-secondary">
            <ShieldCheck className="w-4 h-4 text-[#10A37F] shrink-0" />
            <span>严格遵守保密规范，所有企业信息仅用于本次方案对接，严禁用于任何第三方商业推广。</span>
          </div>
        </div>
      </div>
    </div>
  );
}
