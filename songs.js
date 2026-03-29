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
    title: 'Fantazje',
    artist: 'MIÜ, Bedoes 2115, Pezet',
    year: 2026,
    type: 'sc',
    src: 'https://soundcloud.com/szydlik-jakub/MIÜe-ft-pezet-bedoes-2115'
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
    artist: 'Bedoes 2115, Lanek',
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
    title: 'Małe Krople',
    artist: 'Young Igi',
    year: 2022,
    type: 'sc',
    src: 'https://soundcloud.com/wiktor122/young-igi-ma-e-krople-1'
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
    title: 'Bruce',
    artist: '2115',
    year: 2022,
    type: 'sc',
    src: 'https://soundcloud.com/whj2ovmypucr/2115-bruce'
  },

  {
    id: 'sc_0022',
    title: '8 Kobiet (Remix)',
    artist: 'Taconafide, Bedoes 2115',
    year: 2018,
    type: 'sc',
    src: 'https://soundcloud.com/taconafide-2020/8-kobiet-remix-feat-bedoes'
  },

  {
    id: 'sc_0023',
    title: 'Alien',
    artist: 'Sobel',
    year: 2021,
    type: 'sc',
    src: 'https://soundcloud.com/user-232175118/sciezka-dzwiekowa-1'
  },

  {
    id: 'sc_0024',
    title: 'Zapytaj o mnie',
    artist: 'Sentino, Malik Montana',
    year: 2017,
    type: 'sc',
    src: 'https://soundcloud.com/user-232175118/sentino-x-malik-montana-zapytaj-o-mnie-prod-graczyk'
  },

  {
    id: 'sc_0025',
    title: 'Modelki',
    artist: 'Young Multi, Aleshen',
    year: 2019,
    type: 'sc',
    src: 'https://soundcloud.com/user-232175118/young-multi-fast-life-sharky-ft-aleshen-modelki'
  },

  {
    id: 'sc_0026',
    title: 'Janosik',
    artist: 'Bedoes 2115, Golec Uorkiesta, Kubi Producent',
    year: 2018,
    type: 'sc',
    src: 'https://soundcloud.com/user-834974050/bedoes-kubi-producent-ft-golec-uorkiestra-janosik'
  },

  {
    id: 'sc_0027',
    title: 'Morgan',
    artist: 'White 2115',
    year: 2020,
    type: 'sc',
    src: 'https://soundcloud.com/user-813643183/white-2115-morgan'
  },

  {
    id: 'sc_0028',
    title: 'Prometazyna',
    artist: 'SB Maffija',
    year: 2022,
    type: 'sc',
    src: 'https://soundcloud.com/user-401363216/sb-maffija-prometazyna'
  },

  {
    id: 'sc_0029',
    title: 'Święto ogródka',
    artist: 'Białas, White 2115',
    year: 2021,
    type: 'sc',
    src: 'https://soundcloud.com/user-439528941/bialas-white-2115-swieto-ogrodka'
  },  

  {
    id: 'sc_0030',
    title: 'Trapczan',
    artist: 'Żabson',
    year: 2021,
    type: 'sc',
    src: 'https://soundcloud.com/user-235359296-295267940/zabson-trapczan'
  },  

  {
    id: 'sc_0031',
    title: 'Delfin',
    artist: 'Bedoes 2115, Kubi Producent, Koldi, Young Multi, Beteo',
    year: 2018,
    type: 'sc',
    src: 'https://soundcloud.com/user-834974050/bedoes-kubi-producent-ft-koldi-young-multi-beteo-delfin'
  },  

  {
    id: 'sc_0032',
    title: '911',
    artist: 'Malik Montana, OG ENZO',
    year: 2024,
    type: 'sc',
    src: 'https://soundcloud.com/malik-montana-sc/911-og-enzo'
  },  

  {
    id: 'sc_0033',
    title: 'Ciapakwybujany',
    artist: 'GM2L, Malik Montana, Kazior, Alberto',
    year: 2023,
    type: 'sc',
    src: 'https://soundcloud.com/sebastian569211146/gm2l-ciapakwybujany'
  },  

  {
    id: 'sc_0034',
    title: '7 5 0',
    artist: 'Malik Montana, Milonair, Bonez MC',
    year: 2019,
    type: 'sc',
    src: 'https://soundcloud.com/user-13830273/7-5-0a'
  },  

  {
    id: 'sc_0035',
    title: 'Rundki',
    artist: 'Malik Montana, Diho, Alberto, Bibić',
    year: 2020,
    type: 'sc',
    src: 'https://soundcloud.com/user-975522081/malik-montana-rundki-feat-dihoalbertobibic-prodby-oil-beatz'
  },  

  {
    id: 'sc_0036',
    title: 'Robię Yeah',
    artist: 'Malik Montana, K Koke',
    year: 2019,
    type: 'sc',
    src: 'https://soundcloud.com/user-142672074/robie-yeah'
  },  

  {
    id: 'sc_0037',
    title: 'PUK PUK',
    artist: 'BROKIES,',
    year: 2025,
    type: 'sc',
    src: 'https://soundcloud.com/blyashblyat/brokies-puk-puk'
  },  

  {
    id: 'sc_0038',
    title: 'TRAPOLLO',
    artist: 'Żabson',
    year: 2018,
    type: 'sc',
    src: 'https://soundcloud.com/stasiu-opona/zabson-trapollo'
  },  

  {
    id: 'sc_0039',
    title: 'Superman',
    artist: 'Kubi Producent, Żabson, Young Multi',
    year: 2018,
    type: 'sc',
    src: 'https://soundcloud.com/yennefer-z-vengerbergu-w3/kubi-producent-superman-ft-zabson-young-multi'
  },  

  {
    id: 'sc_0040',
    title: 'Mów',
    artist: 'Otsochodzi',
    year: 2019,
    type: 'sc',
    src: 'https://soundcloud.com/otsochodzi-unofficial/otsochodzi-mow'
  },  

  {
    id: 'sc_0041',
    title: 'Piotruś Pan',
    artist: 'ReTo',
    year: 2016,
    type: 'sc',
    src: 'https://soundcloud.com/daniel_rozniata/reto-piotrus-pan-damn'
  },  

  {
    id: 'sc_0042',
    title: 'ICE',
    artist: 'Trill Pem',
    year: 2021,
    type: 'sc',
    src: 'https://soundcloud.com/user-835647821-522196098/trill-pem-ice-prod-xthauun-1'
  },  

  {
    id: 'sc_0043',
    title: 'Moonrock',
    artist: 'Kaz Bałagane, Szpaku',
    year: 2023,
    type: 'sc',
    src: 'https://soundcloud.com/sl3cu4lipli6/kaz-balagane-feat-szpaku-moonrock'
  },  

    {
    id: 'sc_0044',
    title: 'OXA',
    artist: 'Kizo, Pusher',
    year: 2021,
    type: 'sc',
    src: 'https://soundcloud.com/kapelaa/kizo-oxa-featpusher-2'
  },  

  {
    id: 'sc_0045',
    title: 'ŻYCIA SCHEMAT',
    artist: 'Gruby AK47, Zeju POG',
    year: 2022,
    type: 'sc',
    src: 'https://soundcloud.com/no0ne7/gruby-ak47-x-zeju-pog-ycia-schemat-edit-audio'
  },  

  {
    id: 'sc_0046',
    title: 'Alcantara',
    artist: 'Avi, Kukon',
    year: 2025,
    type: 'sc',
    src: 'https://soundcloud.com/igorblyatt/avi-x-kukon-alcantara'
  },  

  {
    id: 'sc_0047',
    title: 'HOOD ANGEL',
    artist: 'Żabson, Beteo, BENITO TUZZA',
    year: 2020,
    type: 'sc',
    src: 'https://soundcloud.com/yennefer-z-vengerbergu-w3/zabson-hood-angel-feat-beteo-benito-tuzza'
  },  

  {
    id: 'sc_0048',
    title: 'Wasabi',
    artist: 'Deemz, Reto, Żabson',
    year: 2021,
    type: 'sc',
    src: 'https://soundcloud.com/user-284385261/deemz-reto-zabson-wasabi-1'
  },  

  {
    id: 'sc_0049',
    title: '21 GRAMÓW',
    artist: 'Zeamsone',
    year: 2023,
    type: 'sc',
    src: 'https://soundcloud.com/jacobbb_toja/zeamsone-21-gramow-prod-zeamsone'
  },  

  {
    id: 'sc_0050',
    title: 'WINO',
    artist: 'Szpaku, Dziarma',
    year: 2021,
    type: 'sc',
    src: 'https://soundcloud.com/user-968333575/06-wino-feat-dziarma-2'
  },  

  {
    id: 'sc_0051',
    title: 'Ból',
    artist: 'Deemz, Białas, Szpaku',
    year: 2018,
    type: 'sc',
    src: 'https://soundcloud.com/yennefer-z-vengerbergu-w3/bol'
  },  

  {
    id: 'sc_0052',
    title: 'Choć nie widać na zewnątrz',
    artist: 'White 2115, Bedoes 2115',
    year: 2024,
    type: 'sc',
    src: 'https://soundcloud.com/yennefer-z-vengerbergu-w3/white-2115-choc-nie-widac-na-zewnatrz-ft-bedoes-2115'
  },  

  {
    id: 'sc_0053',
    title: 'FUTURAMA 3',
    artist: 'Quebonafide',
    year: 2024,
    type: 'sc',
    src: 'https://soundcloud.com/yennefer-z-vengerbergu-w3/futurama-3'
  },  

  {
    id: 'sc_0054',
    title: 'SOBOTA WIECZÓR',
    artist: 'Young Leosia, Jacuś',
    year: 2024,
    type: 'sc',
    src: 'https://soundcloud.com/yennefer-z-vengerbergu-w3/young-leosia-sobota-wieczor-ft-jacus'
  },  

  {
    id: 'sc_0055',
    title: 'Tesla Sport Carbon',
    artist: 'Żabson',
    year: 2023,
    type: 'sc',
    src: 'https://soundcloud.com/yennefer-z-vengerbergu-w3/zabson-tesla-sport-carbon'
  },  

  {
    id: 'sc_0056',
    title: 'Sidehoe',
    artist: 'Żabson, Bedoes 2115',
    year: 2023,
    type: 'sc',
    src: 'https://soundcloud.com/yennefer-z-vengerbergu-w3/sidehoe7'
  },  

  {
    id: 'sc_0057',
    title: 'Intro Do Płyty Mojego Życia',
    artist: 'Kuqe 2115',
    year: 2024,
    type: 'sc',
    src: 'https://soundcloud.com/yennefer-z-vengerbergu-w3/kuqe-2115-intro-do-plyty-mojego-zycia'
  },  

  {
    id: 'sc_0058',
    title: 'Double Match',
    artist: 'Young Leosia, bambi',
    year: 2024,
    type: 'sc',
    src: 'https://soundcloud.com/yennefer-z-vengerbergu-w3/young-leosia-bambi-double-match'
  }, 

    {
    id: 'sc_0059',
    title: 'CHINATOWN',
    artist: 'Kali, Paluch, Żabson',
    year: 2019,
    type: 'sc',
    src: 'https://soundcloud.com/yennefer-z-vengerbergu-w3/kali-chinatown-feat-paluch-zabson'
  },  

  {
    id: 'sc_0060',
    title: 'GUCCI MANE',
    artist: 'Deemz, Bedoes 2115, Young Multi',
    year: 2018,
    type: 'sc',
    src: 'https://soundcloud.com/yennefer-z-vengerbergu-w3/deemz-x-bedoes-x-young-multi-gucci-mane'
  },  

  {
    id: 'sc_0061',
    title: 'Supersize',
    artist: 'Żabson, Kronkel Dom',
    year: 2023,
    type: 'sc',
    src: 'https://soundcloud.com/yennefer-z-vengerbergu-w3/zabson-supersize-feat-kronkel-dom'
  },  

  {
    id: 'sc_0062',
    title: 'Jesień',
    artist: 'Quebonafide',
    year: 2020,
    type: 'sc',
    src: 'https://soundcloud.com/yennefer-z-vengerbergu-w3/quebonafide-jesien'
  },  

  {
    id: 'sc_0063',
    title: 'Anioł Stróż',
    artist: 'Szpaku',
    year: 2024,
    type: 'sc',
    src: 'https://soundcloud.com/gugu-label/aniol-stroz'
  },  

  {
    id: 'sc_0064',
    title: 'Nie boję się jutra',
    artist: 'ReTo',
    year: 2024,
    type: 'sc',
    src: 'https://soundcloud.com/mateusz-bramorski-138323202/reto-nie-boj-si-jutra-prod'
  },  

  {
    id: 'sc_0065',
    title: 'Menago',
    artist: 'PlanBe, Otsochodzi',
    year: 2019,
    type: 'sc',
    src: 'https://soundcloud.com/kacper-gawe-ko/planbe-ft-otsochodzi-menago'
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
