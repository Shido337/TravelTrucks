export interface BookingRequest {
  name: string;
  email: string;
  bookingDate?: string;
  comment?: string;
}
export interface BookingResponse {
  id: string;
  camperId: string;
  name: string;
  email: string;
  bookingDate: string;
  comment?: string;
  createdAt: string;
}
