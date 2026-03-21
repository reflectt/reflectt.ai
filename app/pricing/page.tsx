import { redirect } from 'next/navigation'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing — Reflectt',
  description: 'Simple, transparent pricing for your AI agent team.',
}

// Redirect to billing in the app
export default function PricingPage() {
  redirect('https://app.reflectt.ai/settings?tab=billing')
}
