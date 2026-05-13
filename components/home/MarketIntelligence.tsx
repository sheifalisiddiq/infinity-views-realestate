import Image from 'next/image'
import Link from 'next/link'
import { insights } from '@/data/insights'
import { ArrowRight } from '@phosphor-icons/react/dist/ssr'

export default function MarketIntelligence() {
  return (
    <section className="bg-ivory" aria-label="Market intelligence articles">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 py-24 md:py-32">
        {/* Heading */}
        <div className="flex items-end justify-between mb-14 md:mb-16 gap-4">
          <div>
            <div className="eyebrow text-gold mb-5" style={{ color: '#C9A961' }}>
              Market Intelligence
            </div>
            <h2 className="font-serif font-light text-text-on-light text-headline-xl leading-snug">
              Private analysis.<br />
              <em>No marketing.</em>
            </h2>
          </div>
          <Link
            href="/insights"
            className="hidden md:flex items-center gap-2 eyebrow text-[10px] text-text-on-light/40 hover:text-gold transition-colors duration-400 ease-luxury pb-1 flex-shrink-0"
            aria-label="All market intelligence articles"
            style={{ color: undefined }}
          >
            All articles
            <ArrowRight size={12} weight="light" />
          </Link>
        </div>

        {/* Cards — editorial, not equal-column */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-hairline-light">
          {insights.map((insight, i) => (
            <article
              key={insight.id}
              className="bg-ivory group"
            >
              <Link href={`/insights/${insight.slug}`} className="block h-full" aria-label={insight.title}>
                {/* Image */}
                <div className="relative overflow-hidden aspect-[16/9] bg-hairline-light">
                  <Image
                    src={insight.image}
                    alt={insight.title}
                    fill
                    className="object-cover scale-100 group-hover:scale-[1.03] transition-transform duration-700 ease-luxury"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className="p-7 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="eyebrow text-[9px] text-gold" style={{ color: '#C9A961' }}>
                      {insight.category}
                    </span>
                    <span className="text-text-on-light/30 text-xs">·</span>
                    <span className="text-text-on-light/40 text-xs">{insight.date}</span>
                  </div>
                  <h3 className="font-serif font-light text-text-on-light text-[1.15rem] leading-snug mb-4 group-hover:text-text-on-light/70 transition-colors duration-400">
                    {insight.title}
                  </h3>
                  <p className="text-text-on-light/55 text-sm leading-relaxed line-clamp-3">
                    {insight.excerpt}
                  </p>
                  <div className="mt-5 flex items-center gap-1.5 eyebrow text-[9px] text-gold/70 group-hover:text-gold transition-colors duration-400" style={{ color: undefined }}>
                    Read
                    <ArrowRight size={10} weight="light" className="group-hover:translate-x-0.5 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
