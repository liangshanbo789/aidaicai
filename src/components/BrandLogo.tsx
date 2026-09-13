"use client";

import React from "react";

export interface BrandLogoProps {
  /** 尺寸大小（像素或 Tailwind 预设） */
  size?: number | "xs" | "sm" | "md" | "lg" | "xl";
  /** 自定义 class 样式 */
  className?: string;
  /** 配色变体：emerald 经典翡翠绿（默认）、monochrome 随父级文字色、glow 带微发光效果、white 纯白 */
  variant?: "emerald" | "monochrome" | "glow" | "white";
  /** 是否隐藏无障碍标签 */
  ariaLabel?: string;
}

const sizeMap = {
  xs: 16,
  sm: 18,
  md: 22,
  lg: 28,
  xl: 36,
};

export default function BrandLogo({
  size = "md",
  className = "",
  variant = "emerald",
  ariaLabel = "AI代采 Logo",
}: BrandLogoProps) {
  const pixelSize = typeof size === "number" ? size : sizeMap[size] || 22;

  // 颜色样式映射
  let colorClass = "text-[#064E3B]";
  if (variant === "monochrome") {
    colorClass = "text-current";
  } else if (variant === "white") {
    colorClass = "text-white";
  }

  return (
    <span
      className={`inline-flex items-center justify-center relative select-none flex-shrink-0 ${className}`}
      style={{ width: pixelSize, height: pixelSize }}
      role="img"
      aria-label={ariaLabel}
    >
      {/* 翡翠绿模式下的微光晕 */}
      {variant === "glow" && (
        <span
          className="absolute inset-0 rounded-full bg-[#39866B]/30 blur-md pointer-events-none scale-125"
          aria-hidden="true"
        />
      )}

      <svg
        viewBox="0 0 24 24"
        width={pixelSize}
        height={pixelSize}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-full transition-transform duration-300 group-hover:scale-105 ${colorClass}`}
      >
        <path d="M12 6 L18.5 18" stroke="currentColor" strokeWidth="9" strokeLinecap="round" opacity="0.72" fill="none" />
        <path d="M8.5 12.5 L4.5 18" stroke="currentColor" strokeWidth="8" strokeLinecap="round" fill="none" />
      </svg>
    </span>
  );
}

