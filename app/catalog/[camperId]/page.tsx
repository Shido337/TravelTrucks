import Header from "@/components/Header/Header";
import CamperDetailPage from "@/components/CamperDetailPage/CamperDetailPage";
import type { Metadata } from "next";
import { getCamperById } from "@/lib/api/campersApi";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { camperId } = await params;
  const camper = await getCamperById(camperId);
  return {
    title: `${camper.name} — TravelTrucks`,
    description: camper.description,
  };
}

interface Props {
  params: Promise<{ camperId: string }>;
}

export default async function CamperPage({ params }: Props) {
  const { camperId } = await params;

  return (
    <>
      <Header />
      <CamperDetailPage camperId={camperId} />
    </>
  );
}
