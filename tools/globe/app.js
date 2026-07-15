/* ============================================================
   Planet E-commerce — the standalone globe tool
   Reuses: /js/data.js (COUNTRIES, ACADEMIES, I18N), d3-geo,
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
    tg_market: "Market / yr", tg_growth: "Yearly growth",
    tg_buyers: "Online buyers", tg_sellers: "Active sellers",
    tg_newstore: "A new store every", tg_spendper: "Spend per shopper / yr",
    tg_persec: "Spent every second",
    tg_niches: "Top-selling niches", tg_stores: "Top marketplaces",
    tg_cta_lead: "This market grows {g}% every year — and you're still outside?",
    tg_cta_btn: "Start selling in {c}",
    tg_cta_iraq: "The Iraq academy launches soon — 100% cash on delivery. Until then, thousands of students already sell to Iraq from eCom Arabia+.",
    tg_alt_gulf: "Want ready-made Gulf dropshipping? → Zambeel Dropshipping",
    tg_share: "Share these numbers",
    tg_copied: "Link copied!",
    tg_nodata_t: "We haven't profiled this market yet",
    tg_nodata: "No detailed stats here yet — but trust us: people in this country are buying online every single day 😉",
    tg_disc: "Rounded estimates from public 2025–2026 reports",
    tg_hover_hint: "Tap for full details",
    tg_toast: "New order in",
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
    tg_market: "السوق / سنة", tg_growth: "النمو السنوي",
    tg_buyers: "مشترون أونلاين", tg_sellers: "بائعون نشطون",
    tg_newstore: "متجر جديد كل", tg_spendper: "إنفاق المتسوق / سنة",
    tg_persec: "ينصرف كل ثانية",
    tg_niches: "أكثر النيشات مبيعاً", tg_stores: "أشهر المنصات والمتاجر",
    tg_cta_lead: "هالسوق يكبر {g}٪ كل سنة — وأنت لسا برّا؟",
    tg_cta_btn: "ابدأ البيع في {c}",
    tg_cta_iraq: "أكاديمية العراق تنطلق قريباً — دفع عند الاستلام ١٠٠٪. ولحد ما تنطلق، آلاف الطلاب يبيعون للعراق الآن من eCom Arabia+.",
    tg_alt_gulf: "تبي دروبشيبينغ خليجي بمنتجات جاهزة؟ ← دروبشيبينغ زنبيل",
    tg_share: "شارك هالأرقام",
    tg_copied: "تم نسخ الرابط!",
    tg_nodata_t: "لسا ما حللنا هالسوق",
    tg_nodata: "ما عندنا إحصائيات مفصلة لهالدولة بعد — بس صدقنا: الناس هنا يشترون أونلاين كل يوم 😉",
    tg_disc: "أرقام تقريبية من تقارير عامة ٢٠٢٥–٢٠٢٦",
    tg_hover_hint: "اضغط للتفاصيل الكاملة",
    tg_toast: "طلب جديد في",
  }
};
const t = (k) => TL[lang][k] ?? I18N[lang][k] ?? k;
const pick = (v) => (v && typeof v === "object" && ("en" in v || "ar" in v)) ? (v[lang] ?? v.en) : v;

/* ------------------------------------------------------------
   Curated per-country extras: niches, marketplaces, cities
   ------------------------------------------------------------ */
