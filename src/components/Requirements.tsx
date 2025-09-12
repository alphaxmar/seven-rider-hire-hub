import { Card } from "@/components/ui/card";
import { CheckCircle, AlertCircle } from "lucide-react";

const Requirements = () => {
  const requirements = [
    "อายุ 18-55 ปี",
    "ออนไลน์ เซียนได้ ใช้โทรศัพท์เป็น",
    "มีรถจักรยานยนต์และเอกสารเกี่ยวกับรถให้ครบถ้วน",
    "มีใบขับขี่ที่ยังไม่หมดอายุ",
    "รถจักรยานยนต์ปีพ.ศ. และส่วนอื่นแล้ว",
    "ไม่มีประวัติอาชญากรรม",
    "มีความสามารถในงานด้านบริการ",
    "สามารถเรียนรู้เข้าใจเกี่ยวกับการใช้แอพในการทำงานได้",
    "ใช้สมาร์ทโฟนระบบ Android เท่านั้น (ไม่รองรับ iOS)",
    "แก้ไขปัญหาเฉพาะหน้าได้"
  ];

  const documents = [
    "สำเนาบัตรประชาชน (ไม่หมดอายุ)",
    "สำเนาใบขับขี่ (ไม่หมดอายุ)", 
    "สำเนาเล่มทะเบียนรถที่ใช้งานตัวจริง",
    "หากไม่ใช่เจ้าของรถ ใช้สำเนาบัตรปชช.",
    "เจ้าของรถเซ็นต์เรียบร้อยแล้ว",
    "สำเนาบัญชีธนาคาร (ไม่ใช่ตู่ต่อ)",
    "สำเนาพรบ. (ไม่ใช่ตู่ต่อ)",
    "สำเนาสมุดบัญชี (ธ.ไทยพาณิชย์ ถ้าไม่มีเปิดบัญชีใหม่ได้)"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-seven-green/5 to-seven-orange/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-seven-green text-white px-6 py-3 rounded-full text-lg font-bold mb-6">
            <CheckCircle className="w-6 h-6" />
            เพียงมีคุณสมบัติตามนี้สมัครเลย!
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            คุณสมบัติของผู้สมัคร
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Requirements */}
          <Card className="p-8 bg-white/90 backdrop-blur-sm border border-seven-green/20 shadow-green">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-seven-green rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">คุณสมบัติผู้สมัคร</h3>
            </div>
            <ul className="space-y-4">
              {requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-seven-green mt-0.5 shrink-0" />
                  <span className="leading-relaxed">{req}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Documents */}
          <Card className="p-8 bg-white/90 backdrop-blur-sm border border-seven-orange/20 shadow-orange">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-seven-orange rounded-full flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">เอกสารประกอบสมัคร</h3>
            </div>
            <ul className="space-y-4">
              {documents.map((doc, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <AlertCircle className="w-5 h-5 text-seven-orange mt-0.5 shrink-0" />
                  <span className="leading-relaxed">{doc}</span>
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