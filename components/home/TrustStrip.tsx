'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

const ease = [0.16, 1, 0.3, 1] as const

export default function TrustStrip() {
  const t = useTranslations('trust')

  const stats = [
    { value: 'RERA ORN 28847', label: t('rera') },
    { value: 'AED 2.4B+', label: t('transactions') },
    { value: '200+', label: t('clients') },
    { value: 'EN / AR / RU / HI / ZH', label: t('languages') },
  ]

  return (
    <section className="bg-ink border-y border-hairline-dark" aria-label="Trust indicators">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-12 md:py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-hairline-dark">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="md:px-10 first:pl-0 last:pr-0 flex flex-col items-center md:items-start"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease, delay: i * 0.08 }}
            >
              <span className="font-serif font-light text-text-on-dark text-xl md:text-2xl leading-none mb-2">
                {stat.value}
              </span>
              <span className="eyebrow text-gold/60">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