const XT = {
  SAU: { n: { ar: ["عطور وجمال", "أزياء", "إلكترونيات"], en: ["Perfume & beauty", "Fashion", "Electronics"] },
         s: ["Amazon.sa", "Noon", "Shein"], c: { ar: ["الرياض", "جدة", "الدمام"], en: ["Riyadh", "Jeddah", "Dammam"] } },
  ARE: { n: { ar: ["إلكترونيات", "أزياء فاخرة", "عطور"], en: ["Electronics", "Luxury fashion", "Perfume"] },
         s: ["Amazon.ae", "Noon", "Namshi"], c: { ar: ["دبي", "أبوظبي", "الشارقة"], en: ["Dubai", "Abu Dhabi", "Sharjah"] } },
  EGY: { n: { ar: ["أزياء", "مستلزمات منزل", "موبايلات"], en: ["Fashion", "Home goods", "Phones"] },
         s: ["Amazon.eg", "Jumia", "Noon"], c: { ar: ["القاهرة", "الإسكندرية", "الجيزة"], en: ["Cairo", "Alexandria", "Giza"] } },
  IRQ: { n: { ar: ["أزياء", "عناية شخصية", "إكسسوارات"], en: ["Fashion", "Personal care", "Accessories"] },
         s: ["Miswag", "Orisdi", "Temu"], c: { ar: ["بغداد", "البصرة", "أربيل"], en: ["Baghdad", "Basra", "Erbil"] } },
  JOR: { n: { ar: ["أزياء", "جمال", "إلكترونيات"], en: ["Fashion", "Beauty", "Electronics"] },
         s: ["OpenSooq", "Shein", "Amazon"], c: { ar: ["عمّان", "إربد", "الزرقاء"], en: ["Amman", "Irbid", "Zarqa"] } },
  PSE: { n: { ar: ["أزياء", "عناية شخصية", "منزل"], en: ["Fashion", "Personal care", "Home"] },
         s: ["Shein", "AliExpress", "متاجر محلية"], c: { ar: ["رام الله", "نابلس", "الخليل"], en: ["Ramallah", "Nablus", "Hebron"] } },
  KWT: { n: { ar: ["جمال ومكياج", "عطور", "إلكترونيات"], en: ["Beauty & makeup", "Perfume", "Electronics"] },
         s: ["Boutiqaat", "Xcite", "Amazon"], c: { ar: ["مدينة الكويت", "حولي"], en: ["Kuwait City", "Hawalli"] } },
  QAT: { n: { ar: ["إلكترونيات", "أزياء", "عطور"], en: ["Electronics", "Fashion", "Perfume"] },
         s: ["Lulu", "Amazon", "Shein"], c: { ar: ["الدوحة", "الريان"], en: ["Doha", "Al Rayyan"] } },
  OMN: { n: { ar: ["أزياء", "عطور", "منزل"], en: ["Fashion", "Perfume", "Home"] },
         s: ["Lulu", "Amazon", "Shein"], c: { ar: ["مسقط", "صلالة"], en: ["Muscat", "Salalah"] } },
  MAR: { n: { ar: ["أزياء وقفاطين", "جمال", "منزل"], en: ["Fashion & caftans", "Beauty", "Home"] },
         s: ["Jumia", "Avito", "AliExpress"], c: { ar: ["الدار البيضاء", "الرباط", "مراكش"], en: ["Casablanca", "Rabat", "Marrakesh"] } },
  DZA: { n: { ar: ["أزياء", "إلكترونيات", "عناية"], en: ["Fashion", "Electronics", "Care"] },
         s: ["Ouedkniss", "Jumia", "AliExpress"], c: { ar: ["الجزائر", "وهران"], en: ["Algiers", "Oran"] } },
  LBN: { n: { ar: ["أزياء", "جمال", "إلكترونيات"], en: ["Fashion", "Beauty", "Electronics"] },
         s: ["Shein", "AliExpress", "OLX"], c: { ar: ["بيروت", "طرابلس"], en: ["Beirut", "Tripoli"] } },
  CHN: { n: { ar: ["كل شيء تقريباً", "إلكترونيات", "منزل"], en: ["Almost everything", "Electronics", "Home"] }, s: ["Taobao", "JD.com", "Pinduoduo"] },
  USA: { n: { ar: ["أزياء", "إلكترونيات", "صحة ولياقة"], en: ["Fashion", "Electronics", "Health & fitness"] }, s: ["Amazon", "Walmart", "Temu"] },
  GBR: { n: { ar: ["أزياء", "بقالة", "جمال"], en: ["Fashion", "Groceries", "Beauty"] }, s: ["Amazon.uk", "ASOS", "Tesco"] },
  DEU: { n: { ar: ["أزياء", "إلكترونيات", "منزل"], en: ["Fashion", "Electronics", "Home"] }, s: ["Amazon.de", "Otto", "Zalando"] },
  FRA: { n: { ar: ["أزياء", "جمال", "منزل"], en: ["Fashion", "Beauty", "Home"] }, s: ["Amazon.fr", "Cdiscount", "Zalando"] },
  JPN: { n: { ar: ["إلكترونيات", "ألعاب", "أزياء"], en: ["Electronics", "Games", "Fashion"] }, s: ["Amazon.jp", "Rakuten", "Yahoo! Japan"] },
  KOR: { n: { ar: ["جمال كوري", "إلكترونيات", "أزياء"], en: ["K-beauty", "Electronics", "Fashion"] }, s: ["Coupang", "Naver", "Gmarket"] },
  IND: { n: { ar: ["موبايلات", "أزياء", "منزل"], en: ["Phones", "Fashion", "Home"] }, s: ["Amazon.in", "Flipkart", "Meesho"] },
  BRA: { n: { ar: ["أزياء", "إلكترونيات", "جمال"], en: ["Fashion", "Electronics", "Beauty"] }, s: ["Mercado Livre", "Shopee", "Amazon"] },
  TUR: { n: { ar: ["أزياء", "منزل", "جمال"], en: ["Fashion", "Home", "Beauty"] }, s: ["Trendyol", "Hepsiburada", "Amazon.tr"] },
};
const XT_FB_AR = { n: { ar: ["أزياء", "إلكترونيات", "جمال"], en: ["Fashion", "Electronics", "Beauty"] }, s: ["Noon", "Shein", "Amazon"] };
const XT_FB_W  = { n: { ar: ["أزياء", "إلكترونيات", "منزل"], en: ["Fashion", "Electronics", "Home"] }, s: ["Amazon", "AliExpress", "Shein"] };
const xt = (c) => XT[c.iso] || (c.arab ? XT_FB_AR : XT_FB_W);
const GULF = ["SAU", "ARE", "KWT", "QAT", "OMN"];

