"use client";

export default function RitualsAndOfferings() {
  const categories = [
    {
      title: "Divine Offerings And Rituals",
      text: "Offering to God, Daridranarayan feast, vermillion adornment, sadhuseva, Akhand-jyoti, flag hoisting, floral adornment.",
    },
    {
      title: "Worship And All",
      text: "Rudrabhishek, Satyanarayan Katha, Hanumat-worship, Ramarcha-worship, Brihad-manokamana yagya, birth-auspicious ritual, Grahasanti Havan, Rogashanti Havan, Mundan.",
    },
    {
      title: "Chanting And Recitation",
      text: "Mahamrityunjaya chanting, other Grahamantra chanting, Santana-Gopal-mantra chanting, Sunderkand Ramcharitmanas/Valmiki-Ramayana, Shri Durga Saptashati, Shri Ram Raksha Stotra, Kalash-establishment, initiation into Ramavat sect.",
    },
    {
      title: "Vehicle Worship/Horoscope Making/Astrological Consultation",
      text: "Vehicle worship - bicycle, rickshaw, two-wheeler, motorcycle, three-wheeler and more, palmistry or horoscope testing, calculations, bride-groom horoscope matching, predictions",
    },
  ];

  return (
    <section id="rituals" className="py-10 px-4 max-w-7xl mx-auto">
      <div className="bg-white border border-gray-300 shadow-sm p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-200">
        {categories.map((cat, idx) => (
          <div key={idx} className="pt-4 md:pt-0 px-2 space-y-3 text-center">
            
            <div className="w-12 h-12 rounded-full border border-amber-300 bg-amber-50 mx-auto flex items-center justify-center text-[#8b1e0f] text-xs font-serif font-bold shadow-sm">
              0{idx + 1}
            </div>

            <h3 className="text-base font-bold text-blue-600 hover:underline cursor-pointer min-h-[48px] flex items-center justify-center">
              {cat.title}
            </h3>

            <p className="text-xs text-gray-600 leading-relaxed font-normal">
              {cat.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
