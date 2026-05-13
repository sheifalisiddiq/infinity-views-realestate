'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'
import { useTranslations } from 'next-intl'
import { getFeaturedProperties } from '@/data/properties'
import { formatPrice } from '@/lib/utils'

const featured = getFeaturedProperties().slice(0, 6)
const ease = [0.16, 1, 0.3, 1] as const

export default function FeaturedCollection() {
  const t = useTranslations('collection')
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    dragFree: true,
    align: 'start',
    containScroll: 'trimSnaps',
  })

  return (
    <section className="bg-ink" aria-label="Featured property collection">
      {/* Heading */}
      <div className="px-6 md:px-16 pt-24 pb-10 max-w-[1440px] mx-auto">
        <motion.div
          className="eyebrow text-gold mb-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease }}
        >
          {t('eyebrow')}
        </motion.div>

        <div className="flex items-end justify-between gap-4">
          <motion.h2
            className="font-serif font-light text-text-on-dark text-headline-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
          >
            {t('heading')}
            <br />
            <em>{t('subheading')}</em>
          </motion.h2>

          <motion.div
            className="flex items-center gap-3 flex-shrink-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Arrow controls */}
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="w-9 h-9 border border-hairline-dark flex items-center justify-center text-text-on-dark/40 hover:border-gold hover:text-gold transition-[color,border-color] duration-300 hidden sm:flex"
              aria-label="Previous property"
            >
              <ArrowLeft size={13} weight="light" />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              className="w-9 h-9 border border-hairline-dark flex items-center justify-center text-text-on-dark/40 hover:border-gold hover:text-gold transition-[color,border-color] duration-300 hidden sm:flex"
              aria-label="Next property"
            >
              <ArrowRight size={13} weight="light" />
            </button>

            <Link
              href="/properties"
              className="hidden md:flex items-center gap-2 eyebrow text-[10px] text-text-on-dark/50 hover:text-gold transition-[color] duration-400 ease-luxury pb-px ml-2"
              aria-label={t('view_all')}
            >
              {t('view_all')}
              <ArrowRight size={12} weight="light" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Embla carousel — drag on mobile, arrows on desktop */}
      <div className="pb-20">
        <div
          className="overflow-hidden cursor-grab active:cursor-grabbing"
          ref={emblaRef}
        >
          <div className="flex gap-4 md:gap-5 pl-6 md:pl-16 pr-6 md:pr-16">
            {featured.map((property, i) => (
              <Link
                key={property.id}
                href={`/properties/${property.slug}`}
                className="group flex-shrink-0 w-[72vw] sm:w-[340px] md:w-[400px] lg:w-[440px] block"
                aria-label={property.name}
                draggable="false"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-[4/5] mb-5 bg-hairline-dark">
                  <Image
                    src={property.images[0]}
                    alt={property.name}
                    fill
                    draggable="false"
                    className="object-cover filter grayscale group-hover:grayscale-0 scale-100 group-hover:scale-[1.04] transition-[transform,filter] duration-700 ease-luxury select-none"
                    sizes="(max-width: 640px) 72vw, (max-width: 1024px) 400px, 440px"
                  />
                  {property.offMarket && (
                    <div className="absolute top-4 left-4 bg-ink/80 px-3 py-1.5">
                      <span className="eyebrow text-[8px] text-gold">Off-market</span>
                    </div>
                  )}
                  <div className="absolute bottom-4 right-4">
                    <span className="eyebrow text-[8px] text-white/50">
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
      </div>
    </section>
  )
}
