"use client";

export default function ServicesGrid() {
  const services = [
    {
      num: "01",
      title: "Divine Offerings & Rituals",
      items: [
        "Daridranarayan feast",
        "Vermillion adornment",
        "Akhand-jyoti",
        "Flag hoisting",
        "Floral adornment",
      ],
    },
    {
      num: "02",
      title: "Worship & Havans",
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
      title: "Chanting & Recitation",
      items: [
        "Mahamrityunjaya chanting",
        "Sunderkand Ramcharitmanas",
        "Shri Durga Saptashati & Ram Raksha Stotra",
        "Kalash-establishment",
        "Initiation into Ramavat sect",
      ],
    },
    {
      num: "04",
      title: "Vehicle & Horoscope",
      items: [
        "Vehicle worship (bicycle, rickshaw, two-wheeler, motorcycle, three-wheeler)",
        "Palmistry & horoscope testing",
        "Astrological calculations",
        "Bride-groom horoscope matching & predictions",
      ],
    },
  ];

  return (
    <section id="services" className="py-14 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      
      {/* Direct Heading Without Badge Pills */}
      <div className="border-b-2 border-[#8b1e0f]/20 pb-4 max-w-3xl">
        <h2 className="font-serif-title text-3xl sm:text-4xl font-extrabold text-[#2a1e17]">
          Rituals & Offerings <span className="text-[#8b1e0f] font-normal">(पूजा एवं सेवा)</span>
        </h2>
        <p className="text-sm text-[#2a1e17]/80 font-normal mt-2">
          Comprehensive ritualistic, devotional, and astrological services performed daily at Mahavir Mandir Patna under Vedic traditions.
        </p>
      </div>

      {/* 4-Card Editorial Grid relying on Strong Typography & Numbers (No Icons) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((srv, idx) => (
          <div
            key={idx}
            className="bg-white border border-[#8b1e0f]/15 rounded-xl p-6 flex flex-col justify-between hover:border-[#8b1e0f]/40 transition-colors space-y-4 group"
          >
            <div>
              {/* Architectural Numbering */}
              <div className="flex items-center justify-between mb-4 border-b border-amber-900/10 pb-3">
                <span className="font-serif-title text-2xl font-bold text-[#8b1e0f]">
                  {srv.num}
                </span>
                <span className="w-6 h-0.5 bg-[#d4af37]"></span>
              </div>

              <h3 className="font-serif-title text-lg font-bold text-[#2a1e17] group-hover:text-[#8b1e0f] transition-colors mb-3">
                {srv.title}
              </h3>

              <ul className="space-y-2 text-xs text-[#2a1e17]/85 font-normal leading-relaxed">
                {srv.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#8b1e0f] font-bold">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a href="/rituals" className="pt-3 border-t border-amber-900/10 text-xs font-bold text-[#8b1e0f] flex items-center gap-1 group-hover:underline">
              <span>View Full Ritual List & Rates</span>
              <span>→</span>
            </a>
          </div>
        ))}
      </div>

    </section>
  );
}
