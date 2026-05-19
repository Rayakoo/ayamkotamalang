'use client'

import { useEffect, useState } from 'react'

export default function PromoBar() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const dismissed = localStorage.getItem('promoDismissed')
    if (dismissed === 'true') {
      const timer = setTimeout(() => setVisible(false), 0)
      return () => clearTimeout(timer)
    }
  }, [])

  const dismiss = () => {
    setVisible(false)
    localStorage.setItem('promoDismissed', 'true')
  }

  if (!visible) return null

  return (
    <div className="bg-[#C41E1E] h-10 flex items-center justify-center px-4 relative">
      <div className="flex items-center gap-1 sm:gap-3 text-white text-xs sm:text-[13px] truncate max-w-[90vw]">
        <span className="hidden sm:inline">🚚 FREE DELIVERY untuk wilayah Kota Malang!</span>
        <span className="sm:hidden">🚚 Free Delivery Malang</span>
        <span className="hidden md:inline">|</span>
        <span className="hidden md:inline">✅ Halal Certified ID 35110021115531024</span>
        <span className="hidden sm:inline">|</span>
        <a href="tel:0341351691" className="hover:underline whitespace-nowrap">
          📞 0341 351-691
        </a>
      </div>
      <button
        onClick={dismiss}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-lg leading-none w-6 h-6 flex items-center justify-center"
        aria-label="Tutup promo"
      >
        ×
      </button>
    </div>
  )
}
