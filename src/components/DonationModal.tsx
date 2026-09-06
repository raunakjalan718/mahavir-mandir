"use client";

import { useState } from "react";
import { X, Heart, CheckCircle2, QrCode } from "lucide-react";
import confetti from "canvas-confetti";

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DonationModal({ isOpen, onClose }: DonationModalProps) {
  const [amount, setAmount] = useState(1100);
  const [customAmount, setCustomAmount] = useState("");
  const [cause, setCause] = useState("cancer");
  const [donorName, setDonorName] = useState("");
  const [donorPhone, setDonorPhone] = useState("");
  const [panNo, setPanNo] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handlePresetSelect = (val: number) => {
    setAmount(val);
    setCustomAmount("");
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    const parsed = parseInt(e.target.value);
    if (!isNaN(parsed)) {
      setAmount(parsed);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {
      // fallback
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-amber-200 relative overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-amber-50 text-[#2a1e17] flex items-center justify-center hover:bg-[#8b1e0f] hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-10 h-10 animate-bounce" />
            </div>
            <h3 className="font-serif-title text-2xl font-bold text-[#2a1e17]">
              Donation Received
            </h3>
            <p className="text-sm text-[#2a1e17]/80">
              Thank you, <strong className="text-[#8b1e0f]">{donorName || "Devotee"}</strong>. Your contribution of <strong className="text-[#8b1e0f]">₹{amount}</strong> has been received by Shree Mahavir Sthan Nayas Samiti.
            </p>
            <div className="bg-amber-50 rounded-xl p-4 border border-amber-200 text-xs text-amber-950 space-y-1">
              <p><strong>Receipt No:</strong> MPT-{Math.floor(100000 + Math.random() * 900000)}</p>
              <p><strong>Tax Exemption Certificate:</strong> Issued under Section 80G</p>
            </div>
            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="w-full py-3 rounded-lg bg-[#8b1e0f] hover:bg-[#70160a] text-white font-bold text-sm shadow-md"
            >
              Close & Download Receipt
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex items-center gap-3 border-b border-amber-900/10 pb-3">
              <div className="w-10 h-10 rounded-lg bg-red-50 text-[#8b1e0f] flex items-center justify-center border border-red-200">
                <Heart className="w-5 h-5 fill-[#8b1e0f]" />
              </div>
              <div>
                <h3 className="font-serif-title text-xl font-bold text-[#2a1e17]">
                  Online Donation (दान सेवा)
                </h3>
                <p className="text-xs text-amber-900/70 font-medium">
                  Shree Mahavir Sthan Nayas Samiti • Section 80G Tax Exempt
                </p>
              </div>
            </div>

            {/* Cause Selection */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#2a1e17] uppercase tracking-wide">
                Select Seva Cause:
              </label>
              <select
                value={cause}
                onChange={(e) => setCause(e.target.value)}
                className="w-full p-3 rounded-xl border border-amber-300 text-sm font-semibold bg-amber-50 text-[#2a1e17] focus:outline-none focus:ring-2 focus:ring-[#8b1e0f]"
              >
                <option value="cancer">Mahavir Cancer Institute (Patient Care)</option>
                <option value="ladoo">Daridranarayan Feast & Bhandara</option>
                <option value="vatsalya">Mahavir Vatsalya Child Hospital</option>
                <option value="temple">Temple Maintenance & Ritual Seva</option>
              </select>
            </div>

            {/* Preset Amount Grid */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#2a1e17] uppercase tracking-wide">
                Select Amount (₹):
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[501, 1100, 2100, 5001].map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => handlePresetSelect(val)}
                    className={`py-2.5 rounded-xl font-bold text-xs sm:text-sm border transition-all ${
                      amount === val && !customAmount
                        ? "bg-[#8b1e0f] text-white border-[#8b1e0f] shadow-md"
                        : "bg-amber-50 text-[#2a1e17] border-amber-200 hover:bg-amber-100"
                    }`}
                  >
                    ₹{val}
                  </button>
                ))}
              </div>

              {/* Custom Input */}
              <input
                type="number"
                placeholder="Or enter custom amount (₹)"
                value={customAmount}
                onChange={handleCustomChange}
                className="w-full mt-2 p-3 rounded-xl border border-amber-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#8b1e0f]"
              />
            </div>

            {/* Devotee Info */}
            <div className="space-y-3 pt-2">
              <input
                type="text"
                required
                placeholder="Full Name (for 80G receipt)"
                value={donorName}
                onChange={(e) => setDonorName(e.target.value)}
                className="w-full p-3 rounded-xl border border-amber-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#8b1e0f]"
              />
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="tel"
                  required
                  placeholder="Mobile Number"
                  value={donorPhone}
                  onChange={(e) => setDonorPhone(e.target.value)}
                  className="w-full p-3 rounded-xl border border-amber-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#8b1e0f]"
                />
                <input
                  type="text"
                  placeholder="PAN No. (Optional)"
                  value={panNo}
                  onChange={(e) => setPanNo(e.target.value)}
                  className="w-full p-3 rounded-xl border border-amber-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#8b1e0f] uppercase"
                />
              </div>
            </div>

            {/* Payment Modes */}
            <div className="flex items-center justify-between bg-amber-50 p-3 rounded-xl text-xs font-semibold text-[#2a1e17]">
              <span className="flex items-center gap-1.5">
                <QrCode className="w-4 h-4 text-[#8b1e0f]" />
                <span>UPI / GPay / PhonePe / Cards</span>
              </span>
              <span className="text-emerald-700 font-bold">Secure Gateway</span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-lg bg-[#8b1e0f] hover:bg-[#70160a] text-white font-bold text-sm shadow-md flex items-center justify-center gap-2"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Proceed to Donate ₹{amount}</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
