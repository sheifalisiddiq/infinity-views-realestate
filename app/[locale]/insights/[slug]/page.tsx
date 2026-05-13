import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from '@phosphor-icons/react/dist/ssr'
import { insights, getInsightBySlug } from '@/data/insights'

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const insight = getInsightBySlug(slug)
  if (!insight) return { title: 'Article Not Found' }
  return {
    title: insight.title,
    description: insight.excerpt,
    openGraph: {
      title: `${insight.title} | Infinity Views`,
      description: insight.excerpt,
      images: [{ url: insight.image, width: 1200, height: 630 }],
    },
  }
}

export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const insight = getInsightBySlug(slug)
  if (!insight) notFound()

  return (
    <div className="min-h-[100dvh] bg-ink pt-[72px]">
      {/* Hero image */}
      <div className="relative aspect-[21/8] overflow-hidden">
        <Image
          src={insight.image}
          alt={insight.title}
          fill
          className="object-cover opacity-60"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/10" />
      </div>

      <div className="max-w-[1440px] mx-auto px-8 md:px-16 py-16">
        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 eyebrow text-[9px] text-text-on-dark/40 hover:text-gold transition-colors duration-300 mb-12"
        >
          <ArrowLeft size={12} weight="light" />
          Market Intelligence
        </Link>

        {/* Article header */}
        <div className="max-w-[720px]">
          <div className="flex items-center gap-3 mb-6">
            <span className="eyebrow text-[9px] text-gold">{insight.category}</span>
            <span className="text-text-on-dark/25 text-xs">·</span>
            <span className="text-text-on-dark/40 text-xs">{insight.date}</span>
            <span className="text-text-on-dark/25 text-xs">·</span>
            <span className="text-text-on-dark/40 text-xs">{insight.readTime}</span>
          </div>
          <h1 className="font-serif font-light text-text-on-dark text-headline-xl leading-snug mb-8">
            {insight.title}
          </h1>
          <p className="font-serif italic text-text-on-dark/55 text-lg leading-relaxed mb-12 border-b border-hairline-dark pb-12">
            {insight.excerpt}
          </p>
        </div>

        {/* Body */}
        <div className="max-w-[720px] font-serif font-light text-text-on-dark/70 text-[1.05rem] leading-[1.9] space-y-6">
          {insight.body.split('\n\n').map((para, i) => {
            if (para.startsWith('**') && para.endsWith('**')) {
              return (
                <h2 key={i} className="font-sans font-medium text-text-on-dark text-base tracking-wide mt-10 first:mt-0 not-italic">
                  {para.replace(/\*\*/g, '')}
                </h2>
              )
            }
            return <p key={i}>{para}</p>
          })}
        </div>

        {/* CTA */}
        <div className="max-w-[720px] mt-16 pt-12 border-t border-hairline-dark">
          <p className="font-serif italic text-text-on-dark/50 text-base mb-6">
            Infinity Views advises private clients across the full spectrum of Dubai ultra-prime real estate. Enquiries are handled in confidence.
          </p>
          <Link href="/contact" className="btn-ghost text-[9px] py-2.5 px-6">
            Begin a private conversation
          </Link>
        </div>
      </div>
    </div>
  )
}
