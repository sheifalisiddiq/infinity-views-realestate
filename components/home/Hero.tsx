'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ArrowDown } from '@phosphor-icons/react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

const HERO_VIDEO_URL =
  'https://videos.pexels.com/video-files/3015468/3015468-uhd_2560_1440_25fps.mp4'
const HERO_POSTER_URL =
  'https://images.pexels.com/videos/3015468/free-video-3015468.jpg?auto=compress&cs=tinysrgb&dpr=2&h=1080&w=1920'

export default function Hero() {
  const t = useTranslations('hero')
  const containerRef = useRef<HTMLDivElement>(null)
  const eyebrowRef = useRef<HTMLDivElement>(null)
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([])
  const ctaRef = useRef<HTMLDivElement>(null)
  const scrollCueRef = useRef<HTMLDivElement>(null)

  const headlineWords = t('headline').split(' ')

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 })

      // Eyebrow fades in
      tl.fromTo(
        eyebrowRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      )

      // Words reveal word-by-word with blur
      tl.fromTo(
        wordsRef.current.filter(Boolean),
        { opacity: 0, y: 20, filter: 'blur(8px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.9,
          stagger: 0.07,
          ease: 'power3.out',
        },
        '-=0.3',
      )

      // CTA fades in
      tl.fromTo(
        ctaRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
        '-=0.4',
      )

      // Scroll cue
      tl.fromTo(
        scrollCueRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: 'power2.out' },
        '-=0.2',
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
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
          /* swap src= to a local asset or licensed CDN URL before going live */
        >
          <source src={HERO_VIDEO_URL} type="video/mp4" />
        </video>
        {/* Gradient overlay: stronger at bottom for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/20 to-ink/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-8 md:px-16">
        {/* Eyebrow */}
        <div
          ref={eyebrowRef}
          className="eyebrow text-gold mb-8 md:mb-10"
          style={{ opacity: 0 }}
          aria-hidden="true"
        >
          {t('eyebrow')}
        </div>

        {/* Headline */}
        <h1 className="font-serif font-light text-text-on-dark leading-[1.1] text-[2.4rem] md:text-[3.5rem] lg:text-[4.5rem] mb-10 md:mb-12">
          {headlineWords.map((word, i) => (
            <span key={i} className="inline-block mr-[0.25em] last:mr-0">
              <span
                ref={(el) => {
                  wordsRef.current[i] = el
                }}
                className="inline-block"
                style={{ opacity: 0 }}
              >
                {word}
              </span>
            </span>
          ))}
        </h1>

        {/* CTA */}
        <div ref={ctaRef} style={{ opacity: 0 }}>
          <Link
            href="/properties"
            className="btn-ghost inline-flex"
            aria-label={t('cta')}
          >
            {t('cta')}
          </Link>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        ref={scrollCueRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
        aria-hidden="true"
        style={{ opacity: 0 }}
      >
        <div className="w-px h-8 bg-gold/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gold animate-dot-descent" />
        </div>
        <ArrowDown size={10} className="text-gold/40" weight="light" />
      </div>
    </section>
  )
}
