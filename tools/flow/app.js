/* ============================================================
   The Product Journey — how an order really travels
   Three models: China worldwide dropshipping · Zambeel Gulf COD
   · Exporta Iraq pre-stock. Facts from the homepage academy
   sheets + partner sites; day figures are typical estimates.
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
    fl_sub: "From a social media ad… to cash in your hand. Pick your business model and destination, and watch the product move step by step — how many days it takes, who stores it, and when your profit arrives.",
    fl_step1: "Pick your business model",
    fl_step2: "Pick your selling destination",
    fl_replay: "▶ Replay journey",
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
    fl_day: "Day", fl_hour: "Hour", fl_start: "Start", fl_weekly: "Weekly",
    fl_total: "Ad to doorstep", fl_days: "~{n} days", fl_hours: "24–72 h",
    fl_moq: "Minimum order (MOQ)", fl_pay: "Customer pays", fl_stock: "Who holds inventory",
    fl_capital: "Starting capital", fl_partnerL: "Logistics partner",
    fl_profit: "+ your profit",
    fl_phase1: "Phase 1 — setup (once, before selling)",
    fl_phase2: "Phase 2 — repeats with every order",
  },
  ar: {
    fl_eyebrow: "أداة مجانية من أكاديميات أرابيا",
    fl_h1a: "رحلة", fl_h1b: "المنتج",
    fl_sub: "من إعلان على السوشال ميديا… إلى كاش بيدك. اختر نموذج تجارتك ووجهتك، وشوف كيف يتحرك المنتج خطوة بخطوة — كم يوم يأخذ، من يخزّنه، ومتى يوصلك ربحك.",
    fl_step1: "اختر نموذج تجارتك",
    fl_step2: "اختر وجهة البيع",
    fl_replay: "▶ أعد الرحلة",
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
    fl_day: "اليوم", fl_hour: "الساعة", fl_start: "البداية", fl_weekly: "أسبوعياً",
    fl_total: "من الإعلان للباب", fl_days: "~{n} أيام", fl_hours: "٢٤–٧٢ ساعة",
    fl_moq: "الحد الأدنى للكمية (MOQ)", fl_pay: "الزبون يدفع", fl_stock: "المخزون على مين؟",
    fl_capital: "رأس مال البداية", fl_partnerL: "الشريك اللوجستي",
    fl_profit: "+ ربحك",
    fl_phase1: "المرحلة ١ — التجهيز (مرة واحدة قبل البيع)",
    fl_phase2: "المرحلة ٢ — تتكرر مع كل طلب",
  }
};
const t = (k) => TL[lang][k] ?? k;
const pick = (v) => (v && typeof v === "object" && ("en" in v || "ar" in v)) ? (v[lang] ?? v.en) : v;

const JOIN_ECOM = "https://www.skool.com/ecomarabia/about";
const JOIN_ZAMBEEL = "https://www.skool.com/dropshipping/about";

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
      { id: "US", n: { ar: "أمريكا", en: "USA" },       air: 9,  local: 2 },
      { id: "UK", n: { ar: "بريطانيا", en: "UK" },      air: 7,  local: 2 },
      { id: "DE", n: { ar: "ألمانيا", en: "Germany" },  air: 8,  local: 2 },
      { id: "FR", n: { ar: "فرنسا", en: "France" },     air: 8,  local: 2 },
      { id: "CA", n: { ar: "كندا", en: "Canada" },      air: 11, local: 3 },
      { id: "AU", n: { ar: "أستراليا", en: "Australia" }, air: 10, local: 2 },
      { id: "AE", n: { ar: "الإمارات", en: "UAE" },     air: 6,  local: 2 },
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
      { id: "AE", n: { ar: "الإمارات", en: "UAE" },      local: 2 },
      { id: "SA", n: { ar: "السعودية", en: "Saudi Arabia" }, local: 3 },
      { id: "QA", n: { ar: "قطر", en: "Qatar" },         local: 3 },
      { id: "KW", n: { ar: "الكويت", en: "Kuwait" },     local: 3 },
      { id: "OM", n: { ar: "عُمان", en: "Oman" },        local: 4 },
      { id: "BH", n: { ar: "البحرين", en: "Bahrain" },   local: 3 },
      { id: "IQ", n: { ar: "العراق", en: "Iraq" },       local: 5 },
      { id: "PK", n: { ar: "باكستان", en: "Pakistan" },  local: 5 },
    ],
  },
  exporta: {
    route: "🚢 → 🏬",
    name: { ar: "تجارة العراق مع Exporta", en: "Iraq E-commerce with Exporta" },
    desc: { ar: "تشحن بضاعتك مسبقاً من الصين إلى مخزن Exporta داخل العراق — وبعدها كل طلب يوصل خلال ٢٤–٧٢ ساعة بدفع ١٠٠٪ عند الاستلام.",
            en: "Ship your stock from China to Exporta's warehouse inside Iraq — then every order delivers in 24–72 hours, 100% cash on delivery." },
    partner: { ar: "بالتعاون مع Exporta — exporta.company", en: "With Exporta — exporta.company" },
    partnerUrl: "https://exporta.company/",
    dests: [
      { id: "IQ", n: { ar: "العراق", en: "Iraq" } },
    ],
  },
};

/* ------------------------------------------------------------
   Journey builders — return { phases:[{title?, stations:[]}], stats, cta }
   station: { ic, h:{ar,en}, p:{ar,en}, day:"label" }
   ------------------------------------------------------------ */
