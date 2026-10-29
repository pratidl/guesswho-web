# 🎭 GuessWho – Famous People Guessing Game

Aplikasi web interaktif permainan menebak tokoh terkenal (*famous people*) nasional dan internasional berdasarkan foto yang awalnya sangat blur, kemudian menjadi semakin tajam seiring berjalannya waktu, disertai petunjuk bertahap dan sistem scoring berbasis kecepatan.

Dibuat sebagai proyek tugas besar mata kuliah **Teknik Multimedia** dengan fokus utama pada pengalaman bermain interaktif, multimedia dinamis, desain modern dark-mode, dan fitur bermain bersama teman secara online (*Multiplayer Room*).

---

## 🌟 Fitur Utama

### 1. Mode Permainan
- **Solo Mode**:
  - Pilihan kategori tokoh dan mode acak (*All Categories*).
  - Pilihan jumlah ronde (3, 5, 8, atau 10 ronde) dan durasi per ronde (20s, 30s, atau 45s).
  - Foto tokoh dengan efek blur dinamis (26px hingga 0px).
  - Petunjuk informasi bertahap yang terbuka otomatis pada detik ke-8, 15, dan 22.
  - Papan skor dan ringkasan performa akhir (total skor, jumlah benar, rata-rata waktu, dan akurasi).
  - Penyimpanan *High Score* lokal secara persisten.

- **Play With Friends (Multiplayer Real-Time)**:
  - Pembuatan room dengan kode unik 6 karakter (contoh: `G7K9P2`).
  - Fitur salin dan bagikan kode room dengan sekali klik.
  - Lobby bersama dengan kapasitas hingga 8 pemain.
  - Kontrol permainan penuh di tangan Host (kategori, jumlah ronde, durasi ronde).
  - Timer, foto blur, dan petunjuk tersinkronisasi serentak untuk semua pemain di room.
  - Klasemen peringkat (*live leaderboard*) real-time saat pemain menebak benar.
  - Panggung podium juara (🥇 Juara 1, 🥈 Juara 2, 🥉 Juara 3) dan ringkasan skor seluruh pemain di akhir game.
  - Opsi *Play Again* langsung di room yang sama setelah permainan berakhir.

### 2. Sistem Tebak Nama Manual Cerdas (Fuzzy Matching)
- Input teks manual (bukan pilihan ganda) dengan dukungan tombol **Enter** dan **Submit**.
- Normalisasi teks: mengabaikan huruf kapital/kecil, spasi berlebih, tanda baca, serta aksen/diakritik.
- Toleransi kesalahan ketik (*typo-tolerant*) menggunakan algoritma **Levenshtein Distance** dengan ambang batas adaptif sesuai panjang nama.
- Dukungan variasi nama lengkap, nama panggilan, nama panggung, dan alias (contoh: "Cristiano Ronaldo", "Ronaldo", "CR7", "Bung Karno", "Jokowi", "MJ", "Habibie", dll.).

### 3. Sistem Blur & Petunjuk Multimedia Dinamis
- Filter blur CSS responsif (`filter: blur(...)`) dengan transisi halus (`transition: filter 0.45s ease-out`).
- Foto bersumber dari tokoh terverifikasi dengan atribusi legal Wikimedia Commons.
- Mekanisme proteksi *error fallback* jika koneksi lambat atau gambar gagal termuat.
- Audio synthesizer interaktif menggunakan **Web Audio API** tanpa ketergantungan file audio eksternal (efek chime jawaban benar, buzzer jawaban salah, countdown tick 5 detik terakhir, petunjuk baru, dan fanfare perayaan kemenangan), lengkap dengan tombol *Mute/Unmute*.
- Efek selebrasi partikel konfeti (*canvas-confetti*) saat jawaban benar dan saat naik ke podium juara.

### 4. Sistem Scoring Kecepatan
Skor dihitung berdasarkan sisa waktu saat jawaban benar dikirim:
$$\text{score} = \text{round}\left(\text{maxScore} \times \frac{\text{remainingTime}}{\text{totalTime}}\right)$$
- Skor maksimum: 1000 poin per ronde.
- Menjawab di awal ronde menghasilkan poin maksimal.
- Dilengkapi animasi skor melayang (*floating score popups*).

---

## 🛠️ Teknologi yang Digunakan

