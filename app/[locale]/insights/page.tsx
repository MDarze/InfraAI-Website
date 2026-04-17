import { useTranslations } from 'next-intl'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Insights' }

export default function InsightsPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('insights')
  const isAr = locale === 'ar'

  return (
    <>
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 border-b border-[#E8E6DF]">
        <div className="container-content">
          <p className="text-[11px] font-medium text-accent uppercase tracking-widest mb-6">
            {isAr ? 'المقالات' : 'Insights'}
          </p>
          <h1 className="text-[clamp(2rem,5vw,4rem)] font-semibold text-ink leading-tight max-w-3xl">
            {t('headline')}
          </h1>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-content">
          <div className="border border-dashed border-[#E8E6DF] py-24 text-center">
            <p className="text-[16px] text-muted max-w-lg mx-auto leading-relaxed">{t('coming')}</p>
          </div>
        </div>
      </section>
    </>
  )
}
