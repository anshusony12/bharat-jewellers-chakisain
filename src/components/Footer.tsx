import { Phone, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-secondary text-secondary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4 text-gold-light">
              भरत ज्वेलर्स
            </h3>
            <p className="text-sm opacity-90">
              {t('footer.about')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.quick')}</h3>
            <div className="space-y-2">
              <NavLink to="/" className="block hover:text-gold-light transition-colors">
                {t('nav.home')}
              </NavLink>
              <NavLink to="/about" className="block hover:text-gold-light transition-colors">
                {t('nav.about')}
              </NavLink>
              <NavLink to="/products" className="block hover:text-gold-light transition-colors">
                {t('nav.products')}
              </NavLink>
              <NavLink to="/gallery" className="block hover:text-gold-light transition-colors">
                {t('nav.gallery')}
              </NavLink>
              <NavLink to="/contact" className="block hover:text-gold-light transition-colors">
                {t('nav.contact')}
              </NavLink>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.connect')}</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-gold-light mt-0.5" />
                <span className="text-sm">
                  {t('contact.address.full')}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-gold-light" />
                <span className="text-sm">
                  {t('contact.hours.time')}<br />
                  {t('contact.hours.closed')}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-gold-light" />
                <span><a href="tel:+917895305503" className="text-sm hover:text-gold-light transition-colors">
                   +91 78953 05503
                </a></span>
                  <span><a href="tel:+919690156029" className="text-sm hover:text-gold-light transition-colors">
                   +91 96901 56029
                </a></span>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gold-light transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.instagram.com/bharat_jwellers_chakisain/?igsh=MTJpNzV5aTU2ZmJlMA%3D%3D#"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gold-light transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-secondary-foreground/20 text-center text-sm">
          <p>{t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
