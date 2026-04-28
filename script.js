const yearEl = document.getElementById("year");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const langToggle = document.getElementById("langToggle");
const themeToggle = document.getElementById("themeToggle");
const logoMarks = document.querySelectorAll(".logo-mark-image");
const bookingForm = document.getElementById("bookingForm");
const bookingService = document.getElementById("bookingService");
const bookingDate = document.getElementById("bookingDate");
const bookingTime = document.getElementById("bookingTime");
const bookingMessage = document.getElementById("bookingMessage");
const timeSlots = document.getElementById("timeSlots");
const contactForm = document.getElementById("contactForm");
const contactMessage = document.getElementById("contactMessage");
const serviceCards = document.querySelectorAll(".selectable-service");

const availableTimes = ["09:00 AM", "10:30 AM", "12:00 PM", "02:00 PM", "03:30 PM", "05:00 PM"];
const LANG_KEY = "preventech_lang";
const THEME_KEY = "preventech_theme";

const translations = {
  en: {
    "meta.title": "PrevenTech | Smarter Healthcare Solutions",
    "nav.menu": "Menu",
    "nav.about": "About",
    "nav.why": "Why Us",
    "nav.solutions": "Solutions",
    "nav.impact": "Impact",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "hero.eyebrow": "Saudi HealthTech Innovation",
    "hero.headline": "Innovative Healthcare Solutions for a Smarter Future",
    "hero.subheadline": "Preventive Care • Smart Health Solutions • Medical Innovation",
    "hero.description":
      "We empower healthcare providers with AI-driven solutions that enhance patient outcomes, optimize operations, and enable proactive healthcare.",
    "hero.ctaServices": "Explore Services",
    "hero.ctaBooking": "Book a Meeting",
    "hero.panelTitle": "Healthcare Built For The Future",
    "hero.panel.focusLabel": "Focus",
    "hero.panel.focusValue": "Preventive Healthcare",
    "hero.panel.techLabel": "Technology",
    "hero.panel.techValue": "AI-Powered Solutions",
    "hero.panel.marketLabel": "Market",
    "hero.panel.marketValue": "Saudi Healthcare Ecosystem",
    "hero.panel.approachLabel": "Approach",
    "hero.panel.approachValue": "Scalable & Sustainable",
    "about.eyebrow": "About Us",
    "about.title": "Driving Health Innovation Through Prevention",
    "about.description":
      "PrevenTech is a Saudi-based health technology company focused on innovation, prevention, and intelligent healthcare systems.",
    "about.missionTitle": "Mission",
    "about.missionText": "Deliver high-quality healthcare solutions driven by innovation and prevention.",
    "about.visionTitle": "Vision",
    "about.visionText": "To be a leader in preventive and sustainable healthcare solutions.",
    "about.valuesTitle": "Core Values",
    "about.values.innovation": "Innovation",
    "about.values.quality": "Quality",
    "about.values.safety": "Patient Safety",
    "about.values.reliability": "Reliability",
    "why.eyebrow": "Why Choose Us",
    "why.title": "Reliable Expertise for Real Healthcare Impact",
    "why.cards.team": "Highly experienced team",
    "why.cards.saudi": "Saudi-based professionals",
    "why.cards.quality": "High quality & reliability standards",
    "why.cards.ai": "AI-driven healthcare innovation",
    "why.cards.scalable": "Scalable and sustainable solutions",
    "solutions.eyebrow": "Our Solutions",
    "solutions.title": "Products Built Inside PrevenTech",
    "solutions.mointak.title": "Mo'eentech (معينتك)",
    "solutions.mointak.subtitle": "AI-powered diabetic foot care system",
    "solutions.mointak.f1": "Uses image analysis to detect risks early",
    "solutions.mointak.f2": "Prioritizes patients based on severity",
    "solutions.mointak.f3": "Reduces complications and amputations",
    "solutions.healora.subtitle": "AI-powered hospital analytics platform",
    "solutions.healora.f1": "Predicts patient flow and discharge timing",
    "solutions.healora.f2": "Optimizes hospital operations",
    "solutions.healora.f3": "Reduces waiting time and improves efficiency",
    "impact.eyebrow": "Our Impact",
    "impact.title": "Results That Support Better Healthcare",
    "impact.c1": "Reduction in complications",
    "impact.c2": "Improvement in efficiency",
    "impact.c3Title": "Vision 2030",
    "impact.c3Text": "Aligned with Saudi healthcare transformation goals",
    "services.eyebrow": "Our Services",
    "services.title": "Corporate Healthcare Technology Services",
    "services.cards.consulting.title": "Healthcare Consulting",
    "services.cards.consulting.text": "Strategic guidance for digital health transformation and quality improvement.",
    "services.cards.ai.title": "AI Healthcare Solutions",
    "services.cards.ai.text": "Data-driven tools that support diagnosis, prioritization, and clinical decisions.",
    "services.cards.preventive.title": "Preventive Care Programs",
    "services.cards.preventive.text": "Proactive care frameworks designed to reduce risk and improve patient outcomes.",
    "services.cards.hospital.title": "Hospital Optimization Systems",
    "services.cards.hospital.text": "Operational systems that optimize flow, improve capacity, and reduce wait times.",
    "booking.eyebrow": "Meeting Booking",
    "booking.title": "Schedule a Service Meeting",
    "booking.description":
      "Communication is handled exclusively through scheduled meetings. Select a service, choose an available date and time, then confirm your booking.",
    "booking.selectService": "Select Service",
    "booking.chooseService": "Choose a service",
    "booking.selectDate": "Select Date",
    "booking.selectTime": "Select Time",
    "booking.confirm": "Confirm Booking",
    "contact.eyebrow": "Contact",
    "contact.title": "Let’s Build Better Healthcare Together",
    "contact.emailLabel": "Email",
    "contact.phoneLabel": "Phone",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.service": "Service",
    "contact.form.message": "Message",
    "contact.form.submit": "Send Message",
    "footer.tagline": "Together Towards Better Healthcare",
    "footer.rights": "PrevenTech. All rights reserved.",
    "msg.bookingMissing": "Please select a service, date, and available time.",
    "msg.bookingConfirmed":
      "Booking confirmed for {service} on {date} at {time}. Our team will contact you by email.",
    "msg.contactThanks": "Thanks for reaching out. We will reply via email shortly.",
  },
  ar: {
    "meta.title": "بريفن تك | حلول رعاية صحية أكثر ذكاءً",
    "nav.menu": "القائمة",
    "nav.about": "من نحن",
    "nav.why": "لماذا نحن",
    "nav.solutions": "الحلول",
    "nav.impact": "الأثر",
    "nav.services": "الخدمات",
    "nav.contact": "تواصل معنا",
    "hero.eyebrow": "ابتكار التقنية الصحية في السعودية",
    "hero.headline": "حلول رعاية صحية مبتكرة لمستقبل أذكى",
    "hero.subheadline": "الرعاية الوقائية • حلول صحية ذكية • ابتكار طبي",
    "hero.description":
      "نمكّن مقدمي الرعاية الصحية بحلول مدعومة بالذكاء الاصطناعي تعزز نتائج المرضى، وتُحسّن العمليات، وتُمكّن الرعاية الاستباقية.",
    "hero.ctaServices": "استعراض الخدمات",
    "hero.ctaBooking": "حجز اجتماع",
    "hero.panelTitle": "رعاية صحية مصممة للمستقبل",
    "hero.panel.focusLabel": "التركيز",
    "hero.panel.focusValue": "الرعاية الوقائية",
    "hero.panel.techLabel": "التقنية",
    "hero.panel.techValue": "حلول مدعومة بالذكاء الاصطناعي",
    "hero.panel.marketLabel": "السوق",
    "hero.panel.marketValue": "منظومة الرعاية الصحية السعودية",
    "hero.panel.approachLabel": "المنهجية",
    "hero.panel.approachValue": "قابلة للتوسع ومستدامة",
    "about.eyebrow": "من نحن",
    "about.title": "نقود ابتكار الرعاية الصحية عبر الوقاية",
    "about.description":
      "بريفن تك شركة تقنية صحية سعودية تركّز على الابتكار والوقاية وأنظمة الرعاية الصحية الذكية.",
    "about.missionTitle": "رسالتنا",
    "about.missionText": "تقديم حلول رعاية صحية عالية الجودة مدفوعة بالابتكار والوقاية.",
    "about.visionTitle": "رؤيتنا",
    "about.visionText": "أن نكون روّاداً في حلول الرعاية الوقائية والمستدامة.",
    "about.valuesTitle": "قيمنا",
    "about.values.innovation": "الابتكار",
    "about.values.quality": "الجودة",
    "about.values.safety": "سلامة المرضى",
    "about.values.reliability": "الموثوقية",
    "why.eyebrow": "لماذا بريفن تك",
    "why.title": "خبرة موثوقة لأثر صحي حقيقي",
    "why.cards.team": "فريق ذو خبرة عالية",
    "why.cards.saudi": "كوادر سعودية",
    "why.cards.quality": "معايير جودة وموثوقية عالية",
    "why.cards.ai": "ابتكار صحي مدعوم بالذكاء الاصطناعي",
    "why.cards.scalable": "حلول قابلة للتوسع ومستدامة",
    "solutions.eyebrow": "حلولنا",
    "solutions.title": "منتجات ضمن منظومة بريفن تك",
    "solutions.mointak.title": "🟢 معينتك (Mointak)",
    "solutions.mointak.subtitle": "نظام رعاية قدم السكري بالذكاء الاصطناعي",
    "solutions.mointak.f1": "يستخدم تحليل الصور لاكتشاف المخاطر مبكراً",
    "solutions.mointak.f2": "يرتّب أولوية المرضى حسب شدة الحالة",
    "solutions.mointak.f3": "يقلّل المضاعفات وعمليات البتر",
    "solutions.healora.subtitle": "منصة تحليلات المستشفيات بالذكاء الاصطناعي",
    "solutions.healora.f1": "يتنبأ بتدفق المرضى وتوقيت الخروج",
    "solutions.healora.f2": "يحسّن عمليات وإدارة المستشفى",
    "solutions.healora.f3": "يقلّل وقت الانتظار ويرفع الكفاءة",
    "impact.eyebrow": "الأثر",
    "impact.title": "نتائج تدعم رعاية صحية أفضل",
    "impact.c1": "خفض المضاعفات بنسبة 50%",
    "impact.c2": "تحسين الكفاءة بنسبة 30%",
    "impact.c3Title": "رؤية 2030",
    "impact.c3Text": "متوافق مع أهداف التحول الصحي في المملكة",
    "services.eyebrow": "خدماتنا",
    "services.title": "خدمات تقنية صحية للشركات والمؤسسات",
    "services.cards.consulting.title": "استشارات الرعاية الصحية",
    "services.cards.consulting.text": "استشارات استراتيجية للتحول الصحي الرقمي وتحسين الجودة.",
    "services.cards.ai.title": "حلول الذكاء الاصطناعي الصحي",
    "services.cards.ai.text": "أدوات قائمة على البيانات تدعم التشخيص وترتيب الأولويات والقرارات السريرية.",
    "services.cards.preventive.title": "برامج الرعاية الوقائية",
    "services.cards.preventive.text": "أطر وقائية استباقية لتقليل المخاطر وتحسين النتائج الصحية.",
    "services.cards.hospital.title": "أنظمة تحسين المستشفيات",
    "services.cards.hospital.text": "أنظمة تشغيلية لتحسين التدفق ورفع السعة وتقليل وقت الانتظار.",
    "booking.eyebrow": "حجز اجتماع",
    "booking.title": "جدولة اجتماع للخدمة",
    "booking.description":
      "التواصل يتم حصراً عبر الاجتماعات المجدولة. اختر الخدمة، ثم اختر التاريخ والوقت المتاح، ثم أكد الحجز.",
    "booking.selectService": "اختر الخدمة",
    "booking.chooseService": "اختر خدمة",
    "booking.selectDate": "اختر التاريخ",
    "booking.selectTime": "اختر الوقت",
    "booking.confirm": "تأكيد الحجز",
    "contact.eyebrow": "تواصل معنا",
    "contact.title": "معاً نحو رعاية صحية أفضل",
    "contact.emailLabel": "البريد",
    "contact.phoneLabel": "الهاتف",
    "contact.form.name": "الاسم",
    "contact.form.email": "البريد الإلكتروني",
    "contact.form.service": "الخدمة",
    "contact.form.message": "الرسالة",
    "contact.form.submit": "إرسال",
    "footer.tagline": "معاً نحو رعاية صحية أفضل",
    "footer.rights": "بريفن تك. جميع الحقوق محفوظة.",
    "msg.bookingMissing": "فضلاً اختر الخدمة والتاريخ والوقت المتاح.",
    "msg.bookingConfirmed": "تم تأكيد حجز {service} بتاريخ {date} الساعة {time}. سيتم التواصل معك عبر البريد الإلكتروني.",
    "msg.contactThanks": "شكراً لتواصلك. سنرد عليك عبر البريد الإلكتروني قريباً.",
  },
};

