'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 'RERA ORN 28847', label: 'Licensed Broker', static: true },
  { value: 'AED 2.4B+', label: 'In private transactions', static: true },
  { value: '200+', label: 'HNW clients served', static: true },
  { value: 'EN / AR / RU / HI / ZH', label: '5 languages spoken', static: true },
]

function StatItem({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center md:items-start transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <span className="font-serif font-light text-text-on-dark text-xl md:text-2xl leading-none mb-2">
        {value}
      </span>
      <span className="eyebrow text-gold/60">{label}</span>
    </div>
  )
}

export default function TrustStrip() {
  return (
    <section className="bg-ink border-y border-hairline-dark" aria-label="Trust indicators">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 py-12 md:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-hairline-dark">
          {stats.map((stat, i) => (
            <div key={i} className="md:px-10 first:pl-0 last:pr-0">
              <StatItem value={stat.value} label={stat.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
