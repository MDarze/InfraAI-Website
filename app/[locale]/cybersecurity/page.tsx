import { useTranslations } from 'next-intl'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Cybersecurity' }

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="rtl:rotate-180">
      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function CyberPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('cyber')
  const base = locale === 'ar' ? '' : '/en'
  const isAr = locale === 'ar'

  const caps = isAr ? [
    'SOC كخدمة (SOC-as-a-Service)',
    'استخبارات التهديدات (Threat Intelligence)',
    'اختبار الاختراق (Penetration Testing)',
    'الاستجابة للحوادث (Incident Response)',
    'الامتثال: NCA ECC وSAMA CSF',
    'إدارة وضع أمن السحابة (CSPM)',
  ] : [
    'SOC as a Service',
    'Threat Intelligence',
    'Penetration Testing',
    'Incident Response',
    'Compliance: NCA ECC & SAMA CSF',
    'Cloud Security Posture Management',
  ]

  const whyPoints = isAr ? [
    'نقطة مسؤولية واحدة أمام العميل',
    'تقارير عربية أصيلة بمعايير سيادية',
    'امتثال رؤية 2030 مدمج في كل حل',
    'تكامل سلس مع مسارات التحول بالذكاء الاصطناعي',
  ] : [
    'Single point of accountability to the client',
    'Arabic-native reporting with sovereign standards',
    'Vision 2030 compliance built into every solution',
    'Seamless integration with AI transformation workstreams',
  ]

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 border-b border-[#E8E6DF]">
        <div className="container-content">
          <p className="text-[11px] font-medium text-accent uppercase tracking-widest mb-6">
            {isAr ? 'الأمن السيبراني' : 'Cybersecurity'}
          </p>
          <h1 className="text-[clamp(2rem,5vw,4rem)] font-semibold text-ink leading-tight max-w-3xl mb-6">
            {t('headline')}
          </h1>
          <p className="text-[18px] text-muted leading-relaxed max-w-xl mb-10">{t('subline')}</p>
          <Link href={`${base}/contact`} className="btn-primary gap-2">
            {isAr ? 'تحدث مع فريقنا' : 'Talk to Our Team'} <ArrowIcon />
          </Link>
        </div>
      </section>

      {/* Positioning */}
      <section className="section-pad border-b border-[#E8E6DF]">
        <div className="container-content max-w-3xl">
          <p className="text-[11px] font-medium text-muted uppercase tracking-widest mb-8">
            {t('modelTitle')}
          </p>
          <p className="text-[20px] text-ink leading-relaxed">{t('positionBody')}</p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-pad bg-[#F3F1EA] border-b border-[#E8E6DF]">
        <div className="container-content">
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold text-ink mb-12">{t('capTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {caps.map((cap, i) => (
              <div key={i} className="bg-[#FAFAF7] border border-[#E8E6DF] px-6 py-5">
                <div className="text-[11px] font-medium text-accent uppercase tracking-widest mb-3">0{i + 1}</div>
                <p className="text-[15px] font-medium text-ink">{cap}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why InfraAI */}
      <section className="section-pad border-b border-[#E8E6DF]">
        <div className="container-content">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold text-ink mb-6">{t('whyTitle')}</h2>
            </div>
            <div className="space-y-5">
              {whyPoints.map((p, i) => (
                <div key={i} className="flex items-start gap-4 pb-5 border-b border-[#E8E6DF] last:border-0 last:pb-0">
                  <span className="text-[11px] font-medium text-accent mt-1">0{i + 1}</span>
                  <p className="text-[16px] text-ink">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section-pad bg-[#0F0F0E]">
        <div className="container-content max-w-2xl">
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold text-[#FAFAF7] mb-6">{t('partnerTitle')}</h2>
          <p className="text-[16px] text-[#8A8A85] leading-relaxed mb-10">{t('partnerBody')}</p>
          <Link href={`${base}/contact`} className="inline-flex items-center gap-2 text-[14px] font-medium text-[#FAFAF7] border border-[#3A3A39] px-6 py-3 hover:border-[#FAFAF7] transition-colors">
            {isAr ? 'تأهل للاطلاع على شركائنا' : 'Qualify to See Our Partners'} <ArrowIcon />
          </Link>
        </div>
      </section>
    </>
  )
}
