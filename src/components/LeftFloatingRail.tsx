"use client";

import { Radio, Heart } from "lucide-react";

interface LeftFloatingRailProps {
  onOpenLive: () => void;
  onOpenDonate: () => void;
}

export default function LeftFloatingRail({
  onOpenLive,
  onOpenDonate,
}: LeftFloatingRailProps) {
  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2.5 pointer-events-auto">
      {/* Live Darshan Button */}
      <button
        onClick={onOpenLive}
        className="group flex items-center gap-2.5 px-3 py-2.5 sm:px-4 sm:py-3 bg-[#8b1e0f] hover:bg-[#73180c] text-white rounded-r-2xl border-y border-r border-amber-400/40 shadow-xl backdrop-blur-md transition-all duration-300 hover:translate-x-1 focus:outline-none"
        title="Watch Live Darshan Stream"
      >
        <div className="relative flex items-center justify-center shrink-0">
          <Radio className="w-4 h-4 sm:w-4 sm:h-4 text-red-400 animate-pulse" />
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
        </div>
        <span className="hidden md:inline text-xs font-bold tracking-wider uppercase text-amber-100 group-hover:text-white whitespace-nowrap">
          Live Darshan
        </span>
      </button>

      {/* Online Donation Button */}
      <button
        onClick={onOpenDonate}
        className="group flex items-center gap-2.5 px-3 py-2.5 sm:px-4 sm:py-3 bg-[#2a1e17] hover:bg-[#8b1e0f] text-white rounded-r-2xl border-y border-r border-amber-400/40 shadow-xl backdrop-blur-md transition-all duration-300 hover:translate-x-1 focus:outline-none"
        title="Make an Online Donation"
      >
        <Heart className="w-4 h-4 sm:w-4 sm:h-4 text-amber-400 group-hover:scale-110 transition-transform shrink-0" />
        <span className="hidden md:inline text-xs font-bold tracking-wider uppercase text-amber-200 group-hover:text-white whitespace-nowrap">
          Online Donation
        </span>
      </button>
    </div>
  );
}
