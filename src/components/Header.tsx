"use client";

import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Facebook SVG icon (official brand color)
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.026 4.388 11.02 10.125 11.927v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796v8.437C19.612 23.093 24 18.1 24 12.073z" />
    </svg>
  );
}

interface HeaderProps {
  onOpenDonate: () => void;
  onOpenLive: () => void;
  onOpenDisclaimer: () => void;
}

export default function Header({
  onOpenDonate,
  onOpenLive,
  onOpenDisclaimer,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [stage, setStage] = useState<"centered" | "moving" | "settled">("centered");

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setStage("moving");
    }, 900);

    const timer2 = setTimeout(() => {
      setStage("settled");
    }, 2200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  // Framer Motion Stagger Variants for Nav Items
  const navContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  return (
    <>
      {/* Centered Entrance Splash Overlay (Plays on every page load) */}
      <AnimatePresence>
        {stage !== "settled" && (
          <motion.div
            key="splash-overlay"
            initial={{ opacity: 1 }}
            animate={{ opacity: stage === "centered" ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed inset-0 z-50 bg-[#faf7f2] flex items-center justify-center ${
              stage === "moving" ? "pointer-events-none" : ""
            }`}
          >
            {stage === "centered" && (
              <motion.div
                layoutId="header-logo-brand"
                transition={{
                  duration: 1.2,
                  ease: [0.16, 1, 0.3, 1], // smooth ease-out, deliberate & premium
                }}
                style={{ willChange: "transform" }}
                className="flex items-center gap-3 sm:gap-5 cursor-default select-none p-4 max-w-[95vw] mx-auto overflow-hidden sm:overflow-visible"
              >
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-white p-1.5 sm:p-2 flex items-center justify-center shadow-lg border border-amber-400/40 shrink-0">
                  <img
                    src="/images/logo.png"
                    alt="Mahavir Mandir Logo"
                    className="w-full h-full object-contain"
                  />
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

      <header
        suppressHydrationWarning
        className="sticky top-0 z-40 bg-[#faf7f2]/95 backdrop-blur-md border-b border-amber-900/10 shadow-sm"
      >
        {/* Top Disclaimer Notice Bar */}
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
            <button
              onClick={onOpenDisclaimer}
              className="shrink-0 font-bold text-amber-300 hover:text-white underline ml-2 transition-colors cursor-pointer text-[12px]"
            >
              Read More
            </button>
          </div>
        </motion.div>

        {/* Main Nav Bar */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-3.5 flex items-center justify-between gap-6">
          {/* Emblem & Name */}
          <div className="min-h-[44px] flex items-center shrink-0">
            {stage !== "centered" ? (
              <motion.a
                href="/"
                layoutId="header-logo-brand"
                transition={{
                  duration: 1.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ willChange: "transform" }}
                className="flex items-center gap-3 group"
              >
                <div className="w-11 h-11 rounded-xl bg-white p-1 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform border border-amber-400/40 shrink-0">
                  <img
                    src="/images/logo.png"
                    alt="Mahavir Mandir Logo"
                    className="w-full h-full object-contain"
                  />
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

          {/* Navigation Links with Equal & Consistent Spacing */}
          <motion.nav
            variants={navContainerVariants}
            initial="hidden"
            animate={stage === "centered" ? "hidden" : "visible"}
            className="hidden lg:flex items-center gap-7 text-xs font-bold uppercase tracking-wider text-[#2a1e17]"
          >
            <motion.a variants={navItemVariants} href="/#about" className="whitespace-nowrap hover:text-[#8b1e0f] transition-colors py-1">
              About Us
            </motion.a>
            <motion.a variants={navItemVariants} href="/rituals" className="whitespace-nowrap hover:text-[#8b1e0f] transition-colors py-1">
              Rituals & Offerings
            </motion.a>
            <motion.a variants={navItemVariants} href="/#publications" className="whitespace-nowrap hover:text-[#8b1e0f] transition-colors py-1">
              Research & Publications
            </motion.a>
            <motion.a variants={navItemVariants} href="/#online-services" className="whitespace-nowrap hover:text-[#8b1e0f] transition-colors py-1">
              Online Services
            </motion.a>
            <motion.a variants={navItemVariants} href="/#health-institutes" className="whitespace-nowrap hover:text-[#8b1e0f] transition-colors py-1">
              Health Institutes
            </motion.a>
            <motion.a variants={navItemVariants} href="/contact" className="whitespace-nowrap hover:text-[#8b1e0f] transition-colors py-1">
              Contact Us
            </motion.a>
          </motion.nav>

          {/* Right-side action icons: Language + Facebook */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={stage === "centered" ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden lg:flex items-center gap-2"
          >
            {/* Google Translate trigger */}
            <button
              aria-label="Translate page"
              title="Translate page"
              onClick={() => {
                // Trigger the hidden Google Translate select via click
                const sel = document.querySelector<HTMLSelectElement>('#google_translate_element select.goog-te-combo');
                if (sel) sel.focus();
                // Also dispatch a custom event so SideEdgeTabs can intercept if needed
                // For now: open the FAB panel — we open the widget directly
                const el = document.querySelector<HTMLElement>('#google_translate_element');
                if (el) el.style.display = 'block';
                // Show a small inline translate popover
                const existing = document.getElementById('nav-translate-popover');
                if (existing) { existing.remove(); return; }
                const pop = document.createElement('div');
                pop.id = 'nav-translate-popover';
                pop.style.cssText = 'position:fixed;top:64px;right:120px;z-index:9999;background:#2a1e17;border:1px solid rgba(251,191,36,0.3);border-radius:16px;padding:16px;box-shadow:0 20px 60px rgba(0,0,0,0.4);min-width:220px';
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
                document.getElementById('nav-translate-close')?.addEventListener('click', () => pop.remove());
                // Clone the GT select
                const srcSel = document.querySelector<HTMLSelectElement>('#google_translate_element select.goog-te-combo');
                const container = document.getElementById('nav-gt-clone');
                if (srcSel && container) {
                  const cloned = srcSel.cloneNode(true) as HTMLSelectElement;
                  cloned.style.cssText = 'width:100%;background:#1a110c;color:#fde68a;border:1px solid rgba(251,191,36,0.3);border-radius:10px;padding:8px 12px;font-size:13px;cursor:pointer;outline:none';
                  cloned.addEventListener('change', (e) => {
                    srcSel.value = (e.target as HTMLSelectElement).value;
                    srcSel.dispatchEvent(new Event('change'));
                  });
                  container.appendChild(cloned);
                }
                // Close on outside click
                setTimeout(() => {
                  document.addEventListener('mousedown', function handler(e) {
                    if (!pop.contains(e.target as Node)) { pop.remove(); document.removeEventListener('mousedown', handler); }
                  });
                }, 100);
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-amber-400/30 bg-amber-50/60 hover:bg-amber-100/80 text-[#2a1e17] hover:text-[#8b1e0f] transition-all duration-200 cursor-pointer group"
            >
              <Globe className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="text-[11px] font-bold uppercase tracking-wider">Language</span>
            </button>

            {/* Facebook page link */}
            <a
              href="https://www.facebook.com/PatnaMahavirMandir/?ref=embed_page#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook"
              title="Follow us on Facebook"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-blue-600/30 bg-blue-50/60 hover:bg-blue-100/80 text-blue-700 hover:text-blue-800 transition-all duration-200 cursor-pointer group"
            >
              <FacebookIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="text-[11px] font-bold uppercase tracking-wider">Facebook</span>
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={stage === "centered" ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#2a1e17] hover:bg-amber-100/60"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[#2a1e17]" />}
          </motion.button>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#faf7f2] border-b border-amber-900/10 px-6 py-4 space-y-3 font-semibold text-xs text-[#2a1e17] shadow-lg">
            <a href="/#about" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-[#8b1e0f]">
              About Us
            </a>
            <a href="/rituals" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-[#8b1e0f]">
              Rituals & Offerings
            </a>
            <a href="/#publications" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-[#8b1e0f]">
              Research & Publications
            </a>
            <a href="/#online-services" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-[#8b1e0f]">
              Online Services
            </a>
            <a href="/#health-institutes" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-[#8b1e0f]">
              Health Institutes
            </a>
            <a href="/contact" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-[#8b1e0f]">
              Contact Us
            </a>

            <div className="pt-2 border-t border-amber-900/10 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLive();
                }}
                className="w-full py-2.5 rounded-lg bg-[#8b1e0f] text-white font-bold text-xs"
              >
                Watch Live Darshan Stream
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDonate();
                }}
                className="w-full py-2.5 rounded-lg bg-amber-500 text-gray-950 font-bold text-xs"
              >
                Online Donation / Offering
              </button>
              <a
                href="https://www.facebook.com/PatnaMahavirMandir/?ref=embed_page#"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 rounded-lg bg-blue-600 text-white font-bold text-xs flex items-center justify-center gap-2"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
                Follow on Facebook
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}




