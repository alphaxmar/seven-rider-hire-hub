import React, { useState } from 'react';

const GoogleForm = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            สมัครงานไรเดอร์ 7-Eleven
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            กรอกข้อมูลในฟอร์มด้านล่างเพื่อสมัครงาน ทีมงานจะติดต่อกลับโดยเร็วที่สุด
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto overflow-hidden">
          <div className="flex justify-end mb-2">
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-4 py-2 bg-seven-green text-white rounded-md text-sm font-medium hover:bg-seven-green/90 transition-colors"
            >
              {isExpanded ? 'ย่อฟอร์ม' : 'ขยายฟอร์ม'}
            </button>
          </div>
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSeWw0VZgxbRugRH7uUdCaV9B4VHcHcxR8NWzkoKYTDaDms_UQ/viewform?embedded=true" 
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

export default GoogleForm;