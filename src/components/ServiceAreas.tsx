import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

const ServiceAreas = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            พื้นที่ให้บริการของไรเดอร์ 7-Eleven
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ตรวจสอบพื้นที่ที่เปิดรับสมัครไรเดอร์ในปัจจุบัน
          </p>
          <div className="flex items-center justify-center mt-2">
            <MapPin className="w-5 h-5 text-seven-orange mr-2" />
            <span className="text-gray-700">เลือกพื้นที่ใกล้บ้านคุณ</span>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto overflow-hidden">
          <div className="flex justify-end mb-2">
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-4 py-2 bg-seven-green text-white rounded-md text-sm font-medium hover:bg-seven-green/90 transition-colors"
            >
              {isExpanded ? 'ย่อเอกสาร' : 'ขยายเอกสาร'}
            </button>
          </div>
          <iframe 
            src="https://docs.google.com/document/d/1rWwJYC3mU8EcPhBQ7-tJo9yjaPyZUca6drFOBGCcODc/edit?tab=t.0&embedded=true" 
            width="100%" 
            height="1800" 
            frameBorder="0" 
            marginHeight="0" 
            marginWidth="0"
            className="mx-auto shadow-lg rounded-lg"
            style={{ 
              minHeight: '600px', 
              height: isExpanded ? '2000px' : '1200px', 
              overflowY: 'auto',
              border: '1px solid #e5e7eb',
              borderRadius: '0.5rem',
              transition: 'height 0.3s ease-in-out'
            }}
          >
            Loading…
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;