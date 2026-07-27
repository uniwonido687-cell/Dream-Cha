import { Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";

export function Footer() {
  const { t } = useLang();
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const updateTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    
    updateTheme();
    
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="mt-32 border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4 md:px-10">
        <div className="md:col-span-2">
          <img
            src={isDark ? "/dark-logo.png" : "/light-logo.png"}
            alt="Dream-cha"
            className="h-20 w-auto object-contain"
          />
          <p className="mt-4 max-w-sm text-sm leading-[1.8] text-muted-foreground">
            {t({
              ja: "皆様のデザインを、強固なシステムインフラと堅牢なバックエンド実装で形にする。デザイナーのための開発パートナーチームです。",
              en: "Turning your design into reality with robust system infrastructure. A development partner team for designers.",
            })}
          </p>
          <a
            href="https://lin.ee/ncRMNzs"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-sm bg-[#06C755] px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            {t({ ja: "LINE公式アカウントで相談する", en: "Chat on our LINE Official Account" })} <ArrowUpRight size={13} />
          </a>
        </div>
        <div>
          <div className="label-jp">Navigation</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="text-muted-foreground hover:text-foreground">{t({ ja: "ホーム", en: "Home" })}</Link></li>
            <li><Link to="/about" className="text-muted-foreground hover:text-foreground">{t({ ja: "私たちについて", en: "About" })}</Link></li>
            <li><Link to="/projects" className="text-muted-foreground hover:text-foreground">{t({ ja: "実績", en: "Projects" })}</Link></li>
            <li><Link to="/blog" className="text-muted-foreground hover:text-foreground">{t({ ja: "お客様の声", en: "Stories" })}</Link></li>
            <li><Link to="/recruit" className="text-muted-foreground hover:text-foreground">{t({ ja: "採用情報", en: "Careers" })}</Link></li>
            <li><Link to="/security" className="text-muted-foreground hover:text-foreground">{t({ ja: "開発規約", en: "Policy" })}</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">{t({ ja: "無料相談", en: "Contact" })}</Link></li>
          </ul>
        </div>
        <div>
          <div className="label-jp">Contact</div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/contact">{t({ ja: "LINE公式アカウント", en: "LINE Official Account" })}</Link></li>
            <li><Link to="/contact">{t({ ja: "システム要件・技術仕様のご相談", en: "System requirements & tech spec consulting" })}</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-6 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:px-10">
          <span>© {new Date().getFullYear()} Dream-cha. {t({ ja: "All rights reserved.", en: "All rights reserved." })}</span>
          <span className="font-mono tracking-widest">DREAM · CHALLENGE · DELIVER</span>
        </div>
      </div>
    </footer>
  );
}
