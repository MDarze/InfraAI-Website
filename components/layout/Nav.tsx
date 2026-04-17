'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

export default function Nav({ locale }: { locale: string }) {
  const t = useTranslations('nav')
  const [open, setOpen] = useState(false)
  const isAr = locale === 'ar'
  const otherLocale = isAr ? 'en' : 'ar'
  const otherPath = isAr ? '/en' : '/ar'

  const links = [
    { href: `/${locale === 'ar' ? '' : 'en/'}`, label: t('aiTransformation'), path: 'ai-transformation' },
    { href: `/${locale === 'ar' ? '' : 'en/'}cybersecurity`, label: t('cybersecurity'), path: 'cybersecurity' },
    { href: `/${locale === 'ar' ? '' : 'en/'}industries`, label: t('industries'), path: 'industries' },
    { href: `/${locale === 'ar' ? '' : 'en/'}track-record`, label: t('trackRecord'), path: 'track-record' },
    { href: `/${locale === 'ar' ? '' : 'en/'}about`, label: t('about'), path: 'about' },
    { href: `/${locale === 'ar' ? '' : 'en/'}contact`, label: t('contact'), path: 'contact' },
  ]

  const base = locale === 'ar' ? '/ar' : '/en'

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#FAFAF7]/90 backdrop-blur-sm border-b border-[#E8E6DF]">
      <div className="container-content">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`${base}/`} className="text-[15px] font-semibold tracking-tight text-ink hover:text-accent transition-colors">
            InfraAI
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.path}
                href={`${base}/${l.path}`}
                className="text-[13px] font-medium text-muted hover:text-ink transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <Link href={otherPath} className="hidden lg:block text-[12px] font-medium text-muted hover:text-ink transition-colors uppercase tracking-widest">
              {t('langSwitch')}
            </Link>
            <Link href={`${base}/contact`} className="hidden lg:block btn-primary text-[13px] py-2 px-4">
              {t('bookAssessment')}
            </Link>
            {/* Mobile menu toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 text-ink"
              aria-label="Toggle menu"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                {open ? (
                  <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                ) : (
                  <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-[#E8E6DF] bg-[#FAFAF7]">
          <div className="container-content py-4 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.path}
                href={`${base}/${l.path}`}
                onClick={() => setOpen(false)}
                className="text-[15px] font-medium text-ink py-1"
              >
                {l.label}
              </Link>
            ))}
            <hr className="divider" />
            <Link href={otherPath} className="text-[13px] text-muted uppercase tracking-widest">
              {t('langSwitch')}
            </Link>
            <Link href={`${base}/contact`} className="btn-primary w-fit" onClick={() => setOpen(false)}>
              {t('bookAssessment')}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
