import React, { useState } from 'react';
import { SERVICES, MATERIAL_DENSITIES, COMPANY_INFO } from '../data/mockData';
import { Layers, Mountain, Trash2, SunSnow, Truck, CheckCircle2, ShieldCheck, ArrowRight, FileText, Phone, Filter } from 'lucide-react';
import { Service } from '../types';

interface ServicesPageProps {
  openQuoteModal: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ openQuoteModal }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('all');

  const filteredServices = selectedServiceId === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.id === selectedServiceId);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] text-xs font-black uppercase tracking-widest">
          <Truck className="w-4 h-4 text-[#10B981]" />
          FULL-SERVICE TRANSPORTATION SOLUTIONS
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">
          Comprehensive Dump Truck & Hauling Services
        </h1>
        <p className="text-gray-300 text-base leading-relaxed">
          From quarry aggregate transport to mass earth excavation and winter storm support, Haulm Transport delivers reliable bulk transportation across Nova Scotia.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center items-center gap-2 border-b border-white/10 pb-6">
        <button
          onClick={() => setSelectedServiceId('all')}
          className={`px-4 py-2 text-xs font-black uppercase tracking-wider transition-colors ${
            selectedServiceId === 'all'
              ? 'bg-[#10B981] text-black font-bold shadow-lg shadow-[#10B981]/25'
              : 'bg-[#1C2541] text-gray-300 hover:bg-white/10 border border-white/10'
          }`}
        >
          All Services
        </button>
        {SERVICES.map((s) => (
          <button
            key={s.id}
            onClick={() => setSelectedServiceId(s.id)}
            className={`px-4 py-2 text-xs font-black uppercase tracking-wider transition-colors ${
              selectedServiceId === s.id
                ? 'bg-[#10B981] text-black font-bold shadow-lg shadow-[#10B981]/25'
                : 'bg-[#1C2541] text-gray-300 hover:bg-white/10 border border-white/10'
            }`}
          >
            {s.title}
          </button>
        ))}
      </div>

      {/* Services List Detail Cards */}
      <div className="space-y-12">
        {filteredServices.map((service, index) => (
          <div
            key={service.id}
            className="bg-[#1C2541] border border-white/10 overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:border-[#10B981]/40 transition-colors p-6 sm:p-8"
          >
            {/* Image (5 Cols) */}
            <div className={`lg:col-span-5 h-80 sm:h-96 border border-white/10 overflow-hidden relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
              <img
                src={service.image}
                alt={service.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-[#070D1F]/80 backdrop-blur-md p-3 border border-white/10 text-xs">
                <span className="text-[#10B981] font-black block uppercase text-[10px] tracking-widest">Primary Equipment</span>
                <span className="text-white font-semibold">{service.equipment.join(' • ')}</span>
              </div>
            </div>

            {/* Content (7 Cols) */}
            <div className={`lg:col-span-7 space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
              <div>
                <span className="text-xs font-black text-[#10B981] uppercase tracking-widest block mb-1">
                  SERVICE OVERVIEW
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                  {service.title}
                </h2>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed">
                {service.fullDesc}
              </p>

              {/* Materials Transported Grid */}
              <div className="space-y-2">
                <h4 className="text-xs font-black text-[#10B981] uppercase tracking-widest">
                  Materials Handled:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-200">
                  {service.materials.map((mat, i) => (
                    <div key={i} className="bg-[#070D1F] px-3 py-2 border border-white/10 flex items-center gap-2 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                      <span>{mat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Specs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {service.specs.map((spec, i) => (
                  <div key={i} className="bg-[#070D1F] p-3 border border-white/10 text-xs">
                    <span className="text-[10px] text-gray-400 block font-black uppercase tracking-wider">{spec.label}</span>
                    <span className="text-white font-mono font-bold mt-0.5 block">{spec.value}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="px-6 py-3 bg-[#10B981] hover:bg-[#059669] text-black font-black text-xs uppercase tracking-widest shadow-lg shadow-[#10B981]/25 transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-black" />
                  <span>Call to Request Quote for {service.title}</span>
                </a>
              </div>

            </div>

          </div>
        ))}
      </div>

      {/* Material Density Reference Chart */}
      <div className="bg-[#1C2541] border border-white/10 p-6 sm:p-8 space-y-6">
        <div>
          <span className="text-xs font-black text-[#10B981] uppercase tracking-widest block">
            NOVA SCOTIA AGGREGATE REFERENCE GUIDE
          </span>
          <h3 className="text-2xl font-black text-white uppercase tracking-tight mt-1">
            Material Weight & Density Table (Tons per Cubic Yard)
          </h3>
          <p className="text-gray-300 text-xs sm:text-sm mt-1">
            Understanding material weight densities is critical for Nova Scotia highway load limit compliance and accurate project budgeting.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-gray-300 border-collapse">
            <thead>
              <tr className="bg-[#070D1F] border-b border-white/10 text-[#10B981] font-black uppercase tracking-wider">
                <th className="p-3">Material Name</th>
                <th className="p-3">Category</th>
                <th className="p-3">Weight Density</th>
                <th className="p-3">Tri-Axle Capacity (~20T Limit)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 font-mono">
              {MATERIAL_DENSITIES.map((mat) => (
                <tr key={mat.id} className="hover:bg-white/5">
                  <td className="p-3 font-bold text-white font-sans uppercase">{mat.name}</td>
                  <td className="p-3 capitalize">{mat.category}</td>
                  <td className="p-3 text-[#10B981]">{mat.tonsPerCubicYard} Tons / cu. yd</td>
                  <td className="p-3 text-[#10B981]">~ {Math.round(20 / mat.tonsPerCubicYard)} cu. yds per load</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
