/* ============================================================
   Arabia Academies — content & i18n data
   ============================================================ */

const WHATSAPP_URL = "https://wa.me/962770754512";

const ACADEMIES = [
  {
    id: "ecom-arabia",
    color: "#2E9AD6",
    flagship: true,
    logo: "assets/logos/skool-ecomarabia.webp",
    name: { en: "eCom Arabia +", ar: "eCom Arabia +" },
    tag: {
      en: "E-commerce & dropshipping — in the Arab world and beyond",
      ar: "التجارة الإلكترونية والدروبشيبينغ — في الوطن العربي والعالم"
    },
    desc: {
      en: "14 practical courses and 8 live meetings every week. Local COD dropshipping and international dropshipping, powered by today's AI tools — with direct answers from Mohammad Odeh.",
      ar: "١٤ كورس عملي و٨ اجتماعات مباشرة أسبوعية. دروبشيبينغ محلي بالدفع عند الاستلام ودروبشيبينغ عالمي، مدعوم بأحدث أدوات الذكاء الاصطناعي — مع إجابات مباشرة من محمد عودة."
    },
    price: "$1,860",
    per: { en: "/year", ar: "/سنوياً" },
    stats: [
      { v: "14", l: { en: "courses", ar: "كورس" } },
      { v: "8",  l: { en: "live calls / week", ar: "اجتماعات مباشرة أسبوعية" } },
      { v: "160+", l: { en: "members", ar: "عضو" } },
      { v: "20%", l: { en: "affiliate program", ar: "برنامج عمولة" } }
    ],
    outline: [
      { en: "E-commerce foundations in the Arab world", ar: "أساسيات التجارة الإلكترونية في الوطن العربي" },
      { en: "Dropshipping with TikTok — organic & paid", ar: "دروبشيبينغ عبر تيك توك — أورجانيك وممول" },
      { en: "Dropshipping with Facebook & Instagram", ar: "دروبشيبينغ عبر فيسبوك وإنستغرام" },
      { en: "International dropshipping", ar: "الدروبشيبينغ العالمي" },
      { en: "Building your Shopify store", ar: "بناء متجرك على شوبيفاي" },
      { en: "High-converting sales funnels", ar: "بناء الفانلز (قمع مبيعات) عالي التحويل" },
      { en: "Product research & sourcing from China", ar: "اختيار المنتجات والتوريد من الصين" },
      { en: "Arab logistics & cash-on-delivery shipping", ar: "الشحن واللوجستيات العربية والدفع عند الاستلام" },
      { en: "Digital marketing for services", ar: "التسويق الرقمي للخدمات" },
      { en: "AI tools for e-commerce", ar: "أدوات الذكاء الاصطناعي للتجارة الإلكترونية" },
      { en: "Affiliate marketing", ar: "التسويق بالعمولة" },
      { en: "Ad content creation", ar: "صناعة المحتوى الإعلاني" }
    ],
    includes: {
      en: ["8 weekly live expert meetings", "Direct answers from Mohammad", "20% affiliate program", "Private community on Skool"],
      ar: ["٨ اجتماعات مباشرة أسبوعية مع خبراء", "إجابات مباشرة من محمد", "برنامج عمولة ٢٠٪", "مجتمع خاص على Skool"]
    },
    join: "https://www.skool.com/ecomarabia/about",
    badge: { en: "Flagship", ar: "الأكاديمية الرئيسية" }
  },
  {
    id: "zambeel-dropshipping",
    color: "#37C6A0",
    logo: "assets/logos/skool-dropshipping.webp",
    name: { en: "Zambeel Dropshipping", ar: "دروبشيبينغ زنبيل" },
    tag: {
      en: "COD dropshipping in Arab markets — no inventory needed",
      ar: "دروبشيبينغ بالدفع عند الاستلام في الأسواق العربية — بدون مخزون"
    },
    desc: {
      en: "Sell to Arab markets with cash on delivery, without buying inventory upfront. Includes 3 weekly follow-up Zoom meetings and a Gold subscription to Zambeel fulfillment.",
      ar: "بيع للأسواق العربية بالدفع عند الاستلام، دون شراء مخزون مسبقاً. يشمل ٣ اجتماعات زوم للمتابعة أسبوعياً واشتراك Gold في منصة زنبيل للتوصيل."
    },
    price: "$99",
    per: { en: "/month", ar: "/شهرياً" },
    stats: [
      { v: "3", l: { en: "follow-up Zoom meetings / week", ar: "اجتماعات زوم للمتابعة أسبوعياً" } },
      { v: "8", l: { en: "COD countries", ar: "دول دفع عند الاستلام" } },
      { v: "Gold", l: { en: "Zambeel plan included", ar: "اشتراك زنبيل مشمول" } }
    ],
    outline: [
      { en: "Picking winning products", ar: "اختيار المنتجات الرابحة" },
      { en: "Creating ad content that sells", ar: "صناعة محتوى إعلاني يبيع" },
      { en: "Setting up your Meta business platforms", ar: "تجهيز منصات الأعمال على ميتا" },
      { en: "Building your online store", ar: "بناء متجرك الإلكتروني" },
      { en: "Paid advertising that converts", ar: "الإعلانات الممولة التي تحقق مبيعات" },
      { en: "COD fulfillment with Zambeel", ar: "التوصيل والدفع عند الاستلام مع زنبيل" }
    ],
    includes: {
      en: ["3 weekly follow-up Zoom meetings", "Zambeel Gold subscription", "COD fulfillment across 8 countries"],
      ar: ["٣ اجتماعات زوم للمتابعة أسبوعياً", "اشتراك زنبيل Gold", "توصيل بالدفع عند الاستلام في ٨ دول"]
    },
    collab: {
      name: "Zambeel",
      url: "https://www.myzambeel.com/",
      note: { en: "In collaboration with Zambeel — GCC fulfillment & COD logistics", ar: "بالتعاون مع زنبيل — منصة التوصيل والدفع عند الاستلام في الخليج" }
    },
    join: "https://www.skool.com/dropshipping/about",
    badge: null
  },
  {
    id: "iraq-ecom",
    color: "#4CBB6C",
    logo: "assets/logos/skool-iraq.webp",
    mark: "iraq",
    name: { en: "Iraq e-Com", ar: "التجارة الإلكترونية في العراق" },
    tag: {
      en: "E-commerce built for the Iraqi market — sourcing to doorstep",
      ar: "تجارة إلكترونية مصممة للسوق العراقي — من التوريد حتى باب الزبون"
    },
    desc: {
      en: "A dedicated academy for selling inside Iraq: 45 million people, 100% cash on delivery, and almost no competition. Sourcing and shipping from China handled with Exporta.",
      ar: "أكاديمية مخصصة للبيع داخل العراق: ٤٥ مليون نسمة، ١٠٠٪ دفع عند الاستلام، ومنافسة شبه معدومة. التوريد والشحن من الصين بالتعاون مع Exporta."
    },
    price: "$49",
    per: { en: "/month", ar: "/شهرياً" },
    stats: [
      { v: "2", l: { en: "weekly meetings", ar: "اجتماعان أسبوعيان" } },
      { v: "100%", l: { en: "cash on delivery", ar: "دفع عند الاستلام" } },
      { v: "45M", l: { en: "potential buyers", ar: "مشترٍ محتمل" } }
    ],
    outline: [
      { en: "Picking winning products", ar: "اختيار المنتجات الرابحة" },
      { en: "Creating ad content that sells", ar: "صناعة محتوى إعلاني يبيع" },
      { en: "Setting up your Meta business platforms", ar: "تجهيز منصات الأعمال على ميتا" },
      { en: "Building your online store", ar: "بناء متجرك الإلكتروني" },
      { en: "Paid advertising that converts", ar: "الإعلانات الممولة التي تحقق مبيعات" },
      { en: "COD fulfillment with Exporta", ar: "التوصيل والدفع عند الاستلام مع Exporta" }
    ],
    includes: {
      en: ["2 weekly follow-up Zoom meetings", "100% cash on delivery", "Warehousing in Iraq via Exporta", "Almost zero competition"],
      ar: ["اجتماعان أسبوعيان للمتابعة عبر زوم", "١٠٠٪ دفع عند الاستلام", "تخزين داخل العراق عبر Exporta", "منافسة شبه معدومة"]
    },
    collab: {
      name: "Exporta",
      url: "https://exporta.company/",
      note: { en: "In collaboration with Exporta — China → Iraq shipping & warehousing", ar: "بالتعاون مع Exporta — شحن وتخزين من الصين إلى العراق" }
    },
    join: "https://www.skool.com/iraq",
    badge: { en: "New", ar: "جديد" }
  },
  {
    id: "ai-arabia",
    color: "#D6F62B",
    logo: "assets/logos/skool-aiarabia.webp",
    name: { en: "Ai Arabia", ar: "Ai Arabia" },
    footName: { en: "Ai Arabia", ar: "أكاديمية الذكاء الاصطناعي" },
    tag: {
      en: "Content, ads, automation & websites — with AI, in Arabic",
      ar: "احترف صناعة المحتوى والإعلانات وأتمتة الأعمال وبناء المواقع مع الذكاء الاصطناعي"
    },
    desc: {
      en: "Master AI content creation, advertising, business automation and website building — inside an active community with new AI updates every week.",
      ar: "احترف صناعة المحتوى بالذكاء الاصطناعي، الإعلانات، أتمتة الأعمال وبناء المواقع — داخل مجتمع نشِط مع تحديثات ذكاء اصطناعي جديدة كل أسبوع."
    },
    price: "$9",
    priceOld: "$99",
    per: { en: "/month", ar: "/شهرياً" },
    priceNote: { en: "Limited-time offer — normally $99/month", ar: "عرض لفترة محدودة — السعر الأصلي ٩٩$ شهرياً" },
    stats: [
      { v: "50+", l: { en: "members", ar: "عضو" } },
      { v: { en: "Weekly", ar: "أسبوعياً" }, l: { en: "new AI updates", ar: "تحديثات ذكاء اصطناعي جديدة" } },
      { v: { en: "Active", ar: "نشِط" }, l: { en: "community", ar: "مجتمع تفاعلي" } }
    ],
    outline: [
      { en: "Realistic AI images & virtual influencers", ar: "صور واقعية بالذكاء الاصطناعي ومؤثرين افتراضيين" },
      { en: "Digital twins & character consistency", ar: "التوأم الرقمي وثبات الشخصية" },
      { en: "AI video & cinematic ads", ar: "فيديوهات وإعلانات سينمائية بالذكاء الاصطناعي" },
      { en: "Building websites with AI", ar: "بناء المواقع بالذكاء الاصطناعي" },
      { en: "Business automations", ar: "أتمتة الأعمال" },
      { en: "Monetizing AI skills", ar: "تحقيق الدخل من مهارات الذكاء الاصطناعي" }
    ],
    includes: {
      en: ["New AI updates every week", "An active community", "Limited-time price — cancel anytime"],
      ar: ["تحديثات ذكاء اصطناعي جديدة كل أسبوع", "مجتمع نشِط وتفاعلي", "سعر لفترة محدودة — ألغِ متى شئت"]
    },
    join: "https://www.skool.com/aiarabia",
    badge: { en: "New", ar: "جديد" }
  },
  {
    id: "ene-ecom",
    color: "#8A7DF5",
    logo: "assets/logos/skool-ene-ecom.webp",
    name: { en: "ENE X eCom", ar: "ENE X eCom" },
    tag: {
      en: "Generate high-value leads with Meta Ads — in Arabic",
      ar: "توليد عملاء محتملين بقيمة عالية عبر إعلانات ميتا — بالعربية"
    },
    desc: {
      en: "Learn to generate leads for closing through organic content and paid Meta Ads — in Arabic, in collaboration with H. Saleh. Enrollment goes through Hassan's Instagram.",
      ar: "تعلّم توليد العملاء المحتملين وإغلاق الصفقات عبر المحتوى الأورجانيك وإعلانات ميتا الممولة — بالعربية، بالتعاون مع H. Saleh. الانضمام عبر إنستغرام حسان."
    },
    price: { en: "Paid community", ar: "مجتمع مدفوع" },
    per: { en: "", ar: "" },
    stats: [
      { v: "140+", l: { en: "members", ar: "عضو" } },
      { v: { en: "Arabic", ar: "عربي" }, l: { en: "community language", ar: "لغة المجتمع" } },
      { v: "IG", l: { en: "join via Instagram", ar: "الانضمام عبر إنستغرام" } }
    ],
    outline: [
      { en: "Lead generation with Meta Ads", ar: "توليد العملاء المحتملين عبر إعلانات ميتا" },
      { en: "Organic content that attracts buyers", ar: "محتوى أورجانيك يجذب المشترين" },
      { en: "Qualifying high-value leads", ar: "تصفية العملاء ذوي القيمة العالية" },
      { en: "Closing techniques", ar: "أساليب إغلاق الصفقات" }
    ],
    includes: {
      en: ["Taught in Arabic", "In collaboration with H. Saleh", "Enrollment via Instagram"],
      ar: ["بالعربية بالكامل", "بالتعاون مع H. Saleh", "الانضمام عبر إنستغرام"]
    },
    collab: {
      name: "H. Saleh",
      url: "https://www.instagram.com/ask.hsaleh",
      note: { en: "In collaboration with H. Saleh", ar: "بالتعاون مع H. Saleh" }
    },
    join: "https://www.instagram.com/ask.hsaleh",
    joinLabel: { en: "Join via Instagram", ar: "انضم عبر إنستغرام" },
    badge: { en: "With H. Saleh", ar: "مع H. Saleh" }
  }
];

