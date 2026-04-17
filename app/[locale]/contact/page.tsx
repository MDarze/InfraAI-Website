'use client'

import { useTranslations } from 'next-intl'
import { useState } from 'react'

export default function ContactPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('contact')
  const isAr = locale === 'ar'
  const [submitted, setSubmitted] = useState(false)

  const interests = [t('int1'), t('int2'), t('int3'), t('int4')]
  const sectors = t.raw('sectors') as string[]

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    console.log('Contact form submission:', data)
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-48 lg:pb-24 border-b border-[#E8E6DF]">
        <div className="container-content">
          <p className="text-[11px] font-medium text-accent uppercase tracking-widest mb-6">
            {isAr ? 'تواصل معنا' : 'Contact'}
          </p>
          <h1 className="text-[clamp(2rem,5vw,4rem)] font-semibold text-ink leading-tight max-w-3xl mb-4">
            {t('headline')}
          </h1>
          <p className="text-[18px] text-muted max-w-xl leading-relaxed">{t('subline')}</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Form */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="border border-[#E8E6DF] p-10 text-center">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M2 8l4 4 8-8" stroke="#2D5F5D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-[16px] text-ink">{t('successMsg')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[12px] font-medium text-muted uppercase tracking-widest mb-2">{t('nameLabel')}</label>
                      <input name="name" required className="w-full bg-transparent border border-[#E8E6DF] px-4 py-3 text-[15px] text-ink focus:outline-none focus:border-[#1A1A19] transition-colors" />
                    </div>
                    <div>
                      <label className="block text-[12px] font-medium text-muted uppercase tracking-widest mb-2">{t('companyLabel')}</label>
                      <input name="company" required className="w-full bg-transparent border border-[#E8E6DF] px-4 py-3 text-[15px] text-ink focus:outline-none focus:border-[#1A1A19] transition-colors" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[12px] font-medium text-muted uppercase tracking-widest mb-2">{t('emailLabel')}</label>
                      <input name="email" type="email" required className="w-full bg-transparent border border-[#E8E6DF] px-4 py-3 text-[15px] text-ink focus:outline-none focus:border-[#1A1A19] transition-colors" />
                    </div>
                    <div>
                      <label className="block text-[12px] font-medium text-muted uppercase tracking-widest mb-2">{t('phoneLabel')}</label>
                      <input name="phone" type="tel" className="w-full bg-transparent border border-[#E8E6DF] px-4 py-3 text-[15px] text-ink focus:outline-none focus:border-[#1A1A19] transition-colors" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[12px] font-medium text-muted uppercase tracking-widest mb-2">{t('sectorLabel')}</label>
                    <select name="sector" className="w-full bg-transparent border border-[#E8E6DF] px-4 py-3 text-[15px] text-ink focus:outline-none focus:border-[#1A1A19] transition-colors">
                      {sectors.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[12px] font-medium text-muted uppercase tracking-widest mb-3">{t('interestLabel')}</label>
                    <div className="grid grid-cols-2 gap-3">
                      {interests.map((int) => (
                        <label key={int} className="flex items-center gap-3 cursor-pointer group">
                          <input type="radio" name="interest" value={int} className="accent-[#2D5F5D]" />
                          <span className="text-[14px] text-ink">{int}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[12px] font-medium text-muted uppercase tracking-widest mb-2">{t('messageLabel')}</label>
                    <textarea name="message" rows={5} className="w-full bg-transparent border border-[#E8E6DF] px-4 py-3 text-[15px] text-ink focus:outline-none focus:border-[#1A1A19] transition-colors resize-none" />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center">
                    {t('submit')}
                  </button>
                </form>
              )}
            </div>

            {/* Contact info */}
            <div className="lg:col-span-5">
              <div className="space-y-8">
                <div>
                  <div className="text-[11px] font-medium text-muted uppercase tracking-widest mb-3">
                    {isAr ? 'البريد الإلكتروني' : 'Email'}
                  </div>
                  <a href="mailto:sales@infraai-dx.com" className="text-[16px] text-ink hover:text-accent transition-colors">
                    sales@infraai-dx.com
                  </a>
                </div>
                <div>
                  <div className="text-[11px] font-medium text-muted uppercase tracking-widest mb-3">
                    {isAr ? 'الهاتف' : 'Phone'}
                  </div>
                  <a href="tel:+966537497934" className="text-[16px] text-ink hover:text-accent transition-colors" dir="ltr">
                    +966 53 749 7934
                  </a>
                </div>
                <div>
                  <div className="text-[11px] font-medium text-muted uppercase tracking-widest mb-3">
                    {isAr ? 'الموقع' : 'Location'}
                  </div>
                  <p className="text-[16px] text-ink">{isAr ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Kingdom of Saudi Arabia'}</p>
                </div>
                <hr className="divider" />
                <div className="bg-[#F3F1EA] border border-[#E8E6DF] p-6">
                  <div className="text-[11px] font-medium text-accent uppercase tracking-widest mb-3">
                    {isAr ? 'برنامج العملاء المؤسسين' : 'Founding Client Program'}
                  </div>
                  <p className="text-[14px] text-muted leading-relaxed">
                    {isAr
                      ? 'تقييم ميداني مجاني بقيمة ١٠٠٠٠ ريال لأول ٣ عملاء.'
                      : 'Free field assessment (10,000 SAR value) for the first 3 clients.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
