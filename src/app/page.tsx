"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PainPointsCompare from "@/components/PainPointsCompare";
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

export default function Home() {
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
    // Smooth scroll to calculator
    const calcElement = document.getElementById("calculator");
    if (calcElement) {
      calcElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-canvas text-primary selection:bg-[#10A37F]/30 selection:text-white transition-colors duration-200">
      {/* Fixed Navbar */}
      <Navbar
        onOpenContact={handleOpenContact}
        onOpenDocs={() => setDocsVaultOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Trust Metrics & CTAs */}
        <HeroSection
          onOpenContact={handleOpenContact}
          onOpenDocs={() => setDocsVaultOpen(true)}
        />

        {/* Individual vs Enterprise Pain Points Comparison */}
        <PainPointsCompare />

        {/* Product Catalog (Plus / Pro 5x / Pro 20x / Team) */}
        <ProductCatalog
          onSelectProduct={handleSelectProduct}
          onOpenContact={handleOpenContact}
        />

        {/* Interactive Pricing Calculator */}
        <PricingCalculator
          selectedProductId={selectedProduct}
          onOpenContact={handleOpenContact}
        />

        {/* Financial Compliance Showcase (VAT Invoice, Bank Slip, OpenAI Invoice, Contract) */}
        <ComplianceShowcase />

        {/* Procurement Perks (Tea Water & Incentives for Buyers) */}
        <ProcurementPerks
          onOpenContact={handleOpenContact}
        />

        {/* 4-Pillar SLA Guarantees */}
        <SlaGuarantee
          onOpenDocs={() => setDocsVaultOpen(true)}
          onOpenContact={handleOpenContact}
        />

        {/* High Frequency FAQs */}
        <FaqSection />
      </main>

      {/* Comprehensive Footer */}
      <Footer
        onOpenDocs={() => setDocsVaultOpen(true)}
        onOpenContact={handleOpenContact}
      />

      {/* Business Docs Vault Modal */}
      <DocsVault
        isOpen={docsVaultOpen}
        onClose={() => setDocsVaultOpen(false)}
        onOpenContact={handleOpenContact}
      />

      {/* Floating Customer Service / Advisor Widget */}
      <FloatingContact
        onOpenFullContact={(source = "floating-widget") => handleOpenContact(source)}
      />

      {/* Contact Customer Advisor Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        source={contactSource}
      />
    </div>
  );
}
