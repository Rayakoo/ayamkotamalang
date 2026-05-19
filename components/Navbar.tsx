'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { productCategories } from '@/data/products'

const navLinks = [
  { href: '/', label: 'Beranda' },
  { href: '/tentang-kami', label: 'Tentang Kami' },
  { href: '/produk', label: 'Produk', hasDropdown: true },
  { href: '/klien', label: 'Klien Kami' },
  { href: '/kontak', label: 'Kontak' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const dropdownRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setMobileOpen(false)
      setDropdownOpen(false)
    }, 0)
    return () => clearTimeout(timer)
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setDropdownOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <div className={`bg-white transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[70px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#C41E1E] rounded-lg flex items-center justify-center text-white font-heading font-bold text-xs sm:text-sm leading-tight">AKM</div>
          <div className="hidden sm:block">
            <div className="font-heading font-bold text-[#C41E1E] text-sm leading-tight">AYAM KOTA MALANG</div>
            <div className="text-[10px] text-[#6B6B6B] leading-tight">Pusat Penjualan Ayam & Unggas</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <li key={link.href} ref={dropdownRef} className="relative list-none">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`px-3 xl:px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 flex items-center gap-1 ${isActive('/produk') ? 'text-[#C41E1E] bg-red-50' : 'text-[#1A1A1A] hover:text-[#C41E1E] hover:bg-red-50'}`}
                >
                  Produk
                  <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                    {productCategories.map((cat) => (
                      <Link key={cat.id} href={`/produk/${cat.id}`} onClick={() => setDropdownOpen(false)}
                        className="block w-full text-left px-4 py-2.5 text-sm text-[#1A1A1A] hover:bg-red-50 hover:text-[#C41E1E] transition-colors duration-150"
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ) : (
              <Link key={link.href} href={link.href}
                className={`px-3 xl:px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${isActive(link.href) ? 'text-[#C41E1E] bg-red-50' : 'text-[#1A1A1A] hover:text-[#C41E1E] hover:bg-red-50'}`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <a href="https://wa.me/628383200098?text=Halo%2C%20saya%20ingin%20memesan%20produk%20Ayam%20Kota%20Malang" target="_blank" rel="noopener noreferrer"
            className="hidden sm:inline-flex bg-[#C41E1E] hover:bg-[#8B0000] text-white font-medium text-sm py-2.5 px-5 rounded-lg transition-colors duration-300"
          >
            Pesan Sekarang
          </a>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors" aria-label="Menu">
            <svg className="w-6 h-6 text-[#1A1A1A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 lg:hidden ${mobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileOpen(false)}
      />
      <div className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-2xl transform transition-transform duration-300 lg:hidden overflow-y-auto ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#C41E1E] rounded-lg flex items-center justify-center text-white font-heading font-bold text-xs">AKM</div>
            <div>
              <div className="font-heading font-bold text-[#C41E1E] text-sm leading-tight">AYAM KOTA MALANG</div>
              <div className="text-[10px] text-[#6B6B6B] leading-tight">Pusat Penjualan Ayam & Unggas</div>
            </div>
          </div>
        </div>
        <div className="p-4 space-y-1">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.href}>
                <button onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-full flex items-center justify-between px-3 py-3 text-sm font-medium text-[#1A1A1A] hover:bg-red-50 hover:text-[#C41E1E] rounded-lg transition-colors"
                >
                  Produk
                  <svg className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {dropdownOpen && (
                  <div className="ml-3 space-y-1 pb-2">
                    <Link href="/produk" onClick={() => setMobileOpen(false)}
                      className="block px-3 py-2 text-sm font-medium text-[#C41E1E] hover:bg-red-50 rounded-lg transition-colors"
                    >
                      Semua Produk
                    </Link>
                    {productCategories.map((cat) => (
                      <Link key={cat.id} href={`/produk/${cat.id}`} onClick={() => setMobileOpen(false)}
                        className="block px-3 py-2 text-sm text-[#6B6B6B] hover:bg-red-50 hover:text-[#C41E1E] rounded-lg transition-colors"
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
                className={`block w-full text-left px-3 py-3 text-sm font-medium rounded-lg transition-colors ${isActive(link.href) ? 'text-[#C41E1E] bg-red-50' : 'text-[#1A1A1A] hover:bg-red-50 hover:text-[#C41E1E]'}`}
              >
                {link.label}
              </Link>
            )
          )}
          <div className="pt-3">
            <a href="https://wa.me/628383200098?text=Halo%2C%20saya%20ingin%20memesan%20produk%20Ayam%20Kota%20Malang" target="_blank" rel="noopener noreferrer"
              className="block w-full text-center bg-[#C41E1E] hover:bg-[#8B0000] text-white font-medium py-3 px-4 rounded-lg transition-colors"
            >
              Pesan Sekarang
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