const dayL = (n) => lang === "ar" ? `${t("fl_day")} ${n}` : `${t("fl_day")} ${n}`;
const hourL = (n) => `${t("fl_hour")} ${n}`;

function buildChina(d) {
  let day = 0;
  const st = [];
  const add = (ic, h, p, plus) => { day += plus; st.push({ ic, h, p, day: dayL(day) }); };
  add("📱", { ar: "الزبون يشوف إعلانك", en: "Customer sees your ad" },
      { ar: "على تيك توك أو إنستغرام أو فيسبوك", en: "On TikTok, Instagram or Facebook" }, 0);
  add("🛒", { ar: "يطلب من متجرك ويدفع أونلاين", en: "Orders from your store, pays online" },
      { ar: "المال يوصلك مقدماً — قبل ما تشتري المنتج!", en: "You get paid upfront — before buying the product!" }, 0);
  add("🤝", { ar: "وكيل التوريد يستلم الطلب", en: "The sourcing agent takes over" },
      { ar: "Mutual Dropshipping يشتري المنتج من المصنع ويفحص جودته", en: "Mutual Dropshipping buys it from the factory and checks quality" }, 1);
  add("📦", { ar: "تغليف وتجهيز الشحنة", en: "Packing & preparing the parcel" },
      { ar: "ممكن حتى بعلامتك التجارية الخاصة", en: "Even with your own branding if you want" }, 1);
  add("✈️", { ar: `شحن جوي إلى ${pick(d.n)}`, en: `Air shipping to ${pick(d.n)}` },
      { ar: "خطوط شحن مخصصة للتجارة الإلكترونية", en: "E-commerce dedicated shipping lines" }, d.air);
  add("🛃", { ar: "التخليص الجمركي", en: "Customs clearance" },
      { ar: "يمر تلقائياً في أغلب الطلبات الصغيرة", en: "Automatic for most small parcels" }, 1);
  add("🚚", { ar: "التوصيل المحلي", en: "Local courier delivery" },
      { ar: "شركة التوصيل المحلية تستلم الطردة", en: "The local carrier takes the parcel" }, d.local);
  add("🏠", { ar: "على باب الزبون", en: "At the customer's door" },
      { ar: "وربحك كان بحسابك من أول يوم", en: "And your profit has been in your account since day one" }, 0);
  return {
    phases: [{ stations: st }],
    total: lang === "ar" ? `~${day} يوم` : `~${day} days`,
    stats: [
      { l: t("fl_total"), v: lang === "ar" ? `~${day} يوم` : `~${day} days`, gold: true },
      { l: t("fl_moq"), v: { ar: "لا يوجد — قطعة واحدة", en: "None — one piece" } },
      { l: t("fl_pay"), v: { ar: "مسبقاً أونلاين 💳", en: "Upfront, online 💳" } },
      { l: t("fl_stock"), v: { ar: "لا أحد — يُشترى لكل طلب", en: "Nobody — bought per order" } },
      { l: t("fl_capital"), v: { ar: "ميزانية إعلانات فقط", en: "Ad budget only" }, gold: true },
    ],
    partner: MODELS.china.partner, partnerUrl: null,
    cta: { lead: { ar: "هذا النموذج بالضبط هو اللي نعلّمه من الصفر في الأكاديمية الرئيسية.", en: "This exact model is what we teach from zero in the flagship academy." },
           label: { ar: "تعلّمه في eCom Arabia+", en: "Learn it in eCom Arabia+" }, href: JOIN_ECOM },
  };
}

