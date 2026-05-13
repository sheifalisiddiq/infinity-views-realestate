'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { List, X } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/properties', label: 'Properties', labelAr: 'العقارات', labelRu: 'Недвижимость' },
  { href: '/philosophy', label: 'Philosophy', labelAr: 'فلسفتنا', labelRu: 'Философия' },
  { href: '/contact', label: 'Contact', labelAr: 'تواصل معنا', labelRu: 'Контакты' },
]

const localeLabels: Record<string, string> = { en: 'EN', ar: 'AR', ru: 'RU' }

interface NavProps {
  locale: string
}

export default function Nav({ locale }: NavProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const isHome = pathname === '/' || pathname === `/${locale}` || pathname === `/${locale}/`

  function getLabel(link: (typeof navLinks)[0]) {
    if (locale === 'ar') return link.labelAr
    if (locale === 'ru') return link.labelRu
    return link.label
  }

  function localePath(path: string) {
    if (locale === 'en') return path
    return `/${locale}${path}`
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-600 ease-luxury',
          scrolled || !isHome
            ? 'bg-ink/95 backdrop-blur-sm border-b border-hairline-dark'
            : 'bg-transparent',
        )}
      >
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <Link
            href={localePath('/')}
            className="flex flex-col leading-none group"
            aria-label="Infinity Views — Home"
          >
            <span className="font-serif text-[13px] tracking-[0.25em] uppercase text-text-on-dark group-hover:text-gold transition-colors duration-400 ease-luxury">
              Infinity Views
            </span>
            <span className="eyebrow text-[9px] tracking-[0.3em] text-gold/70 mt-0.5">
              Dubai · Est. 2018
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10" aria-label="Primary navigation">
            {navLinks.map((link) => {
              const href = localePath(link.href)
              const active = pathname.startsWith(href)
              return (
                <Link
                  key={link.href}
                  href={href}
                  className={cn(
                    'eyebrow text-[10px] transition-colors duration-400 ease-luxury',
                    active ? 'text-gold' : 'text-text-on-dark/60 hover:text-text-on-dark',
                  )}
                >
                  {getLabel(link)}
                </Link>
              )
            })}

            {/* Locale switcher */}
            <div className="flex items-center gap-1 border-l border-hairline-dark pl-8 ml-2">
              {(['en', 'ar', 'ru'] as const).map((loc) => (
                <Link
                  key={loc}
                  href={loc === 'en' ? pathname.replace(`/${locale}`, '') || '/' : pathname.replace(`/${locale}`, `/${loc}`) || `/${loc}`}
                  className={cn(
                    'eyebrow text-[9px] px-1.5 py-0.5 transition-colors duration-300',
                    locale === loc ? 'text-gold' : 'text-text-on-dark/40 hover:text-text-on-dark/70',
                  )}
                  aria-label={`Switch to ${loc.toUpperCase()}`}
                >
                  {localeLabels[loc]}
                </Link>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/971501234567"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-[9px] py-2 px-4 ml-2"
              aria-label="Contact us on WhatsApp"
            >
              WhatsApp
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-text-on-dark p-2 -mr-2"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
          >
            <List size={22} weight="light" />
          </button>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.32, 0, 0.165, 1] }}
            className="fixed inset-0 z-[60] bg-ink/98 backdrop-blur-md flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Close */}
            <div className="flex items-center justify-between px-8 pt-6 pb-0 h-[72px]">
              <Link
                href={localePath('/')}
                onClick={() => setMenuOpen(false)}
                className="font-serif text-[13px] tracking-[0.25em] uppercase text-text-on-dark"
              >
                Infinity Views
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-text-on-dark p-2 -mr-2"
                aria-label="Close menu"
              >
                <X size={22} weight="light" />
              </button>
            </div>

            {/* Menu items */}
            <nav className="flex flex-col justify-center flex-1 px-8 gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.08 + i * 0.06,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    href={localePath(link.href)}
                    onClick={() => setMenuOpen(false)}
                    className="block font-serif text-[2.5rem] leading-tight text-text-on-dark/80 hover:text-text-on-dark py-3 transition-colors duration-300"
                  >
                    {getLabel(link)}
                  </Link>
                  <div className="h-px bg-hairline-dark" />
                </motion.div>
              ))}
            </nav>

            {/* Bottom bar */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="px-8 pb-10 pt-6 border-t border-hairline-dark flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                {(['en', 'ar', 'ru'] as const).map((loc) => (
                  <Link
                    key={loc}
                    href={loc === 'en' ? '/' : `/${loc}`}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      'eyebrow text-[10px] px-2 py-1 border transition-colors duration-300',
                      locale === loc
                        ? 'border-gold text-gold'
                        : 'border-hairline-dark text-text-on-dark/40 hover:border-gold/40 hover:text-text-on-dark/60',
                    )}
                  >
                    {loc.toUpperCase()}
                  </Link>
                ))}
              </div>
              <a
                href="https://wa.me/971501234567"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-[9px] py-2.5 px-5"
              >
                WhatsApp
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
