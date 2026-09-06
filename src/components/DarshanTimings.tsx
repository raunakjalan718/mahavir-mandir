"use client";

import { useState, useEffect } from "react";
import { Clock, Sun, Moon, Flame, AlertCircle, CheckCircle2, Sparkles } from "lucide-react";

export default function DarshanTimings() {
  const [currentTimeStr, setCurrentTimeStr] = useState("");
  const [isOpenNow, setIsOpenNow] = useState(true);
  const [nextAarti, setNextAarti] = useState("Sandhya Aarti at 7:30 PM");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = { 
        timeZone: "Asia/Kolkata", 
        hour: "2-digit", 
        minute: "2-digit", 
        second: "2-digit",
        hour12: true 
      };
      setCurrentTimeStr(now.toLocaleTimeString("en-IN", options));

      // Calculate IST hour
      const istHours = (now.getUTCHours() + 5 + Math.floor((now.getUTCMinutes() + 30) / 60)) % 24;

      // Mandir Hours: 5 to 13 (5 AM - 1 PM) and 15 to 22 (3 PM - 10 PM)
      if ((istHours >= 5 && istHours < 13) || (istHours >= 15 && istHours < 22)) {
        setIsOpenNow(true);
      } else {
        setIsOpenNow(false);
      }

      if (istHours < 5) setNextAarti("Mangla Aarti at 5:30 AM");
      else if (istHours < 8) setNextAarti("Shringar Aarti at 8:00 AM");
      else if (istHours < 19 || (istHours === 19 && now.getUTCMinutes() < 30)) setNextAarti("Sandhya Aarti at 7:30 PM");
      else if (istHours < 22) setNextAarti("Shayan Aarti at 10:00 PM");
      else setNextAarti("Mangla Aarti (Tomorrow 5:30 AM)");
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const aartiSchedule = [
    { title: "मंगला आरती (Mangla Aarti)", time: "5:30 AM", desc: "First morning prayer at temple opening", icon: Sun },
    { title: "श्रृंगार आरती (Shringar Aarti)", time: "8:00 AM", desc: "Sacred adornment of Twin Hanuman Idols", icon: Sparkles },
    { title: "संध्या आरती (Sandhya Aarti)", time: "7:30 PM", desc: "Grand evening lamp ceremony with Sankh & Dhol", icon: Flame },
    { title: "शयन आरती (Shayan Aarti)", time: "10:00 PM", desc: "Night prayer before temple gate closure", icon: Moon },
  ];

  return (
    <section id="darshan-timings" className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-[#faf6f0] relative">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-saffron-100 text-saffron-800 text-xs font-bold uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5 text-saffron-600" />
            <span>Schedule & Timings</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-espresso-900">
            दर्शन एवं आरती समय <span className="text-saffron-600">(Darshan Timings)</span>
          </h2>
          <p className="text-sm sm:text-base text-espresso-800/80 font-medium">
            Mahavir Mandir welcomes thousands of devotees every day. Plan your visit according to daily darshan shifts and divine Aarti timings.
          </p>
        </div>

        {/* PROMINENT DARSHAN TIMINGS STRIP (As explicitly requested by USER: 5 AM - 1 PM, 3 PM - 10 PM) */}
        <div className="bg-gradient-to-r from-saffron-600 via-saffron-500 to-gold-600 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
          
          {/* Subtle Decorative Background Circles */}
          <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-white/10 rounded-full blur-xl pointer-events-none"></div>
          <div className="absolute -left-16 -top-16 w-64 h-64 bg-amber-400/20 rounded-full blur-xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Live Clock & Gate Status Box */}
            <div className="lg:col-span-4 bg-black/25 backdrop-blur-md p-5 rounded-2xl border border-white/20 text-center lg:text-left space-y-2">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                {isOpenNow ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500 text-white text-xs font-bold shadow">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    TEMPLE OPEN NOW
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600 text-white text-xs font-bold shadow">
                    <AlertCircle className="w-3.5 h-3.5" />
                    TEMPLE CLOSED NOW
                  </span>
                )}
              </div>
              <div className="font-mono text-2xl sm:text-3xl font-extrabold tracking-wider text-amber-200">
                {currentTimeStr || "10:30:00 AM IST"}
              </div>
              <p className="text-xs text-white/90 font-medium">
                Next Sacred Ritual: <span className="text-gold-300 font-bold">{nextAarti}</span>
              </p>
            </div>

            {/* Two Shift Timings (5 AM - 1 PM & 3 PM - 10 PM) */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Morning Shift Card */}
              <div className="bg-white/15 backdrop-blur-md p-5 rounded-2xl border border-white/20 flex items-center gap-4 hover:bg-white/20 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-amber-400/20 border border-amber-300/40 flex items-center justify-center text-amber-200 shrink-0">
                  <Sun className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold text-amber-200 uppercase tracking-wide">Morning Shift (सुबह)</span>
                  <div className="font-serif text-xl sm:text-2xl font-extrabold text-white">
                    5:00 AM – 1:00 PM
                  </div>
                  <p className="text-xs text-white/80 font-medium">
                    Includes Mangla & Shringar Aarti
                  </p>
                </div>
              </div>

              {/* Evening Shift Card */}
              <div className="bg-white/15 backdrop-blur-md p-5 rounded-2xl border border-white/20 flex items-center gap-4 hover:bg-white/20 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-saffron-900/40 border border-amber-300/40 flex items-center justify-center text-amber-200 shrink-0">
                  <Moon className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold text-amber-200 uppercase tracking-wide">Evening Shift (शाम)</span>
                  <div className="font-serif text-xl sm:text-2xl font-extrabold text-white">
                    3:00 PM – 10:00 PM
                  </div>
                  <p className="text-xs text-white/80 font-medium">
                    Includes Sandhya & Shayan Aarti
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Aarti Schedule Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          {aartiSchedule.map((aarti, idx) => {
            const Icon = aarti.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-amber-200/80 shadow-sm hover:shadow-md hover:border-saffron-300 transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-saffron-50 text-saffron-600 flex items-center justify-center group-hover:bg-saffron-600 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-extrabold bg-amber-100 text-saffron-800 px-2.5 py-1 rounded-full border border-amber-200">
                    {aarti.time}
                  </span>
                </div>
                <h3 className="font-serif text-base font-bold text-espresso-900 group-hover:text-saffron-700 transition-colors">
                  {aarti.title}
                </h3>
                <p className="text-xs text-amber-900/70 mt-1 font-medium">
                  {aarti.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Special Days Alert Banner */}
        <div className="bg-amber-100/70 border border-amber-300/80 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-espresso-900 text-xs sm:text-sm">
            <Clock className="w-5 h-5 text-saffron-700 shrink-0" />
            <div>
              <strong className="font-bold text-saffron-800">Tuesday & Saturday Special Rush Hours:</strong>
              <span className="text-espresso-800/80 ml-1">
                Temple opens continuously without afternoon gap on Ram Navami and Hanuman Jayanti! Special queue arrangements for senior citizens & women.
              </span>
            </div>
          </div>
          <a
            href="#quick-services"
            className="shrink-0 text-xs font-bold text-saffron-700 hover:text-saffron-900 bg-white px-4 py-2 rounded-full border border-amber-300 shadow-sm hover:shadow transition-all"
          >
            View Puja Booking Guidelines →
          </a>
        </div>

      </div>
    </section>
  );
}
