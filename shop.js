// ===== CONFIGURAZIONE =====
const WHATSAPP = "393272792246"; // numero con prefisso, senza +
const PRODUCTS = [
  {id:4,cat:"F1",name:"Polo + Cappellino Team F1",desc:"Replica team stagione",price:49.9,c1:"#0a4d8c",c2:"#ffcc00"},
  {id:5,cat:"F1",name:"Giacca Paddock F1",desc:"Softshell antivento",price:64.9,c1:"#c1121f",c2:"#111111",tag:"NOVITÀ"},
  {id:6,cat:"NBA",name:"Completo NBA Icon",desc:"Canotta + shorts mesh",price:44.9,c1:"#f77f00",c2:"#1b1b2f",tag:"BEST SELLER"},
  {id:7,cat:"NBA",name:"Completo NBA Statement",desc:"Canotta + shorts mesh",price:44.9,c1:"#7b2fff",c2:"#ffd60a"},
  {id:8,cat:"Tute",name:"Tuta Allenamento Pro",desc:"Felpa zip + pantalone",price:54.9,c1:"#1f2937",c2:"#00f0ff"},
  {id:9,cat:"Tute",name:"Tuta Rappresentanza",desc:"Giacca + pantalone in acetato",price:59.9,c1:"#14532d",c2:"#ffffff"}
];
// DISPONIBILITÀ: un articolo è online solo se la squadra ha l'immagine (img) E il prezzo (price).
// Senza immagine/prezzo mostra "Terminato". Quando li aggiungi torna online da solo.
// Per mettere offline una squadra a mano scrivi off:true nella sua riga (toglilo per riattivarla).
// Metti NEED_PRICE = false se vuoi che basti l'immagine (prezzo standard 84,90 €).
const NEED_PRICE = true;
// Campi facoltativi per Solo maglia / Solo pantaloni (oltre a quelli del completo):
//   pm / pp = prezzo   imgm / imgp = immagine   dm / dp = descrizione   offm / offp:true = offline
// Esempio: {n:"Inter",...,img:"intermaglia",imgp:"interpantaloni",pm:59.9,pp:34.9,dp:"Pantaloncini Inter...",offp:true}
// Prezzi per squadra (facoltativi): price = completo, pm = solo maglia, pp = solo pantaloni.
// Esempio: {n:"Inter",...,price:89.9,pm:59.9,pp:34.9}. Se mancano si usano 84,90 € e i prezzi calcolati.
// Testi scheda (facoltativi): d = descrizione, tess = tessuto.
const TEAMS = [
   {n:"Atalanta",c1:"#0a3a8c",c2:"#111111",lg:"Serie A",img:"magliatalanta",price:89.9,pm:59.9,pp:34.9,tess:"100% cotone verificato",d:"Maglia Atalanta nei colori Nero e azzurro , in 100% cotone verificato: morbida sulla pelle, naturale e resistente ai lavaggi. Ideale per tifare tutti i giorni."},
  {n:"Bologna",c1:"#0a3a8c",c2:"#111111",lg:"Serie A",img:"magliabologna",price:89.9,pm:59.9,pp:34.9,tess:"100% cotone verificato",d:"Maglia Bologna nei colori Blu rosso, in 100% cotone verificato: morbida sulla pelle, naturale e resistente ai lavaggi. Ideale per tifare tutti i giorni."},
  {n:"Cagliari",c1:"#0a3a8c",c2:"#111111",lg:"Serie A",img:"magliacagliari",price:89.9,pm:59.9,pp:34.9,tess:"100% cotone verificato",d:"Maglia Cagliari nei colori Rosso blu, in 100% cotone verificato: morbida sulla pelle, naturale e resistente ai lavaggi. Ideale per tifare tutti i giorni."},
  {n:"Como",c1:"#0a3a8c",c2:"#111111",lg:"Serie A",img:"magliacomo",price:89.9,pm:59.9,pp:34.9,tess:"100% cotone verificato",d:"Maglia Como nei colori bianca azzurra, in 100% cotone verificato: morbida sulla pelle, naturale e resistente ai lavaggi. Ideale per tifare tutti i giorni."},
    {n:"Fioretina",c1:"#0a3a8c",c2:"#111111",lg:"Serie A",img:"magliafioretina",price:89.9,pm:59.9,pp:34.9,tess:"100% cotone verificato",d:"Maglia Fioretina nei colori Viola bianca, in 100% cotone verificato: morbida sulla pelle, naturale e resistente ai lavaggi. Ideale per tifare tutti i giorni."},
  {n:"Frosinone",c1:"#0a3a8c",c2:"#111111",lg:"Serie A",img:"magliafrosinone",price:89.9,pm:59.9,pp:34.9,tess:"100% cotone verificato",d:"Maglia Frosinone nei colori gialla azzurro, in 100% cotone verificato: morbida sulla pelle, naturale e resistente ai lavaggi. Ideale per tifare tutti i giorni."},
  {n:"Genoa",c1:"#b31b34",c2:"#0b2a5b",lg:"Serie A"},
  {n:"Inter",c1:"#0a3a8c",c2:"#111111",lg:"Serie A",img:"intermaglia",price:89.9,pm:59.9,pp:34.9,tess:"100% cotone verificato",d:"Maglia Inter nei colori nerazzurri, in 100% cotone verificato: morbida sulla pelle, naturale e resistente ai lavaggi. Ideale per tifare tutti i giorni."},
  {n:"Juventus",c1:"#f4f4f4",c2:"#111111",lg:"Serie A",img:"magliajuve"},
  {n:"Lazio",c1:"#87ceeb",c2:"#ffffff",lg:"Serie A"},
  {n:"Lecce",c1:"#f2c500",c2:"#d0021b",lg:"Serie A"},
  {n:"Milan",c1:"#d0021b",c2:"#111111",lg:"Serie A",
  img:"magliamilan"},
  {n:"Monza",c1:"#d0021b",c2:"#ffffff",lg:"Serie A"},
  {n:"Napoli",c1:"#1f8fd6",c2:"#ffffff",lg:"Serie A"},
  {n:"Parma",c1:"#f4f4f4",c2:"#ffd60a",lg:"Serie A"},
  {n:"Roma",c1:"#8b1e2d",c2:"#f5a623",lg:"Serie A"},
  {n:"Sassuolo",c1:"#00a651",c2:"#111111",lg:"Serie A"},
  {n:"Torino",c1:"#7a1f2b",c2:"#ffffff",lg:"Serie A"},
  {n:"Udinese",c1:"#f4f4f4",c2:"#111111",lg:"Serie A"},
  {n:"Venezia",c1:"#111111",c2:"#f58220",lg:"Serie A"},
  {n:"Arsenal",c1:"#d0021b",c2:"#ffffff",lg:"Premier League"},
  {n:"Chelsea",c1:"#1c3f94",c2:"#ffffff",lg:"Premier League"},
  {n:"Liverpool",c1:"#c8102e",c2:"#ffffff",lg:"Premier League",img:"maglialiver"},
  {n:"Manchester City",c1:"#6cabdd",c2:"#ffffff",lg:"Premier League",img:"magliamc"},
  {n:"Manchester United",c1:"#da291c",c2:"#111111",lg:"Premier League",img:"magliamu"},
  {n:"Tottenham",c1:"#f4f4f4",c2:"#132257",lg:"Premier League"},
  {n:"Newcastle",c1:"#111111",c2:"#f4f4f4",lg:"Premier League"},
  {n:"Aston Villa",c1:"#670e36",c2:"#95bfe5",lg:"Premier League"},
  {n:"Barcellona",c1:"#a50044",c2:"#004d98",lg:"LaLiga",img:"magliabarcellona"},
  {n:"Real Madrid",c1:"#f4f4f4",c2:"#febe10",lg:"LaLiga"},
  {n:"Atletico Madrid",c1:"#cb3524",c2:"#f4f4f4",lg:"LaLiga"},
  {n:"Siviglia",c1:"#f4f4f4",c2:"#d0021b",lg:"LaLiga"},
  {n:"Valencia",c1:"#f4f4f4",c2:"#111111",lg:"LaLiga"},
  {n:"Athletic Bilbao",c1:"#d0021b",c2:"#f4f4f4",lg:"LaLiga"},
  {n:"Real Sociedad",c1:"#0067b1",c2:"#f4f4f4",lg:"LaLiga"},
  {n:"Villarreal",c1:"#ffe667",c2:"#005187",lg:"LaLiga"},
  {n:"Bayern Monaco",c1:"#dc052d",c2:"#ffffff",lg:"Bundesliga"},
  {n:"Borussia Dortmund",c1:"#fde100",c2:"#111111",lg:"Bundesliga"},
  {n:"Bayer Leverkusen",c1:"#e32221",c2:"#111111",lg:"Bundesliga"},
  {n:"RB Lipsia",c1:"#f4f4f4",c2:"#dd0741",lg:"Bundesliga"},
  {n:"Eintracht Francoforte",c1:"#111111",c2:"#e1000f",lg:"Bundesliga"},
  {n:"PSG",c1:"#004170",c2:"#da291c",lg:"Ligue 1",img:"magliapsg"},
  {n:"Marsiglia",c1:"#f4f4f4",c2:"#2faee0",lg:"Ligue 1"},
  {n:"Lione",c1:"#f4f4f4",c2:"#1c3f94",lg:"Ligue 1"},
  {n:"Monaco",c1:"#e51b22",c2:"#f4f4f4",lg:"Ligue 1"},
  {n:"Benfica",c1:"#e30613",c2:"#f4f4f4",lg:"Altre"},
  {n:"Porto",c1:"#003c8f",c2:"#f4f4f4",lg:"Altre"},
  {n:"Sporting CP",c1:"#008057",c2:"#f4f4f4",lg:"Altre"},
  {n:"Ajax",c1:"#f4f4f4",c2:"#d2122e",lg:"Altre"},
  {n:"Galatasaray",c1:"#ffa500",c2:"#a90432",lg:"Altre"},
  {n:"Celtic",c1:"#16974b",c2:"#f4f4f4",lg:"Altre"},
  {n:"Al Sadd",c1:"#f4f4f4",c2:"#8a1538",lg:"Qatar"},
  {n:"Al Duhail",c1:"#d0021b",c2:"#f4f4f4",lg:"Qatar"},
  {n:"Al Gharafa",c1:"#f4f4f4",c2:"#1c3f94",lg:"Qatar"},
  {n:"Al Rayyan",c1:"#111111",c2:"#d0021b",lg:"Qatar"},
  {n:"Al Arabi",c1:"#f4f4f4",c2:"#b8860b",lg:"Qatar"},
  {n:"Al Wakrah",c1:"#f4c20d",c2:"#111111",lg:"Qatar"},
  {n:"Qatar SC",c1:"#8a1538",c2:"#f4f4f4",lg:"Qatar"},
  {n:"Al Ahli Doha",c1:"#1c6b3a",c2:"#f4f4f4",lg:"Qatar"},
  {n:"Umm Salal",c1:"#f4c20d",c2:"#8a1538",lg:"Qatar"},
  {n:"Al Shamal",c1:"#d0021b",c2:"#111111",lg:"Qatar"},
  {n:"Al Khor",c1:"#f4f4f4",c2:"#1c3f94",lg:"Qatar"},
  {n:"Al Shahaniya",c1:"#1c3f94",c2:"#f4f4f4",lg:"Qatar"},
  {n:"Italia",c1:"#0a4ea3",c2:"#ffffff",lg:"Nazionali",img:"magliaitalia"},
  {n:"Francia",c1:"#14308f",c2:"#ffffff",lg:"Nazionali",img:"magliafrancia"},
  {n:"Spagna",c1:"#c60b1e",c2:"#ffc400",lg:"Nazionali"},
  {n:"Germania",c1:"#f4f4f4",c2:"#111111",lg:"Nazionali"},
  {n:"Inghilterra",c1:"#f4f4f4",c2:"#14308f",lg:"Nazionali"},
  {n:"Portogallo",c1:"#8a1538",c2:"#006600",lg:"Nazionali"},
  {n:"Olanda",c1:"#f77f00",c2:"#111111",lg:"Nazionali"},
  {n:"Belgio",c1:"#d0021b",c2:"#111111",lg:"Nazionali"},
  {n:"Croazia",c1:"#f4f4f4",c2:"#d0021b",lg:"Nazionali"},
  {n:"Svizzera",c1:"#d0021b",c2:"#f4f4f4",lg:"Nazionali"},
  {n:"Danimarca",c1:"#c8102e",c2:"#f4f4f4",lg:"Nazionali"},
  {n:"Polonia",c1:"#f4f4f4",c2:"#dc143c",lg:"Nazionali"},
  {n:"Austria",c1:"#d0021b",c2:"#f4f4f4",lg:"Nazionali"},
  {n:"Turchia",c1:"#e30a17",c2:"#f4f4f4",lg:"Nazionali"},
  {n:"Svezia",c1:"#fecc00",c2:"#006aa7",lg:"Nazionali"},
  {n:"Norvegia",c1:"#ba0c2f",c2:"#00205b",lg:"Nazionali"},
  {n:"Scozia",c1:"#0b2a5b",c2:"#f4f4f4",lg:"Nazionali"},
  {n:"Serbia",c1:"#c6363c",c2:"#0c4076",lg:"Nazionali"},
  {n:"Ucraina",c1:"#ffd500",c2:"#0057b7",lg:"Nazionali"},
  {n:"Brasile",c1:"#ffdf00",c2:"#009c3b",lg:"Nazionali"},
  {n:"Argentina",c1:"#75aadb",c2:"#f4f4f4",lg:"Nazionali"},
  {n:"Uruguay",c1:"#5cbfeb",c2:"#111111",lg:"Nazionali"},
  {n:"Colombia",c1:"#fcd116",c2:"#003893",lg:"Nazionali"},
  {n:"Ecuador",c1:"#fcd116",c2:"#034ea2",lg:"Nazionali"},
  {n:"Messico",c1:"#006847",c2:"#f4f4f4",lg:"Nazionali"},
  {n:"USA",c1:"#f4f4f4",c2:"#0a3161",lg:"Nazionali"},
  {n:"Canada",c1:"#d80621",c2:"#f4f4f4",lg:"Nazionali"},
  {n:"Marocco",c1:"#c1272d",c2:"#006233",lg:"Nazionali"},
  {n:"Senegal",c1:"#f4f4f4",c2:"#00853f",lg:"Nazionali"},
  {n:"Nigeria",c1:"#008751",c2:"#f4f4f4",lg:"Nazionali"},
  {n:"Egitto",c1:"#ce1126",c2:"#111111",lg:"Nazionali"},
  {n:"Algeria",c1:"#f4f4f4",c2:"#006233",lg:"Nazionali"},
  {n:"Tunisia",c1:"#e70013",c2:"#f4f4f4",lg:"Nazionali"},
  {n:"Costa d'Avorio",c1:"#f77f00",c2:"#009e60",lg:"Nazionali"},
  {n:"Ghana",c1:"#f4f4f4",c2:"#006b3f",lg:"Nazionali"},
  {n:"Camerun",c1:"#007a5e",c2:"#ce1126",lg:"Nazionali"},
  {n:"Giappone",c1:"#1c3f94",c2:"#f4f4f4",lg:"Nazionali"},
  {n:"Corea del Sud",c1:"#c60c30",c2:"#f4f4f4",lg:"Nazionali"},
  {n:"Australia",c1:"#ffcd00",c2:"#00843d",lg:"Nazionali"},
  {n:"Iran",c1:"#f4f4f4",c2:"#239f40",lg:"Nazionali"},
  {n:"Arabia Saudita",c1:"#006c35",c2:"#f4f4f4",lg:"Nazionali"},
  {n:"Qatar",c1:"#8a1538",c2:"#f4f4f4",lg:"Nazionali"}
];
TEAMS.map((t,i)=>[t,i]).reverse().forEach(([t,i])=>PRODUCTS.unshift({id:100+i,cat:"Calcio",team:t.n,lg:t.lg,name:"Completo "+t.n,desc:"Maglia + pantaloncini",price:t.price||84.9,ok:!t.off&&!!t.img&&(!NEED_PRICE||t.price!=null),pm:t.pm,pp:t.pp,imgm:t.imgm,imgp:t.imgp,dm:t.dm,dp:t.dp,offm:t.offm,offp:t.offp,d:t.d,tess:t.tess,c1:t.c1,c2:t.c2,img:t.img}));
// Varianti: completo, solo maglia, solo pantaloni (Calcio, NBA, Tute)
const KC = ["Calcio","NBA","Tute"], TYPES = ["Completo","Solo maglia","Solo pantaloni","Tutti"];
PRODUCTS.filter(p => KC.includes(p.cat)).forEach(p => {
  p.kind = "Completo"; p.base = p.id; if (p.ok === undefined) p.ok = !!p.img;
  [["Solo maglia",.7,p.cat==="Tute"?"Giacca":"Maglia"],["Solo pantaloni",.45,p.cat==="Tute"?"Pantalone":"Pantaloni"]].forEach(([k,f,w],j) => {
    const nm = p.name.replace(/^Completo |^Tuta /,"");
    PRODUCTS.push({...p, id:p.id*10+j+1, kind:k, name:w+" "+nm, desc:k, price:(j===0?p.pm:p.pp) ?? +(Math.round(p.price*f)-0.1).toFixed(2), tag:undefined, img:k==="Solo pantaloni"?p.imgp:(p.imgm||p.img), d:k==="Solo pantaloni"?(p.dp||p.d):(p.dm||p.d), ok:p.ok&&!(j===0?p.offm:p.offp)});
  });
});
PRODUCTS.forEach(p => {if (p.ok === undefined) p.ok = !!p.img});
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
  } else r = PRODUCTS.filter(p => (cat==="Tutti" ? (!p.kind || p.kind==="Completo") : (p.cat===cat && (kind==="Tutti" || p.kind===kind))) && (cat!=="Calcio" || ((lg==="Tutte" || p.lg===lg) && (team==="Tutte" || p.team===team))));
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
  const LGS = ["Tutte","Serie A","Premier League","LaLiga","Bundesliga","Ligue 1","Qatar","Nazionali","Altre"];
  $("#lf").innerHTML = cat==="Calcio" ? LGS.map(n => `<button class="chip sm${n===lg?" on":""}" data-l="${n}" type="button">${n==="Altre"?"Altri campionati":n}</button>`).join("") : "";
  $("#tf").innerHTML = cat==="Calcio" && lg!=="Tutte" ? ["Tutte",...TEAMS.filter(t=>t.lg===lg).map(t=>t.n)].map(n => `<button class="chip sm${n===team?" on":""}" data-t="${n}" type="button">${n}</button>`).join("") : "";
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
  <div class="pdx"><div class="slb">${p.cat}${p.cat==="Calcio"&&p.lg?" · "+p.lg:""}</div>
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
