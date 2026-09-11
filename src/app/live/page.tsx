import { Metadata } from "next";
import LiveStreamDashboard from "@/components/live/LiveStreamDashboard";

export const metadata: Metadata = {
  title: "企业 AI 集中采购 · 竖屏直播工作台",
  description: "专门服务企业的 ChatGPT Pro 5x / 20x 集中采购。阶梯采购方案、对公付款、6% 专票、盖章合同与专属售后。",
  robots: {
    index: false,
    follow: false,
  },
};

export default function LivePage() {
  return <LiveStreamDashboard />;
}
