import React, { createContext, useContext, useState } from 'react';

type Language = 'hi' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  hi: {
    // Navigation
    'nav.home': 'मुख्य पृष्ठ',
    'nav.about': 'हमारे बारे में',
    'nav.products': 'आभूषण',
    'nav.gallery': 'गैलरी',
    'nav.contact': 'संपर्क',
    
    // Tagline & Banner
    'tagline': 'विश्वास और शुद्धता का प्रतीक – भरत ज्वेलर्स, चाकिसैण।',
    'banner.trusted': '1979 से चाकीसैंण के विश्वसनीय ज्वैलर्स',
    
    // Home Page
    'home.hero.title': 'भरत ज्वेलर्स में आपका स्वागत है',
    'home.hero.subtitle': 'चाकिसैण, पौड़ी गढ़वाल में सोना-चांदी और हीरे के आभूषणों की विश्वसनीय दुकान',
    'home.hero.cta': 'अभी फोन करें',
    'home.hero.directions': 'दिशा-निर्देश',
    'home.trust.title': 'विश्वास और शुद्धता की परंपरा',
    'home.trust.description': 'श्री मनीष कुमार जी द्वारा स्थापित और उनके सुपुत्र राजा सोनी द्वारा संचालित, भरत ज्वेलर्स पिछले एक वर्ष से चाकिसैण क्षेत्र में गुणवत्ता और विश्वसनीयता का नाम बन चुका है।',
    'home.featured.title': 'खास संग्रह',
    'home.featured.subtitle': 'हमारे बेहतरीन आभूषण देखें',
    'home.why.title': 'हमें क्यों चुनें',
    'home.why.purity.title': '100% शुद्धता की गारंटी',
    'home.why.purity.desc': 'प्रमाणित शुद्धता के साथ सभी आभूषण',
    'home.why.trust.title': 'स्थानीय भरोसा',
    'home.why.trust.desc': 'पौड़ी गढ़वाल में विश्वसनीय नाम',
    'home.why.craft.title': 'पारंपरिक कारीगरी',
    'home.why.craft.desc': 'हाथ से बने पारंपरिक डिज़ाइन',
    'home.why.custom.title': 'कस्टम डिज़ाइन',
    'home.why.custom.desc': 'आपकी पसंद के मुताबिक आभूषण',
    
    // About Page
    'about.title': 'हमारी कहानी',
    'about.subtitle': 'विश्वास और उत्कृष्टता की विरासत',
    'about.founder.title': 'हमारी विरासत',
    'about.founder.description': 'भरत ज्वेलर्स की नींव श्री मनीष कुमार जी ने रखी थी, जो ईमानदारी, बेहतरीन गुणवत्ता और ग्राहकों की संतुष्टि के लिए जाने जाते हैं। आज उनके सुपुत्र राजा सोनी पिछले एक साल से दुकान को सफलतापूर्वक चला रहे हैं।',
    'about.values.title': 'हमारे मूल्य',
    'about.values.honesty': 'ईमानदारी और पारदर्शिता',
    'about.values.quality': 'उच्च गुणवत्ता',
    'about.values.tradition': 'पारंपरिक कारीगरी',
    'about.values.satisfaction': 'ग्राहक संतुष्टि',
    
    // Products
    'products.title': 'हमारा आभूषण संग्रह',
    'products.subtitle': 'हर खास मौके के लिए खूबसूरत आभूषण',
    'products.gold': 'सोने के आभूषण',
    'products.gold.desc': 'शुद्ध सोने में पारंपरिक और आधुनिक डिज़ाइन',
    'products.diamond': 'हीरे के आभूषण',
    'products.diamond.desc': 'प्रमाणित हीरों के साथ शानदार डिज़ाइन',
    'products.silver': 'चांदी के आभूषण',
    'products.silver.desc': 'हाथ से बने खूबसूरत चांदी के आभूषण',
    'products.bridal': 'दुल्हन के आभूषण',
    'products.bridal.desc': 'आपके खास दिन के लिए पूरा दुल्हन सेट',
    
    // Gallery
    'gallery.title': 'गैलरी',
    'gallery.subtitle': 'हमारी शानदार रचनाएं देखें',
    
    // Contact
    'contact.title': 'हमसे संपर्क करें',
    'contact.subtitle': 'हम आपकी सेवा के लिए हमेशा तैयार हैं',
    'contact.address': 'पता',
    'contact.address.full': 'भरत ज्वेलर्स, चाकिसैण, पौड़ी गढ़वाल, उत्तराखंड – भारत',
    'contact.hours': 'खुलने का समय',
    'contact.hours.time': 'सुबह 8 बजे से शाम 7 बजे तक',
    'contact.hours.closed': 'रविवार को बंद रहते हैं',
    'contact.call': 'अभी फोन करें',
    'contact.whatsapp': 'WhatsApp पर मैसेज करें',
    'contact.whatsapp.preMsg': 'नमस्ते! मैं आपकी वेबसाइट - भरत ज्वैलर्स से आया हूँ।',
    'contact.directions': 'दिशा-निर्देश',
    'contact.social': 'हमसे जुड़ें',
    
    // Testimonials
    'testimonials.title': 'ग्राहकों की प्रतिक्रिया',
    'testimonials.subtitle': 'हमारे खुश ग्राहकों की राय',
    'testimonials.customer1.name': 'श्रीमती अनीता देवी',
    'testimonials.customer1.location': 'चाकिसैण',
    'testimonials.customer1.review': 'भरत ज्वेलर्स से मैंने अपनी बेटी की शादी के लिए पूरा सेट खरीदा। राजा जी बहुत ईमानदार हैं और गहनों की शुद्धता की गारंटी देते हैं। यहां का काम बहुत बढ़िया है।',
    'testimonials.customer2.name': 'श्री विनोद कुमार',
    'testimonials.customer2.location': 'पौड़ी गढ़वाल',
    'testimonials.customer2.review': 'मनीष जी और राजा जी का व्यवहार बहुत अच्छा है। यहां से सोने की चेन खरीदी थी, डिजाइन और क्वालिटी दोनों शानदार हैं। पूरे भरोसे की दुकान है।',
    'testimonials.customer3.name': 'श्रीमती कमला साह',
    'testimonials.customer3.location': 'चाकिसैण',
    'testimonials.customer3.review': 'पिछले कई सालों से यहीं से गहने लेती हूं। शुद्धता और ईमानदारी के मामले में भरत ज्वेलर्स का कोई मुकाबला नहीं। पूरे परिवार का भरोसा है यह दुकान।',
    
    // Footer
    'footer.about': 'भरत ज्वेलर्स चाकिसैण, पौड़ी गढ़वाल में एक विश्वसनीय आभूषण की दुकान है। श्री मनीष कुमार जी द्वारा स्थापित और राजा सोनी द्वारा संचालित।',
    'footer.quick': 'त्वरित लिंक',
    'footer.connect': 'जुड़े रहें',
    'footer.rights': '© 2025 भरत ज्वेलर्स। सर्वाधिकार सुरक्षित।',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.products': 'Products',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    
    // Tagline & Banner
    'tagline': 'Symbol of Trust and Purity – Bharat Jewellers, Chakisain',
    'banner.trusted': 'Trusted Jewellers of Chakisain since 1979',
    
    // Home Page
    'home.hero.title': 'Welcome to Bharat Jewellers',
    'home.hero.subtitle': 'Trusted Gold, Silver & Diamond Jewelry in Chakisain, Pauri Garhwal',
    'home.hero.cta': 'Call Now',
    'home.hero.directions': 'Get Directions',
    'home.trust.title': 'A Legacy of Trust and Purity',
    'home.trust.description': 'Founded by Mr. Manish Kumar and managed by his son Raja Soni, Bharat Jewellers has been a symbol of quality and reliability in the Chakisain region for over a year.',
    'home.featured.title': 'Featured Collections',
    'home.featured.subtitle': 'Discover Our Finest Jewelry',
    'home.why.title': 'Why Choose Us',
    'home.why.purity.title': '100% Purity Guaranteed',
    'home.why.purity.desc': 'All jewelry with certified purity',
    'home.why.trust.title': 'Local Trust',
    'home.why.trust.desc': 'Trusted name in Pauri Garhwal',
    'home.why.craft.title': 'Traditional Craftsmanship',
    'home.why.craft.desc': 'Handcrafted traditional designs',
    'home.why.custom.title': 'Custom Designs',
    'home.why.custom.desc': 'Personalized jewelry services',
    
    // About Page
    'about.title': 'Our Story',
    'about.subtitle': 'A Legacy of Trust and Excellence',
    'about.founder.title': 'Our Heritage',
    'about.founder.description': 'Bharat Jewellers was founded by Mr. Manish Kumar, known for his commitment to honesty, quality, and customer satisfaction. Today, his son Raja Soni has been successfully managing the shop for over a year.',
    'about.values.title': 'Our Values',
    'about.values.honesty': 'Honesty & Transparency',
    'about.values.quality': 'Highest Quality',
    'about.values.tradition': 'Traditional Craftsmanship',
    'about.values.satisfaction': 'Customer Satisfaction',
    
    // Products
    'products.title': 'Our Jewelry Collection',
    'products.subtitle': 'Exquisite Jewelry for Every Occasion',
    'products.gold': 'Gold Jewelry',
    'products.gold.desc': 'Traditional and modern designs in pure gold',
    'products.diamond': 'Diamond Jewelry',
    'products.diamond.desc': 'Stunning designs with certified diamonds',
    'products.silver': 'Silver Jewelry',
    'products.silver.desc': 'Beautiful handcrafted silver ornaments',
    'products.bridal': 'Bridal Jewelry',
    'products.bridal.desc': 'Complete bridal sets for your special day',
    
    // Gallery
    'gallery.title': 'Gallery',
    'gallery.subtitle': 'Explore Our Stunning Creations',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'We Are Here to Serve You',
    'contact.address': 'Address',
    'contact.address.full': 'Bharat Jewellers, Chakisain, Pauri Garhwal, Uttarakhand - India',
    'contact.hours': 'Opening Hours',
    'contact.hours.time': '8 AM - 7 PM',
    'contact.hours.closed': 'Closed on Sundays',
    'contact.call': 'Call Now',
    'contact.whatsapp': 'Message on WhatsApp',
    'contact.whatsapp.preMsg': 'Hi there! I came from your website - Bharat Jewellers.',
    'contact.directions': 'Get Directions',
    'contact.social': 'Follow Us',
    
    // Testimonials
    'testimonials.title': 'Customer Reviews',
    'testimonials.subtitle': 'What Our Happy Customers Say',
    'testimonials.customer1.name': 'Mrs. Anita Devi',
    'testimonials.customer1.location': 'Chakisain',
    'testimonials.customer1.review': 'I bought the complete bridal set for my daughter\'s wedding from Bharat Jewellers. Raja ji is very honest and guarantees purity. The craftsmanship is excellent.',
    'testimonials.customer2.name': 'Mr. Vinod Kumar',
    'testimonials.customer2.location': 'Pauri Garhwal',
    'testimonials.customer2.review': 'The service from Manish ji and Raja ji is wonderful. I purchased a gold chain here - both design and quality are outstanding. A truly trustworthy shop.',
    'testimonials.customer3.name': 'Mrs. Kamala Sah',
    'testimonials.customer3.location': 'Chakisain',
    'testimonials.customer3.review': 'I have been buying jewelry here for many years. Bharat Jewellers is unmatched in purity and honesty. Our entire family trusts this shop.',
    
    // Footer
    'footer.about': 'Bharat Jewellers is a trusted jewelry shop in Chakisain, Pauri Garhwal. Founded by Mr. Manish Kumar and managed by Raja Soni.',
    'footer.quick': 'Quick Links',
    'footer.connect': 'Stay Connected',
    'footer.rights': '© 2025 Bharat Jewellers. All rights reserved.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('hi');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
