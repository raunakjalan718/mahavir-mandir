"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SideEdgeTabs from "@/components/SideEdgeTabs";
import RitualsPageContent from "@/components/RitualsPageContent";

// Modals
import DonationModal from "@/components/DonationModal";
import LiveDarshanModal from "@/components/LiveDarshanModal";
import DisclaimerModal from "@/components/DisclaimerModal";

export default function RitualsPage() {
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

      {/* Rituals & Offerings Content */}
      <RitualsPageContent />

      {/* Footer */}
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
