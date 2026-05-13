'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, WhatsappLogo, Phone } from '@phosphor-icons/react'
import { type Property } from '@/data/properties'
import { advisors } from '@/data/advisors'
import { properties } from '@/data/properties'
import MortgageCalculator from './MortgageCalculator'

interface PropertyDetailProps {
  property: Property
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
  const [currentImage, setCurrentImage] = useState(0)
  const advisor = advisors[0]
  const similar = properties
    .filter((p) => p.area === property.area && p.id !== property.id)
    .slice(0, 3)

  function prev() {
    setCurrentImage((i) => (i === 0 ? property.images.length - 1 : i - 1))
  }

  function next() {
    setCurrentImage((i) => (i === property.images.length - 1 ? 0 : i + 1))
  }

  return (
    <div className="min-h-[100dvh] bg-ink pt-[72px]">
      {/* Back link */}
      <div className="px-8 md:px-16 py-6 max-w-[1440px] mx-auto">
        <Link
          href="/properties"
          className="inline-flex items-center gap-2 eyebrow text-[9px] text-text-on-dark/40 hover:text-gold transition-colors duration-300"
          aria-label="Back to property collection"
        >
          <ArrowLeft size={12} weight="light" />
          The Collection
        </Link>
      </div>

      {/* Gallery */}
      <div className="relative aspect-[21/9] md:aspect-[16/7] overflow-hidden bg-hairline-dark mb-12">
        <Image
          src={property.images[currentImage]}
          alt={`${property.name} — Image ${currentImage + 1}`}
          fill
          className="object-cover transition-opacity duration-500"
          priority
          sizes="100vw"
        />

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 border border-white/20 bg-ink/60 flex items-center justify-center hover:border-gold hover:text-gold transition-[color,border-color] duration-300"
          aria-label="Previous image"
        >
          <ArrowLeft size={16} weight="light" className="text-white" />
        </button>
        <button
          onClick={next}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 border border-white/20 bg-ink/60 flex items-center justify-center hover:border-gold hover:text-gold transition-[color,border-color] duration-300"
          aria-label="Next image"
        >
          <ArrowRight size={16} weight="light" className="text-white" />
        </button>

        {/* Counter */}
        <div className="absolute bottom-5 right-6">
          <span className="eyebrow text-[9px] text-white/60">
            {String(currentImage + 1).padStart(2, '0')} / {String(property.images.length).padStart(2, '0')}
          </span>
        </div>

        {/* Thumbnails */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5">
          {property.images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentImage(i)}
              className={`h-0.5 transition-[width,background-color] duration-300 ${
                i === currentImage ? 'w-6 bg-gold' : 'w-2 bg-white/30'
              }`}
              aria-label={`View image ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Two-column layout */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left — main content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Header */}
            <div>
              <div className="eyebrow text-gold mb-4">{property.area}</div>
              <h1 className="font-serif font-light text-text-on-dark text-[2rem] md:text-[2.5rem] leading-snug mb-4">
                {property.name}
              </h1>
              <p className="text-text-on-dark/55 text-base leading-relaxed max-w-2xl">
                {property.description}
              </p>
            </div>

            {/* Specs table */}
            <div className="border-t border-hairline-dark">
              <div className="eyebrow text-[9px] text-text-on-dark/40 py-5">Property Details</div>
              <dl className="divide-y divide-hairline-dark">
                {[
                  ['Reference', property.reference],
                  ['Type', property.type],
                  ['Bedrooms', String(property.beds)],
                  ['Bathrooms', String(property.baths)],
                  ['Area', `${property.sqft.toLocaleString()} sqft`],
                  ['Status', property.status === 'sale' ? 'For Sale' : 'For Rent'],
                  ...(property.offMarket ? [['Listing', 'Off-market — by introduction']] : []),
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between py-4">
                    <dt className="eyebrow text-[9px] text-text-on-dark/40">{label}</dt>
                    <dd className="text-text-on-dark text-sm">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Long description */}
            <div>
              <div className="eyebrow text-[9px] text-text-on-dark/40 mb-6">The Property</div>
              <div className="font-serif font-light text-text-on-dark/70 text-[1.05rem] leading-[1.85] space-y-5 max-w-2xl">
                {property.longDescription.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div>
              <div className="eyebrow text-[9px] text-text-on-dark/40 mb-6">Amenities</div>
              <div className="flex flex-wrap gap-2">
                {property.amenities.map((a) => (
                  <span
                    key={a}
                    className="border border-hairline-dark text-text-on-dark/50 text-xs px-3 py-1.5"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>

            {/* Mortgage calculator */}
            <MortgageCalculator propertyPrice={property.price} />
          </div>

          {/* Right — sticky sidebar */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 space-y-6">
              {/* Price + CTAs */}
              <div className="border border-hairline-dark p-8">
                <div className="eyebrow text-[9px] text-text-on-dark/40 mb-3">
                  {property.status === 'sale' ? 'Asking Price' : 'Annual Rent'}
                </div>
                <div className="font-serif font-light text-gold text-3xl mb-6">
                  {property.priceLabel}
                </div>
                <div className="space-y-3">
                  <Link
                    href={`/contact?ref=${property.reference}`}
                    className="btn-ghost w-full justify-center text-[9px] py-3"
                  >
                    Arrange a Viewing
                  </Link>
                  <a
                    href={`https://wa.me/971501234567?text=Hello%2C%20I%20am%20interested%20in%20${property.reference}%20%E2%80%94%20${encodeURIComponent(property.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold w-full justify-center flex items-center gap-2 text-[9px] py-3"
                    aria-label={`WhatsApp enquiry for ${property.name}`}
                  >
                    <WhatsappLogo size={14} weight="light" />
                    WhatsApp
                  </a>
                </div>
                <p className="eyebrow text-[8px] text-text-on-dark/25 mt-4 text-center">
                  Ref: {property.reference}
                </p>
              </div>

              {/* Advisor card */}
              <div className="border border-hairline-dark p-6">
                <div className="eyebrow text-[9px] text-text-on-dark/40 mb-4">Your Advisor</div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-12 h-12 overflow-hidden flex-shrink-0">
                    <Image
                      src={advisor.image}
                      alt={advisor.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <p className="font-serif text-text-on-dark text-sm">{advisor.name}</p>
                    <p className="eyebrow text-[8px] text-text-on-dark/40 mt-0.5">{advisor.title}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 mb-5">
                  {advisor.languages.map((l) => (
                    <span
                      key={l}
                      className="eyebrow text-[7px] border border-hairline-dark text-text-on-dark/35 px-1.5 py-0.5"
                    >
                      {l}
                    </span>
                  ))}
                </div>
                <a
                  href={`tel:${advisor.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 eyebrow text-[9px] text-text-on-dark/50 hover:text-gold transition-colors duration-300"
                  aria-label={`Call ${advisor.name}`}
                >
                  <Phone size={12} weight="light" />
                  {advisor.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Similar properties */}
        {similar.length > 0 && (
          <div className="mt-24 pt-16 border-t border-hairline-dark">
            <div className="eyebrow text-gold mb-10">Similar Residences</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {similar.map((p) => (
                <Link
                  key={p.id}
                  href={`/properties/${p.slug}`}
                  className="group block"
                  aria-label={p.name}
                >
                  <div className="relative overflow-hidden aspect-[4/3] mb-4 bg-hairline-dark">
                    <Image
                      src={p.images[0]}
                      alt={p.name}
                      fill
                      className="object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-[1.04] transition-[transform,filter] duration-700 ease-luxury"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="eyebrow text-[9px] text-gold/70 mb-2">{p.area}</div>
                  <h3 className="font-serif font-light text-text-on-dark text-base leading-snug mb-1 group-hover:text-gold transition-colors duration-400">
                    {p.name}
                  </h3>
                  <p className="font-serif text-gold text-sm">{p.priceLabel}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
