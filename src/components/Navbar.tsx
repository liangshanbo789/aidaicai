"use client";

import React, { useState } from "react";
import { Sparkles, MessageCircle, FileText, Menu, X } from "lucide-react";
import BrandLogo from "./BrandLogo";
import ThemeToggle from "./ThemeToggle";

interface NavbarProps {
  onOpenContact: (source?: string) => void;
  onOpenDocs: () => void;
}

export default function Navbar({ onOpenContact, onOpenDocs }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-theme-subtle bg-[var(--bg-canvas)]/90 backdrop-blur-xl transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo with aidaicai.com */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-surface-elevated border border-theme-subtle flex items-center justify-center shadow-xs transition-colors hover:border-[#10A37F]/30">
            <BrandLogo size={18} variant="emerald" />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-base tracking-tight text-primary">AI 代采</span>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-surface-elevated text-secondary border border-theme-subtle">
              aidaicai.com
            </span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-secondary">
          <a href="#compare" className="hover:text-primary transition-colors">
            选型对比
          </a>
          <a href="#products" className="hover:text-primary transition-colors">
            代采矩阵
          </a>
          <a href="#calculator" className="hover:text-primary transition-colors">
            预算计算器
          </a>
          <a href="#compliance" className="hover:text-primary transition-colors">
            发票与对公样张
          </a>
          <a href="#sla" className="hover:text-primary transition-colors">
            SLA保障
          </a>
          <a
            href="#perks"
            className="hover:text-amber-500 dark:hover:text-amber-300 transition-colors flex items-center gap-1.5 text-amber-600 dark:text-amber-400 font-medium"
          >
            <span>采购关怀计划</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amber-400 animate-pulse" />
          </a>
        </nav>

        {/* CTA Buttons & Theme Toggle */}
        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle variant="pill" />
          <button
            onClick={onOpenDocs}
            className="btn-openai-secondary text-xs !py-1.5 !px-3.5 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-secondary" />
            <span>立项报告模板</span>
          </button>
          <button
            onClick={() => onOpenContact("navbar")}
            className="btn-openai-white text-xs !py-1.5 !px-4 cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>获取对公代采方案</span>
          </button>
        </div>

        {/* Mobile Menu Toggle & Theme Switcher */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle variant="icon" />
          <button
            onClick={() => onOpenContact("mobile-nav")}
            className="btn-openai-white text-xs !py-1 !px-3 cursor-pointer"
          >
            对公咨询
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-secondary hover:text-primary rounded-lg bg-surface-elevated border border-theme-subtle cursor-pointer"
            aria-label={mobileMenuOpen ? "关闭导航菜单" : "展开导航菜单"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-theme-subtle bg-surface-elevated px-6 py-5 space-y-3.5 shadow-lg">
          <ThemeToggle variant="mobile-item" className="mb-2" />
          <a
            href="#compare"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-xs font-medium text-secondary hover:text-primary py-1"
          >
            代采 vs 个人代充对比
          </a>
          <a
            href="#products"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-xs font-medium text-secondary hover:text-primary py-1"
          >
            代采矩阵 (Plus / Pro / Team)
          </a>
          <a
            href="#calculator"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-xs font-medium text-secondary hover:text-primary py-1"
          >
            实时采购阶梯计算器
          </a>
          <a
            href="#compliance"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-xs font-medium text-secondary hover:text-primary py-1"
          >
            对公流水与发票样张
          </a>
          <a
            href="#sla"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-xs font-medium text-secondary hover:text-primary py-1"
          >
            72h 封号退赔保障
          </a>
          <a
            href="#perks"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-xs font-medium text-amber-600 dark:text-amber-300 py-1"
          >
            大客户采购尊享权益
          </a>
          <div className="pt-3 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDocs();
              }}
              className="btn-openai-secondary w-full text-xs cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-secondary" />
              <span>查看企业立项报告模板</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact("mobile-drawer");
              }}
              className="btn-openai-white w-full text-xs cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>添加官方大客户企微</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
