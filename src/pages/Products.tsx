import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import goldNecklace from "@/assets/gold-necklace.jpg";
import diamondEarrings from "@/assets/diamond-earrings.jpg";
import silverBangles from "@/assets/silver-bangles.jpg";
import bridalSet from "@/assets/bridal-set.jpg";

const Products = () => {
  const { t } = useLanguage();

  const products = [
    {
      image: goldNecklace,
      title: t('products.gold'),
      description: t('products.gold.desc'),
      category: 'Gold',
    },
    {
      image: diamondEarrings,
      title: t('products.diamond'),
      description: t('products.diamond.desc'),
      category: 'Diamond',
    },
    {
      image: silverBangles,
      title: t('products.silver'),
      description: t('products.silver.desc'),
      category: 'Silver',
    },
    {
      image: bridalSet,
      title: t('products.bridal'),
      description: t('products.bridal.desc'),
      category: 'Bridal',
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">
            {t('products.title')}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t('products.subtitle')}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border hover:shadow-gold transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-gold/20 text-gold-dark rounded-full mb-3">
                  {product.category}
                </span>
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

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-secondary/20 to-primary/20 rounded-2xl p-12">
          <h2 className="text-3xl font-serif font-bold mb-4 text-foreground">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            We offer custom design services. Visit our shop to discuss your dream jewelry.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-gradient-gold text-primary-foreground font-semibold rounded-lg hover:shadow-gold transition-all hover:scale-105"
          >
            {t('contact.title')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Products;