/* ------------------------------------------------------------
   Testimonials — real Instagram comments & DMs.
   img = screenshot filename; avatar crops live in avatars/.
   Cards link to the student's Instagram profile.
   ------------------------------------------------------------ */
const FEATURED = [
  {
    name: "Raghad Zamell",
    handle: "@raghadzamell",
    img: "26.jpg",
    badge: { en: "1M followers", ar: "مليون متابع" },
    quote: {
      en: "I've been coached by Muhammad in person — honest review: he is #1 in dropshipping. He gives you every single detail you need, and whatever help you need after the course, he is always there. Never hesitate.",
      ar: "تدرّبت مع محمد شخصياً — وبكل صدق: هو رقم ١ في الدروبشيبينغ. يعطيك كل تفصيلة تحتاجها، وأي مساعدة بعد الكورس تجده دائماً موجوداً. لا تتردد أبداً."
    }
  },
  {
    name: "Shadi Alzawyani",
    handle: "@shadialzawyani",
    img: "27.jpg",
    badge: { en: "Verified · 71K followers", ar: "موثّق · ٧١ ألف متابع" },
    quote: {
      en: "I've worked online for 14+ years and made over $1M in net profit. Your style is beautiful and your explanations are simple and clear — it makes me certain we'll do a lot of work together.",
      ar: "بشتغل أونلاين أكثر من ١٤ سنة وعملت أكثر من مليون دولار صافي أرباح… أسلوبك جميل وكلامك بسيط ومفهوم، وهاد الشي بيخليني أتأكد أنه حيصير بينا شغل كتير بالمستقبل."
    }
  }
];

