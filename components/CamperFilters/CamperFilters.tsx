"use client";

import { useState } from "react";
import { FaTimes, FaMapMarkerAlt } from "react-icons/fa";
import type { CampersParams } from "@/types/camper";
import styles from "./CamperFilters.module.css";

type Filters = Omit<CampersParams, "page" | "limit">;

interface Props {
  onSearch: (filters: Filters) => void;
}

const FORM_OPTIONS = [
  { value: "alcove", label: "Alcove" },
  { value: "panel_van", label: "Panel Van" },
  { value: "integrated", label: "Integrated" },
  { value: "semi_integrated", label: "Semi Integrated" },
];

const ENGINE_OPTIONS = [
  { value: "diesel", label: "Diesel" },
  { value: "petrol", label: "Petrol" },
  { value: "hybrid", label: "Hybrid" },
  { value: "electric", label: "Electric" },
];

const TRANSMISSION_OPTIONS = [
  { value: "automatic", label: "Automatic" },
  { value: "manual", label: "Manual" },
];

export default function CamperFilters({ onSearch }: Props) {
  const [location, setLocation] = useState("");
  const [form, setForm] = useState("");
  const [engine, setEngine] = useState("");
  const [transmission, setTransmission] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSearch({
      ...(location.trim() && { location: location.trim() }),
      ...(form && { form }),
      ...(engine && { engine }),
      ...(transmission && { transmission }),
    });
  }

  function handleClear() {
    setLocation("");
    setForm("");
    setEngine("");
    setTransmission("");
    onSearch({});
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>Location</label>
      <div className={styles.inputWrap}>
        <FaMapMarkerAlt className={styles.inputIcon} />
        <input
          className={styles.input}
          type="text"
          placeholder="City"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <p className={styles.groupTitle}>Filters</p>

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Camper form</legend>
        {FORM_OPTIONS.map(({ value, label }) => (
          <label key={value} className={styles.radioLabel}>
            <input
              type="radio"
              name="form"
              value={value}
              checked={form === value}
              onChange={() => setForm(form === value ? "" : value)}
              className={styles.radio}
            />
            {label}
          </label>
        ))}
      </fieldset>

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Engine</legend>
        {ENGINE_OPTIONS.map(({ value, label }) => (
          <label key={value} className={styles.radioLabel}>
            <input
              type="radio"
              name="engine"
              value={value}
              checked={engine === value}
              onChange={() => setEngine(engine === value ? "" : value)}
              className={styles.radio}
            />
            {label}
          </label>
        ))}
      </fieldset>

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Transmission</legend>
        {TRANSMISSION_OPTIONS.map(({ value, label }) => (
          <label key={value} className={styles.radioLabel}>
            <input
              type="radio"
              name="transmission"
              value={value}
              checked={transmission === value}
              onChange={() =>
                setTransmission(transmission === value ? "" : value)
              }
              className={styles.radio}
            />
            {label}
          </label>
        ))}
      </fieldset>

      <div className={styles.actions}>
        <button type="submit" className={styles.searchBtn}>
          Search
        </button>
        <button type="button" className={styles.clearBtn} onClick={handleClear}>
          <FaTimes size={12} />
          Clear filters
        </button>
      </div>
    </form>
  );
}