| Komponen | Teknologi |
|---|---|
| **Frontend Framework** | [React.js](https://react.dev/) 18 (Hooks, Functional Components) |
| **Build Tool & Dev Server** | [Vite](https://vitejs.dev/) |
| **Bahasa Pemrograman** | JavaScript (ESNext) |
| **Styling & Desain** | Vanilla CSS modern, Glassmorphism, CSS Custom Properties, Dark Mode Theme |
| **Ikon UI** | [Lucide React](https://lucide.dev/) |
| **Efek Visual** | Canvas Confetti & Web Audio API Synthesizer |
| **Backend & Real-Time Sync** | [Firebase Realtime Database](https://firebase.google.com/) + Built-in Local Multi-Tab Sync Bus (BroadcastChannel & Storage events) |
| **Package Manager** | `npm` |

---

## 📂 Struktur Proyek

```
guesswho-game/
├── index.html                   # HTML Entry Point
├── package.json                 # Konfigurasi dependensi dan skrip proyek
├── vite.config.js               # Konfigurasi Vite
├── .env.example                 # Contoh variabel lingkungan Firebase
├── README.md                    # Dokumentasi lengkap proyek
└── src/
    ├── main.jsx                 # React root renderer
    ├── App.jsx                  # Root Component & State Navigator
    ├── components/
    │   ├── Navbar.jsx           # Navigasi atas, brand, status skor, audio mute toggle
    │   ├── BlurImage.jsx        # Komponen gambar dengan blur progresif & fallback
    │   ├── Timer.jsx            # Countdown timer dengan indikator visual & warna dinamis
    │   ├── AnswerInput.jsx      # Input jawaban teks, submit, dan feedback typo
    │   ├── HintPanel.jsx        # 3 slot petunjuk bertahap dengan status kunci/buka
    │   ├── ScoreBoard.jsx       # Header skor, indikator ronde, dan animasi +pts
    │   ├── Leaderboard.jsx      # Papan peringkat real-time untuk multiplayer
    │   └── RoomCode.jsx         # Tampilan kode room 6 karakter & tombol salin
    ├── pages/
    │   ├── Home.jsx             # Landing page
    │   ├── CategorySelection.jsx# Pilihan kategori tokoh & setting permainan
    │   ├── RoomJoinCreate.jsx   # Menu pembuatan & penggabungan room multiplayer
    │   ├── RoomLobby.jsx        # Ruang tunggu lobby multiplayer
    │   ├── Game.jsx             # Arena permainan utama (Solo & Multiplayer)
    │   ├── Results.jsx          # Layar hasil akhir, statistik, dan podium pemenang
    │   └── HowToPlay.jsx        # Panduan aturan main dan penjelasan skor
    ├── data/
    │   └── people.js            # Dataset 39+ tokoh terverifikasi (9 kategori)
    ├── hooks/
    │   └── useGameTimer.js      # Custom hook timer sinkron & kalkulasi blur
    ├── services/
    │   ├── firebaseService.js   # Konfigurasi dan inisialisasi Firebase
    │   ├── roomService.js       # Logika room multiplayer (Firebase & Broadcast fallback)
    │   ├── answerValidator.js   # Validasi jawaban, fuzzy matching & Levenshtein
    │   ├── scoreCalculator.js   # Rumus skor kecepatan dan perankingan
    │   └── soundService.js      # Synthesizer audio effects (Web Audio API)
    ├── utils/
    │   └── normalizeAnswer.js   # Utilitas normalisasi teks & penghitung jarak Levenshtein
    └── styles/
        └── global.css           # Tema dark mode, glassmorphism, dan animasi
```

---

## 🚀 Cara Menjalankan Proyek Secara Lokal

### Prasyarat:
- [Node.js](https://nodejs.org/) versi 18 atau lebih baru.
- `npm` (sudah terinstal otomatis bersama Node.js).

### Langkah Instalasi:

1. **Buka terminal dan masuk ke folder proyek:**
   ```bash
   cd guesswho-game
   ```

2. **Instal seluruh package dependensi:**
   ```bash
   npm install
   ```

3. **Jalankan local development server:**
   ```bash
   npm run dev
   ```

4. **Buka aplikasi di browser:**
   Akses URL yang muncul di terminal (biasanya `http://localhost:5173`).

---

## 🌐 Menjalankan Multiplayer

Aplikasi ini dirancang dengan arsitektur **Zero-Friction Testing**:

### A. Pengujian Instan Tanpa Setup Cloud (Dual-Tab Local Testing)
Anda dapat langsung menguji fitur multiplayer secara instan:
1. Buka `http://localhost:5173` di jendela browser pertama.
2. Klik **Play With Friends**, masukkan nama (misal: "Budi"), pilih **Create Room**, lalu salin kode room yang muncul.
3. Buka jendela browser kedua (atau tab baru / jendela Incognito), akses `http://localhost:5173`, masukkan nama (misal: "Siti"), pilih **Join Room**, dan tempel kode room.
4. Kedua jendela akan langsung terhubung ke ruang tunggu (Lobby) yang sama secara real-time!
5. Host dapat menekan tombol **Mulai Permainan Sekarang**, dan kedua pemain akan menerima pertanyaan, foto blur, petunjuk, serta pembaruan leaderboard secara serentak.

### B. Menghubungkan ke Firebase Cloud (Opsional untuk Produksi)
Untuk deployment produksi di internet:
1. Buat proyek baru di [Firebase Console](https://console.firebase.google.com/).
2. Aktifkan **Realtime Database** pada mode *Free Spark Plan*.
3. Salin file `.env.example` menjadi `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
4. Masukkan kredensial Firebase Anda ke `.env.local`:
   ```env
   VITE_FIREBASE_API_KEY=AIzaSy...
   VITE_FIREBASE_AUTH_DOMAIN=guesswho-game.firebaseapp.com
   VITE_FIREBASE_DATABASE_URL=https://guesswho-game-default-rtdb.firebaseio.com
   VITE_FIREBASE_PROJECT_ID=guesswho-game
   VITE_FIREBASE_STORAGE_BUCKET=guesswho-game.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=1234567890
   VITE_FIREBASE_APP_ID=1:1234567890:web:...
   ```
5. Konfigurasikan Security Rules pada Firebase Realtime Database:
   ```json
   {
     "rules": {
       "rooms": {
         "$roomCode": {
           ".read": true,
           ".write": true
         }
       }
     }
   }
   ```
6. Jalankan kembali `npm run dev`.

---

## 📦 Build untuk Deployment (Vercel, Netlify, atau GitHub Pages)

Untuk menghasilkan bundel produksi teroptimasi:
```bash
npm run build
```
File hasil build akan berada di direktori `dist/` dan siap diunggah ke layanan hosting gratis mana pun (Vercel, Netlify, Render, Cloudflare Pages, atau Firebase Hosting).
