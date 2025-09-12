import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, MessageCircle, Clock, MapPin } from "lucide-react";

const Contact = () => {
  const phoneNumbers = [
    "098 348 5259",
    "080 845 6279", 
    "061 269 7957"
  ];

  return (
    <section className="py-20 bg-seven-green relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-seven-red text-white px-6 py-3 rounded-full text-lg font-bold mb-6 animate-pulse">
            🔥 สมัครเลย! ใกล้เต็มแล้ว
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="text-seven-orange-light">อย่ารอ!</span> มาเริ่มเปลี่ยนชีวิต
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            <span className="text-seven-orange-light font-bold">💯 ไม่มีค่าสมัคร!</span> ติดต่อเลย เริ่มงานพรุ่งนี้ได้
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="p-8 bg-white/10 backdrop-blur-sm border-2 border-[#00B900]/30 hover:border-[#00B900]/50 transition-all duration-300 hover:shadow-lg text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#00B900] rounded-full flex items-center justify-center animate-pulse">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">💬 แอดไลน์ทันที!</h3>
                  <p className="text-white/80">🚀 ตอบเร็ว 1 นาที!</p>
                </div>
              </div>
              <div className="bg-[#00B900]/20 p-4 rounded-lg mb-4 border border-[#00B900]/30">
                <p className="text-center text-white font-semibold">📱 ส่งรูปเอกสารผ่านไลน์ได้เลย!</p>
              </div>
              <Button 
                variant="line" 
                size="lg" 
                className="w-full text-lg py-4 rounded-xl font-bold hover:scale-105 transition-transform"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                📱 คลิกแอดไลน์เลย!
              </Button>
            </Card>

            <Card className="p-8 bg-white/10 backdrop-blur-sm border-2 border-seven-orange/30 hover:border-seven-orange/50 transition-all duration-300 hover:shadow-lg text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-seven-orange rounded-full flex items-center justify-center animate-pulse">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">📞 โทรด่วน!</h3>
                  <p className="text-white/80">⚡ รับสายตลอด 24 ชั่วโมง!</p>
                </div>
              </div>
              <div className="bg-seven-red/20 p-3 rounded-lg mb-4 border border-seven-red/30 text-center">
                <p className="text-seven-orange-light font-bold">💬 พูดคุยกับเจ้าหน้าที่จริง! ไม่ใช่บอท</p>
              </div>
              <div className="space-y-3">
                {phoneNumbers.map((number, index) => (
                  <Button 
                    key={index}
                    variant="seven-orange" 
                    size="lg" 
                    className="w-full text-lg py-3 rounded-xl font-bold hover:scale-105 transition-transform"
                  >
                    <Phone className="w-5 h-5 mr-3" />
                    {number}
                  </Button>
                ))}
              </div>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="space-y-8">
            <Card className="p-8 bg-white/10 backdrop-blur-sm border-2 border-seven-green/30 hover:border-seven-green/50 transition-all duration-300 hover:shadow-lg text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-seven-green rounded-full flex items-center justify-center animate-pulse">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">⏰ เวลาทำการ</h3>
                  <p className="text-white/80">พร้อมให้บริการ</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-seven-green/20 rounded-lg border border-seven-green/30">
                  <p className="text-lg">📅 จันทร์ - ศุกร์: <span className="font-bold">9:00 - 18:00</span></p>
                  <p className="text-lg">📅 เสาร์ - อาทิตย์: <span className="font-bold">9:00 - 17:00</span></p>
                </div>
                <div className="bg-seven-orange/20 p-3 rounded-lg border border-seven-orange/30 text-center">
                  <p className="text-seven-orange-light font-bold">🚨 ด่วน! ติดต่อนอกเวลาได้ผ่านไลน์</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-white/10 backdrop-blur-sm border-2 border-seven-red/30 hover:border-seven-red/50 transition-all duration-300 hover:shadow-lg text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-seven-red rounded-full flex items-center justify-center animate-pulse">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">🗺️ พื้นที่ทำงาน</h3>
                  <p className="text-white/80">ครอบคลุมทั่วประเทศ</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-seven-orange/20 to-seven-red/20 rounded-lg border border-seven-orange/30 text-center">
                  <span className="text-2xl font-bold text-seven-orange-light block mb-2">
                    🌟 ทั่วประเทศไทย
                  </span>
                  <p className="text-white font-semibold">77 จังหวัด รับสมัครทุกที่!</p>
                </div>
                <p className="text-center text-white/90 bg-seven-green/20 p-3 rounded-lg border border-seven-green/30">
                  💡 <strong>เลือกพื้นที่ใกล้บ้าน</strong> ประหยัดเวลาเดินทาง!
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;