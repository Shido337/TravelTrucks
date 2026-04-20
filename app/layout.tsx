import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "TravelTrucks — Camper Rental",
  description: "Find and rent your perfect camper van across Ukraine",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <TanStackProvider>{children}</TanStackProvider>
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
