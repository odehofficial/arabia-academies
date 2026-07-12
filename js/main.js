/* ============================================================
   Arabia Academies — interactions
   ============================================================ */
(() => {
"use strict";

const $  = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ------------------------------------------------------------
   Language
   ------------------------------------------------------------ */
let lang = localStorage.getItem("aa-lang")
  || ((navigator.language || "").toLowerCase().startsWith("ar") ? "ar" : "en");

const t = (key) => I18N[lang][key] ?? key;
const pick = (v) => (v && typeof v === "object" && ("en" in v || "ar" in v)) ? (v[lang] ?? v.en) : v;
const igUrl = (handle) => "https://www.instagram.com/" + handle.replace(/^@/, "") + "/";

function applyLang() {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  $$("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  $$("[data-i18n-aria]").forEach(el => { el.setAttribute("aria-label", t(el.dataset.i18nAria)); });
  renderMarquee();
  renderAcademies();
  renderRoadmap();
  renderTestimonials();
  renderFaq();
  renderFooter();
  window.renderChips?.();
  window.refreshGlobeTip?.();
  if (sheetOpenId) fillSheet(sheetOpenId); // live-translate an open sheet
}

$("#langBtn").addEventListener("click", () => {
  lang = lang === "en" ? "ar" : "en";
  localStorage.setItem("aa-lang", lang);
  applyLang();
});

/* ------------------------------------------------------------
   Nav
   ------------------------------------------------------------ */
const nav = $("#nav");
addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 30), { passive: true });

const burger = $("#navBurger"), navLinks = $(".nav-links");
burger.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
});
navLinks.addEventListener("click", e => {
  if (e.target.tagName === "A") { navLinks.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); }
});

/* ------------------------------------------------------------
   Reveal on scroll + counters
   ------------------------------------------------------------ */
const revealIO = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (!en.isIntersecting) return;
    en.target.classList.add("in");
    revealIO.unobserve(en.target);
  });
}, { threshold: 0.12 });

function watchReveals(scope = document) { $$(".reveal", scope).forEach(el => revealIO.observe(el)); }
watchReveals();

const countIO = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (!en.isIntersecting) return;
    countIO.unobserve(en.target);
    const el = en.target, target = +el.dataset.count, suffix = el.dataset.suffix || "";
    if (REDUCED) { el.textContent = target + suffix; return; }
    const t0 = performance.now(), dur = 1400;
    (function tick(now) {
      const p = Math.min((now - t0) / dur, 1), eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    })(t0);
  });
}, { threshold: 0.6 });
$$(".count").forEach(el => countIO.observe(el));

/* ------------------------------------------------------------
   Marquee — tool & partner logos
   ------------------------------------------------------------ */
function renderMarquee() {
  const track = $("#marqueeTrack");
  const half = TOOLS.concat(TOOLS).map(x =>
    `<span><i><img src="${x.img}" alt="" loading="lazy">${x.label}</i></span>`).join("");
  track.innerHTML = half + half; // 2 identical halves → seamless loop
}

/* ------------------------------------------------------------
   Academies grid + slide-up sheet
   ------------------------------------------------------------ */
function markHtml(a) {
  return a.logo
    ? `<img class="acad-mark" src="${a.logo}" alt="${pick(a.name)} logo">`
    : `<svg class="acad-mark" viewBox="0 0 200 200" aria-hidden="true"><use href="#mark-${a.mark}"/></svg>`;
}
function priceHtml(a) {
  return `${a.priceOld ? `<s>${a.priceOld}</s> ` : ""}${pick(a.price)}<small>${pick(a.per)}</small>`;
}

