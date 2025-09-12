import { Card } from "@/components/ui/card";
import { CheckCircle, AlertCircle } from "lucide-react";

const Requirements = () => {
  const requirements = [
    "🙋‍♂️ อายุ 18-50 ปี (ยืดหยุ่นได้)",
    "📱 มีสมาร์ทโฟน ใช้แอปเป็น",
    "🏍️ มีมอเตอร์ไซค์ + เอกสารครบ",
    "🪪 ใบขับขี่ยังไม่หมดอายุ",
    "✅ ไม่มีประวัติอาชญากรรม",
    "😊 บริการดี ยิ้มแย้ม",
    "🎓 เรียนรู้เร็ว ใช้แอปได้",
    "💪 แก้ปัญหาเฉพาะหน้าได้",
    "🚀 พร้อมเรียนรู้สิ่งใหม่ ๆ"
  ];

  const documents = [
    "📄 บัตรประชาชน (ถ่ายรูปส่งได้)",
    "🪪 ใบขับขี่ (ยังไม่หมดอายุ)", 
    "🏍️ ทะเบียนรถ (ตัวจริงหรือสำเนา)",
    "📝 หนังสือยินยอม (ถ้าไม่ใช่เจ้าของรถ)",
    "💰 สมุดบัญชีธนาคาร (รับเงินเดือน)",
    "🛡️ พรบ.รถ (ต้องไม่หมดอายุ)",
    "📸 รูปถ่าย 1 นิ้ว 2 ใบ (หรือไฟล์)",
    "🏠 ทะเบียนบ้าน (แค่หน้าแรก)"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-seven-green/5 to-seven-orange/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-seven-green text-white px-6 py-3 rounded-full text-lg font-bold mb-6">
            ✅ เงื่อนไขง่าย ๆ
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            ใครก็สมัครได้! <span className="text-seven-orange">ไม่ยาก</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            <span className="text-seven-red font-bold">เตรียมเอกสารง่าย ๆ</span> แค่นี้ก็เริ่มงานได้แล้ว!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Requirements */}
          <Card className="p-8 bg-white/90 backdrop-blur-sm border-2 border-seven-green/30 hover:border-seven-green/50 transition-all duration-300 hover:shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-seven-green rounded-full flex items-center justify-center animate-pulse">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">คุณสมบัติ (ง่ายมาก!)</h3>
            </div>
            <div className="bg-seven-green/10 p-4 rounded-lg mb-6 border border-seven-green/20">
              <p className="text-seven-green font-bold text-center">🎯 แค่มีของพื้นฐาน ก็สมัครได้แล้ว!</p>
            </div>
            <ul className="space-y-3">
              {requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-3 p-3 bg-seven-green/5 rounded-lg border border-seven-green/10 hover:bg-seven-green/10 transition-colors">
                  <CheckCircle className="w-5 h-5 text-seven-green mt-0.5 shrink-0" />
                  <span className="leading-relaxed text-gray-700 font-medium">{req}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Documents */}
          <Card className="p-8 bg-white/90 backdrop-blur-sm border-2 border-seven-orange/30 hover:border-seven-orange/50 transition-all duration-300 hover:shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-seven-orange rounded-full flex items-center justify-center animate-pulse">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">เอกสาร (มีอยู่แล้วใช่มั้ย?)</h3>
            </div>
            <div className="bg-seven-orange/10 p-4 rounded-lg mb-6 border border-seven-orange/20">
              <p className="text-seven-orange font-bold text-center">📱 ส่งรูปถ่ายผ่านไลน์ได้เลย!</p>
            </div>
            <ul className="space-y-3">
              {documents.map((doc, index) => (
                <li key={index} className="flex items-start gap-3 p-3 bg-seven-orange/5 rounded-lg border border-seven-orange/10 hover:bg-seven-orange/10 transition-colors">
                  <AlertCircle className="w-5 h-5 text-seven-orange mt-0.5 shrink-0" />
                  <span className="leading-relaxed text-gray-700 font-medium">{doc}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Requirements;