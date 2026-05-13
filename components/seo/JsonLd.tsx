export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Infinity Views Real Estate',
    url: 'https://infinityviews.ae',
    logo: 'https://infinityviews.ae/logo.png',
    description:
      'Private real estate advisory in Dubai. Ultra-prime residential properties on Palm Jumeirah, Downtown Dubai, Emirates Hills, and Jumeirah Bay Island.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Boulevard Plaza Tower 1, Level 14',
      addressLocality: 'Downtown Dubai',
      addressCountry: 'AE',
    },
    telephone: '+97141234567',
    email: 'hello@infinityviews.ae',
    openingHours: 'Su-Th 09:00-18:00',
    areaServed: 'Dubai, United Arab Emirates',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Dubai Luxury Properties',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
