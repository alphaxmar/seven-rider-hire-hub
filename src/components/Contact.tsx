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
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            พร้อมเริ่มต้นรายได้ 20,000-40,000 บาท/เดือน
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            ติดต่อสอบถามและสมัครงานได้ทันที ทีมงาน NTS Revelation พร้อมให้คำแนะนำ
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="p-8 bg-white/10 backdrop-blur-sm border border-white/20 text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#00B900] rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">LINE Official</h3>
                  <p className="text-white/80">วิธีที่รวดเร็วที่สุด</p>
                </div>
              </div>
              <Button 
                variant="line" 
                size="lg" 
                className="w-full text-lg py-4 rounded-xl font-bold"
                onClick={() => window.open("https://lin.ee/sYaXbzX", "_blank")}
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                ติดต่อ-สอบถาม คลิกเพื่อแอดไลน์
              </Button>
            </Card>

            <Card className="p-8 bg-white/10 backdrop-blur-sm border border-white/20 text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-seven-orange rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">โทรศัพท์</h3>
                  <p className="text-white/80">สอบถามทันที</p>
                </div>
              </div>
              <div className="space-y-3">
                {phoneNumbers.map((number, index) => (
                  <Button 
                    key={index}
                    variant="seven-orange" 
                    size="lg" 
                    className="w-full text-lg py-3 rounded-xl font-bold"
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
            <Card className="p-8 bg-white/10 backdrop-blur-sm border border-white/20 text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-seven-orange rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">เวลาทำการ</h3>
                  <p className="text-white/80">พร้อมให้บริการ</p>
                </div>
              </div>
              <div className="space-y-2 text-lg">
                <p>จันทร์ - ศุกร์: 8:30 - 18:30</p>
                <p>เสาร์ - อาทิตย์: 9:00 - 17:00</p>
                <p className="text-seven-orange-light text-sm">* สามารถแอดไลน์ได้ 24 ชั่วโมง ทีมงานจะติดต่อกลับโดยเร็วที่สุด</p>
              </div>
            </Card>

            <Card className="p-8 bg-white/10 backdrop-blur-sm border border-white/20 text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-seven-green rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">พื้นที่บริการ</h3>
                  <p className="text-white/80">ทั่วประเทศ</p>
                </div>
              </div>
              <p className="text-lg leading-relaxed">
                บริษัท เอ็นทีเอส เรเวลเลชั่น จำกัด มีบริการจัดหางานทั่วประเทศไทย คุณสามารถเลือกทำงานในพื้นที่ที่ใกล้บ้านได้
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;