function getLang() {
  const fromStorage = localStorage.getItem(LANG_KEY);
  if (fromStorage === "ar" || fromStorage === "en") {
    return fromStorage;
  }
  const docLang = document.documentElement.lang;
  if (docLang === "ar" || docLang === "en") {
    return docLang;
  }
  return "en";
}

function t(key, lang) {
  const pack = translations[lang] || translations.en;
  return pack[key] ?? translations.en[key] ?? key;
}

function format(template, vars) {
  return template.replace(/\{(\w+)\}/g, (_, name) => (vars[name] != null ? String(vars[name]) : ""));
}

function applyTranslations(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!key) return;
    el.textContent = t(key, lang);
  });
  document.title = t("meta.title", lang);

  if (langToggle) {
    const nextLang = lang === "ar" ? "English" : "العربية";
    langToggle.setAttribute("aria-label", `Switch language to ${nextLang}`);
    langToggle.setAttribute("title", nextLang);
  }
}

function getTheme() {
  const fromStorage = localStorage.getItem(THEME_KEY);
  if (fromStorage === "light" || fromStorage === "dark") {
    return fromStorage;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  logoMarks.forEach((logo) => {
    const lightLogo = logo.getAttribute("data-light-logo");
    const darkLogo = logo.getAttribute("data-dark-logo");
    const nextLogo = theme === "dark" ? darkLogo : lightLogo;
    if (nextLogo) {
      logo.setAttribute("src", nextLogo);
    }
  });
  if (themeToggle) {
    const nextMode = theme === "dark" ? "light" : "dark";
    themeToggle.setAttribute("aria-label", `Switch to ${nextMode} mode`);
    themeToggle.setAttribute("title", `${nextMode[0].toUpperCase()}${nextMode.slice(1)} mode`);
  }
}

function serviceLabel(serviceId, lang) {
  const map = {
    consulting: "services.cards.consulting.title",
    ai: "services.cards.ai.title",
    preventive: "services.cards.preventive.title",
    hospital: "services.cards.hospital.title",
  };
  const key = map[serviceId];
  return key ? t(key, lang) : serviceId;
}

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

let currentLang = getLang();
applyTranslations(currentLang);
let currentTheme = getTheme();
applyTheme(currentTheme);

if (langToggle) {
  langToggle.addEventListener("click", () => {
    currentLang = currentLang === "ar" ? "en" : "ar";
    localStorage.setItem(LANG_KEY, currentLang);
    applyTranslations(currentLang);
    if (bookingMessage) bookingMessage.textContent = "";
    if (contactMessage) contactMessage.textContent = "";
  });
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    localStorage.setItem(THEME_KEY, currentTheme);
    applyTheme(currentTheme);
  });
}

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    mainNav.classList.toggle("open");
  });
}

