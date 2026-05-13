import { ImageResponse } from 'next/og'
import { getPropertyBySlug } from '@/data/properties'
import { formatPrice } from '@/lib/utils'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>
}) {
  const { slug } = await params
  const property = getPropertyBySlug(slug)

  const title = property?.name ?? 'Private Residence'
  const area = property?.area ?? 'Dubai'
  const price = property ? formatPrice(property.price) : ''
  const beds = property ? `${property.beds} Bedrooms` : ''
  const sqft = property ? `${property.sqft.toLocaleString()} sqft` : ''

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: '#0A0A0A',
          display: 'flex',
          flexDirection: 'column',
          padding: '64px 80px',
          position: 'relative',
          fontFamily: 'Georgia, serif',
        }}
      >
        {/* Top lockup */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <span style={{ color: '#C9A961', fontSize: 11, letterSpacing: '0.3em', fontFamily: 'system-ui, sans-serif', fontWeight: 500, textTransform: 'uppercase' }}>
            INFINITY VIEWS · DUBAI
          </span>
          <div style={{ width: 40, height: 1, background: '#C9A961', opacity: 0.6 }} />
        </div>

        {/* Content */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12 }}>
          <div style={{ color: '#C9A961', fontSize: 11, letterSpacing: '0.25em', fontFamily: 'system-ui, sans-serif', fontWeight: 500, textTransform: 'uppercase' }}>
            {area}
          </div>
          <div
            style={{
              color: '#EDE7D9',
              fontSize: title.length > 40 ? 56 : 68,
              fontWeight: 300,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              maxWidth: 900,
            }}
          >
            {title}
          </div>
          {/* Specs row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginTop: 16 }}>
            {beds && (
              <span style={{ color: '#EDE7D9', fontSize: 14, fontFamily: 'system-ui, sans-serif', opacity: 0.5, letterSpacing: '0.05em' }}>
                {beds}
              </span>
            )}
            {beds && sqft && <div style={{ width: 1, height: 14, background: '#C9A961', opacity: 0.3 }} />}
            {sqft && (
              <span style={{ color: '#EDE7D9', fontSize: 14, fontFamily: 'system-ui, sans-serif', opacity: 0.5, letterSpacing: '0.05em' }}>
                {sqft}
              </span>
            )}
            {price && sqft && <div style={{ width: 1, height: 14, background: '#C9A961', opacity: 0.3 }} />}
            {price && (
              <span style={{ color: '#C9A961', fontSize: 18, fontFamily: 'system-ui, sans-serif', fontWeight: 500, letterSpacing: '0.05em' }}>
                {price}
              </span>
            )}
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: 64, left: 80, right: 80, height: 1, background: 'linear-gradient(to right, #C9A961, transparent)', opacity: 0.4 }} />
        <div style={{ position: 'absolute', top: 0, right: 0, width: 300, height: 630, background: 'linear-gradient(to left, rgba(201, 169, 97, 0.04), transparent)' }} />
      </div>
    ),
    { ...size },
  )
}
