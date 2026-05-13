import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  intent: z.enum(['buy', 'rent', 'sell', 'invest']),
  area: z.string().optional(),
  propertyType: z.string().optional(),
  budget: z.string().optional(),
  bedrooms: z.string().optional(),
  message: z.string().optional(),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = contactSchema.parse(body)

    // TODO: Wire Resend here when going live
    // import { Resend } from 'resend'
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'enquiries@infinityviews.ae',
    //   to: 'hello@infinityviews.ae',
    //   subject: `New ${data.intent} enquiry from ${data.name}`,
    //   text: JSON.stringify(data, null, 2),
    // })

    console.log('[Contact Enquiry]', data)

    return NextResponse.json(
      { success: true, message: 'Enquiry received. We will be in touch within one business day.' },
      { status: 200 },
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.flatten().fieldErrors },
        { status: 422 },
      )
    }

    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 },
    )
  }
}
