// ═══════════════════════════════════════════════════════
//  ALBUMS.JS — baza albumów dla trybu ALBUM w RAPGUESSER
//  Każdy album ma: id, title, artist, year, cover (sc lub ścieżka),
//  i songs[] — lista piosenek z tego albumu
// ═══════════════════════════════════════════════════════

window.ALBUMS_DB = [
  {
    id: "album_sentino_zl5",
    title: "Sentino - Zabójstwo Liryczne 5",
    artist: "Sentino",
    year: 2026,
    cover: "https://i.scdn.co/image/ab67616d0000b273106a1c0cd92b1ac702bc3f05",
    songs: [
      { id: "zl5_01", title: "TACH TACH", artist: "Sentino, BNP", year: 2026, type: "sc", src: "https://soundcloud.com/juzekkk/tach-tach-sentino" },
      { id: "zl5_02", title: "LEGACY", artist: "Sentino, BNP", year: 2026, type: "sc", src: "https://soundcloud.com/juzekkk/legacy-sentino" },
      { id: "zl5_03", title: "WAWA022", artist: "Sentino, Diho, BNP", year: 2026, type: "file", src: "WAWA022.mp3" },
      { id: "zl5_04", title: "KURWY CHCĄ SENTO", artist: "Sentino, Popek, typo g, BNP", year: 2026, type: "sc", src: "https://soundcloud.com/juzekkk/kurwy-chca-sento-sentino" },
      { id: "zlt_05", title: "MOVE", artist: "Sentino, BNP", year: 2026, type: "sc", src: "https://soundcloud.com/juzekkk/move-sentino" },
      { id: "zl5_06", title: "KRAINA CZARÓW 2", artist: "Sentino, BNP", year: 2026, type: "sc", src: "https://soundcloud.com/karzeu/sentino-kraina-czarow-2" },
      { id: "zl5_07", title: "PRESIDENT", artist: "Sentino, BNP", year: 2026, type: "sc", src: "https://soundcloud.com/juzekkk/president-sentino" },
      { id: "zl5_08", title: "POTWORY", artist: "Sentino, BNP", year: 2026, type: "sc", src: "https://soundcloud.com/juzekkk/potwory-sentino" },
      { id: "zl5_09", title: "PAŁAC", artist: "Sentino, BNP", year: 2026, type: "sc", src: "https://soundcloud.com/juzekkk/pa-ac-sentino" },
      { id: "zl5_10", title: "FANTASTYCZNY", artist: "Sentino, BNP", year: 2026, type: "sc", src: "https://soundcloud.com/karzeu/sentino-fantastyczny-zabojstwo" },
      { id: "zl5_11", title: "FRISBEE", artist: "Sentino, BNP", year: 2026, type: "file", src: "FRISBEE.mp3" },
      { id: "zl5_12", title: "PENTHOUSE 2", artist: "Sentino, Koneser, BNP", year: 2026, type: "sc", src: "https://soundcloud.com/karzeu/sentino-x-koneser-penthouse-1" },
      { id: "zl5_13", title: "OSTATNI RAZ", artist: "Sentino, BNP, Kaz Bałagane", year: 2026, type: "sc", src: "https://soundcloud.com/juzekkk/ostatni-raz-sentino" },
      { id: "zl5_14", title: "NO I CO", artist: "Sentino, Koneser, BNP", year: 2026, type: "sc", src: "https://soundcloud.com/juzekkk/no-i-co-sentino" },
    ]
  },
  {
    id: "album_taconafide_soma05",
    title: "Taconafide - Soma 0.5mg",
    artist: "Taconafide",
    year: 2018,
    cover: "https://t2.genius.com/unsafe/300x300/https%3A%2F%2Fimages.genius.com%2F88db668ada515bc3fe38932c3e0ce112.1000x1000x1.png",
    songs: [
      { id: "soma05_01", title: "Intro", artist: "Taconafide, Taco Hemingway, Quebonafide", year: 2018, type: "sc", src: "https://soundcloud.com/taconafide-2020/intro" },
      { id: "soma05_02", title: "Metallica 808", artist: "Taconafide, Taco Hemingway, Quebonafide", year: 2018, type: "sc", src: "https://soundcloud.com/taconafide-2020/metallica-808" },
      { id: "soma05_03", title: "Art-B", artist: "Taconafide, Taco Hemingway, Quebonafide", year: 2018, type: "sc", src: "https://soundcloud.com/taconafide-2020/art-b" },
      { id: "soma05_04", title: "Ekodiesel", artist: "Taconafide, Taco Hemingway, Quebonafide", year: 2018, type: "sc", src: "https://soundcloud.com/taconafide-2020/ekodiesel" },
      { id: "soma05_05", title: "Wiem", artist: "Taconafide, Taco Hemingway, Quebonafide", year: 2018, type: "sc", src: "https://soundcloud.com/taconafide-2020/wiem" },
      { id: "soma05_06", title: "Kryptowaluty", artist: "Taconafide, Taco Hemingway, Quebonafide", year: 2018, type: "sc", src: "https://soundcloud.com/taconafide-2020/kryptowaluty" },
      { id: "soma05_07", title: "PIN", artist: "Taconafide, Taco Hemingway, Quebonafide", year: 2018, type: "sc", src: "https://soundcloud.com/taconafide-2020/pin" },
      { id: "soma05_08", title: "8 kobiet", artist: "Taconafide, Taco Hemingway, Quebonafide", year: 2018, type: "sc", src: "https://soundcloud.com/taconafide-2020/8-kobiet" },
      { id: "soma05_09", title: "Tamagotchi", artist: "Taconafide, Taco Hemingway, Quebonafide", year: 2018, type: "sc", src: "https://soundcloud.com/taconafide-2020/tamagotchi" },
      { id: "soma05_10", title: "Nóż", artist: "Taconafide, Taco Hemingway, Quebonafide", year: 2018, type: "sc", src: "https://soundcloud.com/taconafide-2020/noz" },
      { id: "soma05_11", title: "Visa", artist: "Taconafide, Taco Hemingway, Quebonafide", year: 2018, type: "sc", src: "https://soundcloud.com/taconafide-2020/visa" },
      { id: "soma05_12", title: "Mleko & Miód", artist: "Taconafide, Taco Hemingway, Quebonafide", year: 2018, type: "sc", src: "https://soundcloud.com/taconafide-2020/mleko-miod" },
      { id: "soma05_13", title: "Giro d'Italia", artist: "Taconafide, Taco Hemingway, Quebonafide", year: 2018, type: "sc", src: "https://soundcloud.com/taconafide-2020/giro-ditalia" },
      { id: "soma05_14", title: "Sectumsempra", artist: "Taconafide, Taco Hemingway, Quebonafide", year: 2018, type: "sc", src: "https://soundcloud.com/taconafide-2020/sectumsempra" },
      { id: "soma05_15", title: "Soma", artist: "Taconafide, Taco Hemingway, Quebonafide", year: 2018, type: "sc", src: "https://soundcloud.com/taconafide-2020/soma-2020" },
    ]
  },
  {
    id: "album_test",
    title: "TESTONAFIDE",
    artist: "TESTONAFIDE",
    year: 2026,
    cover: "https://t2.genius.com/unsafe/300x300/https%3A%2F%2Fimages.genius.com%2F88db668ada515bc3fe38932c3e0ce112.1000x1000x1.png",
    songs: [
      { id: "test_01", title: "TEST", artist: "TESTONAFIDE", year: 2026, type: "url", src: "https://open.spotify.com/embed/track/5yvUfAGPKCWFgayskmYlfD" },
    ]
  },
  // ────────────────────────────────────────────────────
  // SZABLON — skopiuj i wypełnij:
  // {
  //   id: "album_UNIKALNY_ID",
  //   title: "Artysta - Tytuł Albumu",
  //   artist: "Artysta",
  //   year: 2024,
  //   cover: "covers/nazwaokładki.jpg",   // plik lokalny lub sc
  //   songs: [
  //     { id: "song_001", title: "Tytuł",  artist: "Artysta", year: 2024, type: "file", src: "muzyka/piosenka.mp3" },
  //     { id: "song_002", title: "Tytuł2", artist: "Artysta", year: 2024, type: "sc",   src: "https://soundcloud.com/..." },
  //     { id: "song_003", title: "Tytuł3", artist: "Artysta", year: 2024, type: "sc",  src: "https://twojdomain.com/song.mp3" },
  //   ]
  // },
  // ────────────────────────────────────────────────────
];  
