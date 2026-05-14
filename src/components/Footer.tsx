import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] w-full py-16 px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-start gap-gutter border-t border-[#2A2A2A] text-on-surface-variant">
      <div className="flex flex-col gap-4 max-w-xs">
        <span className="font-headline text-[24px] text-secondary italic tracking-tight">Infinity Views</span>
        <p className="font-body text-[14px]">Dubai's foremost authority on architectural real estate and discreet acquisitions.</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-8">
        <Link className="font-label text-[14px] hover:text-tertiary transition-colors" href="/privacy">Privacy</Link>
        <Link className="font-label text-[14px] hover:text-tertiary transition-colors" href="/terms">Terms</Link>
        <Link className="font-label text-[14px] hover:text-tertiary transition-colors" href="/contact">Contact</Link>
      </div>
      <div className="flex flex-col justify-end h-full mt-auto pt-8 md:pt-0">
        <p className="font-label text-[14px]">© 2026 Infinity Views.</p>
      </div>
    </footer>
  );
}
