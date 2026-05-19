'use client'

import { clientGroups, allClients } from '@/data/clients'
import AnimatedCounter from '@/components/AnimatedCounter'

const count = allClients.length

export default function KlienPage() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="relative bg-gradient-to-br from-[#FAF5EE] to-white py-16 sm:py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.15]">
          <div className="hero-circle absolute top-10 right-10 w-40 h-40 border-2 border-[#C41E1E]/20 rounded-full" />
          <div className="hero-circle absolute bottom-10 left-10 w-60 h-60 border-2 border-[#C41E1E]/20 rounded-full" style={{ animationDelay: '-3s' }} />
          <div className="absolute top-20 left-1/4 w-3 h-3 bg-[#C41E1E]/10 rounded-full" />
          <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-[#C41E1E]/10 rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-[#C41E1E] font-heading font-bold text-xs sm:text-sm tracking-widest" data-aos="fade-up">
            KLIEN KAMI
          </span>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] mt-3 mb-4" data-aos="fade-up" data-aos-delay="100">
            Dipercaya oleh{' '}
            <span className="text-[#C41E1E]">{count}+ Klien</span> Terkemuka
          </h1>
          <p className="text-[#6B6B6B] text-base sm:text-lg max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Kami bangga telah dipercaya oleh berbagai hotel, restoran, dan kafe ternama di Malang Raya
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-gradient-to-r from-[#C41E1E] to-[#8B0000] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            <div data-aos="fade-up">
              <div className="font-heading font-bold text-2xl sm:text-3xl">
                <AnimatedCounter value={count} suffix="+" />
              </div>
              <div className="text-white/70 text-xs sm:text-sm">Total Klien</div>
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
              <div className="font-heading font-bold text-2xl sm:text-3xl">
                <AnimatedCounter value={5} />
              </div>
              <div className="text-white/70 text-xs sm:text-sm">Kategori Usaha</div>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <div className="font-heading font-bold text-2xl sm:text-3xl">
                <AnimatedCounter value={55} suffix="+" />
              </div>
              <div className="text-white/70 text-xs sm:text-sm">Tahun Melayani</div>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <div className="font-heading font-bold text-2xl sm:text-3xl">
                <AnimatedCounter value={4.9} prefix="★ " />
              </div>
              <div className="text-white/70 text-xs sm:text-sm">Rating Kepuasan</div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT GROUPS */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {clientGroups.map((group, groupIdx) => (
            <div key={group.category} className="mb-14 sm:mb-16 last:mb-0" data-aos="fade-up">
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <div className="w-1 h-8 bg-[#C41E1E] rounded-full" />
                <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#1A1A1A]">
                  {group.category}
                </h2>
                <span className="text-[#6B6B6B] text-sm">({group.clients.length})</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {group.clients.map((client, i) => (
                  <div key={client} data-aos="fade-up" data-aos-delay={(i % 4) * 50}>
                    <ClientLogo name={client} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-[#FAF5EE] py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-40 h-40 bg-[#C41E1E]/5 rounded-full -mt-20 -ml-20 hero-circle" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <span className="text-[#C41E1E] font-heading font-bold text-xs sm:text-sm tracking-widest" data-aos="fade-up">
              TESTIMONIAL
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#1A1A1A] mt-3" data-aos="fade-up" data-aos-delay="100">
              Apa Kata Klien Kami
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { quote: 'Kualitas ayam konsisten, pengiriman tepat waktu. Sudah 5 tahun menjadi supplier andalan kami.', name: 'Harris Hotel Malang', role: 'F&B Manager' },
              { quote: 'Produk halal terpercaya, harga bersaing. Sangat membantu operasional restoran kami.', name: 'May Star Restaurant', role: 'Owner' },
              { quote: 'Pelayanan ramah, respon cepat. Free delivery sangat membantu untuk kafe kami.', name: 'Hindia Koffie', role: 'Head Barista' },
            ].map((t, i) => (
              <div key={t.name} className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all hover:-translate-y-1" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#6B6B6B] text-sm leading-relaxed italic mb-4">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="font-heading font-bold text-[#1A1A1A] text-sm">{t.name}</p>
                  <p className="text-[#6B6B6B] text-xs">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function ClientLogo({ name }: { name: string }) {
  return (
    <div className="bg-[#F5F5F5] hover:bg-[#C41E1E] group rounded-xl p-4 sm:p-6 flex items-center justify-center h-20 sm:h-24 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-default">
      <div className="flex items-center justify-center w-full h-full">
        <span className="text-sm sm:text-base font-medium text-[#6B6B6B] group-hover:text-white transition-colors text-center leading-tight opacity-50 group-hover:opacity-100">
          {name}
        </span>
      </div>
    </div>
  )
}
