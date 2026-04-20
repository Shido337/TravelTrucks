"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { createBooking } from "@/lib/api/bookingApi";
import styles from "./BookingForm.module.css";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
});

type FormValues = z.infer<typeof schema>;

interface Props {
  camperId: string;
}

export default function BookingForm({ camperId }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(values: FormValues) {
    try {
      await createBooking(camperId, values);
      toast.success("Booking submitted successfully!");
      reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <h3 className={styles.title}>Book your campervan now</h3>
      <p className={styles.subtitle}>
        Stay connected! We are always ready to help you.
      </p>

      <input
        {...register("name")}
        className={styles.input}
        placeholder="Name*"
      />
      {errors.name && <p className={styles.error}>{errors.name.message}</p>}

      <input
        {...register("email")}
        className={styles.input}
        placeholder="Email*"
        type="email"
      />
      {errors.email && <p className={styles.error}>{errors.email.message}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className={styles.submitBtn}
      >
        {isSubmitting ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
