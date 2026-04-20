"use client";

import { useCampers } from "@/lib/query/useCampers";
import CamperCard from "@/components/CamperCard/CamperCard";
import Loader from "@/components/Loader/Loader";
import { useFavorites } from "@/lib/useFavorites";
import type { CampersParams } from "@/types/camper";
import styles from "./CamperList.module.css";

interface Props {
  filters: Omit<CampersParams, "page" | "limit">;
}

export default function CamperList({ filters }: Props) {
  const { toggleFavorite, isFavorite } = useFavorites();

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useCampers(filters);

  if (isLoading) return <Loader />;
  if (isError) return <p className={styles.message}>Something went wrong.</p>;

  const campers = data?.pages.flatMap((page) => page.campers) ?? [];

  return (
    <div>
      <ul className={styles.list}>
        {campers.map((camper) => (
          <li key={camper.id}>
            <CamperCard
              camper={camper}
              isFavorite={isFavorite(camper.id)}
              onToggleFavorite={toggleFavorite}
            />
          </li>
        ))}
      </ul>

      {hasNextPage && (
        <div className={styles.more}>
          <button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className={styles.loadMoreBtn}
          >
            {isFetchingNextPage ? "Loading..." : "Load more"}
          </button>
        </div>
      )}
    </div>
  );
}
