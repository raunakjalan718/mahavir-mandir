"use client";

import { CheckCircle2, Shield, HeartHandshake, Award, Sparkles, MapPin, ExternalLink } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    {
      title: "Ancient Twin Hanuman Idols (द्वि-हनुमान जी)",
      desc: "Unique in North India — two Hanuman idols stand side by side in the main sanctum for protection and destruction of obstacles.",
    },
    {
      title: "Tirupati Confectioners Naivedyam",
      desc: "Famous Besan Ladoo made with pure desi ghee, saffron & cashews by master cooks trained at Tirumala Tirupati Devasthanams.",
    },
    {
      title: "Largest Philanthropic Mandir Trust",
      desc: "Runs Mahavir Cancer Sansthan (600+ bed hospital), Mahavir Vatsalya Children's Hospital, Kishore Dal orphan home, and free midday meals.",
    },
    {
      title: "Prime Location at Patna Junction",
      desc: "Situated right outside Patna Junction station, serving over 20,000+ devotees daily and 5,000,000+ during Ram Navami.",
    },
  ];

  return (
    <section id="about" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      
      {/* Decorative Warm Soft Background Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Layout Inspired by Screenshot 3: Split Top Headline and Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-amber-900/10 pb-10">
          
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-saffron-100 text-saffron-800 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-saffron-600" />
              <span>Sacred Heritage</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-espresso-900 leading-tight">
              Where faith inspires <br />
              <span className="gold-gradient-text">compassion & healing.</span>
            </h2>
          </div>

          <div className="lg:col-span-6 space-y-4 text-espresso-800/80">
            <p className="text-base sm:text-lg font-normal leading-relaxed">
              Mahavir Mandir, Patna is one of the most revered Hanuman temples in India. Situated right opposite Patna Junction, the temple stands as a symbol of divine protection and legendary humanitarian service under the leadership of Acharya Kishore Kunal and the Shree Mahavir Mandir Trust.
            </p>
            <div className="flex items-center gap-3 text-xs font-bold text-saffron-800">
              <span className="flex items-center gap-1 bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
                <MapPin className="w-3.5 h-3.5 text-saffron-600" />
                Patna Junction Railway Station Complex, Bihar 800001
              </span>
            </div>
          </div>

        </div>

        {/* Triple Curved Image Grid Inspired by Screenshot 3! */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Scalloped 3-bubble shape */}
          <div className="bg-[#FAF6F0] rounded-[2.5rem] p-6 border-2 border-amber-200/80 shadow-md flex flex-col justify-between space-y-4 group">
            <div className="relative h-64 rounded-3xl overflow-hidden shadow-inner">
              <img
                src="https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&q=80&w=600"
                alt="Mahavir Mandir Patna Twin Deities"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <span className="absolute bottom-3 left-3 bg-saffron-600/90 text-white text-xs font-bold px-3 py-1 rounded-full">
                Twin Hanuman Shrine
              </span>
            </div>

            <div>
              <h3 className="font-serif text-xl font-bold text-espresso-900">
                द्वि-हनुमान जी (Twin Idols)
              </h3>
              <p className="text-xs text-espresso-800/80 mt-1">
                The only temple in India housing twin statues of Bajrangbali under one garbhagriha, conferring courage and freedom from fear.
              </p>
            </div>
          </div>

          {/* Card 2: Arch Top Frame */}
          <div className="bg-[#FAF6F0] rounded-[2.5rem] p-6 border-2 border-amber-200/80 shadow-md flex flex-col justify-between space-y-4 group">
            <div className="relative h-64 arch-card-top rounded-b-3xl overflow-hidden shadow-inner">
              <img
                src="https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&q=80&w=600"
                alt="Naivedyam Besan Ladoo Prasad"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <span className="absolute bottom-3 left-3 bg-gold-600/90 text-white text-xs font-bold px-3 py-1 rounded-full">
                Pure Ghee Prasad
              </span>
            </div>

            <div>
              <h3 className="font-serif text-xl font-bold text-espresso-900">
                Naivedyam Ladoo (नैवेद्यम)
              </h3>
              <p className="text-xs text-espresso-800/80 mt-1">
                Prepared under strict hygienic standards using pure cow ghee, cashew nuts, and cardamom. Loved by millions of devotees.
              </p>
            </div>
          </div>

          {/* Card 3: Inverted Scallop Shape */}
          <div className="bg-[#FAF6F0] rounded-[2.5rem] p-6 border-2 border-amber-200/80 shadow-md flex flex-col justify-between space-y-4 group">
            <div className="relative h-64 rounded-3xl overflow-hidden shadow-inner">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600"
                alt="Mahavir Cancer Sansthan Hospital Patna"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <span className="absolute bottom-3 left-3 bg-emerald-700/90 text-white text-xs font-bold px-3 py-1 rounded-full">
                Cancer Sansthan & Trust
              </span>
            </div>

            <div>
              <h3 className="font-serif text-xl font-bold text-espresso-900">
                Charitable Hospitals
              </h3>
              <p className="text-xs text-espresso-800/80 mt-1">
                Temple proceeds directly fund Mahavir Cancer Sansthan, Mahavir Vatsalya Hospital, and free surgeries for poor children.
              </p>
            </div>
          </div>

        </div>

        {/* Feature Grid List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-amber-50/60 rounded-3xl p-6 sm:p-8 border border-amber-200/80">
          {highlights.map((item, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-saffron-600 text-white flex items-center justify-center shrink-0 mt-1 shadow-sm">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-base font-bold text-espresso-900">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-espresso-800/80 mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
