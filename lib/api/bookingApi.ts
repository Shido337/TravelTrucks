import { apiFetch } from "./api";
import type { BookingRequest, BookingResponse } from "@/types/booking";

export async function createBooking(
  camperId: string,
  data: BookingRequest,
): Promise<BookingResponse> {
  return apiFetch<BookingResponse>(`/campers/${camperId}/booking-requests`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}
