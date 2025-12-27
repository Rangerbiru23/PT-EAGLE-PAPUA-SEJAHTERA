'use client'

import { ArrowLeft, Shield, Eye, Database, UserCheck, Lock, Globe } from 'lucide-react'
import Link from 'next/link'

export default function Privacy() {
  return (
    <>
      <title>Privacy Policy - PT EAGLE PAPUA SEJAHTERA</title>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        {/* Background Image Overlay */}
        <div 
          className="fixed inset-0 opacity-10 z-0"
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
              <Link href="/" className="flex items-center space-x-2">
                <ArrowLeft className="h-6 w-6 text-blue-400" />
                <span className="hover:text-blue-400 transition-colors">Kembali ke Beranda</span>
              </Link>
              
              <div className="flex items-center space-x-2">
                <Shield className="h-8 w-8 text-blue-400" />
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  PT EAGLE PAPUA SEJAHTERA
                </h1>
              </div>
            </div>
          </div>
        </nav>

        {/* Privacy Policy Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <Shield className="h-20 w-20 text-blue-400 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-gray-300 text-lg">
              Kebijakan Privasi PT EAGLE PAPUA SEJAHTERA
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold mb-4 text-blue-300">Pendahuluan</h2>
              <p className="text-gray-300 leading-relaxed">
                PT EAGLE PAPUA SEJAHTERA ("kami", "perusahaan") sangat memegang teguh privasi dan keamanan data 
                pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, 
                melindungi, dan membagikan informasi pribadi Anda ketika Anda menggunakan layanan kami, 
                termasuk layanan konstruksi gedung perkantoran dan kampanye Meta Ads.
              </p>
            </div>

            {/* Data Collection */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <div className="flex items-center mb-4">
                <Database className="h-8 w-8 text-cyan-400 mr-3" />
                <h2 className="text-2xl font-bold text-blue-300">Pengumpulan Data</h2>
              </div>
              <p className="text-gray-300 mb-4">Kami dapat mengumpulkan jenis informasi berikut:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong>Informasi Pribadi:</strong> Nama, alamat email, nomor telepon, alamat perusahaan</li>
                <li><strong>Informasi Bisnis:</strong> Nama perusahaan, jabatan, kebutuhan proyek konstruksi</li>
                <li><strong>Informasi Teknis:</strong> Alamat IP, jenis browser, data penggunaan website</li>
                <li><strong>Informasi Meta Ads:</strong> Data interaksi dengan kampanye iklan kami</li>
                <li><strong>Informasi Keuangan:</strong> Data pembayaran dan penagihan yang diperlukan</li>
              </ul>
            </div>

            {/* Data Usage */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <div className="flex items-center mb-4">
                <Eye className="h-8 w-8 text-green-400 mr-3" />
                <h2 className="text-2xl font-bold text-blue-300">Penggunaan Data</h2>
              </div>
              <p className="text-gray-300 mb-4">Kami menggunakan informasi Anda untuk:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Menyediakan layanan konstruksi gedung perkantoran</li>
                <li>Mengelola dan mengoptimalkan kampanye Meta Ads Anda</li>
                <li>Mengkomunikasikan penawaran layanan dan update proyek</li>
                <li>Meningkatkan kualitas layanan dan pengalaman pengguna</li>
                <li>Memenuhi kewajiban hukum dan peraturan yang berlaku</li>
                <li>Menganalisis tren dan preferensi pasar</li>
              </ul>
            </div>

            {/* Data Protection */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <div className="flex items-center mb-4">
                <Lock className="h-8 w-8 text-yellow-400 mr-3" />
                <h2 className="text-2xl font-bold text-blue-300">Keamanan Data</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Kami menerapkan langkah-langkah keamanan yang komprehensif untuk melindungi informasi pribadi Anda:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Enkripsi data selama transmisi dan penyimpanan</li>
                <li>Akses terbatas hanya untuk personel yang berwenang</li>
                <li>System monitoring dan audit berkala</li>
                <li>Backup data yang aman dan terenkripsi</li>
                <li>Kepatuhan terhadap standar keamanan industri</li>
              </ul>
            </div>

            {/* User Rights */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <div className="flex items-center mb-4">
                <UserCheck className="h-8 w-8 text-purple-400 mr-3" />
                <h2 className="text-2xl font-bold text-blue-300">Hak Anda sebagai Pengguna</h2>
              </div>
              <p className="text-gray-300 mb-4">Anda memiliki hak untuk:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Mengakses dan melihat data pribadi yang kami simpan</li>
                <li>Memperbarui atau mengoreksi data yang tidak akurat</li>
                <li>Menghapus data pribadi sesuai dengan peraturan yang berlaku</li>
                <li>Menolak atau membatasi penggunaan data tertentu</li>
                <li>Meminta salinan data pribadi Anda</li>
                <li>Menarik persetujuan untuk pengolahan data</li>
              </ul>
            </div>

            {/* Third Party Services */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <div className="flex items-center mb-4">
                <Globe className="h-8 w-8 text-orange-400 mr-3" />
                <h2 className="text-2xl font-bold text-blue-300">Layanan Pihak Ketiga</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Kami dapat berbagi informasi dengan pihak ketiga terpercaya untuk:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong>Meta Platforms:</strong> Untuk pengelolaan kampanye Meta Ads</li>
                <li><strong>Payment Processors:</strong> Untuk pemrosesan pembayaran yang aman</li>
                <li><strong>Cloud Providers:</strong> Untuk penyimpanan data yang aman</li>
                <li><strong>Analytics Services:</strong> Untuk analisis penggunaan website</li>
                <li><strong>Legal Authorities:</strong> Saat diwajibkan oleh hukum</li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold mb-4 text-blue-300">Hubungi Kami</h2>
              <p className="text-gray-300 mb-4">
                Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau ingin melaksanakan hak Anda, 
                silakan hubungi kami:
              </p>
              <div className="space-y-2 text-gray-300">
                <p><strong>Email:</strong> privacy@eaglepapua.co.id</p>
                <p><strong>Telepon:</strong> 082382466172</p>
                <p><strong>Alamat:</strong> JL.MELATI RAYA KM.09, Desa/Kelurahan Klasabi, Kec. Sorong Manoi, Kota Sorong, Provinsi Papua Barat</p>
              </div>
            </div>

            {/* Policy Updates */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold mb-4 text-blue-300">Pembaruan Kebijakan</h2>
              <p className="text-gray-300 leading-relaxed">
                Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu untuk mencerminkan perubahan 
                dalam praktik bisnis kami atau perubahan peraturan yang berlaku. Setiap perubahan akan 
                dipublikasikan di halaman ini dengan tanggal pembaruan terbaru.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="relative z-10 bg-black/50 backdrop-blur-md border-t border-white/10 py-8 px-4 mt-16">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Shield className="h-6 w-6 text-blue-400" />
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                PT EAGLE PAPUA SEJAHTERA
              </h3>
            </div>
            <p className="text-gray-400 mb-4">
              Konstruksi Gedung Perkantoran & Meta Ads Specialist
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-500">
              <Link href="/" className="hover:text-blue-400 transition-colors">Beranda</Link>
              <Link href="/terms" className="hover:text-blue-400 transition-colors">Terms & Conditions</Link>
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