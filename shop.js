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
const CFG = {whatsapp:"393272792246", servePrezzo:true, ...(typeof IMPOSTAZIONI !== "undefined" ? IMPOSTAZIONI : {})};
const DATA = (typeof CATALOGO !== "undefined" && CATALOGO) || {};
const EXTRA = (typeof ALTRI !== "undefined" && Array.isArray(ALTRI)) ? ALTRI : [];
if (typeof CATALOGO === "undefined") avviso("catalogo.js non si carica o contiene un errore: controlla virgole, parentesi e virgolette (o che il file sia nella stessa cartella).");
const num = v => {const n = parseFloat(String(v == null ? "" : v).replace(",", ".")); return isFinite(n) && n > 0 ? n : 0};
const nomeImg = v => String(v || "").trim();
const hasExt = n => /\.(png|jpe?g|webp|gif)$/i.test(n);
const src0 = n => hasExt(n) ? n : n + ".png";
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
    price, c1:t.c1, c2:t.c2, img:img||undefined, d:String(s.desc||"").trim()||undefined, tess:String(t.tessuto||"").trim()||undefined,
    ok:!s.offline && !!img && (!CFG.servePrezzo || !!pr)};
}
const PRODUCTS = EXTRA.filter(a => a && a.name && NOMI[a.cat]).map((a,j) => ({id:1+j, cat:a.cat, kind:"Completo", name:a.name, desc:a.desc||"", price:num(a.prezzo),
  c1:a.c1||"#1f2937", c2:a.c2||"#00f0ff", img:nomeImg(a.img)||undefined, d:a.d||undefined, tess:a.tessuto||undefined,
  ok:!a.offline && !!nomeImg(a.img) && (!CFG.servePrezzo || !!num(a.prezzo))}));
PRODUCTS.push(...TEAMS.map((t,i) => teamItem(t,i,"Completo")));
TEAMS.forEach((t,i) => PRODUCTS.push(teamItem(t,i,"Solo maglia"), teamItem(t,i,"Solo pantaloni")));
const SIZES = ["S","M","L","XL","XXL"], CATS = ["Tutti","Calcio","F1","NBA","Tute"];
// ==========================
// Se nell'index.html manca qualche elemento (es. file vecchio) il sito continua a funzionare lo stesso
const NOEL = () => new Proxy({style:{}, classList:{toggle(){},add(){},remove(){},contains:()=>false}, parentElement:{style:{}}, dataset:{}},
  {get:(t,k) => k in t ? t[k] : "", set:() => true});
const $ = s => document.querySelector(s) || NOEL();
const fmt = n => n.toFixed(2).replace(".", ",") + " €";
let q = "", so = "";
let cart = [], kind = "Completo", cat = "Tutti", team = "Tutte", lg = "Tutte";
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
function imgNext(el){if(hasExt(el.dataset.img)){el.outerHTML=el.dataset.fb;return}const i=+el.dataset.i+1;if(i<EXT.length){el.dataset.i=i;el.src=el.dataset.img+"."+EXT[i]}else{el.outerHTML=el.dataset.fb}}
function renderGrid(){
  const L = list(), n = L.length;
  $("#rc").textContent = (q ? `${n} risultat${n===1?"o":"i"} per «${q}»` : `${n} articol${n===1?"o":"i"}`);
  if (!n) { $("#pg").innerHTML = '<p class="empty">Nessun articolo trovato. <button class="chip sm" data-reset="1" type="button">Azzera filtri</button></p>'; return; }
  $("#pg").innerHTML = L.map(p => `
  <article class="pr${p.ok?"":" soldout"}">
    <div class="pp${p.ok?"":" out"}" data-open="${p.id}" style="background:linear-gradient(145deg,${p.c1}33,${p.c2}18)"><button class="ib" data-open="${p.id}" type="button" aria-label="Informazioni su ${p.name}" title="Informazioni">i</button>${!p.ok?'<span class="pt out">TERMINATI</span>':p.tag?`<span class="pt">${p.tag}</span>`:""}${p.img?`<img src="${src0(p.img)}" data-img="${p.img}" data-i="0" data-fb='${art(p)}' alt="${p.name}" loading="lazy" decoding="async" onerror="imgNext(this)">`:art(p)}</div>
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
function pic(p){return p.img ? `<img src="${src0(p.img)}" data-img="${p.img}" data-i="0" data-fb='${art(p)}' alt="${p.name}" onerror="imgNext(this)">` : art(p)}
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
