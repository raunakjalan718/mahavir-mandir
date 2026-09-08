"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const members = [
  {
    id: 1,
    name: "Mr. Justice B. N. Agarwal (Adm.)",
    role: "Chairman",
    image: "/images/M1.png",
    badge: "bg-[#8b1e0f]",
    badgeText: "Chairman",
  },
  {
    id: 2,
    name: "Shri Justice S. N. Jha (Retd.)",
    role: "Member",
    image: "/images/M2.png",
    badge: "bg-[#5a3a1a]",
    badgeText: "Member",
  },
  {
    id: 3,
    name: "Shri Vijay Shankar Dubey",
    role: "Former Chief Secretary · Member",
    image: "/images/M3.png",
    badge: "bg-[#5a3a1a]",
    badgeText: "Member",
  },
  {
    id: 4,
    name: "Shri Justice Rajendra Prasad (Adm.)",
    role: "Treasurer",
    image: "/images/M4.png",
    badge: "bg-amber-700",
    badgeText: "Treasurer",
  },
  {
    id: 5,
    name: "Lt. General Shri A.K. Choudhary (Retd.)",
    role: "Member",
    image: "/images/M5.png",
    badge: "bg-[#5a3a1a]",
    badgeText: "Member",
  },
  {
    id: 6,
    name: "Smt. Mahasweta Maharathi",
    role: "Renowned Buddhist Scholar · Member",
    image: "/images/M6.png",
    badge: "bg-[#5a3a1a]",
    badgeText: "Member",
  },
  {
    id: 7,
    name: "Prof. Dr. Shivakant Jha",
    role: "Sanskrit University, Darbhanga · Member",
    image: "/images/M7.png",
    badge: "bg-[#5a3a1a]",
    badgeText: "Member",
  },
  {
    id: 8,
    name: "Shri Justice Sanjay Kumar (Adm.)",
    role: "Member",
    image: "/images/M8.png",
    badge: "bg-[#5a3a1a]",
    badgeText: "Member",
  },
  {
    id: 9,
    name: "Shri N.K. Sinha",
    role: "Former IAS · Member",
    image: "/images/M9.png",
    badge: "bg-[#5a3a1a]",
    badgeText: "Member",
  },
  {
    id: 10,
    name: "Shri Sayan Kunal",
    role: "Secretary",
    image: "/images/M10.png",
    badge: "bg-[#8b1e0f]",
    badgeText: "Secretary",
  },
];

