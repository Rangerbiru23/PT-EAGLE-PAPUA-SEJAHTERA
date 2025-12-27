'use client'

import { useState } from 'react'
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, ChevronRight, Shield, Target, TrendingUp, Users, Award, Building } from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <title>PT EAGLE PAPUA SEJAHTERA - Konstruksi Gedung Perkantoran & Meta Ads Specialist</title>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        {/* Background Image Overlay */}
        <div 
          className="fixed inset-0 opacity-20 z-0"
          style={{
            backgroundImage: 'url(https://ik.imagekit.io/xcl991/BG-Creative-1)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        
        {/* Navigation */}
        <nav className="relative z-10 bg-black/30 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-2">
                <Building className="h-8 w-8 text-blue-400" />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  PT EAGLE PAPUA SEJAHTERA
                </h1>
              </div>
              
              <div className="hidden md:flex space-x-8">
                <a href="#home" className="hover:text-blue-400 transition-colors">Beranda</a>
                <a href="#services" className="hover:text-blue-400 transition-colors">Layanan</a>
                <a href="#about" className="hover:text-blue-400 transition-colors">Tentang</a>
                <a href="#meta-ads" className="hover:text-blue-400 transition-colors">Meta Ads</a>
                <a href="/privacy" className="hover:text-blue-400 transition-colors">Privacy</a>
                <a href="/terms" className="hover:text-blue-400 transition-colors">Terms</a>
                <a href="#contact" className="hover:text-blue-400 transition-colors">Kontak</a>
              </div>
              
              <button 
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-black/50 backdrop-blur-md">
              <div className="px-4 py-2 space-y-2">
                <a href="#home" className="block py-2 hover:text-blue-400">Beranda</a>
                <a href="#services" className="block py-2 hover:text-blue-400">Layanan</a>
                <a href="#about" className="block py-2 hover:text-blue-400">Tentang</a>
                <a href="#meta-ads" className="block py-2 hover:text-blue-400">Meta Ads</a>
                <a href="/privacy" className="block py-2 hover:text-blue-400">Privacy</a>
                <a href="/terms" className="block py-2 hover:text-blue-400">Terms</a>
                <a href="#contact" className="block py-2 hover:text-blue-400">Kontak</a>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="home" className="relative z-10 min-h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-4xl">
            <div className="mb-6">
              <Building className="h-20 w-20 text-blue-400 mx-auto mb-4" />
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  PT EAGLE PAPUA SEJAHTERA
                </span>
              </h1>
              <div className="text-2xl md:text-3xl text-blue-300 mb-4">
                Konstruksi Gedung Perkantoran
              </div>
              <div className="text-xl md:text-2xl text-cyan-300 font-semibold">
                Specialist Meta Ads & Digital Marketing
              </div>
            </div>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Mengintegrasikan keunggulan konstruksi gedung perkantoran dengan strategi Meta Ads yang 
              powerful untuk memaksimalkan visibilitas dan pertumbuhan bisnis Anda di era digital.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center">
                Konsultasi Meta Ads
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-blue-400 hover:bg-blue-400/20 px-8 py-4 rounded-lg font-semibold transition-all">
                Portfolio Konstruksi
              </button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="relative z-10 py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Layanan Unggulan Kami
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all">
                <Building className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Konstruksi Gedung Perkantoran</h3>
                <p className="text-gray-300 leading-relaxed">
                  Desain dan pembangunan gedung perkantoran modern dengan standar kualitas tertinggi, 
                  efisiensi energi, dan estetika yang profesional untuk mendukung produktivitas bisnis Anda.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all">
                <Target className="h-12 w-12 text-cyan-400 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Meta Ads Campaign Management</h3>
                <p className="text-gray-300 leading-relaxed">
                  Strategi periklanan digital terdepan di platform Meta (Facebook & Instagram) untuk 
                  meningkatkan brand awareness dan lead generation bisnis konstruksi Anda.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Meta Ads Specialist Section */}
        <section id="meta-ads" className="relative z-10 py-20 px-4 bg-black/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Meta Ads Excellence untuk Industri Konstruksi
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <TrendingUp className="h-16 w-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Targeted Campaigns</h3>
                <p className="text-gray-400">
                  Menjangkau audiens B2B dan B2C yang tepat untuk proyek konstruksi Anda
                </p>
              </div>
              
              <div className="text-center">
                <Users className="h-16 w-16 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Lead Generation</h3>
                <p className="text-gray-400">
                  Menghasilkan leads berkualitas untuk konversi bisnis yang lebih tinggi
                </p>
              </div>
              
              <div className="text-center">
                <Award className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">ROI Optimization</h3>
                <p className="text-gray-400">
                  Maksimalkan return on investment dengan strategi iklan yang efektif
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="relative z-10 py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Tentang PT EAGLE PAPUA SEJAHTERA
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Konstruksi & Digital Marketing Terpadu</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  PT EAGLE PAPUA SEJAHTERA adalah perusahaan konstruksi gedung perkantoran yang 
                  menggabungkan keahlian konstruksi tradisional dengan inovasi digital marketing 
                  melalui Meta Ads. Kami memahami bahwa dalam era modern, kehadiran digital yang 
                  kuat sama pentingnya dengan fondasi bangunan yang kokoh.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Dengan pengalaman bertahun-tahun dalam industri konstruksi dan pemahaman mendalam 
                  tentang digital marketing, kami membantu klien tidak hanya membangun gedung yang 
                  berkualitas, tetapi juga membangun brand yang kuat di pasar digital.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-blue-400" />
                    <span>Tersertifikasi & Terpercaya</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-6 w-6 text-yellow-400" />
                    <span>Pengalaman > 10 Tahun</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Target className="h-6 w-6 text-cyan-400" />
                    <span>Meta Ads Certified Partner</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-6 w-6 text-green-400" />
                    <span>100+ Proyek Selesai</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative z-10 py-20 px-4 bg-black/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Hubungi Kami
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Informasi Kontak</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Building className="h-6 w-6 text-blue-400" />
                    <div>
                      <strong>PT EAGLE PAPUA SEJAHTERA</strong>
                      <p className="text-gray-400">Konstruksi Gedung Perkantoran & Meta Ads Specialist</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-6 w-6 text-cyan-400" />
                    <div>
                      <p className="text-gray-300">
                        JL.MELATI RAYA KM.09, Desa/Kelurahan Klasabi<br />
                        Kec. Sorong Manoi, Kota Sorong<br />
                        Provinsi Papua Barat
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="h-6 w-6 text-green-400" />
                    <a href="tel:082382466172" className="text-gray-300 hover:text-blue-400">
                      082382466172
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="h-6 w-6 text-yellow-400" />
                    <span className="text-gray-300">info@eaglepapua.co.id</span>
                  </div>
                </div>
                
                <div className="flex space-x-4 mt-8">
                  <a href="#" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg transition-colors">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="bg-pink-600 hover:bg-pink-700 p-3 rounded-lg transition-colors">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="#" className="bg-cyan-600 hover:bg-cyan-700 p-3 rounded-lg transition-colors">
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href="#" className="bg-blue-700 hover:bg-blue-800 p-3 rounded-lg transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Konsultasi Gratis</h3>
                <form className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Nama Lengkap"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400"
                  />
                  <input 
                    type="email" 
                    placeholder="Email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400"
                  />
                  <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400">
                    <option>Pilih Layanan</option>
                    <option>Konstruksi Gedung Perkantoran</option>
                    <option>Meta Ads Campaign</option>
                    <option>Konsultasi Digital Marketing</option>
                  </select>
                  <textarea 
                    placeholder="Pesan Anda"
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400"
                  />
                  <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 py-3 rounded-lg font-semibold transition-all"
                  >
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative z-10 bg-black/50 backdrop-blur-md border-t border-white/10 py-8 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Building className="h-6 w-6 text-blue-400" />
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                PT EAGLE PAPUA SEJAHTERA
              </h3>
            </div>
            <p className="text-gray-400 mb-4">
              Konstruksi Gedung Perkantoran & Meta Ads Specialist
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-500">
              <a href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-blue-400 transition-colors">Terms & Conditions</a>
            </div>
            <p className="text-gray-500 text-sm mt-4">
              © 2024 PT EAGLE PAPUA SEJAHTERA. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}