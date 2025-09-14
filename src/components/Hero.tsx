import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import deliveryHero2 from "@/assets/delivery-hero2.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-seven-green min-h-screen flex items-center">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* NTS Revelation Logo */}
        <div className="mb-6">
          <div className="bg-white/90 inline-block px-4 py-2 rounded-lg">
            <h3 className="text-gray-800 font-bold">NTS Revelation Co., Ltd.</h3>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-seven-orange-light">เปิดรับสมัคร</span>
                <br />
                <span className="text-white">ไรเดอร์</span>
              </h1>
              <div className="text-xl lg:text-2xl text-white/90">
                <span className="font-bold text-seven-orange-light">สร้างรายได้ 15,000 - 30,000 บ./เดือน (ขึ้นอยู่กับสาขาและจำนวนบิล)</span>
                <br />กับตำแหน่งไรเดอร์ส่งสินค้าให้ร้านสะดวกซื้อชั้นนำ
              </div>
            </div>

            <div className="bg-seven-orange text-white p-6 rounded-2xl shadow-elegant">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-seven-green text-sm">✓</span>
                ข้อดีของการทำงานไรเดอร์กับเรา
              </h3>
              <ul className="space-y-2 text-lg">
                <li>• รายได้ดี 15,000 - 30,000 บาท/เดือน (ขึ้นอยู่กับสาขาและจำนวนบิล)</li>
                <li>• ไม่ต้องจัดออร์เดอร์ เพียงส่งของอย่างเดียว</li>
                <li>• เลือกทำงานในพื้นที่ใกล้บ้านได้</li>
              </ul>
            </div>

            <div className="bg-seven-green/20 backdrop-blur-sm border border-white/20 p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-3 text-seven-orange-light">
                สมัครเลย! (รับจำนวนจำกัด)
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
                  variant="seven-orange" 
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
              src={deliveryHero2} 
              alt="ทีมไรเดอร์ส่งสินค้าให้ร้านสะดวกซื้อชั้นนำ"
              className="relative z-10 w-full h-auto rounded-3xl shadow-elegant transform -rotate-1 hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;