/* ============================================================
   Arabia Academies — analytics (Umami Cloud, cookieless/GDPR-safe)
   Owner dashboard: https://cloud.umami.is (login = owner only)
   Paste the Umami website ID below to activate. Empty = no-op.
   ============================================================ */
(() => {
"use strict";

const WEBSITE_ID = "";  /* <- paste Umami website ID here */
if (!WEBSITE_ID) return;

const s = document.createElement("script");
s.defer = true;
s.src = "https://cloud.umami.is/script.js";
s.setAttribute("data-website-id", WEBSITE_ID);
s.setAttribute("data-auto-track", "true");
document.head.appendChild(s);

const track = (name, data) => { if (window.umami) window.umami.track(name, data); };
const page = () => location.pathname || "/";

function outbound(a) {
  const h = a.href || "";
  if (h.indexOf("skool.com") !== -1) {
    const m = h.match(/skool\.com\/([a-z0-9-]+)/i);
    return ["skool-click", { community: m ? m[1] : "unknown", page: page() }];
  }
  if (h.indexOf("wa.me") !== -1) return ["whatsapp-click", { page: page() }];
  if (h.indexOf("instagram.com") !== -1) return ["instagram-click", { page: page() }];
  if (h.indexOf("higgsfield") !== -1) return ["higgsfield-click", { page: page() }];
  if (h.indexOf("youtube.com") !== -1) return ["youtube-click", { page: page() }];
  return null;
}

document.addEventListener("click", e => {
  const a = e.target.closest ? e.target.closest("a[href]") : null;
  if (a) {
    const o = outbound(a);
    if (o) track(o[0], o[1]);
  }
  const el = e.target.closest ? e.target : null;
  if (!el || !e.target.closest) return;

  /* colors tool engagement */
  const pr = e.target.closest(".cl-prompt");
  if (pr) {
    const c = pr.closest(".cl-card");
    const film = c ? (c.querySelector("h3") && c.querySelector("h3").childNodes[0].textContent || "").trim() : "";
    track("colors-prompt-copy", { film: film });
    return;
  }
  const cp = e.target.closest(".cl-copy");
  if (cp) {
    const c = cp.closest(".cl-card");
    const film = c ? (c.querySelector("h3") && c.querySelector("h3").childNodes[0].textContent || "").trim() : "";
    track("colors-palette-copy", { film: film });
    return;
  }
  const sw = e.target.closest(".sw");
  if (sw && sw.dataset && sw.dataset.hex) {
    track("colors-hex-copy", { hex: sw.dataset.hex });
    return;
  }

  /* camera tool engagement */
  const cm = e.target.closest(".cm-copy");
  if (cm) {
    const c = cm.closest("article") || cm.closest("[class*='card']");
    const h3 = c && c.querySelector("h3");
    track("camera-prompt-copy", { movement: h3 ? h3.textContent.trim().slice(0, 60) : "" });
    return;
  }

  /* language toggle */
  if (e.target.closest("#langBtn") || e.target.closest(".lang-btn-menu")) {
    track("lang-toggle", { to: document.documentElement.lang === "ar" ? "en" : "ar" });
  }
}, true);
})();
