// ═══════════════════════════════════════════════════════
//  ALBUMS.JS — baza albumów dla trybu ALBUM w RAPGUESSER
//  Każdy album ma: id, title, artist, year, cover (sc lub ścieżka),
//  i songs[] — lista piosenek z tego albumu
// ═══════════════════════════════════════════════════════

window.ALBUMS_DB = [
  {
    id: "SentinoZL5",
    title: "Zabójstwo Liryczne 5",
    artist: "Sentino",
    year: 2026,
    cover: "https://images.genius.com/f31a33a356cab8dba533f780ff4d7778.503x503x120.gif",
    songs: [
      { id: "ZL5_01", title: "TACH TACH", artist: "Sentino, BNP", year: 2026, type: "sc", src: "https://soundcloud.com/juzekkk/tach-tach-sentino" },
      { id: "ZL5_02", title: "LEGACY", artist: "Sentino, BNP", year: 2026, type: "sc", src: "https://soundcloud.com/juzekkk/legacy-sentino" },
      { id: "ZL5_03", title: "WAWA022", artist: "Sentino, Diho, BNP", year: 2026, type: "sc", src: "https://soundcloud.com/karzeu/8472371e-ba14-4c17-805e-aa33da7261d2" },
      { id: "ZL5_04", title: "KURWY CHCĄ SENTO", artist: "Sentino, Popek, typo g, BNP", year: 2026, type: "sc", src: "https://soundcloud.com/juzekkk/kurwy-chca-sento-sentino" },
      { id: "ZL5_05", title: "MOVE", artist: "Sentino, BNP", year: 2026, type: "sc", src: "https://soundcloud.com/juzekkk/move-sentino" },
      { id: "ZL5_06", title: "KRAINA CZARÓW 2", artist: "Sentino, BNP", year: 2026, type: "sc", src: "https://soundcloud.com/karzeu/sentino-kraina-czarow-2" },
      { id: "ZL5_07", title: "PRESIDENT", artist: "Sentino, BNP", year: 2026, type: "sc", src: "https://soundcloud.com/juzekkk/president-sentino" },
      { id: "ZL5_08", title: "POTWORY", artist: "Sentino, BNP", year: 2026, type: "sc", src: "https://soundcloud.com/juzekkk/potwory-sentino" },
      { id: "ZL5_09", title: "PAŁAC", artist: "Sentino, BNP", year: 2026, type: "sc", src: "https://soundcloud.com/juzekkk/pa-ac-sentino" },
      { id: "ZL5_10", title: "FANTASTYCZNY", artist: "Sentino, BNP", year: 2026, type: "sc", src: "https://soundcloud.com/karzeu/sentino-fantastyczny-zabojstwo" },
      { id: "ZL5_11", title: "FRISBEE", artist: "Sentino, BNP", year: 2026, type: "sc", src: "https://soundcloud.com/juzekkk/frisbee" },
      { id: "ZL5_12", title: "PENTHOUSE 2", artist: "Sentino, Koneser, BNP", year: 2026, type: "sc", src: "https://soundcloud.com/karzeu/sentino-x-koneser-penthouse-1" },
      { id: "ZL5_13", title: "OSTATNI RAZ", artist: "Sentino, BNP, Kaz Bałagane", year: 2026, type: "sc", src: "https://soundcloud.com/juzekkk/ostatni-raz-sentino" },
      { id: "ZL5_14", title: "NO I CO", artist: "Sentino, Koneser, BNP", year: 2026, type: "sc", src: "https://soundcloud.com/juzekkk/no-i-co-sentino" },
     ],
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
  };
