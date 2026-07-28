import React from 'react';
import { 
  Truck, 
  Phone, 
  FileText, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Users, 
  Building2, 
  Layers, 
  Mountain, 
  Trash2, 
  SunSnow, 
  ArrowRight,
  Sparkles,
  MapPin,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { PageType } from '../types';
import { KEY_STATS, SERVICES, FLEET, PROJECTS, COMPANY_INFO } from '../data/mockData';
import { GoogleReviewWidget } from '../components/GoogleReviewWidget';

interface HomeProps {
  setCurrentPage: (page: PageType) => void;
  openQuoteModal: () => void;
  onCalculatorQuote?: (material: string, tons: number) => void;
}

export const Home: React.FC<HomeProps> = ({ setCurrentPage, openQuoteModal }) => {
  return (
    <div className="space-y-8 pb-8">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[42vh] sm:min-h-[46vh] flex items-center bg-[#0B132B] overflow-hidden border-b border-white/10">
        
        {/* Grid Decorative Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none grid-bg-pattern"></div>

        {/* Hero Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=2000&q=85"
            alt="Haulm Transport Heavy Dump Truck Fleet"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center opacity-25 scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B132B] via-[#0B132B]/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-transparent to-transparent"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 w-full">
          <div className="max-w-3xl space-y-3">
            
            {/* Trust Badge */}
            <div className="inline-block px-2.5 py-1 bg-[#10B981]/20 text-[#10B981] text-[10px] font-black uppercase tracking-[0.25em] border border-[#10B981]/30">
              NOVA SCOTIA'S PREMIER DUMP TRUCK & AGGREGATE HAULER
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight tracking-tight uppercase">
              Reliable <span className="text-[#10B981]">Dump Truck</span> Hauling Services
            </h1>

            {/* Subheadline */}
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-2xl font-normal">
              We safely transport aggregates, soil, demolition materials, and bulk construction products with dependable service, competitive pricing, and experienced operators.
            </p>

            {/* Action Buttons */}
            <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="px-5 py-2.5 bg-[#10B981] hover:bg-[#059669] text-black font-black text-xs uppercase tracking-widest shadow-lg shadow-[#10B981]/25 transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-black" />
                <span>Call to Request a Quote</span>
                <ArrowRight className="w-3.5 h-3.5 text-black" />
              </a>

              <a
                href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="px-5 py-2.5 border border-[#10B981]/30 bg-[#10B981]/10 hover:bg-[#10B981]/20 text-white font-black text-xs uppercase tracking-widest shadow-lg flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#10B981]" />
                <span>Call Now: {COMPANY_INFO.phone}</span>
              </a>
            </div>

            {/* Quick Feature Highlights */}
            <div className="pt-3 grid grid-cols-2 sm:grid-cols-3 gap-2 border-t border-white/10 text-[11px] text-gray-300 font-semibold uppercase tracking-wider">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                <span>NSTIR Safety Licensed</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                <span>Same-Day Dispatch</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                <span>NS Environment Compliant</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* KEY STATISTICS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {KEY_STATS.map((stat, index) => (
            <div
              key={index}
              className="bg-[#1C2541] border border-white/10 p-3.5 shadow-xl relative overflow-hidden group hover:border-[#10B981]/50 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-black text-[#10B981] font-mono tracking-tight">
                {stat.value}
              </div>
              <h3 className="text-[11px] font-black text-white uppercase tracking-wider mt-0.5">
                {stat.label}
              </h3>
              <p className="text-[10px] text-gray-300 mt-0.5 leading-snug">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 border-b border-white/10 pb-3">
          <div className="space-y-1">
            <span className="text-[#10B981] font-black text-[11px] uppercase tracking-[0.2em] flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5 text-[#10B981]" />
              WHAT WE TRANSPORT & HAUL
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
              Dump Truck & Bulk Material Services
            </h2>
          </div>

          <button
            onClick={() => setCurrentPage('services')}
            className="px-4 py-1.5 bg-white/5 hover:bg-white/10 text-[#10B981] font-bold text-xs uppercase tracking-widest border border-white/10 flex items-center gap-1.5 shrink-0 self-start md:self-auto transition-colors"
          >
            <span>Explore All Services</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.slice(0, 4).map((service, index) => (
            <div
              key={service.id}
              className="bg-[#1C2541] border border-white/10 overflow-hidden shadow-xl flex flex-col justify-between group hover:border-[#10B981]/50 transition-all hover:-translate-y-0.5"
            >
              <div>
                {/* Service Image */}
                <div className="h-32 relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C2541] via-transparent to-transparent"></div>
                  <span className="absolute bottom-2 left-2 px-2 py-0.5 bg-[#10B981] text-black text-[10px] font-black uppercase tracking-wider">
                    0{index + 1}. {service.title}
                  </span>
                </div>

                {/* Service Info */}
                <div className="p-3.5 space-y-2">
                  <p className="text-gray-300 text-xs leading-snug line-clamp-2">
                    {service.shortDesc}
                  </p>

                  <div className="space-y-1 pt-1.5 border-t border-white/10">
                    <span className="text-[9px] font-black text-[#10B981] uppercase tracking-widest block">
                      Typical Materials:
                    </span>
                    <ul className="text-[11px] text-gray-300 space-y-0.5">
                      {service.materials.slice(0, 3).map((mat, i) => (
                        <li key={i} className="flex items-center gap-1 truncate">
                          <span className="w-1 h-1 bg-[#10B981] shrink-0"></span>
                          <span className="truncate">{mat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Service Footer CTA */}
              <div className="p-3.5 pt-0">
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="w-full py-2 bg-white/5 hover:bg-[#10B981] hover:text-black text-white font-black text-[11px] uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 border border-white/10"
                >
                  <Phone className="w-3 h-3 text-[#10B981] group-hover:text-black" />
                  <span>Call to Request Rate</span>
                  <ArrowRight className="w-3 h-3 text-[#10B981] group-hover:text-black" />
                </a>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="bg-[#070D1F] py-8 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          <div className="text-center max-w-3xl mx-auto space-y-1.5">
            <span className="text-[#10B981] font-black text-[11px] uppercase tracking-[0.2em] flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
              THE HAULM TRANSPORT ADVANTAGE
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
              Why Contractors Trust Haulm Transport
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {[
              {
                title: 'Reliable Scheduling',
                desc: 'Dedicated dispatch coordinators ensure trucks arrive on time for morning pit setups and continuous site shuttles.',
                icon: Clock
              },
              {
                title: 'Competitive Pricing',
                desc: 'Transparent hourly, per-ton, and per-load pricing with digital scale ticket integration to eliminate billing surprises.',
                icon: Sparkles
              },
              {
                title: 'Safety Focused Operations',
                desc: '100% NSTIR compliant, full NS carrier safety rating, $10M liability, and daily driver pre-trip safety inspection logs.',
                icon: ShieldCheck
              },
              {
                title: 'Modern Fleet',
                desc: 'Late-model Tri-Axles, Tandems, and Live Bottom trailers equipped with electric tarps and backup radar.',
                icon: Truck
              },
              {
                title: 'Experienced Drivers',
                desc: 'Safety-certified and professional drivers with extensive experience navigating restricted city job sites and highway zones across NS.',
                icon: Users
              },
              {
                title: 'On-Time Deliveries',
                desc: 'Real-time GPS tracking allows us to monitor route traffic and maintain seamless quarry-to-site delivery loops.',
                icon: MapPin
              },
            ].map((feature, i) => {
              const IconComp = feature.icon;
              return (
                <div
                  key={i}
                  className="bg-[#1C2541] border border-white/10 p-3.5 space-y-2 hover:border-[#10B981]/40 transition-colors shadow-lg"
                >
                  <div className="w-9 h-9 bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center text-[#10B981]">
                    <IconComp className="w-4 h-4 text-[#10B981]" />
                  </div>
                  <h3 className="text-sm font-black text-white uppercase tracking-tight">{feature.title}</h3>
                  <p className="text-gray-300 text-xs leading-snug">{feature.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* FEATURED PROJECTS GALLERY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 border-b border-white/10 pb-3">
          <div className="space-y-1">
            <span className="text-[#10B981] font-black text-[11px] uppercase tracking-[0.2em] flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-[#10B981]" />
              NOVA SCOTIA PROJECT SHOWCASE
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
              Featured Infrastructure Projects
            </h2>
          </div>

          <button
            onClick={() => setCurrentPage('fleet')}
            className="px-4 py-1.5 bg-white/5 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-widest border border-white/10 flex items-center gap-1.5 shrink-0"
          >
            <span>View Our Fleet</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#10B981]" />
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-[#1C2541] border border-white/10 overflow-hidden shadow-xl group hover:border-[#10B981]/50 transition-colors flex flex-col justify-between"
            >
              <div className="h-40 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C2541] via-[#1C2541]/40 to-transparent"></div>
                
                <div className="absolute bottom-2.5 left-3 right-3 flex justify-between items-end">
                  <div>
                    <span className="px-2 py-0.5 bg-[#10B981] text-black text-[10px] font-black uppercase tracking-wider mb-1 inline-block">
                      {project.category}
                    </span>
                    <h3 className="text-base font-black text-white uppercase tracking-tight drop-shadow-md">
                      {project.title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#10B981] bg-[#070D1F] px-2 py-0.5 border border-white/10">
                    {project.year}
                  </span>
                </div>
              </div>

              <div className="p-3.5 space-y-2">
                <p className="text-gray-300 text-xs leading-snug">
                  {project.description}
                </p>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px]">
                  <span className="text-gray-300 flex items-center gap-1 font-semibold uppercase">
                    <MapPin className="w-3 h-3 text-[#10B981]" />
                    {project.location}
                  </span>
                  <span className="font-mono font-bold text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 border border-[#10B981]/20">
                    {project.stats}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CUSTOMER TESTIMONIALS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GoogleReviewWidget />
      </section>

      {/* CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1C2541] border border-white/10 p-5 sm:p-6 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#10B981]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="space-y-1.5 text-center md:text-left max-w-2xl relative z-10">
            <span className="inline-block px-2.5 py-0.5 bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30 font-black text-[10px] uppercase tracking-widest">
              24Hr DISPATCH ACTIVE
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight leading-tight">
              Need Material Delivered or Removed?
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm font-normal">
              Get an accurate quote for aggregate hauling, topsoil delivery, or demolition debris removal today. Experienced drivers and modern fleet ready to mobilize.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto relative z-10">
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="w-full sm:w-auto px-5 py-2.5 bg-[#10B981] hover:bg-[#059669] text-black font-black text-xs uppercase tracking-widest shadow-lg shadow-[#10B981]/25 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-black" />
              <span>Call to Request Quote</span>
            </a>

            <a
              href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="w-full sm:w-auto px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white font-black text-xs uppercase tracking-widest text-center flex items-center justify-center gap-2 border border-white/20"
            >
              <Phone className="w-4 h-4 text-[#10B981]" />
              <span>Call Dispatch</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
};
