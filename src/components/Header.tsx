"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, Globe, ChevronDown, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Mega-menu data ────────────────────────────────────────────────────────── */
const MEGA_COLS = [
  {
    heading: "Useful Links",
    links: [
      { label: "Mahavir Mandir Publications", href: "https://mahavirmandirpatna.org/mahavir-mandir-prakashan.html", external: true },
      { label: "Dharmayana Monthly Magazine", href: "https://mahavirmandirpatna.org/dharmayan", external: true },
      { label: "Vedic Rituals", href: "/rituals", external: false },
      { label: "Divine Vision / Live Darshan", href: "https://www.mahavirmandirpatna.org/Live-Darshan.php", external: true },
      { label: "Worship & Offerings", href: "/rituals", external: false },
      { label: "Ramavat Sangat", href: "https://mahavirmandirpatna.org/Ramavat-sangat.php", external: true },
      { label: "Ram Kitchen", href: "https://ramrasoi.org/", external: true },
    ],
  },
  {
    heading: "Useful Links",
    links: [
      { label: "Poor Narayan Bhoj", href: "https://www.facebook.com/groups/366854525245957", external: true },
      { label: "Shravan Kumar Award", href: "https://mahavirmandirpatna.org/shravan-kumar-award.html", external: true },
      { label: "Secretary's Message", href: "/#about", external: false },
      { label: "Current Recruitment", href: "/#notice-board", external: false },
      { label: "Tenders", href: "/#notice-board", external: false },
      { label: "Devotee Feedback", href: "/contact", external: false },
    ],
  },
  {
    heading: "Health Institute",
    links: [
      { label: "Mahavir Cancer Institute", href: "https://mahavirmandirpatna.org/mahavir-cancer-sansthan/", external: true },
      { label: "Mahavir Health Institute", href: "https://mahavirarogyasansthan.com/", external: true },
      { label: "Mahavir Vatsalya Hospital", href: "http://www.mahavirvaatsalya.com/", external: true },
      { label: "Mahavir Netralaya", href: "https://mahavirarogyasansthan.com/eye/", external: true },
      { label: "Mahavir Heart Hospital", href: "https://mahavirarogyasansthan.com/", external: true },
      { label: "Mahavir Senior Citizen Hospital", href: "https://mahavirseniorcitizens.com/", external: true },
    ],
  },
];

/* ─── Props ─────────────────────────────────────────────────────────────────── */
interface HeaderProps {
  onOpenDonate: () => void;
  onOpenLive: () => void;
  onOpenDisclaimer: () => void;
}

