import { Service, FleetItem, Project, Testimonial, Industry, MaterialDensity, FaqItem } from '../types';

export const COMPANY_INFO = {
  name: 'Haulm Transport',
  tagline: 'Reliable Dump Truck Hauling Services for Construction & Infrastructure Projects Across Nova Scotia',
  phone: '+1 (416) 995-5689',
  localPhone: '(416) 995-5689',
  dispatchPhone: '+1 (416) 995-5689',
  email: 'haulmtransport@hotmail.com',
  quoteEmail: 'haulmtransport@hotmail.com',
  address: '71 Simmonds Rd, North Preston, NS B2Z 1A3',
  serviceArea: 'Halifax Regional Municipality (HRM), Dartmouth, Bedford, Sackville, Truro, Eastern Shore, Cape Breton & across Nova Scotia',
  hours: '24Hr Operations & Dispatch Hotline | Office: Mon-Fri 6:00 AM - 6:00 PM',
  cvor: 'NS Safety Certified # NS-984210',
  wsib: 'WCB Nova Scotia Insured & NSTIR Compliant ($10M Commercial Liability)',
};

export const KEY_STATS = [
  { value: '24Hr', label: 'Availability', subtext: 'Round-the-clock dispatch & emergency hauling support' },
  { value: '100%', label: 'Licensed & Insured', subtext: 'Full NS Carrier Safety compliance, NSTIR permits & $10M liability' },
  { value: '15+ Yrs', label: 'Experienced Operators', subtext: 'Certified drivers with safety-first records across NS' },
  { value: '12,500+', label: 'Loads Delivered', subtext: 'On-time haulage for commercial, municipal & civil projects' },
];

