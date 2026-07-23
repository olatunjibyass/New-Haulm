import React, { useState } from 'react';
import { X, FileText, CheckCircle2, Calculator, Truck, ShieldCheck, ArrowRight, Clock, MapPin, Calendar } from 'lucide-react';
import { QuoteFormData } from '../types';
import { SERVICES, MATERIAL_DENSITIES, COMPANY_INFO } from '../data/mockData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<QuoteFormData>({
    serviceType: 'aggregate-hauling',
    materialType: 'Gravel (Granular A)',
    quantityValue: 50,
    quantityUnit: 'tons',
    originCity: 'Halifax / Dartmouth Quarry',
    destinationCity: 'Bedford / Sackville Job Site',
    preferredDate: new Date().toISOString().split('T')[0],
    pricingPreference: 'per_ton',
    contactName: '',
    companyName: '',
    email: '',
    phone: '',
    additionalDetails: ''
  });

  if (!isOpen) return null;

  // Calculate estimated truck loads needed (Standard Tri-Axle ~ 20 tons)
  const estimatedLoads = Math.ceil((formData.quantityValue || 1) / 20);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0B132B]/90 backdrop-blur-md overflow-y-auto">
      <div className="bg-[#1C2541] border border-white/10 max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative my-8 text-white">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white bg-[#070D1F] border border-white/10 transition-colors"
          aria-label="Close quote modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="mb-6 border-b border-white/10 pb-4">
              <div className="flex items-center gap-2 text-[#10B981] font-black text-xs uppercase tracking-widest mb-1">
                <FileText className="w-4 h-4 text-[#10B981]" />
                ONLINE DISPATCH QUOTE REQUEST
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                Call to Request a Free Hauling Quote
              </h2>
              <p className="text-gray-300 text-sm mt-1">
                Fill in project details below. Get transparent per-ton, per-load, or hourly pricing within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Row 1: Service & Material */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-gray-300 mb-1">
                    Service Type *
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full bg-[#070D1F] border border-white/10 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#10B981] font-semibold"
                    required
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.id}>{s.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-gray-300 mb-1">
                    Material Type *
                  </label>
                  <select
                    value={formData.materialType}
                    onChange={(e) => setFormData({ ...formData, materialType: e.target.value })}
                    className="w-full bg-[#070D1F] border border-white/10 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#10B981] font-semibold"
                    required
                  >
                    {MATERIAL_DENSITIES.map((m) => (
                      <option key={m.id} value={m.name}>{m.name}</option>
                    ))}
                    <option value="Demolition Concrete Debris">Demolition Concrete Debris</option>
                    <option value="Asphalt Millings">Asphalt Millings</option>
                    <option value="Bulk Landscape Mulch">Bulk Landscape Mulch</option>
                    <option value="Other Bulk Product">Other Bulk Product</option>
                  </select>
                </div>
              </div>

              {/* Row 2: Quantity & Pricing Model */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-black uppercase tracking-wider text-gray-300 mb-1">
                    Estimated Quantity *
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      min="1"
                      value={formData.quantityValue}
                      onChange={(e) => setFormData({ ...formData, quantityValue: Number(e.target.value) })}
                      className="w-full bg-[#070D1F] border border-white/10 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#10B981] font-bold"
                      required
                    />
                    <select
                      value={formData.quantityUnit}
                      onChange={(e) => setFormData({ ...formData, quantityUnit: e.target.value as any })}
                      className="bg-[#070D1F] border border-white/10 px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#10B981] font-bold uppercase"
                    >
                      <option value="tons">Tons</option>
                      <option value="loads">Loads</option>
                      <option value="cubic_yards">Cubic Yards</option>
                      <option value="hours">Hours</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-gray-300 mb-1">
                    Pricing Model *
                  </label>
                  <select
                    value={formData.pricingPreference}
                    onChange={(e) => setFormData({ ...formData, pricingPreference: e.target.value as any })}
                    className="w-full bg-[#070D1F] border border-white/10 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#10B981] font-semibold"
                  >
                    <option value="per_ton">Per-Ton Pricing</option>
                    <option value="per_load">Per-Load Pricing</option>
                    <option value="hourly">Hourly Operation</option>
                    <option value="flexible">Best Value Recommendation</option>
                  </select>
                </div>
              </div>

              {/* Instant Load Estimator Badge */}
              <div className="bg-[#070D1F] border border-white/10 p-3 flex items-center justify-between text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[#10B981]" />
                  <span className="font-bold uppercase">Estimated Fleet Requirement:</span>
                </div>
                <span className="font-mono font-black text-[#10B981] bg-[#10B981]/10 px-2.5 py-1 border border-[#10B981]/30">
                  ~ {estimatedLoads} Tri-Axle Load{estimatedLoads > 1 ? 's' : ''} (20T / load)
                </span>
              </div>

              {/* Row 3: Origin & Destination */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-gray-300 mb-1 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#10B981]" />
                    Origin / Pickup City *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. HRM Quarry Yard, Dartmouth, Truro..."
                    value={formData.originCity}
                    onChange={(e) => setFormData({ ...formData, originCity: e.target.value })}
                    className="w-full bg-[#070D1F] border border-white/10 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#10B981]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-gray-300 mb-1 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#10B981]" />
                    Destination / Job Site City *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Halifax Downtown, Bedford, North Preston..."
                    value={formData.destinationCity}
                    onChange={(e) => setFormData({ ...formData, destinationCity: e.target.value })}
                    className="w-full bg-[#070D1F] border border-white/10 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#10B981]"
                    required
                  />
                </div>
              </div>

              {/* Preferred Date */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-gray-300 mb-1 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#10B981]" />
                  Preferred Start / Delivery Date *
                </label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full bg-[#070D1F] border border-white/10 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#10B981]"
                  required
                />
              </div>

              {/* Contact Information */}
              <div className="border-t border-white/10 pt-4 space-y-4">
                <h4 className="text-xs font-black text-[#10B981] uppercase tracking-widest">
                  Contact Information
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1 uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="John Smith"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      className="w-full bg-[#070D1F] border border-white/10 px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#10B981]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1 uppercase tracking-wider">
                      Company / Organization Name
                    </label>
                    <input
                      type="text"
                      placeholder="Apex Construction Inc."
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full bg-[#070D1F] border border-white/10 px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#10B981]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1 uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="john@construction.ca"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#070D1F] border border-white/10 px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#10B981]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1 uppercase tracking-wider">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="(416) 555-0199"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#070D1F] border border-white/10 px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#10B981]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-1 uppercase tracking-wider">
                    Special Site Notes / Access Restrictions
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g., Low overhead hydro wires, tight driveway backing, specific dumping window..."
                    value={formData.additionalDetails}
                    onChange={(e) => setFormData({ ...formData, additionalDetails: e.target.value })}
                    className="w-full bg-[#070D1F] border border-white/10 px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#10B981]"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#10B981] hover:bg-[#059669] text-black font-black text-xs uppercase tracking-widest shadow-lg shadow-[#10B981]/25 transition-all flex items-center justify-center gap-2"
                >
                  <span>Submit Quote Request</span>
                  <ArrowRight className="w-4 h-4 text-black" />
                </button>
                <p className="text-center text-[11px] text-gray-400 mt-2 flex items-center justify-center gap-1 font-semibold uppercase">
                  <Clock className="w-3 h-3 text-[#10B981]" />
                  Guaranteed response from Nova Scotia Dispatch within 24 hours.
                </p>
              </div>

            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-[#10B981]/20 text-[#10B981] flex items-center justify-center mx-auto border border-[#10B981]/40">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-black text-white uppercase tracking-tight">
              Quote Request Submitted!
            </h3>

            <div className="bg-[#070D1F] border border-white/10 p-4 max-w-md mx-auto text-left text-xs space-y-2 text-gray-300">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-gray-400 uppercase font-bold">Confirmation ID:</span>
                <span className="font-mono font-bold text-[#10B981]">#HT-{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400 uppercase font-bold">Material:</span>
                <span className="font-bold text-white">{formData.materialType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400 uppercase font-bold">Quantity:</span>
                <span className="font-bold text-white">{formData.quantityValue} {formData.quantityUnit}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400 uppercase font-bold">Route:</span>
                <span className="font-bold text-white">{formData.originCity} → {formData.destinationCity}</span>
              </div>
            </div>

            <p className="text-gray-300 text-sm max-w-md mx-auto">
              Our dispatch coordinator is reviewing your site requirements and will email a full cost breakdown to <strong className="text-[#10B981]">{formData.email}</strong> shortly.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 bg-[#10B981] hover:bg-[#059669] text-black font-black text-xs uppercase tracking-widest shadow-lg shadow-[#10B981]/25"
              >
                Close Window
              </button>
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="px-6 py-2.5 bg-white/10 text-white font-black text-xs uppercase tracking-widest border border-white/20 flex items-center justify-center gap-1.5"
              >
                Call Dispatch Now: {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
