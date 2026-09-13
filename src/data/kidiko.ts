export const indexedRoutes = [
  '/',
  '/jejoo/',
  '/checkout/',
  '/toko/',
  '/kontak/',
  '/tentang/',
  '/impact/',
  '/product/toefl-itp-kidiko/',
  '/toefl-itp/',
  '/product/paket-keluarga-grup-wa-dika-maksimal-5-peserta/',
  '/product/paket-kelas-grup-wa-diko-maksimal-50-peserta/',
  '/product/paket-keluarga-grup-wa-diko-maksimal-5-peserta/',
  '/penawaran/',
  '/product/paket-komunitas-grup-wa-diki-maksimal-50-peserta/',
  '/author/kidiko/',
  '/product/paket-kelas-grup-wa-dika-maksimal-50-peserta/',
  '/product-category/paket-ai/',
  '/blog/',
  '/pengembang/',
  '/product/paket-kawan-grup-wa-diki-maksimal-5-peserta/',
];

export const products = [
  {
    slug: 'toefl-itp-kidiko',
    name: 'TOEFL ITP Kidiko',
    audience: 'Siswa, mahasiswa, dan kelas persiapan tes',
    capacity: 'Program latihan terarah',
    description:
      'Pendamping latihan TOEFL ITP berbasis AI untuk drilling vocabulary, grammar, reading, dan pembahasan yang bisa diakses lewat grup WhatsApp.',
    features: ['Latihan bertahap', 'Pembahasan jawaban', 'Materi bisa memakai RAG', 'Rekap progres peserta'],
  },
  {
    slug: 'paket-keluarga-grup-wa-dika-maksimal-5-peserta',
    name: 'Paket Keluarga Grup WA Dika',
    audience: 'Keluarga kecil',
    capacity: 'Maksimal 5 peserta',
    description:
      'AI pendamping belajar untuk keluarga dengan kontrol orang tua atau pendamping agar anak tetap bertanya dan belajar secara aman.',
    features: ['Grup keluarga', 'Moderasi prompt', 'Ringkasan aktivitas', 'Bahan belajar keluarga'],
  },
  {
    slug: 'paket-keluarga-grup-wa-diko-maksimal-5-peserta',
    name: 'Paket Keluarga Grup WA Diko',
    audience: 'Keluarga kecil',
    capacity: 'Maksimal 5 peserta',
    description:
      'Paket grup WhatsApp untuk mendampingi rutinitas belajar harian anak, tanya jawab, dan latihan mandiri dengan pengawasan.',
    features: ['Respons AI terkendali', 'Pantauan wali', 'Belajar di WA', 'Cocok untuk sinyal terbatas'],
  },
  {
    slug: 'paket-kawan-grup-wa-diki-maksimal-5-peserta',
    name: 'Paket Kawan Grup WA Diki',
    audience: 'Kelompok belajar kecil',
    capacity: 'Maksimal 5 peserta',
    description:
      'Paket untuk teman belajar yang ingin berdiskusi, bertanya ke AI, dan tetap menjaga diskusi sosial di dalam grup.',
    features: ['Diskusi kelompok', 'AI sebagai fasilitator', 'Batasan topik aman', 'Cocok untuk peer learning'],
  },
  {
    slug: 'paket-kelas-grup-wa-diko-maksimal-50-peserta',
    name: 'Paket Kelas Grup WA Diko',
    audience: 'Kelas sekolah atau bimbel',
    capacity: 'Maksimal 50 peserta',
    description:
      'AI kelas di grup WhatsApp untuk membantu menjawab pertanyaan siswa, merujuk materi kelas, dan memberi guru ruang untuk memvalidasi jawaban.',
    features: ['Dashboard guru', 'RAG dari materi kelas', 'Moderasi keamanan', 'Rekap aktivitas siswa'],
  },
  {
    slug: 'paket-kelas-grup-wa-dika-maksimal-50-peserta',
    name: 'Paket Kelas Grup WA Dika',
    audience: 'Kelas besar',
    capacity: 'Maksimal 50 peserta',
    description:
      'Pendamping AI untuk kelas aktif, membantu guru mengelola pertanyaan yang berulang dan menjaga siswa tetap berinteraksi.',
    features: ['Validasi guru', 'Catatan aktivitas', 'Kontrol topik', 'Pemakaian ringan di jaringan rendah'],
  },
  {
    slug: 'paket-komunitas-grup-wa-diki-maksimal-50-peserta',
    name: 'Paket Komunitas Grup WA Diki',
    audience: 'Komunitas belajar',
    capacity: 'Maksimal 50 peserta',
    description:
      'Paket untuk komunitas pendidikan yang membutuhkan AI penjawab, kurasi materi, dan moderasi agar diskusi tetap sehat.',
    features: ['Komunitas belajar', 'Basis pengetahuan komunitas', 'Moderasi', 'Ringkasan diskusi'],
  },
  {
    slug: 'jejoo-guru-mandiri',
    name: 'Jejoo AI — Guru & Pendamping Mandiri',
    audience: 'Guru kelas inklusi, guru pendamping khusus (GPK), orang tua',
    capacity: '1 Grup / Personal Chat',
    description:
      'Asisten riset AI untuk pendampingan anak berkebutuhan khusus (ADHD, ASD, Slow Learner), penyusunan PPI, dan akses 30 Master Kartu Visual ADHD & PBS.',
    features: [
      'Akses Bot WA Jejoo untuk 1 grup / personal',
      'Download 30 Master Kartu Visual PPTX Editable',
      'Konsultasi strategi belajar ramah sensorik',
      'Rujukan konsultasi ke Tim Tenaga Ahli'
    ],
  },
  {
    slug: 'jejoo-sekolah-inklusi-pro',
    name: 'Jejoo AI — Sekolah Inklusi Pro',
    audience: 'Sekolah Penyelenggara Pendidikan Inklusif (SPPI), SLB, Bimbel Khusus',
    capacity: 'Hingga 5 Grup Kelas / Tim Guru',
    description:
      'Paket lengkap pendampingan sekolah inklusi dengan bot AI terintegrasi RAG materi/pedoman sekolah, dasbor pemantauan aktivitas guru, dan prioritas rujukan ahli.',
    features: [
      'Akses Bot WA Jejoo hingga 5 grup kelas',
      'Kustomisasi RAG (unggah panduan sekolah/modul inklusi)',
      'Akses 30 Master Kartu Visual + Template Modifikasi',
      'Dashboard rekap percakapan & ekspor riset kasus',
      'Prioritas rujukan konsultasi ke Dr. Istiarsyah & Tim Psikolog'
    ],
  },
  {
    slug: 'jejoo-kemitraan-khusus',
    name: 'Jejoo AI — Kemitraan Dinas & Yayasan',
    audience: 'Dinas Pendidikan, Yayasan Sekolah Terpadu, Laboratorium Kampus',
    capacity: 'Skala Sekolah / Kabupaten / Custom',
    description:
      'Program kemitraan strategis implementasi pendidikan inklusif berbasis AI skala luas, workshop guru, dan pendampingan Penelitian Tindakan Kelas (PTK).',
    features: [
      'Deployment bot multi-grup tak terbatas',
      'Workshop & pelatihan berkala guru inklusi',
      'Pendampingan riset & evaluasi komprehensif',
      'Dedicated support & SLA respon cepat'
    ],
  },
];

