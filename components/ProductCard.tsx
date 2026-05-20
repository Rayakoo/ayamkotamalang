'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { Product } from '@/data/products'

export default function ProductCard({ product }: { product: Product }) {
  const [imgError, setImgError] = useState(false)
  const waMessage = `Halo, saya tertarik dengan produk ${product.name} (${product.nameId}) dari Ayam Kota Malang.`
  const waUrl = `https://wa.me/628383200098?text=${encodeURIComponent(waMessage)}`

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.03] group">
      <Link href={`/produk/${product.categoryId}`} className="block relative h-40 sm:h-44 group-hover:h-52 overflow-hidden bg-gray-100 transition-all duration-500">
        {imgError ? (
          <div className="w-full h-full flex items-center justify-center opacity-50 bg-gray-200">
            <div className="text-center p-4">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gray-400 flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-gray-500 text-xs font-medium">{product.name}</p>
              <p className="text-gray-400 text-[10px] italic">{product.nameId}</p>
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
        {product.isBestSeller && (
          <div className="absolute top-3 left-3 bg-[#C41E1E] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            BEST SELLER
          </div>
        )}
      </Link>
      <div className="p-4 sm:p-5 group-hover:pt-5 sm:group-hover:pt-6 transition-all duration-500">
        <Link href={`/produk/${product.categoryId}`}>
          <h3 className="font-heading font-bold text-base sm:text-lg text-[#1A1A1A] hover:text-[#C41E1E] transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-[#6B6B6B] italic text-sm mb-2">{product.nameId}</p>
        <p className="text-[#6B6B6B] text-sm leading-relaxed mb-4">{product.description}</p>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-[#C41E1E] hover:bg-[#8B0000] text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-300 text-sm"
        >
          Pesan via WhatsApp
        </a>
      </div>
    </div>
  )
}
