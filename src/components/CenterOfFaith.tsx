"use client";

import { useState } from "react";

export default function CenterOfFaith() {
  const [activeTab, setActiveTab] = useState("construction");

  const tabs = [
    { id: "construction", label: "Construction of Temple" },
    { id: "expansion", label: "Expansion of Mahavir Temple" },
    { id: "history", label: "History of Mahavir Temple" },
  ];

  const tabContents: Record<string, string> = {
    construction:
      "The present temple was renovated between November 30 and March 4, 1985. The temple complex covers an area of 10,000 square feet. The temple complex provides all necessary amenities for visitors and devotees. Upon entering the temple complex, a set of stairs on a platform on the left leads to the main area of the temple, called the sanctum sanctorum, where Lord Hanuman is enshrined. Surrounding this is a corridor containing the deity of Lord Shiva.",
    expansion:
      "Expansion of Mahavir Temple complex has included multi-storey halls, extensive queue management corridors, health institutions, and publication centers serving thousands of visitors daily.",
    history:
      "Mahavir Mandir is one of the ancient temples of Lord Hanuman situated near Patna Junction. Rebuilt and managed under Shree Mahavir Sthan Nayas Samiti, it has grown into one of North India's foremost religious and charitable trusts.",
  };

  return (
    <section id="center-of-faith" className="py-10 px-4 max-w-7xl mx-auto">
      <div className="bg-white border border-gray-300 p-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Live Video Stream Frame */}
        <div className="lg:col-span-5 bg-gray-900 rounded border border-gray-300 p-4 text-white min-h-[260px] flex flex-col justify-center items-center text-center relative">
          {/* TODO: replace with real temple video stream */}
          <div className="w-16 h-16 rounded-full bg-red-600/80 flex items-center justify-center text-2xl mb-3">
            ▶
          </div>
          <p className="text-sm font-semibold text-gray-300">
            This live stream recording is not available.
          </p>
          <span className="text-xs text-gray-500 mt-1">Official Video Feed • Mahavir Mandir Patna</span>
        </div>

        {/* Right Column: Information & Tabbed Section */}
        <div className="lg:col-span-7 space-y-4">
          
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight uppercase border-b-2 border-blue-600 pb-1.5 inline-block">
              CENTER OF FAITH, ANCIENT MAHAVIR TEMPLE
            </h2>

            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mt-3 font-normal">
              Mahavir Mandir, located in Patna, Bihar, India, is one of the holiest Hindu temples dedicated to Lord Hanuman. It is one of the finest and oldest Hanuman temples in the country. Mahavir Mandir is the most famous temple in North India. Millions of devotees visit the temple every year. The Sankat Mochan idol holds a special place in the hearts of devotees. On the auspicious occasion of Ram Navami, many people visit it.{" "}
              <a href="#" className="text-blue-600 font-bold hover:underline">
                ⦿Read More
              </a>
            </p>
          </div>

          {/* Three Tabs */}
          <div className="border-b border-gray-300 flex flex-wrap gap-1 pt-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-bold border transition-colors ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-gray-100 text-blue-600 border-gray-300 hover:bg-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content Box */}
          <div className="bg-gray-50 border border-gray-200 p-4 text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
            <p>
              {tabContents[activeTab]}{" "}
              <a href="#" className="text-blue-600 font-bold hover:underline">
                ⦿Read More
              </a>
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
