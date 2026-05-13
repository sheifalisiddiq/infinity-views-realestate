export interface Advisor {
  id: string
  name: string
  title: string
  languages: string[]
  image: string
  bio: string
  phone: string
  whatsapp: string
  linkedin?: string
  featured?: boolean
  quote?: string
}

export const advisors: Advisor[] = [
  {
    id: 'omar-al-rashidi',
    name: 'Omar Al Rashidi',
    title: 'Managing Director',
    languages: ['Arabic', 'English', 'French'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=90&fit=crop&crop=face',
    bio: 'Omar founded Infinity Views in 2018 after a decade placing ultra-prime assets across the GCC. His network extends from DIFC family offices to sovereign wealth vehicles, giving clients access to opportunities that never reach the open market.',
    phone: '+971 4 123 4567',
    whatsapp: '+971501234567',
    linkedin: 'https://linkedin.com',
    featured: true,
    quote: 'Most of our best transactions never appear on a listing portal. Real estate at this level is a relationship business. Trust is built over years, not brochures.',
  },
  {
    id: 'natasha-sorokina',
    name: 'Natasha Sorokina',
    title: 'Senior Advisor — CIS Markets',
    languages: ['Russian', 'English', 'Arabic'],
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=90&fit=crop&crop=face',
    bio: 'Natasha has facilitated over AED 480M in transactions for Russian and Eastern European clients since 2019, specialising in Palm Jumeirah fronds and Emirates Hills signature villas. She is the first point of contact for clients relocating from Moscow, St. Petersburg, and Almaty.',
    phone: '+971 4 123 4567',
    whatsapp: '+971501234567',
  },
  {
    id: 'priya-mehta',
    name: 'Priya Mehta',
    title: 'Senior Advisor — South Asian Markets',
    languages: ['Hindi', 'English', 'Gujarati'],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=90&fit=crop&crop=face',
    bio: 'With roots in Mumbai\'s real estate finance sector, Priya brings deep analytical rigour to every advisory engagement. She specialises in investment-grade apartments in Downtown and Business Bay, with particular expertise in yield analysis and Golden Visa structuring.',
    phone: '+971 4 123 4567',
    whatsapp: '+971501234567',
  },
  {
    id: 'james-whitmore',
    name: 'James Whitmore',
    title: 'Senior Advisor — European Markets',
    languages: ['English', 'German'],
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=90&fit=crop&crop=face',
    bio: 'James spent seven years in London prime property before relocating to Dubai in 2021. He advises UK, German, and Swiss clients on diversification into Dubai freehold, tax residency planning, and the branded residence segment — particularly Dorchester Collection and Four Seasons properties.',
    phone: '+971 4 123 4567',
    whatsapp: '+971501234567',
  },
  {
    id: 'sara-al-mansoori',
    name: 'Sara Al Mansoori',
    title: 'Advisor — UAE & GCC Markets',
    languages: ['Arabic', 'English'],
    image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&q=90&fit=crop&crop=face',
    bio: 'Sara is Infinity Views\' specialist for GCC national clients and Emirati families looking to expand their real estate portfolio beyond traditional areas. She has particular depth in Emirates Hills, Al Barari, and the new Tilal Al Ghaf master development.',
    phone: '+971 4 123 4567',
    whatsapp: '+971501234567',
  },
  {
    id: 'liu-wei',
    name: 'Liu Wei',
    title: 'Advisor — Asia-Pacific Markets',
    languages: ['Mandarin', 'English', 'Cantonese'],
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=90&fit=crop&crop=face',
    bio: 'Wei joined from a Hong Kong-based private wealth firm, where he advised family offices on cross-border real estate allocation. In Dubai, he focuses on Mainland Chinese and Hong Kong clients exploring residency-by-investment strategies and off-plan branded developments in Jumeirah Bay and Palm Jumeirah.',
    phone: '+971 4 123 4567',
    whatsapp: '+971501234567',
  },
]
