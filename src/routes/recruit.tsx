import { createFileRoute, Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight, Plus, Terminal, Shield, Cpu } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/recruit")({
  head: () => ({
    meta: [
      { title: "採用情報 — Dream-cha | Careers" },
      {
        name: "description",
        content: "互いの限界を相殺し、ひとつの完璧なプロダクトを創る。Dream-cha はバックエンド・インフラ・フルスタックエンジニアを募集しています。",
      },
    ],
  }),
  component: RecruitPage,
});

// 募集職種データ（アイコンバグを修正し、Lucideコンポーネントを綺麗に割り当て）
const jobs = [
  {
    id: "backend",
    icon: <Cpu size={20} />,
    title: { ja: "サーバーサイドシステムエンジニア", en: "Server-side Systems Engineer" },
    subtitle: { ja: "バックエンド・コア開発", en: "Backend · Core Development" },
    description: {
      ja: "各種 Web ア規ケーションにおけるコアロジック（DB 設計・決済 API 連携・認証システム等）のバックエンド開発および最適化業務。フロント側のデザイン要件や UI/UX の思想を忠実にシステムへ落とし込む、堅牢な裏側の構築を担います。",
      en: "Backend development and optimisation of core logic (DB design, payment API integration, auth systems) across web applications. You build the robust engine that faithfully translates design intent into system reality.",
    },
    requirements: {
      ja: [
        "PHP (Laravel/WordPress コア), Python, Go, Node.js のいずれかを用いた実務開発経験 3 年以上",
        "RDB (MySQL, PostgreSQL) の最適なスキーマ設計、クエリチューニングのスキル",
        "Stripe 等の外部決済 API、OAuth を用いた認証機能の実装経験",
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
    icon: <Shield size={20} />,
    title: { ja: "クラウドアーキテクト（AWS / GCP）", en: "Cloud Architect (AWS / GCP)" },
    subtitle: { ja: "インフラ・セキュリティ", en: "Infrastructure · Security" },
    description: {
      ja: "24 時間 365 日、高負荷に耐えうるセキュアなサーバーインフラ基盤の設計・構築。リリース前の脆弱性診断や負荷テストの実施。開発メンバーやデザイナーが、一切のセキュリティ不安なくプロダクトを市場へ送り出せる環境を整備します。",
      en: "Design and build secure, high-availability infrastructure that runs 24/7 under load. Conduct pre-release vulnerability assessments and load tests so every product ships without security anxiety.",
    },
    requirements: {
      ja: [
        "AWS (EC2, RDS, Lambda, VPC 等) または GCP を用いた商用環境のインフラ設計・運用経験 2 年以上",
        "Docker / Kubernetes を用いたコンテナオーケストレーションの構築経験",
        "Linux サーバーのセキュリティ堅牢化、WAF 導入、脆弱性診断ツールの実務運用経験",
      ],
      en: [
        "2+ years designing and operating production infrastructure on AWS (EC2, RDS, Lambda, VPC) or GCP",
        "Container orchestration experience with Docker / Kubernetes",
        "Practical experience hardening Linux servers, deploying WAFs and running vulnerability assessment tools",
      ],
    },
    persona: {
      ja: "「動けばいいシステム」ではなく、クライアントやエンドユーザーの個人情報を完璧に守り抜く、チームの『最後の砦』としての責任感を持てる方。",
      en: "Not 'good enough' — the last line of defence who takes personal responsibility for protecting client and end-user data completely.",
    },
  },
  {
    id: "fullstack",
    icon: <Terminal size={20} />,
    title: { ja: "バックエンド特化型フルスタックエンジニア", en: "Backend-focused Full-stack Engineer" },
    subtitle: { ja: "フロント × バック ブリッジ開発", en: "Frontend × Backend Bridge" },
    description: {
      ja: "バックエンドの高度なアーキテクチャ設計を主軸としつつも、フロントエンドへの効率的なデータ繋ぎ込み（API 統合）までを一気通貫で担当。デザイナーが設計したコンポーネントとバックエンドシステム間の技術的な溝を完全に埋めるブリッジ役となります。",
      en: "Lead backend architecture while owning the efficient integration of data into the frontend end-to-end. You are the bridge that eliminates the technical gap between designer-built components and backend systems.",
    },
    requirements: {
      ja: [
        "Ruby on Rails, Node.js 等を用いたバックエンド API のフルスクラッチ開発経験 3 年以上",
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
      {/* Hero */}
      <section className="hero-bg mx-auto max-w-7xl px-6 pb-16 pt-20 md:px-10 md:pb-24 md:pt-28">
        <Reveal><SectionLabel index="01">Careers</SectionLabel></Reveal>
        <Reveal as="h1" delay={80} className="mt-8 hero-title">
          {t({
            ja: <>互いの限界を相殺し、<br />ひとつの完璧なプロダクトを創る</>,
            en: <>Eliminate each other's limits.<br />Build one perfect product.</>,
          })}
        </Reveal>
        <Reveal as="p" delay={140} className="mt-6 max-w-2xl text-base leading-[1.8] text-muted-foreground">
          {t({
            ja: "Dream-chaは、エンジニアとデザイナーが対等に手を取り合い、個人では到達できない大規模案件を完遂するプロフェッショナルチームです。あなたの技術力が、チーム全体の可能性を拡張します。",
            en: "Dream-cha is a professional team where engineers and designers join forces as equals to accomplish large-scale projects unattainable individually. Your technical depth expands our collective possibilities.",
          })}
        </Reveal>
      </section>

      <div className="hairline mx-auto max-w-7xl" />

      {/* 募集職種リストセクション */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <SectionLabel index="02">
              {t({ ja: "募集職種", en: "Open Positions" })}
            </SectionLabel>
          </Reveal>

          <div className="mt-12 divide-y divide-border border-t border-b border-border">
            {jobs.map((job, i) => (
              <JobAccordionItem
                key={job.id}
                job={job}
                i={i}
                t={t}
                lang={lang}
                isOpen={open === job.id}
                setOpen={(isOpen) => setOpen(isOpen ? job.id : null)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 
        【完全復元】報酬の思想セクション
        背景色（bg-[#F5F5F7] dark:bg-secondary/40）と、3カラムの等価交換ステップを100%維持。
      */}
      <section className="bg-[#F5F5F7] dark:bg-secondary/40 py-20 md:py-28 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <SectionLabel index="03">
              {t({ ja: "報酬の思想", en: "Compensation Philosophy" })}
            </SectionLabel>
          </Reveal>
          <Reveal as="h2" delay={80} className="mt-6 font-serif text-3xl leading-tight md:text-4xl">
            {t({ ja: "中抜きのない、プロ同士の等価交換", en: "Zero middlemen. Pure peer-to-peer value exchange." })}
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
            {[
              {
                step: "Step 1",
                title: { ja: "案件受注", en: "Project won" },
                body: {
                  ja: "チームが案件を受注し、各メンバーの担当領域と報酬配分を事前に合意。",
                  en: "The team wins a project and agrees each member's scope and revenue split upfront."
                },
              },
              {
                step: "Step 2",
                title: { ja: "並行開発・納品", en: "Parallel build & delivery" },
                body: {
                  ja: "バックエンド・インフラ・フロントが並走し、品質を妥協せずに納品を完遂。",
                  en: "Backend, infrastructure and frontend run in parallel to deliver without compromise."
                },
              },
              {
                step: "Step 3",
                title: { ja: "着金後にクリーンな分配", en: "Clean split after client pays" },
                body: {
                  ja: "クライアントからの着金を確認後、事前合意の配分率で各メンバーへ即時分配。前払い・立替は一切不要。",
                  en: "Once client payment clears, each member receives their agreed share immediately. No advances, no holdbacks."
                },
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

      {/* 
        【完全復元】エントリーCTAセクション
        境界線と、元のリッチな枠線グラデーション演出（cta-bg）を完全に維持。
      */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <Reveal className="rounded-sm border border-[var(--dreamblue)]/30 cta-bg px-8 py-14 text-center md:px-16">
          <h2 className="font-serif text-2xl md:text-3xl">
            {t({ ja: "ポートフォリオを添えてエントリーする", en: "Apply with your portfolio." })}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-[1.8] text-muted-foreground">
            {t({
              ja: "職種・経歴・GitHub やポートフォリオの URL を添えて、お問い合わせフォームよりご連絡ください。",
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

{/* ========================================================
    独立開閉用 募集職種アコーディオンコンポーネント (滑らか開閉・レスポンシブ版)
    ======================================================== */}
function JobAccordionItem({
  job,
  i,
  t,
  lang,
  isOpen,
  setOpen
}: {
  job: any;
  i: number;
  t: any;
  lang: string;
  isOpen: boolean;
  setOpen: (open: boolean) => void;
}) {
  return (
    <Reveal as="div" delay={i * 80}>
      {/* トリガーボタン（ヘッダー部分） */}
      <button
        onClick={() => setOpen(!isOpen)}
        className="flex w-full items-center justify-between py-7 text-left focus:outline-none group/trigger"
      >
        <div className="flex items-center gap-4 min-w-0 flex-1">
          {/* バグを修正したアイコンエリア（白黒でスタイリッシュに発色） */}
          <span className="text-muted-foreground group-hover/trigger:text-foreground transition-colors p-2 bg-secondary/20 rounded-sm shrink-0">
            {job.icon}
          </span>
          <div className="min-w-0 flex-1">
            <div className="label-jp text-xs text-[var(--dreamblue)] tracking-wide font-sans">{t(job.subtitle)}</div>
            <div className="mt-1 font-serif text-lg md:text-2xl leading-tight text-foreground truncate">
              {t(job.title)}
            </div>
          </div>
        </div>

        {/* 実績ページと完全に統一したプラス（＋）回転アイコン */}
        <div className="ml-4 shrink-0 text-muted-foreground/80 transition-transform duration-300 ease-out p-1 bg-secondary/20 rounded-full group-hover/trigger:text-foreground">
          <Plus size={16} className={`transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} />
        </div>
      </button>

      {/* スムーズ開閉コンテナ（CSS Gridによる吸い付くような開閉インタラクション） */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 mb-8" : "grid-rows-[0fr] opacity-0"
          }`}
      >
        <div className="overflow-hidden">
          {/* 中身エリア（スマートフォン対応のため、pl-10固定を md:pl-14 pl-0 へ最適化） */}
          <div className="pb-10 pl-0 md:pl-14 space-y-8">
            <p className="text-sm leading-[1.8] text-muted-foreground/90 max-w-3xl">{t(job.description)}</p>

            {/* 必須スキル要件 */}
            <div className="mt-8">
              <div className="label-jp text-xs font-semibold text-foreground tracking-wider uppercase">
                {t({ ja: "必須スキル・要件", en: "Requirements" })}
              </div>
              <ul className="mt-4 space-y-3">
                {(lang === "ja" ? job.requirements.ja : job.requirements.en).map((requirement: string, idx: number) => (
                  <li key={idx} className="flex gap-3 text-sm leading-relaxed">
                    <span className="mt-1 shrink-0 font-mono text-xs text-[var(--dreamblue)]">→</span>
                    <span className="text-muted-foreground/90">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 求める人物像 */}
            <div className="mt-8 rounded-sm border-l-2 border-[var(--dreamblue)] bg-[var(--dreamblue)]/5 px-5 py-4 max-w-3xl">
              <div className="label-jp text-xs font-semibold text-[var(--dreamblue)] tracking-wider uppercase">
                {t({ ja: "求める人物像", en: "Who we're looking for" })}
              </div>
              <p className="mt-2 text-sm leading-[1.8] text-muted-foreground/90">{t(job.persona)}</p>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