const TESTIMONIALS = [
  { name: "Amr Hussein", handle: "@amrthussein", img: "1.jpg",
    en: "I personally took this course and this is my honest opinion: this is what you need — and nothing else — to start in e-commerce or dropshipping.",
    ar: "أخذت الكورس بنفسي وهذا رأيي الصادق: هذا كل ما تحتاجه — ولا شيء غيره — لتبدأ في التجارة الإلكترونية أو الدروبشيبينغ." },
  { name: "Ahmad Khries", handle: "@ahmad_khries96", img: "2.jpg", lang: "ar",
    en: "Amazing course with detailed explanations. What I loved most: any problem you face, you ask Mohammad directly — fast replies, and he stays with you until it's solved. ⭐⭐⭐⭐⭐",
    ar: "الكورس جداً رائع وفيه شرح مفصل، وأكثر شي عجبني إنه أي مشكلة بتواجهها بتسأل محمد مباشرة والرد سريع، وبضل معك حتى المشكلة تنحل ⭐⭐⭐⭐⭐" },
  { name: "Ahmad Momani", handle: "@ahmadmomaniii", img: "3.jpg",
    en: "The best among all. I highly recommend taking the course — a successful man who helps others.",
    ar: "الأفضل على الإطلاق. أنصح بشدة بأخذ الكورس — شخص ناجح ويساعد الآخرين." },
  { name: "Ikram Dibs", handle: "@ikram_dibs", img: "4.jpg", lang: "ar",
    en: "Everything needed to start a new business, explained in detail. A few months after the course, my business has already grown so much.",
    ar: "صدقاً سعيدة جداً بالكورس وبمرونة الأستاذ محمد بالإجابة عن كل الأسئلة. والحمد لله عملي تطور جداً بعد أشهر قليلة من الكورس 🌼" },
  { name: "Adel Daboul", handle: "@dabouladel", img: "5.jpg",
    en: "Best course ever, in all aspects.",
    ar: "أفضل كورس على الإطلاق، من جميع النواحي." },
  { name: "Yousef K.", handle: "@yousef.kh02", img: "6.jpg",
    en: "The best course you can take in your life. Coach Mohamed is with you moment by moment — and even after the course, he stays with you.",
    ar: "أفضل كورس ممكن تأخذه بحياتك. الكوتش محمد معك لحظة بلحظة — وحتى بعد الكورس بضل معك." },
  { name: "Mohammad AK", handle: "@mohammad.ak996", img: "7.jpg", lang: "ar",
    en: "Excellent, valuable information — how to increase your sales and target people who actually want your product. Mohammad keeps following up even after the course ends. ❤️",
    ar: "كورس ممتاز جداً من ناحية المعلومات القيمة — كيف تزيد مبيعاتك وتستهدف الناس المهتمين بمنتجك. والمهندس محمد بضل متابع معك حتى بعد ما يخلص الكورس ❤️" },
  { name: "Deema Baker", handle: "@deema__baker", img: "8.jpg",
    en: "Very beneficial for anyone who wants to increase their income or market their products. Mohammad is a great personality with experience that really helps you.",
    ar: "مفيد جداً لكل من يريد زيادة دخله أو تسويق منتجاته. محمد شخصية رائعة وخبرته بتساعدك فعلاً." },
  { name: "Mira JK", handle: "@mirajk.2k", img: "9.jpg",
    en: "This course really did change my life. Take it with your eyes closed — just don't hesitate.",
    ar: "هذا الكورس فعلاً غيّر حياتي. خذه وعيونك مغمضة — بس لا تتردد." },
  { name: "Saad Jabari", handle: "@saad.jabari97", img: "10.jpg",
    en: "Best course for dropshipping. Mohammad really helps you understand the REAL way to do it, and he's very helpful whenever you contact him.",
    ar: "أفضل كورس للدروبشيبينغ. محمد بيخليك تفهم الطريقة الحقيقية للشغل، ومتعاون جداً كل ما تواصلت معه." },
  { name: "Batool Abudalo", handle: "@batool_abudalo", img: "11.jpg",
    en: "Best course ever, and best instructor — professional, strong and helpful. For anyone who wants to change their life.",
    ar: "أفضل كورس وأفضل مدرّب — محترف وقوي ومتعاون. لكل شخص بده يغيّر حياته." },
  { name: "Ryad", handle: "@whoisryad", img: "12.jpg",
    en: "Very informative course. The instructor is sincere and knowledgeable on the subject. Highly recommended.",
    ar: "كورس غني بالمعلومات، والمدرّب صادق وملمّ بالمجال. أنصح فيه بشدة." },
  { name: "Lelian Shehadeh", handle: "@lelian.shehadeh", img: "13.jpg",
    en: "A great, helpful course that explains everything in detail. Mr. Mohammed's flexibility in answering questions was really appreciated.",
    ar: "كورس رائع ومفيد بيشرح كل شيء بالتفصيل. مرونة الأستاذ محمد بالإجابة على الأسئلة شيء بيستحق التقدير." },
  { name: "Obeid", handle: "@iamobeid", img: "14.jpg", lang: "ar",
    en: "We literally learned, in detail, how to build and launch our own project from zero. After the course, Mohammad was always there — every step, the moment we asked.",
    ar: "فعلياً تعلمنا بالتفصيل كيف نبني ونبدأ مشروعنا الخاص من الصفر 💥 وبعد الكورس كان محمد دائماً موجود معنا بكل خطوة وبساعدنا لحظة سؤالنا عن أي شي." },
  { name: "Omar Mansour", handle: "@omarmansour12", img: "15.jpg",
    en: "Highly recommended for anyone aiming for a scalable business! High income is guaranteed 💯",
    ar: "أنصح فيه بشدة لكل من يطمح لمشروع قابل للتوسع! الدخل العالي مضمون 💯" },
  { name: "Ranya Alrawi", handle: "@ranyaalrawii", img: "16.jpg",
    en: "This course changed my life.",
    ar: "هذا الكورس غيّر حياتي." },
  { name: "M. Aljundi", handle: "@m_aljundi_2", img: "17.jpg", lang: "ar",
    en: "Mohammad went above and beyond. Packed with exactly the information anyone entering this field needs. Amazing course. 😍",
    ar: "محمد ما قصّر، الكورس رائع ومفيد وفيه كل المعلومات اللي أي حد بده يفوت هالمجال بحتاجها. 😍" },
  { name: "Anas Aljafari", handle: "@anasaljafari1", img: "18.jpg",
    en: "For anyone who wants to grow their income exponentially or start from zero — taught by the master of this field, with real experience in marketing and e-commerce. 🔥",
    ar: "لكل من بده يضاعف دخله أو يبدأ من الصفر — من محترف هذا المجال، بخبرة حقيقية في التسويق والتجارة الإلكترونية. 🔥" },
  { name: "Nirvana M.", handle: "@nirvana.m91", img: "21.jpg",
    en: "You are the best. I benefited so much — I advise everyone to take this course.",
    ar: "أنت الأفضل. استفدت كثيراً — وأنصح الجميع بأخذ الكورس." },
  { name: "Raghid Shanti", handle: "@raghidshanti", img: "22.jpg",
    en: "The instructors are knowledgeable and drill down into the details with you. I highly recommend everybody looking to start an e-commerce project to join.",
    ar: "المدرّبون ملمّون وبينزلوا معك لأدق التفاصيل. أنصح أي حد بده يبدأ مشروع تجارة إلكترونية بالانضمام." },
  { name: "Ragheb Sabbagh", handle: "@ragheb_sabbagh", img: "25.jpg",
    en: "This course is the best 🔥",
    ar: "هذا الكورس هو الأفضل 🔥" },
  { name: "Wael Al-Sabe", handle: "@wyl_lsb", img: "n-wyl_lsb.jpg",
    en: "Mashallah, honestly something really nice. I registered yesterday and today I already booked a meeting with Mr. Mohammad — that's how fast the reply came. So excited to learn from his e-commerce experience. Thank you all ❤️❤️❤️",
    ar: "ماشاء الله شي حلو كتير الصراحة. أنا سجلت أمس واليوم حجزت موعد مع الأستاذ محمد — بهالسرعة أجاني الرد. ومتحمس كتير أشوف الأستاذ وأستفيد من خبرته في مجال التجارة الإلكترونية. شكراً جزيلاً لكم جميعاً ❤️❤️❤️" },
  { name: "Soaad Alarfe", handle: "@soad_johre", img: "n-soad_johre.jpg",
    en: "I'm one of the academy's students. Mr. Mohammad supports us and gives sincerely — I learned so much about e-commerce from his own experience, and I always love to be there in the follow-up meetings he holds.",
    ar: "أنا من ضمن طلاب الأكاديمية. الأستاذ محمد ما قصّر — داعم لنا ويعطي بإخلاص. تعلمت أشياء كثيرة عن التجارة الإلكترونية من تجربته الخاصة، وأحب دائماً أكون متواجدة في اجتماعات المتابعة اللي بيعملها." },
  { name: "Omaymah", handle: "@omaymahabulehia", img: "n-omaymahabulehia.jpg",
    en: "Academy number one. The follow-up the coach gives is priceless. Good luck to everyone!",
    ar: "أكاديمية رقم ١ — المتابعة اللي بيقدمها الكوتش لا تقدر بثمن. بالتوفيق للجميع" },
  { name: "Ahmed Jalis", handle: "@ahmed_jalis706", img: "n-ahmed_jalis706.jpg",
    en: "I've attended most of the courses and many meetings with Coach Mohammad and the other trainers. Honestly: credibility, professional teaching, and everything explained in detail. Anyone who wants to start in this field — don't hesitate to join ❤️",
    ar: "حضرت أغلب الكورسات وكتير اجتماعات مع الكوتش محمد وباقي المدربين بالمنصة. للأمانة: مصداقية واحترافية بالتعليم وشرح بالتفصيل لكل شي. بنصح كل حدا حابب يبدأ بالمجال لا يتردد بالاشتراك ❤️" },
  { name: "Abd Al-Rahman", handle: "@apedbader10", img: "n-apedbader10.jpg",
    en: "Honestly, seriously top class.",
    ar: "فخم جداً جداً صراحة" },
  { name: "Caftan Llaa", handle: "@caftan_llaa", img: "n-caftan_llaa.jpg",
    en: "I can testify — a year and a half in the academy. I learned so much, every lesson builds on the last, and I'm staying subscribed with you. Your presence is essential for us to make it.",
    ar: "أشهد — لي سنة ونص وأنا في الأكاديمية. تعلمت كثير واستفدت، كل الدروس تكمّل بعض، وأنا مستمرة معكم في الاشتراك. وجودك ضروري عشان نوصل." },
  { name: "Redab Abdulrazzaq", handle: "@redab_abdulrazzaq", img: "n-redab_abdulrazzaq.jpg",
    en: "There are plenty of e-commerce platforms, but Mr. Mohammad Odeh's academy is just different. A kind, smart, humble and successful person who loves to see everyone learn and succeed. Join, and success will be on your side.",
    ar: "على الرغم من وجود الكثير من منصات التجارة الإلكترونية، لكن أكاديمية أستاذ محمد عوده غير — إنسان خلوق، ذكي، متواضع وناجح، ويحب يشوف الكل يتعلم وينجح. اشتركوا بالأكاديمية وإن شاء الله يكون النجاح حليفكم." },
  { name: "Muhammed Abdul Aziz", handle: "@m_63_x8", img: "n-m_63_x8.jpg",
    en: "So much information and effective, professional strategies. What the coach gives you comes back worth multiples of the subscription you pay, and he helps us with every mistake. Hats off — thank you from the heart ❤️❤️❤️",
    ar: "أنا أحد طلاب الكوتش محمد. الصراحة في معلومات كتير واستراتيجيات فعّالة واحترافية. الكوتش بيقدملكم شغلات رهيبة وبترجعلكم أضعاف الاشتراك اللي بتدفعوه، وبيساعدنا بكل الأخطاء. ترفع لك القبعة، شكراً من القلب ❤️❤️❤️" },
  { name: "Fatima Al-Qabbat", handle: "@mf4live", img: "n-mf4live.jpg",
    en: "Every detail explained with precision, order and credibility. Thank you so much, Mr. Mohammad.",
    ar: "تفاصيل مشروحة بكل دقة وترتيب ومصداقية. كل الشكر أستاذ محمد" },
  { name: "Mahmoud Nady", handle: "@mahnady98", img: "n-mahnady98.jpg",
    en: "The peak of humility and giving. From the day you join until you're making profit, Coach Mohammad succeeds with you step by step ❤️ Over a year of experience — an unreal amount of learning, and best of all, constant guidance and help with your project.",
    ar: "قمة في التواضع والعطاء. من يوم ما تشترك لحد ما تطلع أرباح، بينجح معاك كوتش محمد خطوة بخطوة ❤️ عن تجربة فوق السنة — كمية من التعلم فوق الخيال، والأحسن من كل هذا إنه في توجيه دائماً ومساعدة في مشروعك." },
  { name: "Mohamad Saad", handle: "@rozalretail5", img: "n-rozalretail5.jpg",
    en: "I've been subscribed for just 6 days. I've seen many courses, but explanations like this I never found — you get the idea from the first time. I advise everyone to join: huge value and a treasure of information.",
    ar: "والله صرلي ٦ أيام مشترك، وشفت كورسات عند ناس كثير بس مثل هيك شرح ما لقيت — الواحد بيفهم الفكرة من أول مرة. بنصح كل واحد ينضم، في فايدة كبيرة وكنز من المعلومات. كل التوفيق" },
  { name: "Abdulrazak Alhummada", handle: "@abdulrazakalhummada", img: "n-abdulrazakalhummada.jpg",
    en: "Mashallah — professional courses.",
    ar: "ماشاء الله كورسات احترافية" },
  { name: "Sondes", handle: "@sondesyouneb", img: "n-sondesyouneb.jpg",
    en: "A complete platform and an outstanding coach 👏👏👏",
    ar: "منصة متكاملة وكوتش مميز 👏👏👏" },
  { name: "Enchant Beauty", handle: "@enchantbeauty2024", img: "n-enchantbeauty2024.jpg",
    en: "A highly competent platform. Honestly, the name Mohammad Odeh means a lot: competence, sincerity, excellence and conscience. May God bless you and reward you for your constant effort with us.",
    ar: "منصة على درجة كبيرة من الكفاءة. وبكل صراحة اسم محمد عوده يعني الكثير: محمد عوده هو الكفاءة والإخلاص والتميز والضمير. ربنا يبارك فيك ويجازيك كل خير على تعبك الدائم معنا." },
  { name: "Yasir Ali", handle: "@yasirali909", img: "n-yasirali909.jpg",
    en: "One of the finest academies in this field today — in follow-up, information and experience 🔥 God reward you, Coach Mohammad, for your time and effort with us.",
    ar: "من أرقى وأفضل الأكاديميات التعليمية حالياً في هذا المجال — من ناحية المتابعة والمعلومات والخبرات 🔥 جزاك الله خير كوتش محمد على وقتك وتعبك وجهدك معانا" },
  { name: "Sereen", handle: "@sereen.sereen369", img: "n-sereen.jpg",
    en: "Whoever wants to start shouldn't hesitate — you'll find an expert who walks with you step by step and doesn't let go until you're making sales and succeeding. Best part: you see results while you're still learning, and information you won't find in any other course 🙌🙌",
    ar: "ما شاء الله، الكوتش ما قصّر حرفياً. اللي حاب يبلش ما يتردد — رح يلاقي شخص خبير بالمجال ماشي معه خطوة بخطوة وما بتركه إلا لما يحقق مبيعات وينجح. والحلو إنه وأنت عم تدرس وبتطبّق بكون في نتائج، عدا عن معلومات ما بتلاقوها بأي كورس 🙌🙌" },
  { name: "Egyptian Girle", handle: "@egption_girle", img: "n-egption_girle.jpg",
    en: "The academy is truly top level. I've been a student for a year and learned so much — the best part is Mr. Mohammad's follow-up; he's always with us with his guidance. God bless you for your effort with us.",
    ar: "والله الأكاديمية على أعلى مستوى. أنا طالبة بالأكاديمية من عام، تعلمت منها الكثير — وأجمل ما فيها المتابعة من الأستاذ محمد، والله دائماً معنا هو وتوجيهاته. ربنا يبارك فيك أستاذ محمد ويجازيك خير على تعبك معنا." },
  { name: "Abdennour Ben", handle: "@abdennour.ben.98", img: "n-abdennour.jpg",
    en: "I've been subscribed since day one. My advice to anyone hesitating: don't waste the chance — you will benefit, and real work went into this academy. Thanks, Coach.",
    ar: "أنا مشترك من أول يوم، ونصيحتي لأي واحد متردد: ما تضيع الفرصة لأنه والله رح تستفيد — وهاي الأكاديمية متعوب عليها بجد… شكراً كوتش" },
  { name: "Eslam", handle: "@thebigpirate", img: "n-thebigpirate.jpg",
    en: "I don't usually comment, but Mohammad's content is truly great. I've been enrolled for a while — he gives his time, and the effort shows! 😍",
    ar: "عادةً مش بعلّق، بس فعلاً محمد محتوى رائع. أنا مسجل من فترة — بيعطي من وقته والمجهود واضح! 😍" },
  { name: "Kzbor", handle: "@jamilkzebra", img: "n-jamilkzebra.jpg",
    en: "Mashallah — you've covered it all and delivered 👏",
    ar: "ماشاء الله عليك، مكفي وموفي 👏" },
  { name: "Zaid Bassam Harb", handle: "@zaid.bassam.harb", img: "n-zaid_bassam.jpg",
    en: "The legend of e-commerce — number one, I swear 🔥",
    ar: "🔥 أسطورة التجارة الإلكترونية، والله نمبر ون 🔥" },
  { name: "Abdallah Osama", handle: "@abdallah_o_barakt4", img: "n-abdallah_barakt.jpg",
    en: "The best platform in the Arab world for learning e-commerce. All respect, Coach ❤️🌹",
    ar: "أفضل منصة بالوطن العربي لتعليم التجارة الإلكترونية. كل الاحترام كوتش ❤️🌹" },
  { name: "Jan Kurdistan", handle: "@jan_kurdistanaaaa", img: "n-jan_kurdistan.jpg",
    en: "Everything is clear and explained — and best of all, there's a meeting every day, so there's no way to get lost. You'll be surprised when you join. Heartfelt salute to Coach Mohammad and everyone working hard for us 🙏",
    ar: "بصراحة كل شي واضح ومشروح، والأحلى من هيك كل يوم اجتماع — يعني ما في مجال للضياع، ورح تتفاجؤوا بالاشتراك بجد. تحية من القلب للكوتش محمد وكل الأعضاء اللي عم يتعبوا مع الجميع، بالتوفيق للجميع 🙏" },
  { name: "Ahmed Ghanem", handle: "@aghanem1990", img: "n-aghanem1990.jpg",
    en: "I tried more than one trainer and team, and found no one like Mr. Odeh and his team. Thank you ❤️🔥",
    ar: "جربت أكثر من مدرب وفريق، وما وجدت زي الأستاذ عودة وفريقه. شكراً لكم ❤️🔥" },
  { name: "Mustafa Marwan", handle: "@m66400_", img: "n-m66400.jpg",
    en: "An excellent academy ❤️🔥",
    ar: "أكاديمية ممتازة ❤️🔥" },
  { name: "Qusai Khalil", handle: "@qusai.khalill", img: "n-qusai_khalill.jpg",
    en: "The master of the field — Abu Odeh 😍👏",
    ar: "عم المجال أبو عوده 😍👏" },
  { name: "Abdullateef", handle: "@lhr.lsmt", img: "n-lhr_lsmt.jpg",
    en: "Mashallah, the academy is complete in every way. I recommend it to everyone — you will benefit with the coach ❤️❤️",
    ar: "والله ماشاء الله كاملة مكتملة الأكاديمية. أنصح الجميع فيها — رح تستفيد مع الكوتش، ربي يوفق الجميع ❤️❤️" },
  { name: "Sparrow Mentor", handle: "@sparrow_mentor", img: "n-sparrow_mentor.jpg",
    en: "The best academy — you find everything in one place, whatever you need, plus the trainers' support. Mashallah, God grant them success ❤️",
    ar: "أفضل أكاديمية — ممكن تلاقي كل شي في مكان واحد وحسب حاجتك، ودعم المدربين ما شاء الله، ربي يوفقهم ❤️" }
];