function renderAcademies() {
  const grid = $("#acadGrid");
  grid.innerHTML = "";
  ACADEMIES.forEach(a => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "acad-card" + (a.flagship ? " flagship" : "") + (a.comingSoon ? " soon" : "");
    card.style.setProperty("--ac", a.color);
    card.setAttribute("aria-haspopup", "dialog");
    card.innerHTML = `
      <div class="acad-top">
        ${markHtml(a)}
        ${a.badge ? `<span class="acad-badge">${pick(a.badge)}</span>` : ""}
      </div>
      <div class="acad-info">
        <h3>${pick(a.name)}</h3>
        <p class="acad-tag">${pick(a.tag)}</p>
        <div class="acad-meta">
          <span class="acad-price">${priceHtml(a)}</span>
          <span class="acad-open">${t("acad_open")}</span>
        </div>
      </div>`;
    card.addEventListener("mousemove", e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", ((e.clientX - r.left) / r.width * 100) + "%");
      card.style.setProperty("--my", ((e.clientY - r.top) / r.height * 100) + "%");
    });
    card.addEventListener("click", () => openSheet(a.id));
    grid.appendChild(card);
  });
  drawRoadline();
}

/* road line behind the academy cards */
let roadDash = 0, roadPath = null;
function drawRoadline() {
  const svg = $("#roadline"), sec = $("#academies");
  const w = sec.clientWidth, h = sec.clientHeight;
  svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
  const x = (f) => w * f;
  const d = `M ${x(.5)},0
             C ${x(.5)},${h * .12} ${x(.15)},${h * .18} ${x(.15)},${h * .34}
             C ${x(.15)},${h * .52} ${x(.85)},${h * .48} ${x(.85)},${h * .66}
             C ${x(.85)},${h * .84} ${x(.5)},${h * .86} ${x(.5)},${h}`;
  svg.innerHTML = `<path d="${d}"/>`;
  roadPath = svg.firstElementChild;
}
addEventListener("resize", () => drawRoadline());
if (!REDUCED) (function marchRoad() {
  roadDash -= 0.12;
  if (roadPath) roadPath.style.strokeDashoffset = roadDash;
  requestAnimationFrame(marchRoad);
})();

/* sheet */
const sheet = $("#sheet"), backdrop = $("#sheetBackdrop"), sheetContent = $("#sheetContent");
let sheetOpenId = null, lastFocus = null;

function fillSheet(id) {
  const a = ACADEMIES.find(x => x.id === id);
  const statsHtml = a.stats.map(s => `<div><strong>${pick(s.v)}</strong><span>${pick(s.l)}</span></div>`).join("");
  const outlineHtml = a.outline.map(o => `<li>${pick(o)}</li>`).join("");
  const inclHtml = a.includes[lang].map(i => `<li>${i}</li>`).join("");
  const joinLabel = a.joinLabel ? pick(a.joinLabel) : t("sheet_join");
  sheetContent.innerHTML = `
    <div class="sheet-head" style="--ac:${a.color}">
      ${markHtml(a)}
      <div>
        <h2 id="sheetTitle">${pick(a.name)}</h2>
        <p class="sheet-tag">${pick(a.tag)}</p>
        ${a.collab ? `<a class="sheet-collab" href="${a.collab.url}" target="_blank" rel="noopener" style="--ac:${a.color}">🤝 ${pick(a.collab.note)} — ${t("sheet_partner")} ↗</a>` : ""}
      </div>
    </div>
    <p class="sheet-desc">${pick(a.desc)}</p>
    <div class="sheet-stats">${statsHtml}</div>
    <div class="sheet-cols" style="--ac:${a.color}">
      <div><h3>${t("sheet_outline")}</h3><ol class="sheet-outline">${outlineHtml}</ol></div>
      <div><h3>${t("sheet_includes")}</h3><ul class="sheet-includes">${inclHtml}</ul></div>
    </div>
    <div class="sheet-foot">
      <span class="sheet-price">${priceHtml(a)}${a.priceNote ? `<span class="pnote">${pick(a.priceNote)}</span>` : ""}</span>
      ${a.join
        ? `<a class="btn btn-gold" href="${a.join}" target="_blank" rel="noopener">${joinLabel} ↗</a>`
        : `<span class="sheet-soon-note">${t("sheet_soon")}</span>`}
    </div>`;
}

