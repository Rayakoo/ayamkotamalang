'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function KontakPage() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [activeMap, setActiveMap] = useState<'pusat' | 'cabang'>('pusat')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = `Halo Ayam Kota Malang,\n\nNama: ${form.name}\nNo. Telepon: ${form.phone}\nPesanan: ${form.message}\n\nMohon informasi lebih lanjut. Terima kasih.`
    window.open(`https://wa.me/628383200098?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <>
      {/* PAGE HEADER */}
      <section className="relative bg-gradient-to-br from-[#C41E1E] via-[#A01515] to-[#8B0000] py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="hero-circle absolute top-20 left-20 w-60 h-60 border border-white/30 rounded-full" />
          <div className="hero-circle absolute bottom-10 right-10 w-40 h-40 border border-white/30 rounded-full" style={{ animationDelay: '-2s' }} />
          <div className="hero-circle absolute top-1/2 right-1/3 w-24 h-24 border border-white/30 rounded-full" style={{ animationDelay: '-4s' }} />
          <div className="absolute top-40 right-40 w-3 h-3 bg-white/20 rounded-full" />
          <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-white/20 rounded-full" />
          <div className="absolute top-60 left-1/2 w-4 h-4 bg-white/10 rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-white/70 text-sm font-medium uppercase tracking-widest" data-aos="fade-up">
            Kontak
          </span>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mt-3 mb-4" data-aos="fade-up" data-aos-delay="100">
            Siap Melayani Anda
          </h1>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Hubungi kami untuk pemesanan, konsultasi, atau informasi lebih lanjut
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8" data-aos="fade-up" data-aos-delay="300">
            <a
              href="https://wa.me/628383200098"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#C41E1E] hover:bg-gray-100 font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat WhatsApp
            </a>
            <a
              href="tel:0341351691"
              className="inline-flex items-center gap-2 border-2 border-white/50 text-white hover:bg-white/10 font-semibold py-3 px-6 rounded-xl transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Telepon
            </a>
          </div>
        </div>
      </section>

      {/* INFO CARDS + MAP */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
            {/* INFO */}
            <div className="lg:col-span-2 space-y-6" data-aos="fade-right">
              <div className="bg-[#FAF5EE] rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#1A1A1A] mb-6 flex items-center gap-2">
                  <span className="w-8 h-1 bg-[#C41E1E] rounded-full inline-block" />
                  Info Kontak
                </h2>
                <div className="space-y-5">
                  <a href="tel:0341351691" className="flex items-center gap-4 group p-3 -mx-3 rounded-xl hover:bg-white/80 transition-colors">
                    <div className="w-12 h-12 bg-[#C41E1E]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#C41E1E]/20 transition-colors">
                      <svg className="w-5 h-5 text-[#C41E1E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[#6B6B6B] text-xs uppercase tracking-wider font-medium">Telepon</div>
                      <div className="text-[#1A1A1A] font-medium group-hover:text-[#C41E1E] transition-colors">0341 351-691</div>
                    </div>
                  </a>
                  <a href="https://wa.me/628383200098" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group p-3 -mx-3 rounded-xl hover:bg-white/80 transition-colors">
                    <div className="w-12 h-12 bg-[#C41E1E]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#C41E1E]/20 transition-colors">
                      <svg className="w-5 h-5 text-[#C41E1E]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[#6B6B6B] text-xs uppercase tracking-wider font-medium">WhatsApp</div>
                      <div className="text-[#1A1A1A] font-medium group-hover:text-[#C41E1E] transition-colors">0838-3200-0098</div>
                    </div>
                  </a>
                  <a href="https://instagram.com/ayam_kotamalang" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group p-3 -mx-3 rounded-xl hover:bg-white/80 transition-colors">
                    <div className="w-12 h-12 bg-[#C41E1E]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#C41E1E]/20 transition-colors">
                      <svg className="w-5 h-5 text-[#C41E1E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth={1.5} />
                        <circle cx="12" cy="12" r="5" strokeWidth={1.5} />
                        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[#6B6B6B] text-xs uppercase tracking-wider font-medium">Instagram</div>
                      <div className="text-[#1A1A1A] font-medium group-hover:text-[#C41E1E] transition-colors">@ayam_kotamalang</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-[#FAF5EE] rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="font-heading font-bold text-[#1A1A1A] mb-5 flex items-center gap-2">
                  <span className="text-[#C41E1E]">📍</span> Alamat
                </h3>
                <div className="space-y-5">
                  <button
                    onClick={() => setActiveMap('pusat')}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-200 ${
                      activeMap === 'pusat'
                        ? 'bg-[#C41E1E]/10 ring-2 ring-[#C41E1E]/30'
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                  >
                    <p className="font-semibold text-sm text-[#1A1A1A]">🏢 Kantor Pusat</p>
                    <p className="text-[#6B6B6B] text-sm mt-1">Jalan Kebalen Wetan 53A, Kedungkandang, Kota Malang</p>
                  </button>
                  <button
                    onClick={() => setActiveMap('cabang')}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-200 ${
                      activeMap === 'cabang'
                        ? 'bg-[#C41E1E]/10 ring-2 ring-[#C41E1E]/30'
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                  >
                    <p className="font-semibold text-sm text-[#1A1A1A]">🏪 Kantor Cabang</p>
                    <p className="text-[#6B6B6B] text-sm mt-1">Jalan Terusan Agus Salim No. 2, Temas, Kota Batu</p>
                  </button>
                  <div className="flex items-center gap-3 text-sm text-[#6B6B6B] pt-3 border-t border-gray-200">
                    <div className="w-10 h-10 bg-[#C41E1E]/10 rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-[#C41E1E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6l4 2" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[#6B6B6B] text-xs uppercase tracking-wider font-medium">Jam Operasional</div>
                      <div className="text-[#1A1A1A] font-medium">Senin - Sabtu: 07:00 - 17:00 WIB</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FORM & MAP */}
            <div className="lg:col-span-3 space-y-8">
              {/* MAP SECTION */}
              <div data-aos="fade-left">
                <div className="bg-[#FAF5EE] rounded-2xl p-1 sm:p-2 shadow-sm">
                  <div className="flex gap-1 mb-2 px-3 pt-3">
                    <button
                      onClick={() => setActiveMap('pusat')}
                      className={`px-4 py-2 text-xs font-medium rounded-lg transition-all duration-200 ${
                        activeMap === 'pusat'
                          ? 'bg-[#C41E1E] text-white shadow-md'
                          : 'bg-white text-[#6B6B6B] hover:text-[#C41E1E]'
                      }`}
                    >
                      🏢 Kantor Pusat
                    </button>
                    <button
                      onClick={() => setActiveMap('cabang')}
                      className={`px-4 py-2 text-xs font-medium rounded-lg transition-all duration-200 ${
                        activeMap === 'cabang'
                          ? 'bg-[#C41E1E] text-white shadow-md'
                          : 'bg-white text-[#6B6B6B] hover:text-[#C41E1E]'
                      }`}
                    >
                      🏪 Kantor Cabang
                    </button>
                  </div>
                  <div className="map-container rounded-xl overflow-hidden h-[250px] sm:h-[300px] shadow-inner">
                    {activeMap === 'pusat' ? (
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.234567!2d112.6317!3d-7.9763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78828ba6c4a2b3%3A0x1234567890abcdef!2sKebalen%20Wetan%2C%20Kedungkandang%2C%20Malang!5e0!3m2!1sid!2sid!4v1"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Lokasi Kantor Pusat Ayam Kota Malang"
                        className="rounded-xl"
                      />
                    ) : (
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.234567!2d112.5317!3d-7.8763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e787e7ba6c4a2b3%3A0x1234567890abcdef!2sTemas%2C%20Kota%20Batu!5e0!3m2!1sid!2sid!4v1"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Lokasi Kantor Cabang Ayam Kota Malang"
                        className="rounded-xl"
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* FORM */}
              <div data-aos="fade-left" data-aos-delay="100">
                <div className="bg-[#FAF5EE] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#1A1A1A] mb-6 flex items-center gap-2">
                    <span className="w-8 h-1 bg-[#C41E1E] rounded-full inline-block" />
                    Kirim Pesan
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-[#6B6B6B] mb-1.5">
                          Nama Lengkap <span className="text-[#C41E1E]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#C41E1E] focus:border-transparent transition-all"
                          placeholder="Nama Anda"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#6B6B6B] mb-1.5">
                          No. Telepon / WhatsApp <span className="text-[#C41E1E]">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#C41E1E] focus:border-transparent transition-all"
                          placeholder="08xxxxxxxxxx"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#6B6B6B] mb-1.5">
                        Produk yang ingin dipesan <span className="text-[#C41E1E]">*</span>
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#C41E1E] focus:border-transparent transition-all resize-none"
                        placeholder="Sebutkan produk dan jumlah yang Anda butuhkan..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="group w-full bg-[#C41E1E] hover:bg-[#8B0000] text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 text-base shadow-lg shadow-red-200 hover:shadow-xl hover:shadow-red-300"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Kirim via WhatsApp
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT BANNER */}
      <section className="relative bg-gradient-to-r from-[#C41E1E] to-[#8B0000] py-14 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute -top-20 -right-20 w-80 h-80 border border-white rounded-full" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 border border-white rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10" data-aos="fade-up">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-3">
            Butuh Bantuan? Tim Kami Siap Membantu!
          </h2>
          <p className="text-white/70 text-base mb-6 max-w-xl mx-auto">
            Senin - Sabtu: 07:00 - 17:00 WIB. Kami akan merespon secepatnya.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://wa.me/628383200098"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#C41E1E] hover:bg-gray-100 font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
            <a
              href="tel:0341351691"
              className="inline-flex items-center gap-2 border-2 border-white/40 text-white hover:bg-white/10 font-semibold py-3 px-6 rounded-xl transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Telepon
            </a>
          </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="bg-[#1A1A1A] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6" data-aos="fade-up">
            <Link href="/tentang-kami" className="text-gray-400 hover:text-white text-sm transition-colors">Tentang Kami</Link>
            <span className="text-gray-600">|</span>
            <Link href="/produk" className="text-gray-400 hover:text-white text-sm transition-colors">Produk</Link>
            <span className="text-gray-600">|</span>
            <Link href="/klien" className="text-gray-400 hover:text-white text-sm transition-colors">Klien Kami</Link>
            <span className="text-gray-600">|</span>
            <Link href="/video" className="text-gray-400 hover:text-white text-sm transition-colors">Video</Link>
            <span className="text-gray-600">|</span>
            <Link href="/tentang-kami" className="text-gray-400 hover:text-white text-sm transition-colors">Lokasi</Link>
          </div>
        </div>
      </section>
    </>
  )
}
