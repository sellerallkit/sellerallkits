// ═══════════════════════════════════════════════════════════════
//  333 SPORT STORE — shop.js  (CODICE: non serve modificarlo)
//  Prodotti, immagini, prezzi e descrizioni si cambiano in catalogo.js
// ═══════════════════════════════════════════════════════════════
function avviso(msg){
  const b = document.createElement("div");
  b.style.cssText = "position:fixed;z-index:2147483647;left:0;right:0;top:0;background:#b91c1c;color:#fff;padding:10px 14px;font:13px/1.4 monospace";
  b.textContent = msg; document.body.appendChild(b);
}
addEventListener("error", e => avviso("Errore: " + e.message + " (" + (e.filename||"").split("/").pop() + ", riga " + e.lineno + ")"));
const CFG = {whatsapp:"393272792246", servePrezzo:true, cercaInRoot:true, ...(typeof IMPOSTAZIONI !== "undefined" ? IMPOSTAZIONI : {})};
CFG.cartelle = {maglia:"maglia", pantaloni:"pantaloni", completo:"completo", altri:"altri", ...(CFG.cartelle || {})};
const DATA = (typeof CATALOGO !== "undefined" && CATALOGO) || {};
const EXTRA = (typeof ALTRI !== "undefined" && Array.isArray(ALTRI)) ? ALTRI : [];
if (typeof CATALOGO === "undefined") avviso("catalogo.js non si carica o contiene un errore: controlla virgole, parentesi e virgolette (o che il file sia nella stessa cartella).");
const num = v => {const n = parseFloat(String(v == null ? "" : v).replace(",", ".")); return isFinite(n) && n > 0 ? n : 0};
const nomeImg = v => String(v || "").trim();
const hasExt = n => /\.(png|jpe?g|webp|gif)$/i.test(n);
// Percorsi da provare: prima la cartella della sezione (maglia/, pantaloni/, completo/), poi la cartella principale.
// Con l'estensione scritta (es. "intermaglia.png") le richieste sono meno.
function percorsi(name, folder){
  if (!name) return [];
  const exts = hasExt(name) ? [""] : [".png", ".jpg", ".jpeg", ".webp"];
  const dirs = name.includes("/") ? [""] : [folder ? folder + "/" : "", ...(folder && CFG.cercaInRoot ? [""] : [])];
  return [...new Set(dirs.flatMap(d => exts.map(e => d + name + e)))];
}
const NOMI = {
  Calcio:{c:"Completo",m:"Maglia",p:"Pantaloni",dc:"Maglia + pantaloncini"},
  F1:{c:"Completo",m:"Maglia",p:"Pantaloni",dc:"Maglia + pantaloni"},
  NBA:{c:"Completo",m:"Canotta",p:"Shorts",dc:"Canotta + shorts"},
  Tute:{c:"Tuta",m:"Giacca",p:"Pantalone",dc:"Giacca + pantalone"}};
const TEAMS = Object.entries(DATA).flatMap(([cat, gr]) => NOMI[cat] ? Object.entries(gr || {}).flatMap(([lg, arr]) => (Array.isArray(arr) ? arr : []).filter(t => t && t.n).map(t => ({c1:"#1f2937", c2:"#00f0ff", ...t, cat, lg}))) : []);
const KC = ["Calcio","F1","NBA","Tute"], TYPES = ["Completo","Solo maglia","Solo pantaloni","Tutti"];
const KEYS = {"Completo":"completo","Solo maglia":"maglia","Solo pantaloni":"pantaloni"};
function teamItem(t, i, kind){
  const s = t[KEYS[kind]] || {}, cp = num(t.completo && t.completo.prezzo) || 84.9, N = NOMI[t.cat];
  const pr = num(s.prezzo), img = nomeImg(s.img);
  const price = pr || +((kind==="Completo") ? cp : Math.round(cp*(kind==="Solo maglia"?.7:.45))-0.1).toFixed(2);
  const w = kind==="Completo" ? N.c : kind==="Solo maglia" ? N.m : N.p;
  return {id:(100+i)*(kind==="Completo"?1:10)+({"Solo maglia":1,"Solo pantaloni":2}[kind]||0),
    cat:t.cat, team:t.n, lg:t.lg, kind, base:100+i, name:w+" "+t.n, desc:kind==="Completo"?N.dc:kind,
    price, c1:t.c1, c2:t.c2, img:img||undefined, imgs:percorsi(img, CFG.cartelle[KEYS[kind]]), d:String(s.desc||"").trim()||undefined, tess:String(t.tessuto||"").trim()||undefined,
    ok:true};
}
const PRODUCTS = EXTRA.filter(a => a && a.name && NOMI[a.cat]).map((a,j) => ({id:1+j, cat:a.cat, kind:"Completo", name:a.name, desc:a.desc||"", price:num(a.prezzo),
  c1:a.c1||"#1f2937", c2:a.c2||"#00f0ff", img:nomeImg(a.img)||undefined, imgs:percorsi(nomeImg(a.img), CFG.cartelle.altri), d:a.d||undefined, tess:a.tessuto||undefined,
  ok:true}));
