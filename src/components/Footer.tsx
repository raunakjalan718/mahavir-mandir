"use client";

import Link from "next/link";
import { MapPin, ShieldCheck, ExternalLink } from "lucide-react";

/* ─── DATA ─────────────────────────────────────────────────────────────────── */

const usefulLinks1 = [
  { label: "Mahavir Mandir Publications",  href: "https://mahavirmandirpatna.org/mahavir-mandir-prakashan.html", external: true },
  { label: "Dharmayana Monthly Magazine",  href: "https://mahavirmandirpatna.org/dharmayan",                     external: true },
  { label: "Vedic Rituals",                href: "https://mahavirmandirpatna.org/service-details.php",            external: true },
  { label: "Divine Vision",                href: "https://www.mahavirmandirpatna.org/Live-Darshan.php",           external: true },
  { label: "Worship",                      href: "https://mahavirmandirpatna.org/service-details.php",            external: true },
  { label: "Ramavat Sangat",               href: "https://mahavirmandirpatna.org/Ramavat-sangat.php",             external: true },
  { label: "Ram Kitchen",                  href: "https://ramrasoi.org/",                                         external: true },
];

const usefulLinks2 = [
  { label: "Poor Narayan Bhoj",   href: "https://www.facebook.com/groups/366854525245957",               external: true },
  { label: "Shravan Kumar Award", href: "https://mahavirmandirpatna.org/shravan-kumar-award.html",        external: true },
  { label: "Secretary's Message", href: "https://mahavirmandirpatna.org/#",                               external: true },
  { label: "Current Recruitment", href: "https://mahavirmandirpatna.org/recruitments.php",                external: true },
  { label: "Tender",              href: "https://mahavirmandirpatna.org/tenders.php",                     external: true },
  { label: "Devotee Feedback",    href: "https://mahavirmandirpatna.org/#",                               external: true },
];

const healthLinks = [
  { label: "Mahavir Cancer Institute",       href: "https://mahavirmandirpatna.org/mahavir-cancer-sansthan/", external: true },
  { label: "Mahavir Health Institute",       href: "https://mahavirarogyasansthan.com/",                      external: true },
  { label: "Mahavir Vatsalya Hospital",      href: "http://www.mahavirvaatsalya.com/",                        external: true },
  { label: "Mahavir Netralaya",              href: "https://mahavirarogyasansthan.com/eye/",                   external: true },
  { label: "Mahavir Heart Hospital",         href: "https://mahavirarogyasansthan.com/",                      external: true },
  { label: "Mahavir Senior Citizen Hospital",href: "https://mahavirseniorcitizens.com/",                      external: true },
];

// Links to pages within THIS website
const internalLinks = [
  { label: "About Us",              href: "/#about",            external: false },
  { label: "Rituals & Offerings",   href: "/rituals",           external: false },
  { label: "Online Services",       href: "/#online-services",  external: false },
  { label: "Health Institutes",     href: "/#health-institutes",external: false },
  { label: "Trust Committee",       href: "/#trust-committee",  external: false },
  { label: "Notice Board",          href: "/#notice-board",     external: false },
  { label: "Contact Us",            href: "/contact",           external: false },
];

/* ─── LINK COLUMN ───────────────────────────────────────────────────────────── */

function LinkColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string; external: boolean }[];
}) {
  return (
    <div className="space-y-3">
      <h3 className="font-serif-title text-sm font-bold text-white border-b border-amber-900/40 pb-2 uppercase tracking-wider">
        {title}
      </h3>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l.label}>
            {l.external ? (
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1 text-[12px] text-amber-100/70 hover:text-amber-300 transition-colors leading-snug"
              >
                {l.label}
                <ExternalLink className="w-2.5 h-2.5 opacity-0 group-hover:opacity-60 transition-opacity shrink-0" />
              </a>
            ) : (
              <Link
                href={l.href}
                className="text-[12px] text-amber-100/70 hover:text-amber-300 transition-colors leading-snug block"
              >
                {l.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─── FOOTER ────────────────────────────────────────────────────────────────── */

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#2a1e17] text-amber-100/90 pt-14 pb-10 border-t-4 border-[#8b1e0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Top: Brand + tagline */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 pb-8 border-b border-amber-900/30">
          <div className="space-y-2">
            <h2 className="font-serif-title text-xl font-extrabold text-amber-300">
              Mahavir Mandir, Patna
            </h2>
            <p className="text-xs text-amber-100/60 font-semibold tracking-wide">
              Shree Mahavir Sthan Nayas Samiti
            </p>
            <p className="text-xs text-amber-100/70 leading-relaxed max-w-xs">
              One of the oldest and holiest Hanuman temples in North India. Dedicated to spiritual service, medical relief, and public welfare.
            </p>
          </div>
          <ul className="space-y-2 text-xs text-amber-100/70 shrink-0">
            <li className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Near Railway Station, Patna, Bihar, India</span>
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Registered Trust under Bihar Religious Trust Board</span>
            </li>
          </ul>
        </div>

        {/* 4-Column Link Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          <LinkColumn title="Useful Links" links={usefulLinks1} />
          <LinkColumn title="Useful Links" links={usefulLinks2} />
          <LinkColumn title="Health Institute" links={healthLinks} />
          <LinkColumn title="Our Website" links={internalLinks} />
        </div>

        {/* Bottom copyright + policies */}
        <div className="pt-8 border-t border-amber-900/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-amber-200/60 font-medium text-center sm:text-left">
            © Shree Mahavir Sthan Nayas Samiti, Mahavir Mandir, Patna, Bihar.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] text-amber-200/50">
            <Link href="/terms" className="hover:text-amber-300 hover:underline transition-colors">Terms &amp; Conditions</Link>
            <span>•</span>
            <a href="#" className="hover:text-amber-300 hover:underline transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-amber-300 hover:underline transition-colors">Shipping &amp; Refunds</a>
            <span>•</span>
            <Link href="/contact" className="hover:text-amber-300 hover:underline transition-colors">Contact Us</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
