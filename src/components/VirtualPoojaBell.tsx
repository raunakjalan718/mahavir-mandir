"use client";

import { useState } from "react";
import { Bell, Sparkles } from "lucide-react";

export default function VirtualPoojaBell() {
  const [isRinging, setIsRinging] = useState(false);
  const [ringCount, setRingCount] = useState(0);

  const ringBellSound = () => {
    setIsRinging(true);
    setRingCount((prev) => prev + 1);

    try {
      const AudioContext = window.AudioContext || (window as unknown as { webkitAudioContext: typeof window.AudioContext }).webkitAudioContext;
      if (AudioContext) {
        const ctx = new AudioContext();
        
        // Oscillator 1 for high bell overtone
        const osc1 = ctx.createOscillator();
        const gain1 = ctx.createGain();
        osc1.type = "sine";
        osc1.frequency.setValueAtTime(1100, ctx.currentTime);
        gain1.gain.setValueAtTime(0.3, ctx.currentTime);
        gain1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 2.5);
        osc1.connect(gain1);
        gain1.connect(ctx.destination);

        // Oscillator 2 for fundamental brass tone
        const osc2 = ctx.createOscillator();
        const gain2 = ctx.createGain();
        osc2.type = "triangle";
        osc2.frequency.setValueAtTime(550, ctx.currentTime);
        gain2.gain.setValueAtTime(0.4, ctx.currentTime);
        gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 3.0);
        osc2.connect(gain2);
        gain2.connect(ctx.destination);

        osc1.start();
        osc2.start();
        osc1.stop(ctx.currentTime + 2.5);
        osc2.stop(ctx.currentTime + 3.0);
      }
    } catch {
      // audio fallback
    }

    setTimeout(() => {
      setIsRinging(false);
    }, 600);
  };

  return (
    <button
      onClick={ringBellSound}
      className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-amber-100/90 hover:bg-amber-200 text-saffron-900 border border-amber-300 text-xs sm:text-sm font-bold shadow-sm transition-all group"
      title="Click to ring Mandir Bell for Devotion"
    >
      <div className={`w-7 h-7 rounded-full bg-saffron-500 text-white flex items-center justify-center shadow ${isRinging ? "animate-bell-ring bg-gold-600" : "group-hover:scale-110"}`}>
        <Bell className="w-4 h-4" />
      </div>
      <div className="text-left">
        <span className="block leading-tight font-extrabold text-saffron-900">Ring Temple Bell (घंटी बजाएं)</span>
        <span className="block text-[10px] text-amber-900/70 font-semibold">
          {ringCount === 0 ? "Click for Sacred Bell Chime" : `Blessed ${ringCount} ${ringCount === 1 ? "Time" : "Times"} • Jai Bajrangbali`}
        </span>
      </div>
      {isRinging && <Sparkles className="w-4 h-4 text-gold-600 animate-spin" />}
    </button>
  );
}
