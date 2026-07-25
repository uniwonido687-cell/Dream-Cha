import { Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { LangToggle } from "./LangToggle";
import { ThemeToggle } from "./ThemeToggle";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
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

  const nav = [
    { to: "/", label: t({ ja: "ホーム", en: "Home" }) },
    { to: "/about", label: t({ ja: "私たちについて", en: "About" }) },
    { to: "/projects", label: t({ ja: "実績", en: "Projects" }) },
    { to: "/blog", label: t({ ja: "お客様の声", en: "Stories" }) },
    { to: "/recruit", label: t({ ja: "採用情報", en: "Careers" }) },
    { to: "/security", label: t({ ja: "開発規約", en: "Policy" }) },
    { to: "/contact", label: t({ ja: "無料相談", en: "Contact" }) },
  ] as const;

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8 lg:px-10">
        <Link to="/" className="flex items-center gap-2.5 shrink-0" onClick={() => setOpen(false)}>
          <img
            src={isDark ? "/dark-logo.png" : "/light-logo.png"}
            alt="Dream-cha"
            className="h-24 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav — shown at lg (1024px+) */}
        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="nav-underline text-sm text-muted-foreground transition-colors hover:text-foreground [&.active]:text-foreground"
            >
              {n.label}
            </Link>
          ))}
          <div className="ml-2 flex items-center gap-3 border-l border-border pl-5">
            <LangToggle />
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile/tablet toolbar — shown below lg */}
        <div className="flex items-center gap-2 lg:hidden">
          <LangToggle />
          <ThemeToggle />
          <button
            aria-label="menu"
            onClick={() => setOpen((v) => !v)}
            className="p-1 text-foreground"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border duration-200 animate-in fade-in slide-in-from-top-2 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm text-muted-foreground transition-colors hover:text-foreground [&.active]:text-foreground"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
