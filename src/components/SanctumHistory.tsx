"use client";

import { useState } from "react";
import { BookOpen, Landmark, Building2 } from "lucide-react";

export default function SanctumHistory() {
  const [activeTab, setActiveTab] = useState("construction");

  const tabData = [
    {
      id: "construction",
      title: "Construction & Layout",
      icon: Building2,
      content:
        "The present temple complex was renovated between November 30, 1984 and March 4, 1985. Covering an expansive area of 10,000 square feet, the complex provides complete amenities for visitors and devotees. Upon entering the temple complex, stairs on a platform on the left lead to the main area of the temple, called the Sanctum Sanctorum, where Lord Hanuman is enshrined. Surrounding this is a wide corridor containing the deity of Lord Shiva.",
    },
    {
      id: "expansion",
      title: "Expansion of Temple",
      icon: Landmark,
      content:
        "Over the decades, Mahavir Mandir has expanded into a major pilgrimage and civic complex. Facilities include multi-storey devotional halls, streamlined queue corridors, research centers, publication units, and world-class charitable hospitals.",
    },
    {
      id: "history",
      title: "Ancient History",
      icon: BookOpen,
      content:
        "Mahavir Mandir is one of the oldest and holiest Hindu temples dedicated to Lord Hanuman in India. Located right near Patna Junction station, the Sankat Mochan shrine holds a sacred place in the hearts of millions of devotees who visit throughout the year, especially during Ram Navami.",
    },
  ];

  const currentTab = tabData.find((t) => t.id === activeTab) || tabData[0];

  return (
    <section id="about" className="py-14 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white rounded-2xl border border-amber-900/15 shadow-sm space-y-8">
      
      {/* Direct Heading Without Badge Pill */}
      <div className="max-w-3xl border-b-2 border-[#8b1e0f]/20 pb-4">
        <h2 className="font-serif-title text-3xl sm:text-4xl font-extrabold text-[#2a1e17]">
          Ancient Mahavir Temple, Patna
        </h2>
        <p className="text-sm sm:text-base text-[#2a1e17]/80 leading-relaxed font-normal mt-2">
          Mahavir Mandir, located in Patna, Bihar, is one of the holiest Hindu temples dedicated to Lord Hanuman. Millions of devotees visit the temple every year, seeking divine blessings at the Sankat Mochan shrine.
        </p>
      </div>

      {/* Tab Controls */}
      <div className="border-b border-amber-900/10 flex flex-wrap gap-2 pt-2">
        {tabData.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 font-bold text-xs sm:text-sm rounded-t-lg transition-all ${
                activeTab === tab.id
                  ? "bg-[#8b1e0f] text-white shadow-sm"
                  : "bg-gray-100 text-[#2a1e17] hover:bg-gray-200"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.title}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Active Content Card */}
      <div className="bg-[#faf7f2] rounded-xl p-6 border border-amber-900/10 space-y-4">
        <h3 className="font-serif-title text-xl font-bold text-[#8b1e0f]">
          {currentTab.title}
        </h3>
        <p className="text-xs sm:text-sm text-[#2a1e17]/90 leading-relaxed font-normal">
          {currentTab.content}
        </p>

        <div className="pt-2 text-xs font-bold text-[#8b1e0f] flex items-center gap-1 cursor-pointer hover:underline">
          <span>Read complete historical records →</span>
        </div>
      </div>

    </section>
  );
}
