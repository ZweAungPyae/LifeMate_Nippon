
const translations = {
    ja: {
        navIntroduction: "紹介",
        navHome: "ホーム",
        navLifeGuide: "生活ガイド",
        navJapanese: "日本語学習",
        navJobs: "アルバイト",
        navContact: "お問い合わせ",

        heroTitle: "ようこそ、LifeMate Nipponへ",
        heroDescription: "日本でのより良い生活のための信頼できるパートナー",
        servicesTitle: "サービス一覧",

        lifeGuideTitle: "生活ガイド",
        lifeGuideDescription: "日本での生活に役立つ情報",
        japaneseTitle: "日本語学習",
        japaneseDescription: "日常生活で使う日本語を学びましょう",
        jobsTitle: "アルバイト",
        jobsDescription: "日本でアルバイトを探しましょう",

        introHeading: "紹介",
        aboutTitle: "LifeMate Nipponについて",
        introParagraph1: "LifeMate Nipponは、日本で生活する留学生や外国人をサポートするために作られたウェブサイトです。",
        introParagraph2: "日常生活、日本語学習、アルバイトに関する役立つ情報を提供しています。",
        introParagraph3: "私たちは、日本で生活する外国人や留学生をサポートするための情報を提供します。"
    },

    my: {
        navIntroduction: "မိတ်ဆက်",
        navHome: "ပင်မစာမျက်နှာ",
        navLifeGuide: "နေထိုင်မှုလမ်းညွှန်",
        navJapanese: "ဂျပန်ဘာသာလေ့လာခြင်း",
        navJobs: "အချိန်ပိုင်းအလုပ်",
        navContact: "ဆက်သွယ်ရန်",

        heroTitle: "LifeMate Nippon မှ ကြိုဆိုပါတယ်",
        heroDescription: "ဂျပန်နိုင်ငံမှာ ပိုမိုကောင်းမွန်စွာ နေထိုင်နိုင်ဖို့ ယုံကြည်စိတ်ချရတဲ့ မိတ်ဖက်",
        servicesTitle: "ကျွန်ုပ်တို့၏ ဝန်ဆောင်မှုများ",

        lifeGuideTitle: "နေထိုင်မှုလမ်းညွှန်",
        lifeGuideDescription: "ဂျပန်နိုင်ငံတွင် နေထိုင်ရန် အသုံးဝင်သော အချက်အလက်များ",
        japaneseTitle: "ဂျပန်ဘာသာလေ့လာခြင်း",
        japaneseDescription: "နေ့စဉ်ဘဝမှာ အသုံးပြုတဲ့ ဂျပန်ဘာသာစကားကို လေ့လာပါ",
        jobsTitle: "အချိန်ပိုင်းအလုပ်",
        jobsDescription: "ဂျပန်နိုင်ငံမှာ အချိန်ပိုင်းအလုပ် ရှာဖွေပါ",

        introHeading: "မိတ်ဆက်",
        aboutTitle: "LifeMate Nippon အကြောင်း",
        introParagraph1: "LifeMate Nippon သည် ဂျပန်နိုင်ငံတွင် နေထိုင်သော နိုင်ငံခြားကျောင်းသားများနှင့် နိုင်ငံခြားသားများကို ကူညီပံ့ပိုးရန် ဖန်တီးထားသော Website ဖြစ်သည်။",
        introParagraph2: "နေ့စဉ်လူနေမှုဘဝ၊ ဂျပန်ဘာသာစကားလေ့လာမှုနှင့် အချိန်ပိုင်းအလုပ်များအကြောင်း အသုံးဝင်သော အချက်အလက်များကို ပေးပါသည်။",
        introParagraph3: "ဂျပန်နိုင်ငံတွင် နေထိုင်သော နိုင်ငံခြားသားများနှင့် ကျောင်းသားများအတွက် အထောက်အကူဖြစ်စေမည့် အချက်အလက်များကို ကျွန်ုပ်တို့ ပေးအပ်ပါသည်။"
    },

    en: {
        navIntroduction: "Introduction",
        navHome: "Home",
        navLifeGuide: "Life Guide",
        navJapanese: "Japanese Learning",
        navJobs: "Part-time Jobs",
        navContact: "Contact",

        heroTitle: "Welcome to LifeMate Nippon",
        heroDescription: "Your trusted partner for a better life in Japan",
        servicesTitle: "Our Services",

        lifeGuideTitle: "Life Guide",
        lifeGuideDescription: "Useful information for living in Japan",
        japaneseTitle: "Japanese Learning",
        japaneseDescription: "Learn Japanese for daily life",
        jobsTitle: "Part-time Jobs",
        jobsDescription: "Find part-time jobs in Japan",

        introHeading: "Introduction",
        aboutTitle: "About LifeMate Nippon",
        introParagraph1: "LifeMate Nippon is a website designed to support international students and foreigners living in Japan.",
        introParagraph2: "We provide useful information about daily life, Japanese language learning, and part-time jobs.",
        introParagraph3: "We provide information to support foreigners and international students living in Japan."
    }
};

const languageSelect = document.getElementById("languageSelect");

function changeLanguage(language) {
    const selectedTranslations = translations[language];

    if (!selectedTranslations) return;

    document.documentElement.lang = language;

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n;

        if (selectedTranslations[key]) {
            element.textContent = selectedTranslations[key];
        }
    });

    localStorage.setItem("selectedLanguage", language);
}

const savedLanguage = localStorage.getItem("selectedLanguage") || "ja";

if (languageSelect) {
    languageSelect.value = savedLanguage;
}

changeLanguage(savedLanguage);

if (languageSelect) {
    languageSelect.addEventListener("change", function () {
        changeLanguage(this.value);
    });
}
