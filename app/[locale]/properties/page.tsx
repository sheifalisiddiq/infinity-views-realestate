import type { Metadata } from 'next'
import PropertiesClient from '@/components/properties/PropertiesClient'

export const metadata: Metadata = {
  title: 'Properties',
  description:
    'Curated ultra-prime residential properties in Dubai. Palm Jumeirah villas, Downtown penthouses, Emirates Hills estates, and Jumeirah Bay Island residences.',
  openGraph: {
    title: 'The Private Collection | Infinity Views Dubai',
    images: [{ url: '/og-properties.jpg', width: 1200, height: 630 }],
  },
}

export default function PropertiesPage() {
  return <PropertiesClient />
}
