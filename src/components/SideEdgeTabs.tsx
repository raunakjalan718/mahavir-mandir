"use client";

import { useState, useEffect, useRef } from "react";
import { Radio, Heart, Globe, X, Plus, Facebook } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SideEdgeTabsProps {
  onOpenLive: () => void;
  onOpenDonate: () => void;
}

export default function SideEdgeTabs({
  onOpenLive,
  onOpenDonate,
}: SideEdgeTabsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  // Suppress Google Translate's injected top toolbar
  useEffect(() => {
    const style = document.createElement("style");
    style.id = "gt-suppress";
    style.innerHTML = `
      .goog-te-banner-frame.skiptranslate { display: none !important; }
      .goog-te-gadget { display: none !important; }
      #goog-gt-tt { display: none !important; }
      .goog-te-balloon-frame { display: none !important; }
      body { top: 0px !important; }
      font { background-color: transparent !important; box-shadow: none !important; }
    `;
    if (!document.getElementById("gt-suppress")) {
      document.head.appendChild(style);
    }
    return () => {
      const el = document.getElementById("gt-suppress");
      if (el) el.remove();
    };
  }, []);

  function handleAction(id: string) {
    if (id === "live") { setIsOpen(false); onOpenLive(); }
    else if (id === "donate") { setIsOpen(false); onOpenDonate(); }
    else if (id === "language") { setLangOpen((v) => !v); }
    else if (id === "facebook") { 
      setIsOpen(false); 
      window.open("https://www.facebook.com/PatnaMahavirMandir/?ref=embed_page#", "_blank", "noopener,noreferrer"); 
    }
  }

  // Close lang panel when clicking outside
  useEffect(() => {
    if (!langOpen) return;
    function handler(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [langOpen]);

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
      sublabel: "Translate page",
      icon: Globe,
      bg: "bg-[#2a1e17]",
      hoverBg: "hover:bg-[#3d2a1e]",
      iconColor: "text-amber-300",
      border: "border-amber-400/30",
    },
    {
      id: "facebook",
      label: "Facebook",
      sublabel: "Follow us",
      icon: Facebook,
      bg: "bg-blue-600",
      hoverBg: "hover:bg-blue-700",
      iconColor: "text-white",
      border: "border-blue-400/50",
    },
  ];

  return (
    <div ref={langRef} className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end gap-3">

      {/* Google Translate Popup Panel */}
      <AnimatePresence>
        {langOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.93 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mb-1 rounded-2xl border border-amber-400/30 bg-[#2a1e17] shadow-2xl overflow-hidden"
            style={{ minWidth: 220 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-amber-400/20">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-amber-300" />
                <span className="text-white font-bold text-sm">Translate Page</span>
              </div>
              <button
                onClick={() => setLangOpen(false)}
                className="text-amber-300/60 hover:text-amber-300 transition-colors cursor-pointer"
                aria-label="Close language panel"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Google Translate widget container */}
            <div className="px-4 py-3">
              <p className="text-amber-100/60 text-[11px] mb-2 font-medium">
                Select your preferred language:
              </p>
              {/* The actual widget renders here – we clone the hidden div's select into view */}
              <div
                id="google_translate_element_visible"
                className="google-translate-wrapper"
              />
              <GoogleTranslateMirror />
            </div>

            {/* Footer note */}
            <div className="px-4 pb-3">
              <p className="text-amber-100/30 text-[10px]">Powered by Google Translate</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
                    ${item.id === "language" && langOpen ? "ring-2 ring-amber-400/50" : ""}
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
        onClick={() => { setIsOpen(!isOpen); if (isOpen) setLangOpen(false); }}
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

/**
 * Mirrors the hidden #google_translate_element select into a styled clone.
 * Google Translate mutates the DOM after the script loads, so we poll
 * for the select and then proxy its value changes.
 */
function GoogleTranslateMirror() {
  const [langs, setLangs] = useState<{ value: string; label: string }[]>([]);
  const [selected, setSelected] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    let attempts = 0;
    const MAX_ATTEMPTS = 60; // poll for up to ~18 seconds

    const interval = setInterval(() => {
      attempts++;

      // GT may render the select inside different containers — check both
      const sourceSelect =
        document.querySelector<HTMLSelectElement>("#google_translate_element select.goog-te-combo") ||
        document.querySelector<HTMLSelectElement>("select.goog-te-combo");

      if (sourceSelect && sourceSelect.options.length > 1) {
        clearInterval(interval);
        const options = Array.from(sourceSelect.options).map((o) => ({
          value: o.value,
          label: o.text,
        }));
        setLangs(options);
        setSelected(sourceSelect.value || "");
        return;
      }

      if (attempts >= MAX_ATTEMPTS) {
        clearInterval(interval);
        setError(true);
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const val = e.target.value;
    setSelected(val);
    const sourceSelect =
      document.querySelector<HTMLSelectElement>("#google_translate_element select.goog-te-combo") ||
      document.querySelector<HTMLSelectElement>("select.goog-te-combo");
    if (sourceSelect) {
      sourceSelect.value = val;
      sourceSelect.dispatchEvent(new Event("change"));
    }
  }

  if (error) {
    return (
      <div className="text-amber-100/50 text-xs py-2">
        Could not load languages. Please reload the page.
      </div>
    );
  }

  if (langs.length === 0) {
    return (
      <div className="flex items-center gap-2 py-2 text-amber-100/50 text-xs">
        <span className="w-3 h-3 border border-amber-300/40 border-t-amber-300 rounded-full animate-spin inline-block" />
        Loading languages…
      </div>
    );
  }

  return (
    <select
      value={selected}
      onChange={handleChange}
      className="w-full rounded-xl border border-amber-400/30 bg-[#1a110c] text-amber-100 text-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400/50 cursor-pointer"
    >
      {langs.map((l) => (
        <option key={l.value} value={l.value} className="bg-[#1a110c]">
          {l.label}
        </option>
      ))}
    </select>
  );
}
