export type PageType = 
  | 'home' 
  | 'services' 
  | 'industries' 
  | 'fleet' 
  | 'rates' 
  | 'about' 
  | 'contact';

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  materials: string[];
  equipment: string[];
  icon: string;
  image: string;
  specs: { label: string; value: string }[];
}

export interface FleetItem {
  id: string;
  name: string;
  type: string;
  capacityTons: number;
  capacityYards: number;
  axles: string;
  safetyFeatures: string[];
  specifications: { label: string; value: string }[];
  image: string;
  description: string;
  idealFor: string[];
}

export interface Project {
  id: string;
  title: string;
  location: string;
  category: string;
  description: string;
  image: string;
  year: string;
  stats: string;
}

export interface Testimonial {
  id: string;
  author: string;
  company: string;
  role: string;
  location: string;
  rating: number;
  text: string;
  date: string;
  projectType: string;
  verified: boolean;
}

export interface Industry {
  id: string;
  name: string;
  icon: string;
  overview: string;
  keyBenefits: string[];
  typicalProjects: string[];
  image: string;
}

export interface QuoteFormData {
  serviceType: string;
  materialType: string;
  quantityValue: number;
  quantityUnit: 'tons' | 'loads' | 'cubic_yards' | 'hours';
  originCity: string;
  destinationCity: string;
  preferredDate: string;
  pricingPreference: 'hourly' | 'per_ton' | 'per_load' | 'flexible';
  contactName: string;
  companyName: string;
  email: string;
  phone: string;
  additionalDetails: string;
}

export interface MaterialDensity {
  id: string;
  name: string;
  category: 'aggregate' | 'soil' | 'waste' | 'seasonal';
  tonsPerCubicYard: number; // e.g. Gravel ~1.4 tons/yd3
  pricePerTonEst: number; // Estimated CAD price per ton for calculator
}

export interface FaqItem {
  id: string;
  category: 'general' | 'dispatch' | 'pricing' | 'materials' | 'safety';
  question: string;
  answer: string;
}
