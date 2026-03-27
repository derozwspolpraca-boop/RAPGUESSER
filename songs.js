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