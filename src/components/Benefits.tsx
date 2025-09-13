import { Card } from "@/components/ui/card";
import { MapPin, Clock, Banknote, Shield, Users, Zap } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <Banknote className="w-8 h-8" />,
      title: "รายได้ดี",
      description: "รายคิดเป็นบิล บิลละ 15 บาท*",
      detail: "บิลเฉลี่ย 40-60 บิล/วัน"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "เวลาทำงานเป็นกะ",
      description: "ทำงานตามเวลาที่สาขากำหนด",
      detail: "มีความตรงต่อเวลา"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "พื้นที่ใกล้บ้าน",
      description: "รับงานในพื้นที่ที่คุณต้องการ",
      detail: "ไม่ต้องเดินทางไกล"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "งานมั่นคง",
      description: "บริษัทใหญ่ที่มีความน่าเชื่อถือ",
      detail: "ร้านสะดวกซื้อ แบรนด์ที่คนไทยรู้จัก"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "ทีมงานดี",
      description: "สภาพแวดล้อมการทำงานที่เป็นมิตร",
      detail: "ได้เพื่อนใหม่และประสบการณ์"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "เริ่มงานได้ทันที",
      description: "ไม่ต้องรอนาน สมัครแล้วเริ่มงานได้เลย",
      detail: "ผ่านการอบรมเบื้องต้น"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-seven-green/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-seven-orange/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-seven-green">ทำไม</span> ต้องเลือกเรา<span className="text-seven-red">?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            มาร่วมเป็นส่วนหนึ่งของครอบครัวร้านสะดวกซื้อ และเริ่มต้นการเดินทางสู่ความสำเร็จ
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