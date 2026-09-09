"use client";

import { motion } from "framer-motion";
import { Newspaper, Calendar, Clock, ChevronRight, Megaphone } from "lucide-react";

const newsItems = [
  {
    tag: "Temple Feature",
    title: "Why is Mahavir Temple considered one of the major temples of the country?",
    icon: "📿",
  },
  {
    tag: "Public Service",
    title: "Free facility of mortal remains vehicle for bereaved families",
    icon: "🙏",
  },
  {
    tag: "Announcement",
    title: "Special arrangements for Ram Navami 2026 — extended darshan hours",
    icon: "🛕",
  },
];

const festivalItems = [
  { name: "Makar Sankranti", date: "15 Jan 2026", desc: "Special Mahaprasad & Darshan", color: "bg-orange-100 text-orange-800" },
  { name: "Republic Day",    date: "26 Jan 2026", desc: "Flag Hoisting & Patriotic Prayers", color: "bg-blue-100 text-blue-800" },
  { name: "Ram Navami",      date: "Apr 2026",    desc: "Grand Mela & Extended Darshan",    color: "bg-rose-100 text-rose-800" },
];

const scheduleItems = [
  { event: "Temple Opening", time: "05:00 AM", icon: "🌅" },
  { event: "Morning Aarti",  time: "05:00 AM", icon: "🔔" },
  { event: "Bhog Aarti",     time: "11:00 AM", icon: "📖" },
  { event: "Evening Aarti",  time: "08:00 PM", icon: "🌙" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function ActivityCards() {
  return (
    <section id="present-activity" className="relative py-16 sm:py-24 bg-[#faf7f2] overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-1/3 w-80 h-80 bg-amber-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-[#8b1e0f]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="block w-8 h-px bg-amber-400" />
              <span className="text-[#8b1e0f] text-xs font-bold uppercase tracking-[0.2em]">नवीनतम गतिविधियाँ</span>
              <span className="block w-8 h-px bg-amber-400" />
            </div>
            <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-bold text-[#2a1e17]">
              Present <span className="text-[#8b1e0f]">Activity</span>
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8b1e0f] hover:underline shrink-0"
          >
            <Megaphone className="w-3.5 h-3.5" />
            View All Press Releases
          </a>
        </div>

        {/* 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1: Latest News */}
          <motion.div
            custom={0} variants={cardVariants} initial="hidden"
            whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="group bg-white rounded-2xl overflow-hidden border border-amber-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
          >
            {/* Header bar */}
            <div className="bg-gradient-to-r from-[#8b1e0f] to-[#c0392b] px-5 py-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
                <Newspaper className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm leading-tight">Latest News</h3>
                <p className="text-white/60 text-[10px] font-medium uppercase tracking-wider">नवीनतम समाचार</p>
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col">
              <div className="space-y-3 flex-1">
                {newsItems.map((item, i) => (
                  <div key={i} className="group/item flex gap-3 p-3 rounded-xl bg-[#faf7f2] hover:bg-amber-50 border border-amber-100/80 transition-colors cursor-pointer">
                    <span className="text-xl shrink-0 mt-0.5">{item.icon}</span>
                    <div className="min-w-0">
                      <span className="text-[10px] font-bold text-[#8b1e0f] uppercase tracking-wider block mb-0.5">{item.tag}</span>
                      <p className="text-xs font-semibold text-[#2a1e17] leading-snug group-hover/item:text-[#8b1e0f] transition-colors">{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a href="#" className="mt-4 pt-4 border-t border-amber-100 flex items-center gap-1.5 text-xs font-bold text-[#8b1e0f] group-hover:gap-2.5 transition-all">
                Read News Archive <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Card 2: Upcoming Festivals */}
          <motion.div
            custom={1} variants={cardVariants} initial="hidden"
            whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="group bg-white rounded-2xl overflow-hidden border border-amber-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
          >
            <div className="bg-gradient-to-r from-amber-700 to-amber-500 px-5 py-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
                <Calendar className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm leading-tight">Upcoming Festivals</h3>
                <p className="text-white/60 text-[10px] font-medium uppercase tracking-wider">त्योहार</p>
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col">
              <div className="space-y-3 flex-1">
                {festivalItems.map((item, i) => (
                  <div key={i} className="p-3 rounded-xl bg-[#faf7f2] border border-amber-100/80">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-xs font-bold text-[#2a1e17]">{item.name}</h4>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${item.color}`}>{item.date}</span>
                    </div>
                    <p className="text-[11px] text-[#2a1e17]/70">{item.desc}</p>
                  </div>
                ))}
              </div>
              <a href="#" className="mt-4 pt-4 border-t border-amber-100 flex items-center gap-1.5 text-xs font-bold text-amber-700 group-hover:gap-2.5 transition-all">
                Festival Calendar <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Card 3: Daily Schedule */}
          <motion.div
            custom={2} variants={cardVariants} initial="hidden"
            whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="group bg-white rounded-2xl overflow-hidden border border-amber-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
          >
            <div className="bg-gradient-to-r from-[#5a3a1a] to-[#8b5e3c] px-5 py-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
                <Clock className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm leading-tight">Daily Schedule</h3>
                <p className="text-white/60 text-[10px] font-medium uppercase tracking-wider">दैनिक कार्यक्रम</p>
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col">
              <div className="space-y-2.5 flex-1">
                {scheduleItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-[#faf7f2] border border-amber-100/80">
                    <span className="text-xl shrink-0">{item.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-[#2a1e17]">{item.event}</p>
                    </div>
                    <span className="text-[11px] font-black text-[#8b1e0f] bg-red-50 px-2 py-1 rounded-lg shrink-0 font-mono">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
              <a href="#notice-board" className="mt-4 pt-4 border-t border-amber-100 flex items-center gap-1.5 text-xs font-bold text-[#5a3a1a] group-hover:gap-2.5 transition-all">
                Full Aarti Schedule <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