/* ─── Component ─────────────────────────────────────────────────────────────── */
export default function Header({ onOpenDonate, onOpenLive, onOpenDisclaimer }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileMegaOpen, setMobileMegaOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState<"centered" | "moving" | "settled">("centered");

  useEffect(() => {
    const t1 = setTimeout(() => setStage("moving"), 900);
    const t2 = setTimeout(() => setStage("settled"), 2200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  // Close mega on outside click
  useEffect(() => {
    if (!megaOpen) return;
    function handler(e: MouseEvent) {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) setMegaOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [megaOpen]);

  const navContainerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
  };
  const navItemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };

  function openTranslate() {
    const existing = document.getElementById("nav-translate-popover");
    if (existing) { existing.remove(); return; }
    const pop = document.createElement("div");
    pop.id = "nav-translate-popover";
    pop.style.cssText =
      "position:fixed;top:64px;right:8px;z-index:9999;background:#2a1e17;border:1px solid rgba(251,191,36,0.3);border-radius:16px;padding:16px;box-shadow:0 20px 60px rgba(0,0,0,0.4);min-width:230px";
    pop.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
        <span style="color:#fcd34d;font-weight:700;font-size:13px">🌐 Translate Page</span>
        <button id="nav-translate-close" style="color:#fcd34d;background:none;border:none;cursor:pointer;font-size:18px;line-height:1">&times;</button>
      </div>
      <p style="color:rgba(254,243,199,0.5);font-size:11px;margin-bottom:8px">Select language:</p>
      <div id="nav-gt-clone"></div>
      <p style="color:rgba(254,243,199,0.25);font-size:10px;margin-top:8px">Powered by Google Translate</p>
    `;
    document.body.appendChild(pop);
    document.getElementById("nav-translate-close")?.addEventListener("click", () => pop.remove());
    const srcSel =
      document.querySelector<HTMLSelectElement>("#google_translate_element select.goog-te-combo") ||
      document.querySelector<HTMLSelectElement>("select.goog-te-combo");
    const container = document.getElementById("nav-gt-clone");
    if (srcSel && container) {
      const cloned = srcSel.cloneNode(true) as HTMLSelectElement;
      cloned.style.cssText =
        "width:100%;background:#1a110c;color:#fde68a;border:1px solid rgba(251,191,36,0.3);border-radius:10px;padding:8px 12px;font-size:13px;cursor:pointer;outline:none";
      cloned.addEventListener("change", (e) => {
        srcSel.value = (e.target as HTMLSelectElement).value;
        srcSel.dispatchEvent(new Event("change"));
      });
      container.appendChild(cloned);
    } else if (container) {
      container.innerHTML = '<span style="color:rgba(254,243,199,0.4);font-size:11px">Still loading… try again in a moment.</span>';
    }
    setTimeout(() => {
      document.addEventListener("mousedown", function handler(e) {
        if (!pop.contains(e.target as Node)) { pop.remove(); document.removeEventListener("mousedown", handler); }
      });
    }, 100);
  }

  return (
    <>
      {/* ── Splash overlay ──────────────────────────────────────────────────── */}
      <AnimatePresence>
        {stage !== "settled" && (
          <motion.div
            key="splash-overlay"
            initial={{ opacity: 1 }}
            animate={{ opacity: stage === "centered" ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed inset-0 z-50 bg-[#faf7f2] flex items-center justify-center ${stage === "moving" ? "pointer-events-none" : ""}`}
          >
            {stage === "centered" && (
              <motion.div
                layoutId="header-logo-brand"
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                style={{ willChange: "transform" }}
                className="flex items-center gap-3 sm:gap-5 cursor-default select-none p-4 max-w-[95vw] mx-auto overflow-hidden sm:overflow-visible"
              >
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-white p-1.5 sm:p-2 flex items-center justify-center shadow-lg border border-amber-400/40 shrink-0">
                  <img src="/images/logo.png" alt="Mahavir Mandir Logo" className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col min-w-0">
                  <h1 className="font-serif-title text-[20px] sm:text-[34px] font-bold tracking-tight text-[#2a1e17] leading-snug whitespace-nowrap truncate sm:overflow-visible">
                    Mahavir Mandir
                  </h1>
                  <p className="text-[11px] sm:text-[15px] text-[#8b1e0f] font-bold tracking-wide whitespace-nowrap truncate sm:overflow-visible">
                    Shree Mahavir Sthan Nayas Samiti
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <header suppressHydrationWarning className="sticky top-0 z-40 bg-[#faf7f2]/95 backdrop-blur-md border-b border-amber-900/10 shadow-sm">

        {/* ── Notice bar ────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={stage === "centered" ? { opacity: 0, y: -8 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-[#8b1e0f] text-amber-100 py-1.5 px-4 sm:px-6 w-full min-h-fit overflow-hidden"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 text-[12px] leading-snug">
            <div className="flex items-center gap-1.5 overflow-hidden truncate">
              <span className="text-amber-300 font-bold shrink-0">Notice:</span>
              <span className="truncate font-medium text-amber-100/95">
                Beware of fake sites/pages collecting donations in our name. Official sites: mahavirmandirpatna.org · mahavirmandir.org · viraatramayanmandir.net/.org
              </span>
            </div>
            <button onClick={onOpenDisclaimer} className="shrink-0 font-bold text-amber-300 hover:text-white underline ml-2 transition-colors cursor-pointer text-[12px]">
              Read More
            </button>
          </div>
        </motion.div>

        {/* ── Main nav bar ──────────────────────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">

          {/* Logo */}
          <div className="min-h-[44px] flex items-center shrink-0">
            {stage !== "centered" ? (
              <motion.a href="/" layoutId="header-logo-brand" transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} style={{ willChange: "transform" }} className="flex items-center gap-3 group">
                <div className="w-11 h-11 rounded-xl bg-white p-1 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform border border-amber-400/40 shrink-0">
                  <img src="/images/logo.png" alt="Mahavir Mandir Logo" className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col min-w-0">
                  <h1 className="font-serif-title text-lg sm:text-xl font-bold tracking-tight text-[#2a1e17] group-hover:text-[#8b1e0f] transition-colors leading-snug whitespace-nowrap truncate sm:overflow-visible">
                    Mahavir Mandir, Patna
                  </h1>
                  <p className="text-xs text-[#8b1e0f] font-semibold tracking-wide whitespace-nowrap truncate sm:overflow-visible">
                    Shree Mahavir Sthan Nayas Samiti
                  </p>
                </div>
              </motion.a>
            ) : (
              <div className="w-48 h-11" />
            )}
          </div>

          {/* ── Desktop nav ────────────────────────────────────────────────── */}
          <motion.nav
            variants={navContainerVariants}
            initial="hidden"
            animate={stage === "centered" ? "hidden" : "visible"}
            className="hidden lg:flex items-center gap-5 xl:gap-7 text-[11px] xl:text-xs font-bold uppercase tracking-wider text-[#2a1e17]"
          >
            <motion.a variants={navItemVariants} href="/#about" className="whitespace-nowrap hover:text-[#8b1e0f] transition-colors py-1">About Us</motion.a>
            <motion.a variants={navItemVariants} href="/rituals" className="whitespace-nowrap hover:text-[#8b1e0f] transition-colors py-1">Rituals &amp; Offerings</motion.a>
            <motion.a variants={navItemVariants} href="/#publications" className="whitespace-nowrap hover:text-[#8b1e0f] transition-colors py-1">Research &amp; Publications</motion.a>
            <motion.a variants={navItemVariants} href="/#online-services" className="whitespace-nowrap hover:text-[#8b1e0f] transition-colors py-1">Online Services</motion.a>
            <motion.a variants={navItemVariants} href="/#health-institutes" className="whitespace-nowrap hover:text-[#8b1e0f] transition-colors py-1">Health Institutes</motion.a>
            <motion.a variants={navItemVariants} href="/contact" className="whitespace-nowrap hover:text-[#8b1e0f] transition-colors py-1">Contact Us</motion.a>

            {/* Useful Links mega-menu trigger */}
            <motion.div variants={navItemVariants} className="relative" ref={megaRef}>
              <button
                onClick={() => setMegaOpen((v) => !v)}
                className={`flex items-center gap-1 whitespace-nowrap transition-colors py-1 cursor-pointer ${megaOpen ? "text-[#8b1e0f]" : "hover:text-[#8b1e0f]"}`}
              >
                Useful Links
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${megaOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Mega-menu panel */}
              <AnimatePresence>
                {megaOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.97 }}
                    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-full right-0 mt-2 w-[680px] max-w-[90vw] bg-[#1c1209] rounded-2xl shadow-2xl border border-amber-900/30 overflow-hidden z-50"
                    style={{ transformOrigin: "top right" }}
                  >
                    {/* Header strip */}
                    <div className="bg-[#8b1e0f] px-5 py-2.5 flex items-center justify-between">
                      <span className="text-amber-100 font-bold text-xs uppercase tracking-widest">Quick Links</span>
                      <button onClick={() => setMegaOpen(false)} className="text-amber-200/60 hover:text-amber-200 transition-colors cursor-pointer">
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    {/* 3-column grid */}
                    <div className="grid grid-cols-3 divide-x divide-amber-900/20 p-5 gap-0">
                      {MEGA_COLS.map((col, ci) => (
                        <div key={ci} className={`${ci > 0 ? "pl-5" : ""} ${ci < MEGA_COLS.length - 1 ? "pr-5" : ""}`}>
                          <p className="text-amber-400 text-[10px] font-black uppercase tracking-[0.18em] mb-3 pb-2 border-b border-amber-900/30">
                            {col.heading}
                          </p>
                          <ul className="space-y-1.5">
                            {col.links.map((link, li) => (
                              <li key={li}>
                                <a
                                  href={link.href}
                                  target={link.external ? "_blank" : undefined}
                                  rel={link.external ? "noopener noreferrer" : undefined}
                                  onClick={() => setMegaOpen(false)}
                                  className="group flex items-start gap-1.5 text-amber-100/70 hover:text-amber-300 text-xs leading-snug transition-colors duration-150 py-0.5"
                                >
                                  <span className="mt-0.5 w-1 h-1 rounded-full bg-amber-600/60 group-hover:bg-amber-400 transition-colors shrink-0" />
                                  {link.label}
                                  {link.external && <ExternalLink className="w-2.5 h-2.5 shrink-0 mt-0.5 opacity-40 group-hover:opacity-70" />}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Footer note */}
                    <div className="px-5 py-2.5 bg-amber-900/10 border-t border-amber-900/20 text-amber-100/30 text-[10px]">
                      Links marked with ↗ open an external website
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.nav>

          {/* ── Language button ─────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={stage === "centered" ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden lg:flex items-center gap-2 shrink-0"
          >
            <button
              aria-label="Translate page"
              title="Translate page"
              onClick={openTranslate}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-amber-400/30 bg-amber-50/60 hover:bg-amber-100/80 text-[#2a1e17] hover:text-[#8b1e0f] transition-all duration-200 cursor-pointer group"
            >
              <Globe className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="text-[11px] font-bold uppercase tracking-wider">Language</span>
            </button>
          </motion.div>

          {/* ── Mobile hamburger ────────────────────────────────────────────── */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={stage === "centered" ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#2a1e17] hover:bg-amber-100/60 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* ── Mobile drawer ──────────────────────────────────────────────────── */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              key="mobile-drawer"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden overflow-hidden bg-[#faf7f2] border-b border-amber-900/10 shadow-lg"
            >
              <div className="px-5 py-4 space-y-0.5 font-semibold text-xs text-[#2a1e17]">
                {[
                  { label: "About Us",               href: "/#about" },
                  { label: "Rituals & Offerings",    href: "/rituals" },
                  { label: "Research & Publications",href: "/#publications" },
                  { label: "Online Services",        href: "/#online-services" },
                  { label: "Health Institutes",      href: "/#health-institutes" },
                  { label: "Contact Us",             href: "/contact" },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 px-2 rounded-lg hover:bg-amber-50 hover:text-[#8b1e0f] transition-colors"
                  >
                    {item.label}
                  </a>
                ))}

                {/* Useful Links accordion on mobile */}
                <div>
                  <button
                    onClick={() => setMobileMegaOpen((v) => !v)}
                    className="w-full flex items-center justify-between py-2 px-2 rounded-lg hover:bg-amber-50 hover:text-[#8b1e0f] transition-colors cursor-pointer text-left"
                  >
                    <span>Useful Links</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${mobileMegaOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {mobileMegaOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22 }}
                        className="overflow-hidden"
                      >
                        <div className="mx-2 mt-1 mb-2 rounded-xl bg-[#1c1209] p-4 space-y-4">
                          {MEGA_COLS.map((col, ci) => (
                            <div key={ci}>
                              <p className="text-amber-400 text-[10px] font-black uppercase tracking-widest mb-2">{col.heading}</p>
                              <ul className="space-y-2">
                                {col.links.map((link, li) => (
                                  <li key={li}>
                                    <a
                                      href={link.href}
                                      target={link.external ? "_blank" : undefined}
                                      rel={link.external ? "noopener noreferrer" : undefined}
                                      onClick={() => { setMobileMegaOpen(false); setMobileMenuOpen(false); }}
                                      className="flex items-center gap-1.5 text-amber-100/70 hover:text-amber-300 text-[11px] transition-colors"
                                    >
                                      <span className="w-1 h-1 rounded-full bg-amber-600 shrink-0" />
                                      {link.label}
                                      {link.external && <ExternalLink className="w-2.5 h-2.5 opacity-40" />}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Action buttons */}
                <div className="pt-2 border-t border-amber-900/10 space-y-2 mt-2">
                  <button
                    onClick={() => { setMobileMenuOpen(false); onOpenLive(); }}
                    className="w-full py-2.5 rounded-lg bg-[#8b1e0f] text-white font-bold text-xs cursor-pointer hover:bg-[#73180c] transition-colors"
                  >
                    Watch Live Darshan Stream
                  </button>
                  <button
                    onClick={() => { setMobileMenuOpen(false); onOpenDonate(); }}
                    className="w-full py-2.5 rounded-lg bg-amber-500 text-gray-950 font-bold text-xs cursor-pointer hover:bg-amber-400 transition-colors"
                  >
                    Online Donation / Offering
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
