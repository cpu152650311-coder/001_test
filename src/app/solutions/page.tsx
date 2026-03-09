'use client'
import { useModalStore } from '@/store/modal'
export default function SolutionsPage() {
  const { openModal } = useModalStore()
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F8FAFB]">
      <div className="text-center space-y-4 p-8">
        <div className="inline-block text-white px-4 py-2 rounded-full text-sm font-bold mb-4" style={{ background: 'linear-gradient(135deg, #0066FF, #00D4AA)' }}>Coming Soon</div>
        <h1 className="text-4xl font-black text-gray-800">Solutions</h1>
        <p className="text-gray-500 max-w-md mx-auto">This page is under construction. Meanwhile, feel free to get in touch.</p>
        <button onClick={openModal} className="mt-4 bg-[#0066FF] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#0052CC] transition-colors">Get a Quote →</button>
      </div>
    </main>
  )
}
