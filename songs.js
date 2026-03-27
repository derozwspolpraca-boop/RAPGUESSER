// ═══════════════════════════════════════════════════════════
//  RAPGUESSER — BAZA PIOSENEK
//  Edytuj ten plik aby dodawać/usuwać piosenki z gry.
//
//  FORMAT KAŻDEJ PIOSENKI:
//  {
//    id:     unikalny identyfikator (dowolny string bez spacji),
//    title:  tytuł piosenki,
//    artist: wykonawca,
//    year:   rok wydania (liczba),
//    type:   'sc' (SoundCloud) lub 'yt' (zarezerwowane),
//    src:    pełny link do piosenki na SoundCloud
//  }
//
//  ⚠ Działa TYLKO z publicznymi utworami na SoundCloud.
//  Link format: https://soundcloud.com/artysta/tytul-piosenki
// ═══════════════════════════════════════════════════════════

const SONGS_DB = [

  // ── PRZYKŁADOWE PIOSENKI — USUŃ I DODAJ SWOJE ──
  // {
  //   id: 'sc_001',
  //   title: 'HUMBLE.',
  //   artist: 'Kendrick Lamar',
  //   year: 2017,
  //   type: 'sc',
  //   src: 'https://soundcloud.com/kendrick-lamar-music/humble'
  // },
  // {
  //   id: 'sc_002',
  //   title: 'SICKO MODE',
  //   artist: 'Travis Scott',
  //   year: 2018,
  //   type: 'sc',
  //   src: 'https://soundcloud.com/travisscott/sicko-mode'
  // },

  // ── DODAJ SWOJE PIOSENKI PONIŻEJ ──


];

// NIE MODYFIKUJ PONIŻEJ TEJ LINII
if (typeof window !== 'undefined') {
  window.SONGS_DB = SONGS_DB;
}
