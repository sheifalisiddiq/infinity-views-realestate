'use client'

import { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'

const pillars = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-hidden="true">
        <rect x="4" y="20" width="32" height="1.5" stroke="#C9A961" strokeWidth="1.5" />
        <path d="M20 4 L36 20 L20 36 L4 20 Z" stroke="#C9A961" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    heading: 'Curated, not listed.',
    body: 'Every residence in our collection is selected for architectural merit, location pedigree, or investment integrity. Most are off-market. We do not aggregate — we advocate.',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-hidden="true">
        <circle cx="20" cy="14" r="7" stroke="#C9A961" strokeWidth="1.5" />
        <path d="M6 36c0-7.732 6.268-14 14-14s14 6.268 14 14" stroke="#C9A961" strokeWidth="1.5" strokeLinecap="square" />
      </svg>
    ),
    heading: 'Advisors, not agents.',
    body: 'Our team has placed AED 2.4 billion of Dubai real estate with private clients across four continents. We do not chase listings — we earn introductions. Every engagement is principal-to-principal.',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-hidden="true">
        <path d="M20 4 L32 10 L32 22 C32 30 20 36 20 36 C20 36 8 30 8 22 L8 10 Z" stroke="#C9A961" strokeWidth="1.5" fill="none" />
        <path d="M15 20 L18.5 23.5 L25 17" stroke="#C9A961" strokeWidth="1.5" strokeLinecap="square" />
      </svg>
    ),
    heading: 'Discreet by design.',
    body: 'Confidentiality is structural, not a courtesy. Off-market opportunities are shared by introduction. NDAs are standard. Discretion has been the foundation of every long-term client relationship we hold.',
  },
]

function PillarCard({
  icon,
  heading,
  body,
  index,
}: {
  icon: React.ReactNode
  heading: string
  body: string
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${index * 120}ms`
          el.classList.add('opacity-100', 'translate-y-0')
          el.classList.remove('opacity-0', 'translate-y-6')
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [index])

  return (
    <div
      ref={ref}
      className="opacity-0 translate-y-6 transition-[opacity,transform] duration-700 ease-out"
    >
      <div className="mb-8">{icon}</div>
      <h3 className="font-serif font-light text-text-on-light text-headline-md mb-4 italic">
        {heading}
      </h3>
      <p className="text-text-on-light/60 leading-relaxed text-[15px] max-w-[340px]">{body}</p>
    </div>
  )
}

export default function WhyInfinityViews() {
  const t = useTranslations('why')
  const headingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = headingRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('opacity-100', 'translate-y-0')
          el.classList.remove('opacity-0', 'translate-y-6')
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-ivory" aria-label="Why Infinity Views">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 py-24 md:py-32">
        {/* Eyebrow + heading */}
        <div
          ref={headingRef}
          className="opacity-0 translate-y-6 transition-[opacity,transform] duration-700 ease-out mb-16 md:mb-20 max-w-lg"
        >
          <div className="eyebrow text-gold mb-5">
            {t('eyebrow')}
          </div>
          <h2 className="font-serif font-light text-text-on-light text-headline-xl leading-snug">
            {t('heading')}<br /><em>{t('heading_em')}</em>
          </h2>
        </div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 border-t border-hairline-light pt-12 md:pt-16">
          {pillars.map((pillar, i) => (
            <PillarCard key={i} {...pillar} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
