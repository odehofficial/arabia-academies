/* ============================================================
   Movie Color Palettes — free reference for AI filmmakers
   114 palettes inspired by films and series famous for their color grading.
   Colors are our own curated approximations of each film's mood.
   ============================================================ */
(() => {
"use strict";

const $  = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];

let lang = localStorage.getItem("aa-lang") || "ar";

/* ------------------------------------------------------------
   Page strings
   ------------------------------------------------------------ */
const TL = {
  en: {
    cl_eyebrow: "A free tool by Arabia Academies",
    cl_h1a: "Movie Color", cl_h1b: "Palettes",
    cl_sub: "A free reference for AI filmmakers and brand builders: the color moods of cinema's most beautiful films — tap any color to copy its code, or grab the whole palette and drop it into your prompts, your ads, or your store's identity.",
    cl_stat1: "movie palettes", cl_stat2: "categories", cl_stat3: "every code copy-ready",
    cl_b1: "Copying a palette is easy —", cl_b2: "building visuals that sell is the skill.",
    cl_b3: "Inside Ai Arabia we teach you to create cinematic AI images and videos — from the color mood to the finished ad — in Arabic, step by step.",
    cl_b_cta1: "Join Ai Arabia", cl_b_cta2: "See all academies",
    cl_home: "Home", cl_globe: "Planet E-commerce", cl_camera: "Camera Movement Prompts",
    f_tag: "Road to success", nav_join: "Join now", lang_btn: "عربي",
    f_privacy: "Privacy Policy", f_terms: "Terms of Use",
    cookie_text: "We use cookies — including Meta's tools — to improve your experience and measure how the site is used.",
    cookie_ok: "OK",
    cl_all: "All", cl_copy: "Copy palette", cl_prompt: "Copy AI prompt", cl_copied: "Copied!",
    cl_search_ph: "Search movies… (e.g. Dune, Batman, Matrix)",
    cl_noresults: "No palettes match your search.",
    cl_n: "Palette",
  },
  ar: {
    cl_eyebrow: "أداة مجانية من أكاديميات أرابيا",
    cl_h1a: "باليتات ألوان", cl_h1b: "الأفلام",
    cl_sub: "مرجع مجاني لصنّاع المحتوى بالذكاء الاصطناعي: أجواء الألوان لأجمل أفلام السينما — اضغط أي لون لنسخ كوده، أو انسخ الباليت كاملاً واستخدمه في برومبتاتك، إعلاناتك، أو هوية متجرك.",
    cl_stat1: "باليت سينمائي", cl_stat2: "فئات", cl_stat3: "كل الأكواد جاهزة للنسخ",
    cl_b1: "نسخ الباليت سهل —", cl_b2: "صناعة صورة تبيع هي المهارة.",
    cl_b3: "في أكاديمية Ai Arabia نعلّمك تصنع صوراً وفيديوهات سينمائية بالذكاء الاصطناعي — من اختيار الألوان إلى الإعلان الجاهز — بالعربي وخطوة بخطوة.",
    cl_b_cta1: "انضم إلى Ai Arabia", cl_b_cta2: "شاهد كل الأكاديميات",
    cl_home: "الرئيسية", cl_globe: "كوكب التجارة الإلكترونية", cl_camera: "برومبتات حركات الكاميرا",
    f_tag: "طريقك إلى النجاح", nav_join: "انضم الآن", lang_btn: "EN",
    f_privacy: "سياسة الخصوصية", f_terms: "شروط الاستخدام",
    cookie_text: "نستخدم ملفات تعريف الارتباط (كوكيز) — بما فيها أدوات ميتا — لتحسين تجربتك وقياس كيفية استخدام الموقع.",
    cookie_ok: "حسناً",
    cl_all: "الكل", cl_copy: "انسخ الباليت", cl_prompt: "انسخ البرومبت", cl_copied: "تم النسخ!",
    cl_search_ph: "ابحث عن فيلم… (مثلاً: Dune، Batman، Matrix)",
    cl_noresults: "لا يوجد باليت يطابق بحثك.",
    cl_n: "باليت",
  }
};
const t = (k) => TL[lang][k] ?? k;

/* ------------------------------------------------------------
   Categories
   ------------------------------------------------------------ */
const CATS = {
  warm:   { ar: "دافئ وذهبي",      en: "Warm & Golden" },
  cool:   { ar: "بارد وأزرق",      en: "Cool & Blue" },
  neon:   { ar: "نيون وسايبربانك", en: "Neon & Cyberpunk" },
  pastel: { ar: "باستيل وحالم",    en: "Pastel & Dreamy" },
  desert: { ar: "صحراوي وترابي",   en: "Desert & Earthy" },
  dark:   { ar: "داكن ودرامي",     en: "Dark & Moody" },
  green:  { ar: "أخضر وطبيعي",     en: "Green & Natural" },
  retro:  { ar: "كلاسيكي وريترو",  en: "Classic & Retro" },
  series: { ar: "مسلسلات", en: "TV Series" },
};

/* ------------------------------------------------------------
   The 114 palettes — n: film · a: Arabic name · c: 5 hex colors
   m: one-line mood. Colors are our own curated approximations.
   ------------------------------------------------------------ */
const PALS = [
  /* ---- Warm & Golden (11) ---- */
  { cat:"warm", img:"amelie", n:"Amélie (2001)", a:"أميلي", tt:{c:"amelie",h:"AMÉLIE"}, c:["#7A1F0C","#B8500F","#DA9A31","#3E7A45","#F2C879"],
    m:{ar:"باريس الحالمة بعدسة ذهبية وخضرة غامضة", en:"Dreamy Paris through gold and mysterious green"} },
  { cat:"warm", img:"her", n:"Her (2013)", a:"هير", tt:{c:"her",h:"her"}, c:["#E5573F","#F2A48E","#E8D8C8","#8C3A2B","#5C7A8A"],
    m:{ar:"دفء المرجان والحنين في مستقبل ناعم", en:"Coral warmth and longing in a soft future"} },
  { cat:"warm", img:"once-upon-a-time-in-hollywood", n:"Once Upon a Time in Hollywood (2019)", a:"وانس أبون آ تايم إن هوليوود", tt:{c:"ouatih",h:"<span>ONCE UPON A TIME IN...</span>HOLLYWOOD"}, c:["#D98E32","#F2C879","#8A4B2A","#5C6B4F","#2E2417"],
    m:{ar:"شمس كاليفورنيا الذهبية في نهاية الستينات", en:"Golden California sun at the end of the '60s"} },
  { cat:"warm", img:"gladiator", n:"Gladiator (2000)", a:"غلادييتور", tt:{c:"glad",h:"GLADIATOR"}, c:["#C8873F","#8A5A2B","#3E3A45","#D9B48A","#6B1F14"],
    m:{ar:"ذهب روما وغبار الحلبة", en:"Rome's gold and the dust of the arena"} },
  { cat:"warm", n:"Midnight in Paris (2011)", a:"ميدنايت إن باريس", c:["#D9A441","#8A5A2B","#3E4A6B","#F2DCA8","#5C3A2B"],
    m:{ar:"باريس الليلية بدفء المصابيح القديمة", en:"Paris at night, warmed by old lamplight"} },
  { cat:"warm", n:"Little Women (2019)", a:"ليتل ويمن", c:["#D9B48A","#8A9A6B","#B85C3F","#F2E4C9","#4A5C7A"],
    m:{ar:"ذكريات عائلية بضوء الشموع والصوف", en:"Family memories in candlelight and wool"} },
  { cat:"warm", n:"The Curious Case of Benjamin Button (2008)", a:"ذا كيوريوس كيس أوف بنجامين باتن", c:["#C8A05A","#7A5C3A","#3E2E22","#D9C8A8","#5C4A6B"],
    m:{ar:"زمن يمشي بالعكس بلون السيبيا الدافئ", en:"Time in reverse, washed in warm sepia"} },
  { cat:"warm", n:"Cinema Paradiso (1988)", a:"سينما باراديسو", c:["#D98E32","#8A5A2B","#F2DCA8","#5C4A3A","#2E2417"],
    m:{ar:"حنين صالة السينما القديمة", en:"The nostalgia of an old movie theater"} },
  { cat:"warm", n:"Slumdog Millionaire (2008)", a:"سلامدوغ ميليونير", c:["#E87E2B","#C84B2A","#F2C845","#3E7A8A","#6B2E5C"],
    m:{ar:"مومباي المشتعلة بالبرتقالي والحياة", en:"Mumbai ablaze in orange and life"} },
  { cat:"warm", n:"The Banshees of Inisherin (2022)", a:"ذا بانشيز أوف إنشيرين", c:["#C8873F","#5C7A6B","#8A9AA8","#3E3A2E","#E8D8B8"],
    m:{ar:"جزيرة أيرلندية بدفء حزين", en:"An Irish island in sorrowful warmth"} },

  /* ---- Cool & Blue (11) ---- */
  { cat:"cool", n:"The Revenant (2015)", a:"ذا ريفينانت", c:["#5C7A8A","#A8BCC8","#2E3E45","#D9E4E8","#4A3A2E"],
    m:{ar:"برد البرّية القاسي بضوء طبيعي فقط", en:"Brutal wilderness cold in natural light only"} },
  { cat:"cool", n:"Arrival (2016)", a:"أرايفل", c:["#4A5C6B","#8A9AA8","#2E3438","#C8D2D9","#5C4A3A"],
    m:{ar:"ضباب رمادي أزرق ولقاء مع المجهول", en:"Blue-grey fog and a meeting with the unknown"} },
  { cat:"cool", n:"Gone Girl (2014)", a:"غون غيرل", c:["#3E4A55","#7A8A96","#C8B48A","#1E2428","#96A8B4"],
    m:{ar:"برود مريب تحت سطح مثالي", en:"Suspicious chill under a perfect surface"} },
  { cat:"cool", n:"The Social Network (2010)", a:"ذا سوشال نتوورك", c:["#3E4A45","#6B7A6B","#C8A05A","#1E2422","#8A96A8"],
    m:{ar:"غرف هارفارد الداكنة وطموح بارد", en:"Dark Harvard rooms and cold ambition"} },
  { cat:"cool", n:"Prisoners (2013)", a:"بريزنرز", c:["#4A5560","#2E3438","#8A9AA8","#5C4A3A","#C8D2D9"],
    m:{ar:"مطر رمادي لا يتوقف وقلق دائم", en:"Endless grey rain and constant dread"} },
  { cat:"cool", n:"Inception (2010)", a:"إنسيبشن", c:["#3E5C7A","#8AA8C8","#2E3438","#C8873F","#96A8B4"],
    m:{ar:"أحلام فولاذية زرقاء داخل أحلام", en:"Steel-blue dreams within dreams"} },
  { cat:"cool", n:"Interstellar (2014)", a:"إنترستيلر", c:["#4A5C6B","#8A9AA8","#D9C8A8","#1E2428","#5C7A8A"],
    m:{ar:"غبار الأرض وبرد الفضاء اللانهائي", en:"Earth's dust and the cold of infinite space"} },
  { cat:"cool", n:"The Dark Knight (2008)", a:"ذا دارك نايت", c:["#3E4A55","#1E2428","#8A96A8","#5C6B7A","#C8D2D9"],
    m:{ar:"غوثام فولاذية بأزرق ليلي صارم", en:"Steel Gotham in stern midnight blue"} },
  { cat:"cool", n:"The Girl with the Dragon Tattoo (2011)", a:"ذا غيرل ويذ ذا دراغون تاتو", c:["#3E4A45","#96A8B4","#2E3438","#C8D2D9","#5C4A3A"],
    m:{ar:"شتاء سويدي قاسٍ بلا دفء", en:"A harsh Swedish winter with no warmth"} },
  { cat:"cool", n:"Eternal Sunshine of the Spotless Mind (2004)", a:"إيترنال صنشاين أوف ذا سبوتلس مايند", c:["#6B8AA8","#C8D2D9","#E8734A","#3E4A55","#A8C0B4"],
    m:{ar:"ذكريات تذوب بأزرق شاحب", en:"Memories dissolving in pale blue"} },
  { cat:"cool", n:"Skyfall (2012)", a:"سكايفول", c:["#2E3E55","#6B8AA8","#C8A05A","#1E2428","#8AA8C8"],
    m:{ar:"شنغهاي الزجاجية وأزرق الليل الأنيق", en:"Glassy Shanghai and elegant night blue"} },

  /* ---- Neon & Cyberpunk (11) ---- */
  { cat:"neon", img:"blade-runner-2049", n:"Blade Runner 2049 (2017)", a:"بليد رانر 2049", c:["#D97E2B","#8A4B2A","#4AC8D9","#2E3438","#E8B48A"],
    m:{ar:"ضباب برتقالي وسيان مستقبلي مهجور", en:"Orange smog and abandoned future cyan"} },
  { cat:"neon", n:"Drive (2011)", a:"درايف", c:["#E85C8A","#2E1E38","#4AC8D9","#F2C845","#1E2428"],
    m:{ar:"ليل لوس أنجلوس بوردي كهربائي", en:"L.A. nights in electric pink"} },
  { cat:"neon", n:"John Wick (2014)", a:"جون ويك", c:["#3E2E5C","#E85C8A","#4A8AC8","#1E2428","#C84B5C"],
    m:{ar:"نوادٍ بنفسجية وأناقة قاتلة", en:"Violet clubs and lethal elegance"} },
  { cat:"neon", n:"Tron: Legacy (2010)", a:"ترون: ليغاسي", c:["#4AC8D9","#1E2428","#E8732B","#2E3E55","#C8D2D9"],
    m:{ar:"شبكة رقمية بسيان متوهج", en:"A digital grid in glowing cyan"} },
  { cat:"neon", n:"La La Land (2016)", a:"لا لا لاند", c:["#3E4A8A","#E85C8A","#F2C845","#6B3A8A","#4AC8D9"],
    m:{ar:"غسق الأحلام بين البنفسجي والذهب", en:"Dream dusk between violet and gold"} },
  { cat:"neon", n:"Spider-Man: Into the Spider-Verse (2018)", a:"سبايدرمان: إنتو ذا سبايدرفيرس", c:["#E8354A","#2E3EC8","#F2C845","#E85C8A","#1E2428"],
    m:{ar:"كوميكس حي بألوان صارخة", en:"A living comic book in loud color"} },
  { cat:"neon", n:"Guardians of the Galaxy (2014)", a:"غارديانز أوف ذا غالاكسي", c:["#6B3A8A","#E8732B","#4AC8D9","#E85C8A","#2E2E45"],
    m:{ar:"فضاء ملوّن بروح الثمانينات", en:"A colorful cosmos with an '80s soul"} },
  { cat:"neon", n:"Atomic Blonde (2017)", a:"أتوميك بلوند", c:["#4AC8D9","#E85C8A","#1E2428","#8A96A8","#F2C845"],
    m:{ar:"برلين الحرب الباردة بنيون بارد", en:"Cold War Berlin in cold neon"} },
  { cat:"neon", n:"Nightcrawler (2014)", a:"نايتكرولر", c:["#1E2428","#E8732B","#4A5C8A","#C8D2D9","#8A3A2B"],
    m:{ar:"لوس أنجلوس الليلية بعيون جائعة", en:"Nighttime L.A. through hungry eyes"} },
  { cat:"neon", n:"Suspiria (1977)", a:"سوسبيريا", c:["#C8354A","#2E1E38","#4A8AC8","#E8B4C8","#1E2428"],
    m:{ar:"كابوس أحمر بجرأة السبعينات", en:"A red nightmare with '70s daring"} },

  /* ---- Pastel & Dreamy (11) ---- */
  { cat:"pastel", n:"The Grand Budapest Hotel (2014)", a:"ذا غراند بودابست هوتيل", c:["#E8A8B8","#B85C6B","#F2DCA8","#8AA8C8","#5C3A45"],
    m:{ar:"حلويات معمارية وردية بتناظر مثالي", en:"Pink architectural pastry in perfect symmetry"} },
  { cat:"pastel", n:"Moonrise Kingdom (2012)", a:"مونرايز كينغدوم", c:["#E8D8A8","#C8873F","#8A9A6B","#D9B48A","#5C6B4F"],
    m:{ar:"صيف كشفي قديم بأصفر باهت", en:"An old scouting summer in faded yellow"} },
  { cat:"pastel", n:"The French Dispatch (2021)", a:"ذا فرينش ديسباتش", c:["#E8C8A8","#8AA8C8","#C85C4A","#F2E4C9","#5C5C6B"],
    m:{ar:"صحافة باريسية بلمسة أنيقة باهتة", en:"Parisian journalism in faded elegance"} },
  { cat:"pastel", n:"The Darjeeling Limited (2007)", a:"ذا دارجيلينغ ليمتد", c:["#4AA8C8","#E8B84A","#C8735C","#F2DCA8","#8A5A6B"],
    m:{ar:"رحلة هندية بألوان التوابل الفاتحة", en:"An Indian journey in light spice colors"} },
  { cat:"pastel", n:"Barbie (2023)", a:"باربي", c:["#E86BA8","#F2B8D2","#4AC8D9","#F2E45C","#C84B8A"],
    m:{ar:"عالم وردي كامل بلا اعتذار", en:"A fully pink world, unapologetically"} },
  { cat:"pastel", n:"Marie Antoinette (2006)", a:"ماري أنطوانيت", c:["#F2C8D2","#A8D2E8","#E8E4C9","#C88A9A","#8AA88A"],
    m:{ar:"مكارون فرساي وترف ناعم", en:"Versailles macarons and soft luxury"} },
  { cat:"pastel", n:"The Truman Show (1998)", a:"ذا ترومان شو", c:["#8AC8D9","#F2E4C9","#E8A85C","#A8C08A","#4A6B8A"],
    m:{ar:"مدينة مثالية أكثر من اللازم", en:"A town just a little too perfect"} },
  { cat:"pastel", n:"Edward Scissorhands (1990)", a:"إدوارد سيزرهاندز", c:["#A8D2C8","#E8A8B8","#F2E48A","#8A96C8","#3E3A45"],
    m:{ar:"ضواحٍ ملونة تخفي حكاية قوطية", en:"Candy suburbs hiding a gothic tale"} },
  { cat:"pastel", n:"Asteroid City (2023)", a:"أستيرويد سيتي", c:["#8AC8D9","#E8B84A","#D9B48A","#F2E4C9","#C8735C"],
    m:{ar:"صحراء باستيلية بسماء تركواز", en:"A pastel desert under turquoise sky"} },
  { cat:"pastel", n:"Chocolat (2000)", a:"شوكولا", c:["#C88A5C","#8A5A45","#E8C8A8","#A85C6B","#5C4A3A"],
    m:{ar:"كاكاو دافئ وقرية فرنسية محافظة", en:"Warm cocoa in a buttoned-up French village"} },
  { cat:"pastel", n:"Wonka (2023)", a:"ونكا", c:["#8A5AA8","#E8B84A","#C84B5C","#4AA8C8","#F2DCA8"],
    m:{ar:"حلم حلواني بألوان سحرية", en:"A confectioner's dream in magical color"} },

  /* ---- Desert & Earthy (11) ---- */
  { cat:"desert", n:"Dune: Part Two (2024)", a:"ديون: بارت تو", c:["#B87A35","#D9A85C","#3E3438","#E8C89A","#6B4A2B"],
    m:{ar:"أراكيس أعمق وأقسى وأجمل", en:"Arrakis — deeper, harsher, more beautiful"} },
  { cat:"desert", n:"Mad Max: Fury Road (2015)", a:"ماد ماكس: فيوري رود", c:["#E8732B","#C84B2A","#4AA8C8","#8A5A2B","#F2C879"],
    m:{ar:"برتقالي محروق ضد أزرق ليلي — المطاردة الأشهر", en:"Burnt orange vs teal night — the ultimate chase"} },
  { cat:"desert", n:"Lawrence of Arabia (1962)", a:"لورنس أوف أرابيا", c:["#D9A85C","#E8C89A","#B87A35","#4A6B8A","#8A5A2B"],
    m:{ar:"الصحراء العربية بأعظم اتساع سينمائي", en:"The Arabian desert at its most cinematic"} },
  { cat:"desert", n:"No Country for Old Men (2007)", a:"نو كانتري فور أولد مين", c:["#C8A05A","#8A7A5C","#5C4A3A","#D9C8A8","#2E2822"],
    m:{ar:"تكساس الجافة وصمت الخطر", en:"Dry Texas and the silence of danger"} },
  { cat:"desert", n:"Sicario (2015)", a:"سيكاريو", c:["#C8873F","#5C5C55","#2E3438","#D9B48A","#8A4B2A"],
    m:{ar:"حدود قاسية بغبار وظل", en:"A brutal border in dust and shadow"} },
  { cat:"desert", n:"The Martian (2015)", a:"ذا مارشان", c:["#C85C2B","#E8955C","#8A3A22","#D9B48A","#3E3438"],
    m:{ar:"صدأ المريخ ووحدة البقاء", en:"Martian rust and the loneliness of survival"} },
  { cat:"desert", n:"There Will Be Blood (2007)", a:"ذير ويل بي بلد", c:["#8A5A2B","#5C4A3A","#C8A05A","#2E2417","#D9C8A8"],
    m:{ar:"نفط وتراب وطموح أسود", en:"Oil, dirt, and black ambition"} },
  { cat:"desert", n:"The English Patient (1996)", a:"ذي إنغليش بيشنت", c:["#D9B48A","#C8873F","#8A6B4A","#E8DCC9","#4A5C6B"],
    m:{ar:"كثبان ناعمة وحب في زمن الحرب", en:"Soft dunes and wartime love"} },
  { cat:"desert", n:"Raiders of the Lost Ark (1981)", a:"رايدرز أوف ذا لوست آرك", c:["#C8873F","#8A5A2B","#5C4A3A","#D9A85C","#2E2822"],
    m:{ar:"مغامرة كلاسيكية بغبار ذهبي", en:"Classic adventure in golden dust"} },
  { cat:"desert", n:"The Mummy (1999)", a:"ذا مامي", c:["#D9A85C","#B87A35","#8A5A2B","#F2DCA8","#3E3A2E"],
    m:{ar:"مصر الغامضة بذهب المغامرات", en:"Mysterious Egypt in adventure gold"} },

  /* ---- Dark & Moody (11) ---- */
  { cat:"dark", n:"The Batman (2022)", a:"ذا باتمان", c:["#1E1E22","#C8354A","#8A6B3F","#3E3438","#5C5C6B"],
    m:{ar:"غوثام ممطرة بأحمر غاضب", en:"Rain-soaked Gotham in furious red"} },
  { cat:"dark", n:"Joker (2019)", a:"جوكر", c:["#3E7A45","#C84B5C","#E8B84A","#2E2E38","#8A5A6B"],
    m:{ar:"مدينة مريضة بألوان مهرج حزين", en:"A sick city in a sad clown's colors"} },
  { cat:"dark", n:"Se7en (1995)", a:"سفن", c:["#2E2822","#5C5245","#8A7A5C","#1E1E1E","#C8B48A"],
    m:{ar:"ظلام رطب لا يغادر الشاشة", en:"A damp darkness that never leaves the frame"} },
  { cat:"dark", n:"The Godfather (1972)", a:"ذا غودفاذر", c:["#2E2417","#C8873F","#8A5A2B","#1E1E1E","#D9B48A"],
    m:{ar:"عتمة المكاتب وذهب العائلة", en:"Office darkness and family gold"} },
  { cat:"dark", n:"Fight Club (1999)", a:"فايت كلوب", c:["#3E4A45","#8A7A5C","#C8735C","#1E2422","#5C6B5C"],
    m:{ar:"أخضر صناعي قذر وفوضى", en:"Dirty industrial green and chaos"} },
  { cat:"dark", n:"The Silence of the Lambs (1991)", a:"ذا سايلنس أوف ذا لامبز", c:["#3E4A45","#8A9A8A","#5C4A3A","#1E2422","#C8D2C8"],
    m:{ar:"برود مؤسسي يخفي وحشاً", en:"Institutional chill hiding a monster"} },
  { cat:"dark", n:"Zodiac (2007)", a:"زودياك", c:["#3E4A55","#8A9AA8","#C8B48A","#2E3438","#5C6B5C"],
    m:{ar:"سبعينات رمادية وهوس لا ينتهي", en:"Grey '70s and an obsession without end"} },
  { cat:"dark", n:"Black Swan (2010)", a:"بلاك سوان", c:["#1E1E22","#E8E4E8","#C84B5C","#8A96A8","#3E3438"],
    m:{ar:"أبيض وأسود يتصارعان بوردية جريحة", en:"White and black at war, with a wounded pink"} },
  { cat:"dark", n:"Oldboy (2003)", a:"أولد بوي", c:["#5C2E45","#C8735C","#3E3438","#8A5A2B","#1E2428"],
    m:{ar:"انتقام كوري بنبيذي كابوسي", en:"Korean revenge in nightmarish wine tones"} },
  { cat:"dark", n:"Sweeney Todd (2007)", a:"سويني تود", c:["#2E3438","#C8354A","#8A96A8","#1E1E22","#5C5C6B"],
    m:{ar:"لندن رمادية يقطعها أحمر الدم", en:"Grey London cut by blood red"} },

  /* ---- Green & Natural (11) ---- */
  { cat:"green", img:"the-matrix", n:"The Matrix (1999)", a:"ذا ماتريكس", c:["#3E7A45","#1E2E22","#8AC88A","#2E3438","#C8D9C8"],
    m:{ar:"واقع رقمي مصبوغ بأخضر الشيفرة", en:"A digital reality dyed in code green"} },
  { cat:"green", n:"The Shape of Water (2017)", a:"ذا شيب أوف ووتر", c:["#2E5C55","#4A8A7A","#C8873F","#1E3438","#8AC8B4"],
    m:{ar:"حكاية خرافية تحت ماء أخضر", en:"A fairy tale under green water"} },
  { cat:"green", n:"Avatar (2009)", a:"أفاتار", c:["#2E7A55","#4AC8D9","#8A3AC8","#1E3428","#8AE8B4"],
    m:{ar:"غابة مضيئة من عالم آخر", en:"A glowing forest from another world"} },
  { cat:"green", n:"The Lord of the Rings (2001)", a:"ذا لورد أوف ذا رينغز", c:["#5C7A45","#8A9A6B","#C8A05A","#2E3A28","#D9C8A8"],
    m:{ar:"خضرة الشاير ودفء البيوت الصغيرة", en:"Shire green and the warmth of small homes"} },
  { cat:"green", n:"Pan's Labyrinth (2006)", a:"بانز لابيرينث", c:["#3E5C45","#8A9A6B","#C8873F","#2E3438","#5C4A6B"],
    m:{ar:"حكاية مظلمة بين جذور الغابة", en:"A dark fable among forest roots"} },
  { cat:"green", n:"Jurassic Park (1993)", a:"جوراسيك بارك", c:["#3E7A45","#8A9A5C","#C8B48A","#2E3A28","#E8DCA8"],
    m:{ar:"أدغال حية بعصر مفقود", en:"Living jungle from a lost era"} },
  { cat:"green", n:"Midsommar (2019)", a:"ميدسومار", c:["#E8E4C9","#A8C08A","#F2D2A8","#C87E8A","#5C7A45"],
    m:{ar:"رعب مشمس وسط الزهور", en:"Sunlit horror among the flowers"} },
  { cat:"green", n:"Crouching Tiger, Hidden Dragon (2000)", a:"كراوتشينغ تايغر، هيدن دراغون", c:["#8AA86B","#C8D9A8","#5C7A5C","#D9C8A8","#3E4A38"],
    m:{ar:"غابة الخيزران ورشاقة الحرير", en:"Bamboo forest and silken grace"} },
  { cat:"green", n:"The Secret Life of Walter Mitty (2013)", a:"ذا سيكرت لايف أوف والتر ميتي", c:["#4A8A7A","#8AC8C8","#C8873F","#5C6B4F","#D9E4E8"],
    m:{ar:"مغامرة آيسلندية بفيروزي منعش", en:"An Icelandic adventure in fresh teal"} },
  { cat:"green", n:"The Northman (2022)", a:"ذا نورثمان", c:["#3E4A38","#8A9A8A","#5C4A3A","#1E2422","#C8D2C8"],
    m:{ar:"شمال بارد بأخضر رمادي وحشي", en:"A cold north in savage grey-green"} },

  /* ---- Classic & Retro (11) ---- */
  { cat:"retro", n:"Casablanca (1942)", a:"كازابلانكا", c:["#2E2822","#8A7A5C","#C8B48A","#5C5245","#E8DCC9"],
    m:{ar:"أبيض وأسود بدفء الحنين", en:"Black and white with nostalgic warmth"} },
  { cat:"retro", n:"Sin City (2005)", a:"سين سيتي", c:["#1E1E1E","#E8E4E8","#C8354A","#5C5C5C","#F2C845"],
    m:{ar:"كوميكس نوار بلمسات لون صادمة", en:"Noir comics with shocking color accents"} },
  { cat:"retro", n:"Roma (2018)", a:"روما", c:["#3E3E3E","#8A8A8A","#C8C8C8","#E8E4E8","#1E1E1E"],
    m:{ar:"ذاكرة مكسيكية بأبيض وأسود حديث", en:"Mexican memory in modern monochrome"} },
  { cat:"retro", n:"Pulp Fiction (1994)", a:"بالب فيكشن", c:["#2E2822","#C8354A","#E8B84A","#5C4A3A","#8A9A8A"],
    m:{ar:"تسعينات خام بروح السبعينات", en:"Raw '90s with a '70s soul"} },
  { cat:"retro", n:"Back to the Future (1985)", a:"باك تو ذا فيوتشر", c:["#E8732B","#4AA8C8","#C8354A","#F2C845","#2E3438"],
    m:{ar:"ثمانينات مشرقة وسفر بالزمن", en:"Bright '80s and time travel"} },
  { cat:"retro", n:"The Shining (1980)", a:"ذا شاينينغ", c:["#C84B2A","#E8B84A","#8A5A2B","#3E3438","#D9C8A8"],
    m:{ar:"فندق مسكون بسجاد لا يُنسى", en:"A haunted hotel and unforgettable carpet"} },
  { cat:"retro", n:"Almost Famous (2000)", a:"أولموست فيموس", c:["#C8873F","#8A5A6B","#E8B84A","#5C4A3A","#D9B48A"],
    m:{ar:"جولة روك سبعينية بدفء بني", en:"A '70s rock tour in warm browns"} },
  { cat:"retro", n:"Forrest Gump (1994)", a:"فورست غامب", c:["#8AA8C8","#C8B48A","#5C7A45","#E8DCC9","#C8735C"],
    m:{ar:"أمريكا الحالمة عبر العقود", en:"Dreamy America across the decades"} },
  { cat:"retro", n:"Rocky (1976)", a:"روكي", c:["#5C5C6B","#8A7A5C","#C8A05A","#2E2822","#A8A8B4"],
    m:{ar:"فيلادلفيا الرمادية وحلم الملاكم", en:"Grey Philadelphia and a boxer's dream"} },
  { cat:"retro", n:"The Wizard of Oz (1939)", a:"ذا ويزارد أوف أوز", c:["#4AA845","#F2E45C","#C8354A","#4AA8C8","#8A5AA8"],
    m:{ar:"أول انفجار تكنيكولور في التاريخ", en:"History's first Technicolor explosion"} },

  /* ---- 2026 box-office hits ---- */
  { cat:"warm", n:"The Odyssey (2026)", a:"ذي أوديسي", c:["#1E3A4A","#4A7A8A","#C8955A","#8A5A3A","#E8D8B8"],
    m:{ar:"بحر هوميروس الغاضب وبرونز المحاربين", en:"Homer's wrathful sea and warrior bronze"} },
  { cat:"retro", n:"Michael (2026)", a:"مايكل", c:["#0F0F14","#C8354A","#E8C84A","#8A8AB4","#F2F2F2"],
    m:{ar:"أضواء المسرح وقفاز يلمع في الظلام", en:"Stage lights and a glove glittering in the dark"} },
  { cat:"neon", n:"The Super Mario Galaxy Movie (2026)", a:"ذا سوبر ماريو غالاكسي موفي", c:["#1E2A6B","#5C3AC8","#E8393E","#F2C845","#8AD2F8"],
    m:{ar:"أحمر ماريو يسبح في مجرات بنفسجية", en:"Mario red floating through violet galaxies"} },
  { cat:"pastel", n:"Toy Story 5 (2026)", a:"توي ستوري 5", c:["#4AA8E8","#F2C845","#8A5A3A","#5CBD5C","#C8354A"],
    m:{ar:"ألعاب مشرقة بألوان الطفولة", en:"Bright toys in the colors of childhood"} },
  { cat:"pastel", n:"The Devil Wears Prada 2 (2026)", a:"ذا ديفل ويرز برادا 2", c:["#2E5C8A","#0F0F12","#E8A8B4","#F2E8D8","#C8A05A"],
    m:{ar:"سيرولين وأناقة لا ترحم", en:"Cerulean and merciless elegance"} },
  { cat:"cool", n:"Project Hail Mary (2026)", a:"بروجكت هيل ماري", c:["#0A0E1E","#1E3A5C","#E8A845","#C87A2B","#D9E4F2"],
    m:{ar:"عنبر دافئ في عتمة الفضاء البارد", en:"Warm amber in the cold dark of space"} },
  { cat:"dark", n:"Obsession (2026)", a:"أوبسيشن", c:["#101014","#2E3A2E","#8A9A7A","#D9D2C8","#8A2E2E"],
    m:{ar:"هوس يزحف في ضوء المنازل الباهت", en:"Obsession creeping through pale house-light"} },
  { cat:"dark", n:"Backrooms (2026)", a:"باكرومز", c:["#C8B45A","#E8D88A","#8A7A45","#3E3A2E","#F2ECC8"],
    m:{ar:"أصفر فلوريسنت لا نهاية له خلف الجدران", en:"Endless fluorescent yellow behind the walls"} },
  { cat:"green", n:"Hoppers (2026)", a:"هوبرز", c:["#3E8A45","#8AC85C","#2E5C8A","#C8E8A8","#5C3A2B"],
    m:{ar:"بِرك خضراء وعالم الحيوان من الداخل", en:"Green ponds and the animal world from within"} },
  { cat:"desert", n:"The Mandalorian and Grogu (2026)", a:"ذا ماندالوريان آند غروغو", c:["#8A96A8","#C8A05A","#5C8A45","#3E342B","#12141E"],
    m:{ar:"فولاذ البيسكار وصحراء وطفل أخضر", en:"Beskar steel, desert, and a green child"} },

  /* ---- Modern & classic picks ---- */
  { cat:"retro", n:"Star Wars (1977)", a:"ستار وورز", c:["#E8A845","#C8B48A","#2E3A5C","#0F1220","#C8354A"],
    m:{ar:"غروب شمسين فوق رمال تاتوين", en:"Twin suns setting over Tatooine sands"} },
  { cat:"dark", n:"Fury (2014)", a:"فيوري", c:["#3E3A2E","#5C5C45","#8A7A5C","#A8A89A","#C87A2B"],
    m:{ar:"طين وفولاذ في قلب الحرب", en:"Mud and steel in the heart of war"} },
  { cat:"dark", n:"Seven (1995)", a:"سفن", c:["#1E1A14","#5C4A2E","#8A7A45","#3E3E38","#C8B48A"],
    m:{ar:"مدينة مطر لا تغفر خطاياها", en:"A rain-soaked city that forgives no sin"} },
  { cat:"cool", n:"Terminator 2 (1991)", a:"تيرمينيتور 2", c:["#1E2A3E","#4A6B8A","#A8B4C8","#E8732B","#0F1214"],
    m:{ar:"أزرق فولاذي ونار الآلات", en:"Steel blue and machine fire"} },
  { cat:"retro", n:"Man on Wire (2008)", a:"مان أون واير", c:["#8A96A8","#C8D2D9","#5C5C5C","#2E3438","#D9CDB8"],
    m:{ar:"خيط بين برجين في سماء رمادية", en:"A wire between two towers in a grey sky"} },
  { cat:"warm", n:"Harry Potter (2001)", a:"هاري بوتر", c:["#1E2A45","#8A2E2E","#C8955A","#5C6B5C","#3E3A45"],
    m:{ar:"قاعات مضاءة بالشموع وسحر قديم", en:"Candlelit halls and old magic"} },
  { cat:"desert", n:"Django Unchained (2012)", a:"جانغو أنتشيند", c:["#C8955A","#8A2E22","#3E5C7A","#E8DCC8","#1E1A14"],
    m:{ar:"غرب ملطخ بالشمس والدم", en:"A west stained with sun and blood"} },
  { cat:"dark", n:"Sinners (2025)", a:"سينرز", c:["#12141E","#C87A2B","#8A2E2E","#3E3A2E","#E8C88A"],
    m:{ar:"بلوز الدلتا وليل يشتهي الدم", en:"Delta blues and a night that thirsts for blood"} },
  { cat:"green", n:"28 Years Later (2025)", a:"28 يرز ليتر", c:["#3E4A2E","#8A9A6B","#A82E22","#8A8A8A","#D9D2C0"],
    m:{ar:"بريطانيا خاوية يسكنها الغضب", en:"An empty Britain inhabited by rage"} },

  /* ---- Series ---- */
  { cat:"series", n:"Breaking Bad (2008)", a:"بريكنغ باد", c:["#C8955A","#E8C845","#4AA8C8","#3E4A2E","#1E1A14"],
    m:{ar:"صحراء ألبوكيركي وأزرق لا يُنسى", en:"Albuquerque desert and an unforgettable blue"} },
  { cat:"series", n:"Game of Thrones (2011)", a:"غيم أوف ثرونز", c:["#3E4A55","#A8B4C0","#C8A05A","#8A2E2E","#1E2228"],
    m:{ar:"ثلج الشمال وذهب العروش", en:"Northern snow and the gold of thrones"} },
  { cat:"series", n:"House of the Dragon (2022)", a:"هاوس أوف ذا دراغون", c:["#12121A","#8A2E2E","#C8A05A","#5C5C6B","#E8732B"],
    m:{ar:"نار التنانين وذهب آل تارغيريان", en:"Dragonfire and Targaryen gold"} },
  { cat:"series", n:"The Sopranos (1999)", a:"ذا سوبرانوز", c:["#4A3A2E","#8A7A5C","#8A2E2E","#5C5C4A","#C8B48A"],
    m:{ar:"نيوجيرسي بين العائلة والعتمة", en:"New Jersey between family and shadow"} },
  { cat:"series", n:"Chernobyl (2019)", a:"تشيرنوبل", c:["#3E4A4A","#8A9A96","#5C6B45","#B4B4A8","#8A2E22"],
    m:{ar:"رماد سوفييتي وضوء لا يجب أن يُرى", en:"Soviet ash and a light that should never be seen"} },
  { cat:"series", n:"Friends (1994)", a:"فريندز", c:["#6B4A8A","#C87A2B","#E8C88A","#8A3A2E","#4A6B5C"],
    m:{ar:"شقة نيويورك وباب بنفسجي وقهوة لا تنتهي", en:"A New York apartment, a purple door, endless coffee"} },
  { cat:"series", n:"Suits (2011)", a:"سوتس", c:["#1E2A3E","#5C6B7A","#A8B4C8","#F2F2F2","#C8955A"],
    m:{ar:"بدلات مانهاتن وزجاج ناطحات السحاب", en:"Manhattan suits and skyscraper glass"} },
  { cat:"series", n:"Mad Men (2007)", a:"ماد مين", c:["#C8873F","#4A3A2E","#5C6B5C","#E8C88A","#3E4A55"],
    m:{ar:"ويسكي وإعلانات وستينات أنيقة", en:"Whisky, ads, and sleek sixties style"} },
  { cat:"series", n:"Lost (2004)", a:"لوست", c:["#2E5C3E","#4A8AA8","#D9C8A0","#5C5C5C","#C87A2B"],
    m:{ar:"جزيرة خضراء تخفي أسراراً", en:"A green island hiding its secrets"} },
  { cat:"series", n:"Fargo (2014)", a:"فارغو", c:["#E8ECF2","#A82E22","#C8B48A","#3E4A55","#12141A"],
    m:{ar:"ثلج أبيض تلطخه جريمة", en:"White snow stained by crime"} },
  { cat:"series", n:"Peaky Blinders (2013)", a:"بيكي بلايندرز", c:["#1E1E22","#5C5C5C","#8A7A6B","#C8732B","#A8967A"],
    m:{ar:"دخان برمنغهام وقبعات لا ترحم", en:"Birmingham smoke and merciless caps"} },
  { cat:"series", n:"The Crown (2016)", a:"ذا كراون", c:["#1E2A5C","#C8A05A","#6B2E3E","#E8E0D0","#5C6B7A"],
    m:{ar:"ذهب القصر وثقل التاج", en:"Palace gold and the weight of the crown"} },
  { cat:"series", n:"Narcos (2015)", a:"ناركوس", c:["#3E6B45","#C8A05A","#E8C88A","#8A2E2E","#4A3A2E"],
    m:{ar:"أدغال كولومبيا وثمانينات محفوفة بالخطر", en:"Colombian jungle and dangerous eighties"} },
];

/* ------------------------------------------------------------
   Render
   ------------------------------------------------------------ */
let curCat = "all", query = "";
const grid = $("#clGrid"), filters = $("#clFilters");

function frameStyle(c) {
  return `background:` +
    `radial-gradient(95% 130% at 80% 15%, ${c[3]}cc, transparent 60%),` +
    `radial-gradient(85% 110% at 12% 88%, ${c[2]}bb, transparent 55%),` +
    `linear-gradient(158deg, ${c[0]} 0%, ${c[1]} 55%, ${c[4]} 100%)`;
}

/* ------------------------------------------------------------
   AI prompt builder — generators follow color WORDS far better
   than hex codes, so we name every color descriptively.
   ------------------------------------------------------------ */
function hsl(hex) {
  const r = parseInt(hex.slice(1, 3), 16) / 255,
        g = parseInt(hex.slice(3, 5), 16) / 255,
        b = parseInt(hex.slice(5, 7), 16) / 255;
  const mx = Math.max(r, g, b), mn = Math.min(r, g, b), d = mx - mn;
  const l = (mx + mn) / 2;
  const s = d === 0 ? 0 : d / (1 - Math.abs(2 * l - 1));
  let h = 0;
  if (d) {
    if (mx === r) h = ((g - b) / d + 6) % 6;
    else if (mx === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h *= 60;
  }
  return { h, s, l, lum: 0.2126 * r + 0.7152 * g + 0.0722 * b };
}

function colorName(hex) {
  const { h, s, l } = hsl(hex);
  if (s < 0.1) {
    const tint = s < 0.04 ? "" : (h >= 190 && h <= 270 ? "cool " : (h < 70 || h >= 330 ? "warm " : ""));
    if (l < 0.09) return tint + "cinematic near-black";
    if (l < 0.2) return tint + "charcoal black";
    if (l < 0.35) return tint + "dark grey";
    if (l < 0.55) return tint + "neutral grey";
    if (l < 0.75) return tint + "silver grey";
    if (l < 0.9) return tint + "soft off-white";
    return "bright white";
  }
  if (h >= 15 && h < 55 && l < 0.55 && s < 0.62)
    return l < 0.18 ? "very dark coffee brown" : l < 0.32 ? "deep chocolate brown" : l < 0.45 ? "earthy bronze brown" : "warm caramel brown";
  if (h >= 15 && h < 60 && l >= 0.55 && s < 0.55)
    return l > 0.8 ? "pale warm cream" : "warm sand beige";
  if (h >= 200 && h < 260 && l < 0.2) return "midnight navy blue";
  let base;
  if (h < 15 || h >= 350) base = l < 0.45 ? "blood red" : "red";
  else if (h < 30) base = "orange";
  else if (h < 55) base = l >= 0.6 ? "golden yellow" : "amber";
  else if (h < 70) base = "yellow";
  else if (h < 95) base = "olive green";
  else if (h < 150) base = "green";
  else if (h < 180) base = "teal";
  else if (h < 210) base = "cyan blue";
  else if (h < 250) base = "blue";
  else if (h < 290) base = "violet";
  else if (h < 330) base = "purple";
  else base = "magenta pink";
  let mod;
  if (l < 0.14) mod = "very dark";
  else if (l < 0.28) mod = "deep";
  else if (l < 0.45) mod = s > 0.55 ? "rich" : "muted";
  else if (l < 0.65) mod = s > 0.6 ? "vivid" : "dusty";
  else if (l < 0.82) mod = s > 0.5 ? "bright" : "soft";
  else mod = "pale";
  return mod + " " + base;
}

function buildPrompt(x) {
  const sorted = [...x.c].sort((a, b) => hsl(a).lum - hsl(b).lum);
  const nm = sorted.map(h => colorName(h) + " (" + h + ")");
  let warm = 0, cool = 0;
  for (const c of x.c) {
    const { h, s } = hsl(c);
    if (s < 0.12) continue;
    if (h < 70 || h >= 330) warm++;
    else if (h >= 150 && h < 330) cool++;
  }
  const balance =
    warm >= 3 && cool === 0 ? "Overall warm color balance." :
    cool >= 3 && warm === 0 ? "Overall cool color balance." :
    warm >= 1 && cool >= 1 ? "Warm-against-cool cinematic contrast." :
    "Neutral tonal balance.";
  const mood = x.cat === "series"
    ? "the show's signature look"
    : CATS[x.cat].en.toLowerCase() + " mood";
  return "Color grade: the exact five-color palette of " + x.n +
    " \u2014 " + mood + ": " + x.m.en + ". " +
    "Deep shadows in " + nm[0] + ", shadow tones in " + nm[1] +
    ", midtones in " + nm[2] + ", highlights in " + nm[3] +
    ", brightest accents in " + nm[4] + ". " + balance +
    " Keep the entire frame within these five colors \u2014 cinematic film-still contrast, rich color depth, professional movie color grading.";
}

function card(x, i) {
  return `
  <article class="cl-card" data-cat="${x.cat}">
    <div class="cl-frame" style="${frameStyle(x.c)}">${x.img ? `<img src="img/${x.img}.webp" alt="" loading="${i < 4 ? "eager" : "lazy"}"${i === 0 ? ' fetchpriority="high"' : ""} width="640" height="357">` : ""}${x.tt ? `<span class="cl-title cl-tt-${x.tt.c}">${x.tt.h}</span>` : ""}<i></i><b></b></div>
    <div class="cl-body">
      <div class="cl-meta">
        <span class="cl-num">${t("cl_n")} ${String(i + 1).padStart(2, "0")}</span>
        <span class="cl-cat">${CATS[x.cat][lang]}</span>
      </div>
      <h3>${x.n}<span>${x.a}</span></h3>
      <p class="cl-mood">${x.m[lang]}</p>
      <div class="cl-swatches">
        ${x.c.map(h => `
        <button class="sw" type="button" data-hex="${h}">
          <i style="background:${h}"></i><b>${h}</b>
        </button>`).join("")}
      </div>
      <div class="cl-actions">
        <button class="cl-prompt" type="button" data-i="${i}">${t("cl_prompt")}</button>
        <button class="cl-copy" type="button" data-i="${i}">${t("cl_copy")}</button>
      </div>
    </div>
  </article>`;
}

function renderFilters() {
  const b = (id, label) =>
    `<button type="button" data-cat="${id}" class="${curCat === id ? "active" : ""}">${label}</button>`;
  filters.innerHTML = b("all", t("cl_all")) +
    Object.keys(CATS).map(k => b(k, CATS[k][lang])).join("");
}

function matches(x) {
  if (curCat !== "all" && x.cat !== curCat) return false;
  if (!query) return true;
  const hay = (x.n + " " + x.a + " " + CATS[x.cat].ar + " " + CATS[x.cat].en + " " + x.c.join(" ")).toLowerCase();
  return query.split(/\s+/).every(w => hay.includes(w));
}

function renderGrid() {
  const list = PALS.map((x, i) => ({ x, i })).filter(({ x }) => matches(x));
  grid.innerHTML = list.length
    ? list.map(({ x, i }) => card(x, i)).join("")
    : `<p class="cl-empty">${t("cl_noresults")}</p>`;
}

filters.addEventListener("click", e => {
  const b = e.target.closest("button");
  if (!b) return;
  curCat = b.dataset.cat;
  renderFilters();
  renderGrid();
});
$("#clSearch").addEventListener("input", e => {
  query = e.target.value.trim().toLowerCase();
  renderGrid();
});

/* copy: single swatch or whole palette */
let usedOnce = false;
async function copyText(txt) {
  try { await navigator.clipboard.writeText(txt); } catch (err) {
    const ta = document.createElement("textarea");
    ta.value = txt; document.body.appendChild(ta); ta.select();
    document.execCommand("copy"); ta.remove();
  }
  if (!usedOnce) { usedOnce = true; if (window.fbq) fbq("trackCustom", "ToolColors"); }
}
grid.addEventListener("click", async e => {
  const sw = e.target.closest(".sw");
  if (sw) {
    await copyText(sw.dataset.hex);
    const b = sw.querySelector("b"), old = b.textContent;
    b.textContent = "✓";
    setTimeout(() => { b.textContent = old; }, 900);
    return;
  }
  const pr = e.target.closest(".cl-prompt");
  if (pr) {
    await copyText(buildPrompt(PALS[+pr.dataset.i]));
    pr.classList.add("ok");
    pr.textContent = "\u2713 " + t("cl_copied");
    setTimeout(() => { pr.classList.remove("ok"); pr.textContent = t("cl_prompt"); }, 1500);
    return;
  }
  const cp = e.target.closest(".cl-copy");
  if (cp) {
    await copyText(PALS[+cp.dataset.i].c.join(", "));
    cp.classList.add("ok");
    cp.textContent = "✓ " + t("cl_copied");
    setTimeout(() => { cp.classList.remove("ok"); cp.textContent = t("cl_copy"); }, 1500);
  }
});

/* ------------------------------------------------------------
   Language toggle
   ------------------------------------------------------------ */
function applyLang() {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  $$("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  $("#clCount").textContent = PALS.length;
  $("#clSearch").placeholder = t("cl_search_ph");
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
   Boot — the AR grid is pre-baked into the HTML
   ------------------------------------------------------------ */
$("#yr").textContent = new Date().getFullYear();
applyLang();

})();