function buildZambeel(d) {
  const st = [
    { ic: "📱", h: { ar: "الزبون يشوف إعلانك", en: "Customer sees your ad" },
      p: { ar: "على تيك توك أو إنستغرام أو فيسبوك", en: "On TikTok, Instagram or Facebook" }, day: dayL(0) },
    { ic: "🛒", h: { ar: "يطلب بالدفع عند الاستلام", en: "Orders with cash on delivery" },
      p: { ar: "بدون بطاقة — أسلوب الشراء المفضل خليجياً", en: "No card needed — the Gulf's favorite way to buy" }, day: dayL(0) },
    { ic: "☎️", h: { ar: "زنبيل يتصل ويؤكد الطلب", en: "Zambeel calls to confirm" },
      p: { ar: "تأكيد هاتفي يرفع نسبة نجاح التوصيل", en: "Phone confirmation raises the delivery success rate" }, day: dayL(1) },
    { ic: "🏬", h: { ar: "المنتج جاهز في مخزون زنبيل", en: "Product is already in Zambeel's stock" },
      p: { ar: "أنت ما اشتريت أي مخزون — المنصة تخزّن عنك", en: "You bought zero inventory — the platform stocks it for you" }, day: dayL(1) },
    { ic: "🚚", h: { ar: `التوصيل المحلي في ${pick(d.n)}`, en: `Local delivery in ${pick(d.n)}` },
      p: { ar: "توصيل حتى باب الزبون", en: "Straight to the customer's door" }, day: dayL(1 + d.local) },
    { ic: "💵", h: { ar: "الزبون يدفع كاش عند الباب", en: "Customer pays cash at the door" },
      p: { ar: "نسبة توصيل ناجح ~٨٠٪ مع التأكيد الهاتفي", en: "~80% successful COD rate with call confirmation" }, day: dayL(1 + d.local) },
    { ic: "💰", h: { ar: "أرباحك تتحول لك", en: "Your profit is paid out" },
      p: { ar: "دفعات أسبوعية مضمونة من زنبيل", en: "Guaranteed weekly payouts from Zambeel" }, day: t("fl_weekly") },
  ];
  return {
    phases: [{ stations: st }],
    stats: [
      { l: t("fl_total"), v: lang === "ar" ? `~${1 + d.local} أيام` : `~${1 + d.local} days`, gold: true },
      { l: t("fl_moq"), v: { ar: "لا يوجد", en: "None" } },
      { l: t("fl_pay"), v: { ar: "كاش عند الاستلام 💵", en: "Cash on delivery 💵" } },
      { l: t("fl_stock"), v: { ar: "زنبيل يتكفل بالمخزون", en: "Zambeel holds the stock" } },
      { l: { ar: "دول التوصيل", en: "COD countries" }, v: "8", gold: true },
    ],
    partner: MODELS.zambeel.partner, partnerUrl: MODELS.zambeel.partnerUrl,
    cta: { lead: { ar: "الأكاديمية تشمل اشتراك زنبيل Gold و٣ اجتماعات زوم أسبوعياً للمتابعة.", en: "The academy includes a Zambeel Gold subscription and 3 weekly follow-up Zoom meetings." },
           label: { ar: "تعلّمه في دروبشيبينغ زنبيل — $99/شهر", en: "Learn it in Zambeel Dropshipping — $99/mo" }, href: JOIN_ZAMBEEL },
  };
}

