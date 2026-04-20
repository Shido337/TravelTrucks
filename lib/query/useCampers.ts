"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { getCampers } from "@/lib/api/campersApi";
import type { CampersParams } from "@/types/camper";

const LIMIT = 4;

export function useCampers(filters: Omit<CampersParams, "page" | "limit">) {
  return useInfiniteQuery({
    queryKey: ["campers", filters],
    queryFn: ({ pageParam }) =>
      getCampers({
        ...filters,
        page: pageParam as number,
        limit: LIMIT,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const { page, totalPages } = lastPage;
      return page < totalPages ? page + 1 : undefined;
    },
  });
}
