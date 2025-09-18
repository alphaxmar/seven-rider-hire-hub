import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Shield, Eye, Lock, UserCheck, FileText, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-seven-green/5 via-white to-seven-orange/5">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate(-1)}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              กลับ
            </Button>
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-seven-green" />
              <h1 className="text-2xl font-bold text-gray-900">นโยบายความเป็นส่วนตัว (PDPA)</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Card className="p-8 shadow-lg">
          {/* Introduction */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-seven-orange" />
              <h2 className="text-xl font-bold text-gray-900">ข้อมูลทั่วไป</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              บริษัท NTS Revelation จำกัด ("บริษัท") ให้ความสำคัญกับการคุ้มครองข้อมูลส่วนบุคคลของท่าน 
              นโยบายความเป็นส่วนตัวฉบับนี้จัดทำขึ้นเพื่อแจ้งให้ท่านทราบถึงวิธีการเก็บรวบรวม ใช้ เปิดเผย 
              และคุ้มครองข้อมูลส่วนบุคคลของท่านตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA)
            </p>
          </div>

          {/* Data Collection */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-seven-green" />
              <h2 className="text-xl font-bold text-gray-900">ข้อมูลที่เราเก็บรวบรวม</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">ข้อมูลส่วนบุคคลทั่วไป</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>ชื่อ-นามสกุล</li>
                  <li>หมายเลขบัตรประจำตัวประชาชน</li>
                  <li>หมายเลขโทรศัพท์</li>
                  <li>ที่อยู่</li>
                  <li>อีเมล</li>
                  <li>ข้อมูลบัญชีธนาคาร</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">ข้อมูลการทำงาน</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>ใบขับขี่</li>
                  <li>ข้อมูลรถจักรยานยนต์</li>
                  <li>เล่มทะเบียนรถ</li>
                  <li>พ.ร.บ. รถจักรยานยนต์</li>
                  <li>ประวัติการทำงาน</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Purpose of Use */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <UserCheck className="w-6 h-6 text-seven-orange" />
              <h2 className="text-xl font-bold text-gray-900">วัตถุประสงค์ในการใช้ข้อมูล</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-seven-green/5 p-4 rounded-lg border border-seven-green/20">
                <h3 className="font-semibold text-seven-green mb-2">การจ้างงาน</h3>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                  <li>ตรวจสอบคุณสมบัติ</li>
                  <li>ดำเนินการจ้างงาน</li>
                  <li>จ่ายเงินเดือน</li>
                  <li>การประกันสังคม</li>
                </ul>
              </div>
              <div className="bg-seven-orange/5 p-4 rounded-lg border border-seven-orange/20">
                <h3 className="font-semibold text-seven-orange mb-2">การติดต่อสื่อสาร</h3>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                  <li>แจ้งข่าวสารงาน</li>
                  <li>ประสานงาน</li>
                  <li>ให้บริการลูกค้า</li>
                  <li>แก้ไขปัญหา</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Data Protection */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-seven-green" />
              <h2 className="text-xl font-bold text-gray-900">การคุ้มครองข้อมูล</h2>
            </div>
            <div className="bg-gradient-to-r from-seven-green/5 to-seven-orange/5 p-6 rounded-lg border">
              <p className="text-gray-700 leading-relaxed mb-4">
                บริษัทมีมาตรการรักษาความปลอดภัยข้อมูลส่วนบุคคลอย่างเหมาะสม ทั้งทางเทคนิคและการบริหารจัดการ 
                เพื่อป้องกันการสูญหาย เข้าถึง ใช้ เปลี่ยนแปลง แก้ไข หรือเปิดเผยข้อมูลส่วนบุคคลโดยไม่ได้รับอนุญาต
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>การเข้ารหัสข้อมูล (Data Encryption)</li>
                <li>การควบคุมการเข้าถึงข้อมูล (Access Control)</li>
                <li>การสำรองข้อมูล (Data Backup)</li>
                <li>การอบรมพนักงานเรื่องความปลอดภัยข้อมูล</li>
              </ul>
            </div>
          </div>

          {/* User Rights */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-seven-orange" />
              <h2 className="text-xl font-bold text-gray-900">สิทธิของเจ้าของข้อมูล</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-white border border-gray-200 rounded-lg">
                  <div className="w-2 h-2 bg-seven-green rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-gray-900">สิทธิในการเข้าถึงข้อมูล</h4>
                    <p className="text-sm text-gray-600">ขอดูข้อมูลส่วนบุคคลที่เราเก็บรักษาไว้</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-white border border-gray-200 rounded-lg">
                  <div className="w-2 h-2 bg-seven-green rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-gray-900">สิทธิในการแก้ไขข้อมูล</h4>
                    <p className="text-sm text-gray-600">ขอแก้ไขข้อมูลที่ไม่ถูกต้องหรือไม่สมบูรณ์</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-white border border-gray-200 rounded-lg">
                  <div className="w-2 h-2 bg-seven-orange rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-gray-900">สิทธิในการลบข้อมูล</h4>
                    <p className="text-sm text-gray-600">ขอลบข้อมูลส่วนบุคคลในกรณีที่กฎหมายอนุญาต</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-white border border-gray-200 rounded-lg">
                  <div className="w-2 h-2 bg-seven-orange rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-gray-900">สิทธิในการคัดค้าน</h4>
                    <p className="text-sm text-gray-600">คัดค้านการประมวลผลข้อมูลส่วนบุคคล</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Phone className="w-6 h-6 text-seven-green" />
              <h2 className="text-xl font-bold text-gray-900">การติดต่อเรื่องข้อมูลส่วนบุคคล</h2>
            </div>
            <div className="bg-gradient-to-r from-seven-green/10 to-seven-orange/10 p-6 rounded-lg border">
              <p className="text-gray-700 mb-4">
                หากท่านมีคำถาม ข้อสงสัย หรือต้องการใช้สิทธิเกี่ยวกับข้อมูลส่วนบุคคล สามารถติดต่อเราได้ที่:
              </p>
              <div className="space-y-2">
                <p className="text-gray-700"><strong>บริษัท:</strong> NTS Revelation จำกัด</p>
                <p className="text-gray-700"><strong>อีเมล:</strong> privacy@ntsrevelation.com</p>
                <p className="text-gray-700"><strong>โทรศัพท์:</strong> 098-348-5259</p>
                <p className="text-gray-700"><strong>LINE Official:</strong> @7rider</p>
              </div>
            </div>
          </div>

          {/* Effective Date */}
          <div className="border-t pt-6">
            <p className="text-sm text-gray-600 text-center">
              นโยบายความเป็นส่วนตัวฉบับนี้มีผลบังคับใช้ตั้งแต่วันที่ 1 มกราคม 2567<br/>
              บริษัทขอสงวนสิทธิ์ในการแก้ไขเปลี่ยนแปลงนโยบายนี้ โดยจะแจ้งให้ทราบล่วงหน้า
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;