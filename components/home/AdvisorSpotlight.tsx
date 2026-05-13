'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { advisors } from '@/data/advisors'

const featured = advisors.find((a) => a.featured)!
const ease = [0.16, 1, 0.3, 1] as const

export default function AdvisorSpotlight() {
  const t = useTranslations('advisor')

  return (
    <section className="bg-ink border-t border-hairline-dark" aria-label="Advisor spotlight">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 min-h-[600px]">
          {/* Portrait — clip-path reveal left-to-right */}
          <motion.div
            className="md:col-span-3 relative overflow-hidden min-h-[420px] md:min-h-0"
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.1, ease: [0.32, 0, 0.165, 1] }}
          >
            <Image
              src={featured.image}
              alt={`${featured.name}, ${featured.title}`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-ink/50" />
          </motion.div>

          {/* Content */}
          <motion.div
            className="md:col-span-2 flex flex-col justify-center px-6 md:px-14 py-16 md:py-20"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease, delay: 0.4 }}
          >
            <div className="eyebrow text-gold mb-8">{t('eyebrow')}</div>

            <blockquote className="font-serif italic font-light text-text-on-dark/80 text-[1.35rem] md:text-[1.5rem] leading-relaxed mb-10 max-w-sm">
              &ldquo;{featured.quote}&rdquo;
            </blockquote>

            <div className="border-t border-hairline-dark pt-8 mb-10">
              <p className="font-serif text-text-on-dark text-lg mb-1">{featured.name}</p>
              <p className="eyebrow text-[9px] text-text-on-dark/40 mb-3">{featured.title}</p>
              <div className="flex flex-wrap gap-1.5">
                {featured.languages.map((lang) => (
                  <span
                    key={lang}
                    className="eyebrow text-[8px] border border-hairline-dark text-text-on-dark/40 px-2 py-0.5"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Link href="/contact" className="btn-ghost text-[9px] py-2.5 px-5">
                {t('speak', { name: featured.name.split(' ')[0] })}
              </Link>
              <a
                href={`https://wa.me/${featured.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="eyebrow text-[9px] text-text-on-dark/40 hover:text-gold transition-[color] duration-400 ease-luxury"
                aria-label={`WhatsApp ${featured.name}`}
              >
                {t('whatsapp')}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
