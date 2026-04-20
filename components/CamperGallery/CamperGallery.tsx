"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { CamperImage } from "@/types/camper";
import styles from "./CamperGallery.module.css";

interface Props {
  images: CamperImage[];
}

export default function CamperGallery({ images }: Props) {
  const main = images[0];
  const thumbs = images.slice(1, 5);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const total = images.length;

  const openAt = (index: number) => {
    if (total === 0) return;
    setActiveIndex(index);
    setIsOpen(true);
  };

  const close = () => setIsOpen(false);

  const prev = () => {
    if (total <= 1) return;
    setActiveIndex((current) => (current === 0 ? total - 1 : current - 1));
  };

  const next = () => {
    if (total <= 1) return;
    setActiveIndex((current) => (current === total - 1 ? 0 : current + 1));
  };

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        return;
      }

      if (event.key === "ArrowLeft" && total > 1) {
        setActiveIndex((current) => (current === 0 ? total - 1 : current - 1));
      }

      if (event.key === "ArrowRight" && total > 1) {
        setActiveIndex((current) => (current === total - 1 ? 0 : current + 1));
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, total]);

  return (
    <div className={styles.gallery}>
      {main && (
        <button
          type="button"
          className={styles.mainWrap}
          onClick={() => openAt(0)}
          aria-label="Open camper gallery"
        >
          <Image
            src={main.original}
            alt="Camper main photo"
            width={608}
            height={461}
            className={styles.mainImage}
            priority
          />
        </button>
      )}
      <div
        className={styles.thumbsRow}
        style={{
          gridTemplateColumns: `repeat(${Math.max(1, Math.min(4, thumbs.length))}, minmax(0, 1fr))`,
        }}
      >
        {thumbs.map((img, i) => (
          <button
            key={img.id}
            type="button"
            className={styles.thumbWrap}
            onClick={() => openAt(i + 1)}
            aria-label={`Open camper photo ${i + 2}`}
          >
            <Image
              src={img.thumb}
              alt={`Camper photo ${i + 1}`}
              width={140}
              height={96}
              className={styles.thumbImage}
            />
          </button>
        ))}
      </div>

      {isOpen && total > 0 && (
        <div className={styles.lightbox} role="dialog" aria-modal="true" onClick={close}>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={(event) => {
              event.stopPropagation();
              close();
            }}
            aria-label="Close gallery"
          >
            ×
          </button>

          {total > 1 && (
            <>
              <button
                type="button"
                className={`${styles.navBtn} ${styles.prevBtn}`}
                onClick={(event) => {
                  event.stopPropagation();
                  prev();
                }}
                aria-label="Previous photo"
              >
                ‹
              </button>
              <button
                type="button"
                className={`${styles.navBtn} ${styles.nextBtn}`}
                onClick={(event) => {
                  event.stopPropagation();
                  next();
                }}
                aria-label="Next photo"
              >
                ›
              </button>
            </>
          )}

          <div className={styles.lightboxContent} onClick={(event) => event.stopPropagation()}>
            <Image
              src={images[activeIndex].original}
              alt={`Camper photo ${activeIndex + 1}`}
              width={1400}
              height={900}
              className={styles.lightboxImage}
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
}
