'use client'

import { useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'

const testimonials = [
  {
    quote:
      'They found us a villa on Frond M six weeks before it was listed publicly. Discretion throughout, and they managed every detail of the process. We have since referred three friends.',
    attribution: 'S.K., London',
    detail: 'Palm Jumeirah Villa · 2024',
  },
  {
    quote:
      'Omar knew the off-market landscape better than any agent we had spoken to. What we were looking for simply does not appear on portals — and he knew exactly where it was.',
    attribution: 'A.P., Moscow',
    detail: 'Emirates Hills Estate · 2023',
  },
  {
    quote:
      'We came to Dubai for a week with a loose brief and left having exchanged on a penthouse. Infinity Views understood what we actually wanted, not just what we said we wanted.',
    attribution: 'J. & R.W., Geneva',
    detail: 'Downtown Penthouse · 2024',
  },
  {
    quote:
      'The Golden Visa structuring, the bank account, the school recommendations — they guided us through all of it. It was the most considered real estate experience we have had, anywhere.',
    attribution: 'V.N., Mumbai',
    detail: 'Dubai Hills Villa · 2023',
  },
]

export default function ClientVoices() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: false, align: 'start' })

  return (
    <section className="bg-ink border-t border-hairline-dark" aria-label="Client testimonials">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 py-24 md:py-32">
        {/* Header */}
        <div className="flex items-end justify-between mb-14">
          <div>
            <div className="eyebrow text-gold mb-5">Client Voices</div>
            <h2 className="font-serif font-light text-text-on-dark text-headline-xl leading-snug">
              Relationships,<br />
              <em>not transactions.</em>
            </h2>
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="w-10 h-10 border border-hairline-dark flex items-center justify-center text-text-on-dark/50 hover:border-gold hover:text-gold transition-all duration-400 ease-luxury"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={14} weight="light" />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              className="w-10 h-10 border border-hairline-dark flex items-center justify-center text-text-on-dark/50 hover:border-gold hover:text-gold transition-all duration-400 ease-luxury"
              aria-label="Next testimonial"
            >
              <ArrowRight size={14} weight="light" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] border border-hairline-dark p-8 md:p-10"
              >
                <blockquote className="font-serif italic font-light text-text-on-dark/75 text-[1.15rem] leading-relaxed mb-8">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <footer>
                  <p className="eyebrow text-[9px] text-text-on-dark/60">{t.attribution}</p>
                  <p className="eyebrow text-[9px] text-gold/60 mt-1">{t.detail}</p>
                </footer>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
