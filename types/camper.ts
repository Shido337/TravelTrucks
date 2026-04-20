export interface CamperImage {
  id: string;
  camperId: string;
  thumb: string;
  original: string;
  order: number;
}

export interface CamperListItem {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  form: "alcove" | "panel_van" | "integrated" | "semi_integrated";
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: "manual" | "automatic";
  engine: "diesel" | "petrol" | "hybrid" | "electric";
  amenities: string[];
  createdAt: string;
  updatedAt: string;
  coverImage: string;
  totalReviews: number;
}

export interface CamperDetails extends CamperListItem {
  gallery: CamperImage[];
}

export interface CampersResponse {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  campers: CamperListItem[];
}
export interface FiltersResponse {
  forms: string[];
  transmissions: string[];
  engines: string[];
}
export interface CampersParams {
  page?: number;
  limit?: number;
  location?: string;
  form?: string;
  transmission?: string;
  engine?: string;
  AC?: boolean;
  kitchen?: boolean;
  TV?: boolean;
  bathroom?: boolean;
}
