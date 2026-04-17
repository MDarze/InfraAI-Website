import { useTranslations } from 'next-intl'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Track Record' }

export default function TrackRecordPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('track')
  const isAr = locale === 'ar'

  const projects = [
    { title: t('p1Title'), role: t('p1Role'), body: t('p1Body') },
    { title: t('p2Title'), role: t('p2Role'), body: t('p2Body') },
    { title: t('p3Title'), role: t('p3Role'), body: t('p3Body') },
    { title: t('p4Title'), role: t('p4Role'), body: t('p4Body') },
    { title: t('p5Title'), role: t('p5Role'), body: t('p5Body') },
    { title: t('p6Title'), role: t('p6Role'), body: t('p6Body') },
  ]

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 border-b border-[#E8E6DF]">
        <div className="container-content">
          <p className="text-[11px] font-medium text-accent uppercase tracking-widest mb-6">
            {isAr ? 'سابقة الأعمال' : 'Track Record'}
          </p>
          <h1 className="text-[clamp(2rem,5vw,4rem)] font-semibold text-ink leading-tight max-w-3xl mb-6">
            {t('headline')}
          </h1>
          <p className="text-[18px] text-muted leading-relaxed max-w-2xl">{t('subline')}</p>
        </div>
      </section>

      {/* Projects */}
      <section className="section-pad">
        <div className="container-content">
          <div className="divide-y divide-[#E8E6DF]">
            {projects.map((p, i) => (
              <div key={i} className="py-12 grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-1 text-[11px] font-medium text-muted pt-1">
                  0{i + 1}
                </div>
                <div className="md:col-span-4">
                  <span className="inline-block text-[11px] font-medium text-muted uppercase tracking-widest border border-[#E8E6DF] px-3 py-1 mb-4">
                    {p.role}
                  </span>
                  <h3 className="text-[18px] font-semibold text-ink leading-snug">{p.title}</h3>
                </div>
                <div className="md:col-span-7">
                  <p className="text-[16px] text-muted leading-relaxed">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-[#F3F1EA] border-t border-[#E8E6DF] py-12">
        <div className="container-content">
          <p className="text-[13px] text-muted leading-relaxed max-w-3xl">
            <span className="font-semibold text-ink">{isAr ? 'تنويه مهم: ' : 'Important Note: '}</span>
            {t('disclaimer')}
          </p>
        </div>
      </section>
    </>
  )
}
