'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { productCategories, allProducts, filterTabs } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import ProductSkeleton from '@/components/ProductSkeleton'

export default function ProdukPage() {
  const [activeTab, setActiveTab] = useState('all')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500)
    return () => clearTimeout(timer)
  }, [])

  const filteredProducts = useMemo(() => {
    if (activeTab === 'all') return allProducts
    return allProducts.filter((p) => p.categoryId === activeTab)
  }, [activeTab])

  const currentCategory = activeTab === 'all'
    ? null
    : productCategories.find((c) => c.id === activeTab)

  return (
    <>
      {/* PAGE HEADER */}
      <section className="relative bg-gradient-to-br from-[#C41E1E] to-[#8B0000] py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 border border-white rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 border border-white rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-white/70 text-sm font-medium uppercase tracking-widest" data-aos="fade-up">
            Produk Kami
          </span>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mt-3 mb-4" data-aos="fade-up">
            {currentCategory ? currentCategory.name : 'Pilihan Lengkap Ayam & Unggas Segar'}
          </h1>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto" data-aos="fade-up">
            {currentCategory
              ? `${currentCategory.products.length} produk tersedia — Fresh & Frozen`
              : 'Tersedia dalam kondisi fresh maupun frozen, berbagai ukuran dan potongan'
            }
          </p>
        </div>
      </section>

      {/* FILTER + GRID */}
      <section className="bg-[#FAF5EE] py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 mb-10" data-aos="fade-up">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-[#C41E1E] text-white shadow-md'
                    : 'bg-white text-[#1A1A1A] border border-gray-200 hover:border-[#C41E1E] hover:text-[#C41E1E]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {loading && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <ProductSkeleton key={i} />
              ))}
            </div>
          )}

          {!loading && activeTab === 'all' && (
            <div className="space-y-14">
              {productCategories.map((cat) => {
                const items = allProducts.filter((p) => p.categoryId === cat.id)
                if (items.length === 0) return null
                return (
                  <div key={cat.id}>
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#1A1A1A]">{cat.name}</h2>
                        <p className="text-[#6B6B6B] text-sm">{items.length} produk tersedia</p>
                      </div>
                      <Link
                        href={`/produk/${cat.id}`}
                        className="text-[#C41E1E] hover:text-[#8B0000] text-sm font-medium transition-colors"
                      >
                        Lihat Semua →
                      </Link>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {items.slice(0, 3).map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                    {items.length > 3 && (
                      <div className="text-center mt-6">
                        <Link
                          href={`/produk/${cat.id}`}
                          className="inline-flex items-center gap-1 text-[#C41E1E] hover:text-[#8B0000] font-medium text-sm transition-colors"
                        >
                          Lihat {items.length - 3} produk lainnya →
                        </Link>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          )}

          {!loading && activeTab !== 'all' && (
            <>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              {currentCategory && (
                <div className="text-center mt-10">
                  <Link
                    href="/produk"
                    className="inline-flex items-center gap-1 text-[#C41E1E] hover:text-[#8B0000] font-medium text-sm transition-colors"
                  >
                    ← Kembali ke Semua Produk
                  </Link>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  )
}
