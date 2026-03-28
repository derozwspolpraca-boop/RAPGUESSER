// ═══════════════════════════════════════════════════════════════════
//  RAPGUESSER — BAZA PIOSENEK
// ═══════════════════════════════════════════════════════════════════
//
//  JAK SPRAWDZIĆ CZY LINK ZADZIAŁA?
//  ─────────────────────────────────
//  Nie każda piosenka na SoundCloud działa jako embed!
//  Przed dodaniem do bazy wejdź na:
//
//    https://w.soundcloud.com/player/?url=TUTAJ_WKLEJ_LINK
//
//  Przykład sprawdzenia:
//    https://w.soundcloud.com/player/?url=https://soundcloud.com/ksi/holiday
//
//  Jeśli pojawia się odtwarzacz z okładką → DZIAŁA ✅
//  Jeśli pojawia się "This track is not available" → NIE DZIAŁA ❌
//    (zablokowane przez wytwórnię / artysta wyłączył embedding)
//
//  ─────────────────────────────────
//  FORMAT WPISU:
//  {
//    id:     dowolny unikalny string BEZ spacji i polskich znaków,
//    title:  tytuł piosenki (wyświetlany w grze),
//    artist: wykonawca,
//    year:   rok (liczba, bez cudzysłowów),
//    type:   zawsze 'sc' dla SoundCloud,
//    src:    pełny link z soundcloud.com
//  }
//
//  WAŻNE: po każdym wpisie (oprócz ostatniego) musi być przecinek!
//  WAŻNE: src musi być dokładnym linkiem do konkretnej piosenki,
//         NIE do profilu artysty ani playlisty
// ═══════════════════════════════════════════════════════════════════

