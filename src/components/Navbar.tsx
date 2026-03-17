"use client";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <a href="#" className={styles.logo}>
          🚀 LaunchPad
        </a>
        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
        <ul className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
          <li><a href="#features" onClick={() => setMenuOpen(false)}>Features</a></li>
          <li><a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a></li>
          <li><a href="#newsletter" onClick={() => setMenuOpen(false)}>Newsletter</a></li>
          <li>
            <a href="#newsletter" className={styles.ctaLink} onClick={() => setMenuOpen(false)}>
              Get Started
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
