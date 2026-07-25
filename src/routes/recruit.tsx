import { createFileRoute, Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/recruit")({
  head: () => ({
    meta: [
      { title: "採用情報 — Dream-cha | Careers" },
      { name: "description", content: "互いの限界を相殺し、ひとつの完璧なプロダクトを創る。Dream-chaはバックエンド・インフラ・フルスタックエンジニアを募集しています。" },
    ],
  }),
  component: RecruitPage,
});

const jobs = [
  {
    id: "backend",
    icon: "🛠️",
    title: { ja: "サーバーサイドシステムエンジニア", en: "Server-side Systems Engineer" },
    subtitle: { ja: "バックエンド・コア開発", en: "Backend · Core Development" },
    description: {
      ja: "各種Webアプリケーションにおけるコアロジック（DB設計・決済API連携・認証システム等）のバックエンド開発および最適化業務。フロント側のデザイン要件やUI/UXの思想を忠実にシステムへ落とし込む、堅牢な裏側の構築を担います。",
      en: "Backend development and optimisation of core logic (DB design, payment API integration, auth systems) across web applications. You build the robust engine that faithfully translates design intent into system reality.",
    },
    requirements: {
      ja: [
        "PHP (Laravel/WordPressコア), Python, Go, Node.js のいずれかを用いた実務開発経験3年以上",
        "RDB (MySQL, PostgreSQL) の最適なスキーマ設計、クエリチューニングのスキル",
        "Stripe等の外部決済API、OAuthを用いた認証機能の実装経験",
      ],
      en: [
        "3+ years commercial development with PHP (Laravel/WordPress core), Python, Go, or Node.js",
        "Strong schema design and query tuning for MySQL or PostgreSQL",
        "Hands-on experience with external payment APIs (Stripe etc.) and OAuth authentication",
      ],
    },
    persona: {
      ja: "「仕様書通りに書くだけ」ではなく、クリエイティブ側の表現やデザインの制約を技術力でクリアし、システムの美しさとデザインの美しさを両立できる方。",
      en: "Not just spec-followers — engineers who use technical depth to remove design constraints and deliver systems as beautiful as the designs they power.",
    },
  },
  {
    id: "infra",
    icon: "🛠️",
    title: { ja: "クラウドアーキテクト（AWS / GCP）", en: "Cloud Architect (AWS / GCP)" },
    subtitle: { ja: "インフラ・セキュリティ", en: "Infrastructure · Security" },
    description: {
      ja: "24時間365日、高負荷に耐えうるセキュアなサーバーインフラ基盤の設計・構築。リリース前の脆弱性診断や負荷テストの実施。開発メンバーやデザイナーが、一切のセキュリティ不安なくプロダクトを市場へ送り出せる環境を整備します。",
      en: "Design and build secure, high-availability infrastructure that runs 24/7 under load. Conduct pre-release vulnerability assessments and load tests so every product ships without security anxiety.",
    },
    requirements: {
      ja: [
        "AWS (EC2, RDS, Lambda, VPC等) または GCP を用いた商用環境のインフラ設計・運用経験2年以上",
        "Docker / Kubernetes を用いたコンテナオーケストレーションの構築経験",
        "Linuxサーバーのセキュリティ堅牢化、WAF導入、脆弱性診断ツールの実務運用経験",
      ],
      en: [
        "2+ years designing and operating production infrastructure on AWS (EC2, RDS, Lambda, VPC) or GCP",
        "Container orchestration experience with Docker / Kubernetes",
        "Practical experience hardening Linux servers, deploying WAFs and running vulnerability assessment tools",
      ],
    },
    persona: {
      ja: "「動けばいいシステム」ではなく、クライアントやエンドユーザーの個人情報を完璧に守り抜く、チームの『最後の砦』としての責任感を持てる方。",
      en: "Not \"good enough\" — the last line of defence who takes personal responsibility for protecting client and end-user data completely.",
    },
  },
  {
    id: "fullstack",
    icon: "🛠️",
    title: { ja: "バックエンド特化型フルスタックエンジニア", en: "Backend-focused Full-stack Engineer" },
    subtitle: { ja: "フロント × バック ブリッジ開発", en: "Frontend × Backend Bridge" },
    description: {
      ja: "バックエンドの高度なアーキテクチャ設計を主軸としながらも、フロントエンドへの効率的なデータ繋ぎ込み（API統合）までを一気通貫で担当。デザイナーが設計したコンポーネントとバックエンドシステム間の技術的な溝を完全に埋めるブリッジ役となります。",
      en: "Lead backend architecture while owning the efficient integration of data into the frontend end-to-end. You are the bridge that eliminates the technical gap between designer-built components and backend systems.",
    },
    requirements: {
      ja: [
        "Ruby on Rails, Node.js 等を用いたバックエンドAPIのフルスクラッチ開発経験3年以上",
        "TypeScript, React, Next.js を用いたモダンなフロントエンド開発・コンポーネント設計の知識",
        "RESTful API または GraphQL の設計、バックエンドからフロントへの最適なデータハンドリング経験",
      ],
      en: [
        "3+ years building backend APIs from scratch with Ruby on Rails, Node.js or equivalent",
        "Modern frontend development with TypeScript, React and Next.js including component architecture",
        "Expertise in RESTful API or GraphQL design and optimal backend-to-frontend data handling",
      ],
    },
    persona: {
      ja: "デザインとシステム、両方の文脈を理解し、お互いの弱点を技術的な繋ぎ込みによってシームレスに解決できる高い技術的柔軟性を持つ方。",
      en: "Fluent in both design and systems context — solving the weaknesses of each through seamless technical integration.",
    },
  },
];

