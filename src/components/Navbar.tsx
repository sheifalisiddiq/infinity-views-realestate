"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#0A0A0A]/70 backdrop-blur-xl border-b border-[#2A2A2A] fixed top-0 w-full flex flex-col px-margin-mobile md:px-margin-desktop py-5 z-50 transition-all">
      <div className="flex justify-between items-center w-full">
        <Link className="font-headline text-[28px] text-secondary tracking-tight flex items-center gap-2" href="/">
          Infinity Views
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <Link className="font-label text-[12px] text-on-surface hover:text-tertiary transition-colors" href="/about">About</Link>
          <Link className="font-label text-[12px] text-on-surface hover:text-tertiary transition-colors" href="/services">Services</Link>
          <Link className="font-label text-[12px] text-on-surface hover:text-tertiary transition-colors" href="/properties">Properties</Link>
          <Link className="font-label text-[12px] text-on-surface hover:text-tertiary transition-colors" href="/buy">Buy</Link>
          <Link className="font-label text-[12px] text-on-surface hover:text-tertiary transition-colors" href="/rent">Rent</Link>
          <Link className="font-label text-[12px] text-on-surface hover:text-tertiary transition-colors" href="/off-plan">Off-Plan</Link>
          <Link className="font-label text-[12px] text-on-surface hover:text-tertiary transition-colors" href="/insights">Insights</Link>
          <Link className="font-label text-[12px] text-on-surface hover:text-tertiary transition-colors" href="/contact">Contact</Link>
          
          <Link href="/hot-offers" className="font-label text-[12px] text-[#0A0A0A] bg-secondary hover:bg-tertiary px-6 py-2.5 rounded-sm transition-all duration-300">
            Hot Offers
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-secondary focus:outline-none"
        >
          <span className="material-symbols-outlined text-3xl">
            {isMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu Content */}
      <div 
        className={`lg:hidden flex flex-col gap-5 pt-6 mt-4 border-t border-[#2A2A2A] overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <Link className="font-label text-[14px] text-on-surface" href="/about">About</Link>
        <Link className="font-label text-[14px] text-on-surface" href="/services">Services</Link>
        <Link className="font-label text-[14px] text-on-surface" href="/properties">Properties</Link>
        <Link className="font-label text-[14px] text-on-surface" href="/buy">Buy</Link>
        <Link className="font-label text-[14px] text-on-surface" href="/rent">Rent</Link>
        <Link className="font-label text-[14px] text-on-surface" href="/off-plan">Off-Plan</Link>
        <Link className="font-label text-[14px] text-on-surface" href="/insights">Insights</Link>
        <Link className="font-label text-[14px] text-on-surface" href="/contact">Contact</Link>
        <Link href="/hot-offers" className="inline-block mt-2 font-label text-[14px] text-[#0A0A0A] bg-tertiary text-center px-6 py-3 rounded-sm">Hot Offers</Link>
      </div>
    </nav>
  );
}
