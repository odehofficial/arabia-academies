/* ============================================================
   The Product Journey — a two-level interactive stage:
   LEVEL 1: top-down map, the order travels along curved routes.
   LEVEL 2: zoom into the customer's house -> street-level scene
   (ordering on the couch at the start, doorstep delivery at the
   end). Zoom/pan freely: wheel, pinch, drag, on-screen arrows.
   ============================================================ */
(() => {
"use strict";

const $  = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;

let lang = localStorage.getItem("aa-lang") || "ar";

/* ------------------------------------------------------------
   Strings
   ------------------------------------------------------------ */
const TL = {
  en: {
    fl_eyebrow: "A free tool by Arabia Academies",
    fl_h1a: "The Product", fl_h1b: "Journey",
    fl_sub: "From a social media ad… to cash in your hand. Pick your model and destination, watch the order travel across the map — then zoom all the way into the customer's house and watch them order it themselves.",
    fl_step1: "Pick your business model",
    fl_step2: "Pick your selling destination",
    fl_replay: "▶ Replay journey",
    fl_hint: "🔍 Zoom into the customer's house · drag to move",
    fl_disc: "Typical estimated figures — they vary by product, platform and season.",
    fl_b1: "Now you understand how the product moves —",
    fl_b2: "next, learn how to sell it.",
    fl_b3: "Picking the product, ads that sell, and handling COD fulfillment — skills we teach step by step, in Arabic, inside our academies.",
    fl_b_cta1: "Start your journey — eCom Arabia+",
    fl_b_cta2: "See all academies",
    fl_home: "Home", fl_globe: "Planet E-commerce", fl_camera: "Camera Movement Prompts",
    f_tag: "Road to success", nav_join: "Join now", lang_btn: "عربي",
    f_privacy: "Privacy Policy", f_terms: "Terms of Use",
    cookie_text: "We use cookies — including Meta's tools — to improve your experience and measure how the site is used.",
    cookie_ok: "OK",
    fl_total: "Ad to doorstep", fl_moq: "Minimum order (MOQ)", fl_pay: "Customer pays",
    fl_stock: "Who holds inventory", fl_capital: "Starting capital", fl_partnerL: "Logistics partner",
    fl_profit: "+ your profit",
  },
  ar: {
    fl_eyebrow: "أداة مجانية من أكاديميات أرابيا",
    fl_h1a: "رحلة", fl_h1b: "المنتج",
    fl_sub: "من إعلان على السوشال ميديا… إلى كاش بيدك. اختر نموذجك ووجهتك، وشوف الطلب يسافر على الخريطة — وبعدها قرّب بالزوم حتى تدخل بيت الزبون وتشوفه يطلب بنفسك.",
    fl_step1: "اختر نموذج تجارتك",
    fl_step2: "اختر وجهة البيع",
    fl_replay: "▶ أعد الرحلة",
    fl_hint: "🔍 قرّب على بيت الزبون · اسحب للتحرك",
    fl_disc: "أرقام تقريبية معتادة — تختلف حسب المنتج والمنصة والموسم.",
    fl_b1: "الآن فهمت كيف يتحرك المنتج —",
    fl_b2: "بقي تتعلم كيف تبيعه.",
    fl_b3: "اختيار المنتج، الإعلان اللي يبيع، والتعامل مع التوصيل والدفع عند الاستلام — كلها مهارات نعلّمها خطوة بخطوة وبالعربي داخل أكاديمياتنا.",
    fl_b_cta1: "ابدأ رحلتك — eCom Arabia+",
    fl_b_cta2: "شاهد كل الأكاديميات",
    fl_home: "الرئيسية", fl_globe: "كوكب التجارة الإلكترونية", fl_camera: "برومبتات حركات الكاميرا",
    f_tag: "طريقك إلى النجاح", nav_join: "انضم الآن", lang_btn: "EN",
    f_privacy: "سياسة الخصوصية", f_terms: "شروط الاستخدام",
    cookie_text: "نستخدم ملفات تعريف الارتباط (كوكيز) — بما فيها أدوات ميتا — لتحسين تجربتك وقياس كيفية استخدام الموقع.",
    cookie_ok: "حسناً",
    fl_total: "من الإعلان للباب", fl_moq: "الحد الأدنى للكمية (MOQ)", fl_pay: "الزبون يدفع",
    fl_stock: "المخزون على مين؟", fl_capital: "رأس مال البداية", fl_partnerL: "الشريك اللوجستي",
    fl_profit: "+ ربحك",
  }
};
const t = (k) => TL[lang][k] ?? k;
const pick = (v) => (v && typeof v === "object" && ("en" in v || "ar" in v)) ? (v[lang] ?? v.en) : v;

const JOIN_ECOM = "https://www.skool.com/ecomarabia/about";
const JOIN_ZAMBEEL = "https://www.skool.com/dropshipping/about";

/* ------------------------------------------------------------
   Geography
   ------------------------------------------------------------ */
const PT = {
  yiwu: [120.07, 29.31], shenzhen: [114.06, 22.55], shanghai: [121.47, 31.23],
  singapore: [103.85, 1.29], colombo: [80.2, 5.6], hormuz: [56.6, 25.6],
  basra: [47.78, 30.51], baghdad: [44.36, 33.31], dubai: [55.27, 25.2],
  US: [-74.0, 40.71], UK: [-0.13, 51.5], DE: [8.68, 50.11], FR: [2.35, 48.86],
  CA: [-79.38, 43.65], AU: [151.21, -33.87], AE: [55.27, 25.2], SA: [46.68, 24.71],
  QA: [51.53, 25.29], KW: [47.98, 29.38], OM: [58.54, 23.61], BH: [50.59, 26.23],
  IQ: [44.36, 33.31], PK: [67.01, 24.86],
};
const CITY = {
  US: { ar: "نيويورك", en: "New York" }, UK: { ar: "لندن", en: "London" },
  DE: { ar: "فرانكفورت", en: "Frankfurt" }, FR: { ar: "باريس", en: "Paris" },
  CA: { ar: "تورونتو", en: "Toronto" }, AU: { ar: "سيدني", en: "Sydney" },
  AE: { ar: "دبي", en: "Dubai" }, SA: { ar: "الرياض", en: "Riyadh" },
  QA: { ar: "الدوحة", en: "Doha" }, KW: { ar: "الكويت", en: "Kuwait City" },
  OM: { ar: "مسقط", en: "Muscat" }, BH: { ar: "المنامة", en: "Manama" },
  IQ: { ar: "بغداد", en: "Baghdad" }, PK: { ar: "كراتشي", en: "Karachi" },
};
const customerOf = (id) => { const c = PT[id]; return [c[0] + 1.7, c[1] - 1.15]; };

/* ------------------------------------------------------------
   Models
   ------------------------------------------------------------ */
const MODELS = {
  china: {
    route: "🏭 → 🌍",
    name: { ar: "دروبشيبينغ عالمي من الصين", en: "Worldwide Dropshipping from China" },
    desc: { ar: "بدون أي مخزون — كل طلب يُشترى ويُشحن لحاله من الصين عبر وكيل توريد، والزبون يدفع أونلاين مقدماً.",
            en: "Zero inventory — every order is bought and shipped individually from China via a sourcing agent, and the customer pays online upfront." },
    partner: { ar: "بالتعاون مع Mutual Dropshipping", en: "With Mutual Dropshipping" },
    dests: [
      { id: "US", n: { ar: "أمريكا", en: "USA" }, air: 9, local: 2 },
      { id: "UK", n: { ar: "بريطانيا", en: "UK" }, air: 7, local: 2 },
      { id: "DE", n: { ar: "ألمانيا", en: "Germany" }, air: 8, local: 2 },
      { id: "FR", n: { ar: "فرنسا", en: "France" }, air: 8, local: 2 },
      { id: "CA", n: { ar: "كندا", en: "Canada" }, air: 11, local: 3 },
      { id: "AU", n: { ar: "أستراليا", en: "Australia" }, air: 10, local: 2 },
      { id: "AE", n: { ar: "الإمارات", en: "UAE" }, air: 6, local: 2 },
      { id: "SA", n: { ar: "السعودية", en: "Saudi Arabia" }, air: 7, local: 3 },
    ],
  },
  zambeel: {
    route: "🏬 → 💵",
    name: { ar: "دروبشيبينغ خليجي مع زنبيل", en: "Gulf COD Dropshipping with Zambeel" },
    desc: { ar: "المنتجات جاهزة مسبقاً في مخزون منصة زنبيل — أنت تسوّق فقط، وهم يتكفلون بالتأكيد والتوصيل والدفع عند الاستلام في ٨ دول.",
            en: "Products are pre-stocked on Zambeel's platform — you just market, they handle confirmation, delivery and COD across 8 countries." },
    partner: { ar: "بالتعاون مع زنبيل — myzambeel.com", en: "With Zambeel — myzambeel.com" },
    partnerUrl: "https://www.myzambeel.com/",
    dests: [
      { id: "AE", n: { ar: "الإمارات", en: "UAE" }, local: 2 },
      { id: "SA", n: { ar: "السعودية", en: "Saudi Arabia" }, local: 3 },
      { id: "QA", n: { ar: "قطر", en: "Qatar" }, local: 3 },
      { id: "KW", n: { ar: "الكويت", en: "Kuwait" }, local: 3 },
      { id: "OM", n: { ar: "عُمان", en: "Oman" }, local: 4 },
      { id: "BH", n: { ar: "البحرين", en: "Bahrain" }, local: 3 },
      { id: "IQ", n: { ar: "العراق", en: "Iraq" }, local: 5 },
      { id: "PK", n: { ar: "باكستان", en: "Pakistan" }, local: 5 },
    ],
  },
  exporta: {
    route: "🚢 → 🏬",
    name: { ar: "تجارة العراق مع Exporta", en: "Iraq E-commerce with Exporta" },
    desc: { ar: "تشحن بضاعتك مسبقاً من الصين إلى مخزن Exporta داخل العراق — وبعدها كل طلب يوصل خلال ٢٤–٧٢ ساعة بدفع ١٠٠٪ عند الاستلام.",
            en: "Ship your stock from China to Exporta's warehouse inside Iraq — then every order delivers in 24–72 hours, 100% cash on delivery." },
    partner: { ar: "بالتعاون مع Exporta — exporta.company", en: "With Exporta — exporta.company" },
    partnerUrl: "https://exporta.company/",
    dests: [{ id: "IQ", n: { ar: "العراق", en: "Iraq" } }],
  },
};

/* day-label helpers */
const dayAr = (n) => lang === "ar" ? `اليوم ${n}` : `Day ${n}`;
const hourAr = (n) => lang === "ar" ? `الساعة ${n}` : `Hour ${n}`;

/* ------------------------------------------------------------
   Journey builders
   markers: {ll, ic, label} · legs: {chain:[ll..], kind, dur}
   steps: {cap, day, act:{type, leg?, at?}}
   ------------------------------------------------------------ */
function jChina(d) {
  const cust = customerOf(d.id), city = PT[d.id], total = 4 + d.air + d.local;
  return {
    pts: [PT.yiwu, PT.shenzhen, city, cust],
    markers: [
      { ll: PT.yiwu, ic: "🏭", label: { ar: "المصنع", en: "Factory" } },
      { ll: PT.shenzhen, ic: "🤝", label: { ar: "وكيل التوريد", en: "Sourcing agent" } },
      { ll: city, ic: "🛬", label: CITY[d.id] },
      { ll: cust, ic: "🏠", label: { ar: "الزبون", en: "Customer" } },
    ],
    legs: [
      { chain: [cust, PT.shenzhen], kind: "signal", dur: 1100 },
      { chain: [PT.yiwu, PT.shenzhen], kind: "truck", dur: 900 },
      { chain: [PT.shenzhen, city], kind: "plane", dur: 2600 },
      { chain: [city, cust], kind: "truck", dur: 1300 },
    ],
    steps: [
      { cap: { ar: "الزبون يشوف إعلانك على السوشال… ويطلب ويدفع أونلاين 💳 — المال وصلك مقدماً!", en: "The customer sees your ad… orders and pays online 💳 — you get the money upfront!" },
        day: dayAr(0), act: { type: "streetA" } },
      { cap: { ar: "الطلب انطلق فوراً لوكيل التوريد في الصين ⚡", en: "The order fires instantly to your sourcing agent in China ⚡" },
        day: dayAr(0), act: { type: "zoomOut", then: { type: "leg", leg: 0 } } },
      { cap: { ar: "Mutual Dropshipping يشتري المنتج من المصنع، يفحصه ويغلفه 📦", en: "Mutual Dropshipping buys it from the factory, checks and packs it 📦" },
        day: lang === "ar" ? "اليوم 1–2" : "Day 1–2", act: { type: "leg", leg: 1 } },
      { cap: { ar: `شحن جوي إلى ${pick(CITY[d.id])} ✈️`, en: `Air shipping to ${pick(CITY[d.id])} ✈️` },
        day: dayAr("~" + (2 + d.air)), act: { type: "leg", leg: 2 } },
      { cap: { ar: "التخليص الجمركي 🛃 — تلقائي لأغلب الطرود الصغيرة", en: "Customs clearance 🛃 — automatic for most small parcels" },
        day: dayAr("~" + (3 + d.air)), act: { type: "pulse", at: city } },
      { cap: { ar: "شركة التوصيل المحلية تستلم الطردة 🚚", en: "The local courier picks up the parcel 🚚" },
        day: dayAr("~" + total), act: { type: "leg", leg: 3 } },
      { cap: { ar: "وصل لباب الزبون 🏠 — وربحك كان بحسابك من أول لحظة", en: "Delivered to the door 🏠 — and your profit's been in your account since minute one" },
        day: lang === "ar" ? `~${total} يوم` : `~${total} days`, act: { type: "streetB" } },
    ],
    stats: [
      { l: t("fl_total"), v: lang === "ar" ? `~${total} يوم` : `~${total} days`, gold: true },
      { l: t("fl_moq"), v: { ar: "لا يوجد — قطعة واحدة", en: "None — one piece" } },
      { l: t("fl_pay"), v: { ar: "مسبقاً أونلاين 💳", en: "Upfront, online 💳" } },
      { l: t("fl_stock"), v: { ar: "لا أحد — يُشترى لكل طلب", en: "Nobody — bought per order" } },
      { l: t("fl_capital"), v: { ar: "ميزانية إعلانات فقط", en: "Ad budget only" }, gold: true },
    ],
    partner: MODELS.china.partner, partnerUrl: null, streetCod: false,
    cta: { lead: { ar: "هذا النموذج بالضبط هو اللي نعلّمه من الصفر في الأكاديمية الرئيسية.", en: "This exact model is what we teach from zero in the flagship academy." },
           label: { ar: "تعلّمه في eCom Arabia+", en: "Learn it in eCom Arabia+" }, href: JOIN_ECOM },
  };
}

function jZambeel(d) {
  const cust = customerOf(d.id), city = PT[d.id], far = d.id !== "AE";
  const total = 1 + d.local;
  const legs = [{ chain: [cust, PT.dubai], kind: "signal", dur: 1100 }];
  if (far) legs.push({ chain: [PT.dubai, city], kind: "plane", dur: 1800 });
  legs.push({ chain: [city, cust], kind: "truck", dur: 1300 });
  const steps = [
    { cap: { ar: "الزبون يشوف إعلانك… ويطلب بالدفع عند الاستلام 💵 — بدون بطاقة", en: "The customer sees your ad… and orders with cash on delivery 💵 — no card needed" },
      day: dayAr(0), act: { type: "streetA" } },
    { cap: { ar: "الطلب وصل زنبيل ⚡ فريقهم يتصل ويؤكد الطلب هاتفياً ☎️", en: "The order hits Zambeel ⚡ their team calls the customer to confirm ☎️" },
      day: dayAr(1), act: { type: "zoomOut", then: { type: "leg", leg: 0 } } },
    { cap: { ar: "المنتج جاهز مسبقاً في مخزون زنبيل 🏬 — أنت ما اشتريت أي مخزون", en: "The product is already sitting in Zambeel's stock 🏬 — you bought zero inventory" },
      day: dayAr(1), act: { type: "pulse", at: PT.dubai } },
  ];
  let li = 1;
  if (far) {
    steps.push({ cap: { ar: `الشحنة تنطلق نحو ${pick(CITY[d.id])} ✈️`, en: `The parcel heads to ${pick(CITY[d.id])} ✈️` },
      day: dayAr(2), act: { type: "leg", leg: li++ } });
  }
  steps.push(
    { cap: { ar: "التوصيل المحلي حتى باب الزبون 🚚", en: "Local delivery straight to the door 🚚" },
      day: lang === "ar" ? `اليوم ~${total}` : `Day ~${total}`, act: { type: "leg", leg: li } },
    { cap: { ar: "يدفع كاش عند الباب 💵 (~80٪ نسبة نجاح مع التأكيد الهاتفي) — وزنبيل يحوّل أرباحك أسبوعياً 💰", en: "Cash at the door 💵 (~80% success with call confirmation) — Zambeel pays your profit weekly 💰" },
      day: lang === "ar" ? "أسبوعياً 💰" : "Weekly 💰", act: { type: "streetB" } },
  );
  return {
    pts: [PT.dubai, city, cust],
    markers: [
      { ll: PT.dubai, ic: "🏬", label: { ar: "مخزن زنبيل — دبي", en: "Zambeel hub — Dubai" } },
      ...(far ? [{ ll: city, ic: "🛬", label: CITY[d.id] }] : []),
      { ll: cust, ic: "🏠", label: { ar: "الزبون", en: "Customer" } },
    ],
    legs, steps,
    stats: [
      { l: t("fl_total"), v: lang === "ar" ? `~${total} أيام` : `~${total} days`, gold: true },
      { l: t("fl_moq"), v: { ar: "لا يوجد", en: "None" } },
      { l: t("fl_pay"), v: { ar: "كاش عند الاستلام 💵", en: "Cash on delivery 💵" } },
      { l: t("fl_stock"), v: { ar: "زنبيل يتكفل بالمخزون", en: "Zambeel holds the stock" } },
      { l: { ar: "دول التوصيل", en: "COD countries" }, v: "8", gold: true },
    ],
    partner: MODELS.zambeel.partner, partnerUrl: MODELS.zambeel.partnerUrl, streetCod: true,
    cta: { lead: { ar: "الأكاديمية تشمل اشتراك زنبيل Gold و٣ اجتماعات زوم أسبوعياً للمتابعة.", en: "The academy includes a Zambeel Gold subscription and 3 weekly follow-up Zoom meetings." },
           label: { ar: "تعلّمه في دروبشيبينغ زنبيل — $99/شهر", en: "Learn it in Zambeel Dropshipping — $99/mo" }, href: JOIN_ZAMBEEL },
  };
}

function jExporta() {
  const cust = customerOf("IQ");
  return {
    pts: [PT.yiwu, PT.shanghai, PT.singapore, PT.basra, PT.baghdad, cust],
    markers: [
      { ll: PT.yiwu, ic: "🏭", label: { ar: "المصنع — الصين", en: "Factory — China" } },
      { ll: PT.shanghai, ic: "⚓", label: { ar: "ميناء شنغهاي", en: "Shanghai port" } },
      { ll: PT.basra, ic: "⚓", label: { ar: "ميناء البصرة", en: "Basra port" } },
      { ll: PT.baghdad, ic: "🏬", label: { ar: "مخزن Exporta — بغداد", en: "Exporta warehouse — Baghdad" } },
      { ll: cust, ic: "🏠", label: { ar: "الزبون", en: "Customer" } },
    ],
    legs: [
      { chain: [PT.yiwu, PT.shanghai], kind: "truck", dur: 900 },
      { chain: [PT.shanghai, PT.singapore, PT.colombo, PT.hormuz, PT.basra], kind: "ship", dur: 3400 },
      { chain: [PT.basra, PT.baghdad], kind: "truck", dur: 1000 },
      { chain: [cust, PT.baghdad], kind: "signal", dur: 900 },
      { chain: [PT.baghdad, cust], kind: "truck", dur: 1200 },
    ],
    steps: [
      { cap: { ar: "المرحلة ١ — التجهيز: تطلب شحنتك الأولى من المصنع 🏭 (MOQ عادة ١٠٠–٣٠٠ قطعة)", en: "Phase 1 — setup: you order your first batch from the factory 🏭 (MOQ usually 100–300 pcs)" },
        day: dayAr(0), act: { type: "overview", then: { type: "leg", leg: 0 } } },
      { cap: { ar: "شحن بحري من الصين إلى العراق 🚢 — Exporta تتكفل بالشحن والتخليص", en: "Sea freight from China to Iraq 🚢 — Exporta handles shipping and clearance" },
        day: lang === "ar" ? "~15–25 يوم" : "~15–25 days", act: { type: "leg", leg: 1 } },
      { cap: { ar: "بضاعتك وصلت مخزن Exporta داخل العراق 🏬 — جاهزة لأي طلب", en: "Your stock lands in Exporta's warehouse inside Iraq 🏬 — ready for orders" },
        day: dayAr("~20"), act: { type: "leg", leg: 2 } },
      { cap: { ar: "المرحلة ٢ — البيع: الزبون يشوف إعلانك ويطلب بالدفع عند الاستلام 💵 (السوق العراقي 100٪ COD)", en: "Phase 2 — selling: the customer sees your ad and orders COD 💵 (Iraq is 100% COD)" },
        day: hourAr(0), act: { type: "streetA" } },
      { cap: { ar: "الطلب يوصل المخزن ⚡ وتأكيد هاتفي قبل خروج الشحنة ☎️", en: "The order hits the warehouse ⚡ phone confirmation before it ships ☎️" },
        day: hourAr(2), act: { type: "zoomOut", then: { type: "leg", leg: 3 } } },
      { cap: { ar: "توصيل من المخزون المحلي خلال ٢٤–٧٢ ساعة فقط 🚚", en: "Delivery from local stock in just 24–72 hours 🚚" },
        day: hourAr(48), act: { type: "leg", leg: 4 } },
      { cap: { ar: "الزبون يدفع ١٠٠٪ كاش عند الباب 💵 — وExporta تحصّل وتحوّل لك أرباحك 💰", en: "The customer pays 100% cash at the door 💵 — Exporta collects and remits your profit 💰" },
        day: "💰", act: { type: "streetB" } },
    ],
    stats: [
      { l: t("fl_total"), v: { ar: "٢٤–٧٢ ساعة", en: "24–72 h" }, gold: true },
      { l: t("fl_moq"), v: { ar: "نعم — شحنة أولى (~١٠٠–٣٠٠ قطعة)", en: "Yes — first shipment (~100–300 pcs)" } },
      { l: t("fl_pay"), v: { ar: "١٠٠٪ كاش عند الاستلام 💵", en: "100% cash on delivery 💵" } },
      { l: t("fl_stock"), v: { ar: "بضاعتك في مخزن Exporta بالعراق", en: "Your stock, in Exporta's Iraq warehouse" } },
      { l: { ar: "المنافسة", en: "Competition" }, v: { ar: "شبه معدومة", en: "Almost none" }, gold: true },
    ],
    partner: MODELS.exporta.partner, partnerUrl: MODELS.exporta.partnerUrl, streetCod: true,
    cta: { lead: { ar: "أكاديمية كاملة مخصصة لهذا النموذج تنطلق قريباً — بالتعاون مع Exporta.", en: "A full academy dedicated to this model is launching soon — with Exporta." },
           soon: { ar: "🔒 أكاديمية التجارة الإلكترونية في العراق — قريباً", en: "🔒 Iraq e-Com Academy — coming soon" } },
  };
}

/* ------------------------------------------------------------
   Street-level scenes (inline SVG, night palette)
   ------------------------------------------------------------ */
function sceneA() { /* the customer on the couch, ordering */
  return `
  <svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <rect width="800" height="450" fill="#0A0F26"/>
    <rect y="330" width="800" height="120" fill="#0D1330"/>
    <rect x="546" y="60" width="150" height="120" rx="10" fill="#0E1840" stroke="#232E5C" stroke-width="4"/>
    <line x1="621" y1="60" x2="621" y2="180" stroke="#232E5C" stroke-width="4"/>
    <circle cx="660" cy="96" r="15" fill="#F0C878" opacity=".9"/>
    <circle cx="586" cy="120" r="1.6" fill="#F4EFE2" opacity=".8"/>
    <circle cx="600" cy="86" r="1.2" fill="#F4EFE2" opacity=".6"/>
    <path d="M120 118 l14 0 M127 111 l0 14" stroke="#E3A94F" stroke-width="3" stroke-linecap="round" opacity=".5"/>
    <g>
      <path d="M96 306 q0 -34 34 -34 l180 0 q34 0 34 34 l0 44 -248 0 z" fill="#161E48"/>
      <rect x="86" y="290" width="26" height="76" rx="12" fill="#1A2352"/>
      <rect x="328" y="290" width="26" height="76" rx="12" fill="#1A2352"/>
      <rect x="96" y="350" width="248" height="16" rx="8" fill="#10173A"/>
    </g>
    <g>
      <circle cx="238" cy="238" r="24" fill="#2A3566"/>
      <path d="M214 262 q24 -18 48 0 l8 46 q-32 14 -64 0 z" fill="#2A3566"/>
      <path d="M252 284 q22 -8 34 6" stroke="#2A3566" stroke-width="16" stroke-linecap="round" fill="none"/>
      <rect x="282" y="272" width="20" height="32" rx="5" fill="#0B1230" stroke="#E3A94F" stroke-width="2.5" transform="rotate(-14 292 288)"/>
      <rect x="286.5" y="277" width="11" height="20" rx="2" fill="#F0C878" opacity=".95" transform="rotate(-14 292 288)"/>
      <circle cx="292" cy="286" r="26" fill="#F0C878" opacity=".14">
        <animate attributeName="opacity" values=".14;.3;.14" dur="2s" repeatCount="indefinite"/>
      </circle>
    </g>
    <g class="tap">
      <circle cx="292" cy="286" r="8" fill="none" stroke="#F0C878" stroke-width="3" opacity="0">
        <animate attributeName="r" values="8;40" dur="1.4s" begin="0.4s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values=".9;0" dur="1.4s" begin="0.4s" repeatCount="indefinite"/>
      </circle>
    </g>
    <g transform="translate(360,150)">
      <rect x="-10" y="-34" width="150" height="52" rx="26" fill="#E3A94F"/>
      <path d="M18 18 l14 20 8 -18 z" fill="#E3A94F"/>
      <text x="65" y="-1" text-anchor="middle" font-family="Cairo,Montserrat,sans-serif" font-size="21" font-weight="800" fill="#141005">🛒 ✓</text>
    </g>
    <rect x="440" y="296" width="70" height="70" rx="8" fill="#141B42"/>
    <rect x="452" y="266" width="46" height="30" rx="6" fill="#1A2352"/>
    <path d="M475 258 q-14 -22 6 -34 q18 12 4 34 z" fill="#37C6A0" opacity=".8"/>
  </svg>`;
}
function sceneB(cod) { /* doorstep delivery (+cash when COD) */
  return `
  <svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <rect width="800" height="450" fill="#0A0F26"/>
    <rect y="352" width="800" height="98" fill="#0D1330"/>
    <g>
      <rect x="470" y="70" width="240" height="282" fill="#10183C"/>
      <path d="M455 70 l135 -46 135 46 z" fill="#161E48"/>
      <rect x="520" y="150" width="90" height="202" rx="45" fill="#0B1230" stroke="#E3A94F" stroke-width="4"/>
      <circle cx="598" cy="258" r="6" fill="#E3A94F"/>
      <circle cx="565" cy="118" r="13" fill="#F0C878" opacity=".95"/>
      <circle cx="565" cy="118" r="30" fill="#F0C878" opacity=".14">
        <animate attributeName="opacity" values=".14;.28;.14" dur="2.4s" repeatCount="indefinite"/>
      </circle>
    </g>
    <g>
      <rect x="60" y="252" width="150" height="86" rx="12" fill="#161E48"/>
      <rect x="196" y="270" width="66" height="68" rx="10" fill="#1A2352"/>
      <rect x="210" y="282" width="34" height="22" rx="4" fill="#0E1840"/>
      <circle cx="106" cy="352" r="17" fill="#0B1230" stroke="#2A3566" stroke-width="6"/>
      <circle cx="226" cy="352" r="17" fill="#0B1230" stroke="#2A3566" stroke-width="6"/>
      <rect x="74" y="266" width="60" height="34" rx="6" fill="#E3A94F" opacity=".2"/>
    </g>
    <g>
      <circle cx="360" cy="216" r="21" fill="#2A3566"/>
      <rect x="342" y="238" width="38" height="66" rx="14" fill="#2A3566"/>
      <rect x="344" y="210" width="34" height="10" rx="5" fill="#37C6A0"/>
      <path d="M378 252 q20 -4 30 8" stroke="#2A3566" stroke-width="13" stroke-linecap="round" fill="none"/>
      <g>
        <rect x="398" y="242" width="40" height="34" rx="4" fill="#E3A94F"/>
        <line x1="398" y1="259" x2="438" y2="259" stroke="#141005" stroke-width="3"/>
        <line x1="418" y1="242" x2="418" y2="276" stroke="#141005" stroke-width="3"/>
        <animateTransform attributeName="transform" type="translate" values="0 0; 26 4; 26 4" keyTimes="0;.45;1" dur="2.6s" repeatCount="indefinite"/>
      </g>
      <circle cx="510" cy="222" r="21" fill="#2A3566"/>
      <rect x="492" y="244" width="38" height="60" rx="14" fill="#2A3566"/>
      <path d="M492 258 q-18 -6 -28 6" stroke="#2A3566" stroke-width="13" stroke-linecap="round" fill="none"/>
      ${cod ? `
      <g>
        <rect x="466" y="196" width="34" height="20" rx="3" fill="#37C6A0"/>
        <circle cx="483" cy="206" r="5.5" fill="#0B3F32"/>
        <animateTransform attributeName="transform" type="translate" values="0 0; -18 -30; -18 -60" keyTimes="0;.5;1" dur="2.6s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0;1;0" keyTimes="0;.5;1" dur="2.6s" repeatCount="indefinite"/>
      </g>` : `
      <g>
        <text x="470" y="180" font-family="Cairo,Montserrat,sans-serif" font-size="26" fill="#37C6A0" font-weight="800">✓</text>
        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.3;.8;1" dur="2.6s" repeatCount="indefinite"/>
      </g>`}
    </g>
  </svg>`;
}

/* ------------------------------------------------------------
   Stage: canvas map + view transform
   ------------------------------------------------------------ */
const stage = $("#flStage"), cv = $("#mapCv"), ctx = cv.getContext("2d");
const streetA = $("#streetA"), streetB = $("#streetB");
let W = 0, H = 0, DPR = 1;
let world = null;
let baseProj = null, basePath = null;
let J = null;                       // current journey
let legPx = [];                     // per leg: array of base-px points
let markerPx = [], custPx = null;
let view = { cx: 0, cy: 0, k: 1 };  // base-px center + zoom factor
let legProg = [];                   // 0..1 per leg
let vehicles = [];                  // {legIdx, at:0..1} for drawing tip vehicle
let pulses = [];                    // {px, t0}
let sceneMode = "A";
let playToken = 0, autoPlaying = false;

const VEH = { plane: "✈️", truck: "🚚", ship: "🚢", signal: "⚡" };
const STREET_K = 4.6;

function sizeCanvas() {
  const r = stage.getBoundingClientRect();
  DPR = Math.min(devicePixelRatio || 1, 2);
  W = r.width; H = r.height;
  cv.width = W * DPR; cv.height = H * DPR;
  ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
}

let worldP = null;
function loadWorld() {
  return worldP || (worldP = fetch("/assets/data/world.geo.json")
    .then(r => r.json()).then(j => { world = j; draw(); return j; }));
}

function fitJourney() {
  sizeCanvas();
  baseProj = window.d3.geoMercator();
  baseProj.fitExtent([[46, 30], [W - 46, H - 84]], { type: "MultiPoint", coordinates: J.pts });
  basePath = window.d3.geoPath(baseProj);
  const geoInt = window.d3.geoInterpolate;
  legPx = J.legs.map(l => {
    const pts = [];
    for (let s = 0; s < l.chain.length - 1; s++) {
      const ip = geoInt(l.chain[s], l.chain[s + 1]);
      for (let i = 0; i <= 40; i++) pts.push(baseProj(ip(i / 40)));
    }
    return pts;
  });
  markerPx = J.markers.map(m => ({ ...m, px: baseProj(m.ll) }));
  custPx = markerPx[markerPx.length - 1].px;
  overviewView();
}
function overviewView() { view = { cx: W / 2, cy: H / 2, k: 1 }; }

const toScreen = (p) => [(p[0] - view.cx) * view.k + W / 2, (p[1] - view.cy) * view.k + H / 2];

/* ---------- drawing ---------- */
function draw(now = performance.now()) {
  if (!W) sizeCanvas();
  ctx.clearRect(0, 0, W, H);

  // ocean stars
  ctx.fillStyle = "rgba(244,239,226,.16)";
  for (let i = 0; i < 40; i++) {
    const x = (i * 97 % W), y = (i * 61 % H);
    ctx.fillRect(x, y, 1.4, 1.4);
  }

  if (world && baseProj) {
    ctx.save();
    ctx.translate(W / 2, H / 2); ctx.scale(view.k, view.k); ctx.translate(-view.cx, -view.cy);
    ctx.beginPath(); basePath.context(ctx)({ type: "FeatureCollection", features: world.features });
    ctx.fillStyle = "#111838"; ctx.fill();
    ctx.strokeStyle = "rgba(244,239,226,.10)"; ctx.lineWidth = 1 / view.k; ctx.stroke();
    ctx.restore();
  }
  if (!J || !legPx.length) return;

  // legs
  J.legs.forEach((l, i) => {
    const pts = legPx[i].map(toScreen);
    const prog = legProg[i] ?? 0;
    const n = Math.max(2, Math.floor(pts.length * prog));
    // pending: faint full path
    ctx.beginPath();
    pts.forEach((p, k2) => k2 ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]));
    ctx.strokeStyle = "rgba(244,239,226,.09)"; ctx.setLineDash([]); ctx.lineWidth = 1.5; ctx.stroke();
    if (prog > 0) {
      ctx.beginPath();
      for (let k2 = 0; k2 < n; k2++) { const p = pts[k2]; k2 ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]); }
      ctx.strokeStyle = l.kind === "signal" ? "rgba(91,180,229,.9)" : "rgba(227,169,79,.9)";
      ctx.lineWidth = l.kind === "signal" ? 1.8 : 2.6;
      ctx.setLineDash(l.kind === "signal" ? [3, 5] : [7, 6]);
      ctx.stroke(); ctx.setLineDash([]);
      if (prog < 1) {
        const tip = pts[n - 1];
        ctx.font = "22px serif"; ctx.textAlign = "center"; ctx.textBaseline = "middle";
        ctx.fillText(VEH[l.kind], tip[0], tip[1] - 8);
      }
    }
  });

  // pulses
  pulses = pulses.filter(p => now - p.t0 < 1100);
  pulses.forEach(p => {
    const s = toScreen(p.px), age = (now - p.t0) / 1100;
    ctx.beginPath(); ctx.arc(s[0], s[1], 10 + age * 34, 0, 7);
    ctx.strokeStyle = `rgba(227,169,79,${(1 - age) * .85})`; ctx.lineWidth = 2; ctx.stroke();
  });

  // markers
  const showLabels = view.k < 3.6;
  markerPx.forEach(m => {
    const s = toScreen(m.px);
    if (s[0] < -40 || s[0] > W + 40 || s[1] < -40 || s[1] > H + 40) return;
    ctx.beginPath(); ctx.arc(s[0], s[1], 14, 0, 7);
    ctx.fillStyle = "rgba(8,12,28,.9)"; ctx.fill();
    ctx.strokeStyle = "rgba(227,169,79,.75)"; ctx.lineWidth = 1.6; ctx.stroke();
    ctx.font = "14px serif"; ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.fillText(m.ic, s[0], s[1] + 1);
    if (showLabels) {
      ctx.font = "700 11px Cairo, Montserrat, sans-serif";
      ctx.fillStyle = "rgba(244,239,226,.85)";
      ctx.fillText(pick(m.label), s[0], s[1] + 27);
    }
  });

  updateStreet();
}

