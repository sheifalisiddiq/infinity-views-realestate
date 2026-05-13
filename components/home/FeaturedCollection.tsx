'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from '@phosphor-icons/react'
import { useTranslations } from 'next-intl'
import { getFeaturedProperties } from '@/data/properties'
import { formatPrice } from '@/lib/utils'

gsap.registerPlugin(ScrollTrigger)

const featured = getFeaturedProperties().slice(0, 6)

export default function FeaturedCollection() {
  const t = useTranslations('collection')
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const track = trackRef.current
    if (!section || !track) return

    const mm = gsap.matchMedia()

    mm.add('(min-width: 768px)', () => {
      const totalWidth = track.scrollWidth - window.innerWidth

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${totalWidth + 200}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      })

      tl.to(track, {
        x: -totalWidth,
        ease: 'none',
      })

      // Stagger card reveals
      const cards = track.querySelectorAll('.collection-card')
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              containerAnimation: tl,
              start: 'left 90%',
              toggleActions: 'play none none none',
            },
          },
        )
      })
    })

    return () => mm.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-ink overflow-hidden"
      aria-label="Featured property collection"
    >
      {/* Heading — visible above the horizontal scroll */}
      <div ref={headingRef} className="px-8 md:px-16 pt-24 pb-12 max-w-[1440px] mx-auto">
        <div className="eyebrow text-gold mb-4">{t('eyebrow')}</div>
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-serif font-light text-text-on-dark text-headline-xl">
            {t('heading')}<br />
            <em>{t('subheading')}</em>
          </h2>
          <Link
            href="/properties"
            className="hidden md:flex items-center gap-2 eyebrow text-[10px] text-text-on-dark/50 hover:text-gold transition-[color] duration-400 ease-luxury pb-1"
            aria-label={t('view_all')}
          >
            {t('view_all')}
            <ArrowRight size={12} weight="light" />
          </Link>
        </div>
      </div>

      {/* Horizontal scroll track */}
      <div className="pb-16">
        <div
          ref={trackRef}
          className="flex gap-4 px-8 md:px-16 will-change-transform"
          style={{ width: 'max-content' }}
        >
          {featured.map((property, i) => (
            <Link
              key={property.id}
              href={`/properties/${property.slug}`}
              className="collection-card group flex-shrink-0 w-[320px] md:w-[420px] lg:w-[480px] block"
              aria-label={property.name}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/5] mb-5 bg-hairline-dark">
                <Image
                  src={property.images[0]}
                  alt={property.name}
                  fill
                  className="object-cover filter grayscale group-hover:grayscale-0 scale-100 group-hover:scale-[1.04] transition-[transform,filter] duration-700 ease-luxury"
                  sizes="(max-width: 768px) 320px, (max-width: 1200px) 420px, 480px"
                />
                {property.offMarket && (
                  <div className="absolute top-4 left-4 bg-ink/80 px-3 py-1.5">
                    <span className="eyebrow text-[8px] text-gold">Off-market</span>
                  </div>
                )}
                {/* Gold image counter */}
                <div className="absolute bottom-4 right-4">
                  <span className="eyebrow text-[8px] text-white/60">
                    {String(i + 1).padStart(2, '0')} / {String(featured.length).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="space-y-1.5">
                <div className="eyebrow text-[9px] text-gold/70">{property.area}</div>
                <h3 className="font-serif font-light text-text-on-dark text-lg leading-snug group-hover:text-gold transition-[color] duration-400 ease-luxury">
                  {property.name}
                </h3>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-text-on-dark/50 text-sm">
                    {property.beds}BR &nbsp;·&nbsp; {property.sqft.toLocaleString()} sqft
                  </span>
                  <span className="font-serif text-gold text-sm">{formatPrice(property.price)}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
