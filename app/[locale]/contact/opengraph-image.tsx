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
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <span style={{ color: '#C9A961', fontSize: 11, letterSpacing: '0.3em', fontFamily: 'system-ui, sans-serif', fontWeight: 500, textTransform: 'uppercase' }}>
            INFINITY VIEWS · DUBAI
          </span>
          <div style={{ width: 40, height: 1, background: '#C9A961', opacity: 0.6 }} />
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 16 }}>
          <div style={{ color: '#C9A961', fontSize: 11, letterSpacing: '0.25em', fontFamily: 'system-ui, sans-serif', fontWeight: 500, textTransform: 'uppercase' }}>
            Private Advisory
          </div>
          <div style={{ color: '#EDE7D9', fontSize: 80, fontWeight: 300, lineHeight: 1.05, letterSpacing: '-0.02em' }}>
            Begin a Conversation.
          </div>
          <div style={{ color: '#EDE7D9', fontSize: 18, fontFamily: 'system-ui, sans-serif', fontWeight: 400, opacity: 0.5, marginTop: 8, letterSpacing: '0.01em' }}>
            Private, no-obligation. We respond within one business day.
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: 64, left: 80, right: 80, height: 1, background: 'linear-gradient(to right, #C9A961, transparent)', opacity: 0.4 }} />
        <div style={{ position: 'absolute', top: 0, right: 0, width: 300, height: 630, background: 'linear-gradient(to left, rgba(201, 169, 97, 0.04), transparent)' }} />
      </div>
    ),
    { ...size },
  )
}
