import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: '#0A0A0A',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Gold hairline border */}
        <div
          style={{
            position: 'absolute',
            inset: 1,
            border: '1px solid #C9A961',
            opacity: 0.6,
          }}
        />
        {/* IV monogram */}
        <span
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: 13,
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
