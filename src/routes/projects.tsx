import { createFileRoute, Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { caseStudies } from "@/lib/content";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "実績 — Dream-cha | Projects" },
      { name: "description", content: "Dream-chaの解決実績。完全成果報酬型でデザイナー・ノーコードディレクターの案件を技術で突破した事例を公開しています。" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const { t } = useLang();

  return (
    <>
      {/* Header */}
      <section className="hero-bg mx-auto max-w-7xl px-6 pb-16 pt-20 md:px-10 md:pb-24 md:pt-28">
        <Reveal><SectionLabel index="01">Projects</SectionLabel></Reveal>
        <Reveal as="h1" delay={80} className="mt-8 hero-title">
          {t({ ja: "Before / After の数字で語る", en: "The numbers tell the story." })}
        </Reveal>
        <Reveal as="p" delay={160} className="mt-8 max-w-2xl text-base leading-[1.8] text-muted-foreground md:text-lg">
          {t({
            ja: "きらびやかな宣伝文句は置き、技術構成と成果数値だけを淡々と並べます。詳細な資料はご相談時にお渡しできます。",
            en: "We skip the marketing language and lay out the stack and the numbers. Deeper case decks available on request.",
          })}
        </Reveal>
      </section>

      <div className="hairline mx-auto max-w-7xl" />

      {/* Revenue model explainer */}
      <section className="bg-[#F5F5F7] dark:bg-secondary/40 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal><SectionLabel index="02">{t({ ja: "成果報酬の仕組み", en: "How performance-based payment works" })}</SectionLabel></Reveal>
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
              { step: "Step 1", ja: "案件受注", en: "You win the project", sub: { ja: "Dream-chaと分配率を事前合意", en: "Agree revenue split upfront" } },
              { step: "Step 2", ja: "共同開発・納品", en: "We build together", sub: { ja: "フロント・バックエンドを並行開発", en: "Design & backend developed in parallel" } },
              { step: "Step 3", ja: "着金後に精算", en: "Settle after client pays", sub: { ja: "あなたの手出しゼロ・前払いなし", en: "Zero upfront from you" } },
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

      {/* Case studies */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <Reveal><SectionLabel index="03">{t({ ja: "解決事例", en: "Case Studies" })}</SectionLabel></Reveal>
        <div className="mt-12 space-y-20">
          {caseStudies.map((c, i) => (
            <Reveal as="article" key={c.id} className="grid grid-cols-1 gap-10 border-t border-border pt-12 md:grid-cols-12">
              {/* visual */}
              <div className="min-w-0 md:col-span-4">
                <div className="overflow-hidden rounded-sm">
                  {c.image ? (
                    <img
                      src={c.image}
                      alt={c.title.ja}
                      className="case-image"
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
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {c.stack.map((s) => (
                    <span key={s} className="border border-border px-2 py-1 font-mono text-[10px] tracking-wider text-muted-foreground">{s}</span>
                  ))}
                </div>
              </div>

              {/* content */}
              <div className="min-w-0 md:col-span-8">
                <div className="flex items-center gap-4 label-jp">
                  <span>{c.year}</span>
                  <span className="h-px w-6 bg-border" />
                  <span className="text-[var(--dreamblue)]">{t(c.category)}</span>
                </div>
                <h2 className="mt-4 font-serif text-2xl leading-snug md:text-3xl">{t(c.title)}</h2>

                <div className="mt-8 space-y-6">
                  <div className="rounded-sm border-l-4 border-red-300 bg-red-50 dark:bg-red-950/20 px-5 py-4">
                    <div className="label-jp text-red-500 dark:text-red-400">{t({ ja: "Before（困っていた状態）", en: "Before" })}</div>
                    <p className="mt-2 text-sm leading-[1.8]">{t(c.before)}</p>
                  </div>
                  <div className="rounded-sm border-l-4 border-[var(--dreamblue)] bg-blue-50 dark:bg-blue-950/20 px-5 py-4">
                    <div className="label-jp text-[var(--dreamblue)]">{t({ ja: "Dream-chaの解決策", en: "Dream-cha's solution" })}</div>
                    <p className="mt-2 text-sm leading-[1.8]">{t(c.solution)}</p>
                  </div>
                  <div className="rounded-sm border-l-4 border-green-400 bg-green-50 dark:bg-green-950/20 px-5 py-4">
                    <div className="label-jp text-green-600 dark:text-green-400">{t({ ja: "After（解決後の成果）", en: "After" })}</div>
                    <p className="mt-2 text-sm leading-[1.8]">{t(c.result)}</p>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-sm border border-border bg-border">
                  {c.metrics.map((m) => (
                    <div key={m.value} className="bg-background p-5 text-center">
                      <div className="font-serif text-2xl text-[var(--dreamblue)] md:text-3xl">{m.value}</div>
                      <div className="mt-2 text-[11px] text-muted-foreground">{t(m.label)}</div>
                    </div>
                  ))}
                </div>

                {c.link && (
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--dreamblue)] underline underline-offset-4 transition-opacity hover:opacity-80"
                  >
                    {t({ ja: "実際の動作を確認する（別タブで開く）", en: "View the live evidence (new tab)" })}
                    <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </Reveal>
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
