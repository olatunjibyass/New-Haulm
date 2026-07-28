import React from 'react';
import { INDUSTRIES, COMPANY_INFO } from '../data/mockData';
import { Building2, HardHat, Landmark, Trees, Layers3, Route, Shovel, CheckCircle2, ArrowRight, Phone } from 'lucide-react';

interface IndustriesPageProps {
  openQuoteModal: () => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ openQuoteModal }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] text-[10px] font-black uppercase tracking-widest">
          <Building2 className="w-3.5 h-3.5 text-[#10B981]" />
          VERTICAL INDUSTRY SOLUTIONS
        </span>
        <h1 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
          Industries We Serve Across Nova Scotia
        </h1>
        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
          Customized dispatch logistics, dedicated fleet allocations, and specialized dump truck configurations designed to meet the exact operational demands of your industry sector.
        </p>
      </div>

      {/* Industries Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {INDUSTRIES.map((ind) => (
          <div
            key={ind.id}
            className="bg-[#1C2541] border border-white/10 overflow-hidden shadow-lg flex flex-col justify-between group hover:border-[#10B981]/50 transition-all hover:-translate-y-0.5"
          >
            <div>
              {/* Image Header */}
              <div className="h-36 relative overflow-hidden border-b border-white/10">
                <img
                  src={ind.image}
                  alt={ind.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-transparent to-transparent"></div>
                <h3 className="absolute bottom-2 left-3 right-3 text-base font-black text-white leading-tight uppercase tracking-wide">
                  {ind.name}
                </h3>
              </div>

              {/* Content */}
              <div className="p-4 space-y-3">
                <p className="text-gray-300 text-xs leading-relaxed">
                  {ind.overview}
                </p>

                {/* Key Benefits */}
                <div className="space-y-1.5 pt-1.5 border-t border-white/10">
                  <span className="text-[9px] font-black text-[#10B981] uppercase tracking-widest block">
                    Key Advantages:
                  </span>
                  <ul className="space-y-1 text-xs text-gray-300 font-medium">
                    {ind.keyBenefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                        <span className="text-[11px]">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Typical Projects */}
                <div className="pt-1">
                  <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest block mb-1">
                    Typical Projects:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {ind.typicalProjects.map((p, idx) => (
                      <span
                        key={idx}
                        className="bg-[#070D1F] border border-white/10 text-[10px] text-gray-300 px-2 py-0.5 font-bold uppercase tracking-wider"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Footer */}
            <div className="p-4 pt-0">
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="w-full py-2 bg-white/5 hover:bg-[#10B981] hover:text-black text-white font-black text-[11px] uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 border border-white/10"
              >
                <Phone className="w-3.5 h-3.5 text-[#10B981] group-hover:text-black" />
                <span>Call to Request Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
