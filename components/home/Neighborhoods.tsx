'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const neighborhoods = [
  {
    name: 'Palm Jumeirah',
    image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200&q=90&fit=crop',
    size: 'large', // 2x tall
    description:
      'The defining Dubai address — a man-made archipelago of beachfront villas on the fronds and signature towers along the trunk. Villas on the outer fronds command AED 25M–250M+. Legacy money is on Frond G; new buyers want Frond M or K.',
  },
  {
    name: 'Downtown Dubai',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=90&fit=crop',
    size: 'small',
    description:
      "The Burj Khalifa, Dubai Mall, and the Dubai Fountain form the axis of a neighbourhood that never truly sleeps. Penthouses here face one of the world's great urban spectacles every evening at 6pm.",
  },
  {
    name: 'Emirates Hills',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=90&fit=crop',
    size: 'small',
    description:
      "Dubai's most private enclave. A single guarded perimeter, 4,000 residences, and the Montgomerie Golf Course. For those who want their Dubai home to feel nothing like a hotel.",
  },
  {
    name: 'Dubai Hills Estate',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=90&fit=crop',
    size: 'medium',
    description:
      "An 18-hole championship golf course, a world-class hospital, and an Emaar master plan that has appreciated 34% year-on-year since 2021. Golf Place is its premium residential address.",
  },
  {
    name: 'Jumeirah Bay Island',
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&q=90&fit=crop',
    size: 'small',
    description:
      'A private island connected by a single road. The Bulgari Resort sits at its tip; fewer than forty private villas beyond it. Among Dubai\'s least-known and most desirable addresses.',
  },
  {
    name: 'Bluewaters Island',
    image: 'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=1200&q=90&fit=crop',
    size: 'medium',
    description:
      'The island that anchors JBR Beach, home to Ain Dubai — the world\'s largest observation wheel. Residences here trade on views, proximity to the sea, and easy access to the Marina.',
  },
]

function NeighborhoodCard({ neighborhood, className = '' }: { neighborhood: typeof neighborhoods[0]; className?: string }) {
  const ref = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('opacity-100')
          el.classList.remove('opacity-0')
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Link
      href={`/properties?area=${encodeURIComponent(neighborhood.name)}`}
      className={`group relative overflow-hidden block bg-hairline-dark opacity-0 transition-opacity duration-700 ease-out ${className}`}
      ref={ref}
      aria-label={`View properties in ${neighborhood.name}`}
    >
      <Image
        src={neighborhood.image}
        alt={neighborhood.name}
        fill
        className="object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1200ms] ease-luxury"
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-luxury">
        <h3 className="font-serif font-light text-text-on-dark text-xl md:text-2xl mb-0 group-hover:mb-3 transition-all duration-500 ease-luxury">
          {neighborhood.name}
        </h3>
        <p className="text-text-on-dark/65 text-sm leading-relaxed max-h-0 group-hover:max-h-40 overflow-hidden transition-all duration-500 ease-luxury">
          {neighborhood.description}
        </p>
      </div>
    </Link>
  )
}

export default function Neighborhoods() {
  return (
    <section className="bg-ink" aria-label="Neighborhoods of Dubai">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 py-24 md:py-32">
        {/* Heading */}
        <div className="mb-12 md:mb-16">
          <div className="eyebrow text-gold mb-5">Neighbourhoods of Dubai</div>
          <h2 className="font-serif font-light text-text-on-dark text-headline-xl max-w-xl leading-snug">
            Six addresses.<br />
            <em>Each a world apart.</em>
          </h2>
        </div>

        {/* Mosaic grid — asymmetric layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 auto-rows-[280px]">
          {/* Palm Jumeirah — large (spans 2 rows) */}
          <NeighborhoodCard
            neighborhood={neighborhoods[0]}
            className="md:row-span-2"
          />
          {/* Downtown + Emirates Hills */}
          <NeighborhoodCard neighborhood={neighborhoods[1]} />
          <NeighborhoodCard neighborhood={neighborhoods[2]} />
          {/* Dubai Hills — medium */}
          <NeighborhoodCard neighborhood={neighborhoods[3]} />
          {/* Jumeirah Bay */}
          <NeighborhoodCard neighborhood={neighborhoods[4]} />
          {/* Bluewaters — spans 1 */}
          <NeighborhoodCard neighborhood={neighborhoods[5]} />
        </div>
      </div>
    </section>
  )
}
