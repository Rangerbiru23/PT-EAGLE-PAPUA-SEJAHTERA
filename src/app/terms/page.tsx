'use client'

import { ArrowLeft, FileText, Building, Target, Shield, AlertCircle, Users, Scale } from 'lucide-react'
import Link from 'next/link'

export default function Terms() {
  return (
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
                <FileText className="h-8 w-8 text-blue-400" />
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  PT EAGLE PAPUA SEJAHTERA
                </h1>
              </div>
            </div>
          </div>
        </nav>

        {/* Terms Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <FileText className="h-20 w-20 text-blue-400 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Terms and Conditions
            </h1>
            <p className="text-gray-300 text-lg">
              Syarat dan Ketentuan Layanan PT EAGLE PAPUA SEJAHTERA
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="space-y-8">
            {/* Agreement */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold mb-4 text-blue-300">1. Penerimaan Perjanjian</h2>
              <p className="text-gray-300 leading-relaxed">
                Dengan mengakses atau menggunakan layanan PT EAGLE PAPUA SEJAHTERA, Anda setuju untuk terikat 
                oleh Syarat dan Ketentuan ini. Jika Anda tidak setuju dengan bagian mana pun dari ketentuan ini, 
                Anda tidak boleh menggunakan layanan kami.
              </p>
            </div>

            {/* Services Description */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <div className="flex items-center mb-4">
                <Building className="h-8 w-8 text-cyan-400 mr-3" />
                <h2 className="text-2xl font-bold text-blue-300">2. Deskripsi Layanan</h2>
              </div>
              <p className="text-gray-300 mb-4">PT EAGLE PAPUA SEJAHTERA menyediakan:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong>Konstruksi Gedung Perkantoran:</strong> Jasa desain, perencanaan, dan pembangunan gedung perkantoran</li>
                <li><strong>Meta Ads Management:</strong> Pengelolaan kampanye iklan di platform Meta (Facebook & Instagram)</li>
                <li><strong>Konsultasi Digital Marketing:</strong> Strategi pemasaran digital untuk industri konstruksi</li>
                <li><strong>Layanan Pendukung:</strong> Perizinan, pengawasan, dan maintenance proyek</li>
              </ul>
            </div>

            {/* Client Responsibilities */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-green-400 mr-3" />
                <h2 className="text-2xl font-bold text-blue-300">3. Tanggung Jawab Klien</h2>
              </div>
              <p className="text-gray-300 mb-4">Sebagai klien, Anda bertanggung jawab untuk:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Memberikan informasi yang akurat dan lengkap untuk keperluan proyek</li>
                <li>Menyediakan dokumen perizinan yang diperlukan sesuai peraturan</li>
                <li>Melakukan pembayaran sesuai dengan jadwal yang telah disepakati</li>
                <li>Memberikan akses yang diperlukan untuk pelaksanaan proyek</li>
                <li>Memberikan feedback dan persetujuan tepat waktu</li>
                <li>Mematuhi ketentuan penggunaan platform Meta untuk kampanye iklan</li>
              </ul>
            </div>

            {/* Payment Terms */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <div className="flex items-center mb-4">
                <Scale className="h-8 w-8 text-yellow-400 mr-3" />
                <h2 className="text-2xl font-bold text-blue-300">4. Ketentuan Pembayaran</h2>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong>Uang Muka:</strong> Minimal 30% dari total nilai kontrak</li>
                <li><strong>Pembayaran Progress:</strong> Sesuai dengan milestone yang disepakati</li>
                <li><strong>Pelunasan:</strong> Sebelum serah terima proyek</li>
                <li><strong>Meta Ads:</strong> Pembayaran bulanan atau per kampanye</li>
                <li><strong>Keterlambatan:</strong> Dikenakan bunga 2% per bulan</li>
                <li><strong>Metode Pembayaran:</strong> Transfer bank atau metode yang disepakati</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-purple-400 mr-3" />
                <h2 className="text-2xl font-bold text-blue-300">5. Hak Kekayaan Intelektual</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Semua desain, rencana teknis, materi marketing, dan konten kampanye Meta Ads yang dibuat
                oleh PT EAGLE PAPUA SEJAHTERA tetap menjadi milik intelektual perusahaan sampai pembayaran
                penuh dilakukan. Setelah pelunasan, hak penggunaan dapat dialihkan kepada klien sesuai kesepakatan.
              </p>
            </div>

            {/* Meta Ads Specific */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-orange-400 mr-3" />
                <h2 className="text-2xl font-bold text-blue-300">6. Ketentuan Khusus Meta Ads</h2>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Klien bertanggung jawab atas kepatuhan konten iklan terhadap kebijakan Meta</li>
                <li>Perusahaan tidak bertanggung jawab atas suspensi atau penolakan iklan oleh Meta</li>
                <li>Budget iklan tidak termasuk dalam biaya jasa manajemen</li>
                <li>Perubahan kampanye memerlukan persetujuan tertulis dari klien</li>
                <li>Reporting akan disediakan secara berkala (mingguan/bulanan)</li>
                <li>Perjanjian Meta Ads dapat dihentikan dengan pemberitahuan 30 hari</li>
              </ul>
            </div>

            {/* Limitation of Liability */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <div className="flex items-center mb-4">
                <AlertCircle className="h-8 w-8 text-red-400 mr-3" />
                <h2 className="text-2xl font-bold text-blue-300">7. Pembatasan Tanggung Jawab</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                PT EAGLE PAPUA SEJAHTERA tidak bertanggung jawab atas:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Kerugian tidak langsung, insidental, atau konsekuensial</li>
                <li>Keterlambatan akibat force majeure (bencana alam, perang, dll)</li>
                <li>Kerugian akibat kelalaian atau ketidakpatuhan klien</li>
                <li>Perubahan kebijakan platform Meta yang mempengaruhi kampanye</li>
                <li>Keterlambatan perizinan dari pihak berwenang</li>
              </ul>
            </div>

            {/* Termination */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold mb-4 text-blue-300">8. Pengakhiran Perjanjian</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Perjanjian ini dapat diakhiri dalam kondisi berikut:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Selesai seluruh kewajiban kedua belah pihak</li>
                <li>Kesepakatan bersama dengan dokumen tertulis</li>
                <li>Pelanggaran berat yang tidak diperbaiki dalam 30 hari</li>
                <li>Kondisi force majeure yang berkelanjutan</li>
                <li>Pemberhentian dengan pemberitahuan 60 hari (untuk Meta Ads)</li>
              </ul>
            </div>

            {/* Dispute Resolution */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold mb-4 text-blue-300">9. Penyelesaian Sengketa</h2>
              <p className="text-gray-300 leading-relaxed">
                Semua sengketa yang timbul dari atau berhubungan dengan perjanjian ini akan diselesaikan 
                terlebih dahulu melalui musyawarah untuk mufakat. Jika tidak tercapai kesepakatan, 
                sengketa akan diselesaikan melalui pengadilan di Kota Sorong, Provinsi Papua Barat.
              </p>
            </div>

            {/* Governing Law */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold mb-4 text-blue-300">10. Hukum yang Berlaku</h2>
              <p className="text-gray-300 leading-relaxed">
                Perjanjian ini diatur oleh dan ditafsirkan sesuai dengan hukum yang berlaku di Republik Indonesia.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold mb-4 text-blue-300">11. Hubungi Kami</h2>
              <p className="text-gray-300 mb-4">
                Untuk pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi:
              </p>
              <div className="space-y-2 text-gray-300">
                <p><strong>Email:</strong> legal@eaglepapua.co.id</p>
                <p><strong>Telepon:</strong> 082382466172</p>
                <p><strong>Alamat:</strong> JL.MELATI RAYA KM.09, Desa/Kelurahan Klasabi, Kec. Sorong Manoi, Kota Sorong, Provinsi Papua Barat</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="relative z-10 bg-black/50 backdrop-blur-md border-t border-white/10 py-8 px-4 mt-16">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <FileText className="h-6 w-6 text-blue-400" />
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                PT EAGLE PAPUA SEJAHTERA
              </h3>
            </div>
            <p className="text-gray-400 mb-4">
              Konstruksi Gedung Perkantoran & Meta Ads Specialist
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-500">
              <Link href="/" className="hover:text-blue-400 transition-colors">Beranda</Link>
              <Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
            </div>
            <p className="text-gray-500 text-sm mt-4">
              © 2024 PT EAGLE PAPUA SEJAHTERA. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}