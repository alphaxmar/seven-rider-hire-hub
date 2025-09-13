import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Requirements from "@/components/Requirements";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Fixed Contact Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <Button 
          variant="line" 
          size="lg"
          className="rounded-full shadow-elegant animate-pulse hover:animate-none px-6 py-3"
          onClick={() => window.open("https://lin.ee/sYaXbzX", "_blank")}
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          LINE
        </Button>
        <Button 
          variant="seven-orange" 
          size="lg"
          className="rounded-full shadow-elegant px-6 py-3"
          onClick={() => window.open("tel:0983485259", "_blank")}
        >
          <Phone className="w-5 h-5 mr-2" />
          Call
        </Button>
      </div>

      <Hero />
      <Benefits />
      <Requirements />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">
            ร้านสะดวกซื้อ Delivery Rider Recruitment
          </p>
          <p className="text-gray-400">
            มาร่วมเป็นส่วนหนึ่งของครอบครัวร้านสะดวกซื้อ วันนี้
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;