const JOIN_ECOM = "https://www.skool.com/ecomarabia/about";
const JOIN_ZAMBEEL = "https://www.skool.com/dropshipping/about";

/* ------------------------------------------------------------
   Derived stats — everything computed from the same base data
   the homepage globe uses (rounded public estimates)
   ------------------------------------------------------------ */
function parsePop(p) { const n = parseFloat(p); return /B/i.test(p) ? n * 1e9 : n * 1e6; }
function statsFor(c) {
  const pop = parsePop(c.pop);
  const buyers = pop * c.shoppers / 100;
  const sellers = buyers * (c.arab ? 0.022 : 0.03);
  const perSec = c.market * 1e9 / 31536000;
  const newPerYear = Math.max(200, sellers * (c.growth / 100) * 1.8);
  const storeEveryMin = 525600 / newPerYear;
  return { buyers, sellers, perSec, storeEveryMin };
}

/* number formatting (western digits everywhere — money reads best that way) */
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
  if (lang === "ar") return m >= 1000 ? `${(m / 1000).toFixed(1)} تريليون $` : `${m} مليار $`;
  return m >= 1000 ? `$${(m / 1000).toFixed(1)}T` : `$${m}B`;
}
function fmtEvery(min) {
  if (min < 1) return lang === "ar" ? `~${Math.max(2, Math.round(min * 60))} ثانية` : `~${Math.max(2, Math.round(min * 60))} sec`;
  if (min < 90) return lang === "ar" ? `~${Math.round(min)} دقيقة` : `~${Math.round(min)} min`;
  const h = Math.round(min / 60);
  return lang === "ar" ? `~${h} ساعة` : `~${h} h`;
}
const money = (n) => "$" + Math.round(n).toLocaleString("en-US");

/* ------------------------------------------------------------
   Starfield
   ------------------------------------------------------------ */
