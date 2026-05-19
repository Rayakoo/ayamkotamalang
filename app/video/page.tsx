'use client'

import { useState } from 'react'

export default function VideoPage() {
  const [activeFilter, setActiveFilter] = useState('Semua')

  const videos = [
    {
      title: 'Proses Pemotongan Halal',
      desc: 'Saksikan proses pemotongan ayam sesuai syariat Islam yang dilakukan oleh tenaga ahli bersertifikat.',
      category: 'Produksi',
    },
    {
      title: 'Pengemasan & Cold Chain',
      desc: 'Bagaimana kami menjaga kesegaran produk dengan sistem cold chain dari rumah potong hingga ke tangan Anda.',
      category: 'Produksi',
    },
    {
      title: 'Tour Fasilitas Kami',
      desc: 'Lihat langsung fasilitas pemotongan dan pengemasan modern yang kami miliki.',
      category: 'Fasilitas',
    },
    {
      title: 'Testimoni Pelanggan',
      desc: 'Dengar langsung pengalaman pelanggan setia yang telah menggunakan produk Ayam Kota Malang.',
      category: 'Testimoni',
    },
    {
      title: 'Produk Unggulan',
      desc: 'Pengenalan berbagai produk unggulan mulai dari whole chicken hingga fillet cuts.',
      category: 'Produk',
    },
    {
      title: 'Tips Memilih Ayam Segar',
      desc: 'Tips memilih ayam segar dan berkualitas baik dari ahli kami.',
      category: 'Edukasi',
    },
  ]

  const categories = ['Semua', 'Produksi', 'Fasilitas', 'Testimoni', 'Produk', 'Edukasi']
  const filteredVideos = activeFilter === 'Semua' ? videos : videos.filter((v) => v.category === activeFilter)

  return (
    <>
      {/* PAGE HEADER */}
      <section className="relative bg-gradient-to-b from-[#C41E1E] via-[#A01515] to-[#8B0000] py-16 sm:py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="hero-circle absolute top-10 right-10 w-40 h-40 border border-white/30 rounded-full" />
          <div className="hero-circle absolute bottom-10 left-10 w-60 h-60 border border-white/30 rounded-full" style={{ animationDelay: '-3s' }} />
          <div className="hero-circle absolute top-1/3 right-1/4 w-20 h-20 border border-white/30 rounded-full" style={{ animationDelay: '-5s' }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-white/70 text-sm font-medium uppercase tracking-widest" data-aos="fade-up">
            Video
          </span>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mt-3 mb-4" data-aos="fade-up" data-aos-delay="100">
            Galeri Video
          </h1>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Tonton berbagai video tentang proses produksi, fasilitas, dan produk Ayam Kota Malang
          </p>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="bg-[#FAF5EE] pt-8 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2" data-aos="fade-up">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  activeFilter === cat
                    ? 'bg-[#C41E1E] text-white shadow-md'
                    : 'bg-white text-[#1A1A1A] border border-gray-200 hover:border-[#C41E1E] hover:text-[#C41E1E] hover:shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO GRID */}
      <section className="bg-[#FAF5EE] py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredVideos.length === 0 ? (
            <div className="text-center py-16" data-aos="fade-up">
              <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <p className="text-gray-400 text-base">Belum ada video untuk kategori ini</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredVideos.map((v, i) => (
                <div key={v.title} className="group cursor-pointer" data-aos="fade-up" data-aos-delay={(i % 3) * 100}>
                  <div className="aspect-video bg-gray-800 rounded-xl overflow-hidden relative flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:ring-2 group-hover:ring-[#C41E1E]/50">
                    <div className="text-center p-6">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#C41E1E]/20 flex items-center justify-center group-hover:bg-[#C41E1E]/40 transition-all group-hover:scale-110 duration-300">
                        <svg className="w-7 h-7 text-[#C41E1E] ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <span className="inline-block bg-[#C41E1E]/80 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full mb-2">
                        {v.category}
                      </span>
                      <p className="text-white text-sm font-medium">{v.title}</p>
                      <p className="text-gray-400 text-xs mt-2">Ganti dengan embed YouTube/Vimeo</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                  </div>
                  <div className="mt-3">
                    <h3 className="font-heading font-semibold text-[#1A1A1A] text-sm sm:text-base group-hover:text-[#C41E1E] transition-colors">
                      {v.title}
                    </h3>
                    <p className="text-[#6B6B6B] text-xs sm:text-sm mt-1 line-clamp-2">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-[#1A1A1A] py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white rounded-full" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-4" data-aos="fade-up">
            Ingin Tahu Lebih Lanjut?
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mb-8" data-aos="fade-up" data-aos-delay="100">
            Hubungi kami untuk informasi lebih detail tentang produk dan layanan
          </p>
          <a
            href="https://wa.me/628383200098?text=Halo%2C%20saya%20ingin%20tahu%20lebih%20lanjut%20tentang%20produk%20Ayam%20Kota%20Malang"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C41E1E] hover:bg-[#8B0000] text-white font-semibold py-3.5 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Hubungi via WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}
