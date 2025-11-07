import { Phone, MapPin, Clock, MessageCircle, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  const message = encodeURIComponent(t('contact.whatsapp.preMsg'));
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-border shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">
                      {t('contact.address')}
                    </h3>
                    <p className="text-muted-foreground">
                      {t('contact.address.full')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">
                      {t('contact.hours')}
                    </h3>
                    <p className="text-muted-foreground">
                      {t('contact.hours.time')}
                    </p>
                    <p className="text-sm text-destructive mt-1">
                      {t('contact.hours.closed')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="space-y-4">
              <Button
                className="w-full bg-gold hover:bg-gold-dark text-primary-foreground shadow-gold"
                size="lg"
                asChild
              >
                <a href="tel:+919876543210">
                  <Phone className="mr-2 h-5 w-5" />
                  {t('contact.call')}
                </a>
              </Button>

              <Button
                className="w-full bg-[#25D366] hover:bg-[#20BA5A]"
                size="lg"
                asChild
              >
                <a href={`https://wa.me/917895305503?text=${message}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {t('contact.whatsapp')}
                </a>
              </Button>

              <Button
                variant="outline"
                className="w-full border-gold/30 hover:border-gold hover:bg-gold/10"
                size="lg"
                asChild
              >
                <a href="https://maps.app.goo.gl/vS2F3UgC7h5ngxRX6" target="_blank" rel="noopener noreferrer">
                  <MapPin className="mr-2 h-5 w-5" />
                  {t('contact.directions')}
                </a>
              </Button>
            </div>

            {/* Social Media */}
            <Card className="border-border shadow-elegant">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-foreground">
                  {t('contact.social')}
                </h3>
                <div className="flex gap-4">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-gold hover:opacity-80 transition-opacity"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-6 w-6 text-primary-foreground" />
                  </a>
                  <a 
                    href="https://www.instagram.com/bharat_jwellers_chakisain?igsh=MTJpNzV5aTU2ZmJlMA=="
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-gold hover:opacity-80 transition-opacity"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-6 w-6 text-primary-foreground" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
            <Card className="border-border shadow-elegant overflow-hidden h-[500px]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.120215255822!2d79.01167527635381!3d30.119373374886024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909bf7f5fb419a5%3A0xde70e736d2ea761c!2sBharat%20Jewellers%2C%20Chakisain!5e0!3m2!1sen!2sin!4v1762543923702!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{border: 0}}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Bharat Jewellers Location"
                />
            </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