/* ------------------------------------------------------------
   World markets — rounded public estimates, 2025–2026.
   arab: gold markers · world top-20: blue markers
   market $B/yr · growth %/yr · shoppers % of population buying
   online · spend = avg $ per online shopper per year
   ------------------------------------------------------------ */
const COUNTRIES = [
  /* ---- Arab markets ---- */
  { iso: "SAU", arab: true, lat: 24.7, lng: 46.7,  market: 26,   growth: 12, pop: "36M",   shoppers: 65, spend: 1100,
    name: { en: "Saudi Arabia", ar: "السعودية" }, note: { en: "The largest e-commerce market in the Gulf", ar: "أكبر سوق تجارة إلكترونية في الخليج" } },
  { iso: "ARE", arab: true, lat: 24.3, lng: 54.4,  market: 17,   growth: 10, pop: "10M",   shoppers: 85, spend: 2000,
    name: { en: "UAE", ar: "الإمارات" }, note: { en: "Highest online spend per shopper in MENA", ar: "أعلى إنفاق أونلاين للمتسوق في المنطقة" } },
  { iso: "EGY", arab: true, lat: 27.0, lng: 30.0,  market: 10,   growth: 25, pop: "107M",  shoppers: 35, spend: 270,
    name: { en: "Egypt", ar: "مصر" }, note: { en: "The fastest-growing large Arab market", ar: "أسرع الأسواق العربية الكبيرة نمواً" } },
  { iso: "IRQ", arab: true, lat: 33.0, lng: 43.7,  market: 3,    growth: 25, pop: "45M",   shoppers: 25, spend: 260,
    name: { en: "Iraq", ar: "العراق" }, note: { en: "100% COD territory — almost untouched", ar: "١٠٠٪ دفع عند الاستلام — سوق شبه بِكر" } },
  { iso: "JOR", arab: true, lat: 31.3, lng: 36.5,  market: 1.2,  growth: 10, pop: "11M",   shoppers: 45, spend: 230,
    name: { en: "Jordan", ar: "الأردن" }, note: { en: "Home base — where the road starts", ar: "نقطة الانطلاق — من هنا يبدأ الطريق" }, hub: true },
  /* Palestine: combined figures — the current Palestinian market plus the
     ~2.1M Arabic speakers of the '48 lands (0.4B + ~1.3B ≈ 1.7B; 3.0M online
     shoppers of 7.6M people ≈ 40%; 1.7B / 3.0M ≈ $560/shopper) */
  { iso: "PSE", arab: true, lat: 31.7, lng: 35.0,  market: 1.7,  growth: 9,  pop: "7.6M",  shoppers: 40, spend: 560,
    name: { en: "Palestine", ar: "فلسطين" }, note: { en: "A resilient, mobile-first market", ar: "سوق صامد يعتمد على الموبايل أولاً" } },
  { iso: "KWT", arab: true, lat: 29.4, lng: 47.6,  market: 2.4,  growth: 9,  pop: "4.5M",  shoppers: 75, spend: 700,
    name: { en: "Kuwait", ar: "الكويت" } },
  { iso: "QAT", arab: true, lat: 25.3, lng: 51.2,  market: 3.2,  growth: 9,  pop: "3M",    shoppers: 80, spend: 1300,
    name: { en: "Qatar", ar: "قطر" } },
  { iso: "OMN", arab: true, lat: 20.6, lng: 56.1,  market: 1.4,  growth: 11, pop: "5M",    shoppers: 55, spend: 500,
    name: { en: "Oman", ar: "عُمان" } },
  { iso: "MAR", arab: true, lat: 31.8, lng: -7.1,  market: 2.1,  growth: 15, pop: "37M",   shoppers: 35, spend: 160,
    name: { en: "Morocco", ar: "المغرب" }, note: { en: "North Africa's rising COD market", ar: "سوق الدفع عند الاستلام الصاعد في شمال أفريقيا" } },
  { iso: "DZA", arab: true, lat: 28.0, lng: 2.6,   market: 1.6,  growth: 14, pop: "46M",   shoppers: 25, spend: 140,
    name: { en: "Algeria", ar: "الجزائر" } },
  { iso: "LBN", arab: true, lat: 33.9, lng: 35.9,  market: 0.6,  growth: 8,  pop: "5.5M",  shoppers: 45, spend: 240,
    name: { en: "Lebanon", ar: "لبنان" } },

  /* ---- Top global markets ---- */
  { iso: "CHN", arab: false, lat: 35.0, lng: 104.0,  market: 1500, growth: 8,  pop: "1.4B",  shoppers: 65, spend: 1650,
    name: { en: "China", ar: "الصين" }, note: { en: "The world's biggest e-commerce market — and your supplier", ar: "أكبر سوق تجارة إلكترونية في العالم — ومصدر بضائعك" } },
  { iso: "USA", arab: false, lat: 39.0, lng: -98.0,  market: 1200, growth: 9,  pop: "335M",  shoppers: 80, spend: 4500,
    name: { en: "United States", ar: "الولايات المتحدة" }, note: { en: "The highest-spending shoppers on earth", ar: "أعلى المتسوقين إنفاقاً على وجه الأرض" } },
  { iso: "GBR", arab: false, lat: 53.0, lng: -1.5,   market: 180,  growth: 6,  pop: "68M",   shoppers: 85, spend: 3100,
    name: { en: "United Kingdom", ar: "بريطانيا" } },
  { iso: "JPN", arab: false, lat: 36.0, lng: 138.0,  market: 170,  growth: 5,  pop: "124M",  shoppers: 75, spend: 1800,
    name: { en: "Japan", ar: "اليابان" } },
  { iso: "KOR", arab: false, lat: 36.5, lng: 128.0,  market: 130,  growth: 7,  pop: "52M",   shoppers: 85, spend: 2900,
    name: { en: "South Korea", ar: "كوريا الجنوبية" } },
  { iso: "DEU", arab: false, lat: 51.0, lng: 10.0,   market: 100,  growth: 6,  pop: "84M",   shoppers: 80, spend: 1500,
    name: { en: "Germany", ar: "ألمانيا" } },
  { iso: "FRA", arab: false, lat: 46.5, lng: 2.5,    market: 90,   growth: 7,  pop: "66M",   shoppers: 75, spend: 1800,
    name: { en: "France", ar: "فرنسا" } },
  { iso: "IND", arab: false, lat: 22.0, lng: 79.0,   market: 90,   growth: 20, pop: "1.4B",  shoppers: 25, spend: 250,
    name: { en: "India", ar: "الهند" }, note: { en: "A billion shoppers coming online", ar: "مليار متسوق في طريقهم إلى الإنترنت" } },
  { iso: "CAN", arab: false, lat: 56.0, lng: -106.0, market: 65,   growth: 8,  pop: "39M",   shoppers: 80, spend: 2100,
    name: { en: "Canada", ar: "كندا" } },
  { iso: "BRA", arab: false, lat: -10.0, lng: -52.0, market: 60,   growth: 12, pop: "216M",  shoppers: 45, spend: 620,
    name: { en: "Brazil", ar: "البرازيل" } },
  { iso: "IDN", arab: false, lat: -2.0, lng: 118.0,  market: 55,   growth: 15, pop: "278M",  shoppers: 40, spend: 500,
    name: { en: "Indonesia", ar: "إندونيسيا" } },
  { iso: "RUS", arab: false, lat: 60.0, lng: 90.0,   market: 55,   growth: 10, pop: "144M",  shoppers: 55, spend: 700,
    name: { en: "Russia", ar: "روسيا" } },
  { iso: "AUS", arab: false, lat: -25.0, lng: 134.0, market: 45,   growth: 8,  pop: "26M",   shoppers: 80, spend: 2200,
    name: { en: "Australia", ar: "أستراليا" } },
  { iso: "MEX", arab: false, lat: 23.0, lng: -102.0, market: 40,   growth: 15, pop: "128M",  shoppers: 45, spend: 700,
    name: { en: "Mexico", ar: "المكسيك" } },
  { iso: "ESP", arab: false, lat: 40.0, lng: -3.5,   market: 40,   growth: 8,  pop: "48M",   shoppers: 75, spend: 1100,
    name: { en: "Spain", ar: "إسبانيا" } },
  { iso: "ITA", arab: false, lat: 42.5, lng: 12.5,   market: 40,   growth: 9,  pop: "59M",   shoppers: 65, spend: 1050,
    name: { en: "Italy", ar: "إيطاليا" } },
  { iso: "NLD", arab: false, lat: 52.2, lng: 5.3,    market: 35,   growth: 7,  pop: "18M",   shoppers: 90, spend: 2200,
    name: { en: "Netherlands", ar: "هولندا" } },
  { iso: "TUR", arab: false, lat: 39.0, lng: 35.0,   market: 35,   growth: 18, pop: "85M",   shoppers: 55, spend: 750,
    name: { en: "Türkiye", ar: "تركيا" } },
  { iso: "POL", arab: false, lat: 52.0, lng: 19.0,   market: 30,   growth: 10, pop: "37M",   shoppers: 70, spend: 1150,
    name: { en: "Poland", ar: "بولندا" } },
  { iso: "VNM", arab: false, lat: 16.0, lng: 107.0,  market: 25,   growth: 20, pop: "99M",   shoppers: 45, spend: 560,
    name: { en: "Vietnam", ar: "فيتنام" }, note: { en: "Southeast Asia's rising star", ar: "النجم الصاعد في جنوب شرق آسيا" } },

  /* ---- More European markets ---- */
  { iso: "SWE", arab: false, lat: 62.0, lng: 15.0,  market: 18, growth: 6,  pop: "10.5M", shoppers: 85, spend: 2000,
    name: { en: "Sweden", ar: "السويد" } },
  { iso: "CHE", arab: false, lat: 46.8, lng: 8.2,   market: 15, growth: 6,  pop: "9M",    shoppers: 80, spend: 2100,
    name: { en: "Switzerland", ar: "سويسرا" } },
  { iso: "BEL", arab: false, lat: 50.6, lng: 4.6,   market: 13, growth: 7,  pop: "11.7M", shoppers: 80, spend: 1400,
    name: { en: "Belgium", ar: "بلجيكا" } },
  { iso: "DNK", arab: false, lat: 56.0, lng: 10.0,  market: 12, growth: 6,  pop: "6M",    shoppers: 90, spend: 2200,
    name: { en: "Denmark", ar: "الدنمارك" } },
  { iso: "AUT", arab: false, lat: 47.5, lng: 14.5,  market: 11, growth: 6,  pop: "9.1M",  shoppers: 75, spend: 1600,
    name: { en: "Austria", ar: "النمسا" } },
  { iso: "NOR", arab: false, lat: 61.0, lng: 9.0,   market: 10, growth: 6,  pop: "5.5M",  shoppers: 85, spend: 2100,
    name: { en: "Norway", ar: "النرويج" } },
  { iso: "CZE", arab: false, lat: 49.8, lng: 15.5,  market: 9,  growth: 9,  pop: "10.8M", shoppers: 75, spend: 1100,
    name: { en: "Czechia", ar: "التشيك" } },
  { iso: "IRL", arab: false, lat: 53.2, lng: -8.0,  market: 8,  growth: 8,  pop: "5.3M",  shoppers: 80, spend: 1900,
    name: { en: "Ireland", ar: "أيرلندا" } },
  { iso: "FIN", arab: false, lat: 62.0, lng: 26.0,  market: 8,  growth: 6,  pop: "5.6M",  shoppers: 85, spend: 1700,
    name: { en: "Finland", ar: "فنلندا" } },
  { iso: "PRT", arab: false, lat: 39.5, lng: -8.0,  market: 7,  growth: 10, pop: "10.4M", shoppers: 65, spend: 1000,
    name: { en: "Portugal", ar: "البرتغال" } },
  { iso: "ROU", arab: false, lat: 45.9, lng: 25.0,  market: 7,  growth: 12, pop: "19M",   shoppers: 55, spend: 650,
    name: { en: "Romania", ar: "رومانيا" } },
  { iso: "GRC", arab: false, lat: 39.0, lng: 22.0,  market: 6,  growth: 9,  pop: "10.3M", shoppers: 65, spend: 900,
    name: { en: "Greece", ar: "اليونان" } }
];