PRODUCTS.push(...TEAMS.map((t,i) => teamItem(t,i,"Completo")));
TEAMS.forEach((t,i) => PRODUCTS.push(teamItem(t,i,"Solo maglia"), teamItem(t,i,"Solo pantaloni")));
const SIZES = ["S","M","L","XL","XXL"], CATS = ["Tutti","Calcio","F1","NBA","Tute"];
// ===== OFFERTE (config in catalogo.js) =====
const OFF = (typeof OFFERTE !== "undefined" && OFFERTE) || {attive:false};
const OFF_FINE = OFF.fino ? new Date(OFF.fino).getTime() : 0;
const OFF_ON = !!OFF.attive && (!OFF_FINE || OFF_FINE > Date.now());
const offPct = p => Math.max(+OFF.tutto||0, +(OFF.categorie||{})[p.cat]||0, +(OFF.squadre||{})[p.team]||0, +(OFF.articoli||{})[p.name]||0);
if (OFF_ON) PRODUCTS.forEach(p => {const pc = Math.min(90, offPct(p)); if (pc > 0 && p.ok && p.price > 0) {p.old = p.price; p.sc = pc; p.price = Math.round(p.price*(100-pc))/100}});
const IN_OFFERTA = PRODUCTS.filter(p => p.sc);
if (IN_OFFERTA.length) CATS.splice(1, 0, "Offerte");
CATS.push("Preferiti");
const FAV = new Set(); try {JSON.parse(localStorage.getItem("fav") || "[]").forEach(x => FAV.add(+x))} catch(e) {}
let RECENT = []; try {RECENT = JSON.parse(localStorage.getItem("rec") || "[]").map(Number).filter(x => PRODUCTS.some(p => p.id === x))} catch(e) {}
const saveFav = () => {try {localStorage.setItem("fav", JSON.stringify([...FAV]))} catch(e) {}};
// ==========================
// Se nell'index.html manca qualche elemento (es. file vecchio) il sito continua a funzionare lo stesso
const NOEL = () => new Proxy({style:{}, classList:{toggle(){},add(){},remove(){},contains:()=>false}, parentElement:{style:{}}, dataset:{}},
  {get:(t,k) => k in t ? t[k] : "", set:() => true});
const $ = s => document.querySelector(s) || NOEL();
const fmt = n => n.toFixed(2).replace(".", ",") + " €";
let q = "", so = "";
let cart = (() => {try {return JSON.parse(localStorage.getItem("cart") || "[]").filter(i => i && PRODUCTS.some(p => p.id === +i.id && p.ok) && i.q > 0 && SIZES.includes(i.size))} catch(e) {return []}})(), kind = "Completo", cat = "Tutti", team = "Tutte", lg = "Tutte";
const find = id => PRODUCTS.find(p => p.id === id);
const wa = t => `https://wa.me/${CFG.whatsapp}?text=${encodeURIComponent(t)}`;
const pants = p => `<svg viewBox="0 0 120 120" aria-hidden="true"><path d="M30 18h60l6 84H66L60 54l-6 48H24z" fill="${p.c1}" stroke="${p.c2}" stroke-width="3" stroke-linejoin="round"/><rect x="30" y="18" width="60" height="9" fill="${p.c2}" opacity=".85"/></svg>`;
const art = p => p.kind==="Solo pantaloni" ? pants(p) : jersey(p);
const jersey = p => `<svg viewBox="0 0 120 120" aria-hidden="true"><path d="M40 12l-28 16 10 22 14-6v58h48V44l14 6 10-22L80 12c-4 8-12 12-20 12s-16-4-20-12z" fill="${p.c1}" stroke="${p.c2}" stroke-width="3" stroke-linejoin="round"/><rect x="42" y="70" width="36" height="8" rx="2" fill="${p.c2}" opacity=".85"/></svg>`;

