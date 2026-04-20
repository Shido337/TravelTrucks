import { apiFetch } from "./api";
import type {
  CampersResponse,
  CampersParams,
  CamperDetails,
  FiltersResponse,
} from "@/types/camper";
import type { Review } from "@/types/review";

export async function getCampers(
  params: CampersParams,
): Promise<CampersResponse> {
  const query = new URLSearchParams();
  if (params.page) query.set("page", String(params.page));
  if (params.limit) query.set("limit", String(params.limit));
  if (params.location) query.set("location", params.location);
  if (params.form) query.set("form", params.form);
  if (params.transmission) query.set("transmission", params.transmission);
  if (params.engine) query.set("engine", params.engine);
  if (params.AC) query.set("AC", "true");
  if (params.kitchen) query.set("kitchen", "true");
  if (params.TV) query.set("TV", "true");
  if (params.bathroom) query.set("bathroom", "true");

  return apiFetch<CampersResponse>(`/campers?${query.toString()}`);
}

export async function getCamperFilters(): Promise<FiltersResponse> {
  return apiFetch<FiltersResponse>("/campers/filters");
}
export async function getCamperById(id: string): Promise<CamperDetails> {
  return apiFetch<CamperDetails>(`/campers/${id}`);
}

export async function getCamperReviews(id: string): Promise<Review[]> {
  return apiFetch<Review[]>(`/campers/${id}/reviews`);
}
