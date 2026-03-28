// ═══════════════════════════════════════════════════════
//  ALBUMS.JS — baza albumów dla trybu ALBUM w RAPGUESSER
//  Każdy album ma: id, title, artist, year, cover (URL lub ścieżka),
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
      { id: "ZL5_01", title: "TACH TACH", artist: "Sentino, BNP", year: 2026, type: "url", src: "https://drive.google.com/file/d/1mi1_r4Ig9ovMX_Evv0FqTq9qkcni2Jee/view?usp=drive_link" },
      { id: "ZL5_02", title: "LEGACY", artist: "Sentino, BNP", year: 2026, type: "url", src: "https://drive.google.com/file/d/1UjWhWS-BRIoNig8E4fPQ5D0fPapGDe4w/view?usp=drive_link" },
      { id: "ZL5_03", title: "WAWA022", artist: "Sentino, Diho, BNP", year: 2026, type: "url", src: "https://drive.google.com/file/d/1prRGGsWbRH0AFjq0DG2GmR6fmpr63LDt/view?usp=drive_link" },
      { id: "ZL5_04", title: "KURWY CHCĄ SENTO", artist: "Sentino, Popek, typo g, BNP", year: 2026, type: "url", src: "https://drive.google.com/file/d/1nMgL3YTwMaXnijda4CumBLfyRgRYszwE/view?usp=drive_link" },
      { id: "ZL5_05", title: "MOVE", artist: "Sentino, BNP", year: 2026, type: "url", src: "https://drive.google.com/file/d/1UT50TZ6ipQ5KqOmjpLdZmeS5u5gARs9F/view?usp=drive_link" },
      { id: "ZL5_06", title: "KRAINA CZARÓW 2", artist: "Sentino, BNP", year: 2026, type: "url", src: "https://drive.google.com/file/d/1LXTWPvBKycekDKEZl7-0BLMiTIEU1ZZy/view?usp=drive_link" },
      { id: "ZL5_07", title: "PRESIDENT", artist: "Sentino, BNP", year: 2026, type: "url", src: "https://drive.google.com/file/d/1YA5w2h9hTXRuE345Rc7Jv1JJYPuLsMO5/view?usp=drive_link" },
      { id: "ZL5_08", title: "POTWORY", artist: "Sentino, BNP", year: 2026, type: "url", src: "https://drive.google.com/file/d/1tBdoNIOlpTghFZh6Ut3B6TgX07ZT05ZD/view?usp=drive_link" },
      { id: "ZL5_09", title: "PAŁAC", artist: "Sentino, BNP", year: 2026, type: "url", src: "https://drive.google.com/file/d/1Aldl3fRhR9o2RJ47Ueql060wmOa6Ejkp/view?usp=drive_link" },
      { id: "ZL5_10", title: "FANTASTYCZNY", artist: "Sentino, BNP", year: 2026, type: "url", src: "https://drive.google.com/file/d/11ex546bTOUN8PUmqC-iTk2VjeUfO9v5v/view?usp=drive_link" },
      { id: "ZL5_11", title: "FRISBEE", artist: "Sentino, BNP", year: 2026, type: "url", src: "https://drive.google.com/file/d/11Dn4zmYA3V5vSHk0CKosxVkWHb1dF_L5/view?usp=drive_link" },
      { id: "ZL5_12", title: "PENTHOUSE 2", artist: "Sentino, Koneser, BNP", year: 2026, type: "url", src: "https://drive.google.com/file/d/1ed7FS_RDblG19u8l02zHUhp_7Fp__LZC/view?usp=drive_link" },
      { id: "ZL5_13", title: "OSTATNI RAZ", artist: "Sentino, BNP, Kaz Bałagane", year: 2026, type: "url", src: "https://drive.google.com/file/d/1SOD21w4wS35jlzu8AKX9NCSPwOBsGAud/view?usp=drive_link" },
      { id: "ZL5_14", title: "NO I CO", artist: "Sentino, Koneser, BNP", year: 2026, type: "url", src: "https://drive.google.com/file/d/1jDDocsXZG-7wpdKwkqIOtMl2YR_39KgI/view?usp=drive_link" },
      
      
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
