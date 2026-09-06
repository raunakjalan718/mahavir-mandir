"use client";

import { useState } from "react";
import { Sparkles, ShoppingBag, ShieldCheck, Check, Heart } from "lucide-react";

export default function NaivedyamSection() {
  const [ladooQty, setLadooQty] = useState(2); // in kg
  const [selectedPack, setSelectedPack] = useState("1kg");
  const [isOrdered, setIsOrdered] = useState(false);

  const pricePerKg = 380;
  const totalPrice = ladooQty * pricePerKg;

  const handleOrderSimulation = () => {
    setIsOrdered(true);
    setTimeout(() => {
      setIsOrdered(false);
    }, 4000);
  };

  return (
    <section id="naivedyam" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF6F0] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Banner Card */}
        <div className="bg-gradient-to-br from-amber-500 via-saffron-600 to-saffron-800 text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Background Glow */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-gold-400/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Info */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-amber-200 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-gold-300" />
                <span>World-Famous Temple Prasad</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-extrabold leading-tight text-white">
                महावीर मंदिर का प्रसिद्ध <br />
                <span className="text-gold-300">नैवेद्यम (Naivedyam Ladoo)</span>
              </h2>

              <p className="text-sm sm:text-base text-amber-100/90 leading-relaxed font-normal">
                Crafted daily using 100% pure cow ghee, gram flour (besan), cashew nuts, raisins, and cardamom by master confectioners specially brought from Tirumala Tirupati Devasthanams. Over 10,000 kg of Naivedyam is distributed daily.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs font-semibold">
                <div className="bg-black/20 backdrop-blur-md p-3 rounded-xl border border-white/10">
                  <span className="block text-gold-300 font-extrabold text-base">100% Pure</span>
                  <span className="text-white/80">Desi Cow Ghee</span>
                </div>
                <div className="bg-black/20 backdrop-blur-md p-3 rounded-xl border border-white/10">
                  <span className="block text-gold-300 font-extrabold text-base">Tirupati Recipe</span>
                  <span className="text-white/80">Traditional Crafting</span>
                </div>
                <div className="bg-black/20 backdrop-blur-md p-3 rounded-xl border border-white/10 col-span-2 sm:col-span-1">
                  <span className="block text-gold-300 font-extrabold text-base">₹380 / Kg</span>
                  <span className="text-white/80">Official Price</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Prasad Order Token Box */}
            <div className="lg:col-span-5 bg-white text-espresso-900 rounded-3xl p-6 shadow-xl border-2 border-amber-200 space-y-5">
              
              <div className="flex items-center justify-between border-b border-amber-900/10 pb-3">
                <div>
                  <h3 className="font-serif text-lg font-bold text-saffron-800">
                    Express Counter Token (प्रसाद टोकन)
                  </h3>
                  <p className="text-xs text-amber-900/70 font-medium">
                    Pre-book your Naivedyam counter token to skip queue
                  </p>
                </div>
                <span className="w-8 h-8 rounded-full bg-saffron-100 text-saffron-700 flex items-center justify-center font-bold text-sm">
                  <ShoppingBag className="w-4 h-4 text-saffron-700" />
                </span>
              </div>

              {/* Quantity Selector */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-espresso-800 uppercase tracking-wide">
                  Select Naivedyam Pack Quantity:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 5].map((qty) => (
                    <button
                      key={qty}
                      onClick={() => setLadooQty(qty)}
                      className={`py-2.5 rounded-xl font-bold text-xs sm:text-sm border transition-all ${
                        ladooQty === qty
                          ? "bg-saffron-600 text-white border-saffron-600 shadow-md"
                          : "bg-amber-50 text-espresso-800 border-amber-200 hover:bg-amber-100"
                      }`}
                    >
                      {qty} Kg ({qty * 1000}g)
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Calculation */}
              <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200 flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-amber-900/70 block">Total Counter Token Amount</span>
                  <span className="font-serif text-2xl font-extrabold text-saffron-800">
                    ₹{totalPrice}
                  </span>
                </div>
                <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2.5 py-1 rounded-full border border-emerald-300">
                  Counter Price Guaranteed
                </span>
              </div>

              {/* Order Token Simulation Button */}
              <button
                onClick={handleOrderSimulation}
                className="w-full py-3.5 rounded-full saffron-pill-btn text-white font-bold text-sm shadow-lg flex items-center justify-center gap-2"
              >
                {isOrdered ? (
                  <>
                    <Check className="w-5 h-5 text-white animate-bounce" />
                    <span>Prasad Token Generated! Show at Counter</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4 text-white" />
                    <span>Get Fast Counter Pickup Token →</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] font-semibold text-espresso-800/70">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Available at 6 Counters near Patna Junction Gate 1 & 2</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
