"use client";

import { useState } from "react";
import { X, Calendar, CheckCircle2, Sparkles, User, Phone, MapPin } from "lucide-react";
import confetti from "canvas-confetti";

interface PujaBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PujaBookingModal({ isOpen, onClose }: PujaBookingModalProps) {
  const [pujaType, setPujaType] = useState("chhadawa");
  const [devoteeName, setDevoteeName] = useState("");
  const [gotra, setGotra] = useState("");
  const [mobile, setMobile] = useState("");
  const [pujaDate, setPujaDate] = useState("2026-07-28");
  const [isBooked, setIsBooked] = useState(false);

  if (!isOpen) return null;

  const pujas = [
    { id: "chhadawa", name: "विशेष चोला एवं सिंदूर चढ़ावा (Hanuman Chhadawa)", price: 1100 },
    { id: "rudra", name: "रुद्राभिषेक एवं विशेष महाआरती (Rudrabhishek)", price: 2100 },
    { id: "sundarkand", name: "सुंदरकांड एवं हनुमान चालीसा पाठ (Sundarkand Path)", price: 1500 },
    { id: "archana", name: "मंगलवार विशेष अष्टोत्तर अर्चना (Tuesday Archana)", price: 501 },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
    try {
      confetti({ particleCount: 80, spread: 60 });
    } catch {
      // fallback
    }
  };

  const selectedPuja = pujas.find((p) => p.id === pujaType) || pujas[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border-2 border-amber-200 relative overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-amber-100 text-espresso-800 flex items-center justify-center hover:bg-saffron-600 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isBooked ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-10 h-10 animate-bounce" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-espresso-900">
              Puja Booking Confirmed!
            </h3>
            <p className="text-sm text-espresso-800/80">
              Thank you, <strong className="text-saffron-800">{devoteeName || "Devotee"}</strong>. Your <strong className="text-saffron-800">{selectedPuja.name}</strong> has been scheduled for <strong className="text-saffron-800">{pujaDate}</strong>.
            </p>
            <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200 text-xs text-amber-900 space-y-1">
              <p><strong>Booking Token ID:</strong> MPT-PUJA-{Math.floor(1000 + Math.random() * 9000)}</p>
              <p><strong>Gotra:</strong> {gotra || "Kashyap"}</p>
              <p><strong>Puja Prasad:</strong> Collect at Special Counter Gate 1</p>
            </div>
            <button
              onClick={() => {
                setIsBooked(false);
                onClose();
              }}
              className="w-full py-3 rounded-full saffron-pill-btn text-white font-bold text-sm shadow-md"
            >
              Done & Download Token
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-3 border-b border-amber-900/10 pb-3">
              <div className="w-10 h-10 rounded-full bg-saffron-100 text-saffron-700 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-espresso-900">
                  पूजा एवं चढ़ावा बुकिंग (Online Puja Booking)
                </h3>
                <p className="text-xs text-amber-900/70 font-medium">
                  Book Special Rituals at Mahavir Mandir Patna
                </p>
              </div>
            </div>

            {/* Puja Type */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-espresso-800 uppercase tracking-wide">
                Select Sacred Ritual (पूजा का प्रकार):
              </label>
              <select
                value={pujaType}
                onChange={(e) => setPujaType(e.target.value)}
                className="w-full p-3 rounded-xl border border-amber-300 text-sm font-semibold bg-amber-50 text-espresso-900 focus:outline-none focus:ring-2 focus:ring-saffron-500"
              >
                {pujas.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} — ₹{p.price}
                  </option>
                ))}
              </select>
            </div>

            {/* Devotee Info */}
            <div className="space-y-3">
              <input
                type="text"
                required
                placeholder="Devotee Full Name (यजमान का नाम)"
                value={devoteeName}
                onChange={(e) => setDevoteeName(e.target.value)}
                className="w-full p-3 rounded-xl border border-amber-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-saffron-500"
              />
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="Gotra (गोत्र)"
                  value={gotra}
                  onChange={(e) => setGotra(e.target.value)}
                  className="w-full p-3 rounded-xl border border-amber-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-saffron-500"
                />
                <input
                  type="tel"
                  required
                  placeholder="Mobile Number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="w-full p-3 rounded-xl border border-amber-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-saffron-500"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-espresso-800 uppercase tracking-wide">
                  Preferred Date (पूजा की तिथि):
                </label>
                <input
                  type="date"
                  required
                  value={pujaDate}
                  onChange={(e) => setPujaDate(e.target.value)}
                  className="w-full p-3 rounded-xl border border-amber-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-saffron-500"
                />
              </div>
            </div>

            {/* Summary */}
            <div className="bg-amber-50 p-3 rounded-xl flex items-center justify-between text-xs font-bold text-espresso-900 border border-amber-200">
              <span>Dakshina Amount (दक्षिणा राशि):</span>
              <span className="text-saffron-800 text-lg font-serif font-extrabold">₹{selectedPuja.price}</span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-full saffron-pill-btn text-white font-bold text-base shadow-lg flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5 text-white" />
              <span>Confirm & Book Puja Token</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
