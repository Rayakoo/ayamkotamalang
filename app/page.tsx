'use client'

import Link from 'next/link'
import { useState } from 'react'
import { allProducts, type Product } from '@/data/products'
import AnimatedCounter from '@/components/AnimatedCounter'

const featuredProducts = allProducts.filter((p) => p.isBestSeller).slice(0, 6)

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[85vh] bg-[#FAF5EE] flex items-center overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#C41E1E]/5 rounded-bl-[100px] hidden lg:block" />
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-[#C41E1E]/10 rounded-full hero-circle" />
        <div className="absolute bottom-20 right-10 w-32 h-32 border-2 border-[#C41E1E]/10 rounded-full hero-circle" style={{ animationDelay: '-3s' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <span className="inline-block bg-[#C41E1E]/10 text-[#C41E1E] text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
                ✅ Halal Certified · Berdiri Sejak 1970
              </span>
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#1A1A1A] leading-[1.1] mb-5">
                Supplier Ayam Segar & Unggas{' '}
                <span className="text-[#C41E1E]">Terpercaya</span>
              </h1>
              <p className="text-[#6B6B6B] text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
                Melayani kebutuhan hotel, restoran, kafe, dan rumah tangga. Produk sehat,
                bersih, dan sesuai syariat. Free delivery Kota Malang.
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <Link
                  href="/produk"
                  className="bg-[#C41E1E] hover:bg-[#8B0000] text-white font-semibold text-sm sm:text-base py-3.5 px-7 sm:px-9 rounded-xl transition-all duration-300 shadow-lg shadow-red-200 hover:shadow-xl hover:shadow-red-300 hover:-translate-y-0.5"
                >
                  Lihat Katalog Produk
                </Link>
                <a
                  href="https://wa.me/628383200098?text=Halo%2C%20saya%20ingin%20memesan%20produk%20Ayam%20Kota%20Malang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-[#C41E1E] text-[#C41E1E] hover:bg-[#C41E1E] hover:text-white font-semibold text-sm sm:text-base py-3.5 px-7 sm:px-9 rounded-xl transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Hubungi Kami
                </a>
              </div>
            </div>
            <div className="relative" data-aos="fade-left">
              <div className="relative rounded-2xl overflow-hidden bg-gray-200 shadow-2xl aspect-[4/3] group">
                <div className="w-full h-full flex items-center justify-center opacity-50 bg-gray-300">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gray-400 flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-gray-500 text-sm font-medium">Hero Image</p>
                    <p className="text-gray-400 text-xs mt-1">/assets/hero-chicken.png</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 bg-[#C41E1E] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg rotate-6 animate-float">
                BEST SELLER
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-xl p-3 sm:p-4 flex items-center gap-2 max-w-[200px] animate-float" style={{ animationDelay: '-1.5s' }}>
                <span className="text-yellow-400 text-lg">⭐</span>
                <span className="text-xs sm:text-sm text-[#1A1A1A] font-medium">
                  Dipercaya 50+ klien hotel & restoran
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* STATS BAR */}
      <section className="bg-gradient-to-r from-[#C41E1E] to-[#8B0000] py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {[
              { number: 55, label: 'Tahun Pengalaman', suffix: '+' },
              { number: 50, label: 'Klien B2B', suffix: '+' },
              { number: 100, label: 'Halal Certified', suffix: '%' },
              { number: 4.9, label: 'Rating Kepuasan', prefix: '★ ' },
            ].map((s, i) => (
              <div key={s.label} data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="font-heading font-bold text-2xl sm:text-3xl">
                  <AnimatedCounter value={s.number} suffix={s.suffix} prefix={s.prefix || ''} />
                </div>
                <div className="text-white/70 text-xs sm:text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-14">
            <div data-aos="fade-right">
              <span className="text-[#C41E1E] font-heading font-bold text-xs sm:text-sm tracking-widest">
                BEST SELLER
              </span>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#1A1A1A] mt-3">
                Produk Paling Laris
              </h2>
            </div>
            <Link
              href="/produk"
              className="mt-4 sm:mt-0 inline-flex items-center gap-1 text-[#C41E1E] hover:text-[#8B0000] font-medium text-sm transition-colors group"
              data-aos="fade-left"
            >
              Lihat Semua Produk
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product, i) => (
              <div key={product.id} data-aos="fade-up" data-aos-delay={(i % 3) * 100}>
                <ProductCardHome product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="bg-[#FAF5EE] py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#C41E1E]/5 rounded-full -mr-20 -mt-20 hero-circle" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#C41E1E]/5 rounded-full -ml-20 -mb-20 hero-circle" style={{ animationDelay: '-4s' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10" data-aos="fade-up">
            <span className="text-[#C41E1E] font-heading font-bold text-xs sm:text-sm tracking-widest">MENGAPA MEMILIH KAMI</span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#1A1A1A] mt-3">Kenapa Harus Ayam Kota Malang?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8 text-[#C41E1E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: 'Halal Certified',
                desc: 'Bersertifikat halal resmi. Semua produk dipotong sesuai syariat Islam.',
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-[#C41E1E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ),
                title: 'Kualitas Terjamin',
                desc: 'Dipotong dari ayam sehat pilihan. Higienis, fresh & frozen tersedia.',
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-[#C41E1E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                  </svg>
                ),
                title: 'Free Delivery',
                desc: 'Pengiriman gratis ke seluruh Kota Malang. Juga melayani Kota Batu.',
              },
            ].map((card, i) => (
              <div
                key={card.title}
                className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="w-14 h-14 bg-[#C41E1E]/10 rounded-xl flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <h3 className="font-heading font-bold text-[#1A1A1A] text-lg mb-2">{card.title}</h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-gradient-to-r from-[#C41E1E] to-[#8B0000] py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-40 h-40 border border-white rounded-full hero-circle" />
          <div className="absolute bottom-10 right-10 w-60 h-60 border border-white rounded-full hero-circle" style={{ animationDelay: '-2s' }} />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white mb-4" data-aos="fade-up">
            Siap Melayani Kebutuhan Unggas Anda?
          </h2>
          <p className="text-white/80 text-base sm:text-lg mb-8" data-aos="fade-up" data-aos-delay="100">
            Hubungi kami sekarang untuk pemesanan dan konsultasi gratis
          </p>
          <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
            <a
              href="https://wa.me/628383200098?text=Halo%2C%20saya%20ingin%20memesan%20produk%20Ayam%20Kota%20Malang"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#C41E1E] hover:bg-gray-100 font-semibold py-3.5 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Pesan via WhatsApp
            </a>
            <Link
              href="/kontak"
              className="border-2 border-white text-white hover:bg-white hover:text-[#C41E1E] font-semibold py-3.5 px-8 rounded-xl transition-all duration-300"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

function ProductCardHome({ product }: { product: Product }) {
  const [imgError, setImgError] = useState(false)
  const waUrl = `https://wa.me/628383200098?text=${encodeURIComponent(`Halo, saya tertarik dengan produk ${product.name} (${product.nameId}) dari Ayam Kota Malang.`)}`

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.03] group">
      <div className="relative h-40 group-hover:h-52 overflow-hidden bg-gray-100 transition-all duration-500">
        {imgError ? (
          <div className="w-full h-full flex items-center justify-center opacity-50 bg-gray-200">
            <div className="text-center p-4">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gray-400 flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-gray-500 text-xs font-medium">{product.name}</p>
            </div>
          </div>
        ) : (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-all duration-500"
            onError={() => setImgError(true)}
          />
        )}
      </div>
      <div className="p-4 group-hover:pt-5 transition-all duration-500">
        <h3 className="font-heading font-bold text-[#1A1A1A]">{product.name}</h3>
        <p className="text-[#6B6B6B] italic text-xs mb-2">{product.nameId}</p>
        <p className="text-[#6B6B6B] text-xs leading-relaxed mb-3 line-clamp-2">{product.description}</p>
        <a href={waUrl} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-[#C41E1E] hover:bg-[#8B0000] text-white font-medium py-2 rounded-lg transition-colors text-xs">
          Pesan via WhatsApp
        </a>
      </div>
    </div>
  )
}
