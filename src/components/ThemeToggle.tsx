import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  /*
   * DreamChaはダークモードが初期状態なので、SSR時もtrueから開始します。
   * 初回表示時にはDOMを読むだけにして、localStorageへの書き込みは行いません。
   */
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setDark(isDark);
  }, []);

  const toggleTheme = () => {
    const currentlyDark =
      document.documentElement.classList.contains("dark");

    const nextDark = !currentlyDark;

    document.documentElement.classList.toggle("dark", nextDark);
    document.documentElement.style.colorScheme = nextDark
      ? "dark"
      : "light";

    try {
      localStorage.setItem("theme", nextDark ? "dark" : "light");
    } catch {
      // localStorageが利用できないブラウザでも切り替え自体は継続する
    }

    setDark(nextDark);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        dark
          ? "ライトモードに切り替える"
          : "ダークモードに切り替える"
      }
      title={
        dark
          ? "ライトモードに切り替える"
          : "ダークモードに切り替える"
      }
      className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border border-transparent text-muted-foreground transition-colors hover:border-border hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--dreamblue)]"
    >
      {dark ? (
        <Sun size={16} aria-hidden="true" />
      ) : (
        <Moon size={16} aria-hidden="true" />
      )}
    </button>
  );
}