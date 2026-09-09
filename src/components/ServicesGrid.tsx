"use client";

import { motion } from "framer-motion";
import { Flame, BookOpen, Star, Car, ChevronRight, Sparkles } from "lucide-react";

const services = [
  {
    num: "01",
    icon: Flame,
    title: "Divine Offerings & Rituals",
    sanskrit: "दिव्य अर्पण",
    color: "from-[#8b1e0f] to-[#c0392b]",
    bg: "bg-red-50",
    border: "border-red-200",
    items: [
      "Daridranarayan feast",
      "Vermillion adornment (Sindoor Chola)",
      "Akhand-jyoti (Eternal flame)",
      "Flag hoisting ceremony",
      "Floral adornment (Phool Shringar)",
    ],
  },
  {
    num: "02",
    icon: Star,
    title: "Worship & Havans",
    sanskrit: "पूजा एवं हवन",
    color: "from-amber-700 to-amber-500",
    bg: "bg-amber-50",
    border: "border-amber-200",
    items: [
      "Rudrabhishek & Satyanarayan Katha",
      "Hanumat-worship & Ramarcha-worship",
      "Brihad-manokamana yagya",
      "Grahasanti & Rogashanti Havan",
      "Mundan ritual",
    ],
  },
  {
    num: "03",
    icon: BookOpen,
    title: "Chanting & Recitation",
    sanskrit: "मंत्रोच्चारण",
    color: "from-[#5a3a1a] to-[#8b5e3c]",
    bg: "bg-orange-50",
    border: "border-orange-200",
    items: [
      "Mahamrityunjaya chanting",
      "Sunderkand Ramcharitmanas",
      "Shri Durga Saptashati & Ram Raksha Stotra",
      "Kalash-establishment ceremony",
      "Initiation into Ramavat sect",
    ],
  },
  {
    num: "04",
    icon: Car,
    title: "Vehicle & Horoscope",
    sanskrit: "ज्योतिष एवं वाहन पूजा",
    color: "from-[#1a3a5a] to-[#2563eb]",
    bg: "bg-blue-50",
    border: "border-blue-200",
    items: [
      "Vehicle worship (bicycle, auto, motorcycle)",
      "Palmistry & horoscope testing",
      "Astrological calculations",
      "Bride-groom horoscope matching",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function ServicesGrid() {
  return (
    <section id="services" className="relative py-16 sm:py-24 bg-[#faf7f2] overflow-hidden">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 w-72 h-72 bg-amber-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#8b1e0f]/5 rounded-full blur-3xl" />
        {/* Om watermark */}
        <div className="absolute top-1/2 right-8 -translate-y-1/2 text-[200px] font-bold text-amber-100/30 select-none leading-none">
          ॐ
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section header */}
        <div className="mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="block w-8 h-px bg-amber-400" />
            <span className="text-[#8b1e0f] text-xs font-bold uppercase tracking-[0.2em]">पूजा एवं सेवा</span>
            <span className="block w-8 h-px bg-amber-400" />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-bold text-[#2a1e17] leading-tight">
                Rituals &amp; <span className="text-[#8b1e0f]">Offerings</span>
              </h2>
              <p className="mt-3 text-[#5a3a1a]/70 text-sm sm:text-base max-w-xl leading-relaxed">
                Comprehensive ritualistic, devotional &amp; astrological services performed daily under Vedic traditions at Mahavir Mandir Patna.
              </p>
            </div>
            <a
              href="/rituals"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#8b1e0f] text-white text-xs font-bold hover:bg-[#a0251a] transition-colors shrink-0 shadow-lg shadow-[#8b1e0f]/20"
            >
              <Sparkles className="w-3.5 h-3.5" />
              View All Rituals
            </a>
          </div>
          <div className="mt-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-[#8b1e0f]/40 via-amber-400/40 to-transparent" />
            <span className="text-amber-500 text-sm">✦</span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <motion.div
                key={idx}
                custom={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="group relative bg-white rounded-2xl overflow-hidden border border-amber-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Gradient top bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${srv.color}`} />

                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  {/* Icon + number row */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-11 h-11 rounded-xl ${srv.bg} border ${srv.border} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5 text-[#8b1e0f]" strokeWidth={1.8} />
                    </div>
                    <span className="font-serif-title text-4xl font-black text-[#8b1e0f]/10 group-hover:text-[#8b1e0f]/20 transition-colors leading-none">
                      {srv.num}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif-title text-[17px] font-bold text-[#2a1e17] group-hover:text-[#8b1e0f] transition-colors leading-snug mb-1">
                    {srv.title}
                  </h3>
                  <p className="text-[#8b1e0f]/60 text-xs mb-4 font-medium">{srv.sanskrit}</p>

                  {/* Items list */}
                  <ul className="space-y-2 flex-1">
                    {srv.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[#2a1e17]/80 leading-snug">
                        <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Footer link */}
                  <a
                    href="/rituals"
                    className="mt-5 pt-4 border-t border-amber-100 flex items-center gap-1.5 text-xs font-bold text-[#8b1e0f] group-hover:gap-2.5 transition-all"
                  >
                    View rates &amp; booking
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
