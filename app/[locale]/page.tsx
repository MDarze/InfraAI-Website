import { useTranslations } from 'next-intl'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'InfraAI Digital Solutions — نبني الذكاء داخل المؤسسة',
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="rtl:rotate-180">
      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('home')
  const base = locale === 'ar' ? '' : '/en'
  const isAr = locale === 'ar'

  const tracks = [t('track1'), t('track2'), t('track3'), t('track4'), t('track5'), t('track6')]

  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-32 pb-24 lg:pt-48 lg:pb-40 bg-[#FAFAF7] relative overflow-hidden">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F3F1EA] to-[#FAFAF7] pointer-events-none" />
        <div className="container-content relative">
          <p className="text-[11px] font-medium text-muted uppercase tracking-widest mb-8">
            {t('eyebrow')}
          </p>
          <h1 className={`${isAr ? 'text-[clamp(3rem,8vw,6rem)]' : 'text-[clamp(2.5rem,6vw,5rem)]'} font-semibold text-ink leading-[1.05] tracking-tight max-w-4xl mb-8`}>
            {t('headline')}
          </h1>
          <p className="text-[18px] text-muted leading-relaxed max-w-2xl mb-12">
            {t('subline')}
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <Link href={`${base}/contact`} className="btn-primary gap-2">
              {t('ctaPrimary')} <ArrowIcon />
            </Link>
            <Link href={`${base}/contact`} className="btn-secondary">
              {t('ctaSecondary')}
            </Link>
          </div>
          <p className="text-[13px] text-muted">{t('foundingNote')}</p>
        </div>
      </section>

      {/* ── Three Propositions ── */}
      <section className="section-pad border-t border-[#E8E6DF]">
        <div className="container-content">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:divide-x md:divide-[#E8E6DF] rtl:md:divide-x-reverse">
            {[
              { title: t('prop1Title'), body: t('prop1Body') },
              { title: t('prop2Title'), body: t('prop2Body') },
              { title: t('prop3Title'), body: t('prop3Body') },
            ].map((item, i) => (
              <div key={i} className="px-0 md:px-10 first:ps-0 last:pe-0 py-8 md:py-0">
                <div className="text-[11px] font-medium text-accent uppercase tracking-widest mb-4">
                  0{i + 1}
                </div>
                <h3 className="text-[18px] font-semibold text-ink mb-3">{item.title}</h3>
                <p className="text-[15px] text-muted leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Track Record Strip ── */}
      <section className="bg-[#0F0F0E] py-20">
        <div className="container-content">
          <h2 className="text-[13px] font-medium text-[#5C5C58] uppercase tracking-widest mb-12">
            {t('trackTitle')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-8 mb-12">
            {tracks.map((item, i) => (
              <div key={i} className="text-[15px] font-medium text-[#8A8A85]">
                {item}
              </div>
            ))}
          </div>
          <p className="text-[12px] text-[#5C5C58] leading-relaxed max-w-2xl border-t border-[#2A2A29] pt-6">
            {t('trackDisclaimer')}
          </p>
        </div>
      </section>

      {/* ── Two Specializations ── */}
      <section className="section-pad border-t border-[#E8E6DF]">
        <div className="container-content">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: t('spec1Title'), body: t('spec1Body'), href: `${base}/ai-transformation` },
              { title: t('spec2Title'), body: t('spec2Body'), href: `${base}/cybersecurity` },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group block p-10 border border-[#E8E6DF] hover:border-[#1A1A19] transition-colors"
              >
                <h3 className="text-[22px] font-semibold text-ink mb-4">{card.title}</h3>
                <p className="text-[15px] text-muted leading-relaxed mb-8">{card.body}</p>
                <span className="inline-flex items-center gap-2 text-[13px] font-medium text-ink group-hover:text-accent transition-colors">
                  {locale === 'ar' ? 'اكتشف أكثر' : 'Learn more'} <ArrowIcon />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Founding Client Program ── */}
      <section className="section-pad bg-[#F3F1EA] border-t border-[#E8E6DF]">
        <div className="container-content max-w-2xl mx-auto text-center">
          <p className="text-[11px] font-medium text-accent uppercase tracking-widest mb-6">
            {locale === 'ar' ? 'عرض محدود' : 'Limited Offer'}
          </p>
          <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-semibold text-ink mb-6">
            {t('foundingTitle')}
          </h2>
          <p className="text-[17px] text-muted leading-relaxed mb-10">
            {t('foundingBody')}
          </p>
          <Link href={`${base}/contact`} className="btn-primary gap-2">
            {t('foundingCta')} <ArrowIcon />
          </Link>
        </div>
      </section>
    </>
  )
}