function updateStreet() {
  if (!custPx) return;
  const s = toScreen(custPx);
  const near = Math.hypot(s[0] - W / 2, s[1] - H / 2) < Math.min(W, H) * .5;
  const op = (view.k > STREET_K && near) ? Math.min(1, (view.k - STREET_K) / 1.8) : 0;
  streetA.style.opacity = sceneMode === "A" ? op : 0;
  streetB.style.opacity = sceneMode === "B" ? op : 0;
}

/* ---------- tweens & choreography ---------- */
const sleep = (ms, tok) => new Promise(res => {
  if (REDUCED || document.hidden) return res();
  const id = setInterval(() => { if (tok !== playToken) { clearInterval(id); res(); } }, 120);
  setTimeout(() => { clearInterval(id); res(); }, ms);
});

function tweenView(target, ms, tok) {
  return new Promise(res => {
    if (REDUCED || document.hidden) { view = { ...target }; draw(); return res(); }
    const from = { ...view }, t0 = performance.now();
    (function frame(now) {
      if (tok !== playToken) return res();
      const f = Math.min(1, (now - t0) / ms), e = f < .5 ? 2 * f * f : 1 - Math.pow(-2 * f + 2, 2) / 2;
      view = {
        cx: from.cx + (target.cx - from.cx) * e,
        cy: from.cy + (target.cy - from.cy) * e,
        k: from.k + (target.k - from.k) * e,
      };
      draw(now);
      f < 1 ? requestAnimationFrame(frame) : res();
    })(t0);
  });
}

