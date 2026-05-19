'use client'

import Link from 'next/link'
import { productCategories } from '@/data/products'

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          <div data-aos="fade-up">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="w-10 h-10 bg-[#C41E1E] rounded-lg flex items-center justify-center text-white font-heading font-bold text-xs group-hover:bg-[#A01515] transition-colors">
                AKM
              </div>
              <div className="font-heading font-bold text-[#C41E1E] text-sm leading-tight">
                AYAM KOTA MALANG
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Pusat Penjualan Ayam & Unggas Terpercaya
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span>✅</span>
              <span>Halal Certified ID 35110021115531024</span>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <h4 className="font-heading font-bold text-sm text-white mb-4 uppercase tracking-wider">
              Produk
            </h4>
            <ul className="space-y-2.5">
              {productCategories.map((cat, i) => (
                <li key={cat.id} style={{ transitionDelay: `${i * 50}ms` }}>
                  <Link
                    href={`/produk/${cat.id}`}
                    className="text-gray-400 hover:text-[#C41E1E] text-sm transition-colors duration-200"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <h4 className="font-heading font-bold text-sm text-white mb-4 uppercase tracking-wider">
              Informasi
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Tentang Kami', href: '/tentang-kami' },
                { label: 'Produk', href: '/produk' },
                { label: 'Klien Kami', href: '/klien' },
                { label: 'Kontak', href: '/kontak' },
                { label: 'Video', href: '/video' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-[#C41E1E] text-sm transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            <h4 className="font-heading font-bold text-sm text-white mb-4 uppercase tracking-wider">
              Kontak
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:0341351691" className="text-gray-400 hover:text-[#C41E1E] text-sm transition-colors duration-200 flex items-center gap-2 group">
                  <span className="group-hover:scale-110 transition-transform">📞</span> 0341 351-691
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/628383200098"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#C41E1E] text-sm transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="group-hover:scale-110 transition-transform">📱</span> 0838-3200-0098
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/ayam_kotamalang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#C41E1E] text-sm transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="group-hover:scale-110 transition-transform">📷</span> @ayam_kotamalang
                </a>
              </li>
              <li className="text-gray-400 text-sm leading-relaxed">
                <span className="flex items-start gap-2">
                  <span>📍</span> Jl. Kebalen Wetan 53A, Kedungkandang, Kota Malang
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <p className="text-center text-gray-500 text-xs sm:text-sm">
            © 2025 Ayam Kota Malang. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
