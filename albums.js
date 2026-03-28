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
      { id: "zl5_03", title: "WAWA022", artist: "Sentino, Diho, BNP", year: 2026, type: "sc", src: "https://soundcloud.com/karzeu/8472371e-ba14-4c17-805e-aa33da7261d2" },
      { id: "zl5_04", title: "KURWY CHCĄ SENTO", artist: "Sentino, Popek, typo g, BNP", year: 2026, type: "sc", src: "https://soundcloud.com/juzekkk/kurwy-chca-sento-sentino" },
      { id: "zlt_05", title: "MOVE", artist: "Sentino, BNP", year: 2026, type: "sc", src: "https://soundcloud.com/juzekkk/move-sentino" },
      { id: "zl5_06", title: "KRAINA CZARÓW 2", artist: "Sentino, BNP", year: 2026, type: "sc", src: "https://soundcloud.com/karzeu/sentino-kraina-czarow-2" },
      { id: "zl5_07", title: "PRESIDENT", artist: "Sentino, BNP", year: 2026, type: "sc", src: "https://soundcloud.com/juzekkk/president-sentino" },
      { id: "zl5_08", title: "POTWORY", artist: "Sentino, BNP", year: 2026, type: "sc", src: "https://soundcloud.com/juzekkk/potwory-sentino" },
      { id: "zl5_09", title: "PAŁAC", artist: "Sentino, BNP", year: 2026, type: "sc", src: "https://soundcloud.com/juzekkk/pa-ac-sentino" },
      { id: "zl5_10", title: "FANTASTYCZNY", artist: "Sentino, BNP", year: 2026, type: "sc", src: "https://soundcloud.com/karzeu/sentino-fantastyczny-zabojstwo" },
      { id: "zl5_11", title: "FRISBEE", artist: "Sentino, BNP", year: 2026, type: "sc", src: "https://soundcloud.com/juzekkk/frisbee" },
      { id: "zl5_12", title: "PENTHOUSE 2", artist: "Sentino, Koneser, BNP", year: 2026, type: "sc", src: "https://soundcloud.com/karzeu/sentino-x-koneser-penthouse-1" },
      { id: "zl5_13", title: "OSTATNI RAZ", artist: "Sentino, BNP, Kaz Bałagane", year: 2026, type: "sc", src: "https://soundcloud.com/juzekkk/ostatni-raz-sentino" },
      { id: "zl5_14", title: "NO I CO", artist: "Sentino, Koneser, BNP", year: 2026, type: "sc", src: "https://soundcloud.com/juzekkk/no-i-co-sentino" },
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
