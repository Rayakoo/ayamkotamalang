'use client'

import AnimatedCounter from '@/components/AnimatedCounter'

export default function TentangKami() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="relative bg-gradient-to-br from-[#C41E1E] via-[#A01515] to-[#8B0000] py-16 sm:py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="hero-circle absolute top-10 left-10 w-40 h-40 border border-white/30 rounded-full" />
          <div className="hero-circle absolute bottom-10 right-10 w-60 h-60 border border-white/30 rounded-full" style={{ animationDelay: '-3s' }} />
          <div className="hero-circle absolute top-1/2 left-1/3 w-20 h-20 border border-white/30 rounded-full" style={{ animationDelay: '-5s' }} />
          <div className="absolute top-20 right-1/4 w-2 h-2 bg-white/20 rounded-full" />
          <div className="absolute bottom-20 left-1/2 w-3 h-3 bg-white/15 rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-white/70 text-sm font-medium uppercase tracking-widest" data-aos="fade-up">
            Tentang Kami
          </span>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mt-3 mb-4" data-aos="fade-up" data-aos-delay="100">
            Lebih dari 5 Dekade <span className="text-white/90">Melayani Kebutuhan Unggas Malang</span>
          </h1>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Berdiri sejak 1970, kami berkomitmen menyediakan produk ayam dan unggas berkualitas tinggi dengan standar halal dan higienis.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-white py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#C41E1E]/[0.02] rounded-full -mr-40 -mt-40 hero-circle" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div data-aos="fade-right">
              <span className="text-[#C41E1E] font-heading font-bold text-xs sm:text-sm tracking-widest">CERPEN</span>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#1A1A1A] mt-2 mb-6">
                Perjalanan Kami dalam <span className="text-[#C41E1E]">5 Dekade</span>
              </h2>
              <div className="space-y-4 text-[#6B6B6B] text-base leading-relaxed">
                <p>
                  Ayam Kota Malang adalah perusahaan yang bergerak di bidang perdagangan penjualan ayam pedaging hidup dan daging ayam sejak 1970. Berawal dari sebuah peternakan kecil di Malang, kini kami telah berkembang menjadi salah satu supplier unggas terpercaya di Jawa Timur.
                </p>
                <p>
                  Produk kami dipotong dari ayam sehat dengan kualitas terbaik, kesehatan terjamin, dan sesuai syariat Islam. Harga bersaing tanpa menurunkan kualitas menjadi komitmen utama kami.
                </p>
                <p>
                  Dengan pengalaman lebih dari 5 dekade, kami memahami betul kebutuhan pelanggan B2B maupun B2C. Kami melayani hotel, restoran, kafe, dan rumah tangga di Kota Malang dan sekitarnya.
                </p>
              </div>
            </div>
            <div className="relative" data-aos="fade-left">
              <div className="relative rounded-2xl overflow-hidden bg-gray-200 shadow-xl aspect-[4/3]">
                <div className="w-full h-full flex items-center justify-center opacity-50 bg-gray-300">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gray-400 flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <p className="text-gray-500 text-sm font-medium">Foto Perusahaan</p>
                    <p className="text-gray-400 text-xs mt-1">&ldquo;Dari Peternakan ke Meja Anda&rdquo;</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#C41E1E] text-white text-sm font-bold px-5 py-2.5 rounded-lg shadow-lg animate-float">
                55+ Tahun Pengalaman
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#FAF5EE] py-14 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🏆', number: 55, label: 'Tahun Pengalaman', desc: 'Berdiri sejak 1970', suffix: '+' },
              { icon: '🤝', number: 50, label: 'Klien B2B', desc: 'Hotel, restoran & kafe', suffix: '+' },
              { icon: '✅', number: 100, label: 'Halal Certified', desc: 'Sertifikat resmi MUI', suffix: '%' },
              { icon: '❄️', number: 2, label: 'Varian Produk', desc: 'Fresh & Frozen', suffix: '' },
            ].map((s, i) => (
              <div key={s.label} className="bg-white rounded-xl p-6 sm:p-8 text-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1" data-aos="fade-up" data-aos-delay={i * 100}>
                <span className="text-3xl sm:text-4xl">{s.icon}</span>
                <div className="font-heading font-bold text-3xl sm:text-4xl text-[#C41E1E] mt-3">
                  <AnimatedCounter value={s.number} suffix={s.suffix} />
                </div>
                <div className="font-heading font-semibold text-[#1A1A1A] text-sm sm:text-base mt-1">{s.label}</div>
                <div className="text-[#6B6B6B] text-xs sm:text-sm mt-1">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="bg-[#1A1A1A] py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-[#C41E1E] font-heading font-bold text-xs sm:text-sm tracking-widest" data-aos="fade-up">
              VIDEO
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white mt-3" data-aos="fade-up" data-aos-delay="100">
              Lihat Proses Produksi Kami
            </h2>
            <p className="text-gray-400 text-base sm:text-lg mt-3 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              Saksikan bagaimana kami menjaga kualitas dari peternakan hingga ke meja Anda
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {[
              { title: 'Proses Pemotongan Halal', desc: 'Dipotong sesuai syariat Islam oleh tenaga ahli bersertifikat' },
              { title: 'Pengemasan & Distribusi', desc: 'Dikemas secara higienis dan didistribusikan dengan cold chain' },
            ].map((v, i) => (
              <div key={v.title} className="relative group" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="aspect-video bg-gray-800 rounded-xl overflow-hidden flex items-center justify-center group-hover:ring-2 group-hover:ring-[#C41E1E]/50 transition-all duration-300">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#C41E1E]/20 flex items-center justify-center group-hover:bg-[#C41E1E]/30 transition-colors cursor-pointer group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-7 h-7 text-[#C41E1E] ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <p className="text-white font-medium">{v.title}</p>
                    <p className="text-gray-400 text-sm mt-1">{v.desc}</p>
                    <p className="text-gray-500 text-xs mt-2">Video placeholder — ganti dengan embed YouTube</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOOGLE MAPS */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-[#C41E1E] font-heading font-bold text-xs sm:text-sm tracking-widest" data-aos="fade-up">
              LOKASI KAMI
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#1A1A1A] mt-3" data-aos="fade-up" data-aos-delay="100">
              Temukan Kami
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-6" data-aos="fade-right">
              <div className="bg-[#FAF5EE] rounded-xl p-5 sm:p-6 hover:shadow-md transition-shadow">
                <h3 className="font-heading font-bold text-[#1A1A1A] text-lg mb-2">📍 Kantor Pusat</h3>
                <p className="text-[#6B6B6B] text-sm sm:text-base">Jalan Kebalen Wetan 53A, Kedungkandang, Kota Malang</p>
                <a href="https://maps.google.com/?q=Jalan+Kebalen+Wetan+53A+Kedungkandang+Kota+Malang" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[#C41E1E] text-sm font-medium mt-2 hover:underline group">
                  Buka di Google Maps
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
              <div className="bg-[#FAF5EE] rounded-xl p-5 sm:p-6 hover:shadow-md transition-shadow">
                <h3 className="font-heading font-bold text-[#1A1A1A] text-lg mb-2">📍 Kantor Cabang</h3>
                <p className="text-[#6B6B6B] text-sm sm:text-base">Jalan Terusan Agus Salim No. 2 RT 05 RW 10, Temas, Kota Batu</p>
                <a href="https://maps.google.com/?q=Jalan+Terusan+Agus+Salim+No+2+Temas+Kota+Batu" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[#C41E1E] text-sm font-medium mt-2 hover:underline group">
                  Buka di Google Maps
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#6B6B6B] p-4 bg-[#FAF5EE] rounded-xl">
                <span className="text-xl">🕐</span>
                <div>
                  <div className="text-[#6B6B6B] text-xs uppercase tracking-wider font-medium">Jam Operasional</div>
                  <div className="text-[#1A1A1A] font-medium">Senin - Sabtu: 07:00 - 17:00 WIB</div>
                </div>
              </div>
            </div>
            <div className="map-container rounded-xl overflow-hidden shadow-lg h-[350px] sm:h-[400px]" data-aos="fade-left">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.234567!2d112.6317!3d-7.9763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78828ba6c4a2b3%3A0x1234567890abcdef!2sKebalen%20Wetan%2C%20Kedungkandang%2C%20Malang!5e0!3m2!1sid!2sid!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Ayam Kota Malang"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-[#FAF5EE] py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#C41E1E]/5 rounded-full -mb-20 -mr-20 hero-circle" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <span className="text-[#C41E1E] font-heading font-bold text-xs sm:text-sm tracking-widest" data-aos="fade-up">
              NILAI KAMI
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#1A1A1A] mt-3" data-aos="fade-up" data-aos-delay="100">
              Komitmen Kami
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: '📖', title: 'Syariat Islam', desc: 'Semua produk dipotong sesuai syariat Islam yang benar dan bersertifikat halal resmi.' },
              { icon: '⭐', title: 'Kualitas Terbaik', desc: 'Hanya ayam sehat dan berkualitas yang kami pilih untuk pelanggan setia kami.' },
              { icon: '🤝', title: 'Kepercayaan', desc: 'Melayani dengan jujur dan transparan sejak 1970. Kepuasan pelanggan adalah prioritas.' },
            ].map((v, i) => (
              <div key={v.title} className="bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1" data-aos="fade-up" data-aos-delay={i * 100}>
                <span className="text-4xl">{v.icon}</span>
                <h3 className="font-heading font-bold text-[#1A1A1A] text-lg mt-4 mb-2">{v.title}</h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
