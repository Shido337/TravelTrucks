"use client";

import { useQuery } from "@tanstack/react-query";
import { getCamperById } from "@/lib/api/campersApi";
import CamperGallery from "@/components/CamperGallery/CamperGallery";
import CamperReviews from "@/components/CamperReviews/CamperReviews";
import BookingForm from "@/components/BookingForm/BookingForm";
import Loader from "@/components/Loader/Loader";
import {
  FaStar,
  FaMapMarkerAlt,
  FaSnowflake,
  FaUtensils,
  FaTv,
  FaBroadcastTower,
  FaThermometerHalf,
  FaTint,
  FaGasPump,
  FaCog,
  FaBus,
  FaBolt,
  FaLeaf,
  FaBath,
  FaFire,
} from "react-icons/fa";
import styles from "./CamperDetailPage.module.css";

interface Props {
  camperId: string;
}

const FORM_LABELS: Record<string, string> = {
  alcove: "Alcove",
  panel_van: "Van",
  integrated: "Fully Integrated",
  semi_integrated: "Semi-Integrated",
};

const CHIP_LABELS: Record<string, string> = {
  ac: "AC",
  tv: "TV",
};

function chipLabel(key: string): string {
  return CHIP_LABELS[key] ?? key.charAt(0).toUpperCase() + key.slice(1);
}

const AMENITY_ICONS: Record<string, React.ElementType> = {
  ac: FaSnowflake,
  kitchen: FaUtensils,
  tv: FaTv,
  radio: FaBroadcastTower,
  refrigerator: FaThermometerHalf,
  water: FaTint,
  bathroom: FaBath,
  gas: FaFire,
  petrol: FaGasPump,
  diesel: FaGasPump,
  hybrid: FaLeaf,
  electric: FaBolt,
  automatic: FaCog,
  manual: FaCog,
  alcove: FaBus,
  panel_van: FaBus,
  integrated: FaBus,
  semi_integrated: FaBus,
};

export default function CamperDetailPage({ camperId }: Props) {
  const {
    data: camper,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["camper", camperId],
    queryFn: () => getCamperById(camperId),
  });

  if (isLoading) return <Loader />;
  if (isError || !camper) return <p>Camper not found.</p>;

  const allChips = [
    { key: "engine", value: camper.engine },
    { key: "transmission", value: camper.transmission },
    { key: "form", value: camper.form },
    ...camper.amenities.map((a) => ({ key: a, value: a })),
  ];

  return (
    <div className={styles.page}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.mainSection}>
          <div className={styles.galleryCol}>
            <CamperGallery images={camper.gallery} />
          </div>

          <div className={styles.infoCol}>
            <div className={styles.summaryCard}>
              <h1 className={styles.name}>{camper.name}</h1>
              <div className={styles.metaRow}>
                <span className={styles.rating}>
                  <FaStar color="#ffc531" />
                  {camper.rating} ({camper.totalReviews} Reviews)
                </span>
                <span className={styles.location}>
                  <FaMapMarkerAlt />
                  {camper.location}
                </span>
              </div>
              <p className={styles.price}>€{camper.price}</p>
              <p className={styles.description}>{camper.description}</p>
            </div>

            <div className={styles.vehicleDetails}>
              <h2 className={styles.vehicleTitle}>Vehicle details</h2>

              <div className={styles.amenities}>
                {allChips.map(({ key, value }, index) => {
                  const Icon = AMENITY_ICONS[value];
                  return (
                    <span
                      key={`${key}-${index}`}
                      className={styles.amenityChip}
                    >
                      {Icon && <Icon className={styles.chipIcon} />}
                      {key === "form"
                        ? (FORM_LABELS[value] ?? chipLabel(value))
                        : chipLabel(value)}
                    </span>
                  );
                })}
              </div>

              <hr className={styles.divider} />

              <table className={styles.specTable}>
                <tbody>
                  <tr>
                    <td>Form</td>
                    <td>{FORM_LABELS[camper.form] ?? camper.form}</td>
                  </tr>
                  <tr>
                    <td>Length</td>
                    <td>{camper.length}</td>
                  </tr>
                  <tr>
                    <td>Width</td>
                    <td>{camper.width}</td>
                  </tr>
                  <tr>
                    <td>Height</td>
                    <td>{camper.height}</td>
                  </tr>
                  <tr>
                    <td>Tank</td>
                    <td>{camper.tank}</td>
                  </tr>
                  <tr>
                    <td>Consumption</td>
                    <td>{camper.consumption}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        
        <div className={styles.bottomSection}>
          <div className={styles.reviewsCol}>
            <h2 className={styles.reviewsTitle}>Reviews</h2>
            <CamperReviews camperId={camperId} />
          </div>
          <aside className={styles.bookingCol}>
            <BookingForm camperId={camperId} />
          </aside>
        </div>
      </div>
    </div>
  );
}
