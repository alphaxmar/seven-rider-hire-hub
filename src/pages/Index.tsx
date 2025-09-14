import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Requirements from "@/components/Requirements";
import Contact from "@/components/Contact";
import GoogleForm from "@/components/GoogleForm";
import FAQ from "@/components/FAQ";
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
      <FAQ />
      <GoogleForm />
      <Contact />
      
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
          <div className="flex justify-center gap-4 my-4">
            <a href="/" className="text-white hover:text-seven-orange transition-colors">หน้าแรก</a>
            <a href="/service-areas" className="text-white hover:text-seven-orange transition-colors">พื้นที่ให้บริการ</a>
          </div>
          <p className="text-gray-500 text-sm">
            © 2025 NTS Revelation. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;