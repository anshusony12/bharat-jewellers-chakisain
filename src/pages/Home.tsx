import { Phone, MapPin, Award, Shield, Sparkles, Gem, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-jewelry.jpg";
import goldNecklace from "@/assets/gold-necklace.jpg";
import diamondEarrings from "@/assets/diamond-earrings.jpg";
import silverBangles from "@/assets/silver-bangles.jpg";
import bridalSet from "@/assets/bridal-set.jpg";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const Home = () => {
  const { t } = useLanguage();

  const featuredProducts = [
    {
      image: goldNecklace,
      title: t('products.gold'),
      description: t('products.gold.desc'),
    },
    {
      image: diamondEarrings,
      title: t('products.diamond'),
      description: t('products.diamond.desc'),
    },
    {
      image: silverBangles,
      title: t('products.silver'),
      description: t('products.silver.desc'),
    },
    {
      image: bridalSet,
      title: t('products.bridal'),
      description: t('products.bridal.desc'),
    },
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: t('home.why.purity.title'),
      description: t('home.why.purity.desc'),
    },
    {
      icon: Award,
      title: t('home.why.trust.title'),
      description: t('home.why.trust.desc'),
    },
    {
      icon: Sparkles,
      title: t('home.why.craft.title'),
      description: t('home.why.craft.desc'),
    },
    {
      icon: Gem,
      title: t('home.why.custom.title'),
      description: t('home.why.custom.desc'),
    },
  ];

  const testimonials = [
    {
      image: testimonial1,
      name: t('testimonials.customer1.name'),
      location: t('testimonials.customer1.location'),
      review: t('testimonials.customer1.review'),
    },
    {
      image: testimonial2,
      name: t('testimonials.customer2.name'),
      location: t('testimonials.customer2.location'),
      review: t('testimonials.customer2.review'),
    },
    {
      image: testimonial3,
      name: t('testimonials.customer3.name'),
      location: t('testimonials.customer3.location'),
      review: t('testimonials.customer3.review'),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 to-secondary/70" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-secondary-foreground">
          {/* Trust Badge */}
          <div className="inline-block mb-4 px-4 py-2 bg-gold/20 backdrop-blur-sm rounded-full border border-gold/30 animate-fade-in">
            <p className="text-sm font-medium text-gold-light">
              {t('banner.trusted')}
            </p>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 animate-fade-in">
            {t('home.hero.title')}
          </h1>
          
          {/* Tagline */}
          <p className="text-lg md:text-xl mb-4 italic font-serif text-gold-light animate-fade-in">
            {t('tagline')}
          </p>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 animate-fade-in">
            {t('home.hero.subtitle')}
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-scale-in">
            <Button
              size="lg"
              className="bg-gold hover:bg-gold-dark text-primary-foreground shadow-gold"
              asChild
            >
              <a href="tel:+917895305503">
                <Phone className="mr-2 h-5 w-5" />
                {t('home.hero.cta')}
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-secondary-foreground/30 text-secondary hover:bg-secondary-foreground/10"
              asChild
            >
              <a href="https://maps.app.goo.gl/vS2F3UgC7h5ngxRX6" target="_blank" rel="noopener noreferrer">
                <MapPin className="mr-2 h-5 w-5" />
                {t('home.hero.directions')}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-foreground">
            {t('home.trust.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('home.trust.description')}
          </p>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4 text-foreground">
              {t('home.featured.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('home.featured.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-border hover:shadow-gold transition-all duration-300 hover:-translate-y-2"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-semibold mb-2 text-foreground">
                    {product.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {product.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-12 text-foreground">
            {t('home.why.title')}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card
                key={index}
                className="text-center p-6 border-border hover:border-gold/50 transition-all hover:shadow-gold"
              >
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-gold mb-4">
                    <item.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4 text-foreground">
              {t('testimonials.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('testimonials.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="relative border-border hover:shadow-gold transition-all duration-300 animate-fade-in"
              >
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-gold/30 mb-4" />
                  <p className="text-muted-foreground italic mb-6 leading-relaxed">
                    "{testimonial.review}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-gold/30"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
