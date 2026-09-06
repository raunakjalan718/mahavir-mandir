"use client";

import { Newspaper, Calendar, Clock, ChevronRight } from "lucide-react";

export default function ActivityCards() {
  const newsItems = [
    {
      title: "Why is Mahavir Temple considered one of the major temples of the country?",
      tag: "Temple Feature",
    },
    {
      title: "Free facility of mortal remains vehicle",
      tag: "Public Service",
    },
  ];

  const festivalItems = [
    {
      name: "Makar Sankranti",
      date: "15 January 2026",
      desc: "Special Mahaprasad & Darshan Arrangement",
    },
    {
      name: "Republic Day",
      date: "26 January 2026",
      desc: "Flag Hoisting & Patriotic Prayers",
    },
  ];

  const scheduleItems = [
    {
      event: "Temple Opening Time",
      time: "05:00 AM Daily",
      detail: "Gate opens for morning pilgrims",
    },
    {
      event: "Morning Aarti",
      time: "05:00 PM Daily",
      detail: "Daily devotional prayer & chimes",
      // VERIFY: exact morning vs evening aarti timings against live site before final launch
    },
  ];

  return (
    <section id="present-activity" className="py-14 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      
      {/* Direct Header Without Badge Pills */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b-2 border-[#8b1e0f]/20 pb-4">
        <div>
          <h2 className="font-serif-title text-3xl font-extrabold text-[#2a1e17]">
            Present Activity <span className="text-[#8b1e0f] font-normal">(नवीनतम गतिविधियाँ)</span>
          </h2>
        </div>

        <a href="#" className="text-xs font-bold text-[#8b1e0f] hover:underline flex items-center gap-1">
          <span>View All Press Releases</span>
          <ChevronRight className="w-4 h-4" />
        </a>
      </div>

      {/* 3 Modern Cards Grid (NO pill badges inside) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Card 1: Latest News */}
        <div className="bg-white border border-[#8b1e0f]/15 rounded-xl p-6 flex flex-col justify-between space-y-4 hover:border-[#8b1e0f]/40 transition-colors">
          <div>
            <div className="flex items-center gap-2 mb-4 border-b border-amber-900/10 pb-3">
              <Newspaper className="w-5 h-5 text-[#8b1e0f]" />
              <h3 className="font-serif-title text-lg font-bold text-[#2a1e17]">
                Latest News (नवीनतम समाचार)
              </h3>
            </div>

            <div className="space-y-3">
              {newsItems.map((item, idx) => (
                <div key={idx} className="bg-[#faf7f2] p-3 rounded-lg border border-amber-900/10 space-y-1 hover:bg-amber-50 transition-colors">
                  <span className="text-[10px] font-bold text-[#8b1e0f] uppercase tracking-wider">{item.tag}</span>
                  <h4 className="text-xs font-bold text-[#2a1e17] leading-snug hover:underline cursor-pointer">
                    {item.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 text-xs font-bold text-[#8b1e0f] flex items-center gap-1 hover:underline cursor-pointer">
            <span>Read News Archive →</span>
          </div>
        </div>

        {/* Card 2: Upcoming Festivals */}
        <div className="bg-white border border-[#8b1e0f]/15 rounded-xl p-6 flex flex-col justify-between space-y-4 hover:border-[#8b1e0f]/40 transition-colors">
          <div>
            <div className="flex items-center gap-2 mb-4 border-b border-amber-900/10 pb-3">
              <Calendar className="w-5 h-5 text-[#8b1e0f]" />
              <h3 className="font-serif-title text-lg font-bold text-[#2a1e17]">
                Upcoming Festivals (त्योहार)
              </h3>
            </div>

            <div className="space-y-3">
              {festivalItems.map((item, idx) => (
                <div key={idx} className="bg-[#faf7f2] p-3 rounded-lg border border-amber-900/10 space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-[#2a1e17]">{item.name}</h4>
                    <span className="text-[10px] font-bold text-[#8b1e0f] bg-amber-100 px-2 py-0.5 rounded">
                      {item.date}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#2a1e17]/80">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 text-xs font-bold text-[#8b1e0f] flex items-center gap-1 hover:underline cursor-pointer">
            <span>Festival Calendar →</span>
          </div>
        </div>

        {/* Card 3: Daily Schedule */}
        <div className="bg-white border border-[#8b1e0f]/15 rounded-xl p-6 flex flex-col justify-between space-y-4 hover:border-[#8b1e0f]/40 transition-colors">
          <div>
            <div className="flex items-center gap-2 mb-4 border-b border-amber-900/10 pb-3">
              <Clock className="w-5 h-5 text-[#8b1e0f]" />
              <h3 className="font-serif-title text-lg font-bold text-[#2a1e17]">
                Daily Program (कार्यक्रम)
              </h3>
            </div>

            <div className="space-y-3">
              {scheduleItems.map((item, idx) => (
                <div key={idx} className="bg-[#faf7f2] p-3 rounded-lg border border-amber-900/10 space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-[#2a1e17]">{item.event}</h4>
                    <span className="text-[10px] font-bold text-[#8b1e0f] bg-red-50 px-2 py-0.5 rounded">
                      {item.time}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#2a1e17]/80">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 text-xs font-bold text-[#8b1e0f] flex items-center gap-1 hover:underline cursor-pointer">
            <span>View Aarti Rules →</span>
          </div>
        </div>

      </div>

    </section>
  );
}
