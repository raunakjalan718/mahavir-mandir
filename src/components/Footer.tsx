"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#2a1e17] text-amber-100/90 pt-14 pb-10 border-t-4 border-[#8b1e0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Clean 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Column 1: Temple & Trust Info */}
          <div className="space-y-4">
            <div>
              <h3 className="font-serif-title text-xl font-extrabold text-amber-300">
                Mahavir Mandir, Patna
              </h3>
              <p className="text-xs text-amber-100/70 font-semibold tracking-wide">
                Shree Mahavir Sthan Nayas Samiti
              </p>
            </div>

            <p className="text-xs text-amber-100/80 leading-relaxed font-normal">
              One of the oldest and holiest Hanuman temples in North India. Dedicated to spiritual service, medical relief, and public welfare.
            </p>

            <ul className="space-y-2 text-xs text-amber-100/80 pt-1">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Near Railway Station, Patna, Bihar, India</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Registered Trust under Bihar Religious Trust Board</span>
              </li>
            </ul>

            <div className="pt-2 flex gap-4 text-xs font-bold text-amber-300">
              <a href="/#about" className="hover:underline">About Us</a>
              <span>•</span>
              <a href="/contact" className="hover:underline">Contact Us</a>
              <span>•</span>
              <a href="#" className="hover:underline">Secretary's Message</a>
            </div>
          </div>

          {/* Column 2: Services & Publications */}
          <div className="space-y-4">
            <h3 className="font-serif-title text-lg font-bold text-white border-b border-amber-900/40 pb-2">
              Services & Publications
            </h3>
            
            <ul className="space-y-2.5 text-xs text-amber-100/80 font-normal">
              <li><a href="#services" className="hover:text-amber-300 hover:underline">Vedic Rituals & Divine Offerings</a></li>
              <li><a href="#services" className="hover:text-amber-300 hover:underline">Worship, Rudrabhishek & Havans</a></li>
              <li><a href="#services" className="hover:text-amber-300 hover:underline">Vehicle Worship & Horoscope Consultation</a></li>
              <li><a href="#" className="hover:text-amber-300 hover:underline">Dharmayana Monthly Magazine</a></li>
              <li><a href="#" className="hover:text-amber-300 hover:underline">Mahavir Mandir Publications</a></li>
              <li><a href="#" className="hover:text-amber-300 hover:underline">Current Recruitment & Tenders</a></li>
            </ul>
          </div>

          {/* Column 3: Health Institutes & Policies */}
          <div className="space-y-4">
            <h3 className="font-serif-title text-lg font-bold text-white border-b border-amber-900/40 pb-2">
              Health Institutes & Trust Seva
            </h3>
            
            <ul className="space-y-2 text-xs text-amber-100/80 font-normal">
              <li><a href="#health-institutes" className="hover:text-amber-300 hover:underline">Mahavir Cancer Institute</a></li>
              <li><a href="#health-institutes" className="hover:text-amber-300 hover:underline">Mahavir Health Institute</a></li>
              <li><a href="#health-institutes" className="hover:text-amber-300 hover:underline">Mahavir Vatsalya Hospital</a></li>
              <li><a href="#health-institutes" className="hover:text-amber-300 hover:underline">Mahavir Netralaya & Heart Hospital</a></li>
              <li><a href="#" className="hover:text-amber-300 hover:underline">Poor Narayan Bhoj & Mortal Remains Vehicle</a></li>
            </ul>

            <div className="pt-3 border-t border-amber-900/40 text-[11px] text-amber-200/60 flex flex-wrap gap-3">
              <Link href="/terms" className="hover:underline">Terms & Conditions</Link>
              <span>•</span>
              <a href="#" className="hover:underline">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:underline">Shipping & Refunds</a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 border-t border-amber-900/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-amber-200/60 font-medium">
          <p>© Shree Mahavir Sthan Nayas Samiti, Mahavir Mandir, Patna, Bihar.</p>
          <span className="text-amber-400/80">Redesigned with Devotion & Modern Standards</span>
        </div>

      </div>
    </footer>
  );
}