function openSheet(id) {
  sheetOpenId = id;
  lastFocus = document.activeElement;
  fillSheet(id);
  sheet.hidden = false; backdrop.hidden = false;
  void sheet.offsetHeight; // flush styles so the slide-up transition runs
  sheet.classList.add("show"); backdrop.classList.add("show");
  document.body.style.overflow = "hidden";
  $("#sheetClose").focus();
}
function closeSheet() {
  if (!sheetOpenId) return;
  sheetOpenId = null;
  sheet.classList.remove("show"); backdrop.classList.remove("show");
  document.body.style.overflow = "";
  setTimeout(() => { sheet.hidden = true; backdrop.hidden = true; }, 560);
  lastFocus?.focus();
}
$("#sheetClose").addEventListener("click", closeSheet);
backdrop.addEventListener("click", closeSheet);
addEventListener("keydown", e => { if (e.key === "Escape" && sheetOpenId) closeSheet(); });

/* ------------------------------------------------------------
   Roadmap
   ------------------------------------------------------------ */
function renderRoadmap() {
  $("#roadSteps").innerHTML = ROADMAP.map(s => `
    <div class="road-step reveal">
      <i>${s.n}</i>
      <h3>${pick(s.t)}</h3>
      <p>${pick(s.d)}</p>
    </div>`).join("");
  watchReveals($("#roadSteps"));
}

/* ------------------------------------------------------------
   Testimonials — cards link to the student's profile
   ------------------------------------------------------------ */
function tCard(x) {
  return `
    <a class="t-card" href="${igUrl(x.handle)}" target="_blank" rel="noopener" title="${t("t_view")}">
      <span class="t-stars" aria-hidden="true">★★★★★</span>
      <blockquote>${x[lang]}</blockquote>
      <footer>
        <img class="t-avatar" src="assets/testimonials/avatars/${x.img}" alt="" loading="lazy">
        <span><strong>${x.name}</strong><span>${x.handle}</span></span>
      </footer>
    </a>`;
}

function renderTestimonials() {
  const half = Math.ceil(TESTIMONIALS.length / 2);
  const rows = [TESTIMONIALS.slice(0, half), TESTIMONIALS.slice(half)];
  [ $("#tRow1 .t-track"), $("#tRow2 .t-track") ].forEach((track, r) => {
    const cards = rows[r].map(tCard).join("");
    track.innerHTML = cards + cards; // duplicate for seamless loop
  });
  $("#featuredRow").innerHTML = FEATURED.map(f => `
    <a class="featured" href="${igUrl(f.handle)}" target="_blank" rel="noopener" title="${t("t_view")}">
      <div class="featured-head">
        <img class="featured-avatar" src="assets/testimonials/avatars/${f.img}" alt="">
        <div>
          <strong>${f.name}</strong>
          <span class="featured-badge">${pick(f.badge)}</span>
        </div>
        <span class="featured-stars" aria-hidden="true">★★★★★</span>
      </div>
      <blockquote>“${pick(f.quote)}”</blockquote>
      <span class="t-proof">${t("t_view")}</span>
    </a>`).join("");
}

/* ------------------------------------------------------------
   FAQ
   ------------------------------------------------------------ */
function renderFaq() {
  $("#faqList").innerHTML = FAQ.map((f, i) => `
    <div class="faq-item reveal">
      <button class="faq-q" type="button" aria-expanded="false" aria-controls="faqa${i}">
        ${pick(f.q)}<i aria-hidden="true">＋</i>
      </button>
      <div class="faq-a" id="faqa${i}"><p>${pick(f.a)}</p></div>
    </div>`).join("");
  watchReveals($("#faqList"));
}
document.addEventListener("click", e => {
  const q = e.target.closest(".faq-q");
  if (!q) return;
  const item = q.parentElement, a = item.querySelector(".faq-a");
  const open = item.classList.toggle("open");
  q.setAttribute("aria-expanded", open);
  a.style.maxHeight = open ? a.scrollHeight + "px" : "0px";
});

