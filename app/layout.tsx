import type { Metadata } from "next"
import { Poppins, Inter } from "next/font/google"
import "./globals.css"
import "aos/dist/aos.css"
import PromoBar from "@/components/PromoBar"
import Navbar from "@/components/Navbar"
import WhatsAppButton from "@/components/WhatsAppButton"
import ScrollToTopButton from "@/components/ScrollToTopButton"
import Footer from "@/components/Footer"
import AOSInit from "@/components/AOSInit"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Ayam Kota Malang — Supplier Ayam Segar & Unggas Halal Malang",
  description:
    "Supplier ayam segar dan unggas halal terpercaya di Malang sejak 1970. Melayani hotel, restoran, dan rumah tangga. Free delivery Kota Malang.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={`${poppins.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
        <AOSInit />
        <header className="sticky top-0 z-50">
          <PromoBar />
          <Navbar />
        </header>
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTopButton />
      </body>
    </html>
  )
}
