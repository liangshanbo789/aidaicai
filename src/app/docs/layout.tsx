import React from "react";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import ThemeToggle from "@/components/ThemeToggle";
import {
  ArrowLeft,
  BookOpen,
  ShieldCheck,
  Receipt,
  FileText,
  FileCheck,
} from "lucide-react";

const DOCS_NAV = [
  {
    href: "/docs/proposal",
    label: "立项呈批模板",
    icon: FileText,
    badge: "采购汇报",
  },
  {
    href: "/docs/pricing",
    label: "阶梯代采报价单",
    icon: Receipt,
    badge: "2026最新",
  },
  {
    href: "/docs/sla",
    label: "SLA退赔保障条款",
    icon: ShieldCheck,
    badge: "72h兜底",
  },
  {
    href: "/docs/agreement",
    label: "代采购合作协议",
    icon: FileCheck,
    badge: "法务合规",
  },
];

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-canvas text-primary transition-colors duration-200">
      {/* 顶部简明导航 */}
      <header className="sticky top-0 z-40 border-b border-theme-subtle bg-surface/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="flex items-center gap-2 group text-secondary hover:text-primary transition-colors"
              title="返回官网首页"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span className="text-xs font-medium">返回首页</span>
            </Link>

            <div className="h-4 w-px bg-theme-subtle" />

            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-surface-elevated border border-theme-subtle flex items-center justify-center shadow-xs">
                <BrandLogo size={16} variant="emerald" />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-sm tracking-tight text-primary">
                  AI 代采
                </span>
                <span className="text-[11px] font-mono text-secondary">
                  文档知识库
                </span>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/solutions/codex-procurement/"
              className="text-xs text-secondary hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors hidden md:inline-flex items-center gap-1 font-medium"
            >
              <span>Codex研发代采</span>
            </Link>
            <Link
              href="/solutions/gpt-bulk-procurement/"
              className="text-xs text-secondary hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors hidden md:inline-flex items-center gap-1 font-medium"
            >
              <span>企业GPT集采</span>
            </Link>
            <ThemeToggle />
            <a
              href="/#calculator"
              className="btn-openai-white text-xs px-3.5 py-1.5 hidden sm:inline-flex"
            >
              测算对公预算
            </a>
          </div>
        </div>

        {/* 二级文档切换导航条 */}
        <div className="border-t border-theme-subtle bg-surface-elevated/60 overflow-x-auto scrollbar-none">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 py-2">
            <div className="flex items-center gap-1 text-[11px] font-mono text-tertiary mr-2 shrink-0">
              <BookOpen className="w-3.5 h-3.5 text-[#10A37F]" />
              <span>知识库目录:</span>
            </div>
            {DOCS_NAV.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs text-secondary hover:text-primary hover:bg-surface border border-transparent hover:border-theme-subtle transition-all shrink-0"
                >
                  <Icon className="w-3.5 h-3.5 text-secondary" />
                  <span>{item.label}</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-surface text-tertiary border border-theme-subtle font-mono">
                    {item.badge}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </header>

      {/* 正文主体 */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
        {children}
      </main>

      {/* 底部版权与免责说明 */}
      <footer className="border-t border-theme-subtle bg-surface-elevated text-xs text-secondary py-8 mt-16 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2">
          <p className="text-secondary">
            AI 代采 (gongsi.one) · 企业级海外 AI 官方代采与对公合规解决方案
          </p>
          <p className="text-[11px] text-tertiary font-mono">
            四川省成都市高新区AI创新中心 · 官方客服微信：yqtp01 ·
            邮箱：liang@yqtp.cn
          </p>
        </div>
      </footer>
    </div>
  );
}
