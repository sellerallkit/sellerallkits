// ═══════════════════════════════════════════════════════════════
//  CATALOGO — qui modifichi squadre, immagini, prezzi e descrizioni.
//  Il codice del sito è in shop.js: NON serve aprirlo.
// ═══════════════════════════════════════════════════════════════
//  ATTENZIONE: non cancellare virgole, parentesi { } [ ] e virgolette " ".
//  Per SVUOTARE un campo non cancellare la riga: scrivi img:"" e prezzo:null
//  Se qualcosa non va, il sito mostra una striscia rossa in alto con l'errore.

// ═══ 1) IMPOSTAZIONI ═══
const IMPOSTAZIONI = {
  whatsapp: "393272792246",  // numero con prefisso, senza +
  servePrezzo: true          // true = online solo con immagine E prezzo | false = basta l'immagine
};

// ═══ 2) COME SI COMPILA ═══
// Ogni squadra ha 3 sezioni: maglia, pantaloni, completo.
//   Calcio: maglia / pantaloncini / completo      F1: maglia / pantaloni / completo
//   NBA:    canotta / shorts / completo           Tute: giacca / pantalone / tuta completa
// Ogni sezione ha:
//   img      nome del file immagine, SENZA estensione, nella stessa cartella di index.html (es. "intermaglia")
//   prezzo   prezzo in euro (es. 59.9). null = non impostato
//   desc     descrizione che compare nella scheda ("" = testo automatico)
//   offline  true = Terminato a mano | false = online
// Un articolo è ONLINE solo se ha img + prezzo e offline è false. Altrimenti mostra "Terminato".
// Ogni sezione è indipendente: la maglia può essere online anche se i pantaloni no.
// "tessuto" vale per tutti e tre gli articoli della squadra (es. "100% cotone verificato").
//
// ESEMPIO (Inter):
//   { n:"Inter", c1:"#0a3a8c", c2:"#111111", tessuto:"100% cotone verificato",
//     maglia:    { img:"intermaglia",    prezzo:59.9, desc:"Maglia Inter nerazzurra…",   offline:false },
//     pantaloni: { img:"interpantaloni", prezzo:34.9, desc:"Pantaloncini Inter neri…",   offline:false },
//     completo:  { img:"intermaglia",    prezzo:89.9, desc:"Completo Inter…",            offline:false },
//   },
// Per aggiungere una squadra copia un blocco, cambia nome e colori (c1, c2) e incollalo nel gruppo giusto.

// ═══ 3) CATALOGO ═══
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
      pantaloni: { img:"pantalonemonza", prezzo:58.5, desc:"", offline:false },
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
