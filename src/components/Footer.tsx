'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useModalStore } from '@/store/modal'

export default function Footer() {
  const { openModal } = useModalStore()
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: '#1A1A1A', color: '#D1D5DB' }} className="pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">

          {/* Company Info — 白色 Logo，用于深色背景 */}
          <div>
            <Image
              src="/logo-white.png"
              alt="AOMA FUTURE"
              width={240}
              height={70}
              className="mb-4 h-14 w-auto object-contain"
            />
            <p className="text-sm mb-4 leading-relaxed">
              AI-powered service robots for hospitality, healthcare, and commercial environments. Trusted globally.
            </p>
          </div>

          {/* Products Menu */}
          <div>
            <h4 className="text-white font-bold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products/cadebot-l100" className="hover:text-teal transition-colors">CADEBOT L100</Link></li>
              <li><Link href="/products/cleinbot-m79" className="hover:text-teal transition-colors">CLEINBOT M79</Link></li>
              <li><Link href="/products/cleinbot-cc201" className="hover:text-teal transition-colors">CLEINBOT CC201</Link></li>
              <li><Link href="/products/cruzr" className="hover:text-teal transition-colors">CRUZR</Link></li>
            </ul>
          </div>

          {/* Solutions Menu */}
          <div>
            <h4 className="text-white font-bold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/solutions" className="hover:text-teal transition-colors">Smart Catering</Link></li>
              <li><Link href="/solutions" className="hover:text-teal transition-colors">Smart Cleaning</Link></li>
              <li><Link href="/solutions" className="hover:text-teal transition-colors">Smart Exhibition</Link></li>
              <li><Link href="/solutions" className="hover:text-teal transition-colors">Smart Logistics</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <a href="mailto:info@huaxingrobot.com" className="hover:text-teal transition-colors">info@huaxingrobot.com</a>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <span>Shenzhen, China</span>
              </li>
            </ul>
            <button
              onClick={openModal}
              className="mt-6 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-colors"
              style={{ background: '#0066FF' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#0052CC')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#0066FF')}
            >
              Request Demo
            </button>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {year} AOMA FUTURE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
