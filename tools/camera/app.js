/* ============================================================
   Camera Movement Prompts — free reference for AI filmmakers
   46 movements · real AI-generated preview clips (self-hosted,
   compressed 640x360, lazy-loaded, play only while visible)
   ============================================================ */
(() => {
"use strict";

const $  = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;

let lang = localStorage.getItem("aa-lang") || "ar";

/* ------------------------------------------------------------
   Page strings
   ------------------------------------------------------------ */
const TL = {
  en: {
    cm_eyebrow: "A free tool by Arabia Academies",
    cm_h1a: "Camera Movement", cm_h1b: "AI Prompts",
    cm_sub: "A free reference for AI filmmakers: watch every movement live, copy its ready-made prompt, and paste it into any video tool — Veo, Kling, Runway, Higgsfield and more. The scene is your imagination… the movement starts here.",
    cm_stat1: "camera movements", cm_stat2: "categories", cm_stat3: "ready prompt per movement",
    cm_note: "Prompts are in English on purpose — that's the language video models understand. Every preview clip was generated with AI: the exact kind of video we teach inside Ai Arabia.",
    cm_b1: "Copying a prompt is easy —", cm_b2: "making a video that sells is the skill.",
    cm_b3: "Inside Ai Arabia we teach you to create complete cinematic AI videos and images — from the idea to the finished ad — in Arabic, step by step.",
    cm_b_cta1: "Join Ai Arabia", cm_b_cta2: "See all academies",
    cm_home: "Home", cm_globe: "Planet E-commerce",
    f_tag: "Road to success", nav_join: "Join now", lang_btn: "عربي",
    f_privacy: "Privacy Policy", f_terms: "Terms of Use",
    cookie_text: "We use cookies — including Meta's tools — to improve your experience and measure how the site is used.",
    cookie_ok: "OK",
    cm_all: "All", cm_copy: "Copy prompt", cm_copied: "Copied!", cm_try: "Turn into video ↗",
    cm_shot: "Shot",
  },
  ar: {
    cm_eyebrow: "أداة مجانية من أكاديميات أرابيا",
    cm_h1a: "برومبتات", cm_h1b: "حركات الكاميرا",
    cm_sub: "مرجع مجاني لصنّاع الأفلام بالذكاء الاصطناعي: شوف كل حركة قدامك مباشرة، انسخ برومبتها الجاهز، والصقه في أي أداة فيديو — Veo، Kling، Runway، Higgsfield وغيرها. المشهد من خيالك… والحركة من هنا.",
    cm_stat1: "حركة كاميرا", cm_stat2: "فئات", cm_stat3: "برومبت جاهز لكل حركة",
    cm_note: "البرومبتات بالإنجليزية عمداً — هي اللغة التي تفهمها أدوات الفيديو. وكل مقاطع المعاينة مولّدة بالذكاء الاصطناعي: نفس نوع الفيديوهات اللي نعلّمها في Ai Arabia.",
    cm_b1: "نسخ البرومبت سهل —", cm_b2: "صناعة فيديو يبيع هي المهارة.",
    cm_b3: "في أكاديمية Ai Arabia نعلّمك تصنع فيديوهات وصور سينمائية كاملة بالذكاء الاصطناعي — من الفكرة إلى الإعلان الجاهز — بالعربي وخطوة بخطوة.",
    cm_b_cta1: "انضم إلى Ai Arabia", cm_b_cta2: "شاهد كل الأكاديميات",
    cm_home: "الرئيسية", cm_globe: "كوكب التجارة الإلكترونية",
    f_tag: "طريقك إلى النجاح", nav_join: "انضم الآن", lang_btn: "EN",
    f_privacy: "سياسة الخصوصية", f_terms: "شروط الاستخدام",
    cookie_text: "نستخدم ملفات تعريف الارتباط (كوكيز) — بما فيها أدوات ميتا — لتحسين تجربتك وقياس كيفية استخدام الموقع.",
    cookie_ok: "حسناً",
    cm_all: "الكل", cm_copy: "انسخ البرومبت", cm_copied: "تم النسخ!", cm_try: "حوّله لفيديو ↗",
    cm_shot: "لقطة",
  }
};
const t = (k) => TL[lang][k] ?? k;

/* ------------------------------------------------------------
   Categories
   ------------------------------------------------------------ */
const CATS = {
  dolly:  { ar: "دوللي وتراك",   en: "Dolly & Track" },
  zoom:   { ar: "زوم وعدسة",     en: "Zoom & Lens" },
  pan:    { ar: "بان وتيلت",     en: "Pan & Tilt" },
  drone:  { ar: "درون وكرين",    en: "Drone & Crane" },
  moves:  { ar: "حركات تتبّع",   en: "Tracking Moves" },
  human:  { ar: "كاميرا بشرية",  en: "Human Camera" },
  special:{ ar: "حركات خاصة",    en: "Specials" },
};

/* ------------------------------------------------------------
   The 46 movements — v: video file in ./v/<v>.mp4
   ------------------------------------------------------------ */
const MOVES = [
  /* ---- Dolly & Track (9) ---- */
  { cat:"dolly", v:"dolly-in", n:{ar:"دوللي للداخل", en:"Dolly In"},
    d:{ar:"الكاميرا تتقدّم فيزيائياً نحو العنصر — العمق يتغيّر وتحس أنك تدخل المشهد. مثالية للحظات الكشف والتركيز.",
       en:"The camera physically moves forward toward the subject — depth shifts and you feel pulled into the scene. Perfect for reveals and building focus."},
    p:"Camera movement: slow dolly in. The camera physically moves forward toward the subject at a steady pace, background parallax deepens, framing tightens from medium shot to close-up. Smooth, cinematic, stabilized." },
  { cat:"dolly", v:"dolly-out", n:{ar:"دوللي للخارج", en:"Dolly Out"},
    d:{ar:"الكاميرا تتراجع للخلف وتكشف المكان حول العنصر. ممتازة للنهايات ولإظهار حجم المشهد.",
       en:"The camera pulls straight back, revealing the space around the subject. Great for endings and showing scale."},
    p:"Camera movement: slow dolly out. The camera physically moves backward away from the subject, gradually revealing the surrounding environment, framing widens from close-up to wide shot. Smooth, cinematic, stabilized." },
  { cat:"dolly", v:"truck-right", n:{ar:"تراك يمين", en:"Truck Right"},
    d:{ar:"الكاميرا تنزلق جانبياً على مسار وهي موجّهة للأمام — المشهد يمرّ من جنبك مثل نافذة قطار.",
       en:"The camera slides sideways on a track while facing forward — the scene glides past like a train window."},
    p:"Camera movement: truck right. The camera slides laterally to the right on a dolly track while facing the scene, foreground elements pass faster than the background, constant height and framing. Smooth, cinematic." },
  { cat:"dolly", v:"truck-left", n:{ar:"تراك يسار", en:"Truck Left"},
    d:{ar:"نفس الانزلاق الجانبي لكن باتجاه اليسار. جرّب الاتجاهين وشوف أيهما يخدم قصتك.",
       en:"The same lateral slide, moving left. Try both directions and see which serves your story."},
    p:"Camera movement: truck left. The camera slides laterally to the left on a dolly track while facing the scene, foreground elements pass faster than the background, constant height and framing. Smooth, cinematic." },
  { cat:"dolly", v:"slider-right", n:{ar:"سلايدر يمين", en:"Slider Right"},
    d:{ar:"انزلاق قصير وناعم جداً على سكة سلايدر — حركة خفيفة تضيف حياة للقطة الثابتة بدون لفت الانتباه.",
       en:"A short, buttery glide on a slider rail — subtle motion that brings a static frame to life without drawing attention."},
    p:"Camera movement: slider right. The camera glides gently a short distance to the right on a slider rail, very smooth and slow, adding subtle parallax to an otherwise static composition. Elegant, cinematic." },
  { cat:"dolly", v:"slider-left", n:{ar:"سلايدر يسار", en:"Slider Left"},
    d:{ar:"نفس الانزلاق الناعم بالاتجاه المعاكس — اللمسة المفضّلة في لقطات المنتجات والمقابلات.",
       en:"The same soft glide in the opposite direction — the go-to touch for product shots and interviews."},
    p:"Camera movement: slider left. The camera glides gently a short distance to the left on a slider rail, very smooth and slow, adding subtle parallax to an otherwise static composition. Elegant, cinematic." },
  { cat:"dolly", v:"arc-right", n:{ar:"آرك يمين", en:"Arc Right"},
    d:{ar:"الكاميرا ترسم قوساً حول العنصر باتجاه اليمين — مزيج من الانزلاق والدوران يعطي إحساساً ثلاثي الأبعاد قوياً.",
       en:"The camera traces an arc around the subject to the right — a mix of slide and rotation that feels strongly three-dimensional."},
    p:"Camera movement: arc right. The camera moves along a curved path to the right around the subject while keeping it centered in frame, background rotating behind it, medium framing. Smooth, cinematic." },
  { cat:"dolly", v:"arc-left", n:{ar:"آرك يسار", en:"Arc Left"},
    d:{ar:"نفس القوس بالاتجاه المعاكس — بدّل الاتجاه حسب الإضاءة وجهة النظر الأجمل لموضوعك.",
       en:"The same curve in the opposite direction — switch sides based on the light and your subject's best angle."},
    p:"Camera movement: arc left. The camera moves along a curved path to the left around the subject while keeping it centered in frame, background rotating behind it, medium framing. Smooth, cinematic." },
  { cat:"dolly", v:"push-past", n:{ar:"تجاوز العنصر", en:"Push Past (Pass-By)"},
    d:{ar:"الكاميرا تتقدّم وتتجاوز العنصر نفسه لتكشف ما بعده — انتقال درامي بين موضوعين.",
       en:"The camera pushes forward and travels past the subject itself, revealing what lies beyond — a dramatic hand-off between two focal points."},
    p:"Camera movement: push past. The camera dollies forward, moves directly past the main subject with a brief close fly-by, and continues to reveal the scene behind it. Smooth, cinematic, continuous take." },

  /* ---- Zoom & Lens (6) ---- */
  { cat:"zoom", v:"slow-zoom-in", n:{ar:"زوم بطيء للداخل", en:"Slow Zoom In"},
    d:{ar:"العدسة تقرّب بدون أن تتحرك الكاميرا — توتّر هادئ يتراكم. الفرق عن الدوللي: العمق يبقى مسطّحاً.",
       en:"The lens magnifies without the camera moving — quiet tension builds. Unlike a dolly, depth stays flat."},
    p:"Camera movement: slow zoom in. The camera stays fixed while the lens focal length increases gradually, image magnifies toward the subject, perspective stays flat. Steady, cinematic." },
  { cat:"zoom", v:"slow-zoom-out", n:{ar:"زوم بطيء للخارج", en:"Slow Zoom Out"},
    d:{ar:"العدسة توسّع الكادر تدريجياً وتضع العنصر في سياقه. النسخة الأهدأ من الكشف.",
       en:"The lens widens the frame gradually, placing the subject in context. The calmest kind of reveal."},
    p:"Camera movement: slow zoom out. The camera stays fixed while the lens focal length decreases gradually, the frame widens to reveal the environment, perspective stays flat. Steady, cinematic." },
  { cat:"zoom", v:"fast-zoom-in", n:{ar:"زوم سريع للداخل", en:"Fast Zoom In"},
    d:{ar:"تقريب سريع ومضبوط نحو العنصر — طاقة عالية بدون عنف الكراش زوم. ممتاز لإيقاع الإعلانات.",
       en:"A quick, controlled push toward the subject — high energy without the violence of a crash zoom. Great for ad pacing."},
    p:"Camera movement: fast zoom in. The lens zooms quickly toward the subject in about one second, energetic but controlled, ending in a stable tighter frame. Punchy, dynamic." },
  { cat:"zoom", v:"fast-zoom-out", n:{ar:"زوم سريع للخارج", en:"Fast Zoom Out"},
    d:{ar:"توسيع سريع للكادر يكشف السياق بضربة واحدة — مثالي لنكتة بصرية أو مفاجأة.",
       en:"A rapid widening that reveals the context in one beat — ideal for a visual punchline or surprise."},
    p:"Camera movement: fast zoom out. The lens zooms out quickly in about one second, widening from a tight frame to reveal the full scene, energetic but controlled. Punchy, dynamic." },
  { cat:"zoom", v:"crash-zoom-in", n:{ar:"كراش زوم للداخل", en:"Crash Zoom In"},
    d:{ar:"زوم عنيف وخاطف نحو العنصر — صدمة بصرية. ممتاز للحظات الكوميدية أو الدرامية المفاجئة.",
       en:"A violent, instant zoom into the subject — visual shock. Great for comedic or sudden dramatic beats."},
    p:"Camera movement: crash zoom in. An extremely fast, aggressive zoom punches in from wide to tight close-up in a fraction of a second, slight motion blur during the move, abrupt stop." },
  { cat:"zoom", v:"crash-zoom-out", n:{ar:"كراش زوم للخارج", en:"Crash Zoom Out"},
    d:{ar:"العكس: انسحاب صاعق من التفصيلة إلى الصورة الكاملة في جزء من الثانية.",
       en:"The reverse: a jolting snap from the detail out to the full picture in a split second."},
    p:"Camera movement: crash zoom out. An extremely fast, aggressive zoom snaps from tight close-up to wide shot in a fraction of a second, slight motion blur during the move, abrupt stop." },

  /* ---- Pan & Tilt (7) ---- */
  { cat:"pan", v:"static", n:{ar:"لقطة ثابتة", en:"Static Shot"},
    d:{ar:"لا حركة إطلاقاً — الثبات الكامل يعطي هيبة ويترك المشهد نفسه يتكلم. نقطة البداية لكل مقارنة.",
       en:"No movement at all — total stillness carries authority and lets the scene speak. The baseline every other move is measured against."},
    p:"Camera movement: static shot, locked-off tripod. The camera does not move at all — no pan, no zoom, no handheld drift. Perfectly still frame, cinematic composition." },
  { cat:"pan", v:"pan-right", n:{ar:"بان يمين", en:"Pan Right"},
    d:{ar:"الكاميرا تدور حول محورها نحو اليمين من نقطة ثابتة — مسح هادئ للمكان.",
       en:"The camera rotates right on its axis from a fixed point — a calm sweep across the space."},
    p:"Camera movement: pan right. The camera rotates horizontally to the right from a fixed position, smoothly sweeping across the scene at constant speed, no physical travel. Cinematic." },
  { cat:"pan", v:"pan-left", n:{ar:"بان يسار", en:"Pan Left"},
    d:{ar:"نفس الدوران الأفقي باتجاه اليسار. استخدمه لربط عنصرين في نفس المكان.",
       en:"The same horizontal rotation, moving left. Use it to connect two elements in the same space."},
    p:"Camera movement: pan left. The camera rotates horizontally to the left from a fixed position, smoothly sweeping across the scene at constant speed, no physical travel. Cinematic." },
  { cat:"pan", v:"whip-pan-right", n:{ar:"ويب بان يمين", en:"Whip Pan Right"},
    d:{ar:"دوران خاطف يموّه الصورة لحظة — أشهر انتقال حماسي بين مشهدين.",
       en:"A lightning-fast rotation that blurs the frame for a beat — the classic high-energy transition between scenes."},
    p:"Camera movement: whip pan right. The camera whips horizontally to the right at extreme speed, heavy motion blur streaks the frame mid-move, then snaps to a clean stop on the new subject." },
  { cat:"pan", v:"whip-pan-left", n:{ar:"ويب بان يسار", en:"Whip Pan Left"},
    d:{ar:"نفس اللقطة الخاطفة بالاتجاه المعاكس — للمونتاج السريع والإيقاع العالي.",
       en:"The same whip in the opposite direction — for fast cuts and high tempo."},
    p:"Camera movement: whip pan left. The camera whips horizontally to the left at extreme speed, heavy motion blur streaks the frame mid-move, then snaps to a clean stop on the new subject." },
  { cat:"pan", v:"tilt-up", n:{ar:"تيلت لأعلى", en:"Tilt Up"},
    d:{ar:"الكاميرا ترفع نظرها من نقطة ثابتة — من الأرض إلى الأفق. كشف كلاسيكي للارتفاع والعظمة.",
       en:"The camera raises its gaze from a fixed point — from the ground to the horizon. The classic reveal of height and grandeur."},
    p:"Camera movement: tilt up. The camera rotates vertically upward from a fixed position, starting low on the subject and rising to reveal what stands above, steady constant speed. Cinematic." },
  { cat:"pan", v:"tilt-down", n:{ar:"تيلت لأسفل", en:"Tilt Down"},
    d:{ar:"النظرة تهبط من الأعلى نحو التفاصيل — مثالية للانتقال من المكان إلى الشخصية.",
       en:"The gaze descends from above toward the details — ideal for moving from the setting to the character."},
    p:"Camera movement: tilt down. The camera rotates vertically downward from a fixed position, starting high on the scene and settling onto the subject below, steady constant speed. Cinematic." },

  /* ---- Drone & Crane (6) ---- */
  { cat:"drone", v:"crane-up", n:{ar:"كرين لأعلى", en:"Crane Up"},
    d:{ar:"الكاميرا ترتفع بسلاسة فوق المشهد وتكبر الصورة — نهاية ملحمية لأي فيديو.",
       en:"The camera rises smoothly above the scene as the picture opens up — an epic ending for any video."},
    p:"Camera movement: crane up. The camera rises vertically on a crane while tilting down slightly to keep the subject framed, the scene widens below as altitude increases. Smooth, majestic, cinematic." },
  { cat:"drone", v:"crane-down", n:{ar:"كرين لأسفل", en:"Crane Down"},
    d:{ar:"النزول من الأعلى نحو مستوى العين — من الصورة الكبيرة إلى قلب الحدث.",
       en:"Descending from above to eye level — from the big picture into the heart of the action."},
    p:"Camera movement: crane down. The camera descends vertically from high above toward eye level, gradually closing in on the subject as the wide view narrows. Smooth, cinematic." },
  { cat:"drone", v:"drone-push-in", n:{ar:"درون للأمام", en:"Drone Push In"},
    d:{ar:"طيران جوي يتقدّم نحو الهدف — الاقتراب الملحمي من مبنى أو شخص أو منتج.",
       en:"An aerial flight advancing toward the target — the epic approach to a building, a person, or a product."},
    p:"Camera movement: drone push in. The camera flies forward through the air toward the subject, descending slightly as it approaches, steady aerial glide. Sweeping, cinematic." },
  { cat:"drone", v:"drone-pull-back", n:{ar:"درون للخلف", en:"Drone Pull Back"},
    d:{ar:"الدرون يبتعد ويرتفع ويكشف المشهد كاملاً — لقطة الختام الأشهر في السينما الجوية.",
       en:"The drone pulls back and climbs, revealing the whole scene — aerial cinema's most famous closing shot."},
    p:"Camera movement: drone pull back. The camera flies backward and upward away from the subject, continuously revealing more of the landscape until the subject becomes small in a vast wide shot. Smooth aerial, cinematic." },
  { cat:"drone", v:"helicopter", n:{ar:"لقطة هليكوبتر", en:"Helicopter Shot"},
    d:{ar:"دوران جوي واسع وعالي حول المشهد — نظرة الطائر الملكية للمدن والمناظر الكبيرة.",
       en:"A wide, high aerial circle around the scene — the royal bird's-eye treatment for cities and big landscapes."},
    p:"Camera movement: helicopter shot. The camera circles the scene from high altitude in a wide aerial orbit, slow and majestic, capturing the full scale of the landscape below. Epic, cinematic." },
  { cat:"drone", v:"fpv", n:{ar:"منظور الشخص الأول FPV", en:"First-Person View"},
    d:{ar:"طيران سريع بميلان حاد مثل درونات السباق — أدرينالين خالص، المفضّلة في الإعلانات الجريئة.",
       en:"Fast flight with aggressive banking like a racing drone — pure adrenaline, a favorite for bold ads."},
    p:"Camera movement: FPV drone shot. The camera flies forward at high speed with aggressive banking and diving like a racing drone, sweeping close past obstacles toward the subject, dynamic motion. Energetic, immersive." },

  /* ---- Tracking Moves (9) ---- */
  { cat:"moves", v:"tracking", n:{ar:"لقطة تتبّع", en:"Tracking Shot"},
    d:{ar:"الكاميرا تلاحق العنصر المتحرك وتحافظ عليه في الكادر بمسافة ثابتة — أساس مشاهد الحركة.",
       en:"The camera follows the moving subject, keeping it framed at a constant distance — the backbone of action coverage."},
    p:"Camera movement: tracking shot. The camera travels with the moving subject, matching its speed and keeping it framed at a constant distance while the environment streams past. Smooth, stabilized, cinematic." },
  { cat:"moves", v:"side-tracking", n:{ar:"تتبّع جانبي", en:"Side Tracking"},
    d:{ar:"الكاميرا تمشي مع العنصر جنباً إلى جنب — لقطة المشي والحوار الكلاسيكية.",
       en:"The camera travels alongside the subject, shoulder to shoulder — the classic walking and dialogue shot."},
    p:"Camera movement: side tracking shot. The camera moves parallel to the subject at matching speed, keeping it locked in profile at the center of frame while the background streams past. Smooth, cinematic." },
  { cat:"moves", v:"reverse-tracking", n:{ar:"تتبّع عكسي", en:"Reverse Tracking"},
    d:{ar:"الكاميرا تتراجع أمام العنصر وهو يتقدّم نحوها — لقطة الأبطال وأسلوب الـ walk-and-talk.",
       en:"The camera retreats in front of the advancing subject — the hero shot and the walk-and-talk staple."},
    p:"Camera movement: reverse tracking shot (walk-and-talk). The camera moves backward directly in front of the subject as it walks toward the lens, keeping constant distance and framing. Smooth, confident, cinematic." },
  { cat:"moves", v:"follow-shot", n:{ar:"تتبّع من الخلف", en:"Follow Shot (Over-the-Shoulder)"},
    d:{ar:"الكاميرا خلف العنصر فوق كتفه — نعيش الرحلة معه ونكتشف المكان بعيونه.",
       en:"The camera trails behind the subject over their shoulder — we live the journey with them and discover the space through their eyes."},
    p:"Camera movement: follow shot, over-the-shoulder. The camera follows directly behind the moving subject at shoulder height, keeping their back in the lower frame as the world opens up ahead of them. Immersive, cinematic." },
  { cat:"moves", v:"low-tracking", n:{ar:"تتبّع منخفض", en:"Low Tracking"},
    d:{ar:"نفس التتبّع لكن من مستوى الأرض — كل شيء يصير أضخم وأكثر مهابة.",
       en:"The same tracking, but from ground level — everything looks bigger and more imposing."},
    p:"Camera movement: low angle tracking shot. The camera travels alongside the subject from near ground level, tilted slightly upward, making the subject appear powerful and monumental. Smooth, cinematic." },
  { cat:"moves", v:"chase", n:{ar:"لقطة مطاردة", en:"Chase Shot"},
    d:{ar:"تتبّع سريع بارتجاج خفيف — طاقة المطاردة الحقيقية. للإعلانات اللي تحتاج نبض عالي.",
       en:"Fast tracking with a slight shake — real chase energy. For ads that need a racing pulse."},
    p:"Camera movement: chase shot. The camera pursues the subject at high speed with slight handheld shake, urgent energy, background rushing past with motion blur. Fast, kinetic, intense." },
  { cat:"moves", v:"vehicle-tracking", n:{ar:"تتبّع مركبة", en:"Vehicle Tracking"},
    d:{ar:"الكاميرا تجاري مركبة متحركة بسرعة ثابتة — انسياب ميكانيكي هادئ ومستمر.",
       en:"The camera keeps pace with a moving vehicle at constant speed — calm, continuous mechanical glide."},
    p:"Camera movement: vehicle tracking shot. The camera travels alongside a moving vehicle at matching speed, rock-steady horizon, scenery flowing past smoothly. Continuous, cinematic." },
  { cat:"moves", v:"pedestal-up", n:{ar:"بيدستال لأعلى", en:"Pedestal Up"},
    d:{ar:"الكاميرا كلها ترتفع عمودياً بدون دوران — مسح رأسي نظيف للعنصر من تحت لفوق.",
       en:"The whole camera rises vertically with no rotation — a clean vertical scan of the subject from bottom to top."},
    p:"Camera movement: pedestal up. The entire camera moves straight upward on a vertical column without tilting, framing slides evenly up the subject. Precise, controlled, cinematic." },
  { cat:"moves", v:"pedestal-down", n:{ar:"بيدستال لأسفل", en:"Pedestal Down"},
    d:{ar:"النزول العمودي المعاكس — من الوجه إلى التفاصيل، بدقة ميكانيكية.",
       en:"The opposite vertical descent — from the face down to the details, with mechanical precision."},
    p:"Camera movement: pedestal down. The entire camera moves straight downward on a vertical column without tilting, framing slides evenly down the subject. Precise, controlled, cinematic." },

  /* ---- Human Camera (2) ---- */
  { cat:"human", v:"handheld", n:{ar:"كاميرا محمولة", en:"Handheld Shot"},
    d:{ar:"اهتزاز اليد الطبيعي — واقعية وثائقية فورية. سر الإعلانات اللي تحس أنها 'حقيقية'.",
       en:"Natural hand shake — instant documentary realism. The secret behind ads that feel 'real'."},
    p:"Camera movement: handheld shot. The camera is held by hand with natural organic shake and micro-drift, slightly imperfect framing that breathes with the operator. Raw, documentary, realistic." },
  { cat:"human", v:"body-mounted", n:{ar:"كاميرا مثبّتة على الجسم", en:"Body-Mounted (Snorricam)"},
    d:{ar:"الكاميرا مربوطة بجسم الشخص ووجهها نحوه — هو ثابت والعالم يهتز خلفه. إحساس نفسي قوي جداً.",
       en:"The camera is rigged to the subject's body facing them — they stay locked while the world shakes behind them. A powerful psychological effect."},
    p:"Camera movement: body-mounted Snorricam. The camera is rigged to the subject's torso facing them, so the subject stays perfectly locked in frame while the background bounces and sways with every step. Disorienting, intense." },

  /* ---- Specials (7) ---- */
  { cat:"special", v:"orbit-cw", n:{ar:"أوربت مع عقارب الساعة", en:"Orbit Clockwise"},
    d:{ar:"الكاميرا تدور دورة كاملة حول العنصر الثابت — اللقطة الملكية لعرض أي منتج.",
       en:"The camera circles fully around a fixed subject — the royal shot for showcasing any product."},
    p:"Camera movement: orbit clockwise. The camera circles smoothly clockwise around the stationary subject in a full 360-degree path, keeping it perfectly centered while the background rotates behind it. Smooth, continuous, cinematic." },
  { cat:"special", v:"orbit-ccw", n:{ar:"أوربت عكس عقارب الساعة", en:"Orbit Counterclockwise"},
    d:{ar:"نفس الدوران بعكس عقارب الساعة — جرّب الاتجاهين مع إضاءة مختلفة.",
       en:"The same circle, counterclockwise — try both directions with different lighting."},
    p:"Camera movement: orbit counterclockwise. The camera circles smoothly counterclockwise around the stationary subject in a full 360-degree path, keeping it centered while the background rotates. Smooth, cinematic." },
  { cat:"special", v:"infinite-zoom", n:{ar:"زوم لا نهائي", en:"Infinite Zoom"},
    d:{ar:"زوم متواصل يفتح مشهداً داخل مشهد بلا توقف — أسلوب انتقالات الريلز الشهير.",
       en:"A continuous zoom that keeps opening scene within scene — the famous reels-transition style."},
    p:"Camera movement: infinite zoom. The camera zooms forward continuously, seamlessly diving from one scene into the next in an endless tunnel motion, hypnotic constant speed, match-cut transitions." },
  { cat:"special", v:"earth-zoom-out", n:{ar:"زوم من الفضاء", en:"Earth Zoom Out"},
    d:{ar:"انسحاب متواصل من العنصر حتى الغلاف الجوي — لقطة فيروسية بامتياز على السوشال.",
       en:"A continuous pull-back from the subject all the way to the atmosphere — a certified viral shot on social."},
    p:"Camera movement: earth zoom out. The camera pulls away from the subject vertically at exponential speed, rising through clouds and atmosphere until the whole city and then the planet is visible. Seamless continuous take." },
  { cat:"special", v:"time-lapse", n:{ar:"تايم لابس", en:"Time-Lapse"},
    d:{ar:"ساعات تنضغط في ثوانٍ — السماء تجري والضوء يتبدّل والعنصر ثابت في المنتصف.",
       en:"Hours compressed into seconds — the sky races, light shifts, and the subject holds still at the center."},
    p:"Camera movement: static time-lapse. The camera is locked off while time accelerates — clouds streak across the sky, light sweeps from day to night, shadows rotate — the subject remains fixed. Compressed time, cinematic." },
  { cat:"special", v:"tilt-shift", n:{ar:"تيلت شيفت", en:"Tilt-Shift"},
    d:{ar:"ضبابية أعلى وأسفل الكادر تحوّل العالم الحقيقي إلى مجسّم مصغّر لطيف.",
       en:"Blur at the top and bottom of frame turns the real world into an adorable miniature model."},
    p:"Camera style: tilt-shift miniature effect. High vantage point with a narrow band of sharp focus across the middle of frame and strong blur above and below, making the scene look like a tiny toy model. Whimsical." },
  { cat:"special", v:"pass-through", n:{ar:"عبور الأجسام", en:"Pass-Through Objects"},
    d:{ar:"الكاميرا تعبر من فتحة أو زجاج أو جدار وكأن لا شيء يوقفها — انتقال مستحيل إلا بالـ AI.",
       en:"The camera passes through a keyhole, glass, or wall as if nothing can stop it — a transition only AI makes possible."},
    p:"Camera movement: pass-through objects. The camera flies forward and passes seamlessly through a solid obstacle — a keyhole, a window, a wall — emerging into a new scene in one continuous unbroken take." },
];

/* ------------------------------------------------------------
   Render
   ------------------------------------------------------------ */
let curCat = "all";
const grid = $("#cmGrid"), filters = $("#cmFilters");

function card(x, i) {
  return `
  <article class="cm-card" data-cat="${x.cat}">
    <div class="cam-view">
      <video muted loop playsinline preload="none" data-src="v/${x.v}.mp4"></video>
    </div>
    <div class="cm-card-body">
      <div class="cm-meta">
        <span class="cm-num">${t("cm_shot")} ${String(i + 1).padStart(2, "0")}</span>
        <span class="cm-cat">${CATS[x.cat][lang]}</span>
      </div>
      <h3>${x.n[lang]}<span>${x.n[lang === "ar" ? "en" : "ar"]}</span></h3>
      <p class="cm-desc">${x.d[lang]}</p>
      <div class="cm-prompt">${x.p}</div>
      <div class="cm-actions">
        <button class="cm-copy" type="button" data-i="${i}">${t("cm_copy")}</button>
        <a class="cm-try" href="https://higgsfield.ai/" target="_blank" rel="noopener">${t("cm_try")}</a>
      </div>
    </div>
  </article>`;
}

function renderFilters() {
  const b = (id, label) =>
    `<button type="button" data-cat="${id}" class="${curCat === id ? "active" : ""}">${label}</button>`;
  filters.innerHTML = b("all", t("cm_all")) +
    Object.keys(CATS).map(k => b(k, CATS[k][lang])).join("");
}

function renderGrid() {
  const list = MOVES.map((x, i) => ({ x, i })).filter(({ x }) => curCat === "all" || x.cat === curCat);
  grid.innerHTML = list.map(({ x, i }) => card(x, i)).join("");
  watchVideos();
}

filters.addEventListener("click", e => {
  const b = e.target.closest("button");
  if (!b) return;
  curCat = b.dataset.cat;
  renderFilters();
  renderGrid();
});

/* copy prompt */
let usedOnce = false;
grid.addEventListener("click", async e => {
  const b = e.target.closest(".cm-copy");
  if (!b) return;
  const x = MOVES[+b.dataset.i];
  try { await navigator.clipboard.writeText(x.p); } catch (err) {
    const ta = document.createElement("textarea");
    ta.value = x.p; document.body.appendChild(ta); ta.select();
    document.execCommand("copy"); ta.remove();
  }
  b.classList.add("ok");
  b.textContent = "✓ " + t("cm_copied");
  setTimeout(() => { b.classList.remove("ok"); b.textContent = t("cm_copy"); }, 1500);
  if (!usedOnce) { usedOnce = true; if (window.fbq) fbq("trackCustom", "ToolCamera"); }
});

/* ------------------------------------------------------------
   Lazy video loading — zero video bytes at page load.
   loadIO fetches a clip shortly before it scrolls into view;
   playIO plays only what's actually visible (pauses the rest).
   ------------------------------------------------------------ */
function loadVideo(v) {
  if (v.dataset.l) return;
  v.dataset.l = "1";
  v.addEventListener("loadeddata", () => v.classList.add("on"), { once: true });
  v.src = v.dataset.src;
}
const loadIO = new IntersectionObserver(es => es.forEach(en => {
  if (en.isIntersecting) { loadVideo(en.target); loadIO.unobserve(en.target); }
}), { rootMargin: "700px 0px" });
const playIO = new IntersectionObserver(es => es.forEach(en => {
  const v = en.target;
  if (en.isIntersecting) {
    loadVideo(v);
    if (!REDUCED) v.play().catch(() => {});
  } else v.pause();
}), { rootMargin: "120px 0px" });

function watchVideos() {
  $$(".cam-view video", grid).forEach(v => { loadIO.observe(v); playIO.observe(v); });
}

/* ------------------------------------------------------------
   Language toggle
   ------------------------------------------------------------ */
function applyLang() {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  $$("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  $("#cmCount").textContent = MOVES.length;
  renderFilters();
  renderGrid();
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
   Boot — the AR grid is pre-baked into the HTML; just wire the
   videos up (applyLang re-renders identical markup, no shift)
   ------------------------------------------------------------ */
$("#yr").textContent = new Date().getFullYear();
applyLang();

})();
