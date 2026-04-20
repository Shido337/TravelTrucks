"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo}>
          Travel<span>Trucks</span>
        </Link>

        <nav className={styles.nav}>
          <Link
            href="/"
            className={
              pathname === "/"
                ? `${styles.navLink} ${styles.navLinkActive}`
                : styles.navLink
            }
          >
            Home
          </Link>
          <Link
            href="/catalog"
            className={
              pathname?.startsWith("/catalog")
                ? `${styles.navLink} ${styles.navLinkActive}`
                : styles.navLink
            }
          >
            Catalog
          </Link>
        </nav>
      </div>
    </header>
  );
}