const SONGS_DB = [

  // ── PRZYKŁADY KTÓRE DZIAŁAJĄ (sprawdzone embedowanie) ──
  // Usuń te przykłady i wstaw swoje własne piosenki

  {
    id: 'sc_0001',
    title: 'Fantazje',
    artist: 'MIU, Bedoes 2115, Pezet',
    year: 2026,
    type: 'sc',
    src: 'https://soundcloud.com/szydlik-jakub/miue-ft-pezet-bedoes-2115'
  },

  {
    id: 'sc_0002',
    title: 'Penthouse 2',
    artist: 'Sentino, Koneser',
    year: 2026,
    type: 'sc',
    src: 'https://soundcloud.com/karzeu/sentino-x-koneser-penthouse-1'
  },
  
  {
    id: 'sc_0003',
    title: 'Rainman',
    artist: 'Tymek, Trill Pem, Tede',
    year: 2019,
    type: 'sc',
    src: 'https://soundcloud.com/user-452641235-916715741/1-rainman'
  },  
  
  {
    id: 'sc_0004',
    title: 'NOWE CIOCIE',
    artist: 'Rydawarrior',
    year: 2026,
    type: 'sc',
    src: 'https://soundcloud.com/leslixe/nowe-ciocie-rydawarrior'
  },   

  {
    id: 'sc_0005',
    title: 'Wiem co to ból',
    artist: 'Quebonafide, Sentino, Kaz Bałagane',
    year: 2026,
    type: 'sc',
    src: 'https://soundcloud.com/karzeu/11999e4f-d447-4cd8-ae65-45d7e19fe379'
  },

  {
    id: 'sc_0006',
    title: 'INTRO',
    artist: 'Vkie',
    year: 2024,
    type: 'sc',
    src: 'https://soundcloud.com/ciastwo1337/vkie-intro'
  },    
  
  {
    id: 'sc_0007',
    title: 'FPS',
    artist: 'Bedoes, Lanek',
    year: 2019,
    type: 'sc',
    src: 'https://soundcloud.com/user-717001874/bedoes-lanek-fps'
  },

  {
    id: 'sc_0008',
    title: 'NA ROGU',
    artist: 'Rusina',
    year: 2024,
    type: 'sc',
    src: 'https://soundcloud.com/fifi-54979647/rusina-na-rogu'
  },

  {
    id: 'sc_0009',
    title: 'Dzień Kota',
    artist: 'Włodar',
    year: 2023,
    type: 'sc',
    src: 'https://soundcloud.com/muzanapierdala/wlodar-dzien-kota'
  },
  
  {
    id: 'sc_0010',
    title: 'Jestem Śliczny',
    artist: 'Rusina',
    year: 2022,
    type: 'sc',
    src: 'https://soundcloud.com/yilzwbakltwt/rusina-jestem-sliczny'
  },

  {
    id: 'sc_0011',
    title: 'Half Dead',
    artist: 'Quebonafide, ReTo',
    year: 2017,
    type: 'sc',
    src: 'https://soundcloud.com/user-250223982/quebonafide-ft-reto-half-dead'
  },

  {
    id: 'sc_0012',
    title: 'Jedno Życie',
    artist: 'Blacha',
    year: 2020,
    type: 'sc',
    src: 'https://soundcloud.com/user-496883271/blacha-jedno-zycie'
  },

  {
    id: 'sc_0013',
    title: 'THC',
    artist: 'Young Igi, Włodi',
    year: 2019,
    type: 'sc',
    src: 'https://soundcloud.com/pozdroigi/young-igi-thc-ftwlodi-prod-shad0w-x-hubi'
  },

  {
    id: 'sc_0014',
    title: 'Bad Boy',
    artist: 'Kubi Producent, Beteo, ReTo, Siles',
    year: 2018,
    type: 'sc',
    src: 'https://soundcloud.com/pmhcqz8ersxj/kubi-producent-bad-boy-ft-beteo-reto-siles-1'
  },

  {
    id: 'sc_0015',
    title: 'bb',
    artist: 'Zeamsone',
    year: 2018,
    type: 'sc',
    src: 'https://soundcloud.com/pawelekhehe/zeamsone-bb'
  },

  {
    id: 'sc_0016',
    title: 'Zimna noc i szybkie auta',
    artist: 'SB Maffija',
    year: 2020,
    type: 'sc',
    src: 'https://soundcloud.com/user-482107184-920513649/zimna-noc-i-szybki'
  },

  {
    id: 'sc_0017',
    title: 'BIERNIK ( Kogo ? Co ?)',
    artist: 'Dj Decks, WoLa, Mata',
    year: 2022,
    type: 'sc',
    src: 'https://soundcloud.com/julia-wolna-574827105/dj-decks-mata-wola-biernik'
  },

  {
    id: 'sc_0018',
    title: '300 BANIEK',
    artist: 'Otsochodzi, OKI',
    year: 2025,
    type: 'sc',
    src: 'https://soundcloud.com/fifi-54979647/otsochodzi-x-oki-300-baniek'
  },

  {
    id: 'sc_0019',
    title: 'WRAK',
    artist: 'OKI',
    year: 2024,
    type: 'sc',
    src: 'https://soundcloud.com/wiktor122/oki-wrak'
  },

  {
    id: 'sc_0020',
    title: 'WODA SODOWA',
    artist: 'OKI',
    year: 2024,
    type: 'sc',
    src: 'https://soundcloud.com/wiktor122/oki-woda-sodowa'
  },

  {
    id: 'sc_0021',
    title: 'TERAZ ALBO NIGDY',
    artist: '2115, Young Multi,',
    year: 2022,
    type: 'sc',
    src: 'https://soundcloud.com/wiktor122/2115-teraz-albo-nigdy-ft-young-multi'
  },

  {
    id: 'sc_0022',
    title: 'Małe Krople',
    artist: 'Young Igi',
    year: 2022,
    type: 'sc',
    src: 'https://soundcloud.com/wiktor122/young-igi-ma-e-krople-1'
  },

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'sc',
    src: ''
  },

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'sc',
    src: ''
  },

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'sc',
    src: ''
  },

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'sc',
    src: ''
  },

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'sc',
    src: ''
  },

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'sc',
    src: ''
  },

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'sc',
    src: ''
  },

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'sc',
    src: ''
  },

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'sc',
    src: ''
  },

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'sc',
    src: ''
  },  
  
  // ── TUTAJ DODAWAJ SWOJE PIOSENKI ──
  // Wzór:
  // {
  //   id: 'sc_001',              <- unikalny identyfikator, zmień numer
  //   title: 'Tytuł Piosenki',
  //   artist: 'Nazwa Artysty',
  //   year: 2023,
  //   type: 'sc',
  //   src: 'https://soundcloud.com/artysta/tytul'
  // },

];

// ── NIE MODYFIKUJ PONIŻEJ ──
if (typeof window !== 'undefined') {
  window.SONGS_DB = SONGS_DB;
}
