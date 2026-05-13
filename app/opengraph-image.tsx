import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
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
        {/* Top-left lockup */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <span style={{ color: '#C9A961', fontSize: 11, letterSpacing: '0.3em', fontFamily: 'system-ui, sans-serif', fontWeight: 500, textTransform: 'uppercase' }}>
            INFINITY VIEWS · DUBAI
          </span>
          <div style={{ width: 40, height: 1, background: '#C9A961', opacity: 0.6 }} />
        </div>

        {/* Main headline — centered vertically */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 16 }}>
          <div style={{ width: 1, height: 80, background: 'linear-gradient(to bottom, transparent, #C9A961, transparent)', position: 'absolute', left: 80, top: 160 }} />
          <div
            style={{
              color: '#EDE7D9',
              fontSize: 72,
              fontWeight: 300,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              maxWidth: 800,
            }}
          >
            Where Dubai&apos;s most distinguished addresses find their owners.
          </div>
          <div
            style={{
              color: '#C9A961',
              fontSize: 13,
              letterSpacing: '0.2em',
              fontFamily: 'system-ui, sans-serif',
              fontWeight: 500,
              textTransform: 'uppercase',
              marginTop: 8,
            }}
          >
            Private Real Estate Advisory · Est. 2018
          </div>
        </div>

        {/* Bottom gold hairline */}
        <div
          style={{
            position: 'absolute',
            bottom: 64,
            left: 80,
            right: 80,
            height: 1,
            background: 'linear-gradient(to right, #C9A961, transparent)',
            opacity: 0.4,
          }}
        />

        {/* Corner decoration */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: 300,
            height: 630,
            background: 'linear-gradient(to left, rgba(201, 169, 97, 0.04), transparent)',
          }}
        />
      </div>
    ),
    { ...size },
  )
}