function RecruitPage() {
  const { t, lang } = useLang();
  const [open, setOpen] = useState<string | null>(null);

  return (
    <>
      {/* Hero — dark navy */}
      <section className="hero-bg mx-auto max-w-7xl px-6 pb-16 pt-20 md:px-10 md:pb-24 md:pt-28">
        <div>
          <Reveal>
            <SectionLabel index="01">
              <span className="text-white/60">Careers</span>
            </SectionLabel>
          </Reveal>
          <Reveal as="h1" delay={80} className="mt-8 hero-title">
            {t({
              ja: <>互いの限界を相殺し、<br />ひとつの完璧なプロダクトを創る</>,
              en: <>Eliminate each other's limits.<br />Build one perfect product.</>,
            })}
          </Reveal>
          <Reveal as="p" delay={160} className="mt-8 max-w-2xl text-base leading-[1.8] text-white/60 md:text-lg">
            {t({
              ja: "Dream-chaは、エンジニアとデザイナーが対等に手を取り合い、個人では到達できない大規模案件を完遂するプロフェッショナルチームです。あなたの技術力が、チーム全体の可能性を拡張します。",
              en: "Dream-cha is a professional team where engineers and designers collaborate as equals to complete large-scale projects neither could achieve alone. Your technical depth expands what the whole team can reach.",
            })}
          </Reveal>
        </div>
      </section>

      <div className="hairline mx-auto max-w-7xl" />

      {/* Job listings — accordion */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal><SectionLabel index="02">{t({ ja: "募集職種", en: "Open Positions" })}</SectionLabel></Reveal>
          <div className="mt-12 divide-y divide-border border-t border-border">
            {jobs.map((job, i) => (
              <Reveal key={job.id} delay={i * 80}>
                <button
                  onClick={() => setOpen(open === job.id ? null : job.id)}
                  className="flex w-full items-center justify-between py-7 text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xl">{job.icon}</span>
                    <div>
                      <div className="label-jp text-[var(--dreamblue)]">{t(job.subtitle)}</div>
                      <div className="mt-1 font-serif text-xl leading-tight md:text-2xl">{t(job.title)}</div>
                    </div>
                  </div>
                  <span className="ml-4 shrink-0 font-mono text-sm text-muted-foreground">
                    {open === job.id ? "▲" : "▼"}
                  </span>
                </button>

                {open === job.id && (
                  <div className="pb-10 pl-10">
                    <p className="text-sm leading-[1.8] text-muted-foreground">{t(job.description)}</p>

                    <div className="mt-8">
                      <div className="label-jp">{t({ ja: "必須スキル・要件", en: "Requirements" })}</div>
                      <ul className="mt-4 space-y-3">
                        {(lang === "ja" ? job.requirements.ja : job.requirements.en).map((r, i) => (
                          <li key={i} className="flex gap-3 text-sm">
                            <span className="mt-1 shrink-0 font-mono text-xs text-[var(--dreamblue)]">→</span>
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 rounded-sm border-l-2 border-[var(--dreamblue)] bg-[var(--dreamblue)]/5 px-5 py-4">
                      <div className="label-jp text-[var(--dreamblue)]">{t({ ja: "求める人物像", en: "Who we're looking for" })}</div>
                      <p className="mt-2 text-sm leading-[1.8] text-muted-foreground">{t(job.persona)}</p>
                    </div>
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Compensation philosophy */}
      <section className="bg-[#F5F5F7] dark:bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal><SectionLabel index="03">{t({ ja: "報酬の思想", en: "Compensation Philosophy" })}</SectionLabel></Reveal>
          <Reveal as="h2" delay={80} className="mt-6 font-serif text-3xl leading-tight md:text-4xl">
            {t({ ja: "中抜きのない、プロ同士の等価交換", en: "Zero middlemen. Pure peer-to-peer value exchange." })}
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
            {[
              {
                step: "Step 1",
                title: { ja: "案件受注", en: "Project won" },
                body: { ja: "チームが案件を受注し、各メンバーの担当領域と報酬配分を事前に合意。", en: "The team wins a project and agrees each member's scope and revenue split upfront." },
              },
              {
                step: "Step 2",
                title: { ja: "並行開発・納品", en: "Parallel build & delivery" },
                body: { ja: "バックエンド・インフラ・フロントが並走し、品質を妥協せずに納品を完遂。", en: "Backend, infrastructure and frontend run in parallel to deliver without compromise." },
              },
              {
                step: "Step 3",
                title: { ja: "着金後にクリーンな分配", en: "Clean split after client pays" },
                body: { ja: "クライアントからの着金を確認後、事前合意の配分率で各メンバーへ即時分配。前払い・立替は一切不要。", en: "Once client payment clears, each member receives their agreed share immediately. No advances, no holdbacks." },
              },
            ].map((s, i) => (
              <Reveal key={s.step} delay={i * 90} className="bg-background p-8">
                <div className="font-mono text-xs text-[var(--dreamblue)]">{s.step}</div>
                <div className="mt-3 font-serif text-xl">{t(s.title)}</div>
                <p className="mt-3 text-sm leading-[1.8] text-muted-foreground">{t(s.body)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <Reveal className="rounded-sm border border-[var(--dreamblue)]/30 cta-bg px-8 py-14 text-center md:px-16">
          <h2 className="font-serif text-2xl md:text-3xl">
            {t({ ja: "ポートフォリオを添えてエントリーする", en: "Apply with your portfolio." })}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-[1.8] text-muted-foreground">
            {t({
              ja: "職種・経歴・GitHubやポートフォリオのURLを添えて、お問い合わせフォームよりご連絡ください。",
              en: "Send your role, background and GitHub / portfolio URL via the contact form.",
            })}
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="group/cta inline-flex items-center gap-2 rounded-sm bg-[var(--dreamblue)] px-8 py-4 text-sm font-medium tracking-wider text-white transition-opacity hover:opacity-90"
            >
              {t({ ja: "ポートフォリオを添付してエントリーする", en: "Apply with portfolio" })}
              <ArrowUpRight size={15} className="cta-arrow" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
