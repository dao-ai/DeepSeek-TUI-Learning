"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg-primary/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-lg font-semibold text-accent-green font-mono">
            deepseek
          </span>
          <span className="rounded bg-bg-tertiary px-1.5 py-0.5 font-mono text-xs text-text-secondary">
            tui
          </span>
        </Link>

        <nav className="flex items-center gap-1">
          {[
            { href: "/", label: "首页" },
            { href: "/stage/basic-interaction", label: "学习路径" },
          ].map(({ href, label }) => {
            const active =
              href === "/"
                ? pathname === "/"
                : pathname.startsWith("/stage");
            return (
              <Link
                key={href}
                href={href}
                className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
                  active
                    ? "bg-bg-tertiary text-text-primary"
                    : "text-text-secondary hover:text-text-primary hover:bg-bg-secondary"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
