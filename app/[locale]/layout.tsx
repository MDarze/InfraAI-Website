export const dynamic = 'force-static'

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { locales } from '@/i18n/request'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: { template: '%s | InfraAI Digital Solutions', default: 'InfraAI Digital Solutions' },
  description: 'Saudi AI Transformation & Cybersecurity Partner — نبني الذكاء داخل المؤسسة',
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  if (!locales.includes(locale as 'ar' | 'en')) notFound()

  const messages = await getMessages()
  const dir = locale === 'ar' ? 'rtl' : 'ltr'

  return (
    <html lang={locale} dir={dir}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Nav locale={locale} />
          <main>{children}</main>
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
