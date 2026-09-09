"use client";

import React, { useState } from "react";
import { MessageCircle, Phone, Copy, Check, QrCode, Building, Send, ShieldCheck } from "lucide-react";

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

  const weChatAccount = "aidaicai_biz";

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
              <h3 className="text-sm sm:text-base font-semibold text-primary">联系 AI 代采 (aidaicai.com) 专属顾问</h3>
              <p className="text-[11px] text-secondary">支持企业银行对公转账 · 6% 增值税专票 · 采购经理专属关怀</p>
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
            {/* WeChat Card */}
            <div className="codex-panel p-4 border-theme-subtle bg-surface-elevated">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-primary flex items-center gap-1.5">
                  <QrCode className="w-3.5 h-3.5 text-[#10A37F]" />
                  <span>官方企业微信 (蓝V认证)</span>
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium">
                  在线值守
                </span>
              </div>
              <div className="text-sm font-mono font-semibold text-primary mb-3">
                企微号：<span className="text-[#10A37F]">{weChatAccount}</span>
              </div>
              <button
                onClick={handleCopy}
                className="w-full btn-openai-white text-xs !py-1.5 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {copiedWeChat ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedWeChat ? "企微号已复制，快去微信添加吧！" : "复制微信号一键添加"}</span>
              </button>
            </div>

            {/* Direct Line Card */}
            <div className="codex-panel p-4 border-theme-subtle bg-surface-elevated">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-secondary flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-secondary" />
                  <span>大客户应急直拨热线</span>
                </span>
                <span className="text-[10px] text-secondary font-mono">
                  7×12小时
                </span>
              </div>
              <div className="text-sm font-semibold text-primary mb-1 font-mono">
                400-820-9188 / 186-0000-8892
              </div>
              <div className="text-[11px] text-secondary">
                服务时间：周一至周日 09:00 - 22:00
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
