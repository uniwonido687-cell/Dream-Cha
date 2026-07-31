import { createFileRoute, Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { caseStudies, type CaseStudy, type Bi } from "@/lib/content";
import { ArrowUpRight, Plus, Loader2 } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "実績 — Dream-cha | Projects" },
      {
        name: "description",
        content: "Dream-cha の解決実績。完全成果報酬型でデザイナー・ノーコードディレクターの案件を技術で突破した事例を公開しています。",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const { t } = useLang();

  return (
    <>
      {/* Header */}
      <div className="hairline mx-auto max-w-7xl" />

      {/* Revenue model explainer */}
      <section className="bg-[#F5F5F7] dark:bg-secondary/40 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <SectionLabel index="02">
              {t({ ja: "成果報酬の仕組み", en: "How performance-based payment works" })}
            </SectionLabel>
          </Reveal>
          <Reveal as="h2" delay={80} className="mt-6 font-serif text-2xl md:text-3xl">
            {t({ ja: "なぜ、私たちは「完全成果報酬」で動けるのか？", en: "Why can we work on performance-based terms?" })}
          </Reveal>
          <Reveal as="p" delay={140} className="mt-4 max-w-2xl text-sm leading-[1.8] text-muted-foreground">
            {t({
              ja: "私たちは、あなたの外注先ではなく、案件を共に成功させる『パートナー』だからです。前払いも立替も不要。クライアントからあなたへ報酬が支払われた段階で、事前に決めた配分率（％）に応じて私たちの報酬をいただきます。リスクは私たちが半分背負います。だからこそ、本気でクリーンな開発を行います。",
              en: "We are not your subcontractor — we are your co-owner of the project outcome. No prepayment, no advances. Once your client pays you, we take our agreed percentage. We carry half the risk, which is exactly why we ship serious work.",
            })}
          </Reveal>
          <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
            {[
              {
                step: "Step 1",
                ja: "案件受注",
                en: "You win the project",
                sub: { ja: "Dream-cha と分配率を事前合意", en: "Agree revenue split upfront" },
              },
              {
                step: "Step 2",
                ja: "共同開発・納品",
                en: "We build together",
                sub: { ja: "フロント・バックエンドを並行開発", en: "Design & backend developed in parallel" },
              },
              {
                step: "Step 3",
                ja: "着金後に精算",
                en: "Settle after client pays",
                sub: { ja: "あなたの手出しゼロ・前払いなし", en: "Zero upfront from you" },
              },
            ].map((s, i) => (
              <Reveal key={s.step} delay={i * 90} className="bg-background p-8">
                <div className="font-mono text-xs text-[var(--dreamblue)]">{s.step}</div>
                <div className="mt-3 font-serif text-xl">{t({ ja: s.ja, en: s.en })}</div>
                <div className="mt-2 text-sm text-muted-foreground">{t(s.sub)}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies (Accordion Layout) */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <Reveal>
          <SectionLabel index="03">
            {t({ ja: "解決事例", en: "Case Studies" })}
          </SectionLabel>
        </Reveal>
        
        <div className="mt-12 divide-y divide-border/40 border-t border-b border-border/40">
          {caseStudies.map((c, i) => (
            <AccordionItem key={c.id} c={c} i={i} t={t} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10 md:pb-32">
        <Reveal className="rounded-sm border border-[var(--dreamblue)]/30 cta-bg px-8 py-14 text-center md:px-16">
          <h2 className="font-serif text-2xl md:text-3xl">
            {t({ ja: "皆様のデザインも、私たちが形にします。", en: "We'll bring your design to life, too." })}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-[1.8] text-muted-foreground">
            {t({
              ja: "システム要件の策定や技術的な仕様に関するご相談を承ります。",
              en: "We take on consultations about system requirements and technical specifications.",
            })}
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="https://lin.ee"
              target="_blank"
              rel="noopener noreferrer"
              className="group/cta inline-flex items-center gap-2 rounded-sm bg-[#06C755] px-8 py-4 text-base font-medium text-white shadow-lg shadow-[#06C755]/20 transition-opacity hover:opacity-90"
            >
              {t({
                ja: "LINE 公式アカウントでテクニカル相談をする（無料）",
                en: "Technical consult on our LINE Official Account (free)",
              })}
              <ArrowUpRight size={16} className="cta-arrow" />
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm">
              {t({ ja: "お問い合わせフォーム", en: "Contact form" })}
              <span className="form-arrow">→</span>
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}

// 解決事例の各項目を制御するアコーディオンコンポーネント (縦軸整律 ＆ 4:8黄金スプリット版)
function AccordionItem({ c, i, t }: { c: CaseStudy; i: number; t: (bi: Bi) => string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Reveal as="article" className="py-6 md:py-8 transition-colors hover:bg-secondary/5">
      {/* トリガーボタン（ヘッダー部分） */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-6 text-left focus:outline-none group/trigger"
      >
        {/* 
          【縦軸・グリッド完全整律レイアウト】
          md:grid-cols-12 を指定し、[日付][分類][タイトル]の開始位置を
          すべての実績アイテム間で1ミリの狂いもなく縦一直線にカチッと整列させます。
        */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 min-w-0 flex-1 items-start md:items-center">
          
          {/* 1. 日付エリア（12カラム中、1カラムを割り当てて縦軸を固定） */}
          <div className="font-mono text-xs text-muted-foreground/60 shrink-0 md:col-span-1">
            {c.year}
          </div>

          {/* 2. カテゴリ分類エリア（12カラム中、3カラムを贅沢に割り当てて縦の幅を統一） */}
          <div className="flex items-center gap-3 md:col-span-3 shrink-0">
            <span className="hidden md:inline h-px w-3 bg-border" />
            <span className="text-[var(--dreamblue)] font-sans text-xs tracking-wide truncate">
              {t(c.category)}
            </span>
          </div>

          {/* 3. 実績タイトルエリア（12カラム中、残りの8カラムを使い、すべてのタイトルの左端を一直線に揃える） */}
          <h2 className="font-serif text-base md:text-lg font-medium tracking-wide text-foreground truncate md:col-span-8">
            {t(c.title)}
          </h2>

        </div>

        {/* 右端のスタイリッシュな回転プラスアイコン */}
        <div className="shrink-0 text-muted-foreground/80 transition-transform duration-300 ease-out p-1 bg-secondary/20 rounded-full group-hover/trigger:text-foreground">
          <Plus size={16} className={`transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} />
        </div>
      </button>

      {/* スムーズ開閉コンテナ（CSS Gridによるハイクオリティな開閉演出） */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100 mt-8" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          {/* 
            【4:8 黄金スプリットレイアウト】
            大画面(md以上)では左4:右8に分割。画像が横に広がりすぎて縦に巨大化するのを防ぎます。
            スマホ画面では自動的に綺麗な「画像 → テキスト」の縦一直線にリサイズされます。
          */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:pl-8 items-start">
            
            {/* 左側（md:col-span-4）：実績画像 ＆ 技術バッジ */}
            <div className="min-w-0 md:col-span-4">
              <div className="overflow-hidden rounded-sm border border-border bg-muted/20 shadow-sm">
                {c.image ? (
                  <img
                    src={c.image}
                    alt={t(c.title)}
                    className="case-image w-full h-auto object-cover aspect-[16/10]"
                    loading="lazy"
                  />
                ) : (
                  <div
                    className="flex aspect-[16/10] w-full items-center justify-center"
                    style={{ background: `linear-gradient(135deg, ${c.hue} 0%, oklch(0.92 0.01 80) 100%)` }}
                  >
                    <span className="font-mono text-xs tracking-widest text-white/80">CASE 0{i + 1}</span>
                  </div>
                )}
              </div>
              
              {/* 技術スタック（白黒モノトーン化して画像を引き立たせます） */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {c.stack.map((tech) => (
                  <span
                    key={tech}
                    className="border border-border/80 px-2.5 py-1 font-mono text-[10px] tracking-wider text-muted-foreground bg-secondary/10 rounded-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* 右側（md:col-span-8）：3大テキスト（上揃え） ＆ 指標 */}
            <div className="min-w-0 md:col-span-8 space-y-6">
              
              {/* 
                【横軸・文字の高さズレ完全解消】 
                items-start を指定し、3つのカラムの上端ラインを1ミリの狂いもなく一直線に揃えます。
                文字サイズを text-[13px]、行間を leading-[1.8] に最適化し、圧倒的な読みやすさを実現しました。
              */}
              <div className="grid grid-cols-1 gap-5 md:grid-cols-3 items-start">
                {/* 課題ブロック */}
                <div className="rounded-sm border-l-4 border-red-400/80 bg-red-500/5 px-4 py-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-red-500 dark:text-red-400 font-sans">
                    {t({ ja: "課題", en: "Challenge" })}
                  </h4>
                  <p className="mt-2 text-[13px] leading-[1.8] text-muted-foreground/90">{t(c.before)}</p>
                </div>

                {/* 解決策ブロック */}
                <div className="rounded-sm border-l-4 border-[var(--dreamblue)] bg-blue-500/5 px-4 py-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--dreamblue)] font-sans">
                    {t({ ja: "解決策", en: "Solution" })}
                  </h4>
                  <p className="mt-2 text-[13px] leading-[1.8] text-muted-foreground/90">{t(c.solution)}</p>
                </div>

                {/* 成果ブロック */}
                <div className="rounded-sm border-l-4 border-emerald-500/80 bg-emerald-500/5 px-4 py-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-sans">
                    {t({ ja: "成果", en: "Results" })}
                  </h4>
                  <p className="mt-2 text-[13px] leading-[1.8] text-muted-foreground/90">{t(c.result)}</p>
                </div>
              </div>

              {/* メトリクス（数値指標・フラットデザイン） */}
              {c.metrics && c.metrics.length > 0 && (
                <div className="mt-6 grid grid-cols-3 gap-px overflow-hidden rounded-sm border border-border bg-border">
                  {c.metrics.map((m, idx) => (
                    <div key={idx} className="bg-background p-4 text-center">
                      <div className="font-serif text-xl text-[var(--dreamblue)] md:text-2xl">{m.value}</div>
                      <div className="mt-1 text-[10px] tracking-wide text-muted-foreground">{t(m.label)}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* 外部リンクリンク */}
              {c.link && (
                <div className="pt-2">
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--dreamblue)] underline underline-offset-4 transition-opacity hover:opacity-80"
                  >
                    {t({ ja: "プロジェクトを見る", en: "View Project" })}
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </Reveal>
  );
}
