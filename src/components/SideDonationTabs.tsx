"use client";

interface SideDonationTabsProps {
  onOpenDonate: () => void;
  onOpenPuja: () => void;
}

export default function SideDonationTabs({ onOpenDonate, onOpenPuja }: SideDonationTabsProps) {
  return (
    <>
      {/* Left Vertical Side Tab: Quick Donation */}
      <button
        onClick={onOpenDonate}
        className="side-tab-left hover:bg-red-700 transition-colors"
        title="Quick Donation"
      >
        Quick Donation
      </button>

      {/* Right Vertical Side Tab 1: Donation */}
      <button
        onClick={onOpenDonate}
        className="side-tab-right-1 hover:bg-red-700 transition-colors"
        title="Donation"
      >
        Donation
      </button>

      {/* Right Vertical Side Tab 2: Spiritual Offering */}
      <button
        onClick={onOpenPuja}
        className="side-tab-right-2 hover:bg-red-700 transition-colors"
        title="Spiritual Offering"
      >
        Spiritual Offering
      </button>
    </>
  );
}
