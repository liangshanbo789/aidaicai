"use client";

import React from "react";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import BrandLogo from "./BrandLogo";

interface FooterProps {
  onOpenDocs: () => void;
  onOpenContact: (source?: string) => void;
}

export default function Footer({ onOpenDocs, onOpenContact }: FooterProps) {
  return (
    <footer className="border-t border-theme-subtle bg-surface-elevated text-xs text-secondary transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand Info */}
          <div className="space-y-3.5 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-surface border border-theme-subtle flex items-center justify-center shadow-xs">
                <BrandLogo size={16} variant="emerald" />
              </div>
              <div>
                <span className="font-semibold text-base text-primary">AI 代采</span>
                <span className="ml-2 text-[10px] font-mono text-secondary">aidaicai.com</span>
              </div>
            </div>
            <p className="text-xs text-secondary leading-relaxed">
              国内领先的企业级海外 AI 生产力工具代采与对公结算服务商。专注为出海与科技研发企业提供正规海外商业卡代采、数电专票与 SLA 售后兜底。
            </p>
            <div className="pt-1 text-[11px] text-tertiary font-mono">
              aidaicai.com · AI代采平台 © 2026 版权所有
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-primary">方案与服务</h4>
            <ul className="space-y-2.5">
              <li><a href="#compare" className="hover:text-primary transition-colors text-secondary">官方代采 vs 个人代充对比</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors text-secondary">代采矩阵 (Plus / Pro / Team)</a></li>
              <li><a href="#calculator" className="hover:text-primary transition-colors text-secondary">实时阶梯预算测算引擎</a></li>
              <li><a href="#compliance" className="hover:text-primary transition-colors text-secondary">增值税专用发票对公样张</a></li>
              <li><a href="#sla" className="hover:text-primary transition-colors text-secondary">72h 封号包赔与 SLA 条款</a></li>
            </ul>
          </div>

          {/* Col 3: Procurement & Docs */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-primary">商务与采购支持</h4>
            <ul className="space-y-2.5">
              <li>
                <button onClick={onOpenDocs} className="hover:text-primary transition-colors text-left text-secondary cursor-pointer">
                  《企业代采立项呈批模板》Word
                </button>
              </li>
              <li>
                <button onClick={onOpenDocs} className="hover:text-primary transition-colors text-left text-secondary cursor-pointer">
                  《官方阶梯代采报价单》PDF
                </button>
              </li>
              <li>
                <a href="#perks" className="hover:text-amber-500 transition-colors text-amber-600 dark:text-amber-400 font-medium">
                  大客户集采尊享权益计划
                </a>
              </li>
              <li>
                <button onClick={() => onOpenContact("footer-contract")} className="hover:text-primary transition-colors text-left text-secondary cursor-pointer">
                  索取加盖公章标准代采合同范本
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Disclaimer */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-primary">官方联系方式</h4>
            <div className="space-y-2 text-xs text-secondary">
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-secondary" />
                <span className="font-mono text-primary font-medium">www.aidaicai.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-secondary" />
                <span>biz@aidaicai.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-secondary" />
                <span>400-820-9188 / 企微在线值守</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-secondary" />
                <span>北京市海淀区中关村前沿技术创新中心</span>
              </div>
            </div>
            <div className="pt-2">
              <button
                onClick={() => onOpenContact("footer-cta")}
                className="btn-openai-white text-xs !py-2 w-full cursor-pointer"
              >
                对接大客户代采总监
              </button>
            </div>
          </div>
        </div>

        {/* Disclaimer Bar */}
        <div className="pt-8 border-t border-theme-subtle text-[11px] text-tertiary leading-relaxed space-y-1">
          <p>
            <strong className="text-secondary font-medium">免责与合规声明：</strong>OpenAI、ChatGPT、GPT-6 Astra、GPT-5.6、o1、o3 及其相关商标均为 OpenAI, LLC 及其关联方的专有财产。<strong className="text-secondary font-medium">AI 代采 (aidaicai.com)</strong> 作为独立的企业级海外软件数字化采购与 SaaS 解决方案服务商，严格依据国际商业贸易惯例为中国企业提供合规的外币清算、代理采购、企业对公结算开票与本地化技术支持服务，与 OpenAI 官方无股权或代销关系。
          </p>
        </div>
      </div>
    </footer>
  );
}
