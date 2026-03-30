// ═══════════════════════════════════════════════════════════════════
//  RAPGUESSER — BAZA PIOSENEK
// ═══════════════════════════════════════════════════════════════════
//
//  JAK SPRAWDZIĆ CZY LINK ZADZIAŁA?
//  ─────────────────────────────────
//  Nie każda piosenka na SoundCloud działa jako embed!
//  Przed dodaniem do bazy wejdź na:
//
//   https://w.soundcloud.com/player/?url=TUTAJ_WKLEJ_LINK
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
    title: 'Klękaj przed panem',
    artist: 'Białas, Słoń',
    year: 2021,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/DRUGA%20TURA/Kl%C4%99kaj%20przed%20panem%20Bia%C5%82as%202021-12-14.mp3'
  },

  {
    id: 'sc_0002',
    title: 'Buduje zamek',
    artist: 'Malik Montana, Asster',
    year: 2023,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/DRUGA%20TURA/Buduje%20zamek%20Malik%20Montana%202023-03-10.mp3'
  },
  
  {
    id: 'sc_0003',
    title: 'Tańcz ze mną',
    artist: 'ReTo',
    year: 2023,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/DRUGA%20TURA/Ta%C5%84cz%20ze%20mn%C4%85%20ReTo%202023-02-24.mp3'
  },  
  
  {
    id: 'sc_0004',
    title: 'BALLADA O SAMOTNOŚCI (vlone)',
    artist: 'Young Multi',
    year: 2021,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/DRUGA%20TURA/BALLADA%20O%20SAMOTNO%C5%9ACI%20(vlone)%20Young%20Multi%202021-12-17.mp3'
  },   

  {
    id: 'sc_0005',
    title: 'BEZ SERCA',
    artist: 'Young Multi, Miszel, matiskater',
    year: 2021,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/DRUGA%20TURA/BEZ%20SERCA%20Young%20Multi%202021-12-17.mp3'
  },

  {
    id: 'sc_0006',
    title: 'Bitch, Please',
    artist: 'Hodak',
    year: 2021,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/DRUGA%20TURA/Bitch%2C%20Please%20Hodak%202021-06-10.mp3'
  },    
  
  {
    id: 'sc_0007',
    title: 'Blueface',
    artist: 'Kaz Bałagane',
    year: 2021,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/DRUGA%20TURA/Blueface%20Kaz%20Ba%C5%82agane%202021-08-27.mp3'
  },

  {
    id: 'sc_0008',
    title: 'Bogowie nie krwawią',
    artist: 'ReTo, Białas',
    year: 2023,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/DRUGA%20TURA/Bogowie%20nie%20krwawi%C4%85%20ReTo%202023-02-24.mp3'
  },

  {
    id: 'sc_0009',
    title: 'BŁĄD W SYMULACJI',
    artist: 'White Widow, Pako',
    year: 2022,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/DRUGA%20TURA/B%C5%81%C4%84D%20W%20SYMULACJI%20White%20Widow%202022-10-28.mp3'
  },
  
  {
    id: 'sc_0010',
    title: 'COOKIN UP',
    artist: 'White Widow',
    year: 2022,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/DRUGA%20TURA/COOKIN%20UP%20White%20Widow%202022-10-28.mp3'
  },

  {
    id: 'sc_0011',
    title: 'Comme Des Garçons',
    artist: 'Chivas',
    year: 2021,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/DRUGA%20TURA/Comme%20Des%20Gar%C3%A7ons%20Chivas%202021-05-21.mp3'
  },

  {
    id: 'sc_0012',
    title: 'Droga krzyżowa',
    artist: 'Kabe, Miszel',
    year: 2022,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/DRUGA%20TURA/Droga%20krzy%C5%BCowa%20Kabe%202022-12-30.mp3'
  },

  {
    id: 'sc_0013',
    title: 'Faka',
    artist: 'Mata',
    year: 2021,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/DRUGA%20TURA/Faka%20Mata%202021-10-01.mp3'
  },

  {
    id: 'sc_0014',
    title: 'Frugo',
    artist: 'Diho',
    year: 2019,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/DRUGA%20TURA/Frugo%20Diho%202019-01-28.mp3'
  },

  {
    id: 'sc_0015',
    title: 'GO!',
    artist: 'Rusina',
    year: 2022,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/DRUGA%20TURA/GO!%20Rusina%202022-04-28.mp3'
  },

  {
    id: 'sc_0016',
    title: 'GTA',
    artist: 'ReTo',
    year: 2023,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/DRUGA%20TURA/GTA%20ReTo%202023-02-24.mp3'
  },

  {
    id: 'sc_0017',
    title: 'God Mode',
    artist: 'Żabson, Malik Montana',
    year: 2023,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/DRUGA%20TURA/God%20Mode%20%C5%BBabson%202023-03-30.mp3'
  },

  {
    id: 'sc_0018',
    title: 'HIGH RIGHT NOW',
    artist: 'Zeamsone',
    year: 2022,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/DRUGA%20TURA/HIGH%20RIGHT%20NOW%20Zeamsone%202022-07-28.mp3'
  },

  {
    id: 'sc_0019',
    title: 'Jungle Boyz',
    artist: 'Malik Montana',
    year: 2019,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/DRUGA%20TURA/Jungle%20Boyz%20Malik%20Montana%202019-09-27.mp3'
  },

  {
    id: 'sc_0020',
    title: 'Flaga',
    artist: 'Chillwagon',
    year: 2019,
    type: 'file',
    src: 'flaga-chillwagon.mp3'
  },

  {
    id: 'sc_0021',
    title: 'KILLA',
    artist: 'Trill Pem, Wac Toja',
    year: 2021,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/DRUGA%20TURA/KILLA%20Trill%20Pem%202021-08-18.mp3'
  },

  {
    id: 'sc_0022',
    title: 'KWAŚNY DIESEL NIE BENZYNA',
    artist: 'matiskater, Acidstanek',
    year: 2021,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/DRUGA%20TURA/KWA%C5%9ANY%20DIESEL%20NIE%20BENZYNA%20matiskater%202021-10-29.mp3'
  },

  {
    id: 'sc_0023',
    title: 'Karate Kid',
    artist: 'Białas, Malik Montana',
    year: 2018,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/DRUGA%20TURA/Karate%20Kid%20Bia%C5%82as%202018-10-04.mp3'
  },

  {
    id: 'sc_0024',
    title: 'Koala Party',
    artist: 'Kukon, Młody Koala',
    year: 2022,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/DRUGA%20TURA/Koala%20Party%20Kukon%202022-06-23.mp3'
  },

  {
    id: 'sc_0025',
    title: 'LAXJFK',
    artist: 'Jan-Rapowanie, Kinny Zimmer',
    year: 2022,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/DRUGA%20TURA/LAXJFK%20Jan-Rapowanie%202022-03-11.mp3'
  },

  {
    id: 'sc_0026',
    title: 'London Rain',
    artist: 'Kukon, Kaz Bałagane',
    year: 2022,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/DRUGA%20TURA/London%20Rain%20Kukon%202022-06-23.mp3'
  },

  {
    id: 'sc_0027',
    title: 'Luty',
    artist: 'Otsochodzi',
    year: 2022,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/DRUGA%20TURA/Luty%20Otsochodzi%202022-08-04.mp3'
  },

  {
    id: 'sc_0028',
    title: 'Matrioszki',
    artist: 'Kukon',
    year: 2021,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/DRUGA%20TURA/Matrioszki%20Kukon%202021-08-09.mp3'
  },

  {
    id: 'sc_0029',
    title: 'Mówiłaś',
    artist: 'Young Igi',
    year: 2017,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/DRUGA%20TURA/M%C3%B3wi%C5%82a%C5%9B%20Young%20Igi%202017-10-23.mp3'
  },  

  {
    id: 'sc_0030',
    title: 'OMDB',
    artist: 'Malik Montana, Szamz',
    year: 2023,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/DRUGA%20TURA/OMDB%20Malik%20Montana%202023-03-10.mp3'
  },  

  {
    id: 'sc_0031',
    title: 'Oh No!',
    artist: 'Hodak',
    year: 2021,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/DRUGA%20TURA/Oh%20No!%20Hodak%202021-06-10.mp3'
  },  

  {
    id: 'sc_0032',
    title: 'Omerta',
    artist: 'Hodak, Avi',
    year: 2020,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/DRUGA%20TURA/Omerta%20Hodak%202020-03-05.mp3'
  },  

  {
    id: 'sc_0033',
    title: 'Owboy',
    artist: 'ReTo',
    year: 2023,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/DRUGA%20TURA/Owboy%20ReTo%202023-02-24.mp3'
  },  

  {
    id: 'sc_0034',
    title: 'POL Smoke',
    artist: 'Taco Hemingway',
    year: 2020,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/DRUGA%20TURA/POL%20Smoke%20Taco%20Hemingway%202020-08-28.mp3'
  },  

  {
    id: 'sc_0035',
    title: 'POLAND REMIX',
    artist: 'Young Multi',
    year: 2022,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/DRUGA%20TURA/POLAND%20REMIX%20Young%20Multi%202022-11-10.mp3'
  },  

  {
    id: 'sc_0036',
    title: 'Paczkomat',
    artist: 'Otsochodzi, Pako, Szopeen',
    year: 2022,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/DRUGA%20TURA/Paczkomat%20Otsochodzi%202022-08-04.mp3'
  },  

  {
    id: 'sc_0037',
    title: 'Palenie Zabija',
    artist: 'Chivas',
    year: 2021,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/DRUGA%20TURA/Palenie%20Zabija%20Chivas%202021-05-20.mp3'
  },  

  {
    id: 'sc_0038',
    title: 'Palm Angels',
    artist: 'Zeamsone',
    year: 2022,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/DRUGA%20TURA/Palm%20Angels%20Zeamsone%202022-07-28.mp3'
  },  

  {
    id: 'sc_0039',
    title: 'Panta Rhei',
    artist: 'ReTo',
    year: 2023,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/DRUGA%20TURA/Panta%20Rhei%20ReTo%202023-02-24.mp3'
  },  

  {
    id: 'sc_0040',
    title: 'Mów',
    artist: 'Otsochodzi',
    year: 2019,
    type: 'url',
    src: 'https://soundcloud.com/otsochodzi-unofficial/otsochodzi-mow'
  },  

  {
    id: 'sc_0041',
    title: 'Prawdziwy trap',
    artist: '2018',
    year: 2016,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/DRUGA%20TURA/Prawdziwy%20trap%20Bia%C5%82as%202018-10-05.mp3'
  },  

  {
    id: 'sc_0042',
    title: 'Prometazyna',
    artist: 'SB Maffija',
    year: 2022,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/DRUGA%20TURA/Prometazyna%20SB%20Maffija%202022-01-28.mp3'
  },  

  {
    id: 'sc_0043',
    title: 'Pumba ',
    artist: 'ReTo, Kaz Bałagane, Kabe',
    year: 2023,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/DRUGA%20TURA/Pumba%20ReTo%202023-02-24.mp3'
  },  

    {
    id: 'sc_0044',
    title: 'RIDE WITH MY BOYS',
    artist: 'White Widow',
    year: 2022,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/DRUGA%20TURA/RIDE%20WITH%20MY%20BOYS%20White%20Widow%202022-10-28.mp3'
  },  

  {
    id: 'sc_0045',
    title: 'STILO',
    artist: 'matiskater',
    year: 2021,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/DRUGA%20TURA/STILO%20matiskater%202021-01-04.mp3'
  },  

  {
    id: 'sc_0046',
    title: 'Sheraton Kopenhaga',
    artist: 'Kukon',
    year: 2020,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/DRUGA%20TURA/Sheraton%20Kopenhaga%20Kukon%202020-12-25.mp3'
  },  

  {
    id: 'sc_0047',
    title: 'Sonic Skit',
    artist: 'OKI',
    year: 2022,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/DRUGA%20TURA/Sonic%20Skit%20OKI%202022-06-09.mp3'
  },  

  {
    id: 'sc_0048',
    title: 'TERAZ ALBO NIGDY',
    artist: '2115, Young Multi',
    year: 2022,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/DRUGA%20TURA/TERAZ%20ALBO%20NIGDY%202115%202022-12-16.mp3'
  },  

  {
    id: 'sc_0049',
    title: 'Teleport',
    artist: 'Janusz Walczuk, Waima, Premixm, Diffi, Xad, yezusslime',
    year: 2023,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/DRUGA%20TURA/Teleport%20Janusz%20Walczuk%202023-01-27.mp3'
  },  

  {
    id: 'sc_0050',
    title: 'Trap II',
    artist: 'Young Multi',
    year: 2018,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/DRUGA%20TURA/Trap%20II%20Young%20Multi%202018-11-23.mp3'
  },  

  {
    id: 'sc_0051',
    title: 'Trash',
    artist: 'Chivas',
    year: 2019,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/DRUGA%20TURA/Trash%20Chivas%202019-09-30.mp3'
  },  

  {
    id: 'sc_0052',
    title: '8 Kobiet',
    artist: 'Taconafide, Taco Hemingway, Quebonafide',
    year: 2018,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/SOMA05/8%20kobiet%20TACONAFIDE%202018-04-13.mp3'
  },  

  {
    id: 'sc_0053',
    title: 'Art-B',
    artist: 'Taconafide, Taco Hemingway, Quebonafide',
    year: 2018,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/SOMA05/Art-B%20TACONAFIDE%202018-04-13.mp3'
  },  

  {
    id: 'sc_0054',
    title: 'Ekodiesel',
    artist: 'Taconafide, Taco Hemingway, Quebonafide',
    year: 2018,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/SOMA05/Ekodiesel%20TACONAFIDE%202018-04-13.mp3'
  },  

  {
    id: 'sc_0055',
    title: 'Tesla Sport Carbon',
    artist: 'Żabson',
    year: 2023,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/DRUGA%20TURA/Tesla%20Sport%20Carbon%20%C5%BBabson%202023-03-30.mp3'
  },  

  {
    id: 'sc_0056',
    title: 'Giro d’Italia',
    artist: 'Taconafide, Taco Hemingway, Quebonafide',
    year: 2018,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/SOMA05/Giro%20d%E2%80%99Italia%20TACONAFIDE%202018-04-13.mp3'
  },  

  {
    id: 'sc_0057',
    title: 'Metallica 808',
    artist: 'Taconafide, Taco Hemingway, Quebonafide',
    year: 2018,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/SOMA05/Metallica%20808%20TACONAFIDE%202018-04-13.mp3'
  },  

  {
    id: 'sc_0058',
    title: 'Mleko & miód',
    artist: 'Taconafide, Taco Hemingway, Quebonafide',
    year: 2018,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/SOMA05/Mleko%20%26%20mi%C3%B3d%20TACONAFIDE%202018-04-13.mp3'
  }, 

    {
    id: 'sc_0059',
    title: 'Tamagotchi',
    artist: 'Taconafide, Taco Hemingway, Quebonafide',
    year: 2018,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/SOMA05/Tamagotchi%20TACONAFIDE%202018-04-13.mp3'
  },  

  {
    id: 'sc_0060',
    title: 'KURWY CHCĄ SENTO',
    artist: 'Sentino, Popek',
    year: 2026,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/ZL5/KURWY%20CHC%C4%84%20SENTO.mp3'
  },  

  {
    id: 'sc_0061',
    title: 'Supersize',
    artist: 'Żabson, Kronkel Dom',
    year: 2023,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/DRUGA%20TURA/Supersize%20%C5%BBabson%202023-03-30.mp3'
  },  

  {
    id: 'sc_0062',
    title: 'FANTASTYCZNY',
    artist: 'Sentino',
    year: 2026,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/ZL5/FANTASTYCZNY%20Sentino%202026-03-11.mp3'
  },  

  {
    id: 'sc_0063',
    title: 'PENTHOUSE 2',
    artist: 'Sentino, Koneser',
    year: 2026,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/ZL5/PENTHOUSE%202%20Sentino%202026-03-11.mp3'
  },  

  {
    id: 'sc_0064',
    title: 'WAWA022',
    artist: 'Sentino, Diho',
    year: 2026,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/ZL5/WAWA022%20Sentino%202026-03-11.mp3'
  },  

  {
    id: 'sc_0065',
    title: 'OSTATNI RAZ',
    artist: 'Sentino, Kaz Bałagane',
    year: 2026,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/ZL5/OSTATNI%20RAZ%20Sentino%202026-03-11.mp3'
  },  

  {
    id: 'sc_0066',
    title: '05:05',
    artist: 'Bedoes 2115, Kubi Producent',
    year: 2018,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/05_05.mp3'
  },  

  {
    id: 'sc_0067',
    title: 'Baba Hassan',
    artist: 'PUSHER, OSKA030',
    year: 2020,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/Baba%20Hassan.mp3'
  },  

  {
    id: 'sc_0068',
    title: 'ASPARTAM',
    artist: 'Quebonafide, Mata',
    year: 2020,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/ASPARTAM_spotdown.org.mp3'
  },  

  {
    id: 'sc_0069',
    title: 'BEEF',
    artist: 'White Widow',
    year: 2022,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/BEEF.mp3'
  },  

  {
    id: 'sc_0070',
    title: 'Bez Zarzutów',
    artist: 'Hodak, schafter',
    year: 2021,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/Bez%20Zarzut%C3%B3w.mp3'
  },  

  {
    id: 'sc_0071',
    title: 'Będę Prezydentem',
    artist: 'Mata',
    year: 2026,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/B%C4%98D%C4%98%20PREZYDENTEM%20_)_spotdown.org.mp3'
  },  

  {
    id: 'sc_0072',
    title: 'California',
    artist: 'White 2115',
    year: 2018,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/California.mp3'
  },  

  {
    id: 'sc_0073',
    title: 'Euforia',
    artist: 'Otsochodzi',
    year: 2019,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/Euforia.mp3'
  }, 

    {
    id: 'sc_0074',
    title: 'FREAKY',
    artist: 'Mata, Fagata',
    year: 2026,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/FREAKY_spotdown.org.mp3'
  },  

  {
    id: 'sc_0075',
    title: 'NIE CHCĘ WRACAĆ',
    artist: 'Fukaj, Hubert.',
    year: 2025,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/NIE%20CHC%C4%98%20WRACA%C4%86_spotdown.org.mp3'
  },  

  {
    id: 'sc_0076',
    title: 'Floyd Mayweather',
    artist: 'Żabson',
    year: 2019,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/Floyd%20Mayweather.mp3'
  },  

  {
    id: 'sc_0077',
    title: 'GOMBAO 33',
    artist: 'Mata, Wyguś, Szczepan, Adam',
    year: 2019,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/GOMBAO%2033_spotdown.org.mp3'
  },  

  {
    id: 'sc_0078',
    title: 'Głowa rodziny',
    artist: 'Białas, Lanek',
    year: 2022,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/G%C5%82owa%20rodziny.mp3'
  },  

  {
    id: 'sc_0079',
    title: 'KAMIKAZE',
    artist: 'Mata, Skolim, Khaid',
    year: 2025,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/KAMIKAZE_spotdown.org.mp3'
  },  

  {
    id: 'sc_0080',
    title: 'Kulig',
    artist: 'Kaz Bałagane',
    year: 2016,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/Kulig_spotdown.org.mp3'
  },  

  {
    id: 'sc_0081',
    title: 'Mówiłas',
    artist: 'Young Igi',
    year: 2017,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/M%C3%B3wi%C5%82a%C5%9B.mp3'
  },  

  {
    id: 'sc_0082',
    title: 'NICKI',
    artist: 'Trill Pem, Wac Toja',
    year: 2020,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/NICKI.mp3'
  },  

  {
    id: 'sc_0083',
    title: 'Narcyz',
    artist: 'Chivas',
    year: 2022,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/Narcyz.mp3'
  },  

  {
    id: 'sc_0084',
    title: 'Nie ma raju bez węża',
    artist: 'SB Maffija',
    year: 2020,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/Nie%20ma%20raju%20bez%20w%C4%99%C5%BCa.mp3'
  },  

  {
    id: 'sc_0085',
    title: 'nie pytaj co brałem',
    artist: 'Alan',
    year: 2022,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/Nie%20pytaj%20co%20bra%C5%82em.mp3'
  },  

  {
    id: 'sc_0086',
    title: 'OSZUKAJ PRZEZNACZENIE',
    artist: 'yung adisz',
    year: 2022,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/OSZUKAJ%20PRZEZNACZENIE.mp3'
  },  

  {
    id: 'sc_0087',
    title: 'Palma de mallorca',
    artist: 'Mata, Żabson',
    year: 2025,
    type: 'url',
    src: 'https://dash.cloudflare.com/3dcf76cc2fee43f77d679726c0ee1a59/r2/default/buckets/rapguesser/objects/PALMA%20DE%20MALLORCA_spotdown.org.mp3/details'
  },  

  {
    id: 'sc_0088',
    title: 'Sam',
    artist: 'Waima',
    year: 2022,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/Sam.mp3'
  }, 

    {
    id: 'sc_0089',
    title: 'San Andreas',
    artist: 'Zeamsone',
    year: 2018,
    type: 'url',
    src: 'https://dash.cloudflare.com/3dcf76cc2fee43f77d679726c0ee1a59/r2/default/buckets/rapguesser/objects/San%20Andreas.mp3/details'
  },  

  {
    id: 'sc_0090',
    title: 'Schodki',
    artist: 'Mata',
    year: 2019,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/Schodki_spotdown.org.mp3'
  },  

  {
    id: 'sc_0091',
    title: 'Sexoholik',
    artist: 'Żabson',
    year: 2020,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/Sexoholik.mp3'
  },  

  {
    id: 'sc_0092',
    title: 'Szafir',
    artist: 'Mata',
    year: 2021,
    type: 'url',
    src: 'https://dash.cloudflare.com/3dcf76cc2fee43f77d679726c0ee1a59/r2/default/buckets/rapguesser/objects/Szafir_spotdown.org.mp3/details?cursors=JTVCJTIyMS1KVGRDSlRJeWRpVXlNaVV6UVRFbE1rTWxNakp6ZEdGeWRFRm1kR1Z5SlRJeUpUTkJKVEl5VTJGdUpUSXdRVzVrY21WaGN5NXRjRE1sTWpJbE1rTWxNakoxZFdsa0pUSXlKVE5CSlRJeU4yVTJNbU0wWW1JM09HVmhaR1V4TWpjNVpEZzFZbVZrWTJZMU9EQm1OR1lsTWpJbE4wUSUzRCUyMIÜ1RA%3D%3D'
  },  

  {
    id: 'sc_0093',
    title: 'Szmata',
    artist: 'Mata',
    year: 2021,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/Szmata_spotdown.org.mp3'
  },  

  {
    id: 'sc_0094',
    title: 'Tarcho Terror',
    artist: 'Otsochodzi',
    year: 2022,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/Tarcho%20Terror.mp3'
  },  

  {
    id: 'sc_0095',
    title: 'Trójkat Bermudzki',
    artist: 'Sentino, Nitro, MASNY BEN',
    year: 2022,
    type: 'url',
    src: 'https://dash.cloudflare.com/3dcf76cc2fee43f77d679726c0ee1a59/r2/default/buckets/rapguesser/objects/Tr%C3%B3jk%C4%85t%20Bermudzki.mp3/details?cursors=JTVCJTIyMS1KVGRDSlRJeWRpVXlNaVV6UVRFbE1rTWxNakp6ZEdGeWRFRm1kR1Z5SlRJeUpUTkJKVEl5VTJGdUpUSXdRVzVrY21WaGN5NXRjRE1sTWpJbE1rTWxNakoxZFdsa0pUSXlKVE5CSlRJeU4yVTJNbU0wWW1JM09HVmhaR1V4TWpjNVpEZzFZbVZrWTJZMU9EQm1OR1lsTWpJbE4wUSUzRCUyMIÜ1RA%3D%3D'
  },  

  {
    id: 'sc_0096',
    title: 'UA',
    artist: 'ReTo',
    year: 2018,
    type: 'url',
    src: 'https://dash.cloudflare.com/3dcf76cc2fee43f77d679726c0ee1a59/r2/default/buckets/rapguesser/objects/UA.mp3/details?cursors=JTVCJTIyMS1KVGRDSlRJeWRpVXlNaVV6UVRFbE1rTWxNakp6ZEdGeWRFRm1kR1Z5SlRJeUpUTkJKVEl5VTJGdUpUSXdRVzVrY21WaGN5NXRjRE1sTWpJbE1rTWxNakoxZFdsa0pUSXlKVE5CSlRJeU4yVTJNbU0wWW1JM09HVmhaR1V4TWpjNVpEZzFZbVZrWTJZMU9EQm1OR1lsTWpJbE4wUSUzRCUyMIÜ1RA%3D%3D'
  },  

  {
    id: 'sc_0097',
    title: 'Wiking',
    artist: 'Sarius',
    year: 2018,
    type: 'url',
    src: 'https://dash.cloudflare.com/3dcf76cc2fee43f77d679726c0ee1a59/r2/default/buckets/rapguesser/objects/Wiking.mp3/details?cursors=JTVCJTIyMS1KVGRDSlRJeWRpVXlNaVV6UVRFbE1rTWxNakp6ZEdGeWRFRm1kR1Z5SlRJeUpUTkJKVEl5VTJGdUpUSXdRVzVrY21WaGN5NXRjRE1sTWpJbE1rTWxNakoxZFdsa0pUSXlKVE5CSlRJeU4yVTJNbU0wWW1JM09HVmhaR1V4TWpjNVpEZzFZbVZrWTJZMU9EQm1OR1lsTWpJbE4wUSUzRCUyMIÜ1RA%3D%3D'
  },  

  {
    id: 'sc_0098',
    title: 'candy.doll',
    artist: 'schafter',
    year: 2018,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/candy.doll.mp3'
  },  

  {
    id: 'sc_0099',
    title: 'dopóki się nie znüdzisz',
    artist: 'MIÜ, Zalia',
    year: 2025,
    type: 'url',
    src: 'https://pub-8247d6c452064a33b8f98ab2cc36e7e1.r2.dev/dop%C3%B3ki%20si%C4%99%20nie%20zn%C3%BCdzisz_spotdown.org.mp3'
  },  

  {
    id: 'sc_0100',
    title: 'ŚWIATTOMÓJPLACZABAW',
    artist: 'Quebonafide, Sentino',
    year: 2020,
    type: 'url',
    src: 'https://dash.cloudflare.com/3dcf76cc2fee43f77d679726c0ee1a59/r2/default/buckets/rapguesser/objects/%C5%9AWIATTOM%C3%93JPLACZABAW.mp3/details?cursors=JTVCJTIyMS1KVGRDSlRJeWRpVXlNaVV6UVRFbE1rTWxNakp6ZEdGeWRFRm1kR1Z5SlRJeUpUTkJKVEl5VTJGdUpUSXdRVzVrY21WaGN5NXRjRE1sTWpJbE1rTWxNakoxZFdsa0pUSXlKVE5CSlRJeU4yVTJNbU0wWW1JM09HVmhaR1V4TWpjNVpEZzFZbVZrWTJZMU9EQm1OR1lsTWpJbE4wUSUzRCUyMiU1RA%3D%3D'
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  }, 

    {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  }, 

    {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  }, 

    {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  }, 

    {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  }, 

    {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  }, 

    {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  }, 

    {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  }, 

    {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  }, 

    {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  }, 

    {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  }, 

    {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  }, 

    {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  }, 

    {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  }, 

    {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  }, 

    {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  },  

  {
    id: 'sc_0006',
    title: '',
    artist: '',
    year: 202,
    type: 'url',
    src: ''
  }, 
  
  // ── TUTAJ DODAWAJ SWOJE PIOSENKI ──
  // Wzór:
  // {
  //   id: 'sc_001',              <- unikalny identyfikator, zmień numer
  //   title: 'Tytuł Piosenki',
  //   artist: 'Nazwa Artysty',
  //   year: 2023,
  //   type: 'url',
  //   src: 'https://soundcloud.com/artysta/tytul'
  // },

];

// ── NIE MODYFIKUJ PONIŻEJ ──
if (typeof window !== 'undefined') {
  window.SONGS_DB = SONGS_DB;
}
