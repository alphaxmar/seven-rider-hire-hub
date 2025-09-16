import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">คำถามที่พบบ่อย</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">คำตอบสำหรับข้อสงสัยเกี่ยวกับงานไรเดอร์ร้านสะดวกซื้อชั้นนำ</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg shadow-sm border border-gray-200">
              <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-900 hover:text-seven-orange-light">
                ไรเดอร์ร้านสะดวกซื้อชั้นนำมีรายได้เท่าไหร่?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                ไรเดอร์ร้านสะดวกซื้อชั้นนำมีรายได้ประมาณ 15,000 - 30,000 บาทต่อเดือน ขึ้นอยู่กับสาขาและจำนวนบิลที่ส่ง โดยคิดค่าส่งตามระยะทางและจำนวนออเดอร์ที่ส่งได้ในแต่ละวัน
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg shadow-sm border border-gray-200">
              <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-900 hover:text-seven-orange-light">
                ต้องมีประสบการณ์ไรเดอร์มาก่อนหรือไม่?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                ไม่จำเป็นต้องมีประสบการณ์มาก่อน เราเปิดรับทั้งผู้ที่มีและไม่มีประสบการณ์ โดยจะมีการอบรมวิธีการทำงานให้ก่อนเริ่มงานจริง ขอเพียงมีใบขับขี่รถจักรยานยนต์ที่ถูกต้องตามกฎหมาย
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg shadow-sm border border-gray-200">
              <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-900 hover:text-seven-orange-light">
                ทำงานกี่วันต่อสัปดาห์? สามารถเลือกเวลาทำงานได้หรือไม่?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                ไรเดอร์สามารถเลือกวันและเวลาทำงานได้อย่างยืดหยุ่น โดยทั่วไปทำงาน 5-6 วันต่อสัปดาห์ มีช่วงเวลาให้เลือกทำงานหลายช่วง ทั้งช่วงเช้า กลางวัน และเย็น ทำให้สามารถจัดการเวลาได้ตามความสะดวก
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-lg shadow-sm border border-gray-200">
              <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-900 hover:text-seven-orange-light">
                มีพื้นที่ให้บริการที่ไหนบ้าง?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                เรามีพื้นที่ให้บริการครอบคลุมทั่วกรุงเทพฯ ปริมณฑล และในเมืองใหญ่ทั่วประเทศไทย ไรเดอร์สามารถเลือกทำงานในพื้นที่ใกล้บ้านได้ เพื่อความสะดวกในการเดินทาง
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-lg shadow-sm border border-gray-200">
              <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-900 hover:text-seven-orange-light">
                มีสวัสดิการอะไรให้ไรเดอร์บ้าง?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                ไรเดอร์จะได้รับสวัสดิการหลายอย่าง เช่น ประกันอุบัติเหตุ, โบนัสตามผลงาน, ค่าน้ำมันเพิ่มเติมในช่วงราคาน้ำมันสูง (พิจารณาเป็นรายครั้งและรายสาขา), ชุดยูนิฟอร์ม และโอกาสในการเติบโตในสายงาน
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;