'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

const ease = [0.16, 1, 0.3, 1] as const

const icons = [
  <svg key="curated" viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-hidden="true">
    <rect x="4" y="20" width="32" height="1.5" stroke="#C9A961" strokeWidth="1.5" />
    <path d="M20 4 L36 20 L20 36 L4 20 Z" stroke="#C9A961" strokeWidth="1.5" fill="none" />
  </svg>,
  <svg key="advisors" viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-hidden="true">
    <circle cx="20" cy="14" r="7" stroke="#C9A961" strokeWidth="1.5" />
    <path
      d="M6 36c0-7.732 6.268-14 14-14s14 6.268 14 14"
      stroke="#C9A961"
      strokeWidth="1.5"
      strokeLinecap="square"
    />
  </svg>,
  <svg key="discreet" viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-hidden="true">
    <path
      d="M20 4 L32 10 L32 22 C32 30 20 36 20 36 C20 36 8 30 8 22 L8 10 Z"
      stroke="#C9A961"
      strokeWidth="1.5"
      fill="none"
    />
    <path d="M15 20 L18.5 23.5 L25 17" stroke="#C9A961" strokeWidth="1.5" strokeLinecap="square" />
  </svg>,
]

export default function WhyInfinityViews() {
  const t = useTranslations('why')

  const pillars = [
    { icon: icons[0], heading: t('pillar1_heading'), body: t('pillar1_body') },
    { icon: icons[1], heading: t('pillar2_heading'), body: t('pillar2_body') },
    { icon: icons[2], heading: t('pillar3_heading'), body: t('pillar3_body') },
  ]

  return (
    <section className="bg-ivory" aria-label="Why Infinity Views">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-24 md:py-32">
        {/* Heading */}
        <motion.div
          className="mb-16 md:mb-20 max-w-lg"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease }}
        >
          <div className="eyebrow text-gold mb-5">{t('eyebrow')}</div>
          <h2 className="font-serif font-light text-text-on-light text-headline-xl leading-snug">
            {t('heading')}
            <br />
            <em>{t('heading_em')}</em>
          </h2>
        </motion.div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 border-t border-hairline-light pt-12 md:pt-16">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease, delay: i * 0.12 }}
            >
              <div className="mb-8">{pillar.icon}</div>
              <h3 className="font-serif font-light text-text-on-light text-headline-md mb-4 italic">
                {pillar.heading}
              </h3>
              <p className="text-text-on-light/60 leading-relaxed text-[15px] max-w-[340px]">
                {pillar.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
