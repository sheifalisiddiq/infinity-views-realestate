import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: '#0A0A0A',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Outer gold hairline */}
        <div
          style={{
            position: 'absolute',
            inset: 8,
            border: '1px solid #C9A961',
            opacity: 0.5,
          }}
        />
        {/* Inner gold hairline */}
        <div
          style={{
            position: 'absolute',
            inset: 12,
            border: '1px solid #C9A961',
            opacity: 0.25,
          }}
        />
        {/* IV monogram */}
        <span
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: 72,
            fontWeight: 400,
            color: '#C9A961',
            letterSpacing: '0.05em',
            lineHeight: 1,
          }}
        >
          IV
        </span>
      </div>
    ),
    { ...size },
  )
}