/* ------------------------------------------------------------
   The road to success — the method behind every academy
   ------------------------------------------------------------ */
const ROADMAP = [
  {
    n: "01",
    t: { en: "Learn", ar: "تعلّم" },
    d: { en: "Structured courses in Arabic that assume zero experience. Every lesson is practical — no theory for theory's sake.",
         ar: "كورسات منظمة بالعربية لا تفترض أي خبرة مسبقة. كل درس عملي — لا نظريات بلا فائدة." }
  },
  {
    n: "02",
    t: { en: "Build", ar: "ابنِ" },
    d: { en: "Your store, your content, your ad accounts — built step by step alongside the lessons, reviewed by mentors.",
         ar: "متجرك، محتواك، حساباتك الإعلانية — تبنيها خطوة بخطوة مع الدروس، وبمراجعة من المدرّبين." }
  },
  {
    n: "03",
    t: { en: "Launch", ar: "أطلق" },
    d: { en: "Go live and get your first sales, with up to 8 live calls a week and direct answers when problems appear.",
         ar: "انطلق وحقق مبيعاتك الأولى، مع ما يصل إلى ٨ اجتماعات مباشرة أسبوعية وإجابات فورية عند أي مشكلة." }
  },
  {
    n: "04",
    t: { en: "Scale", ar: "توسّع" },
    d: { en: "Sourcing from China, Arab logistics, AI automation and new markets — turn a first sale into a business.",
         ar: "التوريد من الصين، اللوجستيات العربية، أتمتة الذكاء الاصطناعي وأسواق جديدة — حوّل أول عملية بيع إلى مشروع حقيقي." }
  }
];

