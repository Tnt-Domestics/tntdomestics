import React from 'react'
import { Body, Button, Container, Head, Heading, Hr, Html, Preview, Section, Text } from '@react-email/components'
import type { TemplateEntry } from './registry'

interface Props {
  full_name?: string
  service_label?: string
  preferred_date?: string
  time_window?: string
  address?: string
  city?: string
  zip?: string
}

const Detail = ({ label, value }: { label: string; value?: string | undefined }) =>
  value ? <Text style={detail}><strong style={detailLabel}>{label}:</strong> {value}</Text> : null

const QuoteConfirmation = (p: Props) => {
  const firstName = p.full_name?.trim().split(/\s+/)[0]

  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>We received your {p.service_label ?? 'cleaning'} quote request.</Preview>
      <Body style={main}>
        <Container style={container}>
          <Text style={brand}>TNT Domestics</Text>
          <Heading style={h1}>We received your quote request</Heading>
          <Text style={lead}>{firstName ? `Hi ${firstName},` : 'Hello,'}</Text>
          <Text style={copy}>
            Thank you for contacting TNT Domestics. A coordinator will review your request and contact you to confirm availability, timing and your written quote.
          </Text>
          <Section style={summary}>
            <Text style={summaryTitle}>Your request</Text>
            <Detail label="Service" value={p.service_label} />
            <Detail label="Preferred date" value={p.preferred_date} />
            <Detail label="Time window" value={p.time_window} />
            <Detail label="Property" value={[p.address, p.city, p.zip].filter(Boolean).join(', ')} />
          </Section>
          <Text style={note}>
            This confirms receipt of your request only. Your preferred date and price are not final until our coordinator confirms them with you.
          </Text>
          <Hr style={hr} />
          <Text style={copy}>Questions or changes? Reply to this email or call our team.</Text>
          <Button href="tel:8305005791" style={button}>Call 830-500-5791</Button>
        </Container>
      </Body>
    </Html>
  )
}

export const template = {
  component: QuoteConfirmation,
  subject: (d: Record<string, any>) => `We received your ${d['service_label'] ?? 'cleaning'} quote request`,
  displayName: 'Quote request confirmation (to customer)',
  previewData: {
    full_name: 'Jane Doe',
    service_label: 'Luxury Residential Cleaning',
    preferred_date: '2026-12-15',
    time_window: 'Morning (8am–12pm)',
    address: '1 Main St',
    city: 'San Antonio',
    zip: '78209',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Inter, Arial, sans-serif' }
const container = { padding: '28px 25px', maxWidth: '560px' }
const brand = { color: '#0891B2', fontWeight: 700, fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase' as const, margin: 0 }
const h1 = { fontSize: '24px', lineHeight: '30px', color: '#0f172a', margin: '8px 0 18px' }
const lead = { fontSize: '16px', color: '#0f172a', margin: '0 0 10px' }
const copy = { fontSize: '15px', lineHeight: '23px', color: '#334155', margin: '0 0 16px' }
const summary = { backgroundColor: '#F5F3FF', border: '1px solid #E0E7FF', borderRadius: '10px', padding: '16px 18px', margin: '20px 0' }
const summaryTitle = { color: '#0f172a', fontSize: '15px', fontWeight: 700, margin: '0 0 10px' }
const detail = { fontSize: '14px', lineHeight: '21px', color: '#334155', margin: '5px 0' }
const detailLabel = { color: '#0f172a' }
const note = { fontSize: '13px', lineHeight: '20px', color: '#64748b', margin: '0' }
const hr = { borderColor: '#E0E7FF', margin: '22px 0' }
const button = { backgroundColor: '#0891B2', borderRadius: '8px', color: '#ffffff', display: 'inline-block', fontSize: '14px', fontWeight: 700, padding: '12px 20px', textDecoration: 'none' }
