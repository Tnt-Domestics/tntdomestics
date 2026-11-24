import React from 'react'
import { Body, Container, Head, Heading, Hr, Html, Preview, Section, Text } from '@react-email/components'
import type { TemplateEntry } from './registry'

interface Props {
  service_label?: string; full_name?: string; company?: string; phone?: string; email?: string
  address?: string; city?: string; zip?: string; property_type?: string; approx_size?: string
  frequency?: string; preferred_date?: string; time_window?: string; notes?: string; sms_consent?: boolean
  utm_source?: string; utm_campaign?: string; crm_status?: string
}

const Row = ({ label, value }: { label: string; value?: string | undefined }) =>
  value ? <Text style={row}><strong style={lbl}>{label}:</strong> {value}</Text> : null

const NewBooking = (p: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New booking request: {p.service_label ?? 'Cleaning'} from {p.full_name ?? 'a client'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={brand}>TNT Domestics</Text>
        <Heading style={h1}>New booking request</Heading>
        <Text style={lead}>{p.service_label ?? 'Cleaning'} · {p.preferred_date ?? 'date TBD'} · {p.time_window ?? ''}</Text>
        <Hr style={hr} />
        <Section>
          <Row label="Name" value={p.full_name} />
          <Row label="Company" value={p.company} />
          <Row label="Phone" value={p.phone} />
          <Row label="Email" value={p.email} />
          <Row label="Address" value={[p.address, p.city, p.zip].filter(Boolean).join(', ')} />
          <Row label="Property type" value={p.property_type} />
          <Row label="Approx. size" value={p.approx_size} />
          <Row label="Frequency" value={p.frequency} />
          <Row label="Notes" value={p.notes} />
          <Row label="SMS consent" value={p.sms_consent ? 'Yes' : 'No'} />
          <Row label="Source" value={[p.utm_source, p.utm_campaign].filter(Boolean).join(' / ')} />
          <Row label="CRM" value={p.crm_status} />
        </Section>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: NewBooking,
  subject: (d: Record<string, any>) => `New booking: ${d['service_label'] ?? 'Cleaning'} – ${d['full_name'] ?? 'client'}`,
  displayName: 'New booking (to management)',
  to: 'management@tntdomestics.com',
  previewData: {
    service_label: 'Luxury Residential Cleaning', full_name: 'Jane Doe', phone: '210-555-0100', email: 'jane@example.com',
    address: '1 Main St', city: 'San Antonio', zip: '78209', property_type: 'Estate', approx_size: '6,000 sq ft',
    frequency: 'Weekly', preferred_date: '2026-12-15', time_window: 'Morning (8am–12pm)', notes: 'Gate code at call.', sms_consent: true, crm_status: 'sent',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Inter, Arial, sans-serif' }
const container = { padding: '28px 25px', maxWidth: '560px' }
const brand = { color: '#0891B2', fontWeight: 700, fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase' as const, margin: 0 }
const h1 = { fontSize: '22px', color: '#0f172a', margin: '8px 0' }
const lead = { fontSize: '15px', color: '#475569', margin: '0 0 8px' }
const hr = { borderColor: '#E0E7FF', margin: '16px 0' }
const row = { fontSize: '14px', color: '#0f172a', margin: '6px 0' }
const lbl = { color: '#0891B2' }
