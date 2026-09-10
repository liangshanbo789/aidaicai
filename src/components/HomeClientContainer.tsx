"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PainPointsCompare from "@/components/PainPointsCompare";
import ProcurementWorkflow from "@/components/ProcurementWorkflow";
import ProductCatalog from "@/components/ProductCatalog";
import PricingCalculator from "@/components/PricingCalculator";
import ComplianceShowcase from "@/components/ComplianceShowcase";
import ProcurementPerks from "@/components/ProcurementPerks";
import SlaGuarantee from "@/components/SlaGuarantee";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import DocsVault from "@/components/DocsVault";
import ContactModal from "@/components/ContactModal";
import FloatingContact from "@/components/FloatingContact";

export default function HomeClientContainer() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [contactSource, setContactSource] = useState<string>("general");
  const [docsVaultOpen, setDocsVaultOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string>("pro20x");

  const handleOpenContact = (source: string = "general") => {
    setContactSource(source);
    setContactModalOpen(true);
  };

  const handleSelectProduct = (productId: string) => {
    setSelectedProduct(productId);
    // 平滑滚动至计算器
    const calcElement = document.getElementById("calculator");
    if (calcElement) {
      calcElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-canvas text-primary selection:bg-[#10A37F]/30 selection:text-white transition-colors duration-200">
      {/* 顶部导航 */}
      <Navbar
        onOpenContact={handleOpenContact}
        onOpenDocs={() => setDocsVaultOpen(true)}
      />

      {/* 主屏各区块 */}
      <main className="flex-1">
        {/* 首屏 Trust Metrics & CTAs */}
        <HeroSection
          onOpenContact={handleOpenContact}
          onOpenDocs={() => setDocsVaultOpen(true)}
        />

        {/* 个人代充 vs 企业官方代采痛点对比 */}
        <PainPointsCompare />

        {/* 全阳光对公代采 4 步交付闭环 */}
        <ProcurementWorkflow
          onOpenContact={handleOpenContact}
          onOpenDocs={() => setDocsVaultOpen(true)}
        />

        {/* 产品目录 (Plus / Pro 5x / Pro 20x / Team) */}
        <ProductCatalog
          onSelectProduct={handleSelectProduct}
          onOpenContact={handleOpenContact}
        />

        {/* 交互式阶梯计算器 */}
        <PricingCalculator
          selectedProductId={selectedProduct}
          onOpenContact={handleOpenContact}
        />

        {/* 真实合规凭据展示 (专票/银行回单/官方账单/公章) */}
        <ComplianceShowcase />

        {/* 大客户集采增值礼遇 */}
        <ProcurementPerks
          onOpenContact={handleOpenContact}
        />

        {/* 4 重安全保障与 72h 封号兜底 */}
        <SlaGuarantee
          onOpenDocs={() => setDocsVaultOpen(true)}
          onOpenContact={handleOpenContact}
        />

        {/* 常见高频问答 */}
        <FaqSection />
      </main>

      {/* 企业页脚 */}
      <Footer
        onOpenDocs={() => setDocsVaultOpen(true)}
        onOpenContact={handleOpenContact}
      />

      {/* 商务文档阅读与一键复制弹窗 */}
      <DocsVault
        isOpen={docsVaultOpen}
        onClose={() => setDocsVaultOpen(false)}
        onOpenContact={handleOpenContact}
      />

      {/* 悬浮客服挂件 */}
      <FloatingContact
        onOpenFullContact={(source = "floating-widget") => handleOpenContact(source)}
      />

      {/* 客服咨询对接弹窗 */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        source={contactSource}
      />
    </div>
  );
}
