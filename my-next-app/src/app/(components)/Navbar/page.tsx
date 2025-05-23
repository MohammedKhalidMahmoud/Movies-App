
"use client";

import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className="bg-lightblue flex justify-content-space-between h-50 items-center fixed w-full z-10 px-20">
      <div className={styles.logo}>
        <Link href="/">MovieDB</Link>
      </div>
      <ul className="flex">
        <li className="decoration-none mr-10 font-20 text-white bold"><Link href="/">Home</Link></li>
        <li className="decoration-none mr-10 font-20 text-white bold"><Link href="/Favorites">Favorites</Link></li>
        <li className="decoration-none mr-10 font-20 text-white bold"><Link href="/search">Search</Link></li>
      </ul>
    </nav>
  );
}