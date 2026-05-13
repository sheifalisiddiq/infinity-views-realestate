'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from '@phosphor-icons/react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

const HERO_VIDEO_URL =
  'https://videos.pexels.com/video-files/3015468/3015468-uhd_2560_1440_25fps.mp4'
const HERO_POSTER_URL =
  'https://images.pexels.com/videos/3015468/free-video-3015468.jpg?auto=compress&cs=tinysrgb&dpr=2&h=1080&w=1920'

const ease = [0.16, 1, 0.3, 1] as const

export default function Hero() {
  const t = useTranslations('hero')
  const headlineWords = t('headline').split(' ')

  return (
    <section
      className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-ink"
      aria-label="Hero"
    >
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover opacity-45"
          autoPlay
          muted
          loop
          playsInline
          poster={HERO_POSTER_URL}
          aria-hidden="true"
        >
          <source src={HERO_VIDEO_URL} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/20 to-ink/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 md:px-16">
        {/* Eyebrow */}
        <motion.div
          className="eyebrow text-gold mb-8 md:mb-10"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.3 }}
          aria-hidden="true"
        >
          {t('eyebrow')}
        </motion.div>

        {/* Headline — word-by-word blur reveal */}
        <h1 className="font-serif font-light text-text-on-dark leading-[1.1] text-[2.2rem] sm:text-[2.8rem] md:text-[3.5rem] lg:text-[4.5rem] mb-10 md:mb-12">
          {headlineWords.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-[0.25em] last:mr-0"
              initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                duration: 0.9,
                ease,
                delay: 0.5 + i * 0.07,
              }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease,
            delay: 0.5 + headlineWords.length * 0.07 + 0.15,
          }}
        >
          <Link
            href="/properties"
            className="btn-ghost inline-flex"
            aria-label={t('cta')}
          >
            {t('cta')}
          </Link>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.8 }}
      >
        <div className="w-px h-8 bg-gold/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gold animate-dot-descent" />
        </div>
        <ArrowDown size={10} className="text-gold/40" weight="light" />
      </motion.div>
    </section>
  )
}
