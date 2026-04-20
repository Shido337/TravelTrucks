"use client";

import { useQuery } from "@tanstack/react-query";
import { FaStar, FaRegStar } from "react-icons/fa";
import { getCamperReviews } from "@/lib/api/campersApi";
import Loader from "@/components/Loader/Loader";
import styles from "./CamperReviews.module.css";

interface Props {
  camperId: string;
}

export default function CamperReviews({ camperId }: Props) {
  const { data: reviews, isLoading } = useQuery({
    queryKey: ["reviews", camperId],
    queryFn: () => getCamperReviews(camperId),
  });

  if (isLoading) return <Loader />;
  if (!reviews?.length) return <p>No reviews yet.</p>;

  return (
    <ul className={styles.list}>
      {reviews.map((review) => (
        <li key={review.id} className={styles.item}>
          <div className={styles.avatar}>
            {review.reviewer_name.charAt(0).toUpperCase()}
          </div>

          <div className={styles.body}>
            <p className={styles.name}>{review.reviewer_name}</p>

            <div className={styles.stars}>
              {Array.from({ length: 5 }, (_, i) =>
                i < review.reviewer_rating ? (
                  <FaStar key={i} color="#ffc531" />
                ) : (
                  <FaRegStar key={i} color="#ffc531" />
                ),
              )}
            </div>

            <p className={styles.comment}>{review.comment}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
