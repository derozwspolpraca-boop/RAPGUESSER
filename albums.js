// ═══════════════════════════════════════════════════════
//  ALBUMS.JS — baza albumów dla trybu ALBUM w RAPGUESSER
//  Każdy album ma: id, title, artist, year, cover (URL lub ścieżka),
//  i songs[] — lista piosenek z tego albumu
// ═══════════════════════════════════════════════════════

window.ALBUMS_DB = [
  {
    id: "album_kmt_kmt",
    title: "Kendrick Lamar - To Pimp a Butterfly",
    artist: "Kendrick Lamar",
    year: 2015,
    // cover: ścieżka do pliku lokalnego albo URL do okładki
    // Możesz użyć: "covers/album.jpg" albo "https://..."
    cover: "https://upload.wikimedia.org/wikipedia/en/f/f6/Kendrick_Lamar_-_To_Pimp_a_Butterfly.png",
    songs: [
      { id: "kmt_01", title: "Wesley's Theory", artist: "Kendrick Lamar", year: 2015, type: "sc", src: "https://soundcloud.com/kendricklamar/wesleys-theory" },
      { id: "kmt_02", title: "King Kunta",       artist: "Kendrick Lamar", year: 2015, type: "sc", src: "https://soundcloud.com/kendricklamar/king-kunta" },
      { id: "kmt_03", title: "Alright",           artist: "Kendrick Lamar", year: 2015, type: "sc", src: "https://soundcloud.com/kendricklamar/alright" },
    ]
  },
  {
    id: "album_tede_marmur",
    title: "Tede - Marmur",
    artist: "Tede",
    year: 2017,
    cover: "https://i.scdn.co/image/ab67616d0000b273e1234567890abcdef1234567",
    songs: [
      { id: "marmur_01", title: "YA", artist: "Tede", year: 2017, type: "sc", src: "https://soundcloud.com/tede/ya" },
      { id: "marmur_02", title: "Marmur", artist: "Tede", year: 2017, type: "sc", src: "https://soundcloud.com/tede/marmur" },
    ]
  },
  // ────────────────────────────────────────────────────
  // SZABLON — skopiuj i wypełnij:
  // {
  //   id: "album_UNIKALNY_ID",
  //   title: "Artysta - Tytuł Albumu",
  //   artist: "Artysta",
  //   year: 2024,
  //   cover: "covers/nazwaokładki.jpg",   // plik lokalny lub URL
  //   songs: [
  //     { id: "song_001", title: "Tytuł",  artist: "Artysta", year: 2024, type: "file", src: "muzyka/piosenka.mp3" },
  //     { id: "song_002", title: "Tytuł2", artist: "Artysta", year: 2024, type: "sc",   src: "https://soundcloud.com/..." },
  //     { id: "song_003", title: "Tytuł3", artist: "Artysta", year: 2024, type: "url",  src: "https://twojdomain.com/song.mp3" },
  //   ]
  // },
  // ────────────────────────────────────────────────────
];
