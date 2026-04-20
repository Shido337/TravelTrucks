import Image from "next/image";
import type { CamperImage } from "@/types/camper";
import styles from "./CamperGallery.module.css";

interface Props {
  images: CamperImage[];
}

export default function CamperGallery({ images }: Props) {
  const main = images[0];
  const thumbs = images.slice(1, 5);

  return (
    <div className={styles.gallery}>
      {main && (
        <div className={styles.mainWrap}>
          <Image
            src={main.original}
            alt="Camper main photo"
            width={608}
            height={461}
            className={styles.mainImage}
            priority
          />
        </div>
      )}
      <div
        className={styles.thumbsRow}
        style={{
          gridTemplateColumns: `repeat(${Math.max(1, Math.min(4, thumbs.length))}, minmax(0, 1fr))`,
        }}
      >
        {thumbs.map((img, i) => (
          <div key={img.id} className={styles.thumbWrap}>
            <Image
              src={img.thumb}
              alt={`Camper photo ${i + 1}`}
              width={140}
              height={96}
              className={styles.thumbImage}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
