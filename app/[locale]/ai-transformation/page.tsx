import { useTranslations } from 'next-intl'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'AI Transformation' }

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="rtl:rotate-180">
      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function AIPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('ai')
  const base = locale === 'ar' ? '' : '/en'
  const isAr = locale === 'ar'

  const reportItems = isAr ? [
    'تحديد سير العمل الحالي ونقاط الضعف',
    'نقاط الألم والفرص الميدانية',
    'مستوى التحول الرقمي الحالي',
    'تقييم جاهزية الفريق للذكاء الاصطناعي',
    'تحليل المشاريع والعمليات الجارية',
    'تحليل قاعدة العملاء',
    'مستوى التوافق مع رؤية 2030',
    'توصيات الذكاء الاصطناعي المخصصة',
    'تصميم سير العمل الجديد المقترح',
  ] : [
    'Current workflow mapping and bottleneck analysis',
    'Pain points and field opportunities',
    'Current digital maturity level',
    'AI readiness assessment for the team',
    'Ongoing projects and operations analysis',
    'Client base analysis',
    'Vision 2030 compliance level',
    'Customized AI recommendations',
    'New proposed workflow design',
  ]

  const sectors = isAr
    ? ['الإنشاءات والمقاولات', 'القطاع الطبي والصحي', 'البنوك والخدمات المالية', 'الجهات الحكومية']
    : ['Construction & Contracting', 'Healthcare & Medical', 'Banking & Financial Services', 'Government Entities']

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 border-b border-[#E8E6DF]">
        <div className="container-content">
          <p className="text-[11px] font-medium text-accent uppercase tracking-widest mb-6">
            {isAr ? 'التحول بالذكاء الاصطناعي' : 'AI Transformation'}
          </p>
          <h1 className="text-[clamp(2rem,5vw,4rem)] font-semibold text-ink leading-tight max-w-3xl mb-6">
            {t('headline')}
          </h1>
          <p className="text-[18px] text-muted leading-relaxed max-w-xl mb-10">{t('subline')}</p>
          <Link href={`${base}/contact`} className="btn-primary gap-2">
            {isAr ? 'احجز تقييماً' : 'Book an Assessment'} <ArrowIcon />
          </Link>
        </div>
      </section>

      {/* Methodology */}
      <section className="section-pad border-b border-[#E8E6DF]">
        <div className="container-content">
          <p className="text-[11px] font-medium text-muted uppercase tracking-widest mb-12">
            {isAr ? 'المنهجية' : 'Methodology'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="border border-[#E8E6DF] p-8">
              <div className="text-[11px] font-medium text-accent uppercase tracking-widest mb-4">01</div>
              <h3 className="text-[20px] font-semibold text-ink mb-4">{t('method1')}</h3>
              <p className="text-[15px] text-muted leading-relaxed">{t('method1Body')}</p>
            </div>
            <div className="border border-[#E8E6DF] p-8">
              <div className="text-[11px] font-medium text-accent uppercase tracking-widest mb-4">02</div>
              <h3 className="text-[20px] font-semibold text-ink mb-4">{t('method2')}</h3>
              <p className="text-[15px] text-muted leading-relaxed">{t('method2Body')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Report contents */}
      <section className="section-pad bg-[#F3F1EA] border-b border-[#E8E6DF]">
        <div className="container-content">
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold text-ink mb-12">{t('reportTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-12">
            {reportItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                <p className="text-[15px] text-ink">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three-track model */}
      <section className="section-pad border-b border-[#E8E6DF]">
        <div className="container-content">
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold text-ink mb-12">{t('modelTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: '01', title: t('model1'), sub: t('model1Price'), body: isAr ? 'نزول ميداني شامل بتطبيق DX-OS الخاص بنا.' : 'Comprehensive field assessment with our proprietary DX-OS tool.' },
              { num: '02', title: t('model2'), sub: '', body: t('model2Body') },
              { num: '03', title: t('model3'), sub: '', body: t('model3Body') },
            ].map((card) => (
              <div key={card.num} className="border border-[#E8E6DF] p-8">
                <div className="text-[11px] font-medium text-accent uppercase tracking-widest mb-6">{card.num}</div>
                <h3 className="text-[18px] font-semibold text-ink mb-2">{card.title}</h3>
                {card.sub && <p className="text-[20px] font-semibold text-accent mb-4" dir="ltr">{card.sub}</p>}
                <p className="text-[15px] text-muted leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="section-pad">
        <div className="container-content">
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold text-ink mb-12">{t('sectorsTitle')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sectors.map((s) => (
              <div key={s} className="border border-[#E8E6DF] px-6 py-5 text-[14px] font-medium text-ink">{s}</div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
