'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

const neighborhoods = [
  {
    name: 'Palm Jumeirah',
    image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200&q=90&fit=crop',
    size: 'large',
    description:
      'The defining Dubai address — a man-made archipelago of beachfront villas on the fronds and signature towers along the trunk. Villas on the outer fronds command AED 25M–250M+.',
  },
  {
    name: 'Downtown Dubai',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=90&fit=crop',
    size: 'small',
    description:
      "The Burj Khalifa, Dubai Mall, and the Dubai Fountain form the axis of a neighbourhood that never truly sleeps. Penthouses here face one of the world's great urban spectacles every evening.",
  },
  {
    name: 'Emirates Hills',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=90&fit=crop',
    size: 'small',
    description:
      "Dubai's most private enclave. A single guarded perimeter, 4,000 residences, and the Montgomerie Golf Course.",
  },
  {
    name: 'Dubai Hills Estate',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=90&fit=crop',
    size: 'medium',
    description:
      "An 18-hole championship golf course, a world-class hospital, and an Emaar master plan that has appreciated 34% year-on-year since 2021.",
  },
  {
    name: 'Jumeirah Bay Island',
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&q=90&fit=crop',
    size: 'small',
    description:
      "A private island connected by a single road. The Bulgari Resort sits at its tip; fewer than forty private villas beyond it.",
  },
  {
    name: 'Bluewaters Island',
    image: 'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=1200&q=90&fit=crop',
    size: 'medium',
    description:
      "The island that anchors JBR Beach, home to Ain Dubai — the world's largest observation wheel. Residences trade on views, sea proximity, and easy Marina access.",
  },
]

const ease = [0.16, 1, 0.3, 1] as const

function NeighborhoodCard({
  neighborhood,
  className = '',
  index,
}: {
  neighborhood: (typeof neighborhoods)[0]
  className?: string
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease, delay: (index % 3) * 0.08 }}
      className={className}
    >
      <Link
        href={`/properties?area=${encodeURIComponent(neighborhood.name)}`}
        className="group relative overflow-hidden block bg-hairline-dark h-full"
        aria-label={`View properties in ${neighborhood.name}`}
      >
        <Image
          src={neighborhood.image}
          alt={neighborhood.name}
          fill
          className="object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-[1.05] transition-[transform,filter] duration-[1200ms] ease-luxury"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-1 group-hover:translate-y-0 transition-transform duration-500 ease-luxury">
          <h3 className="font-serif font-light text-text-on-dark text-xl md:text-2xl mb-2">
            {neighborhood.name}
          </h3>
          <p className="text-text-on-dark/65 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-luxury line-clamp-3">
            {neighborhood.description}
          </p>
        </div>
      </Link>
    </motion.div>
  )
}

export default function Neighborhoods() {
  const t = useTranslations('neighborhoods')

  return (
    <section className="bg-ink" aria-label="Neighborhoods of Dubai">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-24 md:py-32">
        {/* Heading */}
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease }}
        >
          <div className="eyebrow text-gold mb-5">{t('eyebrow')}</div>
          <h2 className="font-serif font-light text-text-on-dark text-headline-xl max-w-xl leading-snug">
            {t('heading')}
            <br />
            <em>{t('heading_em')}</em>
          </h2>
        </motion.div>

        {/* Mosaic grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 auto-rows-[280px]">
          <NeighborhoodCard neighborhood={neighborhoods[0]} className="md:row-span-2" index={0} />
          <NeighborhoodCard neighborhood={neighborhoods[1]} index={1} />
          <NeighborhoodCard neighborhood={neighborhoods[2]} index={2} />
          <NeighborhoodCard neighborhood={neighborhoods[3]} index={3} />
          <NeighborhoodCard neighborhood={neighborhoods[4]} index={4} />
          <NeighborhoodCard neighborhood={neighborhoods[5]} index={5} />
        </div>
      </div>
    </section>
  )
}
