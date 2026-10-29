import { newPeople } from './people_new.js';

export const CATEGORIES = [
  {
    "id": "all",
    "name": "Semua Kategori (Acak)",
    "icon": "Sparkles",
    "desc": "Tebak tokoh dari semua kategori secara acak"
  },
  {
    "id": "leader",
    "name": "Presiden, Politikus & Pemimpin Negara",
    "icon": "Landmark",
    "desc": "Presiden, pejabat, dan pemimpin negara"
  },
  {
    "id": "singer",
    "name": "Penyanyi & Musisi",
    "icon": "Music",
    "desc": "Musisi Indonesia dan internasional"
  },
  {
    "id": "actor",
    "name": "Aktor & Aktris",
    "icon": "Film",
    "desc": "Bintang film dan perfilman"
  },
  {
    "id": "athlete",
    "name": "Atlet & Olahragawan",
    "icon": "Trophy",
    "desc": "Atlet dari berbagai cabang olahraga"
  },
  {
    "id": "creator",
    "name": "Content Creator & Influencer",
    "icon": "Video",
    "desc": "YouTuber, streamer, dan kreator digital"
  },
  {
    "id": "history",
    "name": "Tokoh Sejarah, Ilmuwan & Penemu",
    "icon": "BookOpen",
    "desc": "Tokoh sejarah, ilmuwan, dan penemu"
  },
  {
    "id": "other",
    "name": "Tokoh Terkenal Lainnya",
    "icon": "Briefcase",
    "desc": "Pebisnis dan figur publik lainnya"
  }
];

