import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { properties, getPropertyBySlug } from '@/data/properties'
import PropertyDetail from '@/components/properties/PropertyDetail'

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const property = getPropertyBySlug(slug)

  if (!property) return { title: 'Property Not Found' }

  return {
    title: property.name,
    description: property.description,
    openGraph: {
      title: `${property.name} | Infinity Views Dubai`,
      description: property.description,
      images: [{ url: property.images[0], width: 1200, height: 800 }],
    },
  }
}

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const property = getPropertyBySlug(slug)

  if (!property) notFound()

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Residence',
    name: property.name,
    description: property.description,
    url: `https://infinityviews.ae/properties/${property.slug}`,
    image: property.images,
    address: {
      '@type': 'PostalAddress',
      streetAddress: property.location,
      addressLocality: 'Dubai',
      addressCountry: 'AE',
    },
    offers: {
      '@type': 'Offer',
      price: property.price,
      priceCurrency: 'AED',
      availability: 'https://schema.org/InStock',
    },
    numberOfRooms: property.beds,
    floorSize: {
      '@type': 'QuantitativeValue',
      value: property.sqft,
      unitCode: 'FTK',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PropertyDetail property={property} />
    </>
  )
}
