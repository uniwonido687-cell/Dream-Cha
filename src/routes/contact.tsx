import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { useState, useRef } from "react";
import { ArrowUpRight, Check, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Link } from "@tanstack/react-router";

const EMAILJS_SERVICE_ID = "service_kw8u2fl";
const EMAILJS_TEMPLATE_ID = "template_8ptt4yw";
const EMAILJS_PUBLIC_KEY = "_LiLf7-B2IyJAEbzJ";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "無料相談 — Dream-cha | Contact" },
      { name: "description", content: "システム要件の策定や技術的な仕様に関するご相談を承ります。DreamCha（ドリームチャ）のLINE公式アカウントよりお問い合わせください。" },
    ],
  }),
  component: ContactPage,
});

type Occupation = "designer" | "frontend" | "nocode" | "other";
type Situation = "before-pitch" | "after-order" | "future";

function ContactPage() {
  const { t, lang } = useLang();
  const [occupation, setOccupation] = useState<Occupation | null>(null);
  const [situation, setSituation] = useState<Situation | null>(null);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const occupationLabel = (v: Occupation) =>
    lang === "ja"
      ? occupations.find((o) => o.value === v)?.ja ?? v
      : occupations.find((o) => o.value === v)?.en ?? v;

  const situationLabel = (v: Situation) =>
    lang === "ja"
      ? situations.find((s) => s.value === v)?.ja ?? v
      : situations.find((s) => s.value === v)?.en ?? v;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    setSending(true);
    setError(false);

    const data = new FormData(form);
    const nameVal = String(data.get("from_name") ?? "");
    const emailVal = String(data.get("reply_to") ?? "");
    const occVal = String(data.get("occupation") ?? "");
    const sitVal = String(data.get("situation") ?? "");
    const msgVal = String(data.get("message") ?? "");

    // Send each value under every common EmailJS variable name so the
    // template populates regardless of which variable names it uses.
    const params: Record<string, string> = {
      from_name: nameVal,
      name: nameVal,
      user_name: nameVal,
      title: nameVal,
      reply_to: emailVal,
      email: emailVal,
      user_email: emailVal,
      occupation: occVal,
      user_occupation: occVal,
      job: occVal,
      role: occVal,
      situation: sitVal,
      current_situation: sitVal,
      status: sitVal,
      message: msgVal,
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        params,
        EMAILJS_PUBLIC_KEY
      );
      setSent(true);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  }

  const occupations: { value: Occupation; ja: string; en: string }[] = [
    { value: "designer", ja: "Webデザイナー", en: "Web Designer" },
    { value: "frontend", ja: "フロントエンドエンジニア", en: "Frontend Engineer" },
    { value: "nocode", ja: "ノーコードディレクター", en: "No-code Director" },
    { value: "other", ja: "その他クリエイター", en: "Other Creative" },
  ];

  const situations: { value: Situation; ja: string; en: string }[] = [
    { value: "before-pitch", ja: "これからクライアントに提案する段階（商談前・見積もり相談）", en: "About to pitch a client (pre-proposal)" },
    { value: "after-order", ja: "すでに受注しており、バックエンドの実装方法で困っている", en: "Already won the deal, stuck on backend implementation" },
    { value: "future", ja: "今すぐではないが、将来のためにパートナーを探している", en: "No immediate project, exploring future partners" },
  ];

  return (
    <>
      {/* Header */}
      <section className="hero-bg mx-auto max-w-7xl px-6 pb-16 pt-20 md:px-10 md:pb-24 md:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal><SectionLabel index="01">Contact</SectionLabel></Reveal>
          <Reveal as="h1" delay={80} className="mt-8 hero-title mx-auto">
            {t({ ja: "システム要件・技術仕様のご相談窓口", en: "For system requirements & technical specifications." })}
          </Reveal>
          <Reveal as="p" delay={160} className="mx-auto mt-6 max-w-2xl text-base leading-[1.8] text-muted-foreground">
            {t({
              ja: "要件定義書・仕様書・Figmaデータなどの資料を共有して、すぐに具体的な相談を進めたい方は、こちらのお問い合わせフォームからご連絡ください。システム要件の策定から技術的な仕様まで、詳細をお伺いした上で最適なご提案をいたします。",
              en: "If you'd like to share materials — requirements docs, specs, Figma data — and move straight into a detailed discussion, use this contact form. We'll review everything and propose the best path, from defining system requirements to technical specs.",
            })}
          </Reveal>
          <Reveal delay={240} className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#06C755]/40 bg-[#06C755]/10 px-5 py-2.5 text-sm text-[#06C755]">
            <span className="h-2 w-2 rounded-full bg-[#06C755]" />
            {t({ ja: "LINE公式アカウントで受付", en: "Via our LINE Official Account" })}
          </Reveal>
        </div>
      </section>

      <div className="hairline mx-auto max-w-7xl" />

      {/* Form */}
      <section className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
        <Reveal>
          {sent ? (
            <div className="rounded-sm border border-border bg-secondary/50 px-6 py-14 text-center">
              <Check className="mx-auto text-[var(--dreamblue)]" size={32} />
              <div className="mt-4 font-serif text-2xl">
                {t({ ja: "送信が完了しました。", en: "Message received." })}
              </div>
              <p className="mt-3 text-sm leading-[1.8] text-muted-foreground">
                {t({ ja: "24時間以内にLINEまたはメールにてご連絡いたします。", en: "We'll reach out via LINE or email within 24 hours." })}
              </p>
              <button
                onClick={() => { setSent(false); setOccupation(null); setSituation(null); }}
                className="mt-6 border-b border-foreground pb-1 text-xs"
              >
                {t({ ja: "別のお問い合わせを送る", en: "Send another message" })}
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              ref={formRef}
              className="space-y-10"
            >
              {/* Hidden fields for EmailJS template variables */}
              <input type="hidden" name="occupation" value={occupation ? occupationLabel(occupation) : ""} />
              <input type="hidden" name="situation" value={situation ? situationLabel(situation) : ""} />
              {/* Name */}
              <div>
                <label className="block">
                  <span className="label-jp">
                    {t({ ja: "お名前 / チーム名", en: "Name / Team name" })}
                    <span className="ml-1 text-red-500">*</span>
                  </span>
                  <input
                    required
                    name="from_name"
                    className={inputCls}
                    placeholder={lang === "ja" ? "例：山田 花子" : "e.g. Jane Smith"}
                  />
                </label>
              </div>

              {/* Email */}
              <div>
                <label className="block">
                  <span className="label-jp">
                    {t({ ja: "メールアドレス", en: "Email address" })}
                    <span className="ml-1 text-red-500">*</span>
                  </span>
                  <input
                    required
                    type="email"
                    name="reply_to"
                    className={inputCls}
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              {/* Occupation — checkbox style */}
              <div>
                <span className="label-jp">
                  {t({ ja: "あなたの職種（任意）", en: "Your role (optional)" })}
                </span>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  {occupations.map((o) => (
                    <button
                      key={o.value}
                      type="button"
                      onClick={() => setOccupation((prev) => (prev === o.value ? null : o.value))}
                      className={`rounded-sm border px-4 py-3 text-left text-sm transition-colors ${occupation === o.value
                        ? "border-[var(--dreamblue)] bg-[var(--dreamblue)]/10 text-foreground"
                        : "border-border text-muted-foreground hover:border-foreground/40"
                        }`}
                    >
                      {lang === "ja" ? o.ja : o.en}
                    </button>
                  ))}
                </div>
              </div>

              {/* Situation — checkbox style */}
              <div>
                <span className="label-jp">
                  {t({ ja: "現在の状況（任意）", en: "Your current situation (optional)" })}
                </span>
                <div className="mt-3 space-y-3">
                  {situations.map((s) => (
                    <button
                      key={s.value}
                      type="button"
                      onClick={() => setSituation((prev) => (prev === s.value ? null : s.value))}
                      className={`w-full rounded-sm border px-4 py-3 text-left text-sm transition-colors ${situation === s.value
                        ? "border-[var(--dreamblue)] bg-[var(--dreamblue)]/10 text-foreground"
                        : "border-border text-muted-foreground hover:border-foreground/40"
                        }`}
                    >
                      {lang === "ja" ? s.ja : s.en}
                    </button>
                  ))}
                </div>
              </div>

              {/* Free text */}
              <div>
                <label className="block">
                  <span className="label-jp">{t({ ja: "ご相談内容（任意・140文字程度でOK）", en: "Details (optional — 140 chars is fine)" })}</span>
                  <textarea
                    rows={4}
                    name="message"
                    className={`${inputCls} resize-none`}
                    placeholder={lang === "ja"
                      ? "例：「会員サイトの決済について」「Bubbleの外部連携について」など、箇条書きで構いません。"
                      : "e.g. \"About payment for a membership site\" — bullet points are fine."}
                  />
                </label>
              </div>

              {error && (
                <p className="text-sm text-red-500">
                  {t({ ja: "送信に失敗しました。時間をおいて再度お試しください。", en: "Failed to send. Please try again later." })}
                </p>
              )}

              <div className="flex items-center justify-between border-t border-border pt-6">
                <p className="text-xs text-muted-foreground">
                  {t({ ja: "送信内容は Dream-cha メンバーのみが確認します。", en: "Only Dream-cha team members will see your message." })}
                </p>
                <p className="mt-6 text-center text-xs text-muted-foreground leading-relaxed">
                  {t({
                    ja: (
                      <>
                        {"送信を完了することで、弊社の"}
                        <a href="/privacy" className="underline text-foreground hover:text-muted-foreground transition-colors" target="_blank">
                          {"プライバシーポリシー"}
                        </a>
                        {"に同意したものとみなされます。"}
                      </>
                    ),
                    en: (
                      <>
                        {"By submitting, you agree to our "}
                        <a href="/privacy" className="underline text-foreground hover:text-muted-foreground transition-colors" target="_blank">
                          {"Privacy Policy"}
                        </a>
                        {"."}
                      </>
                    ),
                  })}
                </p>

                <button
                  type="submit"
                  disabled={sending}
                  className="group/cta inline-flex items-center gap-2 rounded-sm bg-[var(--dreamblue)] px-7 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-40"
                >
                  {sending ? (
                    <><Loader2 size={15} className="animate-spin" /> {t({ ja: "送信中…", en: "Sending…" })}</>
                  ) : (
                    <>{t({ ja: "テクニカル相談を申し込む", en: "Request a technical consult" })} <ArrowUpRight size={15} className="cta-arrow" /></>
                  )}
                </button>
              </div>

              {/* LINE CTA */}
              <div className="rounded-sm border border-[#06C755]/30 bg-[#06C755]/5 px-6 py-5">
                <p className="text-sm leading-[1.8] text-muted-foreground">
                  {t({
                    ja: "メッセージで気軽に技術的な質問や、概算のお見積もりを相談したい方は、こちらのLINE公式アカウントからどうぞ。",
                    en: "If you'd like to ask a quick technical question or get a rough estimate by message, our LINE Official Account is the fastest way.",
                  })}
                </p>
                <a
                  href="https://lin.ee/ncRMNzs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-sm bg-[#06C755] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
                >
                  {t({ ja: "LINE公式アカウントで相談する", en: "Chat on our LINE Official Account" })} <ArrowUpRight size={14} />
                </a>
              </div>
            </form>
          )}
        </Reveal>
      </section>
    </>
  );
}

const inputCls =
  "mt-2 w-full rounded-sm border border-border bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-[var(--dreamblue)] focus:outline-none focus:ring-0";
