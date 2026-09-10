"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  MessageCircle,
  FileText,
  Menu,
  X,
  ChevronDown,
  Code2,
  Building2,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import BrandLogo from "./BrandLogo";
import ThemeToggle from "./ThemeToggle";

interface NavbarProps {
  onOpenContact: (source?: string) => void;
  onOpenDocs: () => void;
}

export default function Navbar({ onOpenContact, onOpenDocs }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 下拉菜单防抖延时关闭，提升鼠标划入体验
  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setSolutionsOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setSolutionsOpen(false);
    }, 160);
  };

  // 点击外部或按 Esc 关闭下拉菜单
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSolutionsOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setSolutionsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-theme-subtle bg-[var(--bg-canvas)]/90 backdrop-blur-xl transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 shrink-0 group py-1"
          title="返回 AI 代采 首页"
        >
          <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center shadow-sm shadow-emerald-500/20 ring-1 ring-white/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-md group-hover:shadow-emerald-500/30">
            <BrandLogo size={20} variant="white" className="drop-shadow-xs" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1 leading-tight">
              <span className="font-extrabold text-[15px] tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300 bg-clip-text text-transparent font-sans">
                AI
              </span>
              <span className="font-bold text-[15px] tracking-tight text-primary">
                代采
              </span>
            </div>
            <span className="text-[10px] text-tertiary tracking-wide font-normal leading-tight mt-0.5 whitespace-nowrap">
              企业级海外 AI 采购服务商
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs font-medium text-secondary">
          {/* 解决方案 Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              onClick={() => setSolutionsOpen(!solutionsOpen)}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                solutionsOpen
                  ? "text-primary bg-surface-elevated"
                  : "text-secondary hover:text-primary hover:bg-surface-elevated/70"
              }`}
              aria-expanded={solutionsOpen}
            >
              <span>方案中心</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  solutionsOpen ? "rotate-180 text-emerald-500" : "text-tertiary"
                }`}
              />
            </button>

            {/* 下拉浮层卡片 (Stripe / OpenAI 风格) */}
            {solutionsOpen && (
              <div className="absolute top-full left-0 pt-2 w-80 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <div className="p-2 rounded-xl border border-theme-default bg-surface/98 backdrop-blur-xl shadow-xl space-y-1">
                  <div className="px-2.5 py-1 text-[10px] font-semibold text-tertiary uppercase tracking-wider font-mono">
                    企业采购方案
                  </div>

                  {/* Codex 研发方案 */}
                  <Link
                    href="/solutions/codex-procurement/"
                    onClick={() => setSolutionsOpen(false)}
                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-surface-elevated transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-emerald-500/15">
                      <Code2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <span className="font-semibold text-xs text-primary group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                          Codex 研发代码助手
                        </span>
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono border border-emerald-500/20">
                          效能
                        </span>
                      </div>
                      <p className="text-[11px] text-secondary leading-relaxed line-clamp-2">
                        工程师高频并发开发 · 专属独立环境 · SLA兜底
                      </p>
                    </div>
                  </Link>

                  {/* 企业 GPT 集采方案 */}
                  <Link
                    href="/solutions/gpt-bulk-procurement/"
                    onClick={() => setSolutionsOpen(false)}
                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-surface-elevated transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-blue-500/15">
                      <Building2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <span className="font-semibold text-xs text-primary group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          企业 GPT 官方集中采购
                        </span>
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 font-mono border border-blue-500/20">
                          阶梯
                        </span>
                      </div>
                      <p className="text-[11px] text-secondary leading-relaxed line-clamp-2">
                        团队批量集采 · 对公直签与6%专票 · 极速交付
                      </p>
                    </div>
                  </Link>

                  {/* 下拉底部文档入口 */}
                  <div className="border-t border-theme-subtle pt-1 mt-1">
                    <Link
                      href="/docs/pricing/"
                      onClick={() => setSolutionsOpen(false)}
                      className="flex items-center justify-between px-2.5 py-2 rounded-lg text-[11px] text-secondary hover:text-primary hover:bg-surface-elevated transition-colors"
                    >
                      <span className="flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-secondary" />
                        <span>查看官方代采阶梯报价手册</span>
                      </span>
                      <ArrowRight className="w-3 h-3 text-tertiary" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 锚点导航项 */}
          <a
            href="#compare"
            className="px-2.5 py-1.5 rounded-md hover:text-primary hover:bg-surface-elevated/70 transition-colors whitespace-nowrap"
          >
            选型对比
          </a>
          <a
            href="#products"
            className="px-2.5 py-1.5 rounded-md hover:text-primary hover:bg-surface-elevated/70 transition-colors whitespace-nowrap"
          >
            代采矩阵
          </a>
          <a
            href="#workflow"
            className="px-2.5 py-1.5 rounded-md hover:text-primary hover:bg-surface-elevated/70 transition-colors whitespace-nowrap"
          >
            交付闭环
          </a>
          <a
            href="#compliance"
            className="px-2.5 py-1.5 rounded-md hover:text-primary hover:bg-surface-elevated/70 transition-colors whitespace-nowrap hidden xl:inline-block"
          >
            对公样张
          </a>
          <a
            href="#calculator"
            className="px-2.5 py-1.5 rounded-md hover:text-primary hover:bg-surface-elevated/70 transition-colors whitespace-nowrap"
          >
            预算测算
          </a>
          <a
            href="#perks"
            className="px-2.5 py-1.5 rounded-md hover:text-amber-500 dark:hover:text-amber-300 hover:bg-amber-500/5 transition-colors inline-flex items-center gap-1.5 text-amber-600 dark:text-amber-400 font-medium whitespace-nowrap"
          >
            <span>集采礼遇</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amber-400 animate-pulse" />
          </a>
        </nav>

        {/* CTA Buttons & Theme Toggle */}
        <div className="hidden lg:flex items-center gap-2.5 shrink-0">
          <ThemeToggle variant="icon" />
          <button
            onClick={onOpenDocs}
            className="btn-openai-secondary text-xs !py-1.5 !px-3 cursor-pointer whitespace-nowrap hidden xl:inline-flex items-center gap-1.5"
            title="查看企业立项报告模板与合作协议"
          >
            <FileText className="w-3.5 h-3.5 text-secondary" />
            <span>立项报告模板</span>
          </button>
          <button
            onClick={() => onOpenContact("navbar")}
            className="btn-openai-white text-xs !py-1.5 !px-4 cursor-pointer flex items-center gap-1.5 shrink-0 whitespace-nowrap"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <MessageCircle className="w-3.5 h-3.5" />
            <span>7×24H 对公咨询</span>
          </button>
        </div>

        {/* Mobile Menu Toggle & Actions */}
        <div className="lg:hidden flex items-center gap-2 shrink-0">
          <ThemeToggle variant="icon" />
          <button
            onClick={() => onOpenContact("mobile-nav")}
            className="btn-openai-white text-xs !py-1.5 !px-3 cursor-pointer flex items-center gap-1 whitespace-nowrap"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>7×24H 咨询</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-secondary hover:text-primary rounded-lg bg-surface-elevated border border-theme-subtle cursor-pointer transition-colors"
            aria-label={mobileMenuOpen ? "关闭导航菜单" : "展开导航菜单"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-theme-subtle bg-surface-elevated/95 backdrop-blur-xl px-5 py-4 space-y-4 shadow-xl max-h-[85vh] overflow-y-auto">
          {/* 方案专区卡片 */}
          <div className="space-y-1.5">
            <div className="text-[11px] font-medium text-tertiary px-1 font-mono uppercase tracking-wider">
              落地解决方案
            </div>
            <div className="grid grid-cols-1 gap-2">
              <Link
                href="/solutions/codex-procurement/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg bg-surface border border-theme-subtle hover:border-emerald-500/40 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-md bg-emerald-500/10 flex items-center justify-center">
                    <Code2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-primary">Codex 研发代采</div>
                    <div className="text-[10px] text-secondary">研发效能 · 高频并发</div>
                  </div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-tertiary" />
              </Link>

              <Link
                href="/solutions/gpt-bulk-procurement/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg bg-surface border border-theme-subtle hover:border-blue-500/40 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-md bg-blue-500/10 flex items-center justify-center">
                    <Building2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-primary">企业 GPT 官方集采</div>
                    <div className="text-[10px] text-secondary">阶梯批量 · 阳光对公</div>
                  </div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-tertiary" />
              </Link>
            </div>
          </div>

          {/* 核心功能导航列表 */}
          <div className="space-y-1 pt-1 border-t border-theme-subtle">
            <div className="text-[11px] font-medium text-tertiary px-1 py-1 font-mono uppercase tracking-wider">
              快速直达
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              <a
                href="#compare"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg bg-surface/50 border border-theme-subtle text-xs font-medium text-secondary hover:text-primary transition-colors block text-center"
              >
                选型对比
              </a>
              <a
                href="#products"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg bg-surface/50 border border-theme-subtle text-xs font-medium text-secondary hover:text-primary transition-colors block text-center"
              >
                代采矩阵
              </a>
              <a
                href="#workflow"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg bg-surface/50 border border-theme-subtle text-xs font-medium text-secondary hover:text-primary transition-colors block text-center"
              >
                交付闭环
              </a>
              <a
                href="#compliance"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg bg-surface/50 border border-theme-subtle text-xs font-medium text-secondary hover:text-primary transition-colors block text-center"
              >
                对公发票样张
              </a>
              <a
                href="#calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg bg-surface/50 border border-theme-subtle text-xs font-medium text-secondary hover:text-primary transition-colors block text-center"
              >
                预算测算器
              </a>
              <a
                href="#perks"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs font-medium text-amber-600 dark:text-amber-300 transition-colors block text-center"
              >
                ★ 集采尊享礼遇
              </a>
            </div>
          </div>

          {/* 底部快捷操作 */}
          <div className="pt-2 border-t border-theme-subtle space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDocs();
              }}
              className="btn-openai-secondary w-full text-xs !py-2 cursor-pointer flex items-center justify-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-secondary" />
              <span>查看立项报告模板与协议</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact("mobile-drawer");
              }}
              className="btn-openai-white w-full text-xs !py-2 cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <MessageCircle className="w-3.5 h-3.5" />
              <span>添加 7×24H 官方大客户企微</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
