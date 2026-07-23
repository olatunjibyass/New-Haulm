import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, ShieldCheck, FileText, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface ContactPageProps {
  openQuoteModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ openQuoteModal }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: 'General Dispatch Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] text-xs font-black uppercase tracking-widest">
          <Phone className="w-4 h-4 text-[#10B981]" />
          24/7 DISPATCH & CONTACT CENTER
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">
          Get in Touch with Haulm Transport
        </h1>
        <p className="text-gray-300 text-base leading-relaxed">
          Need immediate dump truck dispatch, aggregate pricing, or project consultation? Reach our Nova Scotia team 24/7.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Direct Contact Info & Hours (5 Cols) */}
        <div className="lg:col-span-5 space-y-8">
          
          <div className="bg-[#1C2541] border border-white/10 p-6 sm:p-8 space-y-6 shadow-xl">
            <h2 className="text-xl font-black text-white uppercase tracking-wide border-b border-white/10 pb-3">
              Direct Contact Channels
            </h2>

            <div className="space-y-5 text-sm text-gray-300">
              
              {/* Phone Numbers */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#10B981]/20 text-[#10B981] flex items-center justify-center shrink-0 border border-[#10B981]/30">
                  <Phone className="w-5 h-5 text-[#10B981]" />
                </div>
                <div>
                  <span className="text-xs font-black text-[#10B981] uppercase tracking-widest block">Dispatch Line (24/7)</span>
                  <a href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`} className="text-lg font-black text-white hover:text-[#10B981] transition-colors">
                    {COMPANY_INFO.phone}
                  </a>
                  <p className="text-xs text-gray-400 mt-0.5">Local: {COMPANY_INFO.localPhone}</p>
                </div>
              </div>

              {/* Email Addresses */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#10B981]/20 text-[#10B981] flex items-center justify-center shrink-0 border border-[#10B981]/30">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-black text-[#10B981] uppercase tracking-widest block">Email Enquiries</span>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm font-bold text-white hover:text-[#10B981] transition-colors block">
                    {COMPANY_INFO.email}
                  </a>
                  <p className="text-xs text-gray-400">Quotes: {COMPANY_INFO.quoteEmail}</p>
                </div>
              </div>

              {/* Headquarters */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#10B981]/20 text-[#10B981] flex items-center justify-center shrink-0 border border-[#10B981]/30">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-black text-[#10B981] uppercase tracking-widest block">Dispatch Headquarters</span>
                  <p className="text-xs text-gray-200 font-medium leading-relaxed">
                    {COMPANY_INFO.address}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#10B981]/20 text-[#10B981] flex items-center justify-center shrink-0 border border-[#10B981]/30">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-black text-[#10B981] uppercase tracking-widest block">Operating Hours</span>
                  <p className="text-xs text-gray-200 leading-relaxed">
                    {COMPANY_INFO.hours}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Interactive Nova Scotia Service Area Map Visualizer */}
          <div className="bg-[#1C2541] border border-white/10 p-6 space-y-4 shadow-xl">
            <h3 className="text-sm font-black text-white uppercase tracking-wider flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#10B981]" />
              Nova Scotia Service Coverage Map
            </h3>

            <div className="bg-[#070D1F] border border-white/10 p-4 text-xs space-y-3">
              <div className="flex justify-between items-center text-gray-400 border-b border-white/10 pb-2">
                <span>Core Hub Yard:</span>
                <span className="text-[#10B981] font-black uppercase">71 Simmonds Rd, North Preston, NS</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-300 font-semibold">
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#10B981]"></span> Halifax (HRM)</span>
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#10B981]"></span> Dartmouth & Burnside</span>
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#10B981]"></span> Bedford & Sackville</span>
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#10B981]"></span> Truro & Central NS</span>
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#10B981]"></span> Annapolis Valley</span>
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#10B981]"></span> Cape Breton & South Shore</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Contact Form (7 Cols) */}
        <div className="lg:col-span-7 bg-[#1C2541] border border-white/10 p-6 sm:p-8 shadow-2xl">
          
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div>
                <span className="text-xs font-black text-[#10B981] uppercase tracking-widest block mb-1">
                  GET A FREE QUOTE WITHIN 24 HOURS
                </span>
                <h2 className="text-2xl font-black text-white uppercase tracking-tight">
                  Send a Direct Dispatch Message
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-gray-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Michael Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#070D1F] border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#10B981] font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-gray-300 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Vance Civil Contracting"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-[#070D1F] border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#10B981] font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-gray-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="michael@vance.ca"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#070D1F] border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#10B981] font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-gray-300 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(902) 201-5062"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#070D1F] border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#10B981] font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-gray-300 mb-1">
                  Inquiry Topic
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-[#070D1F] border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#10B981] font-medium"
                >
                  <option value="General Dispatch Inquiry">General Dispatch Inquiry</option>
                  <option value="Aggregate Delivery Quote">Aggregate Delivery Quote</option>
                  <option value="Earthmoving & Soil Haulage">Earthmoving & Soil Haulage</option>
                  <option value="Demolition Waste Removal">Demolition Waste Removal</option>
                  <option value="Winter Road Salt & Snow Support">Winter Road Salt & Snow Support</option>
                  <option value="Contractor Account Setup">Contractor Account Setup</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-gray-300 mb-1">
                  Project / Site Message Details *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Include job site location, estimated tonnage/loads, preferred start date, and special access rules..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#070D1F] border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#10B981] font-medium"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#10B981] hover:bg-[#059669] text-black font-black text-xs uppercase tracking-widest shadow-lg shadow-[#10B981]/25 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 text-black" />
                <span>Send Message to Dispatch</span>
              </button>

            </form>
          ) : (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 bg-[#10B981]/20 text-[#10B981] flex items-center justify-center mx-auto border border-[#10B981]/40">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight">Message Received!</h3>
              <p className="text-gray-300 text-sm max-w-md mx-auto">
                Thank you for contacting Haulm Transport. A dispatch coordinator will contact you at <strong className="text-[#10B981]">{formData.email}</strong> or call <strong className="text-[#10B981]">{formData.phone}</strong> shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 bg-white/5 hover:bg-white/10 text-white font-black text-xs uppercase tracking-widest border border-white/10"
              >
                Send Another Message
              </button>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
