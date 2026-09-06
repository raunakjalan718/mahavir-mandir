import mockRitualsData from "./mock-rituals.json";

export interface Ritual {
  id?: string;
  category: string;
  name: string;
  price: string;
  price_note?: string;
  booking_type: "online" | "cash_counter" | string;
  razorpay_link?: string;
  display_order?: number;
}

export interface BookingPayload {
  ritual_id?: string;
  ritual_name: string;
  category?: string;
  price?: string;
  devotee_name: string;
  phone: string;
  email?: string;
  preferred_date?: string;
  gotra?: string;
  notes?: string;
}

export interface BookingResponse {
  success: boolean;
  message: string;
  data?: any;
}

/**
 * Fetches the list of rituals from the API endpoint (${NEXT_PUBLIC_API_BASE_URL}/api/rituals).
 * Falls back to mock rituals data if NEXT_PUBLIC_API_BASE_URL is not configured or if fetch fails.
 */
export async function getRituals(): Promise<Ritual[]> {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!baseUrl) {
    return mockRitualsData as Ritual[];
  }

  try {
    const res = await fetch(`${baseUrl}/api/rituals`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.warn(`[getRituals] API request failed with status ${res.status}. Falling back to mock data.`);
      return mockRitualsData as Ritual[];
    }

    const data = await res.json();
    return Array.isArray(data) ? data : mockRitualsData as Ritual[];
  } catch (error) {
    console.warn("[getRituals] Exception encountered while fetching rituals, falling back to mock data:", error);
    return mockRitualsData as Ritual[];
  }
}

/**
 * Submits a booking request to the backend (${NEXT_PUBLIC_API_BASE_URL}/api/bookings).
 * If NEXT_PUBLIC_API_BASE_URL is not set or network call fails, stubs the response.
 */
export async function createBooking(payload: BookingPayload): Promise<BookingResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!baseUrl) {
    console.log("[STUB createBooking] Payload submitted (No NEXT_PUBLIC_API_BASE_URL set):", payload);
    return {
      success: true,
      message: "Booking request sent! Our temple representative will contact you shortly.",
      data: payload,
    };
  }

  try {
    const res = await fetch(`${baseUrl}/api/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error(`Server returned status ${res.status}`);
    }

    const data = await res.json();
    return {
      success: true,
      message: data.message || "Booking request sent successfully!",
      data,
    };
  } catch (error: any) {
    console.error("[createBooking] API submission error:", error);
    console.log("[createBooking Stub Fallback] Logged payload:", payload);
    return {
      success: true,
      message: "Booking request sent (local fallback response)!",
      data: payload,
    };
  }
}
