# AI 代采 (aidaicai.com) - 企业级海外 AI 官方代采与对公服务系统

> 专为出海电商、软件研发与前沿科技团队打造的 **OpenAI / ChatGPT Plus、Pro (5x/20x)、Team 官方企业代采、对公财务结算与风控兜底平台**。  
> 官方服务域名：[www.aidaicai.com](https://www.aidaicai.com)

---

## 一、 项目架构概览

本项目采用 **Next.js 高端落地站 + 商务运营知识库** 双轨制架构：

```text
d:\dev\ai-enterprise-hub/
├── docs/                                    # 【商务物料与合规知识库】
│   ├── business/                            # 商务拓展与销售物料
│   │   ├── pricing-matrix.md                # 官方阶梯代采报价单与折算模型
│   │   └── procurement-proposal-template.md # 《企业采购立项申请报告呈批模板》(帮采购向领导汇报)
│   ├── legal/                               # 法务与合规协议
│   │   ├── enterprise-service-agreement.md  # 《企业软件代采购框架合作协议》
│   │   └── sla-guarantee-terms.md           # 《SLA 服务等级与 72h 封号退赔保障条款》
│   └── operations/                          # 运营与履约 SOP
│       └── procurement-rewards-policy.md    # 《战略集采增值权益与生态伙伴引荐激励履约规范》(合规SOP)
│
├── src/                                     # 【Next.js 现代化企业官网】
│   ├── app/
│   │   ├── layout.tsx                       # 全局 SEO、Viewport、aidaicai.com 品牌基底
│   │   ├── page.tsx                         # 核心落地页装配
│   │   └── globals.css                      # 高级暗黑视觉设计系统、毛玻璃、光晕令牌
│   └── components/
│       ├── Navbar.tsx                       # 品牌导航（AI 代采 · aidaicai.com）
│       ├── HeroSection.tsx                  # 视觉首屏 (4大信任支柱与转化入口)
│       ├── PainPointsCompare.tsx            # 个人代充 vs AI 代采官方服务痛点对比
│       ├── ProductCatalog.tsx               # Plus / Pro 5x / Pro 20x / Team 产品矩阵
│       ├── PricingCalculator.tsx            # 实时阶梯代采计算器 (算权益/一键复制合规立项草案)
│       ├── ComplianceShowcase.tsx           # 真实凭据样张展示 (专票/银行回单/官方账单/公章)
│       ├── ProcurementPerks.tsx             # 大客户集采尊享权益 (立项过审与伙伴计划说明)
│       ├── SlaGuarantee.tsx                 # 4 重安全与 72h 封号兜底保障
│       ├── FaqSection.tsx                   # 常见高频采购疑问手风琴
│       ├── DocsVault.tsx                    # 网页内置商务文档阅读与一键复制弹窗
│       ├── ContactModal.tsx                 # 专属大客户经理企微对接弹窗 (aidaicai_biz)
│       └── Footer.tsx                       # 完整企业页脚与合规免责声明
```

---

## 二、 本地运行指南

```bash
# 1. 进入项目根目录
cd d:\dev\ai-enterprise-hub

# 2. 启动本地开发服务器
npm run dev

# 3. 访问浏览器预览
# 打开 http://localhost:3000
```

---

## 三、 核心商业交付亮点

1. **商业名义合规升级**：
   - 将敏感低端的“代充”全面升级为合规正规的 **“企业海外数字化软件代采 (Agency Procurement)”**；
   - 直播间与推广安全防封，企业法务与财务易于接受。
2. **财务闭环**：
   - 彻底解决“公司怎么报销海外 SaaS”的痛点；
   - 走企业银行对公账户转账，开具 6% 增值税专用发票（信息技术服务费），可进项抵扣。
3. **渠道真实性核验**：
   - 100% 官方正规海外商业银行企业卡绑定，可出具带卡号与流水号的原版 Invoice；
   - 签署加盖企业印章的《SLA 服务协议》，承诺 **72 小时闪电保换 + 全周期按天折算极速退款**。
4. **替采购扫清内部阻力**：
   - 提供现成的 `docs/business/procurement-proposal-template.md`，采购填入公司名即可向老板和财务交差。
5. **大客户集采增值权益与伙伴激励体系**：
   - 全面升级为阳光透明的“企业战略集采增值礼遇”与“数字化先锋引荐人计划”，公域完全合规免责，私域支持灵活完税与增值履约，彻底消除内审与法律风险。
