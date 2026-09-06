"use client";

import { Heart, Activity, Stethoscope, Baby, Eye, Building2, ArrowRight, ShieldCheck } from "lucide-react";

interface PhilanthropySectionProps {
  onOpenDonate: () => void;
}

export default function PhilanthropySection({ onOpenDonate }: PhilanthropySectionProps) {
  const institutions = [
    {
      name: "महावीर कैंसर संस्थान (Mahavir Cancer Sansthan)",
      desc: "600-bed apex cancer treatment hospital providing state-of-the-art chemotherapy, radiotherapy, and surgical care. Subsidized & free care for needy patients.",
      icon: Activity,
      tag: "Largest Cancer Hospital in Bihar",
      stats: "50,000+ Patients Treated Yearly",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600",
    },
    {
      name: "महावीर वात्सल्य अस्पताल (Mahavir Vatsalya Hospital)",
      desc: "Dedicated super-specialty hospital for pediatrics, gynecology, and neonatology with advanced NICU facilities.",
      icon: Baby,
      tag: "Mother & Child Welfare",
      stats: "Free Surgeries for Poor Infants",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600",
    },
    {
      name: "महावीर आरोग्य एवं नेत्र संस्थान (Mahavir Netra Sansthan)",
      desc: "Specialized eye care and multi-specialty OPD providing free cataract operations, cornea transplants, and general health diagnostics.",
      icon: Eye,
      tag: "Free Eye Care Camps",
      stats: "10,000+ Free Eye Surgeries",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600",
    },
  ];

  return (
    <section id="philanthropy" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
            <span>Humanitarian Seva</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-espresso-900">
            मानव सेवा ही ईश्वर सेवा <span className="text-saffron-600">(Shree Mahavir Mandir Trust)</span>
          </h2>
          <p className="text-sm sm:text-base text-espresso-800/80 font-medium">
            Every rupee donated at Mahavir Mandir Patna directly empowers cancer care, child heart surgeries, free food distributions, and public health.
          </p>
        </div>

        {/* Institutions Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {institutions.map((inst, index) => {
            const Icon = inst.icon;
            return (
              <div
                key={index}
                className="bg-[#FAF6F0] rounded-3xl p-6 border-2 border-amber-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-44 rounded-2xl overflow-hidden mb-5">
                    <img
                      src={inst.image}
                      alt={inst.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <span className="absolute bottom-3 left-3 bg-emerald-700 text-white text-[11px] font-bold px-3 py-1 rounded-full">
                      {inst.tag}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-2 text-saffron-700">
                    <Icon className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-wide">{inst.stats}</span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-espresso-900 mb-2 leading-snug">
                    {inst.name}
                  </h3>

                  <p className="text-xs text-espresso-800/80 leading-relaxed font-normal">
                    {inst.desc}
                  </p>
                </div>

                <div className="pt-5 border-t border-amber-900/10 mt-5">
                  <button
                    onClick={onOpenDonate}
                    className="w-full py-2.5 rounded-full bg-white hover:bg-saffron-50 text-saffron-800 border border-amber-300 font-bold text-xs shadow-sm flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>Support This Hospital (दान करें)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner with 80G Tax Exemption Info */}
        <div className="bg-amber-100/80 rounded-3xl p-6 sm:p-8 border border-amber-300 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-saffron-600 text-white flex items-center justify-center shrink-0 shadow-md">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-espresso-900">
                100% Tax Exempted under Section 80G of Income Tax Act
              </h4>
              <p className="text-xs sm:text-sm text-espresso-800/80">
                All donations to Shree Mahavir Mandir Trust are eligible for tax deductions. Instant digital receipt issued.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenDonate}
            className="shrink-0 px-6 py-3 rounded-full saffron-pill-btn text-white font-bold text-sm shadow-md"
          >
            Contribute to Trust Seva →
          </button>
        </div>

      </div>
    </section>
  );
}
