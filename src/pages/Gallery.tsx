import { useLanguage } from "@/contexts/LanguageContext";
import goldNecklace from "@/assets/gold-necklace.jpg";
import diamondEarrings from "@/assets/diamond-earrings.jpg";
import silverBangles from "@/assets/silver-bangles.jpg";
import bridalSet from "@/assets/bridal-set.jpg";
import heroImage from "@/assets/hero-jewelry.jpg";

const Gallery = () => {
  const { t } = useLanguage();

  const galleryImages = [
    { src: goldNecklace, alt: "Traditional Gold Necklace" },
    { src: diamondEarrings, alt: "Diamond Earrings" },
    { src: silverBangles, alt: "Silver Bangles" },
    { src: bridalSet, alt: "Bridal Jewelry Set" },
    { src: heroImage, alt: "Jewelry Collection" },
    { src: goldNecklace, alt: "Gold Jewelry" },
    { src: diamondEarrings, alt: "Diamond Collection" },
    { src: silverBangles, alt: "Silver Collection" },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">
            {t('gallery.title')}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t('gallery.subtitle')}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-elegant hover:shadow-gold transition-all duration-300 cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-secondary-foreground font-semibold">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Visit CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-secondary/20 to-primary/20 rounded-2xl p-12">
          <h2 className="text-3xl font-serif font-bold mb-4 text-foreground">
            Visit Our Shop
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            See our complete collection in person and experience the quality firsthand
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-gradient-gold text-primary-foreground font-semibold rounded-lg hover:shadow-gold transition-all hover:scale-105"
          >
            {t('contact.directions')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
