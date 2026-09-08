"use client";

import { useState } from "react";
import { Radio, Heart, Globe, X, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SideEdgeTabsProps {
  onOpenLive: () => void;
  onOpenDonate: () => void;
}

const menuItems = [
  {
    id: "live",
    label: "Live Darshan",
    sublabel: "Watch now",
    icon: Radio,
    bg: "bg-[#8b1e0f]",
    hoverBg: "hover:bg-[#73180c]",
    iconColor: "text-amber-300",
    border: "border-amber-400/40",
  },
  {
    id: "donate",
    label: "Online Donation",
    sublabel: "Offer prasad",
    icon: Heart,
    bg: "bg-amber-500",
    hoverBg: "hover:bg-amber-600",
    iconColor: "text-gray-900",
    border: "border-amber-300/50",
  },
  {
    id: "language",
    label: "Language",
    sublabel: "Hindi / English",
    icon: Globe,
    bg: "bg-[#2a1e17]",
    hoverBg: "hover:bg-[#3d2a1e]",
    iconColor: "text-amber-300",
    border: "border-amber-400/30",
  },
];

export default function SideEdgeTabs({
  onOpenLive,
  onOpenDonate,
}: SideEdgeTabsProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleAction(id: string) {
    setIsOpen(false);
    if (id === "live") onOpenLive();
    if (id === "donate") onOpenDonate();
    // language: no action yet
  }

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end gap-3">
      {/* Menu Items */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.92 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-2.5 items-end"
          >
            {menuItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{
                    duration: 0.25,
                    delay: i * 0.05,
                    ease: "easeOut",
                  }}
                  onClick={() => handleAction(item.id)}
                  className={`
                    group flex items-center gap-3 pr-3.5 pl-3 py-2.5
                    ${item.bg} ${item.hoverBg}
                    rounded-2xl border ${item.border}
                    shadow-xl backdrop-blur-md
                    transition-all duration-200 active:scale-95
                    cursor-pointer
                  `}
                >
                  {/* Text */}
                  <div className="text-right">
                    <p className="text-white font-bold text-sm leading-tight whitespace-nowrap">
                      {item.label}
                    </p>
                    <p className="text-white/60 text-[10px] font-medium leading-tight whitespace-nowrap">
                      {item.sublabel}
                    </p>
                  </div>
                  {/* Icon bubble */}
                  <div className={`w-8 h-8 rounded-xl bg-white/15 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-4 h-4 ${item.iconColor}`} />
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB Toggle Button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`
          relative w-14 h-14 rounded-2xl
          bg-[#8b1e0f] hover:bg-[#73180c]
          border-2 border-amber-400/50
          shadow-2xl shadow-[#8b1e0f]/40
          flex items-center justify-center
          transition-all duration-300 cursor-pointer
          ${isOpen ? "rotate-45" : "rotate-0"}
        `}
        style={{ transition: "transform 0.3s ease, background 0.2s" }}
        aria-label="Open quick actions"
      >
        {/* Glow ring */}
        <span className="absolute inset-0 rounded-2xl ring-2 ring-amber-400/20 animate-pulse pointer-events-none" />
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 45, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6 text-amber-300" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -45, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Plus className="w-6 h-6 text-amber-300" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