const norm = s => (s||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");
function list(){
  let r;
  if (q) { const w = norm(q).split(/\s+/).filter(Boolean);
    r = PRODUCTS.filter(p => { const h = norm([p.name,p.team,p.lg,p.cat,p.kind,p.desc].join(" ")); return w.every(x => h.includes(x)); });
  } else r = cat==="Preferiti" ? PRODUCTS.filter(p => FAV.has(p.id)) : cat==="Offerte" ? IN_OFFERTA.slice() : PRODUCTS.filter(p => (cat==="Tutti" ? (!p.kind || p.kind==="Completo") : (p.cat===cat && (kind==="Tutti" || p.kind===kind))) && (cat==="Tutti" || ((lg==="Tutte" || p.lg===lg) && (team==="Tutte" || p.team===team))));
  if (so === "pa") r = [...r].sort((a,b) => a.price-b.price);
  if (so === "pd") r = [...r].sort((a,b) => b.price-a.price);
  if (so === "az") r = [...r].sort((a,b) => a.name.localeCompare(b.name,"it"));
  if (!so) r = [...r.filter(p => p.ok), ...r.filter(p => !p.ok)];
  return r;
}
function renderFilters(){
  $("#flt").innerHTML = CATS.map(c => `<button class="chip${c===cat?" on":""}" data-c="${c}" type="button">${c==="Offerte"?"🔥 Offerte":c==="Preferiti"?"♥ Preferiti"+(FAV.size?" ("+FAV.size+")":""):c}</button>`).join("");
  $("#kf").innerHTML = KC.includes(cat) ? TYPES.map(n => `<button class="chip${n===kind?" on":""}" data-k="${n}" type="button">${n}</button>`).join("") : "";
  const GR = [...new Set(TEAMS.filter(t => t.cat===cat).map(t => t.lg))], multi = GR.length > 1;
  $("#lf").innerHTML = multi ? ["Tutte",...GR].map(n => `<button class="chip sm${n===lg?" on":""}" data-l="${n}" type="button">${n}</button>`).join("") : "";
  $("#tf").innerHTML = KC.includes(cat) && (!multi || lg!=="Tutte") ? ["Tutte",...TEAMS.filter(t => t.cat===cat && (!multi || t.lg===lg)).map(t => t.n)].map(n => `<button class="chip sm${n===team?" on":""}" data-t="${n}" type="button">${n}</button>`).join("") : "";
  rows();
}
function rows(){["kf","lf","tf"].forEach(id => {const el = $("#"+id); el.parentElement.style.display = el.innerHTML ? "" : "none"})}
const IMG_KO = {};
function imgNext(el){
  const p = find(+el.dataset.id) || {}, L = p.imgs || [], i = +el.dataset.i + 1;
  if (i < L.length) {el.dataset.i = i; el.src = L[i]; return}
  if (!IMG_KO[p.id]) {IMG_KO[p.id] = 1; console.warn("Immagine non trovata per «" + p.name + "». Provati:", L.join(" , "));
    if (/[?&]debug/.test(location.search)) {let d = document.getElementById("imgdbg"); if (!d) {d = document.createElement("div"); d.id = "imgdbg";
      d.style.cssText = "position:fixed;z-index:2147483647;left:0;right:0;bottom:0;max-height:40vh;overflow:auto;background:#7c2d12;color:#fff;padding:10px 14px;font:12px/1.5 monospace"; document.body.appendChild(d)}
      d.textContent += "NON TROVATA: " + L[0] + "  (provati: " + L.join(", ") + ")\n"; d.style.whiteSpace = "pre-wrap"}}
  el.outerHTML = el.dataset.fb;
}
function renderGrid(){
  const L = list(), n = L.length;
  $("#rc").textContent = (q ? `${n} risultat${n===1?"o":"i"} per «${q}»` : `${n} articol${n===1?"o":"i"}`);
  if (!n) { $("#pg").innerHTML = '<p class="empty">Nessun articolo trovato. <button class="chip sm" data-reset="1" type="button">Azzera filtri</button></p>'; return; }
  $("#pg").innerHTML = L.map(p => `
  <article class="pr${p.ok?"":" soldout"}">
    <div class="pp${p.ok?"":" out"}" data-open="${p.id}" style="background:linear-gradient(145deg,${p.c1}33,${p.c2}18)"><button class="ib" data-open="${p.id}" type="button" aria-label="Informazioni su ${p.name}" title="Informazioni">i</button><button class="hb${FAV.has(p.id)?" on":""}" data-fav="${p.id}" type="button" aria-label="Aggiungi ai preferiti" aria-pressed="${FAV.has(p.id)}">${FAV.has(p.id)?"♥":"♡"}</button>${!p.ok?'<span class="pt out">TERMINATI</span>':p.sc?`<span class="pt sale">-${p.sc}%</span>`:p.tag?`<span class="pt">${p.tag}</span>`:""}${p.img?`<img src="${p.imgs[0]}" data-id="${p.id}" data-i="0" data-fb='${art(p)}' alt="${p.name}" loading="lazy" decoding="async" onerror="imgNext(this)">`:art(p)}</div>
    <div class="pi"><div><div class="pn" data-open="${p.id}">${p.name}</div><div class="pd">${p.cat} · ${p.desc}</div><div class="pd">${info(p).tess}</div></div>
      <div class="prow"><span class="pv">${p.old?`<s class="po">${fmt(p.old)}</s>`:""}${fmt(p.price)}</span>
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
  const lines = cart.map(i => `- ${i.q}x ${find(i.id).name} (taglia ${i.size}) ${fmt(find(i.id).price*i.q)}${find(i.id).sc?` (offerta -${find(i.id).sc}%)`:""}`);
  const msg = `Ciao, vorrei ordinare:\n${lines.join("\n")}\nSpedizione: ${ship?fmt(ship):"gratuita"}\nTotale: ${fmt(sub+ship)}${NOTE() ? "\nNote: " + NOTE() : ""}`;
  $("#checkout").href = cart.length ? wa(msg) : "#";
  $("#checkout").classList.toggle("off", !cart.length);
  try {localStorage.setItem("cart", JSON.stringify(cart))} catch(e) {}
  shipBar(sub, cart.length);
}
function NOTE(){const n = document.getElementById("cnote"); return n ? n.value.trim().replace(/\s+/g," ") : ""}
function shipBar(sub, n){
  let b = document.getElementById("shipb");
  if (!b) {const t = document.querySelector("#drawer .tot"); if (!t) return; t.insertAdjacentHTML("beforebegin", '<textarea id="cnote" rows="2" maxlength="300" placeholder="Note o personalizzazione (nome e numero: +9 €)"></textarea><div id="shipb"></div>'); b = document.getElementById("shipb"); const cn = document.getElementById("cnote"); try {cn.value = localStorage.getItem("cnote") || ""} catch(e) {}}
  const cn2 = document.getElementById("cnote"); if (cn2) cn2.hidden = !n;
  const m = 80 - sub; b.hidden = !n;
  const was = b.classList.contains("ok"); b.className = m <= 0 ? "ok" : "";
  if (m <= 0 && n && !was && window.confetti) window.confetti();
  b.innerHTML = (m <= 0 ? "🎉 <b>Spedizione gratuita!</b>" : "Ti mancano <b>" + fmt(m) + "</b> per la spedizione gratuita") + '<i><u style="width:' + Math.min(100, sub / .8) + '%"></u></i>';
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
function pic(p){return p.img ? `<img src="${p.imgs[0]}" data-id="${p.id}" data-i="0" data-fb='${art(p)}' alt="${p.name}" onerror="imgNext(this)">` : art(p)}
function openP(id){
  const p = find(id); if (!p) return closeP(true);
  pushRecent(p.id);
  const i = info(p), sib = p.base ? PRODUCTS.filter(x => x.base === p.base) : [];
  const rows = [["Tessuto",i.tess],["Vestibilità",i.vest],["Include",i.inc],["Cura",i.cura],["Taglie",SIZES.join(" · ")],["Spedizione","In 48 ore, gratis sopra 80 €"],["Cambio taglia","Entro 14 giorni"]];
  $("#pd").innerHTML = `<div class="pdw"><button class="pdb" data-close="1" type="button"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>Torna al catalogo</button>
  <div class="pdg"><div class="pdi${p.ok?"":" out"}" style="background:linear-gradient(145deg,${p.c1}33,${p.c2}18)">${pic(p)}</div>
  <div class="pdx"><div class="slb">${p.cat}${p.lg?" · "+p.lg:""}</div>
    <h2 class="st">${p.name}</h2><div class="pdp">${p.old?`<s class="po">${fmt(p.old)}</s>`:""}${fmt(p.price)}${p.sc?`<span class="pt sale inl">-${p.sc}%</span>`:""}</div>${p.ok?"":'<div class="pdo">Terminato</div>'}
    ${sib.length>1?`<div class="flt sub">${sib.map(x=>`<button class="chip sm${x.id===p.id?" on":""}" data-open="${x.id}" type="button">${x.kind} · ${fmt(x.price)}</button>`).join("")}</div>`:""}
    <p class="ss2">${i.desc}</p>
    <dl class="pds">${rows.map(([a,b])=>`<div><dt>${a}</dt><dd>${b}</dd></div>`).join("")}</dl>
    <div class="prow"><select id="ds" aria-label="Taglia"${p.ok?"":" disabled"}>${SIZES.map(s=>`<option${s==="L"?" selected":""}>${s}</option>`).join("")}</select>
    ${p.ok?`<button class="bp" data-addd="${p.id}" type="button">Aggiungi al carrello</button>`:`<button class="bp" type="button" disabled>Terminato</button>`}</div>
    <a class="cl2" target="_blank" rel="noopener" href="${wa((p.ok?"Ciao, vorrei info su: ":"Ciao, vorrei sapere quando torna disponibile: ")+p.name+(p.ok?" ("+fmt(p.price)+")":""))}">${p.ok?"Chiedi info su WhatsApp":"Avvisami quando torna disponibile"}</a>
    <button class="cl2 shr" data-share="${p.id}" type="button">Condividi</button>
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
  const fq = t.closest(".x-faq-q"); if (fq) fq.parentElement.classList.toggle("open");
});
document.addEventListener("keydown", e => {if(e.key==="Escape"){if($("#drawer").classList.contains("open"))toggle(false);else closeP()}});

// Marquee + link WhatsApp
const items = [...(IN_OFFERTA.length ? ["OFFERTE FINO A -" + Math.max(...IN_OFFERTA.map(p => p.sc)) + "%"] : []),"CALCIO","FORMULA 1","NBA","TUTE","SPEDIZIONE 48H","CAMBIO TAGLIA GRATIS"];
const strip = items.map(i => `<span class="mq-i">${i}</span><span class="mq-s"></span>`).join("");
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

// Modalità giorno / notte (crea da solo il pulsante se manca nella navbar)
(function(){
  const r = document.documentElement;
  let t = r.dataset.theme;
  if (!t) {try {t = localStorage.getItem("tema")} catch(e) {} t = t || "light"; r.dataset.theme = t}
  let b = document.getElementById("themeBtn");
  if (!b) {
    const nav = document.querySelector("nav"), cart = document.getElementById("openCart");
    if (!nav) return;
    b = document.createElement("button");
    b.id = "themeBtn"; b.className = "tgl"; b.type = "button";
    b.setAttribute("aria-label", "Cambia modalità giorno/notte"); b.title = "Giorno / Notte";
    b.innerHTML = '<svg class="i-sun" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg><svg class="i-moon" viewBox="0 0 24 24"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';
    if (cart && !cart.parentElement.classList.contains("nr")) {
      const w = document.createElement("div"); w.className = "nr";
      cart.parentNode.insertBefore(w, cart); w.appendChild(b); w.appendChild(cart);
    } else if (cart) cart.parentElement.insertBefore(b, cart);
    else nav.appendChild(b);
  }
  let m = document.querySelector('meta[name="theme-color"]');
  if (!m) {m = document.createElement("meta"); m.name = "theme-color"; document.head.appendChild(m)}
  const apply = () => {m.content = r.dataset.theme === "light" ? "#ffffff" : "#06060f"};
  apply();
  b.addEventListener("click", () => {
    const n = r.dataset.theme === "light" ? "dark" : "light";
    r.dataset.theme = n; apply();
    try {localStorage.setItem("tema", n)} catch(e) {}
  });
})();

// EXTRA: barra scorrimento, torna su, toast, effetti (telefono + PC), offerte
(function(){
  const d = document, mk = (t,id,h) => {const e = d.createElement(t); e.id = id; if (h) e.innerHTML = h; d.body.appendChild(e); return e};
  const sp = mk("div","sp");
  const up = mk("button","totop",'<svg viewBox="0 0 24 24"><path d="M12 19V5M5 12l7-7 7 7"/></svg>');
  up.type = "button"; up.setAttribute("aria-label","Torna su");
  up.onclick = () => scrollTo({top:0,behavior:"smooth"});
  const nav = d.querySelector("nav");
  let tk = false;
  const onScroll = () => {
    if (tk) return; tk = true;
    requestAnimationFrame(() => {
      const y = scrollY, h = d.documentElement.scrollHeight - innerHeight;
      sp.style.transform = "scaleX(" + (h > 0 ? Math.min(y / h, 1) : 0) + ")";
      up.classList.toggle("on", y > 700);
      if (nav) nav.classList.toggle("sc", y > 20);
      tk = false;
    });
  };
  addEventListener("scroll", onScroll, {passive:true}); onScroll();

  // contatore carrello: animazione + toast
  const cnt = d.getElementById("count"), toast = mk("div","toast");
  let last = parseInt(cnt && cnt.textContent) || 0, tt;
  window.toastMsg = m => {toast.innerHTML = "<i>✓</i>" + m; toast.classList.add("on"); clearTimeout(tt); tt = setTimeout(() => toast.classList.remove("on"), 1800)};
  if (cnt) new MutationObserver(() => {
    const n = parseInt(cnt.textContent) || 0;
    if (n > last) {
      cnt.classList.remove("bump"); void cnt.offsetWidth; cnt.classList.add("bump");
      toast.innerHTML = "<i>✓</i>Aggiunto al carrello";
      toast.classList.add("on"); clearTimeout(tt); tt = setTimeout(() => toast.classList.remove("on"), 1800);
    }
    last = n;
  }).observe(cnt, {childList:true, characterData:true, subtree:true});

  // parallax maglia + alone: funziona con mouse E con il dito
  const g = mk("div","glow"); let gt;
  addEventListener("pointermove", e => {
    g.style.transform = "translate(" + e.clientX + "px," + e.clientY + "px)"; g.classList.add("on");
    const pp = e.target.closest && e.target.closest(".pp");
    if (pp) {
      const r = pp.getBoundingClientRect();
      pp.style.setProperty("--mx", ((e.clientX - r.left) / r.width - .5) * 14 + "px");
      pp.style.setProperty("--my", ((e.clientY - r.top) / r.height - .5) * 14 + "px");
    }
  }, {passive:true});
  const reset = e => {
    clearTimeout(gt); gt = setTimeout(() => g.classList.remove("on"), e.pointerType === "mouse" ? 0 : 500);
    d.querySelectorAll(".pp").forEach(p => {p.style.setProperty("--mx","0px"); p.style.setProperty("--my","0px")});
  };
  addEventListener("pointerup", reset); addEventListener("pointercancel", reset);
  d.addEventListener("pointerleave", () => g.classList.remove("on"));

  // card che compaiono scorrendo (telefono e PC)
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(es => es.forEach(en => {
      if (!en.isIntersecting) return;
      const el = en.target; io.unobserve(el);
      el.classList.add("rv1"); el.classList.remove("rv0"); setTimeout(() => el.classList.remove("rv1"), 700);
    }), {rootMargin:"0px 0px -6% 0px"});
    const arm = el => {if (el.matches && el.matches(".pr,.oc") && !el.dataset.rv) {el.dataset.rv = 1; el.classList.add("rv0"); io.observe(el)}};
    const pg = d.getElementById("pg");
    const scan = root => (root || d).querySelectorAll(".pr,.oc").forEach(arm);
    if (pg) {new MutationObserver(() => scan(pg)).observe(pg, {childList:true}); scan(pg)}
    window.__rvScan = scan;
  }

  // ===== SEZIONE OFFERTE =====
  if (!IN_OFFERTA.length) return;
  const top = IN_OFFERTA.filter(p => p.ok).sort((a,b) => b.sc-a.sc || (a.kind==="Completo"?0:1)-(b.kind==="Completo"?0:1) || a.price-b.price).slice(0, 12);
  const maxSc = Math.max(...IN_OFFERTA.map(p => p.sc));
  const cat = d.getElementById("catalogo");
  if (cat) {
    cat.insertAdjacentHTML("beforebegin", `<section class="sec" id="offerte"><div class="con">
      <div class="ohd"><div><div class="slb">Offerte</div><h2 class="st">${OFF.titolo || "Offerte del momento"}</h2>
        ${OFF_FINE ? '<div class="ocd">🔥 Finisce tra <b id="ocd"></b></div>' : ""}</div>
        <div class="onav"><button type="button" id="oprev" aria-label="Indietro">‹</button><button type="button" id="onext" aria-label="Avanti">›</button></div></div>
      <div class="osc" id="osc">${top.map(p => `<article class="oc" data-open="${p.id}"><div class="pp" style="background:linear-gradient(145deg,${p.c1}33,${p.c2}18)"><span class="pt sale">-${p.sc}%</span>${pic(p)}</div>
        <div class="oi"><div class="pn">${p.name}</div><div class="pd">${p.cat} · ${p.desc}</div><div class="op"><s class="po">${fmt(p.old)}</s><b>${fmt(p.price)}</b></div></div></article>`).join("")}
        <a class="oc oall" href="#catalogo" data-c="Offerte"><b>Vedi tutte</b><span>${IN_OFFERTA.length} articoli in offerta</span></a></div>
    </div></section><div class="div"></div>`);
    const sc = d.getElementById("osc");
    d.getElementById("oprev").onclick = () => sc.scrollBy({left:-sc.clientWidth*.8, behavior:"smooth"});
    d.getElementById("onext").onclick = () => sc.scrollBy({left:sc.clientWidth*.8, behavior:"smooth"});
    if (window.__rvScan) window.__rvScan(sc);
  }
  const ul = d.querySelector("nav ul"); if (ul) ul.insertAdjacentHTML("afterbegin", '<li><a href="#offerte">Offerte</a></li>');
  const hc = d.querySelector(".hcta");
  if (hc) hc.insertAdjacentHTML("beforebegin", `<div class="obw"><a class="obn" href="#offerte">🔥 Offerte fino a -${maxSc}%</a></div>`);
  if (OFF_FINE) {
    const el = d.getElementById("ocd");
    const tick = () => {
      let s = Math.max(0, (OFF_FINE - Date.now()) / 1000 | 0);
      if (s <= 0 && el) {location.reload(); return}
      const g = s / 86400 | 0, h = s % 86400 / 3600 | 0, m = s % 3600 / 60 | 0, x = s % 60;
      if (el) el.textContent = (g ? g + "g " : "") + [h,m,x].map(n => String(n).padStart(2,"0")).join(":");
    };
    tick(); setInterval(tick, 1000);
  }
})();

