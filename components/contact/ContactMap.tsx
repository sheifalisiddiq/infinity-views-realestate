'use client'

import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import type { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Boulevard Plaza Tower 1, Downtown Dubai
const LAT = 25.1936
const LNG = 55.2787
const ZOOM = 15

function createGoldPin(): Icon {
  // Dynamically import Leaflet to avoid SSR issues
  const L = require('leaflet')
  return L.divIcon({
    html: `
      <svg width="28" height="38" viewBox="0 0 28 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 0C6.268 0 0 6.268 0 14C0 24.5 14 38 14 38C14 38 28 24.5 28 14C28 6.268 21.732 0 14 0Z" fill="#C9A961"/>
        <circle cx="14" cy="14" r="5" fill="#0A0A0A"/>
        <circle cx="14" cy="14" r="2" fill="#C9A961"/>
      </svg>
    `,
    className: '',
    iconSize: [28, 38],
    iconAnchor: [14, 38],
    popupAnchor: [0, -38],
  })
}

export default function ContactMap() {
  useEffect(() => {
    // Fix Leaflet's default icon path issue with webpack
    const L = require('leaflet')
    delete (L.Icon.Default.prototype as Record<string, unknown>)._getIconUrl
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: '',
      iconUrl: '',
      shadowUrl: '',
    })
  }, [])

  return (
    <div className="h-[480px] w-full" style={{ background: '#0A0A0A' }}>
      <MapContainer
        center={[LAT, LNG]}
        zoom={ZOOM}
        style={{ height: '100%', width: '100%', background: '#0A0A0A' }}
        scrollWheelZoom={false}
        attributionControl={false}
        zoomControl={false}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          subdomains="abcd"
          maxZoom={20}
        />
        <Marker
          position={[LAT, LNG]}
          icon={typeof window !== 'undefined' ? createGoldPin() : undefined as unknown as Icon}
        />
      </MapContainer>

      {/* Custom attribution — unobtrusive */}
      <div
        style={{
          position: 'absolute',
          bottom: 8,
          right: 8,
          zIndex: 1000,
          fontSize: 9,
          color: 'rgba(237,231,217,0.3)',
          letterSpacing: '0.05em',
          pointerEvents: 'none',
        }}
      >
        © OpenStreetMap · CARTO
      </div>
    </div>
  )
}
