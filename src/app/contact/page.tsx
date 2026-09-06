"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SideEdgeTabs from "@/components/SideEdgeTabs";

// Modals
import DonationModal from "@/components/DonationModal";
import LiveDarshanModal from "@/components/LiveDarshanModal";
import DisclaimerModal from "@/components/DisclaimerModal";

import {
  MapPin,
  Clock,
  Globe,
  Mail,
  Phone,
  Train,
  Plane,
  Bus,
  Car,
  ExternalLink,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
} from "lucide-react";

export default function ContactPage() {
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [isLiveOpen, setIsLiveOpen] = useState(false);
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#faf7f2] text-[#2a1e17] relative">
      {/* Sideways Edge Tabs */}
      <SideEdgeTabs
        onOpenLive={() => setIsLiveOpen(true)}
        onOpenDonate={() => setIsDonateOpen(true)}
      />

      {/* Header */}
      <Header
        onOpenDonate={() => setIsDonateOpen(true)}
        onOpenLive={() => setIsLiveOpen(true)}
        onOpenDisclaimer={() => setIsDisclaimerOpen(true)}
      />

      {/* Page Hero Header */}
      <section className="bg-gradient-to-br from-[#5c1208] via-[#75190b] to-[#3d0903] text-white py-12 sm:py-16 px-4 border-b-4 border-[#d4af37]">
        <div className="max-w-5xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold text-amber-300 uppercase tracking-widest block">
            Shree Mahavir Sthan Nayas Samiti, Patna
          </span>
          <h1 className="font-serif-title text-3xl sm:text-5xl font-extrabold text-white">
            Connect With Us
          </h1>
          <p className="text-sm sm:text-base text-amber-100/90 max-w-2xl mx-auto font-normal">
            Official Contact Information, Office Timings, Transportation Routes, and Parking Guidance for Mahavir Mandir Patna.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12">
        {/* Top 3 Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Office Address */}
          <div className="bg-white rounded-2xl p-6 border border-amber-900/15 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-[#8b1e0f] flex items-center justify-center border border-amber-300">
              <MapPin className="w-5 h-5 text-[#8b1e0f]" />
            </div>
            <div>
              <h3 className="font-serif-title font-bold text-lg text-[#2a1e17]">
                Office Address
              </h3>
              <p className="text-xs text-[#8b1e0f] font-semibold">
                Shri Mahavir Sthan Nyas Samiti
              </p>
            </div>
            <p className="text-xs text-[#2a1e17]/80 leading-relaxed font-medium">
              Near Patna Junction Railway Station, Patna<br />
              Bihar - 800001
            </p>
          </div>

          {/* Card 2: Operating Hours */}
          <div className="bg-white rounded-2xl p-6 border border-amber-900/15 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-[#8b1e0f] flex items-center justify-center border border-amber-300">
              <Clock className="w-5 h-5 text-[#8b1e0f]" />
            </div>
            <div>
              <h3 className="font-serif-title font-bold text-lg text-[#2a1e17]">
                Operating Hours
              </h3>
              <p className="text-xs text-[#8b1e0f] font-semibold">
                Temple & Office Schedule
              </p>
            </div>
            <div className="text-xs text-[#2a1e17]/80 leading-relaxed space-y-1 font-medium">
              <p>
                <strong className="text-[#2a1e17]">Office Timing:</strong> 10 AM to 8 PM (All Days)
              </p>
              <p>
                <strong className="text-[#2a1e17]">Temple Timings:</strong> 5 AM to 10 PM
              </p>
              <p className="text-[11px] text-[#8b1e0f] font-semibold">
                (Monday & Tuesday: 5 AM to 11:30 PM)
              </p>
            </div>
          </div>

          {/* Card 3: Direct Contact Details */}
          <div className="bg-white rounded-2xl p-6 border border-amber-900/15 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-[#8b1e0f] flex items-center justify-center border border-amber-300">
              <Phone className="w-5 h-5 text-[#8b1e0f]" />
            </div>
            <div>
              <h3 className="font-serif-title font-bold text-lg text-[#2a1e17]">
                Direct Contact
              </h3>
              <p className="text-xs text-[#8b1e0f] font-semibold">
                Helpline & Mail
              </p>
            </div>
            <ul className="text-xs text-[#2a1e17]/90 space-y-2 font-medium">
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Official Website: </span>
                <a
                  href="https://mahavirmandirpatna.org"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#8b1e0f] font-bold hover:underline"
                >
                  mahavirmandirpatna.org
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Email: </span>
                <a
                  href="mailto:mahavirmandir@gmail.com"
                  className="text-[#8b1e0f] font-bold hover:underline"
                >
                  mahavirmandir@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Helpline: </span>
                <a
                  href="tel:06122223789"
                  className="text-[#8b1e0f] font-bold hover:underline font-mono"
                >
                  0612-2223789
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Section: How to Reach the Temple */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-900/15 shadow-sm space-y-6">
          <div className="border-b border-amber-900/10 pb-4">
            <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#2a1e17]">
              How to Reach the Temple
            </h2>
            <p className="text-xs sm:text-sm text-[#2a1e17]/80 mt-1 font-medium">
              Mahavir Mandir is located directly near Patna Junction Railway Station in the heart of Patna city, making it easily accessible via all modes of transport.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* By Train */}
            <div className="p-5 rounded-2xl bg-[#faf7f2] border border-amber-900/10 space-y-2">
              <div className="flex items-center gap-2.5">
                <Train className="w-5 h-5 text-[#8b1e0f]" />
                <h3 className="font-serif-title font-bold text-base text-[#2a1e17]">
                  By Train
                </h3>
              </div>
              <p className="text-xs text-[#2a1e17]/85 leading-relaxed font-medium">
                Patna Junction (PNBE), situated right outside the main North exit — approximately 200m or under a 2-minute walk directly to the temple complex.
              </p>
            </div>

            {/* By Air */}
            <div className="p-5 rounded-2xl bg-[#faf7f2] border border-amber-900/10 space-y-2">
              <div className="flex items-center gap-2.5">
                <Plane className="w-5 h-5 text-[#8b1e0f]" />
                <h3 className="font-serif-title font-bold text-base text-[#2a1e17]">
                  By Air
                </h3>
              </div>
              <p className="text-xs text-[#2a1e17]/85 leading-relaxed font-medium">
                Jay Prakash Narayan International Airport (PAT) is approximately 6km away, reachable in 15–20 minutes by taxi, auto-rickshaw, or rideshare app.
              </p>
            </div>

            {/* By Bus */}
            <div className="p-5 rounded-2xl bg-[#faf7f2] border border-amber-900/10 space-y-2">
              <div className="flex items-center gap-2.5">
                <Bus className="w-5 h-5 text-[#8b1e0f]" />
                <h3 className="font-serif-title font-bold text-base text-[#2a1e17]">
                  By Bus
                </h3>
              </div>
              <p className="text-xs text-[#2a1e17]/85 leading-relaxed font-medium">
                Gandhi Maidan Bus Stand / Mithapur Terminal, located ~2-3km away, taking 10-15 minutes by city bus, auto, or e-rickshaw.
              </p>
            </div>

            {/* By Road */}
            <div className="p-5 rounded-2xl bg-[#faf7f2] border border-amber-900/10 space-y-2">
              <div className="flex items-center gap-2.5">
                <Car className="w-5 h-5 text-[#8b1e0f]" />
                <h3 className="font-serif-title font-bold text-base text-[#2a1e17]">
                  By Road
                </h3>
              </div>
              <p className="text-xs text-[#2a1e17]/85 leading-relaxed font-medium">
                Accessible via Fraser Road Area at the Patna Junction intersection. Rideshares or nearby designated parking structures are recommended due to heavy junction traffic.
              </p>
            </div>
          </div>

          {/* Google Maps Button */}
          <div className="pt-2 text-center">
            <a
              href="https://www.google.com/maps/place/Mahavir+Mandir+Patna/@25.604262,85.136586,12z/data=!4m6!3m5!1s0x39ed585fff5af727:0xe553ec95b9179b2f!8m2!3d25.6042623!4d85.1365863!16s%2Fm%2F04lft23"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#8b1e0f] hover:bg-[#73180c] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-colors"
            >
              <span>View Temple Location on Google Maps</span>
              <ExternalLink className="w-4 h-4 text-amber-300" />
            </a>
          </div>
        </div>

        {/* Section: Parking Facilities */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-900/15 shadow-sm space-y-4">
          <div className="flex items-center gap-3 border-b border-amber-900/10 pb-3">
            <Car className="w-6 h-6 text-[#8b1e0f]" />
            <h2 className="font-serif-title text-2xl font-bold text-[#2a1e17]">
              Parking Facilities
            </h2>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-semibold text-[#2a1e17]">
            <li className="p-4 bg-[#faf7f2] rounded-xl border border-amber-900/10 flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#8b1e0f] shrink-0 mt-0.5" />
              <span>Patna Junction Station Parking (directly across from the temple)</span>
            </li>
            <li className="p-4 bg-[#faf7f2] rounded-xl border border-amber-900/10 flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#8b1e0f] shrink-0 mt-0.5" />
              <span>PMC Multilevel Parking (near Budh Smriti Park/Fraser Road)</span>
            </li>
            <li className="p-4 bg-[#faf7f2] rounded-xl border border-amber-900/10 flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#8b1e0f] shrink-0 mt-0.5" />
              <span>Maharaja Kameshwar Complex Parking (opposite Budh Smriti Park)</span>
            </li>
          </ul>
        </div>

        {/* Section: Follow Our Official Handles */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-900/15 shadow-sm space-y-6">
          <div className="border-b border-amber-900/10 pb-3">
            <h2 className="font-serif-title text-2xl font-bold text-[#2a1e17]">
              Follow Our Official Handles
            </h2>
            <p className="text-xs text-[#2a1e17]/80 mt-1 font-medium">
              Stay connected with verified daily darshan feeds, festival schedules, and official releases.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-bold">
            <a
              href="https://facebook.com/PatnaMahavirMandir"
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-xl bg-[#faf7f2] hover:bg-amber-100/60 border border-amber-900/15 text-[#2a1e17] flex items-center gap-3 transition-colors group"
            >
              <Facebook className="w-5 h-5 text-[#8b1e0f] group-hover:scale-110 transition-transform shrink-0" />
              <div>
                <span className="block text-[11px] text-[#8b1e0f]">Facebook</span>
                <span className="font-mono text-[11px] text-[#2a1e17]">facebook.com/PatnaMahavirMandir</span>
              </div>
            </a>

            <a
              href="https://instagram.com/mahavirmandirpatna"
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-xl bg-[#faf7f2] hover:bg-amber-100/60 border border-amber-900/15 text-[#2a1e17] flex items-center gap-3 transition-colors group"
            >
              <Instagram className="w-5 h-5 text-[#8b1e0f] group-hover:scale-110 transition-transform shrink-0" />
              <div>
                <span className="block text-[11px] text-[#8b1e0f]">Instagram</span>
                <span className="font-mono text-[11px] text-[#2a1e17]">instagram.com/mahavirmandirpatna</span>
              </div>
            </a>

            <a
              href="https://youtube.com/@mahavirmandirpatna"
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-xl bg-[#faf7f2] hover:bg-amber-900/15 text-[#2a1e17] flex items-center gap-3 transition-colors group"
            >
              <Youtube className="w-5 h-5 text-[#8b1e0f] group-hover:scale-110 transition-transform shrink-0" />
              <div>
                <span className="block text-[11px] text-[#8b1e0f]">YouTube</span>
                <span className="font-mono text-[11px] text-[#2a1e17]">youtube.com/@mahavirmandirpatna</span>
              </div>
            </a>

            <a
              href="https://x.com/mahavirsthan"
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-xl bg-[#faf7f2] hover:bg-amber-100/60 border border-amber-900/15 text-[#2a1e17] flex items-center gap-3 transition-colors group"
            >
              <Twitter className="w-5 h-5 text-[#8b1e0f] group-hover:scale-110 transition-transform shrink-0" />
              <div>
                <span className="block text-[11px] text-[#8b1e0f]">Twitter / X</span>
                <span className="font-mono text-[11px] text-[#2a1e17]">x.com/mahavirsthan</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Clean 3-Column Footer */}
      <Footer />

      {/* Modals */}
      <DonationModal
        isOpen={isDonateOpen}
        onClose={() => setIsDonateOpen(false)}
      />

      <LiveDarshanModal
        isOpen={isLiveOpen}
        onClose={() => setIsLiveOpen(false)}
      />

      <DisclaimerModal
        isOpen={isDisclaimerOpen}
        onClose={() => setIsDisclaimerOpen(false)}
      />
    </main>
  );
}
