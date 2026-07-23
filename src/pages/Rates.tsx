import React, { useState } from 'react';
import { DollarSign, Clock, Scale, CheckCircle2, ShieldCheck, FileText, ArrowRight, HelpCircle, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface RatesPageProps {
  openQuoteModal: () => void;
}

export const RatesPage: React.FC<RatesPageProps> = ({ openQuoteModal }) => {
  const [rateModel, setRateModel] = useState<'hourly' | 'per_ton'>('per_ton');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] text-xs font-black uppercase tracking-widest">
          <DollarSign className="w-4 h-4 text-[#10B981]" />
          TRANSPARENT COMMERCIAL PRICING
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">
          Rates & Operational Service Models
        </h1>
        <p className="text-gray-300 text-base leading-relaxed">
          Haulm Transport provides flexible billing options tailored to your project scope, site location, and material requirements across Nova Scotia.
        </p>
      </div>

      {/* Model Toggle Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Model 1: Hourly Operations */}
        <div
          onClick={() => setRateModel('hourly')}
          className={`bg-[#1C2541] border p-8 space-y-6 cursor-pointer transition-all relative ${
            rateModel === 'hourly'
              ? 'border-[#10B981] shadow-2xl shadow-[#10B981]/10'
              : 'border-white/10 hover:border-white/20'
          }`}
        >
          <div className="flex justify-between items-start">
            <div className="w-14 h-14 bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30 flex items-center justify-center">
              <Clock className="w-7 h-7 text-[#10B981]" />
            </div>
            <span className="bg-[#10B981] text-black text-xs font-black px-3 py-1 uppercase tracking-widest">
              Flexibility First
            </span>
          </div>

          <div>
            <h2 className="text-2xl font-black text-white uppercase tracking-wide">Hourly Operations</h2>
            <p className="text-gray-300 text-xs sm:text-sm mt-2 leading-relaxed">
              Ideal for local construction projects, urban site excavations, or jobs requiring continuous hauling between quarries and job sites where cycle times may vary due to traffic or loading queues.
            </p>
          </div>

          <div className="space-y-3 pt-2 border-t border-white/10">
            <h4 className="text-xs font-black text-[#10B981] uppercase tracking-widest">Features & Benefits:</h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                <span><strong>Flexible Scheduling:</strong> Book single shifts or multi-week truck reservations.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                <span><strong>Dedicated Allocation:</strong> Trucks remain exclusively assigned to your job foreman.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                <span><strong>Efficient Movement:</strong> High driver productivity with real-time route optimization.</span>
              </li>
            </ul>
          </div>

          <a
            href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
            className="w-full py-3 bg-white/5 hover:bg-[#10B981] hover:text-black text-white font-black text-xs uppercase tracking-widest transition-colors border border-white/10 flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#10B981]" />
            Call to Request Hourly Rate Sheet
          </a>
        </div>

        {/* Model 2: Per-Ton / Per-Load Pricing */}
        <div
          onClick={() => setRateModel('per_ton')}
          className={`bg-[#1C2541] border p-8 space-y-6 cursor-pointer transition-all relative ${
            rateModel === 'per_ton'
              ? 'border-[#10B981] shadow-2xl shadow-[#10B981]/10'
              : 'border-white/10 hover:border-white/20'
          }`}
        >
          <div className="flex justify-between items-start">
            <div className="w-14 h-14 bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30 flex items-center justify-center">
              <Scale className="w-7 h-7" />
            </div>
            <span className="bg-[#10B981] text-black text-xs font-black px-3 py-1 uppercase tracking-widest">
              Fixed Budgeting
            </span>
          </div>

          <div>
            <h2 className="text-2xl font-black text-white uppercase tracking-wide">Per-Ton / Per-Load Pricing</h2>
            <p className="text-gray-300 text-xs sm:text-sm mt-2 leading-relaxed">
              Perfect for large-scale commercial projects, bulk aggregate supply, and mass soil relocations where predictable unit costs and accurate weight verification are required.
            </p>
          </div>

          <div className="space-y-3 pt-2 border-t border-white/10">
            <h4 className="text-xs font-black text-[#10B981] uppercase tracking-widest">Features & Benefits:</h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                <span><strong>Transparent Unit Pricing:</strong> Fixed cost per metric ton or cubic yard delivered.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                <span><strong>Accurate Load Tracking:</strong> Certified quarry scale tickets provided for every delivery.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                <span><strong>Cost-Effective Budgeting:</strong> Eliminates risk of delays impacting project bottom line.</span>
              </li>
            </ul>
          </div>

          <a
            href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
            className="w-full py-3 bg-[#10B981] hover:bg-[#059669] text-black font-black text-xs uppercase tracking-widest shadow-lg shadow-[#10B981]/25 transition-colors flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-black" />
            Call to Request Per-Ton Quote
          </a>
        </div>

      </div>

      {/* Scale Ticket Compliance Workflow Banner */}
      <div className="bg-[#070D1F] border border-white/10 p-8 space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-black text-[#10B981] uppercase tracking-widest block">
              DIGITAL COMPLIANCE & ACCOUNTABILITY
            </span>
            <h3 className="text-2xl font-black text-white uppercase tracking-tight mt-1">
              Quarry Weigh Ticket & Electronic Manifest Sync
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm mt-1 max-w-2xl">
              Every load transported by Haulm Transport is verified against certified weigh-scale tickets. Invoices include digital copies of scale tickets, time stamps, and GPS drop-off coordinates.
            </p>
          </div>

          <button
            onClick={openQuoteModal}
            className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-black text-xs uppercase tracking-widest border border-white/10 flex items-center gap-2 shrink-0"
          >
            <FileText className="w-4 h-4 text-[#10B981]" />
            <span>Setup Account</span>
          </button>
        </div>
      </div>

    </div>
  );
};
