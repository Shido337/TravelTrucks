import Link from "next/link";
import Image from "next/image";
import {
  FaMapMarkerAlt,
  FaStar,
  FaGasPump,
  FaCog,
  FaBus,
  FaHeart,
  FaRegHeart,
} from "react-icons/fa";
import type { CamperListItem } from "@/types/camper";
import styles from "./CamperCard.module.css";

interface Props {
  camper: CamperListItem;
  isFavorite?: boolean;
  onToggleFavorite?: (id: string) => void;
}

const FORM_LABELS: Record<string, string> = {
  alcove: "Alcove",
  panel_van: "Van",
  integrated: "Fully Integrated",
  semi_integrated: "Semi-Integrated",
};

export default function CamperCard({
  camper,
  isFavorite = false,
  onToggleFavorite,
}: Props) {
  return (
    <article className={styles.card}>
      <Image
        src={camper.coverImage}
        alt={camper.name}
        width={292}
        height={310}
        className={styles.image}
      />

      <div className={styles.body}>
        <div className={styles.headerBlock}>
          <div className={styles.titleRow}>
            <h2 className={styles.name}>{camper.name}</h2>
            <div className={styles.priceRow}>
              <span className={styles.price}>€{camper.price}</span>
              <button
                className={styles.heartBtn}
                onClick={() => onToggleFavorite?.(camper.id)}
                aria-label={
                  isFavorite ? "Remove from favorites" : "Add to favorites"
                }
                type="button"
              >
                {isFavorite ? (
                  <FaHeart className={styles.heartActive} />
                ) : (
                  <FaRegHeart className={styles.heartInactive} />
                )}
              </button>
            </div>
          </div>

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
        </div>

        <p className={styles.description}>{camper.description}</p>

        <div className={styles.chips}>
          <span className={styles.chip}>
            <FaGasPump className={styles.chipIcon} />
            {camper.engine.charAt(0).toUpperCase() + camper.engine.slice(1)}
          </span>
          <span className={styles.chip}>
            <FaCog className={styles.chipIcon} />
            {camper.transmission.charAt(0).toUpperCase() +
              camper.transmission.slice(1)}
          </span>
          <span className={styles.chip}>
            <FaBus className={styles.chipIcon} />
            {FORM_LABELS[camper.form] ?? camper.form}
          </span>
        </div>

        <Link href={`/catalog/${camper.id}`} className={styles.showMoreBtn}>
          Show more
        </Link>
      </div>
    </article>
  );
}
