'use client'

import dynamic from 'next/dynamic'

const ContactMap = dynamic(() => import('./ContactMap'), {
  ssr: false,
  loading: () => (
    <div
      className="h-[480px] w-full bg-[#0A0A0A] flex items-center justify-center border-t border-hairline-dark"
      aria-label="Loading map"
    >
      <div className="eyebrow text-[9px] text-text-on-dark/20 animate-pulse">
        Loading map&hellip;
      </div>
    </div>
  ),
})

export default function ContactMapLoader() {
  return (
    <div className="relative border-t border-hairline-dark overflow-hidden">
      <ContactMap />
      {/* Location label overlay */}
      <div className="absolute top-4 left-4 z-[1000] bg-ink/90 backdrop-blur-sm px-3 py-2 border border-hairline-dark pointer-events-none">
        <p className="eyebrow text-[8px] text-gold mb-0.5">Boulevard Plaza Tower 1</p>
        <p className="text-text-on-dark/50 text-[11px] font-serif italic">Downtown Dubai, Level 14</p>
      </div>
    </div>
  )
}
