import React, { useState, useEffect } from 'react';
import { Truck, Radio, ShieldCheck, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export const LiveDispatchBanner: React.FC = () => {
  const [currentUpdateIndex, setCurrentUpdateIndex] = useState(0);

  const dispatchUpdates = [
    '⚡ LIVE DISPATCH: 18 Tri-Axle Units active on Hwy 102 Expansion Project (Bedford / HRM)',
    '🚛 FLEET ALERT: Aggregate hauling available for Halifax, Dartmouth & Sackville same-day delivery',
    '🛡️ SAFETY CERTIFIED: 100% NSTIR Compliant & NS Safety Rated Fleet | WCB Insured Drivers',
    '🏗️ QUARRY SHUTTLE: Continuous Granular A/B supply running from HRM Quarry Yards',
    `📞 24Hr DISPATCH LINE: Call ${COMPANY_INFO.phone} for immediate truck allocation`
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentUpdateIndex((prev) => (prev + 1) % dispatchUpdates.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [dispatchUpdates.length]);

  return (
    <div className="bg-[#070D1F] text-white border-b border-white/10 text-xs sm:text-sm py-2 px-4 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left: Dispatch Ticker */}
        <div className="flex items-center gap-3 overflow-hidden w-full md:w-auto">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-widest bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/40 shrink-0">
            <Radio className="w-3 h-3 animate-pulse text-[#10B981]" />
            DISPATCH ACTIVE
          </span>
          <p className="font-semibold text-gray-300 truncate transition-all duration-500 text-xs">
            {dispatchUpdates[currentUpdateIndex]}
          </p>
        </div>

        {/* Right: Quick Contacts & Badges */}
        <div className="hidden lg:flex items-center gap-6 shrink-0 text-gray-400 font-bold text-xs uppercase tracking-wider">
          <span className="flex items-center gap-1.5 text-[#10B981]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
            {COMPANY_INFO.cvor}
          </span>
          <a
            href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
            className="flex items-center gap-1.5 text-[#10B981] hover:text-[#059669] transition-colors font-black"
          >
            <Phone className="w-3.5 h-3.5 text-[#10B981]" />
            24Hr Hotline: {COMPANY_INFO.phone}
          </a>
        </div>
      </div>
    </div>
  );
};
