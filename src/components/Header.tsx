"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
                className="flex items-center gap-4 scale-[1.75] sm:scale-[2.2] origin-center cursor-default select-none p-4"
              >
                <div className="w-12 h-12 rounded-xl bg-white p-1 flex items-center justify-center shadow-md border border-amber-400/40">
                  <img
                    src="/images/logo.png"
                    alt="Mahavir Mandir Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h1 className="font-serif-title text-xl sm:text-2xl font-bold tracking-tight text-[#2a1e17] leading-snug">
                    Mahavir Mandir, Patna
                  </h1>
                  <p className="text-xs text-[#8b1e0f] font-semibold tracking-wide">
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
                className="flex items-center gap-3 group"
              >
                <div className="w-11 h-11 rounded-xl bg-white p-1 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform border border-amber-400/40">
                  <img
                    src="/images/logo.png"
                    alt="Mahavir Mandir Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h1 className="font-serif-title text-lg sm:text-xl font-bold tracking-tight text-[#2a1e17] group-hover:text-[#8b1e0f] transition-colors leading-snug">
                    Mahavir Mandir, Patna
                  </h1>
                  <p className="text-xs text-[#8b1e0f] font-semibold tracking-wide">
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
            </div>
          </div>
        )}
      </header>
    </>
  );
}




