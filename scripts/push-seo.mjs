/**
 * 搜索引擎主动收录推送脚本
 * 1. 必应 (Bing) / IndexNow 实时推送 (秒级触达微软必应、Copilot、Yandex 等)
 * 2. 百度搜索资源平台 API 主动推送 (普通收录)
 * 
 * 运行方式:
 * node scripts/push-seo.mjs
 * 
 * 若需推送百度，请设置环境变量:
 * $env:BAIDU_PUSH_TOKEN="your_baidu_token" (PowerShell)
 * export BAIDU_PUSH_TOKEN="your_baidu_token" (Bash)
 */

const HOST = "gongsi.one";
const BASE_URL = `https://${HOST}`;
const INDEXNOW_KEY = "18b3e34bca8f4e6988894178a9c2be0b";
const KEY_LOCATION = `${BASE_URL}/${INDEXNOW_KEY}.txt`;

// 全站核心规范 URL 列表 (严格与 sitemap.ts 和 trailingSlash 保持一致)
const URLS = [
  `${BASE_URL}/`,
  `${BASE_URL}/solutions/codex-procurement/`,
  `${BASE_URL}/solutions/gpt-bulk-procurement/`,
  `${BASE_URL}/docs/proposal/`,
  `${BASE_URL}/docs/pricing/`,
  `${BASE_URL}/docs/sla/`,
  `${BASE_URL}/docs/agreement/`,
];

async function pushToIndexNow() {
  console.log("\n==========================================");
  console.log("[1/2] 正在向微软必应 IndexNow API 推送 URL...");
  console.log("==========================================");

  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: URLS,
  };

  try {
    const res = await fetch("https://api.indexnow.org/IndexNow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    if (res.status === 200 || res.status === 202) {
      console.log(`✅ IndexNow 推送成功！HTTP 状态码: ${res.status}`);
      console.log(`已将 ${URLS.length} 个核心页面通知 Bing / Yandex / Copilot 抓取。`);
    } else {
      const text = await res.text();
      console.warn(`⚠️ IndexNow 响应状态码: ${res.status}，响应内容: ${text}`);
    }
  } catch (err) {
    console.error("❌ IndexNow 推送失败:", err.message);
  }
}

async function pushToBaidu() {
  console.log("\n==========================================");
  console.log("[2/2] 正在向百度搜索资源平台推送 URL...");
  console.log("==========================================");

  const token = process.env.BAIDU_PUSH_TOKEN;
  if (!token) {
    console.log("ℹ️ 未检测到环境变量 BAIDU_PUSH_TOKEN。");
    console.log("提示: 登录百度搜索资源平台 (ziyuan.baidu.com) -> 普通收录 -> API提交，获取准入密钥 token。");
    console.log("配置环境变量后即可自动推送收录。");
    return;
  }

  const endpoint = `http://data.zz.baidu.com/urls?site=${encodeURIComponent(BASE_URL)}&token=${token}`;
  const bodyData = URLS.join("\n");

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
      },
      body: bodyData,
    });

    const data = await res.json();
    if (data.success) {
      console.log(`✅ 百度 API 推送成功！本次成功推送: ${data.success} 条，今日剩余额度: ${data.remain}`);
    } else {
      console.warn(`⚠️ 百度 API 推送提示:`, data);
    }
  } catch (err) {
    console.error("❌ 百度 API 推送失败:", err.message);
  }
}

async function main() {
  console.log(`🚀 开始执行 SEO 主动推送，目标站点: ${BASE_URL}`);
  console.log(`待推送的 URL 列表 (${URLS.length} 个):`);
  URLS.forEach((u, i) => console.log(`  ${i + 1}. ${u}`));

  await pushToIndexNow();
  await pushToBaidu();

  console.log("\n🎉 SEO 主动推送任务执行完毕！\n");
}

main();