const FAQ = [
  {
    q: { en: "Which academy should I start with?", ar: "بأي أكاديمية أبدأ؟" },
    a: { en: "For the full e-commerce and dropshipping road — local and international — start with eCom Arabia + ($1,860/year). If you want COD dropshipping with fulfillment handled for you, choose Zambeel Dropshipping ($99/month). Selling inside Iraq? Iraq e-Com is $49/month. For AI skills, Ai Arabia is $9/month for a limited time. And ENE X eCom teaches Meta Ads lead generation — enrollment through Hassan's Instagram.",
         ar: "لطريق التجارة الإلكترونية والدروبشيبينغ كاملاً — محلياً وعالمياً — ابدأ بـ eCom Arabia + (١٨٦٠$ سنوياً). إذا كنت تريد دروبشيبينغ الدفع عند الاستلام مع توصيل جاهز، اختر دروبشيبينغ زنبيل (٩٩$ شهرياً). تبيع داخل العراق؟ أكاديمية التجارة الإلكترونية في العراق بـ ٤٩$ شهرياً. لمهارات الذكاء الاصطناعي، Ai Arabia بـ ٩$ شهرياً لفترة محدودة. أما ENE X eCom فتعلّمك توليد العملاء عبر إعلانات ميتا — والانضمام عبر إنستغرام حسان." }
  },
  {
    q: { en: "Are the courses in Arabic?", ar: "هل الكورسات باللغة العربية؟" },
    a: { en: "Yes — every academy is taught in Arabic, including ENE X eCom.",
         ar: "نعم — جميع الأكاديميات بالعربية، بما فيها ENE X eCom." }
  },
  {
    q: { en: "How do I join, and can I cancel?", ar: "كيف أنضم؟ وهل يمكنني الإلغاء؟" },
    a: { en: "The academies are hosted on Skool. Click Join Now, subscribe, and cancel anytime with one click — eCom Arabia + is billed yearly, the others monthly. ENE X eCom enrollment goes through Hassan's Instagram instead.",
         ar: "الأكاديميات مستضافة على منصة Skool. اضغط \"انضم الآن\"، واشترك، ويمكنك الإلغاء في أي وقت بضغطة واحدة — eCom Arabia + اشتراك سنوي والبقية شهرية. أما ENE X eCom فالانضمام إليها عبر إنستغرام حسان." }
  },
  {
    q: { en: "Do I need capital to start?", ar: "هل أحتاج رأس مال للبدء؟" },
    a: { en: "Less than you think. The COD dropshipping model means you don't buy inventory upfront — you pay suppliers after customers order. You'll still want a small budget for ads; we teach you how to spend it wisely.",
         ar: "أقل مما تتخيل. نموذج الدروبشيبينغ بالدفع عند الاستلام يعني أنك لا تشتري مخزوناً مسبقاً — تدفع للمورّد بعد طلب الزبون. ستحتاج ميزانية صغيرة للإعلانات، ونعلّمك كيف تنفقها بذكاء." }
  },
  {
    q: { en: "Will I get direct support?", ar: "هل سأحصل على دعم مباشر؟" },
    a: { en: "This is what students mention most in reviews: up to 8 live calls a week in eCom Arabia +, 3 follow-up Zoom meetings in Zambeel Dropshipping, and direct answers from Mohammad when you hit a problem — before and after you finish the courses.",
         ar: "هذا أكثر ما يذكره الطلاب في تقييماتهم: حتى ٨ اجتماعات مباشرة أسبوعية في eCom Arabia +، و٣ اجتماعات زوم للمتابعة في دروبشيبينغ زنبيل، وإجابات مباشرة من محمد عند أي مشكلة — قبل إنهاء الكورسات وبعدها." }
  },
  {
    q: { en: "What is Iraq e-Com?", ar: "ما هي أكاديمية التجارة الإلكترونية في العراق؟" },
    a: { en: "Iraq e-Com is now open at $49/month, in collaboration with Exporta — sourcing and shipping from China into Iraq, warehousing inside the country, 100% cash on delivery, and 2 weekly follow-up meetings. Built for a market of 45 million with almost no competition.",
         ar: "أكاديمية العراق متاحة الآن بسعر ٤٩$ شهرياً، بالتعاون مع Exporta — توريد وشحن من الصين إلى داخل العراق، وتخزين داخل البلد، و١٠٠٪ دفع عند الاستلام، مع اجتماعين أسبوعيين للمتابعة. مصممة لسوق من ٤٥ مليون نسمة بمنافسة شبه معدومة." }
  }
];

