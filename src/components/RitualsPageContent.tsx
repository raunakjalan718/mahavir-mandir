"use client";

import { useEffect, useState } from "react";
import { getRituals, createBooking, Ritual, BookingPayload } from "@/lib/api";
import {
  Search,
  Sparkles,
  Calendar,
  CheckCircle2,
  X,
  CreditCard,
  Building2,
  Info,
  ChevronRight,
  Filter,
} from "lucide-react";
import confetti from "canvas-confetti";

export default function RitualsPageContent() {
  const [rituals, setRituals] = useState<Ritual[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedBookingType, setSelectedBookingType] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Modal State
  const [selectedRitualForBooking, setSelectedRitualForBooking] = useState<Ritual | null>(null);
  const [devoteeName, setDevoteeName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [gotra, setGotra] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingResponse, setBookingResponse] = useState<{
    success: boolean;
    message: string;
    tokenId?: string;
  } | null>(null);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const data = await getRituals();
      setRituals(data);
      setLoading(false);
    }
    loadData();
  }, []);

  // Extract unique categories
  const categories = ["All", ...Array.from(new Set(rituals.map((r) => r.category)))];

  // Filter rituals
  const filteredRituals = rituals.filter((ritual) => {
    const matchesCategory =
      selectedCategory === "All" || ritual.category === selectedCategory;
    const matchesType =
      selectedBookingType === "all" || ritual.booking_type === selectedBookingType;
    const matchesSearch =
      ritual.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ritual.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (ritual.price_note && ritual.price_note.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesType && matchesSearch;
  });

  // Group filtered rituals by category
  const groupedRituals = filteredRituals.reduce((acc, ritual) => {
    if (!acc[ritual.category]) {
      acc[ritual.category] = [];
    }
    acc[ritual.category].push(ritual);
    return acc;
  }, {} as Record<string, Ritual[]>);

  const handleOpenBooking = (ritual: Ritual) => {
    setSelectedRitualForBooking(ritual);
    setBookingResponse(null);
    setDevoteeName("");
    setPhone("");
    setEmail("");
    setGotra("");
    setPreferredDate(new Date().toISOString().split("T")[0]);
    setNotes("");
  };

  const handleCloseBooking = () => {
    setSelectedRitualForBooking(null);
    setBookingResponse(null);
  };

  const handleSubmitBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedRitualForBooking) return;

    setIsSubmitting(true);
    const payload: BookingPayload = {
      ritual_id: selectedRitualForBooking.id,
      ritual_name: selectedRitualForBooking.name,
      category: selectedRitualForBooking.category,
      price: selectedRitualForBooking.price,
      devotee_name: devoteeName,
      phone: phone,
      email: email,
      gotra: gotra,
      preferred_date: preferredDate,
      notes: notes,
    };

    const res = await createBooking(payload);
    setIsSubmitting(false);

    if (res.success) {
      const generatedToken = "MPT-RITUAL-" + Math.floor(10000 + Math.random() * 90000);
      setBookingResponse({
        success: true,
        message: res.message || "Booking request sent!",
        tokenId: generatedToken,
      });

      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (err) {
        // ignore fallback
      }
    } else {
      setBookingResponse({
        success: false,
        message: res.message || "Failed to submit booking request.",
      });
    }
  };

  const formatPrice = (priceStr: string) => {
    if (priceStr.includes("/")) {
      return priceStr
        .split("/")
        .map((p) => `₹${p.trim()}`)
        .join(" / ");
    }
    return `₹${priceStr}`;
  };

  return (
    <div className="min-h-screen bg-[#faf7f2] py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      {/* Banner / Header Title */}
      <div className="bg-gradient-to-r from-[#8b1e0f] via-[#a32816] to-[#72150a] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 opacity-10 pointer-events-none">
          <Sparkles className="w-96 h-96" />
        </div>
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/20 text-amber-200 border border-amber-300/30 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Mahavir Mandir Sacred Offerings</span>
          </div>
          <h1 className="font-serif-title text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Rituals & Offerings <span className="block text-amber-300 font-normal text-2xl sm:text-4xl mt-1">(पूजा, अनुष्ठान एवं सेवाएँ)</span>
          </h1>
          <p className="text-amber-100/90 text-sm sm:text-base leading-relaxed max-w-2xl font-light">
            Explore authentic Vedic rituals, archana, vehicle puja, and astrological consultation services performed by qualified priests at Shree Mahavir Mandir Patna.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white border border-amber-900/10 rounded-2xl p-4 sm:p-6 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
          {/* Search Bar */}
          <div className="relative flex-1">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search ritual by name or timing..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-amber-200 text-sm bg-amber-50/40 text-[#2a1e17] focus:outline-none focus:ring-2 focus:ring-[#8b1e0f]/30"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 hover:text-gray-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Booking Type Filter */}
          <div className="flex items-center gap-2 shrink-0">
            <Filter className="w-4 h-4 text-[#8b1e0f]" />
            <span className="text-xs font-bold uppercase tracking-wider text-gray-600">Booking:</span>
            <div className="inline-flex p-1 bg-amber-100/60 rounded-xl text-xs font-semibold">
              <button
                onClick={() => setSelectedBookingType("all")}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  selectedBookingType === "all"
                    ? "bg-[#8b1e0f] text-white shadow-sm"
                    : "text-[#2a1e17] hover:text-[#8b1e0f]"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setSelectedBookingType("online")}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  selectedBookingType === "online"
                    ? "bg-[#8b1e0f] text-white shadow-sm"
                    : "text-[#2a1e17] hover:text-[#8b1e0f]"
                }`}
              >
                Online Available
              </button>
              <button
                onClick={() => setSelectedBookingType("cash_counter")}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  selectedBookingType === "cash_counter"
                    ? "bg-[#8b1e0f] text-white shadow-sm"
                    : "text-[#2a1e17] hover:text-[#8b1e0f]"
                }`}
              >
                Cash Counter Only
              </button>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pt-2 border-t border-amber-900/10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? "bg-amber-500 text-gray-950 shadow-sm"
                  : "bg-amber-50/60 text-[#2a1e17] hover:bg-amber-100/80 border border-amber-200/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Loading Skeleton */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white border border-amber-900/10 rounded-2xl p-6 space-y-4 animate-pulse">
              <div className="h-4 bg-amber-100 rounded w-1/3"></div>
              <div className="h-6 bg-amber-200 rounded w-3/4"></div>
              <div className="h-8 bg-amber-100 rounded w-1/2"></div>
              <div className="h-10 bg-amber-200 rounded"></div>
            </div>
          ))}
        </div>
      ) : Object.keys(groupedRituals).length === 0 ? (
        /* Empty State */
        <div className="bg-white rounded-3xl border border-amber-900/10 p-12 text-center space-y-4 max-w-xl mx-auto shadow-sm">
          <Info className="w-12 h-12 text-amber-500 mx-auto" />
          <h3 className="font-serif-title text-xl font-bold text-[#2a1e17]">No rituals found</h3>
          <p className="text-sm text-gray-600">
            No rituals matched your search filter criteria. Try clearing search keywords or category filters.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSelectedBookingType("all");
              setSearchQuery("");
            }}
            className="px-6 py-2.5 rounded-xl bg-[#8b1e0f] text-white text-xs font-bold hover:bg-[#72150a] transition-colors"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        /* Category Groups */
        <div className="space-y-12">
          {Object.entries(groupedRituals).map(([category, items]) => (
            <div key={category} className="space-y-6">
              {/* Category Header */}
              <div className="flex items-center gap-3 border-b-2 border-[#8b1e0f]/20 pb-3">
                <div className="w-3 h-3 rounded-full bg-[#8b1e0f]"></div>
                <h2 className="font-serif-title text-2xl font-bold text-[#2a1e17]">
                  {category}
                </h2>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-100 text-[#8b1e0f]">
                  {items.length} {items.length === 1 ? "Item" : "Items"}
                </span>
              </div>

              {/* Ritual Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((ritual, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-amber-900/15 rounded-2xl p-6 flex flex-col justify-between hover:border-[#8b1e0f]/40 hover:shadow-md transition-all space-y-4 group relative overflow-hidden"
                  >
                    <div className="space-y-3">
                      {/* Booking Badge */}
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold tracking-wider uppercase text-amber-800/70">
                          {ritual.category}
                        </span>
                        {ritual.booking_type === "online" ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                            <CreditCard className="w-3 h-3" /> Online Booking
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
                            <Building2 className="w-3 h-3" /> Temple Counter Only
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="font-serif-title text-lg font-bold text-[#2a1e17] group-hover:text-[#8b1e0f] transition-colors leading-snug">
                        {ritual.name}
                      </h3>

                      {/* Price Note if available */}
                      {ritual.price_note && (
                        <div className="flex items-start gap-1.5 text-xs text-amber-900/80 bg-amber-50/80 p-2.5 rounded-xl border border-amber-200/50">
                          <Info className="w-3.5 h-3.5 text-[#8b1e0f] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{ritual.price_note}</span>
                        </div>
                      )}
                    </div>

                    {/* Price & Action Button Container */}
                    <div className="pt-4 border-t border-amber-900/10 flex items-center justify-between gap-3">
                      <div>
                        <span className="block text-[10px] uppercase font-bold text-gray-500 tracking-wider">Dakshina</span>
                        <span className="font-serif-title text-xl font-extrabold text-[#8b1e0f]">
                          {formatPrice(ritual.price)}
                        </span>
                      </div>

                      {ritual.booking_type === "online" ? (
                        <button
                          onClick={() => handleOpenBooking(ritual)}
                          className="px-4 py-2.5 rounded-xl bg-[#8b1e0f] hover:bg-[#72150a] text-white text-xs font-bold shadow-sm hover:shadow transition-all flex items-center gap-1.5"
                        >
                          <span>Book Online</span>
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      ) : (
                        <div className="text-right">
                          <span className="inline-block text-xs font-bold text-amber-800 bg-amber-50 px-3 py-1.5 rounded-xl border border-amber-200">
                            Available at temple cash counter only
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Booking Modal */}
      {selectedRitualForBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border-2 border-amber-300 relative overflow-hidden max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={handleCloseBooking}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-amber-100 text-[#2a1e17] flex items-center justify-center hover:bg-[#8b1e0f] hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {bookingResponse ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif-title text-2xl font-bold text-[#2a1e17]">
                  Booking Request Sent!
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {bookingResponse.message}
                </p>

                <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200 text-xs text-amber-950 space-y-2 text-left">
                  <p><strong>Ritual:</strong> {selectedRitualForBooking.name}</p>
                  <p><strong>Devotee:</strong> {devoteeName || "Devotee"}</p>
                  <p><strong>Phone:</strong> {phone}</p>
                  {bookingResponse.tokenId && (
                    <p><strong>Reference Token:</strong> <span className="font-bold text-[#8b1e0f]">{bookingResponse.tokenId}</span></p>
                  )}
                  <p className="text-[11px] text-gray-600 pt-1 border-t border-amber-200">
                    * Our temple desk will process your ritual request and confirm your time slot.
                  </p>
                </div>

                <button
                  onClick={handleCloseBooking}
                  className="w-full py-3 rounded-xl bg-[#8b1e0f] hover:bg-[#72150a] text-white font-bold text-sm shadow-md transition-colors"
                >
                  Done & Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitBooking} className="space-y-4">
                <div className="flex items-center gap-3 border-b border-amber-900/10 pb-3">
                  <div className="w-10 h-10 rounded-full bg-amber-100 text-[#8b1e0f] flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif-title text-xl font-bold text-[#2a1e17]">
                      Online Ritual Booking
                    </h3>
                    <p className="text-xs text-amber-900/70 font-medium">
                      {selectedRitualForBooking.category}
                    </p>
                  </div>
                </div>

                {/* Ritual Summary Card */}
                <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200/80 space-y-1">
                  <h4 className="font-serif-title font-bold text-sm text-[#2a1e17]">
                    {selectedRitualForBooking.name}
                  </h4>
                  {selectedRitualForBooking.price_note && (
                    <p className="text-xs text-gray-600 italic">
                      {selectedRitualForBooking.price_note}
                    </p>
                  )}
                  <div className="pt-2 flex items-center justify-between text-xs font-bold text-[#8b1e0f]">
                    <span>Dakshina / Amount:</span>
                    <span className="text-lg font-serif-title font-extrabold">
                      {formatPrice(selectedRitualForBooking.price)}
                    </span>
                  </div>
                </div>

                {/* Devotee Info Form */}
                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wide block mb-1">
                      Devotee Full Name (यजमान का नाम) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar Sharma"
                      value={devoteeName}
                      onChange={(e) => setDevoteeName(e.target.value)}
                      className="w-full p-3 rounded-xl border border-amber-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#8b1e0f]/30"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-wide block mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="10-digit mobile"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full p-3 rounded-xl border border-amber-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#8b1e0f]/30"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-wide block mb-1">
                        Gotra (गोत्र)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Kashyap"
                        value={gotra}
                        onChange={(e) => setGotra(e.target.value)}
                        className="w-full p-3 rounded-xl border border-amber-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#8b1e0f]/30"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-wide block mb-1">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full p-3 rounded-xl border border-amber-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#8b1e0f]/30"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-wide block mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="email@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 rounded-xl border border-amber-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#8b1e0f]/30"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wide block mb-1">
                      Special Requests / Notes
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Any specific instructions or sankalpa details..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full p-3 rounded-xl border border-amber-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#8b1e0f]/30"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-[#8b1e0f] hover:bg-[#72150a] text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{isSubmitting ? "Submitting..." : "Send Booking Request"}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
