// Dataset tokoh tambahan; mencakup 55 tokoh awal dan 156 tokoh baru dari daftar pengguna. imageUrl/imageSource diisi otomatis oleh resolve-images.mjs (berdasarkan wikiTitle).
// Kategori yang dipakai: president, politician, music, actor, athlete, creator, history, scientist, other
// Sesuaikan nilai `category` dengan key yang dipakai di projectmu jika berbeda.
export const newPeople = [
  // ===== PRESIDEN & MANTAN PRESIDEN =====
  {
    id: 'person_102', name: 'Soeharto',
    aliases: ['Suharto', 'Pak Harto', 'HM Soeharto', 'Jenderal Soeharto'],
    category: 'president', nationality: 'Indonesia',
    profession: 'Presiden Kedua Republik Indonesia',
    hints: [
      'Berlatar belakang militer dan memimpin Operasi Serangan Umum 1 Maret 1949 di Yogyakarta.',
      'Dijuluki "Bapak Pembangunan" dan menjalankan program Repelita selama masa jabatannya.',
      'Menjabat sekitar 32 tahun sebelum mengundurkan diri pada Mei 1998.'
    ],
    wikiTitle: 'Suharto', imageUrl: '', imageSource: '',
    acceptedAnswers: ['Soeharto', 'Suharto', 'Pak Harto', 'HM Soeharto']
  },
  {
    id: 'person_103', name: 'B.J. Habibie',
    aliases: ['Habibie', 'BJ Habibie', 'Bacharuddin Jusuf Habibie', 'Rudy Habibie'],
    category: 'president', nationality: 'Indonesia',
    profession: 'Presiden Ketiga RI & Insinyur Dirgantara',
    hints: [
      'Lulusan Jerman yang pernah bekerja di industri pesawat dan dijuluki "Mr. Crack" karena keahliannya soal keretakan konstruksi pesawat.',
      'Memimpin pengembangan pesawat N-250 buatan IPTN (kini PT Dirgantara Indonesia).',
      'Kisah cintanya dengan Ainun diangkat ke film "Habibie & Ainun"; ia menjabat presiden setelah Soeharto mundur.'
    ],
    wikiTitle: 'B._J._Habibie', imageUrl: '', imageSource: '',
    acceptedAnswers: ['Habibie', 'BJ Habibie', 'B.J. Habibie', 'Bacharuddin Jusuf Habibie']
  },
  {
    id: 'person_104', name: 'Abraham Lincoln',
    aliases: ['Lincoln', 'Abe Lincoln', 'Honest Abe'],
    category: 'president', nationality: 'Amerika Serikat',
    profession: 'Presiden Ke-16 Amerika Serikat',
    hints: [
      'Dikenal dengan topi tinggi dan julukan "Honest Abe"; berasal dari keluarga sederhana di Kentucky.',
      'Memimpin negaranya selama Perang Saudara dan menerbitkan Emancipation Proclamation untuk menghapus perbudakan.',
      'Ditembak oleh John Wilkes Booth di Ford\'s Theatre pada tahun 1865.'
    ],
    wikiTitle: 'Abraham_Lincoln', imageUrl: '', imageSource: '',
    acceptedAnswers: ['Abraham Lincoln', 'Lincoln', 'Abe Lincoln']
  },
  {
    id: 'person_105', name: 'Barack Obama',
    aliases: ['Obama', 'Barack Hussein Obama', 'Barry Obama'],
    category: 'president', nationality: 'Amerika Serikat',
    profession: 'Presiden Ke-44 Amerika Serikat',
    hints: [
      'Pernah tinggal di Jakarta semasa kecil dan bersekolah di SD Menteng.',
      'Menjadi presiden berkulit hitam pertama di negaranya dan memenangkan Nobel Perdamaian 2009.',
      'Slogan kampanyenya "Yes We Can" dan "Hope"; mengesahkan Affordable Care Act (Obamacare).'
    ],
    wikiTitle: 'Barack_Obama', imageUrl: '', imageSource: '',
    acceptedAnswers: ['Barack Obama', 'Obama', 'Barack Hussein Obama']
  },
  {
    id: 'person_106', name: 'Nelson Mandela',
    aliases: ['Mandela', 'Madiba', 'Rolihlahla Mandela'],
    category: 'president', nationality: 'Afrika Selatan',
    profession: 'Presiden Ke-7 Afrika Selatan & Aktivis Anti-Apartheid',
    hints: [
      'Dipenjara selama 27 tahun, sebagian besar di Pulau Robben.',
      'Dipanggil dengan nama klan "Madiba" oleh rakyatnya.',
      'Menjadi presiden kulit hitam pertama negaranya pada 1994 dan meraih Nobel Perdamaian 1993.'
    ],
    wikiTitle: 'Nelson_Mandela', imageUrl: '', imageSource: '',
    acceptedAnswers: ['Nelson Mandela', 'Mandela', 'Madiba']
  },

  // ===== POLITIKUS & PEMIMPIN NEGARA =====
  {
    id: 'person_107', name: 'Mohammad Hatta',
    aliases: ['Hatta', 'Bung Hatta', 'Moh. Hatta', 'Drs. Mohammad Hatta'],
    category: 'politician', nationality: 'Indonesia',
    profession: 'Wakil Presiden Pertama RI & Proklamator',
    hints: [
      'Berasal dari Bukittinggi, Sumatera Barat, dan menempuh studi ekonomi di Rotterdam, Belanda.',
      'Dijuluki "Bapak Koperasi Indonesia".',
      'Berdampingan dengan Soekarno sebagai dwitunggal yang menandatangani naskah Proklamasi.'
    ],
    wikiTitle: 'Mohammad_Hatta', imageUrl: '', imageSource: '',
    acceptedAnswers: ['Mohammad Hatta', 'Hatta', 'Bung Hatta', 'Moh Hatta']
  },
  {
    id: 'person_108', name: 'Sutan Sjahrir',
    aliases: ['Sjahrir', 'Syahrir', 'Sutan Syahrir', 'Bung Kecil'],
    category: 'politician', nationality: 'Indonesia',
    profession: 'Perdana Menteri Pertama Indonesia',
    hints: [
      'Dikenal dengan julukan "Bung Kecil" karena posturnya yang mungil.',
      'Pernah diasingkan ke Boven Digoel dan Banda Neira oleh pemerintah kolonial Belanda.',
      'Memimpin Partai Sosialis Indonesia dan menjabat tiga kali sebagai Perdana Menteri pada masa awal kemerdekaan.'
    ],
    wikiTitle: 'Sutan_Sjahrir', imageUrl: '', imageSource: '',
    acceptedAnswers: ['Sutan Sjahrir', 'Sjahrir', 'Syahrir', 'Sutan Syahrir']
  },
  {
    id: 'person_109', name: 'Margaret Thatcher',
    aliases: ['Thatcher', 'Maggie Thatcher', 'Iron Lady', 'Baroness Thatcher'],
    category: 'politician', nationality: 'Inggris',
    profession: 'Perdana Menteri Inggris',
    hints: [
      'Berasal dari keluarga pedagang kelontong dan sempat belajar kimia di Oxford.',
      'Dijuluki "Iron Lady" karena sikapnya yang keras terhadap Uni Soviet dan serikat pekerja.',
      'Perempuan pertama yang menjadi Perdana Menteri Inggris (1979–1990) dan memimpin dalam Perang Falkland.'
    ],
    wikiTitle: 'Margaret_Thatcher', imageUrl: '', imageSource: '',
    acceptedAnswers: ['Margaret Thatcher', 'Thatcher', 'Maggie Thatcher', 'Iron Lady']
  },
  {
    id: 'person_110', name: 'Angela Merkel',
    aliases: ['Merkel', 'Angela Dorothea Merkel'],
    category: 'politician', nationality: 'Jerman',
    profession: 'Kanselir Jerman (2005–2021)',
    hints: [
      'Memiliki gelar doktor di bidang fisika dan tumbuh di Jerman Timur.',
      'Sering disebut sebagai pemimpin de facto Uni Eropa pada masa krisis utang zona euro.',
      'Dikenal dengan pose tangan membentuk belah ketupat dan memerintah Jerman selama 16 tahun.'
    ],
    wikiTitle: 'Angela_Merkel', imageUrl: '', imageSource: '',
    acceptedAnswers: ['Angela Merkel', 'Merkel']
  },
  {
    id: 'person_111', name: 'Mahatma Gandhi',
    aliases: ['Gandhi', 'Mohandas Gandhi', 'Mohandas Karamchand Gandhi', 'Bapu'],
    category: 'politician', nationality: 'India',
    profession: 'Pemimpin Gerakan Kemerdekaan India',
    hints: [
      'Pernah berprofesi sebagai pengacara dan mengembangkan perjuangannya pertama kali di Afrika Selatan.',
      'Menerapkan filosofi satyagraha, perlawanan tanpa kekerasan, termasuk lewat Salt March 1930.',
      'Dijuluki "Bapak Bangsa" India dan wafat ditembak pada 1948.'
    ],
    wikiTitle: 'Mahatma_Gandhi', imageUrl: '', imageSource: '',
    acceptedAnswers: ['Mahatma Gandhi', 'Gandhi', 'Mohandas Gandhi']
  },
  {
    id: 'person_112', name: 'Winston Churchill',
    aliases: ['Churchill', 'Sir Winston Churchill', 'Winston Spencer Churchill'],
    category: 'politician', nationality: 'Inggris',
    profession: 'Perdana Menteri Inggris Masa Perang Dunia II',
    hints: [
      'Dikenal dengan cerutu dan tanda "V" untuk Victory dengan jarinya.',
      'Memimpin Inggris melawan Nazi Jerman dan mengucapkan pidato "We shall fight on the beaches".',
      'Memenangkan Nobel Sastra 1953 atas karya tulis sejarah dan memoarnya.'
    ],
    wikiTitle: 'Winston_Churchill', imageUrl: '', imageSource: '',
    acceptedAnswers: ['Winston Churchill', 'Churchill', 'Sir Winston Churchill']
  },

  // ===== PENYANYI & MUSISI =====
  {
    id: 'person_113', name: 'Michael Jackson',
    aliases: ['MJ', 'King of Pop', 'Michael Joseph Jackson'],
    category: 'music', nationality: 'Amerika Serikat',
    profession: 'Penyanyi, Penari & Penulis Lagu',
    hints: [
      'Memulai karier sejak kecil bersama saudara-saudaranya dalam grup The Jackson 5.',
      'Terkenal dengan gerakan tari "moonwalk" dan sarung tangan putih berkilau.',
      'Albumnya "Thriller" (1982) menjadi salah satu album terlaris sepanjang masa; dijuluki "King of Pop".'
    ],
    wikiTitle: 'Michael_Jackson', imageUrl: '', imageSource: '',
    acceptedAnswers: ['Michael Jackson', 'MJ', 'King of Pop']
  },
  {
    id: 'person_114', name: 'Freddie Mercury',
    aliases: ['Mercury', 'Farrokh Bulsara', 'Freddy Mercury'],
    category: 'music', nationality: 'Inggris',
    profession: 'Vokalis Band Queen',
    hints: [
      'Lahir di Zanzibar dengan nama Farrokh Bulsara dan dikenal berkumis lebat serta gaya panggung teatrikal.',
      'Memiliki jangkauan suara empat oktaf dan penampilan legendarisnya di Live Aid 1985.',
      'Menulis lagu "Bohemian Rhapsody" dan "Don\'t Stop Me Now" bersama grup Queen.'
    ],
    wikiTitle: 'Freddie_Mercury', imageUrl: '', imageSource: '',
    acceptedAnswers: ['Freddie Mercury', 'Freddy Mercury', 'Mercury']
  },
  {
    id: 'person_115', name: 'Elvis Presley',
    aliases: ['Elvis', 'Elvis Aaron Presley', 'The King', 'King of Rock and Roll'],
    category: 'music', nationality: 'Amerika Serikat',
    profession: 'Penyanyi & Aktor, "King of Rock and Roll"',
    hints: [
      'Terkenal dengan gerakan pinggul yang sempat dianggap kontroversial di televisi era 1950-an.',
      'Tinggal di rumah bernama Graceland di Memphis, Tennessee.',
      'Hits-nya termasuk "Jailhouse Rock", "Hound Dog", dan "Can\'t Help Falling in Love".'
    ],
    wikiTitle: 'Elvis_Presley', imageUrl: '', imageSource: '',
    acceptedAnswers: ['Elvis Presley', 'Elvis', 'The King']
  },
  {
    id: 'person_116', name: 'Taylor Swift',
    aliases: ['Swift', 'Taylor Alison Swift', 'T-Swift', 'Tay Tay'],
    category: 'music', nationality: 'Amerika Serikat',
    profession: 'Penyanyi-Penulis Lagu',
    hints: [
      'Memulai karier di musik country sebelum beralih ke pop.',
      'Merekam ulang album-album lamanya dengan sebutan "Taylor\'s Version" untuk merebut kembali hak masternya.',
      'Penggemarnya disebut Swifties dan ia menggelar tur akbar bernama "The Eras Tour".'
    ],
    wikiTitle: 'Taylor_Swift', imageUrl: '', imageSource: '',
    acceptedAnswers: ['Taylor Swift', 'Swift', 'T-Swift']
  },
  {
    id: 'person_117', name: 'Rhoma Irama',
    aliases: ['Rhoma', 'Bang Haji', 'Raja Dangdut', 'H. Rhoma Irama'],
    category: 'music', nationality: 'Indonesia',
    profession: 'Penyanyi Dangdut & Pencipta Lagu',
    hints: [
      'Lahir di Tasikmalaya, Jawa Barat, dan dikenal dengan gaya rambut serta kacamata hitam khasnya.',
      'Mendirikan grup musik Soneta Group dan memberi nuansa dakwah pada lagu-lagunya.',
      'Dijuluki "Raja Dangdut" dan populer lewat lagu "Begadang" dan "Gelandangan".'
    ],
    wikiTitle: 'Rhoma_Irama', imageUrl: '', imageSource: '',
    acceptedAnswers: ['Rhoma Irama', 'Rhoma', 'Raja Dangdut', 'Bang Haji']
  },
  {
    id: 'person_118', name: 'Chrisye',
    aliases: ['Christian Rahadi', 'Chrisye Rahadi'],
    category: 'music', nationality: 'Indonesia',
    profession: 'Penyanyi Pop Legendaris',
    hints: [
      'Memulai karier sebagai pemain bas di grup Gipsy sebelum menjadi penyanyi solo.',
      'Bekerja sama dengan Guruh Soekarno Putra dalam album "Guruh Gipsy" dan dikenal berkat soundtrack film Badai Pasti Berlalu.',
      'Hits-nya termasuk "Hapus Aku", "Lilin-Lilin Kecil", dan "Gita Cinta dari SMA"; wafat pada 2007.'
    ],
    wikiTitle: 'Chrisye', imageUrl: '', imageSource: '',
    acceptedAnswers: ['Chrisye', 'Christian Rahadi']
  },

  // ===== AKTOR & AKTRIS =====
  {
    id: 'person_119', name: 'Charlie Chaplin',
    aliases: ['Chaplin', 'Charles Chaplin', 'Sir Charles Chaplin', 'The Tramp'],
    category: 'actor', nationality: 'Inggris',
    profession: 'Aktor, Sutradara & Komedian Film Bisu',
    hints: [
      'Ikon era film bisu dengan kostum topi bowler, tongkat, dan kumis kecil.',
      'Karakter ciptaannya yang paling terkenal adalah "The Tramp" (si Gelandangan).',
      'Menyutradarai dan membintangi "The Kid", "Modern Times", dan "The Great Dictator".'
    ],
    wikiTitle: 'Charlie_Chaplin', imageUrl: '', imageSource: '',
    acceptedAnswers: ['Charlie Chaplin', 'Chaplin', 'Charles Chaplin']
  },
  {
    id: 'person_120', name: 'Leonardo DiCaprio',
    aliases: ['DiCaprio', 'Leo DiCaprio', 'Leonardo Wilhelm DiCaprio', 'Leo'],
    category: 'actor', nationality: 'Amerika Serikat',
    profession: 'Aktor & Aktivis Lingkungan',
    hints: [
      'Dikenal aktif menyuarakan isu perubahan iklim lewat yayasannya sendiri.',
      'Berperan sebagai Jack Dawson dalam film "Titanic" (1997) dan Jordan Belfort dalam "The Wolf of Wall Street".',
      'Akhirnya memenangkan Piala Oscar Aktor Terbaik lewat film "The Revenant" (2015).'
    ],
    wikiTitle: 'Leonardo_DiCaprio', imageUrl: '', imageSource: '',
    acceptedAnswers: ['Leonardo DiCaprio', 'DiCaprio', 'Leo DiCaprio', 'Leonardo Di Caprio']
  },
  {
    id: 'person_121', name: 'Marilyn Monroe',
    aliases: ['Monroe', 'Norma Jeane Mortenson', 'Norma Jeane Baker'],
    category: 'actor', nationality: 'Amerika Serikat',
    profession: 'Aktris & Ikon Budaya Pop',
    hints: [
      'Nama lahirnya Norma Jeane Mortenson; rambut pirang platinum dan tahi lalat di wajahnya menjadi ciri khas.',
      'Membintangi "Gentlemen Prefer Blondes", "Some Like It Hot", dan "The Seven Year Itch".',
      'Menyanyikan "Happy Birthday, Mr. President" untuk John F. Kennedy pada 1962.'
    ],
    wikiTitle: 'Marilyn_Monroe', imageUrl: '', imageSource: '',
    acceptedAnswers: ['Marilyn Monroe', 'Monroe', 'Norma Jeane']
  },
  {
    id: 'person_122', name: 'Jackie Chan',
    aliases: ['Chan', 'Cheng Long', 'Chan Kong-sang', 'Sir Jackie Chan'],
    category: 'actor', nationality: 'Hong Kong (Tiongkok)',
    profession: 'Aktor Laga & Sutradara',
    hints: [
      'Dikenal melakukan sendiri adegan berbahaya dan memadukan kung fu dengan komedi.',
      'Membintangi film "Drunken Master", "Police Story", dan "Shanghai Noon".',
      'Berpasangan dengan Chris Tucker dalam trilogi "Rush Hour" dan mengisi suara Master Monkey di "Kung Fu Panda".'
    ],
    wikiTitle: 'Jackie_Chan', imageUrl: '', imageSource: '',
    acceptedAnswers: ['Jackie Chan', 'Chan', 'Cheng Long']
  },
  {
    id: 'person_123', name: 'Reza Rahadian',
    aliases: ['Reza', 'Reza Rahadian Matulessy'],
    category: 'actor', nationality: 'Indonesia',
    profession: 'Aktor & Sutradara',
    hints: [
      'Dikenal sebagai aktor serbabisa yang meraih banyak Piala Citra di Festival Film Indonesia.',
      'Berperan sebagai B.J. Habibie di film biopik tentang sang presiden.',
      'Membintangi "3 Hari untuk Selamanya", "Perempuan Berkalung Sorban", dan "Kapan Kawin?".'
    ],
    wikiTitle: 'Reza_Rahadian', imageUrl: '', imageSource: '',
    acceptedAnswers: ['Reza Rahadian', 'Reza']
  },
  {
    id: 'person_124', name: 'Christine Hakim',
    aliases: ['Hakim', 'Christine', 'Christine Hakim Dahlan'],
    category: 'actor', nationality: 'Indonesia',
    profession: 'Aktris Senior & Produser Film',
    hints: [
      'Salah satu aktris paling dihormati di perfilman Indonesia dengan karier lebih dari empat dekade.',
      'Memerankan pejuang perempuan Aceh dalam film "Tjoet Nja\' Dhien" (1988).',
      'Pernah menjadi juri di Festival Film Cannes dan membintangi "Pasir Berbisik".'
    ],
    wikiTitle: 'Christine_Hakim', imageUrl: '', imageSource: '',
    acceptedAnswers: ['Christine Hakim', 'Christine']
  },

  // ===== ATLET & OLAHRAGAWAN =====
  {
    id: 'person_125', name: 'Lionel Messi',
    aliases: ['Messi', 'Leo Messi', 'Lionel Andrés Messi', 'La Pulga'],
    category: 'athlete', nationality: 'Argentina',
    profession: 'Pesepak Bola',
    hints: [
      'Direkrut Barcelona di usia 13 tahun dan menjalani pengobatan hormon pertumbuhan semasa remaja.',
      'Memegang rekor delapan Ballon d\'Or dan pernah bermain untuk Paris Saint-Germain serta Inter Miami.',
      'Mengangkat trofi Piala Dunia 2022 di Qatar bersama timnas Argentina.'
    ],
    wikiTitle: 'Lionel_Messi', imageUrl: '', imageSource: '',
    acceptedAnswers: ['Lionel Messi', 'Messi', 'Leo Messi']
  },
  {
    id: 'person_126', name: 'Cristiano Ronaldo',
    aliases: ['Ronaldo', 'CR7', 'Cristiano', 'Cristiano Ronaldo dos Santos Aveiro'],
    category: 'athlete', nationality: 'Portugal',
    profession: 'Pesepak Bola',
    hints: [
      'Lahir di Madeira dan dikenal dengan selebrasi "Siuuu".',
      'Pernah membela Manchester United, Real Madrid, dan Juventus, serta meraih lima Ballon d\'Or.',
      'Pencetak gol terbanyak sepanjang sejarah sepak bola profesional dan mengenakan nomor punggung 7.'
    ],
    wikiTitle: 'Cristiano_Ronaldo', imageUrl: '', imageSource: '',
    acceptedAnswers: ['Cristiano Ronaldo', 'Ronaldo', 'CR7', 'Cristiano']
  },
  {
    id: 'person_127', name: 'Muhammad Ali',
    aliases: ['Ali', 'Cassius Clay', 'Cassius Marcellus Clay', 'The Greatest'],
    category: 'athlete', nationality: 'Amerika Serikat',
    profession: 'Petinju Kelas Berat',
    hints: [
      'Memenangkan medali emas Olimpiade Roma 1960 sebelum berganti nama dari nama lahirnya, Cassius Clay.',
      'Terkenal dengan ucapan "Float like a butterfly, sting like a bee".',
      'Bertarung melawan Joe Frazier dalam "Thrilla in Manila" dan George Foreman dalam "Rumble in the Jungle".'
    ],
    wikiTitle: 'Muhammad_Ali', imageUrl: '', imageSource: '',
    acceptedAnswers: ['Muhammad Ali', 'Ali', 'Cassius Clay']
  },
  {
    id: 'person_128', name: 'Michael Jordan',
    aliases: ['Jordan', 'MJ', 'Michael Jeffrey Jordan', 'Air Jordan'],
    category: 'athlete', nationality: 'Amerika Serikat',
    profession: 'Pemain Basket',
    hints: [
      'Dikenal dengan julukan "Air Jordan" dan sepatu yang menjadi merek tersendiri.',
      'Meraih enam gelar juara NBA dan enam kali MVP Final bersama Chicago Bulls.',
      'Mengenakan nomor punggung 23 dan membintangi film "Space Jam".'
    ],
    wikiTitle: 'Michael_Jordan', imageUrl: '', imageSource: '',
    acceptedAnswers: ['Michael Jordan', 'Jordan', 'Air Jordan']
  },
  {
    id: 'person_129', name: 'Susi Susanti',
    aliases: ['Susanti', 'Susy Susanti', 'Susi Susanti Hartono'],
    category: 'athlete', nationality: 'Indonesia',
    profession: 'Pebulu Tangkis Tunggal Putri',
    hints: [
      'Lahir di Tasikmalaya dan menjadi legenda bulu tangkis putri Indonesia pada era 1990-an.',
      'Memenangkan All England berkali-kali dan menikah dengan sesama pebulu tangkis, Alan Budikusuma.',
      'Meraih medali emas pertama Indonesia di Olimpiade Barcelona 1992.'
    ],
    wikiTitle: 'Susi_Susanti', imageUrl: '', imageSource: '',
    acceptedAnswers: ['Susi Susanti', 'Susanti', 'Susy Susanti']
  },
  {
    id: 'person_130', name: 'Usain Bolt',
    aliases: ['Bolt', 'Usain St. Leo Bolt', 'Lightning Bolt'],
    category: 'athlete', nationality: 'Jamaika',
    profession: 'Pelari Sprint',
    hints: [
      'Memiliki tinggi badan sekitar 1,95 meter, tidak biasa untuk seorang pelari sprint.',
      'Memegang rekor dunia lari 100 m (9,58 detik) dan 200 m (19,19 detik).',
      'Terkenal dengan pose selebrasi "Lightning Bolt" dan meraih tiga emas Olimpiade berturut-turut di nomor sprint.'
    ],
    wikiTitle: 'Usain_Bolt', imageUrl: '', imageSource: '',
    acceptedAnswers: ['Usain Bolt', 'Bolt']
  },

  // ===== CONTENT CREATOR & INFLUENCER =====
  {
    id: 'person_131', name: 'MrBeast',
    aliases: ['Mr Beast', 'Mr. Beast', 'Jimmy Donaldson', 'James Stephen Donaldson'],
    category: 'creator', nationality: 'Amerika Serikat',
    profession: 'YouTuber & Pengusaha',
    hints: [
      'Memulai karier YouTube di usia belia dengan video gameplay dan hitung-hitungan angka.',
      'Terkenal dengan konten tantangan besar-besaran dan pemberian hadiah uang tunai ekstrem.',
      'Mendirikan merek cokelat Feastables dan menjadi salah satu kanal dengan subscriber terbanyak di dunia.'
    ],
    wikiTitle: 'MrBeast', imageUrl: '', imageSource: '',
    acceptedAnswers: ['MrBeast', 'Mr Beast', 'Mr. Beast', 'Jimmy Donaldson']
  },
  {
    id: 'person_132', name: 'PewDiePie',
    aliases: ['Pew Die Pie', 'Felix Kjellberg', 'Felix Arvid Ulf Kjellberg', 'Pewds'],
    category: 'creator', nationality: 'Swedia',
    profession: 'YouTuber & Streamer Gaming',
    hints: [
      'Sempat menjadi kanal individu dengan subscriber terbanyak di YouTube selama bertahun-tahun.',
      'Penggemarnya menyebut diri "Bro Army" dan ia dikenal dengan sapaan "Hello, bros!".',
      'Menikahi Marzia dan memutuskan pindah ke Jepang.'
    ],
    wikiTitle: 'PewDiePie', imageUrl: '', imageSource: '',
    acceptedAnswers: ['PewDiePie', 'Pew Die Pie', 'Felix Kjellberg', 'Pewds']
  },
  {
    id: 'person_133', name: 'Raditya Dika',
    aliases: ['Dika', 'Radit', 'Raditya'],
    category: 'creator', nationality: 'Indonesia',
    profession: 'Komedian, Penulis & Sutradara',
    hints: [
      'Memulai ketenaran lewat blog pribadi yang kemudian dibukukan.',
      'Menulis buku "Kambing Jantan" yang diadaptasi menjadi film.',
      'Dikenal sebagai komika stand-up dan sutradara film "Marmut Merah Jambu" serta "Koala Kumal".'
    ],
    wikiTitle: 'Raditya_Dika', imageUrl: '', imageSource: '',
    acceptedAnswers: ['Raditya Dika', 'Dika', 'Radit']
  },
  {
    id: 'person_134', name: 'Atta Halilintar',
    aliases: ['Atta', 'Halilintar', 'Atta Halilintar Gunawan', 'AH'],
    category: 'creator', nationality: 'Indonesia',
    profession: 'YouTuber & Pengusaha',
    hints: [
      'Anak sulung dari keluarga besar yang dikenal lewat grup keluarga "Gen Halilintar".',
      'Pernah menjadi YouTuber Indonesia dengan subscriber terbanyak.',
      'Menikah dengan Aurel Hermansyah, putri penyanyi Anang Hermansyah.'
    ],
    wikiTitle: 'Atta_Halilintar', imageUrl: '', imageSource: '',
    acceptedAnswers: ['Atta Halilintar', 'Atta', 'Halilintar']
  },
  {
    id: 'person_135', name: 'Deddy Corbuzier',
    aliases: ['Deddy', 'Dedi Corbuzier', 'Deddy Cahyadi Sumarna'],
    category: 'creator', nationality: 'Indonesia',
    profession: 'Mentalis, Presenter & Podcaster',
    hints: [
      'Awalnya dikenal sebagai pesulap sebelum beralih ke bidang mentalisme dan televisi.',
      'Berkepala plontos dan pernah berkarier sebagai host acara televisi serta menjadi pelatih kebugaran.',
      'Pembawa podcast "Close The Door" yang mengundang banyak tokoh publik.'
    ],
    wikiTitle: 'Deddy_Corbuzier', imageUrl: '', imageSource: '',
    acceptedAnswers: ['Deddy Corbuzier', 'Deddy', 'Dedy Corbuzier']
  },
  {
    id: 'person_136', name: 'Khaby Lame',
    aliases: ['Khaby', 'Khabane Lame', 'Khaby Lame'],
    category: 'creator', nationality: 'Italia (kelahiran Senegal)',
    profession: 'Kreator TikTok',
    hints: [
      'Menjadi viral setelah kehilangan pekerjaan di pabrik pada masa pandemi.',
      'Menyindir video "life hack" rumit dengan reaksi tanpa kata dan gestur tangan.',
      'Sempat menjadi pemilik akun TikTok dengan pengikut terbanyak di dunia.'
    ],
    wikiTitle: 'Khaby_Lame', imageUrl: '', imageSource: '',
    acceptedAnswers: ['Khaby Lame', 'Khaby', 'Khabane Lame']
  },

  // ===== TOKOH SEJARAH =====
  {
    id: 'person_137', name: 'Pangeran Diponegoro',
    aliases: ['Diponegoro', 'Dipanegara', 'Pangeran Dipanegara', 'Raden Mas Ontowiryo'],
    category: 'history', nationality: 'Indonesia',
    profession: 'Pahlawan Nasional & Pemimpin Perang Jawa',
    hints: [
      'Putra sulung Sultan Hamengkubuwono III dari Yogyakarta yang memilih hidup di Tegalrejo.',
      'Perang yang dipimpinnya berlangsung 1825–1830 dan menguras kas pemerintah kolonial Belanda.',
      'Ditangkap dengan tipu muslihat dalam perundingan di Magelang dan diasingkan ke Makassar.'
    ],
    wikiTitle: 'Diponegoro', imageUrl: '', imageSource: '',
    acceptedAnswers: ['Pangeran Diponegoro', 'Diponegoro', 'Dipanegara']
  },
  {
    id: 'person_138', name: 'Cut Nyak Dhien',
    aliases: ['Cut Nyak Dien', 'Tjoet Nja Dhien', 'Cut Nyak Dhien'],
    category: 'history', nationality: 'Indonesia',
    profession: 'Pahlawan Nasional & Pejuang Perang Aceh',
    hints: [
      'Berasal dari keluarga bangsawan Aceh dan menikah dengan Teuku Umar.',
      'Memimpin perlawanan gerilya di hutan setelah suaminya gugur.',
      'Kisahnya diangkat dalam film "Tjoet Nja\' Dhien"; wafat dalam pengasingan di Sumedang.'
    ],
    wikiTitle: 'Cut_Nyak_Dhien', imageUrl: '', imageSource: '',
    acceptedAnswers: ['Cut Nyak Dhien', 'Cut Nyak Dien', 'Tjoet Nja Dhien']
  },
  {
    id: 'person_139', name: 'Napoleon Bonaparte',
    aliases: ['Napoleon', 'Napoleon I', 'Napoleon Bonaparte'],
    category: 'history', nationality: 'Prancis',
    profession: 'Kaisar Prancis & Jenderal Militer',
    hints: [
      'Berasal dari Pulau Korsika dan naik pangkat pesat selama Revolusi Prancis.',
      'Menyusun Code Napoléon dan menaklukkan sebagian besar Eropa.',
      'Dikalahkan di Waterloo dan diasingkan ke Pulau Saint Helena.'
    ],
    wikiTitle: 'Napoleon', imageUrl: '', imageSource: '',
    acceptedAnswers: ['Napoleon Bonaparte', 'Napoleon', 'Napoleon I']
  },
  {
    id: 'person_140', name: 'Che Guevara',
    aliases: ['Guevara', 'Ernesto Guevara', 'Ernesto Che Guevara', 'El Che'],
    category: 'history', nationality: 'Argentina',
    profession: 'Revolusioner & Dokter',
    hints: [
      'Awalnya mahasiswa kedokteran yang melakukan perjalanan keliling Amerika Selatan dengan sepeda motor.',
      'Terlibat dalam Revolusi Kuba bersama Fidel Castro.',
      'Wajahnya pada foto hitam-putih bertopi baret menjadi ikon pemberontakan global; ia tewas di Bolivia pada 1967.'
    ],
    wikiTitle: 'Che_Guevara', imageUrl: '', imageSource: '',
    acceptedAnswers: ['Che Guevara', 'Guevara', 'Ernesto Guevara']
  },
  {
    id: 'person_141', name: 'Jenderal Soedirman',
    aliases: ['Soedirman', 'Sudirman', 'Jenderal Sudirman', 'Panglima Besar Soedirman'],
    category: 'history', nationality: 'Indonesia',
    profession: 'Panglima Besar TNI & Pahlawan Nasional',
    hints: [
      'Sebelum berkarier militer ia adalah seorang guru dan aktivis kepanduan Hizbul Wathan.',
      'Memimpin perang gerilya sambil ditandu dalam keadaan sakit paru-paru parah.',
      'Menjadi Panglima Besar pertama TNI dan namanya diabadikan menjadi nama jalan protokol di Jakarta.'
    ],
    wikiTitle: 'Soedirman', imageUrl: '', imageSource: '',
    acceptedAnswers: ['Jenderal Soedirman', 'Soedirman', 'Sudirman', 'Jenderal Sudirman']
  },
  {
    id: 'person_142', name: 'Bung Tomo',
    aliases: ['Sutomo', 'Soetomo', 'Bung Tomo', 'Sutomo Bung Tomo'],
    category: 'history', nationality: 'Indonesia',
    profession: 'Pahlawan Nasional & Orator Revolusi',
    hints: [
      'Pernah bekerja sebagai jurnalis dan pemimpin organisasi kepanduan di Surabaya.',
      'Membakar semangat rakyat lewat siaran radio dengan teriakan takbir.',
      'Tokoh sentral dalam Pertempuran 10 November 1945 di Surabaya.'
    ],
    wikiTitle: 'Bung_Tomo', imageUrl: '', imageSource: '',
    acceptedAnswers: ['Bung Tomo', 'Sutomo', 'Soetomo']
  },

  // ===== ILMUWAN & PENEMU =====
  {
    id: 'person_143', name: 'Albert Einstein',
    aliases: ['Einstein', 'Albert Einstein', 'Prof. Einstein'],
    category: 'scientist', nationality: 'Jerman (kemudian Swiss & AS)',
    profession: 'Fisikawan Teoretis',
    hints: [
      'Bekerja sebagai pemeriksa paten di Bern sebelum menerbitkan makalah-makalah revolusionernya di tahun 1905.',
      'Memenangkan Nobel Fisika 1921 atas penjelasan efek fotolistrik.',
      'Merumuskan teori relativitas dan persamaan E = mc².'
    ],
    wikiTitle: 'Albert_Einstein', imageUrl: '', imageSource: '',
    acceptedAnswers: ['Albert Einstein', 'Einstein']
  },
  {
    id: 'person_144', name: 'Nikola Tesla',
    aliases: ['Tesla', 'Nikola Tesla'],
    category: 'scientist', nationality: 'Serbia / Amerika Serikat',
    profession: 'Insinyur Listrik & Penemu',
    hints: [
      'Lahir di wilayah yang kini Kroasia dan pindah ke Amerika Serikat dengan sedikit uang di sakunya.',
      'Pernah bekerja dengan lalu berselisih dengan Thomas Edison dalam "War of the Currents".',
      'Mengembangkan sistem arus bolak-balik (AC) dan Tesla coil; namanya kini diabadikan pada pabrikan mobil listrik.'
    ],
    wikiTitle: 'Nikola_Tesla', imageUrl: '', imageSource: '',
    acceptedAnswers: ['Nikola Tesla', 'Tesla']
  },
  {
    id: 'person_145', name: 'Marie Curie',
    aliases: ['Curie', 'Marie Sklodowska Curie', 'Maria Skłodowska-Curie', 'Madame Curie'],
    category: 'scientist', nationality: 'Polandia / Prancis',
    profession: 'Fisikawan & Kimiawan',
    hints: [
      'Lahir di Warsawa dan harus belajar di Paris karena perempuan dilarang kuliah di tanah airnya.',
      'Menemukan unsur polonium dan radium serta menciptakan istilah "radioaktif".',
      'Perempuan pertama peraih Nobel dan satu-satunya yang meraih dua Nobel di bidang sains berbeda (Fisika dan Kimia).'
    ],
    wikiTitle: 'Marie_Curie', imageUrl: '', imageSource: '',
    acceptedAnswers: ['Marie Curie', 'Curie', 'Madame Curie']
  },
  {
    id: 'person_146', name: 'Stephen Hawking',
    aliases: ['Hawking', 'Stephen William Hawking', 'Prof. Hawking'],
    category: 'scientist', nationality: 'Inggris',
    profession: 'Fisikawan Teoretis & Kosmolog',
    hints: [
      'Didiagnosis penyakit neuron motorik pada usia 21 tahun dan berkomunikasi lewat alat sintetis suara.',
      'Menjabat Lucasian Professor di Universitas Cambridge, kursi yang dulu dipegang Isaac Newton.',
      'Menulis buku populer "A Brief History of Time" dan meneliti lubang hitam serta radiasi yang kini menyandang namanya.'
    ],
    wikiTitle: 'Stephen_Hawking', imageUrl: '', imageSource: '',
    acceptedAnswers: ['Stephen Hawking', 'Hawking']
  },
  {
    id: 'person_147', name: 'Isaac Newton',
    aliases: ['Newton', 'Sir Isaac Newton'],
    category: 'scientist', nationality: 'Inggris',
    profession: 'Matematikawan & Fisikawan',
    hints: [
      'Legenda populer mengatakan sebuah apel jatuh menginspirasi gagasannya.',
      'Menulis "Philosophiæ Naturalis Principia Mathematica" yang memuat tiga hukum gerak.',
      'Merumuskan hukum gravitasi universal dan ikut mengembangkan kalkulus.'
    ],
    wikiTitle: 'Isaac_Newton', imageUrl: '', imageSource: '',
    acceptedAnswers: ['Isaac Newton', 'Newton', 'Sir Isaac Newton']
  },
  {
    id: 'person_148', name: 'Thomas Edison',
    aliases: ['Edison', 'Thomas Alva Edison', 'Thomas A. Edison'],
    category: 'scientist', nationality: 'Amerika Serikat',
    profession: 'Penemu & Pengusaha',
    hints: [
      'Dijuluki "Penyihir dari Menlo Park" karena laboratorium penelitiannya yang produktif.',
      'Memiliki lebih dari 1.000 paten di Amerika Serikat.',
      'Menyempurnakan lampu pijar praktis dan menemukan fonograf.'
    ],
    wikiTitle: 'Thomas_Edison', imageUrl: '', imageSource: '',
    acceptedAnswers: ['Thomas Edison', 'Edison', 'Thomas Alva Edison']
  },

  // ===== TOKOH TERKENAL LAINNYA =====
  {
    id: 'person_149', name: 'Elon Musk',
    aliases: ['Musk', 'Elon Reeve Musk'],
    category: 'other', nationality: 'Amerika Serikat (kelahiran Afrika Selatan)',
    profession: 'Pengusaha & CEO Teknologi',
    hints: [
      'Lahir di Pretoria dan ikut mendirikan PayPal sebelum merambah industri lain.',
      'Memimpin perusahaan roket SpaceX dan produsen mobil listrik Tesla.',
      'Mengakuisisi Twitter pada 2022 dan mengganti namanya menjadi X.'
    ],
    wikiTitle: 'Elon_Musk', imageUrl: '', imageSource: '',
    acceptedAnswers: ['Elon Musk', 'Musk']
  },
  {
    id: 'person_150', name: 'Bill Gates',
    aliases: ['Gates', 'William Henry Gates III', 'William Gates'],
    category: 'other', nationality: 'Amerika Serikat',
    profession: 'Pendiri Microsoft & Filantropis',
    hints: [
      'Putus kuliah dari Harvard untuk mengejar bisnis perangkat lunak bersama teman masa kecilnya, Paul Allen.',
      'Perusahaannya menciptakan sistem operasi Windows dan paket Microsoft Office.',
      'Mendirikan yayasan filantropi bersama istrinya yang fokus pada kesehatan global dan pemberantasan penyakit.'
    ],
    wikiTitle: 'Bill_Gates', imageUrl: '', imageSource: '',
    acceptedAnswers: ['Bill Gates', 'Gates', 'William Gates']
  },
  {
    id: 'person_151', name: 'Steve Jobs',
    aliases: ['Jobs', 'Steven Paul Jobs', 'Steven Jobs'],
    category: 'other', nationality: 'Amerika Serikat',
    profession: 'Pendiri Apple & Pengusaha',
    hints: [
      'Sempat didepak dari perusahaan yang ia dirikan sendiri sebelum kembali memimpinnya.',
      'Dikenal dengan kaus turtleneck hitam dan presentasi produk yang memukau.',
      'Memperkenalkan iPod, iPhone, dan iPad, serta ikut memimpin studio animasi Pixar.'
    ],
    wikiTitle: 'Steve_Jobs', imageUrl: '', imageSource: '',
    acceptedAnswers: ['Steve Jobs', 'Jobs', 'Steven Jobs']
  },
  {
    id: 'person_152', name: 'Mark Zuckerberg',
    aliases: ['Zuckerberg', 'Zuck', 'Mark Elliot Zuckerberg'],
    category: 'other', nationality: 'Amerika Serikat',
    profession: 'Pendiri & CEO Meta',
    hints: [
      'Memulai proyeknya dari asrama kampus Harvard saat masih mahasiswa.',
      'Kisah awal perusahaannya difilmkan dalam "The Social Network".',
      'Pendiri Facebook yang kemudian mengubah nama perusahaan induknya menjadi Meta, yang juga membawahi Instagram dan WhatsApp.'
    ],
    wikiTitle: 'Mark_Zuckerberg', imageUrl: '', imageSource: '',
    acceptedAnswers: ['Mark Zuckerberg', 'Zuckerberg', 'Zuck']
  },
  {
    id: 'person_153', name: 'Jack Ma',
    aliases: ['Ma Yun', 'Jack Ma Yun', 'Ma Yun'],
    category: 'other', nationality: 'Tiongkok',
    profession: 'Pendiri Alibaba Group',
    hints: [
      'Sebelum menjadi miliarder, ia adalah guru bahasa Inggris dan sempat ditolak banyak pekerjaan.',
      'Mendirikan perusahaan e-commerce raksasa yang memiliki Taobao dan Tmall.',
      'Mendirikan Alibaba pada 1999 dan menggelar penjualan "Singles\' Day" setiap 11 November.'
    ],
    wikiTitle: 'Jack_Ma', imageUrl: '', imageSource: '',
    acceptedAnswers: ['Jack Ma', 'Ma Yun']
  },
  {
    id: 'person_154', name: 'Warren Buffett',
    aliases: ['Buffett', 'Warren Edward Buffett', 'Oracle of Omaha'],
    category: 'other', nationality: 'Amerika Serikat',
    profession: 'Investor & CEO Berkshire Hathaway',
    hints: [
      'Dikenal hidup sederhana di rumah yang sama di Omaha sejak puluhan tahun lalu.',
      'Dijuluki "Oracle of Omaha" dan menganut filosofi value investing.',
      'Memimpin Berkshire Hathaway dan berjanji menyumbangkan sebagian besar kekayaannya lewat Giving Pledge.'
    ],
    wikiTitle: 'Warren_Buffett', imageUrl: '', imageSource: '',
    acceptedAnswers: ['Warren Buffett', 'Buffett', 'Oracle of Omaha']
  },
  {
    id: 'person_155', name: 'Nadiem Makarim',
    aliases: ['Nadiem', 'Nadiem Anwar Makarim', 'Mas Menteri'],
    category: 'other', nationality: 'Indonesia',
    profession: 'Pendiri Gojek & Mantan Menteri Pendidikan',
    hints: [
      'Lulusan Harvard Business School yang pernah bekerja di perusahaan konsultan McKinsey.',
      'Mengubah layanan ojek konvensional menjadi aplikasi super bernama Gojek.',
      'Dilantik sebagai Menteri Pendidikan dan Kebudayaan pada 2019 dan memperkenalkan program "Merdeka Belajar".'
    ],
    wikiTitle: 'Nadiem_Makarim', imageUrl: '', imageSource: '',
    acceptedAnswers: ['Nadiem Makarim', 'Nadiem', 'Nadiem Anwar Makarim']
  },


  // ===== TOKOH TAMBAHAN DARI DAFTAR PENGGUNA (ANTI-DUPLIKAT) =====
  {
        id: "person_157",
    name: "Susilo Bambang Yudhoyono",
    aliases: ["Susilo Bambang Yudhoyono"],
    category: "president",
    nationality: "Indonesia",
    profession: "Presiden RI ke-6",
    hints: ["Purnawirawan jenderal TNI yang mendirikan Partai Demokrat.", "Menjabat presiden Indonesia selama dua periode, 2004–2014.", "Sering dikenal dengan inisial SBY."],
    wikiTitle: "Susilo_Bambang_Yudhoyono",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Susilo Bambang Yudhoyono"]
  },
  {
        id: "person_158",
    name: "Megawati Soekarnoputri",
    aliases: ["Megawati Soekarnoputri"],
    category: "president",
    nationality: "Indonesia",
    profession: "Presiden RI ke-5",
    hints: ["Putri dari presiden pertama Indonesia.", "Memimpin PDI Perjuangan.", "Menjabat presiden Indonesia pada 2001–2004."],
    wikiTitle: "Megawati_Sukarnoputri",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Megawati Soekarnoputri"]
  },
  {
        id: "person_159",
    name: "Joe Biden",
    aliases: ["Joe Biden"],
    category: "president",
    nationality: "Amerika Serikat",
    profession: "Presiden AS ke-46",
    hints: ["Pernah menjadi wakil presiden selama pemerintahan Barack Obama.", "Berkarier panjang di Senat Amerika Serikat.", "Menjadi presiden AS pada 2021–2025."],
    wikiTitle: "Joe_Biden",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Joe Biden"]
  },
  {
        id: "person_160",
    name: "Donald Trump",
    aliases: ["Donald Trump"],
    category: "president",
    nationality: "Amerika Serikat",
    profession: "Presiden AS ke-45 dan ke-47",
    hints: ["Sebelum terjun ke politik, ia dikenal sebagai pengusaha dan pembawa acara televisi.", "Slogan kampanyenya yang terkenal adalah “Make America Great Again”.", "Menjadi presiden Amerika Serikat pada dua masa jabatan yang tidak berurutan."],
    wikiTitle: "Donald_Trump",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Donald Trump"]
  },
  {
        id: "person_161",
    name: "Vladimir Putin",
    aliases: ["Vladimir Putin"],
    category: "politician",
    nationality: "Rusia",
    profession: "Presiden Rusia",
    hints: ["Pernah bekerja di badan intelijen Soviet KGB.", "Memimpin Rusia sebagai presiden atau perdana menteri sejak akhir 1990-an.", "Dikenal sebagai salah satu pemimpin paling berpengaruh dalam politik dunia modern."],
    wikiTitle: "Vladimir_Putin",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Vladimir Putin"]
  },
  {
        id: "person_162",
    name: "Xi Jinping",
    aliases: ["Xi Jinping"],
    category: "politician",
    nationality: "Tiongkok",
    profession: "Pemimpin Partai Komunis Tiongkok",
    hints: ["Memegang jabatan Sekretaris Jenderal Partai Komunis Tiongkok.", "Memimpin negara dengan ekonomi terbesar kedua di dunia.", "Menjadi presiden Tiongkok pada 2013."],
    wikiTitle: "Xi_Jinping",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Xi Jinping"]
  },
  {
        id: "person_163",
    name: "Kim Jong-un",
    aliases: ["Kim Jong-un"],
    category: "politician",
    nationality: "Korea Utara",
    profession: "Pemimpin Korea Utara",
    hints: ["Mewarisi kepemimpinan negara dari ayahnya.", "Memimpin Partai Pekerja Korea dan angkatan bersenjata negara tersebut.", "Menjadi pemimpin tertinggi Korea Utara pada 2011."],
    wikiTitle: "Kim_Jong-un",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Kim Jong-un"]
  },
  {
        id: "person_164",
    name: "Justin Trudeau",
    aliases: ["Justin Trudeau"],
    category: "politician",
    nationality: "Kanada",
    profession: "Mantan Perdana Menteri Kanada",
    hints: ["Putra mantan perdana menteri Kanada Pierre Trudeau.", "Memimpin Partai Liberal Kanada.", "Menjabat perdana menteri Kanada dari 2015 hingga 2025."],
    wikiTitle: "Justin_Trudeau",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Justin Trudeau"]
  },
  {
        id: "person_165",
    name: "Rishi Sunak",
    aliases: ["Rishi Sunak"],
    category: "politician",
    nationality: "Inggris",
    profession: "Mantan Perdana Menteri Inggris",
    hints: ["Sebelum menjadi perdana menteri, ia menjabat sebagai Menteri Keuangan Inggris.", "Menjadi pemimpin Partai Konservatif pada 2022.", "Merupakan perdana menteri Inggris pertama keturunan Asia Selatan."],
    wikiTitle: "Rishi_Sunak",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Rishi Sunak"]
  },
  {
        id: "person_166",
    name: "Justin Bieber",
    aliases: ["Justin Bieber"],
    category: "music",
    nationality: "Kanada",
    profession: "Penyanyi pop",
    hints: ["Ditemukan setelah video penampilannya diunggah ke YouTube.", "Lagu terkenalnya antara lain “Baby”, “Sorry”, dan “Love Yourself”.", "Album debutnya berjudul My World 2.0."],
    wikiTitle: "Justin_Bieber",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Justin Bieber"]
  },
  {
        id: "person_167",
    name: "Bruno Mars",
    aliases: ["Bruno Mars"],
    category: "music",
    nationality: "Amerika Serikat",
    profession: "Penyanyi, penulis lagu, dan produser",
    hints: ["Tumbuh dalam keluarga yang dekat dengan dunia musik dan tampil sejak kecil.", "Lagu terkenalnya termasuk “Just the Way You Are” dan “Uptown Funk”.", "Dikenal juga sebagai anggota duo Silk Sonic bersama Anderson .Paak."],
    wikiTitle: "Bruno_Mars",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Bruno Mars"]
  },
  {
        id: "person_168",
    name: "Olivia Rodrigo",
    aliases: ["Olivia Rodrigo"],
    category: "music",
    nationality: "Amerika Serikat",
    profession: "Penyanyi dan aktris",
    hints: ["Awalnya dikenal lewat serial Disney.", "Lagu “drivers license” menjadi hit global pada 2021.", "Album debutnya berjudul SOUR."],
    wikiTitle: "Olivia_Rodrigo",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Olivia Rodrigo"]
  },
  {
        id: "person_169",
    name: "Billie Eilish",
    aliases: ["Billie Eilish"],
    category: "music",
    nationality: "Amerika Serikat",
    profession: "Penyanyi dan penulis lagu",
    hints: ["Bekerja sama dengan kakaknya Finneas dalam banyak lagu.", "Lagu “Bad Guy” membawanya ke popularitas internasional.", "Menang Oscar untuk lagu tema film pada usia muda."],
    wikiTitle: "Billie_Eilish",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Billie Eilish"]
  },
  {
        id: "person_170",
    name: "Zayn Malik",
    aliases: ["Zayn Malik"],
    category: "music",
    nationality: "Inggris",
    profession: "Penyanyi",
    hints: ["Mulai dikenal sebagai anggota grup One Direction.", "Keluar dari grup tersebut pada 2015.", "Single solo terkenalnya termasuk “Pillowtalk”."],
    wikiTitle: "Zayn_Malik",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Zayn Malik"]
  },
  {
        id: "person_171",
    name: "Harry Styles",
    aliases: ["Harry Styles"],
    category: "music",
    nationality: "Inggris",
    profession: "Penyanyi dan aktor",
    hints: ["Memulai karier musik sebagai anggota One Direction.", "Merilis album solo Fine Line dan Harry’s House.", "Lagu “As It Was” menjadi salah satu hit solonya."],
    wikiTitle: "Harry_Styles",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Harry Styles"]
  },
  {
        id: "person_172",
    name: "SZA",
    aliases: ["SZA"],
    category: "music",
    nationality: "Amerika Serikat",
    profession: "Penyanyi dan penulis lagu",
    hints: ["Nama panggungnya diucapkan “Sizza”.", "Album Ctrl mendapat pujian luas dari kritikus musik.", "Lagu “Kill Bill” menjadi hit besar dari album SOS."],
    wikiTitle: "SZA",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["SZA"]
  },
  {
        id: "person_173",
    name: "Shakira",
    aliases: ["Shakira"],
    category: "music",
    nationality: "Kolombia",
    profession: "Penyanyi dan penulis lagu",
    hints: ["Dikenal dengan gaya tari dan perpaduan musik Latin serta pop.", "Menyanyikan “Hips Don’t Lie” dan “Whenever, Wherever”.", "Menyanyikan lagu resmi Piala Dunia FIFA 2010 “Waka Waka”."],
    wikiTitle: "Shakira",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Shakira"]
  },
  {
        id: "person_174",
    name: "Sam Smith",
    aliases: ["Sam Smith"],
    category: "music",
    nationality: "Inggris",
    profession: "Penyanyi dan penulis lagu",
    hints: ["Lagu “Stay with Me” menjadi hit internasional.", "Memenangkan Grammy dan Academy Award untuk karya musiknya.", "Merilis lagu “Unholy” bersama Kim Petras."],
    wikiTitle: "Sam_Smith",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Sam Smith"]
  },
  {
        id: "person_175",
    name: "Laufey",
    aliases: ["Laufey"],
    category: "music",
    nationality: "Islandia / Tiongkok",
    profession: "Penyanyi dan penulis lagu",
    hints: ["Dikenal memadukan jazz klasik dan pop modern.", "Memiliki latar belakang pendidikan musik klasik.", "Album Bewitched memenangkan Grammy untuk Best Traditional Pop Vocal Album."],
    wikiTitle: "Laufey",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Laufey"]
  },
  {
        id: "person_176",
    name: "Adele",
    aliases: ["Adele"],
    category: "music",
    nationality: "Inggris",
    profession: "Penyanyi dan penulis lagu",
    hints: ["Album 21 melahirkan lagu “Rolling in the Deep”.", "Dikenal dengan balada seperti “Someone Like You” dan “Hello”.", "Meraih penghargaan Grammy, Oscar, dan Golden Globe."],
    wikiTitle: "Adele",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Adele"]
  },
  {
        id: "person_177",
    name: "Ariana Grande",
    aliases: ["Ariana Grande"],
    category: "music",
    nationality: "Amerika Serikat",
    profession: "Penyanyi dan aktris",
    hints: ["Awalnya dikenal lewat serial televisi Nickelodeon.", "Lagu terkenalnya termasuk “Thank U, Next” dan “7 Rings”.", "Memerankan Glinda dalam film musikal Wicked."],
    wikiTitle: "Ariana_Grande",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Ariana Grande"]
  },
  {
        id: "person_178",
    name: "Rex Orange County",
    aliases: ["Rex Orange County", "Rex Orange Country"],
    category: "music",
    nationality: "Inggris",
    profession: "Penyanyi dan penulis lagu",
    hints: ["Nama aslinya adalah Alexander O’Connor.", "Musiknya memadukan indie pop, jazz, dan soul.", "Lagu “Best Friend” dan “Loving Is Easy” dikenal luas."],
    wikiTitle: "Rex_Orange_County",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Rex Orange County", "Rex Orange Country"]
  },
  {
        id: "person_179",
    name: "Rich Brian",
    aliases: ["Rich Brian"],
    category: "music",
    nationality: "Indonesia",
    profession: "Rapper dan penyanyi",
    hints: ["Rapper asal Indonesia yang awalnya dikenal dengan nama Rich Chigga.", "Lagu “Dat $tick” menjadi viral secara internasional.", "Merilis album Amen dan The Sailor."],
    wikiTitle: "Rich_Brian",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Rich Brian"]
  },
  {
        id: "person_180",
    name: "The Weeknd",
    aliases: ["The Weeknd"],
    category: "music",
    nationality: "Kanada",
    profession: "Penyanyi dan produser musik",
    hints: ["Nama aslinya Abel Tesfaye.", "Lagu “Blinding Lights” menjadi salah satu lagu paling sukses di dunia.", "Merilis album After Hours dan Dawn FM."],
    wikiTitle: "The_Weeknd",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["The Weeknd"]
  },
  {
        id: "person_181",
    name: "Madison Beer",
    aliases: ["Madison Beer"],
    category: "music",
    nationality: "Amerika Serikat",
    profession: "Penyanyi",
    hints: ["Mulai dikenal setelah Justin Bieber membagikan tautan videonya.", "Album Life Support dan Silence Between Songs mendapat perhatian penggemar pop.", "Lagu terkenalnya termasuk “Selfish” dan “Reckless”."],
    wikiTitle: "Madison_Beer",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Madison Beer"]
  },
  {
        id: "person_182",
    name: "Miley Cyrus",
    aliases: ["Miley Cyrus", "Myler Cyrus"],
    category: "music",
    nationality: "Amerika Serikat",
    profession: "Penyanyi dan aktris",
    hints: ["Dikenal saat membintangi serial Hannah Montana.", "Merilis lagu “Wrecking Ball” dan “Flowers”.", "Lagu “Flowers” meraih Grammy untuk Record of the Year."],
    wikiTitle: "Miley_Cyrus",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Miley Cyrus", "Myler Cyrus"]
  },
  {
        id: "person_183",
    name: "Camila Cabello",
    aliases: ["Camila Cabello"],
    category: "music",
    nationality: "Kuba / Amerika Serikat",
    profession: "Penyanyi",
    hints: ["Mulai terkenal sebagai anggota Fifth Harmony.", "Lagu solonya “Havana” menjadi hit global.", "Merilis album Camila dan Familia."],
    wikiTitle: "Camila_Cabello",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Camila Cabello"]
  },
  {
        id: "person_184",
    name: "Shawn Mendes",
    aliases: ["Shawn Mendes"],
    category: "music",
    nationality: "Kanada",
    profession: "Penyanyi dan penulis lagu",
    hints: ["Awalnya menarik perhatian melalui video cover di Vine.", "Lagu terkenalnya termasuk “Stitches” dan “Treat You Better”.", "Pernah berkolaborasi dengan Camila Cabello dalam lagu “Señorita”."],
    wikiTitle: "Shawn_Mendes",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Shawn Mendes"]
  },
  {
        id: "person_185",
    name: "Charlie Puth",
    aliases: ["Charlie Puth"],
    category: "music",
    nationality: "Amerika Serikat",
    profession: "Penyanyi, penulis lagu, dan produser",
    hints: ["Dikenal karena kemampuan perfect pitch dan produksi musiknya.", "Berkolaborasi dengan Wiz Khalifa dalam “See You Again”.", "Lagu solonya termasuk “Attention” dan “We Don’t Talk Anymore”."],
    wikiTitle: "Charlie_Puth",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Charlie Puth"]
  },
  {
        id: "person_186",
    name: "Pharrell Williams",
    aliases: ["Pharrell Williams", "Pharrel Williams"],
    category: "music",
    nationality: "Amerika Serikat",
    profession: "Musisi dan produser",
    hints: ["Merupakan salah satu anggota duo produksi The Neptunes.", "Memproduseri banyak lagu pop dan hip-hop terkenal.", "Menyanyikan lagu “Happy” yang menjadi soundtrack film Despicable Me 2."],
    wikiTitle: "Pharrell_Williams",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Pharrell Williams", "Pharrel Williams"]
  },
  {
        id: "person_187",
    name: "Katy Perry",
    aliases: ["Katy Perry", "Katy Parry"],
    category: "music",
    nationality: "Amerika Serikat",
    profession: "Penyanyi dan penulis lagu",
    hints: ["Album Teenage Dream menghasilkan beberapa single nomor satu.", "Lagu terkenalnya termasuk “Firework”, “Roar”, dan “California Gurls”.", "Pernah menjadi juri acara American Idol."],
    wikiTitle: "Katy_Perry",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Katy Perry", "Katy Parry"]
  },
  {
        id: "person_188",
    name: "Demi Lovato",
    aliases: ["Demi Lovato"],
    category: "music",
    nationality: "Amerika Serikat",
    profession: "Penyanyi dan aktris",
    hints: ["Mulai dikenal melalui film dan serial Disney Channel.", "Lagu terkenalnya termasuk “Skyscraper” dan “Sorry Not Sorry”.", "Pernah menjadi juri ajang pencarian bakat musik."],
    wikiTitle: "Demi_Lovato",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Demi Lovato"]
  },
  {
        id: "person_189",
    name: "Naykilla",
    aliases: ["Naykilla", "Naykila"],
    category: "music",
    nationality: "Indonesia",
    profession: "Penyanyi",
    hints: ["Penyanyi Indonesia yang dikenal melalui karya musik populer di platform digital.", "Namanya sering dicari oleh pendengar musik Indonesia generasi muda.", "Coba perhatikan nama panggungnya yang terdiri dari satu kata."],
    wikiTitle: "Naykilla",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Naykilla", "Naykila"]
  },
  {
        id: "person_190",
    name: "Afgan",
    aliases: ["Afgan"],
    category: "music",
    nationality: "Indonesia",
    profession: "Penyanyi",
    hints: ["Dikenal lewat lagu “Terima Kasih Cinta”.", "Memiliki warna vokal pop dan R&B.", "Nama lengkapnya Afgan Syah Reza."],
    wikiTitle: "Afgan_Syah_Reza",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Afgan"]
  },
  {
        id: "person_191",
    name: "Judika",
    aliases: ["Judika"],
    category: "music",
    nationality: "Indonesia",
    profession: "Penyanyi",
    hints: ["Namanya melejit setelah menjadi finalis Indonesian Idol.", "Lagu terkenalnya termasuk “Aku Yang Tersakiti”.", "Dikenal sebagai penyanyi dengan jangkauan vokal kuat."],
    wikiTitle: "Judika",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Judika"]
  },
  {
        id: "person_192",
    name: "Jaz",
    aliases: ["Jaz"],
    category: "music",
    nationality: "Brunei / Indonesia",
    profession: "Penyanyi",
    hints: ["Nama lengkapnya Jaz Hayat.", "Lagu “Dari Mata” menjadi salah satu lagu populer di Indonesia.", "Dikenal melalui musik pop romantis."],
    wikiTitle: "Jaz_Hayat",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Jaz"]
  },
  {
        id: "person_193",
    name: "Glenn Fredly",
    aliases: ["Glenn Fredly"],
    category: "music",
    nationality: "Indonesia",
    profession: "Penyanyi dan penulis lagu",
    hints: ["Dikenal dengan lagu “Januari” dan “Akhir Cerita Cinta”.", "Berasal dari Ambon dan banyak mengangkat musik soul serta R&B.", "Merupakan salah satu penyanyi pop Indonesia yang dihormati."],
    wikiTitle: "Glenn_Fredly",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Glenn Fredly"]
  },
  {
        id: "person_194",
    name: "Cakra Khan",
    aliases: ["Cakra Khan"],
    category: "music",
    nationality: "Indonesia",
    profession: "Penyanyi",
    hints: ["Dikenal dengan suara serak yang khas.", "Lagu “Harus Terpisah” menjadi hit besar.", "Pernah tampil di ajang pencarian bakat internasional America’s Got Talent."],
    wikiTitle: "Cakra_Khan",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Cakra Khan"]
  },
  {
        id: "person_195",
    name: "Baskara Putra",
    aliases: ["Baskara Putra", "Baskara", "Hindia"],
    category: "music",
    nationality: "Indonesia",
    profession: "Penyanyi dan penulis lagu",
    hints: ["Dikenal sebagai vokalis band .Feast.", "Juga merilis musik solo dengan nama Hindia.", "Lagu “Evaluasi” dan “Secukupnya” dikenal luas."],
    wikiTitle: "Baskara_Putra",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Baskara Putra", "Baskara", "Hindia"]
  },
  {
        id: "person_196",
    name: "Vidi Aldiano",
    aliases: ["Vidi Aldiano"],
    category: "music",
    nationality: "Indonesia",
    profession: "Penyanyi",
    hints: ["Lagu debutnya yang populer adalah “Nuansa Bening”.", "Dikenal dengan lagu pop seperti “Status Palsu”.", "Aktif sebagai penyanyi dan pembawa acara."],
    wikiTitle: "Vidi_Aldiano",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Vidi Aldiano"]
  },
  {
        id: "person_197",
    name: "Rossa",
    aliases: ["Rossa"],
    category: "music",
    nationality: "Indonesia",
    profession: "Penyanyi",
    hints: ["Dikenal dengan lagu “Tegar” dan “Ayat-Ayat Cinta”.", "Memiliki karier panjang di industri musik Indonesia.", "Sering dijuluki salah satu diva pop Indonesia."],
    wikiTitle: "Rossa",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Rossa"]
  },
  {
        id: "person_198",
    name: "Tulus",
    aliases: ["Tulus"],
    category: "music",
    nationality: "Indonesia",
    profession: "Penyanyi dan penulis lagu",
    hints: ["Nama lengkapnya Muhammad Tulus.", "Lagu terkenalnya termasuk “Monokrom”, “Hati-Hati di Jalan”, dan “Manusia Kuat”.", "Album Manusia menjadi salah satu rilisan penting dalam kariernya."],
    wikiTitle: "Tulus_(singer)",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Tulus"]
  },
  {
        id: "person_199",
    name: "Meghan Trainor",
    aliases: ["Meghan Trainor"],
    category: "music",
    nationality: "Amerika Serikat",
    profession: "Penyanyi dan penulis lagu",
    hints: ["Terkenal melalui lagu “All About That Bass”.", "Musiknya banyak mengangkat gaya doo-wop dan pop.", "Merilis lagu “Made You Look”."],
    wikiTitle: "Meghan_Trainor",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Meghan Trainor"]
  },
  {
        id: "person_200",
    name: "Lady Gaga",
    aliases: ["Lady Gaga"],
    category: "music",
    nationality: "Amerika Serikat",
    profession: "Penyanyi dan aktris",
    hints: ["Nama lahirnya Stefani Germanotta.", "Lagu terkenalnya termasuk “Poker Face” dan “Bad Romance”.", "Membintangi film A Star Is Born dan Joker: Folie à Deux."],
    wikiTitle: "Lady_Gaga",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Lady Gaga"]
  },
  {
        id: "person_201",
    name: "Ed Sheeran",
    aliases: ["Ed Sheeran"],
    category: "music",
    nationality: "Inggris",
    profession: "Penyanyi dan penulis lagu",
    hints: ["Dikenal tampil solo dengan gitar dan loop pedal.", "Lagu terkenalnya termasuk “Shape of You” dan “Perfect”.", "Merilis seri album matematika seperti +, ×, ÷, dan =."],
    wikiTitle: "Ed_Sheeran",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Ed Sheeran"]
  },
  {
        id: "person_202",
    name: "Eminem",
    aliases: ["Eminem"],
    category: "music",
    nationality: "Amerika Serikat",
    profession: "Rapper dan produser",
    hints: ["Nama aslinya Marshall Bruce Mathers III.", "Film 8 Mile terinspirasi dari perjalanan hidupnya.", "Lagu terkenalnya termasuk “Lose Yourself” dan “Stan”."],
    wikiTitle: "Eminem",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Eminem"]
  },
  {
        id: "person_203",
    name: "Michael Bublé",
    aliases: ["Michael Bublé", "Michael Buble"],
    category: "music",
    nationality: "Kanada",
    profession: "Penyanyi",
    hints: ["Dikenal lewat lagu pop tradisional dan standar jazz.", "Mempopulerkan lagu “Haven’t Met You Yet”.", "Album Christmas menjadi rilisan musiman yang populer."],
    wikiTitle: "Michael_Buble",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Michael Bublé", "Michael Buble"]
  },
  {
        id: "person_204",
    name: "Zaskia Gotik",
    aliases: ["Zaskia Gotik"],
    category: "music",
    nationality: "Indonesia",
    profession: "Penyanyi dangdut",
    hints: ["Dikenal dengan julukan “Goyang Itik”.", "Namanya dikenal lewat musik dangdut populer Indonesia.", "Salah satu lagunya yang dikenal adalah “Bang Jono”."],
    wikiTitle: "Zaskia_Gotik",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Zaskia Gotik"]
  },
  {
        id: "person_205",
    name: "Julia Perez",
    aliases: ["Julia Perez", "Julia Peres"],
    category: "music",
    nationality: "Indonesia",
    profession: "Penyanyi dan aktris",
    hints: ["Sering dikenal dengan nama panggung Jupe.", "Membintangi film dan merilis lagu dangdut.", "Pernah dikenal lewat lagu “Belah Duren”."],
    wikiTitle: "Julia_Perez",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Julia Perez", "Julia Peres"]
  },
  {
        id: "person_206",
    name: "Lil Nas X",
    aliases: ["Lil Nas X"],
    category: "music",
    nationality: "Amerika Serikat",
    profession: "Rapper dan penyanyi",
    hints: ["Menjadi terkenal melalui lagu “Old Town Road”.", "Memadukan unsur country dan hip-hop dalam musiknya.", "Merilis lagu “Montero (Call Me by Your Name)”."],
    wikiTitle: "Lil_Nas_X",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Lil Nas X"]
  },
  {
        id: "person_207",
    name: "Alan Walker",
    aliases: ["Alan Walker"],
    category: "music",
    nationality: "Norwegia / Inggris",
    profession: "DJ dan produser musik",
    hints: ["Dikenal dengan hoodie dan masker hitam dalam penampilan awalnya.", "Lagu “Faded” menjadi hit elektronik internasional.", "Produser musik elektronik yang merilis “Alone” dan “The Spectre”."],
    wikiTitle: "Alan_Walker",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Alan Walker"]
  },
  {
        id: "person_208",
    name: "Marshmello",
    aliases: ["Marshmello"],
    category: "music",
    nationality: "Amerika Serikat",
    profession: "DJ dan produser musik",
    hints: ["Tampil dengan helm berbentuk marshmallow.", "Lagu terkenalnya termasuk “Alone” dan “Happier”.", "Pernah berkolaborasi dengan Bastille dan Khalid."],
    wikiTitle: "Marshmello_(musician)",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Marshmello"]
  },
  {
        id: "person_209",
    name: "BoyWithUke",
    aliases: ["BoyWithUke"],
    category: "music",
    nationality: "Amerika Serikat",
    profession: "Penyanyi dan musisi",
    hints: ["Dikenal lewat lagu-lagu yang dibuat dengan ukulele.", "Lagu “Toxic” menjadi populer di media sosial.", "Lama menyembunyikan wajah di balik topeng sebelum mengungkap identitasnya."],
    wikiTitle: "BoyWithUke",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["BoyWithUke"]
  },
  {
        id: "person_210",
    name: "Saykoji",
    aliases: ["Saykoji"],
    category: "music",
    nationality: "Indonesia",
    profession: "Rapper",
    hints: ["Nama aslinya Ignatius Rosoinaya Penyami.", "Dikenal melalui lagu rap “So What Gitu Loh”.", "Kerap mengangkat kehidupan sehari-hari dalam liriknya."],
    wikiTitle: "Saykoji",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Saykoji"]
  },
  {
        id: "person_211",
    name: "Tom Holland",
    aliases: ["Tom Holland"],
    category: "actor",
    nationality: "Inggris",
    profession: "Aktor",
    hints: ["Memerankan Peter Parker dalam Marvel Cinematic Universe.", "Juga membintangi film The Impossible dan Uncharted.", "Sebelum film, ia tampil dalam musikal Billy Elliot di London."],
    wikiTitle: "Tom_Holland",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Tom Holland"]
  },
  {
        id: "person_212",
    name: "Andrew Garfield",
    aliases: ["Andrew Garfield"],
    category: "actor",
    nationality: "Amerika Serikat / Inggris",
    profession: "Aktor",
    hints: ["Memerankan Spider-Man dalam dua film The Amazing Spider-Man.", "Mendapat nominasi Oscar untuk Hacksaw Ridge dan Tick, Tick... Boom!.", "Juga tampil dalam film The Social Network."],
    wikiTitle: "Andrew_Garfield",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Andrew Garfield"]
  },
  {
        id: "person_213",
    name: "Tobey Maguire",
    aliases: ["Tobey Maguire"],
    category: "actor",
    nationality: "Amerika Serikat",
    profession: "Aktor",
    hints: ["Memerankan Peter Parker dalam trilogi Spider-Man karya Sam Raimi.", "Membintangi film Seabiscuit dan The Great Gatsby.", "Versi Spider-Man-nya menjadi ikon film superhero awal 2000-an."],
    wikiTitle: "Tobey_Maguire",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Tobey Maguire"]
  },
  {
        id: "person_214",
    name: "Robert Downey Jr.",
    aliases: ["Robert Downey Jr."],
    category: "actor",
    nationality: "Amerika Serikat",
    profession: "Aktor",
    hints: ["Memerankan Tony Stark alias Iron Man di Marvel Cinematic Universe.", "Memenangkan Oscar untuk perannya dalam Oppenheimer.", "Pernah membintangi Sherlock Holmes versi Guy Ritchie."],
    wikiTitle: "Robert_Downey_Jr.",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Robert Downey Jr."]
  },
  {
        id: "person_215",
    name: "Brad Pitt",
    aliases: ["Brad Pitt"],
    category: "actor",
    nationality: "Amerika Serikat",
    profession: "Aktor dan produser",
    hints: ["Membintangi Fight Club, Seven, dan Once Upon a Time in Hollywood.", "Memenangkan Oscar aktor pendukung lewat Once Upon a Time in Hollywood.", "Mendirikan perusahaan produksi Plan B Entertainment."],
    wikiTitle: "Brad_Pitt",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Brad Pitt"]
  },
  {
        id: "person_216",
    name: "Pedro Pascal",
    aliases: ["Pedro Pascal"],
    category: "actor",
    nationality: "Chile / Amerika Serikat",
    profession: "Aktor",
    hints: ["Memerankan Joel dalam serial The Last of Us.", "Juga dikenal sebagai Din Djarin dalam The Mandalorian.", "Tampil dalam Game of Thrones sebagai Oberyn Martell."],
    wikiTitle: "Pedro_Pascal",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Pedro Pascal"]
  },
  {
        id: "person_217",
    name: "Zendaya",
    aliases: ["Zendaya"],
    category: "actor",
    nationality: "Amerika Serikat",
    profession: "Aktris dan penyanyi",
    hints: ["Memerankan MJ dalam film Spider-Man versi Tom Holland.", "Memenangkan Emmy untuk perannya dalam serial Euphoria.", "Juga membintangi film Dune sebagai Chani."],
    wikiTitle: "Zendaya",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Zendaya"]
  },
  {
        id: "person_218",
    name: "Scarlett Johansson",
    aliases: ["Scarlett Johansson", "Scarlet Johansson", "Scarlett"],
    category: "actor",
    nationality: "Amerika Serikat",
    profession: "Aktris",
    hints: ["Memerankan Natasha Romanoff alias Black Widow dalam Marvel.", "Membintangi Lost in Translation dan Marriage Story.", "Menjadi salah satu aktris dengan pendapatan box office tertinggi."],
    wikiTitle: "Scarlett_Johansson",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Scarlett Johansson", "Scarlet Johansson", "Scarlett"]
  },
  {
        id: "person_219",
    name: "Iko Uwais",
    aliases: ["Iko Uwais"],
    category: "actor",
    nationality: "Indonesia",
    profession: "Aktor laga dan koreografer bela diri",
    hints: ["Dikenal melalui film laga The Raid.", "Memiliki latar belakang pencak silat.", "Tampil dalam film internasional seperti Mile 22 dan The Expendables 4."],
    wikiTitle: "Iko_Uwais",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Iko Uwais"]
  },
  {
        id: "person_220",
    name: "Jefri Nichol",
    aliases: ["Jefri Nichol"],
    category: "actor",
    nationality: "Indonesia",
    profession: "Aktor",
    hints: ["Membintangi film Dear Nathan.", "Dikenal melalui sejumlah film drama remaja Indonesia.", "Memulai karier akting pada usia muda."],
    wikiTitle: "Jefri_Nichol",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Jefri Nichol"]
  },
  {
        id: "person_221",
    name: "Prilly Latuconsina",
    aliases: ["Prilly Latuconsina"],
    category: "actor",
    nationality: "Indonesia",
    profession: "Aktris dan produser",
    hints: ["Dikenal melalui sinetron Ganteng-Ganteng Serigala.", "Membintangi film Danur.", "Juga aktif sebagai produser dan pengusaha."],
    wikiTitle: "Prilly_Latuconsina",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Prilly Latuconsina"]
  },
  {
        id: "person_222",
    name: "Dwayne Johnson",
    aliases: ["Dwayne Johnson"],
    category: "actor",
    nationality: "Amerika Serikat",
    profession: "Aktor dan mantan pegulat",
    hints: ["Dikenal dengan julukan The Rock.", "Sebelum berakting, ia menjadi bintang gulat profesional WWE.", "Membintangi Jumanji, Fast & Furious, dan film Black Adam."],
    wikiTitle: "Dwayne_Johnson",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Dwayne Johnson"]
  },
  {
        id: "person_223",
    name: "Ryan Reynolds",
    aliases: ["Ryan Reynolds"],
    category: "actor",
    nationality: "Kanada",
    profession: "Aktor dan pengusaha",
    hints: ["Memerankan tokoh Deadpool dalam film Marvel.", "Membintangi Free Guy dan The Proposal.", "Dikenal dengan gaya humor dan usaha bisnisnya."],
    wikiTitle: "Ryan_Reynolds",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Ryan Reynolds"]
  },
  {
        id: "person_224",
    name: "Chris Hemsworth",
    aliases: ["Chris Hemsworth"],
    category: "actor",
    nationality: "Australia",
    profession: "Aktor",
    hints: ["Memerankan Thor dalam Marvel Cinematic Universe.", "Membintangi film Extraction.", "Berasal dari Australia dan memiliki dua saudara yang juga aktor."],
    wikiTitle: "Chris_Hemsworth",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Chris Hemsworth"]
  },
  {
        id: "person_225",
    name: "Jason Statham",
    aliases: ["Jason Statham"],
    category: "actor",
    nationality: "Inggris",
    profession: "Aktor laga",
    hints: ["Dikenal melalui film The Transporter.", "Sering membintangi film aksi seperti Crank dan The Meg.", "Sebelum berakting, ia pernah menjadi atlet loncat indah."],
    wikiTitle: "Jason_Statham",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Jason Statham"]
  },
  {
        id: "person_226",
    name: "Emma Stone",
    aliases: ["Emma Stone"],
    category: "actor",
    nationality: "Amerika Serikat",
    profession: "Aktris",
    hints: ["Memenangkan Oscar untuk La La Land dan Poor Things.", "Membintangi Easy A dan The Favourite.", "Memerankan Gwen Stacy dalam film The Amazing Spider-Man."],
    wikiTitle: "Emma_Stone",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Emma Stone"]
  },
  {
        id: "person_227",
    name: "Margot Robbie",
    aliases: ["Margot Robbie"],
    category: "actor",
    nationality: "Australia",
    profession: "Aktris dan produser",
    hints: ["Memerankan Harley Quinn dalam film DC.", "Membintangi film Barbie dan I, Tonya.", "Mendirikan perusahaan produksi LuckyChap Entertainment."],
    wikiTitle: "Margot_Robbie",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Margot Robbie"]
  },
  {
        id: "person_228",
    name: "Jennifer Lawrence",
    aliases: ["Jennifer Lawrence"],
    category: "actor",
    nationality: "Amerika Serikat",
    profession: "Aktris",
    hints: ["Memerankan Katniss Everdeen dalam The Hunger Games.", "Memenangkan Oscar untuk film Silver Linings Playbook.", "Juga dikenal lewat perannya sebagai Mystique di X-Men."],
    wikiTitle: "Jennifer_Lawrence",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Jennifer Lawrence"]
  },
  {
        id: "person_229",
    name: "Dian Sastrowardoyo",
    aliases: ["Dian Sastrowardoyo"],
    category: "actor",
    nationality: "Indonesia",
    profession: "Aktris dan produser",
    hints: ["Melejit lewat film Ada Apa dengan Cinta? sebagai Cinta.", "Juga membintangi Pasir Berbisik dan Kartini.", "Aktif dalam dunia pendidikan dan produksi film."],
    wikiTitle: "Dian_Sastrowardoyo",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Dian Sastrowardoyo"]
  },
  {
        id: "person_230",
    name: "Sadie Sink",
    aliases: ["Sadie Sink"],
    category: "actor",
    nationality: "Amerika Serikat",
    profession: "Aktris",
    hints: ["Dikenal sebagai Max Mayfield dalam serial Stranger Things.", "Membintangi film The Whale bersama Brendan Fraser.", "Memulai kariernya lewat panggung Broadway."],
    wikiTitle: "Sadie_Sink",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Sadie Sink"]
  },
  {
        id: "person_231",
    name: "Max Verstappen",
    aliases: ["Max Verstappen"],
    category: "athlete",
    nationality: "Belanda",
    profession: "Pembalap Formula 1",
    hints: ["Menjadi pembalap Formula 1 pada usia 17 tahun.", "Membalap untuk tim Red Bull Racing.", "Meraih beberapa gelar juara dunia Formula 1."],
    wikiTitle: "Max_Verstappen",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Max Verstappen"]
  },
  {
        id: "person_232",
    name: "Kylian Mbappé",
    aliases: ["Kylian Mbappé", "Kylian Mbappe", "Mbappe"],
    category: "athlete",
    nationality: "Prancis",
    profession: "Pesepak bola",
    hints: ["Menjadi juara Piala Dunia bersama Prancis pada 2018.", "Dikenal dengan kecepatannya dan pernah bermain untuk PSG.", "Bergabung dengan Real Madrid pada 2024."],
    wikiTitle: "Kylian_Mbappé",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Kylian Mbappé", "Kylian Mbappe", "Mbappe"]
  },
  {
        id: "person_233",
    name: "Erling Haaland",
    aliases: ["Erling Haaland", "Erling Halland"],
    category: "athlete",
    nationality: "Norwegia",
    profession: "Pesepak bola",
    hints: ["Dikenal sebagai penyerang dengan produktivitas gol tinggi.", "Membela Manchester City dan tim nasional Norwegia.", "Memecahkan rekor gol Premier League dalam satu musim 38 pertandingan."],
    wikiTitle: "Erling_Haaland",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Erling Haaland", "Erling Halland"]
  },
  {
        id: "person_234",
    name: "LeBron James",
    aliases: ["LeBron James", "Lebron James", "LeBron"],
    category: "athlete",
    nationality: "Amerika Serikat",
    profession: "Pemain basket",
    hints: ["Dijuluki King James.", "Memenangkan beberapa gelar NBA bersama Miami Heat, Cleveland Cavaliers, dan Los Angeles Lakers.", "Menjadi pencetak poin terbanyak sepanjang sejarah NBA."],
    wikiTitle: "LeBron_James",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["LeBron James", "Lebron James", "LeBron"]
  },
  {
        id: "person_235",
    name: "Stephen Curry",
    aliases: ["Stephen Curry"],
    category: "athlete",
    nationality: "Amerika Serikat",
    profession: "Pemain basket",
    hints: ["Dikenal karena akurasi tembakan tiga angka.", "Membela Golden State Warriors di NBA.", "Membantu timnya meraih beberapa gelar juara NBA."],
    wikiTitle: "Stephen_Curry",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Stephen Curry"]
  },
  {
        id: "person_236",
    name: "Novak Djokovic",
    aliases: ["Novak Djokovic"],
    category: "athlete",
    nationality: "Serbia",
    profession: "Petenis",
    hints: ["Salah satu petenis dengan gelar Grand Slam terbanyak.", "Dikenal dengan kemampuan bertahan dan pengembalian servis.", "Bersaing pada era yang sama dengan Roger Federer dan Rafael Nadal."],
    wikiTitle: "Novak_Djokovic",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Novak Djokovic"]
  },
  {
        id: "person_237",
    name: "Rafael Nadal",
    aliases: ["Rafael Nadal"],
    category: "athlete",
    nationality: "Spanyol",
    profession: "Petenis",
    hints: ["Dijuluki King of Clay karena dominasinya di lapangan tanah liat.", "Meraih banyak gelar French Open.", "Menjadi bagian dari era “Big Three” tenis bersama Federer dan Djokovic."],
    wikiTitle: "Rafael_Nadal",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Rafael Nadal"]
  },
  {
        id: "person_238",
    name: "Anthony Sinisuka Ginting",
    aliases: ["Anthony Sinisuka Ginting"],
    category: "athlete",
    nationality: "Indonesia",
    profession: "Pebulu tangkis tunggal putra",
    hints: ["Pebulu tangkis tunggal putra Indonesia.", "Meraih medali perunggu Olimpiade Tokyo 2020.", "Dikenal dengan permainan cepat dan serangan agresif."],
    wikiTitle: "Anthony_Sinisuka_Ginting",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Anthony Sinisuka Ginting"]
  },
  {
        id: "person_239",
    name: "Kevin Sanjaya Sukamuljo",
    aliases: ["Kevin Sanjaya Sukamuljo"],
    category: "athlete",
    nationality: "Indonesia",
    profession: "Pebulu tangkis ganda putra",
    hints: ["Pernah berpasangan dengan Marcus Fernaldi Gideon.", "Pasangan mereka dikenal dengan julukan The Minions.", "Menduduki peringkat satu dunia ganda putra selama periode panjang."],
    wikiTitle: "Kevin_Sanjaya_Sukamuljo",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Kevin Sanjaya Sukamuljo"]
  },
  {
        id: "person_240",
    name: "Marcus Fernaldi Gideon",
    aliases: ["Marcus Fernaldi Gideon"],
    category: "athlete",
    nationality: "Indonesia",
    profession: "Pebulu tangkis ganda putra",
    hints: ["Pernah menjadi pasangan ganda putra Kevin Sanjaya Sukamuljo.", "Pasangan mereka meraih banyak gelar BWF World Tour.", "Dikenal dengan julukan The Minions bersama Kevin."],
    wikiTitle: "Marcus_Fernaldi_Gideon",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Marcus Fernaldi Gideon"]
  },
  {
        id: "person_241",
    name: "Jonatan Christie",
    aliases: ["Jonatan Christie"],
    category: "athlete",
    nationality: "Indonesia",
    profession: "Pebulu tangkis tunggal putra",
    hints: ["Dikenal dengan nama panggilan Jojo.", "Meraih medali emas Asian Games 2018.", "Menjadi salah satu pemain tunggal putra andalan Indonesia."],
    wikiTitle: "Jonatan_Christie",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Jonatan Christie"]
  },
  {
        id: "person_242",
    name: "Lewis Hamilton",
    aliases: ["Lewis Hamilton"],
    category: "athlete",
    nationality: "Inggris",
    profession: "Pembalap Formula 1",
    hints: ["Meraih tujuh gelar juara dunia Formula 1.", "Pernah membalap untuk McLaren dan Mercedes.", "Dikenal juga atas advokasinya untuk keberagaman dalam motorsport."],
    wikiTitle: "Lewis_Hamilton",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Lewis Hamilton"]
  },
  {
        id: "person_243",
    name: "Charles Leclerc",
    aliases: ["Charles Leclerc"],
    category: "athlete",
    nationality: "Monako",
    profession: "Pembalap Formula 1",
    hints: ["Membalap untuk Scuderia Ferrari.", "Berasal dari Monako dan menjadi pemenang Grand Prix di usia muda.", "Dikenal dengan nomor balap 16."],
    wikiTitle: "Charles_Leclerc",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Charles Leclerc"]
  },
  {
        id: "person_244",
    name: "Marc Márquez",
    aliases: ["Marc Márquez"],
    category: "athlete",
    nationality: "Spanyol",
    profession: "Pembalap MotoGP",
    hints: ["Dikenal dengan gaya menikung yang agresif.", "Meraih beberapa gelar juara dunia MotoGP.", "Kembali ke performa puncak setelah melewati cedera panjang."],
    wikiTitle: "Marc_Márquez",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Marc Márquez"]
  },
  {
        id: "person_245",
    name: "Valentino Rossi",
    aliases: ["Valentino Rossi"],
    category: "athlete",
    nationality: "Italia",
    profession: "Mantan pembalap MotoGP",
    hints: ["Dijuluki The Doctor.", "Meraih tujuh gelar juara dunia kelas utama Grand Prix.", "Nomor balap ikoniknya adalah 46."],
    wikiTitle: "Valentino_Rossi",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Valentino Rossi"]
  },
  {
        id: "person_246",
    name: "Conor McGregor",
    aliases: ["Conor McGregor"],
    category: "athlete",
    nationality: "Irlandia",
    profession: "Petarung MMA",
    hints: ["Bertanding di UFC dan dikenal dengan gaya trash talk.", "Menjadi juara UFC di dua kelas berat berbeda.", "Julukannya adalah The Notorious."],
    wikiTitle: "Conor_McGregor",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Conor McGregor"]
  },
  {
        id: "person_247",
    name: "Mike Tyson",
    aliases: ["Mike Tyson"],
    category: "athlete",
    nationality: "Amerika Serikat",
    profession: "Mantan petinju kelas berat",
    hints: ["Menjadi juara dunia kelas berat termuda dalam sejarah tinju.", "Dikenal dengan pukulan keras dan julukan Iron Mike.", "Kembali menjadi sorotan melalui pertandingan eksibisi dan film dokumenter."],
    wikiTitle: "Mike_Tyson",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Mike Tyson"]
  },
  {
        id: "person_248",
    name: "Khabib Nurmagomedov",
    aliases: ["Khabib Nurmagomedov"],
    category: "athlete",
    nationality: "Rusia",
    profession: "Mantan petarung MMA",
    hints: ["Pernah menjadi juara kelas ringan UFC.", "Mengakhiri karier profesionalnya tanpa kekalahan.", "Dikenal dengan gaya gulat dan kontrol lawan yang dominan."],
    wikiTitle: "Khabib_Nurmagomedov",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Khabib Nurmagomedov"]
  },
  {
        id: "person_249",
    name: "Jude Bellingham",
    aliases: ["Jude Bellingham"],
    category: "athlete",
    nationality: "Inggris",
    profession: "Pesepak bola",
    hints: ["Gelandang yang bermain untuk Real Madrid.", "Sebelumnya menonjol bersama Borussia Dortmund.", "Menjadi bagian tim nasional Inggris pada turnamen internasional besar."],
    wikiTitle: "Jude_Bellingham",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Jude Bellingham"]
  },
  {
        id: "person_250",
    name: "George Russell",
    aliases: ["George Russell"],
    category: "athlete",
    nationality: "Inggris",
    profession: "Pembalap Formula 1",
    hints: ["Membalap untuk Mercedes di Formula 1.", "Sebelumnya membela Williams Racing.", "Meraih kemenangan Grand Prix pertamanya di Brasil pada 2022."],
    wikiTitle: "George_Russell_(racing_driver)",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["George Russell"]
  },
  {
        id: "person_251",
    name: "Tiger Woods",
    aliases: ["Tiger Woods"],
    category: "athlete",
    nationality: "Amerika Serikat",
    profession: "Pegolf",
    hints: ["Salah satu pegolf paling berpengaruh sepanjang masa.", "Memenangkan Masters Tournament dengan selisih besar pada 1997.", "Meraih 15 gelar major golf."],
    wikiTitle: "Tiger_Woods",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Tiger Woods"]
  },
  {
        id: "person_252",
    name: "Scottie Scheffler",
    aliases: ["Scottie Scheffler"],
    category: "athlete",
    nationality: "Amerika Serikat",
    profession: "Pegolf",
    hints: ["Menjadi salah satu pegolf peringkat teratas dunia.", "Memenangkan Masters Tournament pada 2022 dan 2024.", "Dikenal dengan permainan konsisten di PGA Tour."],
    wikiTitle: "Scottie_Scheffler",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Scottie Scheffler"]
  },
  {
        id: "person_253",
    name: "Magnus Carlsen",
    aliases: ["Magnus Carlsen", "Magnus Charlsen"],
    category: "athlete",
    nationality: "Norwegia",
    profession: "Grandmaster catur",
    hints: ["Menjadi juara dunia catur klasik pada 2013.", "Pernah menempati peringkat satu dunia dalam waktu panjang.", "Juga dikenal dalam catur cepat dan blitz."],
    wikiTitle: "Magnus_Carlsen",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Magnus Carlsen", "Magnus Charlsen"]
  },
  {
        id: "person_254",
    name: "Hikaru Nakamura",
    aliases: ["Hikaru Nakamura"],
    category: "athlete",
    nationality: "Amerika Serikat",
    profession: "Grandmaster catur dan streamer",
    hints: ["Dikenal sebagai pemain catur cepat kelas dunia.", "Sering membuat konten catur di YouTube dan Twitch.", "Mewakili Amerika Serikat dalam kompetisi catur internasional."],
    wikiTitle: "Hikaru_Nakamura",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Hikaru Nakamura"]
  },
  {
        id: "person_255",
    name: "Neymar Jr.",
    aliases: ["Neymar Jr."],
    category: "athlete",
    nationality: "Brasil",
    profession: "Pesepak bola",
    hints: ["Pernah bermain untuk Barcelona dan Paris Saint-Germain.", "Menjadi bagian trio penyerang MSN bersama Messi dan Suárez.", "Membela tim nasional Brasil dan dikenal dengan teknik dribelnya."],
    wikiTitle: "Neymar",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Neymar Jr."]
  },
  {
        id: "person_256",
    name: "David Beckham",
    aliases: ["David Beckham"],
    category: "athlete",
    nationality: "Inggris",
    profession: "Mantan pesepak bola",
    hints: ["Dikenal karena umpan silang dan tendangan bebasnya.", "Pernah bermain untuk Manchester United, Real Madrid, dan LA Galaxy.", "Menjadi salah satu pemilik klub Inter Miami."],
    wikiTitle: "David_Beckham",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["David Beckham"]
  },
  {
        id: "person_257",
    name: "Shaquille O'Neal",
    aliases: ["Shaquille O'Neal"],
    category: "athlete",
    nationality: "Amerika Serikat",
    profession: "Mantan pemain basket",
    hints: ["Dikenal dengan postur tubuh yang sangat besar dan dominasi di area paint.", "Memenangkan empat gelar NBA.", "Setelah pensiun, ia menjadi analis basket dan DJ."],
    wikiTitle: "Shaquille_O'Neal",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Shaquille O'Neal"]
  },
  {
        id: "person_258",
    name: "Kobe Bryant",
    aliases: ["Kobe Bryant"],
    category: "athlete",
    nationality: "Amerika Serikat",
    profession: "Mantan pemain basket",
    hints: ["Menghabiskan seluruh karier NBA bersama Los Angeles Lakers.", "Mengenakan nomor 8 dan 24.", "Memenangkan lima gelar NBA dan meraih Oscar untuk film animasi pendek Dear Basketball."],
    wikiTitle: "Kobe_Bryant",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Kobe Bryant"]
  },
  {
        id: "person_259",
    name: "Dani Pedrosa",
    aliases: ["Dani Pedrosa"],
    category: "athlete",
    nationality: "Spanyol",
    profession: "Mantan pembalap MotoGP",
    hints: ["Meraih gelar juara dunia di kelas 125cc dan 250cc.", "Lama membalap untuk tim Repsol Honda.", "Dijuluki The Little Samurai."],
    wikiTitle: "Dani_Pedrosa",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Dani Pedrosa"]
  },
  {
        id: "person_260",
    name: "Manny Pacquiao",
    aliases: ["Manny Pacquiao"],
    category: "athlete",
    nationality: "Filipina",
    profession: "Petinju dan politikus",
    hints: ["Menjadi juara dunia tinju di delapan kelas berbeda.", "Dikenal dengan julukan Pac-Man.", "Pernah menjadi senator di Filipina."],
    wikiTitle: "Manny_Pacquiao",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Manny Pacquiao"]
  },
  {
        id: "person_261",
    name: "Bambang Pamungkas",
    aliases: ["Bambang Pamungkas"],
    category: "athlete",
    nationality: "Indonesia",
    profession: "Mantan pesepak bola",
    hints: ["Dikenal dengan panggilan Bepe.", "Menjadi ikon klub Persija Jakarta.", "Pernah menjadi kapten tim nasional Indonesia."],
    wikiTitle: "Bambang_Pamungkas",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Bambang Pamungkas"]
  },
  {
        id: "person_262",
    name: "Boaz Solossa",
    aliases: ["Boaz Solossa"],
    category: "athlete",
    nationality: "Indonesia",
    profession: "Pesepak bola",
    hints: ["Berasal dari Papua dan dikenal sebagai penyerang tajam.", "Lama menjadi ikon Persipura Jayapura.", "Pernah menjadi bagian penting tim nasional Indonesia."],
    wikiTitle: "Boaz_Solossa",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Boaz Solossa"]
  },
  {
        id: "person_263",
    name: "Chris John",
    aliases: ["Chris John"],
    category: "athlete",
    nationality: "Indonesia",
    profession: "Mantan petinju",
    hints: ["Petinju asal Indonesia yang dikenal dengan julukan The Dragon.", "Memegang gelar juara dunia kelas bulu WBA selama bertahun-tahun.", "Menjadi salah satu petinju Indonesia paling sukses di tingkat dunia."],
    wikiTitle: "Chris_John_(boxer)",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Chris John"]
  },
  {
        id: "person_264",
    name: "MiawAug",
    aliases: ["MiawAug"],
    category: "creator",
    nationality: "Indonesia",
    profession: "YouTuber gaming",
    hints: ["Dikenal lewat video gameplay dan komentar game.", "Nama kanalnya menggabungkan kata “Miaw” dan “Aug”.", "Memiliki komunitas penonton besar di Indonesia."],
    wikiTitle: "MiawAug",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["MiawAug"]
  },
  {
        id: "person_265",
    name: "IShowSpeed",
    aliases: ["IShowSpeed"],
    category: "creator",
    nationality: "Amerika Serikat",
    profession: "Streamer dan YouTuber",
    hints: ["Dikenal karena siaran langsung dengan reaksi yang ekspresif.", "Sering membuat konten sepak bola dan penggemar Cristiano Ronaldo.", "Nama aslinya Darren Jason Watkins Jr."],
    wikiTitle: "IShowSpeed",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["IShowSpeed"]
  },
  {
        id: "person_266",
    name: "Kai Cenat",
    aliases: ["Kai Cenat"],
    category: "creator",
    nationality: "Amerika Serikat",
    profession: "Streamer dan kreator konten",
    hints: ["Dikenal lewat livestream komedi dan tantangan.", "Menjadi salah satu streamer paling populer di Twitch.", "Meraih penghargaan Streamer of the Year."],
    wikiTitle: "Kai_Cenat",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Kai Cenat"]
  },
  {
        id: "person_267",
    name: "Zach King",
    aliases: ["Zach King"],
    category: "creator",
    nationality: "Amerika Serikat",
    profession: "Kreator video dan ilusionis digital",
    hints: ["Dikenal dengan video pendek berisi ilusi visual.", "Mulai populer melalui Vine sebelum pindah ke platform lain.", "Sering membuat video “digital magic” yang tampak mustahil."],
    wikiTitle: "Zach_King",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Zach King"]
  },
  {
        id: "person_268",
    name: "Fadil Jaidi",
    aliases: ["Fadil Jaidi"],
    category: "creator",
    nationality: "Indonesia",
    profession: "Kreator konten dan penyanyi",
    hints: ["Sering membuat konten komedi bersama ayahnya, Pak Muh.", "Memiliki basis penggemar besar di media sosial Indonesia.", "Juga merilis musik dan tampil dalam berbagai program hiburan."],
    wikiTitle: "Fadil_Jaidi",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Fadil Jaidi"]
  },
  {
        id: "person_269",
    name: "Reza Arap",
    aliases: ["Reza Arap"],
    category: "creator",
    nationality: "Indonesia",
    profession: "Streamer, musisi, dan kreator konten",
    hints: ["Mulai dikenal melalui konten gaming di YouTube.", "Merupakan anggota grup musik Weird Genius.", "Dikenal sebagai figur penting dalam komunitas streamer Indonesia."],
    wikiTitle: "Reza_Oktovian",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Reza Arap"]
  },
  {
        id: "person_270",
    name: "Jerome Polin",
    aliases: ["Jerome Polin"],
    category: "creator",
    nationality: "Indonesia",
    profession: "YouTuber dan pengusaha",
    hints: ["Menempuh pendidikan di Jepang.", "Mendirikan kanal Nihongo Mantappu yang membahas kehidupan dan bahasa Jepang.", "Dikenal karena konten matematika dan edukasi."],
    wikiTitle: "Jerome_Polin",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Jerome Polin"]
  },
  {
        id: "person_271",
    name: "Andovi da Lopez",
    aliases: ["Andovi da Lopez"],
    category: "creator",
    nationality: "Indonesia",
    profession: "Kreator konten dan aktor",
    hints: ["Dikenal sebagai salah satu kreator kanal YouTube SkinnyIndonesian24.", "Sering membuat sketsa komedi dan video sosial.", "Bersama saudaranya Jovial, ia membuat konten yang membahas isu anak muda."],
    wikiTitle: "Andovi_da_Lopez",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Andovi da Lopez"]
  },
  {
        id: "person_272",
    name: "Nessie Judge",
    aliases: ["Nessie Judge"],
    category: "creator",
    nationality: "Indonesia",
    profession: "YouTuber dan podcaster",
    hints: ["Dikenal lewat konten misteri, teori, dan kisah kriminal.", "Memiliki seri video NERROR.", "Membawakan cerita dengan riset dan narasi panjang."],
    wikiTitle: "Nessie_Judge",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Nessie Judge"]
  },
  {
        id: "person_273",
    name: "Denny Sumargo",
    aliases: ["Denny Sumargo"],
    category: "creator",
    nationality: "Indonesia",
    profession: "Aktor, mantan pebasket, dan podcaster",
    hints: ["Pernah menjadi pemain basket profesional.", "Membintangi film dan berbagai program televisi.", "Mendirikan kanal podcast populer bernama CURHAT BANG."],
    wikiTitle: "Denny_Sumargo",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Denny Sumargo"]
  },
  {
        id: "person_274",
    name: "Praz Teguh",
    aliases: ["Praz Teguh"],
    category: "creator",
    nationality: "Indonesia",
    profession: "Komika dan podcaster",
    hints: ["Dikenal sebagai komika stand-up Indonesia.", "Menjadi host podcast yang mengundang komedian dan tokoh publik.", "Sering tampil dalam acara komedi dan hiburan."],
    wikiTitle: "Praz_Teguh",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Praz Teguh"]
  },
  {
        id: "person_275",
    name: "Bobon Santoso",
    aliases: ["Bobon Santoso"],
    category: "creator",
    nationality: "Indonesia",
    profession: "YouTuber kuliner",
    hints: ["Dikenal lewat video memasak dalam porsi sangat besar.", "Sering membuat kegiatan memasak untuk banyak orang.", "Kontennya menggabungkan kuliner, hiburan, dan aksi sosial."],
    wikiTitle: "Bobon_Santoso",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Bobon Santoso"]
  },
  {
        id: "person_276",
    name: "Tanboy Kun",
    aliases: ["Tanboy Kun"],
    category: "creator",
    nationality: "Indonesia",
    profession: "YouTuber kuliner",
    hints: ["Dikenal dengan video mukbang dan tantangan makanan pedas.", "Sering mencoba porsi makanan besar.", "Menjadi salah satu kreator kuliner populer di Indonesia."],
    wikiTitle: "Tanboy_Kun",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Tanboy Kun"]
  },
  {
        id: "person_277",
    name: "Ferry Irwandi",
    aliases: ["Ferry Irwandi"],
    category: "creator",
    nationality: "Indonesia",
    profession: "Kreator konten dan edukator",
    hints: ["Membuat konten edukasi dan komentar isu sosial.", "Dikenal dengan penjelasan panjang berbasis sumber dan data.", "Juga aktif dalam kegiatan sosial dan penggalangan dana."],
    wikiTitle: "Ferry_Irwandi",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Ferry Irwandi"]
  },
  {
        id: "person_278",
    name: "Tara Arts",
    aliases: ["Tara Arts"],
    category: "creator",
    nationality: "Indonesia",
    profession: "Kreator konten gaming",
    hints: ["Dikenal melalui konten gaming dan hiburan di YouTube.", "Membuat video tentang game populer dan budaya internet.", "Menjadi bagian dari komunitas kreator gaming Indonesia."],
    wikiTitle: "Tara_Arts",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Tara Arts"]
  },
  {
        id: "person_279",
    name: "Mister Aloy",
    aliases: ["Mister Aloy"],
    category: "creator",
    nationality: "Indonesia",
    profession: "Kreator konten",
    hints: ["Dikenal sebagai kreator konten hiburan di media sosial.", "Memiliki gaya penyampaian yang khas di video pendek.", "Kontennya banyak beredar di kalangan pengguna media sosial Indonesia."],
    wikiTitle: "Mister_Aloy",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Mister Aloy"]
  },
  {
        id: "person_280",
    name: "Raffi Ahmad",
    aliases: ["Raffi Ahmad"],
    category: "creator",
    nationality: "Indonesia",
    profession: "Presenter, aktor, dan pengusaha",
    hints: ["Memulai karier sebagai aktor dan presenter sejak remaja.", "Menikah dengan Nagita Slavina dan memiliki kanal RANS Entertainment.", "Aktif di bidang hiburan, bisnis, dan kegiatan publik."],
    wikiTitle: "Raffi_Ahmad",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Raffi Ahmad"]
  },
  {
        id: "person_281",
    name: "Mark Rober",
    aliases: ["Mark Rober"],
    category: "creator",
    nationality: "Amerika Serikat",
    profession: "YouTuber dan mantan insinyur NASA",
    hints: ["Pernah bekerja sebagai insinyur di NASA dan Apple.", "Membuat eksperimen sains dan rekayasa untuk YouTube.", "Dikenal lewat proyek Glitter Bomb untuk melawan pencurian paket."],
    wikiTitle: "Mark_Rober",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Mark Rober"]
  },
  {
        id: "person_282",
    name: "Panji Petualang",
    aliases: ["Panji Petualang"],
    category: "creator",
    nationality: "Indonesia",
    profession: "Kreator konten satwa dan petualangan",
    hints: ["Dikenal melalui konten edukasi tentang reptil dan satwa liar.", "Sering membahas ular dan cara memahami perilakunya.", "Membangun citra sebagai edukator satwa dan petualang."],
    wikiTitle: "Panji_Petualang",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Panji Petualang"]
  },
  {
        id: "person_283",
    name: "Luthfi Halimawan",
    aliases: ["Luthfi Halimawan"],
    category: "creator",
    nationality: "Indonesia",
    profession: "YouTuber dan streamer gaming",
    hints: ["Dikenal melalui konten game dan livestream.", "Membuat video hiburan serta kolaborasi dengan kreator lain.", "Memiliki komunitas penggemar gaming di Indonesia."],
    wikiTitle: "Luthfi_Halimawan",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Luthfi Halimawan"]
  },
  {
        id: "person_284",
    name: "Julius Caesar",
    aliases: ["Julius Caesar"],
    category: "history",
    nationality: "Romawi Kuno",
    profession: "Jenderal dan negarawan Romawi",
    hints: ["Menjadi jenderal penting dalam penaklukan Galia.", "Melintasi Sungai Rubicon yang memicu perang saudara Romawi.", "Dibunuh oleh sekelompok senator pada Ides of March tahun 44 SM."],
    wikiTitle: "Julius_Caesar",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Julius Caesar"]
  },
  {
        id: "person_285",
    name: "Alexander the Great",
    aliases: ["Alexander the Great"],
    category: "history",
    nationality: "Makedonia Kuno",
    profession: "Raja dan penakluk",
    hints: ["Menjadi murid filsuf Aristoteles.", "Membangun kekaisaran luas dari Yunani hingga Mesir dan India.", "Tidak pernah kalah dalam pertempuran besar yang ia pimpin."],
    wikiTitle: "Alexander_the_Great",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Alexander the Great"]
  },
  {
        id: "person_286",
    name: "Genghis Khan",
    aliases: ["Genghis Khan"],
    category: "history",
    nationality: "Kekaisaran Mongol",
    profession: "Pendiri Kekaisaran Mongol",
    hints: ["Menyatukan suku-suku Mongol di Asia Tengah.", "Memimpin penaklukan yang membentuk kekaisaran daratan terbesar dalam sejarah.", "Nama lahirnya adalah Temüjin."],
    wikiTitle: "Genghis_Khan",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Genghis Khan"]
  },
  {
        id: "person_287",
    name: "Socrates",
    aliases: ["Socrates"],
    category: "history",
    nationality: "Yunani Kuno",
    profession: "Filsuf",
    hints: ["Dikenal melalui metode bertanya yang kemudian disebut metode Sokratik.", "Tidak meninggalkan karya tulis sendiri; pemikirannya banyak dicatat Plato.", "Dihukum mati di Athena dengan meminum racun hemlock."],
    wikiTitle: "Socrates",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Socrates"]
  },
  {
        id: "person_288",
    name: "Plato",
    aliases: ["Plato"],
    category: "history",
    nationality: "Yunani Kuno",
    profession: "Filsuf",
    hints: ["Merupakan murid Socrates dan guru Aristoteles.", "Mendirikan Akademi di Athena.", "Menulis dialog filosofis seperti The Republic."],
    wikiTitle: "Plato",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Plato"]
  },
  {
        id: "person_289",
    name: "Aristoteles",
    aliases: ["Aristoteles"],
    category: "history",
    nationality: "Yunani Kuno",
    profession: "Filsuf dan ilmuwan",
    hints: ["Menjadi guru Alexander the Great.", "Menulis tentang logika, etika, politik, biologi, dan metafisika.", "Pemikirannya berpengaruh besar pada filsafat Barat dan ilmu pengetahuan."],
    wikiTitle: "Aristotle",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Aristoteles"]
  },
  {
        id: "person_290",
    name: "Galileo Galilei",
    aliases: ["Galileo Galilei"],
    category: "history",
    nationality: "Italia",
    profession: "Astronom dan fisikawan",
    hints: ["Menggunakan teleskop untuk mengamati bulan dan satelit Jupiter.", "Mendukung model heliosentris yang menempatkan Matahari di pusat tata surya.", "Dihadapkan pada pengadilan Inkuisisi karena pandangannya tentang astronomi."],
    wikiTitle: "Galileo_Galilei",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Galileo Galilei"]
  },
  {
        id: "person_291",
    name: "Ki Hajar Dewantara",
    aliases: ["Ki Hajar Dewantara"],
    category: "history",
    nationality: "Indonesia",
    profession: "Tokoh pendidikan nasional",
    hints: ["Nama lahirnya Raden Mas Soewardi Soerjaningrat.", "Mendirikan Taman Siswa untuk pendidikan rakyat Indonesia.", "Semboyan pendidikannya adalah “Ing ngarsa sung tuladha, ing madya mangun karsa, tut wuri handayani”."],
    wikiTitle: "Ki_Hadjar_Dewantara",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Ki Hajar Dewantara"]
  },
  {
        id: "person_292",
    name: "Tuanku Imam Bonjol",
    aliases: ["Tuanku Imam Bonjol"],
    category: "history",
    nationality: "Indonesia",
    profession: "Pemimpin Perang Padri",
    hints: ["Memimpin perlawanan terhadap pemerintah kolonial Belanda di Sumatra Barat.", "Menjadi tokoh penting dalam Perang Padri.", "Ditangkap dan diasingkan hingga akhir hayatnya."],
    wikiTitle: "Tuanku_Imam_Bonjol",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Tuanku Imam Bonjol"]
  },
  {
        id: "person_293",
    name: "Pattimura",
    aliases: ["Pattimura"],
    category: "history",
    nationality: "Indonesia",
    profession: "Pahlawan nasional",
    hints: ["Nama aslinya Thomas Matulessy.", "Memimpin perlawanan rakyat Maluku terhadap Belanda pada 1817.", "Namanya diabadikan sebagai nama jalan, universitas, dan berbagai fasilitas umum."],
    wikiTitle: "Pattimura",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Pattimura"]
  },
  {
        id: "person_294",
    name: "Michael Faraday",
    aliases: ["Michael Faraday"],
    category: "scientist",
    nationality: "Inggris",
    profession: "Fisikawan dan kimiawan",
    hints: ["Berasal dari keluarga sederhana dan pernah bekerja sebagai penjilid buku.", "Menemukan prinsip induksi elektromagnetik.", "Namanya diabadikan dalam satuan kapasitansi, farad."],
    wikiTitle: "Michael_Faraday",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Michael Faraday"]
  },
  {
        id: "person_295",
    name: "Max Planck",
    aliases: ["Max Planck"],
    category: "scientist",
    nationality: "Jerman",
    profession: "Fisikawan teoretis",
    hints: ["Dianggap sebagai salah satu pendiri fisika kuantum.", "Mengusulkan gagasan kuanta energi untuk menjelaskan radiasi benda hitam.", "Menerima Nobel Fisika pada 1918."],
    wikiTitle: "Max_Planck",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Max Planck"]
  },
  {
        id: "person_296",
    name: "J. Robert Oppenheimer",
    aliases: ["J. Robert Oppenheimer", "Robert Oppenheimer", "Oppenheimer"],
    category: "scientist",
    nationality: "Amerika Serikat",
    profession: "Fisikawan teoretis",
    hints: ["Memimpin Laboratorium Los Alamos dalam Proyek Manhattan.", "Sering dijuluki “bapak bom atom”.", "Kutipan terkenalnya setelah uji Trinity mengacu pada Bhagavad Gita."],
    wikiTitle: "J._Robert_Oppenheimer",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["J. Robert Oppenheimer", "Robert Oppenheimer", "Oppenheimer"]
  },
  {
        id: "person_297",
    name: "Charles Darwin",
    aliases: ["Charles Darwin"],
    category: "scientist",
    nationality: "Inggris",
    profession: "Naturalis",
    hints: ["Melakukan perjalanan penelitian dengan kapal HMS Beagle.", "Mengembangkan teori evolusi melalui seleksi alam.", "Menulis buku On the Origin of Species pada 1859."],
    wikiTitle: "Charles_Darwin",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Charles Darwin"]
  },
  {
        id: "person_298",
    name: "Hippocrates",
    aliases: ["Hippocrates"],
    category: "scientist",
    nationality: "Yunani Kuno",
    profession: "Tabib",
    hints: ["Sering disebut sebagai bapak kedokteran Barat.", "Namanya dikaitkan dengan Sumpah Hippocrates bagi tenaga medis.", "Mengajarkan pengamatan gejala sebagai bagian penting praktik kedokteran."],
    wikiTitle: "Hippocrates",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Hippocrates"]
  },
  {
        id: "person_299",
    name: "John Dalton",
    aliases: ["John Dalton"],
    category: "scientist",
    nationality: "Inggris",
    profession: "Kimiawan dan fisikawan",
    hints: ["Mengembangkan teori atom modern awal.", "Meneliti buta warna yang kemudian dikenal sebagai daltonisme.", "Mempelajari tekanan parsial gas."],
    wikiTitle: "John_Dalton",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["John Dalton"]
  },
  {
        id: "person_300",
    name: "Pythagoras",
    aliases: ["Pythagoras"],
    category: "scientist",
    nationality: "Yunani Kuno",
    profession: "Matematikawan dan filsuf",
    hints: ["Namanya melekat pada teorema segitiga siku-siku.", "Mendirikan kelompok pemikiran yang menggabungkan matematika dan filsafat.", "Pemikirannya banyak dikenal melalui tradisi Pythagorean."],
    wikiTitle: "Pythagoras",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Pythagoras"]
  },
  {
        id: "person_301",
    name: "Alexander Graham Bell",
    aliases: ["Alexander Graham Bell"],
    category: "scientist",
    nationality: "Skotlandia / Amerika Serikat",
    profession: "Penemu dan ilmuwan",
    hints: ["Dikenal karena pengembangan telepon.", "Keluarganya memiliki hubungan erat dengan pendidikan bicara dan pendengaran.", "Mendirikan Bell Telephone Company pada abad ke-19."],
    wikiTitle: "Alexander_Graham_Bell",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Alexander Graham Bell"]
  },
  {
        id: "person_302",
    name: "James Watt",
    aliases: ["James Watt"],
    category: "scientist",
    nationality: "Skotlandia",
    profession: "Insinyur dan penemu",
    hints: ["Meningkatkan efisiensi mesin uap.", "Inovasinya membantu mendorong Revolusi Industri.", "Satuan daya watt dinamai berdasarkan namanya."],
    wikiTitle: "James_Watt",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["James Watt"]
  },
  {
        id: "person_303",
    name: "Rudolf Diesel",
    aliases: ["Rudolf Diesel"],
    category: "scientist",
    nationality: "Jerman",
    profession: "Insinyur dan penemu",
    hints: ["Mengembangkan mesin pembakaran dalam yang menggunakan prinsip kompresi.", "Mesin diesel kemudian digunakan pada kendaraan dan mesin industri.", "Namanya melekat pada jenis mesin dan bahan bakar diesel."],
    wikiTitle: "Rudolf_Diesel",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Rudolf Diesel"]
  },
  {
        id: "person_304",
    name: "Oprah Winfrey",
    aliases: ["Oprah Winfrey"],
    category: "other",
    nationality: "Amerika Serikat",
    profession: "Pembawa acara dan filantropis",
    hints: ["Membawakan acara bincang-bincang televisi yang sangat populer.", "Membangun perusahaan media Harpo Productions.", "Dikenal juga melalui kegiatan filantropi dan klub buku."],
    wikiTitle: "Oprah_Winfrey",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Oprah Winfrey"]
  },
  {
        id: "person_305",
    name: "Kim Kardashian",
    aliases: ["Kim Kardashian"],
    category: "other",
    nationality: "Amerika Serikat",
    profession: "Tokoh media dan pengusaha",
    hints: ["Dikenal melalui reality show Keeping Up with the Kardashians.", "Mendirikan merek shapewear Skims.", "Aktif mengembangkan bisnis kecantikan dan fesyen."],
    wikiTitle: "Kim_Kardashian",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Kim Kardashian"]
  },
  {
        id: "person_306",
    name: "Jackie Kennedy",
    aliases: ["Jackie Kennedy"],
    category: "other",
    nationality: "Amerika Serikat",
    profession: "Mantan Ibu Negara AS",
    hints: ["Menjadi Ibu Negara Amerika Serikat saat John F. Kennedy menjabat presiden.", "Dikenal atas kontribusinya pada pemulihan dan pelestarian Gedung Putih.", "Setelah masa kepresidenan, ia bekerja di dunia penerbitan."],
    wikiTitle: "Jacqueline_Kennedy_Onassis",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Jackie Kennedy"]
  },
  {
        id: "person_307",
    name: "Gordon Ramsay",
    aliases: ["Gordon Ramsay"],
    category: "other",
    nationality: "Inggris",
    profession: "Koki dan pembawa acara",
    hints: ["Dikenal sebagai koki dengan restoran berbintang Michelin.", "Membawakan acara Hell’s Kitchen dan MasterChef.", "Terkenal dengan gaya kritik yang tegas di acara memasak."],
    wikiTitle: "Gordon_Ramsay",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["Gordon Ramsay"]
  },
  {
        id: "person_308",
    name: "David Attenborough",
    aliases: ["David Attenborough"],
    category: "other",
    nationality: "Inggris",
    profession: "Penyiar dan naturalis",
    hints: ["Membawakan banyak dokumenter alam dan satwa liar.", "Narasinya terdengar dalam seri Planet Earth dan Blue Planet.", "Dikenal luas karena advokasi konservasi alam."],
    wikiTitle: "David_Attenborough",
    imageUrl: "",
    imageSource: "Wikipedia",
    acceptedAnswers: ["David Attenborough"]
  }
  ,{
    id: 'person_309', name: 'R.A. Kartini', aliases: ['Kartini', 'Raden Ajeng Kartini'],
    category: 'history', nationality: 'Indonesia', profession: 'Pahlawan nasional dan pelopor emansipasi perempuan',
    hints: ['Lahir di Jepara pada abad ke-19 dan memperjuangkan akses pendidikan bagi perempuan.', 'Surat-suratnya kepada sahabat di Belanda kemudian diterbitkan menjadi buku.', 'Hari kelahirannya diperingati setiap 21 April di Indonesia.'],
    wikiTitle: 'Kartini', imageUrl: '', imageSource: 'Wikipedia', acceptedAnswers: ['R.A. Kartini', 'Kartini', 'Raden Ajeng Kartini']
  },
  {
    id: 'person_310', name: 'Taufik Hidayat', aliases: ['Taufik', 'Taufik Hidayat'],
    category: 'athlete', nationality: 'Indonesia', profession: 'Mantan pebulu tangkis tunggal putra',
    hints: ['Dikenal dengan backhand smash yang kuat.', 'Meraih medali emas Olimpiade Athena 2004.', 'Menjadi salah satu pemain tunggal putra paling terkenal dalam sejarah bulu tangkis Indonesia.'],
    wikiTitle: 'Taufik_Hidayat', imageUrl: '', imageSource: 'Wikipedia', acceptedAnswers: ['Taufik Hidayat', 'Taufik']
  },
  {
    id: 'person_311', name: 'Ronaldo Nazário', aliases: ['Ronaldo Nazario', 'Ronaldo Fenômeno', 'Ronaldo Fenomeno', 'R9'],
    category: 'athlete', nationality: 'Brasil', profession: 'Mantan pesepak bola',
    hints: ['Dikenal dengan julukan Il Fenomeno karena kemampuan menggiring dan mencetak gol.', 'Memenangkan Piala Dunia bersama Brasil pada 1994 dan 2002.', 'Pernah bermain untuk Barcelona, Inter Milan, Real Madrid, dan AC Milan.'],
    wikiTitle: 'Ronaldo_(Brazilian_footballer)', imageUrl: '', imageSource: 'Wikipedia', acceptedAnswers: ['Ronaldo Nazário', 'Ronaldo Nazario', 'Ronaldo Fenômeno', 'Ronaldo Fenomeno', 'R9']
  }

];
