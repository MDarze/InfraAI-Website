import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'InfraAI Digital Solutions',
  description: 'Saudi AI Transformation & Cybersecurity Partner',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
