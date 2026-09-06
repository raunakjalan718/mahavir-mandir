"use client";

import { Heart } from "lucide-react";

interface FloatingDonateFABProps {
  onOpenDonate: () => void;
}

export default function FloatingDonateFAB({ onOpenDonate }: FloatingDonateFABProps) {
  return (
    <button
      onClick={onOpenDonate}
      className="fab-button flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-[#8b1e0f] hover:bg-[#70160a] text-white font-bold text-xs sm:text-sm border-2 border-amber-400/60 shadow-2xl transition-all group"
      title="Make a Donation / Spiritual Offering"
    >
      <div className="w-7 h-7 rounded-full bg-amber-400 text-gray-950 flex items-center justify-center group-hover:scale-110 transition-transform">
        <Heart className="w-4 h-4 fill-gray-950" />
      </div>
      <div className="text-left leading-tight">
        <span className="block font-bold text-white uppercase text-[11px] tracking-wide">Online Donation</span>
        <span className="block text-[10px] text-amber-200 font-semibold">Spiritual Offering</span>
      </div>
    </button>
  );
}
