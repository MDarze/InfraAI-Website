'use client'
import { useEffect } from 'react'

export default function RootPage() {
  useEffect(() => {
    window.location.replace('/ar/')
  }, [])
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta httpEquiv="refresh" content="0;url=/ar/" />
      </head>
      <body style={{ background: '#FAFAF7' }} />
    </html>
  )
}
