/* ============================================================
   Planet E-commerce — the standalone globe tool
   Reuses: /js/data.js (COUNTRIES, I18N), d3-geo,
   /assets/data/world.geo.json, site styles.
   ============================================================ */
(() => {
"use strict";

const $  = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;
const LITE = matchMedia("(pointer: coarse), (max-width: 820px)").matches;

/* ------------------------------------------------------------
   Language
   ------------------------------------------------------------ */
let lang = localStorage.getItem("aa-lang") || "ar";

/* page-local strings (shared keys come from I18N in data.js) */
const TL = {
  en: {
    tg_eyebrow: "A free tool by Arabia Academies",
    tg_h1a: "Planet", tg_h1b: "E-commerce",
    tg_sub1: "Every second, the world spends",
    tg_sub2: "online. Spin the globe, zoom in, and tap any country — see who sells, who buys, and how much money is moving.",
    tg_hint: "Drag to spin · wheel or pinch to zoom · tap a country for details",
    tg_live: "Since you opened this page, the world bought",
    tg_live2: "online",
    tg_b1: "All this money is moving right now —",
    tg_b2: "the question is: what's your share?",
    tg_b3: "3,500+ students started from exactly where you are now. Learn to pick the product, launch the ad, and sell to any country on this planet — in Arabic.",
    tg_b_cta1: "Start your journey — eCom Arabia+",
    tg_b_cta2: "See all academies",
    tg_home: "Home",
    tg_arab: "Arab market", tg_world: "Global market",
    tg_since: "Spent online here since you opened this card",
    tg_since_niche: "Spent on this niche here since you picked it",
    tg_niche_label: "Pick a niche",
    tg_market: "Market / yr", tg_growth: "Yearly growth",
    tg_buyers: "Online buyers", tg_newbuyers: "New buyers every day",
    tg_spendper: "Spend per shopper / yr",
    tg_yourcut: "Your cut at just 0.001% of it",
    tg_persec: "Spent every second",
    tg_peryr: "/yr",
    tg_cta_lead: "This market grows {g}% every year — and you're still outside?",
    tg_cta_btn: "Start selling in {c}",
    tg_cta_iraq: "The Iraq academy launches soon — 100% cash on delivery, built for the Iraqi market.",
    tg_cta_iraq_btn: "Iraq e-Com Academy — coming soon",
    tg_share: "Share these numbers",
    tg_copied: "Link copied!",
    tg_nodata: "No detailed stats here yet — but trust us: people in this country are buying online every single day 😉",
    tg_disc: "Rounded estimates from public 2025–2026 reports",
    tg_hover_hint: "Tap for full details",
  },
  ar: {
    tg_eyebrow: "أداة مجانية من أكاديميات أرابيا",
    tg_h1a: "كوكب", tg_h1b: "التجارة الإلكترونية",
    tg_sub1: "كل ثانية، العالم ينفق",
    tg_sub2: "أونلاين. لف الكرة، كبّر، واضغط على أي دولة — شوف من يبيع، من يشتري، وكم المال اللي يتحرك.",
    tg_hint: "اسحب للف · عجلة أو إصبعين للتكبير · اضغط على دولة للتفاصيل",
    tg_live: "منذ فتحت هالصفحة، العالم اشترى أونلاين بـ",
    tg_live2: "",
    tg_b1: "كل هالمال يتحرك الآن —",
    tg_b2: "والسؤال: كم نصيبك منه؟",
    tg_b3: "أكثر من ٣٥٠٠ طالب بدأوا رحلتهم من نفس النقطة اللي أنت فيها الآن. تعلّم تختار المنتج، تطلق الإعلان، وتبيع لأي دولة على هالكوكب — بالعربي.",
    tg_b_cta1: "ابدأ رحلتك — eCom Arabia+",
    tg_b_cta2: "شاهد كل الأكاديميات",
    tg_home: "الرئيسية",
    tg_arab: "سوق عربي", tg_world: "سوق عالمي",
    tg_since: "انصرف أونلاين هنا منذ فتحت هذي البطاقة",
    tg_since_niche: "انصرف على هالنيش هنا منذ اخترته",
    tg_niche_label: "اختر النيش",
    tg_market: "السوق / سنة", tg_growth: "النمو السنوي",
    tg_buyers: "مشترون أونلاين", tg_newbuyers: "مشترون جدد كل يوم",
    tg_spendper: "إنفاق المتسوق / سنة",
    tg_yourcut: "نصيبك لو أخذت فقط 0.001٪ منه",
    tg_persec: "ينصرف كل ثانية",
    tg_peryr: "/سنة",
    tg_cta_lead: "هالسوق يكبر {g}٪ كل سنة — وأنت لسا برّا؟",
    tg_cta_btn: "ابدأ البيع في {c}",
    tg_cta_iraq: "أكاديمية العراق تنطلق قريباً — دفع عند الاستلام ١٠٠٪، مبنية خصيصاً للسوق العراقي.",
    tg_cta_iraq_btn: "أكاديمية التجارة الإلكترونية في العراق — قريباً",
    tg_share: "شارك هالأرقام",
    tg_copied: "تم نسخ الرابط!",
    tg_nodata: "ما عندنا إحصائيات مفصلة لهالدولة بعد — بس صدقنا: الناس هنا يشترون أونلاين كل يوم 😉",
    tg_disc: "أرقام تقريبية من تقارير عامة ٢٠٢٥–٢٠٢٦",
    tg_hover_hint: "اضغط للتفاصيل الكاملة",
  }
};
const t = (k) => TL[lang][k] ?? I18N[lang][k] ?? k;
const pick = (v) => (v && typeof v === "object" && ("en" in v || "ar" in v)) ? (v[lang] ?? v.en) : v;

/* ------------------------------------------------------------
   Niches — global share of e-commerce + growth delta vs average
   ------------------------------------------------------------ */
const NICHES = [
  { id: "all",     share: 1,    g: 0,  ar: "كل النيشات",          en: "All niches" },
  { id: "fashion", share: .24,  g: 2,  ar: "أزياء وموضة",          en: "Fashion" },
  { id: "elec",    share: .20,  g: -1, ar: "إلكترونيات",           en: "Electronics" },
  { id: "beauty",  share: .12,  g: 6,  ar: "جمال وعناية",          en: "Beauty & care" },
  { id: "home",    share: .11,  g: 3,  ar: "منزل ومطبخ",           en: "Home & kitchen" },
  { id: "health",  share: .08,  g: 7,  ar: "صحة ورياضة",           en: "Health & fitness" },
  { id: "baby",    share: .06,  g: 4,  ar: "أطفال ومواليد",        en: "Baby & kids" },
  { id: "toys",    share: .06,  g: 4,  ar: "ألعاب وهوايات",        en: "Toys & hobbies" },
  { id: "perfume", share: .05,  g: 9,  ar: "عطور",                 en: "Perfumes" },
  { id: "acc",     share: .05,  g: 5,  ar: "إكسسوارات وساعات",     en: "Accessories & watches" },
  { id: "pets",    share: .03,  g: 11, ar: "مستلزمات حيوانات",     en: "Pet supplies" },
];
let curNiche = "all";

/* ------------------------------------------------------------
   CTA routing — which academy fits which market
   Gulf -> Zambeel · Iraq -> Iraq academy (soon, no link yet)
   everything else -> flagship eCom Arabia+
   ------------------------------------------------------------ */
const JOIN_ECOM = "https://www.skool.com/ecomarabia/about";
const JOIN_ZAMBEEL = "https://www.skool.com/dropshipping/about";
const ZAMBEEL_ISO = ["SAU", "ARE", "KWT", "QAT", "OMN"];
function ctaFor(c) {
  if (c.iso === "IRQ") return { iraq: true };
  if (ZAMBEEL_ISO.includes(c.iso)) return { href: JOIN_ZAMBEEL };
  return { href: JOIN_ECOM };
}

/* ------------------------------------------------------------
   Derived stats (rounded public estimates, computed live)
   ------------------------------------------------------------ */
function parsePop(p) { const n = parseFloat(p); return /B/i.test(p) ? n * 1e9 : n * 1e6; }
function baseBuyers(c) { return parsePop(c.pop) * c.shoppers / 100; }

function nicheStats(c, id) {
  const n = NICHES.find(x => x.id === id) || NICHES[0];
  const all = id === "all";
  const marketB = c.market * n.share;
  const growth = all ? c.growth : Math.max(2, c.growth + n.g);
  const buyers = baseBuyers(c) * (all ? 1 : Math.pow(n.share, .55));
  return {
    marketB, growth, buyers,
    perSec: marketB * 1e9 / 31536000,
    spendPer: marketB * 1e9 / buyers,
    newDaily: buyers * (growth / 100) / 365,
    cut: marketB * 1e9 * 1e-5
  };
}

/* number formatting (western digits — money reads best that way) */
const tr1 = (x) => (x >= 10 ? Math.round(x) : Math.round(x * 10) / 10);
function big(n) {
  if (lang === "ar") {
    if (n >= 1e9) return tr1(n / 1e9) + " مليار";
    if (n >= 1e6) return tr1(n / 1e6) + " مليون";
    if (n >= 1e3) return tr1(n / 1e3) + " ألف";
    return "" + Math.round(n);
  }
  if (n >= 1e9) return tr1(n / 1e9) + "B";
  if (n >= 1e6) return tr1(n / 1e6) + "M";
  if (n >= 1e3) return tr1(n / 1e3) + "K";
  return "" + Math.round(n);
}
function fmtMarket(m) {
  if (lang === "ar") {
    if (m >= 1000) return `${(m / 1000).toFixed(1)} تريليون $`;
    if (m >= 1) return `${tr1(m)} مليار $`;
    return `${Math.round(m * 1000)} مليون $`;
  }
  if (m >= 1000) return `$${(m / 1000).toFixed(1)}T`;
  if (m >= 1) return `$${tr1(m)}B`;
  return `$${Math.round(m * 1000)}M`;
}
const money = (n) => "$" + Math.round(n).toLocaleString("en-US");

/* ------------------------------------------------------------
   Starfield
   ------------------------------------------------------------ */
(function starfield() {
  const cv = $("#stars"), ctx = cv.getContext("2d");
  let stars = [];
  function size() {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    cv.width = innerWidth * dpr; cv.height = innerHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const N = LITE ? 110 : 230;
    stars = Array.from({ length: N }, () => ({
      x: Math.random() * innerWidth, y: Math.random() * innerHeight,
      r: Math.random() * 1.3 + .3, p: Math.random() * 6.28, v: .5 + Math.random() * 1.4
    }));
    paint(0);
  }
  function paint(now) {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for (const s of stars) {
      const a = LITE || REDUCED ? .55 : .3 + .45 * (0.5 + 0.5 * Math.sin(s.p + now / 1000 * s.v));
      ctx.fillStyle = `rgba(244,239,226,${a * .8})`;
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, 7); ctx.fill();
    }
  }
  size();
  addEventListener("resize", size);
  if (!LITE && !REDUCED) {
    let raf = 0;
    const tick = (t) => { raf = 0; if (document.hidden) return; paint(t); sched(); };
    const sched = () => { if (!raf && !document.hidden) raf = requestAnimationFrame(tick); };
    document.addEventListener("visibilitychange", sched);
    sched();
  }
})();

/* ------------------------------------------------------------
   Globe
   ------------------------------------------------------------ */
const cv = $("#globeCanvas"), ctx = cv.getContext("2d");
const box = cv.parentElement, tip = $("#globeTip");
let W, Hc, R, CX, CY;
let projection = null, geoPath = null;
const graticule = d3.geoGraticule10();
let world = null, genericFeats = [];
const featByIso = {}, dataByIso = {};
COUNTRIES.forEach(c => dataByIso[c.iso] = c);

let rot = [-32, -22], zoom = 1, vel = 0, skipFrame = false;
let targetLng = null, targetPhi = null;
let hovered = null, selected = null, dragging = false, lastX = 0, lastY = 0, autoPauseUntil = 0;
const markerPos = new Map();

function size() {
  const r = box.getBoundingClientRect();
  const dpr = Math.min(devicePixelRatio || 1, 2);
  W = r.width; Hc = r.height;
  cv.width = W * dpr; cv.height = Hc * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  R = Math.min(W, Hc) * .46; CX = W / 2; CY = Hc / 2;
  projection = d3.geoOrthographic().translate([CX, CY]).scale(R).clipAngle(90);
  geoPath = d3.geoPath(projection, ctx);
}

fetch("/assets/data/world.geo.json")
  .then(r => r.json())
  .then(j => {
    world = j;
    j.features.forEach(f => { featByIso[f.id] = f; });
    // countries we have no stats for, kept clickable — but only sane polygons:
    // a reversed-winding sliver (like Bermuda) "contains" the whole ocean, so
    // anything covering more than ~8% of the sphere is dropped.
    genericFeats = j.features.filter(f => !dataByIso[f.id] && d3.geoArea(f) < 1);
    draw(performance.now());
  })
  .catch(() => { world = null; });

const visibleC = (c) => d3.geoDistance([c.lng, c.lat], [-rot[0], -rot[1]]) < 1.55;
const markerR = (c) => 2.2 + Math.log10(c.market + 1) * 2.4;

function draw(now) {
  if (LITE && (skipFrame = !skipFrame)) return;
  ctx.clearRect(0, 0, W, Hc);

  if (!dragging) {
    if (Math.abs(vel) > .05) { rot[0] += vel; vel *= .95; }
    else if (targetLng !== null) {
      let d = targetLng - rot[0];
      d = ((d + 180) % 360 + 360) % 360 - 180;
      rot[0] += d * .06;
      if (targetPhi !== null) rot[1] += (targetPhi - rot[1]) * .06;
      if (Math.abs(d) < .3) { targetLng = null; targetPhi = null; }
    } else if (now > autoPauseUntil && !hovered && !REDUCED) rot[0] += .045;
  }
  projection.rotate(rot).scale(R * zoom);

  // atmosphere halo
  if (!LITE) {
    const halo = ctx.createRadialGradient(CX, CY, R * zoom * .92, CX, CY, R * zoom * 1.12);
    halo.addColorStop(0, "rgba(46,154,214,.18)");
    halo.addColorStop(1, "transparent");
    ctx.fillStyle = halo;
    ctx.beginPath(); ctx.arc(CX, CY, R * zoom * 1.12, 0, 7); ctx.fill();
  }

  // sphere
  const g = ctx.createRadialGradient(CX - R * .35, CY - R * .4, R * .1, CX, CY, R * 1.05);
  g.addColorStop(0, "rgba(46,154,214,.12)");
  g.addColorStop(.55, "rgba(13,19,42,.92)");
  g.addColorStop(1, "rgba(5,8,20,.99)");
  ctx.beginPath(); geoPath({ type: "Sphere" });
  ctx.fillStyle = g; ctx.fill();
  ctx.strokeStyle = "rgba(227,169,79,.38)"; ctx.lineWidth = 1.2; ctx.stroke();

  ctx.beginPath(); geoPath(graticule);
  ctx.strokeStyle = "rgba(244,239,226,.055)"; ctx.lineWidth = 1; ctx.stroke();

  if (world) {
    for (const f of world.features) {
      const c = dataByIso[f.id];
      ctx.beginPath(); geoPath(f);
      if (c) {
        const hot = hovered === c.iso || selected === c.iso;
        ctx.fillStyle = c.arab
          ? `rgba(227,169,79,${hot ? .68 : .34})`
          : `rgba(46,154,214,${hot ? .68 : .30})`;
        ctx.fill();
        ctx.strokeStyle = c.arab ? "rgba(240,200,120,.5)" : "rgba(120,190,235,.45)";
        ctx.lineWidth = hot ? 1.4 : .7;
        ctx.stroke();
      } else {
        ctx.fillStyle = "rgba(244,239,226,.05)"; ctx.fill();
        ctx.strokeStyle = "rgba(244,239,226,.09)"; ctx.lineWidth = .5; ctx.stroke();
      }
    }
  }

  // markers
  markerPos.clear();
  for (const c of COUNTRIES) {
    if (!visibleC(c)) continue;
    const p = projection([c.lng, c.lat]);
    if (!p) continue;
    markerPos.set(c.iso, p);
    const base = markerR(c);
    const hot = hovered === c.iso || selected === c.iso;
    const pulse = c.hub ? 1 + Math.sin(now / 400) * .18 : 1;
    const col = c.arab ? "227,169,79" : "46,154,214";
    if (LITE) {
      ctx.fillStyle = `rgba(${col},${hot ? .4 : .22})`;
      ctx.beginPath(); ctx.arc(p[0], p[1], base * 2.2, 0, 7); ctx.fill();
    } else {
      const gg = ctx.createRadialGradient(p[0], p[1], 0, p[0], p[1], base * 3);
      gg.addColorStop(0, `rgba(${col},${hot ? .85 : .5})`);
      gg.addColorStop(1, "transparent");
      ctx.fillStyle = gg;
      ctx.beginPath(); ctx.arc(p[0], p[1], base * 3, 0, 7); ctx.fill();
    }
    ctx.fillStyle = c.arab ? (hot ? "#F0C878" : "#E3A94F") : (hot ? "#8FD2F8" : "#5BB4E5");
    ctx.beginPath(); ctx.arc(p[0], p[1], base * pulse * (hot ? 1.25 : 1), 0, 7); ctx.fill();
    ctx.strokeStyle = "rgba(5,8,20,.85)"; ctx.lineWidth = 1.4; ctx.stroke();
  }

  // order pings (ambient buying activity on the globe itself)
  for (const ping of pings) {
    const c = dataByIso[ping.iso];
    if (!c || !visibleC(c)) continue;
    const p = projection([c.lng, c.lat]);
    if (!p) continue;
    const age = (now - ping.t0) / 1400;
    if (age >= 1) continue;
    const col = c.arab ? "227,169,79" : "143,210,248";
    ctx.strokeStyle = `rgba(${col},${(1 - age) * .9})`;
    ctx.lineWidth = 1.6;
    ctx.beginPath(); ctx.arc(p[0], p[1], markerR(c) + age * 26, 0, 7); ctx.stroke();
  }

  // hover tooltip follows its country
  if (hovered) {
    const c = dataByIso[hovered];
    if (visibleC(c)) {
      const p = projection([c.lng, c.lat]);
      tip.style.left = Math.min(Math.max(p[0], 145), W - 145) + "px";
      tip.style.top = p[1] + "px";
      tip.classList.toggle("below", p[1] < Hc * .52);
    } else setHover(null);
  }
}

function setHover(iso) {
  hovered = iso;
  $$("#countryChips button").forEach(b => b.classList.toggle("active", b.dataset.iso === iso));
  if (!iso) { tip.hidden = true; return; }
  const c = dataByIso[iso];
  const st = nicheStats(c, "all");
  const growth = lang === "ar" ? `${c.growth}٪ سنوياً` : `+${c.growth}% / yr`;
  tip.classList.toggle("world", !c.arab);
  tip.innerHTML = `
    <h4><i></i>${pick(c.name)}</h4>
    <dl>
      <dt>${t("tg_market")}</dt><dd>${fmtMarket(c.market)}</dd>
      <dt>${t("tg_growth")}</dt><dd>${growth}</dd>
      <dt>${t("tg_persec")}</dt><dd>${money(st.perSec)}</dd>
    </dl>
    <p>👆 ${t("tg_hover_hint")}</p>`;
  tip.hidden = false;
}

function countryAt(mx, my) {
  if (Math.hypot(mx - CX, my - CY) > R * zoom + 4) return null;
  const ll = projection.invert([mx, my]);
  if (ll && isFinite(ll[0])) {
    for (const c of COUNTRIES) {
      const f = featByIso[c.iso];
      if (f && d3.geoContains(f, ll)) return { iso: c.iso };
    }
    for (const f of genericFeats) {
      if (d3.geoContains(f, ll)) return { feat: f };
    }
  }
  let best = null, bd = 20;
  for (const [iso, p] of markerPos) {
    const d = Math.hypot(p[0] - mx, p[1] - my);
    if (d < bd) { bd = d; best = iso; }
  }
  return best ? { iso: best } : null;
}

/* ------------------------------------------------------------
   Pointer: drag / momentum / pinch / tap
   ------------------------------------------------------------ */
const pointers = new Map();
let pinchDist = 0, tapMoved = true, downX = 0, downY = 0;

cv.addEventListener("pointerdown", e => {
  try { cv.setPointerCapture(e.pointerId); } catch (err) {}
  pointers.set(e.pointerId, [e.clientX, e.clientY]);
  if (pointers.size === 1) {
    dragging = true; lastX = e.clientX; lastY = e.clientY; vel = 0;
    tapMoved = false; downX = e.clientX; downY = e.clientY;
    cv.classList.add("dragging");
  } else if (pointers.size === 2) {
    dragging = false;
    const [a, b] = [...pointers.values()];
    pinchDist = Math.hypot(a[0] - b[0], a[1] - b[1]);
  }
});
cv.addEventListener("pointermove", e => {
  if (pointers.has(e.pointerId)) pointers.set(e.pointerId, [e.clientX, e.clientY]);
  if (pointers.size === 2) {
    const [a, b] = [...pointers.values()];
    const d = Math.hypot(a[0] - b[0], a[1] - b[1]);
    if (pinchDist) setZoom(zoom * d / pinchDist);
    pinchDist = d;
    return;
  }
  if (dragging) {
    const dx = e.clientX - lastX, dy = e.clientY - lastY;
    if (Math.hypot(e.clientX - downX, e.clientY - downY) > 12) tapMoved = true;
    rot[0] += dx * .3;
    rot[1] = Math.max(-65, Math.min(20, rot[1] - dy * .3));
    vel = dx * .3;
    lastX = e.clientX; lastY = e.clientY;
    targetLng = null; targetPhi = null;
    return;
  }
  if (e.pointerType === "mouse") {
    const r = cv.getBoundingClientRect();
    const hit = countryAt(e.clientX - r.left, e.clientY - r.top);
    setHover(hit && hit.iso ? hit.iso : null);
  }
});
const release = e => {
  pointers.delete(e.pointerId);
  if (pointers.size < 2) pinchDist = 0;
  if (pointers.size === 0 && dragging) {
    dragging = false;
    cv.classList.remove("dragging");
    vel = Math.max(-14, Math.min(14, vel));
    autoPauseUntil = performance.now() + 2500;
    if (!tapMoved) {
      vel = 0;
      const r = cv.getBoundingClientRect();
      const hit = countryAt(e.clientX - r.left, e.clientY - r.top);
      if (hit) openPanel(hit);
      else closePanel();
    }
  }
};
cv.addEventListener("pointerup", release);
cv.addEventListener("pointercancel", release);
cv.addEventListener("pointerleave", e => {
  if (e.pointerType === "mouse" && !dragging) setHover(null);
});

const setZoom = (z) => { zoom = Math.min(3.4, Math.max(0.7, z)); };
cv.addEventListener("wheel", e => {
  e.preventDefault();
  setZoom(zoom * (e.deltaY < 0 ? 1.12 : 0.89));
}, { passive: false });
$("#zoomIn").addEventListener("click", () => setZoom(zoom * 1.25));
$("#zoomOut").addEventListener("click", () => setZoom(zoom * 0.8));

/* ------------------------------------------------------------
   Country panel
   ------------------------------------------------------------ */
const panel = $("#cPanel");
let tickerTimer = 0, firstOpen = true, panelCountry = null;

function focusCountry(c) {
  targetLng = -c.lng;
  targetPhi = Math.max(-45, Math.min(15, -c.lat + 8));
  autoPauseUntil = performance.now() + 6000;
}

/* fill the stats grid + ticker for the current niche (resets the ticker) */
function renderStats(c) {
  const st = nicheStats(c, curNiche);
  const growth = lang === "ar" ? `+${st.growth}٪` : `+${st.growth}%`;
  $("#tgTickLabel").textContent = curNiche === "all" ? t("tg_since") : t("tg_since_niche");
  $("#tgGrid").innerHTML = `
    <div class="tg-stat gold"><small>${t("tg_market")}</small><b>${fmtMarket(st.marketB)}</b></div>
    <div class="tg-stat"><small>${t("tg_growth")}</small><b>${growth}</b></div>
    <div class="tg-stat"><small>${t("tg_buyers")}</small><b>${big(st.buyers)}</b></div>
    <div class="tg-stat"><small>${t("tg_newbuyers")}</small><b>+${big(st.newDaily)}</b></div>
    <div class="tg-stat"><small>${t("tg_spendper")}</small><b>$${Math.round(st.spendPer).toLocaleString("en-US")}</b></div>
    <div class="tg-stat gold"><small>${t("tg_yourcut")}</small><b>${money(st.cut)}${t("tg_peryr")}</b></div>`;

  clearInterval(tickerTimer);
  const tEl = $("#tgTicker");
  tEl.textContent = "$0";
  const t0 = performance.now();
  tickerTimer = setInterval(() => {
    tEl.textContent = money(st.perSec * (performance.now() - t0) / 1000);
  }, 100);
}

function openPanel(hit) {
  clearInterval(tickerTimer);
  if (firstOpen) { firstOpen = false; if (window.fbq) fbq("trackCustom", "ToolGlobe"); }

  if (hit.feat) { // a country we have no stats for
    selected = null; panelCountry = null;
    const name = hit.feat.properties?.name || hit.feat.id;
    panel.classList.add("world");
    panel.innerHTML = `
      <button class="tg-close" type="button" aria-label="Close">✕</button>
      <div class="tg-p-head"><i></i><h3>${name}</h3></div>
      <p class="tg-note" style="border:none;padding-top:4px">${t("tg_nodata")}</p>
      <div class="tg-cta">
        <a class="btn btn-gold" href="${JOIN_ECOM}" target="_blank" rel="noopener">${t("tg_cta_btn").replace("{c}", name)}</a>
        <a class="tg-alt" href="/#academies">${t("tg_b_cta2")}</a>
      </div>`;
    panel.hidden = false;
    bindPanel();
    return;
  }

  const c = dataByIso[hit.iso];
  const keepNiche = panelCountry === c.iso;
  if (!keepNiche) curNiche = "all";
  selected = c.iso; panelCountry = c.iso;
  focusCountry(c);
  const name = pick(c.name);
  const cta = ctaFor(c);

  panel.classList.toggle("world", !c.arab);
  panel.innerHTML = `
    <button class="tg-close" type="button" aria-label="Close">✕</button>
    <div class="tg-p-head"><i></i><h3>${name}</h3><span class="tg-p-tag">${c.arab ? t("tg_arab") : t("tg_world")}</span></div>

    <div class="tg-niche-row">
      <label for="tgNiche">${t("tg_niche_label")}</label>
      <select id="tgNiche">
        ${NICHES.map(n => `<option value="${n.id}"${n.id === curNiche ? " selected" : ""}>${n[lang]}</option>`).join("")}
      </select>
    </div>

    <div class="tg-ticker">
      <small id="tgTickLabel"></small>
      <b id="tgTicker">$0</b>
    </div>

    <div class="tg-grid" id="tgGrid"></div>

    ${c.note ? `<p class="tg-note">${pick(c.note)}</p>` : ""}

    <div class="tg-cta">
      <p><b>${cta.iraq ? t("tg_cta_iraq") : t("tg_cta_lead").replace("{g}", c.growth)}</b></p>
      ${cta.iraq
        ? `<span class="btn btn-gold tg-btn-soon">🔒 ${t("tg_cta_iraq_btn")}</span>`
        : `<a class="btn btn-gold" href="${cta.href}" target="_blank" rel="noopener">${t("tg_cta_btn").replace("{c}", name)}</a>`}
      <button class="tg-share" id="tgShare" type="button">📤 ${t("tg_share")}</button>
    </div>
    <p class="tg-disc">${t("tg_disc")}</p>`;
  panel.hidden = false;
  bindPanel();
  renderStats(c);

  $("#tgNiche").addEventListener("change", e => {
    curNiche = e.target.value;
    renderStats(c);
  });

  $("#tgShare")?.addEventListener("click", async () => {
    const st = nicheStats(c, curNiche);
    const text = lang === "ar"
      ? `🌍 ${name}: سوق ${fmtMarket(st.marketB)} أونلاين، ${big(st.buyers)} مشتري، وينمو +${st.growth}٪ كل سنة. شوف كوكب التجارة الإلكترونية:`
      : `🌍 ${name}: a ${fmtMarket(st.marketB)} online market, ${big(st.buyers)} buyers, growing +${st.growth}% a year. See Planet E-commerce:`;
    const url = "https://odehofficial.com/tools/globe/";
    if (navigator.share) { try { await navigator.share({ text, url }); } catch (e) {} }
    else {
      try { await navigator.clipboard.writeText(text + " " + url); } catch (e) {}
      const b = $("#tgShare"); b.textContent = "✓ " + t("tg_copied");
      setTimeout(() => { b.textContent = "📤 " + t("tg_share"); }, 1600);
    }
  });
}

function bindPanel() {
  panel.querySelector(".tg-close").addEventListener("click", closePanel);
}
function closePanel() {
  panel.hidden = true;
  selected = null; panelCountry = null;
  clearInterval(tickerTimer);
}
addEventListener("keydown", e => { if (e.key === "Escape") closePanel(); });

/* ------------------------------------------------------------
   Chips — quick-jump to the biggest markets
   ------------------------------------------------------------ */
function renderChips() {
  const chip = (c) => `<button type="button" data-iso="${c.iso}">${pick(c.name)}</button>`;
  const top = (arab, n) => {
    const list = COUNTRIES.filter(c => c.arab === arab).sort((a, b) => b.market - a.market).slice(0, n);
    const hub = COUNTRIES.find(c => c.hub);
    if (arab && hub && !list.includes(hub)) { list.pop(); list.push(hub); }
    return list;
  };
  $("#countryChips").innerHTML = `
    <p class="chips-label"><i class="dot dot-arab"></i>${I18N[lang].globe_legend_arab || ""}</p>
    <div class="chips-row">${top(true, 10).map(chip).join("")}</div>
    <p class="chips-label"><i class="dot dot-world"></i>${I18N[lang].globe_legend_world || ""}</p>
    <div class="chips-row">${top(false, 10).map(chip).join("")}</div>`;
}
$("#countryChips").addEventListener("click", e => {
  const b = e.target.closest("button");
  if (!b) return;
  const c = dataByIso[b.dataset.iso];
  focusCountry(c);
  setTimeout(() => openPanel({ iso: c.iso }), 850);
});

/* ------------------------------------------------------------
   Ambient order pings on the globe
   ------------------------------------------------------------ */
const pings = [];
const weights = COUNTRIES.map(c => Math.sqrt(c.market));
const wSum = weights.reduce((a, b) => a + b, 0);
function randomCountry() {
  let r = Math.random() * wSum;
  for (let i = 0; i < COUNTRIES.length; i++) { r -= weights[i]; if (r <= 0) return COUNTRIES[i]; }
  return COUNTRIES[0];
}
if (!REDUCED) setInterval(() => {
  if (document.hidden) return;
  pings.push({ iso: randomCountry().iso, t0: performance.now() });
  if (pings.length > 6) pings.shift();
}, 2600);

/* ------------------------------------------------------------
   Live world counter under the hero sub
   ------------------------------------------------------------ */
const WORLD_PER_SEC = 206000; // ≈ $6.5T / yr global e-commerce
const liveP = document.createElement("p");
liveP.className = "tg-sub";
liveP.style.marginTop = "6px";
$(".tg-hero").appendChild(liveP);
const pageT0 = performance.now();
function updLive() {
  const total = WORLD_PER_SEC * (performance.now() - pageT0) / 1000;
  liveP.innerHTML = `${t("tg_live")} <strong style="direction:ltr;display:inline-block">${money(total)}</strong> ${t("tg_live2")}`;
}
updLive();
setInterval(() => { if (!document.hidden) updLive(); }, 150);

/* ------------------------------------------------------------
   Language toggle
   ------------------------------------------------------------ */
function applyLang() {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  $$("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  $("#worldSec").textContent = money(WORLD_PER_SEC);
  renderChips();
  updLive();
  if (!panel.hidden && selected) openPanel({ iso: selected });
  if (hovered) setHover(hovered);
}
$("#langBtn").addEventListener("click", () => {
  lang = lang === "en" ? "ar" : "en";
  localStorage.setItem("aa-lang", lang);
  applyLang();
});

/* ------------------------------------------------------------
   Meta Pixel + cookie consent (same policy as the homepage)
   ------------------------------------------------------------ */
const META_PIXEL_ID = "2590866917740565";
function loadMetaPixel() {
  if (window.fbq) return;
  /* eslint-disable */
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  /* eslint-enable */
  fbq("init", META_PIXEL_ID);
  fbq("track", "PageView");
}
function schedulePixel() {
  let done = false;
  const go = () => { if (done) return; done = true; loadMetaPixel(); };
  ["pointerdown", "keydown", "scroll", "touchstart"].forEach(ev =>
    addEventListener(ev, go, { once: true, passive: true }));
  setTimeout(go, 5000);
}
document.addEventListener("click", e => {
  if (!window.fbq) return;
  const a = e.target.closest("a[href]");
  if (!a) return;
  if (a.href.includes("wa.me")) fbq("track", "Contact");
  else if (a.href.includes("skool.com")) fbq("track", "InitiateCheckout");
});
(function cookieNotice() {
  const bar = $("#cookieBar");
  const tz = (Intl.DateTimeFormat().resolvedOptions().timeZone || "");
  const regulated = tz.startsWith("Europe/") ||
    ["Atlantic/Reykjavik", "Atlantic/Canary", "Atlantic/Madeira", "Atlantic/Azores"].includes(tz);
  const consented = !!localStorage.getItem("aa-cookies-ok");
  if (!regulated || consented) schedulePixel();
  if (!bar || !regulated || consented) return;
  bar.hidden = false;
  $("#cookieOk").addEventListener("click", () => {
    localStorage.setItem("aa-cookies-ok", "1");
    bar.hidden = true;
    loadMetaPixel();
  });
})();

/* ------------------------------------------------------------
   Boot
   ------------------------------------------------------------ */
$("#yr").textContent = new Date().getFullYear();
size();
addEventListener("resize", size);
applyLang();
draw(performance.now()); // first frame immediately, even before rAF kicks in

(function loop() {
  let raf = 0;
  const tick = (t) => { raf = 0; if (document.hidden) return; draw(t); sched(); };
  const sched = () => { if (!raf && !document.hidden) raf = requestAnimationFrame(tick); };
  document.addEventListener("visibilitychange", sched);
  sched();
})();

})();
