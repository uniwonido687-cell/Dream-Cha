import { createFileRoute, Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight, Lock, Server, ShieldCheck, FileText, Clock } from "lucide-react";

export const Route = createFileRoute("/security")({
  head: () => ({
    meta: [
      { title: "開発規約・セキュリティポリシー — Dream-cha" },
      { name: "description", content: "DreamChaの開発規約・セキュリティポリシー。データ暗号化・AWSインフラ・脆弱性診断・NDA・報酬分配ルールをすべて開示します。" },
    ],
  }),
  component: SecurityPage,
});

const securityItems = [
  {
    icon: <Lock size={20} className="text-[var(--dreamblue)]" />,
    title: { ja: "データ通信・保存の暗号化", en: "Encrypted data in transit and at rest" },
    body: {
      ja: "すべてのWebアプリケーションおよびAPI通信は常時SSL/TLSで暗号化。データベース内のエンドクライアント情報はAES-256等の強固な暗号化アルゴリズムを用いて秘匿化します。",
      en: "All web applications and API communications are protected by SSL/TLS at all times. End-client data stored in databases is encrypted using AES-256 or equivalent algorithms.",
    },
  },
  {
    icon: <Server size={20} className="text-[var(--dreamblue)]" />,
    title: { ja: "AWSインフラの堅牢化（IAM・VPCの分離）", en: "Hardened AWS infrastructure (IAM & VPC isolation)" },
    body: {
      ja: "開発環境と本番環境をVPC（仮想ネットワーク）によって完全に隔離。最小権限の原則（IAM）を徹底し、外部からの不正アクセスや誤操作によるデータ紛失を構造的に防ぎます。",
      en: "Development and production environments are fully isolated using VPC. Strict adherence to the principle of least privilege (IAM) structurally prevents unauthorised access and accidental data loss.",
    },
  },
  {
    icon: <ShieldCheck size={20} className="text-[var(--dreamblue)]" />,
    title: { ja: "脆弱性診断・デバッグの義務化（リリース前テスト）", en: "Mandatory vulnerability assessment before every release" },
    body: {
      ja: "セキュリティエンジニアの統括のもと、OWASP Top 10に基づくSQLインジェクション・XSS等の脆弱性診断テストをリリース前に必ず全件実施します。",
      en: "Under our security engineer's oversight, vulnerability assessments based on the OWASP Top 10 — including SQL injection and XSS — are conducted on every project before release.",
    },
  },
  {
    icon: <FileText size={20} className="text-[var(--dreamblue)]" />,
    title: { ja: "厳格な機密保持（NDA）", en: "Strict non-disclosure (NDA)" },
    body: {
      ja: "チームメンバー全員が機密保持契約を遵守し、開発中に知り得たクライアントの知的財産、およびエンドユーザーの個人情報を外部に漏洩させません。",
      en: "All team members are bound by NDA. Client intellectual property and end-user personal data encountered during development are never disclosed externally.",
    },
  },
  {
    icon: <Clock size={20} className="text-[var(--dreamblue)]" />,
    title: { ja: "24時間監視・バックアップ体制", en: "24/7 monitoring and backup" },
    body: {
      ja: "インフラ専門メンバーの設計により、自動バックアップ（日次）とサーバー異常を検知するアラートシステムを常時稼働させます。",
      en: "Designed by our infrastructure specialist: automatic daily backups and a server anomaly alert system running at all times.",
    },
  },
];

const policyItems = [
  {
    n: "01",
    title: { ja: "著作権・所有権の完全分離", en: "Complete separation of copyright and ownership" },
    body: {
      ja: "制作されたプロダクトのうち、フロントのデザイン部分の著作権は100%デザイナーに帰属します。バックエンドのシステムコード・アーキテクチャの所有権はDreamChaに帰属します。お互いの領域へは一切不可侵とします。",
      en: "The copyright of all front-end design in a delivered product belongs 100% to the designer. Ownership of back-end system code and architecture belongs to Dream-cha. Neither party may encroach on the other's domain.",
    },
  },
  {
    n: "02",
    title: { ja: "24時間以内のレスポンス保証", en: "24-hour first-response guarantee" },
    body: {
      ja: "プロジェクト進行中、仕様変更やトラブルが発生した際、チームとして24時間以内に必ずファーストリプライを返すことを義務付け、進行の遅延を防ぎます。",
      en: "During any active project, the team is obligated to send a first reply within 24 hours of any specification change or incident report, preventing project delays.",
    },
  },
  {
    n: "03",
    title: { ja: "成果報酬・着金ベースの分配の定義", en: "Performance-based distribution definition" },
    body: {
      ja: "報酬は「エンドクライアントからの検収およびデザイナーへの着金」を確認後、事前に締結した配分率に基づいて5営業日以内にクリーンに分配されます。前払い・立替の強制は一切行いません。",
      en: "Compensation is distributed cleanly within 5 business days after confirming end-client acceptance and payment to the designer, based on the pre-agreed split. No upfront payments or cash advances are ever required.",
    },
  },
];

