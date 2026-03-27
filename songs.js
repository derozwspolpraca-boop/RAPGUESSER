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
    id: 'sc_example_002',
    title: 'Thick of It',
    artist: 'KSI',
    year: 2016,
    type: 'sc',
    src: 'https://soundcloud.com/ksi/ksi-thick-of-it'
  },
  {
    id: 'sc_example_003',
    title: 'Miracle',
    artist: 'Madeon',
    year: 2012,
    type: 'sc',
    src: 'https://soundcloud.com/madeon/miracle'
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
