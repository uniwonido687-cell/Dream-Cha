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
      { name: "description", content: "DreamCha（ドリームチャ）と共に案件を突破したデザイナー・ディレクターのリアルな声。デザインを1ミリも崩さずシステム要件の壁を越えた開発パートナーへのフィードバックを掲載しています。" },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const { t } = useLang();

  return (
    <>
      <section className="hero-bg mx-auto max-w-7xl px-6 pb-16 pt-20 md:px-10 md:pb-24 md:pt-28">
        <Reveal><SectionLabel index="01">{t({ ja: "お客様の声", en: "Client Stories" })}</SectionLabel></Reveal>
        <Reveal as="h1" delay={80} className="mt-8 hero-title">
          {t({ ja: "デザインを守り抜いた、開発パートナーとしてのお客様の声", en: "Client voices — from designers whose work we protected." })}
        </Reveal>
        <Reveal as="p" delay={160} className="mt-8 max-w-2xl text-base leading-[1.8] text-muted-foreground md:text-lg">
          {t({
            ja: "システム要件の壁を、デザインを1ミリも崩さずに突破したクリエイターの皆さまから届いた、リアルな声をそのまま掲載しています。",
            en: "Real, unedited voices from creators who broke through system-requirement walls without altering their design at all.",
          })}
        </Reveal>
      </section>

      <div className="hairline mx-auto max-w-7xl h-[2px]" />

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        {/* Unified card grid (masonry) — same design for every voice, light & dark ready */}
        <div className="columns-1 gap-6 md:columns-2">
          {blogPosts.map((post) => (
            <Reveal
              as="article"
              key={post.id}
              className="card-lift mb-6 break-inside-avoid rounded-xl border border-border bg-card p-7 md:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[var(--dreamblue)]/10 px-3 py-1 font-mono text-[10px] tracking-wider text-[var(--dreamblue)]">
                  {t(post.tag)}
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">{post.date}</span>
              </div>

              <Quote size={26} className="mt-5 text-[var(--dreamblue)]/40" aria-hidden />

              <h2 className="mt-3 font-serif text-lg leading-snug">{t(post.title)}</h2>
              <p className="mt-4 text-sm leading-[1.95] text-muted-foreground">{t(post.comment)}</p>

              <div className="mt-6 border-t border-border pt-4">
                <p className="text-xs font-medium text-foreground/80">{t(post.profile)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10 md:pb-32">
        <Reveal className="rounded-sm border border-[var(--dreamblue)]/30 cta-bg px-8 py-14 text-center md:px-16">
          <h2 className="font-serif text-2xl md:text-3xl">
            {t({ ja: "次は、あなたの番です", en: "You could be the next story." })}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-[1.8] text-muted-foreground">
            {t({ ja: "システム要件の策定や技術的な仕様に関するご相談を承ります。", en: "We take on consultations about system requirements and technical specifications." })}
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="https://lin.ee/ncRMNzs"
              target="_blank"
              rel="noopener noreferrer"
              className="group/cta inline-flex items-center gap-2 rounded-sm bg-[#06C755] px-8 py-4 text-base font-medium text-white shadow-lg shadow-[#06C755]/20 transition-opacity hover:opacity-90"
            >
              {t({ ja: "LINE公式アカウントでテクニカル相談をする（無料）", en: "Technical consult on our LINE Official Account (free)" })} <ArrowUpRight size={16} className="cta-arrow" />
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm">
              {t({ ja: "お問い合わせフォーム", en: "Contact form" })}<span className="form-arrow">→</span>
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