export const pillars = [
  {
    title: 'AI di WhatsApp',
    text: 'Siswa dan guru tidak perlu memasang aplikasi baru. Kidiko hadir di grup WA yang sudah dipakai setiap hari.',
  },
  {
    title: 'RAG untuk jawaban presisi',
    text: 'Guru dapat menyiapkan materi, aturan kelas, dan dokumen rujukan agar jawaban AI mengikuti konteks pembelajaran.',
  },
  {
    title: 'Guru tetap memantau',
    text: 'Aktivitas siswa bisa diringkas, dipantau, dan divalidasi sehingga AI membantu kelas tanpa menggantikan peran guru.',
  },
  {
    title: 'Moderasi prompt',
    text: 'Kidiko membatasi prompt berbahaya, penyalahgunaan, dan permintaan di luar konteks belajar.',
  },
];

export interface PlanDetail {
  id: string;
  name: string;
  category: string;
  price: string;
  period: string;
  badge?: string;
  description: string;
  capacity: string;
  features: string[];
}

export const checkoutPlans: Record<string, PlanDetail> = {
  'jejoo-guru': {
    id: 'jejoo-guru',
    name: 'Jejoo AI — Guru Mandiri',
    category: 'Pendidikan Inklusif',
    price: 'Rp 99.000',
    period: '/bulan',
    badge: 'Starter Inklusi',
    description: 'Akses asisten AI riset pendidikan inklusi di WhatsApp untuk guru pendamping atau orang tua.',
    capacity: '1 Grup WA / Penggunaan Personal',
    features: [
      'Akses Bot WA Jejoo responsif 24/7',
      'Unduh 30 Master Kartu Visual PPTX Editable',
      'Panduan strategi instruksi ramah ADHD & ASD',
      'Akses direktori rujukan konsultasi tenaga ahli',
    ],
  },
  'jejoo-sekolah': {
    id: 'jejoo-sekolah',
    name: 'Jejoo AI — Sekolah Inklusi Pro',
    category: 'Pendidikan Inklusif',
    price: 'Rp 499.000',
    period: '/bulan',
    badge: 'Paling Populer',
    description: 'Solusi lengkap sekolah penyelenggara pendidikan inklusi untuk mendukung seluruh tim guru kelas.',
    capacity: 'Hingga 5 Grup Kelas / Guru',
    features: [
      'Akses Bot WA Jejoo hingga 5 grup WhatsApp',
      'RAG Khusus: Integrasi modul & aturan sekolah',
      'Master 30 Kartu Visual + Panduan Cetak Sekolah',
      'Dashboard pantauan percakapan & ekspor riset',
      'Prioritas rujukan konsultasi Dr. Istiarsyah & Ibu Dyah',
    ],
  },
  'jejoo-kemitraan': {
    id: 'jejoo-kemitraan',
    name: 'Jejoo AI — Kemitraan Dinas & Yayasan',
    category: 'Pendidikan Inklusif',
    price: 'Kemitraan Kustom',
    period: '',
    badge: 'Enterprise',
    description: 'Implementasi menyeluruh untuk yayasan pendidikan, dinas pendidikan, atau program riset kampus.',
    capacity: 'Skala Sekolah / Kabupaten / Multi-kampus',
    features: [
      'Deployment skala besar tanpa batas grup',
      'Sesi workshop & pelatihan langsung untuk guru',
      'Pendampingan Penelitian Tindakan Kelas (PTK)',
      'Dukungan prioritas & penyesuaian model AI khusus',
    ],
  },
  'toefl-itp': {
    id: 'toefl-itp',
    name: 'TOEFL ITP Kidiko',
    category: 'Bahasa & Ujian',
    price: 'Hubungi Kami',
    period: '',
    description: 'Pendamping latihan TOEFL ITP berbasis AI untuk drilling vocabulary, grammar, reading, dan pembahasan.',
    capacity: 'Program latihan terarah',
    features: ['Latihan bertahap', 'Pembahasan jawaban', 'Materi memakai RAG', 'Rekap progres peserta'],
  },
  'paket-keluarga-dika': {
    id: 'paket-keluarga-dika',
    name: 'Paket Keluarga Grup WA Dika',
    category: 'Keluarga',
    price: 'Hubungi Kami',
    period: '',
    description: 'AI pendamping belajar untuk keluarga dengan kontrol orang tua atau pendamping.',
    capacity: 'Maksimal 5 peserta',
    features: ['Grup keluarga', 'Moderasi prompt', 'Ringkasan aktivitas', 'Bahan belajar keluarga'],
  },
  'paket-kelas-diko': {
    id: 'paket-kelas-diko',
    name: 'Paket Kelas Grup WA Diko',
    category: 'Sekolah & Bimbel',
    price: 'Hubungi Kami',
    period: '',
    description: 'AI kelas di grup WhatsApp untuk membantu menjawab pertanyaan siswa dan merujuk materi kelas.',
    capacity: 'Maksimal 50 peserta',
    features: ['Dashboard guru', 'RAG dari materi kelas', 'Moderasi keamanan', 'Rekap aktivitas siswa'],
  },
};

