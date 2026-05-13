import type { Metadata } from 'next'
import ContactForm from '@/components/contact/ContactForm'
import ContactMapLoader from '@/components/contact/ContactMapLoader'
import { Phone, WhatsappLogo, Envelope, MapPin, Clock } from '@phosphor-icons/react/dist/ssr'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Begin a private conversation with an Infinity Views advisor. Dubai office at Boulevard Plaza Tower 1. Enquiries in English, Arabic, Russian, Hindi, and Mandarin.',
  openGraph: {
    title: 'Contact | Infinity Views Dubai',
  },
}

const contactDetails = [
  {
    icon: MapPin,
    label: 'Office',
    value: 'Boulevard Plaza Tower 1, Level 14\nDowntown Dubai, UAE',
  },
  {
    icon: Phone,
    label: 'Telephone',
    value: '+971 4 123 4567',
    href: 'tel:+97141234567',
  },
  {
    icon: WhatsappLogo,
    label: 'WhatsApp',
    value: '+971 50 123 4567',
    href: 'https://wa.me/971501234567',
    external: true,
  },
  {
    icon: Envelope,
    label: 'Email',
    value: 'hello@infinityviews.ae',
    href: 'mailto:hello@infinityviews.ae',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Sunday – Thursday: 9:00 – 18:00 GST',
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-[100dvh] bg-ink pt-[72px]">
      {/* Header */}
      <div className="border-b border-hairline-dark px-8 md:px-16 py-16 max-w-[1440px] mx-auto">
        <div className="eyebrow text-gold mb-5">Begin a Conversation</div>
        <h1 className="font-serif font-light text-text-on-dark text-headline-xl max-w-xl leading-snug">
          Private, no-obligation.<br />
          <em>We respond within one business day.</em>
        </h1>
      </div>

      {/* Two-column */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
          {/* Form — wider */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          {/* Details */}
          <div className="lg:col-span-2">
            <div className="eyebrow text-[9px] text-text-on-dark/40 mb-8">Contact Details</div>
            <dl className="space-y-8">
              {contactDetails.map((item) => (
                <div key={item.label} className="flex gap-5">
                  <dt className="flex-shrink-0 pt-0.5">
                    <item.icon size={16} weight="light" className="text-gold/60" aria-hidden="true" />
                  </dt>
                  <dd>
                    <p className="eyebrow text-[9px] text-text-on-dark/40 mb-1">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noopener noreferrer' : undefined}
                        className="text-text-on-dark/70 text-sm hover:text-gold transition-colors duration-300 leading-relaxed whitespace-pre-line"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-text-on-dark/70 text-sm leading-relaxed whitespace-pre-line">
                        {item.value}
                      </p>
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            {/* RERA */}
            <div className="mt-12 pt-8 border-t border-hairline-dark">
              <p className="eyebrow text-[8px] text-text-on-dark/25 leading-loose">
                RERA ORN 28847<br />
                DED License {'[TO_CONFIRM]'}<br />
                Registered in Dubai, UAE
              </p>
            </div>

            {/* Languages */}
            <div className="mt-8">
              <p className="eyebrow text-[8px] text-text-on-dark/30 mb-3">Enquiries accepted in</p>
              <div className="flex flex-wrap gap-1.5">
                {['English', 'Arabic', 'Russian', 'Hindi', 'Mandarin'].map((l) => (
                  <span
                    key={l}
                    className="eyebrow text-[8px] border border-hairline-dark text-text-on-dark/35 px-2 py-0.5"
                  >
                    {l}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactMapLoader />
    </div>
  )
}
