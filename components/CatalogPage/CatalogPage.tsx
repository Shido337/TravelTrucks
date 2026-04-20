"use client";

import { useState } from "react";
import CamperFilters from "@/components/CamperFilters/CamperFilters";
import CamperList from "@/components/CamperList/CamperList";
import type { CampersParams } from "@/types/camper";
import styles from "./CatalogPage.module.css";

type Filters = Omit<CampersParams, "page" | "limit">;

export default function CatalogPage() {
  const [filters, setFilters] = useState<Filters>({});

  return (
    <div className={styles.page}>
      <div className={`container ${styles.inner}`}>
        <aside className={styles.sidebar}>
          <CamperFilters onSearch={setFilters} />
        </aside>
        <main className={styles.main}>
          <CamperList filters={filters} />
        </main>
      </div>
    </div>
  );
}
