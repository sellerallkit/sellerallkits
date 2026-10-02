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
      pantaloni: { img:"pantaloni/atalanta", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"magliaatalanta", prezzo:89.9, desc:"Maglia Atalanta nei colori Nero e azzurro , in 100% cotone verificato: morbida sulla pelle, naturale e resistente ai lavaggi. Ideale per tifare tutti i giorni.", offline:false },
    },

    // ── BOLOGNA
    { n:"Bologna", c1:"#0a3a8c", c2:"#111111", tessuto:"100% cotone verificato",
      maglia:    { img:"magliabologna", prezzo:59.9, desc:"Maglia Bologna nei colori Blu rosso, in 100% cotone verificato: morbida sulla pelle, naturale e resistente ai lavaggi. Ideale per tifare tutti i giorni.", offline:false },
      pantaloni: { img:"pantaloni/bologna", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"magliabologna", prezzo:89.9, desc:"Maglia Bologna nei colori Blu rosso, in 100% cotone verificato: morbida sulla pelle, naturale e resistente ai lavaggi. Ideale per tifare tutti i giorni.", offline:false },
    },

    // ── CAGLIARI
    { n:"Cagliari", c1:"#0a3a8c", c2:"#111111", tessuto:"100% cotone verificato",
      maglia:    { img:"magliacagliari", prezzo:59.9, desc:"Maglia Cagliari nei colori Rosso blu, in 100% cotone verificato: morbida sulla pelle, naturale e resistente ai lavaggi. Ideale per tifare tutti i giorni.", offline:false },
      pantaloni: { img:"pantaloni/cagliari", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"magliacagliari", prezzo:89.9, desc:"Maglia Cagliari nei colori Rosso blu, in 100% cotone verificato: morbida sulla pelle, naturale e resistente ai lavaggi. Ideale per tifare tutti i giorni.", offline:false },
    },

    // ── COMO
    { n:"Como", c1:"#0a3a8c", c2:"#111111", tessuto:"100% cotone verificato",
      maglia:    { img:"magliacomo", prezzo:59.9, desc:"Maglia Como nei colori bianca azzurra, in 100% cotone verificato: morbida sulla pelle, naturale e resistente ai lavaggi. Ideale per tifare tutti i giorni.", offline:false },
      pantaloni: { img:"pantaloni/como", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"magliacomo", prezzo:89.9, desc:"Maglia Como nei colori bianca azzurra, in 100% cotone verificato: morbida sulla pelle, naturale e resistente ai lavaggi. Ideale per tifare tutti i giorni.", offline:false },
    },

    // ── FIORENTINA
    { n:"Fiorentina", c1:"#5b2a86", c2:"#ffffff", tessuto:"",
      maglia:    { img:"maglia/fiorentina", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/fiorentina", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/fiorentina", prezzo:89.9, desc:"", offline:false },
    },

    // ── FROSINONE
    { n:"Frosinone", c1:"#f5d000", c2:"#0a4ea3", tessuto:"",
      maglia:    { img:"maglia/frosinone", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/frosinone", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/frosinone", prezzo:89.9, desc:"", offline:false },
    },

    // ── GENOA
    { n:"Genoa", c1:"#b31b34", c2:"#0b2a5b", tessuto:"",
      maglia:    { img:"maglia/genoa", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/genoa", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/genoa", prezzo:89.9, desc:"", offline:false },
    },

    // ── INTER
    { n:"Inter", c1:"#0a3a8c", c2:"#111111", tessuto:"100% cotone verificato",
      maglia:    { img:"maglia/inter", prezzo:59.9, desc:"Maglia Inter nei colori nerazzurri, in 100% cotone verificato: morbida sulla pelle, naturale e resistente ai lavaggi. Ideale per tifare tutti i giorni.", offline:false },
      pantaloni: { img:"pantaloni/inter", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/inter", prezzo:89.9, desc:"Maglia Inter nei colori nerazzurri, in 100% cotone verificato: morbida sulla pelle, naturale e resistente ai lavaggi. Ideale per tifare tutti i giorni.", offline:false },
    },

    // ── JUVENTUS
    { n:"Juventus", c1:"#f4f4f4", c2:"#111111", tessuto:"",
      maglia:    { img:"maglia/juve", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/juve", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/juve", prezzo:89.9, desc:"", offline:false },
    },

    // ── LAZIO
    { n:"Lazio", c1:"#87ceeb", c2:"#ffffff", tessuto:"",
      maglia:    { img:"maglia/lazio", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/lazio", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/lazio", prezzo:89.9, desc:"", offline:false },
    },

    // ── LECCE
    { n:"Lecce", c1:"#f2c500", c2:"#d0021b", tessuto:"",
      maglia:    { img:"maglia/lecce", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/lecce", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/lecce", prezzo:89.9, desc:"", offline:false },
    },

    // ── MILAN
    { n:"Milan", c1:"#d0021b", c2:"#111111", tessuto:"",
      maglia:    { img:"magliamilan", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/milan", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"magliamilan", prezzo:89.9, desc:"", offline:false },
    },

    // ── MONZA
    { n:"Monza", c1:"#d0021b", c2:"#ffffff", tessuto:"",
      maglia:    { img:"magliamonza", prezzo:59.9, desc:"test", offline:false },
      pantaloni: { img:"pantalonemonza", prezzo:34.9, desc:"test", offline:false },
      completo:  { img:"completo/monza", prezzo:89.9, desc:"", offline:false },
    },

    // ── NAPOLI
    { n:"Napoli", c1:"#1f8fd6", c2:"#ffffff", tessuto:"",
      maglia:    { img:"maglia/napoli", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/napoli", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/napoli", prezzo:89.9, desc:"", offline:false },
    },

    // ── PARMA
    { n:"Parma", c1:"#f4f4f4", c2:"#ffd60a", tessuto:"",
      maglia:    { img:"maglia/parma", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/parma", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/parma", prezzo:89.9, desc:"", offline:false },
    },

    // ── ROMA
    { n:"Roma", c1:"#8b1e2d", c2:"#f5a623", tessuto:"",
      maglia:    { img:"maglia/roma", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/roma", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/roma", prezzo:89.9, desc:"", offline:false },
    },

    // ── SASSUOLO
    { n:"Sassuolo", c1:"#00a651", c2:"#111111", tessuto:"",
      maglia:    { img:"maglia/sassuolo", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/sassuolo", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/sassuolo", prezzo:89.9, desc:"", offline:false },
    },

    // ── TORINO
    { n:"Torino", c1:"#7a1f2b", c2:"#ffffff", tessuto:"",
      maglia:    { img:"maglia/torino", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/torino", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/torino", prezzo:89.9, desc:"", offline:false },
    },

    // ── UDINESE
    { n:"Udinese", c1:"#f4f4f4", c2:"#111111", tessuto:"",
      maglia:    { img:"maglia/udinese", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/udinese", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/udinese", prezzo:89.9, desc:"", offline:false },
    },

    // ── VENEZIA
    { n:"Venezia", c1:"#111111", c2:"#f58220", tessuto:"",
      maglia:    { img:"maglia/venezia", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/venezia", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/venezia", prezzo:89.9, desc:"", offline:false },
    },
  ],

  // ╔══════════ PREMIER LEAGUE ══════════
  "Premier League": [

    // ── ARSENAL
    { n:"Arsenal", c1:"#d0021b", c2:"#ffffff", tessuto:"",
      maglia:    { img:"maglia/arsenal", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/arsenal", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/arsenal", prezzo:89.9, desc:"", offline:false },
    },

    // ── CHELSEA
    { n:"Chelsea", c1:"#1c3f94", c2:"#ffffff", tessuto:"",
      maglia:    { img:"maglia/chelsea", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/chelsea", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/chelsea", prezzo:89.9, desc:"", offline:false },
    },

    // ── LIVERPOOL
    { n:"Liverpool", c1:"#c8102e", c2:"#ffffff", tessuto:"",
      maglia:    { img:"maglialiver", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/liverpool", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"maglialiver", prezzo:89.9, desc:"", offline:false },
    },

    // ── MANCHESTER CITY
    { n:"Manchester City", c1:"#6cabdd", c2:"#ffffff", tessuto:"",
      maglia:    { img:"magliamc", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/manchestercity", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"magliamc", prezzo:89.9, desc:"", offline:false },
    },

    // ── MANCHESTER UNITED
    { n:"Manchester United", c1:"#da291c", c2:"#111111", tessuto:"",
      maglia:    { img:"magliamu", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/manchesterunited", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"magliamu", prezzo:89.9, desc:"", offline:false },
    },

    // ── TOTTENHAM
    { n:"Tottenham", c1:"#f4f4f4", c2:"#132257", tessuto:"",
      maglia:    { img:"maglia/tottenham", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/tottenham", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/tottenham", prezzo:89.9, desc:"", offline:false },
    },

    // ── NEWCASTLE
    { n:"Newcastle", c1:"#111111", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"maglia/newcastle", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/newcastle", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/newcastle", prezzo:89.9, desc:"", offline:false },
    },

    // ── ASTON VILLA
    { n:"Aston Villa", c1:"#670e36", c2:"#95bfe5", tessuto:"",
      maglia:    { img:"maglia/astonvilla", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/astonvilla", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/astonvilla", prezzo:89.9, desc:"", offline:false },
    },
  ],

  // ╔══════════ LALIGA ══════════
  "LaLiga": [

    // ── BARCELLONA
    { n:"Barcellona", c1:"#a50044", c2:"#004d98", tessuto:"",
      maglia:    { img:"", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/barcellona", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"'completo/arcellona", prezzo:89.9, desc:"", offline:false },
    },

    // ── REAL MADRID
    { n:"Real Madrid", c1:"#f4f4f4", c2:"#febe10", tessuto:"",
      maglia:    { img:"maglia/realmadrid", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/realmadrid", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/realmadrid", prezzo:89.9, desc:"", offline:false },
    },

    // ── ATLETICO MADRID
    { n:"Atletico Madrid", c1:"#cb3524", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"maglia/atleticomadrid", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/atleticomadrid", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/atleticomadrid", prezzo:89.9, desc:"", offline:false },
    },

    // ── SIVIGLIA
    { n:"Siviglia", c1:"#f4f4f4", c2:"#d0021b", tessuto:"",
      maglia:    { img:"maglia/siviglia", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/siviglia", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/siviglia", prezzo:89.9, desc:"", offline:false },
    },

    // ── VALENCIA
    { n:"Valencia", c1:"#f4f4f4", c2:"#111111", tessuto:"",
      maglia:    { img:"maglia/valencia", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/valencia", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/valencia", prezzo:89.9, desc:"", offline:false },
    },

    // ── ATHLETIC BILBAO
    { n:"Athletic Bilbao", c1:"#d0021b", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"maglia/athleticbilbao", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/athleticbilbao", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/athleticbilbao", prezzo:89.9, desc:"", offline:false },
    },

    // ── REAL SOCIEDAD
    { n:"Real Sociedad", c1:"#0067b1", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"maglia/realsociedad", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/realsociedad", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/realsociedad", prezzo:89.9, desc:"", offline:false },
    },

    // ── VILLARREAL
    { n:"Villarreal", c1:"#ffe667", c2:"#005187", tessuto:"",
      maglia:    { img:"maglia/villarreal", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/villarreal", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/villarreal", prezzo:89.9, desc:"", offline:false },
    },
  ],

  // ╔══════════ BUNDESLIGA ══════════
  "Bundesliga": [

    // ── BAYERN MONACO
    { n:"Bayern Monaco", c1:"#dc052d", c2:"#ffffff", tessuto:"",
      maglia:    { img:"maglia/bayernmonaco", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/bayernmonaco", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/bayernmonaco", prezzo:89.9, desc:"", offline:false },
    },

    // ── BORUSSIA DORTMUND
    { n:"Borussia Dortmund", c1:"#fde100", c2:"#111111", tessuto:"",
      maglia:    { img:"maglia/borussiadortmund", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/borussiadortmund", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/borussiadortmund", prezzo:89.9, desc:"", offline:false },
    },

    // ── BAYER LEVERKUSEN
    { n:"Bayer Leverkusen", c1:"#e32221", c2:"#111111", tessuto:"",
      maglia:    { img:"maglia/bayerleverkusen", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/bayerleverkusen", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/bayerleverkusen", prezzo:89.9, desc:"", offline:false },
    },

    // ── RB LIPSIA
    { n:"RB Lipsia", c1:"#f4f4f4", c2:"#dd0741", tessuto:"",
      maglia:    { img:"maglia/rblipsia", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/rblipsia", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/rblipsia", prezzo:89.9, desc:"", offline:false },
    },

    // ── EINTRACHT FRANCOFORTE
    { n:"Eintracht Francoforte", c1:"#111111", c2:"#e1000f", tessuto:"",
      maglia:    { img:"maglia/eintrachtfrancoforte", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/eintrachtfrancoforte", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/eintrachtfrancoforte", prezzo:89.9, desc:"", offline:false },
    },
  ],

  // ╔══════════ LIGUE 1 ══════════
  "Ligue 1": [

    // ── PSG
    { n:"PSG", c1:"#004170", c2:"#da291c", tessuto:"",
      maglia:    { img:"magliapsg", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/psg", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"magliapsg", prezzo:89.9, desc:"", offline:false },
    },

    // ── MARSIGLIA
    { n:"Marsiglia", c1:"#f4f4f4", c2:"#2faee0", tessuto:"",
      maglia:    { img:"maglia/marsiglia", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/marsiglia", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/marsiglia", prezzo:89.9, desc:"", offline:false },
    },

    // ── LIONE
    { n:"Lione", c1:"#f4f4f4", c2:"#1c3f94", tessuto:"",
      maglia:    { img:"maglia/lione", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/lione", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/lione", prezzo:89.9, desc:"", offline:false },
    },

    // ── MONACO
    { n:"Monaco", c1:"#e51b22", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"maglia/monaco", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/monaco", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/monaco", prezzo:89.9, desc:"", offline:false },
    },
  ],

  // ╔══════════ ALTRI CAMPIONATI ══════════
  "Altri campionati": [

    // ── BENFICA
    { n:"Benfica", c1:"#e30613", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"maglia/benfica", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/benfica", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/benfica", prezzo:89.9, desc:"", offline:false },
    },

    // ── PORTO
    { n:"Porto", c1:"#003c8f", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"maglia/porto", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/porto", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/porto", prezzo:89.9, desc:"", offline:false },
    },

    // ── SPORTING CP
    { n:"Sporting CP", c1:"#008057", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"maglia/sportingcp", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/sportingcp", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/sportingcp", prezzo:89.9, desc:"", offline:false },
    },

    // ── AJAX
    { n:"Ajax", c1:"#f4f4f4", c2:"#d2122e", tessuto:"",
      maglia:    { img:"maglia/ajax", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/ajax", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/ajax", prezzo:89.9, desc:"", offline:false },
    },

    // ── GALATASARAY
    { n:"Galatasaray", c1:"#ffa500", c2:"#a90432", tessuto:"",
      maglia:    { img:"maglia/galatasaray", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/galatasaray", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/galatasaray", prezzo:89.9, desc:"", offline:false },
    },

    // ── CELTIC
    { n:"Celtic", c1:"#16974b", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"maglia/celtic", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/celtic", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/celtic", prezzo:89.9, desc:"", offline:false },
    },
  ],

  // ╔══════════ QATAR ══════════
  "Qatar": [

    // ── AL SADD
    { n:"Al Sadd", c1:"#f4f4f4", c2:"#8a1538", tessuto:"",
      maglia:    { img:"maglia/alsadd", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/alsadd", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/alsadd", prezzo:89.9, desc:"", offline:false },
    },

    // ── AL DUHAIL
    { n:"Al Duhail", c1:"#d0021b", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"maglia/alduhail", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/alduhail", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/alduhail", prezzo:89.9, desc:"", offline:false },
    },

    // ── AL GHARAFA
    { n:"Al Gharafa", c1:"#f4f4f4", c2:"#1c3f94", tessuto:"",
      maglia:    { img:"maglia/algharafa", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/algharafa", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/algharafa", prezzo:89.9, desc:"", offline:false },
    },

    // ── AL RAYYAN
    { n:"Al Rayyan", c1:"#111111", c2:"#d0021b", tessuto:"",
      maglia:    { img:"maglia/alrayyan", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/alrayyan", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/alrayyan", prezzo:89.9, desc:"", offline:false },
    },

    // ── AL ARABI
    { n:"Al Arabi", c1:"#f4f4f4", c2:"#b8860b", tessuto:"",
      maglia:    { img:"maglia/alarabi", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/alarabi", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/alarabi", prezzo:89.9, desc:"", offline:false },
    },

    // ── AL WAKRAH
    { n:"Al Wakrah", c1:"#f4c20d", c2:"#111111", tessuto:"",
      maglia:    { img:"maglia/alwakrah", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/alwakrah", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/alwakrah", prezzo:89.9, desc:"", offline:false },
    },

    // ── QATAR SC
    { n:"Qatar SC", c1:"#8a1538", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"maglia/qatarsc", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/qatarsc", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/qatarsc", prezzo:89.9, desc:"", offline:false },
    },

    // ── AL AHLI DOHA
    { n:"Al Ahli Doha", c1:"#1c6b3a", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"maglia/alahlidoha", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/alahlidoha", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/alahlidoha", prezzo:89.9, desc:"", offline:false },
    },

    // ── UMM SALAL
    { n:"Umm Salal", c1:"#f4c20d", c2:"#8a1538", tessuto:"",
      maglia:    { img:"maglia/ummsalal", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/ummsalal", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/ummsalal", prezzo:89.9, desc:"", offline:false },
    },

    // ── AL SHAMAL
    { n:"Al Shamal", c1:"#d0021b", c2:"#111111", tessuto:"",
      maglia:    { img:"maglia/alshamal", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/alshamal", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/alshamal", prezzo:89.9, desc:"", offline:false },
    },

    // ── AL KHOR
    { n:"Al Khor", c1:"#f4f4f4", c2:"#1c3f94", tessuto:"",
      maglia:    { img:"maglia/alkhor", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/alkhor", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/alkhor", prezzo:89.9, desc:"", offline:false },
    },

    // ── AL SHAHANIYA
    { n:"Al Shahaniya", c1:"#1c3f94", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"maglia/alshahaniya", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/alshahaniya", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/alshahaniya", prezzo:89.9, desc:"", offline:false },
    },
  ],

  // ╔══════════ NAZIONALI ══════════
  "Nazionali": [

    // ── ITALIA
    { n:"Italia", c1:"#0a4ea3", c2:"#ffffff", tessuto:"",
      maglia:    { img:"magliaitalia", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/italia", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"magliaitalia", prezzo:89.9, desc:"", offline:false },
    },

    // ── FRANCIA
    { n:"Francia", c1:"#14308f", c2:"#ffffff", tessuto:"",
      maglia:    { img:"magliafrancia", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/francia", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"magliafrancia", prezzo:89.9, desc:"", offline:false },
    },

    // ── SPAGNA
    { n:"Spagna", c1:"#c60b1e", c2:"#ffc400", tessuto:"",
      maglia:    { img:"maglia/spagna", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/spagna", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/spagna", prezzo:89.9, desc:"", offline:false },
    },

    // ── GERMANIA
    { n:"Germania", c1:"#f4f4f4", c2:"#111111", tessuto:"",
      maglia:    { img:"maglia/germania", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/germania", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/germania", prezzo:89.9, desc:"", offline:false },
    },

    // ── INGHILTERRA
    { n:"Inghilterra", c1:"#f4f4f4", c2:"#14308f", tessuto:"",
      maglia:    { img:"maglia/inghilterra", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/inghilterra", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/inghilterra", prezzo:89.9, desc:"", offline:false },
    },

    // ── PORTOGALLO
    { n:"Portogallo", c1:"#8a1538", c2:"#006600", tessuto:"",
      maglia:    { img:"maglia/portogallo", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/portogallo", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/portogallo", prezzo:89.9, desc:"", offline:false },
    },

    // ── OLANDA
    { n:"Olanda", c1:"#f77f00", c2:"#111111", tessuto:"",
      maglia:    { img:"maglia/olanda", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/olanda", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/olanda", prezzo:89.9, desc:"", offline:false },
    },

    // ── BELGIO
    { n:"Belgio", c1:"#d0021b", c2:"#111111", tessuto:"",
      maglia:    { img:"maglia/belgio", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/belgio", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/belgio", prezzo:89.9, desc:"", offline:false },
    },

    // ── CROAZIA
    { n:"Croazia", c1:"#f4f4f4", c2:"#d0021b", tessuto:"",
      maglia:    { img:"maglia/croazia", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/croazia", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/croazia", prezzo:89.9, desc:"", offline:false },
    },

    // ── SVIZZERA
    { n:"Svizzera", c1:"#d0021b", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"maglia/svizzera", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/svizzera", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/svizzera", prezzo:89.9, desc:"", offline:false },
    },

    // ── DANIMARCA
    { n:"Danimarca", c1:"#c8102e", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"maglia/danimarca", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/danimarca", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/danimarca", prezzo:89.9, desc:"", offline:false },
    },

    // ── POLONIA
    { n:"Polonia", c1:"#f4f4f4", c2:"#dc143c", tessuto:"",
      maglia:    { img:"maglia/polonia", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/polonia", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/polonia", prezzo:89.9, desc:"", offline:false },
    },

    // ── AUSTRIA
    { n:"Austria", c1:"#d0021b", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"maglia/austria", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/austria", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/austria", prezzo:89.9, desc:"", offline:false },
    },

    // ── TURCHIA
    { n:"Turchia", c1:"#e30a17", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"maglia/turchia", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/turchia", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/turchia", prezzo:89.9, desc:"", offline:false },
    },

    // ── SVEZIA
    { n:"Svezia", c1:"#fecc00", c2:"#006aa7", tessuto:"",
      maglia:    { img:"maglia/svezia", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/svezia", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/svezia", prezzo:89.9, desc:"", offline:false },
    },

    // ── NORVEGIA
    { n:"Norvegia", c1:"#ba0c2f", c2:"#00205b", tessuto:"",
      maglia:    { img:"maglia/norvegia", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/norvegia", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/norvegia", prezzo:89.9, desc:"", offline:false },
    },

    // ── SCOZIA
    { n:"Scozia", c1:"#0b2a5b", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"maglia/scozia", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/scozia", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/scozia", prezzo:89.9, desc:"", offline:false },
    },

    // ── SERBIA
    { n:"Serbia", c1:"#c6363c", c2:"#0c4076", tessuto:"",
      maglia:    { img:"maglia/serbia", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/serbia", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/serbia", prezzo:89.9, desc:"", offline:false },
    },

    // ── UCRAINA
    { n:"Ucraina", c1:"#ffd500", c2:"#0057b7", tessuto:"",
      maglia:    { img:"maglia/ucraina", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/ucraina", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/ucraina", prezzo:89.9, desc:"", offline:false },
    },

    // ── BRASILE
    { n:"Brasile", c1:"#ffdf00", c2:"#009c3b", tessuto:"",
      maglia:    { img:"maglia/brasile", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/brasile", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/brasile", prezzo:89.9, desc:"", offline:false },
    },

    // ── ARGENTINA
    { n:"Argentina", c1:"#75aadb", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"maglia/argentina", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/argentina", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/argentina", prezzo:89.9, desc:"", offline:false },
    },

    // ── URUGUAY
    { n:"Uruguay", c1:"#5cbfeb", c2:"#111111", tessuto:"",
      maglia:    { img:"maglia/uruguay", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/uruguay", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/uruguay", prezzo:89.9, desc:"", offline:false },
    },

    // ── COLOMBIA
    { n:"Colombia", c1:"#fcd116", c2:"#003893", tessuto:"",
      maglia:    { img:"maglia/colombia", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/colombia", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/colombia", prezzo:89.9, desc:"", offline:false },
    },

    // ── ECUADOR
    { n:"Ecuador", c1:"#fcd116", c2:"#034ea2", tessuto:"",
      maglia:    { img:"maglia/ecuador", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/ecuador", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/ecuador", prezzo:89.9, desc:"", offline:false },
    },

    // ── MESSICO
    { n:"Messico", c1:"#006847", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"maglia/messico", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/messico", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/messico", prezzo:89.9, desc:"", offline:false },
    },

    // ── USA
    { n:"USA", c1:"#f4f4f4", c2:"#0a3161", tessuto:"",
      maglia:    { img:"maglia/usa", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/usa", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/usa", prezzo:89.9, desc:"", offline:false },
    },

    // ── CANADA
    { n:"Canada", c1:"#d80621", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"maglia/canada", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/canada", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/canada", prezzo:89.9, desc:"", offline:false },
    },

    // ── MAROCCO
    { n:"Marocco", c1:"#c1272d", c2:"#006233", tessuto:"",
      maglia:    { img:"maglia/marocco", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/marocco", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/marocco", prezzo:89.9, desc:"", offline:false },
    },

    // ── SENEGAL
    { n:"Senegal", c1:"#f4f4f4", c2:"#00853f", tessuto:"",
      maglia:    { img:"maglia/senegal", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/senegal", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/senegal", prezzo:89.9, desc:"", offline:false },
    },

    // ── NIGERIA
    { n:"Nigeria", c1:"#008751", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"maglia/nigeria", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/nigeria", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/nigeria", prezzo:89.9, desc:"", offline:false },
    },

    // ── EGITTO
    { n:"Egitto", c1:"#ce1126", c2:"#111111", tessuto:"",
      maglia:    { img:"maglia/egitto", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/egitto", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/egitto", prezzo:89.9, desc:"", offline:false },
    },

    // ── ALGERIA
    { n:"Algeria", c1:"#f4f4f4", c2:"#006233", tessuto:"",
      maglia:    { img:"maglia/algeria", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/algeria", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/algeria", prezzo:89.9, desc:"", offline:false },
    },

    // ── TUNISIA
    { n:"Tunisia", c1:"#e70013", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"maglia/tunisia", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/tunisia", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/tunisia", prezzo:89.9, desc:"", offline:false },
    },

    // ── COSTA D'AVORIO
    { n:"Costa d'Avorio", c1:"#f77f00", c2:"#009e60", tessuto:"",
      maglia:    { img:"maglia/costadavorio", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/costadavorio", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/costadavorio", prezzo:89.9, desc:"", offline:false },
    },

    // ── GHANA
    { n:"Ghana", c1:"#f4f4f4", c2:"#006b3f", tessuto:"",
      maglia:    { img:"maglia/ghana", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/ghana", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/ghana", prezzo:89.9, desc:"", offline:false },
    },

    // ── CAMERUN
    { n:"Camerun", c1:"#007a5e", c2:"#ce1126", tessuto:"",
      maglia:    { img:"maglia/camerun", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/camerun", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/camerun", prezzo:89.9, desc:"", offline:false },
    },

    // ── GIAPPONE
    { n:"Giappone", c1:"#1c3f94", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"maglia/giappone", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/giappone", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/giappone", prezzo:89.9, desc:"", offline:false },
    },

    // ── COREA DEL SUD
    { n:"Corea del Sud", c1:"#c60c30", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"maglia/coreadelsud", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/coreadelsud", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/coreadelsud", prezzo:89.9, desc:"", offline:false },
    },

    // ── AUSTRALIA
    { n:"Australia", c1:"#ffcd00", c2:"#00843d", tessuto:"",
      maglia:    { img:"maglia/australia", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/australia", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/australia", prezzo:89.9, desc:"", offline:false },
    },

    // ── IRAN
    { n:"Iran", c1:"#f4f4f4", c2:"#239f40", tessuto:"",
      maglia:    { img:"maglia/iran", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/iran", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/iran", prezzo:89.9, desc:"", offline:false },
    },

    // ── ARABIA SAUDITA
    { n:"Arabia Saudita", c1:"#006c35", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"maglia/arabiasaudita", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/arabiasaudita", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/arabiasaudita", prezzo:89.9, desc:"", offline:false },
    },

    // ── QATAR
    { n:"Qatar", c1:"#8a1538", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"maglia/qatar", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/qatar", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/qatar", prezzo:89.9, desc:"", offline:false },
    },
  ],
  },
  // ████████████████████ F1 ████████████████████ (maglia, pantaloni, completo)
  F1: {

  // ╔══════════ SCUDERIE 2026 ══════════
  "Scuderie 2026": [

    // ── RED BULL RACING
    { n:"Red Bull Racing", c1:"#14307f", c2:"#d0021b", tessuto:"",
      maglia:    { img:"maglia/redbullracing", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/redbullracing", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/redbullracing", prezzo:89.9, desc:"", offline:false },
    },

    // ── FERRARI
    { n:"Ferrari", c1:"#d40000", c2:"#fff200", tessuto:"",
      maglia:    { img:"maglia/ferrari", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/ferrari", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/ferrari", prezzo:89.9, desc:"", offline:false },
    },

    // ── MERCEDES
    { n:"Mercedes", c1:"#00d2be", c2:"#111111", tessuto:"",
      maglia:    { img:"maglia/mercedes", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/mercedes", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/mercedes", prezzo:89.9, desc:"", offline:false },
    },

    // ── MCLAREN
    { n:"McLaren", c1:"#ff8000", c2:"#111111", tessuto:"",
      maglia:    { img:"maglia/mclaren", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/mclaren", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/mclaren", prezzo:89.9, desc:"", offline:false },
    },

    // ── ASTON MARTIN
    { n:"Aston Martin", c1:"#006f62", c2:"#cedc00", tessuto:"",
      maglia:    { img:"maglia/astonmartin", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/astonmartin", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/astonmartin", prezzo:89.9, desc:"", offline:false },
    },

    // ── ALPINE
    { n:"Alpine", c1:"#0093cc", c2:"#ff87bc", tessuto:"",
      maglia:    { img:"maglia/alpine", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/alpine", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/alpine", prezzo:89.9, desc:"", offline:false },
    },

    // ── WILLIAMS
    { n:"Williams", c1:"#0a3a8c", c2:"#00a3e0", tessuto:"",
      maglia:    { img:"maglia/williams", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/williams", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/williams", prezzo:89.9, desc:"", offline:false },
    },

    // ── RACING BULLS
    { n:"Racing Bulls", c1:"#6692ff", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"maglia/racingbulls", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/racingbulls", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/racingbulls", prezzo:89.9, desc:"", offline:false },
    },

    // ── HAAS
    { n:"Haas", c1:"#f4f4f4", c2:"#d0021b", tessuto:"",
      maglia:    { img:"maglia/haas", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/haas", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/haas", prezzo:89.9, desc:"", offline:false },
    },

    // ── AUDI
    { n:"Audi", c1:"#111111", c2:"#f50537", tessuto:"",
      maglia:    { img:"maglia/audi", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/audi", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/audi", prezzo:89.9, desc:"", offline:false },
    },

    // ── CADILLAC
    { n:"Cadillac", c1:"#111111", c2:"#c0c0c0", tessuto:"",
      maglia:    { img:"maglia/cadillac", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/cadillac", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/cadillac", prezzo:89.9, desc:"", offline:false },
    },
  ],
  },
  // ████████████████████ NBA ████████████████████ (canotta, shorts, completo)
  NBA: {

  // ╔══════════ EASTERN CONFERENCE ══════════
  "Eastern Conference": [

    // ── ATLANTA HAWKS
    { n:"Atlanta Hawks", c1:"#e03a3e", c2:"#c1d32f", tessuto:"",
      maglia:    { img:"maglia/atlantahawks", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/atlantahawks", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/atlantahawks", prezzo:89.9, desc:"", offline:false },
    },

    // ── BOSTON CELTICS
    { n:"Boston Celtics", c1:"#007a33", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"maglia/bostonceltics", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/bostonceltics", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/bostonceltics", prezzo:89.9, desc:"", offline:false },
    },

    // ── BROOKLYN NETS
    { n:"Brooklyn Nets", c1:"#111111", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"maglia/brooklynnets", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/brooklynnets", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/brooklynnets", prezzo:89.9, desc:"", offline:false },
    },

    // ── CHARLOTTE HORNETS
    { n:"Charlotte Hornets", c1:"#1d1160", c2:"#00788c", tessuto:"",
      maglia:    { img:"maglia/charlottehornets", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/charlottehornets", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/charlottehornets", prezzo:89.9, desc:"", offline:false },
    },

    // ── CHICAGO BULLS
    { n:"Chicago Bulls", c1:"#ce1141", c2:"#111111", tessuto:"",
      maglia:    { img:"maglia/chicagobulls", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/chicagobulls", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/chicagobulls", prezzo:89.9, desc:"", offline:false },
    },

    // ── CLEVELAND CAVALIERS
    { n:"Cleveland Cavaliers", c1:"#860038", c2:"#fdbb30", tessuto:"",
      maglia:    { img:"maglia/clevelandcavaliers", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/clevelandcavaliers", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/clevelandcavaliers", prezzo:89.9, desc:"", offline:false },
    },

    // ── DETROIT PISTONS
    { n:"Detroit Pistons", c1:"#c8102e", c2:"#1d42ba", tessuto:"",
      maglia:    { img:"maglia/detroitpistons", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/detroitpistons", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/detroitpistons", prezzo:89.9, desc:"", offline:false },
    },

    // ── INDIANA PACERS
    { n:"Indiana Pacers", c1:"#002d62", c2:"#fdbb30", tessuto:"",
      maglia:    { img:"maglia/indianapacers", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/indianapacers", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/indianapacers", prezzo:89.9, desc:"", offline:false },
    },

    // ── MIAMI HEAT
    { n:"Miami Heat", c1:"#98002e", c2:"#f9a01b", tessuto:"",
      maglia:    { img:"maglia/miamiheat", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/miamiheat", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/miamiheat", prezzo:89.9, desc:"", offline:false },
    },

    // ── MILWAUKEE BUCKS
    { n:"Milwaukee Bucks", c1:"#00471b", c2:"#eee1c6", tessuto:"",
      maglia:    { img:"maglia/milwaukeebucks", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/milwaukeebucks", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/milwaukeebucks", prezzo:89.9, desc:"", offline:false },
    },

    // ── NEW YORK KNICKS
    { n:"New York Knicks", c1:"#006bb6", c2:"#f58426", tessuto:"",
      maglia:    { img:"maglia/newyorkknicks", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/newyorkknicks", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/newyorkknicks", prezzo:89.9, desc:"", offline:false },
    },

    // ── ORLANDO MAGIC
    { n:"Orlando Magic", c1:"#0077c0", c2:"#111111", tessuto:"",
      maglia:    { img:"maglia/orlandomagic", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/orlandomagic", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/orlandomagic", prezzo:89.9, desc:"", offline:false },
    },

    // ── PHILADELPHIA 76ERS
    { n:"Philadelphia 76ers", c1:"#006bb6", c2:"#ed174c", tessuto:"",
      maglia:    { img:"maglia/philadelphia76ers", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/philadelphia76ers", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/philadelphia76ers", prezzo:89.9, desc:"", offline:false },
    },

    // ── TORONTO RAPTORS
    { n:"Toronto Raptors", c1:"#ce1141", c2:"#111111", tessuto:"",
      maglia:    { img:"maglia/torontoraptors", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/torontoraptors", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/torontoraptors", prezzo:89.9, desc:"", offline:false },
    },

    // ── WASHINGTON WIZARDS
    { n:"Washington Wizards", c1:"#002b5c", c2:"#e31837", tessuto:"",
      maglia:    { img:"maglia/washingtonwizards", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/washingtonwizards", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/washingtonwizards", prezzo:89.9, desc:"", offline:false },
    },
  ],

  // ╔══════════ WESTERN CONFERENCE ══════════
  "Western Conference": [

    // ── DALLAS MAVERICKS
    { n:"Dallas Mavericks", c1:"#00538c", c2:"#002b5e", tessuto:"",
      maglia:    { img:"maglia/dallasmavericks", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/dallasmavericks", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/dallasmavericks", prezzo:89.9, desc:"", offline:false },
    },

    // ── DENVER NUGGETS
    { n:"Denver Nuggets", c1:"#0e2240", c2:"#fec524", tessuto:"",
      maglia:    { img:"maglia/denvernuggets", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/denvernuggets", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/denvernuggets", prezzo:89.9, desc:"", offline:false },
    },

    // ── GOLDEN STATE WARRIORS
    { n:"Golden State Warriors", c1:"#1d428a", c2:"#ffc72c", tessuto:"",
      maglia:    { img:"maglia/goldenstatewarriors", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/goldenstatewarriors", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/goldenstatewarriors", prezzo:89.9, desc:"", offline:false },
    },

    // ── HOUSTON ROCKETS
    { n:"Houston Rockets", c1:"#ce1141", c2:"#111111", tessuto:"",
      maglia:    { img:"maglia/houstonrockets", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/houstonrockets", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/houstonrockets", prezzo:89.9, desc:"", offline:false },
    },

    // ── LA CLIPPERS
    { n:"LA Clippers", c1:"#c8102e", c2:"#1d428a", tessuto:"",
      maglia:    { img:"maglia/laclippers", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/laclippers", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/laclippers", prezzo:89.9, desc:"", offline:false },
    },

    // ── LOS ANGELES LAKERS
    { n:"Los Angeles Lakers", c1:"#552583", c2:"#fdb927", tessuto:"",
      maglia:    { img:"maglia/losangeleslakers", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/losangeleslakers", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/losangeleslakers", prezzo:89.9, desc:"", offline:false },
    },

    // ── MEMPHIS GRIZZLIES
    { n:"Memphis Grizzlies", c1:"#5d76a9", c2:"#12173f", tessuto:"",
      maglia:    { img:"maglia/memphisgrizzlies", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/memphisgrizzlies", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/memphisgrizzlies", prezzo:89.9, desc:"", offline:false },
    },

    // ── MINNESOTA TIMBERWOLVES
    { n:"Minnesota Timberwolves", c1:"#0c2340", c2:"#236192", tessuto:"",
      maglia:    { img:"maglia/minnesotatimberwolves", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/minnesotatimberwolves", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/minnesotatimberwolves", prezzo:89.9, desc:"", offline:false },
    },

    // ── NEW ORLEANS PELICANS
    { n:"New Orleans Pelicans", c1:"#0c2340", c2:"#c8102e", tessuto:"",
      maglia:    { img:"maglia/neworleanspelicans", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/neworleanspelicans", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/neworleanspelicans", prezzo:89.9, desc:"", offline:false },
    },

    // ── OKLAHOMA CITY THUNDER
    { n:"Oklahoma City Thunder", c1:"#007ac1", c2:"#ef3b24", tessuto:"",
      maglia:    { img:"maglia/oklahomacitythunder", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/oklahomacitythunder", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/oklahomacitythunder", prezzo:89.9, desc:"", offline:false },
    },

    // ── PHOENIX SUNS
    { n:"Phoenix Suns", c1:"#1d1160", c2:"#e56020", tessuto:"",
      maglia:    { img:"maglia/phoenixsuns", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/phoenixsuns", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/phoenixsuns", prezzo:89.9, desc:"", offline:false },
    },

    // ── PORTLAND TRAIL BLAZERS
    { n:"Portland Trail Blazers", c1:"#e03a3e", c2:"#111111", tessuto:"",
      maglia:    { img:"maglia/portlandtrailblazers", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/portlandtrailblazers", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/portlandtrailblazers", prezzo:89.9, desc:"", offline:false },
    },

    // ── SACRAMENTO KINGS
    { n:"Sacramento Kings", c1:"#5a2d81", c2:"#63727a", tessuto:"",
      maglia:    { img:"maglia/sacramentokings", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/sacramentokings", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/sacramentokings", prezzo:89.9, desc:"", offline:false },
    },

    // ── SAN ANTONIO SPURS
    { n:"San Antonio Spurs", c1:"#c4ced4", c2:"#111111", tessuto:"",
      maglia:    { img:"maglia/sanantoniospurs", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/sanantoniospurs", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/sanantoniospurs", prezzo:89.9, desc:"", offline:false },
    },

    // ── UTAH JAZZ
    { n:"Utah Jazz", c1:"#002b5c", c2:"#f9a01b", tessuto:"",
      maglia:    { img:"maglia/utahjazz", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/utahjazz", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/utahjazz", prezzo:89.9, desc:"", offline:false },
    },
  ],
  },
  // ████████████████████ TUTE ████████████████████ (giacca, pantalone, tuta completa)
  Tute: {

  // ╔══════════ MODELLI ══════════
  "Modelli": [

    // ── ALLENAMENTO PRO
    { n:"Allenamento Pro", c1:"#1f2937", c2:"#00f0ff", tessuto:"",
      maglia:    { img:"maglia/allenamentopro", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/allenamentopro", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/allenamentopro", prezzo:89.9, desc:"", offline:false },
    },

    // ── RAPPRESENTANZA
    { n:"Rappresentanza", c1:"#14532d", c2:"#ffffff", tessuto:"",
      maglia:    { img:"maglia/rappresentanza", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/rappresentanza", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/rappresentanza", prezzo:89.9, desc:"", offline:false },
    },
  ],

  // ╔══════════ CLUB ══════════
  "Club": [

    // ── INTER
    { n:"Inter", c1:"#0a3a8c", c2:"#111111", tessuto:"",
      maglia:    { img:"maglia/inter", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/inter", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/inter", prezzo:89.9, desc:"", offline:false },
    },

    // ── JUVENTUS
    { n:"Juventus", c1:"#f4f4f4", c2:"#111111", tessuto:"",
      maglia:    { img:"maglia/juventus", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/juventus", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/juventus", prezzo:89.9, desc:"", offline:false },
    },

    // ── MILAN
    { n:"Milan", c1:"#d0021b", c2:"#111111", tessuto:"",
      maglia:    { img:"maglia/milan", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/milan", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/milan", prezzo:89.9, desc:"", offline:false },
    },

    // ── NAPOLI
    { n:"Napoli", c1:"#1f8fd6", c2:"#ffffff", tessuto:"",
      maglia:    { img:"maglia/napoli", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/napoli", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/napoli", prezzo:89.9, desc:"", offline:false },
    },

    // ── ROMA
    { n:"Roma", c1:"#8b1e2d", c2:"#f5a623", tessuto:"",
      maglia:    { img:"maglia/roma", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/roma", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/roma", prezzo:89.9, desc:"", offline:false },
    },

    // ── LAZIO
    { n:"Lazio", c1:"#87ceeb", c2:"#ffffff", tessuto:"",
      maglia:    { img:"maglia/lazio", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/lazio", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/lazio", prezzo:89.9, desc:"", offline:false },
    },

    // ── ATALANTA
    { n:"Atalanta", c1:"#0a3a8c", c2:"#111111", tessuto:"",
      maglia:    { img:"maglia/atalanta", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/atalanta", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/atalanta", prezzo:89.9, desc:"", offline:false },
    },

    // ── FIORENTINA
    { n:"Fiorentina", c1:"#5b2a86", c2:"#ffffff", tessuto:"",
      maglia:    { img:"maglia/fiorentina", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/fiorentina", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/fiorentina", prezzo:89.9, desc:"", offline:false },
    },

    // ── ARSENAL
    { n:"Arsenal", c1:"#d0021b", c2:"#ffffff", tessuto:"",
      maglia:    { img:"maglia/arsenal", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/arsenal", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/arsenal", prezzo:89.9, desc:"", offline:false },
    },

    // ── CHELSEA
    { n:"Chelsea", c1:"#1c3f94", c2:"#ffffff", tessuto:"",
      maglia:    { img:"maglia/chelsea", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/chelsea", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/chelsea", prezzo:89.9, desc:"", offline:false },
    },

    // ── LIVERPOOL
    { n:"Liverpool", c1:"#c8102e", c2:"#ffffff", tessuto:"",
      maglia:    { img:"maglia/liverpool", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/liverpool", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/liverpool", prezzo:89.9, desc:"", offline:false },
    },

    // ── MANCHESTER CITY
    { n:"Manchester City", c1:"#6cabdd", c2:"#ffffff", tessuto:"",
      maglia:    { img:"maglia/manchestercity", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/manchestercity", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/manchestercity", prezzo:89.9, desc:"", offline:false },
    },

    // ── MANCHESTER UNITED
    { n:"Manchester United", c1:"#da291c", c2:"#111111", tessuto:"",
      maglia:    { img:"maglia/manchesterunited", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/manchesterunited", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/manchesterunited", prezzo:89.9, desc:"", offline:false },
    },

    // ── TOTTENHAM
    { n:"Tottenham", c1:"#f4f4f4", c2:"#132257", tessuto:"",
      maglia:    { img:"maglia/tottenham", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/tottenham", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/tottenham", prezzo:89.9, desc:"", offline:false },
    },

    // ── BARCELLONA
    { n:"Barcellona", c1:"#a50044", c2:"#004d98", tessuto:"",
      maglia:    { img:"maglia/barcellona", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/barcellona", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/barcellona", prezzo:89.9, desc:"", offline:false },
    },

    // ── REAL MADRID
    { n:"Real Madrid", c1:"#f4f4f4", c2:"#febe10", tessuto:"",
      maglia:    { img:"maglia/realmadrid", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/realmadrid", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/realmadrid", prezzo:89.9, desc:"", offline:false },
    },

    // ── ATLETICO MADRID
    { n:"Atletico Madrid", c1:"#cb3524", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"maglia/atleticomadrid", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/atleticomadrid", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/atleticomadrid", prezzo:89.9, desc:"", offline:false },
    },

    // ── BAYERN MONACO
    { n:"Bayern Monaco", c1:"#dc052d", c2:"#ffffff", tessuto:"",
      maglia:    { img:"maglia/bayernmonaco", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/bayernmonaco", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/bayernmonaco", prezzo:89.9, desc:"", offline:false },
    },

    // ── BORUSSIA DORTMUND
    { n:"Borussia Dortmund", c1:"#fde100", c2:"#111111", tessuto:"",
      maglia:    { img:"maglia/borussiadortmund", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/borussiadortmund", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/borussiadortmund", prezzo:89.9, desc:"", offline:false },
    },

    // ── PSG
    { n:"PSG", c1:"#004170", c2:"#da291c", tessuto:"",
      maglia:    { img:"maglia/psg", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/psg", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/psg", prezzo:89.9, desc:"", offline:false },
    },
  ],

  // ╔══════════ NAZIONALI ══════════
  "Nazionali": [

    // ── ITALIA
    { n:"Italia", c1:"#0a4ea3", c2:"#ffffff", tessuto:"",
      maglia:    { img:"maglia/italia", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/italia", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/italia", prezzo:89.9, desc:"", offline:false },
    },

    // ── FRANCIA
    { n:"Francia", c1:"#14308f", c2:"#ffffff", tessuto:"",
      maglia:    { img:"maglia/francia", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/francia", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/francia", prezzo:89.9, desc:"", offline:false },
    },

    // ── SPAGNA
    { n:"Spagna", c1:"#c60b1e", c2:"#ffc400", tessuto:"",
      maglia:    { img:"maglia/spagna", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/spagna", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/spagna", prezzo:89.9, desc:"", offline:false },
    },

    // ── GERMANIA
    { n:"Germania", c1:"#f4f4f4", c2:"#111111", tessuto:"",
      maglia:    { img:"maglia/germania", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/germania", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/germania", prezzo:89.9, desc:"", offline:false },
    },

    // ── INGHILTERRA
    { n:"Inghilterra", c1:"#f4f4f4", c2:"#14308f", tessuto:"",
      maglia:    { img:"maglia/inghilterra", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/inghilterra", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/inghilterra", prezzo:89.9, desc:"", offline:false },
    },

    // ── PORTOGALLO
    { n:"Portogallo", c1:"#8a1538", c2:"#006600", tessuto:"",
      maglia:    { img:"maglia/portogallo", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/portogallo", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/portogallo", prezzo:89.9, desc:"", offline:false },
    },

    // ── BRASILE
    { n:"Brasile", c1:"#ffdf00", c2:"#009c3b", tessuto:"",
      maglia:    { img:"maglia/brasile", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/brasile", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/brasile", prezzo:89.9, desc:"", offline:false },
    },

    // ── ARGENTINA
    { n:"Argentina", c1:"#75aadb", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"maglia/argentina", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/argentina", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/argentina", prezzo:89.9, desc:"", offline:false },
    },

    // ── OLANDA
    { n:"Olanda", c1:"#f77f00", c2:"#111111", tessuto:"",
      maglia:    { img:"maglia/olanda", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/olanda", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/olanda", prezzo:89.9, desc:"", offline:false },
    },

    // ── QATAR
    { n:"Qatar", c1:"#8a1538", c2:"#f4f4f4", tessuto:"",
      maglia:    { img:"maglia/qatar", prezzo:59.9, desc:"", offline:false },
      pantaloni: { img:"pantaloni/qatar", prezzo:34.9, desc:"", offline:false },
      completo:  { img:"completo/qatar", prezzo:89.9, desc:"", offline:false },
    },
  ],
  },
};

// ═══ 4) ARTICOLI SINGOLI (cappellini, felpe, accessori…) ═══
// Copia la riga di esempio (togli //), cambia i valori. cat: "Calcio", "F1", "NBA" o "Tute".
const ALTRI = [
  // { cat:"F1", name:"Cappellino Ferrari", desc:"Cappellino team", img:"", prezzo:null, tessuto:"", d:"", offline:false },
];
