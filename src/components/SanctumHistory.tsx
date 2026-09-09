"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Landmark, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";

const tabs = [
  {
    id: "construction",
    icon: Building2,
    title: "Construction & Layout",
    subtitle: "निर्माण एवं संरचना",
    content:
      "The present temple complex was renovated between November 30, 1984 and March 4, 1985. Covering an expansive area of 10,000 square feet, the complex provides complete amenities for visitors and devotees. Upon entering the temple complex, stairs on a platform on the left lead to the main area of the temple, called the Sanctum Sanctorum, where Lord Hanuman is enshrined. Surrounding this is a wide corridor containing the deity of Lord Shiva.",
  },
  {
    id: "expansion",
    icon: Landmark,
    title: "Expansion of Temple",
    subtitle: "मंदिर का विस्तार",
    content:
      "Over the decades, Mahavir Mandir has expanded into a major pilgrimage and civic complex. Facilities include multi-storey devotional halls, streamlined queue corridors, research centers, publication units, and world-class charitable hospitals serving millions of devotees each year.",
  },
  {
    id: "history",
    icon: BookOpen,
    title: "Ancient History",
    subtitle: "प्राचीन इतिहास",
    content:
      "Mahavir Mandir is one of the oldest and holiest Hindu temples dedicated to Lord Hanuman in India. Located right near Patna Junction station, the Sankat Mochan shrine holds a sacred place in the hearts of millions of devotees who visit throughout the year, especially during Ram Navami.",
  },
];

// Temple photos — user places these in public/images/
const templePhotos = [
  { src: "/images/temp3.jpg", alt: "Mahavir Mandir Temple View" },
  { src: "/images/temp5.jpg", alt: "Temple Premises & Devotees" },
  { src: "/images/temp2.jpg", alt: "Sanctum Sanctorum" },
  { src: "/images/temp1.jpg", alt: "Temple Exterior" },
];

export default function SanctumHistory() {
  const [activeTab, setActiveTab] = useState("construction");
  const [photoIdx, setPhotoIdx] = useState(0);

  const current = tabs.find((t) => t.id === activeTab) || tabs[0];

  function prevPhoto() { setPhotoIdx((p) => (p + templePhotos.length - 1) % templePhotos.length); }
  function nextPhoto() { setPhotoIdx((p) => (p + 1) % templePhotos.length); }

  return (
    <section id="about" className="relative py-16 sm:py-24 bg-white overflow-hidden">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-0 w-80 h-80 bg-amber-50 rounded-full blur-3xl opacity-70" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8b1e0f]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section label */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="block w-8 h-px bg-amber-400" />
            <span className="text-[#8b1e0f] text-xs font-bold uppercase tracking-[0.2em]">प्राचीन धाम</span>
            <span className="block w-8 h-px bg-amber-400" />
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-bold text-[#2a1e17]">
            Ancient Mahavir Temple,{" "}
            <span className="text-[#8b1e0f]">Patna</span>
          </h2>
          <p className="mt-3 text-[#5a3a1a]/70 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            One of the holiest Hanuman temples in India — a living centre of faith, healing, and devotion since ancient times.
          </p>
          <div className="mt-5 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-400" />
            <span className="text-amber-500">✦</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400" />
          </div>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* LEFT: Photo carousel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Main photo */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-amber-100 to-[#faf0e6] shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={photoIdx}
                  src={templePhotos[photoIdx].src}
                  alt={templePhotos[photoIdx].alt}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if image not found
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </AnimatePresence>

              {/* Fallback visible behind image */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-amber-100 to-[#faf0e6]">
                <div className="text-6xl opacity-30">🛕</div>
                <p className="text-[#8b1e0f]/40 text-xs font-medium">{templePhotos[photoIdx].alt}</p>
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2a1e17]/40 via-transparent to-transparent pointer-events-none" />

              {/* Nav arrows */}
              <button
                onClick={prevPhoto}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-[#8b1e0f] hover:bg-white transition shadow-lg cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextPhoto}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-[#8b1e0f] hover:bg-white transition shadow-lg cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Caption */}
              <div className="absolute bottom-3 left-0 right-0 flex justify-center">
                <span className="bg-black/40 backdrop-blur-sm text-white text-[11px] font-medium px-3 py-1 rounded-full">
                  {templePhotos[photoIdx].alt}
                </span>
              </div>
            </div>

            {/* Thumbnail strip */}
            <div className="mt-3 flex gap-2 justify-center">
              {templePhotos.map((p, i) => (
                <button
                  key={i}
                  onClick={() => setPhotoIdx(i)}
                  className={`w-14 h-10 rounded-lg overflow-hidden border-2 transition-all cursor-pointer flex-shrink-0 bg-amber-100 ${
                    i === photoIdx ? "border-[#8b1e0f] opacity-100 scale-105" : "border-transparent opacity-60 hover:opacity-80"
                  }`}
                >
                  <img
                    src={p.src}
                    alt={p.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                </button>
              ))}
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full border-4 border-amber-200/40 pointer-events-none" />
            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full border-4 border-[#8b1e0f]/10 pointer-events-none" />
          </motion.div>

          {/* RIGHT: Tabs + content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            {/* Tab pills */}
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer border ${
                      isActive
                        ? "bg-[#8b1e0f] text-white border-[#8b1e0f] shadow-md shadow-[#8b1e0f]/20"
                        : "bg-white text-[#2a1e17] border-amber-200 hover:border-[#8b1e0f]/40"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {tab.title}
                  </button>
                );
              })}
            </div>

            {/* Tab content card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-[#faf7f2] to-amber-50 rounded-2xl p-6 sm:p-8 border border-amber-200/60 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#8b1e0f] flex items-center justify-center shadow">
                    {(() => { const Icon = current.icon; return <Icon className="w-5 h-5 text-white" strokeWidth={1.8} />; })()}
                  </div>
                  <div>
                    <h3 className="font-serif-title text-lg font-bold text-[#2a1e17]">{current.title}</h3>
                    <p className="text-[#8b1e0f]/70 text-xs font-medium">{current.subtitle}</p>
                  </div>
                </div>

                {/* Decorative divider */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-px flex-1 bg-amber-200" />
                  <span className="text-amber-400 text-xs">✦</span>
                  <div className="h-px flex-1 bg-amber-200" />
                </div>

                <p className="text-sm text-[#2a1e17]/85 leading-relaxed font-normal">
                  {current.content}
                </p>

                <a
                  href="#"
                  className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-[#8b1e0f] hover:gap-2.5 transition-all"
                >
                  Read complete historical records
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            </AnimatePresence>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "10,000", label: "Sq. Ft. Complex" },
                { value: "1985", label: "Year Renovated" },
                { value: "Millions", label: "Annual Visitors" },
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-xl p-3 text-center border border-amber-100 shadow-sm">
                  <div className="font-serif-title text-lg font-black text-[#8b1e0f]">{stat.value}</div>
                  <div className="text-[10px] text-[#2a1e17]/60 font-medium leading-tight mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
