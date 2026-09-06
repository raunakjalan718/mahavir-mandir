"use client";

import { Heart, Tv, Bell, ArrowRight, ShieldCheck, Video, Sparkles } from "lucide-react";

interface QuickLinksProps {
  onOpenDonate: () => void;
  onOpenLive: () => void;
  onOpenNotices: () => void;
}

export default function QuickLinks({ onOpenDonate, onOpenLive, onOpenNotices }: QuickLinksProps) {
  const cards = [
    {
      id: "donate",
      title: "Online Donation (दान सेवा)",
      subtitle: "Support Mahavir Cancer Sansthan & Free Meals",
      desc: "Contribute to Mahavir Cancer Sansthan hospital care, free Prasad distributions, Kishore Dal orphanage, and temple maintenance. Tax benefit under 80G.",
      image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb0?auto=format&fit=crop&q=80&w=600",
      badge: "80G Tax Exempt",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
      buttonText: "Donate Now (दान करें)",
      icon: Heart,
      onClick: onOpenDonate,
      highlight: "Over ₹5 Crore provided annually for free cancer treatment of underprivileged children.",
    },
    {
      id: "live",
      title: "Live Darshan (24x7 दर्शन)",
      subtitle: "HD Video Stream of Garbhagriha & Ram Darbar",
      desc: "Experience divine darshan of Sankat Mochan Twin Hanuman Idols from anywhere in the world. Watch live Aarti, Bhajan, and morning rituals in HD quality.",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=600",
      badge: "LIVE HD 24x7",
      badgeColor: "bg-red-100 text-red-700 border-red-300",
      buttonText: "Watch Live Darshan",
      icon: Tv,
      onClick: onOpenLive,
      highlight: "Multi-angle cameras: Twin Hanuman Sanctum, Ram Darbar, and Temple Chhadawa.",
    },
    {
      id: "notices",
      title: "Notices & News (सूचनाएं)",
      subtitle: "Official Updates & Ram Navami Schedule",
      desc: "Stay updated with Ram Navami Mahotsav guidelines, special darshan pass notices, trustee announcements, and Naivedyam Prasad counter timings.",
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=600",
      badge: "Latest Announcements",
      badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
      buttonText: "View All Notices",
      icon: Bell,
      onClick: onOpenNotices,
      highlight: "Ram Navami 2026 Special Queue Arrangements & Free Helplines declared.",
    },
  ];

  return (
    <section id="quick-services" className="py-14 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF6F0] relative">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-saffron-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-saffron-600" />
            <span>Devotee Services</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-espresso-900">
            त्वरित सेवा एवं दर्शन <span className="gold-gradient-text">(Quick Services)</span>
          </h2>
          <p className="text-sm sm:text-base text-espresso-800/80 font-medium">
            Access core services of Mahavir Mandir Patna directly online — from sacred live darshan and charitable donations to latest temple notices.
          </p>
        </div>

        {/* THREE QUICK LINK CARDS GRID (Requested by USER) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="bg-white rounded-3xl p-6 border-2 border-amber-200/80 shadow-lg hover:shadow-2xl hover:border-saffron-400 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Background soft gold glow on hover */}
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-saffron-500/10 rounded-full blur-2xl group-hover:bg-saffron-500/20 transition-all"></div>

                <div>
                  {/* Card Image Frame (Arch Top Style inspired by Screenshot 3!) */}
                  <div className="relative h-48 sm:h-52 rounded-2xl overflow-hidden mb-5 bg-amber-100">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                    {/* Badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`text-[11px] font-bold px-3 py-1 rounded-full border shadow-sm ${card.badgeColor}`}>
                        {card.badge}
                      </span>
                    </div>

                    {/* Icon Floating Badge */}
                    <div className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-saffron-600 text-white flex items-center justify-center shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1.5 mb-3">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-espresso-900 group-hover:text-saffron-600 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs font-bold text-saffron-700 uppercase tracking-wide">
                      {card.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-espresso-800/80 font-normal leading-relaxed mb-4">
                    {card.desc}
                  </p>

                  {/* Highlight box */}
                  <div className="bg-amber-50 rounded-xl p-3 border border-amber-200/60 mb-5 text-xs text-amber-900/90 font-medium">
                    <span className="font-semibold">{card.highlight}</span>
                  </div>
                </div>

                {/* Bottom Action Pill Button */}
                <button
                  onClick={card.onClick}
                  className="w-full py-3 rounded-full saffron-pill-btn text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 group-hover:shadow-lg transition-all"
                >
                  <span>{card.buttonText}</span>
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
