"use client";

import { Calendar, ChevronRight } from "lucide-react";

export default function PresentActivity() {
  const activities = [
    {
      title: "नवीनतम समाचार",
      icon: Calendar,
      items: [
        { text: "Why is Mahavir Temple considered one of the major temples of the country?", link: "#" },
        { text: "Free facility of mortal remains vehicle", link: "#" },
      ],
    },
    {
      title: "आगामी त्योहार",
      icon: Calendar,
      items: [
        { text: "Makar Sankranti - Date 15-01-2026", link: "#" },
        { text: "Republic Day - Date 26-01-2026", link: "#" },
      ],
    },
    {
      title: "दैनिक कार्यक्रम",
      icon: Calendar,
      items: [
        { text: "Temple opening time - 05:00 AM every day", link: "#" },
        { text: "Morning Aarti - Every day at 05:00 PM", link: "#" },
      ],
    },
  ];

  return (
    <section id="present-activity" className="py-10 px-4 max-w-7xl mx-auto">
      <div className="bg-white border border-gray-300 p-6 space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b-2 border-blue-600 pb-2">
          <h2 className="text-xl font-extrabold text-gray-900 tracking-tight uppercase">
            PRESENT ACTIVITY
          </h2>
          <a href="#" className="text-xs font-bold text-blue-600 hover:underline">
            SEE MORE
          </a>
        </div>

        {/* 3 Notice Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activities.map((act, idx) => (
            <div key={idx} className="border border-gray-300 shadow-sm bg-white overflow-hidden">
              
              {/* Blue Header Bar */}
              <div className="notice-header-blue flex items-center gap-2">
                <Calendar className="w-4 h-4 text-white" />
                <span>{act.title}</span>
              </div>

              {/* Notice List Items */}
              <div className="p-4 space-y-3 min-h-[140px]">
                {act.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-1.5 text-xs text-blue-700 hover:underline cursor-pointer border-b border-gray-100 pb-2">
                    <span className="text-gray-500 shrink-0">⦿</span>
                    <a href={item.link} className="leading-snug">
                      {item.text}
                    </a>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
