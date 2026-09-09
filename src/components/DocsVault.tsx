"use client";

import React, { useState } from "react";
import { FileText, Copy, Check, BookOpen } from "lucide-react";

interface DocsVaultProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: (source?: string) => void;
}

export default function DocsVault({ isOpen, onClose, onOpenContact }: DocsVaultProps) {
  const [activeDoc, setActiveDoc] = useState<"proposal" | "pricing" | "sla" | "agreement">("proposal");
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const docsData = {
    proposal: {
      title: "【内部呈批模板】企业采购 OpenAI 高级生产力工具立项申请报告",
      badge: "行政与采购汇报神器",
      badgeColor: "bg-surface-elevated text-secondary border-theme-subtle",
      desc: "专为行政、采购或技术总监编写，帮您清晰梳理业务必要性、供应商合规比选、预算测算与风控防范，直接改公司名即可向老板与财务呈报。",
      content: `关于采购 OpenAI 高级企业生产力账号以提升团队业务效能的立项申请报告

一、 申请基本信息
呈报部门：技术研发中心 / 跨境出海事业部
采购标的：OpenAI ChatGPT 企业级高级生产力账号代采与技术支持服务
对公结算：企业银行对公转账，供应商提供“信息技术服务费” 6% 增值税专用发票

二、 采购背景与业务必要性
1. 研发攻坚需求：复杂系统架构演进、核心代码重构与高维算法推理，对 ChatGPT Pro (搭载 o1/o3 满血深度推理模型) 存在刚性依赖，标准免费版截断严重；
2. 跨境出海运营：海外独立站全语种文案、高阶商客沟通及社媒营销急需 Plus/Pro 稳定支持，可节省 40% 以上外包创作成本；
3. 合规与财务堵点：为避免员工自行在淘宝购买非正规个人代充遭遇“黑卡封号”及个人私转无法报销做账，需引入具备对公资质的正规企业服务商。

三、 供应商评估比选（AI代采 aidaicai.com 优势）
• 票据合规：开具 6% 增值税专用发票（信息技术服务费），可全额进项抵扣；
• 资金阳光：企业银行网银对公电汇，资金链路安全可审计；
• 渠道真实：100% 正规海外商业银行企业信用卡直充，附带官方账单核验；
• 售后兜底：法务盖章《SLA 售后协议》，72 小时封号包换，全周期按天折算退款。

四、 预算与测算建议
拟采购 10 个席位（包含 2 个 Pro 顶配版与 8 个 Plus 版），按季度采购享受大客户阶梯 9 折优惠，含税总计约 ¥ 12,096 元（含 6% 增值税专票）。

五、 审批建议
该采购能直接赋能研发与核心业务，链路合规、风险闭环，特此提请领导审批预算。`,
    },
    pricing: {
      title: "【官方文件】企业级 OpenAI / ChatGPT 采购阶梯报价单与权益手册",
      badge: "标准报价",
      badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
      desc: "涵盖 ChatGPT Plus、Pro 5x、Pro 20x 旗舰版及 Team 空间的单月、季度、年度采购对公含税阶梯价及采购津贴权益。",
      content: `【AI代采 aidaicai.com】企业级 OpenAI / ChatGPT 官方采购阶梯报价单 (2026版)

一、 核心产品参数
• ChatGPT Plus ($20/月)：GPT-4o 稳定高频调用、高级数据分析、DALL-E 3，适合跨境文案、日常翻译；
• ChatGPT Pro (5x - $50/月)：5倍调用配额、支持 o1-mini 深度推理，适合独立站站长、日常研发辅助；
• ChatGPT Pro (20x - $200/月 旗舰版)：搭载 o1/o3 满血深度逻辑推理、无限算力通道，适合算法科学家与技术总监；
• ChatGPT Team 空间 ($30/人/月)：企业数据默认不入训、企业管理员统一分配席位、团队知识库共享。

二、 阶梯对公含税价 (含 6% 专票)
• ChatGPT Plus：1~4个 ¥165/月；5~19个 ¥155/月(季付¥145)；20+个 ¥145/月(季付¥135)
• ChatGPT Pro (20x 旗舰版)：1~2个 ¥1,580/月；3~9个 ¥1,480/月(季付¥1,390)；10+个 ¥1,380/月(季付¥1,290)

三、 开票与结算规范
发票类目：*信息技术服务* 软件技术服务费 / 技术咨询费
结算渠道：企业银行公对公转账汇款（招商银行 / 工商银行）
交付周期：款到后 15~30 分钟内完成卡段绑定直充与激活。`,
    },
    sla: {
      title: "【保障条款】企业海外 AI 服务 SLA 等级与风控退赔协议",
      badge: "法律兜底",
      badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-300 border-purple-500/20",
      desc: "明确 72 小时闪电保换、全周期按天折算退赔、100% 正规商业信用卡来源与零知识保密协议等法定义务。",
      content: `【AI代采 aidaicai.com】企业级海外 AI 账号服务 SLA 与风控退赔保障条款

核心服务指标承诺：
1. 首单开通时效：对公款项确认后 ≤ 30 分钟内完成全员充值激活；
2. 断订应急响应：企业专属 VIP 服务群 ≤ 15 分钟内响应；
3. 发票开具时效：收到开票资料后 2 个工作日内寄出或推送数电专票；
4. 到期主动提醒：到期前 5 个自然日主动向采购人推送续费对账单。

100% 官方正规商业卡段承诺：
严格使用海外正规商业银行核发之企业商务信用卡绑定扣款，绝无任何黑卡盗刷行为。支持向客户提供 OpenAI 官方账单原件（附卡号尾数与税单号）。

风控封号退赔保障机制：
• 72 小时内若遇厂商批量风控，无条件 2 小时内免费更换补齐全新官方账号；
• 正常订阅期内因跨境网络风控导致异常的，严格按公式执行退款：
  退款金额 = (本月实际支付单价 ÷ 30) × 当月剩余未生效天数
  退款于 1 个工作日内原路退还至企业银行对公账户。`,
    },
    agreement: {
      title: "【合同范本】企业级海外软件采购与技术支持服务框架协议",
      badge: "法务合同",
      badgeColor: "bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/25",
      desc: "具备完整法律效力的企业框架采购合同，支持双方使用腾讯电子签/契约锁权威数字印章在线盖章签约。",
      content: `企业级海外软件采购与技术支持服务框架协议（精简摘要）

甲方：【采购企业全称】
乙方：AI代采（信息技术）服务有限公司 (aidaicai.com)

第一条 采购与委托
甲方委托乙方为其代采并充值 OpenAI ChatGPT 等官方订阅服务，由乙方提供配套技术咨询与对公财务结算保障。

第二条 款项与发票
一律采用人民币公对公银行转账。乙方在确认到账后 2 个工作日内向甲方开具 6% 增值税专用发票（类目：*信息技术服务* 软件技术服务费）。

第三条 账号归属与知识产权
甲方享有交付账号的全部使用权、数据所有权及由其生成的所有代码与知识产权，乙方不留存、不泄露、不窥探甲方的任何业务内容。

第四条 违约与售后兜底
乙方承诺充值渠道合规合法，若遇异常严格遵照《SLA 服务等级与风控退赔保障条款》在 24 小时内免费补号或按天折算原路退款。`,
    },
  };

  const currentDoc = docsData[activeDoc];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentDoc.content).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="bg-surface border border-theme-subtle rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-theme-subtle flex items-center justify-between bg-surface-elevated">
          <div className="flex items-center gap-2.5">
            <BookOpen className="w-4 h-4 text-secondary" />
            <span className="font-semibold text-sm sm:text-base text-primary">商务与法务中心 · 官方采购文档库</span>
          </div>
          <button
            onClick={onClose}
            className="text-secondary hover:text-primary text-xs p-1.5 rounded-lg hover:bg-surface-hover transition-colors cursor-pointer"
          >
            ✕ 关闭
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-theme-subtle bg-surface-elevated overflow-x-auto">
          {[
            { id: "proposal", label: "立项呈批模板" },
            { id: "pricing", label: "官方阶梯报价单" },
            { id: "sla", label: "SLA 售后退赔协议" },
            { id: "agreement", label: "采购框架合同范本" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveDoc(tab.id as any);
                setCopied(false);
              }}
              className={`px-5 py-3 text-xs font-medium whitespace-nowrap transition-all border-b-2 cursor-pointer ${
                activeDoc === tab.id
                  ? "border-primary text-primary bg-surface font-semibold"
                  : "border-transparent text-secondary hover:text-primary"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Viewer Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-sm sm:text-base font-semibold text-primary">{currentDoc.title}</h3>
                <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${currentDoc.badgeColor}`}>
                  {currentDoc.badge}
                </span>
              </div>
              <p className="text-xs text-secondary">{currentDoc.desc}</p>
            </div>

            <button
              onClick={handleCopy}
              className="btn-openai-white text-xs !py-1.5 !px-3.5 shrink-0 flex items-center gap-1.5 cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "已复制全文！" : "复制文档内容"}</span>
            </button>
          </div>

          {/* Preformatted text card */}
          <div className="bg-surface-elevated border border-theme-subtle rounded-xl p-5 text-xs text-primary font-mono whitespace-pre-wrap leading-relaxed select-text">
            {currentDoc.content}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-theme-subtle bg-surface-elevated flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-secondary">
          <span>如需 Word / PDF 盖章原件或定制特殊开票需求，请联系专属客户经理</span>
          <button
            onClick={() => {
              onClose();
              onOpenContact("docs-vault-contact");
            }}
            className="btn-openai-secondary text-xs !py-1.5 !px-4 w-full sm:w-auto cursor-pointer"
          >
            索取 Word 可编辑完整版原件
          </button>
        </div>
      </div>
    </div>
  );
}
