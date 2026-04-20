import Header from "@/components/Header/Header";
import CatalogPage from "@/components/CatalogPage/CatalogPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catalog — TravelTrucks",
  description: "Browse available camper vans",
};

export default function Catalog() {
  return (
    <>
      <Header />
      <CatalogPage />
    </>
  );
}
