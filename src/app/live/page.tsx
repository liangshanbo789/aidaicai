import { Metadata } from "next";
import LiveStreamDashboard from "@/components/live/LiveStreamDashboard";

export const metadata: Metadata = {
  title: "AI代采直播推流大屏 | 企业海外 AI 官方代采实时运行中心",
  description: "AI代采 (aidaicai.com) 官方直播推流工作台大屏。集成毫秒跳动时钟、企业阶梯预算核算器、6% 增值税发票验真、工行对公回单及实时履约动态。",
  robots: {
    index: false,
    follow: false,
  },
};

export default function LivePage() {
  return <LiveStreamDashboard />;
}
