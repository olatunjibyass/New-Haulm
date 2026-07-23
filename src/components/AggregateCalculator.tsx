import React, { useState } from 'react';
import { Calculator, ArrowRight, Layers, Truck, HelpCircle, RefreshCw, Phone } from 'lucide-react';
import { MATERIAL_DENSITIES, COMPANY_INFO } from '../data/mockData';

interface CalculatorProps {
  onQuoteRequested?: (material: string, tons: number) => void;
}

export const AggregateCalculator: React.FC<CalculatorProps> = ({ onQuoteRequested }) => {
  const [lengthFt, setLengthFt] = useState<number>(100);
  const [widthFt, setWidthFt] = useState<number>(50);
  const [depthInches, setDepthInches] = useState<number>(4);
  const [selectedMaterialId, setSelectedMaterialId] = useState<string>('gravel-a');

  const selectedMaterial = MATERIAL_DENSITIES.find((m) => m.id === selectedMaterialId) || MATERIAL_DENSITIES[0];

  // Mathematical Volume Calculation
  // Cubic Feet = Length * Width * (DepthInches / 12)
  // Cubic Yards = Cubic Feet / 27
  const cubicFeet = lengthFt * widthFt * (depthInches / 12);
  const cubicYards = Math.round((cubicFeet / 27) * 10) / 10;
  
  // Tonnage = Cubic Yards * density
  const totalTons = Math.round(cubicYards * selectedMaterial.tonsPerCubicYard * 10) / 10;
  
  // Tri-axle loads (~ 20 tons max payload per load in ON)
  const triAxleLoads = Math.ceil(totalTons / 20) || 1;

  // Estimated material + haulage cost range
  const estCostLow = Math.round(totalTons * selectedMaterial.pricePerTonEst);
  const estCostHigh = Math.round(totalTons * (selectedMaterial.pricePerTonEst * 1.25));

  return (
    <div className="bg-[#1C2541] border border-white/10 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#10B981]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 border-b border-white/10 pb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-black bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30 uppercase tracking-[0.2em] mb-1">
            <Calculator className="w-3.5 h-3.5 text-[#10B981]" />
            CONTRACTOR MATERIAL & TONNAGE CALCULATOR
          </span>
          <h3 className="text-2xl font-black text-white uppercase tracking-tight">
            Estimate Aggregates, Soil & Truck Loads
          </h3>
          <p className="text-gray-300 text-xs sm:text-sm mt-0.5">
            Calculate cubic yards, metric tonnage, and required dump truck loads for your job site.
          </p>
        </div>

        <button
          onClick={() => {
            setLengthFt(100);
            setWidthFt(50);
            setDepthInches(4);
          }}
          className="text-xs text-gray-300 hover:text-white flex items-center gap-1 bg-white/5 px-3 py-1.5 border border-white/10 shrink-0 uppercase font-bold tracking-wider"
        >
          <RefreshCw className="w-3 h-3 text-[#10B981]" />
          Reset Inputs
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Inputs (7 Cols) */}
        <div className="lg:col-span-7 space-y-5">
          
          {/* Material Select */}
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-gray-300 mb-1.5">
              Select Material Type
            </label>
            <select
              value={selectedMaterialId}
              onChange={(e) => setSelectedMaterialId(e.target.value)}
              className="w-full bg-[#070D1F] border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#10B981] font-bold uppercase tracking-wide"
            >
              {MATERIAL_DENSITIES.map((mat) => (
                <option key={mat.id} value={mat.id}>
                  {mat.name} (~{mat.tonsPerCubicYard} tons/yd³)
                </option>
              ))}
            </select>
          </div>

          {/* Dimensions Sliders / Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* Length */}
            <div className="bg-[#070D1F] p-4 border border-white/10">
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs font-bold uppercase text-gray-400">Length</label>
                <span className="text-sm font-black text-[#10B981]">{lengthFt} ft</span>
              </div>
              <input
                type="range"
                min="5"
                max="500"
                step="5"
                value={lengthFt}
                onChange={(e) => setLengthFt(Number(e.target.value))}
                className="w-full accent-[#10B981] cursor-pointer"
              />
              <input
                type="number"
                min="1"
                value={lengthFt}
                onChange={(e) => setLengthFt(Number(e.target.value))}
                className="w-full mt-2 bg-[#1C2541] border border-white/10 text-center text-xs font-mono py-1 text-white"
              />
            </div>

            {/* Width */}
            <div className="bg-[#070D1F] p-4 border border-white/10">
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs font-bold uppercase text-gray-400">Width</label>
                <span className="text-sm font-black text-[#10B981]">{widthFt} ft</span>
              </div>
              <input
                type="range"
                min="5"
                max="300"
                step="5"
                value={widthFt}
                onChange={(e) => setWidthFt(Number(e.target.value))}
                className="w-full accent-[#10B981] cursor-pointer"
              />
              <input
                type="number"
                min="1"
                value={widthFt}
                onChange={(e) => setWidthFt(Number(e.target.value))}
                className="w-full mt-2 bg-[#1C2541] border border-white/10 text-center text-xs font-mono py-1 text-white"
              />
            </div>

            {/* Depth */}
            <div className="bg-[#070D1F] p-4 border border-white/10">
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs font-bold uppercase text-gray-400">Depth</label>
                <span className="text-sm font-black text-[#10B981]">{depthInches} in</span>
              </div>
              <input
                type="range"
                min="1"
                max="36"
                step="1"
                value={depthInches}
                onChange={(e) => setDepthInches(Number(e.target.value))}
                className="w-full accent-[#10B981] cursor-pointer"
              />
              <input
                type="number"
                min="1"
                value={depthInches}
                onChange={(e) => setDepthInches(Number(e.target.value))}
                className="w-full mt-2 bg-[#1C2541] border border-white/10 text-center text-xs font-mono py-1 text-white"
              />
            </div>

          </div>

          <p className="text-[11px] text-gray-400 flex items-center gap-1.5 font-medium">
            <HelpCircle className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
            Standard compaction factor applied (~10-15% fluff/settlement allowance included).
          </p>

        </div>

        {/* Right Output Card (5 Cols) */}
        <div className="lg:col-span-5 bg-[#070D1F] border border-[#10B981]/40 p-6 shadow-xl space-y-5">
          <div className="border-b border-white/10 pb-3">
            <span className="text-xs font-black text-[#10B981] uppercase tracking-widest block">
              CALCULATED ESTIMATE
            </span>
            <h4 className="text-lg font-black text-white uppercase">
              {selectedMaterial.name}
            </h4>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#1C2541] p-3 border border-white/10">
              <span className="text-[10px] font-black uppercase tracking-wider text-gray-400 block">CUBIC YARDS</span>
              <span className="text-2xl font-black text-white font-mono">{cubicYards}</span>
              <span className="text-[10px] text-gray-400 block font-bold">cu. yd</span>
            </div>

            <div className="bg-[#1C2541] p-3 border border-white/10">
              <span className="text-[10px] font-black uppercase tracking-wider text-gray-400 block">EST. TONNAGE</span>
              <span className="text-2xl font-black text-[#10B981] font-mono">{totalTons}</span>
              <span className="text-[10px] text-gray-400 block font-bold">Metric Tons</span>
            </div>
          </div>

          <div className="bg-[#1C2541] p-3.5 border border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-[#10B981]" />
              <div>
                <span className="block text-xs font-bold text-white uppercase">Required Tri-Axle Loads</span>
                <span className="text-[11px] text-gray-400">Based on 20 Ton payload limit</span>
              </div>
            </div>
            <span className="text-2xl font-black text-[#10B981] font-mono bg-[#10B981]/20 px-3 py-1 border border-[#10B981]/30">
              {triAxleLoads}
            </span>
          </div>

          <div className="border-t border-white/10 pt-3 flex justify-between items-center text-xs">
            <span className="text-gray-400 uppercase font-bold">Est. Material & Delivery:</span>
            <span className="text-sm font-black text-[#10B981] font-mono">
              ${estCostLow.toLocaleString()} - ${estCostHigh.toLocaleString()} CAD
            </span>
          </div>

          {onQuoteRequested && (
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
              onClick={() => onQuoteRequested(selectedMaterial.name, totalTons)}
              className="w-full py-3 bg-[#10B981] hover:bg-[#059669] text-black font-black text-xs uppercase tracking-widest shadow-lg shadow-[#10B981]/25 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-black" />
              <span>Call to Request Quote ({totalTons} Tons {selectedMaterial.name})</span>
            </a>
          )}
        </div>

      </div>

    </div>
  );
};
