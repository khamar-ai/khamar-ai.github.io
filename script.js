(function(){
  const year = document.getElementById('year');
  if(year){ year.textContent = new Date().getFullYear(); }

  const dict = {
    bn: {
      nav_about: "আমাদের সম্পর্কে",
      nav_work: "আমাদের কাজ",
      nav_impact: "প্রভাব",
      nav_team: "টিম",
      nav_news: "সংবাদ",
      nav_contact: "যোগাযোগ",
      hero_title_en: "Your intelligent farming partner.",
      hero_title_bn: "খামারের বুদ্ধিমান সাথী।",
      hero_sub: "দক্ষিণ এশিয়ার কৃষকদের জন্য সহজলভ্য ও সাশ্রয়ী কৃষি বুদ্ধিমত্তা পৌঁছে দিই।",
      cta_learn: "আরও জানুন",
      cta_connect: "যোগাযোগ করুন",
      about_title: "আমাদের সম্পর্কে",
      about_mission_h: "মিশন",
      about_mission: "khamar.ai দক্ষিণ এশিয়ার কৃষকদের পরিমাপযোগ্য লাভ নিশ্চিত করে AI-চালিত টুলসের মাধ্যমে — কম সংযোগযুক্ত, বহুভাষিক পরিবেশের জন্য নকশাকৃত।",
      about_vision_h: "ভিশন",
      about_vision: "দক্ষিণ এশিয়ার প্রতিটি কৃষকের বিশ্বস্ত ইন্টেলিজেন্স পার্টনার হওয়া।",
      val_farmer_h: "ফার্মার-ফার্স্ট",
      val_farmer_p: "টেকনোলজি কৃষকের জন্য কাজ করবে — উল্টোটা নয়।",
      val_evidence_h: "এভিডেন্স-বেসড",
      val_evidence_p: "বৈজ্ঞানিক ও তথ্য-নির্ভর অনুশীলনে ভিত্তি।",
      val_access_h: "অ্যাক্সেসিবল",
      val_access_p: "অফলাইন, বাংলা এবং কম খরচের ডিভাইসের জন্য উপযোগী।",
      val_integrity_h: "ইন্টেগ্রিটি",
      val_integrity_p: "স্বচ্ছ, নৈতিক এবং ডেটা-দায়িত্বশীল উদ্ভাবন।",
      work_title: "আমাদের কাজ",
      work_ai_h: "ফার্ম ইন্টেলিজেন্স",
      work_ai_p: "AI ও ডেটা দিয়ে পশুপালন ও ফসল—দু’ক্ষেত্রেই সিদ্ধান্ত উন্নত করা।",
      work_sust_h: "টেকসই উৎপাদনশীলতা",
      work_sust_p: "দায়িত্বশীলভাবে খরচ কমানো ও উৎপাদন বাড়ানো।",
      work_digital_h: "ডিজিটাল ট্রান্সফরমেশন",
      work_digital_p: "বহুভাষিক, অফলাইন-সক্ষম টুল দিয়ে গ্রামীণ টেক-গ্যাপ দূর করা।",
      work_science_h: "সায়েন্টিফিক পার্টনারশিপ",
      work_science_p: "স্বীকৃত বিশেষজ্ঞ ও প্রতিষ্ঠানের সাথে সহযোগিতা।",
      impact_title: "ইমপ্যাক্ট ও ভ্যালুজ",
      impact_b1: "অপারেশনে <em>২৫% পর্যন্ত খরচ সাশ্রয়</em>।",
      impact_b2: "<em>কম সংযোগ</em> পরিবেশের জন্য নকশা।",
      impact_b3: "<em>বাংলা-ফার্স্ট</em> অভিজ্ঞতা।",
      impact_b4: "<em>দায়বদ্ধ AI</em> — ডেটা বিক্রি নয়, শুধুই সেবা উন্নত করতে ব্যবহৃত।",
      impact_quote: "“যে প্রযুক্তি আপনার ভাষায় কথা বলে, আপনার মাটিকে বোঝে।”",
      team_title: "টিম ও নেতৃত্ব",
      team_monir_role: "ফাউন্ডার ও সিইও",
      team_monir_bio: "১২+ বছরের টেক, এডুকেশন ও অ্যাগটেক অভিজ্ঞতা।",
      team_km_role: "ডিরেক্টর ও অ্যাডভাইজর",
      team_km_bio: "ব্যবসা ও অডিটে ৩০+ বছরের অভিজ্ঞ চার্টার্ড অ্যাকাউন্ট্যান্ট।",
      news_title: "সংবাদ ও আপডেট",
      news_1: "khamar.ai বাংলাদেশে নিবন্ধিত (অক্টোবর ২০২৫)",
      news_2: "ডোমেইন সিকিউরড এবং ব্র্যান্ড আইডেন্টিটি ফাইনাল",
      news_3: "আমাদের যাত্রা অনুসরণ করুন LinkedIn এবং Facebook-এ",
      contact_title: "যোগাযোগ / কনেক্ট",
      contact_name: "নাম",
      contact_email: "ইমেইল",
      contact_message: "বার্তা",
      contact_send: "পাঠান",
      connect_title: "কনেক্ট",
      privacy_title: "প্রাইভেসি ও লিগাল",
      privacy_text: "Your data, your control.\nWe collect only necessary information to improve agricultural intelligence tools.\nWe never sell or share your data without consent.\nআপনি যেকোনো সময় আপনার তথ্য দেখতে ও মুছে ফেলতে পারেন।",
      footer_privacy: "প্রাইভেসি"
    },
    en: {
      nav_about: "About",
      nav_work: "Our Work",
      nav_impact: "Impact",
      nav_team: "Team",
      nav_news: "News",
      nav_contact: "Contact",
      hero_title_en: "Your intelligent farming partner.",
      hero_title_bn: "খামারের বুদ্ধিমান সাথী।",
      hero_sub: "Empowering farmers across South Asia through accessible, affordable agricultural intelligence.",
      cta_learn: "Learn More",
      cta_connect: "Connect With Us",
      about_title: "About Us",
      about_mission_h: "Mission",
      about_mission: "khamar.ai delivers measurable ROI to South Asian farmers through AI-powered agricultural tools designed for low-connectivity, multilingual environments—starting with feed optimization and expanding to comprehensive farm intelligence.",
      about_vision_h: "Vision",
      about_vision: "To be the trusted intelligence partner for every farmer in South Asia, transforming traditional agriculture through accessible, affordable AI.",
      val_farmer_h: "Farmer-First",
      val_farmer_p: "Technology that works for farmers, not the other way around.",
      val_evidence_h: "Evidence-Based",
      val_evidence_p: "Grounded in scientific and data-driven practices.",
      val_access_h: "Accessible",
      val_access_p: "Works offline, in Bangla, and on low-cost devices.",
      val_integrity_h: "Integrity",
      val_integrity_p: "Transparent, ethical, and data-responsible innovation.",
      work_title: "Our Work",
      work_ai_h: "Farm Intelligence",
      work_ai_p: "Using AI and data to improve decision-making across livestock and crop sectors.",
      work_sust_h: "Sustainable Productivity",
      work_sust_p: "Helping farmers reduce costs and improve yields responsibly.",
      work_digital_h: "Digital Transformation",
      work_digital_p: "Bridging rural technology gaps with multilingual, offline-capable tools.",
      work_science_h: "Scientific Partnership",
      work_science_p: "Collaborating with agricultural experts and institutions for validated insights.",
      impact_title: "Impact & Values",
      impact_b1: "Up to <em>25% cost savings</em> in operational efficiency.",
      impact_b2: "Designed for <em>low-connectivity environments</em>.",
      impact_b3: "<em>Bangla-first</em> experience.",
      impact_b4: "<em>AI with accountability</em>—data never sold, only used to improve services.",
      impact_quote: "“Technology that speaks your language and understands your land.”",
      team_title: "Team & Leadership",
      team_monir_role: "Founder & CEO",
      team_monir_bio: "Software architect and entrepreneur with 12+ years of experience in technology, education, and AgTech innovation.",
      team_km_role: "Director & Advisor",
      team_km_bio: "Chartered Accountant and financial governance advisor with 30+ years in business and audit leadership.",
      news_title: "News & Updates",
      news_1: "khamar.ai incorporated in Bangladesh (Oct 2025)",
      news_2: "Domain secured and brand identity finalized",
      news_3: "Follow our journey on LinkedIn and Facebook",
      contact_title: "Contact / Connect",
      contact_name: "Name",
      contact_email: "Email",
      contact_message: "Message",
      contact_send: "Send",
      connect_title: "Connect",
      privacy_title: "Privacy & Legal",
      privacy_text: "Your data, your control.\nWe collect only necessary information to improve agricultural intelligence tools.\nWe never sell or share your data without consent.\nআপনি যেকোনো সময় আপনার তথ্য দেখতে ও মুছে ফেলতে পারেন।",
      footer_privacy: "Privacy"
    }
  };

  function setLang(lang){
    const strings = dict[lang] || dict.en;
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if(strings[key] !== undefined){
        el.innerHTML = strings[key];
      }
    });
    document.getElementById('lang-en').setAttribute('aria-pressed', lang==='en' ? 'true':'false');
    document.getElementById('lang-bn').setAttribute('aria-pressed', lang==='bn' ? 'true':'false');
    localStorage.setItem('khamar_lang', lang);
  }

  document.getElementById('lang-en').addEventListener('click', ()=> setLang('en'));
  document.getElementById('lang-bn').addEventListener('click', ()=> setLang('bn'));

  const saved = localStorage.getItem('khamar_lang') || 'en';
  setLang(saved);
})();