export default function TrustCommittee() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = members.length;

  const goTo = useCallback((index: number) => {
    setActiveIndex(((index % total) + total) % total);
  }, [total]);

  const prev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);
  const next = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);

  // Autoplay
  useEffect(() => {
    if (isHovered) return;
    autoplayRef.current = setInterval(next, 3500);
    return () => { if (autoplayRef.current) clearInterval(autoplayRef.current); };
  }, [isHovered, next]);

  // Touch / drag support
  const dragStart = useRef<number | null>(null);
  function onPointerDown(e: React.PointerEvent) { dragStart.current = e.clientX; }
  function onPointerUp(e: React.PointerEvent) {
    if (dragStart.current === null) return;
    const delta = e.clientX - dragStart.current;
    if (Math.abs(delta) > 40) delta < 0 ? next() : prev();
    dragStart.current = null;
  }

  // How many cards visible depends on viewport (CSS handles this, JS just keeps track for aria)
  const getVisible = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  // Build the ordered list: show cards in a "window" centred on activeIndex
  const orderedIndices = Array.from({ length: total }, (_, i) => (activeIndex + i) % total);

  return (
    <section
      id="trust-committee"
      className="relative py-20 sm:py-28 bg-[#faf7f2] overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-amber-100/40 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-[#8b1e0f]/5 blur-3xl" />
        {/* Mandala watermark */}
        <svg
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.025]"
          viewBox="0 0 200 200"
          fill="none"
        >
          {Array.from({ length: 12 }, (_, i) => (
            <ellipse
              key={i}
              cx="100" cy="100" rx="80" ry="20"
              stroke="#8b1e0f" strokeWidth="0.5"
              transform={`rotate(${i * 15} 100 100)`}
            />
          ))}
          <circle cx="100" cy="100" r="90" stroke="#8b1e0f" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="60" stroke="#8b1e0f" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="30" stroke="#8b1e0f" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="block w-10 h-px bg-amber-400" />
            <span className="text-[#8b1e0f] text-xs font-bold uppercase tracking-[0.2em]">
              Shri Mahavir Sthan Trust
            </span>
            <span className="block w-10 h-px bg-amber-400" />
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-bold text-[#2a1e17] leading-tight">
            Trust Committee
          </h2>
          <p className="mt-3 text-[#5a3a1a]/70 text-sm sm:text-base max-w-xl mx-auto">
            Distinguished members guiding the spiritual and administrative mission of Mahavir Mandir, Patna
          </p>
          {/* Ornamental divider */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="block w-16 h-px bg-amber-300/60" />
            <span className="text-amber-500 text-lg">✦</span>
            <span className="block w-16 h-px bg-amber-300/60" />
          </div>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
        >
          {/* Cards track */}
          <div
            ref={trackRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
          >
            <AnimatePresence mode="popLayout" initial={false}>
              {orderedIndices.slice(0, getVisible()).map((memberIdx, position) => {
                const m = members[memberIdx];
                const isFirst = position === 0;
                return (
                  <motion.div
                    key={m.id}
                    layout
                    initial={{ opacity: 0, x: 40, scale: 0.96 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -40, scale: 0.96 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className={`
                      group relative rounded-3xl overflow-hidden cursor-default select-none
                      bg-white border shadow-lg
                      ${isFirst
                        ? "border-amber-400/60 shadow-amber-200/50 shadow-xl ring-1 ring-amber-300/40"
                        : "border-amber-100 shadow-amber-100/30"
                      }
                      transition-shadow duration-300 hover:shadow-2xl hover:shadow-amber-200/40
                    `}
                  >
                    {/* Photo area */}
                    <div className="relative w-full aspect-[4/3] overflow-hidden bg-gradient-to-br from-amber-50 to-[#faf0e6]">
                      <img
                        src={m.image}
                        alt={m.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                        draggable={false}
                      />
                      {/* Gradient overlay bottom */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2a1e17]/60 via-transparent to-transparent" />

                      {/* Role badge */}
                      <span
                        className={`absolute top-3 right-3 px-3 py-1 rounded-full text-white text-[11px] font-bold uppercase tracking-wider shadow-lg ${m.badge}`}
                      >
                        {m.badgeText}
                      </span>

                      {/* Member number */}
                      <span className="absolute top-3 left-3 w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white text-[11px] font-bold">
                        {m.id}
                      </span>
                    </div>

                    {/* Info area */}
                    <div className="p-5">
                      {/* Amber accent line */}
                      <div className="w-8 h-0.5 bg-amber-400 rounded-full mb-3" />
                      <h3 className="font-serif-title text-base sm:text-[17px] font-bold text-[#2a1e17] leading-snug">
                        {m.name}
                      </h3>
                      <p className="mt-1.5 text-[#8b1e0f] text-xs font-semibold uppercase tracking-wide">
                        {m.role}
                      </p>
                    </div>

                    {/* Hover shimmer */}
                    <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-amber-100/10 via-transparent to-transparent" />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Prev / Next arrows */}
          <button
            onClick={prev}
            aria-label="Previous member"
            className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 z-10
              w-11 h-11 rounded-full bg-white border border-amber-300/60 shadow-lg
              flex items-center justify-center text-[#8b1e0f]
              hover:bg-amber-50 hover:border-amber-400 active:scale-90
              transition-all duration-200 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next member"
            className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 z-10
              w-11 h-11 rounded-full bg-white border border-amber-300/60 shadow-lg
              flex items-center justify-center text-[#8b1e0f]
              hover:bg-amber-50 hover:border-amber-400 active:scale-90
              transition-all duration-200 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="mt-10 flex items-center justify-center gap-2">
          {members.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to member ${i + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer
                ${i === activeIndex
                  ? "w-7 h-2.5 bg-[#8b1e0f]"
                  : "w-2.5 h-2.5 bg-amber-300/50 hover:bg-amber-400/70"
                }
              `}
            />
          ))}
        </div>

        {/* Member count label */}
        <p className="mt-4 text-center text-[#5a3a1a]/40 text-xs font-medium tracking-wider uppercase">
          {activeIndex + 1} / {total} &nbsp;·&nbsp; Swipe or click to explore
        </p>
      </div>
    </section>
  );
}
