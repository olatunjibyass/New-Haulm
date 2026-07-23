import React, { useState } from 'react';
import { X, Search, Code, CheckCircle, Copy, Shield, FileCode } from 'lucide-react';
import { SEO_KEYWORDS, COMPANY_INFO } from '../data/mockData';

interface SeoPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SeoPanel: React.FC<SeoPanelProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "TransportationService",
    "name": "Haulm Transport",
    "description": "Reliable dump truck hauling services, aggregate transportation, topsoil delivery, and construction waste removal across Nova Scotia.",
    "url": "https://haulmtransport.ca",
    "telephone": COMPANY_INFO.phone,
    "email": COMPANY_INFO.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "71 Simmonds Rd",
      "addressLocality": "North Preston",
      "addressRegion": "NS",
      "postalCode": "B2Z 1A3",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 44.7186,
      "longitude": -63.4631
    },
    "areaServed": [
      "Halifax Regional Municipality (HRM)",
      "Dartmouth",
      "Bedford",
      "Lower Sackville",
      "North Preston",
      "Truro",
      "Annapolis Valley",
      "Cape Breton"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Dump Truck & Bulk Material Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Aggregate Hauling (Gravel, Crushed Stone, Sand)" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Earth Moving & Topsoil Transport" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Construction Waste & Demolition Debris Removal" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Live Bottom Hot Mix Asphalt Shuttles" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Seasonal Road Salt & Mulch Delivery" } }
      ]
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  const schemaString = JSON.stringify(jsonLdSchema, null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(schemaString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#070D1F]/80 backdrop-blur-sm overflow-y-auto">
      <div className="bg-[#121B35] border border-white/10 max-w-3xl w-full p-6 sm:p-8 shadow-2xl relative my-8 text-white">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white bg-white/5"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6 border-b border-white/10 pb-4">
          <div className="flex items-center gap-2 text-[#10B981] font-black text-xs uppercase tracking-widest mb-1">
            <Search className="w-4 h-4 text-[#10B981]" />
            SEO & STRUCTURED DATA INSPECTOR
          </div>
          <h2 className="text-2xl font-black text-white uppercase tracking-tight">
            Nova Scotia Transportation SEO Audit
          </h2>
          <p className="text-xs text-gray-400 mt-1">
            Haulm Transport is pre-configured with rich Schema.org JSON-LD structured data and target search keywords for maximum Google rankings in Nova Scotia.
          </p>
        </div>

        <div className="space-y-6">
          
          {/* Keywords Section */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-widest text-[#10B981] mb-2 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-[#10B981]" />
              Targeted Search Engine Keywords (Nova Scotia)
            </h3>
            <div className="flex flex-wrap gap-2">
              {SEO_KEYWORDS.map((kw, idx) => (
                <span
                  key={idx}
                  className="bg-[#070D1F] border border-white/10 text-gray-300 text-xs px-3 py-1.5 font-bold uppercase tracking-wider"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>

          {/* JSON-LD Schema Preview */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xs font-black uppercase tracking-widest text-[#10B981] flex items-center gap-1.5">
                <Code className="w-4 h-4 text-[#10B981]" />
                Schema.org TransportationService JSON-LD
              </h3>
              <button
                onClick={handleCopy}
                className="text-xs text-gray-300 bg-white/5 hover:bg-white/10 px-3 py-1 border border-white/10 flex items-center gap-1 font-bold uppercase tracking-wider"
              >
                {copied ? <CheckCircle className="w-3 h-3 text-[#10B981]" /> : <Copy className="w-3 h-3 text-[#10B981]" />}
                {copied ? 'Copied' : 'Copy JSON-LD'}
              </button>
            </div>

            <pre className="bg-[#070D1F] border border-white/10 p-4 text-[11px] font-mono text-[#10B981] overflow-x-auto max-h-60 leading-relaxed">
              {schemaString}
            </pre>
          </div>

          {/* Meta Tags Summary */}
          <div className="bg-[#070D1F] p-4 border border-white/10 text-xs space-y-2">
            <h4 className="font-black text-white flex items-center gap-1.5 uppercase tracking-wide">
              <FileCode className="w-4 h-4 text-[#10B981]" />
              Pre-rendered Meta Tags & OpenGraph
            </h4>
            <div className="text-gray-400 space-y-1 font-mono text-[11px]">
              <p><span className="text-gray-300 font-bold">Title:</span> Haulm Transport | Dump Truck Hauling & Aggregate Services Nova Scotia</p>
              <p><span className="text-gray-300 font-bold">Meta Description:</span> Reliable dump truck hauling, aggregate delivery (gravel, stone, sand), topsoil, and construction waste removal across Halifax, Dartmouth, North Preston & Nova Scotia.</p>
              <p><span className="text-gray-300 font-bold">OG Type:</span> website | locale: en_CA</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
