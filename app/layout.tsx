import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
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

export const metadata: Metadata = {
  metadataBase: new URL('https://infinityviews.ae'),
  title: {
    default: 'Infinity Views | Luxury Real Estate Dubai',
    template: '%s | Infinity Views Dubai',
  },
  description:
    'Private real estate advisory in Dubai. Ultra-prime villas on Palm Jumeirah, Downtown penthouses, and Emirates Hills estates. RERA ORN 28847.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://infinityviews.ae',
    siteName: 'Infinity Views Real Estate',
    images: [{ url: '/og-default.jpg', width: 1200, height: 630 }],
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

// Root layout: font variables + globals only.
// html/body/lang/dir are owned by app/[locale]/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  )
}
