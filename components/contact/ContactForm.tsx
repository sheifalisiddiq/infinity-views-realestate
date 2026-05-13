'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { cn } from '@/lib/utils'

const schema = z.object({
  intent: z.enum(['buy', 'rent', 'sell', 'invest']),
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().optional(),
  area: z.string().optional(),
  propertyType: z.string().optional(),
  budget: z.string().optional(),
  bedrooms: z.string().optional(),
  message: z.string().optional(),
})

type FormData = z.infer<typeof schema>

const INTENTS = [
  { value: 'buy', label: 'Buy' },
  { value: 'rent', label: 'Rent' },
  { value: 'sell', label: 'Sell' },
  { value: 'invest', label: 'Invest' },
] as const

const AREAS = [
  'Palm Jumeirah',
  'Downtown Dubai',
  'Emirates Hills',
  'Dubai Hills Estate',
  'Jumeirah Bay Island',
  'Bluewaters Island',
  'Open to suggestion',
]

const BUDGETS = [
  'AED 5M – 10M',
  'AED 10M – 20M',
  'AED 20M – 50M',
  'AED 50M – 100M',
  'AED 100M+',
  'Undisclosed',
]

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [serverError, setServerError] = useState('')

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { intent: 'buy' },
  })

  const intent = watch('intent')

  async function onSubmit(data: FormData) {
    setSubmitting(true)
    setServerError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setServerError('Something went wrong. Please try again or contact us directly.')
      }
    } catch {
      setServerError('Network error. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="py-16 text-center md:text-left">
        <div className="eyebrow text-gold mb-6">Enquiry Received</div>
        <h2 className="font-serif font-light italic text-text-on-dark text-2xl md:text-3xl mb-4">
          Thank you.
        </h2>
        <p className="text-text-on-dark/55 text-[15px] leading-relaxed max-w-md">
          A senior advisor will be in touch within one business day. We look forward to serving you.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-10">
      {/* Intent segmented control */}
      <fieldset>
        <legend className="eyebrow text-[9px] text-text-on-dark/40 mb-4">I am looking to</legend>
        <div className="flex flex-wrap gap-0">
          {INTENTS.map((i) => (
            <label
              key={i.value}
              className={cn(
                'eyebrow text-[10px] px-5 py-3 border cursor-pointer transition-all duration-400 ease-luxury',
                intent === i.value
                  ? 'border-gold bg-gold text-ink'
                  : 'border-hairline-dark text-text-on-dark/50 hover:border-gold/40 hover:text-text-on-dark -ml-px',
              )}
            >
              <input
                type="radio"
                value={i.value}
                {...register('intent')}
                className="sr-only"
              />
              {i.label}
            </label>
          ))}
        </div>
      </fieldset>

      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label htmlFor="name" className="eyebrow text-[9px] text-text-on-dark/40 block mb-2">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            {...register('name')}
            placeholder="Omar Al Rashidi"
            className={cn('input-underline', errors.name && 'border-b-red-500/60')}
            autoComplete="name"
          />
          {errors.name && (
            <p className="text-red-400/80 text-xs mt-1.5">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="eyebrow text-[9px] text-text-on-dark/40 block mb-2">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            placeholder="your@email.com"
            className={cn('input-underline', errors.email && 'border-b-red-500/60')}
            autoComplete="email"
          />
          {errors.email && (
            <p className="text-red-400/80 text-xs mt-1.5">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="eyebrow text-[9px] text-text-on-dark/40 block mb-2">
          Phone Number
          <span className="text-text-on-dark/25 ml-2 normal-case tracking-normal text-[10px]">(optional)</span>
        </label>
        <input
          id="phone"
          type="tel"
          {...register('phone')}
          placeholder="+971 50 000 0000"
          className="input-underline"
          autoComplete="tel"
        />
      </div>

      {/* Area + Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label htmlFor="area" className="eyebrow text-[9px] text-text-on-dark/40 block mb-2">
            Preferred Area
          </label>
          <select
            id="area"
            {...register('area')}
            className="input-underline cursor-pointer"
            aria-label="Preferred area"
          >
            <option value="">Select area</option>
            {AREAS.map((a) => (
              <option key={a} value={a} className="bg-ink">
                {a}
              </option>
            ))}
          </select>
        </div>

        {(intent === 'buy' || intent === 'rent') && (
          <div>
            <label htmlFor="bedrooms" className="eyebrow text-[9px] text-text-on-dark/40 block mb-2">
              Bedrooms
            </label>
            <select
              id="bedrooms"
              {...register('bedrooms')}
              className="input-underline cursor-pointer"
              aria-label="Number of bedrooms"
            >
              <option value="">Any</option>
              {[1, 2, 3, 4, 5, 6, 7, '8+'].map((b) => (
                <option key={b} value={String(b)} className="bg-ink">
                  {b} {Number(b) === 1 ? 'bedroom' : 'bedrooms'}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Budget */}
      {(intent === 'buy' || intent === 'invest') && (
        <div>
          <label htmlFor="budget" className="eyebrow text-[9px] text-text-on-dark/40 block mb-2">
            Budget
          </label>
          <select
            id="budget"
            {...register('budget')}
            className="input-underline cursor-pointer"
            aria-label="Budget range"
          >
            <option value="">Select range</option>
            {BUDGETS.map((b) => (
              <option key={b} value={b} className="bg-ink">
                {b}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Message */}
      <div>
        <label htmlFor="message" className="eyebrow text-[9px] text-text-on-dark/40 block mb-2">
          Tell us more
          <span className="text-text-on-dark/25 ml-2 normal-case tracking-normal text-[10px]">(optional)</span>
        </label>
        <textarea
          id="message"
          {...register('message')}
          placeholder="Describe what you are looking for, your timeline, or any specific requirements."
          rows={4}
          className="input-underline resize-none"
        />
      </div>

      {/* Server error */}
      {serverError && (
        <p className="text-red-400/80 text-sm">{serverError}</p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={submitting}
        className={cn(
          'btn-gold w-full md:w-auto justify-center text-[9px] py-3.5 px-10',
          submitting && 'opacity-50 cursor-not-allowed',
        )}
        aria-busy={submitting}
      >
        {submitting ? 'Sending...' : 'Send Enquiry'}
      </button>
    </form>
  )
}