function animateLeg(i, tok) {
  return new Promise(res => {
    const dur = J.legs[i].dur;
    if (REDUCED || document.hidden) { legProg[i] = 1; draw(); return res(); }
    const t0 = performance.now();
    (function frame(now) {
      if (tok !== playToken) { legProg[i] = 1; draw(); return res(); }
      legProg[i] = Math.min(1, (now - t0) / dur);
      draw(now);
      legProg[i] < 1 ? requestAnimationFrame(frame) : res();
    })(t0);
  });
}

function setCaption(step) {
  const el = $("#flCaption");
  el.innerHTML = pick(step.cap);
  el.classList.add("on");
  $("#flDay").textContent = step.day;
}

async function doAct(act, tok) {
  if (!act) return;
  if (act.type === "streetA" || act.type === "streetB") {
    sceneMode = act.type === "streetA" ? "A" : "B";
    await tweenView({ cx: custPx[0], cy: custPx[1], k: 7 }, 950, tok);
    draw();
    await sleep(2100, tok);
    if (act.type === "streetB") return; // stay on the doorstep
  } else if (act.type === "zoomOut" || act.type === "overview") {
    await tweenView({ cx: W / 2, cy: H / 2, k: 1 }, 900, tok);
    await sleep(250, tok);
  } else if (act.type === "leg") {
    await animateLeg(act.leg, tok);
    await sleep(320, tok);
  } else if (act.type === "pulse") {
    pulses.push({ px: baseProj(act.at), t0: performance.now() });
    if (!REDUCED && !document.hidden) {
      const t0 = performance.now();
      await new Promise(res => (function f(n) { if (tok !== playToken) return res(); draw(n); (n - t0) < 1100 ? requestAnimationFrame(f) : res(); })(t0));
    } else draw();
    await sleep(500, tok);
  }
  if (act.then) await doAct(act.then, tok);
}