/* ------------------------------------------------------------
   Footer
   ------------------------------------------------------------ */
function renderFooter() {
  $("#footAcademies").innerHTML = ACADEMIES.map(a => a.join
    ? `<li><a href="${a.join}" target="_blank" rel="noopener">${pick(a.name)}</a></li>`
    : `<li><a href="#academies">${pick(a.name)}<span class="soon-tag">${t("f_soon")}</span></a></li>`
  ).join("");
}

/* ============================================================
   Hero sky — stars + the route constellation
   ============================================================ */
(function sky() {
  const cv = $("#skyCanvas"), ctx = cv.getContext("2d");
  let W, H, stars = [], route = [], t0 = performance.now();
  const ROUTE = [[.04,.88],[.16,.74],[.30,.80],[.45,.62],[.60,.68],[.74,.50],[.87,.55],[.965,.36]];

  function size() {
    const r = cv.parentElement.getBoundingClientRect();
    const dpr = Math.min(devicePixelRatio || 1, 2);
    W = r.width; H = r.height;
    cv.width = W * dpr; cv.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    stars = Array.from({ length: Math.min(260, W / 5) }, () => ({
      x: Math.random() * W, y: Math.random() * H * .92,
      r: Math.random() * 1.3 + .3,
      p: Math.random() * Math.PI * 2,
      s: .5 + Math.random() * 1.6
    }));
    route = ROUTE.map(([x, y]) => [x * W, y * H]);
  }

  function draw(now) {
    ctx.clearRect(0, 0, W, H);
    const time = (now - t0) / 1000;
    for (const s of stars) {
      const a = .25 + .55 * (0.5 + 0.5 * Math.sin(s.p + time * s.s));
      ctx.globalAlpha = a;
      ctx.fillStyle = "#F4EFE2";
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, 7); ctx.fill();
    }
    ctx.globalAlpha = 1;
    const prog = REDUCED ? 1 : Math.min(time / 5, 1);
    const segs = (route.length - 1) * prog;
    ctx.strokeStyle = "rgba(227,169,79,.55)";
    ctx.lineWidth = 1.4;
    ctx.setLineDash([2, 9]);
    ctx.beginPath();
    ctx.moveTo(route[0][0], route[0][1]);
    for (let i = 1; i < route.length; i++) {
      if (i <= segs) ctx.lineTo(route[i][0], route[i][1]);
      else {
        const f = segs - (i - 1);
        if (f > 0) ctx.lineTo(
          route[i-1][0] + (route[i][0] - route[i-1][0]) * f,
          route[i-1][1] + (route[i][1] - route[i-1][1]) * f);
        break;
      }
    }
    ctx.stroke();
    ctx.setLineDash([]);
    route.forEach(([x, y], i) => {
      if (i > segs) return;
      const tw = .6 + .4 * Math.sin(time * 2 + i);
      ctx.fillStyle = `rgba(240,200,120,${tw})`;
      ctx.beginPath(); ctx.arc(x, y, i === route.length - 1 ? 3.4 : 2.2, 0, 7); ctx.fill();
      if (i === route.length - 1) {
        ctx.strokeStyle = `rgba(240,200,120,${.5 * tw})`;
        ctx.beginPath(); ctx.arc(x, y, 8 + Math.sin(time * 2) * 2, 0, 7); ctx.stroke();
      }
    });
  }

  size();
  addEventListener("resize", size);
  if (REDUCED) { draw(t0 + 99000); return; }
  (function loop(now) { draw(now); requestAnimationFrame(loop); })(t0);
})();

/* ============================================================
   The globe — the whole world, with real country shapes (d3-geo)
   ============================================================ */