(function stars() {
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
let W, R, CX, CY;
let projection = null, geoPath = null;
const graticule = d3.geoGraticule10();
let world = null;
const featByIso = {}, dataByIso = {};
COUNTRIES.forEach(c => dataByIso[c.iso] = c);

let rot = [-32, -22], zoom = 1, vel = 0, skipFrame = false;
let targetLng = null, targetPhi = null;
let hovered = null, selected = null, dragging = false, lastX = 0, lastY = 0, autoPauseUntil = 0;
const markerPos = new Map();

function size() {
  const r = box.getBoundingClientRect();
  const dpr = Math.min(devicePixelRatio || 1, 2);
  W = r.width;
  cv.width = W * dpr; cv.height = W * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  R = W * .46; CX = W / 2; CY = W / 2;
  projection = d3.geoOrthographic().translate([CX, CY]).scale(R).clipAngle(90);
  geoPath = d3.geoPath(projection, ctx);
}

fetch("/assets/data/world.geo.json")
  .then(r => r.json())
  .then(j => { world = j; j.features.forEach(f => { featByIso[f.id] = f; }); draw(performance.now()); })
  .catch(() => { world = null; });

const visibleC = (c) => d3.geoDistance([c.lng, c.lat], [-rot[0], -rot[1]]) < 1.55;
const markerR = (c) => 2.2 + Math.log10(c.market + 1) * 2.4;

function draw(now) {
  if (LITE && (skipFrame = !skipFrame)) return;
  ctx.clearRect(0, 0, W, W);

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

  // order pings (ambient buying activity)
  for (const ping of pings) {
    const c = dataByIso[ping.iso];
    if (!c || !visibleC(c)) continue;
    const p = projection([c.lng, c.lat]);
    if (!p) continue;
    const age = (now - ping.t0) / 1400; // 0..1
    if (age >= 1) continue;
    const col = c.arab ? "227,169,79" : "143,210,248";
    ctx.strokeStyle = `rgba(${col},${(1 - age) * .9})`;
    ctx.lineWidth = 1.6;
    ctx.beginPath(); ctx.arc(p[0], p[1], markerR(c) + age * 26, 0, 7); ctx.stroke();
  }

  // soften square clipping when zoomed past the canvas
  if (R * zoom > W * .5) {
    const f = Math.max(28, W * .05);
    ctx.globalCompositeOperation = "destination-out";
    const edges = [[0, 0, f, 0], [W, 0, W - f, 0], [0, 0, 0, f], [0, W, 0, W - f]];
    for (const [x0, y0, x1, y1] of edges) {
      const gr = ctx.createLinearGradient(x0, y0, x1, y1);
      gr.addColorStop(0, "rgba(0,0,0,1)");
      gr.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = gr;
      ctx.fillRect(0, 0, W, W);
    }
    ctx.globalCompositeOperation = "source-over";
  }

  // hover tooltip follows its country
  if (hovered) {
    const c = dataByIso[hovered];
    if (visibleC(c)) {
      const p = projection([c.lng, c.lat]);
      tip.style.left = Math.min(Math.max(p[0], 145), W - 145) + "px";
      tip.style.top = p[1] + "px";
      tip.classList.toggle("below", p[1] < W * .52);
    } else setHover(null);
  }
}

function setHover(iso) {
  hovered = iso;
  $$("#countryChips button").forEach(b => b.classList.toggle("active", b.dataset.iso === iso));
  if (!iso) { tip.hidden = true; return; }
  const c = dataByIso[iso];
  const st = statsFor(c);
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
    if (world) {
      for (const f of world.features) {
        if (!dataByIso[f.id] && d3.geoContains(f, ll))
          return { feat: f };
      }
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

const setZoom = (z) => { zoom = Math.min(2.6, Math.max(0.7, z)); };
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
let tickerTimer = 0, firstOpen = true;

function focusCountry(c) {
  targetLng = -c.lng;
  targetPhi = Math.max(-45, Math.min(15, -c.lat + 8));
  autoPauseUntil = performance.now() + 6000;
}

function openPanel(hit) {
  clearInterval(tickerTimer);
  if (firstOpen) { firstOpen = false; if (window.fbq) fbq("trackCustom", "ToolGlobe"); }

  if (hit.feat) { // a country we have no stats for
    selected = null;
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
  selected = c.iso;
  focusCountry(c);
  const st = statsFor(c);
  const x = xt(c);
  const name = pick(c.name);
  const growth = lang === "ar" ? `+${c.growth}٪` : `+${c.growth}%`;
  const isGulf = GULF.includes(c.iso);

  panel.classList.toggle("world", !c.arab);
  panel.innerHTML = `
    <button class="tg-close" type="button" aria-label="Close">✕</button>
    <div class="tg-p-head"><i></i><h3>${name}</h3><span class="tg-p-tag">${c.arab ? t("tg_arab") : t("tg_world")}</span></div>

    <div class="tg-ticker">
      <small>${t("tg_since")}</small>
      <b id="tgTicker">$0</b>
    </div>

    <div class="tg-grid">
      <div class="tg-stat gold"><small>${t("tg_market")}</small><b>${fmtMarket(c.market)}</b></div>
      <div class="tg-stat"><small>${t("tg_growth")}</small><b>${growth}</b></div>
      <div class="tg-stat"><small>${t("tg_buyers")}</small><b>${big(st.buyers)}</b></div>
      <div class="tg-stat"><small>${t("tg_sellers")}</small><b>~${big(st.sellers)}</b></div>
      <div class="tg-stat gold"><small>${t("tg_newstore")}</small><b>${fmtEvery(st.storeEveryMin)}</b></div>
      <div class="tg-stat"><small>${t("tg_spendper")}</small><b>$${c.spend.toLocaleString("en-US")}</b></div>
    </div>

    <p class="tg-chips-t">${t("tg_niches")}</p>
    <div class="tg-tags">${pick(x.n).map(n => `<span>${n}</span>`).join("")}</div>
    <p class="tg-chips-t">${t("tg_stores")}</p>
    <div class="tg-tags">${x.s.map(s => `<span>${s}</span>`).join("")}</div>

    ${c.note ? `<p class="tg-note">${pick(c.note)}</p>` : ""}

    <div class="tg-cta">
      <p>${c.iso === "IRQ" ? t("tg_cta_iraq") : `<b>${t("tg_cta_lead").replace("{g}", c.growth)}</b>`}</p>
      <a class="btn btn-gold" href="${JOIN_ECOM}" target="_blank" rel="noopener">${t("tg_cta_btn").replace("{c}", name)}</a>
      ${isGulf ? `<a class="tg-alt" href="${JOIN_ZAMBEEL}" target="_blank" rel="noopener">${t("tg_alt_gulf")}</a>` : ""}
      <button class="tg-share" id="tgShare" type="button">📤 ${t("tg_share")}</button>
    </div>
    <p class="tg-disc">${t("tg_disc")}</p>`;
  panel.hidden = false;
  bindPanel();

  // the hypnotic part: money accumulating live for this market
  const tEl = $("#tgTicker");
  const t0 = performance.now();
  tickerTimer = setInterval(() => {
    tEl.textContent = money(st.perSec * (performance.now() - t0) / 1000);
  }, 100);

  // share
  $("#tgShare")?.addEventListener("click", async () => {
    const text = lang === "ar"
      ? `🌍 ${name}: سوق ${fmtMarket(c.market)} أونلاين، ${big(st.buyers)} مشتري، ومتجر جديد ${fmtEvery(st.storeEveryMin)}. شوف كوكب التجارة الإلكترونية:`
      : `🌍 ${name}: a ${fmtMarket(c.market)} online market, ${big(st.buyers)} buyers, a new store every ${fmtEvery(st.storeEveryMin)}. See Planet E-commerce:`;
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
  selected = null;
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
   Ambient life: order pings on the globe + toasts
   ------------------------------------------------------------ */
const pings = [];
const toastBox = $("#toasts");
const weights = COUNTRIES.map(c => Math.sqrt(c.market));
const wSum = weights.reduce((a, b) => a + b, 0);
function randomCountry() {
  let r = Math.random() * wSum;
  for (let i = 0; i < COUNTRIES.length; i++) { r -= weights[i]; if (r <= 0) return COUNTRIES[i]; }
  return COUNTRIES[0];
}
function orderBeat() {
  const c = randomCountry();
  pings.push({ iso: c.iso, t0: performance.now() });
  if (pings.length > 6) pings.shift();

  const x = XT[c.iso];
  const cities = x && x.c ? x.c[lang] || x.c.ar : null;
  const place = cities ? cities[Math.floor(Math.random() * cities.length)] : pick(c.name);
  const amt = Math.round(15 + Math.pow(Math.random(), 2) * 305);
  const el = document.createElement("div");
  el.className = "tg-toast";
  el.innerHTML = `🛒 ${t("tg_toast")} ${place} · <b>$${amt}</b>`;
  toastBox.appendChild(el);
  requestAnimationFrame(() => el.classList.add("on"));
  setTimeout(() => { el.classList.remove("on"); setTimeout(() => el.remove(), 450); }, 3400);
  while (toastBox.children.length > 3) toastBox.firstChild.remove();
}
if (!REDUCED) setInterval(() => { if (!document.hidden) orderBeat(); }, 3000);

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