export const SERVICES: Service[] = [
  {
    id: 'aggregate-hauling',
    title: 'Aggregate Hauling',
    shortDesc: 'Precision transport of crushed stone, gravel, concrete sand, and slag directly from quarry pits to job sites.',
    fullDesc: 'Haulm Transport provides high-volume, reliable aggregate hauling services across Nova Scotia. We partner with licensed quarries and pits to supply engineered crushed stone, granular A/B, limestone, and clean concrete sand with precise delivery schedules.',
    materials: ['Gravel (Granular A / B)', 'Crushed Limestone (3/4", 2", Clear Stone)', 'Concrete Sand & Screened Sand', 'Granite Aggregate & Recycled Material'],
    equipment: ['Tri-Axle Dump Trucks', 'Live Bottom Trailers', 'Tandem Dump Trucks'],
    icon: 'Layers',
    image: 'https://i.imgur.com/G0DdNGr.jpeg',
    specs: [
      { label: 'Max Load Capacity', value: 'Up to 36 Tons (Tri-Axle / Trailer)' },
      { label: 'Material Sourcing', value: 'Certified Nova Scotia Quarries' },
      { label: 'Tracking', value: 'Real-time GPS + Scale Ticket Digital Sync' },
      { label: 'Delivery Schedule', value: 'Same-day & scheduled continuous loops' }
    ]
  },
  {
    id: 'earth-moving',
    title: 'Earth Moving & Site Materials',
    shortDesc: 'Efficient transportation of topsoil, clean fill dirt, dense clay, and heavy excavated rock for earthwork operations.',
    fullDesc: 'Whether you are excavating a commercial foundation or balancing bulk earth on a major civil site, our heavy dump fleet safely moves mass soil, engineered fill, topsoil, and rock with minimal turnaround times.',
    materials: ['Screened Topsoil & Compost', 'Clean Fill Dirt & Structural Fill', 'Clay & Unsorted Soil', 'Excavated Shot Rock & Boulders'],
    equipment: ['Tri-Axle Dumpers', 'Heavy Duty Off-Road Dump Trucks', 'Tandem Units'],
    icon: 'Mountain',
    image: 'https://i.imgur.com/y083eNo.jpeg',
    specs: [
      { label: 'Soil Testing Support', value: 'Nova Scotia Environment Approved' },
      { label: 'Volumetric Capacity', value: 'Up to 22 Cubic Yards per truck' },
      { label: 'Environmental Tarping', value: 'Automatic electric sealed tarps' },
      { label: 'Site Safety', value: 'Backing sensors & strobe safety systems' }
    ]
  },
  {
    id: 'construction-waste',
    title: 'Construction Waste Removal',
    shortDesc: 'Compliant removal and haulage of demolition debris, broken concrete, asphalt millings, and scrap metal.',
    fullDesc: 'Keep your construction job site clear, compliant, and safe. We transport heavy concrete rubble, asphalt millings, demolition materials, and structural debris to certified recycling facilities and licensed disposal sites in Nova Scotia.',
    materials: ['Reinforced Concrete Rubble', 'Asphalt Millings & Pavement Strippings', 'Demolition Debris & Masonry', 'Scrap Metal & Heavy Infrastructure Salvage'],
    equipment: ['Heavy Dumpers with Steel Bodies', 'Live Bottom Scrap Haulers'],
    icon: 'Trash2',
    image: 'https://i.imgur.com/OaeU1w8.jpeg',
    specs: [
      { label: 'Recycling Rate', value: '90%+ diverted to crushing plants' },
      { label: 'Dump Body Type', value: 'Hardox 450 Steel High-Impact Bodies' },
      { label: 'Environmental Clearance', value: 'NS Environment Manifest Compliance' },
      { label: 'Emergency Haulage', value: '24Hr Rapid Response Dispatch' }
    ]
  },
  {
    id: 'seasonal-services',
    title: 'Seasonal Material Services',
    shortDesc: 'Bulk organic mulch delivery, treated road salt supply, and continuous winter snow removal haulage support.',
    fullDesc: 'Maintaining year-round capability, Haulm Transport handles seasonal shifts seamlessly. We deliver bulk landscape mulch and topdressings in spring/summer, and support municipalities and contractors with road salt hauling and snow displacement during Nova Scotia winters.',
    materials: ['Bulk Landscape Mulch & Bark', 'Treated Road Salt & Deicing Sand', 'Snow Removal Offsite Haulage', 'Soil Conditioner & Turf Mix'],
    equipment: ['High-Volume Aluminium Dumps', 'Tri-Axle Units with Heated Bodies'],
    icon: 'SunSnow',
    image: 'https://i.imgur.com/WFeXZDm.jpeg',
    specs: [
      { label: 'Winter Fleet Prep', value: 'Heated Dump Bodies & Insulation' },
      { label: 'Salt Dispatch', value: 'Direct salt mine & depot transport' },
      { label: 'Bulk Volume', value: 'Up to 35 cu. yd light organic loads' },
      { label: 'Availability', value: 'On-call during major Maritime storm events' }
    ]
  },
  {
    id: 'site-support',
    title: 'Continuous Site Support',
    shortDesc: 'Dedicated truck fleets for high-volume, continuous shuttles between quarries, crushers, and active paving jobs.',
    fullDesc: 'For major infrastructure, highway widening, or industrial site prep, Haulm Transport provides dedicated truck fleets operating on strict headway schedules. Our dispatch center synchronizes with your site foremen to ensure uninterrupted material flow.',
    materials: ['Hot Mix Asphalt Shuttle', 'Granular Subbase Continuous Feed', 'Mass Fill Relocation'],
    equipment: ['Dedicated Fleet Crews', 'Live Bottom Asphalt Trailers', 'Tri-Axles'],
    icon: 'Truck',
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=80',
    specs: [
      { label: 'Dispatch Control', value: 'Dedicated On-Site Fleet Supervisor' },
      { label: 'Scale Synchronization', value: 'Integrated electronic weigh ticketing' },
      { label: 'Asphalt Temp Control', value: 'Insulated tarping for thermal retention' },
      { label: 'Shift Flexibility', value: 'Night shifts & weekend shutdown support' }
    ]
  }
];

