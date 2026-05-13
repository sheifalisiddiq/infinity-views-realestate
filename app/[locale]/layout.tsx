import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import LenisProvider from '@/providers/LenisProvider'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import JsonLd from '@/components/seo/JsonLd'
import '@/app/globals.css'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['400', '500', '600'],
})

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'hero' })
  return {
    metadataBase: new URL('https://infinity-view-realestate.vercel.app'),
    title: {
      default: 'Infinity Views | Luxury Real Estate Dubai',
      template: '%s | Infinity Views Dubai',
    },
    description: t('headline'),
    openGraph: {
      type: 'website',
      locale: locale === 'ar' ? 'ar_AE' : locale === 'ru' ? 'ru_RU' : 'en_US',
      url: 'https://infinity-view-realestate.vercel.app',
      siteName: 'Infinity Views Real Estate',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@infinityviews',
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!routing.locales.includes(locale as 'en' | 'ar' | 'ru')) {
    notFound()
  }

  const messages = await getMessages()
  const dir = locale === 'ar' ? 'rtl' : 'ltr'

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <LenisProvider>
            <JsonLd />
            <Nav locale={locale} />
            <main>{children}</main>
            <Footer locale={locale} />
          </LenisProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
