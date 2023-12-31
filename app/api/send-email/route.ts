import { Resend } from 'resend'
import WelcomeTemplate from '@/emails/WelcomeTemplate'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST() {
  await resend.emails.send({
    from: 'you@example.com',
    to: 'user@gmail.com',
    subject: 'hello world',
    react: WelcomeTemplate({ name: 'John' }),
  })

  return NextResponse.json({})
}
