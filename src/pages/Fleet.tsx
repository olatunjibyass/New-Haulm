import React from 'react';
import { FLEET, COMPANY_INFO } from '../data/mockData';
import { Truck, ShieldCheck, Wrench, CheckCircle2, ArrowRight, Activity, Cpu, Fuel, Phone } from 'lucide-react';

interface FleetPageProps {
  openQuoteModal: () => void;
}

export const FleetPage: React.FC<FleetPageProps> = ({ openQuoteModal }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] text-xs font-black uppercase tracking-widest">
          <Truck className="w-4 h-4 text-[#10B981]" />
          COMMERCIAL HEAVY TRANSPORT FLEET
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">
          Modern Dump Trucks & Heavy Haul Equipment
        </h1>
        <p className="text-gray-300 text-base leading-relaxed">
          Haulm Transport maintains a late-model fleet engineered specifically for Nova Scotia highway regulations, heavy payload efficiency, and maximum job site safety.
        </p>
      </div>

      {/* Safety & Maintenance Standard Banner */}
      <div className="bg-[#1C2541] border border-white/10 p-8 shadow-2xl grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <div className="w-10 h-10 bg-[#10B981]/20 text-[#10B981] flex items-center justify-center border border-[#10B981]/30">
            <ShieldCheck className="w-5 h-5 text-[#10B981]" />
          </div>
          <h3 className="text-lg font-black text-white uppercase tracking-wide">NSTIR & Safety Certified</h3>
          <p className="text-xs text-gray-300 leading-relaxed">
            100% compliant with Nova Scotia Vehicle Weight & Dimension regulations for maximum legal payload and infrastructure safety.
          </p>
        </div>

        <div className="space-y-2">
          <div className="w-10 h-10 bg-[#10B981]/20 text-[#10B981] flex items-center justify-center border border-[#10B981]/30">
            <Wrench className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-black text-white uppercase tracking-wide">Preventative Maintenance</h3>
          <p className="text-xs text-gray-300 leading-relaxed">
            Strict daily carrier pre-trip inspection logs, bi-weekly mechanic overhauls, and continuous tire/brake safety monitoring.
          </p>
        </div>

        <div className="space-y-2">
          <div className="w-10 h-10 bg-[#10B981]/20 text-[#10B981] flex items-center justify-center border border-[#10B981]/30">
            <Cpu className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-black text-white uppercase tracking-wide">GPS & Telematics Sync</h3>
          <p className="text-xs text-gray-300 leading-relaxed">
            Real-time GPS dispatch tracking, automated scale ticket logging, and electronic driver logbooks for complete transparency.
          </p>
        </div>
      </div>

      {/* Fleet Cards Grid */}
      <div className="space-y-12">
        {FLEET.map((truck) => (
          <div
            key={truck.id}
            className="bg-[#1C2541] border border-white/10 overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 hover:border-[#10B981]/40 transition-colors"
          >
            {/* Truck Image (5 Cols) */}
            <div className="lg:col-span-5 h-80 sm:h-96 overflow-hidden relative border border-white/10">
              <img
                src={truck.image}
                alt={truck.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-transparent to-transparent"></div>
              
              <div className="absolute top-4 left-4 bg-[#10B981] text-black px-3 py-1 text-xs font-black uppercase tracking-widest">
                {truck.type}
              </div>

              <div className="absolute bottom-4 left-4 right-4 bg-[#070D1F]/90 backdrop-blur-md p-4 border border-white/10 flex justify-between items-center text-xs">
                <div>
                  <span className="text-gray-400 block text-[10px] font-black uppercase tracking-wider">PAYLOAD CAPACITY</span>
                  <span className="text-white font-mono font-black text-base">{truck.capacityTons} Tons / {truck.capacityYards} Yards</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-400 block text-[10px] font-black uppercase tracking-wider">AXLE LAYOUT</span>
                  <span className="text-[#10B981] font-mono font-bold text-xs">{truck.axles}</span>
                </div>
              </div>
            </div>

            {/* Truck Specifications & Details (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                  {truck.name}
                </h2>
                <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                  {truck.description}
                </p>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {truck.specifications.map((spec, i) => (
                  <div key={i} className="bg-[#070D1F] p-3 border border-white/10 text-xs">
                    <span className="text-[10px] text-gray-400 font-black uppercase block tracking-wider">{spec.label}</span>
                    <span className="text-white font-mono font-bold mt-0.5 block">{spec.value}</span>
                  </div>
                ))}
              </div>

              {/* Safety Features */}
              <div className="space-y-2">
                <h4 className="text-xs font-black text-[#10B981] uppercase tracking-widest">
                  Safety & Technology Package:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-200">
                  {truck.safetyFeatures.map((feat, idx) => (
                    <div key={idx} className="bg-[#070D1F] px-3 py-2 border border-white/10 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                      <span className="font-semibold">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ideal Applications */}
              <div className="pt-2">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1.5">
                  Best Suited For:
                </span>
                <div className="flex flex-wrap gap-2">
                  {truck.idealFor.map((app, i) => (
                    <span key={i} className="bg-[#070D1F] border border-white/10 text-gray-300 text-xs px-3 py-1 font-bold uppercase tracking-wider">
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quote CTA */}
              <div className="pt-2">
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="px-6 py-3 bg-[#10B981] hover:bg-[#059669] text-black font-black text-xs uppercase tracking-widest shadow-lg transition-all flex items-center gap-2 shadow-[#10B981]/25"
                >
                  <Phone className="w-4 h-4 text-black" />
                  <span>Call to Request Fleet Allocation for {truck.name}</span>
                  <ArrowRight className="w-4 h-4 text-black" />
                </a>
              </div>

            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
