import { Card } from "@/components/ui/card";
import { MapPin, Clock, Banknote, Shield, Users, Zap } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <Banknote className="w-8 h-8" />,
      title: "💰 รายได้เยอะ!",
      description: "บิลละ 15 บาท + โบนัสพิเศษ",
      detail: "วันดี ๆ ได้ 800-1,200 บาท/วัน! ยิ่งทำเยอะ ยิ่งได้เยอะ"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "⏰ อิสระเต็มที่",
      description: "เลือกเวลาทำงานเองได้",
      detail: "ไม่มีเวลาตาย! ทำเช้า กลางวัน หรือเย็นก็ได้ ตามใจชอบ"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "🏠 ใกล้บ้าน ประหยัด",
      description: "เลือกพื้นที่ที่สะดวกได้",
      detail: "ไม่ต้องเดินทางไกล ประหยัดเวลาและค่าน้ำมัน"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "🛡️ มั่นคง ไว้ใจได้",
      description: "บริษัทใหญ่ระดับโลก",
      detail: "7-Eleven แบรนด์โลก เชื่อถือได้ ไม่หายหน้าไปไหน"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "👥 ทีมเยี่ยม",
      description: "บรรยากาศดี เหมือนครอบครัว",
      detail: "มีทีมซัพพอร์ตช่วยเหลือ 24/7 ไม่ทิ้งกันคนเดียว"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "⚡ เริ่มได้ทันที!",
      description: "สมัครวันนี้ ทำงานพรุ่งนี้",
      detail: "ไม่ต้องรอนาน! อบรมง่าย ๆ แค่ 1 วัน เริ่มงานได้เลย"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-seven-green/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-seven-orange/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-seven-orange text-white px-6 py-3 rounded-full text-lg font-bold mb-6 animate-bounce">
            🎉 สิทธิประโยชน์สุดเจ๋ง!
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            ทำไมคนเก่งถึงเลือก <span className="text-seven-green">7-ELEVEN</span><span className="text-seven-red">?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            มากกว่าแค่งาน... <span className="text-seven-orange font-bold">นี่คือโอกาสเปลี่ยนชีวิต!</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border border-gray-200/50 group"
            >
              <div className="text-seven-red mb-6 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-700 mb-2 font-medium">
                {benefit.description}
              </p>
              <p className="text-sm text-seven-red font-medium">
                {benefit.detail}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;