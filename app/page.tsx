'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Check, 
  X, 
  Download, 
  Music, 
  Smartphone, 
  Wifi, 
  WifiOff, 
  DollarSign, 
  Users, 
  Home, 
  Baby, 
  Book, 
  Headphones,
  Church,
  ChevronDown,
  Star,
  Shield,
  Zap,
  Mail,
  Lock,
  MessageCircle,
  User,
  ArrowRight
} from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Page() {
  const [activeTab, setActiveTab] = useState<'full' | 'juzamma'>('full');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Floating CTA Button
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingCTA(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCheckout = () => {
    const checkout = document.getElementById('checkout');
    checkout?.scrollIntoView({ behavior: 'smooth' });
  };

  // Handle form submission - Redirect to Scalev with pre-filled data
  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      alert('Mohon isi nama dan email Anda');
      return;
    }

    setIsSubmitting(true);

    // Build Scalev checkout URL with pre-filled data
    // Note: Sesuaikan parameter sesuai dokumentasi Scalev
    const checkoutUrl = new URL('https://prhatara.myscalev.com/c/checkout');
    checkoutUrl.searchParams.append('variant_ids', '426515');
    checkoutUrl.searchParams.append('qty', '1');
    
    // Pre-fill customer data (sesuaikan dengan parameter yang Scalev support)
    checkoutUrl.searchParams.append('customer_name', formData.name);
    checkoutUrl.searchParams.append('customer_email', formData.email);
    
    // Redirect ke halaman Scalev
    window.location.href = checkoutUrl.toString();
  };

  const fullJuzQaris = [
    'Abdul Basit Abdus Samad',
    'Abdurahman Sudais',
    'Maher Al-Muaiqaly',
    'Mishari Rashid Al-Afasy',
    'Abdullah Ali Bashfar',
    'Abdullah Al-Mathrud',
    'Abu Bakar Asy-Syathiri',
    'Ahmad bin Ali Al-Ajmy',
    'Ahmad Misbahi (Anak)',
    'Ali Abdurrahman Al-Hudzaifi',
    'Bandar Baleela',
    'Faris Abbad',
    'Hani Ar-Rifa\'i',
    'Imad Al-Mansary',
    'Mahmud Al-Husary',
    'Muhammad Ayyub',
    'Muhammad Jibril',
    'Saeed Al-Ghoomidi',
    'Shalah Bukhatir',
    'Suud Asy-Syuraim',
    'Yasser Al-Doussary',
    'Mishari Rashid Al-Afasy + Terjemah',
    'Abdullah Awad Al-Juhani'
  ];

  const juzAmmaQaris = [
    'Muhammad Thaha Al-Junaid (Anak)',
    'Ahmed Saoud (Anak)',
    'Metode Ummi',
    'Abu Usamah',
    'Muriqy Anak',
    'Muriqy Ust. Dzikron',
    'Ali Jabeer',
    'Fahd Kandari',
    'Khalifa At-Tunaji',
    'Muhammad Abdul Aziz',
    'Muhammadi Shiddiq Al-Misyawy',
    'Nasir Al-Qatami',
    'Ziyad Patel'
  ];

  const features = [
    { icon: Music, text: '36++ Bacaan Qari Internasional & Nasional' },
    { icon: Book, text: 'Full 30 Juz (Lengkap Al-Qur\'an)' },
    { icon: Download, text: 'Juz 30 (Juz Amma) untuk Anak' },
    { icon: Star, text: 'Audio Jernih & Berkualitas Tinggi' },
    { icon: Check, text: 'File Tertata Rapi (Per Qari/Juz)' },
    { icon: Shield, text: 'Akses Selamanya (Milik Anda)' },
    { icon: Smartphone, text: 'Bisa di HP, Laptop, Speaker' },
    { icon: Zap, text: 'Update 1 Qari Baru/Minggu 🔄' },
    { icon: Star, text: 'BONUS: Sholawat + Azan Dunia' },
    { icon: WifiOff, text: 'Tanpa Iklan, Tanpa Langganan' },
  ];

  const useCases = [
    { icon: Home, title: 'Muraja\'ah Harian', desc: 'Di rumah' },
    { icon: Users, title: 'Keluarga', desc: 'Orang tua & anak' },
    { icon: Baby, title: 'Anak & Pemula', desc: 'Pembelajaran' },
    { icon: Church, title: 'Masjid/Mushola', desc: 'Audio publik' },
    { icon: Headphones, title: 'Pendamping Kerja', desc: 'Aktivitas harian' },
    { icon: Book, title: 'Hafalan', desc: 'Tahfidz Qur\'an' },
  ];

  const faqs = [
    {
      q: 'Apakah ini streaming?',
      a: 'Tidak. File digital yang bisa Anda simpan & putar offline tanpa internet. Tidak perlu koneksi internet setelah download.'
    },
    {
      q: 'Bisa diputar di HP & laptop?',
      a: 'Ya, semua perangkat (HP Android/iOS, laptop Windows/Mac, tablet, speaker bluetooth). Format MP3 universal.'
    },
    {
      q: 'Apakah ada update?',
      a: 'Ya! Setiap minggu dapat +1 qari baru GRATIS selamanya. Anda akan mendapat link update via email.'
    },
    {
      q: 'Ada batas waktu akses?',
      a: 'TIDAK. Sekali beli, milik Anda selamanya. Tanpa perpanjangan, tanpa biaya tambahan apapun.'
    },
    {
      q: 'Bagaimana cara downloadnya?',
      a: 'Setelah pembayaran berhasil, link download otomatis dikirim via email. Langsung bisa diakses dari Google Drive.'
    },
    {
      q: 'Formatnya apa?',
      a: 'MP3 berkualitas tinggi (128-320 kbps), bisa diputar di semua perangkat dan aplikasi musik.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-islamic-600 via-islamic-700 to-islamic-800">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="/gambar.png" 
                alt="Al-Quran Collection"
                width={1080}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Dengarkan <span className="text-gold-400">36++ Bacaan</span><br />
            Al-Qur'an dari Qari Terbaik Dunia
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-islamic-100 mb-4 max-w-3xl mx-auto"
          >
            Kapan Saja, Tanpa Internet
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 text-lg md:text-xl text-white mb-12"
          >
            <span className="flex items-center gap-2">
              <Check className="w-6 h-6 text-gold-400" /> Full 30 Juz + Juz Amma
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-6 h-6 text-gold-400" /> Offline
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-6 h-6 text-gold-400" /> Update Mingguan
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-6 h-6 text-gold-400" /> Sekali Bayar Selamanya
            </span>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToCheckout}
            className="group relative px-12 py-6 bg-gradient-to-r from-gold-500 to-gold-600 text-white text-xl md:text-2xl font-bold rounded-full shadow-2xl hover:shadow-gold-500/50 transition-all duration-300 animate-pulse-slow"
          >
            <span className="relative z-10 flex items-center gap-3">
              👉 DAPATKAN SEKARANG - Rp 55.000
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold-600 to-gold-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>

          {/* Scroll Indicator */}
          <motion.div
            style={{ opacity }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="w-8 h-8 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              💔 Kenapa Susah Konsisten<br />Mendengarkan Al-Qur'an?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Wifi, text: 'Streaming habis kuota & lemot' },
              { icon: X, text: 'File berantakan & tidak rapi' },
              { icon: Music, text: 'Qari terbatas, cepat bosan' },
              { icon: DollarSign, text: 'Langganan mahal & terus bayar' },
            ].map((problem, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 text-center"
              >
                <problem.icon className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <p className="text-gray-700 font-medium">{problem.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center bg-gradient-to-r from-islamic-50 to-gold-50 border-2 border-islamic-200 rounded-2xl p-8"
          >
            <p className="text-2xl md:text-3xl font-bold text-islamic-800">
              💡 Anda butuh solusi yang <span className="text-gold-600">LENGKAP, RAPI</span>, dan <span className="text-gold-600">SEKALI BAYAR</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solution Showcase */}
      <section className="py-20 bg-gradient-to-br from-islamic-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              ✨ SOLUSI: Koleksi Digital Pribadi Al-Qur'an Anda
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Music,
                title: '36++ Qari Premium',
                desc: 'Full 30 Juz + Juz Amma',
                gradient: 'from-islamic-500 to-islamic-600'
              },
              {
                icon: WifiOff,
                title: 'Offline',
                desc: 'Tanpa Streaming',
                gradient: 'from-blue-500 to-blue-600'
              },
              {
                icon: Zap,
                title: 'Update Gratis',
                desc: 'Setiap Minggu +1 Qari Baru',
                gradient: 'from-gold-500 to-gold-600'
              },
            ].map((solution, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${solution.gradient} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                  <solution.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">{solution.title}</h3>
                <p className="text-gray-600 text-center text-lg">{solution.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              📦 Apa yang Anda Dapatkan?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="flex items-start gap-4 bg-gradient-to-r from-islamic-50 to-transparent p-6 rounded-2xl hover:from-islamic-100 transition-all duration-300"
              >
                <div className="bg-islamic-500 rounded-full p-3 flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-lg text-gray-700 font-medium pt-2">{feature.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <button
              onClick={scrollToCheckout}
              className="px-10 py-5 bg-gradient-to-r from-islamic-600 to-islamic-700 text-white text-xl font-bold rounded-full hover:from-islamic-700 hover:to-islamic-800 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Saya Mau Akses Sekarang! 🚀
            </button>
          </motion.div>
        </div>
      </section>

      {/* Qari List Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-islamic-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              🎙️ Dibacakan Qari Terbaik Dunia
            </h2>
          </motion.div>

          {/* Tab Switcher */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-full p-2 shadow-lg inline-flex">
              <button
                onClick={() => setActiveTab('full')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === 'full'
                    ? 'bg-gradient-to-r from-islamic-600 to-islamic-700 text-white shadow-lg'
                    : 'text-gray-600 hover:text-islamic-600'
                }`}
              >
                Full 30 Juz ({fullJuzQaris.length})
              </button>
              <button
                onClick={() => setActiveTab('juzamma')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === 'juzamma'
                    ? 'bg-gradient-to-r from-islamic-600 to-islamic-700 text-white shadow-lg'
                    : 'text-gray-600 hover:text-islamic-600'
                }`}
              >
                Juz Amma ({juzAmmaQaris.length})
              </button>
            </div>
          </div>

          {/* Qari Lists */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {(activeTab === 'full' ? fullJuzQaris : juzAmmaQaris).map((qari, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
                className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-3 hover:scale-105"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-islamic-500 to-islamic-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-700 font-medium">{qari}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12 bg-gradient-to-r from-gold-50 to-islamic-50 border-2 border-gold-200 rounded-2xl p-8"
          >
            <p className="text-2xl font-bold text-gray-900">
              🔄 <span className="text-gold-600">+1 Qari Baru</span> Setiap Minggu!
            </p>
            <p className="text-gray-600 mt-2">Koleksi Anda terus bertambah tanpa biaya tambahan</p>
          </motion.div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              👥 Cocok Untuk:
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-islamic-50 to-white border-2 border-islamic-200 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300"
              >
                <useCase.icon className="w-16 h-16 text-islamic-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              ⚖️ Kenapa Ini Lebih Baik?
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-islamic-600 to-islamic-700 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-lg font-bold">Fitur</th>
                    <th className="px-6 py-4 text-center text-lg font-bold">Streaming</th>
                    <th className="px-6 py-4 text-center text-lg font-bold bg-gold-500">Produk Ini ✨</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { feature: 'Butuh Internet', streaming: false, product: true, streamingText: 'Wajib', productText: 'Offline' },
                    { feature: 'Iklan', streaming: false, product: true, streamingText: 'Ada', productText: 'Bebas' },
                    { feature: 'Biaya', streaming: false, product: true, streamingText: 'Terus Bayar', productText: 'Sekali Bayar' },
                    { feature: 'Jumlah Qari', streaming: false, product: true, streamingText: 'Terbatas', productText: '36++' },
                    { feature: 'Update', streaming: false, product: true, streamingText: '-', productText: 'Gratis' },
                    { feature: 'File Rapi', streaming: false, product: true, streamingText: '-', productText: 'Ya' },
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-gray-900">{row.feature}</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <X className="w-5 h-5 text-red-500" />
                          <span className="text-gray-600">{row.streamingText}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center bg-gold-50">
                        <div className="flex items-center justify-center gap-2">
                          <Check className="w-5 h-5 text-green-600" />
                          <span className="font-semibold text-islamic-700">{row.productText}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Stack & Pricing */}
      <section className="py-20 bg-gradient-to-br from-islamic-900 via-islamic-800 to-islamic-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              💰 Kalau Beli Satuan...
            </h2>
          </motion.div>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 mb-12 border border-white/20">
            <div className="space-y-6 mb-8">
              {[
                { item: '36 Bacaan Qari @ Rp 30.000', price: 'Rp 1.080.000' },
                { item: 'Bonus Sholawat Internasional', price: 'Rp 300.000' },
                { item: 'Bonus Azan dari Berbagai Negara', price: 'Rp 250.000' },
                { item: 'Kurasi & Update Mingguan', price: 'Rp 170.000' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="flex justify-between items-center text-lg"
                >
                  <span className="text-white/90">{item.item}</span>
                  <span className="font-bold text-gold-400">{item.price}</span>
                </motion.div>
              ))}
            </div>

            <div className="border-t-2 border-white/30 pt-6 mb-8">
              <div className="flex justify-between items-center text-2xl font-bold">
                <span>Total Nilai:</span>
                <span className="text-gold-400">Rp 1.800.000</span>
              </div>
            </div>

            {/* Price Reveal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-6"
            >
              <div className="relative inline-block">
                <span className="text-3xl md:text-4xl font-bold line-through text-white/50">
                  Rp 1.800.000
                </span>
              </div>

              <div className="bg-gradient-to-r from-gold-500 to-gold-600 rounded-3xl p-8 transform hover:scale-105 transition-transform duration-300">
                <p className="text-white/90 text-xl mb-3">Hanya</p>
                <p className="text-5xl md:text-7xl font-bold text-white mb-3">
                  Rp 55.000
                </p>
                <p className="text-2xl font-bold text-white">
                  Hemat 97%! 🔥
                </p>
              </div>

              <div className="space-y-3 text-lg">
                <div className="flex items-center justify-center gap-2">
                  <Check className="w-6 h-6 text-green-400" />
                  <span>Akses Seumur Hidup</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Check className="w-6 h-6 text-green-400" />
                  <span>Update Rutin Gratis</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Check className="w-6 h-6 text-green-400" />
                  <span>Tanpa Biaya Tambahan</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToCheckout}
                className="mt-8 px-12 py-6 bg-white text-islamic-900 text-xl md:text-2xl font-bold rounded-full shadow-2xl hover:shadow-white/50 transition-all duration-300 animate-pulse-slow"
              >
                🔒 AMANKAN AKSES SEKARANG
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              ❓ Pertanyaan yang Sering Ditanyakan
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="bg-gradient-to-r from-gray-50 to-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-islamic-300 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-islamic-50 transition-colors duration-300"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-islamic-600 flex-shrink-0 transition-transform duration-300 ${
                      openFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === idx ? 'auto' : 0,
                    opacity: openFaq === idx ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                    {faq.a}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-islamic-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center"
          >
            <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              💬 Masih Ada Pertanyaan?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Chat langsung dengan kami via WhatsApp untuk konsultasi gratis!
            </p>
            
            <motion.a
              href="https://wa.me/6285123759525?text=Halo,%20saya%20tertarik%20dengan%20produk%20Al-Quran%20digital%20dan%20ingin%20bertanya..."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-4 px-8 py-5 bg-gradient-to-r from-green-500 to-green-600 text-white text-xl font-bold rounded-full shadow-xl hover:shadow-2xl hover:from-green-600 hover:to-green-700 transition-all duration-300"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <div className="text-left">
                <div className="text-sm opacity-90">Chat via WhatsApp</div>
                <div className="text-xl font-bold">085123759525</div>
              </div>
            </motion.a>

            <p className="text-sm text-gray-500 mt-6">
              Biasanya kami balas dalam 5 menit
            </p>
          </motion.div>
        </div>
      </section>

      {/* CHECKOUT SECTION - CUSTOM FORM WITH REDIRECT */}
      <section id="checkout" className="py-20 bg-gradient-to-br from-islamic-50 via-white to-gold-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              🎁 Dapatkan Akses Sekarang
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              36++ Bacaan Al-Qur'an + Update Mingguan Selamanya
            </p>
            <div className="inline-block bg-gradient-to-r from-red-100 to-orange-100 border-2 border-red-300 rounded-full px-6 py-3">
              <p className="text-lg font-semibold text-red-700">
                ⏰ Harga special bisa berubah sewaktu-waktu
              </p>
            </div>
          </motion.div>

          {/* CUSTOM CHECKOUT FORM */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-islamic-200"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-islamic-600 to-islamic-700 text-white py-8 px-8">
              <h3 className="text-2xl font-bold text-center mb-2">Form Pemesanan</h3>
              <p className="text-center text-islamic-100">Isi data Anda untuk melanjutkan ke pembayaran</p>
            </div>
            
            {/* Product Info */}
            <div className="bg-gradient-to-br from-islamic-50 to-gold-50 p-6 border-b-2 border-islamic-100">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-bold text-gray-900">Paket Lengkap Al-Qur'an</h4>
                  <p className="text-gray-600 text-sm">36++ Bacaan Qari (30 Juz & Juz Amma)</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-islamic-700">Rp 55.000</p>
                  <p className="text-sm text-gray-500 line-through">Rp 1.800.000</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleCheckout} className="p-8 md:p-10">
              <div className="space-y-6">
                {/* Nama Lengkap */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nama Lengkap *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="block w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-islamic-500 focus:border-islamic-500 text-gray-900 placeholder-gray-400 transition-all duration-200"
                      placeholder="Masukkan nama lengkap Anda"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="block w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-islamic-500 focus:border-islamic-500 text-gray-900 placeholder-gray-400 transition-all duration-200"
                      placeholder="email@example.com"
                    />
                  </div>
                  <p className="mt-2 text-xs text-gray-500">
                    Link download akan dikirim ke email ini
                  </p>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full py-5 px-6 rounded-xl font-bold text-xl text-white transition-all duration-300 flex items-center justify-center gap-3 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-islamic-600 to-islamic-700 hover:from-islamic-700 hover:to-islamic-800 shadow-xl hover:shadow-2xl'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Memproses...</span>
                    </>
                  ) : (
                    <>
                      <span>Lanjut ke Pembayaran</span>
                      <ArrowRight className="w-6 h-6" />
                    </>
                  )}
                </motion.button>
              </div>
            </form>

            {/* Trust Badges */}
            <div className="bg-gradient-to-br from-islamic-50 to-gold-50 px-8 py-6 border-t-2 border-islamic-100">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: Lock, text: 'Aman & Terenkripsi' },
                  { icon: Shield, text: 'Data Terlindungi' },
                  { icon: Mail, text: 'Kirim Instant' },
                  { icon: Zap, text: 'Support 24/7' },
                ].map((badge, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2">
                    <badge.icon className="w-5 h-5 text-islamic-600" />
                    <p className="text-xs font-medium text-gray-700 text-center">{badge.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Payment Methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-600 mb-4 font-medium">Metode Pembayaran yang Tersedia:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Transfer Bank', 'E-Wallet', 'QRIS', 'Virtual Account'].map((method, idx) => (
                <div key={idx} className="px-4 py-2 bg-white rounded-full border-2 border-islamic-200 text-sm font-medium text-gray-700 shadow-sm">
                  {method}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg font-semibold mb-4">Produk Digital Al-Qur'an</p>
          <p className="text-gray-400 mb-6">© 2025 - Hak Cipta Dilindungi</p>
          <div className="flex justify-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
            <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
          </div>
        </div>
      </footer>

      {/* Floating CTA Button */}
      <motion.button
        initial={{ opacity: 0, y: 100 }}
        animate={{ 
          opacity: showFloatingCTA ? 1 : 0,
          y: showFloatingCTA ? 0 : 100 
        }}
        transition={{ duration: 0.3 }}
        onClick={scrollToCheckout}
        className="fixed bottom-6 right-6 z-50 px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-bold rounded-full shadow-2xl hover:shadow-gold-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-2"
      >
        <span className="hidden sm:inline">Pesan Sekarang</span>
        <span className="sm:hidden">Pesan</span>
        <span className="text-xl">→</span>
      </motion.button>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/6285123759525?text=Halo,%20saya%20tertarik%20dengan%20produk%20Al-Quran%20digital"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 left-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 group"
      >
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Chat WhatsApp
        </div>
      </motion.a>
    </div>
  );
}