if (bookingDate) {
  const today = new Date().toISOString().split("T")[0];
  bookingDate.setAttribute("min", today);
}

function renderTimeSlots() {
  if (!timeSlots) {
    return;
  }
  timeSlots.innerHTML = "";
  availableTimes.forEach((time) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "time-slot";
    button.textContent = time;
    button.addEventListener("click", () => {
      document.querySelectorAll(".time-slot").forEach((slot) => slot.classList.remove("active"));
      button.classList.add("active");
      if (bookingTime) {
        bookingTime.value = time;
      }
    });
    timeSlots.appendChild(button);
  });
}

serviceCards.forEach((card) => {
  const selectService = () => {
    serviceCards.forEach((item) => item.classList.remove("active"));
    card.classList.add("active");
    if (bookingService) {
      bookingService.value = card.dataset.service || "";
    }
    window.location.hash = "booking";
  };

  card.addEventListener("click", selectService);
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      selectService();
    }
  });
});

if (bookingForm && bookingMessage) {
  renderTimeSlots();
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const service = bookingService ? bookingService.value.trim() : "";
    const date = bookingDate ? bookingDate.value : "";
    const time = bookingTime ? bookingTime.value.trim() : "";

    if (!service || !date || !time) {
      bookingMessage.textContent = t("msg.bookingMissing", currentLang);
      return;
    }

    bookingMessage.textContent = format(t("msg.bookingConfirmed", currentLang), {
      service: serviceLabel(service, currentLang),
      date,
      time,
    });
    bookingForm.reset();
    if (bookingTime) {
      bookingTime.value = "";
    }
    document.querySelectorAll(".time-slot").forEach((slot) => slot.classList.remove("active"));
    serviceCards.forEach((item) => item.classList.remove("active"));
  });
}

if (contactForm && contactMessage) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    contactMessage.textContent = t("msg.contactThanks", currentLang);
    contactForm.reset();
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
