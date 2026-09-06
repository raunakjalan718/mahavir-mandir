"use client";

import { Activity, Heart, Eye, Stethoscope, Building2 } from "lucide-react";

export default function HealthInstitutesSection() {
  const institutes = [
    {
      name: "Mahavir Cancer Institute",
      desc: "Premier cancer care & research center providing oncology treatments.",
      icon: Activity,
    },
    {
      name: "Mahavir Health Institute",
      desc: "Multi-specialty outpatient & diagnostic services.",
      icon: Stethoscope,
    },
    {
      name: "Mahavir Vatsalya Hospital",
      desc: "Dedicated mother & pediatric super-specialty healthcare.",
      icon: Building2,
    },
    {
      name: "Mahavir Netralaya",
      desc: "Specialized eye care and free cataract surgical programs.",
      icon: Eye,
    },
    {
      name: "Mahavir Heart Hospital",
      desc: "Advanced cardiac care and surgery unit.",
      icon: Heart,
    },
  ];

  return (
    <section id="health-institutes" className="py-14 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      
      {/* Direct Heading Without Badge Pill */}
      <div className="border-b-2 border-[#8b1e0f]/20 pb-4 max-w-3xl">
        <h2 className="font-serif-title text-3xl sm:text-4xl font-extrabold text-[#2a1e17]">
          Health Institutes <span className="text-[#8b1e0f] font-normal">(स्वास्थ्य संस्थान)</span>
        </h2>
        <p className="text-sm text-[#2a1e17]/80 font-normal mt-2">
          Shree Mahavir Sthan Nayas Samiti operates major medical research institutes and hospitals dedicated to affordable & free healthcare for all.
        </p>
      </div>

      {/* Grid of 5 Institutes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {institutes.map((inst, idx) => {
          const Icon = inst.icon;
          return (
            <div key={idx} className="bg-white border border-[#8b1e0f]/15 rounded-xl p-5 space-y-3 hover:border-[#8b1e0f]/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center border border-emerald-200">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-serif-title text-base font-bold text-[#2a1e17]">
                {inst.name}
              </h3>
              <p className="text-xs text-[#2a1e17]/80 font-normal leading-relaxed">
                {inst.desc}
              </p>
            </div>
          );
        })}
      </div>

    </section>
  );
}
