"use client";

import { X, Bell, Calendar, Download, FileText, CheckCircle2, ChevronRight } from "lucide-react";

interface NoticesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NoticesModal({ isOpen, onClose }: NoticesModalProps) {
  if (!isOpen) return null;

  const notices = [
    {
      id: "ramnavami",
      title: "राम नवमी 2026 विशेष दर्शन एवं सुरक्षा दिशा-निर्देश (Ram Navami Guidelines)",
      date: "2026-07-20",
      category: "Festival Notice",
      urgent: true,
      desc: "Special 24-hour continuous darshan arrangement on Ram Navami. Dedicated fast-track queues for women, senior citizens, and differently-abled devotees. Entry allowed via Gate 1 near Patna Junction.",
    },
    {
      id: "ladoocounter",
      title: "नैवेद्यम प्रसाद काउंटर समय एवं ऑनलाइन प्री-बुकिंग (Naivedyam Counters)",
      date: "2026-07-18",
      category: "Prasad Notice",
      urgent: false,
      desc: "To prevent festive rush, 8 temporary Naivedyam counters have been opened outside Gate 2. Devotees are encouraged to generate online pickup tokens.",
    },
    {
      id: "cancerhospital",
      title: "महावीर कैंसर संस्थान मुफ़्त बाल कैंसर उपचार योजना (Free Cancer Care)",
      date: "2026-07-10",
      category: "Trust Notice",
      urgent: false,
      desc: "Shree Mahavir Mandir Trust announces ₹1,00,000 financial assistance for pediatric cancer patients admitted to Mahavir Cancer Sansthan.",
    },
    {
      id: "pujabooking",
      title: "रुद्राभिषेक एवं हनुमान चालीसा पाठ बुकिंग सूचना (Special Puja Booking)",
      date: "2026-07-05",
      category: "Puja Circular",
      urgent: false,
      desc: "Online booking for Tuesday and Saturday Hanuman Puja is open 15 days in advance via official website.",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border-2 border-amber-200 relative overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-amber-100 text-espresso-800 flex items-center justify-center hover:bg-saffron-600 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 border-b border-amber-900/10 pb-4 mb-5">
          <div className="w-10 h-10 rounded-full bg-saffron-100 text-saffron-700 flex items-center justify-center">
            <Bell className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif text-xl font-bold text-espresso-900">
              सूचनाएँ एवं आधिकारिक प्रेस विज्ञप्ति (Official Notices)
            </h3>
            <p className="text-xs text-amber-900/70 font-medium">
              Shree Mahavir Mandir Trust Board, Patna
            </p>
          </div>
        </div>

        {/* Notices List */}
        <div className="space-y-4">
          {notices.map((n) => (
            <div
              key={n.id}
              className={`p-4 rounded-2xl border transition-all ${
                n.urgent
                  ? "bg-saffron-50/80 border-saffron-300 shadow-sm"
                  : "bg-amber-50/50 border-amber-200/80"
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase ${
                  n.urgent ? "bg-saffron-600 text-white" : "bg-amber-200 text-saffron-900"
                }`}>
                  {n.category}
                </span>
                <span className="text-xs text-amber-900/60 font-semibold flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {n.date}
                </span>
              </div>

              <h4 className="font-serif text-base font-bold text-espresso-900 mb-1.5">
                {n.title}
              </h4>

              <p className="text-xs text-espresso-800/80 leading-relaxed font-normal mb-3">
                {n.desc}
              </p>

              <div className="flex items-center justify-between pt-2 border-t border-amber-900/10 text-xs font-semibold">
                <span className="text-saffron-800 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Verified Official Release
                </span>
                <button
                  onClick={() => alert(`Downloading circular PDF for ${n.title}`)}
                  className="text-saffron-700 hover:text-saffron-900 flex items-center gap-1 bg-white px-3 py-1 rounded-full border border-amber-300 shadow-sm hover:shadow"
                >
                  <Download className="w-3 h-3" />
                  <span>Download PDF</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4 mt-4 border-t border-amber-900/10 text-center">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-full saffron-pill-btn text-white font-bold text-sm shadow-md"
          >
            Close Notices
          </button>
        </div>

      </div>
    </div>
  );
}
