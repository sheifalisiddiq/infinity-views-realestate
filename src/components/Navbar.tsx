"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/about",      label: "About"      },
  { href: "/services",   label: "Services"   },
  { href: "/properties", label: "Properties" },
  { href: "/buy",        label: "Buy"        },
  { href: "/rent",       label: "Rent"       },
  { href: "/off-plan",   label: "Off-Plan"   },
  { href: "/insights",   label: "Insights"   },
  { href: "/contact",    label: "Contact"    },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  return (
    <>
      {/* ── Floating pill navbar ── */}
      <nav className="fixed top-5 left-0 right-0 z-50 px-4 md:px-8">
        <div
          className={`mx-auto flex items-center justify-between rounded-full px-6 py-3.5 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            scrolled
              ? "bg-[#0A0A0A]/95 backdrop-blur-2xl border border-[#2A2A2A] max-w-5xl"
              : "bg-[#0A0A0A]/70 backdrop-blur-xl  border border-[#1E1E1E] max-w-6xl"
          }`}
        >
          <Link
            href="/"
            className="font-headline text-[22px] text-secondary tracking-tight shrink-0"
          >
            Infinity Views
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.slice(0, -1).map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-label text-[12px] uppercase tracking-[0.08em] text-on-surface-variant hover:text-secondary transition-colors duration-300"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/hot-offers"
              className="hidden lg:inline-flex items-center font-label text-[11px] uppercase tracking-widest text-[#0A0A0A] bg-tertiary hover:bg-secondary px-5 py-2 rounded-full transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            >
              Hot Offers
            </Link>

            {/* Hamburger — morphs to X */}
            <button
              onClick={() => setIsMenuOpen((v) => !v)}
              className="lg:hidden w-9 h-9 flex flex-col justify-center items-center gap-[5px] focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <span
                className={`block w-5 h-px bg-secondary origin-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isMenuOpen ? "rotate-45 translate-y-[6px]" : ""
                }`}
              />
              <span
                className={`block w-5 h-px bg-secondary transition-all duration-300 ${
                  isMenuOpen ? "opacity-0 -translate-x-2" : ""
                }`}
              />
              <span
                className={`block w-5 h-px bg-secondary origin-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Full-screen mobile overlay ── */}
      <div
        className={`lg:hidden fixed inset-0 z-40 flex flex-col justify-center px-10 bg-[#0A0A0A]/97 backdrop-blur-3xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-1 pt-24">
          {navLinks.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`font-headline text-[38px] text-secondary py-1.5 leading-tight transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: isMenuOpen ? `${i * 55}ms` : "0ms" }}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/hot-offers"
            onClick={() => setIsMenuOpen(false)}
            className={`mt-10 inline-flex items-center gap-2 font-label text-[12px] uppercase tracking-widest text-[#0A0A0A] bg-tertiary px-8 py-4 rounded-full w-fit transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: isMenuOpen ? `${navLinks.length * 55 + 40}ms` : "0ms" }}
          >
            Hot Offers
          </Link>
        </nav>
      </div>
    </>
  );
}
