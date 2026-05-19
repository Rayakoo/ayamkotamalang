'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function KontakPage() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = `Halo Ayam Kota Malang,\n\nNama: ${form.name}\nNo. Telepon: ${form.phone}\nPesanan: ${form.message}\n\nMohon informasi lebih lanjut. Terima kasih.`
    window.open(`https://wa.me/628383200098?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <>
      {/* PAGE HEADER */}
      <section className="relative bg-gradient-to-br from-[#C41E1E] to-[#8B0000] py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-60 h-60 border border-white rounded-full" />
          <div className="absolute bottom-10 right-10 w-40 h-40 border border-white rounded-full" />
          <div className="absolute top-1/2 right-1/3 w-24 h-24 border border-white rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-white/70 text-sm font-medium uppercase tracking-widest" data-aos="fade-up">
            Kontak
          </span>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mt-3 mb-4" data-aos="fade-up">
            Siap Melayani Anda
          </h1>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto" data-aos="fade-up">
            Hubungi kami untuk pemesanan, konsultasi, atau informasi lebih lanjut
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
            {/* INFO */}
            <div className="lg:col-span-2 space-y-6" data-aos="fade-right">
              <div className="bg-[#FAF5EE] rounded-xl p-6 sm:p-8">
                <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#1A1A1A] mb-6">
                  Info Kontak
                </h2>
                <div className="space-y-5">
                  <a href="tel:0341351691" className="flex items-center gap-3 group">
                    <div className="w-12 h-12 bg-[#C41E1E]/10 rounded-xl flex items-center justify-center shrink-0">
                      <span className="text-xl">📞</span>
                    </div>
                    <div>
                      <div className="text-[#6B6B6B] text-xs uppercase tracking-wide">Telepon</div>
                      <div className="text-[#1A1A1A] font-medium group-hover:text-[#C41E1E] transition-colors">0341 351-691</div>
                    </div>
                  </a>
                  <a href="https://wa.me/628383200098" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                    <div className="w-12 h-12 bg-[#C41E1E]/10 rounded-xl flex items-center justify-center shrink-0">
                      <span className="text-xl">📱</span>
                    </div>
                    <div>
                      <div className="text-[#6B6B6B] text-xs uppercase tracking-wide">WhatsApp</div>
                      <div className="text-[#1A1A1A] font-medium group-hover:text-[#C41E1E] transition-colors">0838-3200-0098</div>
                    </div>
                  </a>
                  <a href="https://instagram.com/ayam_kotamalang" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                    <div className="w-12 h-12 bg-[#C41E1E]/10 rounded-xl flex items-center justify-center shrink-0">
                      <span className="text-xl">📷</span>
                    </div>
                    <div>
                      <div className="text-[#6B6B6B] text-xs uppercase tracking-wide">Instagram</div>
                      <div className="text-[#1A1A1A] font-medium group-hover:text-[#C41E1E] transition-colors">@ayam_kotamalang</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-[#FAF5EE] rounded-xl p-6 sm:p-8">
                <h3 className="font-heading font-bold text-[#1A1A1A] mb-4">📍 Alamat</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-sm text-[#1A1A1A]">Kantor Pusat</p>
                    <p className="text-[#6B6B6B] text-sm">Jalan Kebalen Wetan 53A, Kedungkandang, Kota Malang</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-[#1A1A1A]">Kantor Cabang</p>
                    <p className="text-[#6B6B6B] text-sm">Jalan Terusan Agus Salim No. 2 RT 05 RW 10, Temas, Kota Batu</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#6B6B6B] pt-2 border-t border-gray-200">
                    <span>🕐</span>
                    <span>Senin - Sabtu: 07:00 - 17:00 WIB</span>
                  </div>
                </div>
              </div>
            </div>

            {/* FORM */}
            <div className="lg:col-span-3" data-aos="fade-left">
              <div className="bg-[#FAF5EE] rounded-xl p-6 sm:p-8 lg:p-10">
                <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#1A1A1A] mb-6">
                  Kirim Pesan
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[#6B6B6B] mb-1.5">Nama</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3.5 text-sm text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#C41E1E] focus:border-transparent transition-all"
                        placeholder="Nama Anda"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#6B6B6B] mb-1.5">No. Telepon / WhatsApp</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3.5 text-sm text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#C41E1E] focus:border-transparent transition-all"
                        placeholder="08xxxxxxxxxx"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#6B6B6B] mb-1.5">Produk yang ingin dipesan</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3.5 text-sm text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#C41E1E] focus:border-transparent transition-all resize-none"
                      placeholder="Sebutkan produk dan jumlah yang Anda butuhkan..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#C41E1E] hover:bg-[#8B0000] text-white font-semibold py-3.5 px-6 rounded-xl transition-colors duration-300 text-base"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
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
      </section>

      {/* QUICK LINKS */}
      <section className="bg-[#C41E1E] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link href="/tentang-kami" className="text-white/80 hover:text-white text-sm transition-colors">Tentang Kami</Link>
            <span className="text-white/30">|</span>
            <Link href="/produk" className="text-white/80 hover:text-white text-sm transition-colors">Produk</Link>
            <span className="text-white/30">|</span>
            <Link href="/klien" className="text-white/80 hover:text-white text-sm transition-colors">Klien Kami</Link>
            <span className="text-white/30">|</span>
            <Link href="/video" className="text-white/80 hover:text-white text-sm transition-colors">Video</Link>
          </div>
        </div>
      </section>
    </>
  )
}
