import { Award, Heart, Users, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Heart,
      title: t('about.values.honesty'),
    },
    {
      icon: Award,
      title: t('about.values.quality'),
    },
    {
      icon: Star,
      title: t('about.values.tradition'),
    },
    {
      icon: Users,
      title: t('about.values.satisfaction'),
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">
            {t('about.title')}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Founder Story */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border-border shadow-elegant">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-serif font-bold mb-6 text-foreground">
                {t('about.founder.title')}
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.founder.description')}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-foreground">
            {t('about.values.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center p-6 border-border hover:border-gold/50 transition-all hover:shadow-gold hover:-translate-y-1"
              >
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-gold mb-4">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {value.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border shadow-elegant">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 rounded-full bg-gradient-gold mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-16 w-16 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-2 text-foreground">
                  श्री मनीष कुमार
                </h3>
                <p className="text-muted-foreground mb-4">
                  Founder / संस्थापक
                </p>
                <p className="text-sm text-muted-foreground">
                  Established Bharat Jewellers with a vision of trust and quality
                </p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-elegant">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 rounded-full bg-gradient-gold mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-16 w-16 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-2 text-foreground">
                  राजा सोनी
                </h3>
                <p className="text-muted-foreground mb-4">
                  Manager / प्रबंधक
                </p>
                <p className="text-sm text-muted-foreground">
                  Successfully managing operations for over a year
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
