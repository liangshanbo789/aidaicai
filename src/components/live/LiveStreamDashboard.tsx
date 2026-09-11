"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type CSSProperties,
} from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Copy,
  Expand,
  EyeOff,
  Layers,
  Pause,
  Play,
  Scan,
  ShieldCheck,
  Users,
} from "lucide-react";
import styles from "./LiveStreamDashboard.module.css";

const SCENES = [
  {
    id: "enterprise",
    label: "企业服务",
    description: "集采优势与企业服务",
    icon: Users,
    headline: ["采购越多", "单价越低"],
    caption: "按采购规模提供阶梯方案",
    services: ["对公付款", "6% 专票", "盖章合同", "专属售后"],
  },
  {
    id: "procurement",
    label: "采购支持",
    description: "从需求选型到合同对接",
    icon: Layers,
    headline: ["企业采购", "专人协助"],
    caption: "配合企业内部采购与审批流程",
    services: ["需求选型", "阶梯报价", "立项材料", "合同对接"],
  },
  {
    id: "support",
    label: "售后保障",
    description: "交付之后，持续服务",
    icon: ShieldCheck,
    headline: ["交付之后", "持续服务"],
    caption: "退换保障按服务协议约定",
    services: ["专属经理", "异常响应", "续期提醒", "协议保障"],
  },
] as const;

const ROTATION_MS = 30_000;

// Read URL state after hydration to support both static export and browser sources.
function subscribeToLocation(onChange: () => void) {
  window.addEventListener("popstate", onChange);
  return () => window.removeEventListener("popstate", onChange);
}

function getLocationSearch() {
  return window.location.search;
}
function getServerSearch() {
  return "";
}

function readPercentage(
  query: URLSearchParams,
  key: string,
  fallback: number,
  min: number,
  max: number,
) {
  const raw = query.get(key);
  const value = raw === null ? fallback : Number(raw);
  return Number.isFinite(value)
    ? Math.min(max, Math.max(min, value))
    : fallback;
}