async function play() {
  const tok = ++playToken;
  autoPlaying = true;
  legProg = J.legs.map(() => 0);
  sceneMode = "A";
  overviewView(); draw();
  for (const step of J.steps) {
    if (tok !== playToken) return;
    setCaption(step);
    await doAct(step.act, tok);
    if (tok !== playToken) return;
    await sleep(650, tok);
  }
  autoPlaying = false;
}

function cancelAuto() {
  if (!autoPlaying) return;
  playToken++;
  autoPlaying = false;
  legProg = legProg.map(() => 1); // reveal the full route for free exploration
  draw();
}

/* ---------- user interaction: drag / wheel / pinch / buttons ---------- */
const pointers = new Map();
let pinchD = 0;
cv.addEventListener("pointerdown", e => {
  cancelAuto();
  try { cv.setPointerCapture(e.pointerId); } catch (err) {}
  pointers.set(e.pointerId, [e.clientX, e.clientY]);
  cv.classList.add("dragging");
  if (pointers.size === 2) {
    const [a, b] = [...pointers.values()];
    pinchD = Math.hypot(a[0] - b[0], a[1] - b[1]);
  }
});
cv.addEventListener("pointermove", e => {
  if (!pointers.has(e.pointerId)) return;
  const prev = pointers.get(e.pointerId);
  pointers.set(e.pointerId, [e.clientX, e.clientY]);
  if (pointers.size === 2) {
    const [a, b] = [...pointers.values()];
    const d = Math.hypot(a[0] - b[0], a[1] - b[1]);
    if (pinchD) setZoom(view.k * d / pinchD);
    pinchD = d;
    return;
  }
  view.cx -= (e.clientX - prev[0]) / view.k;
  view.cy -= (e.clientY - prev[1]) / view.k;
  draw();
});
const lift = e => {
  pointers.delete(e.pointerId);
  if (pointers.size < 2) pinchD = 0;
  if (!pointers.size) cv.classList.remove("dragging");
};
cv.addEventListener("pointerup", lift);
cv.addEventListener("pointercancel", lift);
cv.addEventListener("wheel", e => {
  e.preventDefault();
  cancelAuto();
  setZoom(view.k * (e.deltaY < 0 ? 1.18 : 0.85));
}, { passive: false });