export const visualCardsData = {
  level1: [
    { number: 1, title: 'LIHAT GURU', icon: '👀', desc: 'Mata tertuju ke guru, letakkan alat tulis sejenak saat guru berbicara.' },
    { number: 2, title: 'DENGARKAN DULU', icon: '👂', desc: 'Telinga menyimak arahan sampai tuntas sebelum mulai mengerjakan tugas.' },
    { number: 3, title: 'TUNGGU GILIRAN', icon: '✋', desc: 'Angkat tangan dan tunggu dipanggil sebelum mulai berbicara.' },
    { number: 4, title: 'DUDUK DI KURSI', icon: '🪑', desc: 'Duduk tegak, kaki di lantai, dan meja tetap rapi dan siap belajar.' },
    { number: 5, title: 'KERJAKAN TUGAS', icon: '📝', desc: 'Selesaikan 1 nomor demi 1 nomor secara bertahap tanpa tergesa-gesa.' },
    { number: 6, title: 'GANTI KEGIATAN', icon: '🔄', desc: 'Rapikan buku yang selesai, siapkan buku pelajaran baru dengan tenang.' },
    { number: 7, title: 'ANTRE TERTIB', icon: '🚶', desc: 'Berdiri di belakang teman, jaga jarak 1 lengan tanpa saling mendorong.' },
    { number: 8, title: 'RAPIKAN MEJA', icon: '🎒', desc: 'Simpan pensil & buku ke dalam tas setelah seluruh kegiatan selesai.' },
    { number: 9, title: 'SUARA BERBISIK', icon: '🤫', desc: 'Gunakan Suara Level 1 saat diskusi kelompok berpasangan.' },
    { number: 10, title: 'BERBAGI ALAT', icon: '🤝', desc: 'Bergantian menggunakan alat tulis, gunting, atau krayon bersama teman.' },
  ],
  level2: [
    { number: 1, title: 'TARIK NAPAS', icon: '🌬️', desc: 'Tarik napas dalam 3 detik, hembuskan 3 kali agar tubuh kembali rileks.' },
    { number: 2, title: 'MINTA JEDA', icon: '⏸️', desc: 'Gunakan break card untuk jeda mandiri 3–5 menit saat merasa lelah.' },
    { number: 3, title: 'CALMING CORNER', icon: '🛋️', desc: 'Pindah ke sudut tenang kelas saat merasa suasana terlalu bising/ramai.' },
    { number: 4, title: 'MINUM AIR', icon: '💧', desc: 'Minum air putih perlahan untuk meredakan ketegangan fisik dan pikiran.' },
    { number: 5, title: 'MINTA BANTUAN', icon: '🙋', desc: 'Angkat tangan saat merasa kesulitan atau bingung dengan soal pelajaran.' },
    { number: 6, title: 'PEREGANGAN TUBUH', icon: '🙆', desc: 'Lakukan gerakan peregangan tangan, leher, dan bahu secara perlahan.' },
    { number: 7, title: 'HITUNG 1–10', icon: '🔢', desc: 'Pejamkan mata dan berhitung perlahan 1 sampai 10 di dalam hati.' },
    { number: 8, title: 'SKALA PERASAAN', icon: '🙂', desc: 'Tunjukkan emosi: Senang 🙂, Bingung 😐, Butuh Bantuan 😟.' },
    { number: 9, title: 'STRESS BALL', icon: '🎾', desc: 'Remas bola karet/fidget tanpa suara berlebih untuk menyalurkan energi.' },
    { number: 10, title: 'SIAP BELAJAR', icon: '🎯', desc: 'Tubuh sudah tenang, emosi stabil, dan pikiran siap fokus belajar kembali.' },
  ],
  level3: [
    { number: 1, title: 'STOP BERHENTI', icon: '🛑', desc: 'Hentikan tindakan sekarang juga, letakkan benda, dan diam di tempat aman.' },
    { number: 2, title: 'TANGAN AMAN', icon: '🙌', desc: 'Tangan untuk diri sendiri di pangkuan (cegah memukul atau melempar).' },
    { number: 3, title: 'JAGA JARAK', icon: '↔️', desc: 'Mundur 2 langkah untuk saling menjaga ruang gerak aman bersama.' },
    { number: 4, title: 'DEKAT GURU', icon: '👩‍🏫', desc: 'Duduk di samping guru untuk mendapatkan pendampingan yang tenang.' },
    { number: 5, title: 'TENANGKAN DIRI', icon: '🧘', desc: 'Duduk rileks di lantai beralas dan bernapas teratur bersama arahan guru.' },
    { number: 6, title: 'AMANKAN BENDA', icon: '🛡️', desc: 'Guru dan siswa menyingkirkan benda keras atau tajam dari sekitar meja.' },
    { number: 7, title: 'KE RUANG AMAN', icon: '🚪', desc: 'Pindah sementara ke ruang UKS atau ruang bimbingan konseling yang tenang.' },
    { number: 8, title: 'LINDUNGI TEMAN', icon: '👥', desc: 'Ajak teman-teman lain bergeser tertib agar suasana tetap kondusif.' },
    { number: 9, title: 'RASA NYAMAN', icon: '❤️', desc: 'Afirmasi positif guru: "Kamu aman di sini, bapak/ibu guru siap membantumu".' },
    { number: 10, title: 'RUJUK TIM AHLI', icon: '📞', desc: 'Koordinasikan rujukan segera ke Bp. Dr. Istiarsyah & Tim Psikolog Inklusi.' },
  ],
};

