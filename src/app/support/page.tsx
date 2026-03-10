'use client'

import { useState } from 'react'
import { useModalStore } from '@/store/modal'

const quickCards = [
  { icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', gradient: 'from-brand to-teal', title: 'Technical Documentation', desc: 'User manuals, API docs, integration guides', href: '#documentation', linkText: 'Browse Docs' },
  { icon: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4', gradient: 'from-teal to-brand', title: 'Software & Firmware', desc: 'Latest updates, drivers, utility tools', href: '#downloads', linkText: 'View Downloads' },
  { icon: 'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z', gradient: 'from-[#FF6B6B] to-[#FF8E53]', title: 'Video Tutorials', desc: 'Step-by-step training videos', href: '#videos', linkText: 'Watch Now' },
]

const productDocs = [
  {
    name: 'CADEBOT L100',
    desc: 'Delivery robot documentation, API reference, deployment guides',
    color: 'brand',
    docs: [
      { name: 'User Manual v3.2', size: '12.4 MB', type: 'PDF' },
      { name: 'Quick Start Guide', size: '3.8 MB', type: 'PDF' },
      { name: 'API Documentation', size: '8.1 MB', type: 'PDF' },
    ],
  },
  {
    name: 'CLEINBOT M79',
    desc: 'Cleaning robot manuals, maintenance schedules, troubleshooting',
    color: 'teal',
    docs: [
      { name: 'User Manual v2.9', size: '15.2 MB', type: 'PDF' },
      { name: 'Maintenance Guide', size: '6.7 MB', type: 'PDF' },
      { name: 'Error Code Reference', size: '2.3 MB', type: 'PDF' },
    ],
  },
  {
    name: 'CRUZR',
    desc: 'Humanoid service robot SDK, configuration guides, use cases',
    color: 'ink',
    docs: [
      { name: 'User Manual v4.1', size: '18.9 MB', type: 'PDF' },
      { name: 'SDK Developer Guide', size: '22.4 MB', type: 'PDF' },
      { name: 'Configuration Manual', size: '9.6 MB', type: 'PDF' },
    ],
  },
]

const faqs = [
  {
    q: 'How do I perform a firmware update on my robot?',
    a: 'Download the latest firmware from the Downloads section. Connect your robot to Wi-Fi and ensure battery is above 50%. Open the UBTECH Control Center app, select "Firmware Update" and choose the downloaded file. Follow on-screen instructions (typically 10–15 minutes). Do not power off during the update.',
  },
  {
    q: 'What is the warranty coverage for UBTECH robots?',
    a: 'All UBTECH Robotics products include a 12-month standard warranty from the date of purchase. Extended warranty up to 36 months is available optionally. Coverage includes manufacturing defects, hardware failures, and software issues. Physical damage from misuse or water damage is excluded.',
  },
  {
    q: 'Can I integrate UBTECH robots with my existing systems?',
    a: 'Yes. UBTECH robots offer a standard REST API (HTTP/JSON) for real-time communication, webhooks for event-driven notifications, and pre-built connectors for SAP, Oracle, Salesforce, and major POS systems. Our SDK supports Python, Java, C++, and Node.js for custom development.',
  },
  {
    q: 'What maintenance does the robot require?',
    a: 'Daily: wipe trays & sensors (~5 min). Weekly: check wheels & charging contacts. Monthly: software updates run automatically via OTA. Annual: professional servicing is included in the warranty. The self-diagnostic system alerts you to any issues in real time.',
  },
  {
    q: 'How long does initial deployment take?',
    a: 'Most deployments take 2–4 hours including map creation and staff training. Our engineers provide on-site setup. Most customers are fully operational within 1 business day. 24/7 remote support is available thereafter.',
  },
]

export default function SupportPage() {
  const { openModal } = useModalStore()
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main className="text-ink">

      {/* ─── HERO ───────────────────────────────────────────── */}
      <section className="relative hero-gradient text-white py-28 overflow-hidden">
        <div className="absolute inset-0 dot-grid-bg opacity-10 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              24/7 Professional Support Available
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">Support Center</h1>
            <p className="text-xl md:text-2xl mb-10 text-white/80 leading-relaxed">
              Technical Documentation, Resources, and Expert Assistance.<br />
              We&apos;re Here to Keep Your Robots Running at Peak Performance.
            </p>
            {/* Search */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for manuals, firmware, FAQs, troubleshooting guides..."
                  className="w-full pl-14 pr-6 py-5 rounded-2xl text-ink text-base focus:outline-none focus:ring-4 focus:ring-white/30"
                />
                <svg className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-ink-subtle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <p className="text-sm text-white/60 mt-3">
                Popular: <a href="#documentation" className="underline hover:text-white transition">Firmware Update</a>
                {' '}•{' '}
                <a href="#documentation" className="underline hover:text-white transition">User Manual</a>
                {' '}•{' '}
                <a href="#faq" className="underline hover:text-white transition">Error Codes</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── QUICK ACCESS ───────────────────────────────────── */}
      <section className="py-16 bg-surface-subtle">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickCards.map((c) => (
              <a key={c.title} href={c.href} className="bg-white rounded-2xl p-7 border border-line card-hover block">
                <div className={`w-14 h-14 bg-gradient-to-br ${c.gradient} rounded-xl flex items-center justify-center mb-5`}>
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={c.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-ink mb-2">{c.title}</h3>
                <p className="text-ink-muted text-sm mb-4">{c.desc}</p>
                <span className="text-brand font-semibold text-sm inline-flex items-center gap-1">
                  {c.linkText} <span>→</span>
                </span>
              </a>
            ))}
            {/* Contact card */}
            <div onClick={openModal} className="hero-gradient rounded-2xl p-7 text-white cursor-pointer card-hover">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Contact Support Team</h3>
              <p className="text-white/70 text-sm mb-4">Get help from our experts</p>
              <span className="font-semibold text-sm inline-flex items-center gap-1">Open Ticket →</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DOCUMENTATION ──────────────────────────────────── */}
      <section id="documentation" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand bg-brand-light px-4 py-1.5 rounded-full">Resources</span>
            <h2 className="text-4xl font-black text-ink">Technical Documentation</h2>
            <p className="text-xl text-ink-muted max-w-3xl mx-auto">Comprehensive guides, manuals, and API documentation for all UBTECH products.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {productDocs.map((prod) => (
              <div key={prod.name} className="bg-surface-subtle rounded-2xl p-7 border border-line hover:border-brand transition">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${prod.color === 'teal' ? 'bg-teal' : prod.color === 'ink' ? 'bg-ink' : 'bg-brand'}`}>
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-ink mb-2">{prod.name}</h3>
                <p className="text-ink-muted text-sm mb-5">{prod.desc}</p>
                <div className="space-y-2">
                  {prod.docs.map((doc) => (
                    <a key={doc.name} href="#" className="flex items-center justify-between p-3.5 bg-white rounded-xl hover:bg-brand-light transition group border border-line">
                      <span className="text-sm font-semibold text-ink">{doc.name}</span>
                      <div className="flex items-center gap-2 text-brand">
                        <span className="text-xs">{doc.type} · {doc.size}</span>
                        <svg className="w-4 h-4 group-hover:translate-y-0.5 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ────────────────────────────────────────────── */}
      <section id="faq" className="py-24 bg-surface-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-teal bg-teal-light px-4 py-1.5 rounded-full">FAQ</span>
            <h2 className="text-4xl font-black text-ink">Frequently Asked Questions</h2>
            <p className="text-xl text-ink-muted max-w-3xl mx-auto">Quick answers to common questions about our products and services.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-line overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-surface-subtle transition"
                >
                  <span className="text-base font-bold text-ink pr-4">{faq.q}</span>
                  <svg className={`w-5 h-5 text-brand flex-shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-ink-muted text-sm leading-relaxed border-t border-line pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-ink-muted mb-4">Can&apos;t find what you&apos;re looking for?</p>
            <button onClick={openModal} className="hero-gradient text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl hover:-translate-y-0.5 transition-all">
              Ask Our Support Team →
            </button>
          </div>
        </div>
      </section>

      {/* ─── 24/7 BANNER ────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24">
        <div className="hero-gradient absolute inset-0" />
        <div className="absolute inset-0 dot-grid-bg opacity-10 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full mb-8">
              <svg className="w-5 h-5 mr-2 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span className="font-bold">24/7 Professional Support Available</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-5">Need Immediate Assistance?</h2>
            <p className="text-xl text-white/75 mb-12">Our global support team is standing by to help you with technical issues, training, or product inquiries.</p>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: 'M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z', title: 'Phone Support', info: 'Average wait: <2 min', contact: '+86 157-xxxx-xxxx' },
                { icon: 'M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z', title: 'Email Support', info: 'Response: <4 hours', contact: 'support@huaxingrobot.com' },
                { icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z', title: 'Live Chat', info: 'Instant messaging', contact: 'Start Chat Now →' },
              ].map((ch) => (
                <div key={ch.title} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition">
                  <svg className="w-10 h-10 text-white mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d={ch.icon} />
                  </svg>
                  <h3 className="text-lg font-bold mb-2 text-white">{ch.title}</h3>
                  <p className="text-white/60 text-sm mb-3">{ch.info}</p>
                  <p className="font-mono text-white font-semibold text-sm">{ch.contact}</p>
                </div>
              ))}
            </div>
            <button onClick={openModal} className="bg-white text-brand px-12 py-5 rounded-xl font-bold text-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
              Submit Support Ticket
            </button>
          </div>
        </div>
      </section>

    </main>
  )
}
