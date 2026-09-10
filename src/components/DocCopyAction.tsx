"use client";

import React, { useState } from "react";
import { Copy, Check, MessageSquare } from "lucide-react";
import ContactModal from "./ContactModal";

interface DocCopyActionProps {
  content: string;
  source: string;
}

export default function DocCopyAction({ content, source }: DocCopyActionProps) {
  const [copied, setCopied] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <>
      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={handleCopy}
          className="btn-openai-white text-xs px-4 py-2 inline-flex items-center gap-2 cursor-pointer shadow-xs"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-[#10A37F]" />
              <span>已复制全文到剪贴板</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>一键复制本报告/协议全文</span>
            </>
          )}
        </button>

        <button
          onClick={() => setContactOpen(true)}
          className="btn-openai-secondary text-xs px-4 py-2 inline-flex items-center gap-2 cursor-pointer"
        >
          <MessageSquare className="w-3.5 h-3.5 text-secondary" />
          <span>联系大客户顾问协助立项/签约</span>
        </button>
      </div>

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        source={`docs-${source}`}
      />
    </>
  );
}