function setZoom(k) { view.k = Math.min(9, Math.max(.75, k)); draw(); }
function pan(dx, dy) { cancelAuto(); view.cx += dx / view.k; view.cy += dy / view.k; draw(); }
$("#zIn").addEventListener("click", () => { cancelAuto(); setZoom(view.k * 1.4); });
$("#zOut").addEventListener("click", () => { cancelAuto(); setZoom(view.k * 0.72); });
$("#pUp").addEventListener("click", () => pan(0, -70));
$("#pDown").addEventListener("click", () => pan(0, 70));
$("#pLeft").addEventListener("click", () => pan(-70, 0));
$("#pRight").addEventListener("click", () => pan(70, 0));
addEventListener("resize", () => { if (J) { fitJourney(); legProg = legProg.map(() => 1); draw(); } });

/* ------------------------------------------------------------
   Pickers + panels
   ------------------------------------------------------------ */
let curModel = null, curDest = null, usedOnce = false;
const modelsBox = $("#flModels"), destsBox = $("#flDests"), board = $("#flBoard");

function renderModels() {
  modelsBox.innerHTML = Object.keys(MODELS).map(id => {
    const m = MODELS[id];
    return `
    <button class="fl-model${curModel === id ? " active" : ""}" type="button" data-m="${id}">
      <span class="fm-route">${m.route}</span>
      <h3>${pick(m.name)}</h3>
      <p>${pick(m.desc)}</p>
      <span class="fm-partner">${pick(m.partner)}</span>
    </button>`;
  }).join("");
}
function renderDests() {
  if (!curModel) { destsBox.innerHTML = ""; return; }
  destsBox.innerHTML = MODELS[curModel].dests.map(d =>
    `<button type="button" data-d="${d.id}" class="${curDest === d.id ? "active" : ""}">${pick(d.n)}</button>`
  ).join("");
}
function buildJourney() {
  const d = MODELS[curModel].dests.find(x => x.id === curDest);
  if (curModel === "china") return jChina(d);
  if (curModel === "zambeel") return jZambeel(d);
  return jExporta();
}

