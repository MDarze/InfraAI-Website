import { useTranslations } from 'next-intl'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Industries' }

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="rtl:rotate-180">
      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function IndustriesPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('industries')
  const base = locale === 'ar' ? '' : '/en'
  const isAr = locale === 'ar'

  const industries = [
    {
      num: '01',
      title: t('ind1Title'),
      body: t('ind1Body'),
      tag: isAr ? 'القطاع الأساسي' : 'Primary Vertical',
    },
    {
      num: '02',
      title: t('ind2Title'),
      body: t('ind2Body'),
      tag: isAr ? 'منتج MVP جاهز' : 'MVP Ready',
    },
    {
      num: '03',
      title: t('ind3Title'),
      body: t('ind3Body'),
      tag: isAr ? 'خبرة مباشرة' : 'Direct Experience',
    },
    {
      num: '04',
      title: t('ind4Title'),
      body: t('ind4Body'),
      tag: isAr ? 'مشاريع سيادية' : 'Sovereign Projects',
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 border-b border-[#E8E6DF]">
        <div className="container-content">
          <p className="text-[11px] font-medium text-accent uppercase tracking-widest mb-6">
            {isAr ? 'القطاعات' : 'Industries'}
          </p>
          <h1 className="text-[clamp(2rem,5vw,4rem)] font-semibold text-ink leading-tight max-w-3xl mb-6">
            {t('headline')}
          </h1>
          <p className="text-[18px] text-muted leading-relaxed max-w-xl">{t('subline')}</p>
        </div>
      </section>

      {/* Industry cards */}
      <section className="section-pad">
        <div className="container-content">
          <div className="divide-y divide-[#E8E6DF]">
            {industries.map((ind) => (
              <div key={ind.num} className="py-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-1 text-[11px] font-medium text-muted">{ind.num}</div>
                <div className="md:col-span-5">
                  <span className="inline-block text-[11px] font-medium text-accent uppercase tracking-widest border border-[#E8E6DF] px-3 py-1 mb-4">
                    {ind.tag}
                  </span>
                  <h3 className="text-[22px] font-semibold text-ink">{ind.title}</h3>
                </div>
                <div className="md:col-span-6">
                  <p className="text-[16px] text-muted leading-relaxed">{ind.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-[#F3F1EA] border-t border-[#E8E6DF]">
        <div className="container-content text-center">
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold text-ink mb-4">
            {isAr ? 'قطاعك غير مذكور؟' : 'Your sector not listed?'}
          </h2>
          <p className="text-[16px] text-muted mb-8">
            {isAr ? 'نعمل في أي قطاع تكون فيه العمليات معقدة والبيانات قيّمة.' : 'We work in any sector where operations are complex and data is valuable.'}
          </p>
          <Link href={`${base}/contact`} className="btn-primary gap-2">
            {isAr ? 'تحدث مع فريقنا' : 'Talk to Our Team'} <ArrowIcon />
          </Link>
        </div>
      </section>
    </>
  )
}