function buildExporta() {
  const p1 = [
    { ic: "🎯", h: { ar: "تختار منتجك الرابح", en: "You pick your winning product" },
      p: { ar: "منتج مطلوب في السوق العراقي", en: "Something the Iraqi market wants" }, day: t("fl_start") },
    { ic: "🏭", h: { ar: "الطلب من المصنع في الصين", en: "Order from the factory in China" },
      p: { ar: "الحد الأدنى عادة ١٠٠–٣٠٠ قطعة", en: "MOQ is typically 100–300 pieces" }, day: dayL(0) },
    { ic: "🚢", h: { ar: "شحن من الصين إلى العراق", en: "Freight from China to Iraq" },
      p: { ar: "Exporta تتكفل بالشحن والتخليص", en: "Exporta handles shipping and clearance" }, day: lang === "ar" ? "~١٥–٢٥ يوم" : "~15–25 days" },
    { ic: "🏬", h: { ar: "بضاعتك في مخزن Exporta داخل العراق", en: "Your stock lands in Exporta's Iraq warehouse" },
      p: { ar: "جاهزة للانطلاق لحظة وصول أول طلب", en: "Ready to move the second an order lands" }, day: dayL("~20") },
  ];
  const p2 = [
    { ic: "📱", h: { ar: "الزبون يشوف إعلانك", en: "Customer sees your ad" },
      p: { ar: "٤٥ مليون نسمة ومنافسة شبه معدومة", en: "45 million people, almost no competition" }, day: hourL(0) },
    { ic: "🛒", h: { ar: "يطلب بالدفع عند الاستلام", en: "Orders with cash on delivery" },
      p: { ar: "السوق العراقي ١٠٠٪ دفع عند الاستلام", en: "The Iraqi market is 100% COD" }, day: hourL(0) },
    { ic: "☎️", h: { ar: "تأكيد الطلب هاتفياً", en: "Order confirmed by phone" },
      p: { ar: "قبل خروج الشحنة من المخزن", en: "Before the parcel leaves the warehouse" }, day: hourL(2) },
    { ic: "🚚", h: { ar: "توصيل داخل العراق", en: "Delivery inside Iraq" },
      p: { ar: "من المخزن المحلي — خلال ٢٤–٧٢ ساعة فقط", en: "From local stock — in just 24–72 hours" }, day: hourL(48) },
    { ic: "💵", h: { ar: "الزبون يدفع كاش عند الاستلام", en: "Customer pays cash on delivery" },
      p: { ar: "١٠٠٪ من الطلبات كاش", en: "100% of orders are cash" }, day: hourL(48) },
    { ic: "💰", h: { ar: "تستلم أرباحك", en: "You collect your profit" },
      p: { ar: "التحصيل عبر Exporta", en: "Collected and remitted via Exporta" }, day: "💰" },
  ];
  return {
    phases: [
      { title: t("fl_phase1"), stations: p1 },
      { title: t("fl_phase2"), stations: p2 },
    ],
    stats: [
      { l: t("fl_total"), v: t("fl_hours"), gold: true },
      { l: t("fl_moq"), v: { ar: "نعم — شحنة أولى (~١٠٠–٣٠٠ قطعة)", en: "Yes — first shipment (~100–300 pcs)" } },
      { l: t("fl_pay"), v: { ar: "١٠٠٪ كاش عند الاستلام 💵", en: "100% cash on delivery 💵" } },
      { l: t("fl_stock"), v: { ar: "بضاعتك في مخزن Exporta بالعراق", en: "Your stock, in Exporta's Iraq warehouse" } },
      { l: { ar: "المنافسة", en: "Competition" }, v: { ar: "شبه معدومة", en: "Almost none" }, gold: true },
    ],
    partner: MODELS.exporta.partner, partnerUrl: MODELS.exporta.partnerUrl,
    cta: { lead: { ar: "أكاديمية كاملة مخصصة لهذا النموذج تنطلق قريباً — بالتعاون مع Exporta.", en: "A full academy dedicated to this model is launching soon — in collaboration with Exporta." },
           soon: { ar: "🔒 أكاديمية التجارة الإلكترونية في العراق — قريباً", en: "🔒 Iraq e-Com Academy — coming soon" } },
  };
}

/* ------------------------------------------------------------
   State + render
   ------------------------------------------------------------ */
let curModel = null, curDest = null, playTimer = 0, stationEls = [], stepIdx = -1, usedOnce = false;

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
  if (curModel === "china") return buildChina(d);
  if (curModel === "zambeel") return buildZambeel(d);
  return buildExporta();
}

