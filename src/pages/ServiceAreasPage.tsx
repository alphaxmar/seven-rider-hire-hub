import ServiceAreas from "@/components/ServiceAreas";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

const ServiceAreasPage = () => {
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

      <ServiceAreas />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">
            บริษัท เอ็นทีเอส เรเวเลชั่น จำกัด (NTS Revelation Co., Ltd.)
          </p>
          <p className="text-gray-400 mb-2">
            ผู้ให้บริการจัดหาบุคลากรให้กับองค์กรชั้นนำ
          </p>
          <p className="text-gray-400 mb-2">
            อีเมล: ridernts.form@gmail.com | โทร: 098-348-5259
          </p>
          <p className="text-gray-500 text-sm">
            © 2025 NTS Revelation. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ServiceAreasPage;