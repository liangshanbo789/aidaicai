"use client";

import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

interface ThemeToggleProps {
  variant?: "pill" | "icon" | "mobile-item";
  className?: string;
}

export default function ThemeToggle({
  variant = "pill",
  className = "",
}: ThemeToggleProps) {
  const { theme, toggleTheme, mounted } = useTheme();

  // 未挂载时展示占位，防止水合不匹配
  if (!mounted) {
    if (variant === "icon") {
      return (
        <div className={`w-8 h-8 rounded-lg border border-theme-subtle bg-surface-elevated opacity-50 ${className}`} />
      );
    }
    if (variant === "mobile-item") {
      return (
        <div className="w-full py-2 px-3 rounded-lg border border-theme-subtle opacity-50 text-xs">
          切换配色模式
        </div>
      );
    }
    return (
      <div className={`h-8 w-20 rounded-full border border-theme-subtle opacity-50 ${className}`} />
    );
  }

  const isDark = theme === "dark";

  if (variant === "mobile-item") {
    return (
      <button
        onClick={toggleTheme}
        type="button"
        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg border transition-all text-xs font-medium ${
          isDark
            ? "bg-zinc-900/80 border-white/10 text-zinc-200 hover:bg-zinc-800"
            : "bg-zinc-100 border-zinc-200 text-zinc-800 hover:bg-zinc-200"
        } ${className}`}
        aria-label="切换浅色/深色主题"
      >
        <span className="flex items-center gap-2">
          {isDark ? (
            <Moon className="w-4 h-4 text-emerald-400" />
          ) : (
            <Sun className="w-4 h-4 text-amber-500" />
          )}
          <span>当前主题：{isDark ? "深色极客黑" : "经典纯白浅色"}</span>
        </span>
        <span className="text-[11px] px-2 py-0.5 rounded bg-theme-surface-elevated text-secondary">
          点击切换
        </span>
      </button>
    );
  }

  if (variant === "icon") {
    return (
      <button
        onClick={toggleTheme}
        type="button"
        className={`w-8 h-8 rounded-lg border border-theme-subtle bg-surface-elevated text-secondary hover:text-primary hover:border-theme-hover flex items-center justify-center transition-all duration-200 shadow-xs cursor-pointer ${className}`}
        title={isDark ? "切换为浅色模式" : "切换为深色模式"}
        aria-label="切换颜色模式"
      >
        {isDark ? (
          <Sun className="w-4 h-4 text-zinc-300 hover:text-amber-400 transition-colors" />
        ) : (
          <Moon className="w-4 h-4 text-zinc-600 hover:text-emerald-600 transition-colors" />
        )}
      </button>
    );
  }

  // 默认 pill 胶囊切换器 (OpenAI 极简科技风格)
  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-theme-subtle bg-surface-elevated text-secondary hover:text-primary hover:border-theme-hover transition-all duration-200 text-xs font-medium cursor-pointer shadow-sm ${className}`}
      title={isDark ? "切换为浅色模式" : "切换为深色模式"}
      aria-label="切换浅色或深色主题"
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-3.5 h-3.5 text-zinc-400 hover:text-amber-400 transition-transform duration-300 hover:rotate-45" />
        ) : (
          <Moon className="w-3.5 h-3.5 text-zinc-600 hover:text-emerald-600 transition-transform duration-300 hover:-rotate-12" />
        )}
      </div>
      <span className="text-[11px] font-medium tracking-wide">
        {isDark ? "浅色模式" : "深色模式"}
      </span>
    </button>
  );
}

export { ThemeToggle };