export const FAMOUS_PEOPLE = [
  {
    "id": "person_001",
    "name": "Ir. Soekarno",
    "aliases": [
      "Soekarno",
      "Sukarno",
      "Bung Karno"
    ],
    "category": "president",
    "nationality": "Indonesia",
    "profession": "Proklamator & Presiden RI ke-1",
    "hints": [
      "Tokoh ini dikenal dengan sebutan \"Bung Karno\".",
      "Merupakan Proklamator Kemerdekaan Indonesia pada 17 Agustus 1945.",
      "Presiden pertama Republik Indonesia yang menggagas ideologi Pancasila."
    ],
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/01/Presiden_Sukarno.jpg/960px-Presiden_Sukarno.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "imageSource": "Wikimedia Commons (Public Domain)",
    "acceptedAnswers": [
      "Soekarno",
      "Sukarno",
      "Ir Soekarno",
      "Ir. Soekarno",
      "Bung Karno"
    ]
  },
  {
    "id": "person_002",
    "name": "Joko Widodo",
    "aliases": [
      "Jokowi",
      "Joko Widodo"
    ],
    "category": "president",
    "nationality": "Indonesia",
    "profession": "Presiden RI ke-7",
    "hints": [
      "Pernah menjabat sebagai Wali Kota Surakarta dan Gubernur DKI Jakarta.",
      "Identik dengan gaya kepemimpinan \"blusukan\" dan kemeja putih.",
      "Presiden Republik Indonesia yang menjabat selama dua periode (2014-2024)."
    ],
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/be/Joko_Widodo_2019_official_portrait.jpg/960px-Joko_Widodo_2019_official_portrait.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "imageSource": "Wikimedia Commons (Official Presidential Portrait)",
    "acceptedAnswers": [
      "Jokowi",
      "Joko Widodo",
      "Presiden Jokowi"
    ]
  },
  {
    "id": "person_003",
    "name": "B.J. Habibie",
    "aliases": [
      "Habibie",
      "Bacharuddin Jusuf Habibie",
      "BJ Habibie"
    ],
    "category": "president",
    "nationality": "Indonesia",
    "profession": "Insinyur Dirgantara & Presiden RI ke-3",
    "hints": [
      "Dikenal sebagai \"Mr. Crack\" berkat penemuan rumus faktor keretakan pada sayap pesawat terbang.",
      "Mantan Menteri Riset dan Teknologi yang memimpin pembuatan pesawat N-250 Gatotkaca.",
      "Presiden ke-3 Republik Indonesia yang kisahnya diabadikan dalam film Habibie & Ainun."
    ],
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2a/B._J._Habibie%2C_President_of_Indonesia_portrait.jpg/960px-B._J._Habibie%2C_President_of_Indonesia_portrait.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "imageSource": "Wikimedia Commons",
    "acceptedAnswers": [
      "Habibie",
      "BJ Habibie",
      "B.J. Habibie",
      "Bacharuddin Jusuf Habibie"
    ]
  },
  {
    "id": "person_004",
    "name": "Barack Obama",
    "aliases": [
      "Obama",
      "Barack Hussein Obama"
    ],
    "category": "president",
    "nationality": "Amerika Serikat",
    "profession": "Presiden AS ke-44",
    "hints": [
      "Pernah menghabiskan masa kecilnya bersekolah di daerah Menteng, Jakarta.",
      "Dikenal dengan slogan kampanye ikonik \"Yes We Can\".",
      "Presiden Afrika-Amerika pertama dalam sejarah Amerika Serikat dan penerima Nobel Perdamaian."
    ],
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8d/President_Barack_Obama.jpg/960px-President_Barack_Obama.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "imageSource": "Wikimedia Commons (White House Official)",
    "acceptedAnswers": [
      "Barack Obama",
      "Obama",
      "Barack Hussein Obama"
    ]
  },
  {
    "id": "person_005",
    "name": "Abraham Lincoln",
    "aliases": [
      "Lincoln",
      "Abe Lincoln"
    ],
    "category": "president",
    "nationality": "Amerika Serikat",
    "profession": "Presiden AS ke-16",
    "hints": [
      "Memimpin negaranya melewati Perang Saudara Amerika (American Civil War).",
      "Menyampaikan pidato bersejarah Gettysburg Address yang menggemakan prinsip demokrasi.",
      "Presiden Amerika Serikat yang berhasil menghapuskan perbudakan melalui Emancipation Proclamation."
    ],
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ab/Abraham_Lincoln_O-77_matte_collodion_print.jpg/960px-Abraham_Lincoln_O-77_matte_collodion_print.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "imageSource": "Wikimedia Commons (Library of Congress)",
    "acceptedAnswers": [
      "Abraham Lincoln",
      "Lincoln",
      "Abe Lincoln"
    ]
  },
  {
    "id": "person_006",
    "name": "Nelson Mandela",
    "aliases": [
      "Mandela",
      "Madiba"
    ],
    "category": "president",
    "nationality": "Afrika Selatan",
    "profession": "Pejuang Anti-Apartheid & Presiden Afrika Selatan",
    "hints": [
      "Menghabiskan 27 tahun masa hidupnya dipenjara di Pulau Robben demi memperjuangkan kesetaraan.",
      "Dianugerahi Nobel Perdamaian pada tahun 1993 atas perjuangannya meruntuhkan rezim apartheid.",
      "Presiden berkulit hitam pertama Afrika Selatan yang dipanggil secara terhormat \"Madiba\"."
    ],
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/02/Nelson_Mandela_1994.jpg/960px-Nelson_Mandela_1994.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "imageSource": "Wikimedia Commons",
    "acceptedAnswers": [
      "Nelson Mandela",
      "Mandela",
      "Madiba"
    ]
  },
  {
    "id": "person_007",
    "name": "Sri Mulyani Indrawati",
    "aliases": [
      "Sri Mulyani",
      "SMI"
    ],
    "category": "politician",
    "nationality": "Indonesia",
    "profession": "Ekonom & Menteri Keuangan RI",
    "hints": [
      "Pernah menjabat sebagai Direktur Pelaksana (Managing Director) di Bank Dunia (World Bank).",
      "Kerap dinobatkan sebagai Menteri Keuangan Terbaik di Asia Pasifik oleh berbagai majalah internasional.",
      "Menteri Keuangan Republik Indonesia yang memimpin berbagai reformasi perpajakan dan keuangan negara."
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Sri_Mulyani%2C_Menteri_Keuangan_%282021%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    "imageSource": "Wikimedia Commons (Kemenkeu RI)",
    "acceptedAnswers": [
      "Sri Mulyani",
      "Sri Mulyani Indrawati",
      "Ibu Sri Mulyani"
    ]
  },
  {
    "id": "person_008",
    "name": "Winston Churchill",
    "aliases": [
      "Churchill",
      "Sir Winston Churchill"
    ],
    "category": "politician",
    "nationality": "Inggris (Britania Raya)",
    "profession": "Perdana Menteri Britania Raya",
    "hints": [
      "Dikenal dengan pidato-pidato bersemangatnya seperti \"We shall fight on the beaches\".",
      "Pernah memenangkan Hadiah Nobel Kesusastraan pada tahun 1953.",
      "Perdana Menteri legendaris Inggris yang memimpin Sekutu memenangkan Perang Dunia II."
    ],
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/02/Sir_Winston_Churchill_-_19086236948_%28restored%29.jpg/960px-Sir_Winston_Churchill_-_19086236948_%28restored%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "imageSource": "Wikimedia Commons (Library and Archives Canada)",
    "acceptedAnswers": [
      "Winston Churchill",
      "Churchill",
      "Sir Winston Churchill"
    ]
  },
  {
    "id": "person_009",
    "name": "Angela Merkel",
    "aliases": [
      "Merkel"
    ],
    "category": "politician",
    "nationality": "Jerman",
    "profession": "Kanselir Jerman (2005-2021)",
    "hints": [
      "Berlatar belakang doktor ilmu fisika kuantum sebelum terjun penuh ke dunia politik.",
      "Diberi julukan \"Pemimpin De Facto Uni Eropa\" dan \"Iron Chancellor Wanita\".",
      "Kanselir wanita pertama Jerman yang memimpin negaranya selama 16 tahun berturut-turut."
    ],
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0f/Angela_Merkel_2019_cropped.jpg/960px-Angela_Merkel_2019_cropped.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "imageSource": "Wikimedia Commons",
    "acceptedAnswers": [
      "Angela Merkel",
      "Merkel"
    ]
  },
  {
    "id": "person_010",
    "name": "Iwan Fals",
    "aliases": [
      "Virgiawan Listanto",
      "Bang Iwan"
    ],
    "category": "singer",
    "nationality": "Indonesia",
    "profession": "Musisi & Penyanyi Balada Legendaris",
    "hints": [
      "Memiliki basis penggemar fanatik bernama \"OI\".",
      "Lagu-lagunya sarat kritik sosial, seperti \"Surat Buat Wakil Rakyat\" dan \"Bongkar\".",
      "Legenda musik Indonesia yang membawakan lagu abadi \"Bento\" dan \"Ibu\"."
    ],
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/68/Iwan_Fals%2C_2015_%28cropped%29.jpg/960px-Iwan_Fals%2C_2015_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "imageSource": "Wikimedia Commons",
    "acceptedAnswers": [
      "Iwan Fals",
      "Virgiawan Listanto",
      "Bang Iwan"
    ]
  },
  {
    "id": "person_011",
    "name": "Freddie Mercury",
    "aliases": [
      "Farrokh Bulsara"
    ],
    "category": "singer",
    "nationality": "Inggris (Britania Raya)",
    "profession": "Vokalis Band Legendaris Queen",
    "hints": [
      "Dikenal dengan rentang vokal 4 oktaf yang spektakuler dan aksi panggung teatrikal.",
      "Penampilannya pada konser Live Aid 1985 di Stadion Wembley dinobatkan sebagai salah satu konser rock terbaik sepanjang masa.",
      "Vokalis utama Queen yang menciptakan lagu mahakarya \"Bohemian Rhapsody\" dan \"We Are the Champions\"."
    ],
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ef/Freddie_Mercury_performing_in_New_Haven%2C_CT%2C_November_1977.jpg/960px-Freddie_Mercury_performing_in_New_Haven%2C_CT%2C_November_1977.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "imageSource": "Wikimedia Commons",
    "acceptedAnswers": [
      "Freddie Mercury",
      "Farrokh Bulsara",
      "Mercury"
    ]
  },
  {
    "id": "person_012",
    "name": "Michael Jackson",
    "aliases": [
      "MJ",
      "King of Pop"
    ],
    "category": "singer",
    "nationality": "Amerika Serikat",
    "profession": "Penyanyi, Penari & \"King of Pop\"",
    "hints": [
      "Mempopulerkan gerakan tari ikonik \"Moonwalk\" dan sarung tangan putih berhias kristal.",
      "Albumnya yang dirilis tahun 1982 menjadi album musik terlaris sepanjang sejarah dunia.",
      "Sosok berjuluk \"King of Pop\" pelantun hits abadi \"Thriller\", \"Billie Jean\", dan \"Beat It\"."
    ],
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/Michael_Jackson_1983_%283x4_cropped%29_%28contrast%29.jpg/960px-Michael_Jackson_1983_%283x4_cropped%29_%28contrast%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "imageSource": "Wikimedia Commons",
    "acceptedAnswers": [
      "Michael Jackson",
      "MJ",
      "King of Pop"
    ]
  },
  {
    "id": "person_013",
    "name": "Taylor Swift",
    "aliases": [
      "Swift"
    ],
    "category": "singer",
    "nationality": "Amerika Serikat",
    "profession": "Penyanyi & Pencipta Lagu Papan Atas",
    "hints": [
      "Memulai karier musik dari genre country sebelum bertransisi menjadi mega popstar global.",
      "Memecahkan rekor konser dunia lewat \"The Eras Tour\" dan menjadi musisi wanita dengan rekor Grammy terbanyak kategori Album of the Year.",
      "Penyanyi lagu hits \"Blank Space\", \"Shake It Off\", dan \"Cruel Summer\" dengan sebutan fans \"Swifties\"."
    ],
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b1/Taylor_Swift_at_the_2023_MTV_Video_Music_Awards_%283%29.png/960px-Taylor_Swift_at_the_2023_MTV_Video_Music_Awards_%283%29.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "imageSource": "Wikimedia Commons",
    "acceptedAnswers": [
      "Taylor Swift",
      "Swift"
    ]
  },
  {
    "id": "person_014",
    "name": "Raisa Andriana",
    "aliases": [
      "Raisa"
    ],
    "category": "singer",
    "nationality": "Indonesia",
    "profession": "Penyanyi Pop R&B Indonesia",
    "hints": [
      "Melejit lewat single perdananya \"Serba Salah\" pada tahun 2011.",
      "Merupakan penyanyi wanita solo pertama di Indonesia yang sukses menggelar konser tunggal di Stadion Utama Gelora Bung Karno.",
      "Penyanyi bersuara merdu pelantun lagu \"Mantan Terindah\", \"Kali Kedua\", dan \"Jatuh Hati\"."
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f5/Raisa_at_LA_Lights_Music_Project.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    "imageSource": "Wikimedia Commons",
    "acceptedAnswers": [
      "Raisa",
      "Raisa Andriana"
    ]
  },
  {
    "id": "person_015",
    "name": "Reza Rahadian",
    "aliases": [
      "Reza Rahadian Matulessy"
    ],
    "category": "actor",
    "nationality": "Indonesia",
    "profession": "Aktor Film & Teater",
    "hints": [
      "Salah satu aktor dengan koleksi Piala Citra Festival Film Indonesia (FFI) terbanyak.",
      "Sangat piawai dalam memerankan berbagai karakter biopik dan drama secara totalitas.",
      "Aktor pemeran B.J. Habibie dalam \"Habibie & Ainun\" serta Bossman dalam \"My Stupid Boss\"."
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f1/Reza_Rahadian_Actor_of_the_Year_ICA_2017.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    "imageSource": "Wikimedia Commons",
    "acceptedAnswers": [
      "Reza Rahadian",
      "Reza Rahadian Matulessy"
    ]
  },
  {
    "id": "person_016",
    "name": "Leonardo DiCaprio",
    "aliases": [
      "DiCaprio",
      "Leo DiCaprio"
    ],
    "category": "actor",
    "nationality": "Amerika Serikat",
    "profession": "Aktor Film Hollywood",
    "hints": [
      "Meraih kepopuleran global luar biasa lewat perannya sebagai Jack Dawson di kapal mewah legendaris.",
      "Dikenal juga sebagai aktivis lingkungan dan pelindung satwa liar dunia.",
      "Memenangkan Academy Award (Oscar) lewat film \"The Revenant\" dan membintangi film epik \"Titanic\" serta \"Inception\"."
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/2d/LeoPTABFI191125-28_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    "imageSource": "Wikimedia Commons",
    "acceptedAnswers": [
      "Leonardo DiCaprio",
      "Leonardo Di Caprio",
      "DiCaprio",
      "Leo DiCaprio"
    ]
  },
  {
    "id": "person_017",
    "name": "Keanu Reeves",
    "aliases": [
      "Keanu"
    ],
    "category": "actor",
    "nationality": "Kanada",
    "profession": "Aktor Film Aksi",
    "hints": [
      "Dikenal luas di kalangan penggemar karena sifatnya yang sangat ramah, rendah hati, dan dermawan.",
      "Memerankan karakter Neo yang dapat menghindari peluru di dunia virtual film sci-fi legendaris The Matrix.",
      "Pemeran pembunuh bayaran legendaris pencinta anjing dalam waralaba film aksi \"John Wick\"."
    ],
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b4/Keanu_Reeves_at_TIFF_2025_02_%28Cropped%29.jpg/960px-Keanu_Reeves_at_TIFF_2025_02_%28Cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "imageSource": "Wikimedia Commons",
    "acceptedAnswers": [
      "Keanu Reeves",
      "Keanu"
    ]
  },
  {
    "id": "person_018",
    "name": "Tom Cruise",
    "aliases": [
      "Thomas Cruise Mapother IV"
    ],
    "category": "actor",
    "nationality": "Amerika Serikat",
    "profession": "Aktor & Produser Film Laga",
    "hints": [
      "Terkemuka karena selalu melakukan aksi berbahaya (stunt) sendiri tanpa pemeran pengganti.",
      "Membintangi film pilot jet tempur legendaris \"Top Gun\" dan sekuelnya Maverick.",
      "Pemeran agen rahasia Ethan Hunt dalam serial film aksi spektakuler \"Mission: Impossible\"."
    ],
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/23/Tom_Cruise_at_53rd_Saturn_Awards_2026-01.jpg/960px-Tom_Cruise_at_53rd_Saturn_Awards_2026-01.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "imageSource": "Wikimedia Commons",
    "acceptedAnswers": [
      "Tom Cruise",
      "Thomas Cruise"
    ]
  },
  {
    "id": "person_019",
    "name": "Cristiano Ronaldo",
    "aliases": [
      "Ronaldo",
      "CR7",
      "Cristiano Ronaldo dos Santos Aveiro"
    ],
    "category": "athlete",
    "nationality": "Portugal",
    "profession": "Pesepakbola Profesional",
    "hints": [
      "Memenangkan 5 penghargaan Ballon d'Or dan 5 trofi Liga Champions UEFA.",
      "Identik dengan nomor punggung 7 dan selebrasi gol khas melompat sambil berteriak \"Siuuu!\".",
      "Kapten timnas Portugal pencetak gol internasional terbanyak yang pernah membela MU, Real Madrid, dan Juventus."
    ],
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/26/Cristiano_Ronaldo_Croatia_v_Portugal_2_July_2026-075_%28cropped%29.jpg/960px-Cristiano_Ronaldo_Croatia_v_Portugal_2_July_2026-075_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "imageSource": "Wikimedia Commons",
    "acceptedAnswers": [
      "Cristiano Ronaldo",
      "Ronaldo",
      "CR7",
      "Cristiano Ronaldo dos Santos Aveiro"
    ]
  },
  {
    "id": "person_020",
    "name": "Lionel Messi",
    "aliases": [
      "Messi",
      "La Pulga",
      "Lionel Andres Messi"
    ],
    "category": "athlete",
    "nationality": "Argentina",
    "profession": "Pesepakbola Profesional",
    "hints": [
      "Mendapatkan julukan \"La Pulga\" (Si Kutu) karena postur tubuhnya yang lincah dan dribbling magis.",
      "Memegang rekor dunia pemenang penghargaan Ballon d'Or terbanyak sepanjang sejarah yaitu 8 kali.",
      "Kapten tim nasional Argentina yang berhasil mengangkat trofi Juara Piala Dunia FIFA 2022 di Qatar."
    ],
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c8/Leo_Messi_Argentina_v_Egypt_7_July_2026-1.jpg/960px-Leo_Messi_Argentina_v_Egypt_7_July_2026-1.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "imageSource": "Wikimedia Commons",
    "acceptedAnswers": [
      "Lionel Messi",
      "Messi",
      "Leo Messi",
      "Lionel Andres Messi"
    ]
  },
  {
    "id": "person_021",
    "name": "Taufik Hidayat",
    "aliases": [
      "Taufik"
    ],
    "category": "athlete",
    "nationality": "Indonesia",
    "profession": "Pemain Bulu Tangkis (Tunggal Putra)",
    "hints": [
      "Terkenal di dunia bulu tangkis dengan pukulan \"backhand smash\" tercepat yang sangat mematikan.",
      "Pernah meraih gelar Juara Dunia IBF dan juara Indonesia Open sebanyak 6 kali.",
      "Legenda bulu tangkis Indonesia peraih Medali Emas Olimpiade Athena 2004."
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/ac/Badminton-taufik_hidayat.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    "imageSource": "Wikimedia Commons",
    "acceptedAnswers": [
      "Taufik Hidayat",
      "Taufik"
    ]
  },
  {
    "id": "person_022",
    "name": "Usain Bolt",
    "aliases": [
      "Bolt",
      "Lightning Bolt"
    ],
    "category": "athlete",
    "nationality": "Jamaika",
    "profession": "Pelari Cepat (Sprinter)",
    "hints": [
      "Dijuluki \"Lightning Bolt\" dan terkenal dengan pose selebrasi kilat menunjuk ke angkasa.",
      "Meraih 8 medali emas Olimpiade dan mendominasi nomor lari 100 meter dan 200 meter.",
      "Manusia tercepat di bumi pemegang rekor dunia lari 100 meter dengan waktu 9,58 detik."
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Usain_Bolt_smiling_Berlin_2009.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    "imageSource": "Wikimedia Commons",
    "acceptedAnswers": [
      "Usain Bolt",
      "Bolt"
    ]
  },
  {
    "id": "person_023",
    "name": "Michael Jordan",
    "aliases": [
      "Jordan",
      "MJ",
      "Air Jordan"
    ],
    "category": "athlete",
    "nationality": "Amerika Serikat",
    "profession": "Pemain Bola Basket Legendaris",
    "hints": [
      "Menghantarkan Chicago Bulls meraih 6 kali kejuaraan NBA pada era 1990-an.",
      "Identik dengan nomor jersey 23 dan sepatu legendaris berlogo orang melompat.",
      "Pemain basket terhebat sepanjang masa yang dijuluki \"Air Jordan\"."
    ],
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/46/Michael_jordan_admad_rashad_%2851276390562%29_%28cropped%29.jpg/960px-Michael_jordan_admad_rashad_%2851276390562%29_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "imageSource": "Wikimedia Commons",
    "acceptedAnswers": [
      "Michael Jordan",
      "Jordan",
      "Air Jordan"
    ]
  },
  {
    "id": "person_024",
    "name": "Deddy Corbuzier",
    "aliases": [
      "Deddy",
      "Master Corbuzier",
      "Deodatus Andreas Deddy Cahyadi Sunjoyo"
    ],
    "category": "creator",
    "nationality": "Indonesia",
    "profession": "Podcaster, Presenter & Mantan Mentalis",
    "hints": [
      "Mengawali karier di dunia hiburan sebagai pesulap mentalis ternama di Indonesia.",
      "Pernah menjadi pembawa acara talkshow televisi \"Hitam Putih\" selama bertahun-tahun.",
      "Pemilik siniar YouTube raksasa \"Close The Door\" dengan tagline \"5, 4, 3, 2, 1, and Close The Door\"."
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f2/Deddy_Corbuzier%2C_Netmediatama%2C_03.38.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    "imageSource": "Wikimedia Commons",
    "acceptedAnswers": [
      "Deddy Corbuzier",
      "Deddy",
      "Master Corbuzier"
    ]
  },
  {
    "id": "person_025",
    "name": "MrBeast",
    "aliases": [
      "Jimmy Donaldson",
      "Mr Beast"
    ],
    "category": "creator",
    "nationality": "Amerika Serikat",
    "profession": "YouTuber & Filantropis",
    "hints": [
      "Dikenal dengan video tantangan bernilai jutaan dolar, donasi besar-besaran, dan membuat replika Squid Game di dunia nyata.",
      "Menggagas proyek lingkungan berskala global seperti Team Trees dan Team Seas.",
      "Kreator individu dengan jumlah subscriber YouTube terbanyak di dunia bernama asli Jimmy Donaldson."
    ],
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/47/MrBeast_in_2026_%28cropped_4%29.png/960px-MrBeast_in_2026_%28cropped_4%29.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "imageSource": "Wikimedia Commons",
    "acceptedAnswers": [
      "MrBeast",
      "Mr Beast",
      "Jimmy Donaldson"
    ]
  },
  {
    "id": "person_026",
    "name": "Raditya Dika",
    "aliases": [
      "Radit",
      "Raditya Dika Anggara"
    ],
    "category": "creator",
    "nationality": "Indonesia",
    "profession": "Penulis, Komika & Konten Kreator",
    "hints": [
      "Memulai popularitasnya melalui blog pribadi yang kemudian diterbitkan menjadi buku best-seller bertema hewan seperti \"Kambing Jantan\".",
      "Pelopor gelombang Stand-up Comedy di Indonesia dan sutradara serial web \"Malam Minggu Miko\".",
      "Penulis sekaligus komedian Indonesia yang menikah dengan Anissa Aziza."
    ],
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/25/Raditya_Dika_on_Interview_GoGirl_TV.jpg/960px-Raditya_Dika_on_Interview_GoGirl_TV.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "imageSource": "Wikimedia Commons",
    "acceptedAnswers": [
      "Raditya Dika",
      "Radit",
      "Raditya"
    ]
  },
  {
    "id": "person_027",
    "name": "Windah Basudara",
    "aliases": [
      "Brando Franco Windah",
      "Brando",
      "Bang Brando"
    ],
    "category": "creator",
    "nationality": "Indonesia",
    "profession": "Gaming Streamer & Content Creator",
    "hints": [
      "Menamai para penonton setianya dengan julukan \"Bocil Kematian\".",
      "Sering melakukan streaming game seru di YouTube yang dipadukan dengan drama teatrikal lucu dan cosplay.",
      "Streamer asal Manado bernama asli Brando Franco Windah yang sering menggalang dana amal ratusan juta rupiah."
    ],
    "imageUrl": "https://i.pinimg.com/736x/c5/fa/25/c5fa25a74ace1a1b5e351626a4bf6936.jpg",
    "imageSource": "Wikimedia Commons",
    "acceptedAnswers": [
      "Windah Basudara",
      "Windah",
      "Brando",
      "Brando Franco Windah"
    ]
  },
  {
    "id": "person_028",
    "name": "R.A. Kartini",
    "aliases": [
      "Kartini",
      "Raden Ajeng Kartini",
      "Raden Ayu Kartini"
    ],
    "category": "history",
    "nationality": "Indonesia",
    "profession": "Pahlawan Nasional & Pelopor Emansipasi Wanita",
    "hints": [
      "Surat-surat korespondensinya kepada sahabatnya di Belanda dikumpulkan menjadi buku \"Habis Gelap Terbitlah Terang\".",
      "Memperjuangkan hak pendidikan dan kesetaraan derajat bagi kaum perempuan pribumi.",
      "Pahlawan emansipasi wanita asal Jepara yang hari kelahirannya diperingati setiap tanggal 21 April."
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/23/COLLECTIE_TROPENMUSEUM_Portret_van_Raden_Ajeng_Kartini_TMnr_10018776.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    "imageSource": "Wikimedia Commons (Tropenmuseum)",
    "acceptedAnswers": [
      "Kartini",
      "RA Kartini",
      "R.A. Kartini",
      "Raden Ajeng Kartini"
    ]
  },
  {
    "id": "person_029",
    "name": "Cut Nyak Dien",
    "aliases": [
      "Cut Nyak Dhien",
      "Tjut Nja Dhien"
    ],
    "category": "history",
    "nationality": "Indonesia",
    "profession": "Pahlawan Nasional Pejuang Perang Aceh",
    "hints": [
      "Melanjutkan perjuangan memimpin perang gerilya melawan penjajah Belanda setelah suaminya, Teuku Umar, gugur di medan perang.",
      "Tetap gigih bertempur di hutan belantara meski usianya telah menua dan pandangannya mulai rabun.",
      "Srikandi pahlawan wanita legendaris dari tanah rencong Aceh."
    ],
    "imageUrl": "https://www.biografiku.com/wp-content/uploads/2011/09/Cut-Nyak-Dhien-_-duniabebaz.com_.jpg",
    "imageSource": "Wikimedia Commons (Tropenmuseum)",
    "acceptedAnswers": [
      "Cut Nyak Dien",
      "Cut Nyak Dhien",
      "Tjut Nja Dhien"
    ]
  },
  {
    "id": "person_030",
    "name": "Mahatma Gandhi",
    "aliases": [
      "Gandhi",
      "Mohandas Karamchand Gandhi",
      "Bapu"
    ],
    "category": "history",
    "nationality": "India",
    "profession": "Pemimpin Spiritual & Pejuang Kemerdekaan India",
    "hints": [
      "Mengajarkan gerakan perlawanan tanpa kekerasan (Ahimsa) dan pembangkangan sipil damai (Satyagraha).",
      "Memimpin aksi \"Pawai Garam\" (Salt March) sejauh ratusan mil untuk menentang monopoli kolonial Inggris.",
      "Bapak bangsa India yang dihormati di seluruh dunia dengan sebutan \"Mahatma\" (Jiwa Agung)."
    ],
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7a/Mahatma-Gandhi%2C_studio%2C_1931.jpg/960px-Mahatma-Gandhi%2C_studio%2C_1931.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "imageSource": "Wikimedia Commons",
    "acceptedAnswers": [
      "Mahatma Gandhi",
      "Gandhi",
      "Mohandas Gandhi",
      "Mohandas Karamchand Gandhi"
    ]
  },
  {
    "id": "person_031",
    "name": "Napoleon Bonaparte",
    "aliases": [
      "Napoleon"
    ],
    "category": "history",
    "nationality": "Prancis",
    "profession": "Kaisar Prancis & Tokoh Militer",
    "hints": [
      "Menyusun kitab hukum sipil \"Code Napoleon\" yang menjadi fondasi dasar hukum modern di banyak negara eropa.",
      "Menguasai sebagian besar daratan Eropa melalui peperangan sengit di awal abad ke-19.",
      "Kaisar legendaris Prancis yang akhirnya terkalahkan dalam pertempuran Waterloo."
    ],
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/50/Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg/960px-Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "imageSource": "Wikimedia Commons",
    "acceptedAnswers": [
      "Napoleon Bonaparte",
      "Napoleon"
    ]
  },
  {
    "id": "person_032",
    "name": "Albert Einstein",
    "aliases": [
      "Einstein"
    ],
    "category": "scientist",
    "nationality": "Jerman / Swiss / AS",
    "profession": "Fisikawan Teoretis",
    "hints": [
      "Meraih Penghargaan Nobel Fisika pada tahun 1921 atas penjelasannya tentang efek fotolistrik.",
      "Fotonya yang menjulurkan lidah menjadi salah satu foto paling ikonik dalam budaya populer sains.",
      "Fisikawan jenius penemu Teori Relativitas dan perumus persamaan massa-energi paling terkenal di dunia: E = mc²."
    ],
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/28/Albert_Einstein_Head_cleaned.jpg/960px-Albert_Einstein_Head_cleaned.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "imageSource": "Wikimedia Commons",
    "acceptedAnswers": [
      "Albert Einstein",
      "Einstein"
    ]
  },
  {
    "id": "person_033",
    "name": "Isaac Newton",
    "aliases": [
      "Newton",
      "Sir Isaac Newton"
    ],
    "category": "scientist",
    "nationality": "Inggris (Britania Raya)",
    "profession": "Fisikawan, Matematikawan & Astronom",
    "hints": [
      "Menerbitkan buku mahakarya \"Philosophiae Naturalis Principia Mathematica\" pada tahun 1687.",
      "Mengembangkan ilmu kalkulus matematika serta hukum gerak gerak mekanika klasik.",
      "Ilmuwan yang terinspirasi oleh buah apel jatuh hingga berhasil merumuskan Hukum Gravitasi Universal."
    ],
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/Portrait_of_Sir_Isaac_Newton%2C_1689_%28brightened%29.jpg/960px-Portrait_of_Sir_Isaac_Newton%2C_1689_%28brightened%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "imageSource": "Wikimedia Commons",
    "acceptedAnswers": [
      "Isaac Newton",
      "Newton",
      "Sir Isaac Newton"
    ]
  },
  {
    "id": "person_034",
    "name": "Marie Curie",
    "aliases": [
      "Curie",
      "Madame Curie",
      "Maria Sklodowska-Curie"
    ],
    "category": "scientist",
    "nationality": "Polandia / Prancis",
    "profession": "Fisikawan & Kimiawan",
    "hints": [
      "Melakukan penelitian perintis tentang fenomena radioaktivitas (istilah yang diciptakannya sendiri).",
      "Menemukan dua unsur kimia baru dalam tabel periodik: Polonium dan Radium.",
      "Satu-satunya orang dalam sejarah sains yang memenangkan dua Hadiah Nobel dalam dua bidang ilmu berbeda (Fisika dan Kimia)."
    ],
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c8/Marie_Curie_c._1920s.jpg/960px-Marie_Curie_c._1920s.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "imageSource": "Wikimedia Commons",
    "acceptedAnswers": [
      "Marie Curie",
      "Curie",
      "Madame Curie",
      "Maria Sklodowska-Curie"
    ]
  },
  {
    "id": "person_035",
    "name": "Nikola Tesla",
    "aliases": [
      "Tesla"
    ],
    "category": "scientist",
    "nationality": "Serbia / Amerika Serikat",
    "profession": "Penemu, Insinyur Listrik & Visioner",
    "hints": [
      "Terlibat dalam persaingan sengit \"War of the Currents\" (Perang Arus Listrik) melawan Thomas Edison.",
      "Menemukan kumparan frekuensi tinggi (Tesla Coil) dan berkontribusi besar pada perkembangan gelombang radio nirkabel.",
      "Penemu jenius sistem kelistrikan Arus Bolak-balik (Alternating Current / AC) yang menerangi dunia modern."
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/79/Tesla_circa_1890.jpeg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    "imageSource": "Wikimedia Commons",
    "acceptedAnswers": [
      "Nikola Tesla",
      "Tesla"
    ]
  },
  {
    "id": "person_036",
    "name": "Thomas Alva Edison",
    "aliases": [
      "Thomas Edison",
      "Edison"
    ],
    "category": "scientist",
    "nationality": "Amerika Serikat",
    "profession": "Penemu & Pengusaha",
    "hints": [
      "Mendirikan laboratorium riset industri modern di Menlo Park, New Jersey, dan memegang lebih dari 1.000 hak paten.",
      "Menemukan alat perekam dan pemutar suara pertama di dunia yang disebut fonograf (phonograph).",
      "Penemu bola lampu pijar praktis yang mengubah peradaban manusia dengan ungkapan terkenal: \"Genius is 1% inspiration, 99% perspiration\"."
    ],
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9d/Thomas_Edison2.jpg/960px-Thomas_Edison2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "imageSource": "Wikimedia Commons",
    "acceptedAnswers": [
      "Thomas Edison",
      "Thomas Alva Edison",
      "Edison"
    ]
  },
  {
    "id": "person_037",
    "name": "Elon Musk",
    "aliases": [
      "Musk",
      "Elon Reeve Musk"
    ],
    "category": "other",
    "nationality": "Afrika Selatan / AS",
    "profession": "Pebisnis Teknologi & Pengusaha Visioner",
    "hints": [
      "Mendirikan perusahaan antariksa komersial SpaceX dengan ambisi mewujudkan pendaratan manusia di planet Mars.",
      "Memimpin produsen mobil listrik tercanggih dunia Tesla, Inc. dan membeli platform media sosial Twitter/X.",
      "Miliarder eksentrik dunia pelopor Neuralink, Starlink, dan The Boring Company."
    ],
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/Elon_Musk_-_54820081119_%283x4_cropped%2C_Rule_of_thirds%29.jpg/960px-Elon_Musk_-_54820081119_%283x4_cropped%2C_Rule_of_thirds%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "imageSource": "Wikimedia Commons",
    "acceptedAnswers": [
      "Elon Musk",
      "Musk",
      "Elon"
    ]
  },
  {
    "id": "person_038",
    "name": "Steve Jobs",
    "aliases": [
      "Jobs",
      "Steven Paul Jobs"
    ],
    "category": "other",
    "nationality": "Amerika Serikat",
    "profession": "Pendiri Apple Inc. & Visioner Desain",
    "hints": [
      "Mendirikan studio animasi legendaris Pixar yang melahirkan film Toy Story.",
      "Dikenal dengan gaya busana khas celana jeans dan turtle neck hitam saat presentasi keynote peluncuran produk.",
      "Pendiri Apple yang merevolusi industri komputer pribadi, musik digital dengan iPod, dan smartphone dengan iPhone."
    ],
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/51/Steve_Jobs_Headshot_2010_%28cropped_4%29.jpg/960px-Steve_Jobs_Headshot_2010_%28cropped_4%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "imageSource": "Wikimedia Commons",
    "acceptedAnswers": [
      "Steve Jobs",
      "Jobs",
      "Steven Jobs"
    ]
  },
  {
    "id": "person_039",
    "name": "Bill Gates",
    "aliases": [
      "Gates",
      "William Henry Gates III"
    ],
    "category": "other",
    "nationality": "Amerika Serikat",
    "profession": "Pendiri Microsoft & Filantropis Dunia",
    "hints": [
      "Mendirikan yayasan kemanusiaan raksasa \"Bill & Melinda Gates Foundation\" untuk memberantas penyakit polio dan kemiskinan.",
      "Menjadi orang terkaya di dunia selama bertahun-tahun di era 1990-an dan 2000-an.",
      "Sosok pengembang sistem operasi komputer Microsoft Windows yang digunakan di seluruh penjuru dunia."
    ],
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d9/Bill_Gates_at_the_European_Commission_-_P067383-987995_%28cropped%29_5.jpg/960px-Bill_Gates_at_the_European_Commission_-_P067383-987995_%28cropped%29_5.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "imageSource": "Wikimedia Commons",
    "acceptedAnswers": [
      "Bill Gates",
      "Gates",
      "William Henry Gates"
    ]
  }
].concat(newPeople.map((person) => ({ ...person, category: person.category === 'music' ? 'singer' : person.category, imageSource: person.imageSource || 'Wikipedia / Wikimedia Commons' })));

const CATEGORY_MERGE = (category) => { if (category === 'president' || category === 'politician') return 'leader'; if (category === 'scientist' || category === 'history') return 'history'; if (category === 'music') return 'singer'; return category; };
export function getAllPeopleWithOverrides() { let overrides = {}; try { overrides = JSON.parse(localStorage.getItem('guesswho_people_overrides') || '{}'); } catch { overrides = {}; } let imageOverrides = {}; try { imageOverrides = JSON.parse(localStorage.getItem('guesswho_image_overrides') || '{}'); } catch {} const seen = new Set(); return FAMOUS_PEOPLE.map((p) => { const o = overrides[p.id] || {}; return { ...p, ...o, category: CATEGORY_MERGE(p.category), imageUrl: imageOverrides[p.id] ?? o.imageUrl ?? p.imageUrl, hints: Array.isArray(o.hints) ? o.hints : p.hints, acceptedAnswers: Array.isArray(o.acceptedAnswers) ? o.acceptedAnswers : p.acceptedAnswers }; }).filter((p) => { const key = String(p.name || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]/g, ''); if (!key || seen.has(key)) return false; seen.add(key); return true; }); }
export function getGameQuestions(categoryId = 'all', count = 5) { let pool = getAllPeopleWithOverrides(); if (categoryId && categoryId !== 'all') pool = pool.filter((p) => p.category === CATEGORY_MERGE(categoryId)); for (let i = pool.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [pool[i], pool[j]] = [pool[j], pool[i]]; } return pool.slice(0, Math.min(count, pool.length)); }