/* ------------------------------------------------------------
   Tools & platforms taught / partnered with (marquee strip)
   ------------------------------------------------------------ */
const TOOLS = [
  { id: "meta",         label: "Meta Ads",             img: "assets/tools/meta.png" },
  { id: "tiktok",       label: "TikTok Ads",           img: "assets/tools/tiktok.png" },
  { id: "instagram",    label: "Instagram",            img: "assets/tools/instagram.png" },
  { id: "lightfunnels", label: "Lightfunnels",         img: "assets/tools/lightfunnels.png" },
  { id: "shopify",      label: "Shopify",              img: "assets/tools/shopify.png" },
  { id: "zambeel",      label: "Zambeel",              img: "assets/tools/zambeel.png" },
  { id: "exporta",      label: "Exporta",              img: "assets/tools/exporta.svg" },
  { id: "mutual",       label: "Mutual Dropshipping",  img: "assets/tools/mutual.png" },
  { id: "transfer",     label: "Arabia Pay",           img: "assets/tools/transfer.svg" },
  { id: "googleads",    label: "Google Ads",           img: "assets/tools/googleads.png" },
  { id: "manychat",     label: "ManyChat",             img: "assets/tools/manychat.png" },
  { id: "higgsfield",   label: "Higgsfield",           img: "assets/tools/higgsfield.png" },
  { id: "canva",        label: "Canva",                img: "assets/tools/canva.png" },
  { id: "claude",       label: "Claude Code",          img: "assets/tools/claude.png" }
];

/* ------------------------------------------------------------
   Static chrome strings
   ------------------------------------------------------------ */
