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
    id: "album_oki_era47",
    title: "OKI - ERA47",
    artist: "OKI",
    year: 2024,
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ujaKB7u1W9z0ZHtVswrxvLMMtZt-OiOKZQ&s",
    songs: [
      { id: "era47_01", title: "WODA SODOWA", artist: "OKI", year: 2024, type: "url", src: "https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/ERA47/1.%20WODA%20SODOWA.mp3" },
	  { id: "era47_02", title: "NIEWOLNIK", artist: "OKI", year: 2024, type: "url", src: "https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/ERA47/2.%20NIEWOLNIK.mp3" },
	  { id: "era47_03", title: "CERTIFIED LOVER", artist: "OKI, Bedoes 2115", year: 2024, type: "url", src: "https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/ERA47/3.%20CERTIFIED%20LOVER.mp3" },
	  { id: "era47_04", title: "SPRZEDAŁEM SIĘ", artist: "OKI", year: 2024, type: "url", src: "https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/ERA47/4.%20SPRZEDA%C5%81EM%20SI%C4%98.mp3" },
	  { id: "era47_05", title: "PUK PUK PUK", artist: "OKI, Otsochodzi", year: 2024, type: "url", src: "https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/ERA47/4.%20SPRZEDA%C5%81EM%20SI%C4%98.mp3" },
	  { id: "era47_06", title: "JEREMY SOCHAN SKIT", artist: "OKI", year: 2024, type: "url", src: "https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/ERA47/5.%20PUK%20PUK%20PUK.mp3" },
      { id: "era47_07", title: "JEREMY SOCHAN", artist: "OKI", year: 2024, type: "url", src: "https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/ERA47/7.%20JEREMY%20SOCHAN.mp3" },
	  { id: "era47_08", title: "ŻYCIE TO ZA MAŁO", artist: "OKI", year: 2024, type: "url", src: "https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/ERA47/8.%20%C5%BBYCIE%20TO%20ZA%20MA%C5%81O.mp3" },
	  { id: "era47_09", title: "ILE LAT?", artist: "OKI, Sobel", year: 2024, type: "url", src: "https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/ERA47/9.%20ILE%20LAT_.mp3" },	
	  { id: "era47_10", title: "JESTEŚMY ZA MŁODZI", artist: "OKI", year: 2024, type: "url", src: "https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/ERA47/10.%20JESTE%C5%9AMY%20ZA%20M%C5%81ODZI.mp3" },
	  { id: "era47_11", title: "NA ZAWSZE MAŁOLAT", artist: "OKI", year: 2024, type: "url", src: "https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/ERA47/11.%20NA%20ZAWSZE%20MA%C5%81OLAT.mp3" },
	  { id: "era47_12", title: "OD ZERA", artist: "OKI, Blaki Selektah", year: 2024, type: "url", src: "https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/ERA47/12.%20OD%20ZERA.mp3" },
	  { id: "era47_13", title: "JEŚLI CHCIAŁBYS TO MOŻESZ WPAŚĆ", artist: "OKI, Kuban", year: 2024, type: "url", src: "https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/ERA47/13.%20JE%C5%9ALI%20CHCIA%C5%81BY%C5%9A%20TO%20MO%C5%BBESZ%20WPA%C5%9A%C4%86.mp3" },
      { id: "era47_14", title: "WRAK", artist: "OKI", year: 2024, type: "url", src: "https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/ERA47/14.%20WRAK.mp3" },
	  { id: "era47_15", title: "SEROTONINA", artist: "OKI", year: 2024, type: "url", src: "https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/ERA47/15.%20SEROTONINA.mp3" },
	  { id: "era47_16", title: "QUAD STUDIO FREESTYLE", artist: "OKI", year: 2024, type: "url", src: "https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/ERA47/16.%20QUAD%20STUDIO%20FREESTYLE.mp3" },
	  { id: "era47_17", title: "KAUCJA", artist: "OKI", year: 2024, type: "url", src: "https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/ERA47/17.%20KAUCJA.mp3" },
	  { id: "era47_18", title: "OK OK OK", artist: "OKI", year: 2024, type: "url", src: "https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/ERA47/18.%20OK%20OK%20OK.mp3" },
	  { id: "era47_19", title: "DOM", artist: "OKI, Young Igi", year: 2024, type: "url", src: "https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/ERA47/19.%20DOM.mp3" },
	  { id: "era47_20", title: "AGENT47", artist: "OKI", year: 2024, type: "url", src: "https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/ERA47/20.%20AGENT47.mp3" },  
    ]
  },
  {
    id: "album_guzior_plesn",
    title: "Guzior - PLEŚŃ",
    artist: "Guzior",
    year: 2020,
    cover: "https://ecsmedia.pl/c/plesn-b-iext200801862.jpg",
    songs: [
      { id: "plesn_01", title: "ZAKAS", artist: "Guzior", year: 2020, type: "url", src: "https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/plesn/1.%20ZAKAS.mp3" },
	  { id: "plesn_02", title: "BLUEBERRY", artist: "Guzior", year: 2020, type: "url", src: "https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/plesn/2.%20BLUEBERRY.mp3" },
	  { id: "plesn_03", title: "TRAPSTAR", artist: "Guzior", year: 2020, type: "url", src: "https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/plesn/3.%20TRAPSTAR.mp3" },
	  { id: "plesn_04", title: "BOILER ROOM", artist: "Guzior, Kukon", year: 2020, type: "url", src: "https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/plesn/4.%20BOILER%20ROOM.mp3" },
	  { id: "plesn_05", title: "WTC", artist: "Guzior", year: 2020, type: "url", src: "https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/plesn/5.%20WTC.mp3" },
	  { id: "plesn_06", title: "FALA", artist: "Guzior, Oskar83", year: 2020, type: "url", src: "https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/plesn/6.%20FALA.mp3" },
	  { id: "plesn_07", title: "2018", artist: "Guzior", year: 2020, type: "url", src: "https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/plesn/7.%202018.mp3" },
	  { id: "plesn_08", title: "KUSHKOMA", artist: "Guzior", year: 2020, type: "url", src: "https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/plesn/8.%20KUSHKOMA.mp3" },
	  { id: "plesn_09", title: "Sowa", artist: "Guzior, Szpaku", year: 2020, type: "url", src: "https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/plesn/9.%20Sowa.mp3" },
	  { id: "plesn_10", title: "FALA - Sequel", artist: "Guzior", year: 2020, type: "url", src: "https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/plesn/10.%20FALA%20-%20Sequel.mp3" },
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
