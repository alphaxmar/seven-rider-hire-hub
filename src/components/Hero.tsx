import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import deliveryHero from "@/assets/delivery-hero.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero min-h-screen flex items-center">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-yellow-300">รับสมัคร</span>
                <br />
                <span className="text-white">ไรเดอร์ส่งสินค้า</span>
              </h1>
              <div className="text-xl lg:text-2xl text-white/90">
                ประจำร้าน <span className="font-bold text-yellow-300">7-ELEVEN</span>
              </div>
            </div>

            <div className="bg-yellow-400 text-black p-6 rounded-2xl shadow-elegant">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-seven-green rounded-full flex items-center justify-center text-white text-sm">✓</span>
                ข้อดีของการทำงานไรเดอร์กับเรา
              </h3>
              <ul className="space-y-2 text-lg">
                <li>• รายได้ดี รายคิดเป็นบิล บิลละ 15 บาท</li>
                <li>• ไม่ต้องจัดออร์เดอร์ จังส่งของอย่างเดียว</li>
                <li>• รับงานพื้นที่ใกล้บ้าน</li>
              </ul>
            </div>

            <div className="bg-seven-green/20 backdrop-blur-sm border border-white/20 p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-3 text-yellow-300">
                มาเป็นส่วนหนึ่งของทีมไรเดอร์กับเรา!
              </h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="line" 
                  size="lg" 
                  className="flex items-center gap-3 text-lg px-8 py-4 rounded-full font-bold"
                >
                  <MessageCircle className="w-6 h-6" />
                  ติดต่อ-สอบถาม คลิกเพื่อแอดไลน์
                </Button>
                
                <Button 
                  variant="phone" 
                  size="lg"
                  className="flex items-center gap-3 text-lg px-8 py-4 rounded-full font-bold"
                >
                  <Phone className="w-6 h-6" />
                  โทรเลย
                </Button>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-card rounded-3xl transform rotate-3" />
            <img 
              src={deliveryHero} 
              alt="7-Eleven Delivery Rider"
              className="relative z-10 w-full h-auto rounded-3xl shadow-elegant transform -rotate-1 hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;