const I18N = {
  en: {
    skip: "Skip to content",
    nav_academies: "Academies",
    nav_reach: "The market",
    nav_road: "The road",
    nav_reviews: "Reviews",
    nav_faq: "FAQ",
    nav_join: "Join now",
    nav_tools: "Free tools",
    nav_new: "NEW",
    tool_globe_t: "Planet E-commerce",
    tool_globe_d: "Who sells, who buys, and how much they spend — country by country",
    tool_camera_t: "Camera Movement AI Prompts",
    tool_camera_d: "64 copy-ready moves for AI video tools",
    tool_colors_t: "Movie Color Palettes",
    tool_colors_d: "88 cinematic palettes — every code copy-ready",
    hero_eyebrow: "Arabia Academies · #1 Arabic academies in the world",
    hero_h1_a: "Four academies.",
    hero_h1_b: "One road to success.",
    hero_sub: "Join 3,500+ students learning e-commerce, dropshipping and AI in Arabic with Mohammad Odeh — building real online businesses since 2012.",
    hero_cta1: "Explore the academies",
    hero_cta2: "Watch students' results",
    hero_stat1: "students & members",
    hero_stat2: "practical courses",
    hero_stat3: "live calls every week",
    hero_stat4: "academies, one family",
    hero_scroll: "The road starts here",
    acad_eyebrow: "Stations on the road",
    acad_h2: "Choose your starting point",
    acad_sub: "Every academy is a station. Start where it matches your goal — the road is the same.",
    acad_open: "See what's inside",
    acad_members: "members",
    sheet_outline: "What you'll learn",
    sheet_includes: "What's included",
    sheet_join: "Join now on Skool",
    sheet_soon: "Opening 2026 — stay tuned",
    sheet_partner: "Visit partner",
    sheet_close: "Close",
    globe_eyebrow: "Your market",
    globe_h2: "One language. A world of buyers.",
    globe_sub: "You speak the language of 400 million people — and from anywhere in the Arab world, you can sell to the whole planet. Hover over any market to see what's waiting.",
    globe_hint: "Drag to spin · hover a country",
    globe_market: "e-commerce market",
    globe_growth: "yearly growth",
    globe_pop: "population",
    globe_shoppers: "shop online",
    globe_spend: "avg. spend / shopper / yr",
    globe_est: "Rounded public estimates, 2025–2026",
    globe_legend_arab: "Arab markets",
    globe_legend_world: "Top global markets",
    globe_stat1_v: "$6.5T+",
    globe_stat1_l: "global e-commerce by 2026 (est.)",
    globe_stat2_v: "400M+",
    globe_stat2_l: "Arabic speakers — your unfair advantage",
    globe_stat3_v: "70%+",
    globe_stat3_l: "of MENA orders paid cash on delivery",
    road_eyebrow: "The method",
    road_h2: "The road to success",
    road_sub: "The same four-stop road, in every academy.",
    mentor_eyebrow: "Your mentor",
    mentor_h2: "Mohammad Odeh",
    m_title: "Founder of Arabia Academies & Arabia Pay",
    mentor_p1: "It started in 2012, selling men's bracelets on Facebook — before Instagram even had ads. Since then: five brands, tens of millions spent on ads, and customers all over the world.",
    mentor_p2: "The teaching began during COVID, helping family and friends earn online — for free. Word spread, and those lessons became the Arabia academies. He still runs his own stores every day — what he teaches is simply what he does.",
    m_goal: "The goal for every student: generate tens of thousands — working from anywhere.",
    mentor_q: "“Work hard. Get up every time you fall. And never lose your parents' blessing — رضا الوالدين.”",
    m_f1: "in e-commerce since",
    m_f2: "brands of his own",
    m_f3_v: "Tens of $M",
    m_f3: "spent on ads",
    m_f4: "with students, weekly",
    m_ig: "Instagram",
    m_yt: "YouTube — free courses & student calls",
    m_featured: "Watch him talk:",
    m_pod1: "Podcast interview",
    m_pod2: "Podcast interview 2",
    t_eyebrow: "Student reviews",
    t_h2: "Real students. Real results.",
    t_sub: "Every quote below is a real comment from a real student — click any card to visit their profile.",
    t_featured_badge: "Verified · 71K followers",
    t_view: "Visit profile",
    faq_eyebrow: "Before you ask",
    faq_h2: "Questions, answered",
    cta_h2_a: "Your road starts",
    cta_h2_b: "today.",
    cta_sub: "Join eCom Arabia + now — or message Mohammad on WhatsApp and ask him anything first.",
    cta_main: "Join eCom Arabia +",
    cta_chat: "Chat on WhatsApp",
    wa_label: "Chat on WhatsApp",
    f_academies: "Academies",
    f_partners: "Partners",
    f_follow: "Follow Mohammad",
    f_soon: "Coming soon",
    f_tag: "Road to success",
    f_rights: "© 2026 Arabia Academies. All rights reserved.",
    f_est: "Market figures on this page are rounded public estimates.",
    f_privacy: "Privacy Policy",
    f_terms: "Terms of Use",
    cookie_text: "We use cookies — including Meta's tools — to improve your experience and measure how the site is used.",
    cookie_ok: "OK",
    lang_btn: "عربي"
  },
  ar: {
    skip: "تخطَّ إلى المحتوى",
    nav_academies: "الأكاديميات",
    nav_reach: "السوق",
    nav_road: "الطريق",
    nav_reviews: "التقييمات",
    nav_faq: "الأسئلة",
    nav_join: "انضم الآن",
    nav_tools: "أدوات مجانية",
    nav_new: "جديد",
    tool_globe_t: "كوكب التجارة الإلكترونية",
    tool_globe_d: "من يبيع، من يشتري، وكم ينفقون — دولة بدولة",
    tool_camera_t: "برومبتات حركات الكاميرا",
    tool_camera_d: "64 حركة جاهزة للنسخ لفيديوهات الذكاء الاصطناعي",
    tool_colors_t: "باليتات ألوان الأفلام",
    tool_colors_d: "88 باليت سينمائي — كل كود جاهز للنسخ",
    hero_eyebrow: "أكاديميات أرابيا · الأكاديميات العربية رقم ١ في العالم",
    hero_h1_a: "أربع أكاديميات.",
    hero_h1_b: "طريق واحد إلى النجاح.",
    hero_sub: "انضم إلى أكثر من ٣٥٠٠ طالب يتعلمون التجارة الإلكترونية والدروبشيبينغ والذكاء الاصطناعي بالعربية مع محمد عودة لبناء مشاريع أونلاين حقيقية منذ 2012.",
    hero_cta1: "استكشف الأكاديميات",
    hero_cta2: "شاهد نتائج الطلاب",
    hero_stat1: "طالب وعضو",
    hero_stat2: "كورس عملي",
    hero_stat3: "اجتماعات مباشرة أسبوعية",
    hero_stat4: "أكاديميات، عائلة واحدة",
    hero_scroll: "الطريق يبدأ من هنا",
    acad_eyebrow: "محطات الطريق",
    acad_h2: "اختر نقطة انطلاقك",
    acad_sub: "كل أكاديمية محطة. ابدأ من حيث يناسب هدفك — فالطريق واحد.",
    acad_open: "اطّلع على التفاصيل",
    acad_members: "عضو",
    sheet_outline: "ماذا ستتعلم",
    sheet_includes: "ماذا يشمل الاشتراك",
    sheet_join: "انضم الآن عبر Skool",
    sheet_soon: "الافتتاح 2026 — ترقّبوا",
    sheet_partner: "زيارة الشريك",
    sheet_close: "إغلاق",
    globe_eyebrow: "سوقك",
    globe_h2: "لغة واحدة. عالم كامل من المشترين.",
    globe_sub: "أنت تتحدث لغة ٤٠٠ مليون إنسان — ومن أي مكان في الوطن العربي يمكنك البيع للعالم كله. مرّر المؤشر فوق أي سوق لترى ما ينتظرك.",
    globe_hint: "اسحب لتدوير الكرة · مرّر فوق أي دولة",
    globe_market: "سوق التجارة الإلكترونية",
    globe_growth: "نمو سنوي",
    globe_pop: "عدد السكان",
    globe_shoppers: "يتسوقون أونلاين",
    globe_spend: "متوسط إنفاق المتسوق سنوياً",
    globe_est: "تقديرات عامة مقرّبة، 2025–2026",
    globe_legend_arab: "الأسواق العربية",
    globe_legend_world: "أكبر الأسواق العالمية",
    globe_stat1_v: "+٦٫٥ تريليون$",
    globe_stat1_l: "حجم التجارة الإلكترونية عالمياً بحلول 2026 (تقديري)",
    globe_stat2_v: "+٤٠٠ مليون",
    globe_stat2_l: "ناطق بالعربية — ميزتك التي لا تُنافس",
    globe_stat3_v: "+٧٠٪",
    globe_stat3_l: "من طلبات المنطقة تُدفع عند الاستلام",
    road_eyebrow: "المنهجية",
    road_h2: "طريق النجاح",
    road_sub: "الطريق نفسه بمحطاته الأربع، في كل أكاديمية.",
    mentor_eyebrow: "مدرّبك",
    mentor_h2: "محمد عودة",
    m_title: "مؤسس Arabia Pay وأكاديميات أرابيا",
    mentor_p1: "بدأت الحكاية عام 2012 ببيع أساور رجالية على فيسبوك — قبل أن توجد إعلانات على إنستغرام أصلاً. منذ ذلك الحين: خمس علامات تجارية، عشرات الملايين على الإعلانات، وعملاء في كل أنحاء العالم.",
    mentor_p2: "بدأ التعليم في فترة كورونا بمساعدة أهله وأصدقائه على تحقيق دخل من الإنترنت — مجاناً. انتشر الخبر، وتحوّلت تلك الدروس إلى أكاديميات أرابيا. وما زال يدير متاجره الخاصة كل يوم — فما يعلّمه هو ببساطة ما يفعله.",
    m_goal: "الهدف لكل طالب: تحقيق عشرات الآلاف — والعمل من أي مكان.",
    mentor_q: "«اعمل بجد. انهض كلما وقعت. ولا تفرّط أبداً برضا الوالدين.»",
    m_f1: "في التجارة الإلكترونية منذ",
    m_f2: "علامات تجارية يملكها",
    m_f3_v: "عشرات الملايين $",
    m_f3: "أُنفقت على الإعلانات",
    m_f4: "أسبوعياً مع الطلاب",
    m_ig: "إنستغرام",
    m_yt: "يوتيوب — كورسات مجانية ولقاءات الطلاب",
    m_featured: "شاهده يتحدث:",
    m_pod1: "مقابلة بودكاست",
    m_pod2: "مقابلة بودكاست ٢",
    t_eyebrow: "تقييمات الطلاب",
    t_h2: "طلاب حقيقيون. نتائج حقيقية.",
    t_sub: "كل اقتباس أدناه تعليق حقيقي من طالب حقيقي — اضغط أي بطاقة لزيارة حسابه.",
    t_featured_badge: "حساب موثّق · ٧١ ألف متابع",
    t_view: "زيارة الحساب",
    faq_eyebrow: "قبل أن تسأل",
    faq_h2: "أسئلة شائعة",
    cta_h2_a: "طريقك يبدأ",
    cta_h2_b: "اليوم.",
    cta_sub: "انضم إلى eCom Arabia + الآن — أو راسل محمد على واتساب واسأله ما تشاء أولاً.",
    cta_main: "انضم إلى eCom Arabia +",
    cta_chat: "راسلنا على واتساب",
    wa_label: "تواصل عبر واتساب",
    f_academies: "الأكاديميات",
    f_partners: "الشركاء",
    f_follow: "تابع محمد",
    f_soon: "قريباً",
    f_tag: "طريقك إلى النجاح",
    f_rights: "© 2026 أكاديميات أرابيا. جميع الحقوق محفوظة.",
    f_est: "أرقام الأسواق في هذه الصفحة تقديرات عامة مقرّبة.",
    f_privacy: "سياسة الخصوصية",
    f_terms: "شروط الاستخدام",
    cookie_text: "نستخدم ملفات تعريف الارتباط (كوكيز) — بما فيها أدوات ميتا — لتحسين تجربتك وقياس كيفية استخدام الموقع.",
    cookie_ok: "حسناً",
    lang_btn: "EN"
  }
};
