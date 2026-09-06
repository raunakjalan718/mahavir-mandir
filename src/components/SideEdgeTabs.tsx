"use client";

import { Radio, Heart } from "lucide-react";

interface SideEdgeTabsProps {
  onOpenLive: () => void;
  onOpenDonate: () => void;
}

export default function SideEdgeTabs({
  onOpenLive,
  onOpenDonate,
}: SideEdgeTabsProps) {
  return (
    <>
      {/* Left Edge Tab: Live Darshan (Rotated 90° Text) */}
      <button
        onClick={onOpenLive}
        className="group fixed left-0 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-2 py-4 px-2 bg-[#8b1e0f]/95 hover:bg-[#73180c] text-white rounded-r-xl border-y border-r border-amber-400/30 shadow-xl backdrop-blur-md transition-all duration-300 hover:translate-x-1 focus:outline-none cursor-pointer"
        title="Watch Live Darshan Stream"
      >
        <Radio className="w-4 h-4 text-amber-300 shrink-0" />
        <span className="[writing-mode:vertical-rl] text-[11px] font-bold tracking-widest uppercase text-amber-100 group-hover:text-white select-none whitespace-nowrap">
          Live Darshan
        </span>
      </button>

      {/* Right Edge Tab: Online Donation (Rotated 90° Text) */}
      <button
        onClick={onOpenDonate}
        className="group fixed right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-2 py-4 px-2 bg-[#2a1e17]/95 hover:bg-[#8b1e0f] text-white rounded-l-xl border-y border-l border-amber-400/30 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-x-1 focus:outline-none cursor-pointer"
        title="Make an Online Donation"
      >
        <Heart className="w-4 h-4 text-amber-400 shrink-0 group-hover:scale-110 transition-transform" />
        <span className="[writing-mode:vertical-rl] text-[11px] font-bold tracking-widest uppercase text-amber-200 group-hover:text-white select-none whitespace-nowrap">
          Online Donation
        </span>
      </button>
    </>
  );
}
