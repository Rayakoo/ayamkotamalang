import Link from 'next/link'
import { notFound } from 'next/navigation'
import { productCategories } from '@/data/products'
import ProductCard from '@/components/ProductCard'

export function generateStaticParams() {
  return productCategories.map((cat) => ({ kategori: cat.id }))
}

export default async function KategoriPage(props: { params: Promise<{ kategori: string }> }) {
  const params = await props.params
  const category = productCategories.find((c) => c.id === params.kategori)

  if (!category) notFound()

  const waMessage = `Halo, saya tertarik dengan produk kategori ${category.name} dari Ayam Kota Malang.`

  return (
    <>
      <section className="relative bg-gradient-to-br from-[#C41E1E] via-[#A01515] to-[#8B0000] py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="hero-circle absolute top-10 right-10 w-48 h-48 border border-white/30 rounded-full" />
          <div className="hero-circle absolute bottom-10 left-10 w-32 h-32 border border-white/30 rounded-full" style={{ animationDelay: '-3s' }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/produk" className="inline-flex items-center gap-1 text-white/70 hover:text-white text-sm mb-4 transition-colors group">
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Semua Produk
          </Link>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-white/70 text-sm font-medium uppercase tracking-widest">{category.products.length} Produk</span>
              <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mt-3 mb-4">{category.name}</h1>
              <p className="text-white/80 text-base sm:text-lg">Tersedia dalam kondisi fresh dan frozen. Kualitas terbaik untuk kebutuhan Anda.</p>
            </div>
            <div className="text-right">
              <a
                href={`https://wa.me/628383200098?text=${encodeURIComponent(waMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#C41E1E] hover:bg-gray-100 font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Pesan Kategori Ini
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FAF5EE] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.products.map((product, i) => (
              <div key={product.id} data-aos="fade-up" data-aos-delay={(i % 3) * 100}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/produk" className="inline-flex items-center gap-1 bg-[#C41E1E] hover:bg-[#8B0000] text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg">
              ← Kembali ke Semua Produk
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
