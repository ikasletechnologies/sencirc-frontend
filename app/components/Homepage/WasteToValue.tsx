import React from 'react';
import { 
  Trash2, RefreshCw, ArrowUp, Plane,
  Trash, Factory, Zap, 
  Leaf, Database, Building2, Fuel, ArrowRight
} from 'lucide-react';

export default function WasteToValue() {
  return (
    <section className="py-16 px-4 md:px-8 max-w-full mx-auto text-center font-sans bg-white overflow-hidden mt-8 mb-16">
      
      {/* Top Green Arrow */}
      <div className="flex justify-center items-center mb-6">
        <div className="w-[60%] md:w-[80%] max-w-3xl h-1.5 bg-[#69c445] rounded-l-full"></div>
        <ArrowRight className="w-8 h-8 text-[#69c445] -ml-2" strokeWidth={3} />
      </div>

      <div className="relative w-full max-w-[1800px] mx-auto flex flex-col lg:flex-row rounded-[40px] lg:rounded-full shadow-xl border border-gray-100 overflow-hidden min-h-[300px]">
        
        {/* Left Side: Waste */}
        <div className="lg:w-[15%] xl:w-[20%] bg-[#1f3f49] flex items-center justify-center shrink-0 z-10 py-8 lg:py-0">
          <h3 className="text-white text-2xl lg:text-3xl font-bold tracking-wide">Waste</h3>
        </div>

        {/* Middle Section: Pathways */}
        <div className="flex-1 flex flex-col relative z-0">
          
          {/* Row 1 */}
          <div className="flex-1 bg-[#fdfdfc] flex flex-wrap md:flex-nowrap justify-around items-center py-6 px-2 border-b-[2px] border-dashed border-[#5ca35e]/50 gap-4">
            <div className="flex flex-col items-center gap-3 w-[40%] md:w-auto">
              <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center"><Trash2 className="w-10 h-10 text-gray-700" /></div>
              <span className="text-[13px] md:text-[15px] font-bold text-[#1f3f49]">Waste</span>
            </div>
            <div className="flex flex-col items-center gap-3 w-[40%] md:w-auto">
              <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center"><RefreshCw className="w-10 h-10 text-blue-500" strokeWidth={2.5} /></div>
              <span className="text-[13px] md:text-[15px] font-bold text-[#1f3f49]">Conversion</span>
            </div>
            <div className="flex flex-col items-center gap-3 w-[40%] md:w-auto">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#82c65a] shadow-sm flex items-center justify-center"><ArrowUp className="w-8 h-8 text-white" strokeWidth={3.5} /></div>
              <span className="text-[13px] md:text-[15px] font-bold text-[#1f3f49]">Upgrading</span>
            </div>
            <div className="flex flex-col items-center gap-3 w-[40%] md:w-auto">
              <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center"><Plane className="w-10 h-10 text-gray-500 fill-gray-300" strokeWidth={1} /></div>
              <span className="text-[13px] md:text-[15px] font-bold text-[#1f3f49]">SAF</span>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex-1 bg-[#f0faec] flex flex-wrap md:flex-nowrap justify-around items-center py-6 px-2 border-b-[2px] border-dashed border-[#5ca35e]/50 gap-4">
            <div className="flex flex-col items-center gap-3 w-[40%] md:w-auto">
              <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center"><Trash className="w-10 h-10 text-orange-900 fill-orange-200" /></div>
              <span className="text-[13px] md:text-[15px] font-bold text-[#1f3f49] text-center px-2">Municipal Solid Waste</span>
            </div>
            <div className="flex flex-col items-center gap-3 w-[40%] md:w-auto">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gray-600 shadow-inner flex items-center justify-center"><Factory className="w-8 h-8 text-yellow-400" strokeWidth={1.5} /></div>
              <span className="text-[13px] md:text-[15px] font-bold text-[#1f3f49]">Gasification</span>
            </div>
            <div className="flex flex-col items-center gap-3 w-[40%] md:w-auto">
              <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center"><Zap className="w-10 h-10 text-gray-800" strokeWidth={1.5} /></div>
              <span className="text-[13px] md:text-[15px] font-bold text-[#1f3f49]">Energy (EFW)</span>
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex-1 bg-[#dcf2d1] flex flex-wrap md:flex-nowrap justify-around items-center py-6 px-2 gap-4">
            <div className="flex flex-col items-center gap-3 w-[40%] md:w-auto">
              <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center"><Leaf className="w-10 h-10 text-orange-600 fill-orange-200" /></div>
              <span className="text-[13px] md:text-[15px] font-bold text-[#1f3f49] text-center">Organic Waste</span>
            </div>
            <div className="flex flex-col items-center gap-3 w-[40%] md:w-auto">
              <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center"><Database className="w-10 h-10 text-blue-400 fill-blue-100" /></div>
              <span className="text-[13px] md:text-[15px] font-bold text-[#1f3f49] text-center">Anaerobic<br/>Digestion</span>
            </div>
            <div className="flex flex-col items-center gap-3 w-[40%] md:w-auto">
              <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center"><Building2 className="w-10 h-10 text-pink-400 fill-pink-100" /></div>
              <span className="text-[13px] md:text-[15px] font-bold text-[#1f3f49]">Purification</span>
            </div>
            <div className="flex flex-col items-center gap-3 w-[40%] md:w-auto">
              <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center"><Fuel className="w-10 h-10 text-gray-700 fill-yellow-400" strokeWidth={1.5} /></div>
              <span className="text-[13px] md:text-[15px] font-bold text-[#1f3f49]">RNG (CBG)</span>
            </div>
          </div>

        </div>

        {/* Right Side: Value */}
        <div className="lg:w-[15%] xl:w-[20%] bg-[#5ca35e] flex items-center justify-center shrink-0 z-10 py-8 lg:py-0">
          <h3 className="text-white text-2xl lg:text-3xl font-bold tracking-wide">Value</h3>
        </div>

      </div>
    </section>
  );
}