// Preferiti (cuoricino) — il click non apre la scheda
document.addEventListener("click", e => {
  const h = e.target.closest && e.target.closest("[data-fav]"); if (!h) return;
  e.stopPropagation(); e.preventDefault();
  const id = +h.dataset.fav; FAV.has(id) ? FAV.delete(id) : FAV.add(id); saveFav();
  document.querySelectorAll('[data-fav="' + id + '"]').forEach(b => {const on = FAV.has(id); b.classList.toggle("on", on); b.textContent = on ? "♥" : "♡"; b.setAttribute("aria-pressed", on)});
  if (cat === "Preferiti") renderGrid(); renderFilters();
}, true);

// Pannello scelta offerte: apri il sito con ?offerte
(function(){
  if (!/[?&]offerte/.test(location.search)) return;
  const d = document, sel = {...(OFF.articoli || {})};
  const base = PRODUCTS.map(p => ({n:p.name, c:p.cat, k:p.kind, pr:p.old || p.price, ok:p.ok})).filter(p => p.ok && p.pr > 0);
  d.body.insertAdjacentHTML("beforeend", `<div id="adm"><div class="ah"><b>Scegli le offerte</b><button type="button" id="ax" aria-label="Chiudi">✕</button></div>
    <div class="ab"><input id="aq" type="search" placeholder="Cerca (es. Inter, tuta, NBA)…" autocomplete="off">
      <div class="ar"><select id="ac"><option>Tutti</option><option>Calcio</option><option>F1</option><option>NBA</option><option>Tute</option></select>
      <input id="ap" type="number" min="1" max="90" value="15" aria-label="Sconto %"><span>%</span><button type="button" id="aall">Applica a tutti i visibili</button><button type="button" id="anone">Togli visibili</button></div></div>
    <div class="al" id="al"></div>
    <div class="af"><div class="ar"><label>Titolo<input id="at" type="text" value="${(OFF.titolo || "Offerte del momento").replace(/"/g,"&quot;")}"></label><label>Fine offerta<input id="ad" type="datetime-local" value="${OFF.fino || ""}"></label></div>
      <div id="asum"></div><button type="button" id="acp" class="bp">Copia codice</button><textarea id="aout" readonly rows="3"></textarea></div></div>`);
  const $a = id => d.getElementById(id), L = $a("al");
  const vis = () => {const q = norm($a("aq").value), c = $a("ac").value; return base.filter(p => (c === "Tutti" || p.c === c) && (!q || q.split(/\s+/).every(w => norm(p.n + " " + p.c + " " + p.k).includes(w))))};
  const out = () => {
    const k = Object.keys(sel).filter(n => sel[n] > 0), t = $a("at").value.replace(/"/g, "'") || "Offerte del momento", f = $a("ad").value;
    $a("asum").textContent = k.length + " articoli in offerta";
    $a("aout").value = `const OFFERTE = {\n  attive: ${k.length ? "true" : "false"},\n  titolo: "${t}",\n  fino: "${f}",\n  tutto: 0,\n  categorie: { Calcio: 0, F1: 0, NBA: 0, Tute: 0 },\n  squadre: { },\n  articoli: {\n${k.map(n => `    "${n}": ${sel[n]}`).join(",\n")}\n  }\n};`;
  };
  const draw = () => {
    L.innerHTML = vis().map(p => `<label class="arow${sel[p.n] ? " on" : ""}"><input type="checkbox" data-n="${p.n.replace(/"/g,"&quot;")}"${sel[p.n] ? " checked" : ""}><span>${p.n}<small>${p.c} · ${fmt(p.pr)}</small></span>${sel[p.n] ? `<em>-${sel[p.n]}% → ${fmt(Math.round(p.pr*(100-sel[p.n]))/100)}</em>` : ""}</label>`).join("") || '<p class="empty">Nessun articolo</p>';
    out();
  };
  const pc = () => Math.min(90, Math.max(1, +$a("ap").value || 15));
  L.addEventListener("change", e => {const n = e.target.dataset.n; if (n == null) return; e.target.checked ? sel[n] = pc() : delete sel[n]; draw()});
  $a("aq").oninput = draw; $a("ac").onchange = draw; $a("at").oninput = out; $a("ad").oninput = out;
  $a("aall").onclick = () => {vis().forEach(p => sel[p.n] = pc()); draw()};
  $a("anone").onclick = () => {vis().forEach(p => delete sel[p.n]); draw()};
  $a("ax").onclick = () => $a("adm").remove();
  $a("acp").onclick = async () => {const o = $a("aout"); try {await navigator.clipboard.writeText(o.value)} catch(e) {o.select(); d.execCommand("copy")} $a("acp").textContent = "Copiato ✓"; setTimeout(() => $a("acp").textContent = "Copia codice", 1800)};
  draw(); d.body.classList.add("x-lock");
  $a("ax").addEventListener("click", () => d.body.classList.remove("x-lock"));
})();

// ===== Altre robe: note ordine, visti di recente, zoom, condividi, suggerimenti, confetti =====
document.addEventListener("input", e => {if (e.target.id === "cnote") {try {localStorage.setItem("cnote", e.target.value)} catch(x) {} renderCart()}});

function pushRecent(id){RECENT = [id, ...RECENT.filter(x => x !== id)].slice(0, 8); try {localStorage.setItem("rec", JSON.stringify(RECENT))} catch(e) {} renderRecent()}
function renderRecent(){
  const s = document.getElementById("recenti"); if (!s) return;
  const L = RECENT.map(find).filter(Boolean); s.style.display = L.length ? "" : "none";
  document.getElementById("rsc").innerHTML = L.map(p => `<article class="oc" data-open="${p.id}"><div class="pp" style="background:linear-gradient(145deg,${p.c1}33,${p.c2}18)">${p.sc ? `<span class="pt sale">-${p.sc}%</span>` : ""}${pic(p)}</div>
    <div class="oi"><div class="pn">${p.name}</div><div class="op" style="color:var(--tx)">${p.old ? `<s class="po">${fmt(p.old)}</s>` : ""}<b${p.old ? ' style="color:#f43f5e"' : ""}>${fmt(p.price)}</b></div></div></article>`).join("");
}
(function(){
  const d = document, pe = d.getElementById("perche");
  if (pe) pe.insertAdjacentHTML("beforebegin", '<section class="sec" id="recenti" style="display:none"><div class="con"><div class="slb">Per te</div><h2 class="st">Visti di recente</h2><div class="osc" id="rsc"></div></div></section><div class="div"></div>');
  renderRecent();

  // zoom foto nella scheda: tocca/clicca per ingrandire
  d.body.insertAdjacentHTML("beforeend", '<div id="zoom" hidden><button type="button" id="zx" aria-label="Chiudi">✕</button><img alt=""></div>');
  const z = d.getElementById("zoom"), zi = z.querySelector("img");
  const zclose = () => {z.hidden = true; zi.classList.remove("z2"); zi.src = ""};
  d.addEventListener("click", e => {
    const im = e.target.closest && e.target.closest(".pdi img");
    if (im) {zi.src = im.currentSrc || im.src; z.hidden = false; return}
    if (e.target.id === "zx") return zclose();
    if (e.target === zi) {const r = zi.getBoundingClientRect(); zi.style.transformOrigin = ((e.clientX - r.left) / r.width * 100) + "% " + ((e.clientY - r.top) / r.height * 100) + "%"; zi.classList.toggle("z2")}
    else if (e.target === z) zclose();
    const sh = e.target.closest && e.target.closest("[data-share]");
    if (sh) {
      const p = find(+sh.dataset.share), url = location.href.split("#")[0] + "#p" + p.id;
      if (navigator.share) navigator.share({title: p.name, text: p.name + " – " + fmt(p.price), url}).catch(() => {});
      else {(navigator.clipboard ? navigator.clipboard.writeText(url) : Promise.reject()).catch(() => {}); window.toastMsg && window.toastMsg("Link copiato")}
    }
  });
  d.addEventListener("keydown", e => {if (e.key === "Escape" && !z.hidden) zclose()});

  // suggerimenti ricerca
  const qi = d.getElementById("q"), box = qi && qi.parentElement;
  if (qi) {
    box.insertAdjacentHTML("beforeend", '<div id="sug" hidden></div>');
    const sg = d.getElementById("sug");
    const labels = [...new Map(PRODUCTS.map(p => [(p.team || p.name) + "|" + p.cat, {t: p.team || p.name, s: p.lg ? p.cat + " · " + p.lg : p.cat}])).values()];
    const hide = () => {sg.hidden = true};
    qi.addEventListener("input", () => {
      const v = norm(qi.value.trim()); if (v.length < 2) return hide();
      const m = labels.filter(l => norm(l.t).split(/\s+/).some(w => w.startsWith(v)) || norm(l.t).startsWith(v)).slice(0, 6);
      if (!m.length) return hide();
      sg.innerHTML = m.map(l => `<button type="button" data-sg="${l.t.replace(/"/g, "&quot;")}">${l.t}<small>${l.s}</small></button>`).join(""); sg.hidden = false;
    });
    sg.addEventListener("click", e => {
      const b = e.target.closest("[data-sg]"); if (!b) return; e.stopPropagation();
      qi.value = b.dataset.sg; q = qi.value; $("#qx").hidden = false; renderGrid(); hide();
    });
    d.addEventListener("click", e => {if (!box.contains(e.target)) hide()});
    qi.addEventListener("keydown", e => {if (e.key === "Escape") hide()});
  }

  // sezioni che compaiono scorrendo
  if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion:reduce)").matches) {
    const io = new IntersectionObserver(es => es.forEach(en => {if (en.isIntersecting) {io.unobserve(en.target); en.target.classList.remove("rvs")}}));
    d.querySelectorAll(".sec .con, .ctab").forEach(el => {if (el.getBoundingClientRect().top > innerHeight) {el.classList.add("rvs"); io.observe(el)}});
  }

  // coriandoli quando si raggiunge la spedizione gratuita
  window.confetti = () => {
    const c = d.createElement("canvas"); c.id = "cfx"; c.width = innerWidth; c.height = innerHeight; d.body.appendChild(c);
    const x = c.getContext("2d"), cols = ["#38bdf8","#7b2fff","#f43f5e","#f97316","#22c55e","#facc15"];
    const ps = Array.from({length: 70}, () => ({x: c.width * (.3 + Math.random() * .4), y: c.height * .6, vx: (Math.random() - .5) * 11, vy: -Math.random() * 13 - 4, s: 4 + Math.random() * 5, r: Math.random() * 6, c: cols[Math.random() * cols.length | 0]}));
    let t = 0;
    (function f(){
      x.clearRect(0, 0, c.width, c.height); t++;
      ps.forEach(p => {p.vy += .35; p.x += p.vx; p.y += p.vy; p.r += .2; x.save(); x.translate(p.x, p.y); x.rotate(p.r); x.fillStyle = p.c; x.globalAlpha = Math.max(0, 1 - t / 90); x.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2); x.restore()});
      t < 90 ? requestAnimationFrame(f) : c.remove();
    })();
  };
})();
