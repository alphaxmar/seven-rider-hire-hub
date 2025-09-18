import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Shield, Cookie } from 'lucide-react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const hasConsent = localStorage.getItem('cookieConsent');
    if (!hasConsent) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('consentDate', new Date().toISOString());
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    localStorage.setItem('consentDate', new Date().toISOString());
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50" />
      
      {/* Popup */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg shadow-2xl max-w-md w-full mx-4 relative animate-in fade-in-0 zoom-in-95 duration-300">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={20} />
          </button>

          {/* Content */}
          <div className="p-6">
            {/* Icon */}
            <div className="flex items-center justify-center w-16 h-16 bg-seven-orange/10 rounded-full mx-auto mb-4">
              <Shield className="w-8 h-8 text-seven-orange" />
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold text-center text-gray-900 mb-3">
              ความยินยอมในการใช้ข้อมูล
            </h2>

            {/* Description */}
            <div className="text-sm text-gray-600 space-y-3 mb-6">
              <p>
                เราใช้คุกกี้และเทคโนโลยีที่คล้ายกันเพื่อปรับปรุงประสบการณ์การใช้งานของคุณ 
                วิเคราะห์การใช้งาน และแสดงเนื้อหาที่เหมาะสม
              </p>
              
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="flex items-start gap-2">
                  <Cookie className="w-4 h-4 text-seven-orange mt-0.5 flex-shrink-0" />
                  <div className="text-xs">
                    <p className="font-medium text-gray-700 mb-1">ข้อมูลที่เราเก็บรวบรวม:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>ข้อมูลการใช้งานเว็บไซต์</li>
                      <li>ข้อมูลการติดต่อที่คุณให้ไว้</li>
                      <li>คุกกี้เพื่อปรับปรุงประสบการณ์</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="text-xs">
                คุณสามารถอ่านรายละเอียดเพิ่มเติมได้ใน
                <a 
                  href="/privacy-policy" 
                  className="text-seven-orange hover:underline ml-1"
                  target="_blank"
                >
                  นโยบายความเป็นส่วนตัว
                </a>
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={handleAccept}
                className="flex-1 bg-seven-orange hover:bg-seven-orange/90 text-white"
              >
                ยอมรับทั้งหมด
              </Button>
              <Button
                onClick={handleDecline}
                variant="outline"
                className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                ปฏิเสธ
              </Button>
            </div>

            {/* Additional info */}
            <p className="text-xs text-gray-500 text-center mt-4">
              การใช้งานเว็บไซต์ต่อไปถือว่าคุณยอมรับการใช้คุกกี้ตามนโยบายของเรา
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookieConsent;