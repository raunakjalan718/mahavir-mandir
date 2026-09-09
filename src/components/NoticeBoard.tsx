"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Sun, BookOpen, Utensils, Sunset, Moon, BedDouble, Coffee, FileText, Megaphone, Bell, User, Store } from "lucide-react";

/* ─── DATA ─────────────────────────────────────────────────────────────────── */

const dailyEvents = [
  { icon: Sun,       label: "Temple Opening Time",   time: "05:00 AM daily" },
  { icon: Bell,      label: "Morning Aarti",          time: "05:00 AM daily" },
  { icon: BookOpen,  label: "Bhog Aarti",             time: "Daily at 11:00 AM" },
  { icon: Sunset,    label: "Afternoon Aarti",        time: "Every day after 4:00 p.m." },
  { icon: Moon,      label: "Evening Aarti",          time: "Every day after 08:00 PM" },
  { icon: BedDouble, label: "Shayan Aarti",           time: "Every day after 10:30 PM" },
  { icon: Utensils,  label: "Daridranarayan Bhoj",    time: "Every day after 12:00 noon & 08:00 PM" },
];

const tenders = [
  { id: 1, lastDate: "30-Oct-2026" },
  { id: 2, lastDate: "15-Nov-2026" },
  { id: 3, lastDate: "25-Nov-2026" },
  { id: 4, lastDate: "05-December-2026" },
];

const notices = [
  {
    icon: User,
    text: "Applications are invited for appointment of qualified priests in the rituals division of Shri Mahavir Mandir, Patna.",
    date: "Posted: 24-Aug-2025",
  },
  {
    icon: Bell,
    text: "Admission process starts for session 2026 in Mahavir Mandir, Veda Vidyalaya.",
    date: "Issued on: 26-Jan-2026",
  },
  {
    icon: Store,
    text: "The famous 'Pooja Samagri Store' located near Mahavir Mandir invites applications for the post of 'Store Assistant'.",
    date: "Posted: 17-June-2026",
  },
];

/* ─── PANEL CARD ────────────────────────────────────────────────────────────── */

function PanelCard({
  headerBg,
  headerText,
  headerSub,
  HeaderIcon,
  children,
}: {
  headerBg: string;
  headerText: string;
  headerSub?: string;
  HeaderIcon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-full rounded-2xl overflow-hidden shadow-xl border border-amber-200/60 bg-white min-w-0">
      {/* Coloured header */}
      <div className={`${headerBg} px-5 py-4 flex items-start justify-between shrink-0`}>
        <div>
          <p className="text-white font-black text-base sm:text-lg leading-tight tracking-wide">
            {headerText}
          </p>
          {headerSub && (
            <p className="text-white/75 text-xs font-semibold tracking-widest uppercase mt-0.5">
              {headerSub}
            </p>
          )}
        </div>
        <HeaderIcon className="w-8 h-8 text-white/40 shrink-0 mt-0.5" strokeWidth={1.5} />
      </div>

      {/* Scrollable body */}
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-amber-200 scrollbar-track-transparent px-4 py-3 space-y-1">
        {children}
      </div>
    </div>
  );
}

/* ─── DAILY EVENTS PANEL ────────────────────────────────────────────────────── */

function DailyEventsPanel() {
  return (
    <PanelCard
      headerBg="bg-[#c96a12]"
      headerText="DAILY"
      headerSub="EVENTS"
      HeaderIcon={({ className, strokeWidth }: { className?: string; strokeWidth?: number }) => (
        <svg className={className} viewBox="0 0 40 40" fill="none">
          <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="28" fill="currentColor">ॐ</text>
        </svg>
      )}
    >
      {dailyEvents.map((ev, i) => {
        const Icon = ev.icon;
        return (
          <div key={i} className="flex items-start gap-3 py-2.5 border-b border-amber-100/80 last:border-0">
            <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center shrink-0 mt-0.5">
              <Icon className="w-4 h-4 text-[#c96a12]" strokeWidth={1.8} />
            </div>
            <div className="min-w-0">
              <p className="text-[#2a1e17] font-semibold text-sm leading-snug">{ev.label}</p>
              <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full bg-amber-100 text-[#c96a12] text-[11px] font-bold">
                {ev.time}
              </span>
            </div>
          </div>
        );
      })}
    </PanelCard>
  );
}

/* ─── TENDERS PANEL ─────────────────────────────────────────────────────────── */

function TendersPanel() {
  return (
    <PanelCard
      headerBg="bg-[#7a1a0f]"
      headerText="Tenders"
      HeaderIcon={FileText}
    >
      {tenders.map((t) => (
        <div
          key={t.id}
          className="flex items-center gap-3 py-3 border-b border-amber-100/80 last:border-0 group cursor-pointer hover:bg-amber-50/60 rounded-lg px-2 -mx-2 transition-colors"
        >
          {/* PDF icon */}
          <div className="w-10 h-12 bg-amber-50 border border-amber-200 rounded flex flex-col items-center justify-center shrink-0 group-hover:border-[#c96a12]/40 transition-colors">
            <div className="w-full bg-red-600 rounded-t flex items-center justify-center" style={{ height: "40%" }}>
              <span className="text-white text-[8px] font-black leading-none">PDF</span>
            </div>
            <span className="text-[7px] text-amber-900/40 font-bold pt-0.5 leading-none">……</span>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[#2a1e17]/40 text-xs mb-1">……</p>
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-amber-100 text-[#c96a12] text-[11px] font-bold">
              Last Date: {t.lastDate}
            </span>
          </div>
        </div>
      ))}
    </PanelCard>
  );
}

/* ─── RECRUITMENT / NOTICE PANEL ────────────────────────────────────────────── */

function RecruitmentPanel() {
  return (
    <PanelCard
      headerBg="bg-[#c96a12]"
      headerText="RECRUITMENT"
      headerSub="/ NOTICE"
      HeaderIcon={Megaphone}
    >
      {notices.map((n, i) => {
        const Icon = n.icon;
        return (
          <div key={i} className="flex items-start gap-3 py-3 border-b border-amber-100/80 last:border-0">
            <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center shrink-0 mt-0.5">
              <Icon className="w-4 h-4 text-[#7a1a0f]" strokeWidth={1.8} />
            </div>
            <div className="min-w-0">
              <p className="text-[#2a1e17] text-sm leading-snug font-medium">{n.text}</p>
              <span className="inline-block mt-1.5 px-2.5 py-0.5 rounded-full bg-amber-100 text-[#c96a12] text-[11px] font-bold">
                {n.date}
              </span>
            </div>
          </div>
        );
      })}
    </PanelCard>
  );
}

/* ─── MAIN SECTION ──────────────────────────────────────────────────────────── */

const PANELS = [
  { id: "daily",       component: <DailyEventsPanel /> },
  { id: "tenders",     component: <TendersPanel /> },
  { id: "recruitment", component: <RecruitmentPanel /> },
];

export default function NoticeBoard() {
  const [activeTab, setActiveTab] = useState(0);
  const dragStart = useRef<number | null>(null);

  function prev() { setActiveTab((p) => (p + PANELS.length - 1) % PANELS.length); }
  function next() { setActiveTab((p) => (p + 1) % PANELS.length); }

  function onPointerDown(e: React.PointerEvent) { dragStart.current = e.clientX; }
  function onPointerUp(e: React.PointerEvent) {
    if (dragStart.current === null) return;
    const delta = e.clientX - dragStart.current;
    if (Math.abs(delta) > 40) delta < 0 ? next() : prev();
    dragStart.current = null;
  }

  const TAB_LABELS = ["Daily Events", "Tenders", "Recruitment"];

  return (
    <section id="notice-board" className="relative py-16 sm:py-24 bg-[#faf7f2] overflow-hidden">
      {/* Subtle background texture */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-amber-100/30 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-[#c96a12]/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8">

        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="block w-8 h-px bg-amber-400" />
            <span className="text-[#8b1e0f] text-xs font-bold uppercase tracking-[0.2em]">
              Latest Updates
            </span>
            <span className="block w-8 h-px bg-amber-400" />
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-bold text-[#2a1e17]">
            Notice Board &amp; Daily Schedule
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="h-0.5 w-20 bg-gradient-to-r from-transparent to-[#c96a12]" />
            <div className="w-2 h-2 rounded-full bg-[#c96a12]" />
            <div className="h-0.5 w-20 bg-gradient-to-l from-transparent to-[#c96a12]" />
          </div>
        </div>

        {/* ── DESKTOP: 3 columns side-by-side ──────────────────────────────────── */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 h-[520px]">
          <DailyEventsPanel />
          <TendersPanel />
          <RecruitmentPanel />
        </div>

        {/* ── MOBILE / TABLET: tab + carousel ─────────────────────────────────── */}
        <div className="lg:hidden">

          {/* Tab pills */}
          <div className="flex gap-2 mb-4 justify-center flex-wrap">
            {TAB_LABELS.map((label, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer border ${
                  activeTab === i
                    ? "bg-[#c96a12] text-white border-[#c96a12] shadow-lg shadow-[#c96a12]/20"
                    : "bg-white text-[#c96a12] border-amber-300 hover:border-[#c96a12]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Carousel panel */}
          <div
            className="relative overflow-hidden h-[460px] touch-pan-y"
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                {PANELS[activeTab].component}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Prev / Next */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <button
              onClick={prev}
              aria-label="Previous panel"
              className="w-10 h-10 rounded-full bg-white border border-amber-300/60 shadow flex items-center justify-center text-[#c96a12] hover:bg-amber-50 active:scale-90 transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-1.5">
              {PANELS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`rounded-full transition-all duration-300 cursor-pointer ${
                    i === activeTab ? "w-6 h-2.5 bg-[#c96a12]" : "w-2.5 h-2.5 bg-amber-300/50"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next panel"
              className="w-10 h-10 rounded-full bg-white border border-amber-300/60 shadow flex items-center justify-center text-[#c96a12] hover:bg-amber-50 active:scale-90 transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
