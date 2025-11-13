import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {useLanguage} from "@/contexts/LanguageContext.tsx";

const WhatsAppButton = () => {
  const { t } = useLanguage();
  const message = encodeURIComponent('');
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/917895305503?text=${message}`, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-elegant hover:shadow-gold transition-all hover:scale-110"
      size="icon"
    >
      <MessageCircle className="h-6 w-6 text-white" />
    </Button>
  );
};

export default WhatsAppButton;
