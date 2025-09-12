import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-seven-green min-h-screen flex items-center">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <div className="inline-block bg-seven-orange text-white px-4 py-2 rounded-full text-sm font-bold mb-4 animate-pulse">
                🔥 รับสมัครด่วน! เริ่มได้เลย
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-seven-orange-light">เปลี่ยนชีวิต</span>
                <br />
                <span className="text-white">ได้วันนี้!</span>
                <br />
                <span className="text-seven-orange-light text-4xl lg:text-5xl">มาเป็นไรเดอร์</span>
              </h1>
              <div className="text-xl lg:text-2xl text-white/90">
                กับ <span className="font-bold text-seven-orange-light">ร้านสะดวกซื้อ</span> 
                <span className="text-seven-orange-light ml-2">💰 รายได้ดีที่สุด!</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-seven-orange to-seven-orange-light text-white p-6 rounded-2xl shadow-elegant border-2 border-white/20">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-seven-green text-sm animate-pulse">💰</span>
                ทำไมต้องเลือกเรา?
              </h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-center gap-3">
                  <span className="text-2xl">💸</span>
                  <span><strong>รายได้สูง!</strong> บิลละ 15 บาท + โบนัสพิเศษ</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🎯</span>
                  <span><strong>งานง่าย!</strong> แค่ส่งของ ไม่ต้องจัดออร์เดอร์</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🏠</span>
                  <span><strong>ใกล้บ้าน!</strong> เลือกพื้นที่ทำงานได้</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border-2 border-seven-orange-light/30 p-6 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-center">
                <span className="text-seven-orange-light">🚀 เริ่มต้นง่ายๆ ใน 3 ขั้นตอน!</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-seven-orange rounded-full flex items-center justify-center mx-auto mb-2 text-xl">1</div>
                  <p className="text-sm text-white/90">แอดไลน์</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-seven-orange rounded-full flex items-center justify-center mx-auto mb-2 text-xl">2</div>
                  <p className="text-sm text-white/90">ส่งเอกสาร</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-seven-orange rounded-full flex items-center justify-center mx-auto mb-2 text-xl">3</div>
                  <p className="text-sm text-white/90">เริ่มงานได้เลย!</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="line" 
                  size="lg" 
                  className="flex items-center justify-center gap-3 text-lg px-8 py-4 rounded-full font-bold hover:scale-105 transition-all duration-300"
                >
                  <MessageCircle className="w-6 h-6" />
                  💬 แอดไลน์เลย! สมัครง่าย ๆ
                </Button>
                
                <Button 
                  variant="seven-orange" 
                  size="lg"
                  className="flex items-center justify-center gap-3 text-lg px-8 py-4 rounded-full font-bold hover:scale-105 transition-all duration-300"
                >
                  <Phone className="w-6 h-6" />
                  📞 โทรสอบถามทันที
                </Button>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-card rounded-3xl transform rotate-3" />
            <img 
              src="/lovable-uploads/bf551fd2-eed9-40cc-8e94-203567700544.png" 
              alt="ทีมไรเดอร์ร้านสะดวกซื้อในชุดยูนิฟอร์มสีส้ม"
              className="relative z-10 w-full h-auto rounded-3xl shadow-elegant transform -rotate-1 hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;