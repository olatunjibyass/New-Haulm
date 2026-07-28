import React, { useState } from 'react';
import { 
  Truck, 
  Phone, 
  Menu, 
  X, 
  FileText, 
  ChevronRight,
  ShieldCheck,
  Calculator
} from 'lucide-react';
import { PageType } from '../types';
import { COMPANY_INFO } from '../data/mockData';

interface HeaderProps {
  currentPage: PageType;
  setCurrentPage: (page: PageType) => void;
  openQuoteModal: () => void;
  accessibilityMode?: { highContrast: boolean; largeText: boolean };
  toggleHighContrast?: () => void;
  toggleLargeText?: () => void;
  openSeoPanel?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  setCurrentPage,
  openQuoteModal,
  accessibilityMode,
  toggleHighContrast,
  toggleLargeText,
  openSeoPanel
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageType; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'industries', label: 'Industries We Serve' },
    { id: 'fleet', label: 'Our Fleet' },
    { id: 'rates', label: 'Rates & Operations' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageType) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0B132B]/95 border-b border-white/10 shadow-2xl backdrop-blur-md">
      {/* Top Continuous Rolling Banner */}
      <div className="bg-[#070D1F] border-b border-white/10 py-1.5 overflow-hidden text-xs text-gray-300 font-medium select-none">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex items-center gap-3 shrink-0">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping"></span>
              <span className="text-[#10B981] font-black uppercase tracking-wider text-[11px]">Nova Scotia Coverage:</span>
              <span className="text-white font-bold tracking-wide">HRM, Dartmouth, Bedford, Sackville, Truro & Highway Corridors</span>
              <span className="text-gray-500 font-mono text-[10px] ml-4">• 24Hr Heavy Transport Active</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          
          {/* Logo provided by user */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 text-left group focus:outline-none focus:ring-2 focus:ring-[#10B981] rounded-lg p-0.5"
          >
            <img 
              src="https://i.imgur.com/0Cd1bj0.png" 
              alt="Haulm Transport Logo" 
              className="h-9 sm:h-11 w-auto max-w-[220px] sm:max-w-[300px] object-contain group-hover:scale-105 transition-transform filter drop-shadow-md" 
            />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded text-xs font-bold uppercase tracking-widest transition-all duration-200 ${
                    isActive
                      ? 'text-[#10B981] bg-white/10 border-b-2 border-[#10B981] shadow-sm'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Call to Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="flex items-center gap-2 px-3.5 py-2 rounded border border-[#10B981]/30 bg-[#10B981]/10 hover:bg-[#10B981]/20 text-white text-xs font-bold transition-all shadow-sm group"
            >
              <Phone className="w-4 h-4 text-[#10B981] group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <span className="block text-[9px] text-gray-400 uppercase tracking-wider leading-none">DISPATCH</span>
                <span className="text-xs font-extrabold tracking-wide text-[#10B981]">{COMPANY_INFO.phone}</span>
              </div>
            </a>

            <a
              href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="flex items-center gap-2 px-5 py-2.5 bg-[#10B981] hover:bg-[#059669] text-black font-black text-xs uppercase tracking-widest shadow-lg shadow-[#10B981]/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Phone className="w-4 h-4 text-black" />
              Call to Request a Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="px-3 py-1.5 bg-[#10B981] text-black font-black text-xs uppercase flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5 text-black" />
              Call Quote
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none rounded"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070D1F] border-b border-white/10 px-4 pt-2 pb-6 space-y-2">
          <div className="flex items-center justify-between py-2 border-b border-white/10 text-xs text-gray-400">
            <span>Dispatch Line:</span>
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="font-bold text-[#10B981] flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5" />
              {COMPANY_INFO.phone}
            </a>
          </div>

          <div className="py-2 space-y-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 text-xs font-bold uppercase tracking-widest text-left transition-colors ${
                    isActive
                      ? 'bg-[#10B981]/20 text-[#10B981] border-l-4 border-[#10B981]'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                </button>
              );
            })}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 bg-[#10B981] text-black font-black text-xs uppercase tracking-widest text-center shadow-lg shadow-[#10B981]/20 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-black" />
              Call to Request a Quote
            </a>

            <a
              href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="w-full py-3 bg-white/10 text-white font-bold text-xs uppercase tracking-widest text-center flex items-center justify-center gap-2 border border-white/20"
            >
              <Phone className="w-4 h-4 text-[#10B981]" />
              Call Now: {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
