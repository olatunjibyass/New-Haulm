import React from 'react';
import { COMPANY_INFO } from '../data/mockData';
import { ShieldCheck, Award, Users, Heart, MapPin, Truck, CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutUsPageProps {
  openQuoteModal: () => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({ openQuoteModal }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      
      {/* Mission Hero Banner */}
      <div className="bg-[#1C2541] border border-white/10 p-5 sm:p-6 shadow-xl space-y-3 relative overflow-hidden">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] text-[10px] font-black uppercase tracking-widest">
          OUR CORE MISSION
        </span>

        <h1 className="text-xl sm:text-2xl font-black text-white leading-tight max-w-4xl uppercase tracking-tight">
          "To provide safe, reliable, and efficient bulk material transportation solutions that keep construction and infrastructure projects moving forward."
        </h1>

        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-3xl">
          Based in North Preston, Nova Scotia (71 Simmonds Rd), Haulm Transport is one of the province's most trusted aggregate, earthmoving, and heavy hauling transportation contractors.
        </p>

        <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono">
          <div className="bg-[#070D1F] px-3 py-1 border border-white/10 text-gray-300 font-bold uppercase">
            {COMPANY_INFO.cvor}
          </div>
          <div className="bg-[#070D1F] px-3 py-1 border border-white/10 text-gray-300 font-bold uppercase">
            {COMPANY_INFO.wsib}
          </div>
        </div>
      </div>

      {/* Grid: History & Safety Commitment */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        
        {/* History */}
        <div className="space-y-2">
          <span className="text-[10px] font-black text-[#10B981] uppercase tracking-widest block">
            COMPANY HISTORY & NOVA SCOTIA FOOTPRINT
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
            Built on Grit, Precision, and Dependability
          </h2>
          <p className="text-gray-300 text-xs leading-relaxed">
            With over 15 years of industry experience, Haulm Transport understands the demanding timelines of Atlantic Canadian civil construction. From highway expansions on Hwy 101, 102, and 104 to residential developments in Bedford and commercial projects in downtown Halifax, our fleet delivers uncompromised reliability.
          </p>
          <p className="text-gray-300 text-xs leading-relaxed">
            We operate out of our main yard at 71 Simmonds Rd, North Preston, NS, enabling rapid truck deployment across HRM, Dartmouth, Bedford, Truro, and all surrounding Maritime regions.
          </p>
        </div>

        {/* Safety Image */}
        <div className="h-48 sm:h-60 overflow-hidden relative border border-white/10 shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=80"
            alt="Haulm Transport Drivers and Fleet"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-transparent to-transparent"></div>
          <div className="absolute bottom-2 left-2 right-2 bg-[#070D1F]/90 p-2 border border-white/10">
            <span className="text-[#10B981] font-black text-[10px] uppercase tracking-widest block">Safety First Culture</span>
            <span className="text-white text-[11px] font-medium">Zero lost-time safety incidents maintained across all regional haulage operations.</span>
          </div>
        </div>

      </div>

      {/* Safety Commitment & Drivers Training */}
      <div className="bg-[#1C2541] border border-white/10 p-5 space-y-4">
        <div className="text-center max-w-2xl mx-auto space-y-1">
          <span className="text-[#10B981] font-black text-[10px] uppercase tracking-widest block">
            UNCOMPROMISED SAFETY STANDARDS
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
            Safety Commitment & Operator Excellence
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#070D1F] p-4 border border-white/10 space-y-2">
            <ShieldCheck className="w-6 h-6 text-[#10B981]" />
            <h3 className="text-sm font-black text-white uppercase tracking-wide">Driver Training & Certification</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              NS Commercial License with specialized training in low-clearance backing, live-bottom conveyors, and night paving.
            </p>
          </div>

          <div className="bg-[#070D1F] p-4 border border-white/10 space-y-2">
            <Award className="w-6 h-6 text-[#10B981]" />
            <h3 className="text-sm font-black text-white uppercase tracking-wide">Industry Certifications</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Active members of Nova Scotia Safety Guidelines, Atlantic Provinces Trucking Association, and WCB Nova Scotia certified.
            </p>
          </div>

          <div className="bg-[#070D1F] p-4 border border-white/10 space-y-2">
            <Heart className="w-6 h-6 text-[#10B981]" />
            <h3 className="text-sm font-black text-white uppercase tracking-wide">Community & Sustainability</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Supporting soil guidelines, diverting 90%+ demolition concrete, and supporting local youth apprenticeships.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
