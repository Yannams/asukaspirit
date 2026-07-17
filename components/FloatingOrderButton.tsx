"use client";

import OrderModal from "./OrderModal";

interface FloatingOrderButtonProps {
  appareilName?: string;
}

export default function FloatingOrderButton({ appareilName = "" }: FloatingOrderButtonProps) {
  return (
    <div className="fixed bottom-8 left-0 w-full flex justify-center z-[9999] pointer-events-none">
      <div className="pointer-events-auto">
        <OrderModal defaultAppareil={appareilName}>
          <button 
            className="flex items-center justify-center gap-3 bg-[#222222] hover:bg-[#F26A3B] text-white rounded-full px-8 py-4 font-sans font-medium text-[16px] shadow-[0_8px_30px_rgb(0,0,0,0.3)] transition-all duration-300 group"
            style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}
          >
            <div className="relative flex items-center justify-center">
              {/* Cart Icon */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              {/* Plus Badge */}
              <div className="absolute -top-1.5 -right-2 bg-[#222222] group-hover:bg-[#F26A3B] rounded-full transition-colors duration-300 border-[2px] border-[#222222] group-hover:border-[#F26A3B]">
                <div className="bg-white text-[#222222] group-hover:text-[#F26A3B] rounded-full w-[12px] h-[12px] flex items-center justify-center transition-colors duration-300">
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </div>
              </div>
            </div>
            Commander
          </button>
        </OrderModal>
      </div>
    </div>
  );
}