(function globe() {
  const cv = $("#globeCanvas"), ctx = cv.getContext("2d");
  const box = cv.parentElement, tip = $("#globeTip");
  let W, R, CX, CY;
  let projection = null, geoPath = null, graticule = d3.geoGraticule10();
  let world = null;
  const featByIso = {};
  const dataByIso = {};
  COUNTRIES.forEach(c => dataByIso[c.iso] = c);

  // rotation: [lambda, phi] in degrees; phi = -centerLatitude
  let rot = [-32, -22];
  let zoom = 1;
  let targetLng = null, targetPhi = null;
  let hovered = null, dragging = false, lastX = 0, lastY = 0, autoPauseUntil = 0;
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

  fetch("assets/data/world.geo.json")
    .then(r => r.json())
    .then(j => { world = j; j.features.forEach(f => { featByIso[f.id] = f; }); })
    .catch(() => { world = null; });

  const visible = (c) =>
    d3.geoDistance([c.lng, c.lat], [-rot[0], -rot[1]]) < 1.55;

  function markerR(c) { return 2.2 + Math.log10(c.market + 1) * 2.4; }

  function draw(now) {
    ctx.clearRect(0, 0, W, W);

    if (!dragging) {
      if (targetLng !== null) {
        let d = targetLng - rot[0];
        d = ((d + 180) % 360 + 360) % 360 - 180; // shortest way around
        rot[0] += d * .06;
        if (targetPhi !== null) rot[1] += (targetPhi - rot[1]) * .06;
        if (Math.abs(d) < .3) { targetLng = null; targetPhi = null; }
      } else if (now > autoPauseUntil && !hovered && !REDUCED) rot[0] += .045;
    }
    projection.rotate(rot).scale(R * zoom);

    // sphere
    const g = ctx.createRadialGradient(CX - R * .35, CY - R * .4, R * .1, CX, CY, R * 1.05);
    g.addColorStop(0, "rgba(46,154,214,.10)");
    g.addColorStop(.55, "rgba(16,23,49,.6)");
    g.addColorStop(1, "rgba(8,12,28,.95)");
    ctx.beginPath(); geoPath({ type: "Sphere" });
    ctx.fillStyle = g; ctx.fill();
    ctx.strokeStyle = "rgba(227,169,79,.35)"; ctx.lineWidth = 1.2; ctx.stroke();

    // graticule
    ctx.beginPath(); geoPath(graticule);
    ctx.strokeStyle = "rgba(244,239,226,.06)"; ctx.lineWidth = 1; ctx.stroke();

    // countries
    if (world) {
      for (const f of world.features) {
        const c = dataByIso[f.id];
        ctx.beginPath(); geoPath(f);
        if (c) {
          const hot = hovered === c.iso;
          ctx.fillStyle = c.arab
            ? `rgba(227,169,79,${hot ? .65 : .34})`
            : `rgba(46,154,214,${hot ? .65 : .30})`;
          ctx.fill();
          ctx.strokeStyle = c.arab ? "rgba(240,200,120,.5)" : "rgba(120,190,235,.45)";
          ctx.lineWidth = hot ? 1.4 : .7;
          ctx.stroke();
        } else {
          ctx.fillStyle = "rgba(244,239,226,.05)";
          ctx.fill();
          ctx.strokeStyle = "rgba(244,239,226,.09)";
          ctx.lineWidth = .5;
          ctx.stroke();
        }
      }
    }

    // markers
    markerPos.clear();
    for (const c of COUNTRIES) {
      if (!visible(c)) continue;
      const p = projection([c.lng, c.lat]);
      if (!p) continue;
      markerPos.set(c.iso, p);
      const base = markerR(c);
      const hot = hovered === c.iso;
      const pulse = c.hub ? 1 + Math.sin(now / 400) * .18 : 1;
      const col = c.arab ? "227,169,79" : "46,154,214";
      const gg = ctx.createRadialGradient(p[0], p[1], 0, p[0], p[1], base * 3);
      gg.addColorStop(0, `rgba(${col},${hot ? .85 : .5})`);
      gg.addColorStop(1, "transparent");
      ctx.fillStyle = gg;
      ctx.beginPath(); ctx.arc(p[0], p[1], base * 3, 0, 7); ctx.fill();
      ctx.fillStyle = c.arab ? (hot ? "#F0C878" : "#E3A94F") : (hot ? "#8FD2F8" : "#5BB4E5");
      ctx.beginPath(); ctx.arc(p[0], p[1], base * pulse * (hot ? 1.25 : 1), 0, 7); ctx.fill();
      ctx.strokeStyle = "rgba(8,12,28,.85)"; ctx.lineWidth = 1.4; ctx.stroke();
    }

    // soften the square clipping when the sphere is zoomed past the canvas
    if (R * zoom > W * .5) {
      const f = Math.max(28, W * .05);
      ctx.globalCompositeOperation = "destination-out";
      const edges = [
        [0, 0, f, 0], [W, 0, W - f, 0],   // left, right
        [0, 0, 0, f], [0, W, 0, W - f]    // top, bottom
      ];
      for (const [x0, y0, x1, y1] of edges) {
        const g = ctx.createLinearGradient(x0, y0, x1, y1);
        g.addColorStop(0, "rgba(0,0,0,1)");
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, W, W);
      }
      ctx.globalCompositeOperation = "source-over";
    }

    // tooltip follows its country
    if (hovered) {
      const c = dataByIso[hovered];
      if (visible(c)) {
        const p = projection([c.lng, c.lat]);
        tip.style.left = Math.min(Math.max(p[0], 145), W - 145) + "px";
        tip.style.top = p[1] + "px";
        tip.classList.toggle("below", p[1] < W * .52);
      } else setHover(null);
    }

    requestAnimationFrame(draw);
  }

  function fmtMarket(m) {
    if (lang === "ar") return m >= 1000 ? `${(m / 1000).toFixed(1)} تريليون $` : `${m} مليار $`;
    return m >= 1000 ? `$${(m / 1000).toFixed(1)}T` : `$${m}B`;
  }

  function setHover(iso) {
    hovered = iso;
    $$("#countryChips button").forEach(b => b.classList.toggle("active", b.dataset.iso === iso));
    if (!iso) { tip.hidden = true; return; }
    const c = dataByIso[iso];
    const growth = lang === "ar" ? `${c.growth}٪ سنوياً` : `+${c.growth}% / yr`;
    tip.classList.toggle("world", !c.arab);
    tip.innerHTML = `
      <h4><i></i>${pick(c.name)}</h4>
      <dl>
        <dt>${t("globe_market")}</dt><dd>${fmtMarket(c.market)}</dd>
        <dt>${t("globe_growth")}</dt><dd>${growth}</dd>
        <dt>${t("globe_pop")}</dt><dd>${c.pop}</dd>
        <dt>${t("globe_shoppers")}</dt><dd>${c.shoppers}%</dd>
        <dt>${t("globe_spend")}</dt><dd>$${c.spend.toLocaleString("en-US")}</dd>
      </dl>
      ${c.note ? `<p>${pick(c.note)}</p>` : ""}`;
    tip.hidden = false;
  }

  function countryAt(mx, my) {
    // outside the sphere?
    if (Math.hypot(mx - CX, my - CY) > R * zoom + 4) return null;
    const ll = projection.invert([mx, my]);
    if (ll && isFinite(ll[0])) {
      for (const c of COUNTRIES) {
        const f = featByIso[c.iso];
        if (f && d3.geoContains(f, ll)) return c.iso;
      }
    }
    // fallback: nearest marker (covers tiny countries with no polygon)
    let best = null, bd = 20;
    for (const [iso, p] of markerPos) {
      const d = Math.hypot(p[0] - mx, p[1] - my);
      if (d < bd) { bd = d; best = iso; }
    }
    return best;
  }

  cv.addEventListener("pointermove", e => {
    const r = cv.getBoundingClientRect();
    const mx = e.clientX - r.left, my = e.clientY - r.top;
    if (dragging) {
      rot[0] += (e.clientX - lastX) * .3;
      rot[1] = Math.max(-65, Math.min(20, rot[1] - (e.clientY - lastY) * .3));
      lastX = e.clientX; lastY = e.clientY;
      targetLng = null; targetPhi = null;
      return;
    }
    setHover(countryAt(mx, my));
  });
  cv.addEventListener("pointerdown", e => {
    dragging = true; lastX = e.clientX; lastY = e.clientY;
    cv.classList.add("dragging");
    cv.setPointerCapture(e.pointerId);
  });
  cv.addEventListener("pointerup", () => {
    dragging = false;
    cv.classList.remove("dragging");
    autoPauseUntil = performance.now() + 2500;
  });
  cv.addEventListener("pointerleave", () => { if (!dragging) setHover(null); });

  // zoom: wheel over the globe + the +/− buttons
  const setZoom = (z) => { zoom = Math.min(2.4, Math.max(0.7, z)); };
  cv.addEventListener("wheel", e => {
    e.preventDefault();
    setZoom(zoom * (e.deltaY < 0 ? 1.12 : 0.89));
  }, { passive: false });
  $("#zoomIn").addEventListener("click", () => setZoom(zoom * 1.25));
  $("#zoomOut").addEventListener("click", () => setZoom(zoom * 0.8));

  // chips — two labeled groups, top 10 markets each (all stay on the globe)
  window.renderChips = function () {
    const chip = (c) => `<button type="button" data-iso="${c.iso}">${pick(c.name)}</button>`;
    const top10 = (arab) => {
      const list = COUNTRIES.filter(c => c.arab === arab)
        .sort((a, b) => b.market - a.market).slice(0, 10);
      const hub = COUNTRIES.find(c => c.hub); // Jordan stays in the chips — home base
      if (arab && hub && !list.includes(hub)) { list.pop(); list.push(hub); }
      return list;
    };
    $("#countryChips").innerHTML = `
      <p class="chips-label"><i class="dot dot-arab"></i>${t("globe_legend_arab")}</p>
      <div class="chips-row">${top10(true).map(chip).join("")}</div>
      <p class="chips-label"><i class="dot dot-world"></i>${t("globe_legend_world")}</p>
      <div class="chips-row">${top10(false).map(chip).join("")}</div>`;
  };
  $("#countryChips").addEventListener("click", e => {
    const b = e.target.closest("button");
    if (!b) return;
    const c = dataByIso[b.dataset.iso];
    targetLng = -c.lng;
    targetPhi = Math.max(-45, Math.min(15, -c.lat + 8));
    autoPauseUntil = performance.now() + 4500;
    setHover(null);
    setTimeout(() => setHover(c.iso), 1500);
  });

  window.refreshGlobeTip = () => { if (hovered) setHover(hovered); };

  size();
  addEventListener("resize", size);
  requestAnimationFrame(draw);
})();

/* ------------------------------------------------------------
   Meta Pixel — fires immediately outside cookie-law regions,
   and only after consent inside them (EU/EEA/UK)
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

// pixel events: WhatsApp = Contact, Skool/Instagram join = InitiateCheckout
document.addEventListener("click", e => {
  if (!window.fbq) return;
  const a = e.target.closest("a[href]");
  if (!a) return;
  if (a.href.includes("wa.me")) fbq("track", "Contact");
  else if (a.href.includes("skool.com") || a.href.includes("instagram.com/ask.hsaleh"))
    fbq("track", "InitiateCheckout");
});

/* ------------------------------------------------------------
   Cookie notice — only where cookie-consent laws apply (EU/EEA/UK,
   detected via the browser timezone, no external requests)
   ------------------------------------------------------------ */
(function cookieNotice() {
  const bar = $("#cookieBar");
  const tz = (Intl.DateTimeFormat().resolvedOptions().timeZone || "");
  const regulated = tz.startsWith("Europe/") ||
    ["Atlantic/Reykjavik", "Atlantic/Canary", "Atlantic/Madeira", "Atlantic/Azores"].includes(tz);
  const consented = !!localStorage.getItem("aa-cookies-ok");

  if (!regulated || consented) loadMetaPixel();
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
$$(".wa-link").forEach(a => a.href = WHATSAPP_URL);
applyLang();

})();