function SecurityPage() {
  const { t } = useLang();

  return (
    <>
      {/* Hero */}
      <section className="hero-bg mx-auto max-w-7xl px-6 pb-16 pt-20 md:px-10 md:pb-24 md:pt-28">
        <Reveal><SectionLabel index="01">{t({ ja: "開発規約・セキュリティポリシー", en: "Development Policy & Security" })}</SectionLabel></Reveal>
        <Reveal as="h1" delay={80} className="mt-8 hero-title">
          {t({
            ja: <>技術と信頼を、一切のブラックボックス<br />なしに透明化する</>,
            en: <>Technology and trust — made fully<br />transparent, zero black boxes.</>,
          })}
        </Reveal>
        <div className="mt-10 max-w-2xl">
          <Reveal as="p" delay={160} className="text-base leading-[1.8] text-muted-foreground">
            {t({
              ja: "成果報酬型のチームにおいて最も軽視されがちなのが『セキュリティ』と『契約・権利トラブルの防止』です。Dream-chaは、初期からのシステムエキスパートと堅牢なインフラ体制を誇るからこそ、お互いの権利を守り、エンドクライアントのデータを死守するための規約とポリシーを事前にすべて開示します。",
              en: "In performance-based teams, security and contract-rights issues are the most commonly overlooked risks. Because Dream-cha was built on system expertise and robust infrastructure from day one, we disclose all policies and standards upfront — to protect everyone's rights and safeguard end-client data.",
            })}
          </Reveal>
        </div>
      </section>

      <div className="hairline mx-auto max-w-7xl h-[2px]" />

      {/* Security policy */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <Reveal><SectionLabel index="02">{t({ ja: "セキュリティポリシー", en: "Security Policy" })}</SectionLabel></Reveal>
        <Reveal as="h2" delay={80} className="mt-6 font-serif text-3xl leading-tight md:text-4xl">
          {t({ ja: "5つの技術的防衛基準", en: "Five technical defence standards." })}
        </Reveal>
        <Reveal as="p" delay={140} className="mt-4 max-w-xl text-sm leading-[1.8] text-muted-foreground">
          {t({
            ja: "「DreamChaになら、クライアントの個人情報が絡むシステムを任せられる」と確信していただくための、技術的な約束です。",
            en: "Our technical commitments — so you can trust Dream-cha with systems that handle client personal data.",
          })}
        </Reveal>
        <dl className="mt-14 space-y-0 divide-y divide-border border-t border-border">
          {securityItems.map((item, i) => (
            <Reveal key={i} delay={i * 70} className="grid gap-6 py-8 md:grid-cols-12">
              <div className="flex items-start gap-3 md:col-span-5">
                <div className="mt-0.5 shrink-0">{item.icon}</div>
                <dt className="font-serif text-lg leading-snug">{t(item.title)}</dt>
              </div>
              <dd className="text-sm leading-[1.8] text-muted-foreground md:col-span-7">{t(item.body)}</dd>
            </Reveal>
          ))}
        </dl>
      </section>

      {/* Development policy */}
      <section className="bg-[#F5F5F7] dark:bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal><SectionLabel index="03">{t({ ja: "開発・権利の規約", en: "Development & Rights Policy" })}</SectionLabel></Reveal>
          <Reveal as="h2" delay={80} className="mt-6 font-serif text-3xl leading-tight md:text-4xl">
            {t({ ja: "等価交換のクリーンルール", en: "The clean rules of equal exchange." })}
          </Reveal>
          <Reveal as="p" delay={140} className="mt-4 max-w-xl text-sm leading-[1.8] text-muted-foreground">
            {t({
              ja: "お金・権利・レスポンスに関するトラブルを未然に防ぐ、ビジネスライクな規約の明文化です。",
              en: "A clear, business-like codification of rules to prevent disputes over money, rights and response times.",
            })}
          </Reveal>
          <dl className="mt-12 space-y-0 divide-y divide-border border-t border-border">
            {policyItems.map((p, i) => (
              <Reveal key={p.n} delay={i * 80} className="grid gap-6 py-10 md:grid-cols-12">
                <div className="font-mono text-xs text-muted-foreground md:col-span-1">{p.n}</div>
                <dt className="font-serif text-xl md:col-span-4">{t(p.title)}</dt>
                <dd className="text-sm leading-[1.8] text-muted-foreground md:col-span-7">{t(p.body)}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <Reveal className="rounded-sm border border-[var(--dreamblue)]/30 cta-bg px-8 py-14 text-center md:px-16">
          <h2 className="font-serif text-2xl md:text-3xl">
            {t({ ja: "規約をご確認の上、テクニカル相談へ", en: "Policies reviewed. Let's talk technical." })}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-[1.8] text-muted-foreground">
            {t({
              ja: "システム要件の策定や技術的な仕様に関するご相談を承ります。LINE公式アカウントより、お気軽にお問い合わせください。",
              en: "We take on consultations about system requirements and technical specifications. Reach us anytime via our LINE Official Account.",
            })}
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="https://line.me/ti/p/MPrAYupYLn"
              target="_blank"
              rel="noopener noreferrer"
              className="group/cta inline-flex items-center gap-2 rounded-sm bg-[#06C755] px-8 py-4 text-base font-medium text-white shadow-lg shadow-[#06C755]/20 transition-opacity hover:opacity-90"
            >
              {t({ ja: "LINE公式アカウントでテクニカル相談をする（無料）", en: "Technical consult on our LINE Official Account (free)" })}
              <ArrowUpRight size={16} className="cta-arrow" />
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
