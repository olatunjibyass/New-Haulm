import React from 'react';
import { FLEET, COMPANY_INFO } from '../data/mockData';
import { Truck, ShieldCheck, Wrench, CheckCircle2, ArrowRight, Activity, Cpu, Fuel, Phone } from 'lucide-react';

interface FleetPageProps {
  openQuoteModal: () => void;
}

export const FleetPage: React.FC<FleetPageProps> = ({ openQuoteModal }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] text-[10px] font-black uppercase tracking-widest">
          <Truck className="w-3.5 h-3.5 text-[#10B981]" />
          COMMERCIAL HEAVY TRANSPORT FLEET
        </span>
        <h1 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
          Modern Dump Trucks & Heavy Haul Equipment
        </h1>
        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
          Haulm Transport maintains a late-model fleet engineered specifically for Nova Scotia highway regulations, heavy payload efficiency, and maximum job site safety.
        </p>
      </div>

      {/* Safety & Maintenance Standard Banner */}
      <div className="bg-[#1C2541] border border-white/10 p-4 shadow-xl grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-1">
          <div className="w-8 h-8 bg-[#10B981]/20 text-[#10B981] flex items-center justify-center border border-[#10B981]/30">
            <ShieldCheck className="w-4 h-4 text-[#10B981]" />
          </div>
          <h3 className="text-sm font-black text-white uppercase tracking-wide">NSTIR & Safety Certified</h3>
          <p className="text-[11px] text-gray-300 leading-snug">
            100% compliant with Nova Scotia Vehicle Weight & Dimension regulations for maximum legal payload.
          </p>
        </div>

        <div className="space-y-1">
          <div className="w-8 h-8 bg-[#10B981]/20 text-[#10B981] flex items-center justify-center border border-[#10B981]/30">
            <Wrench className="w-4 h-4" />
          </div>
          <h3 className="text-sm font-black text-white uppercase tracking-wide">Preventative Maintenance</h3>
          <p className="text-[11px] text-gray-300 leading-snug">
            Strict daily carrier pre-trip inspection logs, bi-weekly mechanic overhauls, and brake monitoring.
          </p>
        </div>

        <div className="space-y-1">
          <div className="w-8 h-8 bg-[#10B981]/20 text-[#10B981] flex items-center justify-center border border-[#10B981]/30">
            <Cpu className="w-4 h-4" />
          </div>
          <h3 className="text-sm font-black text-white uppercase tracking-wide">GPS & Telematics Sync</h3>
          <p className="text-[11px] text-gray-300 leading-snug">
            Real-time GPS dispatch tracking, automated scale ticket logging, and electronic driver logbooks.
          </p>
        </div>
      </div>

      {/* Fleet Cards Grid */}
      <div className="space-y-5">
        {FLEET.map((truck) => (
          <div
            key={truck.id}
            className="bg-[#1C2541] border border-white/10 overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-5 p-4 sm:p-5 hover:border-[#10B981]/40 transition-colors"
          >
            {/* Truck Image (5 Cols) */}
            <div className="lg:col-span-5 h-48 sm:h-56 overflow-hidden relative border border-white/10">
              <img
                src={truck.image}
                alt={truck.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-transparent to-transparent"></div>
              
              <div className="absolute top-2.5 left-2.5 bg-[#10B981] text-black px-2 py-0.5 text-[10px] font-black uppercase tracking-widest">
                {truck.type}
              </div>

              <div className="absolute bottom-2 left-2 right-2 bg-[#070D1F]/90 backdrop-blur-md p-2 border border-white/10 flex justify-between items-center text-xs">
                <div>
                  <span className="text-gray-400 block text-[9px] font-black uppercase tracking-wider">PAYLOAD CAPACITY</span>
                  <span className="text-white font-mono font-black text-xs">{truck.capacityTons} Tons / {truck.capacityYards} Yards</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-400 block text-[9px] font-black uppercase tracking-wider">AXLE LAYOUT</span>
                  <span className="text-[#10B981] font-mono font-bold text-[11px]">{truck.axles}</span>
                </div>
              </div>
            </div>

            {/* Truck Specifications & Details (7 Cols) */}
            <div className="lg:col-span-7 space-y-3">
              <div>
                <h2 className="text-lg sm:text-xl font-black text-white uppercase tracking-tight">
                  {truck.name}
                </h2>
                <p className="text-gray-300 text-xs mt-1 leading-relaxed">
                  {truck.description}
                </p>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {truck.specifications.map((spec, i) => (
                  <div key={i} className="bg-[#070D1F] p-2 border border-white/10 text-xs">
                    <span className="text-[9px] text-gray-400 font-black uppercase block tracking-wider">{spec.label}</span>
                    <span className="text-white font-mono font-bold text-[11px] mt-0.5 block truncate">{spec.value}</span>
                  </div>
                ))}
              </div>

              {/* Safety Features */}
              <div className="space-y-1">
                <h4 className="text-[10px] font-black text-[#10B981] uppercase tracking-widest">
                  Safety & Technology Package:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-gray-200">
                  {truck.safetyFeatures.map((feat, idx) => (
                    <div key={idx} className="bg-[#070D1F] px-2.5 py-1 border border-white/10 flex items-center gap-1.5 text-[11px]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                      <span className="font-semibold">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ideal Applications */}
              <div className="pt-1">
                <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest block mb-1">
                  Best Suited For:
                </span>
                <div className="flex flex-wrap gap-1">
                  {truck.idealFor.map((app, i) => (
                    <span key={i} className="bg-[#070D1F] border border-white/10 text-gray-300 text-[10px] px-2 py-0.5 font-bold uppercase tracking-wider">
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quote CTA */}
              <div className="pt-1">
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="px-4 py-2 bg-[#10B981] hover:bg-[#059669] text-black font-black text-xs uppercase tracking-widest shadow-md transition-all flex items-center gap-1.5 shadow-[#10B981]/25 inline-flex"
                >
                  <Phone className="w-3.5 h-3.5 text-black" />
                  <span>Call to Request Fleet Allocation</span>
                  <ArrowRight className="w-3.5 h-3.5 text-black" />
                </a>
              </div>

            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
