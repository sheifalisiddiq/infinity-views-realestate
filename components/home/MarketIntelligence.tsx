'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { insights } from '@/data/insights'
import { ArrowRight } from '@phosphor-icons/react'

const ease = [0.16, 1, 0.3, 1] as const

export default function MarketIntelligence() {
  return (
    <section className="bg-ivory" aria-label="Market intelligence articles">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-24 md:py-32">
        {/* Heading */}
        <motion.div
          className="flex items-end justify-between mb-14 md:mb-16 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease }}
        >
          <div>
            <div className="eyebrow text-gold mb-5">Market Intelligence</div>
            <h2 className="font-serif font-light text-text-on-light text-headline-xl leading-snug">
              Private analysis.
              <br />
              <em>No marketing.</em>
            </h2>
          </div>
          <Link
            href="/insights"
            className="hidden md:flex items-center gap-2 eyebrow text-[10px] text-text-on-light/40 hover:text-gold transition-colors duration-400 ease-luxury pb-1 flex-shrink-0"
            aria-label="All market intelligence articles"
          >
            All articles
            <ArrowRight size={12} weight="light" />
          </Link>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-hairline-light">
          {insights.map((insight, i) => (
            <motion.article
              key={insight.id}
              className="bg-ivory group"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease, delay: i * 0.1 }}
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
                    <span className="eyebrow text-[9px] text-gold">{insight.category}</span>
                    <span className="text-text-on-light/30 text-xs">·</span>
                    <span className="text-text-on-light/40 text-xs">{insight.date}</span>
                  </div>
                  <h3 className="font-serif font-light text-text-on-light text-[1.15rem] leading-snug mb-4 group-hover:text-text-on-light/70 transition-colors duration-400">
                    {insight.title}
                  </h3>
                  <p className="text-text-on-light/55 text-sm leading-relaxed line-clamp-3">
                    {insight.excerpt}
                  </p>
                  <div className="mt-5 flex items-center gap-1.5 eyebrow text-[9px] text-gold/70 group-hover:text-gold transition-colors duration-400">
                    Read
                    <ArrowRight
                      size={10}
                      weight="light"
                      className="group-hover:translate-x-0.5 transition-transform duration-300"
                    />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
