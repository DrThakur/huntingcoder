import React from "react";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

const Navbar = () => {
  return (
    <nav className={styles.mainnav}>
      <ul>
        <li className={styles.navItem}>
          <Link href="/">Home</Link>
        </li>

        <li className={styles.navItem}>
          <Link href="/about">About</Link>
        </li>

        <li className={styles.navItem}>
          <Link href="/blog">Blog </Link>
        </li>

        <li className={styles.navItem}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
