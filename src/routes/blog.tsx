import { createFileRoute, Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { blogPosts } from "@/lib/content";
import { ArrowUpRight, Quote } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "お客様の声 — Dream-cha | Client Stories" },
      {
        name: "description",
        content: "DreamCha（ドリームチャ）と共に案件を突破したデザイナー・ディレクターのリアルな声。デザインを 1 ミリも崩さずシステム要件の壁を越えた開発パートナーへのフィードバックを掲載しています。",
      },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const { t } = useLang();

  return (
    <>
      {/* Hero */}
      <section className="hero-bg mx-auto max-w-7xl px-6 pb-16 pt-20 md:px-10 md:pb-24 md:pt-28">
        <Reveal><SectionLabel index="01">{t({ ja: "お客様の声", en: "Client Stories" })}</SectionLabel></Reveal>
        <Reveal as="h1" delay={80} className="mt-8 hero-title">
          {t({
            ja: <>デザインを守り抜いた、<br />開発パートナーとしてのお客様の声</>,
            en: <>Client stories as a development partner<br />who fully protected the design.</>,
          })}
        </Reveal>
        <Reveal as="p" delay={140} className="mt-6 max-w-2xl text-base leading-[1.8] text-muted-foreground">
          {t({
            ja: "システム要件の壁を、デザインを1ミリも崩さずに突破したクリエイターの皆さまから届いた、リアルな声をそのまま掲載しています。",
            en: "We plainly present the authentic voices from creators who broke through system constraints without compromising a single millimeter of design.",
          })}
        </Reveal>
      </section>

      <div className="hairline mx-auto max-w-7xl" />

      {/* お客様の声一覧セクション */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">

        {/* 【洗練されたミニマル・メゾネットグリッド】 */}
        <div className="columns-1 gap-8 md:columns-2">
          {blogPosts.map((post) => (
            <Reveal
              as="article"
              key={post.id}
              className="card-lift mb-8 break-inside-avoid rounded-xl border border-border bg-card p-7 md:p-9 transition-all duration-300 hover:border-border/80"
            >
              {/* カード上部：タグ ＆ 日付エリア */}
              <div className="flex items-center justify-between">
                {/* 【モノトーン化の美学】 */}
                <span className="rounded-sm border border-border/80 px-2.5 py-0.5 font-mono text-[10px] tracking-wider text-muted-foreground uppercase bg-secondary/10">
                  {t(post.tag)}
                </span>
                <span className="font-mono text-[10px] tracking-wide text-muted-foreground/60">{post.date}</span>
              </div>

              {/* 【アイコンの主張を抑えて静寂を演出】 */}
              <Quote size={20} className="mt-6 text-muted-foreground/20 rotate-180" aria-hidden />

              {/* タイトル（見出し） */}
              <h2 className="mt-3 font-serif text-lg md:text-xl font-medium leading-snug text-foreground tracking-wide">
                {t(post.title)}
              </h2>

              {/* 本文コメント（文字サイズを最適化し、長文の読みやすさを最大化） */}
              <p className="mt-4 text-[13px] leading-[1.85] text-muted-foreground tracking-wide">
                {t(post.comment)}
              </p>

              {/* フッター：プロフィール欄 */}
              <div className="mt-6 border-t border-border/40 pt-4">
                {/* 文字色を text-foreground に引き上げ、黒背景でもクッキリと所属や名前が読めるようにバグ修正 */}
                <p className="text-xs font-sans font-medium text-foreground tracking-wide opacity-90">
                  {t(post.profile)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 
        【完全復元】エントリーCTAセクション
        境界線と、元のリッチな枠線グラデーション演出（cta-bg）を完全に維持。
      */}
      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10 md:pb-32">
        <Reveal className="rounded-sm border border-[var(--dreamblue)]/30 cta-bg px-8 py-14 text-center md:px-16">
          <h2 className="font-serif text-2xl md:text-3xl">
            {t({ ja: "次は、あなたの番です", en: "You could be the next story." })}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-[1.8] text-muted-foreground">
            {t({
              ja: "システム要件の策定や技術的な仕様に関するご相談を承ります。",
              en: "We take on consultations about system requirements and technical specifications."
            })}
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="https://lin.ee/ncRMNzs"
              target="_blank"
              rel="noopener noreferrer"
              className="group/cta inline-flex items-center gap-2 rounded-sm bg-[#06C755] px-8 py-4 text-base font-medium text-white shadow-lg shadow-[#06C755]/20 transition-opacity hover:opacity-90"
            >
              {t({
                ja: "LINE 公式アカウントでテクニカル相談をする（無料）",
                en: "Technical consult on our LINE Official Account (free)"
              })}
              <ArrowUpRight size={16} className="cta-arrow" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm"
            >
              {t({ ja: "お問い合わせフォーム", en: "Contact form" })}
              <span className="form-arrow">→</span>
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
