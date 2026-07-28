import { createFileRoute, Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { caseStudies, team } from "@/lib/content";
import { Avatar } from "@/components/Avatar";
import { ArrowUpRight, ShieldCheck, Layers, Paintbrush } from "lucide-react";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  const { t } = useLang();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden hero-bg">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-20 md:px-10 md:pb-32 md:pt-28">
          <Reveal><SectionLabel index="01">Dream-cha · ドリームチャ</SectionLabel></Reveal>
          <Reveal as="h1" delay={80} className="mt-8 hero-title">
            {t({
              ja: <>デザインはできる<br />でも、システムが組めないから、<br />その高単価案件を諦めますか？</>,
              en: <>Great design, zero backend fear.<br />We are your complete tech partner.</>,
            })}
          </Reveal>
          <Reveal as="p" delay={180} className="mt-8 max-w-2xl text-base leading-[1.8] text-muted-foreground md:text-lg">
            {t({
              ja: "DreamCha（ドリームチャ）は、皆様のデザインを、強固なシステムインフラと堅牢なバックエンド実装で形にする開発パートナーチームです。技術商談の窓口からバグの保証まで、裏側をトータルで引き受けます。",
              en: "DreamCha turns your design into reality with robust system infrastructure. From technical negotiation to bug guarantees, we handle the backend end to end.",
            })}
          </Reveal>
          <Reveal delay={280} className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="group/cta inline-flex items-center gap-2 rounded-sm bg-[var(--dreamblue)] px-7 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              {t({ ja: "システム要件について相談する", en: "Discuss your system requirements" })}
              <ArrowUpRight size={15} className="cta-arrow" />
            </Link>
            <Link to="/projects" className="inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm">
              {t({ ja: "解決実績を見る →", en: "See our case studies →" })}
            </Link>
          </Reveal>
        </div>
      </section>

      <div className="hairline mx-auto max-w-7xl" />

      {/* Pain points */}
      <section className="bg-[#F5F5F7] dark:bg-secondary/40 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal><SectionLabel index="02">{t({ ja: "よくある悩み", en: "Sound familiar?" })}</SectionLabel></Reveal>
          <Reveal as="h2" delay={80} className="mt-6 font-serif text-3xl leading-tight md:text-4xl">
            {t({ ja: "皆さんには、このような経験はありませんか？", en: "Have you ever been here?" })}
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {[
              {
                num: "01",
                label: { ja: "システム要件での失注", en: "Losing the deal over system requirements" },
                body: {
                  ja: "クライアントから複雑なAPI連携や決済システムを求められ、技術的な不安から案件を諦めてしまう……",
                  en: "A client asks for complex API integrations or a payment system, and technical anxiety makes you give up the project…",
                },
              },
              {
                num: "02",
                label: { ja: "外注先エンジニアとの衝突", en: "Clashing with an outsourced engineer" },
                body: {
                  ja: "外部のエンジニアに開発を頼んだら、「実装が面倒だから」とこだわりのUIや余白を勝手に崩され、デザインの世界観を台無しにされた……",
                  en: "You hand development to an outside engineer, and they quietly break your carefully-tuned UI and spacing because \"it's a pain to build\" — ruining the world you designed…",
                },
              },
            ].map((c, i) => (
              <Reveal
                key={c.label.ja}
                delay={i * 90}
                className="card-lift rounded-sm border border-border bg-background p-8"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[var(--dreamblue)]">{c.num}</span>
                  <div className="label-jp text-[var(--dreamblue)]">{t(c.label)}</div>
                </div>
                <p className="mt-4 text-sm leading-[1.8] text-muted-foreground">{t(c.body)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <Reveal><SectionLabel index="03">{t({ ja: "サービス内容", en: "Services" })}</SectionLabel></Reveal>
        <Reveal as="h2" delay={80} className="mt-6 max-w-4xl font-serif text-3xl leading-tight md:text-4xl">
          {t({ ja: "皆様のデザインを、強固なシステムインフラと堅牢なバックエンド実装で形にする", en: "Turning your design into reality with robust system infrastructure" })}
        </Reveal>
        <Reveal as="p" delay={140} className="mt-6 max-w-3xl text-base leading-[1.8] text-muted-foreground">
          {t({
            ja: "DreamCha（ドリームチャ）は、Webデザインの美しさと世界観をそのまま活かすための、頼れる技術パートナーです。皆様が制作・コーディングされたFigmaやSTUDIOのフロント画面の仕様を完璧に尊重し、その裏側にある複雑なバックエンドシステム（Stripe決済、ログイン機能、API連携、データベース、サーバー構築）のみを専門に構築。チーム専用の強力なシステム開発部門として、技術商談の窓口からバグの保証までトータルで引き受けます。",
            en: "DreamCha is your ultimate engineering partner, dedicated to seamlessly preserving the aesthetic beauty and distinct worldviews of your web designs. We fully respect the specifications of the frontend interfaces you have crafted or coded in Figma and STUDIO, specializing exclusively in structuring the complex backend systems behind them—including Stripe payments, authentication flows, API integrations, and database architectures. Operating as your team’s highly dedicated system development department, we manage everything from technical client consultations to full bug-warranty support.",
          })}
        </Reveal>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {[
            {
              icon: <Layers size={28} className="text-[var(--dreamblue)]" />,
              title: {
                ja: "デザインを活かす、フルスタックなシステム・ドッキング",
                en: "Seamless Full-Stack Integration—Honoring Your Design",
              },
              body: {
                ja: "私たちDreamChaは、皆様がFigmaやSTUDIO等で制作されたデザインの世界観を1ミリも崩さず、裏側のシステムだけを美しく結合（ドッキング）させるスペシャリスト集団です。デザインの自由度を100%保ったまま、Stripe決済やLINEログイン、独自データベースなど、個人では実装が難しい重層的なバックエンドだけをスマートに実装します。",
                en: "At DreamCha, we seamlessly integrate robust backend functionality into your Figma or STUDIO layouts without altering a single pixel of your aesthetic vision. Leaving your creative freedom 100% intact, we expertly handle complex engineering underneath—including Stripe payments, LINE login, and custom databases.",
              },
            },
            {
              icon: <ShieldCheck size={28} className="text-[var(--dreamblue)]" />,
              title: {
                ja: "複雑なシステム要件の完全実装",
                en: "Full implementation of complex system requirements",
              },
              body: {
                ja: "クライアントから求められるStripeなどの外部決済API連携、会員マイページ機能、複雑なデータベース（DB）構築、大規模ECサイト、強固なセキュリティ実装など、デザイナー様が一人で抱えるにはリスクの高すぎる重層的なバックエンド開発を、チームのバックエンドエンジニア陣が完璧に形にします。",
                en: "External payment API integration (Stripe, etc.), member pages, complex databases, large-scale EC, robust security—the layered backend work that's too risky for a designer to carry alone is handled perfectly by backend engineers of our team.",
              },
            },
            {
              icon: <Paintbrush size={28} className="text-[var(--dreamblue)]" />,
              title: {
                ja: "商談を裏から支える、見積もり・技術仕様の「台本」作成",
                en: "Backstage Tech Consulting & Client Response Scripting",
              },
              body: {
                ja: "クライアントからの「この機能は実装できるか？」という難しい技術質問に対し、皆様が商談でそのまま答えるだけで一発納得させられる「完璧な回答・提案用の台本」を裏方から迅速に作成します。皆様のチームの専属CTOとして、あなたの口からプロの提案を届けてもらうことで、クライアントからの信頼を最大化させます。",
                en: "We craft the perfect technical responses and pitch scripts for your client meetings, allowing you to answer complex engineering questions with absolute confidence. Acting as your team’s backstage CTO, we empower you to deliver expert proposals directly, maximizing your authority and trust with your clients.",
              },
            },
          ].map((b, i) => (
            <Reveal
              key={b.title.ja}
              delay={i * 110}
              className="flex flex-col border-t-2 border-[var(--dreamblue)] pt-8"
            >
              {b.icon}

              <h3 className="mt-4 min-h-[3.5rem] font-serif text-xl leading-snug">
                {t(b.title)}
              </h3>

              <p className="mt-3 text-sm leading-[1.8] text-muted-foreground">
                {t(b.body)}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="hairline mx-auto max-w-7xl" />

      {/* Case study preview */}
      <section className="bg-[#F5F5F7] dark:bg-secondary/40 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal className="flex items-end justify-between">
            <div>
              <SectionLabel index="04">{t({ ja: "解決事例", en: "Case Studies" })}</SectionLabel>
              <h2 className="mt-6 font-serif text-3xl leading-tight md:text-4xl">
                {t({ ja: "Before / After の数字で語る", en: "The numbers tell the story." })}
              </h2>
            </div>
            <Link to="/projects" className="hidden text-sm text-muted-foreground hover:text-foreground md:block">
              {t({ ja: "すべての実績 →", en: "All projects →" })}
            </Link>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {[caseStudies[0], caseStudies[3]].map((c, i) => (
              <Reveal
                key={c.id}
                delay={i * 120}
                className="card-lift rounded-sm border border-border bg-background overflow-hidden flex flex-col"
              >
                {c.image ? (
                  <img
                    src={c.image}
                    alt={c.title.ja}
                    className="case-image"
                  />
                ) : (
                  <div
                    className="aspect-[16/10] w-full"
                    style={{
                      background: `linear-gradient(135deg, ${c.hue} 0%, oklch(0.85 0.02 80) 100%)`,
                    }}
                  />
                )}

                <div className="flex flex-1 flex-col p-8">

                  <div className="label-jp text-[var(--dreamblue)]">
                    {t(c.category)}
                  </div>

                  <h3 className="mt-3 min-h-[4.5rem] font-serif text-xl leading-snug">
                    {t(c.title)}
                  </h3>

                  <p className="mt-3 text-sm leading-[1.8] text-muted-foreground">
                    {t(c.before)}
                  </p>

                  <div className="mt-auto pt-6">
                    <div className="grid grid-cols-3 gap-px overflow-hidden rounded-sm border border-border bg-border">
                      {c.metrics.map((m) => (
                        <div
                          key={m.value}
                          className="bg-background p-4 text-center"
                        >
                          <div className="font-serif text-2xl text-[var(--dreamblue)]">
                            {m.value}
                          </div>

                          <div className="mt-1 text-[10px] text-muted-foreground">
                            {t(m.label)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* Team preview */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <Reveal><SectionLabel index="05">{t({ ja: "チーム", en: "The Team" })}</SectionLabel></Reveal>
        <Reveal as="h2" delay={80} className="mt-6 font-serif text-3xl leading-tight md:text-4xl">
          {t({ ja: "8名の専門家が、あなたの案件を守る", en: "Eight specialists dedicated to your project." })}
        </Reveal>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={m.id} delay={(i % 4) * 80} className="flex flex-col items-center text-center border-t border-border pt-6">
              <Avatar initials={m.initials} tone={m.tone} size={72} photo={m.photo} name={t(m.name)} />
              <div className="mt-3 font-serif text-base leading-tight">{t(m.name)}</div>
              <div className="mt-1 text-[11px] text-muted-foreground leading-snug">{t(m.role)}</div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <Link to="/about" className="inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm">
            {t({ ja: "詳しいプロフィールを見る →", en: "Full profiles →" })}
          </Link>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10 md:pb-32">
        <Reveal className="rounded-sm border border-[var(--dreamblue)]/30 cta-bg px-8 py-16 text-center md:px-16 md:py-24">
          <span className="label-jp text-[var(--dreamblue)]">{t({ ja: "お問い合わせ", en: "Contact" })}</span>
          <h2 className="mt-6 font-serif text-3xl md:text-4xl">
            {t({ ja: "システム要件の策定から、技術仕様のご相談まで", en: "From defining system requirements to technical specs." })}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-[1.8] text-muted-foreground md:text-base">
            {t({
              ja: "技術的なご質問や概算のお見積もりは、LINE公式アカウントへお気軽に。要件定義書やFigmaデータを添えた詳しいご相談は、お問い合わせフォームからどうぞ。",
              en: "For quick technical questions or a rough estimate, use our LINE Official Account. For a detailed discussion with your requirements docs or Figma data, use the contact form.",
            })}
          </p>
          <div className="mt-8 flex flex-col flex-wrap items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://lin.ee/ncRMNzs"
              target="_blank"
              rel="noopener noreferrer"
              className="group/cta inline-flex items-center gap-2 rounded-sm bg-[#06C755] px-8 py-4 text-base font-medium text-white shadow-lg shadow-[#06C755]/20 transition-opacity hover:opacity-90"
            >
              {t({ ja: "LINE公式アカウントでテクニカル相談をする（無料）", en: "Technical consult on our LINE Official Account (free)" })}
              <ArrowUpRight size={16} className="cta-arrow" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm"
            >
              {t({ ja: "お問い合わせフォーム", en: "Contact form" })}<span className="form-arrow">→</span>
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
