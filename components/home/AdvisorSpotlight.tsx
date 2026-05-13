'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { advisors } from '@/data/advisors'

const featured = advisors.find((a) => a.featured)!

export default function AdvisorSpotlight() {
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const image = imageRef.current
    const content = contentRef.current
    if (!image || !content) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Left-to-right clip-path reveal
          image.style.clipPath = 'inset(0 0% 0 0)'
          image.style.transition = 'clip-path 900ms cubic-bezier(0.16, 1, 0.3, 1)'

          // Content fades in
          setTimeout(() => {
            content.classList.add('opacity-100', 'translate-y-0')
            content.classList.remove('opacity-0', 'translate-y-6')
          }, 400)

          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    observer.observe(image)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-ink border-t border-hairline-dark" aria-label="Advisor spotlight">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 min-h-[600px]">
          {/* Portrait — 60% */}
          <div
            ref={imageRef}
            className="md:col-span-3 relative overflow-hidden min-h-[400px] md:min-h-0"
            style={{ clipPath: 'inset(0 100% 0 0)' }}
          >
            <Image
              src={featured.image}
              alt={`${featured.name}, ${featured.title}`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-ink/50" />
          </div>

          {/* Content — 40% */}
          <div
            ref={contentRef}
            className="md:col-span-2 flex flex-col justify-center px-8 md:px-14 py-16 md:py-20 opacity-0 translate-y-6 transition-all duration-700 ease-out"
          >
            <div className="eyebrow text-gold mb-8">Advisor Spotlight</div>

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
                Speak to {featured.name.split(' ')[0]}
              </Link>
              <a
                href={`https://wa.me/${featured.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="eyebrow text-[9px] text-text-on-dark/40 hover:text-gold transition-colors duration-400 ease-luxury"
                aria-label={`WhatsApp ${featured.name}`}
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
