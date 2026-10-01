
// ═══ 1) IMPOSTAZIONI ═══
const WHATSAPP = "393272792246"; // numero con prefisso, senza +
const NEED_PRICE = true;


const CATALOGO = {
  // ████████████████████ CALCIO ████████████████████ (maglia, pantaloncini, completo)
  Calcio: {

  // ╔══════════ SERIE A ══════════
  "Serie A": [

    // ── ATALANTA
    { n:"Atalanta", c1:"#0a3a8c", c2:"#111111", tessuto:"100% cotone verificato",
      maglia:    { img:"magliaatalanta", prezzo:59.9, desc:"Maglia Atalanta nei colori Nero e azzurro , in 100% cotone verificato: morbida sulla pelle, naturale e resistente ai lavaggi. Ideale per tifare tutti i giorni.", offline:false },
      pantaloni: { img:"", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"magliaatalanta", prezzo:89.9, desc:"Maglia Atalanta nei colori Nero e azzurro , in 100% cotone verificato: morbida sulla pelle, naturale e resistente ai lavaggi. Ideale per tifare tutti i giorni.", offline:false },
    },

    // ── BOLOGNA
    { n:"Bologna", c1:"#0a3a8c", c2:"#111111", tessuto:"100% cotone verificato",
      maglia:    { img:"magliabologna", prezzo:59.9, desc:"Maglia Bologna nei colori Blu rosso, in 100% cotone verificato: morbida sulla pelle, naturale e resistente ai lavaggi. Ideale per tifare tutti i giorni.", offline:false },
      pantaloni: { img:"", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"magliabologna", prezzo:89.9, desc:"Maglia Bologna nei colori Blu rosso, in 100% cotone verificato: morbida sulla pelle, naturale e resistente ai lavaggi. Ideale per tifare tutti i giorni.", offline:false },
    },

    // ── CAGLIARI
    { n:"Cagliari", c1:"#0a3a8c", c2:"#111111", tessuto:"100% cotone verificato",
      maglia:    { img:"magliacagliari", prezzo:59.9, desc:"Maglia Cagliari nei colori Rosso blu, in 100% cotone verificato: morbida sulla pelle, naturale e resistente ai lavaggi. Ideale per tifare tutti i giorni.", offline:false },
      pantaloni: { img:"", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"magliacagliari", prezzo:89.9, desc:"Maglia Cagliari nei colori Rosso blu, in 100% cotone verificato: morbida sulla pelle, naturale e resistente ai lavaggi. Ideale per tifare tutti i giorni.", offline:false },
    },

    // ── COMO
    { n:"Como", c1:"#0a3a8c", c2:"#111111", tessuto:"100% cotone verificato",
      maglia:    { img:"magliacomo", prezzo:59.9, desc:"Maglia Como nei colori bianca azzurra, in 100% cotone verificato: morbida sulla pelle, naturale e resistente ai lavaggi. Ideale per tifare tutti i giorni.", offline:false },
      pantaloni: { img:"", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"magliacomo", prezzo:89.9, desc:"Maglia Como nei colori bianca azzurra, in 100% cotone verificato: morbida sulla pelle, naturale e resistente ai lavaggi. Ideale per tifare tutti i giorni.", offline:false },
    },

    // ── FIORENTINA
    { n:"Fiorentina", c1:"#5b2a86", c2:"#ffffff", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── FROSINONE
    { n:"Frosinone", c1:"#f5d000", c2:"#0a4ea3", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── GENOA
    { n:"Genoa", c1:"#b31b34", c2:"#0b2a5b", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── INTER
    { n:"Inter", c1:"#0a3a8c", c2:"#111111", tessuto:"100% cotone verificato",
      maglia:    { img:"intermaglia", prezzo:59.9, desc:"Maglia Inter nei colori nerazzurri, in 100% cotone verificato: morbida sulla pelle, naturale e resistente ai lavaggi. Ideale per tifare tutti i giorni.", offline:false },
      pantaloni: { img:"", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"intermaglia", prezzo:89.9, desc:"Maglia Inter nei colori nerazzurri, in 100% cotone verificato: morbida sulla pelle, naturale e resistente ai lavaggi. Ideale per tifare tutti i giorni.", offline:false },
    },

    // ── JUVENTUS
    { n:"Juventus", c1:"#f4f4f4", c2:"#111111", tessuto:"",
      maglia:    { img:"magliajuve", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"magliajuve", prezzo:null, desc:"", offline:false },
    },

    // ── LAZIO
    { n:"Lazio", c1:"#87ceeb", c2:"#ffffff", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── LECCE
    { n:"Lecce", c1:"#f2c500", c2:"#d0021b", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── MILAN
    { n:"Milan", c1:"#d0021b", c2:"#111111", tessuto:"",
      maglia:    { img:"magliamilan", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"magliamilan", prezzo:null, desc:"", offline:false },
    },

    // ── MONZA
    { n:"Monza", c1:"#d0021b", c2:"#ffffff", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── NAPOLI
    { n:"Napoli", c1:"#1f8fd6", c2:"#ffffff", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── PARMA
    { n:"Parma", c1:"#f4f4f4", c2:"#ffd60a", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── ROMA
    { n:"Roma", c1:"#8b1e2d", c2:"#f5a623", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── SASSUOLO
    { n:"Sassuolo", c1:"#00a651", c2:"#111111", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── TORINO
    { n:"Torino", c1:"#7a1f2b", c2:"#ffffff", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── UDINESE
    { n:"Udinese", c1:"#f4f4f4", c2:"#111111", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── VENEZIA
    { n:"Venezia", c1:"#111111", c2:"#f58220", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },
  ],

  // ╔══════════ PREMIER LEAGUE ══════════
  "Premier League": [

    // ── ARSENAL
    { n:"Arsenal", c1:"#d0021b", c2:"#ffffff", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── CHELSEA
    { n:"Chelsea", c1:"#1c3f94", c2:"#ffffff", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── LIVERPOOL
    { n:"Liverpool", c1:"#c8102e", c2:"#ffffff", tessuto:"",
      maglia:    { img:"maglialiver", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"maglialiver", prezzo:null, desc:"", offline:false },
    },

    // ── MANCHESTER CITY
    { n:"Manchester City", c1:"#6cabdd", c2:"#ffffff", tessuto:"",
      maglia:    { img:"magliamc", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"magliamc", prezzo:null, desc:"", offline:false },
    },

    // ── MANCHESTER UNITED
    { n:"Manchester United", c1:"#da291c", c2:"#111111", tessuto:"",
      maglia:    { img:"magliamu", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"magliamu", prezzo:null, desc:"", offline:false },
    },

    // ── TOTTENHAM
    { n:"Tottenham", c1:"#f4f4f4", c2:"#132257", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── NEWCASTLE
    { n:"Newcastle", c1:"#111111", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── ASTON VILLA
    { n:"Aston Villa", c1:"#670e36", c2:"#95bfe5", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },
  ],

  // ╔══════════ LALIGA ══════════
  "LaLiga": [

    // ── BARCELLONA
    { n:"Barcellona", c1:"#a50044", c2:"#004d98", tessuto:"",
      maglia:    { img:"magliabarcellona", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"magliabarcellona", prezzo:null, desc:"", offline:false },
    },

    // ── REAL MADRID
    { n:"Real Madrid", c1:"#f4f4f4", c2:"#febe10", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── ATLETICO MADRID
    { n:"Atletico Madrid", c1:"#cb3524", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── SIVIGLIA
    { n:"Siviglia", c1:"#f4f4f4", c2:"#d0021b", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── VALENCIA
    { n:"Valencia", c1:"#f4f4f4", c2:"#111111", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── ATHLETIC BILBAO
    { n:"Athletic Bilbao", c1:"#d0021b", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── REAL SOCIEDAD
    { n:"Real Sociedad", c1:"#0067b1", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── VILLARREAL
    { n:"Villarreal", c1:"#ffe667", c2:"#005187", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },
  ],

  // ╔══════════ BUNDESLIGA ══════════
  "Bundesliga": [

    // ── BAYERN MONACO
    { n:"Bayern Monaco", c1:"#dc052d", c2:"#ffffff", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── BORUSSIA DORTMUND
    { n:"Borussia Dortmund", c1:"#fde100", c2:"#111111", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── BAYER LEVERKUSEN
    { n:"Bayer Leverkusen", c1:"#e32221", c2:"#111111", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── RB LIPSIA
    { n:"RB Lipsia", c1:"#f4f4f4", c2:"#dd0741", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── EINTRACHT FRANCOFORTE
    { n:"Eintracht Francoforte", c1:"#111111", c2:"#e1000f", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },
  ],

  // ╔══════════ LIGUE 1 ══════════
  "Ligue 1": [

    // ── PSG
    { n:"PSG", c1:"#004170", c2:"#da291c", tessuto:"",
      maglia:    { img:"magliapsg", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"magliapsg", prezzo:null, desc:"", offline:false },
    },

    // ── MARSIGLIA
    { n:"Marsiglia", c1:"#f4f4f4", c2:"#2faee0", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── LIONE
    { n:"Lione", c1:"#f4f4f4", c2:"#1c3f94", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── MONACO
    { n:"Monaco", c1:"#e51b22", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },
  ],

  // ╔══════════ ALTRI CAMPIONATI ══════════
  "Altri campionati": [

    // ── BENFICA
    { n:"Benfica", c1:"#e30613", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── PORTO
    { n:"Porto", c1:"#003c8f", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── SPORTING CP
    { n:"Sporting CP", c1:"#008057", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── AJAX
    { n:"Ajax", c1:"#f4f4f4", c2:"#d2122e", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── GALATASARAY
    { n:"Galatasaray", c1:"#ffa500", c2:"#a90432", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── CELTIC
    { n:"Celtic", c1:"#16974b", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },
  ],

  // ╔══════════ QATAR ══════════
  "Qatar": [

    // ── AL SADD
    { n:"Al Sadd", c1:"#f4f4f4", c2:"#8a1538", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── AL DUHAIL
    { n:"Al Duhail", c1:"#d0021b", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── AL GHARAFA
    { n:"Al Gharafa", c1:"#f4f4f4", c2:"#1c3f94", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── AL RAYYAN
    { n:"Al Rayyan", c1:"#111111", c2:"#d0021b", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── AL ARABI
    { n:"Al Arabi", c1:"#f4f4f4", c2:"#b8860b", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── AL WAKRAH
    { n:"Al Wakrah", c1:"#f4c20d", c2:"#111111", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── QATAR SC
    { n:"Qatar SC", c1:"#8a1538", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── AL AHLI DOHA
    { n:"Al Ahli Doha", c1:"#1c6b3a", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── UMM SALAL
    { n:"Umm Salal", c1:"#f4c20d", c2:"#8a1538", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── AL SHAMAL
    { n:"Al Shamal", c1:"#d0021b", c2:"#111111", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── AL KHOR
    { n:"Al Khor", c1:"#f4f4f4", c2:"#1c3f94", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── AL SHAHANIYA
    { n:"Al Shahaniya", c1:"#1c3f94", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },
  ],

  // ╔══════════ NAZIONALI ══════════
  "Nazionali": [

    // ── ITALIA
    { n:"Italia", c1:"#0a4ea3", c2:"#ffffff", tessuto:"",
      maglia:    { img:"magliaitalia", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"magliaitalia", prezzo:null, desc:"", offline:false },
    },

    // ── FRANCIA
    { n:"Francia", c1:"#14308f", c2:"#ffffff", tessuto:"",
      maglia:    { img:"magliafrancia", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"magliafrancia", prezzo:null, desc:"", offline:false },
    },

    // ── SPAGNA
    { n:"Spagna", c1:"#c60b1e", c2:"#ffc400", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── GERMANIA
    { n:"Germania", c1:"#f4f4f4", c2:"#111111", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── INGHILTERRA
    { n:"Inghilterra", c1:"#f4f4f4", c2:"#14308f", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── PORTOGALLO
    { n:"Portogallo", c1:"#8a1538", c2:"#006600", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── OLANDA
    { n:"Olanda", c1:"#f77f00", c2:"#111111", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── BELGIO
    { n:"Belgio", c1:"#d0021b", c2:"#111111", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── CROAZIA
    { n:"Croazia", c1:"#f4f4f4", c2:"#d0021b", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── SVIZZERA
    { n:"Svizzera", c1:"#d0021b", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── DANIMARCA
    { n:"Danimarca", c1:"#c8102e", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── POLONIA
    { n:"Polonia", c1:"#f4f4f4", c2:"#dc143c", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── AUSTRIA
    { n:"Austria", c1:"#d0021b", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── TURCHIA
    { n:"Turchia", c1:"#e30a17", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── SVEZIA
    { n:"Svezia", c1:"#fecc00", c2:"#006aa7", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── NORVEGIA
    { n:"Norvegia", c1:"#ba0c2f", c2:"#00205b", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── SCOZIA
    { n:"Scozia", c1:"#0b2a5b", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── SERBIA
    { n:"Serbia", c1:"#c6363c", c2:"#0c4076", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── UCRAINA
    { n:"Ucraina", c1:"#ffd500", c2:"#0057b7", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── BRASILE
    { n:"Brasile", c1:"#ffdf00", c2:"#009c3b", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── ARGENTINA
    { n:"Argentina", c1:"#75aadb", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── URUGUAY
    { n:"Uruguay", c1:"#5cbfeb", c2:"#111111", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── COLOMBIA
    { n:"Colombia", c1:"#fcd116", c2:"#003893", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── ECUADOR
    { n:"Ecuador", c1:"#fcd116", c2:"#034ea2", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── MESSICO
    { n:"Messico", c1:"#006847", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── USA
    { n:"USA", c1:"#f4f4f4", c2:"#0a3161", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── CANADA
    { n:"Canada", c1:"#d80621", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── MAROCCO
    { n:"Marocco", c1:"#c1272d", c2:"#006233", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── SENEGAL
    { n:"Senegal", c1:"#f4f4f4", c2:"#00853f", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── NIGERIA
    { n:"Nigeria", c1:"#008751", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── EGITTO
    { n:"Egitto", c1:"#ce1126", c2:"#111111", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── ALGERIA
    { n:"Algeria", c1:"#f4f4f4", c2:"#006233", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── TUNISIA
    { n:"Tunisia", c1:"#e70013", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── COSTA D'AVORIO
    { n:"Costa d'Avorio", c1:"#f77f00", c2:"#009e60", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── GHANA
    { n:"Ghana", c1:"#f4f4f4", c2:"#006b3f", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── CAMERUN
    { n:"Camerun", c1:"#007a5e", c2:"#ce1126", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── GIAPPONE
    { n:"Giappone", c1:"#1c3f94", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── COREA DEL SUD
    { n:"Corea del Sud", c1:"#c60c30", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── AUSTRALIA
    { n:"Australia", c1:"#ffcd00", c2:"#00843d", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── IRAN
    { n:"Iran", c1:"#f4f4f4", c2:"#239f40", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── ARABIA SAUDITA
    { n:"Arabia Saudita", c1:"#006c35", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── QATAR
    { n:"Qatar", c1:"#8a1538", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },
  ],
  },
  // ████████████████████ F1 ████████████████████ (maglia, pantaloni, completo)
  F1: {

  // ╔══════════ SCUDERIE 2026 ══════════
  "Scuderie 2026": [

    // ── RED BULL RACING
    { n:"Red Bull Racing", c1:"#14307f", c2:"#d0021b", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── FERRARI
    { n:"Ferrari", c1:"#d40000", c2:"#fff200", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── MERCEDES
    { n:"Mercedes", c1:"#00d2be", c2:"#111111", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── MCLAREN
    { n:"McLaren", c1:"#ff8000", c2:"#111111", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── ASTON MARTIN
    { n:"Aston Martin", c1:"#006f62", c2:"#cedc00", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── ALPINE
    { n:"Alpine", c1:"#0093cc", c2:"#ff87bc", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── WILLIAMS
    { n:"Williams", c1:"#0a3a8c", c2:"#00a3e0", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── RACING BULLS
    { n:"Racing Bulls", c1:"#6692ff", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── HAAS
    { n:"Haas", c1:"#f4f4f4", c2:"#d0021b", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── AUDI
    { n:"Audi", c1:"#111111", c2:"#f50537", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── CADILLAC
    { n:"Cadillac", c1:"#111111", c2:"#c0c0c0", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },
  ],
  },
  // ████████████████████ NBA ████████████████████ (canotta, shorts, completo)
  NBA: {

  // ╔══════════ EASTERN CONFERENCE ══════════
  "Eastern Conference": [

    // ── ATLANTA HAWKS
    { n:"Atlanta Hawks", c1:"#e03a3e", c2:"#c1d32f", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── BOSTON CELTICS
    { n:"Boston Celtics", c1:"#007a33", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── BROOKLYN NETS
    { n:"Brooklyn Nets", c1:"#111111", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── CHARLOTTE HORNETS
    { n:"Charlotte Hornets", c1:"#1d1160", c2:"#00788c", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── CHICAGO BULLS
    { n:"Chicago Bulls", c1:"#ce1141", c2:"#111111", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── CLEVELAND CAVALIERS
    { n:"Cleveland Cavaliers", c1:"#860038", c2:"#fdbb30", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── DETROIT PISTONS
    { n:"Detroit Pistons", c1:"#c8102e", c2:"#1d42ba", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── INDIANA PACERS
    { n:"Indiana Pacers", c1:"#002d62", c2:"#fdbb30", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── MIAMI HEAT
    { n:"Miami Heat", c1:"#98002e", c2:"#f9a01b", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── MILWAUKEE BUCKS
    { n:"Milwaukee Bucks", c1:"#00471b", c2:"#eee1c6", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── NEW YORK KNICKS
    { n:"New York Knicks", c1:"#006bb6", c2:"#f58426", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── ORLANDO MAGIC
    { n:"Orlando Magic", c1:"#0077c0", c2:"#111111", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── PHILADELPHIA 76ERS
    { n:"Philadelphia 76ers", c1:"#006bb6", c2:"#ed174c", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── TORONTO RAPTORS
    { n:"Toronto Raptors", c1:"#ce1141", c2:"#111111", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── WASHINGTON WIZARDS
    { n:"Washington Wizards", c1:"#002b5c", c2:"#e31837", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },
  ],

  // ╔══════════ WESTERN CONFERENCE ══════════
  "Western Conference": [

    // ── DALLAS MAVERICKS
    { n:"Dallas Mavericks", c1:"#00538c", c2:"#002b5e", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── DENVER NUGGETS
    { n:"Denver Nuggets", c1:"#0e2240", c2:"#fec524", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── GOLDEN STATE WARRIORS
    { n:"Golden State Warriors", c1:"#1d428a", c2:"#ffc72c", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── HOUSTON ROCKETS
    { n:"Houston Rockets", c1:"#ce1141", c2:"#111111", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── LA CLIPPERS
    { n:"LA Clippers", c1:"#c8102e", c2:"#1d428a", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── LOS ANGELES LAKERS
    { n:"Los Angeles Lakers", c1:"#552583", c2:"#fdb927", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── MEMPHIS GRIZZLIES
    { n:"Memphis Grizzlies", c1:"#5d76a9", c2:"#12173f", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── MINNESOTA TIMBERWOLVES
    { n:"Minnesota Timberwolves", c1:"#0c2340", c2:"#236192", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── NEW ORLEANS PELICANS
    { n:"New Orleans Pelicans", c1:"#0c2340", c2:"#c8102e", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── OKLAHOMA CITY THUNDER
    { n:"Oklahoma City Thunder", c1:"#007ac1", c2:"#ef3b24", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── PHOENIX SUNS
    { n:"Phoenix Suns", c1:"#1d1160", c2:"#e56020", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── PORTLAND TRAIL BLAZERS
    { n:"Portland Trail Blazers", c1:"#e03a3e", c2:"#111111", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── SACRAMENTO KINGS
    { n:"Sacramento Kings", c1:"#5a2d81", c2:"#63727a", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── SAN ANTONIO SPURS
    { n:"San Antonio Spurs", c1:"#c4ced4", c2:"#111111", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── UTAH JAZZ
    { n:"Utah Jazz", c1:"#002b5c", c2:"#f9a01b", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },
  ],
  },
  // ████████████████████ TUTE ████████████████████ (giacca, pantalone, tuta completa)
  Tute: {

  // ╔══════════ MODELLI ══════════
  "Modelli": [

    // ── ALLENAMENTO PRO
    { n:"Allenamento Pro", c1:"#1f2937", c2:"#00f0ff", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── RAPPRESENTANZA
    { n:"Rappresentanza", c1:"#14532d", c2:"#ffffff", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },
  ],

  // ╔══════════ CLUB ══════════
  "Club": [

    // ── INTER
    { n:"Inter", c1:"#0a3a8c", c2:"#111111", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── JUVENTUS
    { n:"Juventus", c1:"#f4f4f4", c2:"#111111", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── MILAN
    { n:"Milan", c1:"#d0021b", c2:"#111111", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── NAPOLI
    { n:"Napoli", c1:"#1f8fd6", c2:"#ffffff", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── ROMA
    { n:"Roma", c1:"#8b1e2d", c2:"#f5a623", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── LAZIO
    { n:"Lazio", c1:"#87ceeb", c2:"#ffffff", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── ATALANTA
    { n:"Atalanta", c1:"#0a3a8c", c2:"#111111", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── FIORENTINA
    { n:"Fiorentina", c1:"#5b2a86", c2:"#ffffff", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── ARSENAL
    { n:"Arsenal", c1:"#d0021b", c2:"#ffffff", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── CHELSEA
    { n:"Chelsea", c1:"#1c3f94", c2:"#ffffff", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── LIVERPOOL
    { n:"Liverpool", c1:"#c8102e", c2:"#ffffff", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── MANCHESTER CITY
    { n:"Manchester City", c1:"#6cabdd", c2:"#ffffff", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── MANCHESTER UNITED
    { n:"Manchester United", c1:"#da291c", c2:"#111111", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── TOTTENHAM
    { n:"Tottenham", c1:"#f4f4f4", c2:"#132257", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── BARCELLONA
    { n:"Barcellona", c1:"#a50044", c2:"#004d98", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── REAL MADRID
    { n:"Real Madrid", c1:"#f4f4f4", c2:"#febe10", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── ATLETICO MADRID
    { n:"Atletico Madrid", c1:"#cb3524", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── BAYERN MONACO
    { n:"Bayern Monaco", c1:"#dc052d", c2:"#ffffff", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── BORUSSIA DORTMUND
    { n:"Borussia Dortmund", c1:"#fde100", c2:"#111111", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── PSG
    { n:"PSG", c1:"#004170", c2:"#da291c", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },
  ],

  // ╔══════════ NAZIONALI ══════════
  "Nazionali": [

    // ── ITALIA
    { n:"Italia", c1:"#0a4ea3", c2:"#ffffff", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── FRANCIA
    { n:"Francia", c1:"#14308f", c2:"#ffffff", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── SPAGNA
    { n:"Spagna", c1:"#c60b1e", c2:"#ffc400", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── GERMANIA
    { n:"Germania", c1:"#f4f4f4", c2:"#111111", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── INGHILTERRA
    { n:"Inghilterra", c1:"#f4f4f4", c2:"#14308f", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── PORTOGALLO
    { n:"Portogallo", c1:"#8a1538", c2:"#006600", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── BRASILE
    { n:"Brasile", c1:"#ffdf00", c2:"#009c3b", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── ARGENTINA
    { n:"Argentina", c1:"#75aadb", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── OLANDA
    { n:"Olanda", c1:"#f77f00", c2:"#111111", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },

    // ── QATAR
    { n:"Qatar", c1:"#8a1538", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"", prezzo:null, desc:"", offline:false },
      pantaloni: { img:"", prezzo:null, desc:"", offline:false },
      completo:  { img:"", prezzo:null, desc:"", offline:false },
    },
  ],
  },
};

// ═══ 4) ARTICOLI SINGOLI (cappellini, felpe, accessori…) ═══
// Copia la riga di esempio (togli //), cambia i valori. cat: "Calcio", "F1", "NBA" o "Tute".
const ALTRI = [
  // { cat:"F1", name:"Cappellino Ferrari", desc:"Cappellino team", img:"", prezzo:null, tessuto:"", d:"", offline:false },
];

// ═══ 5) CODICE (non toccare) ═══
const NOMI = {
  Calcio:{c:"Completo",m:"Maglia",p:"Pantaloni",dc:"Maglia + pantaloncini"},
  F1:{c:"Completo",m:"Maglia",p:"Pantaloni",dc:"Maglia + pantaloni"},
  NBA:{c:"Completo",m:"Canotta",p:"Shorts",dc:"Canotta + shorts"},
  Tute:{c:"Tuta",m:"Giacca",p:"Pantalone",dc:"Giacca + pantalone"}};
const TEAMS = Object.entries(CATALOGO).flatMap(([cat, gr]) => Object.entries(gr).flatMap(([lg, arr]) => arr.map(t => ({...t, cat, lg}))));
const KC = ["Calcio","F1","NBA","Tute"], TYPES = ["Completo","Solo maglia","Solo pantaloni","Tutti"];
const KEYS = {"Completo":"completo","Solo maglia":"maglia","Solo pantaloni":"pantaloni"};
function teamItem(t, i, kind){
  const s = t[KEYS[kind]] || {}, cp = (t.completo && t.completo.prezzo) || 84.9, N = NOMI[t.cat];
  const price = s.prezzo || +((kind==="Completo") ? cp : Math.round(cp*(kind==="Solo maglia"?.7:.45))-0.1).toFixed(2);
  const w = kind==="Completo" ? N.c : kind==="Solo maglia" ? N.m : N.p;
  return {id:(100+i)*(kind==="Completo"?1:10)+({"Solo maglia":1,"Solo pantaloni":2}[kind]||0),
    cat:t.cat, team:t.n, lg:t.lg, kind, base:100+i, name:w+" "+t.n, desc:kind==="Completo"?N.dc:kind,
    price, c1:t.c1, c2:t.c2, img:s.img||undefined, d:s.desc||undefined, tess:t.tessuto||undefined,
    ok:!s.offline && !!s.img && (!NEED_PRICE || !!s.prezzo)};
}
const PRODUCTS = ALTRI.map((a,j) => ({id:1+j, cat:a.cat, kind:"Completo", name:a.name, desc:a.desc||"", price:a.prezzo||0,
  c1:a.c1||"#1f2937", c2:a.c2||"#00f0ff", img:a.img||undefined, d:a.d||undefined, tess:a.tessuto||undefined,
  ok:!a.offline && !!a.img && (!NEED_PRICE || !!a.prezzo)}));
PRODUCTS.push(...TEAMS.map((t,i) => teamItem(t,i,"Completo")));
TEAMS.forEach((t,i) => PRODUCTS.push(teamItem(t,i,"Solo maglia"), teamItem(t,i,"Solo pantaloni")));
const SIZES = ["S","M","L","XL","XXL"], CATS = ["Tutti","Calcio","F1","NBA","Tute"];
// ==========================
const $ = s => document.querySelector(s);
const fmt = n => n.toFixed(2).replace(".", ",") + " €";
let q = "", so = "";
let cart = [], kind = "Completo", cat = "Tutti", team = "Tutte", lg = "Tutte";
const find = id => PRODUCTS.find(p => p.id === id);
const wa = t => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(t)}`;
const pants = p => `<svg viewBox="0 0 120 120" aria-hidden="true"><path d="M30 18h60l6 84H66L60 54l-6 48H24z" fill="${p.c1}" stroke="${p.c2}" stroke-width="3" stroke-linejoin="round"/><rect x="30" y="18" width="60" height="9" fill="${p.c2}" opacity=".85"/></svg>`;
const art = p => p.kind==="Solo pantaloni" ? pants(p) : jersey(p);
const jersey = p => `<svg viewBox="0 0 120 120" aria-hidden="true"><path d="M40 12l-28 16 10 22 14-6v58h48V44l14 6 10-22L80 12c-4 8-12 12-20 12s-16-4-20-12z" fill="${p.c1}" stroke="${p.c2}" stroke-width="3" stroke-linejoin="round"/><rect x="42" y="70" width="36" height="8" rx="2" fill="${p.c2}" opacity=".85"/></svg>`;

const norm = s => (s||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");
function list(){
  let r;
  if (q) { const w = norm(q).split(/\s+/).filter(Boolean);
    r = PRODUCTS.filter(p => { const h = norm([p.name,p.team,p.lg,p.cat,p.kind,p.desc].join(" ")); return w.every(x => h.includes(x)); });
  } else r = PRODUCTS.filter(p => (cat==="Tutti" ? (!p.kind || p.kind==="Completo") : (p.cat===cat && (kind==="Tutti" || p.kind===kind))) && (cat==="Tutti" || ((lg==="Tutte" || p.lg===lg) && (team==="Tutte" || p.team===team))));
  if (so === "pa") r = [...r].sort((a,b) => a.price-b.price);
  if (so === "pd") r = [...r].sort((a,b) => b.price-a.price);
  if (so === "az") r = [...r].sort((a,b) => a.name.localeCompare(b.name,"it"));
  if (!so) r = [...r.filter(p => p.ok), ...r.filter(p => !p.ok)];
  return r;
}
const ICON = {Tutti:"🛍️",Calcio:"⚽",F1:"🏎️",NBA:"🏀",Tute:"🧥"};
function renderFilters(){
  $("#flt").innerHTML = CATS.map(c => `<button class="chip${c===cat?" on":""}" data-c="${c}" type="button">${ICON[c]} ${c}</button>`).join("");
  $("#kf").innerHTML = KC.includes(cat) ? TYPES.map(n => `<button class="chip${n===kind?" on":""}" data-k="${n}" type="button">${n}</button>`).join("") : "";
  const GR = [...new Set(TEAMS.filter(t => t.cat===cat).map(t => t.lg))], multi = GR.length > 1;
  $("#lf").innerHTML = multi ? ["Tutte",...GR].map(n => `<button class="chip sm${n===lg?" on":""}" data-l="${n}" type="button">${n}</button>`).join("") : "";
  $("#tf").innerHTML = KC.includes(cat) && (!multi || lg!=="Tutte") ? ["Tutte",...TEAMS.filter(t => t.cat===cat && (!multi || t.lg===lg)).map(t => t.n)].map(n => `<button class="chip sm${n===team?" on":""}" data-t="${n}" type="button">${n}</button>`).join("") : "";
  rows();
}
function rows(){["kf","lf","tf"].forEach(id => {const el = $("#"+id); el.parentElement.style.display = el.innerHTML ? "" : "none"})}
const EXT = ["png","jpg","jpeg","webp"];
function imgNext(el){const i=+el.dataset.i+1;if(i<EXT.length){el.dataset.i=i;el.src=el.dataset.img+"."+EXT[i]}else{el.outerHTML=el.dataset.fb}}
function renderGrid(){
  const L = list(), n = L.length;
  $("#rc").textContent = (q ? `${n} risultat${n===1?"o":"i"} per «${q}»` : `${n} articol${n===1?"o":"i"}`);
  if (!n) { $("#pg").innerHTML = '<p class="empty">Nessun articolo trovato. <button class="chip sm" data-reset="1" type="button">Azzera filtri</button></p>'; return; }
  $("#pg").innerHTML = L.map(p => `
  <article class="pr${p.ok?"":" soldout"}">
    <div class="pp${p.ok?"":" out"}" data-open="${p.id}" style="background:linear-gradient(145deg,${p.c1}33,${p.c2}18)"><button class="ib" data-open="${p.id}" type="button" aria-label="Informazioni su ${p.name}" title="Informazioni">i</button>${!p.ok?'<span class="pt out">TERMINATI</span>':p.tag?`<span class="pt">${p.tag}</span>`:""}${p.img?`<img src="${p.img}.png" data-img="${p.img}" data-i="0" data-fb='${art(p)}' alt="${p.name}" onerror="imgNext(this)">`:art(p)}</div>
    <div class="pi"><div><div class="pn" data-open="${p.id}">${p.name}</div><div class="pd">${p.cat} · ${p.desc}</div><div class="pd">${info(p).tess}</div></div>
      <div class="prow"><span class="pv">${fmt(p.price)}</span>
        <select id="s${p.id}" aria-label="Taglia ${p.name}"${p.ok?"":" disabled"}>${SIZES.map(s=>`<option${s==="L"?" selected":""}>${s}</option>`).join("")}</select></div>
      ${p.ok?`<button class="bp" data-add="${p.id}" type="button">Aggiungi al carrello</button>`:`<button class="bp" type="button" disabled>Terminato</button>`}</div>
  </article>`).join("");
}
function renderCart(){
  $("#count").textContent = cart.reduce((a,i) => a+i.q, 0);
  $("#items").innerHTML = cart.length ? cart.map((i,k) => {const p=find(i.id);return `
    <div class="it"><div><b>${p.name}</b><small>Taglia ${i.size}</small>
    <div class="qty"><button data-m="${k}" type="button" aria-label="Meno">−</button>${i.q}<button data-p="${k}" type="button" aria-label="Più">+</button></div></div>
    <b>${fmt(p.price*i.q)}</b></div>`}).join("") : `<p class="empty">Il carrello è vuoto. Scegli un completo dal catalogo.</p>`;
  const sub = cart.reduce((a,i) => a+find(i.id).price*i.q, 0);
  const ship = !cart.length || sub >= 80 ? 0 : 5.9;
  $("#total").textContent = fmt(sub+ship);
  const lines = cart.map(i => `- ${i.q}x ${find(i.id).name} (taglia ${i.size}) ${fmt(find(i.id).price*i.q)}`);
  const msg = `Ciao, vorrei ordinare:\n${lines.join("\n")}\nSpedizione: ${ship?fmt(ship):"gratuita"}\nTotale: ${fmt(sub+ship)}`;
  $("#checkout").href = cart.length ? wa(msg) : "#";
  $("#checkout").classList.toggle("off", !cart.length);
}

// ===== Scheda prodotto =====
document.body.insertAdjacentHTML("beforeend", '<div id="pd" role="dialog" aria-modal="true" aria-label="Scheda prodotto"></div>');
const CURA = "Lavaggio a 30° al rovescio, non candeggiare, non stirare sulle stampe";
function info(p){
  const tm = p.team || p.name, k = p.kind || "Completo";
  let tess = "Poliestere tecnico traspirante", vest = "Regular fit, vestibilità sportiva", inc = p.desc, desc;
  if (p.cat === "Calcio") {
    tess = "100% poliestere traspirante, asciugatura rapida";
    inc = {"Completo":"Maglia + pantaloncini","Solo maglia":"Solo maglia","Solo pantaloni":"Solo pantaloncini"}[k];
    desc = {"Completo":`Completo ${tm}: maglia e pantaloncini coordinati nei colori della squadra, pensati per giocare e per tifare.`,
            "Solo maglia":`Maglia ${tm} nei colori della squadra, leggera e traspirante. Si abbina ai tuoi pantaloncini.`,
            "Solo pantaloni":`Pantaloncini ${tm} nei colori della squadra, leggeri e con vita elasticizzata.`}[k];
  } else if (p.cat === "NBA") {
    tess = "100% poliestere mesh traspirante"; vest = "Taglio ampio da basket";
    inc = {"Completo":"Canotta + shorts","Solo maglia":"Solo canotta","Solo pantaloni":"Solo shorts"}[k];
    desc = `${p.name}: tessuto mesh leggero con ottima ventilazione, adatto al campo e alla vita di tutti i giorni.`;
  } else if (p.cat === "Tute") {
    tess = /Rappresentanza/.test(p.name) ? "Poliestere lucido tipo acetato" : "Poliestere con interno felpato leggero";
    inc = {"Completo":p.desc,"Solo maglia":"Solo giacca/felpa","Solo pantaloni":"Solo pantalone"}[k];
    desc = `${p.name}: comoda e resistente, pensata per allenamento e tempo libero.`;
  } else {
    tess = "Poliestere / softshell antivento";
    desc = `${p.name}: replica in stile team per vivere la Formula 1, comoda tutti i giorni.`;
  }
  return {desc: p.d || desc, tess: p.tess || tess, vest, inc, cura: CURA};
}
function pic(p){return p.img ? `<img src="${p.img}.png" data-img="${p.img}" data-i="0" data-fb='${art(p)}' alt="${p.name}" onerror="imgNext(this)">` : art(p)}
function openP(id){
  const p = find(id); if (!p) return closeP(true);
  const i = info(p), sib = p.base ? PRODUCTS.filter(x => x.base === p.base) : [];
  const rows = [["Tessuto",i.tess],["Vestibilità",i.vest],["Include",i.inc],["Cura",i.cura],["Taglie",SIZES.join(" · ")],["Spedizione","In 48 ore, gratis sopra 80 €"],["Cambio taglia","Entro 14 giorni"]];
  $("#pd").innerHTML = `<div class="pdw"><button class="pdb" data-close="1" type="button">← Torna al catalogo</button>
  <div class="pdg"><div class="pdi${p.ok?"":" out"}" style="background:linear-gradient(145deg,${p.c1}33,${p.c2}18)">${pic(p)}</div>
  <div class="pdx"><div class="slb">${p.cat}${p.lg?" · "+p.lg:""}</div>
    <h2 class="st">${p.name}</h2><div class="pdp">${fmt(p.price)}</div>${p.ok?"":'<div class="pdo">Terminato</div>'}
    ${sib.length>1?`<div class="flt sub">${sib.map(x=>`<button class="chip sm${x.id===p.id?" on":""}" data-open="${x.id}" type="button">${x.kind} · ${fmt(x.price)}</button>`).join("")}</div>`:""}
    <p class="ss2">${i.desc}</p>
    <dl class="pds">${rows.map(([a,b])=>`<div><dt>${a}</dt><dd>${b}</dd></div>`).join("")}</dl>
    <div class="prow"><select id="ds" aria-label="Taglia"${p.ok?"":" disabled"}>${SIZES.map(s=>`<option${s==="L"?" selected":""}>${s}</option>`).join("")}</select>
    ${p.ok?`<button class="bp" data-addd="${p.id}" type="button">Aggiungi al carrello</button>`:`<button class="bp" type="button" disabled>Terminato</button>`}</div>
    <a class="cl2" target="_blank" rel="noopener" href="${wa((p.ok?"Ciao, vorrei info su: ":"Ciao, vorrei sapere quando torna disponibile: ")+p.name+(p.ok?" ("+fmt(p.price)+")":""))}">${p.ok?"Chiedi info su WhatsApp":"Avvisami quando torna disponibile"}</a>
  </div></div></div>`;
  $("#pd").classList.add("open"); $("#pd").scrollTop = 0; document.body.classList.add("x-lock");
}
function closeP(force){
  const o = $("#pd").classList.contains("open");
  $("#pd").classList.remove("open"); document.body.classList.remove("x-lock");
  if (o || force) { if (/^#p\d+$/.test(location.hash)) location.hash = "catalogo"; }
}
function route(){const m = location.hash.match(/^#p(\d+)$/); m ? openP(+m[1]) : closeP()}
const toggle = o => {$("#drawer").classList.toggle("open",o);$("#veil").classList.toggle("open",o)};

document.addEventListener("click", e => {
  const t = e.target, d = t.dataset;
  if (t.id === "qx") {q = ""; $("#q").value = ""; $("#qx").hidden = true; renderGrid(); return}
  if (d.reset) {q = ""; so = ""; cat = "Tutti"; kind = "Completo"; team = "Tutte"; lg = "Tutte"; $("#q").value = ""; $("#qx").hidden = true; $("#so").value = ""; renderFilters(); renderGrid(); return}
  const op = t.closest("[data-open]"); if (op) {location.hash = "p"+op.dataset.open; return}
  if (t.closest("[data-close]")) {closeP(); return}
  if (d.c){cat=d.c;team="Tutte";lg="Tutte";renderFilters();renderGrid()}
  if (d.l){lg=d.l;team="Tutte";renderFilters();renderGrid()}
  if (d.k){kind=d.k;renderFilters();renderGrid()}
  if (d.t){team=d.t;renderFilters();renderGrid()}
  if (d.add && find(+d.add).ok){const id=+d.add,size=$("#s"+id).value,f=cart.find(i=>i.id===id&&i.size===size);f?f.q++:cart.push({id,size,q:1});renderCart();toggle(true)}
  if (d.addd && find(+d.addd).ok){const id=+d.addd,size=$("#ds").value,f=cart.find(i=>i.id===id&&i.size===size);f?f.q++:cart.push({id,size,q:1});renderCart();toggle(true)}
  if (d.p){cart[+d.p].q++;renderCart()}
  if (d.m){if(--cart[+d.m].q<=0)cart.splice(+d.m,1);renderCart()}
  if (t.id==="veil"||t.id==="closeCart")toggle(false);
  if (t.closest("#openCart"))toggle(true);
  const q = t.closest(".x-faq-q"); if (q) q.parentElement.classList.toggle("open");
});
document.addEventListener("keydown", e => {if(e.key==="Escape"){if($("#drawer").classList.contains("open"))toggle(false);else closeP()}});

// Marquee + link WhatsApp
const items = ["CALCIO","FORMULA 1","NBA","TUTE","SPEDIZIONE 48H","CAMBIO TAGLIA GRATIS"];
const strip = items.map(i => `<span class="mq-i">${i}</span><span class="mq-s">◆</span>`).join("");
$("#mq").innerHTML = strip + strip + strip + strip;
const hi = wa("Ciao, ho una domanda sui vostri prodotti.");
$("#waLink").href = hi; $("#fabWa").href = hi;

// Sfondo particelle
(function(){
  const c = $("#bgc"), x = c.getContext("2d"); let w, h, ps = [];
  const rs = () => {w=c.width=innerWidth;h=c.height=innerHeight;ps=Array.from({length:Math.min(70,w/18|0)},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.25,vy:(Math.random()-.5)*.25}))};
  rs(); addEventListener("resize", rs);
  if (matchMedia("(prefers-reduced-motion:reduce)").matches) return;
  (function f(){x.clearRect(0,0,w,h);
    ps.forEach((p,i)=>{p.x=(p.x+p.vx+w)%w;p.y=(p.y+p.vy+h)%h;x.fillStyle="rgba(0,240,255,.45)";x.fillRect(p.x,p.y,1.6,1.6);
      for(let j=i+1;j<ps.length;j++){const q=ps[j],d=Math.hypot(p.x-q.x,p.y-q.y);if(d<120){x.strokeStyle=`rgba(123,47,255,${.15*(1-d/120)})`;x.beginPath();x.moveTo(p.x,p.y);x.lineTo(q.x,q.y);x.stroke()}}});
    requestAnimationFrame(f)})();
})();

renderFilters(); renderGrid(); renderCart();
addEventListener("hashchange", route); route();
document.addEventListener("input", e => {if (e.target.id === "q") {q = e.target.value.trim(); $("#qx").hidden = !e.target.value; renderGrid()}});
document.addEventListener("change", e => {if (e.target.id === "so") {so = e.target.value; renderGrid()}});
