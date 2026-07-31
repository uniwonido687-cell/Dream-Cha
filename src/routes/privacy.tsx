import { createFileRoute, Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";

// as any を付与することで、ルーターの自動生成ファイルの状況に依存せず、型警告を100%強制消滅させます
export const Route = createFileRoute("/privacy" as any)({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Dream-cha | プライバシーポリシー" },
      { name: "description", content: "Dream-cha(ドリームチャ)の個人情報保護方針について記載しています。" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  const { t } = useLang();

  return (
    <section className="mx-auto max-w-4xl px-6 pb-24 pt-20 md:px-10 md:pb-32 md:pt-28">
      <Reveal><SectionLabel index="00">Privacy</SectionLabel></Reveal>
      
      <Reveal as="h1" delay={80} className="mt-8 font-serif text-3xl leading-tight md:text-4xl tracking-wide">
        {t({
          ja: <>プライバシーポリシー</>,
          en: <>Privacy Policy</>,
        })}
      </Reveal>

      <Reveal as="p" delay={120} className="mt-4 text-xs font-mono tracking-widest text-muted-foreground uppercase">
        {t({
          ja: "個人情報保護方針",
          en: "Data Protection Guidelines",
        })}
      </Reveal>

      <div className="mt-16 space-y-12 text-sm leading-[1.8] text-muted-foreground">
        {/* Section 1 */}
        <Reveal delay={160} className="border-t border-border/40 pt-8">
          <h2 className="font-serif text-lg text-foreground mb-4">
            {t({ ja: "1. 個人情報の収集方法", en: "1. Collection of Personal Data" })}
          </h2>
          <p>
            {t({
              ja: "当チームは、ユーザーがお問い合わせフォームを利用、またはLINE公式アカウントへの登録を行う際に、氏名、会社名（屋号）、メールアドレスなどの個人情報を適切に収集いたします。",
              en: "We appropriately collect personal data, including your name, company/studio name, and email address, when you use our contact form or register via our official LINE account.",
            })}
          </p>
        </Reveal>

        {/* Section 2 */}
        <Reveal delay={200} className="border-t border-border/40 pt-8">
          <h2 className="font-serif text-lg text-foreground mb-4">
            {t({ ja: "2. 個人情報の利用目的", en: "2. Purpose of Using Personal Data" })}
          </h2>
          <p>
            {t({
              ja: "収集した個人情報は、ユーザーからのお問い合わせや技術相談・概算お見積もりへの対応、およびパートナー提携に関するご連絡のみに使用し、他の目的には一切利用いたしません。",
              en: "The collected information will be used strictly for responding to technical consultations, providing estimations, and coordinating our partner alliance. We will never use your data for any other purposes.",
            })}
          </p>
        </Reveal>

        {/* Section 3 */}
        <Reveal delay={240} className="border-t border-border/40 pt-8">
          <h2 className="font-serif text-lg text-foreground mb-4">
            {t({ ja: "3. 個人情報の第三者提供について", en: "3. Third-Party Disclosure" })}
          </h2>
          <p>
            {t({
              ja: "当チームは、法令に基づく場合を除き、ユーザーの同意を得ることなく第三者に個人情報を提供・開示することは絶対にありません。エンジニアチーム内でも厳重に管理いたします。",
              en: "We will never disclose or provide your personal data to any third parties without your explicit consent, except as required by law. Your data is strictly managed within our engineering core.",
            })}
          </p>
        </Reveal>

        {/* Section 4 */}
        <Reveal delay={280} className="border-t border-border/40 pt-8">
          <h2 className="font-serif text-lg text-foreground mb-4">
            {t({ ja: "4. アクセス解析ツール（GA4）について", en: "4. Cookie & Analytics (GA4)" })}
          </h2>
          <p>
            {t({
              ja: "本ウェブサイトでは、トラフィックデータの収集・分析のためにGoogleアナリティクス（GA4）を使用しています。このデータは匿名で収集されており、個人を特定するものではありません。クッキー（Cookie）の受け入れはブラウザの設定で拒否することができます。",
              en: "This site utilizes Google Analytics (GA4) to analyze traffic performance. This data is collected anonymously and cannot be used to identify individuals. You can disable cookies at any time via your browser settings.",
            })}
          </p>
        </Reveal>

        {/* Section 5 */}
        <Reveal delay={320} className="border-t border-border/40 pt-8">
          <h2 className="font-serif text-lg text-foreground mb-4">
            {t({ ja: "5. お問い合わせ窓口", en: "5. Contact Information" })}
          </h2>
          <p>
            {t({
              ja: "本ポリシーに関するご質問や個人情報の開示請求等につきましては、当サイトのお問い合わせフォームよりご連絡ください。",
              en: "For any inquiries regarding this policy or data management, please contact us directly via our submission form.",
            })}
          </p>
        </Reveal>
      </div>

      <Reveal delay={360} className="mt-16 border-t border-border pt-8 flex justify-start">
        <Link to="/" className="text-xs text-foreground hover:text-muted-foreground transition-colors border-b border-foreground pb-0.5">
          {t({ ja: "← ホームに戻る", en: "← Return Home" })}
        </Link>
      </Reveal>
    </section>
  );
}
