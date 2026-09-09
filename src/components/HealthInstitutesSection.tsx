"use client";

import { motion } from "framer-motion";
import { Activity, Heart, Eye, Stethoscope, Building2, Baby, ExternalLink, ChevronRight } from "lucide-react";

const institutes = [
  {
    name: "Mahavir Cancer Institute",
    shortName: "MCI",
    desc: "Premier oncology care & research centre providing advanced cancer treatments with affordable rates for all.",
    icon: Activity,
    image: "/images/h1.jpg",
    color: "from-rose-700 to-rose-500",
    bg: "bg-rose-50",
    border: "border-rose-200",
    iconColor: "text-rose-700",
    link: "https://mahavirmandirpatna.org/mahavir-cancer-sansthan/",
    stat: "Cancer Care",
  },
  {
    name: "Mahavir Health Institute",
    shortName: "MHI",
    desc: "Multi-specialty outpatient & diagnostic services. Comprehensive healthcare for all sections of society.",
    icon: Stethoscope,
    image: "/images/h2.jpg",
    color: "from-blue-700 to-blue-500",
    bg: "bg-blue-50",
    border: "border-blue-200",
    iconColor: "text-blue-700",
    link: "https://mahavirarogyasansthan.com/",
    stat: "Multi-Specialty",
  },
  {
    name: "Mahavir Vatsalya Hospital",
    shortName: "MVH",
    desc: "Dedicated mother & child super-specialty hospital with world-class neonatal & paediatric care.",
    icon: Baby,
    image: "/images/h3.jpg",
    color: "from-pink-700 to-pink-500",
    bg: "bg-pink-50",
    border: "border-pink-200",
    iconColor: "text-pink-700",
    link: "http://www.mahavirvaatsalya.com/",
    stat: "Mother & Child",
  },
  {
    name: "Mahavir Netralaya",
    shortName: "MN",
    desc: "Specialized eye care centre with free cataract surgical programs for underprivileged patients.",
    icon: Eye,
    image: "/images/h4.jpg",
    color: "from-emerald-700 to-emerald-500",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    iconColor: "text-emerald-700",
    link: "https://mahavirarogyasansthan.com/eye/",
    stat: "Eye Care",
  },
  {
    name: "Mahavir Heart Hospital",
    shortName: "MHH",
    desc: "Advanced cardiac care, interventional cardiology, and open-heart surgery unit.",
    icon: Heart,
    image: "/images/h5.jpg",
    color: "from-red-700 to-red-500",
    bg: "bg-red-50",
    border: "border-red-200",
    iconColor: "text-red-700",
    link: "https://mahavirarogyasansthan.com/",
    stat: "Cardiac Care",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function HealthInstitutesSection() {
  return (
    <section id="health-institutes" className="relative py-16 sm:py-24 bg-white overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-50 rounded-full blur-3xl opacity-60" />
        {/* Cross / medical watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="w-48 h-8 bg-emerald-100/20 rounded-full" />
          <div className="w-8 h-48 bg-emerald-100/20 rounded-full -mt-28 ml-20" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="block w-8 h-px bg-emerald-400" />
            <span className="text-emerald-700 text-xs font-bold uppercase tracking-[0.2em]">स्वास्थ्य संस्थान</span>
            <span className="block w-8 h-px bg-emerald-400" />
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-bold text-[#2a1e17]">
            Health <span className="text-emerald-700">Institutes</span>
          </h2>
          <p className="mt-3 text-[#5a3a1a]/70 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Shree Mahavir Sthan Nayas Samiti operates major medical institutes and hospitals dedicated to affordable &amp; free healthcare for all sections of society.
          </p>
          <div className="mt-5 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-emerald-400" />
            <span className="text-emerald-500">✦</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-emerald-400" />
          </div>
        </div>

        {/* Featured first card (full width) + remaining 4 in grid */}
        <div className="space-y-5">

          {/* First institute — wide feature card */}
          <motion.div
            custom={0} variants={cardVariants} initial="hidden"
            whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="group relative bg-white rounded-3xl overflow-hidden border border-emerald-100 shadow-lg hover:shadow-2xl transition-all duration-400 hover:-translate-y-1"
          >
            <div className="flex flex-col sm:flex-row">
              {/* Image */}
              <div className="sm:w-2/5 aspect-[16/9] sm:aspect-auto relative bg-gradient-to-br from-rose-100 to-rose-50 overflow-hidden min-h-[200px]">
                <img
                  src={institutes[0].image}
                  alt={institutes[0].name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
                {/* Fallback */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Activity className="w-16 h-16 text-rose-200" strokeWidth={1} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 pointer-events-none" />
                {/* Badge */}
                <span className="absolute top-4 left-4 bg-rose-700 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                  {institutes[0].stat}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center">
                <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${institutes[0].color} mb-4`} />
                <h3 className="font-serif-title text-xl sm:text-2xl font-bold text-[#2a1e17] group-hover:text-rose-700 transition-colors mb-2">
                  {institutes[0].name}
                </h3>
                <p className="text-sm text-[#2a1e17]/75 leading-relaxed mb-5">{institutes[0].desc}</p>
                <a
                  href={institutes[0].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-rose-700 text-white text-xs font-bold hover:bg-rose-800 transition-colors shadow w-fit"
                >
                  Visit Hospital <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Remaining 4 — 2x2 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {institutes.slice(1).map((inst, idx) => {
              const Icon = inst.icon;
              return (
                <motion.div
                  key={inst.name}
                  custom={idx + 1} variants={cardVariants} initial="hidden"
                  whileInView="visible" viewport={{ once: true, margin: "-60px" }}
                  className="group bg-white rounded-2xl overflow-hidden border border-amber-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
                    <img
                      src={inst.image}
                      alt={inst.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                    />
                    {/* Fallback icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className={`w-10 h-10 ${inst.iconColor} opacity-20`} strokeWidth={1} />
                    </div>
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2a1e17]/30 to-transparent pointer-events-none" />
                    {/* Stat badge */}
                    <span className={`absolute top-2 right-2 text-[9px] font-black px-2 py-0.5 rounded-full ${inst.bg} ${inst.iconColor} border ${inst.border}`}>
                      {inst.stat}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-4 flex-1 flex flex-col">
                    <div className={`h-0.5 w-8 rounded-full bg-gradient-to-r ${inst.color} mb-3`} />
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-7 h-7 rounded-lg ${inst.bg} border ${inst.border} flex items-center justify-center shrink-0`}>
                        <Icon className={`w-3.5 h-3.5 ${inst.iconColor}`} strokeWidth={2} />
                      </div>
                      <h3 className="font-serif-title text-sm font-bold text-[#2a1e17] group-hover:text-[#8b1e0f] transition-colors leading-snug">
                        {inst.name}
                      </h3>
                    </div>
                    <p className="text-[11px] text-[#2a1e17]/70 leading-relaxed flex-1">{inst.desc}</p>
                    <a
                      href={inst.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 pt-3 border-t border-amber-100 flex items-center gap-1 text-[11px] font-bold text-[#8b1e0f] group-hover:gap-2 transition-all"
                    >
                      Learn more <ChevronRight className="w-3 h-3" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
