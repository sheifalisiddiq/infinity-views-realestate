import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { advisors } from '@/data/advisors'

export const metadata: Metadata = {
  title: 'Philosophy',
  description:
    'Infinity Views was founded on the conviction that ultra-prime real estate is not a transaction — it is a relationship. Our approach, our standards, our team.',
  openGraph: {
    title: 'Philosophy | Infinity Views Dubai',
    images: [{ url: '/og-philosophy.jpg', width: 1200, height: 630 }],
  },
}

const stats = [
  { number: 'AED 2.4B+', label: 'In private transactions' },
  { number: '200+', label: 'HNW clients served' },
  { number: '6', label: 'Years in the Dubai market' },
  { number: '5', label: 'Languages spoken' },
]

export default function PhilosophyPage() {
  return (
    <div className="min-h-[100dvh] bg-ink pt-[72px]">
      {/* Hero */}
      <div className="relative min-h-[55vh] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=2000&q=90&fit=crop"
          alt="Dubai skyline at twilight"
          fill
          className="object-cover filter grayscale opacity-60"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16 pb-20 w-full">
          <div className="eyebrow text-gold mb-6">Our Philosophy</div>
          <h1 className="font-serif font-light text-text-on-dark text-headline-xl md:text-display-md leading-tight max-w-2xl">
            A different kind of<br />real estate firm.
          </h1>
        </div>
      </div>

      {/* Brand story */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 py-24 md:py-32">
        <div className="max-w-[720px] space-y-16">
          {/* Origins */}
          <div>
            <div className="flex items-baseline gap-4 mb-8">
              <span className="font-serif text-gold text-6xl font-light leading-none">O</span>
              <div className="eyebrow text-[9px] text-text-on-dark/40">Origins</div>
            </div>
            <div className="font-serif font-light text-text-on-dark/75 text-[1.1rem] leading-[1.85] space-y-5">
              <p>
                Infinity Views was founded in 2018 with a clear premise: that the top tier of Dubai
                real estate was being served poorly. The market had agents, but few advisors.
                It had listings, but little curation. It had speed, but little discretion.
              </p>
              <p>
                Our founder had spent a decade placing assets across the GCC for family offices and
                private individuals, and had watched, repeatedly, as the gap between what ultra-prime
                buyers needed and what the market offered grew wider. The best properties never
                reached the portals. The best clients never asked for a brochure. What they needed
                was a counterpart — someone who understood their position, their discretion requirements,
                and the Dubai market deeply enough to navigate it on their behalf.
              </p>
              <p>
                That is what Infinity Views was built to be.
              </p>
            </div>
          </div>

          {/* Approach */}
          <div className="border-t border-hairline-dark pt-16">
            <div className="flex items-baseline gap-4 mb-8">
              <span className="font-serif text-gold text-6xl font-light leading-none">A</span>
              <div className="eyebrow text-[9px] text-text-on-dark/40">Our Approach</div>
            </div>
            <div className="font-serif font-light text-text-on-dark/75 text-[1.1rem] leading-[1.85] space-y-5">
              <p>
                We do not aggregate. We do not chase listings. We do not place newspaper advertisements.
                We build relationships — with developers who share a commitment to quality, with sellers
                who value a counterpart they trust, and with buyers who understand that the properties
                worth having are rarely the ones most visible.
              </p>
              <p>
                Every engagement begins with a conversation, not a form. We want to understand what a
                client actually needs — not just the specification they have written down, but the life
                they are trying to create, the timeline they are working to, the concerns they are
                working around. The property question is usually the easy part.
              </p>
              <p>
                Our team is multilingual by design, not by accident. Dubai's ultra-prime buyer
                base is international — British, Russian, Indian, GCC, and increasingly Chinese.
                We believe that a relationship at the level we operate should be conducted in the
                client's language, from the first conversation to the final signature.
              </p>
            </div>
          </div>

          {/* Standards */}
          <div className="border-t border-hairline-dark pt-16">
            <div className="flex items-baseline gap-4 mb-8">
              <span className="font-serif text-gold text-6xl font-light leading-none">S</span>
              <div className="eyebrow text-[9px] text-text-on-dark/40">The Infinity Standard</div>
            </div>
            <div className="font-serif font-light text-text-on-dark/75 text-[1.1rem] leading-[1.85] space-y-5">
              <p>
                We hold our work to a standard that is simple to state and demanding to maintain:
                every client should feel, at every point in the process, that they are the only client.
              </p>
              <p>
                This means that we limit the number of active engagements we carry at any time.
                It means that we do not move to the next opportunity before we have completed the
                current one properly. It means that when a client calls, they reach their advisor
                directly — not an assistant, not a call centre, not a general enquiries line.
              </p>
              <p>
                It means, most fundamentally, that we never recommend a property we would not
                recommend to someone we care about. The Infinity collection is small by design.
                Every property in it has earned its place.
              </p>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-24 pt-16 border-t border-hairline-dark">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-0 md:divide-x md:divide-hairline-dark">
            {stats.map((stat) => (
              <div key={stat.label} className="md:px-12 first:pl-0 last:pr-0">
                <p className="font-serif font-light text-text-on-dark text-3xl md:text-4xl mb-2">
                  {stat.number}
                </p>
                <p className="eyebrow text-[9px] text-text-on-dark/40">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team grid */}
      <div className="border-t border-hairline-dark bg-ink">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 py-24 md:py-32">
          <div className="eyebrow text-gold mb-4">Our Team</div>
          <h2 className="font-serif font-light text-text-on-dark text-headline-xl mb-16 leading-snug max-w-md">
            Six advisors.<br />
            <em>Six markets. One standard.</em>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0">
            {advisors.map((advisor) => (
              <div key={advisor.id} className="group relative border border-hairline-dark -mt-px -ml-px">
                {/* Portrait */}
                <div className="relative aspect-[3/4] overflow-hidden bg-hairline-dark">
                  <Image
                    src={advisor.image}
                    alt={advisor.name}
                    fill
                    className="object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-luxury"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Flip overlay on hover */}
                  <div className="absolute inset-0 bg-ink/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-luxury p-8 flex flex-col justify-end">
                    <p className="text-text-on-dark/70 text-sm leading-relaxed mb-4">
                      {advisor.bio.slice(0, 180)}...
                    </p>
                    {advisor.linkedin && (
                      <a
                        href={advisor.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="eyebrow text-[9px] text-gold hover:text-gold-hover transition-colors"
                        aria-label={`${advisor.name} on LinkedIn`}
                      >
                        LinkedIn
                      </a>
                    )}
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <p className="font-serif text-text-on-dark text-lg mb-1">{advisor.name}</p>
                  <p className="eyebrow text-[9px] text-text-on-dark/40 mb-4">{advisor.title}</p>
                  <div className="flex flex-wrap gap-1">
                    {advisor.languages.map((l) => (
                      <span
                        key={l}
                        className="eyebrow text-[7px] border border-hairline-dark text-text-on-dark/35 px-1.5 py-0.5"
                      >
                        {l}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-hairline-dark bg-ink">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="font-serif font-light italic text-text-on-dark/60 text-xl md:text-2xl max-w-lg">
              &ldquo;Every client should feel, at every point in the process, that they are the only client.&rdquo;
            </p>
          </div>
          <Link href="/contact" className="btn-ghost flex-shrink-0 text-[9px] py-3 px-8">
            Begin a conversation
          </Link>
        </div>
      </div>
    </div>
  )
}
