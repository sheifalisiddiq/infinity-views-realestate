import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import TrustStrip from '@/components/home/TrustStrip'
import FeaturedCollection from '@/components/home/FeaturedCollection'
import WhyInfinityViews from '@/components/home/WhyInfinityViews'
import Neighborhoods from '@/components/home/Neighborhoods'
import MarketIntelligence from '@/components/home/MarketIntelligence'
import AdvisorSpotlight from '@/components/home/AdvisorSpotlight'
import ClientVoices from '@/components/home/ClientVoices'

export const metadata: Metadata = {
  title: 'Infinity Views | Luxury Real Estate Dubai',
  description:
    "Private real estate advisory in Dubai. Ultra-prime villas, penthouses, and estates on Palm Jumeirah, Downtown Dubai, and Emirates Hills. RERA ORN 28847.",
  openGraph: {
    title: 'Infinity Views | Luxury Real Estate Dubai',
    description:
      "Where Dubai's most distinguished addresses find their owners. Private advisory, curated collection, discreet by design.",
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <FeaturedCollection />
      <WhyInfinityViews />
      <Neighborhoods />
      <MarketIntelligence />
      <AdvisorSpotlight />
      <ClientVoices />
    </>
  )
}
