import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function Footer({ locale }: { locale: string }) {
  const t = useTranslations('footer')
  const nav = useTranslations('nav')
  const base = locale === 'ar' ? '' : '/en'

  const companyLinks = [
    { href: `${base}/about`, label: nav('about') },
    { href: `${base}/track-record`, label: nav('trackRecord') },
    { href: `${base}/insights`, label: nav('insights') },
    { href: `${base}/contact`, label: nav('contact') },
  ]

  const serviceLinks = [
    { href: `${base}/ai-transformation`, label: nav('aiTransformation') },
    { href: `${base}/cybersecurity`, label: nav('cybersecurity') },
    { href: `${base}/industries`, label: nav('industries') },
  ]

  return (
    <footer className="bg-[#F3F1EA] border-t border-[#E8E6DF] mt-auto">
      <div className="container-content py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="text-[15px] font-semibold text-ink mb-3">InfraAI</div>
            <p className="text-[13px] text-muted leading-relaxed">
              {locale === 'ar'
                ? 'نبني الذكاء داخل المؤسسة — لا حولها'
                : 'We build intelligence inside the enterprise — not around it.'}
            </p>
          </div>

          {/* Company */}
          <div>
            <div className="text-[11px] font-medium text-muted uppercase tracking-widest mb-4">{t('company')}</div>
            <ul className="space-y-3">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[13px] text-muted hover:text-ink transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="text-[11px] font-medium text-muted uppercase tracking-widest mb-4">{t('services')}</div>
            <ul className="space-y-3">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[13px] text-muted hover:text-ink transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-[11px] font-medium text-muted uppercase tracking-widest mb-4">{t('contact')}</div>
            <ul className="space-y-3">
              <li>
                <a href="mailto:sales@infraai-dx.com" className="text-[13px] text-muted hover:text-ink transition-colors">
                  {t('email')}
                </a>
              </li>
              <li>
                <a href="tel:+966537497934" className="text-[13px] text-muted hover:text-ink transition-colors" dir="ltr">
                  {t('phone')}
                </a>
              </li>
              <li className="text-[13px] text-muted">{t('address')}</li>
            </ul>
          </div>
        </div>

        <hr className="divider mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <p className="text-[11px] text-muted">{t('legal')}</p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="LinkedIn" className="text-muted hover:text-ink transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="#" aria-label="X / Twitter" className="text-muted hover:text-ink transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