export default function LiveStreamDashboard() {
  const search = useSyncExternalStore(
    subscribeToLocation,
    getLocationSearch,
    getServerSearch,
  );
  const query = new URLSearchParams(search);
  const queryScene = SCENES.findIndex(
    (scene) => scene.id === query.get("scene"),
  );
  const [sceneOverride, setSceneOverride] = useState<number | null>(null);
  const [cleanOverride, setCleanOverride] = useState<boolean | null>(null);
  const [autoPlayOverride, setAutoPlay] = useState<boolean | null>(null);
  const [showSafeAreas, setShowSafeAreas] = useState(false);
  const [safeTopOverride, setSafeTop] = useState<number | null>(null);
  const [safeBottomOverride, setSafeBottom] = useState<number | null>(null);
  const [safeRightOverride, setSafeRight] = useState<number | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [notice, setNotice] = useState("");
  const studioRef = useRef<HTMLDivElement>(null);
  const sceneIndex = sceneOverride ?? Math.max(0, queryScene);
  const scene = SCENES[sceneIndex];
  const isClean = cleanOverride ?? query.get("clean") === "1";
  const autoPlay = autoPlayOverride ?? query.get("autoplay") === "1";
  const safeTop = safeTopOverride ?? readPercentage(query, "top", 8, 6, 14);
  const safeBottom =
    safeBottomOverride ?? readPercentage(query, "bottom", 20, 16, 26);
  const safeRight =
    safeRightOverride ?? readPercentage(query, "right", 10, 8, 16);

  const selectScene = useCallback(
    (index: number) => {
      setSceneOverride(index);
      setAutoPlay(false);
    },
    [setSceneOverride, setAutoPlay],
  );

  const restoreControls = useCallback(() => {
    setCleanOverride(false);
    if (document.fullscreenElement) {
      void document
        .exitFullscreen()
        .catch(() => setNotice("请使用浏览器退出全屏。"));
    }
  }, [setCleanOverride, setNotice]);

  const enterFullscreen = useCallback(async () => {
    try {
      if (!studioRef.current?.requestFullscreen) {
        setNotice(
          "当前浏览器不支持全屏，可使用纯净画面录制。录制区域为中间的竖屏画布。",
        );
        return;
      }
      await studioRef.current.requestFullscreen();
      setCleanOverride(true);
    } catch {
      setNotice(
        "浏览器未能进入全屏，可使用纯净画面录制。录制区域为中间的竖屏画布。",
      );
    }
  }, [setNotice, setCleanOverride]);

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
      if (!document.fullscreenElement) setCleanOverride(false);
    };
    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = window.setInterval(() => {
      setSceneOverride((sceneIndex + 1) % SCENES.length);
    }, ROTATION_MS);
    return () => window.clearInterval(timer);
  }, [autoPlay, sceneIndex]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target;
      if (event.key === "Escape") {
        restoreControls();
        return;
      }
      if (
        event.altKey ||
        event.ctrlKey ||
        event.metaKey ||
        event.repeat ||
        (target instanceof HTMLElement &&
          (target.isContentEditable ||
            ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)))
      )
        return;

      if (["1", "2", "3"].includes(event.key)) {
        selectScene(Number(event.key) - 1);
      } else if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        event.preventDefault();
        selectScene(
          (sceneIndex + (event.key === "ArrowRight" ? 1 : SCENES.length - 1)) %
            SCENES.length,
        );
      } else if (event.code === "Space") {
        if (
          target instanceof HTMLElement &&
          target.closest("button, a, summary")
        )
          return;
        event.preventDefault();
        setAutoPlay(!autoPlay);
      } else if (event.key.toLowerCase() === "h") {
        setCleanOverride(!isClean);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [autoPlay, isClean, restoreControls, sceneIndex, selectScene]);

  async function copyCleanLink() {
    const url = new URL(window.location.href);
    url.search = "";
    url.hash = "";
    url.searchParams.set("clean", "1");
    url.searchParams.set("scene", scene.id);
    url.searchParams.set("top", String(safeTop));
    url.searchParams.set("bottom", String(safeBottom));
    url.searchParams.set("right", String(safeRight));
    if (autoPlay) url.searchParams.set("autoplay", "1");
    try {
      await navigator.clipboard.writeText(url.toString());
      setNotice(
        "纯净画面链接已复制，已包含当前主题、轮播与预留区设置。浏览器源请设为 1080 × 1920。",
      );
    } catch {
      setNotice(`请复制纯净画面链接：${url.toString()}`);
    }
  }

  const canvasStyle = {
    "--safe-top": `${safeTop}%`,
    "--safe-bottom": `${safeBottom}%`,
    "--safe-right": `${safeRight}%`,
    "--content-scale": Math.min(1, (100 - safeTop - safeBottom) / 72),
  } as CSSProperties;

  return (
    <div
      ref={studioRef}
      className={`${styles.studio} ${isClean ? styles.clean : ""}`}
    >
      {!isClean && (
        <header className={styles.studioHeader}>
          <Link href="/" className={styles.homeLink}>
            AI 代采 <span>/ 直播工作台</span>
          </Link>
          <span className={styles.formatLabel}>
            竖屏优先 <span>9:16</span>
          </span>
        </header>
      )}

      <div className={styles.workspace}>
        <main className={styles.preview} aria-label="直播画面预览">
          <article
            className={styles.canvas}
            style={canvasStyle}
            aria-label="企业 AI 采购竖屏直播画面"
            onDoubleClick={() => {
              if (isClean) restoreControls();
            }}
          >
            <div className={styles.canvasContent}>
              <div className={styles.brand}>
                <span className={styles.brandName}>
                  <span className={styles.brandMark}>AI</span>代采
                </span>
                <span className={styles.domain}>gongsi.one</span>
              </div>
              <header className={styles.positioning}>
                <h1>专门服务企业</h1>
                <p>
                  ChatGPT Pro <strong>5x / 20x</strong> 集中采购
                </p>
              </header>
              <section
                className={styles.scene}
                aria-label={scene.label}
                aria-live={autoPlay ? "off" : "polite"}
              >
                <h2>
                  {scene.headline.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </h2>
                <p className={styles.caption}>{scene.caption}</p>
                <ul className={styles.services}>
                  {scene.services.map((service) => (
                    <li key={service}>
                      <Check aria-hidden="true" />
                      {service}
                    </li>
                  ))}
                </ul>
              </section>
              <footer className={styles.canvasFooter}>
                <p className={styles.promise}>从采购立项到交付售后，全程对接</p>
                <div className={styles.contact}>
                  <div>
                    <p>私信「企业采购」</p>
                    <span>对接专属经理，获取采购方案</span>
                  </div>
                  <ArrowRight aria-hidden="true" />
                </div>
              </footer>
            </div>
            {showSafeAreas && !isClean && (
              <div className={styles.safeGuides} aria-hidden="true">
                <div className={styles.safeTop}>顶部信息预留区</div>
                <div className={styles.safeRight}>互动按钮预留区</div>
                <div className={styles.safeBottom}>评论与操作预留区</div>
              </div>
            )}
          </article>
          {!isClean && (
            <p className={styles.previewNote}>
              录制区域 · 1080 × 1920 等比画布
            </p>
          )}
        </main>

        {!isClean && (
          <aside className={styles.controls} aria-label="主播控制台">
            <div className={styles.controlHeading}>
              <span className={styles.eyebrow}>PRESENTER STUDIO</span>
              <h2>把重点，讲清楚。</h2>
              <p>选择讲解主题，画面跟随你的节奏。</p>
            </div>
            <div className={styles.sceneChoices} aria-label="选择讲解场景">
              {SCENES.map((item, index) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    type="button"
                    aria-pressed={sceneIndex === index}
                    onClick={() => selectScene(index)}
                    className={styles.sceneButton}
                  >
                    <Icon aria-hidden="true" />
                    <span>
                      <strong>{item.label}</strong>
                      <small>{item.description}</small>
                    </span>
                    <kbd>{index + 1}</kbd>
                  </button>
                );
              })}
            </div>
            <div className={styles.playback}>
              <button
                type="button"
                onClick={() => setAutoPlay(!autoPlay)}
                aria-pressed={autoPlay}
              >
                {autoPlay ? (
                  <Pause aria-hidden="true" />
                ) : (
                  <Play aria-hidden="true" />
                )}
                {autoPlay ? "暂停轮播" : "自动轮播"}
              </button>
              <span>{autoPlay ? "每 30 秒切换" : "当前为手动讲解"}</span>
              <button
                type="button"
                onClick={() => selectScene((sceneIndex + 1) % SCENES.length)}
                aria-label="下一个讲解场景"
              >
                <ChevronRight aria-hidden="true" />
              </button>
            </div>
            <details className={styles.safeSettings}>
              <summary>
                <Scan aria-hidden="true" />
                平台遮挡预留
                <ChevronRight aria-hidden="true" />
              </summary>
              <div className={styles.safeSettingsBody}>
                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    checked={showSafeAreas}
                    onChange={(event) => setShowSafeAreas(event.target.checked)}
                  />
                  显示预留区参考线
                </label>
                {[
                  {
                    label: "顶部",
                    value: safeTop,
                    min: 6,
                    max: 14,
                    set: setSafeTop,
                  },
                  {
                    label: "底部",
                    value: safeBottom,
                    min: 16,
                    max: 26,
                    set: setSafeBottom,
                  },
                  {
                    label: "右侧",
                    value: safeRight,
                    min: 8,
                    max: 16,
                    set: setSafeRight,
                  },
                ].map((field) => (
                  <label className={styles.rangeLabel} key={field.label}>
                    <span>
                      {field.label}
                      <output>{field.value}%</output>
                    </span>
                    <input
                      type="range"
                      aria-label={`${field.label}预留比例`}
                      min={field.min}
                      max={field.max}
                      value={field.value}
                      onChange={(event) =>
                        field.set(Number(event.target.value))
                      }
                    />
                  </label>
                ))}
                <p>按直播平台调整。参考线在纯净画面中自动隐藏。</p>
              </div>
            </details>
            <div className={styles.recordActions}>
              <button
                type="button"
                className={styles.primaryButton}
                onClick={() => setCleanOverride(true)}
              >
                <EyeOff aria-hidden="true" />
                进入纯净画面
                <ArrowRight aria-hidden="true" />
              </button>
              <div className={styles.secondaryActions}>
                <button
                  type="button"
                  onClick={isFullscreen ? restoreControls : enterFullscreen}
                >
                  <Expand aria-hidden="true" />
                  {isFullscreen ? "退出全屏" : "全屏录制"}
                </button>
                <button type="button" onClick={copyCleanLink}>
                  <Copy aria-hidden="true" />
                  复制画面链接
                </button>
              </div>
            </div>
            <p className={styles.keyboardHelp}>
              <kbd>1</kbd>–<kbd>3</kbd> 切换主题 · <kbd>空格</kbd> 轮播
              <br />
              <kbd>H</kbd> 显隐控制台 · <kbd>Esc</kbd> 返回
              <br />
              纯净画面也可双击返回控制台。
            </p>
            <p className={styles.notice} role="status">
              {notice}
            </p>
          </aside>
        )}
      </div>
    </div>
  );
}
