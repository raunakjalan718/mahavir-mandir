"use client";

import { X, AlertTriangle, ShieldCheck, Globe, Facebook } from "lucide-react";

interface DisclaimerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DisclaimerModal({
  isOpen,
  onClose,
}: DisclaimerModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border-2 border-amber-300 relative overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-amber-100 text-[#2a1e17] flex items-center justify-center hover:bg-[#8b1e0f] hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 border-b border-amber-900/15 pb-4 mb-5">
          <div className="w-11 h-11 rounded-full bg-amber-100 text-[#8b1e0f] flex items-center justify-center shrink-0 border border-amber-300">
            <AlertTriangle className="w-6 h-6 text-[#8b1e0f]" />
          </div>
          <div>
            <h3 className="font-serif-title text-lg sm:text-xl font-bold text-[#2a1e17] leading-snug">
              Important Devotee Notice
            </h3>
            <p className="text-xs text-[#8b1e0f] font-semibold">
              Shri Mahavir Sthan Nyas Samiti, Patna
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4 text-xs sm:text-sm text-[#2a1e17]/90 leading-relaxed font-normal">
          <p className="font-medium text-[#2a1e17] bg-amber-50/80 p-3.5 rounded-xl border border-amber-200">
            A humble notice to Mahavir Mandir devotees:
          </p>

          <p>
            It has been found that there are some fake, unauthorized websites and
            Facebook pages using the name of Mahavir Mandir and collecting
            donations. Shri Mahavir Sthan Nyas Samiti has no connection with
            such fraudulent sites or organizations.
          </p>

          <div className="space-y-2 bg-[#faf7f2] p-4 rounded-xl border border-amber-900/10">
            <div className="flex items-center gap-2 font-bold text-[#8b1e0f] text-xs">
              <Globe className="w-4 h-4 text-amber-600" />
              <span>Our official websites are:</span>
            </div>
            <ul className="pl-6 space-y-1 list-disc font-mono text-xs text-[#2a1e17]">
              <li>
                <a
                  href="https://mahavirmandirpatna.org"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline text-[#8b1e0f] font-semibold"
                >
                  mahavirmandirpatna.org
                </a>
              </li>
              <li>
                <a
                  href="https://mahavirmandir.org"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline text-[#8b1e0f] font-semibold"
                >
                  mahavirmandir.org
                </a>
              </li>
              <li>
                <a
                  href="https://viraatramayanmandir.net"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline text-[#8b1e0f] font-semibold"
                >
                  viraatramayanmandir.net
                </a>
              </li>
              <li>
                <a
                  href="https://viraatramayanmandir.org"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline text-[#8b1e0f] font-semibold"
                >
                  viraatramayanmandir.org
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-1.5 bg-[#faf7f2] p-4 rounded-xl border border-amber-900/10">
            <div className="flex items-center gap-2 font-bold text-[#8b1e0f] text-xs">
              <Facebook className="w-4 h-4 text-amber-600" />
              <span>Our official Facebook page is "Mahavir Mandir Patna":</span>
            </div>
            <p className="pl-6 font-mono text-xs">
              <a
                href="https://facebook.com/PatnaMahavirMandir"
                target="_blank"
                rel="noreferrer"
                className="hover:underline text-[#8b1e0f] font-semibold"
              >
                facebook.com/PatnaMahavirMandir
              </a>
            </p>
          </div>

          <div className="flex items-center gap-2 p-3 bg-red-50 text-red-900 rounded-xl border border-red-200 text-xs font-semibold">
            <ShieldCheck className="w-5 h-5 text-red-700 shrink-0" />
            <span>
              No other website or page is authorized to collect donations on our
              behalf.
            </span>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-5 mt-5 border-t border-amber-900/10">
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-[#8b1e0f] hover:bg-[#73180c] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-colors cursor-pointer"
          >
            I Understand & Acknowledge
          </button>
        </div>
      </div>
    </div>
  );
}