function renderBoard() {
  const j = buildJourney();
  const d = MODELS[curModel].dests.find(x => x.id === curDest);
  board.hidden = false;

  $("#flTitle").innerHTML = `${pick(MODELS[curModel].name)} ← ${pick(d.n)}
    <small>${pick(j.partner)}</small>`;

  $("#flRoads").innerHTML = j.phases.map(ph => `
    ${ph.title ? `<p class="fl-phase"><b>${ph.title}</b></p>` : ""}
    <div class="fl-road">
      ${ph.stations.map(s => `
        <div class="fl-st">
          <span class="ic">${s.ic}</span>
          <span class="st-txt">
            <h4>${pick(s.h)}</h4>
            <p>${pick(s.p)}</p>
            <span class="dy">${s.day}</span>
          </span>
        </div>`).join("")}
    </div>`).join("");

  $("#flStats").innerHTML = j.stats.map(s => `
    <div class="fl-stat${s.gold ? " gold" : ""}"><small>${pick(s.l)}</small><b>${pick(s.v)}</b></div>`).join("");

  $("#flPartner").innerHTML = j.partnerUrl
    ? `${t("fl_partnerL")}: <a href="${j.partnerUrl}" target="_blank" rel="noopener">${pick(j.partner)} ↗</a>`
    : `${t("fl_partnerL")}: ${pick(j.partner)}`;

  $("#flCta").innerHTML = `
    <p><b>${pick(j.cta.lead)}</b></p>
    ${j.cta.soon
      ? `<span class="btn btn-gold fl-btn-soon">${pick(j.cta.soon)}</span>`
      : `<a class="btn btn-gold" href="${j.cta.href}" target="_blank" rel="noopener">${pick(j.cta.label)}</a>`}`;

  stationEls = $$(".fl-st", board);
  const days = stationEls.map((el, i) => el.querySelector(".dy").textContent);
  stationEls.forEach((el, i) => el.addEventListener("click", () => jumpTo(i)));

  play();
  if (!usedOnce) { usedOnce = true; if (window.fbq) fbq("trackCustom", "ToolFlow"); }
}

/* ------------------------------------------------------------
   Playback
   ------------------------------------------------------------ */
const pkg = $("#flPkg"), dayBox = $("#flDay");

function movePkgTo(el, hop) {
  const b = board.getBoundingClientRect();
  const ic = el.querySelector(".ic").getBoundingClientRect();
  const x = ic.left - b.left + ic.width / 2 - 13;
  const y = ic.top - b.top - 34;
  pkg.style.transform = `translate(${x}px, ${y}px)`;
  pkg.classList.add("go");
  if (hop && !REDUCED) {
    pkg.classList.remove("hop");
    void pkg.offsetWidth;
    pkg.classList.add("hop");
  }
}

function setStep(i, hop) {
  stepIdx = i;
  stationEls.forEach((el, k) => {
    el.classList.toggle("lit", k <= i);
    el.classList.toggle("now", k === i);
  });
  const el = stationEls[i];
  if (!el) return;
  dayBox.textContent = el.querySelector(".dy").textContent;
  movePkgTo(el, hop);
  if (i === stationEls.length - 1) celebrate(el);
}

function celebrate(el) {
  const b = board.getBoundingClientRect();
  const ic = el.querySelector(".ic").getBoundingClientRect();
  const p = document.createElement("span");
  p.className = "fl-profit go";
  p.textContent = t("fl_profit") + " 💵";
  p.style.left = (ic.left - b.left - 14) + "px";
  p.style.top = (ic.top - b.top - 8) + "px";
  board.appendChild(p);
  setTimeout(() => p.remove(), 1700);
}

function play() {
  clearInterval(playTimer);
  setStep(0, false);
  if (REDUCED) { // show everything at once, no animation
    stationEls.forEach(el => el.classList.add("lit"));
    setStep(stationEls.length - 1, false);
    return;
  }
  let i = 0;
  playTimer = setInterval(() => {
    i++;
    if (i >= stationEls.length) { clearInterval(playTimer); return; }
    setStep(i, true);
    if (innerWidth < 861) stationEls[i].scrollIntoView({ block: "center", behavior: "smooth" });
  }, 1100);
}

function jumpTo(i) {
  clearInterval(playTimer);
  setStep(i, true);
}

$("#flReplay").addEventListener("click", () => {
  board.scrollIntoView({ block: "nearest", behavior: "smooth" });
  play();
});
addEventListener("resize", () => { if (stepIdx >= 0 && stationEls[stepIdx]) movePkgTo(stationEls[stepIdx], false); });

/* ------------------------------------------------------------
   Picker events
   ------------------------------------------------------------ */
modelsBox.addEventListener("click", e => {
  const b = e.target.closest(".fl-model");
  if (!b) return;
  curModel = b.dataset.m;
  curDest = MODELS[curModel].dests[0].id;
  renderModels(); renderDests(); renderBoard();
  if (innerWidth < 980) $("#flBoard").scrollIntoView({ block: "start", behavior: "smooth" });
});
destsBox.addEventListener("click", e => {
  const b = e.target.closest("button");
  if (!b) return;
  curDest = b.dataset.d;
  renderDests(); renderBoard();
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
