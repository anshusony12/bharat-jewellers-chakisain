import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLanguage(language === 'hi' ? 'en' : 'hi')}
      className="gap-2 border-gold/30 hover:border-gold hover:bg-gold/10"
    >
      <Globe className="h-4 w-4" />
      <span className="font-medium">{language === 'hi' ? 'English' : 'हिंदी'}</span>
    </Button>
  );
};

export default LanguageToggle;
