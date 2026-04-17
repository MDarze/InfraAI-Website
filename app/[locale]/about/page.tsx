import { useTranslations } from 'next-intl'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'About' }

function FounderCard({ name, title, tag, initials }: { name: string; title: string; tag: string; initials: string }) {
  return (
    <div className="border border-[#E8E6DF]">
      {/* Portrait placeholder */}
      <div className="h-52 bg-[#1A1A19] flex items-center justify-center">
        <span className="text-[2rem] font-light text-[#5C5C58] tracking-widest">{initials}</span>
      </div>
      <div className="p-6">
        <div className="text-[16px] font-semibold text-ink mb-1">{name}</div>
        <div className="text-[13px] text-accent mb-3">{title}</div>
        <p className="text-[13px] text-muted leading-relaxed">{tag}</p>
      </div>
    </div>
  )
}

export default function AboutPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('about')
  const isAr = locale === 'ar'

  const founders = [
    { key: 'f1', initials: 'MD' },
    { key: 'f2', initials: 'AA' },
    { key: 'f3', initials: 'AA' },
    { key: 'f4', initials: 'AM' },
  ]

  const legalRows = [
    { label: t('crLabel'), value: t('crValue') },
    { label: t('dateLabel'), value: t('dateValue') },
    { label: t('statusLabel'), value: t('statusValue') },
    { label: t('entityLabel'), value: t('entityValue') },
  ]

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 border-b border-[#E8E6DF]">
        <div className="container-content">
          <p className="text-[11px] font-medium text-accent uppercase tracking-widest mb-6">
            {isAr ? 'عن الشركة' : 'About'}
          </p>
          <h1 className="text-[clamp(2rem,5vw,4rem)] font-semibold text-ink leading-tight max-w-3xl">
            {t('headline')}
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="section-pad border-b border-[#E8E6DF]">
        <div className="container-content">
          <div className="max-w-3xl space-y-6">
            <p className="text-[18px] text-ink leading-relaxed">{t('story')}</p>
            <p className="text-[17px] text-muted leading-relaxed">{t('story2')}</p>
            <p className="text-[17px] text-muted leading-relaxed">{t('story3')}</p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-pad border-b border-[#E8E6DF]">
        <div className="container-content">
          <p className="text-[11px] font-medium text-muted uppercase tracking-widest mb-12">{t('teamTitle')}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {founders.map(({ key, initials }) => (
              <FounderCard
                key={key}
                initials={initials}
                name={t(`${key}Name` as any)}
                title={t(`${key}Title` as any)}
                tag={t(`${key}Tag` as any)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Legal */}
      <section className="section-pad bg-[#F3F1EA] border-t border-[#E8E6DF]">
        <div className="container-content">
          <p className="text-[11px] font-medium text-muted uppercase tracking-widest mb-10">{t('legalTitle')}</p>
          <div className="max-w-lg divide-y divide-[#E8E6DF]">
            {legalRows.map(({ label, value }) => (
              <div key={label} className="flex justify-between py-4">
                <span className="text-[14px] text-muted">{label}</span>
                <span className="text-[14px] font-medium text-ink" dir="ltr">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
