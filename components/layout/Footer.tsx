'use client'

import { useState } from 'react'
import Link from 'next/link'
import { InstagramLogo, LinkedinLogo, WhatsappLogo } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/properties', label: 'Properties' },
  { href: '/philosophy', label: 'Philosophy' },
  { href: '/contact', label: 'Contact' },
]

const specialties = [
  'Palm Jumeirah',
  'Downtown Dubai',
  'Emirates Hills',
  'Branded Residences',
  'Off-Plan',
  'Jumeirah Bay Island',
]

interface FooterProps {
  locale: string
}

export default function Footer({ locale }: FooterProps) {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  function localePath(path: string) {
    if (locale === 'en') return path
    return `/${locale}${path}`
  }

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
    }
  }

  return (
    <footer className="bg-ink border-t border-hairline-dark">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 pt-20 pb-12">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8 pb-16 border-b border-hairline-dark">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link href={localePath('/')} className="block mb-6">
              <div className="font-serif text-[15px] tracking-[0.25em] uppercase text-text-on-dark">
                Infinity Views
              </div>
              <div className="eyebrow text-[9px] text-gold/60 mt-1 tracking-[0.3em]">
                Dubai · Est. 2018
              </div>
            </Link>
            <p className="text-text-on-dark/45 text-sm leading-relaxed max-w-[200px]">
              Private real estate advisory. Dubai.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Infinity Views on Instagram"
                className="text-text-on-dark/40 hover:text-gold transition-colors duration-400 ease-luxury"
              >
                <InstagramLogo size={18} weight="light" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Infinity Views on LinkedIn"
                className="text-text-on-dark/40 hover:text-gold transition-colors duration-400 ease-luxury"
              >
                <LinkedinLogo size={18} weight="light" />
              </a>
              <a
                href="https://wa.me/971501234567"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Infinity Views on WhatsApp"
                className="text-text-on-dark/40 hover:text-gold transition-colors duration-400 ease-luxury"
              >
                <WhatsappLogo size={18} weight="light" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="eyebrow text-[9px] text-gold/60 mb-6">Navigate</div>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={localePath(link.href)}
                    className="text-text-on-dark/50 text-sm hover:text-text-on-dark transition-colors duration-400 ease-luxury"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialties */}
          <div>
            <div className="eyebrow text-[9px] text-gold/60 mb-6">Specialties</div>
            <ul className="space-y-4">
              {specialties.map((s) => (
                <li key={s}>
                  <Link
                    href={localePath('/properties')}
                    className="text-text-on-dark/50 text-sm hover:text-text-on-dark transition-colors duration-400 ease-luxury"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="eyebrow text-[9px] text-gold/60 mb-6">Contact</div>
            <address className="not-italic space-y-3 text-text-on-dark/50 text-sm leading-relaxed">
              <p>
                Boulevard Plaza Tower 1<br />
                Level 14, Downtown Dubai<br />
                United Arab Emirates
              </p>
              <p>
                <a
                  href="tel:+97141234567"
                  className="hover:text-text-on-dark transition-colors duration-300"
                >
                  +971 4 123 4567
                </a>
              </p>
              <p>
                <a
                  href="https://wa.me/971501234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-text-on-dark transition-colors duration-300 flex items-center gap-1.5"
                >
                  <WhatsappLogo size={14} weight="light" />
                  +971 50 123 4567
                </a>
              </p>
              <p>
                <a
                  href="mailto:hello@infinityviews.ae"
                  className="hover:text-text-on-dark transition-colors duration-300"
                >
                  hello@infinityviews.ae
                </a>
              </p>
              <p className="text-text-on-dark/30 text-xs mt-1">
                Sun – Thu: 9:00 – 18:00 GST
              </p>
            </address>
          </div>
        </div>

        {/* Newsletter + bottom */}
        <div className="pt-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
          {/* Newsletter */}
          <div className="flex-1 max-w-sm">
            <div className="eyebrow text-[9px] text-gold/60 mb-4">
              Market Intelligence
            </div>
            <p className="text-text-on-dark/40 text-xs mb-4">
              Private reports on Dubai luxury property trends. Sent infrequently.
            </p>
            {subscribed ? (
              <p className="font-serif italic text-gold text-sm">
                You are on the list.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-end gap-0">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="input-underline text-sm"
                    aria-label="Email for newsletter"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-ghost text-[9px] py-2 px-4 ml-4 flex-shrink-0"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

          {/* Legal */}
          <div className="text-right">
            <p className="eyebrow text-[9px] text-gold/40 mb-2">
              RERA ORN 28847
            </p>
            <p className="text-text-on-dark/25 text-xs">
              © 2024 Infinity Views Real Estate. All rights reserved.
            </p>
          </div>
        </div>

        {/* Locale switcher */}
        <div className="mt-8 pt-6 border-t border-hairline-dark flex justify-end">
          <div className="flex items-center gap-3">
            {(['en', 'ar', 'ru'] as const).map((loc) => (
              <Link
                key={loc}
                href={loc === 'en' ? '/' : `/${loc}`}
                className={cn(
                  'eyebrow text-[9px] transition-colors duration-300',
                  locale === loc ? 'text-gold' : 'text-text-on-dark/30 hover:text-text-on-dark/60',
                )}
                aria-label={`Switch language to ${loc.toUpperCase()}`}
              >
                {loc.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
