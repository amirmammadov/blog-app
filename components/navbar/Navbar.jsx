import React from "react";

import Link from "next/link";
import Image from "next/image";

import styles from "./navbar.module.css";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>turkblog</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