export const FLEET: FleetItem[] = [
  {
    id: 'tri-axle-dump',
    name: 'Tri-Axle Dump Truck',
    type: 'Heavy Duty Rigid Dump Truck',
    capacityTons: 22,
    capacityYards: 18,
    axles: '3 Axles + Lift Axle (NS Weights & Dimensions Compliant)',
    safetyFeatures: [
      'Automatic Electric Roll Tarping System',
      'Rear & Side Blind Spot Radar Sensors',
      'Rearview High-Definition Night Camera',
      'Audible Back-Up Alarm & Strobe Safety Lights',
      'GPS Real-Time Speed & Route Tracking'
    ],
    specifications: [
      { label: 'Engine Power', value: '500 HP Cummins / Mack MP8' },
      { label: 'Transmission', value: '18-Speed Manual / Allison Automatic' },
      { label: 'Body Material', value: 'Hardox 450 High-Abrasion Steel' },
      { label: 'GVWR Rating', value: '36,000 kg (79,300 lbs)' },
      { label: 'NS Safety Rating', value: 'NSTIR & NS Carrier Safety Certified' }
    ],
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80',
    description: 'The workhorse of Nova Scotia construction. Ideal for tight city job sites across HRM, Dartmouth, residential developments, and quarry aggregate hauling where maneuverability meets high payload capacity.',
    idealFor: ['Granular A/B Delivery', 'Urban Site Excavation', 'Demolition Debris Removal', 'Asphalt Paving Support']
  },
  {
    id: 'tandem-dump',
    name: 'Tandem Axle Dump Truck',
    type: 'Medium-Heavy Duty Dump Truck',
    capacityTons: 15,
    capacityYards: 12,
    axles: '2 Rear Drive Axles',
    safetyFeatures: [
      'Heavy Duty Suspension Stabilizers',
      'Digital Rear Backup Camera & LED Work Lights',
      'Auto-Tarp Mechanism',
      'NS Carrier Safety Logbook Compliance'
    ],
    specifications: [
      { label: 'Engine Power', value: '420 HP Volvo D13' },
      { label: 'Body Volume', value: '12-14 Cubic Yards' },
      { label: 'Turn Radius', value: 'Ultra-Compact Dual Axle Turning' },
      { label: 'GVWR Rating', value: '25,000 kg (55,000 lbs)' }
    ],
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80',
    description: 'Perfect for precise offloading in restricted residential driveways, tight utility trenches, and compact commercial job sites throughout Nova Scotia.',
    idealFor: ['Residential Topsoil & Gravel', 'Utility Trench Backfill', 'Small Demolition Cleanup', 'Landscaping Supply']
  },
  {
    id: 'live-bottom-trailer',
    name: 'Live Bottom Heavy Haul Trailer',
    type: 'Tractor Trailer Live Conveyor Unit',
    capacityTons: 36,
    capacityYards: 28,
    axles: '4-Axle / 5-Axle Semi-Trailer',
    safetyFeatures: [
      'Zero-Tilt Discharge Conveyor (Prevents Roll-Overs)',
      'High-Temperature Asphalt Insulation Cover',
      'Pneumatic Flow Control Gate',
      'Multi-Zone Air Ride Suspension'
    ],
    specifications: [
      { label: 'Discharge Type', value: 'Internal Hydraulic Rubber Belt Conveyor' },
      { label: 'Payload Capacity', value: 'Up to 36 Metric Tons' },
      { label: 'Body Length', value: '41 Feet Semi-Trailer' },
      { label: 'Safety Advantage', value: 'Discharges safely under low powerlines & bridges' }
    ],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    description: 'High-volume tractor trailer featuring an internal conveyor belt. Safely dumps asphalt or aggregate without elevating the trailer box, eliminating rollover hazards under overhead wires.',
    idealFor: ['Highway Asphalt Laydown', 'Bridge Deck Operations', 'High-Volume Quarry Shuttles', 'Overhead Clearance Sites']
  },
  {
    id: 'heavy-dump-trailer',
    name: 'Tractor Trailer End Dump',
    type: 'High Volume Bulk Dump Trailer',
    capacityTons: 34,
    capacityYards: 32,
    axles: 'Quad Axle Dump Trailer',
    safetyFeatures: [
      'In-Cab Electronic Leveling Gauge',
      'Automated Air Tailgate Locking System',
      'Heavy-Duty Stabilizer Legs'
    ],
    specifications: [
      { label: 'Haul Volume', value: '32+ Cubic Yards' },
      { label: 'Primary Use', value: 'Long Haul Mass Aggregate & Soil' },
      { label: 'Body Material', value: 'Aluminium or Hardox Steel Options' }
    ],
    image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=1200&q=80',
    description: 'Designed for maximum payload efficiency on long haul corridor projects between major regional quarries and bulk infrastructure sites in Nova Scotia.',
    idealFor: ['Long-Distance Aggregate Supply', 'Mass Soil Displacement', 'Large Sub-Division Development']
  }
];