function renderBoard() {
  J = buildJourney();
  const d = MODELS[curModel].dests.find(x => x.id === curDest);
  board.hidden = false;

  $("#flTitle").innerHTML = `${pick(MODELS[curModel].name)} ← ${pick(d.n)}
    <small>${pick(J.partner)}</small>`;
  $("#flStats").innerHTML = J.stats.map(s => `
    <div class="fl-stat${s.gold ? " gold" : ""}"><small>${pick(s.l)}</small><b>${pick(s.v)}</b></div>`).join("");
  $("#flPartner").innerHTML = J.partnerUrl
    ? `${t("fl_partnerL")}: <a href="${J.partnerUrl}" target="_blank" rel="noopener">${pick(J.partner)} ↗</a>`
    : `${t("fl_partnerL")}: ${pick(J.partner)}`;
  $("#flCta").innerHTML = `
    <p><b>${pick(J.cta.lead)}</b></p>
    ${J.cta.soon
      ? `<span class="btn btn-gold fl-btn-soon">${pick(J.cta.soon)}</span>`
      : `<a class="btn btn-gold" href="${J.cta.href}" target="_blank" rel="noopener">${pick(J.cta.label)}</a>`}`;

  streetA.innerHTML = sceneA();
  streetB.innerHTML = sceneB(J.streetCod);

  loadWorld();
  fitJourney();
  play();
  if (!usedOnce) { usedOnce = true; if (window.fbq) fbq("trackCustom", "ToolFlow"); }
}

modelsBox.addEventListener("click", e => {
  const b = e.target.closest(".fl-model");
  if (!b) return;
  curModel = b.dataset.m;
  curDest = MODELS[curModel].dests[0].id;
  renderModels(); renderDests(); renderBoard();
  if (innerWidth < 980) board.scrollIntoView({ block: "start", behavior: "smooth" });
});
destsBox.addEventListener("click", e => {
  const b = e.target.closest("button");
  if (!b) return;
  curDest = b.dataset.d;
  renderDests(); renderBoard();
});
$("#flReplay").addEventListener("click", () => {
  board.scrollIntoView({ block: "nearest", behavior: "smooth" });
  renderBoard();
});

/* ------------------------------------------------------------
   Language toggle
   ------------------------------------------------------------ */
function applyLang() {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  $$("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  renderModels();
  renderDests();
  if (curModel && curDest) renderBoard();
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
applyLang();

})();
