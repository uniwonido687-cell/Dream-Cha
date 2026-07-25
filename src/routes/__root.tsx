import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  Link,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { LangProvider } from "../lib/i18n";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <span className="label-jp">404 · Not Found</span>
      <h1 className="mt-4 font-serif text-5xl">見つかりませんでした</h1>
      <p className="mt-3 text-sm text-muted-foreground">The page you're looking for doesn't exist.</p>
      <Link to="/" className="mt-8 border-b border-foreground pb-1 text-sm">Return home →</Link>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <span className="label-jp">Something went wrong</span>
      <h1 className="mt-4 font-serif text-4xl">This page didn't load</h1>
      <button
        onClick={() => { router.invalidate(); reset(); }}
        className="mt-8 border-b border-foreground pb-1 text-sm"
      >
        Try again
      </button>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Dream-cha — 理想の未来へ、技術で挑み続ける。" },
      { name: "description", content: "Dream-cha（ドリームチャ）は、デザイナーとバックエンドエンジニアが組む完全成果報酬型の共同開発チームです。前払いゼロ・フルパッケージ対応でデザイナー・ノーコードディレクターの案件を技術で突破します。" },
      { name: "author", content: "Dream-cha" },
      { property: "og:title", content: "Dream-cha — Dream Challenge Engineering" },
      { property: "og:description", content: "Performance-based co-development. Zero upfront. Full-stack. Your creative vision, backed by solid engineering." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/favicon.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;500;600&family=Noto+Sans+JP:wght@300;400;500;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="ja" className="dark" suppressHydrationWarning>
      <head>
        <HeadContent />
        {/* Favicon circle styling */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              link[rel="icon"],
              link[rel="apple-touch-icon"] {
                border-radius: 50%;
              }
            `,
          }}
        />
        {/* Google Analytics (GA4) — silent, for the team only */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-03SHWD8Y9P" />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-03SHWD8Y9P');",
          }}
        />
        {/* Apply the saved theme before React hydrates to prevent flicker. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function () {
              try {
                var savedTheme = localStorage.getItem("theme");
                var isDark = savedTheme !== "light";

                document.documentElement.classList.toggle("dark", isDark);
                document.documentElement.style.colorScheme = isDark
                  ? "dark"
                  : "light";
              } catch (error) {
                document.documentElement.classList.add("dark");
                document.documentElement.style.colorScheme = "dark";
              }
            })();
          `,
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <LangProvider>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1 overflow-x-clip">
            <Outlet />
          </main>
          <Footer />
        </div>
      </LangProvider>
    </QueryClientProvider>
  );
}
