"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV } from "@/lib/content";
import { useCart } from "@/lib/cart-context";
import LineButton from "@/components/LineButton";

export default function Header() {
  const pathname = usePathname();
  const { totalQty, setCartOpen } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-60 border-b border-border-soft bg-cream/86 backdrop-blur-md">
      <div className="mx-auto flex h-[64px] max-w-[1200px] items-center justify-between gap-4 px-4 sm:h-[70px] sm:px-6">
        <Link href="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
          <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-gradient-to-br from-pink to-pink-pale font-display text-lg font-bold text-white sm:h-[34px] sm:w-[34px] sm:text-xl">
            N
          </span>
          <span className="font-heading text-lg font-semibold tracking-tight text-green-deep sm:text-[22px]">
            Nutra<span className="text-pink">list</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                "rounded-lg px-3 py-2 text-[14.5px] font-medium " +
                (pathname === item.href ? "text-pink" : "text-ink-soft hover:text-pink")
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            aria-label="ตะกร้าสินค้า"
            onClick={() => setCartOpen(true)}
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-border-strong text-pink-deep sm:h-[42px] sm:w-[42px]"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            {totalQty > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex h-[19px] min-w-[19px] items-center justify-center rounded-full bg-pink px-1 text-[11px] font-bold text-white">
                {totalQty}
              </span>
            )}
          </button>
          <div className="hidden sm:block">
            <LineButton label="ทักไลน์" />
          </div>
          <button
            aria-label="เมนู"
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border-strong text-ink lg:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-border-soft bg-cream px-4 py-3 lg:hidden">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={
                "rounded-lg px-3 py-2.5 text-[15px] font-medium " +
                (pathname === item.href ? "text-pink" : "text-ink-soft")
              }
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-2 sm:hidden">
            <LineButton label="ทักไลน์" />
          </div>
        </nav>
      )}
    </header>
  );
}