export const INDUSTRIES: Industry[] = [
  {
    id: 'construction-companies',
    name: 'Construction Companies & Civil Developers',
    icon: 'Building2',
    overview: 'High-volume material supply and bulk soil relocation tailored for multi-phase commercial and residential subdivision projects in HRM & NS.',
    keyBenefits: ['Guaranteed daily truck availability', 'Nova Scotia Environment soil manifest compliance', 'Digital scale tickets delivered in real-time', 'Dedicated account manager'],
    typicalProjects: ['Commercial Foundation Excavation', 'HRM Subdivision Earthworks', 'Industrial Park Site Prep'],
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'general-contractors',
    name: 'General Contractors',
    icon: 'HardHat',
    overview: 'Agile trucking logistics for general contractors requiring flexible scheduling, rapid dispatch, and multi-material versatility across NS.',
    keyBenefits: ['Hourly or per-ton rates', 'Same-day emergency dispatch', 'Fully insured NS fleet', 'Clear, transparent invoicing'],
    typicalProjects: ['Building Additions', 'Parking Lot Re-paving', 'Site Utility Trenching'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'municipal-infrastructure',
    name: 'Municipal & Infrastructure Projects',
    icon: 'Landmark',
    overview: 'Vetted transportation support for municipal public works, watermain replacements, bridge rehabs, and NSTIR highway maintenance.',
    keyBenefits: ['Strict compliance with NSTIR specifications', 'Security-cleared drivers', 'Comprehensive safety documentation', '24Hr winter emergency response'],
    typicalProjects: ['Watermain Repair Excavation', 'Municipal Snow Relocation', 'Bridge Abutment Backfill'],
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'landscaping-companies',
    name: 'Commercial Landscaping Companies',
    icon: 'Trees',
    overview: 'Prompt bulk delivery of premium screened topsoil, triple mix, decorative stone, armor stone, and organic mulch.',
    keyBenefits: ['Clean trucks with non-contaminating beds', 'Precise dumping to minimize property impact', 'Bulk quantity discount pricing', 'Scheduled recurring deliveries'],
    typicalProjects: ['Park Developments', 'Golf Course Renovations', 'Commercial Property Landscaping'],
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'property-developers',
    name: 'Property & Land Developers',
    icon: 'Layers3',
    overview: 'Turnkey site clearing and mass fill importation to transform raw acreage into pad-ready development parcels.',
    keyBenefits: ['Full volumetric estimation and budgeting', 'Mass haul logistics coordination', 'Custom crushing & onsite recycling support'],
    typicalProjects: ['Industrial Warehouses', 'Master-Planned Communities', 'Retail Strip Malls'],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'road-building',
    name: 'Road Building Contractors',
    icon: 'Route',
    overview: 'Continuous hot mix asphalt shuttling and granular subbase delivery with live bottom trailers for major highway projects.',
    keyBenefits: ['Live bottom non-dump trailers for powerline safety', 'Insulated beds for asphalt heat retention', 'High cycle counts per shift'],
    typicalProjects: ['Hwy 101/102/104 Widening', 'Municipal Road Resurfacing', 'Halifax Stanfield Airport Runway Work'],
    image: 'https://i.imgur.com/dQWPcB1.jpeg'
  },
  {
    id: 'excavation-companies',
    name: 'Excavation & Demolition Contractors',
    icon: 'Shovel',
    overview: 'High-speed haul-off capacity for bulk clay, bedrock, slate, and heavy demolition concrete debris from deep excavation pits.',
    keyBenefits: ['Impact-resistant steel bodies', 'High-capacity tri-axle & trailer options', 'Immediate pit clearing turnaround'],
    typicalProjects: ['Deep Foundation Pits', 'Bridge Demolition Cleanup', 'Rock Cut Excavations'],
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'highway-102-expansion',
    title: 'Highway 102 Infrastructure Expansion',
    location: 'Halifax / Bedford, NS',
    category: 'Road & Highway Infrastructure',
    description: 'Dispatched 35 tri-axle and live-bottom trucks daily for 8 months delivering 180,000+ tons of Granular A subbase and hot mix asphalt.',
    image: 'https://i.imgur.com/dQWPcB1.jpeg',
    year: '2025',
    stats: '180,000 Tons Aggregates Delivered'
  },
  {
    id: 'halifax-waterfront-redevelopment',
    title: 'Halifax Waterfront Foundation Fill',
    location: 'Downtown Halifax Waterfront, NS',
    category: 'Commercial Development',
    description: 'Precision excavation material removal and engineered structural fill haulage in downtown urban corridors with zero safety incidents.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    year: '2025',
    stats: '65,000 cu. yd Soil Transported'
  },
  {
    id: 'dartmouth-quarry-shuttle',
    title: 'Dartmouth Logistics Park Bulk Quarry Shuttle',
    location: 'Dartmouth / Burnside, NS',
    category: 'Bulk Material Supply',
    description: 'High-frequency continuous shuttle transporting 3/4" crushed limestone and granite clear stone for commercial warehouse slab foundations.',
    image: 'https://i.imgur.com/G0DdNGr.jpeg',
    year: '2024',
    stats: '95,000 Tons Crushed Stone'
  },
  {
    id: 'sackville-subdivision-earthworks',
    title: 'Lower Sackville Residential Earthworks',
    location: 'Sackville / Bedford, NS',
    category: 'Subdivision Earthworks',
    description: 'Mass earthmoving operation relocating 120,000 cubic yards of overburden, clay, and topsoil to balance 450 residential home lots.',
    image: 'https://i.imgur.com/y083eNo.jpeg',
    year: '2024',
    stats: '120,000 cu. yd Earth Moved'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Marcus Vance',
    company: 'Atlantic Civil Infrastructure Ltd.',
    role: 'Senior Project Manager',
    location: 'Halifax, NS',
    rating: 5,
    text: 'Haulm Transport is our go-to dumping contractor for all our regional highway widening projects in Nova Scotia. Their drivers are punctual, the dispatch team communicates in real-time, and their live bottom trailers kept us running safely under overhead power lines.',
    date: '2026-03-14',
    projectType: 'Highway Infrastructure',
    verified: true
  },
  {
    id: '2',
    author: 'Elena Rostova',
    company: 'Dartmouth Excavating & Grading',
    role: 'Operations Director',
    location: 'Dartmouth, NS',
    rating: 5,
    text: 'When we needed 15 tri-axle trucks on 12 hours notice for a deep foundation excavation in Burnside, Haulm Transport stepped up without hesitation. Every truck was clean, driver was fully ticketed, and weigh tickets matched up perfectly.',
    date: '2026-04-02',
    projectType: 'Deep Pit Excavation',
    verified: true
  },
  {
    id: '3',
    author: 'David Chen',
    company: 'Maritime Landscaping & Civil',
    role: 'Owner & General Manager',
    location: 'Bedford, NS',
    rating: 5,
    text: 'Their per-ton aggregate delivery rates in Nova Scotia are extremely competitive, and the drivers actually respect customer job sites. Never blocking access lanes or dumping in the wrong spots. Exceptional professionalism.',
    date: '2026-05-19',
    projectType: 'Commercial Landscaping',
    verified: true
  },
  {
    id: '4',
    author: 'Robert Sterling',
    company: 'Scotia Paving & Contracting',
    role: 'Paving Superintendent',
    location: 'Truro, NS',
    rating: 5,
    text: 'In paving, timing is everything. If hot asphalt sits in a truck body too long, you lose temp and money. Haulm Transport trucks keep our pavers fed continuously across Highway 102. Couldn’t ask for better reliability.',
    date: '2026-06-11',
    projectType: 'Asphalt Paving',
    verified: true
  }
];

export const MATERIAL_DENSITIES: MaterialDensity[] = [
  { id: 'gravel-a', name: 'Gravel (Granular A)', category: 'aggregate', tonsPerCubicYard: 1.45, pricePerTonEst: 28 },
  { id: 'gravel-b', name: 'Gravel (Granular B)', category: 'aggregate', tonsPerCubicYard: 1.38, pricePerTonEst: 24 },
  { id: 'crushed-limestone', name: 'Crushed Stone (3/4")', category: 'aggregate', tonsPerCubicYard: 1.35, pricePerTonEst: 32 },
  { id: 'concrete-sand', name: 'Concrete Sand', category: 'aggregate', tonsPerCubicYard: 1.30, pricePerTonEst: 26 },
  { id: 'screened-topsoil', name: 'Screened Topsoil', category: 'soil', tonsPerCubicYard: 1.10, pricePerTonEst: 22 },
  { id: 'fill-dirt', name: 'Clean Fill Dirt', category: 'soil', tonsPerCubicYard: 1.25, pricePerTonEst: 18 },
  { id: 'clay-dense', name: 'Dense Excavated Clay', category: 'soil', tonsPerCubicYard: 1.40, pricePerTonEst: 20 },
  { id: 'concrete-debris', name: 'Crushed Concrete Rubble', category: 'waste', tonsPerCubicYard: 1.20, pricePerTonEst: 19 },
  { id: 'asphalt-millings', name: 'Asphalt Millings', category: 'waste', tonsPerCubicYard: 1.28, pricePerTonEst: 21 },
  { id: 'mulch-bark', name: 'Bulk Cedar Mulch', category: 'seasonal', tonsPerCubicYard: 0.45, pricePerTonEst: 45 },
  { id: 'road-salt', name: 'Treated Road Salt', category: 'seasonal', tonsPerCubicYard: 1.15, pricePerTonEst: 85 },
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'pricing',
    question: 'How do you charge for dump truck hauling services in Nova Scotia?',
    answer: 'We offer two main pricing structures: Hourly Rates (ideal for local site work, continuous quarry shuttle loops, or unpredictable wait times) and Per-Ton / Per-Load Rates (best for large scale bulk material delivery with fixed pit-to-site distances). Contact our dispatch team for a custom quote within 24 hours.'
  },
  {
    id: 'faq-2',
    category: 'dispatch',
    question: 'What is the minimum notice required to book a dump truck?',
    answer: 'While we recommend booking 24 to 48 hours in advance for large fleet commitments, our 24Hr emergency dispatch hotline can often provide same-day or next-morning truck allocations across Halifax Regional Municipality (HRM), Dartmouth, Bedford, and surrounding regions.'
  },
  {
    id: 'faq-3',
    category: 'safety',
    question: 'Are your trucks safety certified and licensed for Nova Scotia highways?',
    answer: 'Yes! Our entire fleet strictly adheres to Nova Scotia Vehicle Weight & Dimension regulations (NSTIR). We maintain full carrier safety ratings, $10M commercial general liability insurance, WCB Nova Scotia clearance certificates, and certified daily inspection logs.'
  },
  {
    id: 'faq-4',
    category: 'materials',
    question: 'Do you handle environmental soil testing and manifest documentation in Nova Scotia?',
    answer: 'Absolutely. We handle transportation manifests for clean fill, structural soil relocations, and material haulage in full compliance with Nova Scotia Environment guidelines and licensed receiving sites.'
  },
  {
    id: 'faq-5',
    category: 'general',
    question: 'What geographic areas in Nova Scotia does Haulm Transport serve?',
    answer: 'We proudly serve all of Nova Scotia, with our primary yard located at 71 Simmonds Rd, North Preston, NS. Our core coverage includes Halifax (HRM), Dartmouth, Bedford, Sackville, Truro, Eastern Shore, Annapolis Valley, South Shore, and Cape Breton.'
  },
  {
    id: 'faq-6',
    category: 'materials',
    question: 'How much aggregate or topsoil fits in a tri-axle dump truck?',
    answer: 'A standard tri-axle dump truck carries approximately 18 to 22 metric tons of heavy aggregate (like gravel or crushed stone) or roughly 16 to 20 cubic yards of topsoil or lighter materials, governed by Nova Scotia highway weight limits.'
  }
];

export const SEO_KEYWORDS = [
  'Dump Truck Services Nova Scotia',
  'Aggregate Hauling Halifax',
  'Gravel Delivery North Preston NS',
  'Construction Material Hauling HRM',
  'Dump Truck Contractor Dartmouth',
  'Earth Moving Services Nova Scotia',
  'Bulk Material Transportation NS',
  'Construction Waste Removal Halifax',
  'Sand and Gravel Hauling Truro',
  'Commercial Trucking Services Nova Scotia',
  'Tri-Axle Dump Truck Rental Halifax',
  'Live Bottom Asphalt Transport NS'
];
