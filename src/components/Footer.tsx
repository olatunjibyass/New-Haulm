import React from 'react';
import { Truck, Phone, Mail, MapPin, ShieldCheck, Clock, FileText, ChevronRight, Award } from 'lucide-react';
import { PageType } from '../types';
import { COMPANY_INFO, SEO_KEYWORDS } from '../data/mockData';

interface FooterProps {
  setCurrentPage: (page: PageType) => void;
  openQuoteModal: () => void;
  openSeoPanel: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  setCurrentPage,
  openQuoteModal,
  openSeoPanel
}) => {
  const handleLink = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070D1F] text-gray-300 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Call-To-Action Banner inside Footer */}
        <div className="bg-[#1C2541] p-8 border border-[#10B981]/40 shadow-2xl mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[#10B981] font-black uppercase text-xs tracking-widest flex items-center gap-2 justify-center md:justify-start">
              <ShieldCheck className="w-4 h-4 text-[#10B981]" />
              NOVA SCOTIA DUMP TRUCK CONTRACTOR
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              Need Bulk Material Delivered or Site Waste Removed?
            </h3>
            <p className="text-gray-300 text-sm max-w-2xl">
              Get an accurate, transparent quote within 24 hours from our North Preston dispatch center. Tri-axle, tandem, and live bottom trailer fleets ready across Nova Scotia.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="w-full sm:w-auto px-6 py-3.5 bg-[#10B981] hover:bg-[#059669] text-black font-black text-xs uppercase tracking-widest transition-all text-center shadow-lg shadow-[#10B981]/25 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-black" />
              Call to Request a Quote
            </a>
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="w-full sm:w-auto px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white font-black text-xs uppercase tracking-widest text-center flex items-center justify-center gap-2 border border-white/10"
            >
              <Phone className="w-4 h-4 text-[#10B981]" />
              {COMPANY_INFO.phone}
            </a>
          </div>
        </div>

        {/* Footer Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info & Licenses */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="https://i.imgur.com/0Cd1bj0.png" 
                alt="Haulm Transport Logo" 
                className="h-16 sm:h-20 w-auto max-w-[320px] object-contain filter drop-shadow-md" 
              />
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Nova Scotia’s trusted bulk material transportation partner based in North Preston, NS. Specializing in aggregates, topsoil, excavated earth, demolition debris, and seasonal hauling with an experienced, safety-certified fleet.
            </p>

            {/* Compliance Badges */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="bg-[#1C2541] border border-white/10 text-gray-300 px-3 py-1.5 font-mono flex items-center gap-1.5 text-[11px] font-bold uppercase">
                <Award className="w-3.5 h-3.5 text-[#10B981]" />
                {COMPANY_INFO.cvor}
              </span>
              <span className="bg-[#1C2541] border border-white/10 text-gray-300 px-3 py-1.5 font-mono flex items-center gap-1.5 text-[11px] font-bold uppercase">
                <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                $10M Commercial Liability
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-widest mb-4 border-b border-[#10B981] pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { id: 'home', label: 'Home' },
                { id: 'services', label: 'Services Overview' },
                { id: 'industries', label: 'Industries We Serve' },
                { id: 'fleet', label: 'Fleet & Equipment' },
                { id: 'rates', label: 'Rates & Operations' },
                { id: 'about', label: 'About Haulm Transport' },
                { id: 'contact', label: 'Contact & Dispatch' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleLink(link.id as PageType)}
                    className="text-gray-400 hover:text-[#10B981] transition-colors flex items-center gap-1.5 font-semibold text-xs uppercase tracking-wider"
                  >
                    <ChevronRight className="w-3 h-3 text-[#10B981]" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services Offered */}
          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-widest mb-4 border-b border-[#10B981] pb-2 inline-block">
              Core Services
            </h4>
            <ul className="space-y-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
              <li className="flex items-center gap-1.5 hover:text-white transition-colors">
                <ChevronRight className="w-3 h-3 text-[#10B981]" />
                Aggregate Hauling (Gravel, Stone, Sand)
              </li>
              <li className="flex items-center gap-1.5 hover:text-white transition-colors">
                <ChevronRight className="w-3 h-3 text-[#10B981]" />
                Earth Moving & Topsoil Transport
              </li>
              <li className="flex items-center gap-1.5 hover:text-white transition-colors">
                <ChevronRight className="w-3 h-3 text-[#10B981]" />
                Construction Waste & Concrete Disposal
              </li>
              <li className="flex items-center gap-1.5 hover:text-white transition-colors">
                <ChevronRight className="w-3 h-3 text-[#10B981]" />
                Live Bottom Hot Mix Asphalt Shuttles
              </li>
              <li className="flex items-center gap-1.5 hover:text-white transition-colors">
                <ChevronRight className="w-3 h-3 text-[#10B981]" />
                Mulch, Road Salt & Winter Support
              </li>
              <li className="flex items-center gap-1.5 hover:text-white transition-colors">
                <ChevronRight className="w-3 h-3 text-[#10B981]" />
                NS Environment Soil Manifest Support
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Service Area */}
          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-widest mb-4 border-b border-[#10B981] pb-2 inline-block">
              Dispatch & Contact
            </h4>
            <div className="space-y-3 text-xs text-gray-400 font-medium">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#10B981] shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`} className="hover:text-[#10B981] font-black text-white">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#10B981] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#10B981]">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                <span>24Hr Dispatch Hotline | Office Mon-Fri 6AM-6PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* SEO Keywords Tag Cloud */}
        <div className="py-8 border-b border-white/10 text-xs text-gray-400 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-black text-gray-300 uppercase tracking-widest text-[11px]">
              Nova Scotia Regional SEO Coverage
            </span>
            <button
              onClick={openSeoPanel}
              className="text-[#10B981] hover:underline flex items-center gap-1 font-bold uppercase text-[11px]"
            >
              Inspect JSON-LD Schema & Meta Tags
            </button>
          </div>
          <div className="flex flex-wrap gap-2 pt-1">
            {SEO_KEYWORDS.map((kw, i) => (
              <span
                key={i}
                className="bg-[#1C2541] border border-white/10 px-2.5 py-1 text-[10px] font-mono font-bold text-gray-400 hover:text-white transition-colors uppercase"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-medium uppercase tracking-wider">
          <p>© {new Date().getFullYear()} Haulm Transport Inc. All rights reserved. Registered in Nova Scotia, Canada.</p>
          <div className="flex items-center gap-6 text-[11px]">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">NSTIR & Safety Standard</span>
            <span className="hover:text-white cursor-pointer">ADA Accessibility Compliant</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
