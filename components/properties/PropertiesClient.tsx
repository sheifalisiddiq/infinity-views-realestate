'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useQueryState } from 'nuqs'
import { ArrowRight, Funnel } from '@phosphor-icons/react'
import { properties, type PropertyArea, type PropertyType } from '@/data/properties'
import { formatPrice, cn } from '@/lib/utils'

const AREAS: PropertyArea[] = [
  'Palm Jumeirah',
  'Downtown Dubai',
  'Emirates Hills',
  'Dubai Hills Estate',
  'Jumeirah Bay Island',
  'Bluewaters Island',
  'Business Bay',
]

const TYPES: PropertyType[] = ['Villa', 'Penthouse', 'Apartment', 'Townhouse', 'Plot']
const BED_OPTIONS = [1, 2, 3, 4, 5, 6, 7]

export default function PropertiesClient() {
  const [status, setStatus] = useQueryState('status', { defaultValue: 'sale' })
  const [area, setArea] = useQueryState('area', { defaultValue: '' })
  const [type, setType] = useQueryState('type', { defaultValue: '' })
  const [beds, setBeds] = useQueryState('beds', { defaultValue: '' })
  const [filtersOpen, setFiltersOpen] = useState(false)

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      if (status && p.status !== status) return false
      if (area && p.area !== area) return false
      if (type && p.type !== type) return false
      if (beds && p.beds < parseInt(beds)) return false
      return true
    })
  }, [status, area, type, beds])

  return (
    <div className="min-h-[100dvh] bg-ink pt-[72px]">
      {/* Hero bar */}
      <div className="border-b border-hairline-dark bg-ink py-16 px-8 md:px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="eyebrow text-gold mb-4">The Private Collection</div>
          <h1 className="font-serif font-light text-text-on-dark text-headline-xl">
            Private residences,<br />
            <em>curated by merit.</em>
          </h1>
        </div>
      </div>

      {/* Sticky filter bar */}
      <div className="sticky top-[72px] z-30 bg-ink/95 backdrop-blur-sm border-b border-hairline-dark">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16">
          <div className="flex items-center gap-0 py-0 overflow-x-auto scrollbar-none">
            {/* Buy / Rent toggle */}
            <div className="flex items-center gap-0 border-r border-hairline-dark pr-6 mr-6 flex-shrink-0">
              {['sale', 'rent'].map((s) => (
                <button
                  key={s}
                  onClick={() => setStatus(s)}
                  className={cn(
                    'eyebrow text-[10px] px-4 py-5 relative transition-colors duration-300',
                    status === s ? 'text-gold' : 'text-text-on-dark/40 hover:text-text-on-dark/70',
                  )}
                  aria-pressed={status === s}
                >
                  {s === 'sale' ? 'Buy' : 'Rent'}
                  {status === s && (
                    <span className="absolute bottom-0 left-0 right-0 h-px bg-gold" />
                  )}
                </button>
              ))}
            </div>

            {/* Area */}
            <select
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="eyebrow text-[10px] bg-transparent text-text-on-dark/50 border-none outline-none py-5 pr-6 mr-6 border-r border-hairline-dark flex-shrink-0 cursor-pointer hover:text-text-on-dark transition-colors duration-300"
              aria-label="Filter by area"
            >
              <option value="">All Areas</option>
              {AREAS.map((a) => (
                <option key={a} value={a} className="bg-ink text-text-on-dark">
                  {a}
                </option>
              ))}
            </select>

            {/* Type */}
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="eyebrow text-[10px] bg-transparent text-text-on-dark/50 border-none outline-none py-5 pr-6 mr-6 border-r border-hairline-dark flex-shrink-0 cursor-pointer hover:text-text-on-dark transition-colors duration-300"
              aria-label="Filter by property type"
            >
              <option value="">All Types</option>
              {TYPES.map((t) => (
                <option key={t} value={t} className="bg-ink text-text-on-dark">
                  {t}
                </option>
              ))}
            </select>

            {/* Bedrooms */}
            <select
              value={beds}
              onChange={(e) => setBeds(e.target.value)}
              className="eyebrow text-[10px] bg-transparent text-text-on-dark/50 border-none outline-none py-5 pr-6 flex-shrink-0 cursor-pointer hover:text-text-on-dark transition-colors duration-300"
              aria-label="Filter by minimum bedrooms"
            >
              <option value="">Any Beds</option>
              {BED_OPTIONS.map((b) => (
                <option key={b} value={String(b)} className="bg-ink text-text-on-dark">
                  {b}+ Beds
                </option>
              ))}
            </select>

            {/* Clear */}
            {(area || type || beds || status !== 'sale') && (
              <button
                onClick={() => {
                  setStatus('sale')
                  setArea('')
                  setType('')
                  setBeds('')
                }}
                className="ml-auto eyebrow text-[9px] text-text-on-dark/30 hover:text-gold transition-colors duration-300 flex-shrink-0 py-5 pl-6 border-l border-hairline-dark"
                aria-label="Clear all filters"
              >
                Clear filters
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 py-16">
        {filtered.length === 0 ? (
          /* Empty state */
          <div className="flex flex-col items-center justify-center py-32 text-center">
            <h2 className="font-serif font-light italic text-text-on-dark/50 text-2xl mb-4">
              No residences match your criteria.
            </h2>
            <p className="text-text-on-dark/35 text-sm mb-8 max-w-sm">
              Speak to an advisor for off-market opportunities that may not appear in our listed collection.
            </p>
            <Link href="/contact" className="btn-ghost text-[9px] py-2.5 px-6">
              Contact an Advisor
            </Link>
          </div>
        ) : (
          <>
            <p className="eyebrow text-[9px] text-text-on-dark/30 mb-10">
              {filtered.length} {filtered.length === 1 ? 'residence' : 'residences'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-8 md:gap-y-16">
              {filtered.map((property) => (
                <Link
                  key={property.id}
                  href={`/properties/${property.slug}`}
                  className="group block"
                  aria-label={property.name}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-[16/10] mb-5 bg-hairline-dark">
                    <Image
                      src={property.images[0]}
                      alt={property.name}
                      fill
                      className="object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-luxury"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {property.offMarket && (
                      <div className="absolute top-4 left-4 bg-ink/80 px-2.5 py-1">
                        <span className="eyebrow text-[8px] text-gold">Off-market</span>
                      </div>
                    )}
                    {/* Price reveal on hover */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-ink/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-luxury">
                      <span className="font-serif text-gold text-xl">{property.priceLabel}</span>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="eyebrow text-[9px] text-gold/70 mb-2">{property.area}</div>
                      <h2 className="font-serif font-light text-text-on-dark text-lg leading-snug mb-2 group-hover:text-gold transition-colors duration-400 ease-luxury">
                        {property.name}
                      </h2>
                      <p className="text-text-on-dark/40 text-sm">
                        {property.beds} bed &nbsp;·&nbsp; {property.baths} bath &nbsp;·&nbsp;{' '}
                        {property.sqft.toLocaleString()} sqft
                      </p>
                    </div>
                    <ArrowRight
                      size={16}
                      weight="light"
                      className="text-text-on-dark/20 group-hover:text-gold group-hover:translate-x-1 transition-all duration-400 ease-luxury mt-1 flex-shrink-0"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
